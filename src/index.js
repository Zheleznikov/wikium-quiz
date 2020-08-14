import SmoothScroll from 'smooth-scroll';
import screens from './js/screensArr';

new SmoothScroll('a[href*="#"]', {
  speed: 800,
  // easing: 'easeInCubic'
});

import quizData from './js/quizData';
import Quiz from './js/Quiz';
const main = document.querySelector('.main');
const startTestButton = document.querySelector('.lead__button');


sessionStorage.setItem('number', 0);
sessionStorage.setItem('answer', 0);



document.addEventListener("renderScreen", function(e) {
  new Quiz(main, quizData[e.detail.screenId], screens[e.detail.screenId]);
});

startTestButton.addEventListener('click', () => {
  new Quiz(main, quizData[0], screens[0]);
  })

  // new Quiz(main, quizData[4], screens[4]);



