function solution(fees, records) {
    let number_per_list = {};
    let vehicle_inout_flag = {};
    let vehicle_per_time = {};
    let last = "23:59";
    for (let i = 0; i < records.length; i++) {
        let time = records[i].split(" ")[0];
        let vehicle_num = records[i].split(" ")[1];
        let IN_OUT = records[i].split(" ")[2];
        vehicle_inout_flag[vehicle_num] = IN_OUT;
        if (!number_per_list[vehicle_num]) {
            number_per_list[vehicle_num] = [time];
        } else {
            number_per_list[vehicle_num].push(time);
        }
    }
    for (let vehicle in number_per_list) {
        if (number_per_list[vehicle].length % 2 !== 0) {
            number_per_list[vehicle].push(last);
        }
        let [total_time, num] = cal_time(Object.values(number_per_list[vehicle]), vehicle);
        let fee = 0;
        if (total_time <= fees[0]) {
            fee = fees[1];
        } else {
            fee = fees[1] + Math.ceil((total_time - fees[0]) / fees[2]) * fees[3];
        }
        vehicle_per_time[Number(num)] = fee;
    }
    Object.keys(vehicle_per_time).sort();
    return Object.values(vehicle_per_time);
}
// 시간 계산
function cal_time(vehicle_arr, vehicle_num) {
    let sum = 0;
    let out_list = [];
    let in_list = [];
    vehicle_arr.forEach((x, i) => {
        if (i % 2 == 0) {
            in_list.push(x);
        } else {
            out_list.push(x);
        }
    });
    for (let i = 0; i < in_list.length; i++) {
        let in_hour = Number(in_list[i].split(":")[0]);
        let in_min = Number(in_list[i].split(":")[1]);
        let out_hour = Number(out_list[i].split(":")[0]);
        let out_min = Number(out_list[i].split(":")[1]);
        if (out_min === 0) {
            out_min = 60;
            out_hour -= 1;
        }
        sum += (out_hour - in_hour) * 60 + (out_min - in_min);
    }
    return [sum, vehicle_num];
}

// fees = [180, 5000, 10, 600];
// records = ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"];
fees = [1, 461, 1, 10];
records = ["00:00 1234 IN"];
solution(fees, records);
