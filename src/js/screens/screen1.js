export default `
<section class="screen">
  <div class="screen__cover" style="background: #FEDDF0">
      <div class="screen__bg"></div>
    </div>

  <div class="screen__content">

    <div class="screen__main">
      <div class="screen__number">1</div>
      <h2 id="ans1" class="screen__title">Ситуация: у вас первый день на новой работе, и вы остались наедине с коллегой. Что будете делать? </h2>

      <div class="screen__buttons">

      <a class="screen__link" href="#ans1">
      <button data-value="2" class="screen__option option-1">Уточню что-то по общим вопросам, а потом постараюсь найти тему для разговора 
      <img src="./images/option-correct.png" alt="" class="screen__option_icon icon-1">
      </button>
      </a>

        <div class="screen__hint hint-1">
          <img src="./images/hint-correct.jpg" alt="" class="screen__icon">
          <p class="screen__hint_text "><span class="screen__hint_correct">Верно. </span>
            Вы — душа компании и умеете выстраивать деловые и неформальные отношения с коллегами.
          </p>
        </div>

        <a class="screen__link" href="#ans1">
        <button data-value="1" class="screen__option option-2">Расскажу несколько веселых анекдотов и случаев из жизни
          <img src="./images/option-correct.png" alt="" class="screen__option_icon icon-2">
          </button>
          </a>

        <div class="screen__hint hint-2">
          <img src="./images/hint-correct.jpg" alt="" class="screen__icon">
          <p class="screen__hint_text"><span class="screen__hint_correct">Верно. </span>
            Вы — душа компании и умеете выстраивать деловые и неформальные отношения с коллегами.
          </p>
        </div>

        <a class="screen__link" href="#ans1">
        <button data-value="0" class="screen__option option-3">
          Мне станет некомфортно, и я придумаю предлог, чтобы уйти
            <img src="./images/option-wrong.png" alt="" class="screen__option_icon icon-3">
          </button>
          </a>

        <div class="screen__hint hint-3">
          <img src="./images/hint-wrong.jpg" alt="" class="screen__icon">
          <p class="screen__hint_text"><span class="screen__hint_wrong">Неверно. </span>
            Если вы будете молчать и уходить, то никогда не вольетесь в коллектив. Попробуйте научиться выстраивать деловые и неформальные отношения с коллегами.
          </p>
        </div>


        <a  class="screen__link"href="#ans1">
        <button data-value="0" class="screen__option option-4">Подожду, пока коллега заговорит первым
            <img src="./images/option-wrong.png" alt="" class="screen__option_icon icon-4">
          </button>
        </a>

        <div class="screen__hint hint-4">
          <img src="./images/hint-wrong.jpg" alt="" class="screen__icon">
          <p class="screen__hint_text"><span class="screen__hint_wrong">Неверно</span>
            Если вы будете молчать и уходить, то никогда не вольетесь в коллектив. Попробуйте научиться выстраивать деловые и неформальные отношения с коллегами.

          </p>
        </div>

      </div> 
      <!-- /screen buttons -->


    </div>

    <div class="comment">
      <div class="screen__comment">
        <img src="./images/screen-comment.png" alt="" class="screen__comment_icon">
        <p class="screen__text">
          <span class="screen__text_span">Soft skills </span>
          (мягкие или гибкие навыки) — это личные качества, которые позволяют эффективно и гармонично взаимодействовать с другими людьми. Они необходимы любому человеку вне зависимости от профессии. Даже если вы разработчик, копирайтер на удаленке или бухгалтер, вам нужно уметь находить общий язык с клиентами, партнерами и коллегами. Кроме того, развитые soft skills помогают уверенно работать с большим объемом информации, адаптироваться к переменам и справляться со стрессом. 
        </p>

      </div>

      <a href="#2">
        <button class="button screen__button next-button">Продолжить</button>
      </a>
    
    </div>



  </div>

</section>

`