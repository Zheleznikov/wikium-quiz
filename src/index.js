import SmoothScroll from 'smooth-scroll';
import screens from './js/screensArr';

new SmoothScroll('a[href*="#"]', {
  speed: 1200,
  // easing: 'easeInCubic'
});

function removeHash() {
  setTimeout(() => {
    history.pushState('', document.title, window.location.pathname);
  }, 1)
}

document.querySelectorAll('a').forEach(link => link.addEventListener('click', removeHash));

import quizData from './js/quizData';
import Quiz from './js/Quiz';
const main = document.querySelector('.main');
const startTestButton = document.querySelector('.lead__button');


sessionStorage.setItem('number', 0);
sessionStorage.setItem('answer', 0);



document.addEventListener("renderScreen", function(e) {
  new Quiz(main, quizData[e.detail.screenId], screens[e.detail.screenId], removeHash);

});

startTestButton.addEventListener('click', () => {
  new Quiz(main, quizData[0], screens[0],removeHash);
  })

  // new Quiz(main, quizData[7], screens[7]);



