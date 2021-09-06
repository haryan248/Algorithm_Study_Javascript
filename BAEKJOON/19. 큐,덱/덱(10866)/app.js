const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = +input.shift();
let dequeue = [];
let result = [];
for (let i = 0; i < n; i++) {
    let comman_list = input[i].trim().split(" ");
    let command = comman_list[0];
    let num = comman_list[1];
    switch (command) {
        case "push_front":
            dequeue.unshift(num);
            break;
        case "push_back":
            dequeue.push(num);
            break;
        case "pop_front":
            dequeue.length === 0 ? result.push(-1) : result.push(dequeue.shift());
            break;
        case "pop_back":
            dequeue.length === 0 ? result.push(-1) : result.push(dequeue.pop());
            break;
        case "size":
            result.push(dequeue.length);
            break;
        case "empty":
            dequeue.length === 0 ? result.push(1) : result.push(0);
            break;
        case "front":
            dequeue.length === 0 ? result.push(-1) : result.push(dequeue[0]);
            break;
        case "back":
            dequeue.length === 0 ? result.push(-1) : result.push(dequeue[dequeue.length - 1]);
            break;
    }
}
console.log(result.join("\n"));
