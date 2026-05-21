# Hostinger Deployment Guide — Solarize DigiTech

This site is built as **fully static HTML** (Next.js `output: 'export'`). There is **no Node.js process** to run on Hostinger — just upload files to `public_html`. This means:

- Works on every Hostinger plan, including the cheapest shared (Premium / Single).
- Nothing to crash at runtime.
- No application logs to babysit.

## 1. Build locally

```bash
npm install
npm run build
```

This produces an `out/` directory containing the entire site (HTML, JS chunks, CSS, images, video).

## 2. Upload `out/` to Hostinger

In hPanel → **File Manager** (or via FTP/SSH):

1. Open `public_html/`.
2. **Delete the contents** of `public_html/` (the placeholder `default.php` / `index.html` Hostinger ships with).
3. Upload the **contents of `out/`** — not the folder itself — so the structure ends up as:
   ```
   public_html/index.html
   public_html/about.html
   public_html/_next/...
   public_html/industries/...
   public_html/solutions/...
   public_html/logo.png
   ...
   ```

That's it. The site is live the moment files finish uploading.

> **Tip:** zip `out/` locally, upload one zip, extract on the server — far faster than uploading thousands of small files individually.

## 3. Point the domain at your hosting plan

As of the last check, `solarizedigitech.com` is on Hostinger's **parking** nameservers (`hermes.dns-parking.com` / `artemis.dns-parking.com`). That's why the URL shows a "Parked Domain" page and HTTPS fails — there is no website attached.

In hPanel:

1. Go to **Domains** → `solarizedigitech.com`.
2. If the domain is not already attached to your hosting plan, click **Manage** → **Connect domain to hosting** (or in some hPanel layouts: **Websites** → **Add website**).
3. Hostinger will automatically switch the nameservers from the parking set to its hosting nameservers (typically `ns1.dns-parking.com` / `ns2.dns-parking.com` — confusingly named the same, but a different DNS zone with real A records) and add an A record pointing to your hosting plan IP.
4. Wait for propagation (usually 15 min – 2 hours, occasionally up to 24 h).
5. In **SSL → Manage**, ensure a Let's Encrypt certificate is issued for both `solarizedigitech.com` and `www.solarizedigitech.com` (Hostinger usually auto-issues; if not, click **Install SSL**).

## 4. Verify

After DNS propagates:

- `https://solarizedigitech.com/` → loads the homepage.
- `https://www.solarizedigitech.com/` → same. (Hostinger sets up the `www` redirect by default.)
- Visit each route directly to confirm the 18 pages load:
  - `/about`, `/contact`, `/insights`
  - `/industries`, `/industries/corporate`, `/industries/healthcare`, `/industries/hospitality`, `/industries/manufacturing`, `/industries/retail`
  - `/solutions`, `/solutions/ai-analytics`, `/solutions/cloud`, `/solutions/enterprise`, `/solutions/iot`

## Updating the site later

1. Edit code.
2. `npm run build`.
3. Re-upload `out/` contents to `public_html/` (overwrite).

No restart, no application logs, no process to monitor.

## Known follow-ups

- **Next.js 14.2.34 is end-of-life and has open advisories.** For a static export site these don't have a runtime attack surface (no SSR, no image optimizer, no middleware, no API routes running), but cleaning them up means upgrading to Next 16.x — a major-version jump that needs separate testing. Track this as a maintenance task, not a deployment blocker.

## Why we abandoned the Node.js / standalone deployment

Earlier the project used `output: 'standalone'` and a Node.js application on Hostinger. The site crashed 2–3 minutes after each build. Root cause: the site has zero server-side code (no API routes, no SSR, no `cookies()`/`headers()`, no `fetch`) — every page is prerendered HTML. Running it under Phusion Passenger was both fragile and unnecessary. Static export removes the entire failure mode.
