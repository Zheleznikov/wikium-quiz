export default class Hurray {
  constructor(main) {
    this.main = main;
    this.render();
    this.button = this.hurray.querySelector('.form__button');
    this.handleNext();
  }


  handleNext() {
    this.button.addEventListener("click", () => {
      // console.log(sessionStorage.getItem('answer'));
      // this.button.style.display = 'none';
      const event = new CustomEvent("renderScreen", {
        detail: {
          screenId: 'result',
        },
      });
      document.dispatchEvent(event);
    });
  }


  render() {
    this.hurray = document.createElement("div");
    this.hurray.innerHTML = `
    <section id="11" class="hurray">
    <div class="hurray__content">
      <img src="./images/hurray-palms.png" alt="" class="hurray__image">
      <h2 class="hurray__title">Ура! Тест пройден</h2>
      <p class="hurray__subtitle">Заполните форму и получите результаты</p>
      <form class="form hurray__form">
        <div class="form__content">
          <input type="text" class="form__input name" placeholder="Имя" >
          <input type="text" class="form__input surname" placeholder="Фамилия" >
          <input type="email" class="form__input email" placeholder="Email" >
          <input type="text" class="form__input phone" placeholder="Номер телефона" >
        </div>
        <a href="#12">
        <button type="submit" class="button form__button">Получить результаты</button>

        </a>
      </form>
    </div>
  </section>    
    `

    this.main.appendChild(this.hurray);
  }
}