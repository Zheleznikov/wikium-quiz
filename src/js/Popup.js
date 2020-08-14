export default class Popup {
  constructor(popup) {
    this.popup = popup;
    this.closeButton = this.popup.querySelector('.popup__close')

    this.handle();
  }

  open() {
    this.popup.classList.add("popup_on");
  }


  close() {
    this.popup.classList.remove("popup_on", true);
  }

  superClose(event) {
    if (
      event.target === this.popup ||
      event.target === this.closeButton ||
      event.keyCode === 27
    ) {
      this.close();
    }
  }

  handle() {
    this.closeButton.addEventListener('click', () => this.close());
    document.querySelector('.footer__modal').addEventListener("click", this.open.bind(this));
    this.popup.addEventListener("click", this.superClose.bind(this));
    window.addEventListener("keydown", this.superClose.bind(this));
  }
}