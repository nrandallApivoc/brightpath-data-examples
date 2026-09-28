// Website Technology Detector: CMS, hosting, CDN, e-commerce platform and analytics tools for
// any list of sites, read from public HTML and headers. https://apify.com/brightpath-data/website-tech-detector
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: 'YOUR_APIFY_TOKEN' });

const run = await client.actor('brightpath-data/website-tech-detector').call({
    sites: ['shopify.com', 'github.com', 'notion.so'],
    maxResults: 10,
});

const { items } = await client.dataset(run.defaultDatasetId).listItems();
for (const item of items) {
    console.log(`${item.site}: cdn=${item.cdn}, ecommerce=${item.ecommercePlatform}, hosting=${item.hosting}`);
}

console.log(`\n${items.length} sites total, cost $${(run.usageTotalUsd ?? 0).toFixed(4)}`);
