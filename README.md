#LANDING
--------

##How to use

`npm run dev` -  запускает вебпак-сервер на локалхост:8080

`npm run build` - собирает в папку dist.

`npm run build` - сборка для продакшена с вебпак плугинам в папку dist.

`npm run test` - тестыz

##Landing
=========

  - [] After MPA done, adjust YM for tricky statistic {C}
  - [] migrate to htmlwebpackplugin and hashes for chunks
  - [] серверсайд рендеринг дл {C} {?}
  - [] допил после релиза сайта (кредиткc) {B}
  - [] подсказки на ссылочках, alt аттрибут
  - [] Навешать :active :focus классы на кнопки и ссылки, чтоб они не были мёртвыми
  - [x] progressive jpeg
  - [] helmet wild metadata

    ###ArticleGallery
    -----------------
      -[] название раздела и переход на блог?

    ###VideoGallery
    ---------------

    ### Blog
    --------
      - [] из текста блога назад
      - [] timeline pseudoelements-bug

    ### CSS reducing
    ----------------
    - [] .readmore mutual class

    ### Footer
    ----------
    - [] sad and ugly. do something

##Done
=========
  - [x] logPageView прикрутить к react0router v4. onUpdate метод теперь не работает.
  - [x] изменить порядок статей
  - [x] craft ArticlePage
  - [x] reduce lapsha {C}
  - [x] WebpackContextRequire
  - [x] можно при наведении на тамбнейл делать ховер поверх гифки с надписью следующей
  - [x] loop
  - [x] выделение кнопок остаточное убрать
  - [x] перенести задачи из гитлаба и наоборот {B}
  - [x] Remove horizontal scrollbar
  - [x] допил после релиза сайта (гифки)
  - [x] запилить чтоб контент по сайту индексировался, а не был голая htmlка. вебпакчик {A}
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

##GUI Guidlines
--------------
If you have some experience designing an iOS App, you’ll be familiar with the minimum sizes for typography (24px+, optimal for reading: 32px), buttons (44px to 88px) and navigation bar (72px to 98px). It’s also in line with Android devices.

Don’t combine an icon and text within one button.
Choose a button text that is short and meaningful.
Use imperative verbs for all actions; for example: Save, Cancel, Edit.
Keep in mind that the text can be up to 300% longer in other languages.
We don’t recommend using tooltips since they are only visible on desktop devices. However, you can use tooltips for icon buttons.
For icon buttons, make sure the default accessibility text for the icon is correct for your use case. If not, define app-specific accessibility text.
If an action button is temporarily inactive, use the disabled status.
If you need to show the number of items that will be affected by the action of the button, you can add the number in brackets. For example, Edit (3).

[Some conference video about design tricks](https://www.youtube.com/watch?v=ogAZ6JC0pJI&feature=youtu.be&list=PLTdS5E3zupkEiDgztHOUw4kOSM8Qdzo7H)

[Accessability colors video](https://www.youtube.com/watch?v=LBmLspdAtxM&feature=youtu.be)

##Landing Examples
------------------

[Tomaotoes Pomodor Timer](http://www.dollaropath.com/tomatoes/ios/)

[Marked Markdown Editor](http://marked2app.com/)

[Alfred launcher app](https://www.alfredapp.com/)

[Launcharbar launcher app](https://www.obdev.at/products/launchbar/index.html)

[Omnifocus productivity app](https://www.omnigroup.com/omnifocus)

[Reeder rss ](http://reederapp.com/mac/)

[Gnome project](https://www.gnome.org/)

[Zathura pdf](https://pwmt.org/projects/zathura/)

[Elemetary OS](https://elementary.io/)

[Feedly cloud rss](https://feedly.com/)

[Basecamp](https://basecamp.com/)

[Twitter Statistic](http://twittercounter.com/)

[Typora Markdown App](https://typora.io/)

[DataMaps](https://datamaps.co/)

[GNU Emacs](https://www.gnu.org/software/emacs/index.html)


##Make a Blog
--------------
[Shitty and unrelated examples](https://react.rocks/tag/Blog)

[Make a blog for create-react-app in 10 lines of code](https://www.prerender.cloud/blog/2016/10/20/create-react-app-blog)

[Building A Minimal Blogging Platform with React.js](https://rhodey.org/blog/minimal-blog-platform-react)

[helmet + router + seo](https://github.com/ReactTraining/react-router/issues/790)

[Beginner’s Guide to React Router](https://medium.com/@dabit3/beginner-s-guide-to-react-router-53094349669)

[A Simple React Router v4 Tutorial](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)

https://tylermcginnis.com/build-your-own-react-router-v4

https://medium.freecodecamp.com/where-do-i-belong-a-guide-to-saving-react-component-data-in-state-store-static-and-this-c49b335e2a00

https://github.com/xtophs/docker-bash-on-windows


##Additional Features
-----------------------

[Counting Web Session with JS. Swizek blog](https://swizec.com/blog/counting-web-sessions-javascript/swizec/7598?__s=dugx4qg21suydr72vgrv)


##Localization
-----------------
 <Nav currentLanguage={language} switchLanguage={this.switchLanguage} />
