# fukui-kanko-hashtag

福井県の観光関連Instagramハッシュタグの日別投稿数を可視化するWebアプリケーションです。

## デモ

**https://github.com/code4fukui/fukui-kanko-hashtag

デモでは、2022年4月から8月までの投稿トレンドをインタラクティブな折れ線グラフで表示します。ドロップダウンメニューからハッシュタグを選択すると、グラフが更新されます。

## 機能

- **インタラクティブなグラフ:** 福井県の観光関連ハッシュタグのInstagram日別投稿数を表示します。
- **ハッシュタグ選択:** ドロップダウンメニューから特定のハッシュタグを選択し、そのトレンドを可視化します。
- **データの一覧表示:** ドロップダウンには、対象期間（2022年4月〜8月）における各ハッシュタグの合計投稿数が表示されます。
- **データ駆動:** 福井県観光連盟が提供するオープンデータを活用しています。

## データソース

2022年4月から8月までのデータは、[福井県観光連盟](https://www.fuku-e.com/)から提供されたものであり、本リポジトリ内で加工済みのCSVファイル（例: `hashtag_202204.csv`）として利用可能です。

本プロジェクトは、[Open Data Standard Terms of Use](https://github.com/code4fukui/copyright-policy-jp/tree/main/OpenDataStandardTermsofUse)の下でデータを利用しています。

## ローカルでの実行

ビルドプロセスは不要です。ローカルのWebサーバーで `index.html` ファイルをホストするだけで動作します。このアプリケーションは、バニラHTMLとJavaScript（ES Modules）で構築されており、以下のライブラリを使用しています。

- [CSV.js](https://js.sabae.cc/CSV.js)
- [Chart.js](https://js.sabae.cc/Chart.js)

## データ処理スクリプト

`/deno` ディレクトリには、生のハッシュタグデータを処理するためのスクリプトが含まれています。これらのスクリプトは、日付の形式を正規化し、Webアプリケーションで読み込まれる最終的なCSVファイルへとデータを構造化します。

**要件:**
- [Deno](https://deno.land/) ランタイム

処理スクリプトを実行するには、`deno` ディレクトリ内でコマンドを実行します。例:
```sh
deno run -A --unstable cnvmonth.js
```

## ライセンス

本プロジェクトは、[LICENSE.md](LICENSE.md) ファイルに記載されている条件の下でライセンスされています。
