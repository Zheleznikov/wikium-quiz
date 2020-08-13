import quizData from './js/quizData';
import Quiz from './js/Quiz';
const main = document.querySelector('.main');

new Quiz(main, quizData[0]);