# Pets Crossing Borders

Static Cloudflare Pages site for `https://petscrossingborders.com/`.

## Publish

```bash
wrangler pages deploy . --project-name petscrossingborders
```

The custom domain must be attached to the Pages project in Cloudflare. The sitemap is at `/sitemap.xml` and robots instructions are at `/robots.txt`.

## Analytics

The shared 37X measurement stream is consent-gated in `analytics-consent.js`.
Google Analytics is not requested unless the visitor explicitly accepts.
