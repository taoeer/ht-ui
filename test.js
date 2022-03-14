const fs = require("fs");
const path = require("path");

console.log(fs.readdirSync("./src")
.filter((p) => p.trim().endsWith(".jsx"))
.reduce(
  (p, n) => ({
    ...p,
    [path.basename(n, '.jsx')]: n,
  }),
  {}
));;
