#!/bin/bash
set -e

cd "/Users/gregritz/flying-davidson"

echo "Current project size:"
du -sh .

echo ""
echo "Removing safe generated files..."
rm -rf .next
find . -name ".DS_Store" -delete

echo ""
echo "Cleanup complete."
echo "node_modules and Git history were not removed."

echo ""
echo "New project size:"
du -sh .
