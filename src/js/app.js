/*
(i) Код потрапляє у підсумковий файл,
тільки коли викликана функція,
наприклад flsFunctions.spollers();
Або коли імпортовано весь файл,
наприклад, import "files/script.js";
Невикористовуваний (не викликаний)
код у підсумковий файл не потрапляє.

Якщо ми хочемо додати модуль
слід його розкоментувати
*/

// Увімкнути/вимкнути FLS (Full Logging System) (в роботі)
// window['FLS'] = true;

// Підключення основного файлу стилів
import '../scss/style.scss'

//============================================================================================================================================================================================================================================
// React ========================================================================================================================================================================================================================================================
//============================================================================================================================================================================================================================================
// import Index from './react/Index.jsx';
//============================================================================================================================================================================================================================================

// ========================================================================================================================================================================================================================================================
// Функціонал ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsFunctions from './files/functions.js'

/* Перевірка підтримки webp, додавання класу webp або no-webp для HTML */
/* (i) необхідно для коректного відображення webp із css */
flsFunctions.isWebp()
/* Додавання класу touch для HTML якщо браузер мобільний */
// flsFunctions.addTouchClass();
/* Додавання loaded для HTML після повного завантаження сторінки */
flsFunctions.addLoadedClass()
/* Модуль для роботи з меню (Бургер) */
flsFunctions.menuInit()
/* Форматування чисел */
// import './libs/wNumb.min.js';

/*
Модуль "Спойлери"
Документація: https://template.fls.guru/template-docs/modul-spojlery.html
Сніппет (HTML): spollers
*/
// flsFunctions.spollers();

/*
Модуль "Таби"
Документація: https://template.fls.guru/template-docs/modul-taby.html
Сніппет (HTML): tabs
*/
//flsFunctions.tabs();

/*
Модуль "Показати ще"
Документація: https://template.fls.guru/template-docs/modul-pokazat-eshhjo.html
Сніппет (HTML): showmore
*/
// flsFunctions.showMore();

/*
Модуль "До/Після"
Документація: https://template.fls.guru/template-docs/modul-do-pislia.html
Сніппет (HTML): ba
*/
// import './libs/beforeafter.js';

/*
Модуль "Ефект хвиль"
Документация: https://template.fls.guru/template-docs/modul-ripple-effect.html
Сниппет (HTML):
*/
// flsFunctions.rippleEffect();

/*
Модуль "Кастомний курсор"
Документация:
Сниппет (HTML):
*/
// flsFunctions.customCursor(true);

/*
Модуль "Бігучий рядок" (Alpha)
Документация:
Сниппет (HTML):
*/
// import './libs/keywords.js'

/*
Модуль "Попапи"
Документація: https://template.fls.guru/template-docs/funkcional-popup.html
Сніппет (HTML): pl, pop
*/
// import './libs/popup.js'

/*
Модуль паралаксу мишею
Документація: https://template.fls.guru/template-docs/modul-animacii-parallaks-obektov-pri-dvizhenii-myshi.html
*/
// import './libs/parallax-mouse.js'

// ========================================================================================================================================================================================================================================================
// Робота з формами ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsForms from './files/forms/forms.js'

/* Робота з полями форми */
/* Документація: https://template.fls.guru/template-docs/rabota-s-formami.html */
/*
flsForms.formFieldsInit({
	viewPass: false,
	autoHeight: false
});
*/
/* Надсилання форми */
/* Документація: https://template.fls.guru/template-docs/rabota-s-formami.html */
// flsForms.formSubmit();

/* Модуль форми "кількість" */
// flsForms.formQuantity();

/* Модуль зіркового рейтингу */
// flsForms.formRating();

/* Модуль роботи з select. */
// import './libs/select.js'

/* Модуль роботи з календарем */
// import './files/forms/datepicker.js'

/* (У роботі) Модуль роботи з масками.*/
/*
Підключення та налаштування виконується у файлі js/files/forms/inputmask.js
Документація по роботі у шаблоні:
Документація плагіна: https://github.com/RobinHerbots/inputmask
Сніппет(HTML):
*/
// import "./files/forms/inputmask.js";

/* Модуль роботи з повзунком */
/*
Підключення та налаштування виконується у файлі js/files/forms/range.js
Документація по роботі у шаблоні:
Документація плагіна: https://refreshless.com/nouislider/
Сніппет (HTML): range
*/
// import "./files/forms/range.js";

/* Модуль роботи з підказками (tippy) */
/*
Підключення плагіна Tippy.js та налаштування виконується у файлі js/files/tippy.js
Документація по роботі у шаблоні:
Документація плагіна: https://atomiks.github.io/tippyjs/
Сніппет (HTML): tip (додає атрибут з підказкою для html тега)
*/
import './files/tippy.js'

