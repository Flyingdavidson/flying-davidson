#!/bin/bash

INPUT="public/videos/sea-fury/classic"
OUTPUT="public/videos/sea-fury/classic/web"

mkdir -p "$OUTPUT"

for f in "$INPUT"/*.{MOV,mov,MP4,mp4,M4V,m4v}; do
    [ -e "$f" ] || continue

    name=$(basename "$f")
    base="${name%.*}"

    echo "Processing $name..."

    ffmpeg -y -i "$f" \
    -map 0:v:0 -map 0:a:0 \
    -vf "scale='if(gt(iw,ih),1280,-2)':'if(gt(iw,ih),-2,1080)'" \
    -c:v libx264 \
    -preset medium \
    -crf 26 \
    -pix_fmt yuv420p \
    -movflags +faststart \
    -c:a aac \
    -b:a 128k \
    "$OUTPUT/$base.mp4"

    ffmpeg -y \
    -ss 3 \
    -i "$OUTPUT/$base.mp4" \
    -frames:v 1 \
    -update 1 \
    "$OUTPUT/$base-poster.jpg"

done

echo "Done."
