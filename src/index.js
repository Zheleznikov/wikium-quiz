import SmoothScroll from 'smooth-scroll';

new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  easing: 'easeInCubic'
});

import quizData from './js/quizData';
import Quiz from './js/Quiz';
const main = document.querySelector('.main');
const startTestButton = document.querySelector('.lead__button');



startTestButton.addEventListener('click', () => {
  new Quiz(main, quizData[0], quizData);
  console.log(document.querySelectorAll('.screen__button'));

  // document.querySelector('.screen__button').addEventListener('click', () => {
  //   sessionStorage.setItem("number", +sessionStorage.getItem("number") + 1);
  //   console.log(sessionStorage.getItem('number'));
  //   let number = sessionStorage.getItem("number");
  //   new Quiz(main, quizData[number]);
  })

  //   document.querySelectorAll('.screen__button').forEach(button => button.addEventListener('click', () => {
  //     sessionStorage.setItem("number", +sessionStorage.getItem("number") + 1);
  //     console.log(sessionStorage.getItem('number'));
  //     let number = sessionStorage.getItem("number");
  //     new Quiz(main, quizData[number]);
  //   }))


sessionStorage.setItem('number', 0);
sessionStorage.setItem('answer', 0);