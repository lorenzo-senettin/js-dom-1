// select dom element
const lampEl = document.querySelector('img');
const btnEl = document.querySelector('button');

btnEl.addEventListener('click', function () {
  lampEl.src = './img/yellow_lamp.png'
})