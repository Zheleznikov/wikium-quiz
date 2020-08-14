export default class Hurray {
  constructor(main) {
    this.main = main;
    this.render();
    this.button = this.hurray.querySelector('.form__button');
    // this.handleNext();
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
      <form action="http://httpbin.org/post" class="form hurray__form" method="post">
        <div class="form__content">
          <input type="text" name="formParams[full_name]" class="form__input name" placeholder="Имя" required maxlength="16" minlength="2">
          <input type="text" class="form__input surname" name="formParams[full_name2]" placeholder="Фамилия"  maxlength="16" minlength="2">
          <input type="email" name="formParams[email]" class="form__input email" placeholder="Email"   minlength="8">
          <input type="tel" class="form__input phone" placeholder="Номер телефона"  minlength="10"  maxlength="11" >
        </div>
        <button type="" class="button form__button"Получить результаты</button>
      </form>

    </div>
  </section>    
    `

    this.main.appendChild(this.hurray);
  }
}