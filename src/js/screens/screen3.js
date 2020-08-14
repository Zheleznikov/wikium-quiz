export default `

<section class="screen">
  <div class="screen__bg"></div>

  <div class="screen__content">

    <div class="screen__main">
      <div class="screen__number">3</div>
      <h2 class="screen__title">Коллега ушел в отпуск, и у вас стало еще больше работы: приезжаете рано и задерживаетесь допоздна. Ваш начальник кладет на стол очередную стопку документов для нового проекта. Как вы поступите?  </h2>

      <div class="screen__buttons">

        <button data-value="0" class="screen__option option-1">
          Налью кружку кофе, отложу все домашние дела и приступлю к работе (показываем подсказку
          <img src="./images/option-wrong.jpg" alt="" class="screen__option_icon icon-1">
          </button>

        <div class="screen__hint hint-1">
          <img src="./images/hint-wrong.jpg" alt="" class="screen__icon">
          <p class="screen__hint_text ">
            <span class="screen__hint_wrong">
              Неверно.
            </span>
            Ответственность — это хорошо, но лучше разделить дела со всем отделом. Работа 24/7 может привести к выгоранию и нервному срыву. 
          </p>
        </div>

        <button data-value="1" class="screen__option option-2">
          Честно скажу начальнику, что не справляюсь
          <img src="./images/option-correct.jpg" alt="" class="screen__option_icon icon-2">
          </button>

        <div class="screen__hint hint-2">
          <img src="./images/hint-correct.jpg" alt="" class="screen__icon">
          <p class="screen__hint_text"><span class="screen__hint_correct">
            Верно.
          </span>
            И ничего из лишних дел не пришлось отменять. Помните о том, что работа 24/7 может привести к выгоранию и нервному срыву. 
          </p>
        </div>

        <button data-value="0" class="screen__option option-3">
          Положу документы на стол к коллеге. Вернется из отпуска — сделает            
          <img src="./images/option-wrong.jpg" alt="" class="screen__option_icon icon-3">
          </button>

        <div class="screen__hint hint-3">
          <img src="./images/hint-wrong.jpg" alt="" class="screen__icon">
          <p class="screen__hint_text"><span class="screen__hint_wrong">Неверно. </span>
            Ответственность — это хорошо, но лучше разделить дела со всем отделом. Работа 24/7 может привести к выгоранию и нервному срыву. 
          </p>
        </div>


        <button data-value="2" class="screen__option option-4">Составлю примерный план действий, обозначу таймлайн. Затем поделюсь с начальником и коллегами
            <img src="./images/option-correct.jpg" alt="" class="screen__option_icon icon-4">
          </button>

        <div class="screen__hint hint-4">
          <img src="./images/hint-correct.jpg" alt="" class="screen__icon">
          <p class="screen__hint_text"><span class="screen__hint_correct">Верно</span>
            И ничего из лишних дел не пришлось отменять. Помните о том, что работа 24/7 может привести к выгоранию и нервному срыву. 
          </p>
        </div>

      </div> 
      <!-- /screen buttons -->


    </div>

    <div class="comment">
      <div class="screen__comment screen__comment_2">
        <img src="./images/screen-comment.png" alt="" class="screen__comment_icon">
        <p class="screen__text">
          Вопрос о важности soft skills и hard skills возник еще в 1959 году. В это время в американской армии проводились научные исследования, которые показали, что при подготовке военнослужащих важны как профессиональные, так и универсальные навыки солдат. Причем первые чаще задействовались в работе с техникой, а вторые — в работе с людьми и бумагами. В 90-е годы термины soft skills и hard skills активно вошли в HR, психологию и стали использоваться в бизнес-сфере. С тех пор интерес к soft skills увеличивается с каждым годом. Это связано со стремительными изменениями на рынке труда, которые происходят из-за быстрого развития технологий и появления новых профессий. 
        </p>

      </div>



      <a href="#4">
        <button class="button screen__button next-button">Продолжить</button>
      </a>
    
    </div>



  </div>

</section>

`