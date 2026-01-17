---
title: "DiscoRover.com"
date: "2025-08-26"
description: "A comprehensive financial data visualization platform that provides insights into U.S. economic indicators, commodity prices, inflation trends, and housing market metrics. Built with Next.js and powered by Federal Reserve Economic Data (FRED) API integration."
repo: "discorover"
language: "typescript | Next.js"
---

## Discorover

**Live Demo:** [www.discorover.com](https://www.discorover.com)

A comprehensive financial data visualization platform that provides insights into U.S. economic indicators, commodity prices, inflation trends, and housing market metrics. Built with Next.js and powered by Federal Reserve Economic Data (FRED) API integration.

## 🎯 Project Overview

Discorover transforms complex economic data into interactive, visually appealing charts and dashboards that help users understand financial trends over time. The platform showcases real-time and historical data across multiple economic domains, making it easier for people to track changes in prices, interest rates, and inflation.

## ✨ Key Features

### 📊 Economic Metrics Dashboard

- **National Debt Tracking**: Real-time U.S. national debt data from Treasury Department
- **Interest Rates**: Current mortgage rates, Fed Funds Rate, and SOFR
- **Interactive Charts**: Dynamic visualizations with customizable time ranges

### 📈 Data Visualizations

- **Consumer Price Index (CPI)**: Historical inflation trends with custom date ranges
- **Commodity Prices**: Track costs of everyday items (eggs, bacon, milk, bread, beef, coffee, gas, electricity, chicken) with both nominal and inflation-adjusted prices
- **Mortgage Rate Trends**: 15-year and 30-year mortgage rate history with interactive filtering
- **Car Price Analysis**: Automobile pricing trends over time

### 🏠 Housing Market Tools

- **Home Affordability Calculator**: Assess housing affordability based on income and market conditions
- **Mortgage Calculator**: Calculate monthly payments and total interest costs

### 💡 Inflation Analysis

- **Inflation Calculator**: Convert historical prices to today's dollars
- **Real vs Nominal Comparisons**: See the true impact of inflation on purchasing power

## 🛠 Technology Stack

- **Frontend**: Next.js 15.5.0 with React 19.1.0
- **Styling**: Tailwind CSS v4
- **Charts**: Recharts for interactive data visualization
- **UI Components**: Radix UI, Lucide React icons
- **TypeScript**: Full type safety throughout the application
- **API Integration**: RESTful APIs connecting to FRED and U.S. Treasury data sources

## 📁 Project Structure

```
src/
├── app/
│   ├── api/                    # API routes for data fetching
│   │   ├── get-cpi/           # Consumer Price Index data
│   │   ├── all-commodity-prices/ # Commodity price data
│   │   ├── mtg-all/           # Mortgage rates
│   │   ├── fedfunds/          # Federal Funds Rate
│   │   ├── usdebt/            # National debt data
│   │   └── sofr/              # Secured Overnight Financing Rate
│   ├── commodity-prices/       # Commodity prices page
│   ├── mortgage/               # Mortgage tools page
│   ├── inflation-calc/         # Inflation calculator page
│   ├── home-affordability/     # Housing affordability page
│   └── car-prices/            # Car prices analysis page
├── components/
│   ├── CpiChart.tsx           # CPI visualization
│   ├── CommodityPrices.tsx    # Commodity price charts
│   ├── MtgRatesChart.tsx      # Mortgage rate trends
│   ├── UsMetrics.tsx          # Economic metrics dashboard
│   ├── MortgageCalc.tsx       # Mortgage calculator
│   ├── ScaleForInflation.tsx # Inflation adjustment tool
│   └── Affordability.tsx      # Home affordability calculator
└── content/                   # Markdown content for documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/discorover.git
cd discorover
```

1. Install dependencies:

```bash
npm install
```

1. Run the development server:

```bash
npm run dev
```

1. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📊 Data Sources

The application integrates with multiple authoritative data sources:

- **Federal Reserve Economic Data (FRED)**: Comprehensive economic time series data
- **U.S. Treasury Department**: National debt and fiscal data
- **Bureau of Labor Statistics**: Consumer Price Index and inflation data
- **Federal Reserve Board**: Interest rates and monetary policy indicators

## 🎨 Design Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Charts**: Hover tooltips, zoom capabilities, and customizable time ranges
- **Real-time Updates**: Fresh data fetched directly from source APIs
- **Accessibility**: ARIA labels and semantic HTML for screen reader compatibility
- **Modern UI**: Clean, professional interface with thoughtful color schemes

## 🔧 API Architecture

The application uses Next.js API routes to create a backend-for-frontend architecture:

```typescript
// Example API route structure
export async function GET() {
  try {
    const res = await fetch('https://api.fred.stlouisfed.org/fred/series/observations');
    const data = await res.json();
    return NextResponse.json(processData(data));
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
```

## 🌟 Key Highlights

- **Educational Value**: Makes complex economic concepts accessible through visual storytelling
- **Real-time Data**: Users see current economic conditions, not historical snapshots
- **Interactive Exploration**: Users can dive deep into specific time periods and economic indicators
- **Practical Tools**: Calculators help users make informed financial decisions
- **Performance Optimized**: Efficient data fetching and rendering for smooth user experience

## 📱 Use Cases

- **Financial Education**: Students learning about economics and inflation
- **Investment Research**: Investors analyzing market trends
- **Personal Finance**: Individuals planning for major purchases or retirement
- **Economic Analysis**: Researchers and analysts studying economic patterns
- **Real Estate Planning**: Homebuyers assessing market conditions

## 🔮 Future Enhancements

- Additional economic indicators and international data
- Portfolio tracking and personal financial dashboards
- Export functionality for charts and data
- Historical comparison tools for different time periods
- Mobile app development

## 📄 License

This project is private and proprietary. All rights reserved.


---

*Note: This project is intended for educational and demonstration purposes. While it uses real economic data, it should not be used as the sole basis for financial decisions.*
