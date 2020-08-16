import scroll from "./js/scroll";
import screens from "./js/screensArr";
import results from "./js/resArr";
import probarElements from "./js/probar";

import quizData from "./js/quizData";
import Quiz from "./js/Quiz";
import Hurray from "./js/Hurray";
import Res from "./js/Res";
import Form from "./js/Form";
import Popup from "./js/Popup";
import removeHash from "./js/removeHash";
import { showShare, hideShare } from "./js/footer";

const main = document.querySelector(".main");
const startTestButton = document.querySelector(".lead__button");
const resultBlock = document.querySelector(".hurray");
const probar = document.querySelector(".probar");
const seeResultButton = document.querySelector(".form__button");
const page = document.querySelector(".page");
const wiki = document.querySelector(".wiki");

// sessionStorage.setItem("number", 0);

new Popup(document.querySelector(".popup"));


function getFirstScreen() {
  new Quiz(main, quizData[0], screens[0], removeHash);
  startTestButton.removeEventListener("click", getFirstScreen);
  probar.classList.add("probar_on");
  sessionStorage.setItem("answer", 0);
}

function resultHandle() {
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
}

function startQuizAgain() {
  sessionStorage.setItem("answer", 0);
  main.innerHTML = "";
  wiki.innerHTML = "";
  probar.innerHTML = probarElements;
  probar.classList.add("probar_on");
  new Quiz(main, quizData[0], screens[0], removeHash);
  hideShare();
  startTestButton.removeEventListener("click", getFirstScreen);
}

function whichScreenNextHandle(e) {
  removeHash();
  const currentScreen = e.detail.screenId;
  const result = +sessionStorage.getItem("answer");
  console.log("currentScreen - ", currentScreen);
  console.log("баллы - ", result);

  switch (true) {
    case currentScreen < 10:
      new Quiz(
        main,
        quizData[currentScreen],
        screens[currentScreen],
        removeHash
      );
      break;
    case currentScreen === 10:
      // resultBlock.classList.add("hurray_on");
      resultHandle();
      showShare();

      break;
    // case currentScreen === 'result':
    //   resultHandle();
    //   showShare();
    case currentScreen === "again":
      startQuizAgain();
      break;
  }
}



document.addEventListener("renderScreen", (e) => whichScreenNextHandle(e));
seeResultButton.addEventListener("click", resultHandle);
// startTestButton.addEventListener("click", getFirstScreen);

document.querySelectorAll('a').forEach(link => link.addEventListener('click', removeHash));

// TESTING

// resultBlock.classList.add("hurray_on");
// new Form(document.querySelector('.form'));

// new Res(main, results[2]);

// resultBlock.classList.add("hurray_on");
// new Hurray();
new Quiz(main, quizData[7], screens[7], removeHash);
