// function solution(priorities, location) {
//     var answer = 0;
//     let result = [];
//     let printer = priorities.map((element, i) => {
//         return [i, element];
//     });

//     while (printer.length !== 1) {
//         for (let j = 1; j < printer.length; j++) {
//             if (printer[0][1] < printer[j][1]) {
//                 let temp = printer.shift();
//                 printer.push(temp);
//                 break;
//             } else if (j === printer.length - 1) {
//                 result.push(printer.shift());
//             }
//         }
//     }
//     result.push(printer.shift());
//     result = result.map((element, i) => {
//         return element[0];
//     });
//     answer = result.findIndex((e) => e === location) + 1;
//     return answer;
// }
function solution(priorities, location) {
    var list = priorities.map((t, i) => ({
        my: i === location,
        val: t,
    }));
    var count = 0;
    while (true) {
        var cur = list.splice(0, 1)[0];
        console.log(cur);
        if (list.some((t) => t.val > cur.val)) {
            list.push(cur);
        } else {
            count++;
            if (cur.my) return count;
        }
    }
}
priorities = [2, 1, 3, 2];
location = 2;
solution(priorities, location);
