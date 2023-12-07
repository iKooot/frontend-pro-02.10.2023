const title = document.querySelector("h1");
const input = document.querySelector("input");
const form = document.querySelector("form");
const buttonsContainer = document.getElementById("buttons-container");
const link = document.querySelector("a");
/****************************************
 *                  attr                *
 ****************************************/
//
// title.onclick = () => {
//     console.log('hello');
// }
// title.onclick = () => {
//     console.log('hello 2');
// }
//
// const onClickHandler = () => {
//     console.log(this)
// }
//
// title.onclick = onClickHandler
// // title.onclick = onClickHandler() // dont do this
//
// title.onclick = null;
//
// // title.setAttribute('click', () => { console.log(1)}) // dont do this

/****************************************
 *                 addEventListener     *
 ****************************************/
// const clickHandle = () => {
//     console.log('Click from function');
// }
//
// const eventsObj = {
//     handleEvent() {
//         console.log('log from obj')
//     },
// };
//
// title.addEventListener('click', () => {
//     console.log('Title clicked');
// })
// title.addEventListener('click', clickHandle)
// title.addEventListener('click', eventsObj)
// title.addEventListener('mouseover', () => {
//     console.log('mouse over')
// })
// title.addEventListener('mouseout', () => {
//     console.log('mouse out')
// })
/****************************************
 *         removeEventListener          *
 ****************************************/
// const clickHandle = () => {
//     console.log('Click from function');
// }
// title.addEventListener('click', clickHandle)
// title.removeEventListener('click', () => {
//     console.log('Click from function');
// })
// title.removeEventListener('click', clickHandle)
/****************************************
 *         removeEventListener          *
 ****************************************/
// const showEventHandler = (event) => {
//     if (event.type === 'input') console.log(event.target.value)
//     if (event.type === 'click') console.log(event.target)
// }
// title.addEventListener('click', showEventHandler)
// input.addEventListener('input', showEventHandler)

/****************************************
 *         example                      *
 ****************************************/

// class InputHandlers {
//     handleEvent(event) {
//         switch (event.type) {
//             case 'click': {
//                 console.log('click')
//                 break
//             }
//             case 'input': {
//                 console.log('input')
//                 break
//             }
//             default: {
//                 console.log('Unnamed event')
//                 break
//             }
//         }
//     }
// }
//
// title.addEventListener('click', new InputHandlers)
// input.addEventListener('input', new InputHandlers)

// class InputHandlers {
//     handleEvent(event) {
//         const method = "on" + event.type[0].toUpperCase() + event.type.slice(1); //onClick
//         this[method](event)
//     }
//
//     onClick(event) {
//         console.log('click', event)
//     }
//
//     onInput(event) {
//         console.log('input', event)
//     }
// }
//
// title.addEventListener('click', new InputHandlers)
// input.addEventListener('input', new InputHandlers)
/****************************************
 *                   floating            *
 ****************************************/
// document.body.addEventListener('click', function (event) {
//     console.log('click on body', event.target);
//     console.log('body this', this);
//     console.log('body currentTarget', event.currentTarget);
// })
// form.addEventListener('click', function (event) {
//     console.log('click on form', event.target)
//     console.log('form this', this)
//     console.log('form currentTarget', event.currentTarget);
// })
// input.addEventListener('click', function (event) {
//     console.log('click on input', event.target)
//     console.log('input', this)
//     console.log('input currentTarget', event.currentTarget);
// })
// input.addEventListener('click', function (event) {
//     console.log('click2 on input', event)
// })
/****************************************
 *                   up                 *
 ****************************************/
// document.body.addEventListener('click', function (event) {
//     console.log('click on body', event.target);
//     console.log('body this', this);
//     console.log('body currentTarget', event.currentTarget);
// })
// form.addEventListener('click', function (event) {
//     console.log('click on form', event.target)
//     console.log('form this', this)
//     console.log('form currentTarget', event.currentTarget);
// })
// input.addEventListener('click', function (event) {
//     event.stopPropagation()
//     console.log('click on input', event.target)
//     console.log('input', this)
//     console.log('input currentTarget', event.currentTarget);
// })
// input.addEventListener('click', function (event) {
//     console.log('click2 on input', event)
// })
/****************************************
 *                   down               *
 ****************************************/
// for (const el of document.body.querySelectorAll("*")) {
//   el.addEventListener(
//     "click",
//     (event) => {
//       console.log('Capture phase => ', event.currentTarget);
//     },
//     { capture: true },
//   );
//     el.addEventListener(
//         "click",
//         (event) => {
//             console.log('Bubbling phase => ', event.currentTarget);
//         },
//         { capture: false },
//     );
// }
/****************************************
 *                   example               *
 ****************************************/
class ButtonsHandler {
    constructor(root) {
        this.element = root;
        this.element.onclick = this.onClick.bind(this)
    }

    submit(event) {
        console.log('submit')
    }

    reload(event) {
        console.log('reload')
    }

    save(event) {
        console.log('save')
    }

    onClick(event) {
        const action = event.target.dataset.action;
        if (action) {
            this[action](event)
        }
    }
}

new ButtonsHandler(buttonsContainer)

/****************************************
 *                   example             *
 ****************************************/

document.addEventListener('click', function (event) {
    if (!event.target.dataset.counter) event.target.value++
})

document.addEventListener('click', function (event) {
    const id = event.target.dataset.toggleId;
    if (!id) return

    const el = document.getElementById(id);
    el.hidden = !el.hidden
})

/****************************************
 *                   prevent             *
 ****************************************/

// link.addEventListener('click', (event) => {
//     event.preventDefault()
//     console.log(event)
// })

link.onclick = (event) => {
    console.log(event)
    return false
}
