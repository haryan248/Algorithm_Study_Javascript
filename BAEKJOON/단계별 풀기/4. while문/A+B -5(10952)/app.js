const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    for (let i = 0; i < input.length; i++) {
        const num1 = +input[i].split(' ')[0];
        const num2 = +input[i].split(' ')[1];

        const result = num1 + num2;

        if (!result) {
            break;
        }
        console.log(result);
    }

    process.exit();
});