// Копіювання тексту в буфер обміну, функція працює в парі з tippy, тому треба розкоментувати і його
flsFunctions.copyTextToClipboard()
/*
<div data-tippy-content="Copied" data-clipboard class="item-buy__subtext">
	<p data-clipboardEl class="elipsis">
		CA: TRStG5LKhCFmVzwdKETp1SQHk18UPuzjyXTRStG5L1SQHk18UPuzjyXTRStG5L
	</p>
	<button type="button" aria-label="copy text" class="item-buy__button">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
			<g>
			<path d="M27 3.5H11C10.6022 3.5 10.2206 3.65804 9.93934 3.93934C9.65804 4.22064 9.5 4.60218 9.5 5V9.5H5C4.60218 9.5 4.22064 9.65804 3.93934 9.93934C3.65804 10.2206 3.5 10.6022 3.5 11V27C3.5 27.3978 3.65804 27.7794 3.93934 28.0607C4.22064 28.342 4.60218 28.5 5 28.5H21C21.3978 28.5 21.7794 28.342 22.0607 28.0607C22.342 27.7794 22.5 27.3978 22.5 27V22.5H27C27.3978 22.5 27.7794 22.342 28.0607 22.0607C28.342 21.7794 28.5 21.3978 28.5 21V5C28.5 4.60218 28.342 4.22064 28.0607 3.93934C27.7794 3.65804 27.3978 3.5 27 3.5ZM19.5 25.5H6.5V12.5H19.5V25.5ZM25.5 19.5H22.5V11C22.5 10.6022 22.342 10.2206 22.0607 9.93934C21.7794 9.65804 21.3978 9.5 21 9.5H12.5V6.5H25.5V19.5Z" />
			</g>
		</svg>
	</button>
</div>
*/
// ========================================================================================================================================================================================================================================================
// Робота зі слайдером (Swiper) ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Налаштування підключення плагіна слайдера Swiper та нових слайдерів виконується у файлі js/files/sliders.js
Документація по роботі у шаблоні: https://template.fls.guru/template-docs/rabota-so-slajderom-swiper.html
Документація плагіна: https://swiperjs.com/
Сніппет(HTML): swiper
*/
// import "./files/sliders.js";

// ========================================================================================================================================================================================================================================================
// Модулі роботи з прокручуванням сторінки ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/*
Зміна дизайну скроллбару
Документація по роботі у шаблоні: У HTML додаємо до блоку атрибут data-simplebar
Документація плагіна: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
Сніппет(HTML): 
*/
// import './files/scroll/simplebar.js';

// Ліниве (відкладене) завантаження картинок
// Документація по роботі у шаблоні: https://template.fls.guru/template-docs/modul-lenivaya-podgruzka-lazy-loading.html
// Документація плагіна: https://github.com/verlok/vanilla-lazyload
// Сніппет(HTML):
// import './files/scroll/lazyload.js';

// Спостерігач за об'єктами з атрибутом data-watch
// Документація: https://template.fls.guru/template-docs/modul-nabljudatel-za-poyavleniem-elementa-pri-skrolle.html
// Сніппет(HTML):
import './libs/watcher.js'

// Модуль поекранної прокрутки
// Документація: https://template.fls.guru/template-docs/modul-poekrannoj-prokrutki-stranicy-fullpage.html
// Сніппет(HTML):
// import './libs/fullpage.js'

// Модуль паралаксу
// Документація: https://template.fls.guru/template-docs/paralaks-pri-skroli.html
// Сніппет(HTML):
// import './libs/parallax.js'

// Функції роботи скролом
import * as flsScroll from './files/scroll/scroll.js'

// Плавна навігація по сторінці
// Документація: https://template.fls.guru/template-docs/modul-plavnoj-navigacii-po-stranice.html
flsScroll.pageNavigation()

// Функціонал додавання класів до хедеру під час прокручування
// Документація: https://template.fls.guru/template-docs/modul-dobavleniya-klassov-k-shapke-pri-prokrutke-stranicy.html
// flsScroll.headerScroll();

// Модуль анімація цифрового лічильника
// Документація: https://template.fls.guru/template-docs/modul-animacii-cifrovogo-lichilnika.html
// Сніппет(HTML):
// flsScroll.digitsCounter();

// Counter MINE
// import "./libs/counter.js";

// ========================================================================================================================================================================================================================================================
// Галерея ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Документація по роботі у шаблоні: 
Документація плагіна: https://www.lightgalleryjs.com/docs/
Сніппет(HTML):
*/
// import "./files/gallery.js";

// ========================================================================================================================================================================================================================================================
// Масонрі сітка ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Документація по роботі у шаблоні:
Документація плагіна: 
Сніппет(HTML):
*/
// import "./files/isotope.js";

// ========================================================================================================================================================================================================================================================
// Інші плагіни ============================================================================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/* Динамічний адаптив */
// Документація: https://template.fls.guru/template-docs/dinamicheskij-adaptiv.html
import './libs/dynamic_adapt.js'

//========================================================================================================================================================

// Код додає клас _active-page для menu__link щоб можна було стилізувати активний пункт меню відносно відкритої сторінки
// flsFunctions.getActivePage()

//========================================================================================================================================================

// Створення Keyframes правил заготовлених анімацій для текстових заголовків
// Для використання імпортувати необхідну анімацію з './libs/animationTitles.js', приклад нижче
// Та запустити функцію аргументом якої буде імпортована змінна з налаштуваннями анімації, типи та приклади анімацій в імпортованому файлі
// import { mochaTitle } from './libs/animationTitles.js'

// flsFunctions.createKeyframesAnimation(mochaTitle)

//========================================================================================================================================================

// Функція розбиття тексту на span і подальше привласнення затримки анімації для кожного спану ( затримка анімації між елементами delayBetween=0.2), ( загальна затримка generalDelay=0)
// splitElementIntoSpans(selector, delayBetween, generalDelay)

// flsFunctions.splitElementIntoSpans('.left-about__title', 0.05)
// flsFunctions.splitElementIntoSpans('.right-about__title', 0.05, 0.3)

//Кастомний програвач відео video ========================================================================================================================================================
// Структура
/*
<div class="bottom-how__video video-how">
	<div class="video-how__wraper">
		<video id="video" src="files/02.mp4"></video>
		<button id="play-btn" class="play-btn" type="button">
			<img src="@img/howToBuy/play.png" alt="Image">
		</button>
	</div>
</div>
*/

// flsFunctions.playVideo()

// ========================================================================================================================================================================================================================================================
// Інше ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/* Підключаємо файли зі своїм кодом */
import './files/script.js'
//============================================================================================================================================================================================================================================
