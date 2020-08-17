export default class Quiz {
  constructor(main, data, screenHtml, removeHash) {
    this.main = main;
    this.data = data;
    this.screenHtml = screenHtml;
    this.removeHash = removeHash;

    this.screen = null;

    this.render();

    this.option1 = this.screen.querySelector(".option-1");
    this.option2 = this.screen.querySelector(".option-2");
    this.option3 = this.screen.querySelector(".option-3");
    this.option4 = this.screen.querySelector(".option-4");

    this.hint1 = this.screen.querySelector(".hint-1");
    this.hint2 = this.screen.querySelector(".hint-2");
    this.hint3 = this.screen.querySelector(".hint-3");
    this.hint4 = this.screen.querySelector(".hint-4");

    this.icon1 = this.screen.querySelector(".icon-1");
    this.icon2 = this.screen.querySelector(".icon-2");
    this.icon3 = this.screen.querySelector(".icon-3");
    this.icon4 = this.screen.querySelector(".icon-4");

    this.bg = this.screen.querySelector(".screen__bg");
    this.content = this.screen.querySelector(".screen__content");
    this.nextButton = this.screen.querySelector(".next-button");
    this.comment = this.screen.querySelector(".comment");

    this.probarIcon = document.querySelector(this.data.probarclass);

    this.options = this.screen.querySelectorAll(".screen__option");
    this.renderHandle();
    this.handle1();
    this.handle2();
    this.handle3();
    this.handle4();
    this.handleNext();
    this.probarHandle();
  }

  // генерим событие чтобы снаружи можно было его отлавливать
  makeEventRenderScreen() {
    const next = this.data.number;
    const event = new CustomEvent("renderScreen", {
      detail: {
        screenId: next,
      },
    });
    document.dispatchEvent(event);
  }

  probarHandle() {
    this.probarIcon.classList.add("number_current");
    this.probarIcon.href = `#${this.data.number}`;
  }

  probarHandleIsCorrect(option) {
    this.probarIcon.innerHTML = `<img src="" alt="" class="number__svg">`;

    switch (option.getAttribute("data-value") != 0) {
      case true:
        this.probarIcon.classList.remove("number_current");
        this.probarIcon.classList.add("number_correct");
        this.probarIcon.querySelector("img").src =
          "./images/number-correct.svg";
        break;
      case false:
        this.probarIcon.classList.remove("number_current");
        this.probarIcon.classList.add("number_wrong");
        this.probarIcon.querySelector("img").src = "./images/number-wrong.svg";
        break;
    }
  }

  handleNext() {
    this.nextButton.addEventListener("click", () => {
      this.nextButton.style.display = "none";
      this.makeEventRenderScreen();
    });
    this.removeHash();
  }

  showCorrectOrNot() {
    if (this.option1.getAttribute("data-value") != 0) {
      this.option1.classList.add("option_correct");
    } else {
      this.option1.classList.add("option_wrong");
    }

    if (this.option2.getAttribute("data-value") != 0) {
      this.option2.classList.add("option_correct");
    } else {
      this.option2.classList.add("option_wrong");
    }

    if (this.option3.getAttribute("data-value") != 0) {
      this.option3.classList.add("option_correct");
    } else {
      this.option3.classList.add("option_wrong");
    }

    if (this.option4.getAttribute("data-value") != 0) {
      this.option4.classList.add("option_correct");
    } else {
      this.option4.classList.add("option_wrong");
    }
  }

  commonHanlde() {
    this.showCorrectOrNot();
    this.comment.classList.add("comment_on");
    this.options.forEach((option) => option.setAttribute("disabled", true));
    this.removeHash();
    this.currentResultHandle();
  }

  currentResultHandle() {
    const value = +this.option1.getAttribute("data-value");
    sessionStorage.setItem("answer", +sessionStorage.getItem("answer") + value);
  }

  // обработчики кнопок

  handle1() {
    this.handle(this.option1, this.hint1, this.icon1);
  }

  handle2() {
    this.handle(this.option2, this.hint2, this.icon2);
  }

  handle3() {
    this.handle(this.option3, this.hint3, this.icon3);
  }

  handle4() {
    this.handle(this.option4, this.hint4, this.icon4);
  }

  handle(option, hint, icon) {
    option.addEventListener("click", () => {
      this.commonHanlde();
      this.probarHandleIsCorrect(option);
      hint.classList.add("screen__hint_on");
      icon.classList.add("screen__option_icon_on");
    });
  }

  mediaQueryHandle() {

    if (window.matchMedia("(max-width: 768px)").matches && window.matchMedia("(min-width: 550px)").matches) {

      this.bg.style.background = this.data.bgAdap768;
      this.content.style.marginTop = this.data.marginAdap768;
      this.bg.style.backgroundSize = 'cover';

      
    } else if (window.matchMedia("(max-width: 550px)").matches) {

      this.bg.style.background = this.data.bgAdap;
      this.content.style.marginTop = this.data.marginAdap;
      this.bg.style.backgroundSize = 'cover';


    } else if (window.matchMedia("(min-width: 769px)").matches) {
      this.bg.style.background = this.data.bg;
      this.content.style.marginTop = this.data.margin;
      this.bg.style.backgroundSize = 'cover';


    }
  }

  // обработчик куда какую иконку добавить
  renderHandle() {
    this.screen.id = this.data.number;
    this.content.style.marginTop = this.data.margin;
    this.mediaQueryHandle();
    window.addEventListener('resize', this.mediaQueryHandle.bind(this));
  }

  render() {
    this.screen = document.createElement("div");
    this.screen.innerHTML = this.screenHtml;
    this.main.appendChild(this.screen);
  }
}
