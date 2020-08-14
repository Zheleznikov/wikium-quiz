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


    this.icon1 = this.screen.querySelector('.icon-1');
    this.icon2 = this.screen.querySelector('.icon-2');
    this.icon3 = this.screen.querySelector('.icon-3');
    this.icon4 = this.screen.querySelector('.icon-4');

    this.bg = this.screen.querySelector(".screen__bg");
    this.content = this.screen.querySelector(".screen__content");
    this.nextButton = this.screen.querySelector(".next-button");
    this.comment = this.screen.querySelector(".comment");


    this.options = this.screen.querySelectorAll(".screen__option");
    this.renderHandle();
    this.handle1();
    this.handle2();
    this.handle3();
    this.handle4();
    this.handleNext();
  }

  makeEventRenderScreen() {
    const next = this.data.number;
    const event = new CustomEvent("renderScreen", {
      detail: {
        screenId: next,
      },
    });
    document.dispatchEvent(event);
  }

  handleNext() {
    this.nextButton.addEventListener("click", () => {
      this.nextButton.style.display = 'none';
      const next = this.data.number;
      const event = new CustomEvent("renderScreen", {
        detail: {
          screenId: next,
        },
      });
      document.dispatchEvent(event);
    });
    this.removeHash();
  }


  showCorrectOrNot() {
    if (this.option1.getAttribute('data-value') != 0) {
      this.option1.classList.add("option_correct");
    } else {
      this.option1.classList.add("option_wrong");
    }

    if (this.option2.getAttribute('data-value') != 0) {
      this.option2.classList.add("option_correct");
    } else {
      this.option2.classList.add("option_wrong");
    }

    if (this.option3.getAttribute('data-value') != 0) {
      this.option3.classList.add("option_correct");

    } else {
      this.option3.classList.add("option_wrong");

    }

    if (this.option4.getAttribute('data-value') != 0) {
      this.option4.classList.add("option_correct");

    } else {
      this.option4.classList.add("option_wrong");

    }
  }

  commonHanlde() {
    this.showCorrectOrNot();
    this.comment.classList.add('comment_on');
    this.options.forEach((option) => option.setAttribute("disabled", true));
    this.removeHash();
  }

  // обработчики кнопок

  handle1() {
    this.option1.addEventListener("click", () => {
      this.commonHanlde();

      this.hint1.classList.add("screen__hint_on");
      this.icon1.classList.add("screen__option_icon_on");
      const value = +this.option1.getAttribute('data-value');
      sessionStorage.setItem("answer", +sessionStorage.getItem("answer") + value);


    });
  }

  handle2() {
    this.option2.addEventListener("click", () => {
      this.commonHanlde();


      this.hint2.classList.add("screen__hint_on");

      this.icon2.classList.add("screen__option_icon_on");

      const value = +this.option2.getAttribute('data-value');
      sessionStorage.setItem("answer", +sessionStorage.getItem("answer") + value);

    });
  }

  handle3() {
    this.option3.addEventListener("click", () => {
      this.hint3.classList.add("screen__hint_on");
      this.commonHanlde();


      this.icon3.classList.add("screen__option_icon_on");
      const value = +this.option3.getAttribute('data-value');
      sessionStorage.setItem("answer", +sessionStorage.getItem("answer") + value);

    });
  }

  handle4() {
    this.option4.addEventListener("click", () => {
      this.commonHanlde();

      this.hint4.classList.add("screen__hint_on");

      this.icon4.classList.add("screen__option_icon_on");

      const value = +this.option4.getAttribute('data-value');
      sessionStorage.setItem("answer", +sessionStorage.getItem("answer") + value);

    });
  }



  // обработчик куда какую иконку добавить
  renderHandle() {
    this.bg.style.background = this.data.bg;
    this.content.style.marginTop = this.data.margin;
    this.screen.id = this.data.number;


  }

  render() {
    this.screen = document.createElement("div");
    this.screen.innerHTML = this.screenHtml;

    this.main.appendChild(this.screen);
  }




}