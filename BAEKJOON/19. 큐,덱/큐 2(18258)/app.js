const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = +input.shift();
let queue = [];
let result = [];
let pointer = 0;
for (let i = 0; i < n; i++) {
    let command_list = input[i].trim().split(" ");
    let command = command_list[0];
    let num = command_list[1];
    switch (command) {
        case "push":
            queue.push(num);
            break;
        case "pop":
            pointer > queue.length - 1 ? result.push(-1) : result.push(queue[pointer++]);
            break;
        case "size":
            result.push(queue.length - pointer);
            break;
        case "empty":
            pointer > queue.length - 1 ? result.push(1) : result.push(0);
            break;
        case "front":
            pointer > queue.length - 1 ? result.push(-1) : result.push(queue[pointer]);
            break;
        case "back":
            pointer > queue.length - 1 ? result.push(-1) : result.push(queue[queue.length - 1]);
            break;
    }
}
console.log(result.join("\n"));
