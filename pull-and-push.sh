#!/bin/bash
cd "/Users/akshat.shrivastava/Library/Mobile Documents/com~apple~CloudDocs/sd/solarizedigitech"

echo "Pulling latest changes from remote..."
git pull origin master --no-rebase

echo ""
echo "Pushing local changes..."
git push origin master

echo ""
echo "✅ Done!"
