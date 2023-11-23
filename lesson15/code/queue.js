// class QueueArray {
//     #queue = [];
//
//     isEmpty() {
//         return this.#queue.length === 0;
//     }
//
//     enqueue(value) {
//         this.#queue.push(value)
//     }
//
//     dequeue() {
//         if(this.isEmpty()) {
//             console.warn('Queue is empty')
//             return;
//         }
//
//         return this.#queue.shift()
//     }
//
//     peek() {
//         if(this.isEmpty()) {
//             console.warn('Queue is empty')
//             return;
//         }
//         return this.#queue[0];
//     }
//
//     getSize() {
//         return this.#queue.length
//     }
// }
//
// const myQueue = new QueueArray;
//
// myQueue.enqueue(1);
// myQueue.enqueue(2);
// myQueue.enqueue(3);
// myQueue.enqueue(4);
// console.log(myQueue.dequeue());
// console.log(myQueue.getSize());


// **********************

class QueueObj {
    #queue = {};
    #head = 0;
    #tail = 0;

    enqueue(value) {
        this.#queue[this.#tail] = value;
        this.#tail++;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.warn('Queue is empty');
            return;
        }

        const removedEl = this.#queue[this.#head];
        delete this.#queue[this.#head];
        this.#head++;
        return removedEl;
    }

    isEmpty() {
        return this.#head === this.#tail;
    }

    toArray() {
        return Object.values(this.#queue)
    }
}

const myQueue2 =  new QueueObj();
myQueue2.enqueue(1);
myQueue2.enqueue(2);
myQueue2.enqueue(3);
myQueue2.enqueue(4);
console.log(myQueue2.dequeue());
console.log(myQueue2.toArray());