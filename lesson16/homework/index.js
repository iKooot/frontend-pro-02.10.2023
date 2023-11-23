/****************************************
 *                  TASK 18             *
 ****************************************/

class Hamburger {
  static SIZE_SMALL = { price: 50, calories: 20 };
  static SIZE_BIG = { price: 100, calories: 40 };
  static STAFFING_CHESE = { price: 10, calories: 20 };
  static STAFFING_SALA = { price: 20, calories: 5 };
  static STAFFING_POTATO = { price: 15, calories: 10 };
  static TOPPINGS_SPICE = { price: 15, calories: 0 };
  static TOPPINGS_MAYO = { price: 20, calories: 5 };
  constructor(size, staffing) {
    this.size = size;
    this.staffing = staffing;
    this.toppings = [];
  }

  addTopping(topping) {
    this.toppings.push(topping);
    return this;
  }

  calculateCalories() {
    let calories = this.size.calories + this.staffing.calories;
    this.toppings.forEach((topping) => (calories += topping.calories));
    return calories;
  }

  calculatePrice() {
    let price = this.size.price + this.staffing.price;
    this.toppings.forEach((topping) => (price += topping.price));
    return price;
  }
}

const hamburger = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STAFFING_CHESE);
hamburger
  .addTopping(Hamburger.TOPPINGS_SPICE)
  .addTopping(Hamburger.TOPPINGS_MAYO);
console.log(hamburger.calculatePrice());
console.log(hamburger.calculateCalories());

/****************************************
 *                  TASK 19             *
 ****************************************/

class SuperMath {
  static OPERATION = ["+", "-", "/", "*", "%"];

  check(obj) {
      if (!obj || !obj.znak || !SuperMath.OPERATION.includes(obj.znak)) {
          console.warn('Invalid operator');
          this.input(obj);
          return;
      }

      if (confirm(`Do you want to work with this data: X: ${obj.X}, Y: ${obj.Y}, znak: ${obj.znak} ?`)) {
          const result = this.calculate(obj);
          console.log(result)
      } else {
          this.input(obj);
      }
  }

  input(obj) {
      obj.X = parseFloat(prompt('Enter X'));
      if (Number.isNaN(obj.X)) {
          alert('This data is bad digit');
          return;
      }

      obj.Y = parseFloat(prompt('Enter Y'));
      if (Number.isNaN(obj.Y)) {
          alert('This data is bad digit');
          return;
      }

      obj.znak = prompt(`Enter znak like this: ${SuperMath.OPERATION.join(', ')}`);
      if (!SuperMath.OPERATION.includes(obj.znak)) {
          alert('This data is bad digit');
          return;
      }

      this.check(obj);
  }

  calculate(obj) {
      switch (obj.znak) {
          case '+': return obj.X + obj.Y;
          case '-': return obj.X - obj.Y;
          case '*': return obj.X * obj.Y;
          case '/': return obj.X / obj.Y;
          case '%': return obj.X % obj.Y;
          default:
              console.warn('i dont recognize operation'); break;
      }
  }
}

const superMath = new SuperMath();
superMath.check({X: 12, Y: 3, znak: "/"})
