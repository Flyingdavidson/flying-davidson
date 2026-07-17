#!/bin/bash

cd "/Users/gregritz/flying-davidson"

echo "Largest website media files"
echo "==========================="
echo ""

find public \
-type f \
\( -iname "*.mp4" -o \
   -iname "*.mov" -o \
   -iname "*.jpg" -o \
   -iname "*.jpeg" -o \
   -iname "*.png" -o \
   -iname "*.webp" -o \
   -iname "*.heic" \) \
-exec du -h {} + 2>/dev/null |
sort -hr |
head -40

echo ""
echo "Total public folder size:"
du -sh public
