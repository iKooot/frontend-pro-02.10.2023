# Task 18

## Hamburgers

#### Мережа фастфудів пропонує кілька видів гамбургерів:

* маленький (50 тугриків, 20 калорій);
* великий (100 тугриків, 40 калорій);

#### Гамбургер може бути з одним із декількох видів начинок:

* сиром (+ 10 тугриків, + 20 калорій);
* салатом (+ 20 тугриків, + 5 калорій);
* картоплею (+ 15 тугриків, + 10 калорій);

#### Можна додати добавки:

* посипати приправою (+15 тугриків, 0 калорій)
* полити майонезом (+ 20 тугриків, +5 калорій).

Напишіть програму, яка розраховує вартість та калорійність гамбургера. Використовуйте ООП підхід.

(підказка: потрібен клас Гамбургер, константи, методи для вибору опцій та розрахунку потрібних величин)

Приклад роботи коду:
```js
// маленький гамбургер з начинкою з сиру
const hamburger = new Hamburger(Hamburger .SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log("Calories:" + hamburger.calculate ());

// скільки коштує
console.log("Price:" + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А скільки тепер коштує?
console.log("Price with sauce:" + hamburger.calculatePrice());
```

# Task 19

## SuperMath

### Створити клас SuperMath.

Додати до екземпляра метод - check(obj), параметр obj якого має властивості X, Y, znak. 
Метод повинен підтвердити у користувача, чи хоче він зробити дію znak c Х і У. Якщо хоче, зробити математичну дію znak (яка описана в прототипі), інакше - запитати введення нових даних через метод input() класу SuperMath.

Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.

При введенні znak потрібно перевірити коректність введення на можливі математичні дії.
