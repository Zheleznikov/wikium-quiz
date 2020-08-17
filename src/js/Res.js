export default class Res {
  constructor(main, html) {
    this.main = main;
    this.html = html;
    this.render();
    this.button = this.res.querySelector('.res__button');
    this.link = this.res.querySelector('.res__link');
    this.renderLink();
    this.handleAgain();

  }

  handleAgain() {
    this.button.addEventListener("click", () => {
      console.log(sessionStorage.getItem('answer'));
      this.button.style.display = 'none';
      const event = new CustomEvent("renderScreen", {
        detail: {
          screenId: 'again',
        },
      });
      document.dispatchEvent(event);
    });
  }

  renderLink() {
    this.link.href = 'https://wikium.ru/tl/super-webinar?utm_source=hype&utm_medium=article&utm_campaign=special_project'
  }


  render() {
    this.res = document.createElement("div");
    this.res.innerHTML = this.html;

    this.main.appendChild(this.res);
  }

}