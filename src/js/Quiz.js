
export default class Quiz {
  constructor(main, data, allData) {
    this.main = main;
    this.data = data;
    this.allData = allData;
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
    this.bg = this.screen.querySelector('.screen__bg');
    this.content = this.screen.querySelector('.screen__content');
    this.nextButton = this.screen.querySelector('.next-button');

    this.options = this.screen.querySelectorAll('.screen__option');
    this.renderHandle();
    this.handle1();
    this.handle2();
    this.handle3();
    this.handle4();
    this.handleNext();

  }

  handleNext() {
    this.nextButton.addEventListener('click', () => {
      const next = this.data.number;
      if (next < 10) {
        new Quiz(this.main, this.allData[next], this.allData);
      } else {
        console.log(sessionStorage.getItem('answer'));
      }
    })
  }

  showCorrectOrNot() {
    if (this.data.options[0].isCorrect === 'true') {
      this.option1.classList.add('option_correct');
      this.hint1.querySelector('img').src = './images/hint-correct.jpg';
      this.hint1.querySelector('span').textContent = 'Верно. ';
      this.hint1.querySelector('span').classList.add('screen__hint_correct');

    } else {
      this.option1.classList.add('option_wrong');
      this.hint1.querySelector('img').src = './images/hint-wrong.jpg';
      this.hint1.querySelector('span').textContent = 'Неверно. ';
      this.hint1.querySelector('span').classList.add('screen__hint_wrong');
    }

    if (this.data.options[1].isCorrect === 'true') {
      this.option2.classList.add('option_correct');
      this.hint2.querySelector('img').src = './images/hint-correct.jpg';
      this.hint2.querySelector('span').textContent = 'Верно. ';
      this.hint2.querySelector('span').classList.add('screen__hint_correct');
    } else {
      this.option2.classList.add('option_wrong');
      this.hint2.querySelector('img').src = './images/hint-wrong.jpg';
      this.hint2.querySelector('span').textContent = 'Неверно. ';
      this.hint2.querySelector('span').classList.add('screen__hint_wrong');
    }

    if (this.data.options[2].isCorrect === 'true') {
      this.option3.classList.add('option_correct');
      this.hint3.querySelector('img').src = './images/hint-correct.jpg';
      this.hint3.querySelector('span').textContent = 'Верно. ';
      this.hint3.querySelector('span').classList.add('screen__hint_correct');
    } else {
      this.option3.classList.add('option_wrong');
      this.hint3.querySelector('img').src = './images/hint-wrong.jpg';
      this.hint3.querySelector('span').textContent = 'Неверно. ';
      this.hint3.querySelector('span').classList.add('screen__hint_wrong');
    }

    if (this.data.options[3].isCorrect === 'true') {
      this.option4.classList.add('option_correct');
      this.hint4.querySelector('img').src = './images/hint-correct.jpg';
      this.hint4.querySelector('span').textContent = 'Верно. ';
      this.hint4.querySelector('span').classList.add('screen__hint_correct');
    } else {
      this.option4.classList.add('option_wrong');
      this.hint4.querySelector('img').src = './images/hint-wrong.jpg';
      this.hint4.querySelector('span').textContent = 'Неверно. ';
      this.hint4.querySelector('span').classList.add('screen__hint_wrong');
    }
  }


  handle1() {
    this.option1.addEventListener('click', () => {
      this.options.forEach(option => option.setAttribute('disabled', true));
      this.nextButton.removeAttribute('disabled');
      this.hint1.classList.add('screen__hint_on');
      this.showCorrectOrNot();
      this.option1.querySelector('img').classList.add('screen__option_icon_on');

      if (this.data.options[0].isCorrect === 'true') {
        sessionStorage.setItem('answer', + sessionStorage.getItem('answer') + 1);
      }
    })
  }

  handle2() {
    this.option2.addEventListener('click', () => {
      this.options.forEach(option => option.setAttribute('disabled', true));
      this.nextButton.removeAttribute('disabled');

      this.hint2.classList.add('screen__hint_on');
      this.showCorrectOrNot();
      this.option2.querySelector('img').classList.add('screen__option_icon_on');
      if (this.data.options[1].isCorrect === 'true') {
        sessionStorage.setItem('answer', + sessionStorage.getItem('answer') + 1);
      }
    })
  }

  handle3() {
    this.option3.addEventListener('click', () => {
      this.options.forEach(option => option.setAttribute('disabled', true))
      this.hint3.classList.add('screen__hint_on');
      this.nextButton.removeAttribute('disabled');

      this.showCorrectOrNot();
      this.option3.querySelector('img').classList.add('screen__option_icon_on');
      if (this.data.options[2].isCorrect === 'true') {
        sessionStorage.setItem('answer', + sessionStorage.getItem('answer') + 1);
      }
    })
  }

  handle4() {
    this.option4.addEventListener('click', () => {
      this.options.forEach(option => option.setAttribute('disabled', true));
      this.nextButton.removeAttribute('disabled');

      this.hint4.classList.add('screen__hint_on');
      this.showCorrectOrNot();
      this.option4.querySelector('img').classList.add('screen__option_icon_on');
      if (this.data.options[3].isCorrect === 'true') {
        sessionStorage.setItem('answer', + sessionStorage.getItem('answer') + 1);
        
      }
    })
  }

  renderHandle() {
    this.bg.style.background = this.data.bg;
    this.content.style.marginTop = this.data.margin;
    this.screen.id = this.data.number;
    
    if (this.data.options[0].isCorrect === 'true') {
      this.option1.querySelector('img').src = './images/option-correct.jpg'
    } else {
      this.option1.querySelector('img').src = './images/option-wrong.jpg'
    }

    if (this.data.options[1].isCorrect === 'true') {
      this.option2.querySelector('img').src = './images/option-correct.jpg'
    } else {
      this.option3.querySelector('img').src = './images/option-wrong.jpg'
    }

    if (this.data.options[2].isCorrect === 'true') {
      this.option3.querySelector('img').src = './images/option-correct.jpg'
    } else {
      this.option3.querySelector('img').src = './images/option-wrong.jpg'
    }4
    if (this.data.options[3].isCorrect === 'true') {
      this.option4.querySelector('img').src = './images/option-correct.jpg'
    } else {
      this.option4.querySelector('img').src = './images/option-wrong.jpg'
    }

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
    <a href="#${this.data.number + 1}">
    <button class="button screen__button next-button" disabled>Продолжить</button>
    </a>
  </section>
    
    `

    this.main.appendChild(this.screen);
  }



}