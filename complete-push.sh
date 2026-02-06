#!/bin/bash

# Navigate to the correct directory
cd "/Users/akshat.shrivastava/Library/Mobile Documents/com~apple~CloudDocs/sd/solarizedigitech"

# Show current status
echo "Current git status:"
git status

# Add all changes
echo -e "\nAdding changes..."
git add .

# Create commit
echo -e "\nCreating commit..."
git commit -m "Restructure: Move all files to root directory

- Move all project files from solarize-digitech/ subdirectory to root
- Remove nested folder structure for cleaner deployment
- Prepare for Hostinger deployment

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"

# Push to GitHub
echo -e "\nPushing to GitHub..."
git push origin main

echo -e "\n✅ Push completed successfully!"
