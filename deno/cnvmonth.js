import { CSV } from "https://js.sabae.cc/CSV.js";

const cnvmonth = async (month) => {
  const data = await CSV.fetch(`./hashtag_2022${month}.csv`);
  const header0 = data[0];
  const header = [header0[0]];
  for (let i = 1; i < header0.length; i++) {
    const h = header0[i].replace(/\//g, "-");
    if (h.startsWith("2022-" + month + "-")) {
      header.push(h);
    }
  }
  const data2 = [header];
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    row.length = header.length;
    data2.push(row);
  }
  await Deno.writeTextFile(`../hashtag_2022${month}.csv`, CSV.encode(data2));
};

await cnvmonth("05");
await cnvmonth("06");
await cnvmonth("07");
await cnvmonth("08");
