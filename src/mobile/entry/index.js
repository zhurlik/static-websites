'use strict';
import testImg from '../image/index-img.png';

window.addEventListener('load', () => {
    setTimeout(() => {
        document.write('<h1>Hello Mobile!!!</h1>');
        document.write(`<img src="${testImg}" alt="mobile image"/>`);
    }, 2000);
});