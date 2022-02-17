// const { readFileSync, writeFileSync } = require("fs");
const { readFile, writeFile } = require("fs");
// const first = readFileSync("./folder/first.txt", "utf8");
// const second = readFileSync("./folder/second.txt", "utf8");
// console.log(first, second);
// writeFileSync(
//     "./folder/result.txt",
//     `the combine result is : ${first , second}`
// );
// const third = readFileSync("./folder/result.txt", "utf8");
// console.log(third);
readFile("./folder/first.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;

    writeFile(
        "./folder/result_NotAsyn.txt",
        `here is the result : ${first}( is copied )`,
        (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(result);
        }
    );
});