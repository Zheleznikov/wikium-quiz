export default class Form {
  constructor(form) {
    this.form = form;
    this.button = this.form.querySelector('.form__button');
    this.name = this.form.querySelector('.name');
    this.email = this.form.querySelector('.email');
    this.phone = this.form.querySelector('.phone');
    this.checkbox = this.form.querySelector('.form__checkbox');
    this.emailReg = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/;
    this.phoneReg = /(\+7|8)((\s?\d{3}\s?)|(\s?\(\d{3}\)\s?))\d{3}(-?|\s?)\d{2}(-?|\s?)\d{2}/

    // this.handle();


  }



  validation() {
    return this.emailReg.test(this.email.value) && this.phoneReg.test(this.phone.value);

      // if (this.emailReg.test(this.email.value)
      // && this.phoneReg.test(this.phone.value)
      // && this.name.value.length > 1
      // && this.checkbox.checked
      // ) {
      //   this.form.removeAttribute('disabled');
      // } else {
      //   this.disableButton();
      // }
  }

  disableButton() {
    this.button.setAttribute('disabled', 'disabled');

  }

  handle() {
    this.form.addEventListener('submit', (e) => {
      console.log(e);
      console.log(e);
      if (!this.validation()) {
        console.log('не валидируется');
        e.preventDefault();
      } else {
        console.log(' все  ok');

      }
    });
    // document.addEventListener('closeIframe', this.clearInputs.bind(this));
    //  document.addEventListener('closeIframe', this.disableButton.bind(this));

  }

  clearInputs() {
    this.name.value = '';
    this.email.value = '';
    this.phone.value = '';
  }



  sendUserData() {
    return fetch('http://httpbin.org/post', {
        method: 'POST',
        // mode: 'no-cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin',
        body: new FormData(this.form)
      })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
      })
      .catch((err) => {
        throw new Error(err);
      });
  }
}