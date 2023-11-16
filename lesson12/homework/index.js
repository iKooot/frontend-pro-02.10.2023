function createSum() {
    let total = 0;

    function addToSum(x) {
        total += x;
        return total;
    }

    return addToSum;
}

const sumFunc = createSum();

console.log(sumFunc(3));  // 3
console.log(sumFunc(5));  // 8
console.log(sumFunc(20)); // 28

let ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this
    },
    down: function () {
        if (this.step !== 0) this.step--;
        return this
    },
    showStep: function () {
        console.log(this.step);
        return this
    }
};