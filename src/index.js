import SmoothScroll from 'smooth-scroll';

import screens from './js/screensArr';
import results from './js/resArr';

import quizData from './js/quizData';
import Quiz from './js/Quiz';
import Hurray from './js/Hurray';
import Res from './js/Res';
import Form from './js/Form';
import Popup from './js/Popup';

new SmoothScroll('a[href*="#"]', {
  speed: 800,
  easing: 'Linear'
});


const main = document.querySelector('.main');
const startTestButton = document.querySelector('.lead__button');
const resultBlock = document.querySelector('.hurray');
const probar = document.querySelector('.probar');


sessionStorage.setItem('number', 0);
sessionStorage.setItem('answer', 0);


function getFirstScreen() {
  new Quiz(main, quizData[0], screens[0], removeHash);
  startTestButton.removeEventListener('click', getFirstScreen);
  probar.classList.add('probar_on');
}

startTestButton.addEventListener('click', getFirstScreen);


document.addEventListener("renderScreen", function(e) {
  removeHash();

  const currentScreen = e.detail.screenId;
  const result = +sessionStorage.getItem('answer');

  console.log('currentScreen - ', currentScreen);
  console.log('баллы - ', result)

  if (currentScreen < 10) {
    new Quiz(main, quizData[currentScreen], screens[currentScreen], removeHash);
  } 
  else if (currentScreen === 10) {
    resultBlock.classList.add('hurray_on');
  } 
  else if (currentScreen === 10) {

    console.log('финальный рез - ', result)
    if (result > 17) {
      new Res(main, results[0]);
    } else if (result < 18 && result > 9) {
      new Res(main, results[1]);
    } else {
      new Res(main, results[2]);
    }

    new Popup(document.querySelector('.popup'))

  } else if (currentScreen === 'again') {
      main.innerHTML = '';
      new Quiz(main, quizData[0], screens[0], removeHash);
  }

});



function removeHash() {
  setTimeout(() => {
    history.pushState('', document.title, window.location.pathname);
  }, 1)
}

startTestButton.addEventListener('click', removeHash);


