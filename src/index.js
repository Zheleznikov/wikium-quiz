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
const wiki = document.querySelector('.wiki');

sessionStorage.setItem("number", 0);
sessionStorage.setItem("answer", 0);



function getFirstScreen() {
  new Quiz(main, quizData[0], screens[0], removeHash);
  startTestButton.removeEventListener("click", getFirstScreen);
  probar.classList.add("probar_on");
}

startTestButton.addEventListener("click", getFirstScreen);

new Popup(document.querySelector('.popup'))

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


});

seeResultButton.addEventListener("click", () => {
  const result = +sessionStorage.getItem("answer");
  switch (true) {
    case result > 17:
      new Res(wiki, results[0]);
      break;
    case result < 18 && result > 9:
      new Res(wiki, results[1]);
      break;
    case result < 10:
      new Res(wiki, results[2]);
      break;
  }
});



function removeHash() {
  setTimeout(() => {
    history.pushState("", document.title, window.location.pathname);
  }, 1);
}

// document.querySelectorAll('a').forEach(link => link.addEventListener('click', removeHash));

// TESTING 

resultBlock.classList.add("hurray_on");
// new Form(document.querySelector('.form'));

// new Res(main, results[2]);