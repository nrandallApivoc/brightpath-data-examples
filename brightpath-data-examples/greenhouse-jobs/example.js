// Greenhouse Jobs Scraper: every open role on a company's Greenhouse board, with date filters
// the leading incumbent doesn't have. https://apify.com/brightpath-data/greenhouse-jobs
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: 'YOUR_APIFY_TOKEN' });

const run = await client.actor('brightpath-data/greenhouse-jobs').call({
    companies: ['airbnb'],
    maxResults: 30,
});

const { items } = await client.dataset(run.defaultDatasetId).listItems();
for (const item of items.slice(0, 5)) {
    console.log(`${item.title} - ${item.department ?? 'n/a'} (${item.location ?? 'n/a'})`);
}

console.log(`\n${items.length} jobs total, cost $${(run.usageTotalUsd ?? 0).toFixed(4)}`);
