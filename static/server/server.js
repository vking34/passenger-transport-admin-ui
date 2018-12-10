module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 74);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 3 */
/*!*************************************!*\
  !*** ./src/app/components/index.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorWrap = exports.PostCard = exports.Notification = exports.CrudTable = exports.AlbumWidget = exports.CarouselWidget = exports.AreaChartWidget = exports.CounterIconsWidget = exports.CounterWidget = exports.PapperBlock = exports.TicketTable = exports.WScheduleTable = exports.TScheduleTable = exports.ClientTable = exports.AssistantTable = exports.DriverTable = exports.TransporterTable = exports.RouteTable = exports.BreadCrumb = exports.Footer = exports.Sidebar = exports.Header = exports.Dashboard = exports.App = undefined;

var _App2 = __webpack_require__(/*! ./App/App */ 86);

var _App3 = _interopRequireDefault(_App2);

var _Dashboard2 = __webpack_require__(/*! ./App/Dashboard */ 90);

var _Dashboard3 = _interopRequireDefault(_Dashboard2);

var _Header2 = __webpack_require__(/*! ./Header/Header */ 92);

var _Header3 = _interopRequireDefault(_Header2);

var _Sidebar2 = __webpack_require__(/*! ./Sidebar/Sidebar */ 104);

var _Sidebar3 = _interopRequireDefault(_Sidebar2);

var _Footer2 = __webpack_require__(/*! ./Footer/Footer */ 114);

var _Footer3 = _interopRequireDefault(_Footer2);

var _BreadCrumb2 = __webpack_require__(/*! ./BreadCrumb/BreadCrumb */ 116);

var _BreadCrumb3 = _interopRequireDefault(_BreadCrumb2);

var _RouteTable2 = __webpack_require__(/*! ./Route/RouteTable */ 118);

var _RouteTable3 = _interopRequireDefault(_RouteTable2);

var _TransporterTable2 = __webpack_require__(/*! ./Transporter/TransporterTable */ 120);

var _TransporterTable3 = _interopRequireDefault(_TransporterTable2);

var _DriverTable2 = __webpack_require__(/*! ./Driver/DriverTable */ 122);

var _DriverTable3 = _interopRequireDefault(_DriverTable2);

var _AssistantTable2 = __webpack_require__(/*! ./Assistant/AssistantTable */ 124);

var _AssistantTable3 = _interopRequireDefault(_AssistantTable2);

var _ClientTable2 = __webpack_require__(/*! ./Client/ClientTable */ 126);

var _ClientTable3 = _interopRequireDefault(_ClientTable2);

var _TScheduleTable2 = __webpack_require__(/*! ./Schedule/TScheduleTable */ 128);

var _TScheduleTable3 = _interopRequireDefault(_TScheduleTable2);

var _WScheduleTable2 = __webpack_require__(/*! ./Schedule/WScheduleTable */ 130);

var _WScheduleTable3 = _interopRequireDefault(_WScheduleTable2);

var _TicketTable2 = __webpack_require__(/*! ./Ticket/TicketTable */ 132);

var _TicketTable3 = _interopRequireDefault(_TicketTable2);

var _PapperBlock2 = __webpack_require__(/*! ./PapperBlock/PapperBlock */ 40);

var _PapperBlock3 = _interopRequireDefault(_PapperBlock2);

var _CounterWidget2 = __webpack_require__(/*! ./Counter/CounterWidget */ 135);

var _CounterWidget3 = _interopRequireDefault(_CounterWidget2);

var _CounterIconsWidget2 = __webpack_require__(/*! ./Widget/CounterIconsWidget */ 137);

var _CounterIconsWidget3 = _interopRequireDefault(_CounterIconsWidget2);

var _AreaChartWidget2 = __webpack_require__(/*! ./Widget/AreaChartWidget */ 149);

var _AreaChartWidget3 = _interopRequireDefault(_AreaChartWidget2);

var _CarouselWidget2 = __webpack_require__(/*! ./Widget/CarouselWidget */ 160);

var _CarouselWidget3 = _interopRequireDefault(_CarouselWidget2);

var _AlbumWidget2 = __webpack_require__(/*! ./Widget/AlbumWidget */ 168);

var _AlbumWidget3 = _interopRequireDefault(_AlbumWidget2);

var _CrudTable2 = __webpack_require__(/*! ./Tables/CrudTable */ 173);

var _CrudTable3 = _interopRequireDefault(_CrudTable2);

var _Notification2 = __webpack_require__(/*! ./Notification/Notification */ 198);

var _Notification3 = _interopRequireDefault(_Notification2);

var _PostCard2 = __webpack_require__(/*! ./CardPaper/PostCard */ 201);

var _PostCard3 = _interopRequireDefault(_PostCard2);

var _ErrorWrap2 = __webpack_require__(/*! ./Error/ErrorWrap */ 214);

var _ErrorWrap3 = _interopRequireDefault(_ErrorWrap2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.App = _App3.default; // Main UI

exports.Dashboard = _Dashboard3.default;
exports.Header = _Header3.default;
exports.Sidebar = _Sidebar3.default;
exports.Footer = _Footer3.default;
exports.BreadCrumb = _BreadCrumb3.default;

// Route

exports.RouteTable = _RouteTable3.default;

// Transporter

exports.TransporterTable = _TransporterTable3.default;

// Driver

exports.DriverTable = _DriverTable3.default;

// Assistant

exports.AssistantTable = _AssistantTable3.default;

// Client

exports.ClientTable = _ClientTable3.default;

// Schedule

exports.TScheduleTable = _TScheduleTable3.default;
exports.WScheduleTable = _WScheduleTable3.default;

// Ticket

exports.TicketTable = _TicketTable3.default;

// Papper

exports.PapperBlock = _PapperBlock3.default;

// Dashboard and Widget

exports.CounterWidget = _CounterWidget3.default;
exports.CounterIconsWidget = _CounterIconsWidget3.default;
exports.AreaChartWidget = _AreaChartWidget3.default;
exports.CarouselWidget = _CarouselWidget3.default;
exports.AlbumWidget = _AlbumWidget3.default;
// Table Components

exports.CrudTable = _CrudTable3.default;

// Notification

exports.Notification = _Notification3.default;
// Card

exports.PostCard = _PostCard3.default;
// Error

exports.ErrorWrap = _ErrorWrap3.default;

/***/ }),
/* 4 */
/*!***********************************!*\
  !*** ./src/app/constants/show.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var show = function show(data) {
    // console.log(data);
};

module.exports = show;

/***/ }),
/* 5 */
/*!****************************************!*\
  !*** ./src/app/actions/actionTypes.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Global UI Action
var TOGGLE_SIDEBAR = exports.TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
var OPEN_SUBMENU = exports.OPEN_SUBMENU = 'OPEN_SUBMENU';
var CHANGE_THEME = exports.CHANGE_THEME = 'CHANGE_THEME';
var LOAD_PAGE = exports.LOAD_PAGE = 'LOAD_PAGE';

// Tree Table
var TOGGLE_TREE = exports.TOGGLE_TREE = 'TOGGLE_TREE';

// Redux Form Sample
var INIT = exports.INIT = 'INIT';
var CLEAR = exports.CLEAR = 'CLEAR';

// Crud Table
var FETCH_DATA = exports.FETCH_DATA = 'FETCH_DATA';
var ADD_EMPTY_ROW = exports.ADD_EMPTY_ROW = 'ADD_EMPTY_ROW';
var UPDATE_ROW = exports.UPDATE_ROW = 'UPDATE_ROW';
var REMOVE_ROW = exports.REMOVE_ROW = 'REMOVE_ROW';
var EDIT_ROW = exports.EDIT_ROW = 'EDIT_ROW';
var SAVE_ROW = exports.SAVE_ROW = 'SAVE_ROW';

// Ecommerce
var FETCH_PRODUCT_DATA = exports.FETCH_PRODUCT_DATA = 'FETCH_PRODUCT_DATA';
var SEARCH_PRODUCT = exports.SEARCH_PRODUCT = 'SEARCH_PRODUCT';
var SHOW_DETAIL_PRODUCT = exports.SHOW_DETAIL_PRODUCT = 'SHOW_DETAIL_PRODUCT';
var ADD_TO_CART = exports.ADD_TO_CART = 'ADD_TO_CART';
var DELETE_CART_ITEM = exports.DELETE_CART_ITEM = 'DELETE_CART_ITEM';
var CHECKOUT = exports.CHECKOUT = 'CHECKOUT';

// Contact
var FETCH_CONTACT_DATA = exports.FETCH_CONTACT_DATA = 'FETCH_CONTACT_DATA';
var SHOW_DETAIL_CONTACT = exports.SHOW_DETAIL_CONTACT = 'SHOW_DETAIL_CONTACT';
var HIDE_DETAIL = exports.HIDE_DETAIL = 'HIDE_DETAIL';
var ADD_CONTACT = exports.ADD_CONTACT = 'ADD_CONTACT';
var EDIT_CONTACT = exports.EDIT_CONTACT = 'EDIT_CONTACT';
var SUBMIT_CONTACT = exports.SUBMIT_CONTACT = 'SUBMIT_CONTACT';
var CLOSE_CONTACT_FORM = exports.CLOSE_CONTACT_FORM = 'CLOSE_CONTACT_FORM';
var DELETE_CONTACT = exports.DELETE_CONTACT = 'DELETE_CONTACT';
var TOGGLE_FAVORITE = exports.TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
var SEARCH_CONTACT = exports.SEARCH_CONTACT = 'SEARCH_CONTACT';

// Calendar
var FETCH_CALENDAR_DATA = exports.FETCH_CALENDAR_DATA = 'FETCH_CALENDAR_DATA';
var ADD_EVENT = exports.ADD_EVENT = 'ADD_EVENT';
var DISCARD_EVENT = exports.DISCARD_EVENT = 'DISCARD_EVENT';
var SUBMIT_EVENT = exports.SUBMIT_EVENT = 'SUBMIT_EVENT';
var DELETE_EVENT = exports.DELETE_EVENT = 'DELETE_EVENT';

// Notification Form
var CLOSE_NOTIF = exports.CLOSE_NOTIF = 'CLOSE_NOTIF';

// Route
var FETCH_ROUTES = exports.FETCH_ROUTES = 'FETCH_ROUTES';

/***/ }),
/* 6 */
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 7 */
/*!*************************************!*\
  !*** ./src/app/constants/styles.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var styles = exports.styles = {
  root: {
    flexGrow: 1
  }
};

/***/ }),
/* 8 */
/*!****************************!*\
  !*** external "immutable" ***!
  \****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),
/* 9 */
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 10 */
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),
/* 11 */
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 12 */
/*!*******************************************!*\
  !*** ./src/app/constants/notifMessage.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  saved: 'Data has been saved',
  updated: 'Data has been updated',
  removed: 'Item has been removed',
  posted: 'Your post has been submitted',
  commented: 'Your comment has been submitted',
  discard: 'Action canceled',
  addCart: 'Item added to cart',
  checkout: 'Thank you for shopping',
  sent: 'Email sent',
  labeled: 'You just changed email label'
};

/***/ }),
/* 13 */
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),
/* 14 */
/*!****************************************************!*\
  !*** external "@material-ui/core/TablePagination" ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TablePagination");

/***/ }),
/* 15 */
/*!******************************!*\
  !*** external "cross-fetch" ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("cross-fetch");

/***/ }),
/* 16 */
/*!***************************************!*\
  !*** ./src/app/constants/urls/api.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// const API = 'https://passenger-transport.herokuapp.com/api';
var API = '/api';

// route
var ROUTE_URL = exports.ROUTE_URL = API + '/route';

// transporter
var TRANPSPORTER_URL = exports.TRANPSPORTER_URL = API + '/transporter';

// driver
var DRIVER_URL = exports.DRIVER_URL = API + '/employee/driver';

// assistant
var ASSISTANT_URL = exports.ASSISTANT_URL = API + '/employee/assistant';

// client
var CLIENT_URL = exports.CLIENT_URL = API + '/client';

// schedule
var TRANSPORT_SCHEDULE_URL = exports.TRANSPORT_SCHEDULE_URL = API + '/transport-schedule';
var WORK_SCHEDULE_URL = exports.WORK_SCHEDULE_URL = API + '/work-schedule';

// ticket
var TICKET_URL = exports.TICKET_URL = API + '/ticket';

/***/ }),
/* 17 */
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 18 */
/*!************************************!*\
  !*** ./src/app/constants/brand.js ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  name: 'AVD Admin',
  desc: 'This admin page made by VKing34',
  prefix: 'VKING34',
  footerText: 'Dont ever insult clients',
  logoText: 'AVD transport',
  needLogin: false
};

/***/ }),
/* 19 */
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),
/* 20 */
/*!**********************************************!*\
  !*** external "@material-ui/core/TableCell" ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

/***/ }),
/* 21 */
/*!**********************************************!*\
  !*** ./src/app/styles/components/Table.scss ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {
	"stripped": "stripped__2fOpn",
	"hover": "hover__1FySl",
	"bordered": "bordered__I1sSQ",
	"small": "small__1e1Mc",
	"medium": "medium__39KeO",
	"big": "big__1PheA",
	"nodata": "nodata___RV9Q",
	"hideAction": "hideAction__2or4r",
	"tableCrud": "tableCrud__2kmsS",
	"hiddenField": "hiddenField__2nKRO",
	"editing": "editing__XO4xW",
	"crudInput": "crudInput__2BpzG",
	"toggleCell": "toggleCell__DxhlB",
	"coverReadonly": "coverReadonly__16T7D",
	"show": "show__3rVz1"
};

/***/ }),
/* 22 */
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 23 */
/*!****************************************************!*\
  !*** ./src/app/constants/template/pageTemplate.js ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _brand = __webpack_require__(/*! ../brand.js */ 18);

var _brand2 = _interopRequireDefault(_brand);

var _helmet = __webpack_require__(/*! ../helmet.js */ 71);

var _helmet2 = _interopRequireDefault(_helmet);

var _components = __webpack_require__(/*! ../../components */ 3);

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ 10);

var _Paper2 = _interopRequireDefault(_Paper);

var _reactHelmet = __webpack_require__(/*! react-helmet */ 22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import show from 'ba-utils/show';

var pageTemplate = function pageTemplate(Table, pageConst, classes) {
  var title = _brand2.default.name + ' - Table';
  var description = _brand2.default.desc;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        'title',
        null,
        title
      ),
      _react2.default.createElement('meta', { name: _helmet2.default.name, content: description }),
      _react2.default.createElement('meta', { property: _helmet2.default.og_title, content: title }),
      _react2.default.createElement('meta', { property: _helmet2.default.og_desc, content: description }),
      _react2.default.createElement('meta', { property: _helmet2.default.tw_title, content: title }),
      _react2.default.createElement('meta', { property: _helmet2.default.tw_desc, content: description })
    ),
    _react2.default.createElement(
      _components.PapperBlock,
      { title: pageConst.title, desc: pageConst.description },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Paper2.default,
          { className: classes.root },
          _react2.default.createElement(Table, null)
        )
      )
    )
  );
};

exports.default = pageTemplate;

/***/ }),
/* 24 */
/*!********************************************!*\
  !*** ./src/app/constants/reducer/table.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialItem = exports.initialImmutableState = undefined;

var _immutable = __webpack_require__(/*! immutable */ 8);

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var initialState = {
  content: (0, _immutable.List)([]),
  paging: {
    total_pages: 1,
    total_elements: 4,
    last: true,
    first: false,
    number_of_elements: 4,
    size: 4,
    number: 0
  },
  notifMsg: ''
};

var initialImmutableState = exports.initialImmutableState = (0, _immutable.fromJS)(initialState);

var initialItem = exports.initialItem = function initialItem(keyTemplate, anchor) {
  var _keyTemplate$keys = keyTemplate.keys(),
      _keyTemplate$keys2 = _toArray(_keyTemplate$keys),
      rawKey = _keyTemplate$keys2.slice(0);

  var staticKey = {
    id: (+new Date() + Math.floor(Math.random() * 999999)).toString(36)
  };
  for (var i = 0; i < rawKey.length; i += 1) {
    if (rawKey[i] !== 'id' && rawKey[i] !== 'edited') {
      staticKey[rawKey[i]] = anchor[i].initialValue;
    }
  }
  // Push another static key
  staticKey.edited = true;
  return (0, _immutable.Map)(staticKey);
};

/***/ }),
/* 25 */
/*!*********************************************!*\
  !*** ./src/app/constants/request/header.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Method = exports.Method = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE'
};

/***/ }),
/* 26 */
/*!*********************************!*\
  !*** ./src/app/config/index.js ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _default = __webpack_require__(/*! ./default */ 234);

var _default2 = _interopRequireDefault(_default);

var _environment = __webpack_require__(/*! ./environment */ 236);

var _environment2 = _interopRequireDefault(_environment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _default2.default, _environment2.default);

/***/ }),
/* 27 */
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),
/* 28 */
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),
/* 29 */
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),
/* 30 */
/*!*************************************************!*\
  !*** ./src/app/components/Widget/widget-jss.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pink = __webpack_require__(/*! @material-ui/core/colors/pink */ 64);

var _pink2 = _interopRequireDefault(_pink);

var _green = __webpack_require__(/*! @material-ui/core/colors/green */ 65);

var _green2 = _interopRequireDefault(_green);

var _blue = __webpack_require__(/*! @material-ui/core/colors/blue */ 142);

var _blue2 = _interopRequireDefault(_blue);

var _deepOrange = __webpack_require__(/*! @material-ui/core/colors/deepOrange */ 143);

var _deepOrange2 = _interopRequireDefault(_deepOrange);

var _red = __webpack_require__(/*! @material-ui/core/colors/red */ 144);

var _red2 = _interopRequireDefault(_red);

var _orange = __webpack_require__(/*! @material-ui/core/colors/orange */ 66);

var _orange2 = _interopRequireDefault(_orange);

var _purple = __webpack_require__(/*! @material-ui/core/colors/purple */ 145);

var _purple2 = _interopRequireDefault(_purple);

var _deepPurple = __webpack_require__(/*! @material-ui/core/colors/deepPurple */ 146);

var _deepPurple2 = _interopRequireDefault(_deepPurple);

var _lime = __webpack_require__(/*! @material-ui/core/colors/lime */ 147);

var _lime2 = _interopRequireDefault(_lime);

var _indigo = __webpack_require__(/*! @material-ui/core/colors/indigo */ 148);

var _indigo2 = _interopRequireDefault(_indigo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  var _rootCounter, _bigResume;

  return {
    rootCounter: (_rootCounter = {
      flexGrow: 1,
      padding: theme.spacing.unit * 1.5
    }, _defineProperty(_rootCounter, theme.breakpoints.up('lg'), {
      padding: theme.spacing.unit * 1.5 + 'px ' + theme.spacing.unit + 'px'
    }), _defineProperty(_rootCounter, theme.breakpoints.down('xs'), {
      margin: '0 ' + theme.spacing.unit * -1.5 + 'px'
    }), _rootCounter),
    rootCounterFull: {
      flexGrow: 1
    },
    divider: {
      margin: theme.spacing.unit * 3 + 'px 0'
    },
    dividerBig: {
      margin: theme.spacing.unit * 2 + 'px 0'
    },
    centerItem: {},
    secondaryWrap: {
      background: theme.palette.grey[100],
      padding: 20,
      borderRadius: 4,
      justifyContent: 'space-around',
      '& > $centerItem': {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      '& li': {
        marginBottom: 30
      },
      '& $chip': {
        top: 70,
        position: 'absolute',
        fontSize: 11,
        fontWeight: 400
      }
    },
    bigResume: (_bigResume = {
      marginBottom: 20,
      justifyContent: 'space-between',
      display: 'flex'
    }, _defineProperty(_bigResume, theme.breakpoints.down('sm'), {
      height: 160,
      display: 'block'
    }), _defineProperty(_bigResume, '& li', _defineProperty({
      paddingRight: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start'
    }, theme.breakpoints.down('sm'), {
      width: '50%',
      float: 'left'
    })), _bigResume),
    avatar: {
      width: 50,
      height: 50,
      marginRight: 10,
      '& svg': {
        fontSize: 32
      }
    },
    pinkAvatar: {
      margin: 10,
      color: '#fff',
      backgroundColor: _pink2.default[500]
    },
    greenAvatar: {
      margin: 10,
      color: '#fff',
      backgroundColor: _green2.default[500]
    },
    orangeAvatar: {
      margin: 10,
      color: '#fff',
      backgroundColor: _deepOrange2.default[500]
    },
    purpleAvatar: {
      margin: 10,
      color: '#fff',
      backgroundColor: _deepPurple2.default[500]
    },
    pinkProgress: {
      color: _pink2.default[500],
      '& div': {
        backgroundColor: _pink2.default[500]
      }
    },
    greenProgress: {
      color: _green2.default[500],
      '& div': {
        backgroundColor: _green2.default[500]
      }
    },
    orangeProgress: {
      color: _deepOrange2.default[500],
      '& div': {
        backgroundColor: _deepOrange2.default[500]
      }
    },
    purpleProgress: {
      color: _deepPurple2.default[500],
      '& div': {
        backgroundColor: _deepPurple2.default[500]
      }
    },
    blueProgress: {
      color: _blue2.default[500],
      '& div': {
        backgroundColor: _blue2.default[500]
      }
    },
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto'
    },
    chip: {
      margin: '8px 0 8px auto',
      color: '#FFF'
    },
    table: {
      minWidth: 500,
      '& td': {
        padding: 10
      }
    },
    user: {
      display: 'flex'
    },
    textCenter: {
      textAlign: 'center'
    },
    red: {},
    orange: {},
    indigo: {},
    purple: {},
    lime: {},
    taskIcon: {
      display: 'block',
      textAlign: 'center',
      margin: '0 10px',
      '&$red': {
        color: _red2.default[300]
      },
      '&$orange': {
        color: _orange2.default[300]
      },
      '&$purple': {
        color: _purple2.default[300]
      },
      '&$lime': {
        color: _lime2.default[300]
      },
      '&$indigo': {
        color: _indigo2.default[300]
      }
    },
    done: {},
    listItem: {
      padding: 5,
      background: theme.palette.common.white,
      boxShadow: theme.shadows[3],
      '&:hover': {
        backgroundColor: theme.palette.grey[200]
      },
      '&$done': {
        textDecoration: 'line-through'
      }
    },
    title: {},
    subtitle: {},
    styledPaper: {
      backgroundColor: theme.palette.secondary.main,
      padding: 20,
      '& $title, & $subtitle': {
        color: theme.palette.common.white
      }
    },
    progressWidget: {
      marginTop: 20,
      background: theme.palette.secondary.dark,
      '& div': {
        background: theme.palette.primary.light
      }
    },
    chipProgress: {
      marginTop: 20,
      background: theme.palette.primary.light,
      '& div': {
        background: _green2.default[500],
        color: theme.palette.common.white
      }
    },
    taskStatus: {
      display: 'flex',
      alignItems: 'center',
      '& a': {
        textDecoration: 'none',
        color: theme.palette.primary.main
      }
    },
    counterIcon: {
      color: theme.palette.common.white,
      opacity: 0.7,
      fontSize: 84
    },
    progressCircle: {
      margin: 20
    },
    itemCarousel: {
      textAlign: 'center',
      '& img': {
        margin: '10px auto'
      }
    },
    albumRoot: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper
    },
    gridList: _defineProperty({
      height: 'auto'
    }, theme.breakpoints.up('sm'), {
      width: 500
    }),
    icon: {
      color: 'rgba(255, 255, 255, 0.54)'
    },
    img: {
      maxWidth: 'none'
    },
    mapWrap: {
      position: 'relative'
    },
    address: _defineProperty({}, theme.breakpoints.up('md'), {
      top: '50%',
      right: 60,
      position: 'absolute',
      transform: 'translate(0, -50%)'
    }),
    carouselItem: {
      margin: '0 5px',
      boxShadow: theme.shadows[3],
      borderRadius: 4,
      overflow: 'hidden',
      height: 250,
      padding: '60px 20px',
      position: 'relative'
    },
    iconBg: {
      color: theme.palette.common.white,
      opacity: 0.25,
      position: 'absolute',
      bottom: 10,
      right: 10,
      fontSize: 96
    },
    carouselTitle: {
      color: theme.palette.common.white,
      display: 'flex',
      flexDirection: 'column',
      fontWeight: 500,
      fontSize: 20
    },
    carouselDesc: {
      color: theme.palette.common.white
    },
    chartWrap: {
      overflow: 'auto'
    },
    chartFluid: {
      width: '100%',
      minWidth: 400,
      height: 300
    }
  };
};

exports.default = styles;

/***/ }),
/* 31 */
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 32 */
/*!*******************************************!*\
  !*** ./src/app/constants/themePalette.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  magentaTheme: {
    palette: {
      primary: {
        light: '#FCE4EC',
        main: '#EC407A',
        dark: '#D81B60',
        contrastText: '#fff'
      },
      secondary: {
        light: '#E0F7FA',
        main: '#00BCD4',
        dark: '#0097A7',
        contrastText: '#fff'
      }
    }
  },
  blueTheme: {
    palette: {
      primary: {
        light: '#E8EAF6',
        main: '#3F51B5',
        dark: '#283593',
        contrastText: '#fff'
      },
      secondary: {
        light: '#B3E5FC',
        main: '#03A9F4',
        dark: '#0277BD',
        contrastText: '#fff'
      }
    }
  },
  skyBlueTheme: {
    palette: {
      primary: {
        light: '#E3F2FD',
        main: '#2196F3',
        dark: '#1565C0',
        contrastText: '#fff'
      },
      secondary: {
        light: '#A7FFEB',
        main: '#00BFA5',
        dark: '#00796B',
        contrastText: '#fff'
      }
    }
  }
};

/***/ }),
/* 33 */
/*!**************************************!*\
  !*** ./src/app/actions/UiActions.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.playTransitionAction = exports.changeThemeAction = exports.openAction = exports.toggleAction = undefined;

var _actionTypes = __webpack_require__(/*! ./actionTypes */ 5);

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var toggleAction = exports.toggleAction = { type: types.TOGGLE_SIDEBAR };
var openAction = exports.openAction = function openAction(initialLocation) {
  return {
    type: types.OPEN_SUBMENU,
    initialLocation: initialLocation
  };
};
var changeThemeAction = exports.changeThemeAction = function changeThemeAction(theme) {
  return {
    type: types.CHANGE_THEME,
    theme: theme
  };
};
var playTransitionAction = exports.playTransitionAction = function playTransitionAction(isLoaded) {
  return {
    type: types.LOAD_PAGE,
    isLoaded: isLoaded
  };
};

/***/ }),
/* 34 */
/*!*************************************************!*\
  !*** ./src/app/components/App/appStyles-jss.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _material_bg = __webpack_require__(/*! ../../../../static/images/material_bg.svg */ 89);

var _material_bg2 = _interopRequireDefault(_material_bg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var appFrame = {
  position: 'relative',
  display: 'flex',
  width: '100%',
  zIndex: 1
};

var styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      height: '100%',
      marginTop: 0,
      zIndex: 1,
      overflow: 'auto'
    },
    appFrameInner: _extends({}, appFrame, {
      height: '100%'
    }),
    appFrameOuter: _extends({}, appFrame, {
      minHeight: '100%'
    }),
    content: _defineProperty({
      backgroundColor: theme.palette.background.default,
      width: '100%',
      padding: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit,
      height: '100%',
      overflow: 'auto'
    }, theme.breakpoints.down('lg'), {
      paddingLeft: theme.spacing.unit * 1.5,
      paddingRight: theme.spacing.unit * 1.5
    }),
    outerContent: _defineProperty({
      background: 'url(' + _material_bg2.default + ') no-repeat ' + theme.palette.primary.main + ' left bottom',
      width: '100%',
      backgroundSize: 'cover',
      flexDirection: 'column',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }, theme.breakpoints.down('md'), {
      padding: '20px 0'
    }),
    bgbar: {
      backgroundColor: theme.palette.primary.main,
      width: '100%',
      position: 'absolute',
      height: 184,
      top: 0,
      left: 0
    },
    mainWrap: {
      position: 'relative',
      marginTop: theme.spacing.unit * 6,
      height: '100%',
      '& > div': {
        paddingBottom: theme.spacing.unit * 4,
        willChange: 'inherit !important' // hack for floating form issue whne expaded
      }
    },
    preloader: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      background: 'transparent',
      height: 3
    },
    materialBg: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '100%',
      opacity: 0.5
    },
    contentPadding: {
      paddingLeft: 80
    },
    hideApp: {
      display: 'none'
    },
    circularProgress: {
      position: 'absolute',
      top: 'calc(50% - 100px)',
      left: 'calc(50% - 100px)'
    },
    brand: {
      height: 54,
      display: 'flex',
      padding: '10px 10px 5px',
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      '& img': {
        width: 20
      },
      '& h3': {
        margin: 0,
        fontSize: 16,
        fontWeight: 500,
        paddingLeft: 10,
        color: theme.palette.common.white
      }
    }
  };
};

exports.default = styles;

/***/ }),
/* 35 */
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 36 */
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),
/* 37 */
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),
/* 38 */
/*!**************************************!*\
  !*** ./src/app/constants/avatars.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var avatars = ['/images/avatars/pp_girl.svg', '/images/avatars/pp_girl.svg', '/images/avatars/pp_girl2.svg', '/images/avatars/pp_girl3.svg', '/images/avatars/pp_girl4.svg', '/images/avatars/pp_girl5.svg', '/images/avatars/pp_boy.svg', '/images/avatars/pp_boy2.svg', '/images/avatars/pp_boy3.svg', '/images/avatars/pp_boy4.svg', '/images/avatars/pp_boy5.svg'];

exports.default = avatars;

/***/ }),
/* 39 */
/*!*****************************************!*\
  !*** external "@material-ui/core/Icon" ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Icon");

/***/ }),
/* 40 */
/*!*******************************************************!*\
  !*** ./src/app/components/PapperBlock/PapperBlock.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ 11);

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ 10);

var _Paper2 = _interopRequireDefault(_Paper);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ 19);

var _Typography2 = _interopRequireDefault(_Typography);

var _papperStyleJss = __webpack_require__(/*! ./papperStyle-jss */ 134);

var _papperStyleJss2 = _interopRequireDefault(_papperStyleJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PaperSheet(props) {
  var classes = props.classes,
      title = props.title,
      desc = props.desc,
      children = props.children,
      whiteBg = props.whiteBg,
      noMargin = props.noMargin,
      colorMode = props.colorMode,
      overflowX = props.overflowX;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Paper2.default,
      { className: (0, _classnames2.default)(classes.root, noMargin && classes.noMargin, colorMode && classes.colorMode), elevation: 4 },
      _react2.default.createElement(
        _Typography2.default,
        { variant: 'title', component: 'h2', className: classes.title },
        title
      ),
      _react2.default.createElement(
        _Typography2.default,
        { component: 'p', className: classes.description },
        desc
      ),
      _react2.default.createElement(
        'section',
        { className: (0, _classnames2.default)(classes.content, whiteBg && classes.whiteBg, overflowX && classes.overflowX) },
        children
      )
    )
  );
}

PaperSheet.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  title: _propTypes2.default.string.isRequired,
  desc: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node.isRequired,
  whiteBg: _propTypes2.default.bool,
  colorMode: _propTypes2.default.bool,
  noMargin: _propTypes2.default.bool,
  overflowX: _propTypes2.default.bool
};

PaperSheet.defaultProps = {
  whiteBg: false,
  noMargin: false,
  colorMode: false,
  overflowX: false
};

exports.default = (0, _styles.withStyles)(_papperStyleJss2.default)(PaperSheet);

/***/ }),
/* 41 */
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 42 */
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 43 */
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),
/* 44 */
/*!*******************************************!*\
  !*** external "@material-ui/core/Hidden" ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),
/* 45 */
/*!******************************************!*\
  !*** external "@material-ui/icons/Info" ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Info");

/***/ }),
/* 46 */
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),
/* 47 */
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemIcon" ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),
/* 48 */
/*!********************************************!*\
  !*** ./src/app/constants/dummyContents.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _avatars = __webpack_require__(/*! ./avatars */ 38);

var _avatars2 = _interopRequireDefault(_avatars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  user: {
    name: 'Vương',
    title: 'Administrator',
    avatar: _avatars2.default[6]
  },
  text: {
    title: 'Notification',
    subtitle: 'System Notification',
    sentences: 'Done Tasks',
    paragraph: 'Done Tasks',
    date: 'Nov 28, 2018'
  }
};

/***/ }),
/* 49 */
/*!*************************************************!*\
  !*** ./src/app/styles/components/Messages.scss ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {
	"bgInfo": "bgInfo__GEi4l",
	"bgSuccess": "bgSuccess__12Zyz",
	"bgWarning": "bgWarning__3DB0c",
	"bgError": "bgError__fOfha",
	"bgDefault": "bgDefault__kwhtD",
	"messageInfo": "messageInfo__37ma9",
	"icon": "icon__1M3tn",
	"messageSuccess": "messageSuccess__3mn4j",
	"messageWarning": "messageWarning__3UpID",
	"messageError": "messageError__3rc4M",
	"messageDefault": "messageDefault__3IO3L"
};

/***/ }),
/* 50 */
/*!*************************************************!*\
  !*** ./src/app/components/Header/header-jss.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colorManipulator = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ 51);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var drawerWidth = 240;

var styles = function styles(theme) {
  var _appBarShift;

  return {
    appBar: {
      position: 'absolute',
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin', 'background'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      boxShadow: 'none !important',
      '& ::-webkit-input-placeholder': { /* Chrome/Opera/Safari */
        color: 'rgba(255,255,255,.3)'
      },
      '& ::-moz-placeholder': { /* Firefox 19+ */
        color: 'rgba(255,255,255,.3)'
      },
      '& :-ms-input-placeholder': { /* IE 10+ */
        color: 'rgba(255,255,255,.3)'
      },
      '& :-moz-placeholder': { /* Firefox 18- */
        color: 'rgba(255,255,255,.3)'
      },
      '& $menuButton': {
        marginLeft: theme.spacing.unit * 2
      }
    },
    flex: {
      flex: 1,
      textAlign: 'right'
    },
    appBarShift: (_appBarShift = {
      transition: theme.transitions.create(['width', 'margin', 'background'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    }, _defineProperty(_appBarShift, theme.breakpoints.up('lg'), {
      marginLeft: drawerWidth,
      width: 'calc(100% - ' + drawerWidth + 'px)'
    }), _defineProperty(_appBarShift, '& $menuButton', {
      marginLeft: 0
    }), _appBarShift),
    menuButton: _defineProperty({}, theme.breakpoints.up('lg'), {
      marginLeft: 0
    }),
    hide: {
      display: 'none'
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    wrapper: {
      fontFamily: theme.typography.fontFamily,
      position: 'relative',
      marginRight: theme.spacing.unit * 2,
      marginLeft: theme.spacing.unit,
      borderRadius: 2,
      background: (0, _colorManipulator.fade)(theme.palette.common.white, 0.15),
      display: 'inline-block',
      '&:hover': {
        background: (0, _colorManipulator.fade)(theme.palette.common.white, 0.25)
      },
      '& $input': _defineProperty({
        transition: theme.transitions.create('width'),
        width: 180,
        '&:focus': {
          width: 350
        }
      }, theme.breakpoints.down('xs'), {
        display: 'none'
      })
    },
    search: _defineProperty({
      width: theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }, theme.breakpoints.down('xs'), {
      display: 'none'
    }),
    input: {
      font: 'inherit',
      padding: theme.spacing.unit + 'px ' + theme.spacing.unit + 'px ' + theme.spacing.unit + 'px ' + theme.spacing.unit * 9 + 'px',
      border: 0,
      display: 'block',
      verticalAlign: 'middle',
      whiteSpace: 'normal',
      background: 'none',
      margin: 0, // Reset for Safari
      color: 'inherit',
      width: '100%',
      '&:focus': {
        outline: 0
      }
    },
    darker: {
      background: theme.palette.primary.dark,
      '&:after': {
        content: '""',
        left: -240,
        width: 'calc(100% + 240px)',
        position: 'absolute',
        bottom: -2,
        height: 1,
        background: '#000',
        filter: 'blur(3px)'
      }
    },
    separatorV: {
      borderLeft: '1px solid ' + theme.palette.grey[300],
      height: 20,
      margin: '0 10px',
      opacity: 0.4
    },
    notifMenu: {
      '& li': {
        height: 'auto',
        '& h3': {
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis'
        }
      }
    },
    badgeMenu: {
      '& span': {
        top: -12,
        right: -30
      }
    },
    textNotif: {
      '& span': {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
      }
    }
  };
};

exports.default = styles;

/***/ }),
/* 51 */
/*!************************************************************!*\
  !*** external "@material-ui/core/styles/colorManipulator" ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/colorManipulator");

/***/ }),
/* 52 */
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),
/* 53 */
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),
/* 54 */
/*!***********************************!*\
  !*** ./src/app/constants/menu.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [{
  key: 'dashboard',
  name: 'Dashboard',
  icon: 'dashboard',
  link: '/admin'
}, {
  key: 'route',
  name: 'Route',
  icon: 'directions',
  link: '/admin/route'
}, {
  key: 'transporter',
  name: 'Transporter',
  icon: 'directions_bus',
  link: '/admin/transporter'
}, {
  key: 'employee',
  name: 'Employee',
  icon: 'perm_contact_cal',
  child: [{
    key: 'driver',
    name: 'Driver',
    link: '/admin/employee/driver',
    icon: 'directions_car'
  }, {
    key: 'assistant',
    name: 'Assistant',
    link: '/admin/employee/assistant',
    icon: 'person_add'
  }]
}, {
  key: 'client',
  name: 'Client',
  icon: 'people',
  link: '/admin/client'
}, {
  key: 'ticket',
  name: 'Ticket',
  icon: 'assignment',
  link: '/admin/ticket'
}, {
  key: 'tschedule',
  name: 'Transport Schedule',
  icon: 'date_range',
  link: '/admin/transport-schedule'
}, {
  key: 'wschedule',
  name: 'Work Schedule',
  icon: 'event',
  link: '/admin/work-schedule'
}, {
  key: 'themes',
  name: 'Themes Setting',
  icon: 'palette',
  link: '/admin/settings/themes'
}];

/***/ }),
/* 55 */
/*!***************************************************!*\
  !*** ./src/app/components/Sidebar/sidebar-jss.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var drawerWidth = 240;
var styles = function styles(theme) {
  return {
    user: {
      justifyContent: 'center'
    },
    drawerPaper: {
      position: 'relative',
      height: '100%',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.default,
      border: 'none',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    swipeDrawerPaper: {
      width: drawerWidth
    },
    opened: {
      background: theme.palette.grey[200],
      '& $primary, & $icon': {
        color: theme.palette.secondary.dark
      }
    },
    drawerPaperClose: {
      width: 66,
      position: 'absolute',
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      '& $user': {
        justifyContent: 'flex-start'
      },
      '& $bigAvatar': {
        width: 40,
        height: 40
      },
      '& li ul': {
        display: 'none'
      },
      '&:hover': {
        width: 240,
        boxShadow: theme.shadows[6],
        '& li ul': {
          display: 'block'
        }
      },
      '& $menuContainer': {
        paddingLeft: theme.spacing.unit * 1.5,
        paddingRight: theme.spacing.unit * 1.5
      }
    },
    drawerInner: {
      // Make the items inside not wrap when transitioning:
      width: drawerWidth,
      height: '100%'
    },
    drawerHeader: _extends({
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      padding: '0'
    }, theme.mixins.toolbar, {
      '& h3': {
        color: theme.palette.primary.contrastText
      }
    }),
    avatar: {
      margin: 10
    },
    bigAvatar: {
      width: 80,
      height: 80
    },
    brandBar: {
      transition: theme.transitions.create(['width', 'margin', 'background'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
      '&:after': {
        transition: theme.transitions.create(['box-shadow'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        })
      }
    },
    darker: {
      background: theme.palette.primary.dark
    },
    nested: {
      paddingLeft: theme.spacing.unit * 2,
      paddingTop: theme.spacing.unit * 1.5,
      paddingBottom: theme.spacing.unit * 1.5
    },
    child: {
      '& a': {
        paddingLeft: theme.spacing.unit * 6
      }
    },
    dense: {
      marginLeft: -15
    },
    active: {
      backgroundColor: theme.palette.primary.light,
      '& $primary, & $icon': {
        color: theme.palette.secondary.dark
      },
      '&:hover': {
        backgroundColor: theme.palette.primary.light
      }
    },
    nolist: {
      listStyle: 'none'
    },
    primary: {},
    icon: {
      marginRight: 0,
      color: theme.palette.secondary.dark
    },
    head: {
      paddingLeft: 16
    },
    brand: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px 10px 5px',
      height: 64,
      position: 'relative',
      '& img': {
        width: 20
      },
      '& h3': {
        fontSize: 16,
        margin: 0,
        paddingLeft: 10,
        fontWeight: 500
      }
    },
    profile: {
      height: 120,
      display: 'flex',
      fontSize: 14,
      padding: 10,
      alignItems: 'center',
      '& h4': {
        fontSize: 18,
        marginBottom: 0,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: 110
      },
      '& span': {
        fontSize: 12,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        width: 110,
        display: 'block',
        overflow: 'hidden'
      }
    },
    menuContainer: {
      padding: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit,
      overflow: 'auto',
      height: 'calc(100% - 185px)',
      position: 'relative',
      display: 'block'
    },
    divider: {
      marginTop: theme.spacing.unit
    }
  };
};

exports.default = styles;

/***/ }),
/* 56 */
/*!************************************!*\
  !*** ./src/app/constants/route.js ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    title: 'ROUTE',
    description: 'This table is used to manage routes. (CRUD)',
    table: {
        title: 'Routes',
        columns: [{
            name: 'id',
            label: 'ID',
            type: 'text',
            initialValue: '',
            hidden: false
        }, {
            name: 'departure',
            label: 'Departure',
            type: 'text',
            initialValue: '',
            width: 'auto',
            hidden: false
        }, {
            name: 'destination',
            label: 'Destination',
            type: 'text',
            initialValue: '',
            width: 'auto',
            hidden: false
        }, {
            name: 'stations',
            label: 'Stations',
            type: 'number',
            initialValue: 2,
            width: 'auto',
            hidden: false
        }, {
            name: 'active',
            label: 'Active?',
            type: 'toggle',
            initialValue: true,
            width: '100',
            hidden: false
        }, {
            name: 'action',
            label: 'Action',
            type: 'static',
            initialValue: '',
            hidden: false
        }]
    }
};

/***/ }),
/* 57 */
/*!******************************************!*\
  !*** ./src/app/constants/transporter.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    title: 'TRANSPORTER',
    description: 'This table is used to manage transporter. (CRUD)',
    table: {
        title: 'Transporters',
        columns: [{
            name: 'id',
            label: 'ID',
            type: 'text',
            initialValue: '',
            width: 'auto',
            hidden: false
        }, {
            name: 'license_plate',
            label: 'License Plate',
            type: 'text',
            initialValue: '',
            width: 'auto',
            hidden: false
        }, {
            name: 'seaters',
            label: 'Seaters',
            type: 'number',
            initialValue: 0,
            width: '100',
            hidden: false
        }, {
            name: 'model',
            label: 'Model',
            type: 'text',
            initialValue: '',
            width: 'auto',
            hidden: false
        }, {
            name: 'branch',
            label: 'Branch',
            type: 'text',
            initialValue: '',
            width: 'auto',
            hidden: false
        }, {
            name: 'status',
            label: 'Status',
            type: 'number',
            initialValue: 1,
            width: '100',
            hidden: false
        }, {
            name: 'action',
            label: 'Action',
            type: 'static',
            initialValue: '',
            hidden: false
        }]
    }
};

/***/ }),
/* 58 */
/*!**********************************************!*\
  !*** ./src/app/constants/employee/driver.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    title: 'DRIVER',
    description: 'This table is used to manage drivers. (CRUD)',
    table: {
        title: 'Drivers',
        columns: [{
            name: 'id',
            label: 'ID',
            type: 'text',
            initialValue: '',
            width: 'auto',
            hidden: true
        }, {
            name: 'citizen_id',
            label: 'Citizen ID',
            type: 'text',
            initialValue: '',
            width: 'auto',
            hidden: false
        }, {
            name: 'full_name',
            label: 'Full name',
            type: 'text',
            initialValue: '',
            width: 'auto',
            hidden: false
        }, {
            name: 'driving_license_class',
            label: 'Driving License Class',
            type: 'text',
            initialValue: '',
            width: 'auto',
            hidden: false
        }, {
            name: 'address',
            label: 'Address',
            type: 'text',
            initialValue: '',
            width: 'auto',
            hidden: false
        }, {
            name: 'active',
            label: 'Active?',
            type: 'toggle',
            initialValue: true,
            width: '100',
            hidden: false
        }, {
            name: 'action',
            label: 'Action',
            type: 'static',
            initialValue: '',
            hidden: false
        }]
    }
};

/***/ }),
/* 59 */
/*!*************************************************!*\
  !*** ./src/app/constants/employee/assistant.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    title: 'ASSISTANT',
    description: 'This table is used to manage assistants. (CRUD)',
    table: {
        title: 'Assistants',
        columns: [{
            name: 'id',
            label: 'ID',
            type: 'text',
            initialValue: '',
            width: 'auto',
            hidden: true
        }, {
            name: 'citizen_id',
            label: 'Citizen ID',
            type: 'text',
            initialValue: '',
            width: 'auto',
            hidden: false
        }, {
            name: 'full_name',
            label: 'Full name',
            type: 'text',
            initialValue: '',
            width: 'auto',
            hidden: false
        }, {
            name: 'address',
            label: 'Address',
            type: 'text',
            initialValue: '',
            width: 'auto',
            hidden: false
        }, {
            name: 'active',
            label: 'Active?',
            type: 'toggle',
            initialValue: true,
            width: '100',
            hidden: false
        }, {
            name: 'action',
            label: 'Action',
            type: 'static',
            initialValue: '',
            hidden: false
        }]
    }
};

/***/ }),
/* 60 */
/*!********************************************!*\
  !*** ./src/app/constants/client/client.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    title: 'CLIENT',
    description: 'This table is used to manage clients. (CRUD)',
    table: {
        title: 'Clients',
        columns: [{
            name: 'id',
            label: 'ID',
            type: 'text',
            initialValue: '',
            width: 'auto',
            hidden: false
        }, {
            name: 'full_name',
            label: 'Full name',
            type: 'text',
            initialValue: '',
            width: 'auto',
            hidden: false
        }, {
            name: 'email',
            label: 'Email',
            type: 'text',
            initialValue: '',
            width: 'auto',
            hidden: false
        }, {
            name: 'active',
            label: 'Active?',
            type: 'toggle',
            initialValue: true,
            width: '100',
            hidden: false
        }, {
            name: 'action',
            label: 'Action',
            type: 'static',
            initialValue: '',
            hidden: false
        }]
    }
};

/***/ }),
/* 61 */
/*!*************************************************!*\
  !*** ./src/app/constants/schedule/transport.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    title: 'TRANSPORT SCHEDULE',
    description: 'This table is used to manage transporter schedule. (CRUD)',
    table: {
        title: 'Transport Schedules',
        columns: [{
            name: 'id',
            label: 'ID',
            type: 'text',
            initialValue: '',
            width: 'auto',
            hidden: false
        }, {
            name: 'starting_time',
            label: 'Starting Time',
            type: 'text',
            initialValue: '',
            width: 'auto',
            hidden: false
        }, {
            name: 'ending_time',
            label: 'Ending Time',
            type: 'text',
            initialValue: '',
            width: 'auto',
            hidden: false
        }, {
            name: 'price',
            label: 'Price',
            type: 'number',
            initialValue: 100000,
            width: 'auto',
            hidden: false
        }, {
            name: 'transporter_refs',
            label: 'Transporter Quantity',
            type: 'number',
            initialValue: 0,
            width: 'auto',
            hidden: false
        }, {
            name: 'action',
            label: 'Action',
            type: 'static',
            initialValue: '',
            hidden: false
        }]
    }
};

/***/ }),
/* 62 */
/*!********************************************!*\
  !*** ./src/app/constants/schedule/work.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    title: 'WORK SCHEDULE',
    description: 'This table is used to manage work schedule. (CRUD)',
    table: {
        title: 'WORK Schedules',
        columns: [{
            name: 'id',
            label: 'ID',
            type: 'text',
            initialValue: '',
            width: 'auto',
            hidden: false
        }, {
            name: 'starting_time',
            label: 'Starting Time',
            type: 'text',
            initialValue: '',
            width: 'auto',
            hidden: false
        }, {
            name: 'ending_time',
            label: 'Ending Time',
            type: 'text',
            initialValue: '',
            width: 'auto',
            hidden: false
        }, {
            name: 'transporter_ref',
            label: 'Transporter ID',
            type: 'text',
            initialValue: '',
            width: 'auto',
            hidden: false
        }, {
            name: 'action',
            label: 'Action',
            type: 'static',
            initialValue: '',
            hidden: false
        }]
    }
};

/***/ }),
/* 63 */
/*!********************************************!*\
  !*** ./src/app/constants/ticket/ticket.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    title: 'TICKET',
    description: 'This table is used to manage tickets. (CRUD)',
    table: {
        title: 'Tickets',
        columns: [{
            name: 'id',
            label: 'ID',
            type: 'text',
            initialValue: '',
            width: 'auto',
            hidden: true
        }, {
            name: 'transporter',
            label: 'Transporter ID',
            type: 'text',
            initialValue: '',
            width: 'auto',
            hidden: false
        }, {
            name: 'date_created',
            label: 'Created Date',
            type: 'text',
            initialValue: '',
            width: 'auto',
            hidden: false
        }, {
            name: 'phone_number',
            label: 'Phone Number',
            type: 'text',
            initialValue: '',
            width: 'auto',
            hidden: false
        }, {
            name: 'reservation_date',
            label: 'Reservation Date',
            type: 'text',
            initialValue: '',
            width: 'auto',
            hidden: false
        }, {
            name: 'ticket_quantity',
            label: 'Quantity',
            type: 'number',
            initialValue: 1,
            width: '80',
            hidden: false
        }, {
            name: 'price',
            label: 'Price',
            type: 'number',
            initialValue: 100000,
            width: 'auto',
            hidden: false
        }, {
            name: 'route',
            label: 'Route',
            type: 'text',
            initialValue: '',
            width: 'auto',
            hidden: true
        }, {
            name: 'schedule',
            label: 'Schedule',
            type: 'text',
            initialValue: '',
            width: 'auto',
            hidden: true
        }, {
            name: 'age',
            label: 'Age',
            type: 'number',
            initialValue: 0,
            width: 'auto',
            hidden: true
        }, {
            name: 'gender',
            label: 'Gender',
            type: 'number',
            initialValue: 0,
            width: 'auto',
            hidden: true
        }, {
            name: 'action',
            label: 'Action',
            type: 'static',
            initialValue: '',
            hidden: false
        }]
    }
};

/***/ }),
/* 64 */
/*!************************************************!*\
  !*** external "@material-ui/core/colors/pink" ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/pink");

/***/ }),
/* 65 */
/*!*************************************************!*\
  !*** external "@material-ui/core/colors/green" ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/green");

/***/ }),
/* 66 */
/*!**************************************************!*\
  !*** external "@material-ui/core/colors/orange" ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/orange");

/***/ }),
/* 67 */
/*!*************************************!*\
  !*** ./src/app/constants/images.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var images = [
// 1
'http://via.placeholder.com/1050x700/2196F3/FFFFFF/', 'http://via.placeholder.com/1050x700/3F51B5/FFFFFF/', 'http://via.placeholder.com/1050x700/00BCD4/FFFFFF/', 'http://via.placeholder.com/1050x700/009688/FFFFFF/', 'http://via.placeholder.com/1050x700/01579B/FFFFFF/', 'http://via.placeholder.com/1050x700/0097A7/FFFFFF/', 'http://via.placeholder.com/1050x700/43A047/FFFFFF/', 'http://via.placeholder.com/1050x700/558B2F/FFFFFF/', 'http://via.placeholder.com/1050x700/1DE9B6/767676/', 'http://via.placeholder.com/1050x700/00E5FF/767676/', 'http://via.placeholder.com/1050x700/C6FF00/767676/',
// 2
'http://via.placeholder.com/1050x700/D4E157/767676/', 'http://via.placeholder.com/1050x700/F8BBD0/767676/', 'http://via.placeholder.com/1050x700/FFCA28/767676/', 'http://via.placeholder.com/1050x700/CFD8DC/767676/', 'http://via.placeholder.com/1050x700/673AB7/FFFFFF/', 'http://via.placeholder.com/1050x700/EF5350/FFFFFF/', 'http://via.placeholder.com/1050x700/1E88E5/FFFFFF/', 'http://via.placeholder.com/1050x700/3D5AFE/FFFFFF/', 'http://via.placeholder.com/1050x700/EF6C00/FFFFFF/', 'http://via.placeholder.com/1050x700/795548/FFFFFF/',
// 3
'http://via.placeholder.com/1050x700/FFE57F/767676/', 'http://via.placeholder.com/1050x700/DCEDC8/767676/', 'http://via.placeholder.com/1050x700/E1BEE7/767676/', 'http://via.placeholder.com/1050x700/BBDEFB/767676/', 'http://via.placeholder.com/1050x700/388E3C/FFFFFF/', 'http://via.placeholder.com/1050x700/651FFF/FFFFFF/', 'http://via.placeholder.com/1050x700/757575/FFFFFF/', 'http://via.placeholder.com/1050x700/E91E63/FFFFFF/', 'http://via.placeholder.com/1050x700/607D8B/FFFFFF/', 'http://via.placeholder.com/1050x700/AA00FF/FFFFFF/',
// 4
'http://via.placeholder.com/1050x700/827717/FFFFFF/', 'http://via.placeholder.com/1050x700/E64A19/FFFFFF/', 'http://via.placeholder.com/1050x700/C2185B/FFFFFF/', 'http://via.placeholder.com/1050x700/AA00FF/FFFFFF/', 'http://via.placeholder.com/1050x700/1976D2/FFFFFF/', 'http://via.placeholder.com/1050x700/D1C4E9/767676/', 'http://via.placeholder.com/1050x700/81D4FA/767676/', 'http://via.placeholder.com/1050x700/E0F2F1/767676/', 'http://via.placeholder.com/1050x700/E6EE9C/767676/', 'http://via.placeholder.com/1050x700/FFEB3B/767676/',
// 5
'http://via.placeholder.com/1050x700/E040FB/FFFFFF/', 'http://via.placeholder.com/1050x700/C62828/FFFFFF/', 'http://via.placeholder.com/1050x700/AD1457/FFFFFF/', 'http://via.placeholder.com/1050x700/673AB7/FFFFFF/', 'http://via.placeholder.com/1050x700/651FFF/FFFFFF/', 'http://via.placeholder.com/1050x700/00BFA5/FFFFFF/', 'http://via.placeholder.com/1050x700/A5D6A7/767676/', 'http://via.placeholder.com/1050x700/AED581/767676/', 'http://via.placeholder.com/1050x700/FFB74D/767676/', 'http://via.placeholder.com/1050x700/00BFA5/767676/'];

exports.default = images;

/***/ }),
/* 68 */
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),
/* 69 */
/*!*********************************************************!*\
  !*** external "material-ui-pickers/utils/moment-utils" ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("material-ui-pickers/utils/moment-utils");

/***/ }),
/* 70 */
/*!********************************************************************!*\
  !*** external "material-ui-pickers/utils/MuiPickersUtilsProvider" ***!
  \********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("material-ui-pickers/utils/MuiPickersUtilsProvider");

/***/ }),
/* 71 */
/*!*************************************!*\
  !*** ./src/app/constants/helmet.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    name: 'description',
    og_title: 'og:title',
    og_desc: 'og:description',
    tw_tittle: 'twitter:title',
    tw_desc: 'twitter:description'
};

/***/ }),
/* 72 */
/*!******************************************************!*\
  !*** ./src/app/containers/Themes/themeStyles-jss.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  var _label;

  return {
    group: {
      margin: theme.spacing.unit + 'px 0',
      width: '100%',
      display: 'block',
      '& label': (_label = {
        display: 'inline-block',
        margin: 0,
        width: '99%'
      }, _defineProperty(_label, theme.breakpoints.up('sm'), {
        width: '45%'
      }), _defineProperty(_label, theme.breakpoints.up('md'), {
        width: '33.33%'
      }), _label),
      '& > label': {
        position: 'relative',
        '& > span': {
          marginTop: 10,
          display: 'block',
          textAlign: 'center',
          position: 'absolute',
          top: 12,
          left: 48
        }
      }
    },
    thumb: {
      margin: theme.spacing.unit
    },
    selectedTheme: {
      boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12), 0 0 0px 4px ' + theme.palette.secondary.main
    },
    content: {},
    title: {},
    ctn1: {},
    ctn2: {},
    appPreview: {
      width: '100%',
      padding: 5,
      height: 200,
      position: 'relative',
      display: 'flex',
      background: theme.palette.grey[50],
      '& header': {
        width: '100%',
        height: 50,
        background: theme.palette.primary.main,
        position: 'absolute',
        top: 0,
        left: 0
      },
      '& aside': {
        width: '30%',
        marginTop: 70,
        '& li': {
          margin: '0 10px 10px 5px',
          display: 'flex',
          '& i': {
            borderRadius: '50%',
            width: 8,
            height: 8,
            marginRight: 5,
            marginTop: -3,
            background: theme.palette.secondary.main
          },
          '& p': {
            width: 40,
            height: 2,
            background: theme.palette.grey[400]
          }
        }
      },
      '& $content': {
        padding: 10,
        marginTop: 20,
        width: '70%',
        zIndex: 10,
        marginBottom: 10,
        '& $title': {
          background: theme.palette.primary.main,
          height: 5,
          width: '60%',
          marginBottom: 10
        },
        '& $ctn1': {
          margin: '5px 5px 10px 0',
          width: '100%',
          height: 30,
          background: theme.palette.secondary.main,
          display: 'block'
        },
        '& $ctn2': {
          width: '50%',
          marginLeft: 0,
          height: 40,
          border: '2px solid #FFF',
          background: theme.palette.secondary.light,
          display: 'inline-block'
        }
      }
    }
  };
};

exports.default = styles;

/***/ }),
/* 73 */
/*!*************************************!*\
  !*** external "react-router-redux" ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),
/* 74 */
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (parameters) {
  if (_config2.default.isProd) {
    app.use((0, _compression2.default)());
  }
  app.disable('etag');
  app.disable('x-powered-by');
  app.use('/', _express2.default.static('static', { etag: false }));
  app.use((0, _serveFavicon2.default)(_path2.default.join('static', 'favicons', 'favicon.ico')));

  app.use(function (req, res, next) {
    if (_config2.default.ssl) {
      if (req.headers['x-forwarded-proto'] !== 'https') {
        res.redirect(302, 'https://' + req.hostname + req.originalUrl);
      } else {
        next();
      }
    } else {
      next();
    }
  });

  app.get('/api/docs', function (req, res) {
    res.json({
      records: [{ source: (0, _rawdocs2.default)(req.query) }]
    });
  });

  app.get('/api/icons', function (req, res) {
    res.json({
      records: [{ source: (0, _rawicons2.default)(req.query) }]
    });
  });

  app.get('/api/users', function (req, res) {
    res.json({
      records: [{ id: 1, name: 'Justin Timberlake' }, { id: 2, name: 'Kanye West' }]
    });
  });

  app.get('*', (0, _createSSR2.default)(parameters && parameters.chunks()));

  var server = app.listen(port, function (err) {
    // eslint-disable-line
    if (err) {
      return console.error(err);
    }
    console.info('Listening at ' + host + ':' + port);
  });

  return {
    server: server,
    app: app
  };
};

var _path = __webpack_require__(/*! path */ 75);

var _path2 = _interopRequireDefault(_path);

var _compression = __webpack_require__(/*! compression */ 76);

var _compression2 = _interopRequireDefault(_compression);

var _express = __webpack_require__(/*! express */ 77);

var _express2 = _interopRequireDefault(_express);

var _serveFavicon = __webpack_require__(/*! serve-favicon */ 78);

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

__webpack_require__(/*! ./env */ 79);

var _rawdocs = __webpack_require__(/*! ./rawdocs */ 81);

var _rawdocs2 = _interopRequireDefault(_rawdocs);

var _rawicons = __webpack_require__(/*! ./rawicons */ 82);

var _rawicons2 = _interopRequireDefault(_rawicons);

var _createSSR = __webpack_require__(/*! ./SSR/createSSR */ 83);

var _createSSR2 = _interopRequireDefault(_createSSR);

var _config = __webpack_require__(/*! ./../app/config */ 26);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _config$server = _config2.default.server,
    host = _config$server.host,
    port = _config$server.port;

var app = (0, _express2.default)();

/***/ }),
/* 75 */
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 76 */
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 77 */
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 78 */
/*!********************************!*\
  !*** external "serve-favicon" ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 79 */
/*!***************************!*\
  !*** ./src/server/env.js ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dotenv = __webpack_require__(/*! dotenv */ 80);

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _dotenv2.default.config();

/***/ }),
/* 80 */
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 81 */
/*!*******************************!*\
  !*** ./src/server/rawdocs.js ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rawdoc;

var _fs = __webpack_require__(/*! fs */ 41);

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rawdoc(componentName) {
  var dir = 'src/app/';
  var content = _fs2.default.readFileSync(dir + componentName.src, 'utf8');
  return content.toString();
}

/***/ }),
/* 82 */
/*!********************************!*\
  !*** ./src/server/rawicons.js ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rawdoc;

var _fs = __webpack_require__(/*! fs */ 41);

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rawdoc(fileName) {
  var dir = 'src/helpers/';
  var content = _fs2.default.readFileSync(dir + fileName.src, 'utf8');
  return content.toString();
}

/***/ }),
/* 83 */
/*!*************************************!*\
  !*** ./src/server/SSR/createSSR.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createSSR;

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(/*! react-dom/server */ 42);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ 17);

var _reactRouterConfig = __webpack_require__(/*! react-router-config */ 31);

var _reactRedux = __webpack_require__(/*! react-redux */ 6);

var _history = __webpack_require__(/*! history */ 84);

var _containers = __webpack_require__(/*! ./../../app/containers */ 85);

var _containers2 = _interopRequireDefault(_containers);

var _html = __webpack_require__(/*! ./html */ 237);

var _html2 = _interopRequireDefault(_html);

var _ApiClient = __webpack_require__(/*! ./../../helpers/ApiClient */ 238);

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _store = __webpack_require__(/*! ./../../app/redux/store */ 240);

var _store2 = _interopRequireDefault(_store);

var _config = __webpack_require__(/*! ./../../app/config */ 26);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createSSR(assets) {
  return function (req, res) {
    var context = {};
    var history = (0, _history.createMemoryHistory)({
      initialEntries: [req.url]
    });
    var client = new _ApiClient2.default(req);
    var store = (0, _store2.default)(history, client);
    var routes = (0, _containers2.default)(store);

    var hydrateOnClient = function hydrateOnClient() {
      res.send('<!doctype html>\n' + (0, _server.renderToString)(_react2.default.createElement(_html2.default, {
        assets: assets,
        store: store
      })));
    };

    if (!_config2.default.ssr) {
      hydrateOnClient();
      return;
    }

    if (context.status === 302) {
      res.redirect(302, context.url);
      return;
    }

    var branch = (0, _reactRouterConfig.matchRoutes)(routes, req.url);
    var promises = branch.map(function (_ref) {
      var fetchData = _ref.route.component.fetchData;

      if (fetchData instanceof Function) {
        return fetchData(store).then(function () {}, function () {});
      }
      return Promise.resolve();
    });

    Promise.all(promises).then(function () {
      var component = _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
          _reactRouterDom.StaticRouter,
          {
            location: req.url,
            context: context
          },
          (0, _reactRouterConfig.renderRoutes)(routes)
        )
      );

      var content = (0, _server.renderToString)(_react2.default.createElement(_html2.default, {
        assets: assets,
        component: component,
        store: store
      }));

      if (context.status) {
        res.status(context.status);
      } else {
        res.status(200);
      }

      return res.send('<!doctype html>\n' + content);
    });
  };
}

/***/ }),
/* 84 */
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),
/* 85 */
/*!*************************************!*\
  !*** ./src/app/containers/index.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _components = __webpack_require__(/*! ./../components */ 3);

var _Dashboard = __webpack_require__(/*! ./Dashboard/Dashboard */ 215);

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _RoutePage = __webpack_require__(/*! ./Routes/RoutePage */ 217);

var _RoutePage2 = _interopRequireDefault(_RoutePage);

var _TransporterPage = __webpack_require__(/*! ./Transporter/TransporterPage */ 218);

var _TransporterPage2 = _interopRequireDefault(_TransporterPage);

var _DriverPage = __webpack_require__(/*! ./Driver/DriverPage */ 219);

var _DriverPage2 = _interopRequireDefault(_DriverPage);

var _AssistantPage = __webpack_require__(/*! ./Assistant/AssistantPage */ 220);

var _AssistantPage2 = _interopRequireDefault(_AssistantPage);

var _ClientPage = __webpack_require__(/*! ./Client/ClientPage */ 221);

var _ClientPage2 = _interopRequireDefault(_ClientPage);

var _TSchedulePage = __webpack_require__(/*! ./Schedule/TSchedulePage */ 222);

var _TSchedulePage2 = _interopRequireDefault(_TSchedulePage);

var _WSchedulePage = __webpack_require__(/*! ./Schedule/WSchedulePage */ 223);

var _WSchedulePage2 = _interopRequireDefault(_WSchedulePage);

var _TicketPage = __webpack_require__(/*! ./Ticket/TicketPage */ 224);

var _TicketPage2 = _interopRequireDefault(_TicketPage);

var _Themes = __webpack_require__(/*! ./Themes */ 225);

var _Themes2 = _interopRequireDefault(_Themes);

var _NotFound = __webpack_require__(/*! ./NotFound/NotFound */ 229);

var _NotFound2 = _interopRequireDefault(_NotFound);

var _NotFoundDedicated = __webpack_require__(/*! ./Pages/Standalone/NotFoundDedicated */ 230);

var _NotFoundDedicated2 = _interopRequireDefault(_NotFoundDedicated);

var _withTracker = __webpack_require__(/*! ./withTracker */ 232);

var _withTracker2 = _interopRequireDefault(_withTracker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Themes

// Work


// Client


// Driver


// Route
exports.default = function (store) {
  // eslint-disable-line
  // we can get an access to store
  return [{
    component: (0, _withTracker2.default)(_components.App),
    routes: [{
      component: (0, _withTracker2.default)(_components.Dashboard),
      path: '/admin',
      routes: [{
        path: '/admin',
        component: (0, _withTracker2.default)(_Dashboard2.default),
        exact: true
      }, {
        path: '/admin/route',
        component: (0, _withTracker2.default)(_RoutePage2.default)
      }, {
        path: '/admin/transporter',
        component: (0, _withTracker2.default)(_TransporterPage2.default)
      }, {
        path: '/admin/employee/driver',
        component: (0, _withTracker2.default)(_DriverPage2.default)
      }, {
        path: '/admin/employee/assistant',
        component: (0, _withTracker2.default)(_AssistantPage2.default)
      }, {
        path: '/admin/client',
        component: (0, _withTracker2.default)(_ClientPage2.default)
      }, {
        path: '/admin/ticket',
        component: (0, _withTracker2.default)(_TicketPage2.default)
      }, {
        path: '/admin/transport-schedule',
        component: (0, _withTracker2.default)(_TSchedulePage2.default)
      }, {
        path: '/admin/work-schedule',
        component: (0, _withTracker2.default)(_WSchedulePage2.default)
      }, {
        path: '/admin/settings/themes',
        component: (0, _withTracker2.default)(_Themes2.default)
      }, {
        path: '*',
        component: (0, _withTracker2.default)(_NotFound2.default)
      }]
    }, {
      path: '*',
      component: (0, _withTracker2.default)(_NotFoundDedicated2.default)
    }]
  }];
};
// import Error from './Pages/Error';
// import Maintenance from './Pages/Maintenance';
// import Parent from './Parent';

// Other


// Ticket


// Schedule
// Transport


// Assistant


// Transporter

// Dashboard

/***/ }),
/* 86 */
/*!***************************************!*\
  !*** ./src/app/components/App/App.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _reactRouterConfig = __webpack_require__(/*! react-router-config */ 31);

var _reactRedux = __webpack_require__(/*! react-redux */ 6);

var _reactLoadingBar = __webpack_require__(/*! react-loading-bar */ 87);

var _reactLoadingBar2 = _interopRequireDefault(_reactLoadingBar);

var _redux = __webpack_require__(/*! redux */ 9);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _themePalette = __webpack_require__(/*! ../../constants/themePalette.js */ 32);

var _themePalette2 = _interopRequireDefault(_themePalette);

__webpack_require__(/*! ../../styles/components/vendors/react-loading-bar/index.css */ 88);

var _UiActions = __webpack_require__(/*! ./../../actions/UiActions */ 33);

var _appStylesJss = __webpack_require__(/*! ./appStyles-jss */ 34);

var _appStylesJss2 = _interopRequireDefault(_appStylesJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      pageLoaded: true
    }, _this.componentWillMount = function () {
      _this.onProgressShow();
      /* Uncomment this bellow if want to change theme randomly */
      // this.props.changeTheme('randomTheme');
    }, _this.componentDidMount = function () {
      _this.playProgress();
      _this.unlisten = _this.props.history.listen(function () {
        _this.playProgress();
      });
    }, _this.onProgressShow = function () {
      _this.setState({ pageLoaded: true });
    }, _this.onProgressHide = function () {
      _this.setState({ pageLoaded: false });
    }, _this.playProgress = function () {
      _this.onProgressShow();
      setTimeout(function () {
        _this.onProgressHide();
      }, 500);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unlisten();
      this.onProgressShow();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          route = _props.route,
          color = _props.color;
      var pageLoaded = this.state.pageLoaded;

      var theme = (0, _styles.createMuiTheme)(_themePalette2.default[color]);
      return _react2.default.createElement(
        _styles.MuiThemeProvider,
        { theme: theme },
        _react2.default.createElement(
          'div',
          { className: classes.root },
          _react2.default.createElement(_reactLoadingBar2.default, {
            show: pageLoaded,
            color: 'rgba(255,255,255,.7)',
            showSpinner: false
          }),
          (0, _reactRouterConfig.renderRoutes)(route.routes)
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

App.propTypes = {
  classes: _propTypes.PropTypes.object.isRequired,
  history: _propTypes.PropTypes.object.isRequired,
  /* Uncomment this bellow if want to change theme randomly */
  // changeTheme: PropTypes.func.isRequired,
  color: _propTypes.PropTypes.string.isRequired,
  route: _propTypes.object
};

App.defaultProps = {
  route: _propTypes.object
};

var reducer = 'ui';
var mapStateToProps = function mapStateToProps(state) {
  return {
    force: state, // force state from reducer
    color: state.getIn([reducer, 'theme'])
  };
};

var dispatchToProps = function dispatchToProps(dispatch) {
  return {
    changeTheme: (0, _redux.bindActionCreators)(_UiActions.changeThemeAction, dispatch)
  };
};

var AppMapped = (0, _reactRedux.connect)(mapStateToProps, dispatchToProps)(App);

exports.default = (0, _styles.withTheme)()((0, _styles.withStyles)(_appStylesJss2.default)(AppMapped));

/***/ }),
/* 87 */
/*!************************************!*\
  !*** external "react-loading-bar" ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-loading-bar");

/***/ }),
/* 88 */
/*!***********************************************************************!*\
  !*** ./src/app/styles/components/vendors/react-loading-bar/index.css ***!
  \***********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {



/***/ }),
/* 89 */
/*!***************************************!*\
  !*** ./static/images/material_bg.svg ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMTIwMCA3MDAiIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjcwMCI+PGRlZnM+PHBhdGggZD0iTTEwNDYuNjcgMzU4LjI4QzEwNDYuNjcgNTEyLjQ4IDkyMS40OCA2MzcuNjcgNzY3LjI4IDYzNy42N0M2MTMuMDcgNjM3LjY3IDQ4Ny44OCA1MTIuNDggNDg3Ljg4IDM1OC4yOEM0ODcuODggMjA0LjA3IDYxMy4wNyA3OC44OCA3NjcuMjggNzguODhDOTIxLjQ4IDc4Ljg4IDEwNDYuNjcgMjA0LjA3IDEwNDYuNjcgMzU4LjI4WiIgaWQ9ImJ1b1Qwd0ZBQiI+PC9wYXRoPjxwYXRoIGQ9Ik05MzAuMDUgMzU4LjI4QzkzMC4wNSA0NDguMTEgODU3LjExIDUyMS4wNSA3NjcuMjggNTIxLjA1QzY3Ny40NCA1MjEuMDUgNjA0LjUgNDQ4LjExIDYwNC41IDM1OC4yOEM2MDQuNSAyNjguNDQgNjc3LjQ0IDE5NS41IDc2Ny4yOCAxOTUuNUM4NTcuMTEgMTk1LjUgOTMwLjA1IDI2OC40NCA5MzAuMDUgMzU4LjI4WiIgaWQ9ImJMTEJQbW9jZyI+PC9wYXRoPjxwYXRoIGQ9Ik0xMjAwIDEyNi4zMUwxMjAwIDcwMEwwIDcwMEwxMjAwIDEyNi4zMVoiIGlkPSJjMllrSGQwaVhjIj48L3BhdGg+PHBhdGggZD0iTTYxMy4yMiA3MDQuMzdMMCA3MDQuMzdMMCAxNjMuNjNMNjEzLjIyIDcwNC4zN1oiIGlkPSJhY1lWQWVpQ3kiPjwvcGF0aD48L2RlZnM+PGc+PGc+PGc+PGc+PHVzZSB4bGluazpocmVmPSIjYnVvVDB3RkFCIiBvcGFjaXR5PSIwLjE5IiBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPjwvZz48Zz48dXNlIHhsaW5rOmhyZWY9IiNiTExCUG1vY2ciIG9wYWNpdHk9IjAuMiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIj48L3VzZT48L2c+PC9nPjxnPjx1c2UgeGxpbms6aHJlZj0iI2MyWWtIZDBpWGMiIG9wYWNpdHk9IjAuMDkiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+PC9nPjxnPjx1c2UgeGxpbms6aHJlZj0iI2FjWVZBZWlDeSIgb3BhY2l0eT0iMC4xNSIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIxIj48L3VzZT48L2c+PC9nPjwvZz48L3N2Zz4="

/***/ }),
/* 90 */
/*!*********************************************!*\
  !*** ./src/app/components/App/Dashboard.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _classnames = __webpack_require__(/*! classnames */ 11);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouterConfig = __webpack_require__(/*! react-router-config */ 31);

var _redux = __webpack_require__(/*! redux */ 9);

var _reactRedux = __webpack_require__(/*! react-redux */ 6);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Fade = __webpack_require__(/*! @material-ui/core/Fade */ 91);

var _Fade2 = _interopRequireDefault(_Fade);

var _components = __webpack_require__(/*! ./../../components */ 3);

var _UiActions = __webpack_require__(/*! ./../../actions/UiActions */ 33);

var _appStylesJss = __webpack_require__(/*! ./appStyles-jss */ 34);

var _appStylesJss2 = _interopRequireDefault(_appStylesJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dashboard = function (_React$Component) {
  _inherits(Dashboard, _React$Component);

  function Dashboard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Dashboard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      transform: 0
    }, _this.componentDidMount = function () {
      // Scroll content to top
      var mainContent = document.getElementById('mainContent');
      mainContent.addEventListener('scroll', _this.handleScroll);

      // Set expanded sidebar menu
      var currentPath = _this.props.history.location.pathname;
      _this.props.initialOpen(currentPath);

      // Play page transition
      _this.props.loadTransition(true);

      // Execute all arguments when page changes
      _this.unlisten = _this.props.history.listen(function () {
        mainContent.scrollTo(0, 0);
        setTimeout(function () {
          _this.props.loadTransition(true);
        }, 500);
      });
    }, _this.handleScroll = function (event) {
      var scoll = event.target.scrollTop;
      _this.setState({
        transform: scoll
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Dashboard, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var mainContent = document.getElementById('mainContent');
      mainContent.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          route = _props.route,
          toggleDrawer = _props.toggleDrawer,
          sidebarOpen = _props.sidebarOpen,
          loadTransition = _props.loadTransition,
          pageLoaded = _props.pageLoaded;

      var darker = true;
      return _react2.default.createElement(
        'div',
        { className: classes.appFrameInner },
        _react2.default.createElement(_components.Header, { toggleDrawerOpen: toggleDrawer, turnDarker: this.state.transform > 30 && darker, margin: sidebarOpen }),
        _react2.default.createElement(_components.Sidebar, {
          open: sidebarOpen,
          toggleDrawerOpen: toggleDrawer,
          loadTransition: loadTransition,
          turnDarker: this.state.transform > 30 && darker
        }),
        _react2.default.createElement(
          'main',
          { className: (0, _classnames2.default)(classes.content, !sidebarOpen && classes.contentPadding), id: 'mainContent' },
          _react2.default.createElement('div', { className: classes.bgbar }),
          _react2.default.createElement(
            'section',
            { className: classes.mainWrap },
            _react2.default.createElement(_components.BreadCrumb, { separator: ' \u203A ', theme: 'light', location: this.props.history.location }),
            !pageLoaded && _react2.default.createElement('img', { src: '/images/spinner.gif', alt: 'spinner', className: classes.circularProgress }),
            _react2.default.createElement(
              _Fade2.default,
              _extends({
                'in': pageLoaded,
                mountOnEnter: true,
                unmountOnExit: true
              }, pageLoaded ? { timeout: 700 } : {}),
              _react2.default.createElement(
                'div',
                { className: !pageLoaded ? classes.hideApp : '' },
                (0, _reactRouterConfig.renderRoutes)(route.routes)
              )
            )
          )
        )
      );
    }
  }]);

  return Dashboard;
}(_react2.default.Component);

Dashboard.propTypes = {
  classes: _propTypes.PropTypes.object.isRequired,
  history: _propTypes.PropTypes.object.isRequired,
  route: _propTypes.object,
  initialOpen: _propTypes.PropTypes.func.isRequired,
  toggleDrawer: _propTypes.PropTypes.func.isRequired,
  loadTransition: _propTypes.PropTypes.func.isRequired,
  sidebarOpen: _propTypes.PropTypes.bool.isRequired,
  pageLoaded: _propTypes.PropTypes.bool.isRequired
};

Dashboard.defaultProps = {
  route: _propTypes.object
};

var reducer = 'ui';
var mapStateToProps = function mapStateToProps(state) {
  return {
    sidebarOpen: state.getIn([reducer, 'sidebarOpen']),
    pageLoaded: state.getIn([reducer, 'pageLoaded'])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toggleDrawer: function toggleDrawer() {
      return dispatch(_UiActions.toggleAction);
    },
    initialOpen: (0, _redux.bindActionCreators)(_UiActions.openAction, dispatch),
    loadTransition: (0, _redux.bindActionCreators)(_UiActions.playTransitionAction, dispatch)
  };
};

var DashboardMaped = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Dashboard);

exports.default = (0, _styles.withStyles)(_appStylesJss2.default)(DashboardMaped);

/***/ }),
/* 91 */
/*!*****************************************!*\
  !*** external "@material-ui/core/Fade" ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fade");

/***/ }),
/* 92 */
/*!*********************************************!*\
  !*** ./src/app/components/Header/Header.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _classnames = __webpack_require__(/*! classnames */ 11);

var _classnames2 = _interopRequireDefault(_classnames);

var _AppBar = __webpack_require__(/*! @material-ui/core/AppBar */ 93);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = __webpack_require__(/*! @material-ui/core/Toolbar */ 43);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Search = __webpack_require__(/*! @material-ui/icons/Search */ 94);

var _Search2 = _interopRequireDefault(_Search);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ 13);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Menu = __webpack_require__(/*! @material-ui/icons/Menu */ 95);

var _Menu2 = _interopRequireDefault(_Menu);

var _Hidden = __webpack_require__(/*! @material-ui/core/Hidden */ 44);

var _Hidden2 = _interopRequireDefault(_Hidden);

var _UserMenu = __webpack_require__(/*! ./UserMenu */ 96);

var _UserMenu2 = _interopRequireDefault(_UserMenu);

var _headerJss = __webpack_require__(/*! ./header-jss */ 50);

var _headerJss2 = _interopRequireDefault(_headerJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          toggleDrawerOpen = _props.toggleDrawerOpen,
          margin = _props.margin,
          turnDarker = _props.turnDarker;


      return _react2.default.createElement(
        _AppBar2.default,
        {
          className: (0, _classnames2.default)(classes.appBar, margin && classes.appBarShift, classes.appbar, turnDarker && classes.darker)
        },
        _react2.default.createElement(
          _Toolbar2.default,
          { disableGutters: !this.state.open },
          _react2.default.createElement(
            _IconButton2.default,
            {
              className: classes.menuButton,
              color: 'inherit',
              'aria-label': 'Menu',
              onClick: toggleDrawerOpen
            },
            _react2.default.createElement(_Menu2.default, null)
          ),
          _react2.default.createElement(
            'div',
            { className: classes.flex },
            _react2.default.createElement(
              'div',
              { className: classes.wrapper },
              _react2.default.createElement(
                'div',
                { className: classes.search },
                _react2.default.createElement(_Search2.default, null)
              ),
              _react2.default.createElement('input', { className: classes.input, placeholder: 'Search' })
            )
          ),
          _react2.default.createElement(
            _Hidden2.default,
            { xsDown: true },
            _react2.default.createElement('span', { className: classes.separatorV })
          ),
          _react2.default.createElement(_UserMenu2.default, null)
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

Header.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  toggleDrawerOpen: _propTypes2.default.func.isRequired,
  margin: _propTypes2.default.bool.isRequired,
  turnDarker: _propTypes2.default.bool.isRequired
};

exports.default = (0, _styles.withStyles)(_headerJss2.default)(Header);

/***/ }),
/* 93 */
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),
/* 94 */
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),
/* 95 */
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),
/* 96 */
/*!***********************************************!*\
  !*** ./src/app/components/Header/UserMenu.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _classnames = __webpack_require__(/*! classnames */ 11);

var _classnames2 = _interopRequireDefault(_classnames);

var _Avatar = __webpack_require__(/*! @material-ui/core/Avatar */ 27);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ 13);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ 35);

var _Button2 = _interopRequireDefault(_Button);

var _Notifications = __webpack_require__(/*! @material-ui/icons/Notifications */ 97);

var _Notifications2 = _interopRequireDefault(_Notifications);

var _Info = __webpack_require__(/*! @material-ui/icons/Info */ 45);

var _Info2 = _interopRequireDefault(_Info);

var _Warning = __webpack_require__(/*! @material-ui/icons/Warning */ 98);

var _Warning2 = _interopRequireDefault(_Warning);

var _CheckCircle = __webpack_require__(/*! @material-ui/icons/CheckCircle */ 99);

var _CheckCircle2 = _interopRequireDefault(_CheckCircle);

var _DoNotDisturbOn = __webpack_require__(/*! @material-ui/icons/DoNotDisturbOn */ 100);

var _DoNotDisturbOn2 = _interopRequireDefault(_DoNotDisturbOn);

var _ExitToApp = __webpack_require__(/*! @material-ui/icons/ExitToApp */ 101);

var _ExitToApp2 = _interopRequireDefault(_ExitToApp);

var _Badge = __webpack_require__(/*! @material-ui/core/Badge */ 102);

var _Badge2 = _interopRequireDefault(_Badge);

var _Divider = __webpack_require__(/*! @material-ui/core/Divider */ 28);

var _Divider2 = _interopRequireDefault(_Divider);

var _Menu = __webpack_require__(/*! @material-ui/core/Menu */ 46);

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = __webpack_require__(/*! @material-ui/core/MenuItem */ 36);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _ListItemIcon = __webpack_require__(/*! @material-ui/core/ListItemIcon */ 47);

var _ListItemIcon2 = _interopRequireDefault(_ListItemIcon);

var _ListItemText = __webpack_require__(/*! @material-ui/core/ListItemText */ 37);

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _dummyContents = __webpack_require__(/*! ../../constants/dummyContents.js */ 48);

var _dummyContents2 = _interopRequireDefault(_dummyContents);

var _Messages = __webpack_require__(/*! ../../styles/components/Messages.scss */ 49);

var _Messages2 = _interopRequireDefault(_Messages);

var _avatars = __webpack_require__(/*! ../../constants/avatars.js */ 38);

var _avatars2 = _interopRequireDefault(_avatars);

var _headerJss = __webpack_require__(/*! ./header-jss */ 50);

var _headerJss2 = _interopRequireDefault(_headerJss);

var _reactRedux = __webpack_require__(/*! react-redux */ 6);

var _show = __webpack_require__(/*! ../../constants/show.js */ 4);

var _show2 = _interopRequireDefault(_show);

var _jsCookie = __webpack_require__(/*! js-cookie */ 103);

var _jsCookie2 = _interopRequireDefault(_jsCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserMenu = function (_React$Component) {
  _inherits(UserMenu, _React$Component);

  function UserMenu() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, UserMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UserMenu.__proto__ || Object.getPrototypeOf(UserMenu)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      anchorEl: null,
      openMenu: null
    }, _this.handleMenu = function (menu) {
      return function (event) {
        _this.setState({
          openMenu: _this.state.openMenu === menu ? null : menu,
          anchorEl: event.currentTarget
        });
      };
    }, _this.handleClose = function () {
      _this.setState({ anchorEl: null, openMenu: null });
    }, _this.logout = function () {
      _jsCookie2.default.remove('TRANSPORT-JWT', { path: '' });
      localStorage.clear();
      window.location.replace('/');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UserMenu, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;
      var _state = this.state,
          anchorEl = _state.anchorEl,
          openMenu = _state.openMenu;
      // show(this.props.user);

      return _react2.default.createElement(
        'div',
        { className: 'userMenu' },
        _react2.default.createElement(
          _IconButton2.default,
          {
            'aria-haspopup': 'true',
            onClick: this.handleMenu('notification'),
            color: 'inherit'
          },
          _react2.default.createElement(
            _Badge2.default,
            { className: classes.badge, badgeContent: 4, color: 'secondary' },
            _react2.default.createElement(_Notifications2.default, null)
          )
        ),
        _react2.default.createElement(
          _Menu2.default,
          {
            id: 'menu-notification',
            anchorEl: anchorEl,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right'
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'right'
            },
            className: classes.notifMenu,
            PaperProps: {
              style: {
                width: 350
              }
            },
            open: openMenu === 'notification',
            onClose: this.handleClose
          },
          _react2.default.createElement(
            _MenuItem2.default,
            { onClick: this.handleClose },
            _react2.default.createElement(
              'div',
              { className: _Messages2.default.messageInfo },
              _react2.default.createElement(_Avatar2.default, { alt: 'User Name', src: _avatars2.default[0] }),
              _react2.default.createElement(_ListItemText2.default, { primary: _dummyContents2.default.text.subtitle, secondary: _dummyContents2.default.text.date })
            )
          ),
          _react2.default.createElement(_Divider2.default, { inset: true }),
          _react2.default.createElement(
            _MenuItem2.default,
            { onClick: this.handleClose },
            _react2.default.createElement(
              'div',
              { className: _Messages2.default.messageInfo },
              _react2.default.createElement(
                _Avatar2.default,
                { className: _Messages2.default.icon },
                _react2.default.createElement(_Info2.default, null)
              ),
              _react2.default.createElement(_ListItemText2.default, { primary: _dummyContents2.default.text.sentences, className: classes.textNotif, secondary: _dummyContents2.default.text.date })
            )
          ),
          _react2.default.createElement(_Divider2.default, { inset: true }),
          _react2.default.createElement(
            _MenuItem2.default,
            { onClick: this.handleClose },
            _react2.default.createElement(
              'div',
              { className: _Messages2.default.messageSuccess },
              _react2.default.createElement(
                _Avatar2.default,
                { className: _Messages2.default.icon },
                _react2.default.createElement(_CheckCircle2.default, null)
              ),
              _react2.default.createElement(_ListItemText2.default, { primary: _dummyContents2.default.text.subtitle, className: classes.textNotif, secondary: _dummyContents2.default.text.date })
            )
          ),
          _react2.default.createElement(_Divider2.default, { inset: true }),
          _react2.default.createElement(
            _MenuItem2.default,
            { onClick: this.handleClose },
            _react2.default.createElement(
              'div',
              { className: _Messages2.default.messageWarning },
              _react2.default.createElement(
                _Avatar2.default,
                { className: _Messages2.default.icon },
                _react2.default.createElement(_Warning2.default, null)
              ),
              _react2.default.createElement(_ListItemText2.default, { primary: _dummyContents2.default.text.subtitle, className: classes.textNotif, secondary: _dummyContents2.default.text.date })
            )
          ),
          _react2.default.createElement(_Divider2.default, { inset: true }),
          _react2.default.createElement(
            _MenuItem2.default,
            { onClick: this.handleClose },
            _react2.default.createElement(
              'div',
              { className: _Messages2.default.messageError },
              _react2.default.createElement(
                _Avatar2.default,
                { className: _Messages2.default.icon },
                _react2.default.createElement(_DoNotDisturbOn2.default, null)
              ),
              _react2.default.createElement(_ListItemText2.default, { primary: 'Suspendisse pharetra pulvinar sollicitudin. Aenean ut orci eu odio cursus lobortis eget tempus velit. ', className: classes.textNotif, secondary: 'Jan 9, 2016' })
            )
          )
        ),
        _react2.default.createElement(
          _Button2.default,
          { onClick: this.handleMenu('user-setting') },
          _react2.default.createElement(_Avatar2.default, {
            alt: this.props.user.get('full_name'),
            src: this.props.user.get('picture')
          })
        ),
        _react2.default.createElement(
          _Menu2.default,
          {
            id: 'menu-appbar',
            anchorEl: anchorEl,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right'
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'right'
            },
            open: openMenu === 'user-setting',
            onClose: this.handleClose
          },
          _react2.default.createElement(
            _MenuItem2.default,
            { onClick: this.handleClose },
            'My Profile'
          ),
          _react2.default.createElement(
            _MenuItem2.default,
            { onClick: this.handleClose },
            'My Calendar'
          ),
          _react2.default.createElement(
            _MenuItem2.default,
            { onClick: this.handleClose },
            'My Inbox',
            _react2.default.createElement(
              _ListItemIcon2.default,
              null,
              _react2.default.createElement(_Badge2.default, { className: (0, _classnames2.default)(classes.badge, classes.badgeMenu), badgeContent: 2, color: 'secondary' })
            )
          ),
          _react2.default.createElement(_Divider2.default, null),
          _react2.default.createElement(
            _MenuItem2.default,
            { onClick: this.logout },
            _react2.default.createElement(
              _ListItemIcon2.default,
              null,
              _react2.default.createElement(_ExitToApp2.default, null)
            ),
            'Log Out'
          )
        )
      );
    }
  }]);

  return UserMenu;
}(_react2.default.Component);

UserMenu.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  user: _propTypes2.default.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    force: state,
    user: state.getIn(['userInfo', 'user'])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

var UserMenuMapped = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UserMenu);

exports.default = (0, _styles.withStyles)(_headerJss2.default)(UserMenuMapped);

/***/ }),
/* 97 */
/*!***************************************************!*\
  !*** external "@material-ui/icons/Notifications" ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Notifications");

/***/ }),
/* 98 */
/*!*********************************************!*\
  !*** external "@material-ui/icons/Warning" ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Warning");

/***/ }),
/* 99 */
/*!*************************************************!*\
  !*** external "@material-ui/icons/CheckCircle" ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CheckCircle");

/***/ }),
/* 100 */
/*!****************************************************!*\
  !*** external "@material-ui/icons/DoNotDisturbOn" ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DoNotDisturbOn");

/***/ }),
/* 101 */
/*!***********************************************!*\
  !*** external "@material-ui/icons/ExitToApp" ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExitToApp");

/***/ }),
/* 102 */
/*!******************************************!*\
  !*** external "@material-ui/core/Badge" ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),
/* 103 */
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),
/* 104 */
/*!***********************************************!*\
  !*** ./src/app/components/Sidebar/Sidebar.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _classnames = __webpack_require__(/*! classnames */ 11);

var _classnames2 = _interopRequireDefault(_classnames);

var _Hidden = __webpack_require__(/*! @material-ui/core/Hidden */ 44);

var _Hidden2 = _interopRequireDefault(_Hidden);

var _Drawer = __webpack_require__(/*! @material-ui/core/Drawer */ 105);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _SwipeableDrawer = __webpack_require__(/*! @material-ui/core/SwipeableDrawer */ 106);

var _SwipeableDrawer2 = _interopRequireDefault(_SwipeableDrawer);

var _List = __webpack_require__(/*! @material-ui/core/List */ 52);

var _List2 = _interopRequireDefault(_List);

var _Divider = __webpack_require__(/*! @material-ui/core/Divider */ 28);

var _Divider2 = _interopRequireDefault(_Divider);

var _Avatar = __webpack_require__(/*! @material-ui/core/Avatar */ 27);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _brand = __webpack_require__(/*! ../../constants/brand.js */ 18);

var _brand2 = _interopRequireDefault(_brand);

var _dummyContents = __webpack_require__(/*! ../../constants/dummyContents.js */ 48);

var _dummyContents2 = _interopRequireDefault(_dummyContents);

var _logo = __webpack_require__(/*! ../../../../static/images/logo.svg */ 107);

var _logo2 = _interopRequireDefault(_logo);

var _MainMenu = __webpack_require__(/*! ./MainMenu */ 108);

var _MainMenu2 = _interopRequireDefault(_MainMenu);

var _OtherMenu = __webpack_require__(/*! ./OtherMenu */ 112);

var _OtherMenu2 = _interopRequireDefault(_OtherMenu);

var _sidebarJss = __webpack_require__(/*! ./sidebar-jss */ 55);

var _sidebarJss2 = _interopRequireDefault(_sidebarJss);

var _reactRedux = __webpack_require__(/*! react-redux */ 6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuContent = function MenuContent(props) {
  var classes = props.classes,
      turnDarker = props.turnDarker,
      drawerPaper = props.drawerPaper,
      toggleDrawerOpen = props.toggleDrawerOpen,
      loadTransition = props.loadTransition,
      user = props.user;

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(classes.drawerInner, !drawerPaper ? classes.drawerPaperClose : '') },
    _react2.default.createElement(
      'div',
      { className: classes.drawerHeader },
      _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(classes.brand, classes.brandBar, turnDarker && classes.darker) },
        _react2.default.createElement('img', { src: _logo2.default, alt: _brand2.default.name }),
        _react2.default.createElement(
          'h3',
          null,
          _brand2.default.name
        )
      ),
      _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(classes.profile, classes.user) },
        _react2.default.createElement(_Avatar2.default, {
          alt: user.get('full_name'),
          src: user.get('picture'),
          className: (0, _classnames2.default)(classes.avatar, classes.bigAvatar)
        }),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h4',
            null,
            user.get('full_name')
          ),
          _react2.default.createElement(
            'span',
            null,
            _dummyContents2.default.user.title
          )
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: classes.menuContainer },
      _react2.default.createElement(_MainMenu2.default, { loadTransition: loadTransition, toggleDrawerOpen: toggleDrawerOpen }),
      _react2.default.createElement(_Divider2.default, { className: classes.divider }),
      _react2.default.createElement(
        _List2.default,
        null,
        _react2.default.createElement(_OtherMenu2.default, { toggleDrawerOpen: toggleDrawerOpen })
      )
    )
  );
};

MenuContent.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  drawerPaper: _propTypes2.default.bool.isRequired,
  turnDarker: _propTypes2.default.bool,
  toggleDrawerOpen: _propTypes2.default.func,
  loadTransition: _propTypes2.default.func,
  user: _propTypes2.default.object.isRequired
};

MenuContent.defaultProps = {
  turnDarker: false
};

MenuContent.defaultProps = {
  toggleDrawerOpen: function toggleDrawerOpen() {},
  loadTransition: function loadTransition() {}
};

var MenuContentStyle = (0, _styles.withStyles)(_sidebarJss2.default)(MenuContent);

var Sidebar = function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Sidebar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      anchor: 'left'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Sidebar, [{
    key: 'render',
    value: function render() {
      var anchor = this.state.anchor;
      var _props = this.props,
          classes = _props.classes,
          open = _props.open,
          toggleDrawerOpen = _props.toggleDrawerOpen,
          loadTransition = _props.loadTransition,
          turnDarker = _props.turnDarker,
          user = _props.user;

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          _Hidden2.default,
          { lgUp: true },
          _react2.default.createElement(
            _SwipeableDrawer2.default,
            {
              onClose: toggleDrawerOpen,
              onOpen: toggleDrawerOpen,
              open: !open,
              anchor: anchor
            },
            _react2.default.createElement(MenuContentStyle, { user: user, drawerPaper: true, toggleDrawerOpen: toggleDrawerOpen, loadTransition: loadTransition })
          )
        ),
        _react2.default.createElement(
          _Hidden2.default,
          { mdDown: true },
          _react2.default.createElement(
            _Drawer2.default,
            {
              variant: 'permanent',
              onClose: toggleDrawerOpen,
              classes: {
                paper: (0, _classnames2.default)(classes.drawer, classes.drawerPaper, !open ? classes.drawerPaperClose : '')
              },
              open: open,
              anchor: anchor
            },
            _react2.default.createElement(MenuContentStyle, { user: user, drawerPaper: open, turnDarker: turnDarker, loadTransition: loadTransition })
          )
        )
      );
    }
  }]);

  return Sidebar;
}(_react2.default.Component);

Sidebar.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  toggleDrawerOpen: _propTypes2.default.func.isRequired,
  loadTransition: _propTypes2.default.func.isRequired,
  turnDarker: _propTypes2.default.bool.isRequired,
  open: _propTypes2.default.bool.isRequired,
  user: _propTypes2.default.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    force: state,
    user: state.getIn(['userInfo', 'user'])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

var SidebarMapped = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Sidebar);

exports.default = (0, _styles.withStyles)(_sidebarJss2.default)(SidebarMapped);

/***/ }),
/* 105 */
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),
/* 106 */
/*!****************************************************!*\
  !*** external "@material-ui/core/SwipeableDrawer" ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SwipeableDrawer");

/***/ }),
/* 107 */
/*!********************************!*\
  !*** ./static/images/logo.svg ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgaGVpZ2h0PSIxMTBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTEwIDExMDsiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDExMCAxMTAiIHdpZHRoPSIxMTBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGcgaWQ9IkFydGJvYXJkIi8+PGcgaWQ9Ik11bHRpY29sb3IiPjxjaXJjbGUgY3g9IjU1IiBjeT0iNTUiIHI9IjU1IiBzdHlsZT0iZmlsbDojRkFCQzNEOyIvPjxnPjxnPjxwYXRoIGQ9Ik03OSwzMWMwLTQuNDE4LTMuNTgyLTgtOC04SDM5Yy00LjQxOCwwLTgsMy41ODItOCw4djUwYzAsMS4xMDUsMC44OTUsMiwyLDJoNDQgICAgIGMxLjEwNSwwLDItMC44OTUsMi0yVjMxeiIgc3R5bGU9ImZpbGw6I0RGMkMyQzsiLz48L2c+PGc+PHBhdGggZD0iTTc2LjE5OCwyNC45MjZDNzQuNzk5LDIzLjcyOCw3Mi45ODYsMjMsNzEsMjNIMzljLTQuNDE4LDAtOCwzLjU4Mi04LDh2MzkuMTI0TDc2LjE5OCwyNC45MjZ6IiBzdHlsZT0iZmlsbDojRkE1NjU1OyIvPjwvZz48Zz48cGF0aCBkPSJNMzEsODN2MmMwLDEuMTA0LDAuODk2LDIsMiwyaDhjMS4xMDQsMCwyLTAuODk2LDItMnYtMkgzMXoiIHN0eWxlPSJmaWxsOiMzRTNFM0Y7Ii8+PC9nPjxnPjxwYXRoIGQ9Ik02Nyw4NWMwLDEuMTA0LDAuODk2LDIsMiwyaDhjMS4xMDQsMCwyLTAuODk2LDItMnYtMkg2N1Y4NXoiIHN0eWxlPSJmaWxsOiMzRTNFM0Y7Ii8+PC9nPjxnPjxwYXRoIGQ9Ik04MSw3NGMwLTIuMjA5LTEuNzkxLTQtNC00aC05bC0yLjQ0Ny0yLjg5NEM2NS4yMTQsNjYuNDI4LDY0LjUyMSw2Niw2My43NjQsNjZINDYuMjM2ICAgICBjLTAuNzU4LDAtMS40NSwwLjQyOC0xLjc4OSwxLjEwNkw0Miw3MGgtOWMtMi4yMDksMC00LDEuNzkxLTQsNHY3YzAsMS4xMDUsMC44OTUsMiwyLDJoNDhjMS4xMDUsMCwyLTAuODk1LDItMlY3NHoiIHN0eWxlPSJmaWxsOiNGQTU2NTU7Ii8+PC9nPjxnPjxwYXRoIGQ9Ik01NCw2OWgtN2MtMS4xMDQsMC0yLDAuODk2LTIsMnY3YzAsMS4xMDQsMC44OTYsMiwyLDJoN1Y2OXoiIHN0eWxlPSJmaWxsOiNCRjAzMDI7Ii8+PC9nPjxnPjxwYXRoIGQ9Ik01Niw2OWg3YzEuMTA0LDAsMiwwLjg5NiwyLDJ2N2MwLDEuMTA0LTAuODk2LDItMiwyaC03VjY5eiIgc3R5bGU9ImZpbGw6I0JGMDMwMjsiLz48L2c+PGc+PGNpcmNsZSBjeD0iMzciIGN5PSI3NyIgcj0iMyIgc3R5bGU9ImZpbGw6I0ZCRTE1ODsiLz48L2c+PGc+PGNpcmNsZSBjeD0iNzIiIGN5PSI3NyIgcj0iMyIgc3R5bGU9ImZpbGw6I0ZCRTE1ODsiLz48L2c+PGc+PHJlY3QgaGVpZ2h0PSIyIiBzdHlsZT0iZmlsbDojRTJFNEU1OyIgd2lkdGg9IjQ4IiB4PSIzMSIgeT0iNDciLz48L2c+PGc+PHBvbHlnb24gcG9pbnRzPSI1NC4xMjQsNDcgMzEsNDcgMzEsNDkgNTIuMTI0LDQ5ICAgICIgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiLz48L2c+PGc+PHBhdGggZD0iTTc1LDQ5SDU3djEyYzAsMS4xMDUsMC44OTUsMiwyLDJoMTRjMS4xMDUsMCwyLTAuODk1LDItMlY0OXoiIHN0eWxlPSJmaWxsOiM0MEM5RTc7Ii8+PC9nPjxnPjxwYXRoIGQ9Ik0zNSwzN2MwLDEuMTA1LDAuODk1LDIsMiwyaDE0YzEuMTA1LDAsMi0wLjg5NSwyLTJ2LThjMC0xLjEwNS0wLjg5NS0yLTItMkgzNyAgICAgYy0xLjEwNSwwLTIsMC44OTUtMiwyVjM3eiIgc3R5bGU9ImZpbGw6IzZGREFGMTsiLz48L2c+PGc+PHBhdGggZD0iTTU3LDM3YzAsMS4xMDUsMC44OTUsMiwyLDJoMTRjMS4xMDUsMCwyLTAuODk1LDItMnYtOGMwLTEuMTA1LTAuODk1LTItMi0ySDU5ICAgICBjLTEuMTA1LDAtMiwwLjg5NS0yLDJWMzd6IiBzdHlsZT0iZmlsbDojNDBDOUU3OyIvPjwvZz48Zz48cGF0aCBkPSJNNzMsMjdINTljLTEuMTA0LDAtMiwwLjg5Ni0yLDJ2OGMwLDEuMTA0LDAuODk2LDIsMiwyaDMuMTI0TDczLjksMjcuMjIzICAgICBDNzMuNjI4LDI3LjA4NSw3My4zMjYsMjcsNzMsMjd6IiBzdHlsZT0iZmlsbDojNkZEQUYxOyIvPjwvZz48Zz48cGF0aCBkPSJNNzIsNzQuMDQ0Yy0xLjY1NywwLTMsMS4zNDMtMywzYzAsMC43NTEsMC4yODYsMS40MywwLjc0MiwxLjk1Nmw0LjIxNC00LjIxNCAgICAgQzczLjQzLDc0LjMzLDcyLjc1MSw3NC4wNDQsNzIsNzQuMDQ0eiIgc3R5bGU9ImZpbGw6I0ZCRUM5QTsiLz48L2c+PGc+PHBhdGggZD0iTTM3LDc0Yy0xLjY1NywwLTMsMS4zNDMtMywzYzAsMC43NTEsMC4yODYsMS40MywwLjc0MiwxLjk1Nmw0LjIxNC00LjIxNCAgICAgQzM4LjQzLDc0LjI4NiwzNy43NTEsNzQsMzcsNzR6IiBzdHlsZT0iZmlsbDojRkJFQzlBOyIvPjwvZz48cmVjdCBoZWlnaHQ9IjgiIHN0eWxlPSJmaWxsOiM0MEM5RTc7IiB3aWR0aD0iMTgiIHg9IjM1IiB5PSI0OSIvPjxwYXRoIGQ9Ik0zNSw2MWMwLDEuMTA0LDAuODk2LDIsMiwyaDE0YzEuMTA0LDAsMi0wLjg5NiwyLTJ2LTJIMzVWNjF6IiBzdHlsZT0iZmlsbDojNDBDOUU3OyIvPjxwb2x5Z29uIHBvaW50cz0iNDQuMTI0LDU3IDUyLjEyNCw0OSAzNSw0OSAzNSw1NyAgICIgc3R5bGU9ImZpbGw6IzZGREFGMTsiLz48cGF0aCBkPSJNMzUsNTl2MmMwLDEuMTA0LDAuODk2LDIsMiwyaDEuMTI0bDQtNEgzNXoiIHN0eWxlPSJmaWxsOiM2RkRBRjE7Ii8+PC9nPjwvZz48L3N2Zz4="

/***/ }),
/* 108 */
/*!************************************************!*\
  !*** ./src/app/components/Sidebar/MainMenu.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _classnames = __webpack_require__(/*! classnames */ 11);

var _classnames2 = _interopRequireDefault(_classnames);

var _redux = __webpack_require__(/*! redux */ 9);

var _reactRedux = __webpack_require__(/*! react-redux */ 6);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ 17);

var _List = __webpack_require__(/*! @material-ui/core/List */ 52);

var _List2 = _interopRequireDefault(_List);

var _ListItem = __webpack_require__(/*! @material-ui/core/ListItem */ 53);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemIcon = __webpack_require__(/*! @material-ui/core/ListItemIcon */ 47);

var _ListItemIcon2 = _interopRequireDefault(_ListItemIcon);

var _ListItemText = __webpack_require__(/*! @material-ui/core/ListItemText */ 37);

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _Collapse = __webpack_require__(/*! @material-ui/core/Collapse */ 109);

var _Collapse2 = _interopRequireDefault(_Collapse);

var _Icon = __webpack_require__(/*! @material-ui/core/Icon */ 39);

var _Icon2 = _interopRequireDefault(_Icon);

var _ExpandLess = __webpack_require__(/*! @material-ui/icons/ExpandLess */ 110);

var _ExpandLess2 = _interopRequireDefault(_ExpandLess);

var _ExpandMore = __webpack_require__(/*! @material-ui/icons/ExpandMore */ 111);

var _ExpandMore2 = _interopRequireDefault(_ExpandMore);

var _menu = __webpack_require__(/*! ../../constants/menu.js */ 54);

var _menu2 = _interopRequireDefault(_menu);

var _sidebarJss = __webpack_require__(/*! ./sidebar-jss */ 55);

var _sidebarJss2 = _interopRequireDefault(_sidebarJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// Import icon

// Menu Object


var MainMenu = function (_React$Component) {
  _inherits(MainMenu, _React$Component);

  function MainMenu() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MainMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MainMenu.__proto__ || Object.getPrototypeOf(MainMenu)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      dense: true
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MainMenu, [{
    key: 'handleClick',
    value: function handleClick() {
      this.props.toggleDrawerOpen();
      this.props.loadTransition(false);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          openSubMenu = _props.openSubMenu,
          open = _props.open;
      var dense = this.state.dense;

      var getMenus = function getMenus(menuArray) {
        return menuArray.map(function (item, index) {
          if (item.child) {
            return _react2.default.createElement(
              'div',
              { key: index.toString() },
              _react2.default.createElement(
                _ListItem2.default,
                {
                  button: true,
                  className: (0, _classnames2.default)(classes.head, open.indexOf(item.key) > -1 ? classes.opened : ''),
                  onClick: function onClick() {
                    return openSubMenu(item.key, item.keyParent);
                  }
                },
                item.icon && _react2.default.createElement(
                  _ListItemIcon2.default,
                  null,
                  _react2.default.createElement(
                    _Icon2.default,
                    { className: classes.icon },
                    item.icon
                  )
                ),
                _react2.default.createElement(_ListItemText2.default, { classes: { primary: classes.primary }, inset: true, primary: item.name }),
                open.indexOf(item.key) > -1 ? _react2.default.createElement(_ExpandLess2.default, null) : _react2.default.createElement(_ExpandMore2.default, null)
              ),
              _react2.default.createElement(
                _Collapse2.default,
                {
                  component: 'li',
                  className: (0, _classnames2.default)(classes.nolist, item.keyParent ? classes.child : ''),
                  'in': open.indexOf(item.key) > -1,
                  timeout: 'auto',
                  unmountOnExit: true
                },
                _react2.default.createElement(
                  'div',
                  { style: { marginLeft: '25px' } },
                  _react2.default.createElement(
                    _List2.default,
                    { className: classes.dense, dense: dense },
                    getMenus(item.child)
                  )
                )
              )
            );
          }
          return _react2.default.createElement(
            _ListItem2.default,
            {
              key: index.toString(),
              button: true,
              exact: true,
              className: classes.nested,
              activeClassName: classes.active,
              component: _reactRouterDom.NavLink,
              to: item.link,
              onClick: function onClick() {
                return _this2.handleClick();
              }
            },
            item.icon && _react2.default.createElement(
              _ListItemIcon2.default,
              null,
              _react2.default.createElement(
                _Icon2.default,
                { className: classes.icon },
                item.icon
              )
            ),
            _react2.default.createElement(_ListItemText2.default, { classes: { primary: classes.primary }, inset: true, primary: item.name })
          );
        });
      };
      return _react2.default.createElement(
        'div',
        null,
        getMenus(_menu2.default)
      );
    }
  }]);

  return MainMenu;
}(_react2.default.Component);

MainMenu.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  open: _propTypes2.default.object.isRequired,
  openSubMenu: _propTypes2.default.func.isRequired,
  toggleDrawerOpen: _propTypes2.default.func.isRequired,
  loadTransition: _propTypes2.default.func.isRequired
};

var openAction = function openAction(key, keyParent) {
  return { type: 'OPEN_SUBMENU', key: key, keyParent: keyParent };
};
var reducer = 'ui';

var mapStateToProps = function mapStateToProps(state) {
  return {
    force: state, // force active class for sidebar menu
    open: state.getIn([reducer, 'subMenuOpen'])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    openSubMenu: (0, _redux.bindActionCreators)(openAction, dispatch)
  };
};

var MainMenuMapped = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MainMenu);

exports.default = (0, _styles.withStyles)(_sidebarJss2.default)(MainMenuMapped);

/***/ }),
/* 109 */
/*!*********************************************!*\
  !*** external "@material-ui/core/Collapse" ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Collapse");

/***/ }),
/* 110 */
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandLess" ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandLess");

/***/ }),
/* 111 */
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandMore" ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),
/* 112 */
/*!*************************************************!*\
  !*** ./src/app/components/Sidebar/OtherMenu.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ 17);

var _ListItem = __webpack_require__(/*! @material-ui/core/ListItem */ 53);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemText = __webpack_require__(/*! @material-ui/core/ListItemText */ 37);

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _otherMenu = __webpack_require__(/*! ../../constants/otherMenu.js */ 113);

var _otherMenu2 = _interopRequireDefault(_otherMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OtherMenu = function (_React$Component) {
  _inherits(OtherMenu, _React$Component);

  function OtherMenu() {
    _classCallCheck(this, OtherMenu);

    return _possibleConstructorReturn(this, (OtherMenu.__proto__ || Object.getPrototypeOf(OtherMenu)).apply(this, arguments));
  }

  _createClass(OtherMenu, [{
    key: 'render',
    value: function render() {
      var toggleDrawerOpen = this.props.toggleDrawerOpen;

      var getOtherMenu = function getOtherMenu(menuArray) {
        return menuArray.map(function (item, index) {
          var keyIndex = index.toString();
          return _react2.default.createElement(
            'div',
            { key: keyIndex },
            _react2.default.createElement(
              _ListItem2.default,
              {
                button: true,
                component: _reactRouterDom.NavLink,
                to: item.link,
                onClick: toggleDrawerOpen
              },
              _react2.default.createElement(_ListItemText2.default, { secondary: item.name })
            )
          );
        });
      };

      return _react2.default.createElement(
        'div',
        null,
        getOtherMenu(_otherMenu2.default)
      );
    }
  }]);

  return OtherMenu;
}(_react2.default.Component);

OtherMenu.propTypes = {
  toggleDrawerOpen: _propTypes2.default.func.isRequired
};

exports.default = OtherMenu;

/***/ }),
/* 113 */
/*!****************************************!*\
  !*** ./src/app/constants/otherMenu.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [{
  key: 'settings',
  name: 'Settings',
  link: '/#'
}, {
  key: 'help_support',
  name: 'Help & Support',
  link: '/#'
}];

/***/ }),
/* 114 */
/*!*********************************************!*\
  !*** ./src/app/components/Footer/Footer.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _Footer = __webpack_require__(/*! ./Footer.scss */ 115);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react2.default.createElement(
    'div',
    { className: _Footer2.default.Footer },
    'Footer'
  );
};

exports.default = Footer;

/***/ }),
/* 115 */
/*!***********************************************!*\
  !*** ./src/app/components/Footer/Footer.scss ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {
	"Footer": "Footer__2Zekj"
};

/***/ }),
/* 116 */
/*!*****************************************************!*\
  !*** ./src/app/components/BreadCrumb/BreadCrumb.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _classnames = __webpack_require__(/*! classnames */ 11);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ 17);

var _breadCrumbJss = __webpack_require__(/*! ./breadCrumb-jss */ 117);

var _breadCrumbJss2 = _interopRequireDefault(_breadCrumbJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Breadcrumbs = function Breadcrumbs(props) {
  var classes = props.classes,
      theme = props.theme,
      separator = props.separator,
      location = props.location;

  return _react2.default.createElement(
    'section',
    { className: (0, _classnames2.default)(theme === 'dark' ? classes.dark : classes.light, classes.breadcrumbs) },
    _react2.default.createElement(_reactRouterDom.Route, {
      path: '*',
      render: function render() {
        var parts = location.pathname.split('/');
        var place = parts[parts.length - 1];
        parts = parts.slice(1, parts.length - 1);
        return _react2.default.createElement(
          'p',
          null,
          'You are here:',
          _react2.default.createElement(
            'span',
            null,
            parts.map(function (part, partIndex) {
              var path = [''].concat(_toConsumableArray(parts.slice(0, partIndex + 1))).join('/');
              return _react2.default.createElement(
                _react.Fragment,
                { key: path },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: path },
                  part
                ),
                separator
              );
            }),
            '\xA0',
            place
          )
        );
      }
    })
  );
};

Breadcrumbs.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.object.isRequired,
  theme: _propTypes2.default.string.isRequired,
  separator: _propTypes2.default.string.isRequired
};

exports.default = (0, _styles.withStyles)(_breadCrumbJss2.default)(Breadcrumbs);

/***/ }),
/* 117 */
/*!*********************************************************!*\
  !*** ./src/app/components/BreadCrumb/breadCrumb-jss.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var styles = function styles(theme) {
  return {
    dark: {},
    breadcrumbs: {
      position: 'relative',
      display: 'block',
      fontSize: 12,
      color: 'rgba(255, 255, 255, 0.5)',
      '& p': {
        display: 'block',
        '& span': {
          textTransform: 'capitalize',
          marginLeft: 5
        },
        '& a': {
          color: theme.palette.common.white,
          textDecoration: 'none',
          margin: '0 5px'
        }
      },
      '&$dark': {
        color: theme.palette.grey[900],
        '& a': {
          color: theme.palette.grey[900]
        }
      }
    }
  };
};

exports.default = styles;

/***/ }),
/* 118 */
/*!************************************************!*\
  !*** ./src/app/components/Route/RouteTable.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ 10);

var _Paper2 = _interopRequireDefault(_Paper);

var _redux = __webpack_require__(/*! redux */ 9);

var _TablePagination = __webpack_require__(/*! @material-ui/core/TablePagination */ 14);

var _TablePagination2 = _interopRequireDefault(_TablePagination);

var _reactRedux = __webpack_require__(/*! react-redux */ 6);

var _RouteActions = __webpack_require__(/*! ../../actions/RouteActions */ 119);

var _styles2 = __webpack_require__(/*! ../../constants/styles.js */ 7);

var _ = __webpack_require__(/*! ../ */ 3);

var _route = __webpack_require__(/*! ../../constants/route */ 56);

var _route2 = _interopRequireDefault(_route);

var _show = __webpack_require__(/*! ../../constants/show.js */ 4);

var _show2 = _interopRequireDefault(_show);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Reducer Branch
var branch = 'routeTable';

var RouteTable = function (_Component) {
  _inherits(RouteTable, _Component);

  function RouteTable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RouteTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RouteTable.__proto__ || Object.getPrototypeOf(RouteTable)).call.apply(_ref, [this].concat(args))), _this), _this.handleChangePage = function (event, page) {}, _this.handleChangeRowsPerPage = function (event) {
      //  show(event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RouteTable, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          fetchData = _props.fetchData,
          addEmptyRow = _props.addEmptyRow,
          content = _props.content,
          removeRow = _props.removeRow,
          updateRow = _props.updateRow,
          editRow = _props.editRow,
          finishEditRow = _props.finishEditRow,
          closeNotif = _props.closeNotif,
          messageNotif = _props.messageNotif,
          paging = _props.paging;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_.Notification, { close: function close() {
            return closeNotif(branch);
          }, message: messageNotif }),
        _react2.default.createElement(
          _Paper2.default,
          { className: classes.root },
          _react2.default.createElement(_.CrudTable, {
            dataInit: content,
            anchor: _route2.default.table.columns,
            title: _route2.default.table.title,
            dataTable: content,
            fetchData: fetchData,
            addEmptyRow: addEmptyRow,
            removeRow: removeRow,
            updateRow: updateRow,
            editRow: editRow,
            finishEditRow: finishEditRow,
            branch: branch
          }),
          _react2.default.createElement(_TablePagination2.default, {
            component: 'div',
            count: paging.get('total_elements'),
            rowsPerPage: paging.get('size') > paging.get('total_elements') ? paging.get('total_elements') : paging.get('size'),
            page: paging.get('number'),
            backIconButtonProps: {
              'aria-label': 'Previous Page'
            },
            nextIconButtonProps: {
              'aria-label': 'Next Page'
            },
            onChangePage: this.handleChangePage,
            onChangeRowsPerPage: this.handleChangeRowsPerPage
          })
        )
      );
    }
  }]);

  return RouteTable;
}(_react.Component);

RouteTable.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  fetchData: _propTypes2.default.func.isRequired,
  content: _propTypes2.default.object.isRequired,
  paging: _propTypes2.default.object.isRequired,
  addEmptyRow: _propTypes2.default.func.isRequired,
  removeRow: _propTypes2.default.func.isRequired,
  updateRow: _propTypes2.default.func.isRequired,
  editRow: _propTypes2.default.func.isRequired,
  finishEditRow: _propTypes2.default.func.isRequired,
  closeNotif: _propTypes2.default.func.isRequired,
  messageNotif: _propTypes2.default.string.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    force: state, // force state from reducer
    content: state.getIn([branch, 'content']),
    messageNotif: state.getIn([branch, 'notifMsg']),
    paging: state.getIn([branch, 'paging'])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchData: (0, _redux.bindActionCreators)(_RouteActions.fetchAction, dispatch),
    addEmptyRow: (0, _redux.bindActionCreators)(_RouteActions.addAction, dispatch),
    removeRow: (0, _redux.bindActionCreators)(_RouteActions.removeAction, dispatch),
    updateRow: (0, _redux.bindActionCreators)(_RouteActions.updateAction, dispatch),
    editRow: (0, _redux.bindActionCreators)(_RouteActions.editAction, dispatch),
    finishEditRow: (0, _redux.bindActionCreators)(_RouteActions.saveAction, dispatch),
    closeNotif: (0, _redux.bindActionCreators)(_RouteActions.closeNotifAction, dispatch)
  };
};

var RouteTableMapped = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(RouteTable);

exports.default = (0, _styles.withStyles)(_styles2.styles)(RouteTableMapped);

/***/ }),
/* 119 */
/*!*****************************************!*\
  !*** ./src/app/actions/RouteActions.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeNotifAction = exports.saveAction = exports.editAction = exports.updateAction = exports.removeAction = exports.addAction = exports.fetchAction = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _show = __webpack_require__(/*! ../constants/show.js */ 4);

var _show2 = _interopRequireDefault(_show);

var _actionTypes = __webpack_require__(/*! ./actionTypes */ 5);

var types = _interopRequireWildcard(_actionTypes);

var _crossFetch = __webpack_require__(/*! cross-fetch */ 15);

var _crossFetch2 = _interopRequireDefault(_crossFetch);

var _api = __webpack_require__(/*! ../constants/urls/api */ 16);

var _header = __webpack_require__(/*! ../constants/request/header */ 25);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchAction = exports.fetchAction = function fetchAction(items, branch) {
  (0, _show2.default)(branch);
  return function (dispatch) {
    (0, _crossFetch2.default)(_api.ROUTE_URL, {
      method: _header.Method.GET
    }).then(function (resp) {
      return resp.json();
    }).then(function (data) {
      // show(data.content[0].stations.length);

      var content = data.content.map(function (item) {
        return _extends({}, item, { stations: item.stations ? item.stations.length : 2, active: true });
      });

      // show(content);

      dispatch({
        branch: branch,
        type: branch + '/' + types.FETCH_DATA,
        content: content,
        paging: {
          total_pages: data.total_pages,
          total_elements: data.total_elements,
          last: data.last,
          first: data.first,
          number_of_elements: data.number_of_elements,
          size: data.size,
          number: data.number
        }
      });
    });
  };
};
var addAction = exports.addAction = function addAction(anchor, branch) {
  return {
    branch: branch,
    type: branch + '/' + types.ADD_EMPTY_ROW,
    anchor: anchor
  };
};
var removeAction = exports.removeAction = function removeAction(item, branch) {
  return {
    branch: branch,
    type: branch + '/' + types.REMOVE_ROW,
    item: item
  };
};
var updateAction = exports.updateAction = function updateAction(event, item, branch) {
  return {
    branch: branch,
    type: branch + '/' + types.UPDATE_ROW,
    event: event,
    item: item
  };
};
var editAction = exports.editAction = function editAction(item, branch) {
  return {
    branch: branch,
    type: branch + '/' + types.EDIT_ROW,
    item: item
  };
};
var saveAction = exports.saveAction = function saveAction(item, branch) {
  return {
    branch: branch,
    type: branch + '/' + types.SAVE_ROW,
    item: item
  };
};
var closeNotifAction = exports.closeNotifAction = function closeNotifAction(branch) {
  return {
    branch: branch,
    type: branch + '/' + types.CLOSE_NOTIF
  };
};

/***/ }),
/* 120 */
/*!************************************************************!*\
  !*** ./src/app/components/Transporter/TransporterTable.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ 10);

var _Paper2 = _interopRequireDefault(_Paper);

var _redux = __webpack_require__(/*! redux */ 9);

var _reactRedux = __webpack_require__(/*! react-redux */ 6);

var _TransporterActions = __webpack_require__(/*! ../../actions/TransporterActions */ 121);

var _styles2 = __webpack_require__(/*! ../../constants/styles.js */ 7);

var _TablePagination = __webpack_require__(/*! @material-ui/core/TablePagination */ 14);

var _TablePagination2 = _interopRequireDefault(_TablePagination);

var _ = __webpack_require__(/*! ../ */ 3);

var _transporter = __webpack_require__(/*! ../../constants/transporter */ 57);

var _transporter2 = _interopRequireDefault(_transporter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Reducer Branch
var branch = 'transporterTable';

var TransporterTable = function (_Component) {
  _inherits(TransporterTable, _Component);

  function TransporterTable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TransporterTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TransporterTable.__proto__ || Object.getPrototypeOf(TransporterTable)).call.apply(_ref, [this].concat(args))), _this), _this.handleChangePage = function (event, page) {}, _this.handleChangeRowsPerPage = function (event) {
      //  show(event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TransporterTable, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          fetchData = _props.fetchData,
          addEmptyRow = _props.addEmptyRow,
          content = _props.content,
          removeRow = _props.removeRow,
          updateRow = _props.updateRow,
          editRow = _props.editRow,
          finishEditRow = _props.finishEditRow,
          closeNotif = _props.closeNotif,
          messageNotif = _props.messageNotif,
          paging = _props.paging;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_.Notification, { close: function close() {
            return closeNotif(branch);
          }, message: messageNotif }),
        _react2.default.createElement(
          _Paper2.default,
          { className: classes.root },
          _react2.default.createElement(_.CrudTable, {
            dataInit: content,
            anchor: _transporter2.default.table.columns,
            title: _transporter2.default.table.title,
            dataTable: content,
            fetchData: fetchData,
            addEmptyRow: addEmptyRow,
            removeRow: removeRow,
            updateRow: updateRow,
            editRow: editRow,
            finishEditRow: finishEditRow,
            branch: branch
          }),
          _react2.default.createElement(_TablePagination2.default, {
            component: 'div',
            count: paging.get('total_elements'),
            rowsPerPage: paging.get('size') > paging.get('total_elements') ? paging.get('total_elements') : paging.get('size'),
            page: paging.get('number'),
            backIconButtonProps: {
              'aria-label': 'Previous Page'
            },
            nextIconButtonProps: {
              'aria-label': 'Next Page'
            },
            onChangePage: this.handleChangePage,
            onChangeRowsPerPage: this.handleChangeRowsPerPage
          })
        )
      );
    }
  }]);

  return TransporterTable;
}(_react.Component);

TransporterTable.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  fetchData: _propTypes2.default.func.isRequired,
  content: _propTypes2.default.object.isRequired,
  paging: _propTypes2.default.object.isRequired,
  addEmptyRow: _propTypes2.default.func.isRequired,
  removeRow: _propTypes2.default.func.isRequired,
  updateRow: _propTypes2.default.func.isRequired,
  editRow: _propTypes2.default.func.isRequired,
  finishEditRow: _propTypes2.default.func.isRequired,
  closeNotif: _propTypes2.default.func.isRequired,
  messageNotif: _propTypes2.default.string.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    force: state, // force state from reducer
    content: state.getIn([branch, 'content']),
    messageNotif: state.getIn([branch, 'notifMsg']),
    paging: state.getIn([branch, 'paging'])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchData: (0, _redux.bindActionCreators)(_TransporterActions.fetchAction, dispatch),
    addEmptyRow: (0, _redux.bindActionCreators)(_TransporterActions.addAction, dispatch),
    removeRow: (0, _redux.bindActionCreators)(_TransporterActions.removeAction, dispatch),
    updateRow: (0, _redux.bindActionCreators)(_TransporterActions.updateAction, dispatch),
    editRow: (0, _redux.bindActionCreators)(_TransporterActions.editAction, dispatch),
    finishEditRow: (0, _redux.bindActionCreators)(_TransporterActions.saveAction, dispatch),
    closeNotif: (0, _redux.bindActionCreators)(_TransporterActions.closeNotifAction, dispatch)
  };
};

var TransporterTableMapped = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TransporterTable);

exports.default = (0, _styles.withStyles)(_styles2.styles)(TransporterTableMapped);

/***/ }),
/* 121 */
/*!***********************************************!*\
  !*** ./src/app/actions/TransporterActions.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.closeNotifAction = exports.saveAction = exports.editAction = exports.updateAction = exports.removeAction = exports.addAction = exports.fetchAction = undefined;

var _show = __webpack_require__(/*! ../constants/show.js */ 4);

var _show2 = _interopRequireDefault(_show);

var _actionTypes = __webpack_require__(/*! ./actionTypes */ 5);

var types = _interopRequireWildcard(_actionTypes);

var _crossFetch = __webpack_require__(/*! cross-fetch */ 15);

var _crossFetch2 = _interopRequireDefault(_crossFetch);

var _api = __webpack_require__(/*! ../constants/urls/api */ 16);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchAction = exports.fetchAction = function fetchAction(items, branch) {
    (0, _show2.default)(branch);
    return function (dispatch) {
        (0, _crossFetch2.default)(_api.TRANPSPORTER_URL, {
            method: 'GET'
        }).then(function (resp) {
            return resp.json();
        }).then(function (data) {
            dispatch({
                branch: branch,
                type: branch + '/' + types.FETCH_DATA,
                content: data.content,
                paging: {
                    total_pages: data.total_pages,
                    total_elements: data.total_elements,
                    last: data.last,
                    first: data.first,
                    number_of_elements: data.number_of_elements,
                    size: data.size,
                    number: data.number
                }
            });
        });
    };
};

var addAction = exports.addAction = function addAction(anchor, branch) {
    return {
        branch: branch,
        type: branch + '/' + types.ADD_EMPTY_ROW,
        anchor: anchor
    };
};
var removeAction = exports.removeAction = function removeAction(item, branch) {
    return {
        branch: branch,
        type: branch + '/' + types.REMOVE_ROW,
        item: item
    };
};
var updateAction = exports.updateAction = function updateAction(event, item, branch) {
    return {
        branch: branch,
        type: branch + '/' + types.UPDATE_ROW,
        event: event,
        item: item
    };
};
var editAction = exports.editAction = function editAction(item, branch) {
    return {
        branch: branch,
        type: branch + '/' + types.EDIT_ROW,
        item: item
    };
};
var saveAction = exports.saveAction = function saveAction(item, branch) {
    return {
        branch: branch,
        type: branch + '/' + types.SAVE_ROW,
        item: item
    };
};
var closeNotifAction = exports.closeNotifAction = function closeNotifAction(branch) {
    return {
        branch: branch,
        type: branch + '/' + types.CLOSE_NOTIF
    };
};

/***/ }),
/* 122 */
/*!**************************************************!*\
  !*** ./src/app/components/Driver/DriverTable.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ 10);

var _Paper2 = _interopRequireDefault(_Paper);

var _redux = __webpack_require__(/*! redux */ 9);

var _reactRedux = __webpack_require__(/*! react-redux */ 6);

var _DriverActions = __webpack_require__(/*! ../../actions/DriverActions */ 123);

var _styles2 = __webpack_require__(/*! ../../constants/styles.js */ 7);

var _TablePagination = __webpack_require__(/*! @material-ui/core/TablePagination */ 14);

var _TablePagination2 = _interopRequireDefault(_TablePagination);

var _ = __webpack_require__(/*! ../ */ 3);

var _driver = __webpack_require__(/*! ../../constants/employee/driver */ 58);

var _driver2 = _interopRequireDefault(_driver);

var _show = __webpack_require__(/*! ../../constants/show.js */ 4);

var _show2 = _interopRequireDefault(_show);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Reducer branch
var branch = 'driverTable';

var DriverTable = function (_Component) {
  _inherits(DriverTable, _Component);

  function DriverTable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DriverTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DriverTable.__proto__ || Object.getPrototypeOf(DriverTable)).call.apply(_ref, [this].concat(args))), _this), _this.handleChangePage = function (event, page) {}, _this.handleChangeRowsPerPage = function (event) {
      //  show(event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DriverTable, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          fetchData = _props.fetchData,
          addEmptyRow = _props.addEmptyRow,
          content = _props.content,
          removeRow = _props.removeRow,
          updateRow = _props.updateRow,
          editRow = _props.editRow,
          finishEditRow = _props.finishEditRow,
          closeNotif = _props.closeNotif,
          messageNotif = _props.messageNotif,
          paging = _props.paging;

      (0, _show2.default)(content);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_.Notification, { close: function close() {
            return closeNotif(branch);
          }, message: messageNotif }),
        _react2.default.createElement(
          _Paper2.default,
          { className: classes.root },
          _react2.default.createElement(_.CrudTable, {
            dataInit: content,
            anchor: _driver2.default.table.columns,
            title: _driver2.default.table.title,
            dataTable: content,
            fetchData: fetchData,
            addEmptyRow: addEmptyRow,
            removeRow: removeRow,
            updateRow: updateRow,
            editRow: editRow,
            finishEditRow: finishEditRow,
            branch: branch
          }),
          _react2.default.createElement(_TablePagination2.default, {
            component: 'div',
            count: paging.get('total_elements'),
            rowsPerPage: paging.get('size') > paging.get('total_elements') ? paging.get('total_elements') : paging.get('size'),
            page: paging.get('number'),
            backIconButtonProps: {
              'aria-label': 'Previous Page'
            },
            nextIconButtonProps: {
              'aria-label': 'Next Page'
            },
            onChangePage: this.handleChangePage,
            onChangeRowsPerPage: this.handleChangeRowsPerPage
          })
        )
      );
    }
  }]);

  return DriverTable;
}(_react.Component);

DriverTable.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  fetchData: _propTypes2.default.func.isRequired,
  content: _propTypes2.default.object.isRequired,
  paging: _propTypes2.default.object.isRequired,
  addEmptyRow: _propTypes2.default.func.isRequired,
  removeRow: _propTypes2.default.func.isRequired,
  updateRow: _propTypes2.default.func.isRequired,
  editRow: _propTypes2.default.func.isRequired,
  finishEditRow: _propTypes2.default.func.isRequired,
  closeNotif: _propTypes2.default.func.isRequired,
  messageNotif: _propTypes2.default.string.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    force: state, // force state from reducer
    content: state.getIn([branch, 'content']),
    messageNotif: state.getIn([branch, 'notifMsg']),
    paging: state.getIn([branch, 'paging'])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchData: (0, _redux.bindActionCreators)(_DriverActions.fetchAction, dispatch),
    addEmptyRow: (0, _redux.bindActionCreators)(_DriverActions.addAction, dispatch),
    removeRow: (0, _redux.bindActionCreators)(_DriverActions.removeAction, dispatch),
    updateRow: (0, _redux.bindActionCreators)(_DriverActions.updateAction, dispatch),
    editRow: (0, _redux.bindActionCreators)(_DriverActions.editAction, dispatch),
    finishEditRow: (0, _redux.bindActionCreators)(_DriverActions.saveAction, dispatch),
    closeNotif: (0, _redux.bindActionCreators)(_DriverActions.closeNotifAction, dispatch)
  };
};

var DriverTableMapped = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DriverTable);

exports.default = (0, _styles.withStyles)(_styles2.styles)(DriverTableMapped);

/***/ }),
/* 123 */
/*!******************************************!*\
  !*** ./src/app/actions/DriverActions.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.closeNotifAction = exports.saveAction = exports.editAction = exports.updateAction = exports.removeAction = exports.addAction = exports.fetchAction = undefined;

var _show = __webpack_require__(/*! ../constants/show.js */ 4);

var _show2 = _interopRequireDefault(_show);

var _actionTypes = __webpack_require__(/*! ./actionTypes */ 5);

var types = _interopRequireWildcard(_actionTypes);

var _crossFetch = __webpack_require__(/*! cross-fetch */ 15);

var _crossFetch2 = _interopRequireDefault(_crossFetch);

var _api = __webpack_require__(/*! ../constants/urls/api */ 16);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchAction = exports.fetchAction = function fetchAction(items, branch) {
    (0, _show2.default)(branch);
    return function (dispatch) {
        (0, _crossFetch2.default)(_api.DRIVER_URL, {
            method: 'GET'
        }).then(function (resp) {
            return resp.json();
        }).then(function (data) {
            dispatch({
                branch: branch,
                type: branch + '/' + types.FETCH_DATA,
                content: data.content,
                paging: {
                    total_pages: data.total_pages,
                    total_elements: data.total_elements,
                    last: data.last,
                    first: data.first,
                    number_of_elements: data.number_of_elements,
                    size: data.size,
                    number: data.number
                }
            });
        });
    };
};

var addAction = exports.addAction = function addAction(anchor, branch) {
    return {
        branch: branch,
        type: branch + '/' + types.ADD_EMPTY_ROW,
        anchor: anchor
    };
};
var removeAction = exports.removeAction = function removeAction(item, branch) {
    return {
        branch: branch,
        type: branch + '/' + types.REMOVE_ROW,
        item: item
    };
};
var updateAction = exports.updateAction = function updateAction(event, item, branch) {
    return {
        branch: branch,
        type: branch + '/' + types.UPDATE_ROW,
        event: event,
        item: item
    };
};
var editAction = exports.editAction = function editAction(item, branch) {
    return {
        branch: branch,
        type: branch + '/' + types.EDIT_ROW,
        item: item
    };
};
var saveAction = exports.saveAction = function saveAction(item, branch) {
    return {
        branch: branch,
        type: branch + '/' + types.SAVE_ROW,
        item: item
    };
};
var closeNotifAction = exports.closeNotifAction = function closeNotifAction(branch) {
    return {
        branch: branch,
        type: branch + '/' + types.CLOSE_NOTIF
    };
};

/***/ }),
/* 124 */
/*!********************************************************!*\
  !*** ./src/app/components/Assistant/AssistantTable.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ 10);

var _Paper2 = _interopRequireDefault(_Paper);

var _redux = __webpack_require__(/*! redux */ 9);

var _reactRedux = __webpack_require__(/*! react-redux */ 6);

var _AssistantActions = __webpack_require__(/*! ../../actions/AssistantActions */ 125);

var _styles2 = __webpack_require__(/*! ../../constants/styles.js */ 7);

var _TablePagination = __webpack_require__(/*! @material-ui/core/TablePagination */ 14);

var _TablePagination2 = _interopRequireDefault(_TablePagination);

var _ = __webpack_require__(/*! .. */ 3);

var _assistant = __webpack_require__(/*! ../../constants/employee/assistant */ 59);

var _assistant2 = _interopRequireDefault(_assistant);

var _show = __webpack_require__(/*! ../../constants/show.js */ 4);

var _show2 = _interopRequireDefault(_show);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Reducer branch
var branch = 'assistantTable';

var AssistantTable = function (_Component) {
  _inherits(AssistantTable, _Component);

  function AssistantTable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AssistantTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AssistantTable.__proto__ || Object.getPrototypeOf(AssistantTable)).call.apply(_ref, [this].concat(args))), _this), _this.handleChangePage = function (event, page) {}, _this.handleChangeRowsPerPage = function (event) {
      //  show(event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AssistantTable, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          fetchData = _props.fetchData,
          addEmptyRow = _props.addEmptyRow,
          content = _props.content,
          removeRow = _props.removeRow,
          updateRow = _props.updateRow,
          editRow = _props.editRow,
          finishEditRow = _props.finishEditRow,
          closeNotif = _props.closeNotif,
          messageNotif = _props.messageNotif,
          paging = _props.paging;

      (0, _show2.default)(content);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_.Notification, { close: function close() {
            return closeNotif(branch);
          }, message: messageNotif }),
        _react2.default.createElement(
          _Paper2.default,
          { className: classes.root },
          _react2.default.createElement(_.CrudTable, {
            dataInit: content,
            anchor: _assistant2.default.table.columns,
            title: _assistant2.default.table.title,
            dataTable: content,
            fetchData: fetchData,
            addEmptyRow: addEmptyRow,
            removeRow: removeRow,
            updateRow: updateRow,
            editRow: editRow,
            finishEditRow: finishEditRow,
            branch: branch
          }),
          _react2.default.createElement(_TablePagination2.default, {
            component: 'div',
            count: paging.get('total_elements'),
            rowsPerPage: paging.get('size') > paging.get('total_elements') ? paging.get('total_elements') : paging.get('size'),
            page: paging.get('number'),
            backIconButtonProps: {
              'aria-label': 'Previous Page'
            },
            nextIconButtonProps: {
              'aria-label': 'Next Page'
            },
            onChangePage: this.handleChangePage,
            onChangeRowsPerPage: this.handleChangeRowsPerPage
          })
        )
      );
    }
  }]);

  return AssistantTable;
}(_react.Component);

AssistantTable.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  fetchData: _propTypes2.default.func.isRequired,
  content: _propTypes2.default.object.isRequired,
  paging: _propTypes2.default.object.isRequired,
  addEmptyRow: _propTypes2.default.func.isRequired,
  removeRow: _propTypes2.default.func.isRequired,
  updateRow: _propTypes2.default.func.isRequired,
  editRow: _propTypes2.default.func.isRequired,
  finishEditRow: _propTypes2.default.func.isRequired,
  closeNotif: _propTypes2.default.func.isRequired,
  messageNotif: _propTypes2.default.string.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    force: state, // force state from reducer
    content: state.getIn([branch, 'content']),
    messageNotif: state.getIn([branch, 'notifMsg']),
    paging: state.getIn([branch, 'paging'])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchData: (0, _redux.bindActionCreators)(_AssistantActions.fetchAction, dispatch),
    addEmptyRow: (0, _redux.bindActionCreators)(_AssistantActions.addAction, dispatch),
    removeRow: (0, _redux.bindActionCreators)(_AssistantActions.removeAction, dispatch),
    updateRow: (0, _redux.bindActionCreators)(_AssistantActions.updateAction, dispatch),
    editRow: (0, _redux.bindActionCreators)(_AssistantActions.editAction, dispatch),
    finishEditRow: (0, _redux.bindActionCreators)(_AssistantActions.saveAction, dispatch),
    closeNotif: (0, _redux.bindActionCreators)(_AssistantActions.closeNotifAction, dispatch)
  };
};

var AssistantTableMapped = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AssistantTable);

exports.default = (0, _styles.withStyles)(_styles2.styles)(AssistantTableMapped);

/***/ }),
/* 125 */
/*!*********************************************!*\
  !*** ./src/app/actions/AssistantActions.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.closeNotifAction = exports.saveAction = exports.editAction = exports.updateAction = exports.removeAction = exports.addAction = exports.fetchAction = undefined;

var _show = __webpack_require__(/*! ../constants/show.js */ 4);

var _show2 = _interopRequireDefault(_show);

var _actionTypes = __webpack_require__(/*! ./actionTypes */ 5);

var types = _interopRequireWildcard(_actionTypes);

var _crossFetch = __webpack_require__(/*! cross-fetch */ 15);

var _crossFetch2 = _interopRequireDefault(_crossFetch);

var _api = __webpack_require__(/*! ../constants/urls/api */ 16);

var _header = __webpack_require__(/*! ../constants/request/header */ 25);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchAction = exports.fetchAction = function fetchAction(items, branch) {
    (0, _show2.default)(branch);
    return function (dispatch) {
        (0, _show2.default)(_api.ASSISTANT_URL);
        (0, _crossFetch2.default)(_api.ASSISTANT_URL, {
            method: _header.Method.GET
        }).then(function (resp) {
            return resp.json();
        }).then(function (data) {
            dispatch({
                branch: branch,
                type: branch + '/' + types.FETCH_DATA,
                content: data.content,
                paging: {
                    total_pages: data.total_pages,
                    total_elements: data.total_elements,
                    last: data.last,
                    first: data.first,
                    number_of_elements: data.number_of_elements,
                    size: data.size,
                    number: data.number
                }
            });
        });
    };
};

var addAction = exports.addAction = function addAction(anchor, branch) {
    return {
        branch: branch,
        type: branch + '/' + types.ADD_EMPTY_ROW,
        anchor: anchor
    };
};
var removeAction = exports.removeAction = function removeAction(item, branch) {
    return {
        branch: branch,
        type: branch + '/' + types.REMOVE_ROW,
        item: item
    };
};
var updateAction = exports.updateAction = function updateAction(event, item, branch) {
    return {
        branch: branch,
        type: branch + '/' + types.UPDATE_ROW,
        event: event,
        item: item
    };
};
var editAction = exports.editAction = function editAction(item, branch) {
    return {
        branch: branch,
        type: branch + '/' + types.EDIT_ROW,
        item: item
    };
};
var saveAction = exports.saveAction = function saveAction(item, branch) {
    return {
        branch: branch,
        type: branch + '/' + types.SAVE_ROW,
        item: item
    };
};
var closeNotifAction = exports.closeNotifAction = function closeNotifAction(branch) {
    return {
        branch: branch,
        type: branch + '/' + types.CLOSE_NOTIF
    };
};

/***/ }),
/* 126 */
/*!**************************************************!*\
  !*** ./src/app/components/Client/ClientTable.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ 10);

var _Paper2 = _interopRequireDefault(_Paper);

var _redux = __webpack_require__(/*! redux */ 9);

var _reactRedux = __webpack_require__(/*! react-redux */ 6);

var _ClientActions = __webpack_require__(/*! ../../actions/ClientActions */ 127);

var _styles2 = __webpack_require__(/*! ../../constants/styles.js */ 7);

var _TablePagination = __webpack_require__(/*! @material-ui/core/TablePagination */ 14);

var _TablePagination2 = _interopRequireDefault(_TablePagination);

var _ = __webpack_require__(/*! .. */ 3);

var _client = __webpack_require__(/*! ../../constants/client/client */ 60);

var _client2 = _interopRequireDefault(_client);

var _show = __webpack_require__(/*! ../../constants/show.js */ 4);

var _show2 = _interopRequireDefault(_show);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Reducer branch
var branch = 'clientTable';

var ClientTable = function (_Component) {
  _inherits(ClientTable, _Component);

  function ClientTable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ClientTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ClientTable.__proto__ || Object.getPrototypeOf(ClientTable)).call.apply(_ref, [this].concat(args))), _this), _this.handleChangePage = function (event, page) {}, _this.handleChangeRowsPerPage = function (event) {
      //  show(event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ClientTable, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          fetchData = _props.fetchData,
          addEmptyRow = _props.addEmptyRow,
          content = _props.content,
          removeRow = _props.removeRow,
          updateRow = _props.updateRow,
          editRow = _props.editRow,
          finishEditRow = _props.finishEditRow,
          closeNotif = _props.closeNotif,
          messageNotif = _props.messageNotif,
          paging = _props.paging;

      (0, _show2.default)(content);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_.Notification, { close: function close() {
            return closeNotif(branch);
          }, message: messageNotif }),
        _react2.default.createElement(
          _Paper2.default,
          { className: classes.root },
          _react2.default.createElement(_.CrudTable, {
            dataInit: content,
            anchor: _client2.default.table.columns,
            title: _client2.default.table.title,
            dataTable: content,
            fetchData: fetchData,
            addEmptyRow: addEmptyRow,
            removeRow: removeRow,
            updateRow: updateRow,
            editRow: editRow,
            finishEditRow: finishEditRow,
            branch: branch
          }),
          _react2.default.createElement(_TablePagination2.default, {
            component: 'div',
            count: paging.get('total_elements'),
            rowsPerPage: paging.get('size') > paging.get('total_elements') ? paging.get('total_elements') : paging.get('size'),
            page: paging.get('number'),
            backIconButtonProps: {
              'aria-label': 'Previous Page'
            },
            nextIconButtonProps: {
              'aria-label': 'Next Page'
            },
            onChangePage: this.handleChangePage,
            onChangeRowsPerPage: this.handleChangeRowsPerPage
          })
        )
      );
    }
  }]);

  return ClientTable;
}(_react.Component);

ClientTable.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  fetchData: _propTypes2.default.func.isRequired,
  content: _propTypes2.default.object.isRequired,
  paging: _propTypes2.default.object.isRequired,
  addEmptyRow: _propTypes2.default.func.isRequired,
  removeRow: _propTypes2.default.func.isRequired,
  updateRow: _propTypes2.default.func.isRequired,
  editRow: _propTypes2.default.func.isRequired,
  finishEditRow: _propTypes2.default.func.isRequired,
  closeNotif: _propTypes2.default.func.isRequired,
  messageNotif: _propTypes2.default.string.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    force: state, // force state from reducer
    content: state.getIn([branch, 'content']),
    messageNotif: state.getIn([branch, 'notifMsg']),
    paging: state.getIn([branch, 'paging'])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchData: (0, _redux.bindActionCreators)(_ClientActions.fetchAction, dispatch),
    addEmptyRow: (0, _redux.bindActionCreators)(_ClientActions.addAction, dispatch),
    removeRow: (0, _redux.bindActionCreators)(_ClientActions.removeAction, dispatch),
    updateRow: (0, _redux.bindActionCreators)(_ClientActions.updateAction, dispatch),
    editRow: (0, _redux.bindActionCreators)(_ClientActions.editAction, dispatch),
    finishEditRow: (0, _redux.bindActionCreators)(_ClientActions.saveAction, dispatch),
    closeNotif: (0, _redux.bindActionCreators)(_ClientActions.closeNotifAction, dispatch)
  };
};

var ClientTableMapped = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ClientTable);

exports.default = (0, _styles.withStyles)(_styles2.styles)(ClientTableMapped);

/***/ }),
/* 127 */
/*!******************************************!*\
  !*** ./src/app/actions/ClientActions.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.closeNotifAction = exports.saveAction = exports.editAction = exports.updateAction = exports.removeAction = exports.addAction = exports.fetchAction = undefined;

var _show = __webpack_require__(/*! ../constants/show.js */ 4);

var _show2 = _interopRequireDefault(_show);

var _actionTypes = __webpack_require__(/*! ./actionTypes */ 5);

var types = _interopRequireWildcard(_actionTypes);

var _crossFetch = __webpack_require__(/*! cross-fetch */ 15);

var _crossFetch2 = _interopRequireDefault(_crossFetch);

var _api = __webpack_require__(/*! ../constants/urls/api */ 16);

var _header = __webpack_require__(/*! ../constants/request/header */ 25);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchAction = exports.fetchAction = function fetchAction(items, branch) {
    (0, _show2.default)(branch);
    return function (dispatch) {
        (0, _crossFetch2.default)(_api.CLIENT_URL, {
            method: _header.Method.GET
        }).then(function (resp) {
            return resp.json();
        }).then(function (data) {
            dispatch({
                branch: branch,
                type: branch + '/' + types.FETCH_DATA,
                content: data.content,
                paging: {
                    total_pages: data.total_pages,
                    total_elements: data.total_elements,
                    last: data.last,
                    first: data.first,
                    number_of_elements: data.number_of_elements,
                    size: data.size,
                    number: data.number
                }
            });
        });
    };
};

var addAction = exports.addAction = function addAction(anchor, branch) {
    return {
        branch: branch,
        type: branch + '/' + types.ADD_EMPTY_ROW,
        anchor: anchor
    };
};
var removeAction = exports.removeAction = function removeAction(item, branch) {
    return {
        branch: branch,
        type: branch + '/' + types.REMOVE_ROW,
        item: item
    };
};
var updateAction = exports.updateAction = function updateAction(event, item, branch) {
    return {
        branch: branch,
        type: branch + '/' + types.UPDATE_ROW,
        event: event,
        item: item
    };
};
var editAction = exports.editAction = function editAction(item, branch) {
    return {
        branch: branch,
        type: branch + '/' + types.EDIT_ROW,
        item: item
    };
};
var saveAction = exports.saveAction = function saveAction(item, branch) {
    return {
        branch: branch,
        type: branch + '/' + types.SAVE_ROW,
        item: item
    };
};
var closeNotifAction = exports.closeNotifAction = function closeNotifAction(branch) {
    return {
        branch: branch,
        type: branch + '/' + types.CLOSE_NOTIF
    };
};

/***/ }),
/* 128 */
/*!*******************************************************!*\
  !*** ./src/app/components/Schedule/TScheduleTable.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ 10);

var _Paper2 = _interopRequireDefault(_Paper);

var _redux = __webpack_require__(/*! redux */ 9);

var _reactRedux = __webpack_require__(/*! react-redux */ 6);

var _TScheduleActions = __webpack_require__(/*! ../../actions/schedule/TScheduleActions */ 129);

var _styles2 = __webpack_require__(/*! ../../constants/styles.js */ 7);

var _TablePagination = __webpack_require__(/*! @material-ui/core/TablePagination */ 14);

var _TablePagination2 = _interopRequireDefault(_TablePagination);

var _ = __webpack_require__(/*! .. */ 3);

var _transport = __webpack_require__(/*! ../../constants/schedule/transport */ 61);

var _transport2 = _interopRequireDefault(_transport);

var _show = __webpack_require__(/*! ../../constants/show.js */ 4);

var _show2 = _interopRequireDefault(_show);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Reducer branch
var branch = 'tscheduleTable';

var TScheduleTable = function (_Component) {
  _inherits(TScheduleTable, _Component);

  function TScheduleTable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TScheduleTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TScheduleTable.__proto__ || Object.getPrototypeOf(TScheduleTable)).call.apply(_ref, [this].concat(args))), _this), _this.handleChangePage = function (event, page) {}, _this.handleChangeRowsPerPage = function (event) {
      //  show(event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TScheduleTable, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          fetchData = _props.fetchData,
          addEmptyRow = _props.addEmptyRow,
          content = _props.content,
          removeRow = _props.removeRow,
          updateRow = _props.updateRow,
          editRow = _props.editRow,
          finishEditRow = _props.finishEditRow,
          closeNotif = _props.closeNotif,
          messageNotif = _props.messageNotif,
          paging = _props.paging;

      (0, _show2.default)(content);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_.Notification, { close: function close() {
            return closeNotif(branch);
          }, message: messageNotif }),
        _react2.default.createElement(
          _Paper2.default,
          { className: classes.root },
          _react2.default.createElement(_.CrudTable, {
            dataInit: content,
            anchor: _transport2.default.table.columns,
            title: _transport2.default.table.title,
            dataTable: content,
            fetchData: fetchData,
            addEmptyRow: addEmptyRow,
            removeRow: removeRow,
            updateRow: updateRow,
            editRow: editRow,
            finishEditRow: finishEditRow,
            branch: branch
          }),
          _react2.default.createElement(_TablePagination2.default, {
            component: 'div',
            count: paging.get('total_elements'),
            rowsPerPage: paging.get('size') > paging.get('total_elements') ? paging.get('total_elements') : paging.get('size'),
            page: paging.get('number'),
            backIconButtonProps: {
              'aria-label': 'Previous Page'
            },
            nextIconButtonProps: {
              'aria-label': 'Next Page'
            },
            onChangePage: this.handleChangePage,
            onChangeRowsPerPage: this.handleChangeRowsPerPage
          })
        )
      );
    }
  }]);

  return TScheduleTable;
}(_react.Component);

TScheduleTable.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  fetchData: _propTypes2.default.func.isRequired,
  content: _propTypes2.default.object.isRequired,
  paging: _propTypes2.default.object.isRequired,
  addEmptyRow: _propTypes2.default.func.isRequired,
  removeRow: _propTypes2.default.func.isRequired,
  updateRow: _propTypes2.default.func.isRequired,
  editRow: _propTypes2.default.func.isRequired,
  finishEditRow: _propTypes2.default.func.isRequired,
  closeNotif: _propTypes2.default.func.isRequired,
  messageNotif: _propTypes2.default.string.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    force: state, // force state from reducer
    content: state.getIn([branch, 'content']),
    messageNotif: state.getIn([branch, 'notifMsg']),
    paging: state.getIn([branch, 'paging'])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchData: (0, _redux.bindActionCreators)(_TScheduleActions.fetchAction, dispatch),
    addEmptyRow: (0, _redux.bindActionCreators)(_TScheduleActions.addAction, dispatch),
    removeRow: (0, _redux.bindActionCreators)(_TScheduleActions.removeAction, dispatch),
    updateRow: (0, _redux.bindActionCreators)(_TScheduleActions.updateAction, dispatch),
    editRow: (0, _redux.bindActionCreators)(_TScheduleActions.editAction, dispatch),
    finishEditRow: (0, _redux.bindActionCreators)(_TScheduleActions.saveAction, dispatch),
    closeNotif: (0, _redux.bindActionCreators)(_TScheduleActions.closeNotifAction, dispatch)
  };
};

var TScheduleTableMapped = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TScheduleTable);

exports.default = (0, _styles.withStyles)(_styles2.styles)(TScheduleTableMapped);

/***/ }),
/* 129 */
/*!******************************************************!*\
  !*** ./src/app/actions/schedule/TScheduleActions.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.closeNotifAction = exports.saveAction = exports.editAction = exports.updateAction = exports.removeAction = exports.addAction = exports.fetchAction = undefined;

var _show = __webpack_require__(/*! ../../constants/show.js */ 4);

var _show2 = _interopRequireDefault(_show);

var _actionTypes = __webpack_require__(/*! ../actionTypes */ 5);

var types = _interopRequireWildcard(_actionTypes);

var _crossFetch = __webpack_require__(/*! cross-fetch */ 15);

var _crossFetch2 = _interopRequireDefault(_crossFetch);

var _api = __webpack_require__(/*! ../../constants/urls/api */ 16);

var _header = __webpack_require__(/*! ../../constants/request/header */ 25);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchAction = exports.fetchAction = function fetchAction(items, branch) {
    (0, _show2.default)(branch);
    return function (dispatch) {
        (0, _crossFetch2.default)(_api.TRANSPORT_SCHEDULE_URL, {
            method: _header.Method.GET
        }).then(function (resp) {
            return resp.json();
        }).then(function (data) {
            dispatch({
                branch: branch,
                type: branch + '/' + types.FETCH_DATA,
                content: data.content,
                paging: {
                    total_pages: data.total_pages,
                    total_elements: data.total_elements,
                    last: data.last,
                    first: data.first,
                    number_of_elements: data.number_of_elements,
                    size: data.size,
                    number: data.number
                }
            });
        });
    };
};

var addAction = exports.addAction = function addAction(anchor, branch) {
    return {
        branch: branch,
        type: branch + '/' + types.ADD_EMPTY_ROW,
        anchor: anchor
    };
};
var removeAction = exports.removeAction = function removeAction(item, branch) {
    return {
        branch: branch,
        type: branch + '/' + types.REMOVE_ROW,
        item: item
    };
};
var updateAction = exports.updateAction = function updateAction(event, item, branch) {
    return {
        branch: branch,
        type: branch + '/' + types.UPDATE_ROW,
        event: event,
        item: item
    };
};
var editAction = exports.editAction = function editAction(item, branch) {
    return {
        branch: branch,
        type: branch + '/' + types.EDIT_ROW,
        item: item
    };
};
var saveAction = exports.saveAction = function saveAction(item, branch) {
    return {
        branch: branch,
        type: branch + '/' + types.SAVE_ROW,
        item: item
    };
};
var closeNotifAction = exports.closeNotifAction = function closeNotifAction(branch) {
    return {
        branch: branch,
        type: branch + '/' + types.CLOSE_NOTIF
    };
};

/***/ }),
/* 130 */
/*!*******************************************************!*\
  !*** ./src/app/components/Schedule/WScheduleTable.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ 10);

var _Paper2 = _interopRequireDefault(_Paper);

var _redux = __webpack_require__(/*! redux */ 9);

var _reactRedux = __webpack_require__(/*! react-redux */ 6);

var _WScheduleActions = __webpack_require__(/*! ../../actions/schedule/WScheduleActions */ 131);

var _styles2 = __webpack_require__(/*! ../../constants/styles.js */ 7);

var _TablePagination = __webpack_require__(/*! @material-ui/core/TablePagination */ 14);

var _TablePagination2 = _interopRequireDefault(_TablePagination);

var _ = __webpack_require__(/*! .. */ 3);

var _work = __webpack_require__(/*! ../../constants/schedule/work */ 62);

var _work2 = _interopRequireDefault(_work);

var _show = __webpack_require__(/*! ../../constants/show.js */ 4);

var _show2 = _interopRequireDefault(_show);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Reducer branch
var branch = 'wscheduleTable';

var WScheduleTable = function (_Component) {
  _inherits(WScheduleTable, _Component);

  function WScheduleTable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WScheduleTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WScheduleTable.__proto__ || Object.getPrototypeOf(WScheduleTable)).call.apply(_ref, [this].concat(args))), _this), _this.handleChangePage = function (event, page) {}, _this.handleChangeRowsPerPage = function (event) {
      //  show(event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WScheduleTable, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          fetchData = _props.fetchData,
          addEmptyRow = _props.addEmptyRow,
          content = _props.content,
          removeRow = _props.removeRow,
          updateRow = _props.updateRow,
          editRow = _props.editRow,
          finishEditRow = _props.finishEditRow,
          closeNotif = _props.closeNotif,
          messageNotif = _props.messageNotif,
          paging = _props.paging;

      (0, _show2.default)(content);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_.Notification, { close: function close() {
            return closeNotif(branch);
          }, message: messageNotif }),
        _react2.default.createElement(
          _Paper2.default,
          { className: classes.root },
          _react2.default.createElement(_.CrudTable, {
            dataInit: content,
            anchor: _work2.default.table.columns,
            title: _work2.default.table.title,
            dataTable: content,
            fetchData: fetchData,
            addEmptyRow: addEmptyRow,
            removeRow: removeRow,
            updateRow: updateRow,
            editRow: editRow,
            finishEditRow: finishEditRow,
            branch: branch
          }),
          _react2.default.createElement(_TablePagination2.default, {
            component: 'div',
            count: paging.get('total_elements'),
            rowsPerPage: paging.get('size') > paging.get('total_elements') ? paging.get('total_elements') : paging.get('size'),
            page: paging.get('number'),
            backIconButtonProps: {
              'aria-label': 'Previous Page'
            },
            nextIconButtonProps: {
              'aria-label': 'Next Page'
            },
            onChangePage: this.handleChangePage,
            onChangeRowsPerPage: this.handleChangeRowsPerPage
          })
        )
      );
    }
  }]);

  return WScheduleTable;
}(_react.Component);

WScheduleTable.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  fetchData: _propTypes2.default.func.isRequired,
  content: _propTypes2.default.object.isRequired,
  paging: _propTypes2.default.object.isRequired,
  addEmptyRow: _propTypes2.default.func.isRequired,
  removeRow: _propTypes2.default.func.isRequired,
  updateRow: _propTypes2.default.func.isRequired,
  editRow: _propTypes2.default.func.isRequired,
  finishEditRow: _propTypes2.default.func.isRequired,
  closeNotif: _propTypes2.default.func.isRequired,
  messageNotif: _propTypes2.default.string.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    force: state, // force state from reducer
    content: state.getIn([branch, 'content']),
    messageNotif: state.getIn([branch, 'notifMsg']),
    paging: state.getIn([branch, 'paging'])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchData: (0, _redux.bindActionCreators)(_WScheduleActions.fetchAction, dispatch),
    addEmptyRow: (0, _redux.bindActionCreators)(_WScheduleActions.addAction, dispatch),
    removeRow: (0, _redux.bindActionCreators)(_WScheduleActions.removeAction, dispatch),
    updateRow: (0, _redux.bindActionCreators)(_WScheduleActions.updateAction, dispatch),
    editRow: (0, _redux.bindActionCreators)(_WScheduleActions.editAction, dispatch),
    finishEditRow: (0, _redux.bindActionCreators)(_WScheduleActions.saveAction, dispatch),
    closeNotif: (0, _redux.bindActionCreators)(_WScheduleActions.closeNotifAction, dispatch)
  };
};

var WScheduleTableMapped = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(WScheduleTable);

exports.default = (0, _styles.withStyles)(_styles2.styles)(WScheduleTableMapped);

/***/ }),
/* 131 */
/*!******************************************************!*\
  !*** ./src/app/actions/schedule/WScheduleActions.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.closeNotifAction = exports.saveAction = exports.editAction = exports.updateAction = exports.removeAction = exports.addAction = exports.fetchAction = undefined;

var _show = __webpack_require__(/*! ../../constants/show.js */ 4);

var _show2 = _interopRequireDefault(_show);

var _actionTypes = __webpack_require__(/*! ../actionTypes */ 5);

var types = _interopRequireWildcard(_actionTypes);

var _crossFetch = __webpack_require__(/*! cross-fetch */ 15);

var _crossFetch2 = _interopRequireDefault(_crossFetch);

var _api = __webpack_require__(/*! ../../constants/urls/api */ 16);

var _header = __webpack_require__(/*! ../../constants/request/header */ 25);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchAction = exports.fetchAction = function fetchAction(items, branch) {
    (0, _show2.default)(branch);
    return function (dispatch) {
        (0, _crossFetch2.default)(_api.WORK_SCHEDULE_URL, {
            method: _header.Method.GET
        }).then(function (resp) {
            return resp.json();
        }).then(function (data) {
            dispatch({
                branch: branch,
                type: branch + '/' + types.FETCH_DATA,
                content: data.content,
                paging: {
                    total_pages: data.total_pages,
                    total_elements: data.total_elements,
                    last: data.last,
                    first: data.first,
                    number_of_elements: data.number_of_elements,
                    size: data.size,
                    number: data.number
                }
            });
        });
    };
};

var addAction = exports.addAction = function addAction(anchor, branch) {
    return {
        branch: branch,
        type: branch + '/' + types.ADD_EMPTY_ROW,
        anchor: anchor
    };
};
var removeAction = exports.removeAction = function removeAction(item, branch) {
    return {
        branch: branch,
        type: branch + '/' + types.REMOVE_ROW,
        item: item
    };
};
var updateAction = exports.updateAction = function updateAction(event, item, branch) {
    return {
        branch: branch,
        type: branch + '/' + types.UPDATE_ROW,
        event: event,
        item: item
    };
};
var editAction = exports.editAction = function editAction(item, branch) {
    return {
        branch: branch,
        type: branch + '/' + types.EDIT_ROW,
        item: item
    };
};
var saveAction = exports.saveAction = function saveAction(item, branch) {
    return {
        branch: branch,
        type: branch + '/' + types.SAVE_ROW,
        item: item
    };
};
var closeNotifAction = exports.closeNotifAction = function closeNotifAction(branch) {
    return {
        branch: branch,
        type: branch + '/' + types.CLOSE_NOTIF
    };
};

/***/ }),
/* 132 */
/*!**************************************************!*\
  !*** ./src/app/components/Ticket/TicketTable.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ 10);

var _Paper2 = _interopRequireDefault(_Paper);

var _redux = __webpack_require__(/*! redux */ 9);

var _reactRedux = __webpack_require__(/*! react-redux */ 6);

var _TicketActions = __webpack_require__(/*! ../../actions/ticket/TicketActions */ 133);

var _styles2 = __webpack_require__(/*! ../../constants/styles.js */ 7);

var _TablePagination = __webpack_require__(/*! @material-ui/core/TablePagination */ 14);

var _TablePagination2 = _interopRequireDefault(_TablePagination);

var _ = __webpack_require__(/*! .. */ 3);

var _ticket = __webpack_require__(/*! ../../constants/ticket/ticket */ 63);

var _ticket2 = _interopRequireDefault(_ticket);

var _show = __webpack_require__(/*! ../../constants/show.js */ 4);

var _show2 = _interopRequireDefault(_show);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Reducer branch
var branch = 'ticketTable';

var TicketTable = function (_Component) {
  _inherits(TicketTable, _Component);

  function TicketTable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TicketTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TicketTable.__proto__ || Object.getPrototypeOf(TicketTable)).call.apply(_ref, [this].concat(args))), _this), _this.handleChangePage = function (event, page) {}, _this.handleChangeRowsPerPage = function (event) {
      //  show(event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TicketTable, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          fetchData = _props.fetchData,
          addEmptyRow = _props.addEmptyRow,
          content = _props.content,
          removeRow = _props.removeRow,
          updateRow = _props.updateRow,
          editRow = _props.editRow,
          finishEditRow = _props.finishEditRow,
          closeNotif = _props.closeNotif,
          messageNotif = _props.messageNotif,
          paging = _props.paging;

      (0, _show2.default)(content);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_.Notification, { close: function close() {
            return closeNotif(branch);
          }, message: messageNotif }),
        _react2.default.createElement(
          _Paper2.default,
          { className: classes.root },
          _react2.default.createElement(_.CrudTable, {
            dataInit: content,
            anchor: _ticket2.default.table.columns,
            title: _ticket2.default.table.title,
            dataTable: content,
            fetchData: fetchData,
            addEmptyRow: addEmptyRow,
            removeRow: removeRow,
            updateRow: updateRow,
            editRow: editRow,
            finishEditRow: finishEditRow,
            branch: branch
          }),
          _react2.default.createElement(_TablePagination2.default, {
            component: 'div',
            count: paging.get('total_elements'),
            rowsPerPage: paging.get('size') > paging.get('total_elements') ? paging.get('total_elements') : paging.get('size'),
            page: paging.get('number'),
            backIconButtonProps: {
              'aria-label': 'Previous Page'
            },
            nextIconButtonProps: {
              'aria-label': 'Next Page'
            },
            onChangePage: this.handleChangePage,
            onChangeRowsPerPage: this.handleChangeRowsPerPage
          })
        )
      );
    }
  }]);

  return TicketTable;
}(_react.Component);

TicketTable.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  fetchData: _propTypes2.default.func.isRequired,
  content: _propTypes2.default.object.isRequired,
  paging: _propTypes2.default.object.isRequired,
  addEmptyRow: _propTypes2.default.func.isRequired,
  removeRow: _propTypes2.default.func.isRequired,
  updateRow: _propTypes2.default.func.isRequired,
  editRow: _propTypes2.default.func.isRequired,
  finishEditRow: _propTypes2.default.func.isRequired,
  closeNotif: _propTypes2.default.func.isRequired,
  messageNotif: _propTypes2.default.string.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    force: state, // force state from reducer
    content: state.getIn([branch, 'content']),
    messageNotif: state.getIn([branch, 'notifMsg']),
    paging: state.getIn([branch, 'paging'])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchData: (0, _redux.bindActionCreators)(_TicketActions.fetchAction, dispatch),
    addEmptyRow: (0, _redux.bindActionCreators)(_TicketActions.addAction, dispatch),
    removeRow: (0, _redux.bindActionCreators)(_TicketActions.removeAction, dispatch),
    updateRow: (0, _redux.bindActionCreators)(_TicketActions.updateAction, dispatch),
    editRow: (0, _redux.bindActionCreators)(_TicketActions.editAction, dispatch),
    finishEditRow: (0, _redux.bindActionCreators)(_TicketActions.saveAction, dispatch),
    closeNotif: (0, _redux.bindActionCreators)(_TicketActions.closeNotifAction, dispatch)
  };
};

var TicketTableMapped = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TicketTable);

exports.default = (0, _styles.withStyles)(_styles2.styles)(TicketTableMapped);

/***/ }),
/* 133 */
/*!*************************************************!*\
  !*** ./src/app/actions/ticket/TicketActions.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.closeNotifAction = exports.saveAction = exports.editAction = exports.updateAction = exports.removeAction = exports.addAction = exports.fetchAction = undefined;

var _show = __webpack_require__(/*! ../../constants/show.js */ 4);

var _show2 = _interopRequireDefault(_show);

var _actionTypes = __webpack_require__(/*! ../actionTypes */ 5);

var types = _interopRequireWildcard(_actionTypes);

var _crossFetch = __webpack_require__(/*! cross-fetch */ 15);

var _crossFetch2 = _interopRequireDefault(_crossFetch);

var _api = __webpack_require__(/*! ../../constants/urls/api */ 16);

var _header = __webpack_require__(/*! ../../constants/request/header */ 25);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchAction = exports.fetchAction = function fetchAction(items, branch) {
    (0, _show2.default)(branch);
    return function (dispatch) {
        (0, _crossFetch2.default)(_api.TICKET_URL, {
            method: _header.Method.GET
        }).then(function (resp) {
            return resp.json();
        }).then(function (data) {
            dispatch({
                branch: branch,
                type: branch + '/' + types.FETCH_DATA,
                content: data.content,
                paging: {
                    total_pages: data.total_pages,
                    total_elements: data.total_elements,
                    last: data.last,
                    first: data.first,
                    number_of_elements: data.number_of_elements,
                    size: data.size,
                    number: data.number
                }
            });
        });
    };
};

var addAction = exports.addAction = function addAction(anchor, branch) {
    return {
        branch: branch,
        type: branch + '/' + types.ADD_EMPTY_ROW,
        anchor: anchor
    };
};
var removeAction = exports.removeAction = function removeAction(item, branch) {
    return {
        branch: branch,
        type: branch + '/' + types.REMOVE_ROW,
        item: item
    };
};
var updateAction = exports.updateAction = function updateAction(event, item, branch) {
    return {
        branch: branch,
        type: branch + '/' + types.UPDATE_ROW,
        event: event,
        item: item
    };
};
var editAction = exports.editAction = function editAction(item, branch) {
    return {
        branch: branch,
        type: branch + '/' + types.EDIT_ROW,
        item: item
    };
};
var saveAction = exports.saveAction = function saveAction(item, branch) {
    return {
        branch: branch,
        type: branch + '/' + types.SAVE_ROW,
        item: item
    };
};
var closeNotifAction = exports.closeNotifAction = function closeNotifAction(branch) {
    return {
        branch: branch,
        type: branch + '/' + types.CLOSE_NOTIF
    };
};

/***/ }),
/* 134 */
/*!***********************************************************!*\
  !*** ./src/app/components/PapperBlock/papperStyle-jss.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var styles = function styles(theme) {
  return {
    root: theme.mixins.gutters({
      paddingTop: theme.spacing.unit * 3,
      paddingBottom: theme.spacing.unit * 3,
      marginTop: theme.spacing.unit * 3,
      '&$noMargin': {
        margin: 0
      }
    }),
    title: {
      marginBottom: theme.spacing.unit * 4,
      paddingBottom: theme.spacing.unit * 2,
      position: 'relative',
      textTransform: 'capitalize',
      fontSize: 28,
      '&:after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: 40,
        borderBottom: '4px solid ' + theme.palette.primary.main
      }
    },
    description: {
      maxWidth: 960,
      fontSize: 16
    },
    content: {
      marginTop: theme.spacing.unit * 2,
      padding: theme.spacing.unit,
      backgroundColor: theme.palette.background.default
    },
    whiteBg: {
      backgroundColor: 'transparent',
      margin: 0
    },
    noMargin: {},
    colorMode: {
      backgroundColor: theme.palette.secondary.main,
      '& $title': {
        color: theme.palette.grey[100],
        '&:after': {
          borderBottom: '5px solid ' + theme.palette.primary.light
        }
      },
      '& $description': {
        color: theme.palette.grey[100]
      }
    },
    overflowX: {
      width: '100%',
      overflowX: 'auto'
    }
  };
};

exports.default = styles;

/***/ }),
/* 135 */
/*!*****************************************************!*\
  !*** ./src/app/components/Counter/CounterWidget.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCountup = __webpack_require__(/*! react-countup */ 136);

var _reactCountup2 = _interopRequireDefault(_reactCountup);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ 19);

var _Typography2 = _interopRequireDefault(_Typography);

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ 10);

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  var _root;

  return {
    root: (_root = {
      flexGrow: 1,
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: 10,
      height: 190,
      marginBottom: 6,
      display: 'flex'
    }, _defineProperty(_root, theme.breakpoints.up('sm'), {
      height: 120,
      marginBottom: -1,
      alignItems: 'flex-end'
    }), _defineProperty(_root, theme.breakpoints.down('xs'), {
      flexDirection: 'column'
    }), _defineProperty(_root, '& > *', {
      padding: '0 5px'
    }), _root),
    title: {
      color: theme.palette.common.white,
      fontSize: 16,
      fontWeight: 400
    },
    counter: {
      color: theme.palette.common.white,
      fontSize: 28,
      fontWeight: 500
    },
    customContent: {
      textAlign: 'right'
    }
  };
};

var CounterWidget = function (_PureComponent) {
  _inherits(CounterWidget, _PureComponent);

  function CounterWidget() {
    _classCallCheck(this, CounterWidget);

    return _possibleConstructorReturn(this, (CounterWidget.__proto__ || Object.getPrototypeOf(CounterWidget)).apply(this, arguments));
  }

  _createClass(CounterWidget, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          color = _props.color,
          start = _props.start,
          end = _props.end,
          duration = _props.duration,
          title = _props.title,
          children = _props.children;

      return _react2.default.createElement(
        _Paper2.default,
        { className: classes.root, style: { backgroundColor: '#' + color } },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _Typography2.default,
            { className: classes.counter },
            _react2.default.createElement(_reactCountup2.default, { start: start, end: end, duration: duration, useEasing: true })
          ),
          _react2.default.createElement(
            _Typography2.default,
            { className: classes.title, variant: 'subheading' },
            title
          )
        ),
        _react2.default.createElement(
          'div',
          { className: classes.customContent },
          children
        )
      );
    }
  }]);

  return CounterWidget;
}(_react.PureComponent);

CounterWidget.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  color: _propTypes2.default.string.isRequired,
  start: _propTypes2.default.number.isRequired,
  end: _propTypes2.default.number.isRequired,
  duration: _propTypes2.default.number.isRequired,
  title: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(CounterWidget);

/***/ }),
/* 136 */
/*!********************************!*\
  !*** external "react-countup" ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-countup");

/***/ }),
/* 137 */
/*!*********************************************************!*\
  !*** ./src/app/components/Widget/CounterIconsWidget.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Grid = __webpack_require__(/*! @material-ui/core/Grid */ 29);

var _Grid2 = _interopRequireDefault(_Grid);

var _AccountBox = __webpack_require__(/*! @material-ui/icons/AccountBox */ 138);

var _AccountBox2 = _interopRequireDefault(_AccountBox);

var _PersonAdd = __webpack_require__(/*! @material-ui/icons/PersonAdd */ 139);

var _PersonAdd2 = _interopRequireDefault(_PersonAdd);

var _DirectionsBus = __webpack_require__(/*! @material-ui/icons/DirectionsBus */ 140);

var _DirectionsBus2 = _interopRequireDefault(_DirectionsBus);

var _Star = __webpack_require__(/*! @material-ui/icons/Star */ 141);

var _Star2 = _interopRequireDefault(_Star);

var _components = __webpack_require__(/*! ./../../components */ 3);

var _widgetJss = __webpack_require__(/*! ./widget-jss */ 30);

var _widgetJss2 = _interopRequireDefault(_widgetJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CounterIconWidget = function (_PureComponent) {
  _inherits(CounterIconWidget, _PureComponent);

  function CounterIconWidget() {
    _classCallCheck(this, CounterIconWidget);

    return _possibleConstructorReturn(this, (CounterIconWidget.__proto__ || Object.getPrototypeOf(CounterIconWidget)).apply(this, arguments));
  }

  _createClass(CounterIconWidget, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;

      return _react2.default.createElement(
        'div',
        { className: classes.rootCounterFull },
        _react2.default.createElement(
          _Grid2.default,
          { container: true, spacing: 16 },
          _react2.default.createElement(
            _Grid2.default,
            { item: true, md: 3, xs: 6 },
            _react2.default.createElement(
              _components.CounterWidget,
              {
                color: '0277BD',
                start: 0,
                end: 105,
                duration: 3,
                title: 'New Customers'
              },
              _react2.default.createElement(_AccountBox2.default, { className: classes.counterIcon })
            )
          ),
          _react2.default.createElement(
            _Grid2.default,
            { item: true, md: 3, xs: 6 },
            _react2.default.createElement(
              _components.CounterWidget,
              {
                color: '388E3C',
                start: 0,
                end: 3,
                duration: 3,
                title: 'New Transporters'
              },
              _react2.default.createElement(_DirectionsBus2.default, { className: classes.counterIcon })
            )
          ),
          _react2.default.createElement(
            _Grid2.default,
            { item: true, md: 3, xs: 6 },
            _react2.default.createElement(
              _components.CounterWidget,
              {
                color: '00ACC1',
                start: 0,
                end: 15,
                duration: 3,
                title: 'New Employees'
              },
              _react2.default.createElement(_PersonAdd2.default, { className: classes.counterIcon })
            )
          ),
          _react2.default.createElement(
            _Grid2.default,
            { item: true, md: 3, xs: 6 },
            _react2.default.createElement(
              _components.CounterWidget,
              {
                color: 'FF5722',
                start: 0,
                end: 80,
                duration: 3,
                title: 'Average Income'
              },
              _react2.default.createElement(_Star2.default, { className: classes.counterIcon })
            )
          )
        )
      );
    }
  }]);

  return CounterIconWidget;
}(_react.PureComponent);

CounterIconWidget.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(_widgetJss2.default)(CounterIconWidget);

/***/ }),
/* 138 */
/*!************************************************!*\
  !*** external "@material-ui/icons/AccountBox" ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountBox");

/***/ }),
/* 139 */
/*!***********************************************!*\
  !*** external "@material-ui/icons/PersonAdd" ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PersonAdd");

/***/ }),
/* 140 */
/*!***************************************************!*\
  !*** external "@material-ui/icons/DirectionsBus" ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DirectionsBus");

/***/ }),
/* 141 */
/*!******************************************!*\
  !*** external "@material-ui/icons/Star" ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Star");

/***/ }),
/* 142 */
/*!************************************************!*\
  !*** external "@material-ui/core/colors/blue" ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/blue");

/***/ }),
/* 143 */
/*!******************************************************!*\
  !*** external "@material-ui/core/colors/deepOrange" ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/deepOrange");

/***/ }),
/* 144 */
/*!***********************************************!*\
  !*** external "@material-ui/core/colors/red" ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/red");

/***/ }),
/* 145 */
/*!**************************************************!*\
  !*** external "@material-ui/core/colors/purple" ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/purple");

/***/ }),
/* 146 */
/*!******************************************************!*\
  !*** external "@material-ui/core/colors/deepPurple" ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/deepPurple");

/***/ }),
/* 147 */
/*!************************************************!*\
  !*** external "@material-ui/core/colors/lime" ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/lime");

/***/ }),
/* 148 */
/*!**************************************************!*\
  !*** external "@material-ui/core/colors/indigo" ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/indigo");

/***/ }),
/* 149 */
/*!******************************************************!*\
  !*** ./src/app/components/Widget/AreaChartWidget.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Grid = __webpack_require__(/*! @material-ui/core/Grid */ 29);

var _Grid2 = _interopRequireDefault(_Grid);

var _classnames = __webpack_require__(/*! classnames */ 11);

var _classnames2 = _interopRequireDefault(_classnames);

var _Chip = __webpack_require__(/*! @material-ui/core/Chip */ 150);

var _Chip2 = _interopRequireDefault(_Chip);

var _People = __webpack_require__(/*! @material-ui/icons/People */ 151);

var _People2 = _interopRequireDefault(_People);

var _PermPhoneMsg = __webpack_require__(/*! @material-ui/icons/PermPhoneMsg */ 152);

var _PermPhoneMsg2 = _interopRequireDefault(_PermPhoneMsg);

var _DateRange = __webpack_require__(/*! @material-ui/icons/DateRange */ 153);

var _DateRange2 = _interopRequireDefault(_DateRange);

var _Assignment = __webpack_require__(/*! @material-ui/icons/Assignment */ 154);

var _Assignment2 = _interopRequireDefault(_Assignment);

var _Avatar = __webpack_require__(/*! @material-ui/core/Avatar */ 27);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Divider = __webpack_require__(/*! @material-ui/core/Divider */ 28);

var _Divider2 = _interopRequireDefault(_Divider);

var _CircularProgress = __webpack_require__(/*! @material-ui/core/CircularProgress */ 155);

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

var _Style = __webpack_require__(/*! @material-ui/icons/Style */ 156);

var _Style2 = _interopRequireDefault(_Style);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ 19);

var _Typography2 = _interopRequireDefault(_Typography);

var _themePalette = __webpack_require__(/*! ../../constants/themePalette.js */ 32);

var _themePalette2 = _interopRequireDefault(_themePalette);

var _green = __webpack_require__(/*! @material-ui/core/colors/green */ 65);

var _green2 = _interopRequireDefault(_green);

var _recharts = __webpack_require__(/*! recharts */ 157);

var _Messages = __webpack_require__(/*! ../../styles/components/Messages.scss */ 49);

var _Messages2 = _interopRequireDefault(_Messages);

var _chartData = __webpack_require__(/*! ../../constants/chartData.js */ 158);

var _Typography3 = __webpack_require__(/*! ../../styles/components/Typography.scss */ 159);

var _Typography4 = _interopRequireDefault(_Typography3);

var _widgetJss = __webpack_require__(/*! ./widget-jss */ 30);

var _widgetJss2 = _interopRequireDefault(_widgetJss);

var _PapperBlock = __webpack_require__(/*! ./../PapperBlock/PapperBlock */ 40);

var _PapperBlock2 = _interopRequireDefault(_PapperBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var theme = (0, _styles.createMuiTheme)(_themePalette2.default.blueTheme);
var color = {
  primary: theme.palette.primary.main,
  primarydark: theme.palette.primary.dark,
  secondary: theme.palette.secondary.main,
  secondarydark: theme.palette.secondary.dark,
  third: _green2.default[500],
  thirddark: _green2.default[900]
};

var AreaChartWidget = function (_PureComponent) {
  _inherits(AreaChartWidget, _PureComponent);

  function AreaChartWidget() {
    _classCallCheck(this, AreaChartWidget);

    return _possibleConstructorReturn(this, (AreaChartWidget.__proto__ || Object.getPrototypeOf(AreaChartWidget)).apply(this, arguments));
  }

  _createClass(AreaChartWidget, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;

      return _react2.default.createElement(
        _PapperBlock2.default,
        { whiteBg: true, noMargin: true, title: 'Notifications', desc: '' },
        _react2.default.createElement(
          _Grid2.default,
          { container: true, spacing: 16 },
          _react2.default.createElement(
            _Grid2.default,
            { item: true, md: 8, xs: 12 },
            _react2.default.createElement(
              'ul',
              { className: classes.bigResume },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _Avatar2.default,
                  { className: (0, _classnames2.default)(classes.avatar, classes.greenAvatar) },
                  _react2.default.createElement(_People2.default, null)
                ),
                _react2.default.createElement(
                  _Typography2.default,
                  { variant: 'title' },
                  '460',
                  _react2.default.createElement(
                    _Typography2.default,
                    null,
                    'New Employees'
                  )
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _Avatar2.default,
                  { className: (0, _classnames2.default)(classes.avatar, classes.pinkAvatar) },
                  _react2.default.createElement(_Assignment2.default, null)
                ),
                _react2.default.createElement(
                  _Typography2.default,
                  { variant: 'title' },
                  '1320',
                  _react2.default.createElement(
                    _Typography2.default,
                    null,
                    'Tickets'
                  )
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _Avatar2.default,
                  { className: (0, _classnames2.default)(classes.avatar, classes.purpleAvatar) },
                  _react2.default.createElement(_PermPhoneMsg2.default, null)
                ),
                _react2.default.createElement(
                  _Typography2.default,
                  { variant: 'title' },
                  '345',
                  _react2.default.createElement(
                    _Typography2.default,
                    null,
                    'Calls/Messages'
                  )
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _Avatar2.default,
                  { className: (0, _classnames2.default)(classes.avatar, classes.orangeAvatar) },
                  _react2.default.createElement(_DateRange2.default, null)
                ),
                _react2.default.createElement(
                  _Typography2.default,
                  { variant: 'title' },
                  '23',
                  _react2.default.createElement(
                    _Typography2.default,
                    null,
                    'Schedules'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: classes.chartWrap },
              _react2.default.createElement(
                'div',
                { className: classes.chartFluid },
                _react2.default.createElement(
                  _recharts.ResponsiveContainer,
                  null,
                  _react2.default.createElement(
                    _recharts.AreaChart,
                    {
                      width: 600,
                      height: 300,
                      data: _chartData.data1,
                      margin: {
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                      }
                    },
                    _react2.default.createElement(_recharts.XAxis, { dataKey: 'name' }),
                    _react2.default.createElement(_recharts.YAxis, null),
                    _react2.default.createElement(_recharts.CartesianGrid, { strokeDasharray: '3 3' }),
                    _react2.default.createElement(_recharts.Tooltip, null),
                    _react2.default.createElement(_recharts.Area, { type: 'monotone', dataKey: 'uv', stackId: '1', stroke: color.primarydark, fill: color.primary }),
                    _react2.default.createElement(_recharts.Area, { type: 'monotone', dataKey: 'pv', stackId: '1', stroke: color.secondary, fill: color.secondarydark }),
                    _react2.default.createElement(_recharts.Area, { type: 'monotone', dataKey: 'amt', stackId: '1', stroke: color.third, fill: color.thirddark })
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _Grid2.default,
            { item: true, md: 4, xs: 12 },
            _react2.default.createElement(
              _Typography2.default,
              { variant: 'button' },
              _react2.default.createElement(
                'span',
                { className: _Typography4.default.bold },
                'Performance Evaluation'
              )
            ),
            _react2.default.createElement(_Divider2.default, { className: classes.divider }),
            _react2.default.createElement(
              _Grid2.default,
              { container: true, className: classes.secondaryWrap },
              _react2.default.createElement(
                _Grid2.default,
                { item: true, className: classes.centerItem, md: 6 },
                _react2.default.createElement(
                  _Typography2.default,
                  { gutterBottom: true },
                  'Engine'
                ),
                _react2.default.createElement(_Chip2.default, { label: 'Super', className: (0, _classnames2.default)(classes.chip, _Messages2.default.bgError) }),
                _react2.default.createElement(_CircularProgress2.default, { variant: 'determinate', className: (0, _classnames2.default)(classes.progressCircle, classes.pinkProgress), size: 100, value: 70 })
              ),
              _react2.default.createElement(
                _Grid2.default,
                { className: classes.centerItem, item: true, md: 6 },
                _react2.default.createElement(
                  _Typography2.default,
                  { gutterBottom: true },
                  'Service Attitude'
                ),
                _react2.default.createElement(_Chip2.default, { label: 'Good', className: (0, _classnames2.default)(classes.chip, _Messages2.default.bgSuccess) }),
                _react2.default.createElement(_CircularProgress2.default, { variant: 'determinate', className: (0, _classnames2.default)(classes.progressCircle, classes.greenProgress), size: 100, value: 57 })
              ),
              _react2.default.createElement(
                _Grid2.default,
                { className: classes.centerItem, item: true, md: 6 },
                _react2.default.createElement(
                  _Typography2.default,
                  { gutterBottom: true },
                  'Safety'
                ),
                _react2.default.createElement(_Chip2.default, { label: 'Good', className: (0, _classnames2.default)(classes.chip, _Messages2.default.bgSuccess) }),
                _react2.default.createElement(_CircularProgress2.default, { variant: 'determinate', className: (0, _classnames2.default)(classes.progressCircle, classes.greenProgress), size: 100, value: 55 })
              ),
              _react2.default.createElement(
                _Grid2.default,
                { className: classes.centerItem, item: true, md: 6 },
                _react2.default.createElement(
                  _Typography2.default,
                  { gutterBottom: true },
                  'Facilities'
                ),
                _react2.default.createElement(_Chip2.default, { label: 'Medium', className: (0, _classnames2.default)(classes.chip, _Messages2.default.bgInfo) }),
                _react2.default.createElement(_CircularProgress2.default, { variant: 'determinate', className: (0, _classnames2.default)(classes.progressCircle, classes.blueProgress), size: 100, value: 40 })
              )
            )
          )
        )
      );
    }
  }]);

  return AreaChartWidget;
}(_react.PureComponent);

AreaChartWidget.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(_widgetJss2.default)(AreaChartWidget);

/***/ }),
/* 150 */
/*!*****************************************!*\
  !*** external "@material-ui/core/Chip" ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Chip");

/***/ }),
/* 151 */
/*!********************************************!*\
  !*** external "@material-ui/icons/People" ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/People");

/***/ }),
/* 152 */
/*!**************************************************!*\
  !*** external "@material-ui/icons/PermPhoneMsg" ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PermPhoneMsg");

/***/ }),
/* 153 */
/*!***********************************************!*\
  !*** external "@material-ui/icons/DateRange" ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DateRange");

/***/ }),
/* 154 */
/*!************************************************!*\
  !*** external "@material-ui/icons/Assignment" ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Assignment");

/***/ }),
/* 155 */
/*!*****************************************************!*\
  !*** external "@material-ui/core/CircularProgress" ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),
/* 156 */
/*!*******************************************!*\
  !*** external "@material-ui/icons/Style" ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Style");

/***/ }),
/* 157 */
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ }),
/* 158 */
/*!****************************************!*\
  !*** ./src/app/constants/chartData.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var data1 = exports.data1 = [{
  name: '07/12',
  uv: 4000,
  pv: 2400,
  amt: 2400
}, {
  name: '08/12',
  uv: 3000,
  pv: 1398,
  amt: 2210
}, {
  name: '09/12',
  uv: 2000,
  pv: 5800,
  amt: 2290
}, {
  name: '10/12',
  uv: 2780,
  pv: 3908,
  amt: 2000
}, {
  name: '11/12',
  uv: 1890,
  pv: 4800,
  amt: 2181
}, {
  name: '12/12',
  uv: 2390,
  pv: 3800,
  amt: 2500
}, {
  name: '13/12',
  uv: 3490,
  pv: 4300,
  amt: 2100
}];

var data2 = exports.data2 = [{
  name: 'Page A',
  uv: 4000,
  female: 2400,
  male: 2400
}, {
  name: 'Page B',
  uv: 3000,
  female: 1398,
  male: 2210
}, {
  name: 'Page C',
  uv: 2000,
  female: 9800,
  male: 2290
}, {
  name: 'Page D',
  uv: 2780,
  female: 3908,
  male: 2000
}, {
  name: 'Page E',
  uv: 1890,
  female: 4800,
  male: 2181
}, {
  name: 'Page F',
  uv: 2390,
  female: 3800,
  male: 2500
}, {
  name: 'Page G',
  uv: 3490,
  female: 4300,
  male: 2100
}];

var data3 = exports.data3 = [{
  name: 'Page A',
  uv: 4000,
  pv: 2400,
  amt: 2400
}, {
  name: 'Page B',
  uv: -3000,
  pv: 1398,
  amt: 2210
}, {
  name: 'Page C',
  uv: -2000,
  pv: -9800,
  amt: 2290
}, {
  name: 'Page D',
  uv: 2780,
  pv: 3908,
  amt: 2000
}, {
  name: 'Page E',
  uv: -1890,
  pv: 4800,
  amt: 2181
}, {
  name: 'Page F',
  uv: 2390,
  pv: -3800,
  amt: 2500
}, {
  name: 'Page G',
  uv: 3490,
  pv: 4300,
  amt: 2100
}];

var data4 = exports.data4 = [{
  name: 'Group A',
  value: 400
}, {
  name: 'Group B',
  value: 300
}, {
  name: 'Group C',
  value: 300
}, {
  name: 'Group D',
  value: 200
}, {
  name: 'Group E',
  value: 278
}, {
  name: 'Group F',
  value: 189
}];

var data5 = exports.data5 = [{
  name: 'Group A',
  value: 2400
}, {
  name: 'Group B',
  value: 4567
}, {
  name: 'Group C',
  value: 1398
}, {
  name: 'Group D',
  value: 9800
}, {
  name: 'Group E',
  value: 3908
}, {
  name: 'Group F',
  value: 4800
}];

var data6 = exports.data6 = [{
  name: 'Group A',
  value: 400
}, {
  name: 'Group B',
  value: 300
}, {
  name: 'Group C',
  value: 300
}, {
  name: 'Group D',
  value: 200
}];

var data7 = exports.data7 = [{
  subject: 'Math',
  A: 120,
  B: 110,
  fullMark: 150
}, {
  subject: 'Chinese',
  A: 98,
  B: 130,
  fullMark: 150
}, {
  subject: 'English',
  A: 86,
  B: 130,
  fullMark: 150
}, {
  subject: 'Geography',
  A: 99,
  B: 100,
  fullMark: 150
}, {
  subject: 'Physics',
  A: 85,
  B: 90,
  fullMark: 150
}, {
  subject: 'History',
  A: 65,
  B: 85,
  fullMark: 150
}];

var data8 = exports.data8 = [{
  x: 10,
  y: 30
}, {
  x: 30,
  y: 200
}, {
  x: 45,
  y: 100
}, {
  x: 50,
  y: 400
}, {
  x: 70,
  y: 150
}, {
  x: 100,
  y: 250
}];

var data9 = exports.data9 = [{
  x: 30,
  y: 20
}, {
  x: 50,
  y: 180
}, {
  x: 75,
  y: 240
}, {
  x: 100,
  y: 100
}, {
  x: 120,
  y: 190
}];

/***/ }),
/* 159 */
/*!***************************************************!*\
  !*** ./src/app/styles/components/Typography.scss ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {
	"lighter": "lighter__zrhRS",
	"light": "light__2SYx4",
	"regular": "regular__ZtPgf",
	"medium": "medium__zjmls",
	"bold": "bold__2Dj4Q",
	"bolder": "bolder__XLYRV",
	"italic": "italic__3gO-e",
	"underline": "underline__3pdva",
	"lineThrought": "lineThrought__1lI1u",
	"textInfo": "textInfo__b5z-4",
	"textSuccess": "textSuccess__1sx0i",
	"textWarning": "textWarning__2mU_X",
	"textError": "textError__XBAEd",
	"textGreyDark": "textGreyDark__2tRjQ",
	"textGrey": "textGrey__2tjDQ",
	"textGreyLight": "textGreyLight__hmLc4",
	"capitalyze": "capitalyze__1p14n",
	"uppercase": "uppercase__2QID0",
	"lowercase": "lowercase__2diBi",
	"textLeft": "textLeft__3CzCe",
	"textRight": "textRight__3upZd",
	"textCenter": "textCenter__3NRog",
	"textJustify": "textJustify__D7ONk",
	"list": "list__3CltL",
	"orderedlist": "orderedlist__2sLq-"
};

/***/ }),
/* 160 */
/*!*****************************************************!*\
  !*** ./src/app/components/Widget/CarouselWidget.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _reactSlick = __webpack_require__(/*! react-slick */ 161);

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ 19);

var _Typography2 = _interopRequireDefault(_Typography);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ 13);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _ArrowForward = __webpack_require__(/*! @material-ui/icons/ArrowForward */ 162);

var _ArrowForward2 = _interopRequireDefault(_ArrowForward);

var _ArrowBack = __webpack_require__(/*! @material-ui/icons/ArrowBack */ 163);

var _ArrowBack2 = _interopRequireDefault(_ArrowBack);

var _Icon = __webpack_require__(/*! @material-ui/core/Icon */ 39);

var _Icon2 = _interopRequireDefault(_Icon);

var _carouselData = __webpack_require__(/*! ../../constants/carouselData.js */ 164);

var _carouselData2 = _interopRequireDefault(_carouselData);

__webpack_require__(/*! ../../styles/components/vendors/slick-carousel/slick-carousel.css */ 165);

__webpack_require__(/*! ../../styles/components/vendors/slick-carousel/slick.css */ 166);

__webpack_require__(/*! ../../styles/components/vendors/slick-carousel/slick-theme.css */ 167);

var _widgetJss = __webpack_require__(/*! ./widget-jss */ 30);

var _widgetJss2 = _interopRequireDefault(_widgetJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function SampleNextArrow(props) {
  var onClick = props.onClick;

  return _react2.default.createElement(
    _IconButton2.default,
    {
      className: 'nav-next',
      onClick: onClick
    },
    _react2.default.createElement(_ArrowForward2.default, null)
  );
}

SampleNextArrow.propTypes = {
  onClick: _propTypes2.default.func
};

SampleNextArrow.defaultProps = {
  onClick: undefined
};

function SamplePrevArrow(props) {
  var onClick = props.onClick;

  return _react2.default.createElement(
    _IconButton2.default,
    {
      className: 'nav-prev',
      onClick: onClick
    },
    _react2.default.createElement(_ArrowBack2.default, null)
  );
}

SamplePrevArrow.propTypes = {
  onClick: _propTypes2.default.func
};

SamplePrevArrow.defaultProps = {
  onClick: undefined
};

var CarouselWidget = function (_React$Component) {
  _inherits(CarouselWidget, _React$Component);

  function CarouselWidget() {
    _classCallCheck(this, CarouselWidget);

    return _possibleConstructorReturn(this, (CarouselWidget.__proto__ || Object.getPrototypeOf(CarouselWidget)).apply(this, arguments));
  }

  _createClass(CarouselWidget, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;

      var settings = {
        dots: true,
        infinite: true,
        centerMode: false,
        speed: 500,
        autoplaySpeed: 5500,
        pauseOnHover: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
          breakpoint: 960,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }],
        cssEase: 'ease-out',
        nextArrow: _react2.default.createElement(SampleNextArrow, null),
        prevArrow: _react2.default.createElement(SamplePrevArrow, null)
      };
      return _react2.default.createElement(
        'div',
        { className: 'container custom-arrow' },
        _react2.default.createElement(
          _reactSlick2.default,
          settings,
          _carouselData2.default.map(function (item, index) {
            return _react2.default.createElement(
              'div',
              { key: index.toString() },
              _react2.default.createElement(
                'div',
                { style: { backgroundColor: item.background }, className: classes.carouselItem },
                _react2.default.createElement(
                  _Icon2.default,
                  { className: classes.iconBg },
                  item.icon
                ),
                _react2.default.createElement(
                  _Typography2.default,
                  { className: classes.carouselTitle, variant: 'subheading' },
                  _react2.default.createElement(
                    _Icon2.default,
                    null,
                    item.icon
                  ),
                  item.title
                ),
                _react2.default.createElement(
                  _Typography2.default,
                  { className: classes.carouselDesc },
                  item.desc
                )
              )
            );
          })
        )
      );
    }
  }]);

  return CarouselWidget;
}(_react2.default.Component);

CarouselWidget.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(_widgetJss2.default)(CarouselWidget);

/***/ }),
/* 161 */
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),
/* 162 */
/*!**************************************************!*\
  !*** external "@material-ui/icons/ArrowForward" ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowForward");

/***/ }),
/* 163 */
/*!***********************************************!*\
  !*** external "@material-ui/icons/ArrowBack" ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowBack");

/***/ }),
/* 164 */
/*!*******************************************!*\
  !*** ./src/app/constants/carouselData.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var carouselData = [{
  background: '#7CB342',
  title: 'Satefy',
  desc: 'An toàn là trên hết',
  icon: 'mood'
}, {
  background: '#E91E63',
  title: 'Feature',
  desc: 'Tiện ích luôn đặt lên hàng đầu.',
  icon: 'flag'
}, {
  background: '#0091EA',
  title: 'Unlimited',
  desc: 'Không ngừng mở rộng phạm vi phục vụ.',
  icon: 'all_inclusive'
}, {
  background: '#00BFA5',
  title: 'Complete',
  desc: 'Hoàn thiện cả về chất lượng phục vụ và thái độ phục vụ',
  icon: 'done'
}, {
  background: '#F57F17',
  title: 'Easy',
  desc: 'Đơn giản hóa đế tiếp cận với khách hàng',
  icon: 'extension'
}, {
  background: '#546E7A',
  title: 'Public',
  desc: 'Marketing thật mạnh',
  icon: 'public'
}];

exports.default = carouselData;

/***/ }),
/* 165 */
/*!*****************************************************************************!*\
  !*** ./src/app/styles/components/vendors/slick-carousel/slick-carousel.css ***!
  \*****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {



/***/ }),
/* 166 */
/*!********************************************************************!*\
  !*** ./src/app/styles/components/vendors/slick-carousel/slick.css ***!
  \********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {



/***/ }),
/* 167 */
/*!**************************************************************************!*\
  !*** ./src/app/styles/components/vendors/slick-carousel/slick-theme.css ***!
  \**************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {



/***/ }),
/* 168 */
/*!**************************************************!*\
  !*** ./src/app/components/Widget/AlbumWidget.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _GridList = __webpack_require__(/*! @material-ui/core/GridList */ 169);

var _GridList2 = _interopRequireDefault(_GridList);

var _GridListTile = __webpack_require__(/*! @material-ui/core/GridListTile */ 170);

var _GridListTile2 = _interopRequireDefault(_GridListTile);

var _GridListTileBar = __webpack_require__(/*! @material-ui/core/GridListTileBar */ 171);

var _GridListTileBar2 = _interopRequireDefault(_GridListTileBar);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ 13);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Info = __webpack_require__(/*! @material-ui/icons/Info */ 45);

var _Info2 = _interopRequireDefault(_Info);

var _imgData = __webpack_require__(/*! ../../constants/imgData.js */ 172);

var _imgData2 = _interopRequireDefault(_imgData);

var _PapperBlock = __webpack_require__(/*! ./../PapperBlock/PapperBlock */ 40);

var _PapperBlock2 = _interopRequireDefault(_PapperBlock);

var _widgetJss = __webpack_require__(/*! ./widget-jss */ 30);

var _widgetJss2 = _interopRequireDefault(_widgetJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AlbumWidget = function (_React$Component) {
  _inherits(AlbumWidget, _React$Component);

  function AlbumWidget() {
    _classCallCheck(this, AlbumWidget);

    return _possibleConstructorReturn(this, (AlbumWidget.__proto__ || Object.getPrototypeOf(AlbumWidget)).apply(this, arguments));
  }

  _createClass(AlbumWidget, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;

      return _react2.default.createElement(
        _PapperBlock2.default,
        { noMargin: true, title: 'Albums (4)', whiteBg: true, desc: '' },
        _react2.default.createElement(
          'div',
          { className: classes.albumRoot },
          _react2.default.createElement(
            _GridList2.default,
            { cellHeight: 180, className: classes.gridList },
            _imgData2.default.map(function (tile, index) {
              if (index >= 4) {
                return false;
              }
              return _react2.default.createElement(
                _GridListTile2.default,
                { key: index.toString() },
                _react2.default.createElement('img', { src: tile.img, className: classes.img, alt: tile.title }),
                _react2.default.createElement(_GridListTileBar2.default, {
                  title: tile.title,
                  subtitle: _react2.default.createElement(
                    'span',
                    null,
                    'by: ',
                    tile.author
                  ),
                  actionIcon: _react2.default.createElement(
                    _IconButton2.default,
                    { className: classes.icon },
                    _react2.default.createElement(_Info2.default, null)
                  )
                })
              );
            })
          )
        )
      );
    }
  }]);

  return AlbumWidget;
}(_react2.default.Component);

AlbumWidget.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(_widgetJss2.default)(AlbumWidget);

/***/ }),
/* 169 */
/*!*********************************************!*\
  !*** external "@material-ui/core/GridList" ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/GridList");

/***/ }),
/* 170 */
/*!*************************************************!*\
  !*** external "@material-ui/core/GridListTile" ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/GridListTile");

/***/ }),
/* 171 */
/*!****************************************************!*\
  !*** external "@material-ui/core/GridListTileBar" ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/GridListTileBar");

/***/ }),
/* 172 */
/*!**************************************!*\
  !*** ./src/app/constants/imgData.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _images = __webpack_require__(/*! ./images */ 67);

var _images2 = _interopRequireDefault(_images);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var imgData = [{
  img: _images2.default[3],
  thumb: _images2.default[3],
  title: 'Hyundai',
  author: 'vking34',
  cols: 2,
  featured: true
}, {
  img: _images2.default[5],
  thumb: _images2.default[5],
  title: 'Honda',
  author: 'Antonie'
}, {
  img: _images2.default[33],
  thumb: _images2.default[33],
  title: 'Toyota',
  author: 'Dũng'
}, {
  img: _images2.default[35],
  thumb: _images2.default[35],
  title: 'Deawoo',
  author: 'Vương',
  featured: true
}];

exports.default = imgData;

/***/ }),
/* 173 */
/*!************************************************!*\
  !*** ./src/app/components/Tables/CrudTable.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _MainTable = __webpack_require__(/*! ./tableParts/MainTable */ 174);

var _MainTable2 = _interopRequireDefault(_MainTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CrudTable = function (_React$Component) {
  _inherits(CrudTable, _React$Component);

  function CrudTable() {
    _classCallCheck(this, CrudTable);

    return _possibleConstructorReturn(this, (CrudTable.__proto__ || Object.getPrototypeOf(CrudTable)).apply(this, arguments));
  }

  _createClass(CrudTable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // console.log(typeof this.props.dataInit);
      // console.log(this.props.dataInit);
      this.props.fetchData(this.props.dataInit, this.props.branch);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          dataTable = _props.dataTable,
          addEmptyRow = _props.addEmptyRow,
          removeRow = _props.removeRow,
          updateRow = _props.updateRow,
          editRow = _props.editRow,
          finishEditRow = _props.finishEditRow,
          anchor = _props.anchor,
          branch = _props.branch;

      return _react2.default.createElement(_MainTable2.default, {
        title: title,
        addEmptyRow: addEmptyRow,
        items: dataTable,
        removeRow: removeRow,
        updateRow: updateRow,
        editRow: editRow,
        finishEditRow: finishEditRow,
        anchor: anchor,
        branch: branch
      });
    }
  }]);

  return CrudTable;
}(_react2.default.Component);

CrudTable.propTypes = {
  title: _propTypes2.default.string.isRequired,
  anchor: _propTypes2.default.array.isRequired,
  dataInit: _propTypes2.default.array.isRequired,
  dataTable: _propTypes2.default.object.isRequired,
  fetchData: _propTypes2.default.func.isRequired,
  addEmptyRow: _propTypes2.default.func.isRequired,
  removeRow: _propTypes2.default.func.isRequired,
  updateRow: _propTypes2.default.func.isRequired,
  editRow: _propTypes2.default.func.isRequired,
  finishEditRow: _propTypes2.default.func.isRequired,
  branch: _propTypes2.default.string.isRequired
};

exports.default = CrudTable;

/***/ }),
/* 174 */
/*!***********************************************************!*\
  !*** ./src/app/components/Tables/tableParts/MainTable.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Table = __webpack_require__(/*! @material-ui/core/Table */ 175);

var _Table2 = _interopRequireDefault(_Table);

var _TableBody = __webpack_require__(/*! @material-ui/core/TableBody */ 176);

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableCell = __webpack_require__(/*! @material-ui/core/TableCell */ 20);

var _TableCell2 = _interopRequireDefault(_TableCell);

var _TableHead = __webpack_require__(/*! @material-ui/core/TableHead */ 177);

var _TableHead2 = _interopRequireDefault(_TableHead);

var _TableRow = __webpack_require__(/*! @material-ui/core/TableRow */ 178);

var _TableRow2 = _interopRequireDefault(_TableRow);

var _Toolbar = __webpack_require__(/*! @material-ui/core/Toolbar */ 43);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ 19);

var _Typography2 = _interopRequireDefault(_Typography);

var _Tooltip = __webpack_require__(/*! @material-ui/core/Tooltip */ 179);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ 35);

var _Button2 = _interopRequireDefault(_Button);

var _classnames = __webpack_require__(/*! classnames */ 11);

var _classnames2 = _interopRequireDefault(_classnames);

var _Add = __webpack_require__(/*! @material-ui/icons/Add */ 180);

var _Add2 = _interopRequireDefault(_Add);

var _Table3 = __webpack_require__(/*! ../../../styles/components/Table.scss */ 21);

var _Table4 = _interopRequireDefault(_Table3);

var _Row = __webpack_require__(/*! ./Row */ 181);

var _Row2 = _interopRequireDefault(_Row);

var _tableStyleJss = __webpack_require__(/*! ./tableStyle-jss */ 197);

var _tableStyleJss2 = _interopRequireDefault(_tableStyleJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainTable = function (_React$Component) {
  _inherits(MainTable, _React$Component);

  function MainTable() {
    _classCallCheck(this, MainTable);

    return _possibleConstructorReturn(this, (MainTable.__proto__ || Object.getPrototypeOf(MainTable)).apply(this, arguments));
  }

  _createClass(MainTable, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          items = _props.items,
          addEmptyRow = _props.addEmptyRow,
          _removeRow = _props.removeRow,
          _updateRow = _props.updateRow,
          _editRow = _props.editRow,
          _finishEditRow = _props.finishEditRow,
          anchor = _props.anchor,
          branch = _props.branch,
          title = _props.title;


      var getItems = function getItems(dataArray) {
        return dataArray.map(function (item) {
          return _react2.default.createElement(_Row2.default, {
            anchor: anchor,
            updateRow: function updateRow(event) {
              return _updateRow(event, item, branch);
            },
            item: item,
            removeRow: function removeRow() {
              return _removeRow(item, branch);
            },
            key: item.get('id'),
            editRow: function editRow() {
              return _editRow(item, branch);
            },
            finishEditRow: function finishEditRow() {
              return _finishEditRow(item, branch);
            },
            branch: branch
          });
        });
      };

      var getHead = function getHead(dataArray) {
        return dataArray.map(function (item, index) {
          if (!item.hidden) {
            return _react2.default.createElement(
              _TableCell2.default,
              { padding: 'none', key: index.toString(), width: item.width },
              item.label
            );
          }
          return false;
        });
      };
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Toolbar2.default,
          { className: classes.toolbar },
          _react2.default.createElement(
            'div',
            { className: classes.title },
            _react2.default.createElement(
              _Typography2.default,
              { variant: 'title' },
              title
            )
          ),
          _react2.default.createElement('div', { className: classes.spacer }),
          _react2.default.createElement(
            'div',
            { className: classes.actions },
            _react2.default.createElement(
              _Tooltip2.default,
              { title: 'Add Item' },
              _react2.default.createElement(
                _Button2.default,
                { variant: 'raised', onClick: function onClick() {
                    return addEmptyRow(anchor, branch);
                  }, color: 'secondary', className: classes.button },
                _react2.default.createElement(_Add2.default, { className: (0, _classnames2.default)(classes.leftIcon, classes.iconSmall) }),
                'Add New'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: classes.rootTable },
          _react2.default.createElement(
            _Table2.default,
            { className: (0, _classnames2.default)(_Table4.default.tableCrud, classes.table, _Table4.default.stripped) },
            _react2.default.createElement(
              _TableHead2.default,
              null,
              _react2.default.createElement(
                _TableRow2.default,
                null,
                getHead(anchor)
              )
            ),
            _react2.default.createElement(
              _TableBody2.default,
              null,
              getItems(items)
            )
          )
        )
      );
    }
  }]);

  return MainTable;
}(_react2.default.Component);

MainTable.propTypes = {
  title: _propTypes2.default.string.isRequired,
  classes: _propTypes2.default.object.isRequired,
  items: _propTypes2.default.object.isRequired,
  anchor: _propTypes2.default.array.isRequired,
  addEmptyRow: _propTypes2.default.func.isRequired,
  removeRow: _propTypes2.default.func.isRequired,
  updateRow: _propTypes2.default.func.isRequired,
  editRow: _propTypes2.default.func.isRequired,
  finishEditRow: _propTypes2.default.func.isRequired,
  branch: _propTypes2.default.string.isRequired
};

exports.default = (0, _styles.withStyles)(_tableStyleJss2.default)(MainTable);

/***/ }),
/* 175 */
/*!******************************************!*\
  !*** external "@material-ui/core/Table" ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),
/* 176 */
/*!**********************************************!*\
  !*** external "@material-ui/core/TableBody" ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),
/* 177 */
/*!**********************************************!*\
  !*** external "@material-ui/core/TableHead" ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),
/* 178 */
/*!*********************************************!*\
  !*** external "@material-ui/core/TableRow" ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),
/* 179 */
/*!********************************************!*\
  !*** external "@material-ui/core/Tooltip" ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),
/* 180 */
/*!*****************************************!*\
  !*** external "@material-ui/icons/Add" ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Add");

/***/ }),
/* 181 */
/*!*****************************************************!*\
  !*** ./src/app/components/Tables/tableParts/Row.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TableCell = __webpack_require__(/*! @material-ui/core/TableCell */ 20);

var _TableCell2 = _interopRequireDefault(_TableCell);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ 13);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _classnames = __webpack_require__(/*! classnames */ 11);

var _classnames2 = _interopRequireDefault(_classnames);

var _Delete = __webpack_require__(/*! @material-ui/icons/Delete */ 182);

var _Delete2 = _interopRequireDefault(_Delete);

var _BorderColor = __webpack_require__(/*! @material-ui/icons/BorderColor */ 183);

var _BorderColor2 = _interopRequireDefault(_BorderColor);

var _Done = __webpack_require__(/*! @material-ui/icons/Done */ 184);

var _Done2 = _interopRequireDefault(_Done);

var _Table = __webpack_require__(/*! ../../../styles/components/Table.scss */ 21);

var _Table2 = _interopRequireDefault(_Table);

var _EditableCell = __webpack_require__(/*! ./EditableCell */ 185);

var _EditableCell2 = _interopRequireDefault(_EditableCell);

var _SelectableCell = __webpack_require__(/*! ./SelectableCell */ 188);

var _SelectableCell2 = _interopRequireDefault(_SelectableCell);

var _ToggleCell = __webpack_require__(/*! ./ToggleCell */ 190);

var _ToggleCell2 = _interopRequireDefault(_ToggleCell);

var _DatePickerCell = __webpack_require__(/*! ./DatePickerCell */ 192);

var _DatePickerCell2 = _interopRequireDefault(_DatePickerCell);

var _TimePickerCell = __webpack_require__(/*! ./TimePickerCell */ 194);

var _TimePickerCell2 = _interopRequireDefault(_TimePickerCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    button: {
      margin: theme.spacing.unit
    }
  };
};

var Row = function (_React$Component) {
  _inherits(Row, _React$Component);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
  }

  _createClass(Row, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          anchor = _props.anchor,
          item = _props.item,
          removeRow = _props.removeRow,
          _updateRow = _props.updateRow,
          editRow = _props.editRow,
          finishEditRow = _props.finishEditRow,
          branch = _props.branch;

      var eventDel = function eventDel() {
        removeRow(item, branch);
      };
      var eventEdit = function eventEdit() {
        editRow(item, branch);
      };
      var eventDone = function eventDone() {
        finishEditRow(item, branch);
      };
      var renderCell = function renderCell(dataArray) {
        return dataArray.map(function (itemCell, index) {
          if (itemCell.name !== 'action' && !itemCell.hidden) {
            var inputType = anchor[index].type;
            switch (inputType) {
              case 'selection':
                return _react2.default.createElement(_SelectableCell2.default, {
                  updateRow: function updateRow(event) {
                    return _updateRow(event, branch);
                  },
                  cellData: {
                    type: itemCell.name,
                    value: item.get(itemCell.name),
                    id: item.get('id')
                  },
                  edited: item.get('edited'),
                  key: index.toString(),
                  options: anchor[index].options,
                  branch: branch
                });
              case 'toggle':
                return _react2.default.createElement(_ToggleCell2.default, {
                  updateRow: function updateRow(event) {
                    return _updateRow(event, branch);
                  },
                  cellData: {
                    type: itemCell.name,
                    value: item.get(itemCell.name),
                    id: item.get('id')
                  },
                  edited: item.get('edited'),
                  key: index.toString(),
                  branch: branch
                });
              case 'date':
                return _react2.default.createElement(_DatePickerCell2.default, {
                  updateRow: function updateRow(event) {
                    return _updateRow(event, branch);
                  },
                  cellData: {
                    type: itemCell.name,
                    value: item.get(itemCell.name),
                    id: item.get('id')
                  },
                  edited: item.get('edited'),
                  key: index.toString(),
                  branch: branch
                });
              case 'time':
                return _react2.default.createElement(_TimePickerCell2.default, {
                  updateRow: function updateRow(event) {
                    return _updateRow(event, branch);
                  },
                  cellData: {
                    type: itemCell.name,
                    value: item.get(itemCell.name),
                    id: item.get('id')
                  },
                  edited: item.get('edited'),
                  key: index.toString(),
                  branch: branch
                });
              default:
                return _react2.default.createElement(_EditableCell2.default, {
                  updateRow: function updateRow(event) {
                    return _updateRow(event, branch);
                  },
                  cellData: {
                    type: itemCell.name,
                    value: item.get(itemCell.name),
                    id: item.get('id')
                  },
                  edited: item.get('edited'),
                  key: index.toString(),
                  inputType: inputType,
                  branch: branch
                });
            }
          }
          return false;
        });
      };
      return _react2.default.createElement(
        'tr',
        { className: item.get('edited') ? _Table2.default.editing : '' },
        renderCell(anchor),
        _react2.default.createElement(
          _TableCell2.default,
          { padding: 'none' },
          _react2.default.createElement(
            _IconButton2.default,
            {
              onClick: function onClick() {
                return eventEdit(_this2);
              },
              className: (0, _classnames2.default)(item.get('edited') ? _Table2.default.hideAction : '', classes.button),
              'aria-label': 'Edit'
            },
            _react2.default.createElement(_BorderColor2.default, null)
          ),
          _react2.default.createElement(
            _IconButton2.default,
            {
              onClick: function onClick() {
                return eventDone(_this2);
              },
              color: 'secondary',
              className: (0, _classnames2.default)(!item.get('edited') ? _Table2.default.hideAction : '', classes.button),
              'aria-label': 'Done'
            },
            _react2.default.createElement(_Done2.default, null)
          ),
          _react2.default.createElement(
            _IconButton2.default,
            {
              onClick: function onClick() {
                return eventDel(_this2);
              },
              className: classes.button,
              'aria-label': 'Delete'
            },
            _react2.default.createElement(_Delete2.default, null)
          )
        )
      );
    }
  }]);

  return Row;
}(_react2.default.Component);

Row.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  anchor: _propTypes2.default.array.isRequired,
  item: _propTypes2.default.object.isRequired,
  removeRow: _propTypes2.default.func.isRequired,
  updateRow: _propTypes2.default.func.isRequired,
  editRow: _propTypes2.default.func.isRequired,
  finishEditRow: _propTypes2.default.func.isRequired,
  branch: _propTypes2.default.string.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(Row);

/***/ }),
/* 182 */
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),
/* 183 */
/*!*************************************************!*\
  !*** external "@material-ui/icons/BorderColor" ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/BorderColor");

/***/ }),
/* 184 */
/*!******************************************!*\
  !*** external "@material-ui/icons/Done" ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Done");

/***/ }),
/* 185 */
/*!**************************************************************!*\
  !*** ./src/app/components/Tables/tableParts/EditableCell.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TableCell = __webpack_require__(/*! @material-ui/core/TableCell */ 20);

var _TableCell2 = _interopRequireDefault(_TableCell);

var _Input = __webpack_require__(/*! @material-ui/core/Input */ 186);

var _Input2 = _interopRequireDefault(_Input);

var _TextField = __webpack_require__(/*! @material-ui/core/TextField */ 187);

var _TextField2 = _interopRequireDefault(_TextField);

var _Table = __webpack_require__(/*! ../../../styles/components/Table.scss */ 21);

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditableCell = function (_React$Component) {
  _inherits(EditableCell, _React$Component);

  function EditableCell() {
    _classCallCheck(this, EditableCell);

    return _possibleConstructorReturn(this, (EditableCell.__proto__ || Object.getPrototypeOf(EditableCell)).apply(this, arguments));
  }

  _createClass(EditableCell, [{
    key: 'handleUpdate',
    value: function handleUpdate(event) {
      event.persist();
      this.props.updateRow(event, this.props.branch);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          cellData = _props.cellData,
          edited = _props.edited,
          inputType = _props.inputType;

      switch (inputType) {
        case 'text':
          return _react2.default.createElement(
            _TableCell2.default,
            { padding: 'none' },
            _react2.default.createElement(_Input2.default, {
              placeholder: cellData.type,
              name: cellData.type,
              className: _Table2.default.crudInput,
              id: cellData.id.toString(),
              value: cellData.value,
              onChange: function onChange(event) {
                return _this2.handleUpdate(event);
              },
              disabled: !edited,
              margin: 'none',
              inputProps: {
                'aria-label': 'Description'
              }
            })
          );
        case 'number':
          return _react2.default.createElement(
            _TableCell2.default,
            { padding: 'none' },
            _react2.default.createElement(_TextField2.default, {
              id: cellData.id.toString(),
              name: cellData.type,
              className: _Table2.default.crudInput,
              value: cellData.value,
              onChange: function onChange(event) {
                return _this2.handleUpdate(event);
              },
              type: 'number',
              InputLabelProps: {
                shrink: true
              },
              margin: 'none',
              disabled: !edited
            })
          );
        default:
          return _react2.default.createElement(
            _TableCell2.default,
            { padding: 'none' },
            _react2.default.createElement(_Input2.default, {
              placeholder: cellData.type,
              name: cellData.type,
              className: _Table2.default.crudInput,
              id: cellData.id.toString(),
              value: cellData.value,
              onChange: function onChange(event) {
                return _this2.handleUpdate(event);
              },
              disabled: !edited,
              margin: 'none',
              inputProps: {
                'aria-label': 'Description'
              }
            })
          );
      }
    }
  }]);

  return EditableCell;
}(_react2.default.Component);

EditableCell.propTypes = {
  inputType: _propTypes2.default.string.isRequired,
  cellData: _propTypes2.default.object.isRequired,
  updateRow: _propTypes2.default.func.isRequired,
  edited: _propTypes2.default.bool.isRequired,
  branch: _propTypes2.default.string.isRequired
};

exports.default = EditableCell;

/***/ }),
/* 186 */
/*!******************************************!*\
  !*** external "@material-ui/core/Input" ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),
/* 187 */
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),
/* 188 */
/*!****************************************************************!*\
  !*** ./src/app/components/Tables/tableParts/SelectableCell.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Select = __webpack_require__(/*! @material-ui/core/Select */ 189);

var _Select2 = _interopRequireDefault(_Select);

var _MenuItem = __webpack_require__(/*! @material-ui/core/MenuItem */ 36);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _TableCell = __webpack_require__(/*! @material-ui/core/TableCell */ 20);

var _TableCell2 = _interopRequireDefault(_TableCell);

var _Table = __webpack_require__(/*! ../../../styles/components/Table.scss */ 21);

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectableCell = function (_React$Component) {
  _inherits(SelectableCell, _React$Component);

  function SelectableCell() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SelectableCell);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectableCell.__proto__ || Object.getPrototypeOf(SelectableCell)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (event) {
      _this.props.updateRow(event, _this.props.branch);
      _this.setState(_defineProperty({}, event.target.name, event.target.value));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SelectableCell, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          cellData = _props.cellData,
          edited = _props.edited,
          options = _props.options;

      return _react2.default.createElement(
        _TableCell2.default,
        { padding: 'none' },
        _react2.default.createElement(
          _Select2.default,
          {
            name: cellData.type,
            id: cellData.id.toString(),
            className: _Table2.default.crudInput,
            value: cellData.value,
            onChange: this.handleChange,
            displayEmpty: true,
            disabled: !edited,
            margin: 'none'
          },
          options.map(function (option, index) {
            return _react2.default.createElement(
              _MenuItem2.default,
              { value: option, key: index.toString() },
              option
            );
          })
        )
      );
    }
  }]);

  return SelectableCell;
}(_react2.default.Component);

SelectableCell.propTypes = {
  options: _propTypes2.default.array.isRequired,
  cellData: _propTypes2.default.object.isRequired,
  updateRow: _propTypes2.default.func.isRequired,
  edited: _propTypes2.default.bool.isRequired,
  branch: _propTypes2.default.string.isRequired
};

exports.default = SelectableCell;

/***/ }),
/* 189 */
/*!*******************************************!*\
  !*** external "@material-ui/core/Select" ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),
/* 190 */
/*!************************************************************!*\
  !*** ./src/app/components/Tables/tableParts/ToggleCell.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TableCell = __webpack_require__(/*! @material-ui/core/TableCell */ 20);

var _TableCell2 = _interopRequireDefault(_TableCell);

var _classnames = __webpack_require__(/*! classnames */ 11);

var _classnames2 = _interopRequireDefault(_classnames);

var _FormControlLabel = __webpack_require__(/*! @material-ui/core/FormControlLabel */ 68);

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _Switch = __webpack_require__(/*! @material-ui/core/Switch */ 191);

var _Switch2 = _interopRequireDefault(_Switch);

var _Table = __webpack_require__(/*! ../../../styles/components/Table.scss */ 21);

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToggleCell = function (_React$Component) {
  _inherits(ToggleCell, _React$Component);

  function ToggleCell() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ToggleCell);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ToggleCell.__proto__ || Object.getPrototypeOf(ToggleCell)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isChecked: _this.props.cellData.value
    }, _this.handleChange = function (event) {
      _this.setState({ isChecked: event.target.checked });
      _this.props.updateRow(event, _this.props.branch);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ToggleCell, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          cellData = _props.cellData,
          edited = _props.edited;

      return _react2.default.createElement(
        _TableCell2.default,
        { className: _Table2.default.toggleCell, padding: 'none', textalign: 'center' },
        _react2.default.createElement('div', { className: (0, _classnames2.default)(_Table2.default.coverReadonly, !edited ? _Table2.default.show : '') }),
        _react2.default.createElement(_FormControlLabel2.default, {
          control: _react2.default.createElement(_Switch2.default, {
            name: cellData.type,
            id: cellData.id.toString(),
            className: _Table2.default.crudInput,
            checked: this.state.isChecked,
            onChange: this.handleChange,
            value: cellData.value.toString()
          })
        })
      );
    }
  }]);

  return ToggleCell;
}(_react2.default.Component);

ToggleCell.propTypes = {
  cellData: _propTypes2.default.object.isRequired,
  updateRow: _propTypes2.default.func.isRequired,
  edited: _propTypes2.default.bool.isRequired,
  branch: _propTypes2.default.string.isRequired
};

exports.default = ToggleCell;

/***/ }),
/* 191 */
/*!*******************************************!*\
  !*** external "@material-ui/core/Switch" ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Switch");

/***/ }),
/* 192 */
/*!****************************************************************!*\
  !*** ./src/app/components/Tables/tableParts/DatePickerCell.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _momentUtils = __webpack_require__(/*! material-ui-pickers/utils/moment-utils */ 69);

var _momentUtils2 = _interopRequireDefault(_momentUtils);

var _MuiPickersUtilsProvider = __webpack_require__(/*! material-ui-pickers/utils/MuiPickersUtilsProvider */ 70);

var _MuiPickersUtilsProvider2 = _interopRequireDefault(_MuiPickersUtilsProvider);

var _TableCell = __webpack_require__(/*! @material-ui/core/TableCell */ 20);

var _TableCell2 = _interopRequireDefault(_TableCell);

var _DatePicker = __webpack_require__(/*! material-ui-pickers/DatePicker */ 193);

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _Table = __webpack_require__(/*! ../../../styles/components/Table.scss */ 21);

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatePickerCell = function (_React$Component) {
  _inherits(DatePickerCell, _React$Component);

  function DatePickerCell() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DatePickerCell);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DatePickerCell.__proto__ || Object.getPrototypeOf(DatePickerCell)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      event: {
        target: {
          name: _this.props.cellData.type,
          value: _this.props.cellData.value
        }
      }
    }, _this.handleDateChange = function (date) {
      _this.state.event.target.value = date;
      _this.props.updateRow(_this.state.event, _this.props.branch);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DatePickerCell, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          edited = _props.edited,
          cellData = _props.cellData;
      var event = this.state.event;

      return _react2.default.createElement(
        _TableCell2.default,
        { padding: 'none', className: 'text-center', textalign: 'center' },
        _react2.default.createElement(
          _MuiPickersUtilsProvider2.default,
          { utils: _momentUtils2.default },
          _react2.default.createElement(_DatePicker2.default, {
            keyboard: true,
            clearable: true,
            name: cellData.type,
            className: _Table2.default.crudInput,
            format: 'DD/MM/YYYY',
            placeholder: '10/10/2018',
            mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
            value: event.target.value,
            disabled: !edited,
            onChange: this.handleDateChange,
            animateYearScrolling: false
          })
        )
      );
    }
  }]);

  return DatePickerCell;
}(_react2.default.Component);

DatePickerCell.propTypes = {
  cellData: _propTypes2.default.object.isRequired,
  updateRow: _propTypes2.default.func.isRequired,
  edited: _propTypes2.default.bool.isRequired,
  branch: _propTypes2.default.string.isRequired
};

exports.default = DatePickerCell;

/***/ }),
/* 193 */
/*!*************************************************!*\
  !*** external "material-ui-pickers/DatePicker" ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("material-ui-pickers/DatePicker");

/***/ }),
/* 194 */
/*!****************************************************************!*\
  !*** ./src/app/components/Tables/tableParts/TimePickerCell.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _momentUtils = __webpack_require__(/*! material-ui-pickers/utils/moment-utils */ 69);

var _momentUtils2 = _interopRequireDefault(_momentUtils);

var _MuiPickersUtilsProvider = __webpack_require__(/*! material-ui-pickers/utils/MuiPickersUtilsProvider */ 70);

var _MuiPickersUtilsProvider2 = _interopRequireDefault(_MuiPickersUtilsProvider);

var _TableCell = __webpack_require__(/*! @material-ui/core/TableCell */ 20);

var _TableCell2 = _interopRequireDefault(_TableCell);

var _materialUiPickers = __webpack_require__(/*! material-ui-pickers */ 195);

var _InputAdornment = __webpack_require__(/*! @material-ui/core/InputAdornment */ 196);

var _InputAdornment2 = _interopRequireDefault(_InputAdornment);

var _Icon = __webpack_require__(/*! @material-ui/core/Icon */ 39);

var _Icon2 = _interopRequireDefault(_Icon);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ 13);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Table = __webpack_require__(/*! ../../../styles/components/Table.scss */ 21);

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimePickerCell = function (_React$Component) {
  _inherits(TimePickerCell, _React$Component);

  function TimePickerCell() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TimePickerCell);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TimePickerCell.__proto__ || Object.getPrototypeOf(TimePickerCell)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      event: {
        target: {
          name: _this.props.cellData.type,
          value: _this.props.cellData.value
        }
      }
    }, _this.handleTimeChange = function (date) {
      _this.state.event.target.value = date;
      _this.props.updateRow(_this.state.event, _this.props.branch);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TimePickerCell, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          edited = _props.edited,
          cellData = _props.cellData;
      var event = this.state.event;

      return _react2.default.createElement(
        _TableCell2.default,
        { padding: 'none' },
        _react2.default.createElement(
          _MuiPickersUtilsProvider2.default,
          { utils: _momentUtils2.default },
          _react2.default.createElement(_materialUiPickers.TimePicker, {
            name: cellData.type,
            className: _Table2.default.crudInput,
            mask: [/\d/, /\d/, ':', /\d/, /\d/, ' ', /a|p/i, 'M'],
            placeholder: '08:00 AM',
            value: event.target.value,
            disabled: !edited,
            InputProps: {
              endAdornment: _react2.default.createElement(
                _InputAdornment2.default,
                { position: 'end' },
                _react2.default.createElement(
                  _IconButton2.default,
                  null,
                  _react2.default.createElement(
                    _Icon2.default,
                    null,
                    'access_time'
                  )
                )
              )
            },
            onChange: this.handleTimeChange
          })
        )
      );
    }
  }]);

  return TimePickerCell;
}(_react2.default.Component);

TimePickerCell.propTypes = {
  cellData: _propTypes2.default.object.isRequired,
  updateRow: _propTypes2.default.func.isRequired,
  edited: _propTypes2.default.bool.isRequired,
  branch: _propTypes2.default.string.isRequired
};

exports.default = TimePickerCell;

/***/ }),
/* 195 */
/*!**************************************!*\
  !*** external "material-ui-pickers" ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("material-ui-pickers");

/***/ }),
/* 196 */
/*!***************************************************!*\
  !*** external "@material-ui/core/InputAdornment" ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputAdornment");

/***/ }),
/* 197 */
/*!****************************************************************!*\
  !*** ./src/app/components/Tables/tableParts/tableStyle-jss.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colorManipulator = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ 51);

var styles = function styles(theme) {
  return {
    root: {
      paddingRight: theme.spacing.unit
    },
    rootTable: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto'
    },
    highlight: theme.palette.type === 'light' ? {
      color: theme.palette.secondary.main,
      backgroundColor: (0, _colorManipulator.lighten)(theme.palette.secondary.light, 0.85)
    } : {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.secondary.dark
    },
    spacer: {
      flex: '1 1 100%'
    },
    actionsToolbar: {
      color: theme.palette.text.secondary,
      flex: '1 0 auto'
    },
    titleToolbar: {
      flex: '0 0 auto'
    },
    filterBtn: {
      top: -5
    },
    textField: {
      flexBasis: 200,
      width: 300
    },
    table: {
      minWidth: 900
    },
    actions: {
      color: theme.palette.text.secondary,
      margin: 10
    },
    toolbar: {
      backgroundColor: theme.palette.grey[800]
    },
    title: {
      flex: '0 0 auto',
      '& h2': {
        color: theme.palette.common.white
      }
    },
    button: {
      margin: theme.spacing.unit
    },
    iconSmall: {
      fontSize: 20
    },
    leftIcon: {
      marginRight: theme.spacing.unit
    }
  };
};

exports.default = styles;

/***/ }),
/* 198 */
/*!*********************************************************!*\
  !*** ./src/app/components/Notification/Notification.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Snackbar = __webpack_require__(/*! @material-ui/core/Snackbar */ 199);

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ 13);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Close = __webpack_require__(/*! @material-ui/icons/Close */ 200);

var _Close2 = _interopRequireDefault(_Close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    close: {
      width: theme.spacing.unit * 4,
      height: theme.spacing.unit * 4
    }
  };
};

var Notification = function (_React$Component) {
  _inherits(Notification, _React$Component);

  function Notification() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Notification);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Notification.__proto__ || Object.getPrototypeOf(Notification)).call.apply(_ref, [this].concat(args))), _this), _this.handleClose = function (event, reason) {
      if (reason === 'clickaway') {
        return;
      }
      _this.props.close('crudTableDemo');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Notification, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          message = _props.message;

      return _react2.default.createElement(_Snackbar2.default, {
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left'
        },
        open: message !== '',
        autoHideDuration: 3000,
        onClose: function onClose() {
          return _this2.handleClose();
        },
        ContentProps: {
          'aria-describedby': 'message-id'
        },
        message: message,
        action: [_react2.default.createElement(
          _IconButton2.default,
          {
            key: 'close',
            'aria-label': 'Close',
            color: 'inherit',
            className: classes.close,
            onClick: function onClick() {
              return _this2.handleClose();
            }
          },
          _react2.default.createElement(_Close2.default, null)
        )]
      });
    }
  }]);

  return Notification;
}(_react2.default.Component);

Notification.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  close: _propTypes2.default.func.isRequired,
  message: _propTypes2.default.string.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(Notification);

/***/ }),
/* 199 */
/*!*********************************************!*\
  !*** external "@material-ui/core/Snackbar" ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),
/* 200 */
/*!*******************************************!*\
  !*** external "@material-ui/icons/Close" ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),
/* 201 */
/*!**************************************************!*\
  !*** ./src/app/components/CardPaper/PostCard.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ 19);

var _Typography2 = _interopRequireDefault(_Typography);

var _Card = __webpack_require__(/*! @material-ui/core/Card */ 202);

var _Card2 = _interopRequireDefault(_Card);

var _Menu = __webpack_require__(/*! @material-ui/core/Menu */ 46);

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = __webpack_require__(/*! @material-ui/core/MenuItem */ 36);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _CardHeader = __webpack_require__(/*! @material-ui/core/CardHeader */ 203);

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardMedia = __webpack_require__(/*! @material-ui/core/CardMedia */ 204);

var _CardMedia2 = _interopRequireDefault(_CardMedia);

var _CardContent = __webpack_require__(/*! @material-ui/core/CardContent */ 205);

var _CardContent2 = _interopRequireDefault(_CardContent);

var _CardActions = __webpack_require__(/*! @material-ui/core/CardActions */ 206);

var _CardActions2 = _interopRequireDefault(_CardActions);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ 13);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Avatar = __webpack_require__(/*! @material-ui/core/Avatar */ 27);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Favorite = __webpack_require__(/*! @material-ui/icons/Favorite */ 207);

var _Favorite2 = _interopRequireDefault(_Favorite);

var _Share = __webpack_require__(/*! @material-ui/icons/Share */ 208);

var _Share2 = _interopRequireDefault(_Share);

var _Comment = __webpack_require__(/*! @material-ui/icons/Comment */ 209);

var _Comment2 = _interopRequireDefault(_Comment);

var _MoreVert = __webpack_require__(/*! @material-ui/icons/MoreVert */ 210);

var _MoreVert2 = _interopRequireDefault(_MoreVert);

var _cardStyleJss = __webpack_require__(/*! ./cardStyle-jss */ 211);

var _cardStyleJss2 = _interopRequireDefault(_cardStyleJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var optionsOpt = ['Report this post', 'Hide this post', 'Copy link'];

var ITEM_HEIGHT = 48;

var PostCard = function (_React$Component) {
  _inherits(PostCard, _React$Component);

  function PostCard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PostCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PostCard.__proto__ || Object.getPrototypeOf(PostCard)).call.apply(_ref, [this].concat(args))), _this), _this.state = { anchorElOpt: null }, _this.handleClickOpt = function (event) {
      _this.setState({ anchorElOpt: event.currentTarget });
    }, _this.handleCloseOpt = function () {
      _this.setState({ anchorElOpt: null });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PostCard, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          avatar = _props.avatar,
          name = _props.name,
          date = _props.date,
          image = _props.image,
          content = _props.content,
          liked = _props.liked,
          shared = _props.shared,
          commented = _props.commented;
      var anchorElOpt = this.state.anchorElOpt;

      return _react2.default.createElement(
        _Card2.default,
        { className: classes.cardSocmed },
        _react2.default.createElement(_CardHeader2.default, {
          avatar: _react2.default.createElement(_Avatar2.default, { alt: 'avatar', src: avatar, className: classes.avatar }),
          action: _react2.default.createElement(
            _IconButton2.default,
            {
              'aria-label': 'More',
              'aria-owns': anchorElOpt ? 'long-menu' : null,
              'aria-haspopup': 'true',
              className: classes.button,
              onClick: this.handleClickOpt
            },
            _react2.default.createElement(_MoreVert2.default, null)
          ),
          title: name,
          subheader: date
        }),
        _react2.default.createElement(
          _Menu2.default,
          {
            id: 'long-menu',
            anchorEl: anchorElOpt,
            open: Boolean(anchorElOpt),
            onClose: this.handleCloseOpt,
            PaperProps: {
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: 200
              }
            }
          },
          optionsOpt.map(function (option) {
            return _react2.default.createElement(
              _MenuItem2.default,
              { key: option, selected: option === 'Edit Profile', onClick: _this2.handleCloseOpt },
              option
            );
          })
        ),
        image !== '' && _react2.default.createElement(_CardMedia2.default, {
          className: classes.media,
          image: image,
          title: 'Contemplative Reptile'
        }),
        _react2.default.createElement(
          _CardContent2.default,
          null,
          _react2.default.createElement(
            _Typography2.default,
            { component: 'p' },
            content
          )
        ),
        _react2.default.createElement(
          _CardActions2.default,
          { className: classes.actions, disableActionSpacing: true },
          _react2.default.createElement(
            _IconButton2.default,
            { 'aria-label': 'Add to favorites', className: classes.button },
            _react2.default.createElement(_Favorite2.default, { className: liked > 0 && classes.liked }),
            _react2.default.createElement(
              'span',
              { className: classes.num },
              liked
            )
          ),
          _react2.default.createElement(
            _IconButton2.default,
            { 'aria-label': 'Share', className: classes.button },
            _react2.default.createElement(_Share2.default, { className: shared > 0 && classes.shared }),
            _react2.default.createElement(
              'span',
              { className: classes.num },
              shared
            )
          ),
          _react2.default.createElement(
            _IconButton2.default,
            { 'aria-label': 'Comment', className: classes.rightIcon },
            _react2.default.createElement(_Comment2.default, null),
            _react2.default.createElement(
              'span',
              { className: classes.num },
              commented
            )
          )
        )
      );
    }
  }]);

  return PostCard;
}(_react2.default.Component);

PostCard.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  avatar: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  date: _propTypes2.default.string.isRequired,
  image: _propTypes2.default.string,
  content: _propTypes2.default.string.isRequired,
  liked: _propTypes2.default.number.isRequired,
  shared: _propTypes2.default.number.isRequired,
  commented: _propTypes2.default.number.isRequired
};

PostCard.defaultProps = {
  image: ''
};

exports.default = (0, _styles.withStyles)(_cardStyleJss2.default)(PostCard);

/***/ }),
/* 202 */
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),
/* 203 */
/*!***********************************************!*\
  !*** external "@material-ui/core/CardHeader" ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardHeader");

/***/ }),
/* 204 */
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),
/* 205 */
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),
/* 206 */
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),
/* 207 */
/*!**********************************************!*\
  !*** external "@material-ui/icons/Favorite" ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),
/* 208 */
/*!*******************************************!*\
  !*** external "@material-ui/icons/Share" ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Share");

/***/ }),
/* 209 */
/*!*********************************************!*\
  !*** external "@material-ui/icons/Comment" ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Comment");

/***/ }),
/* 210 */
/*!**********************************************!*\
  !*** external "@material-ui/icons/MoreVert" ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoreVert");

/***/ }),
/* 211 */
/*!*******************************************************!*\
  !*** ./src/app/components/CardPaper/cardStyle-jss.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pink = __webpack_require__(/*! @material-ui/core/colors/pink */ 64);

var _pink2 = _interopRequireDefault(_pink);

var _orange = __webpack_require__(/*! @material-ui/core/colors/orange */ 66);

var _orange2 = _interopRequireDefault(_orange);

var _lightGreen = __webpack_require__(/*! @material-ui/core/colors/lightGreen */ 212);

var _lightGreen2 = _interopRequireDefault(_lightGreen);

var _blueGrey = __webpack_require__(/*! @material-ui/core/colors/blueGrey */ 213);

var _blueGrey2 = _interopRequireDefault(_blueGrey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    divider: {
      margin: theme.spacing.unit * 3 + 'px 0'
    },
    card: {
      minWidth: 275
    },
    liked: {
      color: _pink2.default[500]
    },
    shared: {
      color: _lightGreen2.default[500]
    },
    num: {
      fontSize: 14,
      marginLeft: 5
    },
    rightIcon: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center'
    },
    button: {
      marginRight: theme.spacing.unit
    },
    media: {
      height: 0,
      paddingTop: '56.25%' // 16:9
    },
    cardPlayer: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    details: {
      display: 'flex',
      flexDirection: 'column'
    },
    content: {
      flex: '1 0 auto'
    },
    cover: {
      width: 150,
      height: 150
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing.unit,
      paddingBottom: theme.spacing.unit
    },
    playIcon: {
      height: 38,
      width: 38
    },
    cardSocmed: {
      minWidth: 275
    },
    cardProduct: {
      position: 'relative'
    },
    mediaProduct: {
      height: 0,
      paddingTop: '60.25%' // 16:9
    },
    rightAction: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center'
    },
    floatingButtonWrap: {
      position: 'relative',
      paddingTop: 50
    },
    buttonAdd: {
      position: 'absolute',
      right: 20,
      top: -20
    },
    buttonAddList: {
      display: 'none',
      marginLeft: 10
    },
    title: {
      fontSize: 20,
      height: 30
    },
    ratting: {
      margin: '10px 0',
      '& button': {
        width: 24,
        height: 24
      }
    },
    status: {
      position: 'absolute',
      right: 0,
      top: 0,
      padding: 10,
      '& > *': {
        margin: 5
      }
    },
    desc: {
      height: 45,
      overflow: 'hidden'
    },
    chipDiscount: {
      background: theme.palette.primary.light,
      color: theme.palette.primary.dark
    },
    chipSold: {
      background: _blueGrey2.default[500],
      color: theme.palette.getContrastText(_blueGrey2.default[500])
    },
    contentProfle: {
      flex: '1 0 auto',
      textAlign: 'center'
    },
    mediaProfile: {
      height: 0,
      paddingTop: '36.25%' // 16:9
    },
    actions: {
      display: 'flex'
    },
    avatarBig: {
      width: 80,
      height: 80,
      margin: '-56px auto 10px',
      background: theme.palette.secondary.dark
    },
    name: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonProfile: {
      margin: 20
    },
    bottomLink: {
      width: '100%'
    },
    price: {
      paddingBottom: 20
    },
    contentProfile: {
      textAlign: 'center'
    },
    verified: {
      fontSize: 16,
      color: theme.palette.primary.main
    },
    cardList: {
      display: 'flex',
      justifyContent: 'space-between',
      '& $buttonAddList': {
        display: 'inline-block'
      },
      '& $floatingButtonWrap': {
        flex: 1
      },
      '& $buttonAdd': {
        display: 'none'
      },
      '& $status': {
        right: 'auto',
        left: 0
      },
      '& $mediaProduct': {
        width: 300,
        paddingTop: '21.25%'
      },
      '& $price': {
        flexDirection: 'column',
        justifyContent: 'center',
        '& button': {
          marginTop: 20
        }
      }
    },
    star: {
      top: 5,
      position: 'relative',
      color: _orange2.default[500]
    }
  };
};

exports.default = styles;

/***/ }),
/* 212 */
/*!******************************************************!*\
  !*** external "@material-ui/core/colors/lightGreen" ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/lightGreen");

/***/ }),
/* 213 */
/*!****************************************************!*\
  !*** external "@material-ui/core/colors/blueGrey" ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/blueGrey");

/***/ }),
/* 214 */
/*!***********************************************!*\
  !*** ./src/app/components/Error/ErrorWrap.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ 19);

var _Typography2 = _interopRequireDefault(_Typography);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ 35);

var _Button2 = _interopRequireDefault(_Button);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ 17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  var _errorWrap;

  return {
    errorWrap: (_errorWrap = {
      background: theme.palette.common.white,
      boxShadow: theme.shadows[2],
      borderRadius: '50%',
      width: 500,
      height: 500
    }, _defineProperty(_errorWrap, theme.breakpoints.down('sm'), {
      width: 300,
      height: 300
    }), _defineProperty(_errorWrap, 'display', 'flex'), _defineProperty(_errorWrap, 'alignItems', 'center'), _defineProperty(_errorWrap, 'justifyContent', 'center'), _defineProperty(_errorWrap, 'flexDirection', 'column'), _defineProperty(_errorWrap, 'position', 'relative'), _defineProperty(_errorWrap, 'margin', theme.spacing.unit * 3 + 'px auto'), _errorWrap),
    title: _defineProperty({
      color: theme.palette.primary.main,
      textShadow: '10px 6px 50px ' + theme.palette.primary.main
    }, theme.breakpoints.down('sm'), {
      fontSize: '4rem'
    }),
    deco: {
      boxShadow: theme.shadows[2],
      position: 'absolute',
      borderRadius: 2
    },
    button: {
      marginTop: 50
    }
  };
};

var ErrorWrap = function ErrorWrap(props) {
  return _react2.default.createElement(_reactRouterDom.Route, {
    render: function render(_ref) {
      var staticContext = _ref.staticContext;

      if (staticContext) {
        staticContext.status = 404; // eslint-disable-line
      }
      var classes = props.classes,
          title = props.title,
          desc = props.desc;

      return _react2.default.createElement(
        'div',
        { className: classes.errorWrap },
        _react2.default.createElement(
          _Typography2.default,
          { className: classes.title, variant: 'display4' },
          title
        ),
        _react2.default.createElement(
          _Typography2.default,
          { variant: 'headline' },
          desc
        ),
        _react2.default.createElement(
          _Button2.default,
          {
            variant: 'raised',
            color: 'primary',
            className: classes.button,
            component: _reactRouterDom.Link,
            to: '/app/'
          },
          'Go To Dashboard'
        )
      );
    }
  });
};

ErrorWrap.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  desc: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(ErrorWrap);

/***/ }),
/* 215 */
/*!***************************************************!*\
  !*** ./src/app/containers/Dashboard/Dashboard.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _brand = __webpack_require__(/*! ../../constants/brand.js */ 18);

var _brand2 = _interopRequireDefault(_brand);

var _reactHelmet = __webpack_require__(/*! react-helmet */ 22);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Grid = __webpack_require__(/*! @material-ui/core/Grid */ 29);

var _Grid2 = _interopRequireDefault(_Grid);

var _Divider = __webpack_require__(/*! @material-ui/core/Divider */ 28);

var _Divider2 = _interopRequireDefault(_Divider);

var _images = __webpack_require__(/*! ../../constants/images.js */ 67);

var _images2 = _interopRequireDefault(_images);

var _avatars = __webpack_require__(/*! ../../constants/avatars.js */ 38);

var _avatars2 = _interopRequireDefault(_avatars);

var _dashboardJss = __webpack_require__(/*! ./dashboard-jss */ 216);

var _dashboardJss2 = _interopRequireDefault(_dashboardJss);

var _components = __webpack_require__(/*! ./../../components */ 3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DashboardV2 = function (_PureComponent) {
  _inherits(DashboardV2, _PureComponent);

  function DashboardV2() {
    _classCallCheck(this, DashboardV2);

    return _possibleConstructorReturn(this, (DashboardV2.__proto__ || Object.getPrototypeOf(DashboardV2)).apply(this, arguments));
  }

  _createClass(DashboardV2, [{
    key: 'render',
    value: function render() {
      var title = _brand2.default.name;
      var description = _brand2.default.desc;
      var classes = this.props.classes;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            'title',
            null,
            title
          ),
          _react2.default.createElement('meta', { name: 'description', content: description }),
          _react2.default.createElement('meta', { property: 'og:title', content: title }),
          _react2.default.createElement('meta', { property: 'og:description', content: description }),
          _react2.default.createElement('meta', { property: 'twitter:title', content: title }),
          _react2.default.createElement('meta', { property: 'twitter:description', content: description })
        ),
        _react2.default.createElement(
          _Grid2.default,
          { container: true, className: classes.root },
          _react2.default.createElement(_components.CounterIconsWidget, null)
        ),
        _react2.default.createElement(_Divider2.default, { className: classes.divider }),
        _react2.default.createElement(_components.AreaChartWidget, null),
        _react2.default.createElement(_Divider2.default, { className: classes.divider }),
        _react2.default.createElement(
          _Grid2.default,
          { container: true, spacing: 24 },
          _react2.default.createElement(
            _Grid2.default,
            { item: true, xs: 12 },
            _react2.default.createElement(_components.CarouselWidget, null)
          )
        ),
        _react2.default.createElement(_Divider2.default, { className: classes.divider }),
        _react2.default.createElement(
          _Grid2.default,
          { container: true, spacing: 24, className: classes.root },
          _react2.default.createElement(
            _Grid2.default,
            { item: true, sm: 6, xs: 12 },
            _react2.default.createElement(_components.PostCard, {
              liked: 1,
              shared: 20,
              commented: 15,
              date: 'Dec, 13 2018',
              content: 'Fake data',
              image: _images2.default[16],
              avatar: _avatars2.default[6],
              name: 'V\u01B0\u01A1ng'
            })
          ),
          _react2.default.createElement(
            _Grid2.default,
            { item: true, sm: 6, xs: 12 },
            _react2.default.createElement(_components.AlbumWidget, null)
          )
        )
      );
    }
  }]);

  return DashboardV2;
}(_react.PureComponent);

DashboardV2.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(_dashboardJss2.default)(DashboardV2);

/***/ }),
/* 216 */
/*!*******************************************************!*\
  !*** ./src/app/containers/Dashboard/dashboard-jss.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1
    },
    divider: {
      margin: theme.spacing.unit * 2 + 'px 0',
      background: 'none'
    },
    sliderWrap: {
      position: 'relative',
      display: 'block',
      boxShadow: theme.shadows[1],
      width: '100%',
      borderRadius: 4
    },
    dividerMini: {
      margin: theme.spacing.unit * 1.5 + 'px 0',
      background: 'none'
    },
    noPadding: _defineProperty({
      paddingTop: '0 !important',
      paddingBottom: '0 !important'
    }, theme.breakpoints.up('sm'), {
      padding: '0 !important'
    })
  };
};

exports.default = styles;

/***/ }),
/* 217 */
/*!************************************************!*\
  !*** ./src/app/containers/Routes/RoutePage.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = __webpack_require__(/*! react-helmet */ 22);

var _brand = __webpack_require__(/*! ../../constants/brand.js */ 18);

var _brand2 = _interopRequireDefault(_brand);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ 10);

var _Paper2 = _interopRequireDefault(_Paper);

var _route = __webpack_require__(/*! ../../constants/route.js */ 56);

var _route2 = _interopRequireDefault(_route);

var _helmet = __webpack_require__(/*! ../../constants/helmet.js */ 71);

var _helmet2 = _interopRequireDefault(_helmet);

var _styles2 = __webpack_require__(/*! ../../constants/styles.js */ 7);

var _components = __webpack_require__(/*! ../../components */ 3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RoutePage = function (_Component) {
  _inherits(RoutePage, _Component);

  function RoutePage() {
    _classCallCheck(this, RoutePage);

    return _possibleConstructorReturn(this, (RoutePage.__proto__ || Object.getPrototypeOf(RoutePage)).apply(this, arguments));
  }

  _createClass(RoutePage, [{
    key: 'render',
    value: function render() {
      var title = _brand2.default.name + ' - Table';
      var description = _brand2.default.desc;
      var classes = this.props.classes;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            'title',
            null,
            title
          ),
          _react2.default.createElement('meta', { name: _helmet2.default.name, content: description }),
          _react2.default.createElement('meta', { property: _helmet2.default.og_title, content: title }),
          _react2.default.createElement('meta', { property: _helmet2.default.og_desc, content: description }),
          _react2.default.createElement('meta', { property: _helmet2.default.tw_title, content: title }),
          _react2.default.createElement('meta', { property: _helmet2.default.tw_desc, content: description })
        ),
        _react2.default.createElement(
          _components.PapperBlock,
          { title: _route2.default.title, desc: _route2.default.description },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _Paper2.default,
              { className: classes.root },
              _react2.default.createElement(_components.RouteTable, null)
            )
          )
        )
      );
    }
  }]);

  return RoutePage;
}(_react.Component);

RoutePage.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(_styles2.styles)(RoutePage);

/***/ }),
/* 218 */
/*!***********************************************************!*\
  !*** ./src/app/containers/Transporter/TransporterPage.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _transporter = __webpack_require__(/*! ../../constants/transporter.js */ 57);

var _transporter2 = _interopRequireDefault(_transporter);

var _styles2 = __webpack_require__(/*! ../../constants/styles.js */ 7);

var _pageTemplate = __webpack_require__(/*! ../../constants/template/pageTemplate */ 23);

var _pageTemplate2 = _interopRequireDefault(_pageTemplate);

var _components = __webpack_require__(/*! ../../components */ 3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import show from 'ba-utils/show';


var TransporterPage = function (_Component) {
    _inherits(TransporterPage, _Component);

    function TransporterPage() {
        _classCallCheck(this, TransporterPage);

        return _possibleConstructorReturn(this, (TransporterPage.__proto__ || Object.getPrototypeOf(TransporterPage)).apply(this, arguments));
    }

    _createClass(TransporterPage, [{
        key: 'render',
        value: function render() {
            var classes = this.props.classes;

            // show(transporterConst);

            return _react2.default.createElement(
                'div',
                null,
                (0, _pageTemplate2.default)(_components.TransporterTable, _transporter2.default, classes)
            );
        }
    }]);

    return TransporterPage;
}(_react.Component);

TransporterPage.propTypes = {
    classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(_styles2.styles)(TransporterPage);

/***/ }),
/* 219 */
/*!*************************************************!*\
  !*** ./src/app/containers/Driver/DriverPage.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _driver = __webpack_require__(/*! ../../constants/employee/driver */ 58);

var _driver2 = _interopRequireDefault(_driver);

var _styles2 = __webpack_require__(/*! ../../constants/styles.js */ 7);

var _pageTemplate = __webpack_require__(/*! ../../constants/template/pageTemplate */ 23);

var _pageTemplate2 = _interopRequireDefault(_pageTemplate);

var _components = __webpack_require__(/*! ../../components */ 3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DriverPage = function (_Component) {
    _inherits(DriverPage, _Component);

    function DriverPage() {
        _classCallCheck(this, DriverPage);

        return _possibleConstructorReturn(this, (DriverPage.__proto__ || Object.getPrototypeOf(DriverPage)).apply(this, arguments));
    }

    _createClass(DriverPage, [{
        key: 'render',
        value: function render() {
            var classes = this.props.classes;

            return _react2.default.createElement(
                'div',
                null,
                (0, _pageTemplate2.default)(_components.DriverTable, _driver2.default, classes)
            );
        }
    }]);

    return DriverPage;
}(_react.Component);

DriverPage.propTypes = {
    classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(_styles2.styles)(DriverPage);

/***/ }),
/* 220 */
/*!*******************************************************!*\
  !*** ./src/app/containers/Assistant/AssistantPage.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _assistant = __webpack_require__(/*! ../../constants/employee/assistant */ 59);

var _assistant2 = _interopRequireDefault(_assistant);

var _styles2 = __webpack_require__(/*! ../../constants/styles.js */ 7);

var _pageTemplate = __webpack_require__(/*! ../../constants/template/pageTemplate */ 23);

var _pageTemplate2 = _interopRequireDefault(_pageTemplate);

var _components = __webpack_require__(/*! ../../components */ 3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AssistantPage = function (_Component) {
    _inherits(AssistantPage, _Component);

    function AssistantPage() {
        _classCallCheck(this, AssistantPage);

        return _possibleConstructorReturn(this, (AssistantPage.__proto__ || Object.getPrototypeOf(AssistantPage)).apply(this, arguments));
    }

    _createClass(AssistantPage, [{
        key: 'render',
        value: function render() {
            var classes = this.props.classes;

            return _react2.default.createElement(
                'div',
                null,
                (0, _pageTemplate2.default)(_components.AssistantTable, _assistant2.default, classes)
            );
        }
    }]);

    return AssistantPage;
}(_react.Component);

AssistantPage.propTypes = {
    classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(_styles2.styles)(AssistantPage);

/***/ }),
/* 221 */
/*!*************************************************!*\
  !*** ./src/app/containers/Client/ClientPage.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _styles2 = __webpack_require__(/*! ../../constants/styles.js */ 7);

var _pageTemplate = __webpack_require__(/*! ../../constants/template/pageTemplate */ 23);

var _pageTemplate2 = _interopRequireDefault(_pageTemplate);

var _components = __webpack_require__(/*! ../../components */ 3);

var _client = __webpack_require__(/*! ../../constants/client/client */ 60);

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClientPage = function (_Component) {
    _inherits(ClientPage, _Component);

    function ClientPage() {
        _classCallCheck(this, ClientPage);

        return _possibleConstructorReturn(this, (ClientPage.__proto__ || Object.getPrototypeOf(ClientPage)).apply(this, arguments));
    }

    _createClass(ClientPage, [{
        key: 'render',
        value: function render() {
            var classes = this.props.classes;

            return _react2.default.createElement(
                'div',
                null,
                (0, _pageTemplate2.default)(_components.ClientTable, _client2.default, classes)
            );
        }
    }]);

    return ClientPage;
}(_react.Component);

ClientPage.propTypes = {
    classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(_styles2.styles)(ClientPage);

/***/ }),
/* 222 */
/*!******************************************************!*\
  !*** ./src/app/containers/Schedule/TSchedulePage.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _styles2 = __webpack_require__(/*! ../../constants/styles.js */ 7);

var _pageTemplate = __webpack_require__(/*! ../../constants/template/pageTemplate */ 23);

var _pageTemplate2 = _interopRequireDefault(_pageTemplate);

var _components = __webpack_require__(/*! ../../components */ 3);

var _transport = __webpack_require__(/*! ../../constants/schedule/transport */ 61);

var _transport2 = _interopRequireDefault(_transport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TSchedulePage = function (_Component) {
    _inherits(TSchedulePage, _Component);

    function TSchedulePage() {
        _classCallCheck(this, TSchedulePage);

        return _possibleConstructorReturn(this, (TSchedulePage.__proto__ || Object.getPrototypeOf(TSchedulePage)).apply(this, arguments));
    }

    _createClass(TSchedulePage, [{
        key: 'render',
        value: function render() {
            var classes = this.props.classes;

            return _react2.default.createElement(
                'div',
                null,
                (0, _pageTemplate2.default)(_components.TScheduleTable, _transport2.default, classes)
            );
        }
    }]);

    return TSchedulePage;
}(_react.Component);

TSchedulePage.propTypes = {
    classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(_styles2.styles)(TSchedulePage);

/***/ }),
/* 223 */
/*!******************************************************!*\
  !*** ./src/app/containers/Schedule/WSchedulePage.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _styles2 = __webpack_require__(/*! ../../constants/styles.js */ 7);

var _pageTemplate = __webpack_require__(/*! ../../constants/template/pageTemplate */ 23);

var _pageTemplate2 = _interopRequireDefault(_pageTemplate);

var _components = __webpack_require__(/*! ../../components */ 3);

var _work = __webpack_require__(/*! ../../constants/schedule/work */ 62);

var _work2 = _interopRequireDefault(_work);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WSchedulePage = function (_Component) {
    _inherits(WSchedulePage, _Component);

    function WSchedulePage() {
        _classCallCheck(this, WSchedulePage);

        return _possibleConstructorReturn(this, (WSchedulePage.__proto__ || Object.getPrototypeOf(WSchedulePage)).apply(this, arguments));
    }

    _createClass(WSchedulePage, [{
        key: 'render',
        value: function render() {
            var classes = this.props.classes;

            return _react2.default.createElement(
                'div',
                null,
                (0, _pageTemplate2.default)(_components.WScheduleTable, _work2.default, classes)
            );
        }
    }]);

    return WSchedulePage;
}(_react.Component);

WSchedulePage.propTypes = {
    classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(_styles2.styles)(WSchedulePage);

/***/ }),
/* 224 */
/*!*************************************************!*\
  !*** ./src/app/containers/Ticket/TicketPage.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _styles2 = __webpack_require__(/*! ../../constants/styles.js */ 7);

var _pageTemplate = __webpack_require__(/*! ../../constants/template/pageTemplate */ 23);

var _pageTemplate2 = _interopRequireDefault(_pageTemplate);

var _components = __webpack_require__(/*! ../../components */ 3);

var _ticket = __webpack_require__(/*! ../../constants/ticket/ticket */ 63);

var _ticket2 = _interopRequireDefault(_ticket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TicketPage = function (_Component) {
    _inherits(TicketPage, _Component);

    function TicketPage() {
        _classCallCheck(this, TicketPage);

        return _possibleConstructorReturn(this, (TicketPage.__proto__ || Object.getPrototypeOf(TicketPage)).apply(this, arguments));
    }

    _createClass(TicketPage, [{
        key: 'render',
        value: function render() {
            var classes = this.props.classes;

            return _react2.default.createElement(
                'div',
                null,
                (0, _pageTemplate2.default)(_components.TicketTable, _ticket2.default, classes)
            );
        }
    }]);

    return TicketPage;
}(_react.Component);

TicketPage.propTypes = {
    classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(_styles2.styles)(TicketPage);

/***/ }),
/* 225 */
/*!********************************************!*\
  !*** ./src/app/containers/Themes/index.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(/*! react-helmet */ 22);

var _brand = __webpack_require__(/*! ../../constants/brand.js */ 18);

var _brand2 = _interopRequireDefault(_brand);

var _RadioGroup = __webpack_require__(/*! @material-ui/core/RadioGroup */ 226);

var _RadioGroup2 = _interopRequireDefault(_RadioGroup);

var _Grid = __webpack_require__(/*! @material-ui/core/Grid */ 29);

var _Grid2 = _interopRequireDefault(_Grid);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = __webpack_require__(/*! redux */ 9);

var _reactRedux = __webpack_require__(/*! react-redux */ 6);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _FormControlLabel = __webpack_require__(/*! @material-ui/core/FormControlLabel */ 68);

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _UiActions = __webpack_require__(/*! ./../../actions/UiActions */ 33);

var _components = __webpack_require__(/*! ./../../components */ 3);

var _themeStylesJss = __webpack_require__(/*! ./themeStyles-jss */ 72);

var _themeStylesJss2 = _interopRequireDefault(_themeStylesJss);

var _ThemeThumb = __webpack_require__(/*! ./ThemeThumb */ 227);

var _ThemeThumb2 = _interopRequireDefault(_ThemeThumb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Themes = function (_React$Component) {
  _inherits(Themes, _React$Component);

  function Themes() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Themes);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Themes.__proto__ || Object.getPrototypeOf(Themes)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: 'purpleRedTheme'
    }, _this.handleChange = function (event) {
      _this.setState({ value: event.target.value });
      _this.props.changeTheme(event.target.value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Themes, [{
    key: 'render',
    value: function render() {
      var title = _brand2.default.name + ' - Choose Theme';
      var description = _brand2.default.desc;
      var _props = this.props,
          classes = _props.classes,
          palette = _props.palette;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            'title',
            null,
            title
          ),
          _react2.default.createElement('meta', { name: 'description', content: description }),
          _react2.default.createElement('meta', { property: 'og:title', content: title }),
          _react2.default.createElement('meta', { property: 'og:description', content: description }),
          _react2.default.createElement('meta', { property: 'twitter:title', content: title }),
          _react2.default.createElement('meta', { property: 'twitter:description', content: description })
        ),
        _react2.default.createElement(
          _components.PapperBlock,
          { title: 'Themes', desc: 'Choose App Theme for header, icon, button and many more. Theme built with 2 element color, that are Primary and Secondary color' },
          _react2.default.createElement(
            _Grid2.default,
            { container: true },
            _react2.default.createElement(
              _RadioGroup2.default,
              {
                'aria-label': 'gender',
                name: 'gender1',
                className: classes.group,
                value: this.state.value,
                onChange: this.handleChange
              },
              palette.map(function (item, index) {
                return _react2.default.createElement(_FormControlLabel2.default, { key: index.toString(), value: item.get('value'), control: _react2.default.createElement(_ThemeThumb2.default, null), label: item.get('name') });
              })
            )
          )
        )
      );
    }
  }]);

  return Themes;
}(_react2.default.Component);

Themes.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  changeTheme: _propTypes2.default.func.isRequired,
  palette: _propTypes2.default.object.isRequired
};

var reducer = 'ui';

var mapStateToProps = function mapStateToProps(state) {
  return {
    force: state, // force state from reducer
    palette: state.getIn([reducer, 'palette'])
  };
};

var dispatchToProps = function dispatchToProps(dispatch) {
  return {
    changeTheme: (0, _redux.bindActionCreators)(_UiActions.changeThemeAction, dispatch)
  };
};

var ThemesMapped = (0, _reactRedux.connect)(mapStateToProps, dispatchToProps)(Themes);

exports.default = (0, _styles.withStyles)(_themeStylesJss2.default)(ThemesMapped);

/***/ }),
/* 226 */
/*!***********************************************!*\
  !*** external "@material-ui/core/RadioGroup" ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/RadioGroup");

/***/ }),
/* 227 */
/*!*************************************************!*\
  !*** ./src/app/containers/Themes/ThemeThumb.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _Radio = __webpack_require__(/*! @material-ui/core/Radio */ 228);

var _Radio2 = _interopRequireDefault(_Radio);

var _classnames = __webpack_require__(/*! classnames */ 11);

var _classnames2 = _interopRequireDefault(_classnames);

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ 10);

var _Paper2 = _interopRequireDefault(_Paper);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(/*! react-redux */ 6);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _themePalette = __webpack_require__(/*! ../../constants/themePalette.js */ 32);

var _themePalette2 = _interopRequireDefault(_themePalette);

var _themeStylesJss = __webpack_require__(/*! ./themeStyles-jss */ 72);

var _themeStylesJss2 = _interopRequireDefault(_themeStylesJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ThemeThumb = function ThemeThumb(props) {
  var classes = props.classes,
      rest = _objectWithoutProperties(props, ['classes']);

  if (props.value === 'randomTheme') {
    return _react2.default.createElement(
      _Paper2.default,
      { className: (0, _classnames2.default)(classes.thumb, props.theme === props.value ? classes.selectedTheme : '') },
      _react2.default.createElement(_Radio2.default, rest),
      _react2.default.createElement(
        'div',
        { className: classes.appPreview },
        _react2.default.createElement('header', null),
        _react2.default.createElement(
          'aside',
          null,
          _react2.default.createElement(
            'ul',
            null,
            [0, 1, 2, 3].map(function (index) {
              return _react2.default.createElement(
                'li',
                { key: index.toString() },
                _react2.default.createElement('i', null),
                _react2.default.createElement('p', null)
              );
            })
          )
        ),
        _react2.default.createElement(
          _Paper2.default,
          { className: classes.content },
          _react2.default.createElement('div', { className: classes.title }),
          _react2.default.createElement('div', { className: classes.ctn1 }),
          _react2.default.createElement('div', { className: classes.ctn2 }),
          _react2.default.createElement('div', { className: classes.ctn2 }),
          _react2.default.createElement('div', { className: classes.ctn2 }),
          _react2.default.createElement('div', { className: classes.ctn2 })
        )
      )
    );
  }
  return _react2.default.createElement(
    _Paper2.default,
    { className: (0, _classnames2.default)(classes.thumb, props.theme === props.value ? classes.selectedTheme : '') },
    _react2.default.createElement(_Radio2.default, rest),
    _react2.default.createElement(
      'div',
      { className: classes.appPreview },
      _react2.default.createElement('header', { style: { background: _themePalette2.default[props.value].palette.primary.main } }),
      _react2.default.createElement(
        'aside',
        null,
        _react2.default.createElement(
          'ul',
          null,
          [0, 1, 2, 3].map(function (index) {
            if (index === 1) {
              return _react2.default.createElement(
                'li',
                { key: index.toString() },
                _react2.default.createElement('i', { style: { background: _themePalette2.default[props.value].palette.secondary.main } }),
                _react2.default.createElement('p', { style: { background: _themePalette2.default[props.value].palette.secondary.main } })
              );
            }
            return _react2.default.createElement(
              'li',
              { key: index.toString() },
              _react2.default.createElement('i', { style: { background: _themePalette2.default[props.value].palette.secondary.main } }),
              _react2.default.createElement('p', null)
            );
          })
        )
      ),
      _react2.default.createElement(
        _Paper2.default,
        { className: classes.content },
        _react2.default.createElement('div', { className: classes.title, style: { background: _themePalette2.default[props.value].palette.primary.main } }),
        _react2.default.createElement('div', { className: classes.ctn1, style: { background: _themePalette2.default[props.value].palette.secondary.main } }),
        _react2.default.createElement('div', { className: classes.ctn2, style: { background: _themePalette2.default[props.value].palette.primary.light } }),
        _react2.default.createElement('div', { className: classes.ctn2, style: { background: _themePalette2.default[props.value].palette.primary.light } }),
        _react2.default.createElement('div', { className: classes.ctn2, style: { background: _themePalette2.default[props.value].palette.secondary.light } }),
        _react2.default.createElement('div', { className: classes.ctn2, style: { background: _themePalette2.default[props.value].palette.secondary.light } })
      )
    )
  );
};

ThemeThumb.propTypes = {
  value: _propTypes2.default.string.isRequired,
  theme: _propTypes2.default.string.isRequired,
  classes: _propTypes2.default.object.isRequired
};

// Redux
var reducer = 'ui';
var mapStateToProps = function mapStateToProps(state) {
  return {
    theme: state.getIn([reducer, 'theme'])
  };
};

var ThumbsMapped = (0, _reactRedux.connect)(mapStateToProps)(ThemeThumb);

exports.default = (0, _styles.withStyles)(_themeStylesJss2.default)(ThumbsMapped);

/***/ }),
/* 228 */
/*!******************************************!*\
  !*** external "@material-ui/core/Radio" ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Radio");

/***/ }),
/* 229 */
/*!*************************************************!*\
  !*** ./src/app/containers/NotFound/NotFound.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(/*! react-helmet */ 22);

var _brand = __webpack_require__(/*! ../../constants/brand.js */ 18);

var _brand2 = _interopRequireDefault(_brand);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ 17);

var _components = __webpack_require__(/*! ./../../components */ 3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var title = _brand2.default.name + ' - Page Not Found';
var description = _brand2.default.desc;

var NotFound = function NotFound() {
  return _react2.default.createElement(_reactRouterDom.Route, {
    render: function render(_ref) {
      var staticContext = _ref.staticContext;

      if (staticContext) {
        staticContext.status = 404; // eslint-disable-line
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            'title',
            null,
            title
          ),
          _react2.default.createElement('meta', { name: 'description', content: description }),
          _react2.default.createElement('meta', { property: 'og:title', content: title }),
          _react2.default.createElement('meta', { property: 'og:description', content: description }),
          _react2.default.createElement('meta', { property: 'twitter:title', content: title }),
          _react2.default.createElement('meta', { property: 'twitter:description', content: description })
        ),
        _react2.default.createElement(_components.ErrorWrap, { title: '404', desc: 'Oops, Page Not Found :(' })
      );
    }
  });
};

exports.default = NotFound;

/***/ }),
/* 230 */
/*!******************************************************************!*\
  !*** ./src/app/containers/Pages/Standalone/NotFoundDedicated.js ***!
  \******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _appStylesJss = __webpack_require__(/*! ./../../../components/App/appStyles-jss */ 34);

var _appStylesJss2 = _interopRequireDefault(_appStylesJss);

var _Error = __webpack_require__(/*! ./../Error */ 231);

var _Error2 = _interopRequireDefault(_Error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFoundDedicated = function (_React$Component) {
  _inherits(NotFoundDedicated, _React$Component);

  function NotFoundDedicated() {
    _classCallCheck(this, NotFoundDedicated);

    return _possibleConstructorReturn(this, (NotFoundDedicated.__proto__ || Object.getPrototypeOf(NotFoundDedicated)).apply(this, arguments));
  }

  _createClass(NotFoundDedicated, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;

      return _react2.default.createElement(
        'div',
        { className: classes.appFrameOuter },
        _react2.default.createElement(
          'main',
          { className: classes.outerContent, id: 'mainContent' },
          _react2.default.createElement(_Error2.default, null)
        )
      );
    }
  }]);

  return NotFoundDedicated;
}(_react2.default.Component);

NotFoundDedicated.propTypes = {
  classes: _propTypes.PropTypes.object.isRequired
};

exports.default = (0, _styles.withStyles)(_appStylesJss2.default)(NotFoundDedicated);

/***/ }),
/* 231 */
/*!*************************************************!*\
  !*** ./src/app/containers/Pages/Error/index.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(/*! react-helmet */ 22);

var _brand = __webpack_require__(/*! ../../../constants/brand.js */ 18);

var _brand2 = _interopRequireDefault(_brand);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ 17);

var _components = __webpack_require__(/*! ./../../../components */ 3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var title = _brand2.default.name + ' - Aplication Error';
var description = _brand2.default.desc;

var Error = function Error() {
  return _react2.default.createElement(_reactRouterDom.Route, {
    render: function render(_ref) {
      var staticContext = _ref.staticContext;

      if (staticContext) {
        staticContext.status = 404; // eslint-disable-line
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            'title',
            null,
            title
          ),
          _react2.default.createElement('meta', { name: 'description', content: description }),
          _react2.default.createElement('meta', { property: 'og:title', content: title }),
          _react2.default.createElement('meta', { property: 'og:description', content: description }),
          _react2.default.createElement('meta', { property: 'twitter:title', content: title }),
          _react2.default.createElement('meta', { property: 'twitter:description', content: description })
        ),
        _react2.default.createElement(_components.ErrorWrap, { title: '500', desc: 'Sorry, server goes wrong' })
      );
    }
  });
};

exports.default = Error;

/***/ }),
/* 232 */
/*!*******************************************!*\
  !*** ./src/app/containers/withTracker.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = withTracker;

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _reactGa = __webpack_require__(/*! react-ga */ 233);

var _reactGa2 = _interopRequireDefault(_reactGa);

var _config = __webpack_require__(/*! ../config */ 26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (_config.googleAnaliticsId) {
  _reactGa2.default.initialize(_config.googleAnaliticsId);
}

function withTracker(WrappedComponent) {
  var _class, _temp;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var trackPage = function trackPage(page) {
    _reactGa2.default.set(_extends({
      page: page
    }, options));
    _reactGa2.default.pageview(page);
  };

  var HOC = (_temp = _class = function (_Component) {
    _inherits(HOC, _Component);

    function HOC() {
      _classCallCheck(this, HOC);

      return _possibleConstructorReturn(this, (HOC.__proto__ || Object.getPrototypeOf(HOC)).apply(this, arguments));
    }

    _createClass(HOC, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (_config.googleAnaliticsId) {
          var page = this.props.location.pathname;
          trackPage(page);
        }
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (_config.googleAnaliticsId) {
          var currentPage = this.props.location.pathname;
          var nextPage = nextProps.location.pathname;

          if (currentPage !== nextPage) {
            trackPage(nextPage);
          }
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, this.props);
      }
    }]);

    return HOC;
  }(_react.Component), _class.propTypes = {
    location: _propTypes.object.isRequired
  }, _temp);

  if (typeof WrappedComponent.fetchData !== 'undefined') {
    HOC.fetchData = WrappedComponent.fetchData;
  }

  return HOC;
}

/***/ }),
/* 233 */
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),
/* 234 */
/*!***********************************!*\
  !*** ./src/app/config/default.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isUndefined = __webpack_require__(/*! lodash/isUndefined */ 235);

var _isUndefined2 = _interopRequireDefault(_isUndefined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env = "production";
var ssl = !(0, _isUndefined2.default)(process.env.SSL) && +process.env.SSL === 1 ? 1 : 0;
var prefix = 'http' + (ssl ? 's' : '') + '://';
var host = prefix + (process.env.HOST || 'localhost');
var port = !(0, _isUndefined2.default)(process.env.PORT) ? +process.env.PORT : '';
var apiSsl = !(0, _isUndefined2.default)(process.env.APISSL) && +process.env.APISSL === 1 ? 1 : 0;
var prefixHost = 'http' + (apiSsl ? 's' : '') + '://';
var apiPort = !(0, _isUndefined2.default)(process.env.APIPORT) ? +process.env.APIPORT : '';
var apiHost = prefixHost + (!(0, _isUndefined2.default)(process.env.APIHOST) ? process.env.APIHOST : 'localhost') + (apiPort ? ':' + apiPort : '');
var ssr = !(0, _isUndefined2.default)(process.env.SSR) && +process.env.SSR === 1;
var googleAnaliticsId = process.env.GOOGLE_ANALITICS_ID !== 'undefined' ? process.env.GOOGLE_ANALITICS_ID : '';

exports.default = {
  env: env,
  ssl: ssl,
  host: host + (port ? ':' + port : ''),
  port: port,
  apiSsl: apiSsl,
  apiPort: apiPort,
  apiHost: apiHost,
  ssr: ssr,
  googleAnaliticsId: googleAnaliticsId,

  server: {
    ssl: ssl,
    host: host,
    port: port || 8080,
    apiSsl: apiSsl,
    apiPort: apiPort,
    apiHost: apiHost
  },

  webpack: {
    server: {
      ssl: ssl,
      host: host,
      port: port || 3001,
      apiSsl: apiSsl,
      apiPort: apiPort,
      apiHost: apiHost
    }
  }
};

/***/ }),
/* 235 */
/*!*************************************!*\
  !*** external "lodash/isUndefined" ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("lodash/isUndefined");

/***/ }),
/* 236 */
/*!***************************************!*\
  !*** ./src/app/config/environment.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  development: {
    isProd: false
  },
  production: {
    isProd: true
  }
}["production" || 'development'];

/***/ }),
/* 237 */
/*!********************************!*\
  !*** ./src/server/SSR/html.js ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _server = __webpack_require__(/*! react-dom/server */ 42);

var _reactHelmet = __webpack_require__(/*! react-helmet */ 22);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _config = __webpack_require__(/*! ./../../app/config */ 26);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Html = function Html(_ref) {
  var assets = _ref.assets,
      component = _ref.component,
      store = _ref.store;

  var initialState = 'window.__INITIAL_STATE__ = ' + JSON.stringify(store.getState());
  var head = _reactHelmet2.default.rewind();
  var ie = '<!--[if lte IE 9]><div class="browsehappy"><div class="browsehappy__inner"><div class="browsehappy__message">You are using an <strong>outdated</strong> browser.Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</div></div></div><![endif]-->';
  var content = component ? (0, _server.renderToString)(component) : null;
  return _react2.default.createElement(
    'html',
    { lang: 'en' },
    _react2.default.createElement(
      'head',
      null,
      head.base.toComponent(),
      _react2.default.createElement(
        'title',
        null,
        'Boss Lite - Material Admin Dashboard'
      ),
      head.meta.toComponent(),
      head.link.toComponent(),
      head.script.toComponent(),
      _react2.default.createElement('meta', { charSet: 'utf-8' }),
      _react2.default.createElement('meta', { name: 'robots', content: 'INDEX,FOLLOW' }),
      _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1' }),
      _react2.default.createElement('link', { rel: 'shortcut icon', href: '/favicons/favicon.ico' }),
      _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '57x57', href: '/favicons/apple-icon-57x57.png' }),
      _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '60x60', href: '/favicons/apple-icon-60x60.png' }),
      _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '72x72', href: '/favicons/apple-icon-72x72.png' }),
      _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicons/apple-icon-76x76.png' }),
      _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '114x114', href: '/favicons/apple-icon-114x114.png' }),
      _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicons/apple-icon-120x120.png' }),
      _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '144x144', href: '/favicons/apple-icon-144x144.png' }),
      _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicons/apple-icon-152x152.png' }),
      _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-icon-180x180.png' }),
      _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicons/android-icon-192x192.png' }),
      _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' }),
      _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicons/favicon-96x96.png' }),
      _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' }),
      _react2.default.createElement('link', { rel: 'manifest', href: '/favicons/manifest.json' }),
      _react2.default.createElement('meta', { name: 'msapplication-TileColor', content: '#ffffff' }),
      _react2.default.createElement('meta', { name: 'msapplication-TileImage', content: '/favicons/ms-icon-144x144.png' }),
      _react2.default.createElement('meta', { name: 'theme-color', content: '#ffffff' }),
      _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900', rel: 'stylesheet' }),
      _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel: 'stylesheet' }),
      _react2.default.createElement('meta', { property: 'author', content: 'bossku' }),
      _react2.default.createElement('meta', { property: 'og:site_name', content: 'boss.ux-maestro.com' }),
      _react2.default.createElement('meta', { property: 'og:locale', content: 'en_US' }),
      _react2.default.createElement('meta', { property: 'og:type', content: 'website' }),
      _react2.default.createElement('meta', { property: 'og:image', content: '/logo.jpg' }),
      _react2.default.createElement('meta', { property: 'twitter:site', content: 'boss.ux-maestro.com' }),
      _react2.default.createElement('meta', { property: 'twitter:domain', content: 'boss.ux-maestro.com' }),
      _react2.default.createElement('meta', { property: 'twitter:creator', content: 'bossku' }),
      _react2.default.createElement('meta', { property: 'twitter:card', content: 'summary' }),
      _react2.default.createElement('meta', { property: 'twitter:image:src', content: '/logo.jpg' }),
      assets.styles && Object.keys(assets.styles).map(function (c) {
        return _react2.default.createElement('link', { href: assets.styles[c], key: c, rel: 'stylesheet', type: 'text/css' });
      }),
      _config2.default.isProd && assets.styles && Object.keys(assets.styles).map(function (c) {
        return _react2.default.createElement('link', { rel: 'preload', href: assets.styles[c], key: c, as: 'style' });
      }),
      _config2.default.isProd && _react2.default.createElement('link', { rel: 'preload', href: assets.javascript.vendor, as: 'script' }),
      _config2.default.isProd && _react2.default.createElement('link', { rel: 'preload', href: assets.javascript.main, as: 'script' })
    ),
    _react2.default.createElement(
      'body',
      null,
      _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: ie } }),
      _react2.default.createElement('div', { id: 'root', dangerouslySetInnerHTML: { __html: content }, style: { height: '100%' } }),
      _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: initialState } }),
      _config2.default.isProd && _react2.default.createElement('script', { defer: true, src: assets.javascript.vendor }),
      _react2.default.createElement('script', { defer: true, src: assets.javascript.main })
    )
  );
}; /* eslint-disable react/no-danger */


Html.defaultProps = {
  component: null
};

Html.propTypes = {
  assets: _propTypes.object.isRequired,
  component: _propTypes.node,
  store: _propTypes.object.isRequired
};

exports.default = Html;

/***/ }),
/* 238 */
/*!**********************************!*\
  !*** ./src/helpers/ApiClient.js ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _axios = __webpack_require__(/*! axios */ 239);

var _axios2 = _interopRequireDefault(_axios);

var _config = __webpack_require__(/*! ./../app/config */ 26);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var methods = ['get', 'post', 'put', 'patch', 'del'];
function formatUrl(path) {
  var directUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (directUrl) return path;
  var adjustedPath = path[0] !== '/' ? '/' + path : path;
  if (path.indexOf('http') === 0) {
    return path;
  }
  return _config2.default.apiHost + adjustedPath;
}

var _ApiClient = function _ApiClient() {
  _classCallCheck(this, _ApiClient);

  // we can get an access to req
  var _this = this;
  methods.forEach(function (method) {
    _this[method] = function (path) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          params = _ref.params,
          data = _ref.data,
          headers = _ref.headers,
          attachments = _ref.attachments,
          directUrl = _ref.directUrl,
          handleProgress = _ref.handleProgress;

      var requestConfig = {
        method: method,
        url: formatUrl(path, directUrl)
      };

      if (params) {
        requestConfig.params = _extends({}, params);
      }

      if (headers) {
        requestConfig.headers = _extends({}, headers);
      }

      if (attachments) {
        if (attachments && (typeof attachments === 'undefined' ? 'undefined' : _typeof(attachments)) === 'object') {
          var _data = new FormData();
          Object.keys(attachments).forEach(function (c) {
            _data.append(c, attachments[c]);
          });
          requestConfig.data = _data;
        }
      }

      if (data && !attachments) {
        requestConfig.data = _extends({}, data);
      }

      if (handleProgress) {
        requestConfig.onUploadProgress = handleProgress;
      }

      return (0, _axios2.default)(requestConfig);
    };
  });
};

var ApiClient = _ApiClient;

exports.default = ApiClient;

/***/ }),
/* 239 */
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 240 */
/*!********************************!*\
  !*** ./src/app/redux/store.js ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _immutable = __webpack_require__(/*! immutable */ 8);

var _redux = __webpack_require__(/*! redux */ 9);

var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ 73);

var _reducer = __webpack_require__(/*! ./reducer */ 241);

var _reducer2 = _interopRequireDefault(_reducer);

var _clientMiddleware = __webpack_require__(/*! ./middleware/clientMiddleware */ 257);

var _clientMiddleware2 = _interopRequireDefault(_clientMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore(history, client) {
  var initialState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var reducer = (0, _reducer2.default)();
  var middlewares = [(0, _clientMiddleware2.default)(client), (0, _reactRouterRedux.routerMiddleware)(history)];

  var composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) || _redux.compose;

  var enhancer = composeEnhancers(_redux.applyMiddleware.apply(undefined, middlewares));

  var initialValues = (0, _immutable.fromJS)(initialState).set('router', history);

  var store = (0, _redux.createStore)(reducer, initialValues, enhancer);

  if (false) {
    module.hot.accept('./reducer', function () {
      var createNextReducer = require('./reducer').default;
      var nextReducer = createNextReducer();
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

/***/ }),
/* 241 */
/*!**********************************!*\
  !*** ./src/app/redux/reducer.js ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createReducer;

var _immutable = __webpack_require__(/*! redux-form/immutable */ 242);

var _reduxImmutablejs = __webpack_require__(/*! redux-immutablejs */ 243);

var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ 73);

var _ui = __webpack_require__(/*! ./modules/ui */ 244);

var _ui2 = _interopRequireDefault(_ui);

var _initForm = __webpack_require__(/*! ./modules/initForm */ 245);

var _initForm2 = _interopRequireDefault(_initForm);

var _calendar = __webpack_require__(/*! ./modules/calendar */ 246);

var _calendar2 = _interopRequireDefault(_calendar);

var _routeTable = __webpack_require__(/*! ./modules/routeTable */ 247);

var _routeTable2 = _interopRequireDefault(_routeTable);

var _transporterTable = __webpack_require__(/*! ./modules/transporterTable */ 248);

var _transporterTable2 = _interopRequireDefault(_transporterTable);

var _driverTable = __webpack_require__(/*! ./modules/driverTable */ 249);

var _driverTable2 = _interopRequireDefault(_driverTable);

var _assistantTable = __webpack_require__(/*! ./modules/assistantTable */ 250);

var _assistantTable2 = _interopRequireDefault(_assistantTable);

var _clientTable = __webpack_require__(/*! ./modules/clientTable */ 251);

var _clientTable2 = _interopRequireDefault(_clientTable);

var _tscheduleTable = __webpack_require__(/*! ./modules/tscheduleTable */ 252);

var _tscheduleTable2 = _interopRequireDefault(_tscheduleTable);

var _wscheduleTable = __webpack_require__(/*! ./modules/wscheduleTable */ 253);

var _wscheduleTable2 = _interopRequireDefault(_wscheduleTable);

var _ticketTable = __webpack_require__(/*! ./modules/ticketTable */ 254);

var _ticketTable2 = _interopRequireDefault(_ticketTable);

var _userInfo = __webpack_require__(/*! ./modules/userInfo */ 255);

var _userInfo2 = _interopRequireDefault(_userInfo);

var _branch = __webpack_require__(/*! ../constants/reducer/branch */ 256);

var branchName = _interopRequireWildcard(_branch);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function branchReducer(reducerFunction, reducerName) {
  return function (state, action) {
    var branch = action.branch;

    var isInitializationCall = state === undefined;
    if (branch !== reducerName && !isInitializationCall) {
      return state;
    }
    return reducerFunction(state, action);
  };
}

function createReducer() {
  return (0, _reduxImmutablejs.combineReducers)({
    form: _immutable.reducer,
    router: _reactRouterRedux.routerReducer,
    ui: _ui2.default,
    initval: _initForm2.default,
    calendar: _calendar2.default,
    routeTable: branchReducer(_routeTable2.default, branchName.ROUTE),
    transporterTable: branchReducer(_transporterTable2.default, branchName.TRANSPORTER),
    driverTable: branchReducer(_driverTable2.default, branchName.DRIVER),
    assistantTable: branchReducer(_assistantTable2.default, branchName.ASSISTANT),
    clientTable: branchReducer(_clientTable2.default, branchName.CLIENT),
    tscheduleTable: branchReducer(_tscheduleTable2.default, branchName.T_SCHEDULE),
    wscheduleTable: branchReducer(_wscheduleTable2.default, branchName.W_SCHEDULE),
    ticketTable: branchReducer(_ticketTable2.default, branchName.TICKET),
    userInfo: branchReducer(_userInfo2.default, branchName.USER_INFO)
  });
};

/***/ }),
/* 242 */
/*!***************************************!*\
  !*** external "redux-form/immutable" ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("redux-form/immutable");

/***/ }),
/* 243 */
/*!************************************!*\
  !*** external "redux-immutablejs" ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("redux-immutablejs");

/***/ }),
/* 244 */
/*!*************************************!*\
  !*** ./src/app/redux/modules/ui.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _immutable = __webpack_require__(/*! immutable */ 8);

var _menu = __webpack_require__(/*! ../../constants/menu.js */ 54);

var _menu2 = _interopRequireDefault(_menu);

var _actionTypes = __webpack_require__(/*! ../../actions/actionTypes */ 5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  sidebarOpen: true,
  theme: 'skyBlueTheme',
  pageLoaded: false,
  palette: (0, _immutable.List)([{ name: 'Blue Ocean', value: 'blueTheme' }, { name: 'Blue Sky', value: 'skyBlueTheme' }, { name: 'Sweet Magenta Cyan', value: 'magentaTheme' }]),
  subMenuOpen: []
};

var getMenus = function getMenus(menuArray) {
  return menuArray.map(function (item) {
    if (item.child) {
      return item.child;
    }
    return false;
  });
};

var setNavCollapse = function setNavCollapse(arr, curRoute) {
  var headMenu = 'not found';
  for (var i = 0; i < arr.length; i += 1) {
    for (var j = 0; j < arr[i].length; j += 1) {
      if (arr[i][j].link === curRoute) {
        headMenu = _menu2.default[i].key;
      }
    }
  }
  return headMenu;
};

var initialImmutableState = (0, _immutable.fromJS)(initialState);

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialImmutableState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _actionTypes.TOGGLE_SIDEBAR:
      return state.withMutations(function (mutableState) {
        mutableState.set('sidebarOpen', !state.get('sidebarOpen'));
      });
    case _actionTypes.OPEN_SUBMENU:
      return state.withMutations(function (mutableState) {
        // Set initial open parent menu
        var activeParent = setNavCollapse(getMenus(_menu2.default), action.initialLocation);

        // Once page loaded will expand the parent menu
        if (action.initialLocation) {
          mutableState.set('subMenuOpen', (0, _immutable.List)([activeParent]));
          return;
        }

        // Expand / Collapse parent menu
        var menuList = state.get('subMenuOpen');
        if (menuList.indexOf(action.key) > -1) {
          if (action.keyParent) {
            mutableState.set('subMenuOpen', (0, _immutable.List)([action.keyParent]));
          } else {
            mutableState.set('subMenuOpen', (0, _immutable.List)([]));
          }
        } else {
          mutableState.set('subMenuOpen', (0, _immutable.List)([action.key, action.keyParent]));
        }
      });
    case _actionTypes.CHANGE_THEME:
      return state.withMutations(function (mutableState) {
        if (action.theme === 'randomTheme') {
          var paletteArray = state.get('palette').toJS();
          var random = paletteArray[Math.floor(Math.random() * paletteArray.length)];
          mutableState.set('theme', random.value);
        } else {
          mutableState.set('theme', action.theme);
        }
      });
    case _actionTypes.LOAD_PAGE:
      return state.withMutations(function (mutableState) {
        mutableState.set('pageLoaded', action.isLoaded);
      });
    default:
      return state;
  }
}

/***/ }),
/* 245 */
/*!*******************************************!*\
  !*** ./src/app/redux/modules/initForm.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _immutable = __webpack_require__(/*! immutable */ 8);

var _actionTypes = __webpack_require__(/*! ../../actions/actionTypes */ 5);

var initialState = {
  formValues: (0, _immutable.Map)()
};

var initialImmutableState = (0, _immutable.fromJS)(initialState);
function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialImmutableState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _actionTypes.INIT:
      return state.withMutations(function (mutableState) {
        mutableState.set('formValues', action.data);
      });
    case _actionTypes.CLEAR:
      return state.withMutations(function (mutableState) {
        mutableState.set('formValues', []);
      });
    default:
      return state;
  }
}

/***/ }),
/* 246 */
/*!*******************************************!*\
  !*** ./src/app/redux/modules/calendar.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _immutable = __webpack_require__(/*! immutable */ 8);

var _notifMessage = __webpack_require__(/*! ../../constants/notifMessage.js */ 12);

var _notifMessage2 = _interopRequireDefault(_notifMessage);

var _actionTypes = __webpack_require__(/*! ./../../actions/actionTypes */ 5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  events: (0, _immutable.List)([]),
  openFrm: false,
  formValues: (0, _immutable.Map)(),
  notifMsg: ''
};

var initForm = (0, _immutable.Map)({
  title: '',
  start: new Date(),
  end: new Date(),
  hexColor: 'F8BBD0'
});

var initialImmutableState = (0, _immutable.fromJS)(initialState);
function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialImmutableState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _actionTypes.FETCH_CALENDAR_DATA:
      return state.withMutations(function (mutableState) {
        var items = (0, _immutable.fromJS)(action.items);
        mutableState.set('events', items);
      });
    case _actionTypes.ADD_EVENT:
      return state.withMutations(function (mutableState) {
        mutableState.set('openFrm', true).set('formValues', initForm);
      });
    case _actionTypes.DISCARD_EVENT:
      return state.withMutations(function (mutableState) {
        mutableState.set('openFrm', false).set('formValues', (0, _immutable.Map)()).set('notifMsg', _notifMessage2.default.discard);
      });
    case _actionTypes.SUBMIT_EVENT:
      return state.withMutations(function (mutableState) {
        var initItem = (0, _immutable.Map)(action.newEvent);
        var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
        var newItem = initItem.update('id', function () {
          var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : id;
          return val;
        });
        mutableState.update('events', function (events) {
          return events.push(newItem);
        });
        mutableState.set('formValues', (0, _immutable.Map)()).set('openFrm', false).set('notifMsg', _notifMessage2.default.saved);
      });
    case _actionTypes.DELETE_EVENT:
      return state.withMutations(function (mutableState) {
        var eventItem = state.get('events').find(function (obj) {
          return obj.get('id') === action.event.id;
        });
        var index = state.get('events').indexOf(eventItem);
        mutableState.update('events', function (events) {
          return events.splice(index, 1);
        }).set('notifMsg', _notifMessage2.default.removed);
      });
    case _actionTypes.CLOSE_NOTIF:
      return state.withMutations(function (mutableState) {
        mutableState.set('notifMsg', '');
      });
    default:
      return state;
  }
}

/***/ }),
/* 247 */
/*!*********************************************!*\
  !*** ./src/app/redux/modules/routeTable.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _immutable = __webpack_require__(/*! immutable */ 8);

var _notifMessage = __webpack_require__(/*! ../../constants/notifMessage.js */ 12);

var _notifMessage2 = _interopRequireDefault(_notifMessage);

var _actionTypes = __webpack_require__(/*! ../../actions/actionTypes */ 5);

var _show = __webpack_require__(/*! ../../constants/show.js */ 4);

var _show2 = _interopRequireDefault(_show);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var initialState = {
  content: (0, _immutable.List)([]),
  paging: {
    total_pages: 1,
    total_elements: 2,
    last: true,
    first: false,
    number_of_elements: 2,
    size: 4,
    number: 1
  },
  notifMsg: ''
};

var initialItem = function initialItem(keyTemplate, anchor) {
  var _keyTemplate$keys = keyTemplate.keys(),
      _keyTemplate$keys2 = _toArray(_keyTemplate$keys),
      rawKey = _keyTemplate$keys2.slice(0);

  var staticKey = {
    id: (+new Date() + Math.floor(Math.random() * 999999)).toString(36)
  };
  for (var i = 0; i < rawKey.length; i += 1) {
    if (rawKey[i] !== 'id' && rawKey[i] !== 'edited') {
      staticKey[rawKey[i]] = anchor[i].initialValue;
    }
  }
  // Push another static key
  staticKey.edited = true;
  return (0, _immutable.Map)(staticKey);
};

var initialImmutableState = (0, _immutable.fromJS)(initialState);

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialImmutableState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var branch = action.branch;

  switch (action.type) {
    case branch + '/' + _actionTypes.FETCH_DATA:
      return state.withMutations(function (mutableState) {
        var content = (0, _immutable.List)((0, _immutable.fromJS)(action.content));
        mutableState.set('content', content);
        var paging = (0, _immutable.fromJS)(action.paging);
        mutableState.set('paging', paging);
      });
    case branch + '/' + _actionTypes.ADD_EMPTY_ROW:
      return state.withMutations(function (mutableState) {
        var raw = state.get('content').last();
        var initial = initialItem(raw, action.anchor);
        mutableState.update('content', function (content) {
          return content.unshift(initial);
        });
      });
    case branch + '/' + _actionTypes.REMOVE_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('content').indexOf(action.item);
        mutableState.update('content', function (content) {
          return content.splice(index, 1);
        }).set('notifMsg', _notifMessage2.default.removed);
      });
    case branch + '/' + _actionTypes.UPDATE_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('content').indexOf(action.item);
        var cellTarget = action.event.target.name;
        var newVal = function newVal(type) {
          if (type === 'checkbox') {
            return action.event.target.checked;
          }
          return action.event.target.value;
        };
        mutableState.update('content', function (content) {
          return content.setIn([index, cellTarget], newVal(action.event.target.type));
        });
      });
    case branch + '/' + _actionTypes.EDIT_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('content').indexOf(action.item);
        mutableState.update('content', function (content) {
          return content.setIn([index, 'edited'], true);
        });
      });
    case branch + '/' + _actionTypes.SAVE_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('content').indexOf(action.item);
        mutableState.update('content', function (content) {
          return content.setIn([index, 'edited'], false);
        }).set('notifMsg', _notifMessage2.default.saved);
      });
    case branch + '/' + _actionTypes.CLOSE_NOTIF:
      return state.withMutations(function (mutableState) {
        mutableState.set('notifMsg', '');
      });
    default:
      return state;
  }
}

/***/ }),
/* 248 */
/*!***************************************************!*\
  !*** ./src/app/redux/modules/transporterTable.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _immutable = __webpack_require__(/*! immutable */ 8);

var _notifMessage = __webpack_require__(/*! ../../constants/notifMessage.js */ 12);

var _notifMessage2 = _interopRequireDefault(_notifMessage);

var _actionTypes = __webpack_require__(/*! ../../actions/actionTypes */ 5);

var _show = __webpack_require__(/*! ../../constants/show.js */ 4);

var _show2 = _interopRequireDefault(_show);

var _table = __webpack_require__(/*! ../../constants/reducer/table */ 24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _table.initialImmutableState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var branch = action.branch;

  switch (action.type) {
    case branch + '/' + _actionTypes.FETCH_DATA:
      return state.withMutations(function (mutableState) {
        // fromJS to convert into mutableSate
        // List to map elements inside
        var content = (0, _immutable.List)((0, _immutable.fromJS)(action.content));
        mutableState.set('content', content);
        var paging = (0, _immutable.fromJS)(action.paging);
        mutableState.set('paging', paging);
      });
    case branch + '/' + _actionTypes.ADD_EMPTY_ROW:
      return state.withMutations(function (mutableState) {
        var raw = state.get('content').last();
        var initial = (0, _table.initialItem)(raw, action.anchor);
        mutableState.update('content', function (content) {
          return content.unshift(initial);
        });
      });
    case branch + '/' + _actionTypes.REMOVE_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('content').indexOf(action.item);
        mutableState.update('content', function (content) {
          return content.splice(index, 1);
        }).set('notifMsg', _notifMessage2.default.removed);
      });
    case branch + '/' + _actionTypes.UPDATE_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('content').indexOf(action.item);
        var cellTarget = action.event.target.name;
        var newVal = function newVal(type) {
          if (type === 'checkbox') {
            return action.event.target.checked;
          }
          return action.event.target.value;
        };
        mutableState.update('content', function (content) {
          return content.setIn([index, cellTarget], newVal(action.event.target.type));
        });
      });
    case branch + '/' + _actionTypes.EDIT_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('content').indexOf(action.item);
        mutableState.update('content', function (content) {
          return content.setIn([index, 'edited'], true);
        });
      });
    case branch + '/' + _actionTypes.SAVE_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('content').indexOf(action.item);
        mutableState.update('content', function (content) {
          return content.setIn([index, 'edited'], false);
        }).set('notifMsg', _notifMessage2.default.saved);
      });
    case branch + '/' + _actionTypes.CLOSE_NOTIF:
      return state.withMutations(function (mutableState) {
        mutableState.set('notifMsg', '');
      });
    default:
      return state;
  }
}

/***/ }),
/* 249 */
/*!**********************************************!*\
  !*** ./src/app/redux/modules/driverTable.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _immutable = __webpack_require__(/*! immutable */ 8);

var _notifMessage = __webpack_require__(/*! ../../constants/notifMessage.js */ 12);

var _notifMessage2 = _interopRequireDefault(_notifMessage);

var _actionTypes = __webpack_require__(/*! ../../actions/actionTypes */ 5);

var _show = __webpack_require__(/*! ../../constants/show.js */ 4);

var _show2 = _interopRequireDefault(_show);

var _table = __webpack_require__(/*! ../../constants/reducer/table */ 24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _table.initialImmutableState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var branch = action.branch;

  switch (action.type) {
    case branch + '/' + _actionTypes.FETCH_DATA:
      return state.withMutations(function (mutableState) {
        // fromJS to convert into mutableSate
        // List to map elements inside
        (0, _show2.default)(action.content);
        var content = (0, _immutable.List)((0, _immutable.fromJS)(action.content));
        mutableState.set('content', content);
        var paging = (0, _immutable.fromJS)(action.paging);
        mutableState.set('paging', paging);
      });
    case branch + '/' + _actionTypes.ADD_EMPTY_ROW:
      return state.withMutations(function (mutableState) {
        var raw = state.get('content').last();
        var initial = (0, _table.initialItem)(raw, action.anchor);
        mutableState.update('content', function (content) {
          return content.unshift(initial);
        });
      });
    case branch + '/' + _actionTypes.REMOVE_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('content').indexOf(action.item);
        mutableState.update('content', function (content) {
          return content.splice(index, 1);
        }).set('notifMsg', _notifMessage2.default.removed);
      });
    case branch + '/' + _actionTypes.UPDATE_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('content').indexOf(action.item);
        var cellTarget = action.event.target.name;
        var newVal = function newVal(type) {
          if (type === 'checkbox') {
            return action.event.target.checked;
          }
          return action.event.target.value;
        };
        mutableState.update('content', function (content) {
          return content.setIn([index, cellTarget], newVal(action.event.target.type));
        });
      });
    case branch + '/' + _actionTypes.EDIT_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('content').indexOf(action.item);
        mutableState.update('content', function (content) {
          return content.setIn([index, 'edited'], true);
        });
      });
    case branch + '/' + _actionTypes.SAVE_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('content').indexOf(action.item);
        mutableState.update('content', function (content) {
          return content.setIn([index, 'edited'], false);
        }).set('notifMsg', _notifMessage2.default.saved);
      });
    case branch + '/' + _actionTypes.CLOSE_NOTIF:
      return state.withMutations(function (mutableState) {
        mutableState.set('notifMsg', '');
      });
    default:
      return state;
  }
}

/***/ }),
/* 250 */
/*!*************************************************!*\
  !*** ./src/app/redux/modules/assistantTable.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _immutable = __webpack_require__(/*! immutable */ 8);

var _notifMessage = __webpack_require__(/*! ../../constants/notifMessage.js */ 12);

var _notifMessage2 = _interopRequireDefault(_notifMessage);

var _actionTypes = __webpack_require__(/*! ../../actions/actionTypes */ 5);

var _show = __webpack_require__(/*! ../../constants/show.js */ 4);

var _show2 = _interopRequireDefault(_show);

var _table = __webpack_require__(/*! ../../constants/reducer/table */ 24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _table.initialImmutableState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var branch = action.branch;

  switch (action.type) {
    case branch + '/' + _actionTypes.FETCH_DATA:
      return state.withMutations(function (mutableState) {
        // fromJS to convert into mutableSate
        // List to map elements inside
        (0, _show2.default)(action.content);
        var content = (0, _immutable.List)((0, _immutable.fromJS)(action.content));
        mutableState.set('content', content);
        var paging = (0, _immutable.fromJS)(action.paging);
        mutableState.set('paging', paging);
      });
    case branch + '/' + _actionTypes.ADD_EMPTY_ROW:
      return state.withMutations(function (mutableState) {
        var raw = state.get('content').last();
        var initial = (0, _table.initialItem)(raw, action.anchor);
        mutableState.update('content', function (content) {
          return content.unshift(initial);
        });
      });
    case branch + '/' + _actionTypes.REMOVE_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('content').indexOf(action.item);
        mutableState.update('content', function (content) {
          return content.splice(index, 1);
        }).set('notifMsg', _notifMessage2.default.removed);
      });
    case branch + '/' + _actionTypes.UPDATE_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('content').indexOf(action.item);
        var cellTarget = action.event.target.name;
        var newVal = function newVal(type) {
          if (type === 'checkbox') {
            return action.event.target.checked;
          }
          return action.event.target.value;
        };
        mutableState.update('content', function (content) {
          return content.setIn([index, cellTarget], newVal(action.event.target.type));
        });
      });
    case branch + '/' + _actionTypes.EDIT_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('content').indexOf(action.item);
        mutableState.update('content', function (content) {
          return content.setIn([index, 'edited'], true);
        });
      });
    case branch + '/' + _actionTypes.SAVE_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('content').indexOf(action.item);
        mutableState.update('content', function (content) {
          return content.setIn([index, 'edited'], false);
        }).set('notifMsg', _notifMessage2.default.saved);
      });
    case branch + '/' + _actionTypes.CLOSE_NOTIF:
      return state.withMutations(function (mutableState) {
        mutableState.set('notifMsg', '');
      });
    default:
      return state;
  }
}

/***/ }),
/* 251 */
/*!**********************************************!*\
  !*** ./src/app/redux/modules/clientTable.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _immutable = __webpack_require__(/*! immutable */ 8);

var _notifMessage = __webpack_require__(/*! ../../constants/notifMessage.js */ 12);

var _notifMessage2 = _interopRequireDefault(_notifMessage);

var _actionTypes = __webpack_require__(/*! ../../actions/actionTypes */ 5);

var _show = __webpack_require__(/*! ../../constants/show.js */ 4);

var _show2 = _interopRequireDefault(_show);

var _table = __webpack_require__(/*! ../../constants/reducer/table */ 24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _table.initialImmutableState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var branch = action.branch;

  switch (action.type) {
    case branch + '/' + _actionTypes.FETCH_DATA:
      return state.withMutations(function (mutableState) {
        // fromJS to convert into mutableSate
        // List to map elements inside
        (0, _show2.default)(action.content);
        var content = (0, _immutable.List)((0, _immutable.fromJS)(action.content));
        var paging = (0, _immutable.fromJS)(action.paging);
        mutableState.set('content', content);
        mutableState.set('paging', paging);
      });
    case branch + '/' + _actionTypes.ADD_EMPTY_ROW:
      return state.withMutations(function (mutableState) {
        var raw = state.get('content').last();
        var initial = (0, _table.initialItem)(raw, action.anchor);
        mutableState.update('content', function (content) {
          return content.unshift(initial);
        });
      });
    case branch + '/' + _actionTypes.REMOVE_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('content').indexOf(action.item);
        mutableState.update('content', function (content) {
          return content.splice(index, 1);
        }).set('notifMsg', _notifMessage2.default.removed);
      });
    case branch + '/' + _actionTypes.UPDATE_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('content').indexOf(action.item);
        var cellTarget = action.event.target.name;
        var newVal = function newVal(type) {
          if (type === 'checkbox') {
            return action.event.target.checked;
          }
          return action.event.target.value;
        };
        mutableState.update('content', function (content) {
          return content.setIn([index, cellTarget], newVal(action.event.target.type));
        });
      });
    case branch + '/' + _actionTypes.EDIT_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('content').indexOf(action.item);
        mutableState.update('content', function (content) {
          return content.setIn([index, 'edited'], true);
        });
      });
    case branch + '/' + _actionTypes.SAVE_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('content').indexOf(action.item);
        mutableState.update('content', function (content) {
          return content.setIn([index, 'edited'], false);
        }).set('notifMsg', _notifMessage2.default.saved);
      });
    case branch + '/' + _actionTypes.CLOSE_NOTIF:
      return state.withMutations(function (mutableState) {
        mutableState.set('notifMsg', '');
      });
    default:
      return state;
  }
}

/***/ }),
/* 252 */
/*!*************************************************!*\
  !*** ./src/app/redux/modules/tscheduleTable.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _immutable = __webpack_require__(/*! immutable */ 8);

var _notifMessage = __webpack_require__(/*! ../../constants/notifMessage.js */ 12);

var _notifMessage2 = _interopRequireDefault(_notifMessage);

var _actionTypes = __webpack_require__(/*! ../../actions/actionTypes */ 5);

var _show = __webpack_require__(/*! ../../constants/show.js */ 4);

var _show2 = _interopRequireDefault(_show);

var _table = __webpack_require__(/*! ../../constants/reducer/table */ 24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _table.initialImmutableState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var branch = action.branch;

  switch (action.type) {
    case branch + '/' + _actionTypes.FETCH_DATA:
      return state.withMutations(function (mutableState) {
        // fromJS to convert into mutableSate
        // List to map elements inside
        (0, _show2.default)(action.content);
        var content = (0, _immutable.List)((0, _immutable.fromJS)(action.content));
        mutableState.set('content', content);
        var paging = (0, _immutable.fromJS)(action.paging);
        mutableState.set('paging', paging);
      });
    case branch + '/' + _actionTypes.ADD_EMPTY_ROW:
      return state.withMutations(function (mutableState) {
        var raw = state.get('content').last();
        var initial = (0, _table.initialItem)(raw, action.anchor);
        mutableState.update('content', function (content) {
          return content.unshift(initial);
        });
      });
    case branch + '/' + _actionTypes.REMOVE_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('content').indexOf(action.item);
        mutableState.update('content', function (content) {
          return content.splice(index, 1);
        }).set('notifMsg', _notifMessage2.default.removed);
      });
    case branch + '/' + _actionTypes.UPDATE_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('content').indexOf(action.item);
        var cellTarget = action.event.target.name;
        var newVal = function newVal(type) {
          if (type === 'checkbox') {
            return action.event.target.checked;
          }
          return action.event.target.value;
        };
        mutableState.update('content', function (content) {
          return content.setIn([index, cellTarget], newVal(action.event.target.type));
        });
      });
    case branch + '/' + _actionTypes.EDIT_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('content').indexOf(action.item);
        mutableState.update('content', function (content) {
          return content.setIn([index, 'edited'], true);
        });
      });
    case branch + '/' + _actionTypes.SAVE_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('content').indexOf(action.item);
        mutableState.update('content', function (content) {
          return content.setIn([index, 'edited'], false);
        }).set('notifMsg', _notifMessage2.default.saved);
      });
    case branch + '/' + _actionTypes.CLOSE_NOTIF:
      return state.withMutations(function (mutableState) {
        mutableState.set('notifMsg', '');
      });
    default:
      return state;
  }
}

/***/ }),
/* 253 */
/*!*************************************************!*\
  !*** ./src/app/redux/modules/wscheduleTable.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _immutable = __webpack_require__(/*! immutable */ 8);

var _notifMessage = __webpack_require__(/*! ../../constants/notifMessage.js */ 12);

var _notifMessage2 = _interopRequireDefault(_notifMessage);

var _actionTypes = __webpack_require__(/*! ../../actions/actionTypes */ 5);

var _show = __webpack_require__(/*! ../../constants/show.js */ 4);

var _show2 = _interopRequireDefault(_show);

var _table = __webpack_require__(/*! ../../constants/reducer/table */ 24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _table.initialImmutableState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var branch = action.branch;

  switch (action.type) {
    case branch + '/' + _actionTypes.FETCH_DATA:
      return state.withMutations(function (mutableState) {
        // fromJS to convert into mutableSate
        // List to map elements inside
        // show(action.content);
        var content = (0, _immutable.List)((0, _immutable.fromJS)(action.content));
        mutableState.set('content', content);
        var paging = (0, _immutable.fromJS)(action.paging);
        mutableState.set('paging', paging);
      });
    case branch + '/' + _actionTypes.ADD_EMPTY_ROW:
      return state.withMutations(function (mutableState) {
        var raw = state.get('content').last();
        var initial = (0, _table.initialItem)(raw, action.anchor);
        mutableState.update('content', function (content) {
          return content.unshift(initial);
        });
      });
    case branch + '/' + _actionTypes.REMOVE_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('content').indexOf(action.item);
        mutableState.update('content', function (content) {
          return content.splice(index, 1);
        }).set('notifMsg', _notifMessage2.default.removed);
      });
    case branch + '/' + _actionTypes.UPDATE_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('content').indexOf(action.item);
        var cellTarget = action.event.target.name;
        var newVal = function newVal(type) {
          if (type === 'checkbox') {
            return action.event.target.checked;
          }
          return action.event.target.value;
        };
        mutableState.update('content', function (content) {
          return content.setIn([index, cellTarget], newVal(action.event.target.type));
        });
      });
    case branch + '/' + _actionTypes.EDIT_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('content').indexOf(action.item);
        mutableState.update('content', function (content) {
          return content.setIn([index, 'edited'], true);
        });
      });
    case branch + '/' + _actionTypes.SAVE_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('content').indexOf(action.item);
        mutableState.update('content', function (content) {
          return content.setIn([index, 'edited'], false);
        }).set('notifMsg', _notifMessage2.default.saved);
      });
    case branch + '/' + _actionTypes.CLOSE_NOTIF:
      return state.withMutations(function (mutableState) {
        mutableState.set('notifMsg', '');
      });
    default:
      return state;
  }
}

/***/ }),
/* 254 */
/*!**********************************************!*\
  !*** ./src/app/redux/modules/ticketTable.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _immutable = __webpack_require__(/*! immutable */ 8);

var _notifMessage = __webpack_require__(/*! ../../constants/notifMessage.js */ 12);

var _notifMessage2 = _interopRequireDefault(_notifMessage);

var _actionTypes = __webpack_require__(/*! ../../actions/actionTypes */ 5);

var _show = __webpack_require__(/*! ../../constants/show.js */ 4);

var _show2 = _interopRequireDefault(_show);

var _table = __webpack_require__(/*! ../../constants/reducer/table */ 24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _table.initialImmutableState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var branch = action.branch;

  switch (action.type) {
    case branch + '/' + _actionTypes.FETCH_DATA:
      return state.withMutations(function (mutableState) {
        // fromJS to convert into mutableSate
        // List to map elements inside
        // show(action.content);
        var content = (0, _immutable.List)((0, _immutable.fromJS)(action.content));
        mutableState.set('content', content);
        var paging = (0, _immutable.fromJS)(action.paging);
        mutableState.set('paging', paging);
      });
    case branch + '/' + _actionTypes.ADD_EMPTY_ROW:
      return state.withMutations(function (mutableState) {
        var raw = state.get('content').last();
        var initial = (0, _table.initialItem)(raw, action.anchor);
        mutableState.update('content', function (content) {
          return content.unshift(initial);
        });
      });
    case branch + '/' + _actionTypes.REMOVE_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('content').indexOf(action.item);
        mutableState.update('content', function (content) {
          return content.splice(index, 1);
        }).set('notifMsg', _notifMessage2.default.removed);
      });
    case branch + '/' + _actionTypes.UPDATE_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('content').indexOf(action.item);
        var cellTarget = action.event.target.name;
        var newVal = function newVal(type) {
          if (type === 'checkbox') {
            return action.event.target.checked;
          }
          return action.event.target.value;
        };
        mutableState.update('content', function (content) {
          return content.setIn([index, cellTarget], newVal(action.event.target.type));
        });
      });
    case branch + '/' + _actionTypes.EDIT_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('content').indexOf(action.item);
        mutableState.update('content', function (content) {
          return content.setIn([index, 'edited'], true);
        });
      });
    case branch + '/' + _actionTypes.SAVE_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('content').indexOf(action.item);
        mutableState.update('content', function (content) {
          return content.setIn([index, 'edited'], false);
        }).set('notifMsg', _notifMessage2.default.saved);
      });
    case branch + '/' + _actionTypes.CLOSE_NOTIF:
      return state.withMutations(function (mutableState) {
        mutableState.set('notifMsg', '');
      });
    default:
      return state;
  }
}

/***/ }),
/* 255 */
/*!*******************************************!*\
  !*** ./src/app/redux/modules/userInfo.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = reducer;

var _immutable = __webpack_require__(/*! immutable */ 8);

var initialState = {
    user: {
        full_name: 'Vương',
        picture: 'https://scontent.fhan2-1.fna.fbcdn.net/v/t31.0-8/16300149_1171393902980002_8260090941206613423_o.jpg?_nc_cat=103&_nc_oc=AWOg9QEqduSATTrqOgn2i02J7FU3lBvFraaf01m5IUxFnrt61C6RwLr46FxiqOSF0pHSNDJvj33__Q&_nc_ht=scontent.fhan2-1.fna&oh=82cbb1e7dabdbcf34ea9e6b2d457f409&oe=5CA249E5'
    }
};

var initialImmutableState = (0, _immutable.fromJS)(initialState);

function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialImmutableState;
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case 'RELOAD':
            return state;
        default:
            return state;
    }
}

/***/ }),
/* 256 */
/*!*********************************************!*\
  !*** ./src/app/constants/reducer/branch.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ROUTE = exports.ROUTE = 'routeTable';
var TRANSPORTER = exports.TRANSPORTER = 'transporterTable';
var DRIVER = exports.DRIVER = 'driverTable';
var ASSISTANT = exports.ASSISTANT = 'assistantTable';
var CLIENT = exports.CLIENT = 'clientTable';
var TICKET = exports.TICKET = 'ticketTable';
var T_SCHEDULE = exports.T_SCHEDULE = 'tscheduleTable';
var W_SCHEDULE = exports.W_SCHEDULE = 'wscheduleTable';
var USER_INFO = exports.USER_INFO = 'userInfo';

/***/ }),
/* 257 */
/*!******************************************************!*\
  !*** ./src/app/redux/middleware/clientMiddleware.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = clientMiddleware;

var _immutable = __webpack_require__(/*! immutable */ 8);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function clientMiddleware(client) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState);
        }

        var promise = action.promise,
            types = action.types,
            rest = _objectWithoutProperties(action, ['promise', 'types']); // eslint-disable-line no-redeclare


        if (!promise) {
          return next(action);
        }

        var _types = _slicedToArray(types, 3),
            REQUEST = _types[0],
            SUCCESS = _types[1],
            FAILURE = _types[2];

        next(_extends({}, rest, { type: REQUEST }));

        var actionPromise = promise(client);
        actionPromise.then(function (result) {
          return next(_extends({}, rest, { result: (0, _immutable.fromJS)(result.data), type: SUCCESS }));
        }, function (_ref2) {
          var _ref2$response = _ref2.response,
              response = _ref2$response === undefined ? {} : _ref2$response;
          return next(_extends({}, rest, { error: (0, _immutable.fromJS)(response.data), type: FAILURE }));
        }).catch(function (_ref3) {
          var _ref3$response = _ref3.response,
              response = _ref3$response === undefined ? {} : _ref3$response;

          console.error('MIDDLEWARE ERROR:', response);
          next(_extends({}, rest, { error: (0, _immutable.fromJS)(response.data), type: FAILURE }));
        });
        return actionPromise;
      };
    };
  };
}

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map