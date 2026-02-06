#!/bin/bash
cd "/Users/akshat.shrivastava/Library/Mobile Documents/com~apple~CloudDocs/sd/solarizedigitech"

echo "Committing logo fix..."
git add components/Navigation.tsx

git commit -m "Fix logo not displaying on Hostinger

- Replace Next.js Image component with standard img tag
- Remove Image import from Navigation component
- Standard img tag is more compatible with Hostinger hosting
- Logo path remains /logo.png in public directory

This fixes the logo display issue on deployed Hostinger site.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"

echo ""
echo "Pushing to GitHub..."
git push origin master

echo ""
echo "✅ Logo fix pushed successfully!"
echo ""
echo "The logo should now display correctly on Hostinger."
