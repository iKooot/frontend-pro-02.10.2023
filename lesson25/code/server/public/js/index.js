const socket = io();
const button = document.querySelector('[data-button]');
const input = document.querySelector('[data-input]');
const list = document.querySelector('[data-list]');

button.addEventListener('click', () => {
    if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
    }
});

socket.on('chat message', (msg) => {
    const item = document.createElement('li');
    item.classList.add('list-group-item')
    item.textContent = msg;
    list.appendChild(item);
});