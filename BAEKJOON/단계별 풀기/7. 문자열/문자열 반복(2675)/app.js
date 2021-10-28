const { reverse } = require("dns");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let arry = [];
for (let i = 1; i <= +input[0]; ++i) {
    const tempValue = input[i].split(" ").map((item) => item.replace("\r", ""));
    // testcaseArray.push({ num: parseInt(tempValue[0]), string: tempValue[1] });
    result = "";
    for (let j = 0; j < tempValue[1].length; j++) {
        for (let k = 0; k < tempValue[0]; k++) {
            result += tempValue[1][j];
        }
    }
    arry.push(result);
}
arry.forEach((item) => {
    console.log(item);
});
// for (let i = 0; i < testcaseArray.length; i++) {
//     console.log(testcaseArray[i].string);
//     // for (let j = 0; j < testcaseArray[i].string.length; i++) {
//     //     console.log(testcaseArray[i].string[j]);
//     // }
// }
