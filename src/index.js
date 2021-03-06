import scroll from "./js/scroll";
import IMask from 'imask';
import screens from "./js/screensArr";
import results from "./js/resArr";

import quizData from "./js/quizData";
import Quiz from "./js/Quiz";
import Res from "./js/Res";
import Popup from "./js/Popup";
import removeHash from "./js/removeHash";
import { showShare, hideShare } from "./js/footer";

const main = document.querySelector(".main");
const startTestButton = document.querySelector(".lead__button");
const hurray = document.querySelector(".hurray");
const probar = document.querySelector(".probar");
const formButton = document.querySelector(".form__button");
const popupPres = document.querySelector('.popup_pres');
const openPresPopupButton = document.querySelector('.footer__modal');
const wikium = document.querySelector(".popup_wikium");
const resContainer = document.querySelector('.res');
const form = document.querySelector('.form');
const name = document.querySelector('.name');
const email = document.querySelector('.email');
const phone = document.querySelector('.phone');

const closeIframeButton = document.querySelector('.popup__close_wikium');
const allLinks = document.querySelectorAll('a');

new Popup(popupPres, openPresPopupButton);


function getFirstScreen() {
  new Quiz(main, quizData[0], screens[0], removeHash);
  startTestButton.removeEventListener("click", getFirstScreen);
  probar.classList.add("probar_on");
  sessionStorage.setItem("answer", 0);
}

function resultHandle() {
  showShare();
  const result = +sessionStorage.getItem("answer");
  switch (true) {
    case result > 17:
      new Res(resContainer, results[0]);
      break;
    case result < 18 && result > 9:
      new Res(resContainer, results[1]);
      break;
    case result < 10:
      new Res(resContainer, results[2]);
      break;
  }
}


function whichScreenNextHandle(e) {
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
      resultHandle();
      break;
    case currentScreen === "finalRes":
      hurray.classList.add("hurray_on");
      probar.classList.remove("probar_on");

      break;
  }
}


function clearForm() {
  name.value = '';
  email.value = '';
  phone.value = '';
}


document.addEventListener("renderScreen", (e) => whichScreenNextHandle(e));
startTestButton.addEventListener("click", getFirstScreen);
closeIframeButton.addEventListener('click', clearForm)
allLinks.forEach(link => link.addEventListener('click', removeHash));


form.onsubmit = () => {
    const wikiPopup = new Popup(wikium, formButton, 'iframe');
    wikiPopup.open();
}





const phoneMask = IMask(phone, { mask: '+{7}(000)000-00-00'});

// TESTING




