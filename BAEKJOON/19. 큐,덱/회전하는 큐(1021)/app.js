const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map((item) => +item);
let num_list = input[1].split(" ").map((item) => +item);
let initial_list = Array.from({ length: n }, (v, i) => i + 1);
let result = [];
function first() {
    result.push(initial_list.shift());
}
function second() {
    let num = initial_list.shift();
    initial_list.push(num);
}
function third() {
    let num = initial_list.pop();
    initial_list.unshift(num);
}
let index = 0;
let check;
let cnt = 0;
while (index <= num_list.length - 1) {
    let location = initial_list.findIndex((v) => v === num_list[index]);
    if (initial_list.length % 2 === 0) {
        if (location + 1 <= initial_list.length / 2) {
            check = true; //second()
        } else {
            check = false; //third()
        }
    } else {
        if (location + 1 <= parseInt(initial_list.length / 2) + 1) {
            check = true; //second()
        } else {
            check = false; //third()
        }
    }
    if (location === 0) {
        first();
        index++;
    } else if (check) {
        second();
        cnt += 1;
    } else if (!check) {
        third();
        cnt += 1;
    }
}
console.log(cnt);
