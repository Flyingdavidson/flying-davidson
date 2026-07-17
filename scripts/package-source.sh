#!/bin/bash
set -e

PROJECT_DIR="/Users/gregritz/flying-davidson"
OUTPUT="/Users/gregritz/flying-davidson-source.zip"

echo "Creating full website source ZIP..."
echo "This includes website-ready images and videos."

rm -f "$OUTPUT"
cd "/Users/gregritz"

zip -rq "$OUTPUT" "flying-davidson" \
-x "*/.git/*" \
-x "*/.next/*" \
-x "*/node_modules/*" \
-x "*/.vercel/*" \
-x "*/.env" \
-x "*/.env.*" \
-x "*/.DS_Store" \
-x "*/source-media/*" \
-x "*/originals/*" \
-x "*/Thumbs.db" \
-x "*/._*" \
-x "*/.idea/*" \
-x "*/.vscode/*" \
-x "*/flying-davidson-code.zip" \
-x "*/flying-davidson-source.zip"

echo ""
echo "Full source package created:"
ls -lh "$OUTPUT"
