'use strict';

window.addEventListener('load', () => {
   setTimeout(() => {
      document.getElementById('about_text').innerHTML = '<h1>Mobile About page!!!</h1>';
      document.getElementById('about_image').style.display = 'block';
   }, 2000);
});