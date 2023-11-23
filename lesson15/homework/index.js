// class Human {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     showInfo() {
//         console.log(`Name: ${this.name}, age: ${this.age}`);
//     }
// }
//
// class Auto {
//     constructor(brand, model, year, number) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//         this.number = number;
//         this.owner = null;
//     }
//
//     get autoOwner() {
//         return this.owner;
//     }
//
//     set autoOwner(owner) {
//         if (!(owner instanceof Human)) {
//             console.warn('This is not a human');
//             return;
//         }
//
//         if (owner.age < 18) {
//             console.warn(`${owner.name} is too yang!`);
//         }
//
//         this.owner = owner;
//     }
//
//     showInfo() {
//         console.log(`Car info:\nBrand: ${this.brand};\nModel: ${this.model};\nYear: ${this.year};\nNumber: ${this.number};\nOwner:\n`);
//         if (this.owner) this.owner.showInfo();
//     }
// }
//
// const human = new Human('Serhii', 32);
// const car = new Auto('Toyota', 'Rav4', 2002, 'BH0000HB');
// car.autoOwner = human;
// car.showInfo();

// ************************

class Student {
    constructor(name, surname, yearOfB) {
        this.name = name;
        this.surname = surname;
        this.yearOfB = yearOfB;
        this.grades = [];
        this.visits = new Array(25).fill(null);
    }

    getAge() {
        return new Date().getFullYear() - this.yearOfB;
    }

    getAverageGrade() {
        if (this.grades.length === 0) return 0;
        return this.grades.reduce( (acc, el) => acc + el, 0) / this.grades.length;
    }

    estimate(value) {
        if (value >= 0  || value <= 100) {
            this.grades.push(value)
        }
    }

    updateVisiting(status) {
        const nextElIndex = this.visits.indexOf(null);
        if ( nextElIndex !== -1) {
            this.visits[nextElIndex] = status;
        } else {
            console.log('Course is finished!');
        }
    }

    present() {
        this.updateVisiting(true);
    }

    absent() {
        this.updateVisiting(false);
    }

    calculateVisitingRate() {
        const presentCount = this.visits.filter( status => status === true).length;
        const presentVisits = this.visits.filter( status => status !== null).length;
        return presentCount / presentVisits;
    }

    summary() {
        const averageVisits = this.calculateVisitingRate();
        const averageGrade = this.getAverageGrade();

        if (averageGrade > 90 && averageVisits > 0.9) {
            return  'Молодець!'
        }

        if (averageGrade > 90 || averageVisits > 0.9) {
            return  'Добре, але можна краще'
        }

        return 'Редиска!';
    }
}

const student = new Student('Serhii', 'Sevchuk', 1991);
student.present()
student.present()
student.present()
student.absent()
student.absent()
console.log(student.getAge());
console.log(student.summary());
console.log(student);