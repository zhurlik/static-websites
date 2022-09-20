'use strict';
import testImg from '../image/index-img.png';

window.addEventListener('load', () => {
    setTimeout(() => {
        document.write('<h1>Hello Desktop!!!</h1>');
        document.write(`<img src="${testImg}" alt="desktop image"/>`);
    }, 2000);
});
