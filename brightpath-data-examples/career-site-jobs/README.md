# Career Site Jobs Scraper: examples

Store page: https://apify.com/brightpath-data/career-site-jobs

- `example.py`: Python example using the Apify client
- `example.js`: JavaScript (ES module) example using the Apify client
- `sample_output.json`: real records from a live run, with long text fields trimmed

Pass company names, domains or careers URLs. The Actor detects the applicant tracking system and returns every open role in one schema. Note: `maxResults` is consumed in company-list order, so one large company can use the whole cap before later companies are reached.
