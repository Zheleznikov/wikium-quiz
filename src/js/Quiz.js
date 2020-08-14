export default class Quiz {
  constructor(main, data, screenHtml) {
    this.main = main;
    this.data = data;
    this.screenHtml = screenHtml;

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
      console.log(sessionStorage.getItem('answer'));
      this.nextButton.style.display = 'none';
      const next = this.data.number;
      const event = new CustomEvent("renderScreen", {
        detail: {
          screenId: next,
        },
      });
      document.dispatchEvent(event);
    });
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

  render2() {
    this.screen = document.createElement("div");
    this.screen.innerHTML = `
    <section class="screen">
    <div class="screen__bg"></div>
    <div class="screen__content">
    <p class="screen__pre">
    ${this.data.pre}
  </p>
      <div class="screen__main">
        <div class="screen__number">${this.data.number}</div>
        <h2 class="screen__title screen__title_2">${this.data.title}</h2>
        <p class="screen__title_span">${this.data.quest}</p>
        <div class="screen__buttons">
          <button class="screen__option screen__option_short option-1">
          ${this.data.options[0].title}
          <img class="screen__option_icon screen__option_icon_small">
          </button>
          <button class="screen__option screen__option_short option-2">
          <img class="screen__option_icon screen__option_icon_small">
          ${this.data.options[1].title}
          </button>
          <button class="screen__option screen__option_short option-3">${this.data.options[2].title}
          <img class="screen__option_icon screen__option_icon_small">
          </button>
  
          <button class="screen__option screen__option_short option-4">${this.data.options[3].title}
          <img class="screen__option_icon screen__option_icon_small">
          </button>
        </div>

        <div class="screen__hint hint-1">
          <img src="" alt="" class="screen__icon">
          <p class="screen__hint_text"><span class="screen__hint_right"></span>${this.data.options[0].hint}</p>
        </div>
        <div class="screen__hint hint-2">
          <img src="" alt="" class="screen__icon">
          <p><span class="screen__hint_right"></span>${this.data.options[1].hint}</p>
        </div>
        <div class="screen__hint hint-3">
          <img src="" alt="" class="screen__icon">
          <p class="screen__hint_text"><span class="screen__hint_wrong"></span>${this.data.options[2].hint}</p>
        </div>
        <div class="screen__hint hint-4">
          <img src="" alt="" class="screen__icon">
          <p class="screen__hint_text"><span class="screen__hint_right"></span>${this.data.options[3].hint}</p>
        </div>
  
      </div>
      <div class="comment">
      </div>
  
  
  
    </div>
    <button class="button screen__button next-button">Продолжить</button>
  </section>
    
    `;
    this.main.appendChild(this.screen);
  }


}