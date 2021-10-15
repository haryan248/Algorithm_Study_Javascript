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
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const T = Number(input[0]);
const INF = Number.MAX_VALUE;
let pointer = 1;
for (let i = 0; i < T; i++) {
    let [n, m, t] = input[pointer++].split(" ").map((i) => Number(i));
    let [s, g, h] = input[pointer++].split(" ").map((i) => Number(i));
    let graph = new Array(n + 1).fill(0).map(() => new Array());
    let x = [];
    let path_g_h;
    for (let j = pointer; j < m + pointer; j++) {
        let [a, b, d] = input[j].split(" ").map((i) => Number(i));
        graph[a].push([b, d]);
        graph[b].push([a, d]);
        if ((a === g && b === h) || (a == h && b === g)) {
            path_g_h = d;
        }
    }
    pointer += m;

    for (let j = pointer; j < t + pointer; j++) {
        x.push(Number(input[j]));
    }
    pointer += t;

    solution(n, s, g, h, graph, x, path_g_h);
}

function solution(n, s, g, h, graph, x, path_g_h) {
    const minHeap = new MinHeap();
    const dijkstra = (start) => {
        let distance = new Array(n + 1).fill(INF);

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
    };

    let routeS = dijkstra(s);
    let routeG = dijkstra(g);
    let routeH = dijkstra(h);

    let result = [];

    x.forEach((E) => {
        const base = routeS[E];
        const possibleA = routeS[g] + routeG[h] + routeH[E];
        const possibleB = routeS[h] + routeH[g] + routeG[E];
        if (base != INF && (base == possibleA || base == possibleB)) {
            result.push(E);
        }
    });

    result.sort((a, b) => a - b);
    console.log(result.join(" "));
}
