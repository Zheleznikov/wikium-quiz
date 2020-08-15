import scroll from "./js/scroll";
import screens from "./js/screensArr";
import results from "./js/resArr";

import quizData from "./js/quizData";
import Quiz from "./js/Quiz";
import Hurray from "./js/Hurray";
import Res from "./js/Res";
import Form from "./js/Form";
import Popup from "./js/Popup";

const main = document.querySelector(".main");
const startTestButton = document.querySelector(".lead__button");
const resultBlock = document.querySelector(".hurray");
const probar = document.querySelector(".probar");
const seeResultButton = document.querySelector(".form__button");
const page = document.querySelector(".page");

sessionStorage.setItem("number", 0);
sessionStorage.setItem("answer", 0);

function getFirstScreen() {
  new Quiz(main, quizData[0], screens[0], removeHash);
  startTestButton.removeEventListener("click", getFirstScreen);
  probar.classList.add("probar_on");
}

startTestButton.addEventListener("click", getFirstScreen);

document.addEventListener("renderScreen", (e) => {
  removeHash();

  const currentScreen = e.detail.screenId;
  const result = +sessionStorage.getItem("answer");

  console.log("currentScreen - ", currentScreen);
  console.log("баллы - ", result);

  switch (true) {
    case currentScreen < 10:
      new Quiz(main, quizData[currentScreen], screens[currentScreen], removeHash);
      break;
    case currentScreen === 10:
      resultBlock.classList.add("hurray_on");
      break;
    case currentScreen === "again":
      main.innerHTML = "";
      new Quiz(main, quizData[0], screens[0], removeHash);
  }

  // if (currentScreen < 10) {
  //   new Quiz(main, quizData[currentScreen], screens[currentScreen], removeHash);
  // }
  // else if (currentScreen === 10) {
  //   resultBlock.classList.add('hurray_on');
  // }
  // else if (currentScreen === 10) {

  //   console.log('финальный рез - ', result)
  //   if (result > 17) {
  //     new Res(main, results[0]);
  //   } else if (result < 18 && result > 9) {
  //     new Res(main, results[1]);
  //   } else {
  //     new Res(main, results[2]);
  //   }

  //   new Popup(document.querySelector('.popup'))

  // } else if (currentScreen === 'again') {
  //     main.innerHTML = '';
  //     new Quiz(main, quizData[0], screens[0], removeHash);
  // }
});

seeResultButton.addEventListener("click", () => {
  const result = +sessionStorage.getItem("answer");
  switch (true) {
    case result > 17:
      new Res(page, results[0]);
      break;
    case result < 18 && result > 9:
      new Res(page, results[1]);
      break;
    case result < 10:
      new Res(page, results[2]);
      break;
  }
});

// resultBlock.classList.add("hurray_on");

function removeHash() {
  setTimeout(() => {
    history.pushState("", document.title, window.location.pathname);
  }, 1);
}

// document.querySelectorAll('a').forEach(link => link.addEventListener('click', removeHash));
