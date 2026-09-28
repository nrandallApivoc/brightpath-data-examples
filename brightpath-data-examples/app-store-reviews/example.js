// App Store Reviews Scraper: every App Store review for an app, across all storefronts and both
// sort orders, in one consistent schema. https://apify.com/brightpath-data/app-store-reviews
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: 'YOUR_APIFY_TOKEN' });

const run = await client.actor('brightpath-data/app-store-reviews').call({
    appIds: ['com.spotify.client'],
    countries: ['us'],
    sortOrders: ['mostRecent'],
    maxResults: 20,
});

const { items } = await client.dataset(run.defaultDatasetId).listItems();
for (const item of items.slice(0, 5)) {
    console.log(`${item.rating} stars - ${item.title}: ${(item.content ?? '').slice(0, 80)}`);
}

console.log(`\n${items.length} reviews total, cost $${(run.usageTotalUsd ?? 0).toFixed(4)}`);
