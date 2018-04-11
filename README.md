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

  - [ ] hreflang. React-Router-Intl integration with non-broken SSR
  - [ ] Migrate form front-matter-markdown to react-markdown + react-markdown-loader {transformImageUri}
  - [ ] Newsletter Unsubscribing
  - [ ] Accessibility improvments. #10, подсказки на ссылочках, alt аттрибут
  - [ ] кнопку переход на блог (когда будет больше статей)?, из текста блога назад,Breadcrumb ?
  - [ ] +shadows эффект поднятия для гифок например
  - [ ] https://developer.mozilla.org/en-US/docs/Web/Manifest . manifest.webmanifest
  - [ ] automaitc sitemaps.
  - [ ] caching. cache-contorl
  - [?] Why maps


##Done
-----------

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
---------------
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

[Discover Creative Work](https://www.behance.net/)

## Good Articles
-----------------

[What to use to react styling?](http://andrewhfarmer.com/how-to-style-react/)


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

https://github.com/pk1m/Stackoverflow-helpme

##Additional Features
-----------------------

[Counting Web Session with JS. Swizek blog](https://swizec.com/blog/counting-web-sessions-javascript/swizec/7598?__s=dugx4qg21suydr72vgrv)

##Contact Form
----------------

[DataMaps contact](https://datamaps.co/contact) - contact pages with input form

##Localization
-----------------
 <Nav currentLanguage={language} switchLanguage={this.switchLanguage} />


##Footer
-----------

About Us Link
Contact Us Link
ToS
Privacy Policy - what we do with your email
Address and Phone Number  - don't. we don't provide physical business


## Design
----------------

[Creating a Blurred Background Using Only CSS](https://paper-leaf.com/blog/2016/01/creating-blurred-background-using-only-css/)

Microsoft says that more materials are planned, but for now is starting with just one: "Acrylic." This is a translucent, generated material that uses Gaussian blur combined with noise to create a sort of plastic-like effect. Microsoft intends for Acrylic to be used under, for example, navigational elements, in order to de-emphasize them. Acrylic would also be used under ephemeral content.

### Colors
===========
    base color - 073242
    base16-harmonic16-dark
    base16-solarized
    base16-materia

ColorTesting
<div>
  <div className="block base00-background base07">00</div>
  <div className="block base01-background base07">01</div>
  <div className="block base02-background base07">02</div>
  <div className="block base03-background base07">03</div>
  <div className="block base04-background base00">04</div>
  <div className="block base05-background base00">05</div>
  <div className="block base06-background base00">06</div>
  <div className="block base07-background base00">07</div>
  <br />
  <div className="block base08-background base07">08</div>
  <div className="block base09-background base07">09</div>
  <div className="block base0A-background base07">0A</div>
  <div className="block base0B-background base07">0B</div>
  <div className="block base0C-background base07">0C</div>
  <div className="block base0D-background base07">0D</div>
  <div className="block base0E-background base07">0E</div>
  <div className="block base0F-background base07">0F</div>
</div>

## Security
------------

[dangerouslysetinnerhtml](https://stackoverflow.com/questions/44593485/example-of-bad-react-dangerouslysetinnerhtml)

[Security Checklist](https://simplesecurity.sensedeep.com/web-developer-security-checklist-f2e4f43c9c56)

## Server-side rendering
---------------------------

https://github.com/dimaip/server-side-rendering
https://medium.com/@apostolos/server-side-rendering-code-splitting-and-hot-reloading-with-react-router-v4-87239cfc172c

[Good Router SRR ](http://crypt.codemancers.com/posts/2016-09-16-react-server-side-rendering/)

https://medium.com/@justinjung04/react-server-side-rendering-and-hot-reloading-ffb87ca81a89

[universal-react-demo](https://github.com/5tefan/universal-react-demo)


## Utilize
----------
https://en.bem.info/methodology/
https://en.bem.info/methodology/quick-start/

[Logos](http://foundedinholland.com/)

https://github.com/quietshu/react-less-boilerplate/tree/master/app

[styled-components v2: A smaller, faster drop-in upgrade with even more features](https://medium.com/styled-components/announcing-v2-f01ef3766ac2)

[examples with css, markdown ssr](https://github.com/webpack/react-starter/blob/307594cc8df815ad7d2adcd6a3b5c78a32388084/app/containers/ReadmePage.jsx)


##Tricks
----------
// GOOD
var icon = this.props.active ? require('./my-icon-active.png') : require('./my-icon-inactive.png');
<Image source={icon} />

#Dev Dependecies

  babel-eslint
  eslint-config-airbnb
  eslint-plugin-jsx-a11y
  markdown-with-front-matter-loader
  github-markdown-css --save

#GUI Guidlines
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




#Win

[Datasketch](http://www.datasketch.es/march/?utm_source=ActiveCampaign&utm_medium=email&utm_content=BDN+%2371%3A+the+myth+of+superhuman+AI%2C+dataviz+by+Google%2C+a+startup+simulator%2C+and+some+new+Wait+but+Why&utm_campaign=Banana+Data+%2371)

#Code
```

#Code Splitting

https://github.com/didierfranc/react-code-splitting
https://hackernoon.com/straightforward-code-splitting-with-react-and-webpack-4b94c28f6c3f
https://hackernoon.com/impress-your-friends-with-code-splitting-in-react-9f9a3ca2ae6e




Картиночки:
 - Исследование данных
 - Экспорт данных
 - Личные сценарии


newchronist.ai
Заголовок


шрифты в шапке тоньше для маков

"О нас пишут" - Press

Contact us. Got any problems, ideas or just want to find out what's happening? We’d love to hear from you. Here’s how you can reach us. E-mail to idea@chronist.ru or fill the form.
By pressing the button you agree to our confidentiality policy.


##React intl
https://medium.com/@markuretsky/react-router-multilingual-362eaa33ae20


https://medium.com/@markuretsky/react-router-multilingual-362eaa33ae20
https://github.com/yahoo/react-intl/issues/243
https://github.com/yahoo/react-intl/issues/1027




I’m also wrapping it with a redux connect so the “locale” param gets injected to it before we use something like:

const mapStateToProps = (state) => {
 const locale = state.settings.language.id.toLowerCase().split(/[_-]+/)[0];
 return {
 locale,
 };
};

export default connect(mapStateToProps)(createLocalizedRoutes);

and as for {createLocalizedRoutes} yeah it should be {createLocallizedRoutes()} will fix that, thanks.
