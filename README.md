# Pets Crossing Borders

Static Cloudflare Pages site for `https://petscrossingborders.com/`.

## Publish

```bash
wrangler pages deploy . --project-name petscrossingborders
```

The custom domain must be attached to the Pages project in Cloudflare. The sitemap is at `/sitemap.xml` and robots instructions are at `/robots.txt`.

## Analytics

Google Analytics needs a real `G-XXXXXXXXXX` measurement ID from the owner's Google Analytics property. Add the official Google tag before publishing once that ID is available; do not ship a placeholder tag that would create misleading data.
