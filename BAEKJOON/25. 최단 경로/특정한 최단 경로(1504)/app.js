class Heap {
    constructor() {
        this.items = [];
    }

    // 값을 서로 바꾸는 메소드
    swap(index1, index2) {
        let temp = this.items[index1]; // items의 index1의 값을 temp(임시공간)에 담음
        this.items[index1] = this.items[index2]; // index1에 index2의 값을 저장
        this.items[index2] = temp; // index2에 아까 index1의 값을 temp에 넣어놓은 값을 저장
    }

    // 부모 인덱스 구하는 메소드
    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    // 왼쪽 자식 인덱스 구하는 메소드
    leftChildIndex(index) {
        return index * 2 + 1;
    }

    // 오른쪽 자식 인덱스 구하는 메소드
    rightChildIndex(index) {
        return index * 2 + 2;
    }

    // 부모 노드 구하는 메소드
    parent(index) {
        return this.items[this.parentIndex(index)];
    }

    // 왼쪽 자식 노드 구하는 메소드
    leftChild(index) {
        return this.items[this.leftChildIndex(index)];
    }

    // 오른쪽 자식 노드 구하는 메소드
    rightChild(index) {
        return this.items[this.rightChildIndex(index)];
    }

    // 최대 힙의 경우 최댓값을 반환하고 최소 힙의 경우 최솟값을 반환하는 메소드
    peek() {
        return this.items[0];
    }

    //힙의 크기(항목 개수)를 반환하는 메소드
    size() {
        return this.items.length;
    }
}

class MinHeap extends Heap {
    // MinHeap 클래스는 Heap 클래스를 상속받았으므로 Heap 클래스의 메소드를 모두 사용할 수 있다.
    // 최소힙은 부모노드와 비교해서 작으면 올려야한다.
    bubbleUp() {
        let index = this.items.length - 1;
        while (this.parent(index) !== undefined && this.parent(index) > this.items[index]) {
            this.swap(index, this.parentIndex(index));
            index = this.parentIndex(index);
        }
    }

    // 최소 힙에서 꺼낸후 트리를 조정한다.
    bubbleDown() {
        let index = 0;
        while (this.leftChild(index) !== undefined && (this.leftChild(index) < this.items[index] || this.rightChild(index) < this.items[index])) {
            let smallerIndex = this.leftChildIndex(index);
            if (this.rightChild(index) !== undefined && this.rightChild(index) < this.items[smallerIndex]) {
                smallerIndex = this.rightChildIndex(index);
            }
            this.swap(index, smallerIndex);
            index = smallerIndex;
        }
    }

    // 힙에 원소를 추가하는 함수
    add(item) {
        this.items[this.items.length] = item;
        this.bubbleUp();
    }

    // 힙에서 원소를 빼내는 함수
    // 최소 힙이라면 최솟값이 빠져나올 것이고 최대힙이라면 최댓값이 빠져나온다.
    poll() {
        let item = this.items[0]; // 첫번째 원소 keep
        this.items[0] = this.items[this.items.length - 1]; // 맨 마지막 원소를 첫번째 원소로 복사
        this.items.pop(); // 맨 마지막 원소 삭제
        this.bubbleDown();

        return item; // keep해둔 값 반환
    }
}
const fs = require("fs");
const { exit } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, E] = input[0].split(" ").map((i) => Number(i));
let graph = new Array(N + 1).fill(0).map(() => new Array());
const INF = Number.MAX_VALUE;
const minHeap = new MinHeap();
for (let i = 1; i < E + 1; i++) {
    let [a, b, c] = input[i].split(" ").map((i) => Number(i));
    graph[a].push([b, c]);
    graph[b].push([a, c]);
}
const [v1, v2] = input[E + 1].split(" ").map((i) => Number(i));

function dijkstra(start) {
    let distance = new Array(N + 1).fill(INF);

    minHeap.add([0, start]);
    distance[start] = 0;

    while (minHeap.size() !== 0) {
        let [dist, now] = minHeap.poll();
        if (distance[now] < dist) {
            continue;
        }
        graph[now].forEach((i) => {
            let cost = dist + i[1];
            if (cost < distance[i[0]]) {
                distance[i[0]] = cost;
                minHeap.add([cost, i[0]]);
            }
        });
    }
    return distance;
}

let start = dijkstra(1);
let _v1 = dijkstra(v1);
let _v2 = dijkstra(v2);
let result = Math.min(start[v1] + _v1[v2] + _v2[N], start[v2] + _v2[v1] + _v1[N]);
console.log(result >= INF ? -1 : result);
