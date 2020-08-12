#  Что делать и плагины

## что делать
Для запуска в режиме разработки - `npm run dev`
Для продакшена - `npm run build`

## плагины и анимация

### ленивая загрузка
Для загрузки изображений и background используется плагин lazsizes.
https://github.com/aFarkas/lazysizes
https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/unveilhooks

Чтобы это работало нужно добавить изображениям вместо `src (srcset)` атрибут `data-src (data-srcset)` и класс `lazyload`.

Для background
Пример css для background:
    
    .footer.lazyloaded {
     background: url(branch.png);
     }


### simple parallax
https://simpleparallax.com/
https://github.com/geosigno/simpleParallax.js/

Можно обратиться ко всем планетам сразу по названию переменной `parallaxImgs`. Кроме большого марса. Либо к каждому по отдельности по его названию.


### smooth scroll
https://github.com/cferdinandi/smooth-scroll
https://codepen.io/cferdinandi/pen/wQzrdM


### анимация
https://animista.net/play/background/ken-burns/kenburns-top

Чтобы отключить анимацию надо:
- в `index.scss` отключить `@import './scss/animation.scss'` на 25 строчке;
- в `PlaySpaceSound.js` в методах `changeIconView` и `setStartPlayState` убрать две нижние строчки