/******/ (function(modules) { // webpackBootstrap
/******/  // The module cache
/******/  var installedModules = {};
/******/
/******/  // The require function
/******/  function __webpack_require__(moduleId) {
/******/
/******/    // Check if module is in cache
/******/    if(installedModules[moduleId]) {
/******/      return installedModules[moduleId].exports;
/******/    }
/******/    // Create a new module (and put it into the cache)
/******/    var module = installedModules[moduleId] = {
/******/      i: moduleId,
/******/      l: false,
/******/      exports: {}
/******/    };
/******/
/******/    // Execute the module function
/******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/    // Flag the module as loaded
/******/    module.l = true;
/******/
/******/    // Return the exports of the module
/******/    return module.exports;
/******/  }
/******/
/******/
/******/  // expose the modules object (__webpack_modules__)
/******/  __webpack_require__.m = modules;
/******/
/******/  // expose the module cache
/******/  __webpack_require__.c = installedModules;
/******/
/******/  // define getter function for harmony exports
/******/  __webpack_require__.d = function(exports, name, getter) {
/******/    if(!__webpack_require__.o(exports, name)) {
/******/      Object.defineProperty(exports, name, {
/******/        configurable: false,
/******/        enumerable: true,
/******/        get: getter
/******/      });
/******/    }
/******/  };
/******/
/******/  // getDefaultExport function for compatibility with non-harmony modules
/******/  __webpack_require__.n = function(module) {
/******/    var getter = module && module.__esModule ?
/******/      function getDefault() { return module['default']; } :
/******/      function getModuleExports() { return module; };
/******/    __webpack_require__.d(getter, 'a', getter);
/******/    return getter;
/******/  };
/******/
/******/  // Object.prototype.hasOwnProperty.call
/******/  __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/  // __webpack_public_path__
/******/  __webpack_require__.p = "";
/******/
/******/  // Load entry module and return exports
/******/  return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controllers_builderCtrl_js__ = __webpack_require__(1);


__WEBPACK_IMPORTED_MODULE_0__controllers_builderCtrl_js__["a" /* default */].render();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_info_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_engine_js__ = __webpack_require__(3);
// import model from "../models/info.js";
// // var model = require("../models/info.js");

// import view from "../views/engine.js";
// let controller = {
//  model,
//  view,
//  work: function(){
//    let resalt =[],
//    data = this.model.data;
//    resalt = data.map(function(el){
//      let html = document.createElement(el.tag);
//      if(el.body){
//        html.innerHTML = el.body
//      };
//      if (el.src) {html.setAttribute("src",el.src)};
//      return html;
//      if (el.src&&el.tag!="ing");
//    });

//    this.markUp = resalt;
//    return resalt;
//  },
//  render: function(){
//  this.work();
//  this.view.render(this.markUp);
//  },
//  markUp: []
// };

// export default controller;


// var model = require("../models/info.js");


let controller = {
  model: __WEBPACK_IMPORTED_MODULE_0__models_info_js__["a" /* default */],
  view: __WEBPACK_IMPORTED_MODULE_1__views_engine_js__["a" /* default */],
  work: function(){
    let resalt =[],
    data = this.model.data;
    resalt = data.map(function(el){
      if (el.body) {
        el.tag = "div";
      }
      let div = document.createElement(el.tag);
      if(el.body){        
        div.innerHTML = "<p>"+el.body+"</p>";
      };
      if (el.id) {
          div.setAttribute("id", el.id);
          };

      if(el.title){
        el.tag = "h1";
      };
      let h1 = document.createElement(el.tag);
      if(el.title){
        h1.innerHTML = el.title;
      };
      if (el.userId) {
        h1.classList.add("one")
      }

      let html = div.appendChild(h1);

      return div;
      return html;

    });

    this.markUp = resalt;
    return resalt;
  },
  render: function(){
  this.work();
  this.view.render(this.markUp);
  },
  markUp: []
};

/* harmony default export */ __webpack_exports__["a"] = (controller);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  // data: [
  // {tag:"h1", body:"Olha Klymas"},
  // {tag: "img", src:"../images/myfoto.img"},
  // {tag: "ul", body: "3"},
  // {tag: "li", body: "HTML"}, 
  // {tag: "li", body: "css"},  
  // {tag: "li", body: "JS"},
  // {tag: "p", body: "«язык гипертекстовой разметки» — HTML (или XHTML). Язык HTML интерпретируется браузерами; полученный в результате интерпретации форматированный текст отображается на экране монитора компьютера или мобильного устройства."},
  // {tag: "p", body: "каскадные таблицы стилей — формальный язык описания внешнего вида документа, написанного с использованием языка разметки."},
  // {tag: "p", body: "мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией языка ECMAScript (стандарт ECMA-262). JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений."}
  // ];
  data: [
  {
    "userId": "oneclass",
    "id": "three",
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": "oneclass",
    "id": "three",
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": "oneclass",
    "id": "three",
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": "oneclass",
    "id": "three",
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
    "userId": "oneclass",
    "id": "three",
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  },
  {
    "userId": "oneclass",
    "id": "three",
    "title": "dolorem eum magni eos aperiam quia",
    "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
  },
  {
    "userId": "oneclass",
    "id": "three",
    "title": "magnam facilis autem",
    "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
  },
  {
    "userId": "oneclass",
    "id": "three",
    "title": "dolorem dolore est ipsam",
    "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
  },
  {
    "userId": "oneclass",
    "id": "three",
    "title": "nesciunt iure omnis dolorem tempora et accusantium",
    "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
  },
  {
    "userId": "oneclass",
    "id": "one",
    "title": "optio molestias id quia eum",
    "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
  },
  {
    "userId": "oneclass",
    "id": "one",
    "title": "et ea vero quia laudantium autem",
    "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
  }
]
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  render: function(data){
    var body = document.body;
      data.forEach(function(el){
        body.appendChild(el);
      });
    console.log(data);
  }
});



/***/ })
/******/ ]);