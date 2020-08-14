import SmoothScroll from 'smooth-scroll';

import screens from './js/screensArr';
import results from './js/resArr';

import quizData from './js/quizData';
import Quiz from './js/Quiz';
import Hurray from './js/Hurray';
import Res from './js/Res';
import Form from './js/Form';

new SmoothScroll('a[href*="#"]', {
  speed: 800,
  easing: 'Linear'
});




const main = document.querySelector('.main');
const startTestButton = document.querySelector('.lead__button');


sessionStorage.setItem('number', 0);
sessionStorage.setItem('answer', 0);

startTestButton.addEventListener('click', () => {
  new Quiz(main, quizData[0], screens[0], removeHash);
})


document.addEventListener("renderScreen", function(e) {
  removeHash();

  const currentScreen = e.detail.screenId;
  const result = +sessionStorage.getItem('answer');

  console.log('currentScreen - ', currentScreen);
  console.log('баллы - ', result)

  if (currentScreen < 10) {
    new Quiz(main, quizData[currentScreen], screens[currentScreen], removeHash);
  } 
 
  // else if (currentScreen === 10) {

  //   new Hurray(main);
  //   const form = document.querySelector('.form');
  //   new Form(form);
    
  // } 

  else if (currentScreen === 10) {
    // window.location.hash = '#12';

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


// new Hurray(main);
// const form = document.querySelector('.form');
// new Form(form);


// new Res(main, results[0]);

function removeHash() {
  setTimeout(() => {
    history.pushState('', document.title, window.location.pathname);
  }, 1)
}

startTestButton.addEventListener('click', removeHash);
