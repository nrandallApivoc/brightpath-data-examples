"""
App Store Reviews Scraper: every App Store review for an app, across all storefronts and both
sort orders, in one consistent schema. https://apify.com/brightpath-data/app-store-reviews
"""
from apify_client import ApifyClient

client = ApifyClient("YOUR_APIFY_TOKEN")

run = client.actor("brightpath-data/app-store-reviews").call(run_input={
    "appIds": ["com.spotify.client"],
    "countries": ["us"],
    "sortOrders": ["mostRecent"],
    "maxResults": 20,
})

items = client.dataset(run.default_dataset_id).list_items().items
for item in items[:5]:
    print(f'{item.get("rating")} stars - {item.get("title")}: {item.get("content", "")[:80]}')

print(f"\n{len(items)} reviews total, cost ${run.usage_total_usd:.4f}")
