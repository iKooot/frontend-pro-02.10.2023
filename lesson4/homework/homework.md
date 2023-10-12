# Task 5

## Калькулятор 2.0

За допомогою prompt, alert та if else реалізувати наступний функціонал:
* Привітатись з юзером ('Welcome to calculator!');
* Спитати що юзер хоче зробити ('What action you want to do? Add, Diff, Mult, Div, Sqrt, Exp');
```text
  What action you want to do? 
  
  Add
  Diff
  Mult
  Div
  Sqrt
  Sin
  Cos
```
* У залежності від того що юзер обрав спитати чило або числа ('Enter first number' | 'Enter number');
* Результат операції вивести у alert ('Sum of {first number} and {second number} is {sum}');
* Попрощатися ('Good by, see you later.');

Негативні кейси:
* Якщо юзер ввів не валідне число вивести месседжи ('This is bad digit, good by') та завершити програму;
* Якщо юзер натиснув відміна то завершити роботу калькулятора та попрощатися ('Good by, see you later.');
* Якщо юзер обрав невідому операцію то попрощатись з ним ('Good by, see you later.');

## Калькулятор 2.1

Переробити код з завдання Калькулятор 2.0 на умовні конструкції switch case та тернарні оператори.

Функціонал залишається таким самим