class MyStack {
    #stack = {};
    #top = -1;

    constructor(capacity) {
        this.capacity = capacity;
    }

    push(value) {
        if (this.capacity === 0 || this.#top < this.capacity - 1) {
            this.#top++
            this.#stack[this.#top] = value;
        } else {
            console.warn('Stack overflow');
        }
    }

    pop() {
        if ( this.#top === -1 ) {
            console.error('Stack underflow');
        } else {
            const value = this.#stack[this.#top];
            delete this.#stack[this.#top];
            this.#top--;
            return value;
        }
    }

    getSize() {
        return this.#top - 1;
    }

    toArray() {
        const arr = [];

        for( let i = this.#top; i >= 0; i-- ) {
            arr[arr.length] = this.#stack[i];
        }

        return arr;
    }
}

const testStack = new MyStack(3);

testStack.push(1);
testStack.push(2);
testStack.push(3);
const value = testStack.pop();
console.log(value)

console.log(testStack.toArray());