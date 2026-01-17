---
title: "Grokipedia Scraper"
date: "2025-10-30"
description: "A tiny command-line tool that searches **Grokipedia**, grabs the top article, and **saves the full text to a `.txt` file**."
repo: "gpedia"
lang: "python"
---

## Grokipedia Scraper

A tiny command-line tool that searches **Grokipedia**, grabs the top article, and **saves the full text to a `.txt` file**.

---

## Requirements

- Python 3.8+
- `playwright` (for rendering the search page)
- `beautifulsoup4`
- `requests`

## Usage

- main.py searches grokipedia and pulls the top result only and saves the article to .txt (without citations)
- n_search.py searches and pulls the top n results and prints the results (does not save to file)

```bash
# main.py
uv run main.py Elon Musk

# n_search.py
uv run n_search.py "Elon Musk" -n 3
```