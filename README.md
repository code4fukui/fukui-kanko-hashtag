# fukui-kanko-hashtag

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A web application that visualizes the daily post counts for tourism-related Instagram hashtags in Fukui Prefecture, Japan.

## Demo

**https://github.com/code4fukui/fukui-kanko-hashtag

The demo presents an interactive line chart showing post trends from April to August 2022. Users can select a hashtag from the dropdown menu to update the chart.

## Features

-   **Interactive Chart:** View daily Instagram post counts for various Fukui tourism hashtags.
-   **Hashtag Selector:** Choose a specific hashtag from a dropdown menu to visualize its trend.
-   **Data at a Glance:** The dropdown displays the total post count for each hashtag over the tracked period (April-August 2022).
-   **Data-Driven:** Utilizes open data provided by the Fukui Prefecture Tourism Federation.

## Data Source

The data, covering April to August 2022, is sourced from the [Fukui Prefecture Tourism Federation](https://www.fuku-e.com/) and is available as processed CSV files in this repository (e.g., `hashtag_202204.csv`).

This project utilizes the data under the [Open Data Standard Terms of Use](https://github.com/code4fukui/copyright-policy-jp/tree/main/OpenDataStandardTermsofUse).

## Running Locally

No build step is required. Simply serve the `index.html` file using a local web server. The application is built with vanilla HTML and JavaScript (ES Modules) and uses the following libraries:
-   [CSV.js](https://js.sabae.cc/CSV.js)
-   [Chart.js](https://js.sabae.cc/Chart.js)

## Data Processing Scripts

The `/deno` directory contains scripts for processing raw hashtag data. These scripts normalize date formats and structure the data into the final CSV files consumed by the web application.

**Requirements:**
-   [Deno](https://deno.land/) runtime

To execute a processing script, run it from within the `deno` directory. For example:
```sh
deno run -A --unstable cnvmonth.js
```

## License

This project is licensed under the terms described in the [LICENSE.md](LICENSE.md) file.