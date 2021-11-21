function solution(people, limit) {
    let answer = 0;

    people.sort((a, b) => a - b);

    let leftPointer = 0;
    let rightPointer = people.length - 1;

    while (leftPointer <= rightPointer) {
        if (people[leftPointer] + people[rightPointer] <= limit) {
            leftPointer++;
        }
        rightPointer--;
        answer += 1;
    }
    return answer;
}
const people = [70, 50, 80, 50];
const limit = 100;
solution(people, limit);
