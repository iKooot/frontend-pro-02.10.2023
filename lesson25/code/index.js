// async function getUsers() {
//
//     const response = await fetch("https://reqres.in/api/users", {
//         method: "GET",
//     });
//
//     const data = await response.json();
//
//     console.log(data);
// }
//
// getUsers();
//
// async function patchUser() {
//     const newUser = {
//         name: 'Jhon',
//         surname: 'Doe'
//     }
//     const response = await fetch("https://reqres.in/api/users/1", {
//         method: "PATCH",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newUser)
//     });
//
//     const data = await response.json();
//
//     console.log(data);
// }
//
// patchUser()

/****************************************
 * URL
 ****************************************/

// const url = new URL('users', 'https://reqres.in/api')
//
// url.searchParams.set('userName', 'Serhii Savchuk')
//
// console.log(url)

/****************************************
 * XHR
 ****************************************/

// const xhr = new XMLHttpRequest();
// xhr.timeout = 1000
// xhr.responseType = 'json'
// xhr.withCredentials = true
//
// const url = new URL('api/users', 'https://reqres.in');
// xhr.open('GET', url, true);
//
// xhr.setRequestHeader('Content-Type', 'application/json')
//
// xhr.send()
//
// xhr.onload = () => {
//     console.log(xhr)
//     console.log(xhr.getAllResponseHeaders())
//     console.log('response', xhr.response)
// }
//
// xhr.onerror = () => {
//     console.log('error')
// }
//
// xhr.onprogress = (e) => {
//     console.log(e)
//     console.log('loaded => ', e.loaded)
//     if (e.lengthComputable) console.log('loaded => ', e.loaded, 'total => ', e.total)
// }

/****************************************
 * sync
 ****************************************/

// console.log(1)
//
// const xhr = new XMLHttpRequest();
//
// const url = new URL('api/users', 'https://reqres.in');
// xhr.open('GET', url, false);
//
// try {
//     xhr.send()
//
//     console.log(xhr.response)
// } catch (e) {
//     console.log(e)
// }
//
// console.log(2)

// async function subscribe() {
//     const resp = await fetch('https://reqres.in/api/users');
//
//     if (resp.status === 502) {
//         await subscribe()
//     } else if (resp.status !== 200) {
//         console.log(resp.statusText)
//
//         await new Promise((resolve, reject) => {
//             setTimeout(resolve, 1000)
//         })
//
//         await subscribe()
//     } else {
//         console.log(await resp.json())
//
//         await subscribe()
//     }
// }

/****************************************
 * socket
 ****************************************/

const socket = new WebSocket('ws://localhost:3003');
const form = document.forms.chat;
const list = document.querySelector('[data-messages-list]');

socket.addEventListener('open', () => {
    console.log('Connection opened')
})

socket.addEventListener('message', (e) => {
    console.log('event = message', e.data)
    appendMessage(e.data)
})

socket.addEventListener('close', () => {
    console.log('Connection closed')
})

function sendMessage(message) {
    socket.send(message)
}

function appendMessage(message) {
    const li = document.createElement('li')
    li.classList.add('list-group-item')
    li.textContent = message
    list.insertAdjacentElement('beforeend', li)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    sendMessage(form.elements.message.value)
    form.elements.message.value = ''
})