#!/bin/bash

set -e

PROJECT_DIR="$1"

if [ -z "$PROJECT_DIR" ]; then
  echo "Usage:"
  echo "./scripts/optimize-flying-davidson-project.sh public/images/projects/project-name"
  exit 1
fi

if [ ! -d "$PROJECT_DIR" ]; then
  echo "Project folder not found: $PROJECT_DIR"
  exit 1
fi

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "FFmpeg is not installed."
  echo "Run: brew install ffmpeg"
  exit 1
fi

PROJECT_DIR="${PROJECT_DIR%/}"
OUTPUT_DIR="${PROJECT_DIR}-optimized"

echo
echo "Flying Davidson Media Optimiser"
echo "Source: $PROJECT_DIR"
echo "Output: $OUTPUT_DIR"
echo

rm -rf "$OUTPUT_DIR"
mkdir -p "$OUTPUT_DIR"

find "$PROJECT_DIR" -name ".DS_Store" -delete

optimize_jpg() {
  input="$1"
  output="$2"
  max_dimension="$3"
  quality="$4"

  mkdir -p "$(dirname "$output")"

  echo "Image: $input"

  sips \
    -Z "$max_dimension" \
    -s format jpeg \
    -s formatOptions "$quality" \
    "$input" \
    --out "$output" \
    >/dev/null
}

optimize_mp4() {
  input="$1"
  output="$2"

  mkdir -p "$(dirname "$output")"

  echo "Video: $input"

  ffmpeg \
    -hide_banner \
    -loglevel error \
    -stats \
    -y \
    -i "$input" \
    -map_metadata -1 \
    -vf "scale='min(1080,iw)':-2" \
    -c:v libx264 \
    -preset medium \
    -crf 25 \
    -pix_fmt yuv420p \
    -c:a aac \
    -b:a 128k \
    -movflags +faststart \
    "$output"
}

while IFS= read -r -d '' file; do
  relative="${file#$PROJECT_DIR/}"
  filename="$(basename "$relative")"
  directory="$(dirname "$relative")"
  extension="${filename##*.}"
  extension_lower="$(echo "$extension" | tr '[:upper:]' '[:lower:]')"

  case "$extension_lower" in
    jpg)
      if [ "$relative" = "hero.jpg" ]; then
        optimize_jpg \
          "$file" \
          "$OUTPUT_DIR/hero.jpg" \
          2400 \
          82
      else
        optimize_jpg \
          "$file" \
          "$OUTPUT_DIR/$relative" \
          2000 \
          80
      fi
      ;;

    mp4)
      optimize_mp4 \
        "$file" \
        "$OUTPUT_DIR/$relative"
      ;;

    *)
      mkdir -p "$OUTPUT_DIR/$directory"
      cp "$file" "$OUTPUT_DIR/$relative"
      ;;
  esac
done < <(find "$PROJECT_DIR" -type f -print0)

find "$OUTPUT_DIR" -name ".DS_Store" -delete

echo
echo "Optimisation complete."
echo

echo "Original project size:"
du -sh "$PROJECT_DIR"

echo
echo "Optimised project size:"
du -sh "$OUTPUT_DIR"

echo
echo "Optimised images:"
find "$OUTPUT_DIR" -type f -iname "*.jpg" -exec du -h {} + | sort -h

echo
echo "Optimised videos:"
find "$OUTPUT_DIR" -type f -iname "*.mp4" -exec du -h {} + | sort -h

echo
echo "Your original folder has not been changed."
echo "Review the optimised folder before replacing the original."
