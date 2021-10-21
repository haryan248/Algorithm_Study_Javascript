class Stack {
    constructor() {
        this.arr = [];
        this.index = 0;
    }
    pop() {
        if (this.index <= 0) return null;
        const result = this.arr[--this.index];
        return result;
    }
    push(item) {
        this.arr[this.index++] = item;
    }
    size() {
        return this.index;
    }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(2);
stack.push(2);
stack.push(2);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack.size());
