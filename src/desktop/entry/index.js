'use strict';
import testImg from '../template/page/index/image/index-img.png';
import '../template/page/index/css/index.css'

window.addEventListener('load', () => {
    setTimeout(() => {
        const testDiv = document.createElement("div");
        testDiv.id = 'div_id';
        testDiv.innerHTML = "<h1>Hello Desktop!!!</h1>";
        testDiv.innerHTML +=  `<img width="150" height="150" src="${testImg}" alt="desktop image"/>`;
        document.body.innerHTML = '';
        document.body.appendChild(testDiv);
    }, 2000);
});
