# Task10
## Реалізуйте функцію removeElement

Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

Наприклад:
```js
    const array = [1, 2, 3, 4, 5, 'string', [1, 2, 3]];
    removeElement(array, 5 );
    console.log(array);
    // Результат: [1, 2, 3, 4, 6, 7]
```

# Task11
## Реалізуйте функцію createHash

Реалізуйте функцію createHash(key, secret), яка повертає рядок hash випадкових символів. hash має містити в собі закодовані key та secret.

Якщо я викличу декілька разів createHash з однаковими параметрами, то повернутися має одне і те саме значення.

Наприклад:
```js
    const key = prompt('Enter some key');
    const secret = 'someSecret';
    
    const key = createHash(key, secret); // eg599gb60q926j8i
    const key2 = createHash(key, secret); // eg599gb60q926j8i
    const key3 = createHash(key, secret); // eg599gb60q926j8i
```

# Task12
## Написати функцію factorial

Написати функцію factorial(n), яка повертає n!, використовуючи рекурсію.

Факторіал натурального числа – це число, помножене на себе мінус один, потім на себе мінус два, і так далі до 1. Факторіал n позначається як n!

Наприклад: n! = n * (n - 1) * (n - 2) * ...*1

Приклади значень для різних n
1. 1
2. 2 * 1 = 2
3. 3 * 2 * 1 = 6
4. 4 * 3 * 2 * 1 = 24
5. 5 * 4 * 3 * 2 * 1 = 120