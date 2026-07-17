#!/bin/bash
set -e

PROJECT_DIR="/Users/gregritz/flying-davidson"
OUTPUT="/Users/gregritz/flying-davidson-code.zip"

echo "Creating code-only ZIP..."

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
-x "*/public/images/*" \
-x "*/public/videos/*" \
-x "*/Thumbs.db" \
-x "*/._*" \
-x "*/.idea/*" \
-x "*/.vscode/*" \
-x "*/flying-davidson-code.zip" \
-x "*/flying-davidson-source.zip"

echo ""
echo "Code package created:"
ls -lh "$OUTPUT"
