export default class Quiz {
  constructor(main, data) {
    this.main = main;
    this.data = data;
    this.screen = null;

    if (this.data.number < 5) {
      this.render();
    } else {
      this.render2();
    }

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
    this.comment = this.screen.querySelector('.comment')

    this.options = this.screen.querySelectorAll('.screen__option');
    this.renderHandle();
    this.handle1();
    this.handle2();
    this.handle3();
    this.handle4();
    this.renderShort();
    this.handleNext();

  }

  handleNext() {
    this.nextButton.addEventListener('click', () => {
      const next = this.data.number;
      const event = new CustomEvent('renderScreen', {
        detail: {
          screenId: next
        }
      });
      document.dispatchEvent(event);
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


  // обработчики кнопок

  handle1() {
    this.option1.addEventListener('click', () => {
      this.options.forEach(option => option.setAttribute('disabled', true));
      this.nextButton.removeAttribute('disabled');
      this.hint1.classList.add('screen__hint_on');
      this.showCorrectOrNot();

      if (this.number < 5) {
        this.option1.querySelector('img').classList.add('screen__option_icon_on');
      }

      const value = this.data.options[0].value;
      if (value > 0) {
        sessionStorage.setItem('answer', +sessionStorage.getItem('answer') + value);
      }

      this.renderComment();
    })
  }

  handle2() {
    this.option2.addEventListener('click', () => {
      this.options.forEach(option => option.setAttribute('disabled', true));
      this.nextButton.removeAttribute('disabled');

      this.hint2.classList.add('screen__hint_on');
      this.showCorrectOrNot();
      if (this.number < 5) {
        this.option2.querySelector('img').classList.add('screen__option_icon_on');
      }
      const value = this.data.options[0].value;
      if (value > 0) {
        sessionStorage.setItem('answer', +sessionStorage.getItem('answer') + value);
      }

      this.renderComment();

    })
  }

  handle3() {
    this.option3.addEventListener('click', () => {
      this.options.forEach(option => option.setAttribute('disabled', true))
      this.hint3.classList.add('screen__hint_on');
      this.nextButton.removeAttribute('disabled');

      this.showCorrectOrNot();
      this.option3.querySelector('img').classList.add('screen__option_icon_on');
      const value = this.data.options[0].value;

      if (this.number < 5) {
        this.option3.querySelector('img').classList.add('screen__option_icon_on');
      }
      if (value > 0) {
        sessionStorage.setItem('answer', +sessionStorage.getItem('answer') + value);
      }

      this.renderComment();

    })
  }

  handle4() {
    this.option4.addEventListener('click', () => {
      this.options.forEach(option => option.setAttribute('disabled', true));
      this.nextButton.removeAttribute('disabled');

      this.hint4.classList.add('screen__hint_on');
      this.showCorrectOrNot();
      const value = this.data.options[0].value;

      if (this.number < 5) {
        this.option4.querySelector('img').classList.add('screen__option_icon_on');
      }
      if (value > 0) {
        sessionStorage.setItem('answer', +sessionStorage.getItem('answer') + value);
      }

      this.renderComment();

    })
  }

  renderShort() {
    if (this.data.number > 4) {
      this.options.forEach(option => option.classList.add('screen__option_short'));

    }
  }


  // обработчик куда какую иконку добавить
  renderHandle() {
    this.bg.style.background = this.data.bg;
    this.content.style.marginTop = this.data.margin;
    this.screen.id = this.data.number;

    if (this.number < 5) {
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
      }
      
      if (this.data.options[3].isCorrect === 'true') {
        this.option4.querySelector('img').src = './images/option-correct.jpg'
      } else {
        this.option4.querySelector('img').src = './images/option-wrong.jpg'
      }
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
        <div class="screen__buttons">
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


      </div>
  
      <div class="comment">

      </div>
      <a href="#${this.data.number + 1}">
      <button class="button screen__button next-button" disabled>Продолжить</button>
      </a>

    </div>

  </section>
    
    `

    this.main.appendChild(this.screen);
  }

  render2() {
    this.screen = document.createElement('div');
    this.screen.innerHTML = `
    <section class="screen">
    <div class="screen__bg"></div>
    <div class="screen__content">
      <div class="screen__main">
        <div class="screen__number">${this.data.number}</div>
        <h2 class="screen__title screen__title_2">Сколько слов на тему «искусство» содержится в этом наборе букв? </h2>
        <p class="screen__title_span">Олагкартинаопрвнхолстопрдомгнанотаортвыкистьорткрхрустрмузыкаофжщзустихорснростна</p>
        <div class="screen__buttons">
          <button class="screen__option screen__option_short option-1">${this.data.options[0].title}</button>
          <button class="screen__option screen__option_short option-2">
          ${this.data.options[1].title}
          </button>
          <button class="screen__option screen__option_short option-3">${this.data.options[2].title}</button>
  
          <button class="screen__option screen__option_short option-4">${this.data.options[3].title}</button>
        </div>

        <div class="screen__hint hint-1">
          <img src="" alt="" class="screen__icon">
          <p><span class="screen__hint_right"></span>${this.data.options[0].hint}</p>
        </div>
        <div class="screen__hint hint-2">
          <img src="" alt="" class="screen__icon">
          <p><span class="screen__hint_right"></span>${this.data.options[1].hint}</p>
        </div>
        <div class="screen__hint hint-3">
          <img src="./images/hint-wrong.jpg" alt="" class="screen__icon">
          <p class="screen__hint_text"><span class="screen__hint_wrong"></span>${this.data.options[2].hint}</p>
        </div>
        <div class="screen__hint hint-4">
          <img src="./images/hint-wrong.jpg" alt="" class="screen__icon">
          <p class="screen__hint_text"><span class="screen__hint_right"></span>${this.data.options[3].hint}</p>
        </div>
  
      </div>
      <div class="comment">
      </div>
  
  
  
    </div>
    <button class="button screen__button next-button">Следующий вопрос</button>
  </section>
    
    `
    this.main.appendChild(this.screen);

  }


  renderComment() {
    if (this.data.number === 2) {
      this.comment.innerHTML = `

      <div class="screen__comment">
      <img src="./images/screen-comment.png" alt="" class="screen__comment_icon">
      <p class="screen__text">
        <span class="screen__text_span">${this.data.keyword}</span>
        ${this.data.comment}
      </p>
    </div> 

    
      <p class="screen__text_small"><span class="screen__text_span">${this.data.limain1}</span>${this.data.li1}</p>
      <p class="screen__text_small"><span class="screen__text_span">${this.data.limain2}</span>${this.data.li2}</p>
      <p class="screen__text_small"><span class="screen__text_span">${this.data.limain3}</span>${this.data.li3}</p>
      <p class="screen__text_small"><span class="screen__text_span">${this.data.limain4}</span>${this.data.li4}</p>
      <p class="screen__text_small"><span class="screen__text_span">${this.data.limain5}</span>${this.data.li5}</p>
      <p class="screen__text_small"><span class="screen__text_span">${this.data.limain6}</span>${this.data.li6}</p>
      <p class="screen__text_small"><span class="screen__text_span">${this.data.limain7}</span>${this.data.li7}</p>
      <p class="screen__text_small"><span class="screen__text_span">${this.data.limain8}</span>${this.data.li8}</p>
      `

    } else 
    {
      this.comment.innerHTML = `
      <div class="screen__comment">
        <img src="./images/screen-comment.png" alt="" class="screen__comment_icon">
        <p class="screen__text">
          <span class="screen__text_span">${this.data.keyword}</span>
          ${this.data.comment}
        </p>
      </div> 
      `
    }

  }




}