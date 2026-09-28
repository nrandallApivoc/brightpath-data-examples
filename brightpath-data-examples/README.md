# brightpath-data examples

Short, working Python and JavaScript examples for the [brightpath-data](https://apify.com/brightpath-data) Actors on the Apify Store. Every Actor is pay per result with no subscription, and each one also works as an MCP tool for Claude, Cursor, ChatGPT and other agents.

This repo holds usage examples only, not Actor source code.

## Run an example

1. Create a free Apify account and copy your API token from Console > Settings > API & Integrations.
2. Install the client: `pip install apify-client` for Python or `npm install apify-client` for JavaScript (the JS examples use ES modules, so run them as `.mjs` or set `"type": "module"`).
3. Replace `YOUR_APIFY_TOKEN` in an example file and run it. Each example costs a fraction of a cent.

Featured examples, each with `example.py`, `example.js` and a real `sample_output.json` (long text fields trimmed):

- [career-site-jobs](career-site-jobs): open roles from 10 applicant tracking systems in one call
- [greenhouse-jobs](greenhouse-jobs): a company's Greenhouse board with date filters
- [website-tech-detector](website-tech-detector): CMS, hosting, CDN and e-commerce platform for any site
- [app-store-reviews](app-store-reviews): App Store reviews across storefronts

## All Actors

### Jobs data

- [Career Site Jobs Scraper](https://apify.com/brightpath-data/career-site-jobs), $3.00 per 1,000: open jobs from Greenhouse, Lever, Ashby, SmartRecruiters and six more systems by company name.
- [Greenhouse Jobs Scraper](https://apify.com/brightpath-data/greenhouse-jobs), $2.00 per 1,000: any Greenhouse board, with posted-after and updated-after filters.
- [Lever Jobs Scraper](https://apify.com/brightpath-data/lever-jobs), $2.00 per 1,000: every open Lever role with full descriptions.
- [Ashby Jobs Scraper](https://apify.com/brightpath-data/ashby-jobs), $2.00 per 1,000: every open Ashby role, the system many funded startups use.
- [SmartRecruiters Jobs Scraper](https://apify.com/brightpath-data/smartrecruiters-jobs), $2.00 per 1,000: open SmartRecruiters roles with date filters.
- [Remote Jobs Aggregator](https://apify.com/brightpath-data/remote-jobs), $1.50 per 1,000: deduplicated remote jobs from four sources in one schema.

### App store data

- [App Store Reviews Scraper](https://apify.com/brightpath-data/app-store-reviews), $0.50 per 1,000: reviews for any app across storefronts and sort orders.
- [App Store Apps Scraper](https://apify.com/brightpath-data/app-store-apps), $2.00 per 1,000: app metadata, ratings, pricing and chart rank.
- [Apple Podcasts Search, Episodes and Reviews](https://apify.com/brightpath-data/apple-podcasts-search-reviews), $2.00 per 1,000: shows, episodes and listener reviews.

### Company data

- [Companies House UK Company Search](https://apify.com/brightpath-data/companies-house-uk), $4.00 per 1,000: company profiles, filing history and charges from the official register.
- [SEC EDGAR Full-Text Search](https://apify.com/brightpath-data/sec-edgar-full-text-search), $2.00 per 1,000: SEC filings that mention a term, as flat records.

### Website analysis

- [Website Tech Stack Detector](https://apify.com/brightpath-data/website-tech-detector), $4.00 per 1,000: CMS, hosting, CDN, e-commerce platform and analytics from public HTML and headers.
- [Website SEO Audit](https://apify.com/brightpath-data/website-seo-audit), $5.00 per 1,000: titles, metas, headings, broken links, canonicals, robots and sitemap checks.
- [Shopify Store Scraper](https://apify.com/brightpath-data/shopify-store-scraper), $2.00 per 1,000: products, variants, prices and images from any Shopify storefront.
- [Bulk Image Downloader](https://apify.com/brightpath-data/bulk-image-downloader), $8.00 per 1,000: images from a page or URL list, filtered and zipped.
- [WordPress Plugin Directory Scraper](https://apify.com/brightpath-data/wordpress-plugin-directory), $1.00 per 1,000: plugin versions, ratings and active installs.

### Public records and research

- [ClinicalTrials.gov Search](https://apify.com/brightpath-data/clinicaltrials-gov-search), $2.00 per 1,000: study records by drug, condition or sponsor.
- [Grants.gov Search](https://apify.com/brightpath-data/grants-gov-search), $1.50 per 1,000: current and forecasted U.S. federal grant opportunities.
- [Federal Register Search](https://apify.com/brightpath-data/federal-register-search), $1.50 per 1,000: rules, notices and proposed rules.
- [FDA Recalls and Enforcement](https://apify.com/brightpath-data/openfda-recalls), $1.50 per 1,000: food, drug and device recalls as flat records.
- [Medicare Hospital Compare](https://apify.com/brightpath-data/cms-hospital-compare), $2.00 per 1,000: CMS star ratings and quality measures per hospital.
- [Medicare Nursing Home Compare](https://apify.com/brightpath-data/cms-nursing-home-compare), $2.00 per 1,000: star ratings, staffing and inspections per nursing home.
- [Hospital Price Transparency File Finder](https://apify.com/brightpath-data/hospital-price-transparency-finder), $5.00 per 1,000: the machine-readable price file a hospital must publish, verified.
- [Academic Paper Search](https://apify.com/brightpath-data/academic-paper-search), $1.50 per 1,000: OpenAlex, Crossref, arXiv and PubMed in one query.

## Notes

Prices are per 1,000 results plus a fraction of a cent per run start; check each Store page for current pricing. Actors read public data only and do not bypass logins or access controls. Found a problem? Open an issue on the Actor's Issues tab on the Apify Store.
