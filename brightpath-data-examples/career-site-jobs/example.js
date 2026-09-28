// Career Site Jobs Scraper: pull every open role a company has posted, across 10 ATS platforms,
// from a company name, domain or careers URL. https://apify.com/brightpath-data/career-site-jobs
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: 'YOUR_APIFY_TOKEN' });

const run = await client.actor('brightpath-data/career-site-jobs').call({
    companies: ['stripe', 'https://boards.greenhouse.io/airbnb'],
    maxResults: 30,
});

const { items } = await client.dataset(run.defaultDatasetId).listItems();
for (const item of items.slice(0, 5)) {
    console.log(`${item.title} - ${item.company} (${item.location ?? 'n/a'})`);
}

console.log(`\n${items.length} jobs total, cost $${(run.usageTotalUsd ?? 0).toFixed(4)}`);
