// select dom element
const lampEl = document.querySelector('img');
const btnEl = document.querySelector('button');

btnEl.addEventListener('click', function () {
  if (lampEl.src.includes('white')) {
    lampEl.src = './img/yellow_lamp.png'
    btnEl.innerText = 'TURN OFF'
  } else {
    lampEl.src = './img/white_lamp.png'
    btnEl.innerText = 'TURN ON'
  }
})