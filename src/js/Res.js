export default class Res {
  constructor(main, html) {
    this.main = main;
    this.html = html;
    this.render();
    this.button = this.res.querySelector('.res__button');
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


  render() {
    this.res = document.createElement("div");
    this.res.innerHTML = this.html;

    this.main.appendChild(this.res);
  }

}