#!/bin/bash
cd "/Users/akshat.shrivastava/Library/Mobile Documents/com~apple~CloudDocs/sd/solarizedigitech"

echo "Adding Hostinger deployment configuration files..."
git add .

echo ""
echo "Creating commit..."
git commit -m "Configure for Hostinger deployment

- Add standalone output mode to next.config.js
- Add unoptimized images for shared hosting compatibility
- Specify Node.js version 18.17.0 (.nvmrc, .node-version)
- Add engines field to package.json
- Create comprehensive deployment guide (HOSTINGER_DEPLOYMENT.md)

This fixes deployment issues on Hostinger by:
1. Using standalone build output
2. Disabling Next.js image optimization (requires custom server)
3. Ensuring correct Node.js version is used

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"

echo ""
echo "Pushing to GitHub..."
git push origin master

echo ""
echo "✅ Hostinger configuration pushed successfully!"
echo ""
echo "Next steps:"
echo "1. Go to Hostinger Control Panel"
echo "2. Set up Node.js application (v18.17+)"
echo "3. Connect to GitHub repo: https://github.com/akshatsrv/solarizedigitech.git"
echo "4. Run: npm install && npm run build"
echo "5. Start with: npm start"
echo ""
echo "See HOSTINGER_DEPLOYMENT.md for detailed instructions."
