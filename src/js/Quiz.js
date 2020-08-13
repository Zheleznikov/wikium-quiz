export default class Quiz {
  constructor(main, data) {
    this.main = main;
    this.data = data;
    this.screen = null;
    this.render();

    this.option1 = this.screen.querySelector('.option-1');
    this.option2 = this.screen.querySelector('.option-2');
    this.option3 = this.screen.querySelector('.option-3');
    this.option4 = this.screen.querySelector('.option-4');

    this.hint1 = this.screen.querySelector('.hint-1');
    this.hint2 = this.screen.querySelector('.hint-2');
    this.hint3 = this.screen.querySelector('.hint-3');
    this.hint4 = this.screen.querySelector('.hint-4');

    this.options = this.screen.querySelectorAll('.screen__option');
    this.handle1();
    this.handle2();
    this.handle3();
    this.handle4();

  }

  showCorrectOrNot() {
    if (this.data.options[0].isCorrect === 'true') {
      this.option1.classList.add('option_correct');
    } else {
      this.option1.classList.add('option_wrong');
    }

    if (this.data.options[1].isCorrect === 'true') {
      this.option2.classList.add('option_correct');
    } else {
      this.option2.classList.add('option_wrong');
    }

    if (this.data.options[2].isCorrect === 'true') {
      this.option3.classList.add('option_correct');
    } else {
      this.option3.classList.add('option_wrong');
    }

    if (this.data.options[3].isCorrect === 'true') {
      this.option4.classList.add('option_correct');
    } else {
      this.option4.classList.add('option_wrong');
    }
  }





  handle1() {
    this.option1.addEventListener('click', () => {
      this.hint1.classList.add('screen__hint_on');
      this.showCorrectOrNot();

    })
  }

  handle2() {
    this.option2.addEventListener('click', () => {
      this.hint2.classList.add('screen__hint_on');
    })
  }

  handle3() {
    this.option3.addEventListener('click', () => {
      this.hint3.classList.add('screen__hint_on');
    })
  }

  handle4() {
    this.option4.addEventListener('click', () => {
      this.hint4.classList.add('screen__hint_on');
    })
  }

  renderHandle() {
    
  }


  render() {
    this.screen = document.createElement('div');
    this.screen.innerHTML = `
    <section class="screen">
    <div class="screen__bg"></div>

    <div class="screen__content">

      <div class="screen__main">
        <div class="screen__number">${this.data.number}</div>
        <h2 class="screen__title">${this.data.title}</h2>

        <button class="screen__option option-1">${this.data.options[0].title}
        <img src="" alt="" class="screen__option_icon">
        </button>

        <div class="screen__hint hint-1">
          <img src="" alt="" class="screen__icon">
          <p class="screen__hint_text"><span class="screen__hint_right"></span>${this.data.options[0].hint}</p>
        </div>

        <button class="screen__option option-2">${this.data.options[1].title}
        <img src="" alt="" class="screen__option_icon">
        </button>

        <div class="screen__hint hint-2">
          <img src="" alt="" class="screen__icon">
          <p class="screen__hint_text"><span class="screen__hint_right"></span>${this.data.options[1].hint}</p>
        </div>

        <button class="screen__option option-3">${this.data.options[2].title}
          <img src="" alt="" class="screen__option_icon">
        </button>

        <div class="screen__hint hint-3">
          <img src="./images/hint-wrong.jpg" alt="" class="screen__icon">
          <p class="screen__hint_text"><span class="screen__hint_wrong"></span>${this.data.options[2].hint}</p>
        </div>

        <button class="screen__option option-4">${this.data.options[3].title}
          <img src="" alt="" class="screen__option_icon">
        </button>

        <div class="screen__hint hint-4">
          <img src="./images/hint-wrong.jpg" alt="" class="screen__icon">
          <p class="screen__hint_text"><span class="screen__hint_right"></span>${this.data.options[3].hint}</p>
        </div>
      </div>
  
      <p class="screen__comment"></p>
    </div>
    <button class="button screen__button next-button">Следующий вопрос</button>
  </section>
    
    `

    this.main.appendChild(this.screen);
  }



}