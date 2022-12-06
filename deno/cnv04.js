import { CSV } from "https://js.sabae.cc/CSV.js";

const data = await CSV.fetch("./hashtag04.csv");
const header = ["hashtag"];
const cnt = [data[0][0]];
console.log(data)
for (let i = 1; i < data.length; i++) {
  const d = data[i];
  const date = d[0];
  const n = d[1];
  if (date.startsWith("2022-04-")) {
    header.push(date);
    cnt.push(n);
  }
}
const data2 = [header, cnt];
console.log(data2);
await Deno.writeTextFile("../hashtag_202204.csv", CSV.encode(data2));

