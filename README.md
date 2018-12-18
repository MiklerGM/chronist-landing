LANDING PAGE
========

##How to use
-----------

- `npm run dev` -  Developer environment. Launch webpack-dev-server with hotreloader and other sweets things on localhost:8080

- `npm run release` - Build old DEPRICATED production server. Doesn't contain server side features.

- `npm run build` - Build new production. Contain two subcommands:

    * `npm run build:client` - Build client part of production.

    * `npm run build:server` - Build server side of production

- `npm run serve` - Launch express web server. Only work after execute build command.

- `npm run test` - Run test, only one, one that doesn't work. Jest.

##Landing
-----------

  - [ ] alternative analytics [Fathom](https://github.com/usefathom/fathom)
  - [ ] Выбор языка для crawler. Сделать индексацию для поисковых ботов на разных языках.
  - [ ] Newsletter Unsubscribing
  - [ ] https://developer.mozilla.org/en-US/docs/Web/Manifest . manifest.webmanifest
  - [ ] automaitc sitemaps.
  - [ ] caching. cache-contorl

##Done
-----------
  - [x] поменять порядок в блоге в Article Preview
  - [x] переехать на rem в css
  - [x] footer baseline for width 840 is fucked
  - [x] sanitize markup
  - [x] split-coding for  blog. (look at gatsby.(look readme. fetch md and parse on client in json))
  - [x] less load for ssr3
  - [x] remove withrouter
  - [x] Accessibility improvments. #10, подсказки на ссылочках, alt аттрибут
  - [x] hreflang. React-Router-Intl integration with non-broken SSR
  - [x] Forms
  - [x] props validation in components, Custom Validation and onInvalid listeners
  - [x] сделать ограничение по форме инпута {B}
  - [x] сделать вопросы обязательные {B}
  - [x] Посмотреть, что с айдишника произходит в таймлайне по возможности выпилить getId{Z}
  - [x] описание для экспедиций
  - [x] After MPA done, adjust YM for tricky statistic {C} accurate per page metrika #11
  - [x] BEM convention
  - [x] internalization (c)
  - [x] fix timeline pseudostuff for non-js browsers
  - [x] Silicon Valley Term of Service stuff
  - [x] Навешать :active :focus классы на кнопки и ссылки, чтоб они не были мёртвыми
  - [x] .readmore mutual class
  - [x] helmet wild metadata
  - [x] допил после релиза сайта (кредиткc) {B}
  - [x] Base-16 Theme? Use in less variables
  - [x] sad and ugly. do something
  - [x] SSR
  - [x] migrate to htmlwebpackplugin and hashes for chunks
  - [x] progressive jpeg
  - [x] Add PostCSS and Autoprefix for starters
  - [x] название раздела
  - [x] timeline pseudoelements-bug
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
  - [x] use font-awesome or glyphicon.not some here, some there.
  - [x] fonts
  - [x] dark overlay over title
  - [x] text
  - [x] other shadows
  - [x] cleaning
  - [x] Верхняя панель со ссылками (статьи, блог, таймлайн фич, скрины/видео, "войти" со ссылкой на демку, группы в соцсетях) и лого.
  - [x] Header картинкой
  - [x] Вступительный текст
  - [x] Форма обратной связи
  - [x] Таймлайн фич (картинка-описание-дата внедрения). Внедрённые фичи цветные, не внедрённые - серые. Counter количества данных
  - [x] Footer (position: fixed, полупрозрачный, с кнопкой "войти")
  - [x] PS правый вариант картинки, скорее всего
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
  - [x] Favicon plugin search and destroy
  - [x] map
  - [x] landing

##Failed
-------

  - [o] кнопку переход на блог (когда будет больше статей)?, из текста блога назад,Breadcrumb #DONTFIX: there is one step from everywhere.
  - [o] Migrate form front-matter-markdown to react-markdown + react-markdown-loader like gatsby {transformImageUri} - imposible. need graphql backend stuff.
  - [o] +shadows эффект поднятия для гифок например. гифок нет больше

## Metriks
-----------

goals:
  localeChangeRu
  localeChangeEn
  cookieAgree
  jumpToMap
