const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const lable = document.querySelector('label');
/****************************************
 *                  interfaces          *
 ****************************************/
// console.log(h1)
// console.log(h1 instanceof HTMLHeadingElement)
// console.log(h1 instanceof HTMLBodyElement)
// console.log(h1 instanceof HTMLElement)
// console.log(h1 instanceof Element)
// console.log(h1 instanceof Node)
// console.log(h1 instanceof EventTarget)
/****************************************
 *                  interfaces          *
 ****************************************/
// console.log(h1.nodeType)
// for ( const node of document.childNodes ) {
//     if (node.nodeType !== 1) {
//         console.log(node)
//     }
// }
/****************************************
 *                  nodes          *
 ****************************************/
// for ( const node of document.body.childNodes ) {
//     if (node.tagName) console.log(node.tagName)
//     if (!node.tagName) console.log(node.nodeName)
// }
/****************************************
 *                  innerHTML          *
 ****************************************/
// console.log(h1.innerHTML)
// console.log(lable.innerHTML)
// console.log(typeof lable.innerHTML)
// // h1.innerHTML = 'Hello folks!';
// // console.log(h1.innerHTML)
// // h1.innerHTML = 'Hello ' + '<span style="font-weight: 300">folks!</span>';
// // console.log(lable.innerHTML)
// // lable.outerHTML = 'hello'
// console.log(lable.outerHTML)
/****************************************
 *                  node value          *
 ****************************************/
// for ( const node of document.body.childNodes ) {
//     console.log(node.data)
// }
/****************************************
 *                 content              *
 ****************************************/
// console.log(p.textContent);
// p.textContent = '!_!WoW!_!';
/****************************************
 *                 hidden              *
 ****************************************/
// p.hidden = true
/****************************************
 *                 attributes           *
 ****************************************/
// h1.showContent = function () {
//     console.log(this.innerHTML)
// }
// h1.showContent()
// console.log(h1)
// console.dir(h1)
// console.log(h1.id)
// console.log(h1.showContent)
// console.log(h1.hasAttribute('showContent'))
// console.log(h1.hasAttribute('id'))
// h1.setAttribute('id', 'title')
// console.log(h1.hasAttribute('id'))
// console.log(h1.getAttribute('id'))
// h1.removeAttribute('id')
// console.log(h1.hasAttribute('id'))
// console.log(Array.from(h1.attributes))
/****************************************
 *                 dataType           *
 ****************************************/
// lable.dataset.id = '1'
// console.log(document.querySelector('[data-id]'))
// lable.children[0].dataset.userName = 'serhii';
/****************************************
 *                 createEl             *
 ****************************************/
// const array = [1, 2, 3, 4, 5]
// const list = document.createElement('ul');
// document.body.append(list)
// array.forEach( el => {
//     const li = document.createElement('li');
//     li.textContent = el.toString();
//     list.append(li)
// })
/****************************************
 *                 createEl             *
 ****************************************/
// const array = [1, 2, 3, 4, 5]
// const list = document.createElement('ul');
// document.body.insertAdjacentElement('beforeend', list)
// array.forEach( el => {
//     const li = document.createElement('li');
//     li.textContent = el.toString();
//     list.insertAdjacentElement( 'beforeend', li)
// })
/****************************************
 *                 createEl             *
 ****************************************/
// p.remove()
/****************************************
 *                 createEl             *
 ****************************************/
// const lableClone = lable.cloneNode(true);
// console.log(lableClone)
/****************************************
 *                 createEl             *
 ****************************************/
// const array = [1, 2, 3, 4, 5]
//
// function createList(data) {
//     const list = document.createElement('ul');
//     const fragment = new DocumentFragment();
//
//     data.forEach( el => {
//         const li = document.createElement('li');
//         li.textContent = String(el);
//
//         fragment.append(li);
//     })
//
//     list.append(fragment)
//     return list
// }
//
// document.body.insertAdjacentElement('beforeend', createList(array))
/****************************************
 *                 createEl             *
 ****************************************/
// url => ........ routing => if url contains users => users.active
// h1.className = 'title'
// h1.classList.add('new-class')
// h1.classList.remove('new-class')
// console.log(h1.classList.contains('new-class'));
// h1.classList.toggle('toggle')
// h1.classList.toggle('toggle')
// h1.classList.toggle('toggle')
/****************************************
 *                 createEl             *
 ****************************************/
h1.style.fontWeight = 300;
const cssTitle = 'opacity: 1; transition: opacity 10000ms ease;';
h1.style.cssText = cssTitle;