"""
Greenhouse Jobs Scraper: every open role on a company's Greenhouse board, with date filters
the leading incumbent doesn't have. https://apify.com/brightpath-data/greenhouse-jobs
"""
from apify_client import ApifyClient

client = ApifyClient("YOUR_APIFY_TOKEN")

run = client.actor("brightpath-data/greenhouse-jobs").call(run_input={
    "companies": ["airbnb"],
    "maxResults": 30,
})

items = client.dataset(run.default_dataset_id).list_items().items
for item in items[:5]:
    print(f'{item["title"]} - {item.get("department", "n/a")} ({item.get("location", "n/a")})')

print(f"\n{len(items)} jobs total, cost ${run.usage_total_usd:.4f}")
