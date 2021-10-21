class Queue {
    constructor() {
        this.arr = [];
        this.head = 0;
        this.tail = 0;
    }
    push(item) {
        this.arr[this.tail++] = item;
    }
    pop() {
        if (this.head >= this.tail) return null;
        const result = this.arr[this.head++];
        return result;
    }
    size() {
        return this.tail - this.head;
    }
}
const queue = new Queue();

queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
console.log(`size : ${queue.size()}`);
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
