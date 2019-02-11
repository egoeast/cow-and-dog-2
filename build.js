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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let canvas = document.getElementById(\"myCanvas\");\r\nlet ctx = canvas.getContext(\"2d\");\r\n\r\nlet x = canvas.width / 2;\r\nlet y = canvas.height - 30;\r\nlet dx = 2;\r\nlet dy = -2;\r\nlet ballRadius = 10;\r\n\r\ninit();\r\ninitBall();\r\n\r\nfunction init() {\r\n    canvas = document.getElementById(\"myCanvas\");\r\n    ctx = canvas.getContext(\"2d\");\r\n    x = canvas.width / 2;\r\n    y = canvas.height - 30;\r\n    dx = 2;\r\n    dy = -2;\r\n    ballRadius = 10;\r\n}\r\n\r\nfunction initBall(){\r\n    x = canvas.width / 2;\r\n    y = canvas.height - 30;\r\n    dx = 2;\r\n    dy = -2;\r\n}\r\n\r\nfunction drawScore() {\r\n    ctx.font = \"16px Arial\";\r\n    ctx.fillStyle = \"#0095DD\";\r\n    ctx.fillText(\"Score: \" + score, 8, 20);\r\n}\r\n\r\nfunction drawBall() {\r\n    /*ctx.beginPath();\r\n    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);\r\n    ctx.fillStyle = \"#0095DD\";\r\n    ctx.fill();\r\n    ctx.closePath();*/\r\n    let image = new Image(100, 100);\r\n    image.src = 'i/mm_cow_run.gif';\r\n    ctx.drawImage(image, dx, dy, 100, 100);\r\n}\r\n\r\nfunction collisionDetection() {\r\n    for (let c = 0; c < brickColumnCount; c++) {\r\n        for (let r = 0; r < brickRowCount; r++) {\r\n            let b = bricks[c][r];\r\n            if (b.status && x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {\r\n                dy = -dy;\r\n                b.status = false;\r\n                score++;\r\n                if (score === maxScore) {\r\n                    level++;\r\n                    if (!map[level]) {\r\n                        document.location.reload();\r\n                    }\r\n                    alert(\"YOU WIN, CONGRATULATIONS!\");\r\n                    init();\r\n                    initBall();\r\n                    initBricks();\r\n                    console.log(bricks);\r\n\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nfunction draw() {\r\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\r\n    drawBall();\r\n\r\n    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {\r\n        dx = -dx;\r\n    }\r\n\r\n /*   if (y + dy < ballRadius) {\r\n        dy = -dy;\r\n    }*/\r\n//    collisionDetection();\r\n\r\n    x += dx;\r\n    y += dy;\r\n\r\n    window.requestAnimationFrame(draw);\r\n}\r\n\r\ndraw();\r\n\r\nwindow.onresize = () => {\r\n    //canvas.width = window.innerWidth;\r\n    //console.log(window.innerWidth);\r\n};\n\n//# sourceURL=webpack:///./script.js?");

/***/ })

/******/ });