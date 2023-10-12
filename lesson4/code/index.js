// let userMessage = prompt('enter message'); // null => false || '' => false
//
// if (!userMessage) {
//     alert('Enter correct message!')
//     userMessage = prompt('enter message'); // null => false || '' => false
// }

// Don't do it

// if (userMessage === 'hello') {
//     alert('hello user')
//     //....
//     if (userMessage === 'hello') {
//         alert('hello user')
//         //....
//     } else if (userMessage === 'Good by') {
//         alert('good by user')
//         //....
//         if (userMessage === 'hello') {
//             alert('hello user')
//             //....
//         } else if (userMessage === 'Good by') {
//             alert('good by user')
//             //....
//         } else {
//             alert('What do you want?')
//             //....
//         }
//     } else {
//         alert('What do you want?')
//         //....
//     }
// } else if (userMessage === 'Good by') {
//     alert('good by user')
//     //....
// } else {
//     alert('What do you want?')
//     //....
// }

// alert('Great! thank you')

// const color = prompt('Enter color');

// if (color === 'red') {
//     console.log('red');
// } else if (color === 'black') {
//     console.log('black');
// } else {
//     console.log('i dont know you color');
// }
//
// switch (color) {
//     case 'red': console.log('red'); break;
//     case 'black':  console.log('black'); break;
//     default: console.log('i dont know you color');break;
// }

// switch (color) {
//     case 'red': {
//         console.log('red');
//         break;
//     }
//     case 'black': {
//         console.log('black');
//         break;
//     }
//     case 'yellow':
//     case 'white':
//     case 'brown': {
//         console.log('yellow or white or brown');
//         break;
//     }
//     default: {
//         console.log('i dont know you color');
//         break;
//     }
// }

// const message = prompt('Enter message')
//
// (message > 5) && (true || false)
//     ? 4 > 5
//         ? 'yes'
//         : 6 === 4
//             ? 'yes'
//             : 'no'
//     : 'message 2';

// const cos = Math.cos(543) // cosines
// const sin = Math.sin(543) // sinus
// const root = Math.sqrt(543) // root