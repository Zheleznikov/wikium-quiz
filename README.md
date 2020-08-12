#  Что делать и плагины

## что делать
Для запуска в режиме разработки - `npm run dev`
Для продакшена - `npm run build`

## плагины и анимация

### ленивая загрузка - не использовал
Для загрузки изображений и background используется плагин lazsizes.
https://github.com/aFarkas/lazysizes
https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/unveilhooks

Чтобы это работало нужно добавить изображениям вместо `src (srcset)` атрибут `data-src (data-srcset)` и класс `lazyload`.

Для background
Пример css для background:
    
    .footer.lazyloaded {
     background: url(branch.png);
     }



### smooth scroll
https://github.com/cferdinandi/smooth-scroll
https://codepen.io/cferdinandi/pen/wQzrdM

