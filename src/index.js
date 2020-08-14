import SmoothScroll from 'smooth-scroll';
import screens from './js/screensArr';
import results from './js/resArr';

new SmoothScroll('a[href*="#"]', {
  speed: 1200,
  easing: 'Linear'
    // easing: 'easeInCubic'
});


import quizData from './js/quizData';
import Quiz from './js/Quiz';
import Hurray from './js/Hurray';
import Res from './js/Res';
import Form from './js/Form';

const main = document.querySelector('.main');
const startTestButton = document.querySelector('.lead__button');


sessionStorage.setItem('number', 0);
sessionStorage.setItem('answer', 0);


document.addEventListener("renderScreen", function(e) {
  removeHash();
  const currentScreen = e.detail.screenId;
  console.log('currentScreen', currentScreen);
  const result = +sessionStorage.getItem('answer');

  console.log('баллы в индексе - ', result)

  if (currentScreen < 10) {
    new Quiz(main, quizData[currentScreen], screens[currentScreen], removeHash);
  } else if (currentScreen === 10) {
    new Hurray(main);
    const form = document.querySelector('.form');
    new Form(form);
  } else if (currentScreen === 'result') {

    console.log('финальный рез - ', result)

    if (result > 17) {
      new Res(main, results[0]);
    } else if (result < 18 && result > 9) {
      new Res(main, results[1]);
    } else {
      new Res(main, results[2]);
    }


  } else if (currentScreen === 'again') {
    main.innerHTML = '';
    new Quiz(main, quizData[0], screens[0], removeHash);
  }

});


startTestButton.addEventListener('click', () => {
  new Quiz(main, quizData[0], screens[0], removeHash);
})

function removeHash() {
  setTimeout(() => {
    history.pushState('', document.title, window.location.pathname);
  }, 1)
}

startTestButton.addEventListener('click', removeHash);
