#!/bin/bash
cd "/Users/akshat.shrivastava/Library/Mobile Documents/com~apple~CloudDocs/sd/solarizedigitech"

git add .
git commit -m "$(cat <<'EOF'
Restructure: Move all files to root directory

- Move all project files from solarize-digitech/ subdirectory to root
- Remove nested folder structure for cleaner deployment
- Prepare for Hostinger deployment

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"
git push origin main
