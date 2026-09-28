# Website Tech Stack Detector: examples

Store page: https://apify.com/brightpath-data/website-tech-detector

- `example.py`: Python example using the Apify client
- `example.js`: JavaScript (ES module) example using the Apify client
- `sample_output.json`: real records from a live run, with long text fields trimmed

Pass domains or URLs. Detection reads public HTML and headers only, so technologies that appear only after client-side rendering can be missed.
