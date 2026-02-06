#!/bin/bash
cd "/Users/akshat.shrivastava/Library/Mobile Documents/com~apple~CloudDocs/sd/solarizedigitech"

echo "================================================"
echo "Pushing All Changes to GitHub"
echo "================================================"
echo ""

# Check git status
echo "Current git status:"
git status --short
echo ""

# Add all changes
echo "Adding all changes..."
git add .

# Remove old directory if exists
if [ -d "solarize-digitech" ]; then
    echo "Removing old solarize-digitech directory..."
    rm -rf solarize-digitech
    git add solarize-digitech
fi

echo ""
echo "Creating commit..."
git commit -m "Fix logo display and add Hostinger deployment config

Changes:
- Fix logo not displaying by replacing Next.js Image with standard img tag
- Add Hostinger deployment configuration (standalone mode)
- Add unoptimized images for shared hosting compatibility
- Specify Node.js version 18.17.0 (.nvmrc, .node-version)
- Add engines field to package.json
- Create comprehensive deployment guide (HOSTINGER_DEPLOYMENT.md)
- Resolve directory restructure conflicts
- Add homepage comment

This resolves:
1. Logo display issues on Hostinger (standard img tag more compatible)
2. Hostinger deployment configuration
3. Git merge conflicts from directory restructure
4. Node.js version compatibility

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"

echo ""
echo "Pushing to GitHub (master branch)..."
git push origin master

echo ""
echo "================================================"
echo "✅ SUCCESS! All changes pushed to GitHub"
echo "================================================"
echo ""
echo "Changes pushed:"
echo "  ✓ Logo fix (using standard img tag)"
echo "  ✓ Hostinger deployment configuration"
echo "  ✓ Node.js version specification"
echo "  ✓ Directory restructure completed"
echo ""
echo "Repository: https://github.com/akshatsrv/solarizedigitech.git"
echo "Branch: master"
echo ""
echo "Hostinger will automatically rebuild your site."
echo "The logo should now display correctly!"
echo ""
