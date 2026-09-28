"""
Website Technology Detector: CMS, hosting, CDN, e-commerce platform and analytics tools for
any list of sites, read from public HTML and headers. https://apify.com/brightpath-data/website-tech-detector
"""
from apify_client import ApifyClient

client = ApifyClient("YOUR_APIFY_TOKEN")

run = client.actor("brightpath-data/website-tech-detector").call(run_input={
    "sites": ["shopify.com", "github.com", "notion.so"],
    "maxResults": 10,
})

items = client.dataset(run.default_dataset_id).list_items().items
for item in items:
    print(f'{item["site"]}: cdn={item.get("cdn")}, ecommerce={item.get("ecommercePlatform")}, hosting={item.get("hosting")}')

print(f"\n{len(items)} sites total, cost ${run.usage_total_usd:.4f}")
