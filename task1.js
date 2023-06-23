'use strict';

const createItem = (string) => {
    const li = document.createElement('li');
    li.textContent = string;
    return li;
};

const renderItem = (string, list) => {
    if (string.trim().length) {
        const li = createItem(string);
        list.append(li);
    }
};

const handlePrompt = () => {
    const list = document.querySelector('.list');
    const text = prompt('Say something...', '');

    switch (text) {
        case !text:
            break;
        case null:
        case 'exit':
            return null;
        case 'del':
            list.lastChild.remove();
            break;
        case 'clear':
            list.innerHTML = '';
            break;
        default:
            renderItem(text, list);
            break;
    }
    return setTimeout(handlePrompt, 0);
};

handlePrompt();


