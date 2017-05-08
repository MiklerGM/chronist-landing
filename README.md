#LANDING
--------

##How to use

`npm run dev` -  запускает вебпак-сервер на локалхост:8080

`npm run build` - собирает в папку dist.

`npm run build` - сборка для продакшена с вебпак плугинам в папку dist.

`npm run test` - тесты

##Landing
=========

  - [] сделать AppDesk как out values в Company Example {B}
  - [] уркасть лэйяут бложиков с дха {B}
  - [] серверсайд рендеринг дл {A}
  - [] запилить чтоб контент по сайту индексировался, а не был голая htmlка. вебпакчик {A}
  - [] перенести задачи из гитлаба  {A}
  - [] что с источниками инормации (не мне) {?}
  - [] допил после релиза сайта (гифки, кредитки) {A}
  - [] After MPA done, adjust YM for tricky statistic {C}
  - [] Страничка с кредитами []
  - []	подсказки на ссылочках, alt аттрибут


    ###VideoGallery
    ---------------
      - [] можно при наведении на тамбнейл делать ховер поверх гифки с надписью следующей
      - [] loop
      - [] tooltip для видео снизу
      - [] выделение кнопок остаточное убрать

    ### Blog
    --------
      - [] изменить порядок статей

  - [x] запилить кнопки перехода
  - [x] убрать яндекс метрику для дева
  - [x] Исправить вьюпорт
  - [x] Сделать евенты он ховер и прочее чтоб смотрелось ок  в ведре
  - [x] исправить корячующуюся картинку сергея
  - [x] сделать роутер
  - [x] сделать нормальные контайнеры в которые влезают всё. Т.е. сделать ужее.
  - [x] уменьшить шрифты вместе с сужением.
  - [x] Make all pics in svg.co
  - [x] fix ym
  - [x] fix console.log(ym)
  - [x] ?_ym_debug=0



#Todo
=========

	- [x] fonts
	- [x] use font-awesome or glyphicon. Not "some here, some there" shit
	- [x] articles
	- [x] dark overlay over title
	- [x] text
	- [x] other shadows
	- [x] cleaning
	- [x]	Верхняя панель со ссылками (статьи, блог, таймлайн фич, скрины/видео, "войти" со ссылкой на демку, группы в соцсетях) и лого.
	- [x]	Header картинкой
	- [x]	Вступительный текст
	- [x]	Форма обратной связи
	- [x]	Таймлайн фич (картинка-описание-дата внедрения). Внедрённые фичи цветные, не внедрённые - серые. Counter количества данных
	- [x]	Footer (position: fixed, полупрозрачный, с кнопкой "войти")
	- [x]	PS правый вариант картинки, скорее всего

	- [x] оверлеем прозрачную навигацию
	- [x] кадрирование сделай не по руки а по плечи
	- [x] кнопка на картинке в хедере одна, "войти"
	- [x] под картинкой текст про "Существующие инструменты не позволяют..."
	- [x] поле для ввода мыла Уже, оставить кнопку только вконтача и перенести её рядом с мылом
	- [x] статью Сережи сделать первые пять-шесть строк с возможностью развернуть по клику
	- [x] Добавь все блоки и поправь там даты
	- [x] количество данных перенести внутрь, типа "политические границы - описание - дата вывода на бой - Учтено данных 955,5"

	- [x] хедер замени на то, что у тебя в почте лежит. сам выбери какой
	- [x] даты релиза верни в боксы, у тебя из-за дат весь таймлайн порван, выглядит плохо
	- [x] каунтер количества данных из нерелизнутых фич убери, можно на его месте поставить дату
	- [x] удалить все английские надписи
	- [x] по вертикально выравнить заглавия в таймлайне
	- [x] чистка и оптимизации css штук


##Links and stuff
===================

###GUI Guidlines
--------------
  If you have some experience designing an iOS App, you’ll be familiar with the minimum sizes for typography (24px+, optimal for reading: 32px), buttons (44px to 88px) and navigation bar (72px to 98px). It’s also in line with Android devices.


  Guidelines
Don’t combine an icon and text within one button.
Choose a button text that is short and meaningful.
Use imperative verbs for all actions; for example: Save, Cancel, Edit.
Keep in mind that the text can be up to 300% longer in other languages.
We don’t recommend using tooltips since they are only visible on desktop devices. However, you can use tooltips for icon buttons.
For icon buttons, make sure the default accessibility text for the icon is correct for your use case. If not, define app-specific accessibility text.
If an action button is temporarily inactive, use the disabled status.
If you need to show the number of items that will be affected by the action of the button, you can add the number in brackets. For example, Edit (3).

https://www.youtube.com/watch?v=ogAZ6JC0pJI&feature=youtu.be&list=PLTdS5E3zupkEiDgztHOUw4kOSM8Qdzo7H


###Make a Blog
-----------
https://react.rocks/tag/Blog
https://hackernoon.com/build-a-react-universal-blog-app-in-4-steps-74b58567e5ee
https://www.prerender.cloud/blog/2016/10/20/create-react-app-blog

https://getgood.at/js/es7-in-7-days


localhost:8080/?_ym_debug=0

https://rhodey.org/blog/minimal-blog-platform-react

helmet router +
https://github.com/ReactTraining/react-router/issues/790
