import { foo, myFilter } from './scripts/utils.js';
import Cat from './images/cat.jpeg';

import './styles/main.scss';
import './css/main.css';

const img = document.createElement('img');
img.src = Cat;

document.body.insertAdjacentElement('beforeend', img);

console.log(foo(1, 2));
console.log(myFilter([1, 1, 1, 1, 1, 2, 2, 2, 2]));
