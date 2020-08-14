import SmoothScroll from 'smooth-scroll';
import screens from './js/screensArr';
import results from './js/resArr';

// new SmoothScroll('a[href*="#"]', {
//   speed: 1200,
//   easing: 'Linear'
//     // easing: 'easeInCubic'
// });

function removeHash() {
  setTimeout(() => {
    history.pushState('', document.title, window.location.pathname);
  }, 1)
}


import quizData from './js/quizData';
import Quiz from './js/Quiz';
import Hurray from './js/Hurray';
import Res from './js/Res';
import Form from './js/Form';

const main = document.querySelector('.main');
const startTestButton = document.querySelector('.lead__button');

startTestButton.addEventListener('click', removeHash);

// new Res(main, results[1]);

sessionStorage.setItem('number', 0);
sessionStorage.setItem('answer', 0);


// new Hurray(main);
// const form = document.querySelector('.form');

// new Form(form);

document.addEventListener("renderScreen", function(e) {
  const currentScreen = e.detail.screenId;
  console.log('currentScreen', currentScreen);

  if (currentScreen < 10) {
    new Quiz(main, quizData[currentScreen], screens[currentScreen], removeHash);
  } else if (currentScreen === 10) {
    new Hurray(main);
    const form = document.querySelector('.form');
    new Form(form);
  } else if (currentScreen === 'result') {

    const result = sessionStorage.getItem('answer');
    
    if (result > 17) {
      new Res(main, results[0]);
    } else if (result < 18 && result > 9) {
      new Res(main, results[1]);
    } else {
      new Res(main, results[2]);
    }
    


  }


});



startTestButton.addEventListener('click', () => {
  new Quiz(main, quizData[0], screens[0], removeHash);
})

// new Quiz(main, quizData[9], screens[9], removeHash);