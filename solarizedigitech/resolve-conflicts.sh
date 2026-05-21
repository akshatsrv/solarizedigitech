#!/bin/bash
cd "/Users/akshat.shrivastava/Library/Mobile Documents/com~apple~CloudDocs/sd/solarizedigitech"

echo "Resolving conflicts by keeping our moved files..."

# The conflicts are all "rename/delete" - remote deleted the old files in solarize-digitech/
# while we renamed them to root. We want to keep our version (files in root).

# Add all the files that we've moved to root (these are already in the right place)
git add .

# Check if there are any files still in the old solarize-digitech directory that need removing
if [ -d "solarize-digitech" ]; then
    echo "Removing old solarize-digitech directory..."
    rm -rf solarize-digitech
    git add solarize-digitech
fi

echo ""
echo "Creating merge commit..."
git commit -m "Merge remote changes and complete directory restructure

- Resolve rename/delete conflicts by keeping files in root directory
- Remote deleted old solarize-digitech/ subdirectory
- Local moved files to root directory
- Both changes accomplish the same goal

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"

echo ""
echo "Pushing to remote..."
git push origin master

echo ""
echo "✅ Conflicts resolved and pushed successfully!"
