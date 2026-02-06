# Hostinger Deployment Guide for Solarize DigiTech

## Important: Hostinger Officially Supports Next.js!

Hostinger has native support for Next.js applications (both frontend and backend features).

## Changes Made for Hostinger Compatibility

### 1. Next.js Configuration (`next.config.js`)
- Added `output: 'standalone'` - Creates optimized production build
- Added `unoptimized: true` for images - Required for shared hosting without dedicated image server

### 2. Node.js Version
- Created `.nvmrc` and `.node-version` files specifying Node.js 18.17.0
- Added `engines` field to `package.json` requiring Node >= 18.17.0

## Deployment Steps for Hostinger

### Option 1: Using Hostinger's GitHub Auto-Deploy (Recommended)

1. **Log into Hostinger Control Panel**
2. **Navigate to Website → Application**
3. **Select "Create Application"**
4. **Choose Node.js Application**
5. **Configure:**
   - Application root: `/public_html` (or your preferred directory)
   - Application URL: Your domain
   - Application startup file: `server.js`
   - Node.js version: **18.17 or higher**

6. **Set Environment Variables:**
   ```
   NODE_ENV=production
   PORT=3000
   ```

7. **Deploy via Git:**
   - Connect your GitHub repository: `https://github.com/akshatsrv/solarizedigitech.git`
   - Branch: `master`

8. **Build Commands:**
   ```bash
   npm install
   npm run build
   ```

9. **Start Command:**
   ```bash
   npm start
   ```

### Option 2: Manual Deployment

1. **Build locally:**
   ```bash
   npm install
   npm run build
   ```

2. **Upload to Hostinger via FTP:**
   - Upload all files except `node_modules/`
   - Upload the `.next/` folder

3. **SSH into Hostinger and run:**
   ```bash
   cd /path/to/your/app
   npm install --production
   npm start
   ```

### Option 3: Static Export (If Dynamic Features Not Needed)

If you don't need server-side rendering, you can export to static HTML:

1. **Update `next.config.js`:**
   ```javascript
   output: 'export'
   ```

2. **Build:**
   ```bash
   npm run build
   ```

3. **Upload the `out/` directory to Hostinger's public_html**

## Common Issues and Solutions

### Issue 1: "Module not found" errors
**Solution:** Ensure all dependencies are in `dependencies` not `devDependencies` in package.json

### Issue 2: Port already in use
**Solution:** Use Hostinger's assigned port or configure in your hosting settings

### Issue 3: Images not loading
**Solution:** The `unoptimized: true` setting handles this. Alternatively, use static paths in `/public`

### Issue 4: Build fails
**Solution:**
- Check Node.js version (must be >= 18.17.0)
- Run `npm install` before `npm run build`
- Check build logs in Hostinger panel

### Issue 5: App crashes on start
**Solution:**
- Check logs in Hostinger Application Manager
- Verify `package.json` scripts are correct
- Ensure all environment variables are set

## Verify Deployment

After deployment, test:
1. Homepage loads correctly
2. Navigation works
3. All solution pages load
4. Contact form works
5. Images display properly
6. Mobile responsiveness

## Support

If issues persist:
1. Check Hostinger Application logs
2. Verify Node.js version: `node --version`
3. Test build locally: `npm run build && npm start`
4. Contact Hostinger support with error logs
