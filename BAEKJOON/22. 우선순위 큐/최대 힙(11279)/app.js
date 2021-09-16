const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solution(input) {
    const TOP = 1;
    const parent = (i) => Math.floor(i / 2); // 부모노드
    const left = (i) => i * 2; // 왼쪽 자식 노드
    const right = (i) => i * 2 + 1; // 오른쪽 노드

    class PriorityQueue {
        constructor(comparator = (a, b) => a > b) {
            // comparator for default: max heap
            this._heap = [null]; // 첫 원소는 사용 X
            this._comparator = comparator;
        }
        // 힙 사이즈 반환
        size() {
            return this._heap.length - 1;
        }
        // 맨위에 거 뽑기
        peek() {
            return this.size() > 0 ? this._heap[TOP] : null;
        }
        // heap에 삽입
        push(item) {
            this._heap.push(item);
            // 비교해서 트리 수정
            this._shiftUp();
        }
        // heap에서 삭제
        pop() {
            const item = this._heap[TOP];
            // 맨위랑 아래 바꾸기
            this._swap(1, this._heap.length - 1);
            // 바꿨으니 맨밑에꺼 팝
            this._heap.pop();
            // 비교해서 트리 수정
            this._shiftDown();
            return item;
        }

        _greater(i, j) {
            // greater means: the former(i) has greater priority than the latter(j)
            return this._comparator(this._heap[i], this._heap[j]);
        }

        _swap(i, j) {
            const temp = this._heap[i];
            this._heap[i] = this._heap[j];
            this._heap[j] = temp;
        }
        // 위로 올리기
        _shiftUp() {
            let node = this._heap.length - 1; // last item

            while (node > TOP && this._greater(node, parent(node))) {
                this._swap(node, parent(node));
                node = parent(node);
            }
        }
        // 아래로 내리기
        _shiftDown() {
            let node = TOP; // 제일 위의 아이템
            while ((left(node) < this._heap.length && this._greater(left(node), node)) || (right(node) < this._heap.length && this._greater(right(node), node))) {
                const greaterChild = right(node) < this._heap.length && this._greater(right(node), left(node)) ? right(node) : left(node);
                // 오른쪽 노드와 왼쪽 노드중 큰쪽으로 교환
                this._swap(node, greaterChild);
                node = greaterChild;
            }
        }
    }

    let [N, ...xs] = input.map(Number);
    const ans = [];
    const pq = new PriorityQueue();

    xs.forEach((x) => {
        if (x === 0) {
            // pop
            ans.push(pq.size() ? pq.pop() : 0);
        } else {
            // push
            pq.push(x);
        }
    });

    return ans.join("\n");
}
console.log(solution(input));
