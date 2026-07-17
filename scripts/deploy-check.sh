#!/bin/bash
set -e

cd "/Users/gregritz/flying-davidson"

echo "Flying Davidson deployment check"
echo "================================"
echo ""

echo "1. Git status"
git status --short
echo ""

echo "2. Running lint"
npm run lint
echo ""

echo "3. Running production build"
npm run build
echo ""

echo "4. Checking for public files larger than 25 MB"
find public -type f -size +25M -print 2>/dev/null || true
echo ""

echo "5. Project folder sizes"
du -sh app components public scripts 2>/dev/null || true
echo ""

echo "Deployment checks completed successfully."
