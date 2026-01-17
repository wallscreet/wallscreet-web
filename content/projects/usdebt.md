---
title: "US Debt to the Penny"
date: "2025-07-31"
description: "Fetches and displays the latest official **United States public debt data** from TreasuryDirect’s “Debt to the Penny” RSS feed. It provides a clear day-over-day summary, including the change in debt held by the public, intragovernmental holdings, and total public debt outstanding."
repo: "us_debt"
language: "python"
---

## 💸 US Debt to the Penny - RSS Summary Tool

This Python module fetches and displays the latest official **United States public debt data** from TreasuryDirect’s “Debt to the Penny” RSS feed. It provides a clear day-over-day summary, including the change in debt held by the public, intragovernmental holdings, and total public debt outstanding.

Because nothing says existential dread like watching the national debt tick up in real time.

---

## 🔍 What It Does

- Pulls the two most recent entries from TreasuryDirect’s RSS feed
- Parses debt values (public, intragovernmental, and total)
- Prints a human-readable daily debt report
- Calculates and displays day-over-day differences

You'll see output similar to:

```
  TreasuryDirect - US Debt to the Penny
  =======================================================
  Time Run: 2025-07-30 20:49:31 (GMT)
            2025-07-30 16:49:31 (US/EST)
  =======================================================
  Date: 07/29/2025
    Debt Held by the Public:       $29,423,243,369,055.06
    Intragovernmental Holdings:    $7,380,594,149,863.15
    Total Public Debt Outstanding: $36,803,837,518,918.21
    Published:              Wed, 30 Jul 2025 20:15:30 GMT
  -------------------------------------------------------
  Date: 07/28/2025
    Debt Held by the Public:       $29,361,632,076,260.01
    Intragovernmental Holdings:    $7,373,294,000,045.29
    Total Public Debt Outstanding: $36,734,926,076,305.30
    Published:              Tue, 29 Jul 2025 20:15:29 GMT
  -------------------------------------------------------
  -------------------------------------------------------
  Debt Accumulated
  -------------------------------------------------------
  Days Elapsed:                    1
  Debt Held by the Public:       + $61,611,292,795.05
  Intragovernmental Holdings:    + $7,300,149,817.86
  Total Public Debt Outstanding: + $68,911,442,612.91

  Debt Accumulation Rate:        + $2,871,310,108.87/hr
  =======================================================
```

---

## 📅 Data Source

* [TreasuryDirect - Debt to the Penny](https://fiscaldata.treasury.gov/datasets/debt-to-the-penny/debt-to-the-penny)
* RSS Feed: `https://treasurydirect.gov/NP_WS/debt/feeds/recent`

---

## 📜 License

This project is released under the [MIT License](LICENSE). Feel free to use, fork, or ignore entirely.

---

## 🧠 Notes

- Requires Python 3.10+ for `zoneinfo` and modern type hints.
- Yes, this really is how much we owe.
- No, it’s probably not going down tomorrow..
