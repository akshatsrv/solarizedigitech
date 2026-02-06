#!/bin/bash

# Navigate to the correct directory
cd "/Users/akshat.shrivastava/Library/Mobile Documents/com~apple~CloudDocs/sd/solarizedigitech"

echo "Current directory: $(pwd)"
echo ""

# Show current status
echo "Git status:"
git status
echo ""

# Add all changes
echo "Adding changes..."
git add .
echo ""

# Create commit
echo "Creating commit..."
git commit -m "Add homepage comment and restructure files

- Add comment to homepage
- Move all files to root directory for deployment

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
echo ""

# Push to GitHub
echo "Pushing to GitHub..."
git push origin main

echo ""
echo "✅ Push completed successfully!"
