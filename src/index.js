import SmoothScroll from 'smooth-scroll';
import screens from './js/screensArr';

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

const main = document.querySelector('.main');
const startTestButton = document.querySelector('.lead__button');

startTestButton.addEventListener('click', removeHash);


sessionStorage.setItem('number', 0);
sessionStorage.setItem('answer', 0);


// new Hurray(main);
// document.addEventListener("renderScreen", function(e) {
//   const currentScreen = e.detail.screenId;
//   if (currentScreen < 10) {
//     new Quiz(main, quizData[currentScreen], screens[currentScreen], removeHash);
//   } else if (currentScreen === 10) {
//     new Hurray(main);
//   } 


// });

// startTestButton.addEventListener('click', () => {
//   new Quiz(main, quizData[0], screens[0], removeHash);
// })

// new Quiz(main, quizData[9], screens[9], removeHash);