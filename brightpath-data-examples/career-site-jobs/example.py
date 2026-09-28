"""
Career Site Jobs Scraper: pull every open role a company has posted, across 10 ATS platforms,
from a company name, domain or careers URL. https://apify.com/brightpath-data/career-site-jobs
"""
from apify_client import ApifyClient

client = ApifyClient("YOUR_APIFY_TOKEN")

run = client.actor("brightpath-data/career-site-jobs").call(run_input={
    "companies": ["stripe", "https://boards.greenhouse.io/airbnb"],
    "maxResults": 30,
})

items = client.dataset(run.default_dataset_id).list_items().items
for item in items[:5]:
    print(f'{item["title"]} - {item["company"]} ({item.get("location", "n/a")})')

print(f"\n{len(items)} jobs total, cost ${run.usage_total_usd:.4f}")
