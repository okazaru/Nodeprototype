/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/listmenu.js":
/*!**********************************!*\
  !*** ./resources/js/listmenu.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var touchstring = document.getElementById("stringcreate");
var touchinteger = document.getElementById("integercreate");
var touchdouble = document.getElementById("doublecreate");
var toucharray = document.getElementById("arraycreate");
var touchif = document.getElementById("ifcreate");
var touchelseif = document.getElementById("elseifcreate");
var touchelse = document.getElementById("elsecreate");
var touchswitch = document.getElementById("switchcreate");
var touchcase = document.getElementById("casecreate");
var touchfor = document.getElementById("forcreate");
var touchwhile = document.getElementById("whilecreate");
var touchclick = document.getElementById("clickcreate");
var touchload = document.getElementById("loadcreate");
var touchmousemove = document.getElementById("mousemovecreate");
var touchscroll = document.getElementById("scrollcreate"); //ブロック

var main = document.getElementById("main");
var gomi = document.getElementById("gomi");
var gomiimg = document.getElementById("gomibako");
var pdf_Butt = document.querySelector("button#pdf");
var brocknumber;
var flag = false;
var index; //ブロック生成s

touchstring.addEventListener('click', function () {
  var brockc = document.createElement('div');
  brockc.style.width = "50px";
  brockc.style.height = "60px";
  brockc.textContent = "String";
  brockc.style.backgroundColor = "#CD5C5C";
  brockc.setAttribute('class', 'Stb');
  brockc.cmanOMat = "movearea";
  main.appendChild(brockc);
  flag = true;

  if (flag == true) {
    var brock = document.getElementsByClassName("Stb");
    ablemove(brock);
  }
});
touchinteger.addEventListener('click', function () {
  var brockc = document.createElement('div');
  brockc.style.width = "50px";
  brockc.style.height = "60px";
  brockc.textContent = "integer";
  brockc.style.backgroundColor = "#CD5C5C";
  brockc.setAttribute('class', 'Inb');
  brockc.cmanOMat = "movearea";
  main.appendChild(brockc);
  flag = true;

  if (flag == true) {
    var brock = document.getElementsByClassName("Inb");
    ablemove(brock);
  }
});
touchdouble.addEventListener('click', function () {
  var brockc = document.createElement('div');
  brockc.style.width = "50px";
  brockc.style.height = "60px";
  brockc.textContent = "double";
  brockc.style.backgroundColor = "#CD5C5C";
  brockc.setAttribute('class', 'Dob');
  brockc.cmanOMat = "movearea";
  main.appendChild(brockc);
  flag = true;

  if (flag == true) {
    var brock = document.getElementsByClassName("Dob");
    ablemove(brock);
  }
});
toucharray.addEventListener('click', function () {
  var brockc = document.createElement('div');
  brockc.style.width = "50px";
  brockc.style.height = "60px";
  brockc.textContent = "array";
  brockc.style.backgroundColor = "#CD5C5C";
  brockc.setAttribute('class', 'Arb');
  brockc.cmanOMat = "movearea";
  main.appendChild(brockc);
  flag = true;

  if (flag == true) {
    var brock = document.getElementsByClassName("Arb");
    ablemove(brock);
  }
});
touchif.addEventListener('click', function () {
  var brockc = document.createElement('div');
  brockc.style.width = "50px";
  brockc.style.height = "60px";
  brockc.textContent = "if";
  brockc.style.backgroundColor = "#9acd32";
  brockc.setAttribute('class', 'Ifb');
  brockc.cmanOMat = "movearea";
  main.appendChild(brockc);
  flag = true;

  if (flag == true) {
    var brock = document.getElementsByClassName("Ifb");
    ablemove(brock);
  }
});
touchelseif.addEventListener('click', function () {
  var brockc = document.createElement('div');
  brockc.style.width = "50px";
  brockc.style.height = "60px";
  brockc.textContent = "else if";
  brockc.style.backgroundColor = "#9acd32";
  brockc.setAttribute('class', 'Elifb');
  brockc.cmanOMat = "movearea";
  main.appendChild(brockc);
  flag = true;

  if (flag == true) {
    var brock = document.getElementsByClassName("Elifb");
    ablemove(brock);
  }
});
touchelse.addEventListener('click', function () {
  var brockc = document.createElement('div');
  brockc.style.width = "50px";
  brockc.style.height = "60px";
  brockc.textContent = "else";
  brockc.style.backgroundColor = "#9acd32";
  brockc.setAttribute('class', 'Elb');
  brockc.cmanOMat = "movearea";
  main.appendChild(brockc);
  flag = true;

  if (flag == true) {
    var brock = document.getElementsByClassName("Elb");
    ablemove(brock);
  }
});
touchswitch.addEventListener('click', function () {
  var brockc = document.createElement('div');
  brockc.style.width = "50px";
  brockc.style.height = "60px";
  brockc.textContent = "switch";
  brockc.style.backgroundColor = "#9acd32";
  brockc.setAttribute('class', 'Swb');
  brockc.cmanOMat = "movearea";
  main.appendChild(brockc);
  flag = true;

  if (flag == true) {
    var brock = document.getElementsByClassName("Swb");
    ablemove(brock);
  }
});
touchcase.addEventListener('click', function () {
  var brockc = document.createElement('div');
  brockc.style.width = "50px";
  brockc.style.height = "60px";
  brockc.textContent = "case";
  brockc.style.backgroundColor = "#9acd32";
  brockc.setAttribute('class', 'Cab');
  brockc.cmanOMat = "movearea";
  main.appendChild(brockc);
  flag = true;

  if (flag == true) {
    var brock = document.getElementsByClassName("Cab");
    ablemove(brock);
  }
});
touchfor.addEventListener('click', function () {
  var brockc = document.createElement('div');
  brockc.style.width = "50px";
  brockc.style.height = "60px";
  brockc.textContent = "for";
  brockc.style.backgroundColor = "#BDB76B";
  brockc.setAttribute('class', 'Fob');
  brockc.cmanOMat = "movearea";
  main.appendChild(brockc);
  flag = true;

  if (flag == true) {
    var brock = document.getElementsByClassName("Fob");
    ablemove(brock);
  }
});
touchwhile.addEventListener('click', function () {
  var brockc = document.createElement('div');
  brockc.style.width = "50px";
  brockc.style.height = "60px";
  brockc.textContent = "while";
  brockc.style.backgroundColor = "#BDB76B";
  brockc.setAttribute('class', 'Whb');
  brockc.cmanOMat = "movearea";
  main.appendChild(brockc);
  flag = true;

  if (flag == true) {
    var brock = document.getElementsByClassName("Whb");
    ablemove(brock);
  }
});
touchclick.addEventListener('click', function () {
  var brockc = document.createElement('div');
  brockc.style.width = "50px";
  brockc.style.height = "60px";
  brockc.textContent = "click";
  brockc.style.backgroundColor = "#1e90ff";
  brockc.setAttribute('class', 'Clb');
  brockc.cmanOMat = "movearea";
  main.appendChild(brockc);
  flag = true;

  if (flag == true) {
    var brock = document.getElementsByClassName("Clb");
    ablemove(brock);
  }
});
touchload.addEventListener('click', function () {
  var brockc = document.createElement('div');
  brockc.style.width = "50px";
  brockc.style.height = "60px";
  brockc.textContent = "load";
  brockc.style.backgroundColor = "#1e90ff";
  brockc.setAttribute('class', 'Lob');
  brockc.cmanOMat = "movearea";
  main.appendChild(brockc);
  flag = true;

  if (flag == true) {
    var brock = document.getElementsByClassName("Lob");
    ablemove(brock);
  }
});
touchmousemove.addEventListener('click', function () {
  var brockc = document.createElement('div');
  brockc.style.width = "50px";
  brockc.style.height = "60px";
  brockc.textContent = "mousemove";
  brockc.style.backgroundColor = "#1e90ff";
  brockc.setAttribute('class', 'Mob');
  brockc.cmanOMat = "movearea";
  main.appendChild(brockc);
  flag = true;

  if (flag == true) {
    var brock = document.getElementsByClassName("Mob");
    ablemove(brock);
  }
});
touchscroll.addEventListener('click', function () {
  var brockc = document.createElement('div');
  brockc.style.width = "50px";
  brockc.style.height = "60px";
  brockc.textContent = "scroll";
  brockc.style.backgroundColor = "#1e90ff";
  brockc.setAttribute('class', 'Scb');
  brockc.cmanOMat = "movearea";
  main.appendChild(brockc);
  flag = true;

  if (flag == true) {
    var brock = document.getElementsByClassName("Scb");
    ablemove(brock);
  }
}); //ブロック生成e 
//ブロック制御s

function ablemove(brock) {
  $(brock).on('mouseover', function () {
    index = $(brock).index(this);
    brock[index].style.position = "absolute";
    brock[index].style.cursor = "pointer";
    brock[index].style.zIndex = "2";

    brock[index].ondragstart = function (e) {
      return false;
    };

    brock[index].onmousedown = function (event) {
      document.addEventListener("mousemove", onMouseMove);
    };

    brock[index].onmouseup = function (event) {
      var x = event.clientX;
      var y = event.clientY;
      var width = brock[index].offsetWidth;
      var height = brock[index].offsetHeight;
      var gomibakoRect = gomi.getBoundingClientRect();

      if (x >= gomibakoRect.left && x <= gomibakoRect.left + gomibakoRect.width && y >= gomibakoRect.top && y <= gomibakoRect.top + gomibakoRect.height) {
        gomibako.src = "/img/スクリーンショット-2016-09-18-21.13.58.png";
        main.removeChild(brock[index]);
      }

      document.removeEventListener("mousemove", onMouseMove);
    };

    var onMouseMove = function onMouseMove(event) {
      var x = event.clientX;
      var y = event.clientY;
      var width = brock[index].offsetWidth;
      var height = brock[index].offsetHeight;
      brock[index].style.top = y - height / 2 * 2 - height * 2 + "px";
      brock[index].style.left = x - width / 2 * 2 - width * 11 + "px";
      var gomibakoRect = gomi.getBoundingClientRect();

      if (x >= gomibakoRect.left && x <= gomibakoRect.left + gomibakoRect.width && y >= gomibakoRect.top && y <= gomibakoRect.top + gomibakoRect.height) {
        gomibako.src = "/img/スクリーンショット-2016-09-18-21.13.58のコピー.png";
      } else {
        gomibako.src = "/img/スクリーンショット-2016-09-18-21.13.58.png";
      }
    };

    flag = false;
  });
} //ブロック制御e


pdf_Butt.addEventListener('click', function () {
  html2canvas(document.body, {
    onrendered: function onrendered(canvas) {
      var agr = window.confirm("この内容で保存しますか？");

      if (agr) {
        var dataUrl = canvas.toDataURL();
        var pdf = new jsPDF();
        var width = pdf.internal.pageSize.width;
        var height = pdf.internal.pageSize.height;
        pdf.addImage(dataUrl, 'PDF', 0, 0, width, 0);
        pdf.save('test.pdf');
      }
    }
  });
});

/***/ }),

/***/ 1:
/*!****************************************!*\
  !*** multi ./resources/js/listmenu.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/okazakiryousuke/Desktop/laravel/Prototype/resources/js/listmenu.js */"./resources/js/listmenu.js");


/***/ })

/******/ });