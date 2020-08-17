export default class Popup {
  constructor(popup, openButton, type = 'common') {
    this.popup = popup;
    this.openButton = openButton;
    this.type = type;
    console.log(this.type)

    this.closeButton = this.popup.querySelector('.popup__close');

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
    this.closeButton.addEventListener('click', this.close.bind(this));
    this.openButton.addEventListener("click", this.open.bind(this));

    switch(this.type) {
      case 'common' : 
      this.popup.addEventListener("click", this.superClose.bind(this));
      window.addEventListener("keydown", this.superClose.bind(this));
        break;
    }
  }
}