const path = require("path");

const file = path.join(__dirname, "FileSystem", "sample.txt")

console.log(path.basename(file));
console.log(path.dirname(file));
console.log(path.extname(file));


// output
// sample.txt
// D:\MINAHIL\INTERNSHIP\Day 8\FileSystem\FileSystem
// .txt