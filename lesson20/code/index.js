/****************************************
 * custom
 ****************************************/
// const button = document.getElementById('custom-button');
//
// const customEvent = new KeyboardEvent('seyHello');
//
// button.addEventListener('seyHello', (e) => {
//     console.log('hello', e)
// })
//
// button.addEventListener('click', (e) => {
//     e.preventDefault()
//     button.dispatchEvent(customEvent);
// })
/****************************************
 * navigation
 ****************************************/
// console.log(document.forms);
// console.log(document.forms.example);
// console.log(document.forms.example.name);
// console.log(document.forms.example.elements.name);
// console.log(document.forms.example.elements.name.form);

/****************************************
 *
 ****************************************/

const name = document.forms.example.name;
const checkbox = document.forms.example.formCheck;
const textArea = document.forms.example.textArea;
const select = document.forms.example.select;
const email = document.forms.example.email;
const password = document.forms.example.password;
const submitButton = document.forms.example.submitButton;

/****************************************
 * input
 ****************************************/
//
// const name = document.forms.example.name;
// console.log(name.value);
// name.value = 1234;
// console.log(name.value);
// const checkbox = document.forms.example.formCheck;
// console.log(checkbox.value);
// console.log(checkbox.checked);
// checkbox.checked = true;
// console.log(checkbox.checked);
// const textArea = document.forms.example.textArea;
// console.log(textArea.value);
// textArea.value =
//   "gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg";

/****************************************
 * select
 ****************************************/
// console.log(select);
// console.log(select.options);
// console.log(select.value);
// console.log(select.selectedIndex);
//
// select.options[1].selected = true
//
// Array.from(select.options).forEach( el => {
//     console.log(el.selected);
// })

/****************************************
 * new Option
 ****************************************/
//
// function iterator() {
//     const keys = Object.keys(this)
//     let index = 0;
//
//     return {
//         next: () => {
//             if ( index < keys.length ) {
//                 const key = keys[index++];
//                 return {
//                     value: this[key], done: false
//                 }
//             } else {
//                 return { done: true }
//             }
//         }
//     }
// }
//
// const optionObj = [
//     { text: 'Text 1', value: 'text1', defaultSelected: true, select: true, [Symbol.iterator]: iterator },
//     { text: 'Text 2', value: 'text2', defaultSelected: false, select: false, [Symbol.iterator]: iterator },
//     { text: 'Text 3', value: 'text3', defaultSelected: false, select: false, [Symbol.iterator]: iterator },
// ]
//
// optionObj.forEach( el => {
//     const option = new Option(...el);
//     select.insertAdjacentElement('beforeend', option)
// } )

/****************************************
 * new Option
 ****************************************/

// email.addEventListener('focus', (e) => {
//     console.log('focus')
//     if ( e.currentTarget.classList.contains('valid')) e.currentTarget.classList.remove('valid')
//     if ( e.currentTarget.classList.contains('invalid')) e.currentTarget.classList.remove('invalid')
// })
//
// email.addEventListener('blur', (e) => {
//     console.log('blur')
//
//     if (e.currentTarget.value.includes('@')) {
//         e.currentTarget.classList.add('valid')
//     } else {
//         email.focus()
//         e.currentTarget.classList.add('invalid')
//     }
// })

/****************************************
 * new Option
 ****************************************/

// name.tabIndex = -1
// password.tabIndex = 2
// email.tabIndex = 3
// textArea.tabIndex = 4

/****************************************
 * focuse in
//  ****************************************/
//
// document.forms.example.onfocus = () => {
//     console.log('focus')
// }
//
// // document.forms.example.addEventListener('focus', (e) => {
// //     console.log('focus => ', e.target)
// // }, true)
//
// document.forms.example.addEventListener('focusin', (e) => {
//     console.log('focusin => ', e.target)
// })
//
// document.forms.example.addEventListener('focusout', (e) => {
//     console.log('focusout => ', e.target)
// })

/****************************************
 * change
 ****************************************/

// name.addEventListener('change', (e) => {
//     console.log(e.currentTarget.value)
// })
//
// checkbox.addEventListener('change', (e) => {
//     console.log(e.currentTarget.checked)
// })

/****************************************
 * change
 ****************************************/

// name.addEventListener('input', (e) => {
//     console.log(e.currentTarget.value)
// })

/****************************************
 * copy past cut
 ****************************************/

// name.addEventListener('copy', (e) => {
//     e.preventDefault()
//     e.clipboardData.clearData()
//     e.clipboardData.setData('text', 'ups something went wrong')
// })
//
// name.addEventListener('paste', (e) => {
//     console.log('paste', e.clipboardData.getData('text'))
// })

/****************************************
 * copy past cut
 ****************************************/

const data = {};

name.addEventListener('change', e => {
    data[e.currentTarget.name] = e.currentTarget.value
    console.log(data)
})

// submitButton.addEventListener('click', (e) => {
//     e.preventDefault()
//     document.forms.example.submit()
//     console.log('submited', data)
// })

document.forms.example.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('submited', data)
})
