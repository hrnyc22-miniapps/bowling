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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/board.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/board.jsx":
/*!******************************!*\
  !*** ./client/src/board.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/macbook/Documents/GitHub/bowling/client/src/board.jsx: Unexpected token (31:1)\\n\\n\\u001b[0m \\u001b[90m 29 | \\u001b[39m    \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mupdatePin \\u001b[33m=\\u001b[39m \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mupdatePin\\u001b[33m.\\u001b[39mbind(\\u001b[36mthis\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 30 | \\u001b[39m    \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mcontinueBowling \\u001b[33m=\\u001b[39m \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mcontinueBowling\\u001b[33m.\\u001b[39mbind(\\u001b[36mthis\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 31 | \\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<\\u001b[39m \\u001b[33mHEAD\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 32 | \\u001b[39m    \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mcountPinNumber \\u001b[33m=\\u001b[39m \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mcountPinNumber\\u001b[33m.\\u001b[39mbind(\\u001b[36mthis\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 33 | \\u001b[39m  }\\u001b[0m\\n\\u001b[0m \\u001b[90m 34 | \\u001b[39m\\u001b[0m\\n    at Object.raise (/Users/macbook/Documents/GitHub/bowling/node_modules/@babel/parser/lib/index.js:6344:17)\\n    at Object.unexpected (/Users/macbook/Documents/GitHub/bowling/node_modules/@babel/parser/lib/index.js:7659:16)\\n    at Object.jsxParseIdentifier (/Users/macbook/Documents/GitHub/bowling/node_modules/@babel/parser/lib/index.js:3377:12)\\n    at Object.jsxParseNamespacedName (/Users/macbook/Documents/GitHub/bowling/node_modules/@babel/parser/lib/index.js:3387:23)\\n    at Object.jsxParseElementName (/Users/macbook/Documents/GitHub/bowling/node_modules/@babel/parser/lib/index.js:3398:21)\\n    at Object.jsxParseOpeningElementAt (/Users/macbook/Documents/GitHub/bowling/node_modules/@babel/parser/lib/index.js:3480:22)\\n    at Object.jsxParseElementAt (/Users/macbook/Documents/GitHub/bowling/node_modules/@babel/parser/lib/index.js:3513:33)\\n    at Object.jsxParseElement (/Users/macbook/Documents/GitHub/bowling/node_modules/@babel/parser/lib/index.js:3587:17)\\n    at Object.parseExprAtom (/Users/macbook/Documents/GitHub/bowling/node_modules/@babel/parser/lib/index.js:3594:19)\\n    at Object.parseExprSubscripts (/Users/macbook/Documents/GitHub/bowling/node_modules/@babel/parser/lib/index.js:8413:23)\\n    at Object.parseMaybeUnary (/Users/macbook/Documents/GitHub/bowling/node_modules/@babel/parser/lib/index.js:8393:21)\\n    at Object.parseExprOps (/Users/macbook/Documents/GitHub/bowling/node_modules/@babel/parser/lib/index.js:8280:23)\\n    at Object.parseMaybeConditional (/Users/macbook/Documents/GitHub/bowling/node_modules/@babel/parser/lib/index.js:8253:23)\\n    at Object.parseMaybeAssign (/Users/macbook/Documents/GitHub/bowling/node_modules/@babel/parser/lib/index.js:8200:21)\\n    at Object.parseExpression (/Users/macbook/Documents/GitHub/bowling/node_modules/@babel/parser/lib/index.js:8148:23)\\n    at Object.parseStatementContent (/Users/macbook/Documents/GitHub/bowling/node_modules/@babel/parser/lib/index.js:9917:23)\\n    at Object.parseStatement (/Users/macbook/Documents/GitHub/bowling/node_modules/@babel/parser/lib/index.js:9788:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/macbook/Documents/GitHub/bowling/node_modules/@babel/parser/lib/index.js:10364:25)\\n    at Object.parseBlockBody (/Users/macbook/Documents/GitHub/bowling/node_modules/@babel/parser/lib/index.js:10351:10)\\n    at Object.parseBlock (/Users/macbook/Documents/GitHub/bowling/node_modules/@babel/parser/lib/index.js:10335:10)\\n    at Object.parseFunctionBody (/Users/macbook/Documents/GitHub/bowling/node_modules/@babel/parser/lib/index.js:9408:24)\\n    at Object.parseFunctionBodyAndFinish (/Users/macbook/Documents/GitHub/bowling/node_modules/@babel/parser/lib/index.js:9378:10)\\n    at Object.parseMethod (/Users/macbook/Documents/GitHub/bowling/node_modules/@babel/parser/lib/index.js:9332:10)\\n    at Object.pushClassMethod (/Users/macbook/Documents/GitHub/bowling/node_modules/@babel/parser/lib/index.js:10767:30)\\n    at Object.parseClassMemberWithIsStatic (/Users/macbook/Documents/GitHub/bowling/node_modules/@babel/parser/lib/index.js:10692:12)\\n    at Object.parseClassMember (/Users/macbook/Documents/GitHub/bowling/node_modules/@babel/parser/lib/index.js:10631:10)\\n    at withTopicForbiddingContext (/Users/macbook/Documents/GitHub/bowling/node_modules/@babel/parser/lib/index.js:10586:14)\\n    at Object.withTopicForbiddingContext (/Users/macbook/Documents/GitHub/bowling/node_modules/@babel/parser/lib/index.js:9683:14)\\n    at Object.parseClassBody (/Users/macbook/Documents/GitHub/bowling/node_modules/@babel/parser/lib/index.js:10563:10)\\n    at Object.parseClass (/Users/macbook/Documents/GitHub/bowling/node_modules/@babel/parser/lib/index.js:10537:22)\");\n\n//# sourceURL=webpack:///./client/src/board.jsx?");

/***/ })

/******/ });