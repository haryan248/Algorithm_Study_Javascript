function solution(id_list, report, k) {
    var answer = [];
    let result = {};
    let ban_list = {};
    let user_report = {};

    for (let i = 0; i < report.length; i++) {
        let reporter = report[i].split(" ")[0].trim();
        let banUser = report[i].split(" ")[1].trim();
        if (result[reporter] == undefined) {
            result[reporter] = [banUser];
        } else {
            result[reporter].push(banUser);
            let mySet2 = new Set(result[reporter]);
            result[reporter] = [...mySet2];
        }
    }

    for (let i = 0; i < id_list.length; i++) {
        if (result[id_list[i]] !== undefined) {
            Object.values(result[id_list[i]]).forEach((e) => {
                if (ban_list[e] == undefined) {
                    ban_list[e] = 1;
                } else {
                    ban_list[e] += 1;
                }
            });
        }
    }

    for (let item in result) {
        Object.values(result[item]).forEach((x) => {
            if (ban_list[x] >= k) {
                if (user_report[item] == undefined) {
                    user_report[item] = 1;
                } else {
                    user_report[item] += 1;
                }
            }
        });
    }
    id_list.forEach((x) => {
        if (user_report[x] == undefined) {
            answer.push(0);
        } else {
            answer.push(user_report[x]);
        }
    });
    return answer;
}
id_list = ["con", "ryan"];
report = ["ryan con", "ryan con", "ryan con", "ryan con"];
k = 3;
console.log(solution(id_list, report, k));
