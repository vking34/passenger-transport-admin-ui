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
/******/ 	__webpack_require__.p = "http://localhost:3001/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 128);
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
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 4 */
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),
/* 5 */
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),
/* 6 */
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),
/* 7 */
/*!**********************************************!*\
  !*** external "@material-ui/core/TableCell" ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

/***/ }),
/* 8 */
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
exports.ErrorWrap = exports.AddEventForm = exports.AddEvent = exports.DetailEvent = exports.EventCalendar = exports.ContactDetail = exports.ContactHeader = exports.ContactList = exports.AddContact = exports.Cart = exports.FloatingPanel = exports.SearchProduct = exports.IdentityCard = exports.VideoCard = exports.ProductCard = exports.PostCard = exports.PlayerCard = exports.NewsCard = exports.GeneralCard = exports.ProfileCard = exports.Quote = exports.LimitedBadges = exports.RegisterForm = exports.LoginForm = exports.Notification = exports.EmptyData = exports.AdvTable = exports.CrudTable = exports.TreeTable = exports.AlbumWidget = exports.CarouselWidget = exports.AreaChartWidget = exports.CounterIconsWidget = exports.CounterWidget = exports.PapperBlock = exports.RouteTable = exports.BreadCrumb = exports.Footer = exports.Sidebar = exports.Header = exports.Dashboard = exports.Outer = exports.App = undefined;

var _App2 = __webpack_require__(/*! ./App/App */ 140);

var _App3 = _interopRequireDefault(_App2);

var _Outer2 = __webpack_require__(/*! ./App/Outer */ 144);

var _Outer3 = _interopRequireDefault(_Outer2);

var _Dashboard2 = __webpack_require__(/*! ./App/Dashboard */ 145);

var _Dashboard3 = _interopRequireDefault(_Dashboard2);

var _Header2 = __webpack_require__(/*! ./Header/Header */ 147);

var _Header3 = _interopRequireDefault(_Header2);

var _Sidebar2 = __webpack_require__(/*! ./Sidebar/Sidebar */ 155);

var _Sidebar3 = _interopRequireDefault(_Sidebar2);

var _Footer2 = __webpack_require__(/*! ./Footer/Footer */ 162);

var _Footer3 = _interopRequireDefault(_Footer2);

var _BreadCrumb2 = __webpack_require__(/*! ./BreadCrumb/BreadCrumb */ 164);

var _BreadCrumb3 = _interopRequireDefault(_BreadCrumb2);

var _RouteTable2 = __webpack_require__(/*! ./Route/RouteTable */ 166);

var _RouteTable3 = _interopRequireDefault(_RouteTable2);

var _PapperBlock2 = __webpack_require__(/*! ./PapperBlock/PapperBlock */ 35);

var _PapperBlock3 = _interopRequireDefault(_PapperBlock2);

var _CounterWidget2 = __webpack_require__(/*! ./Counter/CounterWidget */ 171);

var _CounterWidget3 = _interopRequireDefault(_CounterWidget2);

var _CounterIconsWidget2 = __webpack_require__(/*! ./Widget/CounterIconsWidget */ 173);

var _CounterIconsWidget3 = _interopRequireDefault(_CounterIconsWidget2);

var _AreaChartWidget2 = __webpack_require__(/*! ./Widget/AreaChartWidget */ 180);

var _AreaChartWidget3 = _interopRequireDefault(_AreaChartWidget2);

var _CarouselWidget2 = __webpack_require__(/*! ./Widget/CarouselWidget */ 188);

var _CarouselWidget3 = _interopRequireDefault(_CarouselWidget2);

var _AlbumWidget2 = __webpack_require__(/*! ./Widget/AlbumWidget */ 194);

var _AlbumWidget3 = _interopRequireDefault(_AlbumWidget2);

var _TreeTable2 = __webpack_require__(/*! ./Tables/TreeTable */ 199);

var _TreeTable3 = _interopRequireDefault(_TreeTable2);

var _CrudTable2 = __webpack_require__(/*! ./Tables/CrudTable */ 203);

var _CrudTable3 = _interopRequireDefault(_CrudTable2);

var _AdvTable2 = __webpack_require__(/*! ./Tables/AdvTable */ 217);

var _AdvTable3 = _interopRequireDefault(_AdvTable2);

var _EmptyData2 = __webpack_require__(/*! ./Tables/EmptyData */ 224);

var _EmptyData3 = _interopRequireDefault(_EmptyData2);

var _Notification2 = __webpack_require__(/*! ./Notification/Notification */ 226);

var _Notification3 = _interopRequireDefault(_Notification2);

var _LoginForm2 = __webpack_require__(/*! ./Forms/LoginForm */ 228);

var _LoginForm3 = _interopRequireDefault(_LoginForm2);

var _RegisterForm2 = __webpack_require__(/*! ./Forms/RegisterForm */ 232);

var _RegisterForm3 = _interopRequireDefault(_RegisterForm2);

var _LimitedBadges2 = __webpack_require__(/*! ./Badges/LimitedBadges */ 235);

var _LimitedBadges3 = _interopRequireDefault(_LimitedBadges2);

var _Quote2 = __webpack_require__(/*! ./Quote/Quote */ 236);

var _Quote3 = _interopRequireDefault(_Quote2);

var _ProfileCard2 = __webpack_require__(/*! ./CardPaper/ProfileCard */ 237);

var _ProfileCard3 = _interopRequireDefault(_ProfileCard2);

var _GeneralCard2 = __webpack_require__(/*! ./CardPaper/GeneralCard */ 241);

var _GeneralCard3 = _interopRequireDefault(_GeneralCard2);

var _NewsCard2 = __webpack_require__(/*! ./CardPaper/NewsCard */ 242);

var _NewsCard3 = _interopRequireDefault(_NewsCard2);

var _PlayerCard2 = __webpack_require__(/*! ./CardPaper/PlayerCard */ 243);

var _PlayerCard3 = _interopRequireDefault(_PlayerCard2);

var _PostCard2 = __webpack_require__(/*! ./CardPaper/PostCard */ 246);

var _PostCard3 = _interopRequireDefault(_PostCard2);

var _ProductCard2 = __webpack_require__(/*! ./CardPaper/ProductCard */ 247);

var _ProductCard3 = _interopRequireDefault(_ProductCard2);

var _VideoCard2 = __webpack_require__(/*! ./CardPaper/VideoCard */ 249);

var _VideoCard3 = _interopRequireDefault(_VideoCard2);

var _IdentityCard2 = __webpack_require__(/*! ./CardPaper/IdentityCard */ 250);

var _IdentityCard3 = _interopRequireDefault(_IdentityCard2);

var _SearchProduct2 = __webpack_require__(/*! ./Search/SearchProduct */ 251);

var _SearchProduct3 = _interopRequireDefault(_SearchProduct2);

var _FloatingPanel2 = __webpack_require__(/*! ./Panel/FloatingPanel */ 77);

var _FloatingPanel3 = _interopRequireDefault(_FloatingPanel2);

var _Cart2 = __webpack_require__(/*! ./Cart/Cart */ 115);

var _Cart3 = _interopRequireDefault(_Cart2);

var _AddContact2 = __webpack_require__(/*! ./Contact/AddContact */ 259);

var _AddContact3 = _interopRequireDefault(_AddContact2);

var _ContactList2 = __webpack_require__(/*! ./Contact/ContactList */ 264);

var _ContactList3 = _interopRequireDefault(_ContactList2);

var _ContactHeader2 = __webpack_require__(/*! ./Contact/ContactHeader */ 265);

var _ContactHeader3 = _interopRequireDefault(_ContactHeader2);

var _ContactDetail2 = __webpack_require__(/*! ./Contact/ContactDetail */ 266);

var _ContactDetail3 = _interopRequireDefault(_ContactDetail2);

var _EventCalendar2 = __webpack_require__(/*! ./Calendar/EventCalendar */ 269);

var _EventCalendar3 = _interopRequireDefault(_EventCalendar2);

var _DetailEvent2 = __webpack_require__(/*! ./Calendar/DetailEvent */ 273);

var _DetailEvent3 = _interopRequireDefault(_DetailEvent2);

var _AddEvent2 = __webpack_require__(/*! ./Calendar/AddEvent */ 276);

var _AddEvent3 = _interopRequireDefault(_AddEvent2);

var _AddEventForm2 = __webpack_require__(/*! ./Calendar/AddEventForm */ 121);

var _AddEventForm3 = _interopRequireDefault(_AddEventForm2);

var _ErrorWrap2 = __webpack_require__(/*! ./Error/ErrorWrap */ 278);

var _ErrorWrap3 = _interopRequireDefault(_ErrorWrap2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.App = _App3.default; // Marketing Ads
// export MarketingAds from './MarketingAds/MarketingAds';
// Main UI

exports.Outer = _Outer3.default;
exports.Dashboard = _Dashboard3.default;
exports.Header = _Header3.default;
exports.Sidebar = _Sidebar3.default;
exports.Footer = _Footer3.default;
exports.BreadCrumb = _BreadCrumb3.default;
// export SourceReader from './SourceReader/SourceReader';

// Route

exports.RouteTable = _RouteTable3.default;
exports.PapperBlock = _PapperBlock3.default;
// Dashboard and Widget

exports.CounterWidget = _CounterWidget3.default;
exports.CounterIconsWidget = _CounterIconsWidget3.default;
exports.AreaChartWidget = _AreaChartWidget3.default;
exports.CarouselWidget = _CarouselWidget3.default;
exports.AlbumWidget = _AlbumWidget3.default;
// Table Components

exports.TreeTable = _TreeTable3.default;
exports.CrudTable = _CrudTable3.default;
exports.AdvTable = _AdvTable3.default;
exports.EmptyData = _EmptyData3.default;
// Form

exports.Notification = _Notification3.default;
exports.LoginForm = _LoginForm3.default;
exports.RegisterForm = _RegisterForm3.default;
// UI

exports.LimitedBadges = _LimitedBadges3.default;
exports.Quote = _Quote3.default;
// Card

exports.ProfileCard = _ProfileCard3.default;
exports.GeneralCard = _GeneralCard3.default;
exports.NewsCard = _NewsCard3.default;
exports.PlayerCard = _PlayerCard3.default;
exports.PostCard = _PostCard3.default;
exports.ProductCard = _ProductCard3.default;
exports.VideoCard = _VideoCard3.default;
exports.IdentityCard = _IdentityCard3.default;
// Search

exports.SearchProduct = _SearchProduct3.default;
// export ProductGallery from './Gallery/ProductGallery';
// Panel

exports.FloatingPanel = _FloatingPanel3.default;
exports.Cart = _Cart3.default;
// Contact

exports.AddContact = _AddContact3.default;
exports.ContactList = _ContactList3.default;
exports.ContactHeader = _ContactHeader3.default;
exports.ContactDetail = _ContactDetail3.default;
// Calendar

exports.EventCalendar = _EventCalendar3.default;
exports.DetailEvent = _DetailEvent3.default;
exports.AddEvent = _AddEvent3.default;
exports.AddEventForm = _AddEventForm3.default;
// Error

exports.ErrorWrap = _ErrorWrap3.default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 9 */
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 10 */
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
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TOGGLE_SIDEBAR, 'TOGGLE_SIDEBAR', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');

  __REACT_HOT_LOADER__.register(OPEN_SUBMENU, 'OPEN_SUBMENU', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');

  __REACT_HOT_LOADER__.register(CHANGE_THEME, 'CHANGE_THEME', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');

  __REACT_HOT_LOADER__.register(LOAD_PAGE, 'LOAD_PAGE', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');

  __REACT_HOT_LOADER__.register(TOGGLE_TREE, 'TOGGLE_TREE', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');

  __REACT_HOT_LOADER__.register(INIT, 'INIT', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');

  __REACT_HOT_LOADER__.register(CLEAR, 'CLEAR', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');

  __REACT_HOT_LOADER__.register(FETCH_DATA, 'FETCH_DATA', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');

  __REACT_HOT_LOADER__.register(ADD_EMPTY_ROW, 'ADD_EMPTY_ROW', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');

  __REACT_HOT_LOADER__.register(UPDATE_ROW, 'UPDATE_ROW', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');

  __REACT_HOT_LOADER__.register(REMOVE_ROW, 'REMOVE_ROW', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');

  __REACT_HOT_LOADER__.register(EDIT_ROW, 'EDIT_ROW', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');

  __REACT_HOT_LOADER__.register(SAVE_ROW, 'SAVE_ROW', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');

  __REACT_HOT_LOADER__.register(FETCH_PRODUCT_DATA, 'FETCH_PRODUCT_DATA', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');

  __REACT_HOT_LOADER__.register(SEARCH_PRODUCT, 'SEARCH_PRODUCT', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');

  __REACT_HOT_LOADER__.register(SHOW_DETAIL_PRODUCT, 'SHOW_DETAIL_PRODUCT', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');

  __REACT_HOT_LOADER__.register(ADD_TO_CART, 'ADD_TO_CART', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');

  __REACT_HOT_LOADER__.register(DELETE_CART_ITEM, 'DELETE_CART_ITEM', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');

  __REACT_HOT_LOADER__.register(CHECKOUT, 'CHECKOUT', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');

  __REACT_HOT_LOADER__.register(FETCH_CONTACT_DATA, 'FETCH_CONTACT_DATA', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');

  __REACT_HOT_LOADER__.register(SHOW_DETAIL_CONTACT, 'SHOW_DETAIL_CONTACT', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');

  __REACT_HOT_LOADER__.register(HIDE_DETAIL, 'HIDE_DETAIL', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');

  __REACT_HOT_LOADER__.register(ADD_CONTACT, 'ADD_CONTACT', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');

  __REACT_HOT_LOADER__.register(EDIT_CONTACT, 'EDIT_CONTACT', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');

  __REACT_HOT_LOADER__.register(SUBMIT_CONTACT, 'SUBMIT_CONTACT', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');

  __REACT_HOT_LOADER__.register(CLOSE_CONTACT_FORM, 'CLOSE_CONTACT_FORM', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');

  __REACT_HOT_LOADER__.register(DELETE_CONTACT, 'DELETE_CONTACT', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');

  __REACT_HOT_LOADER__.register(TOGGLE_FAVORITE, 'TOGGLE_FAVORITE', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');

  __REACT_HOT_LOADER__.register(SEARCH_CONTACT, 'SEARCH_CONTACT', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');

  __REACT_HOT_LOADER__.register(FETCH_CALENDAR_DATA, 'FETCH_CALENDAR_DATA', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');

  __REACT_HOT_LOADER__.register(ADD_EVENT, 'ADD_EVENT', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');

  __REACT_HOT_LOADER__.register(DISCARD_EVENT, 'DISCARD_EVENT', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');

  __REACT_HOT_LOADER__.register(SUBMIT_EVENT, 'SUBMIT_EVENT', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');

  __REACT_HOT_LOADER__.register(DELETE_EVENT, 'DELETE_EVENT', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');

  __REACT_HOT_LOADER__.register(CLOSE_NOTIF, 'CLOSE_NOTIF', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');

  __REACT_HOT_LOADER__.register(FETCH_ROUTES, 'FETCH_ROUTES', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/actionTypes.js');
}();

;

/***/ }),
/* 11 */
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
/* 12 */
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 13 */
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),
/* 14 */
/*!*********************************************!*\
  !*** external "@material-ui/core/TableRow" ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),
/* 15 */
/*!****************************!*\
  !*** external "immutable" ***!
  \****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),
/* 16 */
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),
/* 17 */
/*!******************************************!*\
  !*** external "@material-ui/core/Table" ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),
/* 18 */
/*!**********************************************!*\
  !*** external "@material-ui/core/TableHead" ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),
/* 19 */
/*!************************************!*\
  !*** ./src/app/constants/brand.js ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  name: 'AVD transport',
  desc: 'This admin page made by VKing34',
  prefix: 'VKING34',
  footerText: 'Dont ever insult clients',
  logoText: 'AVD transport',
  needLogin: false
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 20 */
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),
/* 21 */
/*!**********************************************!*\
  !*** external "@material-ui/core/TableBody" ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),
/* 22 */
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 23 */
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),
/* 24 */
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 25 */
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 26 */
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),
/* 27 */
/*!********************************************!*\
  !*** external "@material-ui/core/Tooltip" ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),
/* 28 */
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),
/* 29 */
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

var _pink = __webpack_require__(/*! @material-ui/core/colors/pink */ 66);

var _pink2 = _interopRequireDefault(_pink);

var _orange = __webpack_require__(/*! @material-ui/core/colors/orange */ 67);

var _orange2 = _interopRequireDefault(_orange);

var _lightGreen = __webpack_require__(/*! @material-ui/core/colors/lightGreen */ 108);

var _lightGreen2 = _interopRequireDefault(_lightGreen);

var _blueGrey = __webpack_require__(/*! @material-ui/core/colors/blueGrey */ 105);

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

var _default = styles;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/CardPaper/cardStyle-jss.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/CardPaper/cardStyle-jss.js');
}();

;

/***/ }),
/* 30 */
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),
/* 31 */
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),
/* 32 */
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),
/* 33 */
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),
/* 34 */
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),
/* 35 */
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

var _classnames = __webpack_require__(/*! classnames */ 3);

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ 6);

var _Paper2 = _interopRequireDefault(_Paper);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ 4);

var _Typography2 = _interopRequireDefault(_Typography);

var _papperStyleJss = __webpack_require__(/*! ./papperStyle-jss */ 170);

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

var _default = (0, _styles.withStyles)(_papperStyleJss2.default)(PaperSheet);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PaperSheet, 'PaperSheet', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/PapperBlock/PapperBlock.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/PapperBlock/PapperBlock.js');
}();

;

/***/ }),
/* 36 */
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),
/* 37 */
/*!***************************************!*\
  !*** external "redux-form/immutable" ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("redux-form/immutable");

/***/ }),
/* 38 */
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),
/* 39 */
/*!***************************************************!*\
  !*** ./src/app/components/Contact/contact-jss.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _amber = __webpack_require__(/*! @material-ui/core/colors/amber */ 261);

var _amber2 = _interopRequireDefault(_amber);

var _blue = __webpack_require__(/*! @material-ui/core/colors/blue */ 91);

var _blue2 = _interopRequireDefault(_blue);

var _deepPurple = __webpack_require__(/*! @material-ui/core/colors/deepPurple */ 68);

var _deepPurple2 = _interopRequireDefault(_deepPurple);

var _teal = __webpack_require__(/*! @material-ui/core/colors/teal */ 262);

var _teal2 = _interopRequireDefault(_teal);

var _brown = __webpack_require__(/*! @material-ui/core/colors/brown */ 263);

var _brown2 = _interopRequireDefault(_brown);

var _red = __webpack_require__(/*! @material-ui/core/colors/red */ 49);

var _red2 = _interopRequireDefault(_red);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var drawerWidth = 240;
var drawerHeight = 630;

var styles = function styles(theme) {
  var _root, _drawerPaper, _bottomFilter;

  return {
    root: (_root = {
      flexGrow: 1,
      height: drawerHeight,
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative'
    }, _defineProperty(_root, theme.breakpoints.up('sm'), {
      display: 'flex'
    }), _defineProperty(_root, 'borderRadius', 2), _defineProperty(_root, 'boxShadow', theme.shadows[2]), _root),
    addBtn: {
      position: 'fixed',
      bottom: 30,
      right: 30,
      zIndex: 100
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      background: theme.palette.secondary.main,
      height: 64,
      display: 'flex',
      justifyContent: 'center',
      '& $avatar': {
        marginRight: 10
      },
      '& h2': {
        flex: 1
      },
      '& $button': {
        color: theme.palette.common.white
      }
    },
    button: _defineProperty({}, theme.breakpoints.down('sm'), {
      display: 'none'
    }),
    online: {
      background: '#CDDC39'
    },
    bussy: {
      background: '#EF5350'
    },
    idle: {
      background: '#FFC107'
    },
    offline: {
      background: '#9E9E9E'
    },
    status: {
      padding: '2px 6px',
      '& span': {
        borderRadius: '50%',
        display: 'inline-block',
        marginRight: 2,
        width: 10,
        height: 10,
        border: '1px solid ' + theme.palette.common.white
      }
    },
    appBarShift: _defineProperty({
      marginLeft: 0,
      width: '100%',
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    }, theme.breakpoints.up('md'), {
      marginLeft: drawerWidth,
      width: 'calc(100% - ' + drawerWidth + 'px)'
    }),
    drawerPaper: (_drawerPaper = {}, _defineProperty(_drawerPaper, theme.breakpoints.up('sm'), {
      width: drawerWidth
    }), _defineProperty(_drawerPaper, 'position', 'relative'), _defineProperty(_drawerPaper, 'paddingBottom', 65), _defineProperty(_drawerPaper, 'height', drawerHeight), _drawerPaper),
    clippedRight: {},
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 8,
      position: 'relative',
      '&$clippedRight': {
        marginTop: 66
      }
    },
    content: {
      flexGrow: 1,
      paddingTop: 64,
      backgroundColor: theme.palette.background.paper
    },
    detailPopup: _defineProperty({}, theme.breakpoints.down('xs'), {
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1200,
      width: '100%',
      overflow: 'auto',
      height: 'calc(100% - 50px)'
    }),
    title: {
      display: 'flex',
      flex: 1,
      '& svg': {
        marginRight: 5
      }
    },
    flex: {
      flex: 1
    },
    searchWrapper: {
      fontFamily: theme.typography.fontFamily,
      position: 'relative',
      borderRadius: 2,
      display: 'block',
      background: theme.palette.grey[100]
    },
    search: {
      width: 'auto',
      height: '100%',
      top: 0,
      left: 20,
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    input: {
      font: 'inherit',
      padding: theme.spacing.unit + 'px ' + theme.spacing.unit + 'px ' + theme.spacing.unit + 'px ' + theme.spacing.unit * 6 + 'px',
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
    bottomFilter: (_bottomFilter = {
      position: 'absolute',
      width: '100%'
    }, _defineProperty(_bottomFilter, theme.breakpoints.up('sm'), {
      width: 240
    }), _defineProperty(_bottomFilter, 'zIndex', 2000), _defineProperty(_bottomFilter, 'bottom', 0), _defineProperty(_bottomFilter, 'left', 0), _defineProperty(_bottomFilter, 'background', theme.palette.grey[100]), _defineProperty(_bottomFilter, 'borderTop', '1px solid ' + theme.palette.grey[300]), _defineProperty(_bottomFilter, 'borderRight', '1px solid ' + theme.palette.grey[300]), _bottomFilter),
    avatar: {},
    userName: {
      textAlign: 'left'
    },
    cover: {
      padding: 20,
      height: 130,
      position: 'relative',
      background: theme.palette.primary.light,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      '& $avatar': {
        boxShadow: theme.shadows[4],
        width: 100,
        height: 100,
        marginRight: 20
      }
    },
    opt: {
      position: 'absolute',
      top: 10,
      right: 10
    },
    favorite: {
      color: _amber2.default[500]
    },
    redIcon: {
      background: _red2.default[50],
      '& svg': {
        color: _red2.default[500]
      }
    },
    brownIcon: {
      background: _brown2.default[50],
      '& svg': {
        color: _brown2.default[500]
      }
    },
    tealIcon: {
      background: _teal2.default[50],
      '& svg': {
        color: _teal2.default[500]
      }
    },
    blueIcon: {
      background: _blue2.default[50],
      '& svg': {
        color: _blue2.default[500]
      }
    },
    amberIcon: {
      background: _amber2.default[50],
      '& svg': {
        color: _amber2.default[500]
      }
    },
    purpleIcon: {
      background: _deepPurple2.default[50],
      '& svg': {
        color: _deepPurple2.default[500]
      }
    },
    field: {
      width: '100%',
      marginBottom: 20,
      '& svg': {
        color: theme.palette.grey[400],
        fontSize: 18
      }
    },
    uploadAvatar: {
      width: '100%',
      height: '100%',
      background: theme.palette.grey[200],
      boxShadow: theme.shadows[4]
    },
    selected: {
      background: theme.palette.secondary.light,
      borderLeft: '2px solid ' + theme.palette.secondary.main,
      paddingLeft: 22,
      '& h3': {
        color: theme.palette.secondary.dark
      }
    },
    hiddenDropzone: {
      display: 'none'
    },
    avatarWrap: {
      width: 100,
      height: 100,
      margin: '10px auto 30px',
      position: 'relative'
    },
    buttonUpload: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    navIconHide: _defineProperty({
      marginRight: theme.spacing.unit
    }, theme.breakpoints.up('sm'), {
      display: 'none'
    })
  };
};

var _default = styles;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(drawerWidth, 'drawerWidth', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Contact/contact-jss.js');

  __REACT_HOT_LOADER__.register(drawerHeight, 'drawerHeight', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Contact/contact-jss.js');

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Contact/contact-jss.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Contact/contact-jss.js');
}();

;

/***/ }),
/* 40 */
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

var _default2 = __webpack_require__(/*! ./default */ 307);

var _default3 = _interopRequireDefault(_default2);

var _environment = __webpack_require__(/*! ./environment */ 309);

var _environment2 = _interopRequireDefault(_environment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _extends({}, _default3.default, _environment2.default);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/config/index.js');
}();

;

/***/ }),
/* 41 */
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
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 42 */
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 43 */
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

var _material_bg = __webpack_require__(/*! ../../../../static/images/material_bg.svg */ 143);

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

var _default = styles;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(appFrame, 'appFrame', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/App/appStyles-jss.js');

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/App/appStyles-jss.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/App/appStyles-jss.js');
}();

;

/***/ }),
/* 44 */
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),
/* 45 */
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
/* 46 */
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),
/* 47 */
/*!******************************************!*\
  !*** external "@material-ui/icons/Star" ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Star");

/***/ }),
/* 48 */
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

var _pink = __webpack_require__(/*! @material-ui/core/colors/pink */ 66);

var _pink2 = _interopRequireDefault(_pink);

var _green = __webpack_require__(/*! @material-ui/core/colors/green */ 90);

var _green2 = _interopRequireDefault(_green);

var _blue = __webpack_require__(/*! @material-ui/core/colors/blue */ 91);

var _blue2 = _interopRequireDefault(_blue);

var _deepOrange = __webpack_require__(/*! @material-ui/core/colors/deepOrange */ 177);

var _deepOrange2 = _interopRequireDefault(_deepOrange);

var _red = __webpack_require__(/*! @material-ui/core/colors/red */ 49);

var _red2 = _interopRequireDefault(_red);

var _orange = __webpack_require__(/*! @material-ui/core/colors/orange */ 67);

var _orange2 = _interopRequireDefault(_orange);

var _purple = __webpack_require__(/*! @material-ui/core/colors/purple */ 178);

var _purple2 = _interopRequireDefault(_purple);

var _deepPurple = __webpack_require__(/*! @material-ui/core/colors/deepPurple */ 68);

var _deepPurple2 = _interopRequireDefault(_deepPurple);

var _lime = __webpack_require__(/*! @material-ui/core/colors/lime */ 179);

var _lime2 = _interopRequireDefault(_lime);

var _indigo = __webpack_require__(/*! @material-ui/core/colors/indigo */ 92);

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

var _default = styles;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Widget/widget-jss.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Widget/widget-jss.js');
}();

;

/***/ }),
/* 49 */
/*!***********************************************!*\
  !*** external "@material-ui/core/colors/red" ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/red");

/***/ }),
/* 50 */
/*!*****************************************!*\
  !*** external "@material-ui/core/Chip" ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Chip");

/***/ }),
/* 51 */
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
/* 52 */
/*!*****************************************!*\
  !*** external "@material-ui/icons/Add" ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Add");

/***/ }),
/* 53 */
/*!***************************************************!*\
  !*** external "@material-ui/core/InputAdornment" ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputAdornment");

/***/ }),
/* 54 */
/*!*****************************************!*\
  !*** external "redux-form-material-ui" ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("redux-form-material-ui");

/***/ }),
/* 55 */
/*!**********************************************!*\
  !*** external "@material-ui/icons/MoreVert" ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoreVert");

/***/ }),
/* 56 */
/*!*****************************************************!*\
  !*** ./src/app/components/Calendar/calendar-jss.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pink = __webpack_require__(/*! @material-ui/core/colors/pink */ 66);

var _pink2 = _interopRequireDefault(_pink);

var _lightGreen = __webpack_require__(/*! @material-ui/core/colors/lightGreen */ 108);

var _lightGreen2 = _interopRequireDefault(_lightGreen);

var _lightBlue = __webpack_require__(/*! @material-ui/core/colors/lightBlue */ 272);

var _lightBlue2 = _interopRequireDefault(_lightBlue);

var _deepPurple = __webpack_require__(/*! @material-ui/core/colors/deepPurple */ 68);

var _deepPurple2 = _interopRequireDefault(_deepPurple);

var _orange = __webpack_require__(/*! @material-ui/core/colors/orange */ 67);

var _orange2 = _interopRequireDefault(_orange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    root: _defineProperty({
      padding: 20
    }, theme.breakpoints.down('sm'), {
      padding: '20px 8px'
    }),
    calendarWrap: {
      minHeight: 600
    },
    addBtn: {
      position: 'fixed',
      bottom: 30,
      right: 30,
      zIndex: 100
    },
    typography: {
      margin: theme.spacing.unit * 2
    },
    divider: {
      margin: '5px 0',
      textAlign: 'center'
    },
    button: {
      margin: theme.spacing.unit
    },
    eventName: {
      padding: '50px 20px 10px 30px',
      minWidth: 400,
      color: 'rgba(0, 0, 0, 0.7)',
      '& svg': {
        top: 4,
        position: 'relative'
      }
    },
    time: {
      padding: 20
    },
    moreOpt: {
      position: 'absolute',
      top: 10,
      right: 10
    },
    field: {
      width: '100%',
      marginBottom: 20
    },
    fieldBasic: {
      width: '100%',
      marginBottom: 20,
      marginTop: 10
    },
    inlineWrap: {
      display: 'flex',
      flexDirection: 'row'
    },
    redRadio: {
      color: _pink2.default[600],
      '& svg': {
        borderRadius: '50%',
        background: _pink2.default[100]
      },
      '&$checked': {
        color: _pink2.default[500]
      }
    },
    greenRadio: {
      color: _lightGreen2.default[600],
      '& svg': {
        borderRadius: '50%',
        background: _lightGreen2.default[100]
      },
      '&$checked': {
        color: _lightGreen2.default[500]
      }
    },
    blueRadio: {
      color: _lightBlue2.default[600],
      '& svg': {
        borderRadius: '50%',
        background: _lightBlue2.default[100]
      },
      '&$checked': {
        color: _lightBlue2.default[500]
      }
    },
    violetRadio: {
      color: _deepPurple2.default[600],
      '& svg': {
        borderRadius: '50%',
        background: _deepPurple2.default[100]
      },
      '&$checked': {
        color: _deepPurple2.default[500]
      }
    },
    orangeRadio: {
      color: _orange2.default[600],
      '& svg': {
        borderRadius: '50%',
        background: _orange2.default[100]
      },
      '&$checked': {
        color: _orange2.default[500]
      }
    },
    checked: {}
  };
};

var _default = styles;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Calendar/calendar-jss.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Calendar/calendar-jss.js');
}();

;

/***/ }),
/* 57 */
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
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 58 */
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

var _actionTypes = __webpack_require__(/*! ./actionTypes */ 10);

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
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(toggleAction, 'toggleAction', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/UiActions.js');

  __REACT_HOT_LOADER__.register(openAction, 'openAction', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/UiActions.js');

  __REACT_HOT_LOADER__.register(changeThemeAction, 'changeThemeAction', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/UiActions.js');

  __REACT_HOT_LOADER__.register(playTransitionAction, 'playTransitionAction', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/UiActions.js');
}();

;

/***/ }),
/* 59 */
/*!*******************************************!*\
  !*** external "@material-ui/core/Hidden" ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),
/* 60 */
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),
/* 61 */
/*!******************************************!*\
  !*** external "@material-ui/core/Badge" ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),
/* 62 */
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

var _default = avatars;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(avatars, 'avatars', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/constants/avatars.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/constants/avatars.js');
}();

;

/***/ }),
/* 63 */
/*!************************************************************!*\
  !*** external "@material-ui/core/styles/colorManipulator" ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/colorManipulator");

/***/ }),
/* 64 */
/*!*****************************************!*\
  !*** external "@material-ui/core/Icon" ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Icon");

/***/ }),
/* 65 */
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
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }
}();

;

/***/ }),
/* 66 */
/*!************************************************!*\
  !*** external "@material-ui/core/colors/pink" ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/pink");

/***/ }),
/* 67 */
/*!**************************************************!*\
  !*** external "@material-ui/core/colors/orange" ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/orange");

/***/ }),
/* 68 */
/*!******************************************************!*\
  !*** external "@material-ui/core/colors/deepPurple" ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/deepPurple");

/***/ }),
/* 69 */
/*!**************************************************!*\
  !*** external "@material-ui/icons/ArrowForward" ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowForward");

/***/ }),
/* 70 */
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),
/* 71 */
/*!*********************************************************!*\
  !*** external "material-ui-pickers/utils/moment-utils" ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("material-ui-pickers/utils/moment-utils");

/***/ }),
/* 72 */
/*!********************************************************************!*\
  !*** external "material-ui-pickers/utils/MuiPickersUtilsProvider" ***!
  \********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("material-ui-pickers/utils/MuiPickersUtilsProvider");

/***/ }),
/* 73 */
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),
/* 74 */
/*!**********************************************!*\
  !*** external "@material-ui/icons/Favorite" ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),
/* 75 */
/*!************************************************!*\
  !*** external "@material-ui/icons/LocalPhone" ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocalPhone");

/***/ }),
/* 76 */
/*!************************************************!*\
  !*** external "@material-ui/icons/LocationOn" ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocationOn");

/***/ }),
/* 77 */
/*!***************************************************!*\
  !*** ./src/app/components/Panel/FloatingPanel.js ***!
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

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _withWidth = __webpack_require__(/*! @material-ui/core/withWidth */ 113);

var _withWidth2 = _interopRequireDefault(_withWidth);

var _classnames = __webpack_require__(/*! classnames */ 3);

var _classnames2 = _interopRequireDefault(_classnames);

var _Tooltip = __webpack_require__(/*! @material-ui/core/Tooltip */ 27);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ 5);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Close = __webpack_require__(/*! @material-ui/icons/Close */ 100);

var _Close2 = _interopRequireDefault(_Close);

var _CallMade = __webpack_require__(/*! @material-ui/icons/CallMade */ 256);

var _CallMade2 = _interopRequireDefault(_CallMade);

var _CallReceived = __webpack_require__(/*! @material-ui/icons/CallReceived */ 257);

var _CallReceived2 = _interopRequireDefault(_CallReceived);

var _panelJss = __webpack_require__(/*! ./panel-jss */ 258);

var _panelJss2 = _interopRequireDefault(_panelJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FloatingPanel = function (_React$Component) {
  _inherits(FloatingPanel, _React$Component);

  function FloatingPanel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FloatingPanel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FloatingPanel.__proto__ || Object.getPrototypeOf(FloatingPanel)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      expanded: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FloatingPanel, [{
    key: 'toggleExpand',
    value: function toggleExpand() {
      this.setState({ expanded: !this.state.expanded });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          openForm = _props.openForm,
          closeForm = _props.closeForm,
          children = _props.children,
          branch = _props.branch,
          title = _props.title,
          extraSize = _props.extraSize,
          width = _props.width;
      var expanded = this.state.expanded;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', { className: (0, _classnames2.default)(classes.formOverlay, openForm && ((0, _withWidth.isWidthDown)('sm', width) || expanded) ? classes.showForm : classes.hideForm)
        }),
        _react2.default.createElement(
          'section',
          { className: (0, _classnames2.default)(!openForm ? classes.hideForm : classes.showForm, expanded ? classes.expanded : '', classes.floatingForm, classes.formTheme, extraSize && classes.large)
          },
          _react2.default.createElement(
            'header',
            null,
            title,
            _react2.default.createElement(
              'div',
              { className: classes.btnOpt },
              _react2.default.createElement(
                _Tooltip2.default,
                { title: expanded ? 'Exit Full Screen' : 'Full Screen' },
                _react2.default.createElement(
                  _IconButton2.default,
                  { className: classes.expandButton, onClick: function onClick() {
                      return _this2.toggleExpand();
                    }, 'aria-label': 'Expand' },
                  expanded ? _react2.default.createElement(_CallReceived2.default, null) : _react2.default.createElement(_CallMade2.default, null)
                )
              ),
              _react2.default.createElement(
                _Tooltip2.default,
                { title: 'Close' },
                _react2.default.createElement(
                  _IconButton2.default,
                  { className: classes.closeButton, onClick: function onClick() {
                      return closeForm(branch);
                    }, 'aria-label': 'Close' },
                  _react2.default.createElement(_Close2.default, null)
                )
              )
            )
          ),
          children
        )
      );
    }
  }]);

  return FloatingPanel;
}(_react2.default.Component);

FloatingPanel.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  openForm: _propTypes2.default.bool.isRequired,
  closeForm: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.node.isRequired,
  branch: _propTypes2.default.string.isRequired,
  width: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string,
  extraSize: _propTypes2.default.bool
};

FloatingPanel.defaultProps = {
  title: 'Add New Item',
  extraSize: false
};

var FloatingPanelResponsive = (0, _withWidth2.default)()(FloatingPanel);

var _default = (0, _styles.withStyles)(_panelJss2.default)(FloatingPanelResponsive);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FloatingPanel, 'FloatingPanel', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Panel/FloatingPanel.js');

  __REACT_HOT_LOADER__.register(FloatingPanelResponsive, 'FloatingPanelResponsive', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Panel/FloatingPanel.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Panel/FloatingPanel.js');
}();

;

/***/ }),
/* 78 */
/*!*********************************************************!*\
  !*** external "@material-ui/icons/PermContactCalendar" ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PermContactCalendar");

/***/ }),
/* 79 */
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 80 */
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 81 */
/*!********************************!*\
  !*** ./static/images/logo.svg ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2NsaXAtcGF0aDp1cmwoI1NWR0lEXzJfKTtmaWxsOiNFQkU5RkY7fQoJLnN0MntmaWxsOiNEODFCNjA7fQoJLnN0M3tmaWxsOiNFQzQwN0E7fQoJLnN0NHtmaWxsOiM0NTI3OUY7fQo8L3N0eWxlPgo8Zz4KCTxnPgoJCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjUwIiBjeT0iNTAiIHI9IjQ5Ii8+CgkJPGc+CgkJCTxnPgoJCQkJPGc+CgkJCQkJPGc+CgkJCQkJCTxnPgoJCQkJCQkJPGRlZnM+CgkJCQkJCQkJPGNpcmNsZSBpZD0iU1ZHSURfMV8iIGN4PSI1MCIgY3k9IjUwIiByPSI0OC42Ii8+CgkJCQkJCQk8L2RlZnM+CgkJCQkJCQk8Y2xpcFBhdGggaWQ9IlNWR0lEXzJfIj4KCQkJCQkJCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xXyIgIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIvPgoJCQkJCQkJPC9jbGlwUGF0aD4KCQkJCQkJCTxwb2x5bGluZSBjbGFzcz0ic3QxIiBwb2ludHM9IjM5LjgsNzggNTYuNiwyMi43IDY1LjksMTYuNSAxMDcuMSw0MiAxMTMuOCw1MS42IDEwNi44LDExNy42IDUwLDg3LjkgCQkJCQkJCSIvPgoJCQkJCQk8L2c+CgkJCQkJPC9nPgoJCQkJPC9nPgoJCQk8L2c+CgkJCTxwb2x5Z29uIGNsYXNzPSJzdDIiIHBvaW50cz0iNTAsMjguMiA0MC42LDM1LjcgNDYuMSw0NS4zIDUzLjksNDUuMyA1OS40LDM1LjcgCQkJIi8+CgkJCTxwb2x5Z29uIGNsYXNzPSJzdDMiIHBvaW50cz0iNTMuOSw0NS4zIDQ2LjEsNDUuMyAzOS44LDc4IDUwLDg3LjkgNjAuMiw3OCAJCQkiLz4KCQkJPGc+CgkJCQk8cG9seWdvbiBjbGFzcz0ic3Q0IiBwb2ludHM9IjM0LjEsMTYuNSAyNS43LDI1LjkgMzguMSw0My42IDUwLDI4LjIgCQkJCSIvPgoJCQkJPHBvbHlnb24gY2xhc3M9InN0NCIgcG9pbnRzPSI2NS45LDE2LjUgNzQuMywyNS45IDYxLjksNDMuNiA1MCwyOC4yIAkJCQkiLz4KCQkJPC9nPgoJCTwvZz4KCTwvZz4KPC9nPgo8L3N2Zz4K"

/***/ }),
/* 82 */
/*!******************************************!*\
  !*** external "@material-ui/icons/Info" ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Info");

/***/ }),
/* 83 */
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemIcon" ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),
/* 84 */
/*!********************************************!*\
  !*** ./src/app/constants/dummyContents.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _avatars = __webpack_require__(/*! ./avatars */ 62);

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
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 85 */
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

var _colorManipulator = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ 63);

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

var _default = styles;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(drawerWidth, 'drawerWidth', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Header/header-jss.js');

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Header/header-jss.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Header/header-jss.js');
}();

;

/***/ }),
/* 86 */
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),
/* 87 */
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandMore" ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),
/* 88 */
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
  icon: 'view_column',
  link: '/admin/route'
}, {
  key: 'transporter',
  name: 'Transporter',
  icon: 'palette',
  link: '/admin/transporter'
}, {
  key: 'employee',
  name: 'Employee',
  icon: 'grid_on',
  child: [{
    key: 'driver',
    name: 'Driver',
    link: '/admin/employee/driver'
  }, {
    key: 'assistant',
    name: 'Assistant',
    link: '/admin/employee/assistant'
  }]
}, {
  key: 'client',
  name: 'Client',
  icon: 'border_color',
  link: '/admin/client'
}, {
  key: 'ticket',
  name: 'Ticket',
  icon: 'border_color',
  link: '/admin/ticket'
}, {
  key: 'tschedule',
  name: 'Transport Schedule',
  icon: 'flag',
  link: '/admin/transport-schedule'
}, {
  key: 'wschedule',
  name: 'Work Schedule',
  icon: 'insert_chart',
  link: '/admin/work-schedule'
}, {
  key: 'themes',
  name: 'Themes Setting',
  icon: 'palette',
  link: '/admin/settings/themes'
}];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 89 */
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

var _default = styles;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(drawerWidth, 'drawerWidth', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Sidebar/sidebar-jss.js');

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Sidebar/sidebar-jss.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Sidebar/sidebar-jss.js');
}();

;

/***/ }),
/* 90 */
/*!*************************************************!*\
  !*** external "@material-ui/core/colors/green" ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/green");

/***/ }),
/* 91 */
/*!************************************************!*\
  !*** external "@material-ui/core/colors/blue" ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/blue");

/***/ }),
/* 92 */
/*!**************************************************!*\
  !*** external "@material-ui/core/colors/indigo" ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/indigo");

/***/ }),
/* 93 */
/*!***********************************************!*\
  !*** external "@material-ui/icons/ArrowBack" ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowBack");

/***/ }),
/* 94 */
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

var _default = images;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(images, 'images', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/constants/images.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/constants/images.js');
}();

;

/***/ }),
/* 95 */
/*!******************************************!*\
  !*** external "@material-ui/core/Input" ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),
/* 96 */
/*!**************************************!*\
  !*** external "material-ui-pickers" ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("material-ui-pickers");

/***/ }),
/* 97 */
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

var _colorManipulator = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ 63);

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

var _default = styles;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Tables/tableParts/tableStyle-jss.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Tables/tableParts/tableStyle-jss.js');
}();

;

/***/ }),
/* 98 */
/*!*********************************************!*\
  !*** external "@material-ui/core/Checkbox" ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),
/* 99 */
/*!**********************************************!*\
  !*** external "@material-ui/icons/Bookmark" ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Bookmark");

/***/ }),
/* 100 */
/*!*******************************************!*\
  !*** external "@material-ui/icons/Close" ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),
/* 101 */
/*!**************************************************!*\
  !*** external "@material-ui/icons/AllInclusive" ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AllInclusive");

/***/ }),
/* 102 */
/*!*************************************************!*\
  !*** external "@material-ui/icons/Brightness5" ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Brightness5");

/***/ }),
/* 103 */
/*!********************************************!*\
  !*** external "@material-ui/icons/People" ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/People");

/***/ }),
/* 104 */
/*!**********************************************!*\
  !*** ./src/app/components/Forms/user-jss.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cyan = __webpack_require__(/*! @material-ui/core/colors/cyan */ 231);

var _cyan2 = _interopRequireDefault(_cyan);

var _indigo = __webpack_require__(/*! @material-ui/core/colors/indigo */ 92);

var _indigo2 = _interopRequireDefault(_indigo);

var _red = __webpack_require__(/*! @material-ui/core/colors/red */ 49);

var _red2 = _interopRequireDefault(_red);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  var _avatar;

  return {
    root: {
      display: 'flex',
      width: '100%',
      zIndex: 1,
      position: 'relative'
    },
    container: _defineProperty({
      display: 'flex',
      alignItems: 'center',
      width: '100%'
    }, theme.breakpoints.down('md'), {
      overflow: 'hidden'
    }),
    formControl: {
      width: '100%',
      marginBottom: theme.spacing.unit * 3
    },
    loginWrap: _defineProperty({}, theme.breakpoints.up('md'), {
      width: 860
    }),
    formWrap: _defineProperty({}, theme.breakpoints.up('md'), {
      marginTop: -24
    }),
    btnArea: _defineProperty({
      justifyContent: 'space-between',
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing.unit * 3
    }, theme.breakpoints.down('sm'), {
      flexDirection: 'column',
      '& button': {
        width: '100%',
        margin: 5
      }
    }),
    noMargin: {
      margin: 0
    },
    optArea: _defineProperty({
      justifyContent: 'space-between',
      display: 'flex',
      alignItems: 'center',
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      width: '60%'
    }),
    redBtn: {
      color: theme.palette.getContrastText(_red2.default[500]),
      backgroundColor: _red2.default[500],
      '&:hover': {
        backgroundColor: _red2.default[700]
      }
    },
    blueBtn: {
      color: theme.palette.getContrastText(_indigo2.default[500]),
      backgroundColor: _indigo2.default[500],
      '&:hover': {
        backgroundColor: _indigo2.default[700]
      }
    },
    cyanBtn: {
      color: theme.palette.getContrastText(_cyan2.default[700]),
      backgroundColor: _cyan2.default[500],
      '&:hover': {
        backgroundColor: _cyan2.default[700]
      }
    },
    leftIcon: {
      marginRight: theme.spacing.unit
    },
    rightIcon: {
      marginLeft: theme.spacing.unit
    },
    iconSmall: {
      fontSize: 20
    },
    footer: {
      textAlign: 'center',
      padding: 5,
      background: theme.palette.grey[100],
      fontSize: 14,
      position: 'relative'
    },
    welcomeWrap: {
      position: 'relative'
    },
    welcome: {
      background: theme.palette.secondary.light,
      position: 'absolute',
      width: '100%',
      height: 'calc(100% + 30px)',
      padding: '20px 50px',
      top: -15,
      left: 2,
      boxShadow: theme.shadows[5],
      borderRadius: 2,
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    },
    brand: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      position: 'relative',
      marginBottom: 20,
      '& img': {
        width: 32
      },
      '& h3': {
        fontSize: 18,
        margin: 0,
        paddingLeft: 10,
        fontWeight: 500,
        color: theme.palette.grey[700]
      }
    },
    brandText: {
      marginTop: 10,
      color: 'rgba(0, 0, 0, 0.54)'
    },
    decoBottom: {
      fontSize: 480,
      position: 'absolute',
      left: 10,
      bottom: -190,
      opacity: 0.1,
      color: theme.palette.secondary.dark
    },
    tab: _defineProperty({
      marginBottom: 20
    }, theme.breakpoints.up('md'), {
      marginTop: theme.spacing.unit * -3
    }),
    link: {
      fontSize: 12,
      marginLeft: -30,
      color: theme.palette.secondary.main,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    socMedFull: {
      marginBottom: theme.spacing.unit * 2
    },
    lockWrap: {
      textAlign: 'center',
      padding: theme.spacing.unit * 3
    },
    avatar: (_avatar = {
      width: 150,
      height: 150,
      margin: '5px auto 30px'
    }, _defineProperty(_avatar, theme.breakpoints.up('md'), {
      margin: '-75px auto 30px'
    }), _defineProperty(_avatar, 'boxShadow', theme.shadows[8]), _avatar),
    userName: {
      marginBottom: theme.spacing.unit * 3
    },
    hint: {
      padding: theme.spacing.unit
    }
  };
};

var _default = styles;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Forms/user-jss.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Forms/user-jss.js');
}();

;

/***/ }),
/* 105 */
/*!****************************************************!*\
  !*** external "@material-ui/core/colors/blueGrey" ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/blueGrey");

/***/ }),
/* 106 */
/*!*****************************************************!*\
  !*** external "@material-ui/core/BottomNavigation" ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/BottomNavigation");

/***/ }),
/* 107 */
/*!***********************************************************!*\
  !*** external "@material-ui/core/BottomNavigationAction" ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/BottomNavigationAction");

/***/ }),
/* 108 */
/*!******************************************************!*\
  !*** external "@material-ui/core/colors/lightGreen" ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/lightGreen");

/***/ }),
/* 109 */
/*!*******************************************!*\
  !*** external "@material-ui/icons/Share" ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Share");

/***/ }),
/* 110 */
/*!*********************************************!*\
  !*** external "@material-ui/icons/Comment" ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Comment");

/***/ }),
/* 111 */
/*!***********************************************!*\
  !*** external "@material-ui/icons/PlayArrow" ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PlayArrow");

/***/ }),
/* 112 */
/*!***********************************************!*\
  !*** external "@material-ui/core/CardHeader" ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardHeader");

/***/ }),
/* 113 */
/*!**********************************************!*\
  !*** external "@material-ui/core/withWidth" ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/withWidth");

/***/ }),
/* 114 */
/*!**************************************************!*\
  !*** external "@material-ui/icons/ShoppingCart" ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ShoppingCart");

/***/ }),
/* 115 */
/*!*****************************************!*\
  !*** ./src/app/components/Cart/Cart.js ***!
  \*****************************************/
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

var _Menu = __webpack_require__(/*! @material-ui/core/Menu */ 32);

var _Menu2 = _interopRequireDefault(_Menu);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ 4);

var _Typography2 = _interopRequireDefault(_Typography);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ 9);

var _Button2 = _interopRequireDefault(_Button);

var _ListSubheader = __webpack_require__(/*! @material-ui/core/ListSubheader */ 252);

var _ListSubheader2 = _interopRequireDefault(_ListSubheader);

var _List = __webpack_require__(/*! @material-ui/core/List */ 34);

var _List2 = _interopRequireDefault(_List);

var _ListItem = __webpack_require__(/*! @material-ui/core/ListItem */ 30);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemText = __webpack_require__(/*! @material-ui/core/ListItemText */ 26);

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _ListItemSecondaryAction = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ 253);

var _ListItemSecondaryAction2 = _interopRequireDefault(_ListItemSecondaryAction);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ 5);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Delete = __webpack_require__(/*! @material-ui/icons/Delete */ 70);

var _Delete2 = _interopRequireDefault(_Delete);

var _Divider = __webpack_require__(/*! @material-ui/core/Divider */ 16);

var _Divider2 = _interopRequireDefault(_Divider);

var _ShoppingCart = __webpack_require__(/*! @material-ui/icons/ShoppingCart */ 114);

var _ShoppingCart2 = _interopRequireDefault(_ShoppingCart);

var _Typography3 = __webpack_require__(/*! ../../styles/components/Typography.scss */ 51);

var _Typography4 = _interopRequireDefault(_Typography3);

var _cartJss = __webpack_require__(/*! ./cart-jss */ 254);

var _cartJss2 = _interopRequireDefault(_cartJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cart = function (_React$Component) {
  _inherits(Cart, _React$Component);

  function Cart() {
    _classCallCheck(this, Cart);

    return _possibleConstructorReturn(this, (Cart.__proto__ || Object.getPrototypeOf(Cart)).apply(this, arguments));
  }

  _createClass(Cart, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          anchorEl = _props.anchorEl,
          close = _props.close,
          dataCart = _props.dataCart,
          removeItem = _props.removeItem,
          totalPrice = _props.totalPrice,
          checkout = _props.checkout;


      var getCartItem = function getCartItem(dataArray) {
        return dataArray.map(function (item, index) {
          return _react2.default.createElement(
            _react.Fragment,
            { key: index.toString() },
            _react2.default.createElement(
              _ListItem2.default,
              null,
              _react2.default.createElement(
                'figure',
                null,
                _react2.default.createElement('img', { src: item.get('thumbnail'), alt: 'thumb' })
              ),
              _react2.default.createElement(_ListItemText2.default, {
                primary: item.get('name'),
                secondary: 'Quantity: ' + item.get('quantity') + ' Item - USD ' + item.get('price') * item.get('quantity'),
                className: classes.itemText
              }),
              _react2.default.createElement(
                _ListItemSecondaryAction2.default,
                null,
                _react2.default.createElement(
                  _IconButton2.default,
                  { 'aria-label': 'Comments', onClick: function onClick() {
                      return removeItem(item);
                    } },
                  _react2.default.createElement(_Delete2.default, null)
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(_Divider2.default, null)
            )
          );
        });
      };
      return _react2.default.createElement(
        _Menu2.default,
        {
          id: 'cart-menu',
          anchorEl: anchorEl,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'right'
          },
          open: Boolean(anchorEl),
          onClose: close,
          className: classes.cartPanel
        },
        _react2.default.createElement(
          _List2.default,
          {
            component: 'ul',
            subheader: _react2.default.createElement(
              _ListSubheader2.default,
              { component: 'div' },
              _react2.default.createElement(_ShoppingCart2.default, null),
              ' Total: ',
              dataCart.size,
              ' Unique items in Cart'
            ),
            className: classes.cartWrap
          },
          dataCart.size < 1 ? _react2.default.createElement(
            'div',
            { className: classes.empty },
            _react2.default.createElement(
              _Typography2.default,
              { variant: 'subheading' },
              'Empty Cart'
            ),
            _react2.default.createElement(
              _Typography2.default,
              { variant: 'caption' },
              'Your shopping items will be listed here'
            )
          ) : _react2.default.createElement(
            _react.Fragment,
            null,
            getCartItem(dataCart),
            _react2.default.createElement(
              _ListItem2.default,
              { className: classes.totalPrice },
              _react2.default.createElement(
                _Typography2.default,
                { variant: 'subheading' },
                'Total : ',
                _react2.default.createElement(
                  'span',
                  { className: _Typography4.default.bold },
                  '$',
                  totalPrice
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(_Divider2.default, null)
            ),
            _react2.default.createElement(
              _ListItem2.default,
              null,
              _react2.default.createElement(
                _Button2.default,
                { fullWidth: true, className: classes.button, variant: 'raised', onClick: function onClick() {
                    return checkout();
                  }, color: 'secondary' },
                'Checkout'
              )
            )
          )
        )
      );
    }
  }]);

  return Cart;
}(_react2.default.Component);

Cart.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  dataCart: _propTypes2.default.object.isRequired,
  anchorEl: _propTypes2.default.object,
  close: _propTypes2.default.func.isRequired,
  removeItem: _propTypes2.default.func.isRequired,
  checkout: _propTypes2.default.func.isRequired,
  totalPrice: _propTypes2.default.number.isRequired
};

Cart.defaultProps = {
  anchorEl: null
};

var _default = (0, _styles.withStyles)(_cartJss2.default)(Cart);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Cart, 'Cart', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Cart/Cart.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Cart/Cart.js');
}();

;

/***/ }),
/* 116 */
/*!*******************************************!*\
  !*** external "@material-ui/icons/Email" ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Email");

/***/ }),
/* 117 */
/*!************************************************!*\
  !*** external "@material-ui/icons/Smartphone" ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Smartphone");

/***/ }),
/* 118 */
/*!******************************************!*\
  !*** external "@material-ui/icons/Work" ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Work");

/***/ }),
/* 119 */
/*!**********************************************!*\
  !*** external "@material-ui/icons/Language" ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Language");

/***/ }),
/* 120 */
/*!*********************************************!*\
  !*** ./src/app/styles/components/Form.scss ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {
	"bodyForm": "bodyForm__1bRIl",
	"buttonArea": "buttonArea__3uTSL"
};

/***/ }),
/* 121 */
/*!*****************************************************!*\
  !*** ./src/app/components/Calendar/AddEventForm.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ 9);

var _Button2 = _interopRequireDefault(_Button);

var _Radio = __webpack_require__(/*! @material-ui/core/Radio */ 122);

var _Radio2 = _interopRequireDefault(_Radio);

var _RadioGroup = __webpack_require__(/*! @material-ui/core/RadioGroup */ 123);

var _RadioGroup2 = _interopRequireDefault(_RadioGroup);

var _FormLabel = __webpack_require__(/*! @material-ui/core/FormLabel */ 277);

var _FormLabel2 = _interopRequireDefault(_FormLabel);

var _FormControlLabel = __webpack_require__(/*! @material-ui/core/FormControlLabel */ 36);

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _materialUiPickers = __webpack_require__(/*! material-ui-pickers */ 96);

var _immutable = __webpack_require__(/*! redux-form/immutable */ 37);

var _reduxFormMaterialUi = __webpack_require__(/*! redux-form-material-ui */ 54);

var _momentUtils = __webpack_require__(/*! material-ui-pickers/utils/moment-utils */ 71);

var _momentUtils2 = _interopRequireDefault(_momentUtils);

var _reactRedux = __webpack_require__(/*! react-redux */ 12);

var _MuiPickersUtilsProvider = __webpack_require__(/*! material-ui-pickers/utils/MuiPickersUtilsProvider */ 72);

var _MuiPickersUtilsProvider2 = _interopRequireDefault(_MuiPickersUtilsProvider);

var _Form = __webpack_require__(/*! ../../styles/components/Form.scss */ 120);

var _Form2 = _interopRequireDefault(_Form);

var _calendarJss = __webpack_require__(/*! ./calendar-jss */ 56);

var _calendarJss2 = _interopRequireDefault(_calendarJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// validation functions
var required = function required(value) {
  return value == null ? 'Required' : undefined;
};

var DateTimePickerRow = function DateTimePickerRow(props) {
  var showErrorsInline = props.showErrorsInline,
      dispatch = props.dispatch,
      _props$input = props.input,
      onChange = _props$input.onChange,
      value = _props$input.value,
      _props$meta = props.meta,
      touched = _props$meta.touched,
      error = _props$meta.error,
      other = _objectWithoutProperties(props, ['showErrorsInline', 'dispatch', 'input', 'meta']);

  var showError = showErrorsInline || touched;

  return _react2.default.createElement(
    _MuiPickersUtilsProvider2.default,
    { utils: _momentUtils2.default },
    _react2.default.createElement(_materialUiPickers.DateTimePicker, _extends({
      keyboard: true,
      error: !!(showError && error),
      helperText: showError && error,
      value: value || new Date(),
      onChange: onChange,
      disablePast: true,
      label: 'DateTimePicker'
    }, other))
  );
};

DateTimePickerRow.propTypes = {
  showErrorsInline: _propTypes2.default.bool,
  dispatch: _propTypes2.default.func,
  input: _propTypes2.default.object.isRequired,
  meta: _propTypes2.default.object.isRequired
};

var renderRadioGroup = function renderRadioGroup(_ref) {
  var input = _ref.input,
      rest = _objectWithoutProperties(_ref, ['input']);

  return _react2.default.createElement(_RadioGroup2.default, _extends({}, input, rest, {
    valueselected: input.value,
    onChange: function onChange(event, value) {
      return input.onChange(value);
    }
  }));
};

renderRadioGroup.propTypes = {
  input: _propTypes2.default.object.isRequired
};

DateTimePickerRow.defaultProps = {
  showErrorsInline: false,
  dispatch: function dispatch() {}
};

var AddEventForm = function (_React$Component) {
  _inherits(AddEventForm, _React$Component);

  function AddEventForm() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, AddEventForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = AddEventForm.__proto__ || Object.getPrototypeOf(AddEventForm)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      selectedDate: new Date()
    }, _this.saveRef = function () {
      var _this2;

      return (_this2 = _this).__saveRef__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AddEventForm, [{
    key: '__saveRef__REACT_HOT_LOADER__',
    value: function __saveRef__REACT_HOT_LOADER__() {
      return this.__saveRef__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__saveRef__REACT_HOT_LOADER__',
    value: function __saveRef__REACT_HOT_LOADER__(ref) {
      this.ref = ref;
      return this.ref;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          reset = _props.reset,
          pristine = _props.pristine,
          submitting = _props.submitting,
          handleSubmit = _props.handleSubmit;
      var selectedDate = this.state.selectedDate;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          { onSubmit: handleSubmit },
          _react2.default.createElement(
            'section',
            { className: _Form2.default.bodyForm },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_immutable.Field, {
                name: 'title',
                component: _reduxFormMaterialUi.TextField,
                placeholder: 'Event Name',
                label: 'Event Name',
                validate: required,
                required: true,
                ref: this.saveRef,
                withRef: true,
                className: classes.field
              })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_immutable.Field, {
                name: 'start',
                component: DateTimePickerRow,
                placeholder: 'Start Date',
                value: selectedDate,
                label: 'Start Date',
                className: classes.field
              })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_immutable.Field, {
                name: 'end',
                component: DateTimePickerRow,
                placeholder: 'End Date',
                value: selectedDate,
                label: 'End Date',
                className: classes.field
              })
            ),
            _react2.default.createElement(
              'div',
              { className: classes.fieldBasic },
              _react2.default.createElement(
                _FormLabel2.default,
                { component: 'label' },
                'Label Color'
              ),
              _react2.default.createElement(
                _immutable.Field,
                { name: 'hexColor', className: classes.inlineWrap, component: renderRadioGroup },
                _react2.default.createElement(_FormControlLabel2.default, { value: 'F8BBD0', control: _react2.default.createElement(_Radio2.default, { className: classes.redRadio, classes: { root: classes.redRadio, checked: classes.checked } }), label: 'Red' }),
                _react2.default.createElement(_FormControlLabel2.default, { value: 'C8E6C9', control: _react2.default.createElement(_Radio2.default, { className: classes.greenRadio, classes: { root: classes.greenRadio, checked: classes.checked } }), label: 'Green' }),
                _react2.default.createElement(_FormControlLabel2.default, { value: 'B3E5FC', control: _react2.default.createElement(_Radio2.default, { className: classes.blueRadio, classes: { root: classes.blueRadio, checked: classes.checked } }), label: 'Blue' }),
                _react2.default.createElement(_FormControlLabel2.default, { value: 'D1C4E9', control: _react2.default.createElement(_Radio2.default, { className: classes.violetRadio, classes: { root: classes.violetRadio, checked: classes.checked } }), label: 'Violet' }),
                _react2.default.createElement(_FormControlLabel2.default, { value: 'FFECB3', control: _react2.default.createElement(_Radio2.default, { className: classes.orangeRadio, classes: { root: classes.orangeRadio, checked: classes.checked } }), label: 'Orange' })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _Form2.default.buttonArea },
            _react2.default.createElement(
              _Button2.default,
              { variant: 'raised', color: 'secondary', type: 'submit', disabled: submitting },
              'Submit'
            ),
            _react2.default.createElement(
              _Button2.default,
              {
                type: 'button',
                disabled: pristine || submitting,
                onClick: reset
              },
              'Reset'
            )
          )
        )
      );
    }
  }]);

  return AddEventForm;
}(_react2.default.Component);

AddEventForm.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  handleSubmit: _propTypes2.default.func.isRequired,
  reset: _propTypes2.default.func.isRequired,
  pristine: _propTypes2.default.bool.isRequired,
  submitting: _propTypes2.default.bool.isRequired
};

var AddEventFormRedux = (0, _immutable.reduxForm)({
  form: 'immutableAddCalendar',
  enableReinitialize: true
})(AddEventForm);

var reducer = 'calendar';
var AddEventInit = (0, _reactRedux.connect)(function (state) {
  return {
    force: state,
    initialValues: state.getIn([reducer, 'formValues'])
  };
})(AddEventFormRedux);

var _default = (0, _styles.withStyles)(_calendarJss2.default)(AddEventInit);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(required, 'required', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Calendar/AddEventForm.js');

  __REACT_HOT_LOADER__.register(DateTimePickerRow, 'DateTimePickerRow', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Calendar/AddEventForm.js');

  __REACT_HOT_LOADER__.register(renderRadioGroup, 'renderRadioGroup', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Calendar/AddEventForm.js');

  __REACT_HOT_LOADER__.register(AddEventForm, 'AddEventForm', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Calendar/AddEventForm.js');

  __REACT_HOT_LOADER__.register(AddEventFormRedux, 'AddEventFormRedux', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Calendar/AddEventForm.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Calendar/AddEventForm.js');

  __REACT_HOT_LOADER__.register(AddEventInit, 'AddEventInit', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Calendar/AddEventForm.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Calendar/AddEventForm.js');
}();

;

/***/ }),
/* 122 */
/*!******************************************!*\
  !*** external "@material-ui/core/Radio" ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Radio");

/***/ }),
/* 123 */
/*!***********************************************!*\
  !*** external "@material-ui/core/RadioGroup" ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/RadioGroup");

/***/ }),
/* 124 */
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

var _default = styles;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Themes/themeStyles-jss.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Themes/themeStyles-jss.js');
}();

;

/***/ }),
/* 125 */
/*!***************************************************!*\
  !*** external "@material-ui/core/LinearProgress" ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/LinearProgress");

/***/ }),
/* 126 */
/*!*************************************************!*\
  !*** ./src/app/styles/components/Progress.scss ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {
	"bgInfo": "bgInfo__1rIDg",
	"bgSuccess": "bgSuccess__1aJ9a",
	"bgWarning": "bgWarning__1NtmD",
	"bgError": "bgError__3CYo8",
	"bgDefault": "bgDefault__kFCyp"
};

/***/ }),
/* 127 */
/*!*************************************!*\
  !*** external "react-router-redux" ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),
/* 128 */
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

var _path = __webpack_require__(/*! path */ 129);

var _path2 = _interopRequireDefault(_path);

var _compression = __webpack_require__(/*! compression */ 130);

var _compression2 = _interopRequireDefault(_compression);

var _express = __webpack_require__(/*! express */ 131);

var _express2 = _interopRequireDefault(_express);

var _serveFavicon = __webpack_require__(/*! serve-favicon */ 132);

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

__webpack_require__(/*! ./env */ 133);

var _rawdocs = __webpack_require__(/*! ./rawdocs */ 135);

var _rawdocs2 = _interopRequireDefault(_rawdocs);

var _rawicons = __webpack_require__(/*! ./rawicons */ 136);

var _rawicons2 = _interopRequireDefault(_rawicons);

var _createSSR = __webpack_require__(/*! ./SSR/createSSR */ 137);

var _createSSR2 = _interopRequireDefault(_createSSR);

var _config = __webpack_require__(/*! ./../app/config */ 40);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _config$server = _config2.default.server,
    host = _config$server.host,
    port = _config$server.port;

var app = (0, _express2.default)();

var _default = function _default(parameters) {
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

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(host, 'host', '/root/Desktop/ui-itss/passenger-transport-admin/src/server/server.js');

  __REACT_HOT_LOADER__.register(port, 'port', '/root/Desktop/ui-itss/passenger-transport-admin/src/server/server.js');

  __REACT_HOT_LOADER__.register(app, 'app', '/root/Desktop/ui-itss/passenger-transport-admin/src/server/server.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/server/server.js');
}();

;

/***/ }),
/* 129 */
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 130 */
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 131 */
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 132 */
/*!********************************!*\
  !*** external "serve-favicon" ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 133 */
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

var _dotenv = __webpack_require__(/*! dotenv */ 134);

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _dotenv2.default.config();

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/server/env.js');
}();

;

/***/ }),
/* 134 */
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 135 */
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

var _fs = __webpack_require__(/*! fs */ 79);

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rawdoc(componentName) {
  var dir = 'src/app/';
  var content = _fs2.default.readFileSync(dir + componentName.src, 'utf8');
  return content.toString();
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(rawdoc, 'rawdoc', '/root/Desktop/ui-itss/passenger-transport-admin/src/server/rawdocs.js');
}();

;

/***/ }),
/* 136 */
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

var _fs = __webpack_require__(/*! fs */ 79);

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rawdoc(fileName) {
  var dir = 'src/helpers/';
  var content = _fs2.default.readFileSync(dir + fileName.src, 'utf8');
  return content.toString();
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(rawdoc, 'rawdoc', '/root/Desktop/ui-itss/passenger-transport-admin/src/server/rawicons.js');
}();

;

/***/ }),
/* 137 */
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

var _server = __webpack_require__(/*! react-dom/server */ 80);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ 25);

var _reactRouterConfig = __webpack_require__(/*! react-router-config */ 42);

var _reactRedux = __webpack_require__(/*! react-redux */ 12);

var _history = __webpack_require__(/*! history */ 138);

var _containers = __webpack_require__(/*! ./../../app/containers */ 139);

var _containers2 = _interopRequireDefault(_containers);

var _html = __webpack_require__(/*! ./html */ 310);

var _html2 = _interopRequireDefault(_html);

var _ApiClient = __webpack_require__(/*! ./../../helpers/ApiClient */ 311);

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _store = __webpack_require__(/*! ./../../app/redux/store */ 313);

var _store2 = _interopRequireDefault(_store);

var _config = __webpack_require__(/*! ./../../app/config */ 40);

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
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(createSSR, 'createSSR', '/root/Desktop/ui-itss/passenger-transport-admin/src/server/SSR/createSSR.js');
}();

;

/***/ }),
/* 138 */
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),
/* 139 */
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

var _components = __webpack_require__(/*! ./../components */ 8);

var _Dashboard = __webpack_require__(/*! ./Dashboard/Dashboard */ 279);

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _RoutePage = __webpack_require__(/*! ./Routes/RoutePage */ 281);

var _RoutePage2 = _interopRequireDefault(_RoutePage);

var _Themes = __webpack_require__(/*! ./Themes */ 283);

var _Themes2 = _interopRequireDefault(_Themes);

var _CrudTable = __webpack_require__(/*! ./Tables/CrudTable */ 285);

var _CrudTable2 = _interopRequireDefault(_CrudTable);

var _NotFound = __webpack_require__(/*! ./NotFound/NotFound */ 302);

var _NotFound2 = _interopRequireDefault(_NotFound);

var _NotFoundDedicated = __webpack_require__(/*! ./Pages/Standalone/NotFoundDedicated */ 303);

var _NotFoundDedicated2 = _interopRequireDefault(_NotFoundDedicated);

var _withTracker = __webpack_require__(/*! ./withTracker */ 305);

var _withTracker2 = _interopRequireDefault(_withTracker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Tables
var _default = function _default(store) {
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
        component: (0, _withTracker2.default)(_CrudTable2.default)
      }, {
        path: '/admin/employee',
        component: (0, _withTracker2.default)(_CrudTable2.default)
      }, {
        path: '/admin/employee/driver',
        component: (0, _withTracker2.default)(_CrudTable2.default)
      }, {
        path: '/admin/employee/assistant',
        component: (0, _withTracker2.default)(_CrudTable2.default)
      }, {
        path: '/admin/client',
        component: (0, _withTracker2.default)(_CrudTable2.default)
      }, {
        path: '/admin/transport-schedule',
        component: (0, _withTracker2.default)(_CrudTable2.default)
      }, {
        path: '/admin/work-schedule',
        component: (0, _withTracker2.default)(_CrudTable2.default)
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


// Themes

// Dashboard


exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/index.js');
}();

;

/***/ }),
/* 140 */
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

var _reactRouterConfig = __webpack_require__(/*! react-router-config */ 42);

var _reactRedux = __webpack_require__(/*! react-redux */ 12);

var _reactLoadingBar = __webpack_require__(/*! react-loading-bar */ 141);

var _reactLoadingBar2 = _interopRequireDefault(_reactLoadingBar);

var _redux = __webpack_require__(/*! redux */ 22);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _themePalette = __webpack_require__(/*! ../../constants/themePalette.js */ 57);

var _themePalette2 = _interopRequireDefault(_themePalette);

__webpack_require__(/*! ../../styles/components/vendors/react-loading-bar/index.css */ 142);

var _UiActions = __webpack_require__(/*! ./../../actions/UiActions */ 58);

var _appStylesJss = __webpack_require__(/*! ./appStyles-jss */ 43);

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
      var _this2;

      return (_this2 = _this).__componentWillMount__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.componentDidMount = function () {
      var _this3;

      return (_this3 = _this).__componentDidMount__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.onProgressShow = function () {
      var _this4;

      return (_this4 = _this).__onProgressShow__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _this.onProgressHide = function () {
      var _this5;

      return (_this5 = _this).__onProgressHide__REACT_HOT_LOADER__.apply(_this5, arguments);
    }, _this.playProgress = function () {
      var _this6;

      return (_this6 = _this).__playProgress__REACT_HOT_LOADER__.apply(_this6, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: '__playProgress__REACT_HOT_LOADER__',
    value: function __playProgress__REACT_HOT_LOADER__() {
      return this.__playProgress__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__onProgressHide__REACT_HOT_LOADER__',
    value: function __onProgressHide__REACT_HOT_LOADER__() {
      return this.__onProgressHide__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__onProgressShow__REACT_HOT_LOADER__',
    value: function __onProgressShow__REACT_HOT_LOADER__() {
      return this.__onProgressShow__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__componentDidMount__REACT_HOT_LOADER__',
    value: function __componentDidMount__REACT_HOT_LOADER__() {
      return this.__componentDidMount__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__componentWillMount__REACT_HOT_LOADER__',
    value: function __componentWillMount__REACT_HOT_LOADER__() {
      return this.__componentWillMount__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__componentWillMount__REACT_HOT_LOADER__',
    value: function __componentWillMount__REACT_HOT_LOADER__() {
      this.onProgressShow();
      /* Uncomment this bellow if want to change theme randomly */
      // this.props.changeTheme('randomTheme');
    }
  }, {
    key: '__componentDidMount__REACT_HOT_LOADER__',
    value: function __componentDidMount__REACT_HOT_LOADER__() {
      var _this7 = this;

      this.playProgress();
      this.unlisten = this.props.history.listen(function () {
        _this7.playProgress();
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unlisten();
      this.onProgressShow();
    }
  }, {
    key: '__onProgressShow__REACT_HOT_LOADER__',
    value: function __onProgressShow__REACT_HOT_LOADER__() {
      this.setState({ pageLoaded: true });
    }
  }, {
    key: '__onProgressHide__REACT_HOT_LOADER__',
    value: function __onProgressHide__REACT_HOT_LOADER__() {
      this.setState({ pageLoaded: false });
    }
  }, {
    key: '__playProgress__REACT_HOT_LOADER__',
    value: function __playProgress__REACT_HOT_LOADER__() {
      var _this8 = this;

      this.onProgressShow();
      setTimeout(function () {
        _this8.onProgressHide();
      }, 500);
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

var _default = (0, _styles.withTheme)()((0, _styles.withStyles)(_appStylesJss2.default)(AppMapped));

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(App, 'App', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/App/App.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/App/App.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/App/App.js');

  __REACT_HOT_LOADER__.register(dispatchToProps, 'dispatchToProps', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/App/App.js');

  __REACT_HOT_LOADER__.register(AppMapped, 'AppMapped', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/App/App.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/App/App.js');
}();

;

/***/ }),
/* 141 */
/*!************************************!*\
  !*** external "react-loading-bar" ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-loading-bar");

/***/ }),
/* 142 */
/*!***********************************************************************!*\
  !*** ./src/app/styles/components/vendors/react-loading-bar/index.css ***!
  \***********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {



/***/ }),
/* 143 */
/*!***************************************!*\
  !*** ./static/images/material_bg.svg ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMTIwMCA3MDAiIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjcwMCI+PGRlZnM+PHBhdGggZD0iTTEwNDYuNjcgMzU4LjI4QzEwNDYuNjcgNTEyLjQ4IDkyMS40OCA2MzcuNjcgNzY3LjI4IDYzNy42N0M2MTMuMDcgNjM3LjY3IDQ4Ny44OCA1MTIuNDggNDg3Ljg4IDM1OC4yOEM0ODcuODggMjA0LjA3IDYxMy4wNyA3OC44OCA3NjcuMjggNzguODhDOTIxLjQ4IDc4Ljg4IDEwNDYuNjcgMjA0LjA3IDEwNDYuNjcgMzU4LjI4WiIgaWQ9ImJ1b1Qwd0ZBQiI+PC9wYXRoPjxwYXRoIGQ9Ik05MzAuMDUgMzU4LjI4QzkzMC4wNSA0NDguMTEgODU3LjExIDUyMS4wNSA3NjcuMjggNTIxLjA1QzY3Ny40NCA1MjEuMDUgNjA0LjUgNDQ4LjExIDYwNC41IDM1OC4yOEM2MDQuNSAyNjguNDQgNjc3LjQ0IDE5NS41IDc2Ny4yOCAxOTUuNUM4NTcuMTEgMTk1LjUgOTMwLjA1IDI2OC40NCA5MzAuMDUgMzU4LjI4WiIgaWQ9ImJMTEJQbW9jZyI+PC9wYXRoPjxwYXRoIGQ9Ik0xMjAwIDEyNi4zMUwxMjAwIDcwMEwwIDcwMEwxMjAwIDEyNi4zMVoiIGlkPSJjMllrSGQwaVhjIj48L3BhdGg+PHBhdGggZD0iTTYxMy4yMiA3MDQuMzdMMCA3MDQuMzdMMCAxNjMuNjNMNjEzLjIyIDcwNC4zN1oiIGlkPSJhY1lWQWVpQ3kiPjwvcGF0aD48L2RlZnM+PGc+PGc+PGc+PGc+PHVzZSB4bGluazpocmVmPSIjYnVvVDB3RkFCIiBvcGFjaXR5PSIwLjE5IiBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPjwvZz48Zz48dXNlIHhsaW5rOmhyZWY9IiNiTExCUG1vY2ciIG9wYWNpdHk9IjAuMiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIj48L3VzZT48L2c+PC9nPjxnPjx1c2UgeGxpbms6aHJlZj0iI2MyWWtIZDBpWGMiIG9wYWNpdHk9IjAuMDkiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+PC9nPjxnPjx1c2UgeGxpbms6aHJlZj0iI2FjWVZBZWlDeSIgb3BhY2l0eT0iMC4xNSIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIxIj48L3VzZT48L2c+PC9nPjwvZz48L3N2Zz4="

/***/ }),
/* 144 */
/*!*****************************************!*\
  !*** ./src/app/components/App/Outer.js ***!
  \*****************************************/
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

var _reactRouterConfig = __webpack_require__(/*! react-router-config */ 42);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Hidden = __webpack_require__(/*! @material-ui/core/Hidden */ 59);

var _Hidden2 = _interopRequireDefault(_Hidden);

var _brand = __webpack_require__(/*! ../../constants/brand.js */ 19);

var _brand2 = _interopRequireDefault(_brand);

var _logo = __webpack_require__(/*! ../../../../static/images/logo.svg */ 81);

var _logo2 = _interopRequireDefault(_logo);

var _appStylesJss = __webpack_require__(/*! ./appStyles-jss */ 43);

var _appStylesJss2 = _interopRequireDefault(_appStylesJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Outer = function (_React$Component) {
  _inherits(Outer, _React$Component);

  function Outer() {
    _classCallCheck(this, Outer);

    return _possibleConstructorReturn(this, (Outer.__proto__ || Object.getPrototypeOf(Outer)).apply(this, arguments));
  }

  _createClass(Outer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          route = _props.route;

      return _react2.default.createElement(
        'div',
        { className: classes.appFrameOuter },
        _react2.default.createElement(
          'main',
          { className: classes.outerContent, id: 'mainContent' },
          _react2.default.createElement(
            _Hidden2.default,
            { mdUp: true },
            _react2.default.createElement(
              'div',
              { className: classes.brand },
              _react2.default.createElement('img', { src: _logo2.default, alt: _brand2.default.name }),
              _react2.default.createElement(
                'h3',
                null,
                _brand2.default.name
              )
            )
          ),
          (0, _reactRouterConfig.renderRoutes)(route.routes)
        )
      );
    }
  }]);

  return Outer;
}(_react2.default.Component);

Outer.propTypes = {
  classes: _propTypes.PropTypes.object.isRequired,
  route: _propTypes.object
};

Outer.defaultProps = {
  route: _propTypes.object
};

var _default = (0, _styles.withStyles)(_appStylesJss2.default)(Outer);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Outer, 'Outer', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/App/Outer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/App/Outer.js');
}();

;

/***/ }),
/* 145 */
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

var _classnames = __webpack_require__(/*! classnames */ 3);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouterConfig = __webpack_require__(/*! react-router-config */ 42);

var _redux = __webpack_require__(/*! redux */ 22);

var _reactRedux = __webpack_require__(/*! react-redux */ 12);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Fade = __webpack_require__(/*! @material-ui/core/Fade */ 146);

var _Fade2 = _interopRequireDefault(_Fade);

var _components = __webpack_require__(/*! ./../../components */ 8);

var _UiActions = __webpack_require__(/*! ./../../actions/UiActions */ 58);

var _appStylesJss = __webpack_require__(/*! ./appStyles-jss */ 43);

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
      var _this2;

      return (_this2 = _this).__componentDidMount__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleScroll = function () {
      var _this3;

      return (_this3 = _this).__handleScroll__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Dashboard, [{
    key: '__handleScroll__REACT_HOT_LOADER__',
    value: function __handleScroll__REACT_HOT_LOADER__() {
      return this.__handleScroll__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__componentDidMount__REACT_HOT_LOADER__',
    value: function __componentDidMount__REACT_HOT_LOADER__() {
      return this.__componentDidMount__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__componentDidMount__REACT_HOT_LOADER__',
    value: function __componentDidMount__REACT_HOT_LOADER__() {
      var _this4 = this;

      // Scroll content to top
      var mainContent = document.getElementById('mainContent');
      mainContent.addEventListener('scroll', this.handleScroll);

      // Set expanded sidebar menu
      var currentPath = this.props.history.location.pathname;
      this.props.initialOpen(currentPath);

      // Play page transition
      this.props.loadTransition(true);

      // Execute all arguments when page changes
      this.unlisten = this.props.history.listen(function () {
        mainContent.scrollTo(0, 0);
        setTimeout(function () {
          _this4.props.loadTransition(true);
        }, 500);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var mainContent = document.getElementById('mainContent');
      mainContent.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: '__handleScroll__REACT_HOT_LOADER__',
    value: function __handleScroll__REACT_HOT_LOADER__(event) {
      var scoll = event.target.scrollTop;
      this.setState({
        transform: scoll
      });
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

var _default = (0, _styles.withStyles)(_appStylesJss2.default)(DashboardMaped);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Dashboard, 'Dashboard', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/App/Dashboard.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/App/Dashboard.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/App/Dashboard.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/App/Dashboard.js');

  __REACT_HOT_LOADER__.register(DashboardMaped, 'DashboardMaped', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/App/Dashboard.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/App/Dashboard.js');
}();

;

/***/ }),
/* 146 */
/*!*****************************************!*\
  !*** external "@material-ui/core/Fade" ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fade");

/***/ }),
/* 147 */
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

var _classnames = __webpack_require__(/*! classnames */ 3);

var _classnames2 = _interopRequireDefault(_classnames);

var _AppBar = __webpack_require__(/*! @material-ui/core/AppBar */ 60);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = __webpack_require__(/*! @material-ui/core/Toolbar */ 13);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Search = __webpack_require__(/*! @material-ui/icons/Search */ 44);

var _Search2 = _interopRequireDefault(_Search);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ 5);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Menu = __webpack_require__(/*! @material-ui/icons/Menu */ 148);

var _Menu2 = _interopRequireDefault(_Menu);

var _Hidden = __webpack_require__(/*! @material-ui/core/Hidden */ 59);

var _Hidden2 = _interopRequireDefault(_Hidden);

var _UserMenu = __webpack_require__(/*! ./UserMenu */ 149);

var _UserMenu2 = _interopRequireDefault(_UserMenu);

var _headerJss = __webpack_require__(/*! ./header-jss */ 85);

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

var _default = (0, _styles.withStyles)(_headerJss2.default)(Header);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Header, 'Header', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Header/Header.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Header/Header.js');
}();

;

/***/ }),
/* 148 */
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),
/* 149 */
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

var _classnames = __webpack_require__(/*! classnames */ 3);

var _classnames2 = _interopRequireDefault(_classnames);

var _Avatar = __webpack_require__(/*! @material-ui/core/Avatar */ 20);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ 5);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ 9);

var _Button2 = _interopRequireDefault(_Button);

var _Notifications = __webpack_require__(/*! @material-ui/icons/Notifications */ 150);

var _Notifications2 = _interopRequireDefault(_Notifications);

var _Info = __webpack_require__(/*! @material-ui/icons/Info */ 82);

var _Info2 = _interopRequireDefault(_Info);

var _Warning = __webpack_require__(/*! @material-ui/icons/Warning */ 151);

var _Warning2 = _interopRequireDefault(_Warning);

var _CheckCircle = __webpack_require__(/*! @material-ui/icons/CheckCircle */ 152);

var _CheckCircle2 = _interopRequireDefault(_CheckCircle);

var _DoNotDisturbOn = __webpack_require__(/*! @material-ui/icons/DoNotDisturbOn */ 153);

var _DoNotDisturbOn2 = _interopRequireDefault(_DoNotDisturbOn);

var _ExitToApp = __webpack_require__(/*! @material-ui/icons/ExitToApp */ 154);

var _ExitToApp2 = _interopRequireDefault(_ExitToApp);

var _Badge = __webpack_require__(/*! @material-ui/core/Badge */ 61);

var _Badge2 = _interopRequireDefault(_Badge);

var _Divider = __webpack_require__(/*! @material-ui/core/Divider */ 16);

var _Divider2 = _interopRequireDefault(_Divider);

var _Menu = __webpack_require__(/*! @material-ui/core/Menu */ 32);

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = __webpack_require__(/*! @material-ui/core/MenuItem */ 33);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _ListItemIcon = __webpack_require__(/*! @material-ui/core/ListItemIcon */ 83);

var _ListItemIcon2 = _interopRequireDefault(_ListItemIcon);

var _ListItemText = __webpack_require__(/*! @material-ui/core/ListItemText */ 26);

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _dummyContents = __webpack_require__(/*! ../../constants/dummyContents.js */ 84);

var _dummyContents2 = _interopRequireDefault(_dummyContents);

var _Messages = __webpack_require__(/*! ../../styles/components/Messages.scss */ 45);

var _Messages2 = _interopRequireDefault(_Messages);

var _avatars = __webpack_require__(/*! ../../constants/avatars.js */ 62);

var _avatars2 = _interopRequireDefault(_avatars);

var _headerJss = __webpack_require__(/*! ./header-jss */ 85);

var _headerJss2 = _interopRequireDefault(_headerJss);

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
    }, _this.handleMenu = function () {
      var _this2;

      return (_this2 = _this).__handleMenu__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleClose = function () {
      var _this3;

      return (_this3 = _this).__handleClose__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UserMenu, [{
    key: '__handleClose__REACT_HOT_LOADER__',
    value: function __handleClose__REACT_HOT_LOADER__() {
      return this.__handleClose__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleMenu__REACT_HOT_LOADER__',
    value: function __handleMenu__REACT_HOT_LOADER__() {
      return this.__handleMenu__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleMenu__REACT_HOT_LOADER__',
    value: function __handleMenu__REACT_HOT_LOADER__(menu) {
      var _this4 = this;

      return function (event) {
        _this4.setState({
          openMenu: _this4.state.openMenu === menu ? null : menu,
          anchorEl: event.currentTarget
        });
      };
    }
  }, {
    key: '__handleClose__REACT_HOT_LOADER__',
    value: function __handleClose__REACT_HOT_LOADER__() {
      this.setState({ anchorEl: null, openMenu: null });
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = this.props.classes;
      var _state = this.state,
          anchorEl = _state.anchorEl,
          openMenu = _state.openMenu;

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
            alt: _dummyContents2.default.user.name,
            src: _dummyContents2.default.user.avatar
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
            { onClick: this.handleClose },
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
  classes: _propTypes2.default.object.isRequired
};

var _default = (0, _styles.withStyles)(_headerJss2.default)(UserMenu);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(UserMenu, 'UserMenu', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Header/UserMenu.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Header/UserMenu.js');
}();

;

/***/ }),
/* 150 */
/*!***************************************************!*\
  !*** external "@material-ui/icons/Notifications" ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Notifications");

/***/ }),
/* 151 */
/*!*********************************************!*\
  !*** external "@material-ui/icons/Warning" ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Warning");

/***/ }),
/* 152 */
/*!*************************************************!*\
  !*** external "@material-ui/icons/CheckCircle" ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CheckCircle");

/***/ }),
/* 153 */
/*!****************************************************!*\
  !*** external "@material-ui/icons/DoNotDisturbOn" ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DoNotDisturbOn");

/***/ }),
/* 154 */
/*!***********************************************!*\
  !*** external "@material-ui/icons/ExitToApp" ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExitToApp");

/***/ }),
/* 155 */
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

var _classnames = __webpack_require__(/*! classnames */ 3);

var _classnames2 = _interopRequireDefault(_classnames);

var _Hidden = __webpack_require__(/*! @material-ui/core/Hidden */ 59);

var _Hidden2 = _interopRequireDefault(_Hidden);

var _Drawer = __webpack_require__(/*! @material-ui/core/Drawer */ 86);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _SwipeableDrawer = __webpack_require__(/*! @material-ui/core/SwipeableDrawer */ 156);

var _SwipeableDrawer2 = _interopRequireDefault(_SwipeableDrawer);

var _List = __webpack_require__(/*! @material-ui/core/List */ 34);

var _List2 = _interopRequireDefault(_List);

var _Divider = __webpack_require__(/*! @material-ui/core/Divider */ 16);

var _Divider2 = _interopRequireDefault(_Divider);

var _Avatar = __webpack_require__(/*! @material-ui/core/Avatar */ 20);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _brand = __webpack_require__(/*! ../../constants/brand.js */ 19);

var _brand2 = _interopRequireDefault(_brand);

var _dummyContents = __webpack_require__(/*! ../../constants/dummyContents.js */ 84);

var _dummyContents2 = _interopRequireDefault(_dummyContents);

var _logo = __webpack_require__(/*! ../../../../static/images/logo.svg */ 81);

var _logo2 = _interopRequireDefault(_logo);

var _MainMenu = __webpack_require__(/*! ./MainMenu */ 157);

var _MainMenu2 = _interopRequireDefault(_MainMenu);

var _OtherMenu = __webpack_require__(/*! ./OtherMenu */ 160);

var _OtherMenu2 = _interopRequireDefault(_OtherMenu);

var _sidebarJss = __webpack_require__(/*! ./sidebar-jss */ 89);

var _sidebarJss2 = _interopRequireDefault(_sidebarJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuContent = function MenuContent(props) {
  var classes = props.classes,
      turnDarker = props.turnDarker,
      drawerPaper = props.drawerPaper,
      toggleDrawerOpen = props.toggleDrawerOpen,
      loadTransition = props.loadTransition;

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
          alt: _dummyContents2.default.user.name,
          src: _dummyContents2.default.user.avatar,
          className: (0, _classnames2.default)(classes.avatar, classes.bigAvatar)
        }),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h4',
            null,
            _dummyContents2.default.user.name
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
  loadTransition: _propTypes2.default.func
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
          turnDarker = _props.turnDarker;

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
            _react2.default.createElement(MenuContentStyle, { drawerPaper: true, toggleDrawerOpen: toggleDrawerOpen, loadTransition: loadTransition })
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
            _react2.default.createElement(MenuContentStyle, { drawerPaper: open, turnDarker: turnDarker, loadTransition: loadTransition })
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
  open: _propTypes2.default.bool.isRequired
};

var _default = (0, _styles.withStyles)(_sidebarJss2.default)(Sidebar);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(MenuContent, 'MenuContent', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Sidebar/Sidebar.js');

  __REACT_HOT_LOADER__.register(MenuContentStyle, 'MenuContentStyle', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Sidebar/Sidebar.js');

  __REACT_HOT_LOADER__.register(Sidebar, 'Sidebar', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Sidebar/Sidebar.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Sidebar/Sidebar.js');
}();

;

/***/ }),
/* 156 */
/*!****************************************************!*\
  !*** external "@material-ui/core/SwipeableDrawer" ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SwipeableDrawer");

/***/ }),
/* 157 */
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

var _classnames = __webpack_require__(/*! classnames */ 3);

var _classnames2 = _interopRequireDefault(_classnames);

var _redux = __webpack_require__(/*! redux */ 22);

var _reactRedux = __webpack_require__(/*! react-redux */ 12);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ 25);

var _List = __webpack_require__(/*! @material-ui/core/List */ 34);

var _List2 = _interopRequireDefault(_List);

var _ListItem = __webpack_require__(/*! @material-ui/core/ListItem */ 30);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemIcon = __webpack_require__(/*! @material-ui/core/ListItemIcon */ 83);

var _ListItemIcon2 = _interopRequireDefault(_ListItemIcon);

var _ListItemText = __webpack_require__(/*! @material-ui/core/ListItemText */ 26);

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _Collapse = __webpack_require__(/*! @material-ui/core/Collapse */ 158);

var _Collapse2 = _interopRequireDefault(_Collapse);

var _Icon = __webpack_require__(/*! @material-ui/core/Icon */ 64);

var _Icon2 = _interopRequireDefault(_Icon);

var _ExpandLess = __webpack_require__(/*! @material-ui/icons/ExpandLess */ 159);

var _ExpandLess2 = _interopRequireDefault(_ExpandLess);

var _ExpandMore = __webpack_require__(/*! @material-ui/icons/ExpandMore */ 87);

var _ExpandMore2 = _interopRequireDefault(_ExpandMore);

var _menu = __webpack_require__(/*! ../../constants/menu.js */ 88);

var _menu2 = _interopRequireDefault(_menu);

var _sidebarJss = __webpack_require__(/*! ./sidebar-jss */ 89);

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
                  _List2.default,
                  { className: classes.dense, dense: dense },
                  getMenus(item.child)
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

var _default = (0, _styles.withStyles)(_sidebarJss2.default)(MainMenuMapped);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(MainMenu, 'MainMenu', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Sidebar/MainMenu.js');

  __REACT_HOT_LOADER__.register(openAction, 'openAction', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Sidebar/MainMenu.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Sidebar/MainMenu.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Sidebar/MainMenu.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Sidebar/MainMenu.js');

  __REACT_HOT_LOADER__.register(MainMenuMapped, 'MainMenuMapped', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Sidebar/MainMenu.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Sidebar/MainMenu.js');
}();

;

/***/ }),
/* 158 */
/*!*********************************************!*\
  !*** external "@material-ui/core/Collapse" ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Collapse");

/***/ }),
/* 159 */
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandLess" ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandLess");

/***/ }),
/* 160 */
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ 25);

var _ListItem = __webpack_require__(/*! @material-ui/core/ListItem */ 30);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemText = __webpack_require__(/*! @material-ui/core/ListItemText */ 26);

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _otherMenu = __webpack_require__(/*! ../../constants/otherMenu.js */ 161);

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

var _default = OtherMenu;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(OtherMenu, 'OtherMenu', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Sidebar/OtherMenu.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Sidebar/OtherMenu.js');
}();

;

/***/ }),
/* 161 */
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
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 162 */
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

var _Footer = __webpack_require__(/*! ./Footer.scss */ 163);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react2.default.createElement(
    'div',
    { className: _Footer2.default.Footer },
    'Footer'
  );
};

var _default = Footer;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Footer, 'Footer', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Footer/Footer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Footer/Footer.js');
}();

;

/***/ }),
/* 163 */
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
/* 164 */
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

var _classnames = __webpack_require__(/*! classnames */ 3);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ 25);

var _breadCrumbJss = __webpack_require__(/*! ./breadCrumb-jss */ 165);

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

var _default = (0, _styles.withStyles)(_breadCrumbJss2.default)(Breadcrumbs);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Breadcrumbs, 'Breadcrumbs', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/BreadCrumb/BreadCrumb.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/BreadCrumb/BreadCrumb.js');
}();

;

/***/ }),
/* 165 */
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

var _default = styles;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/BreadCrumb/breadCrumb-jss.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/BreadCrumb/breadCrumb-jss.js');
}();

;

/***/ }),
/* 166 */
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

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ 6);

var _Paper2 = _interopRequireDefault(_Paper);

var _redux = __webpack_require__(/*! redux */ 22);

var _reactRedux = __webpack_require__(/*! react-redux */ 12);

var _RouteActions = __webpack_require__(/*! ../../actions/RouteActions */ 167);

var _ = __webpack_require__(/*! ../ */ 8);

var _route = __webpack_require__(/*! ../../constants/route */ 65);

var _route2 = _interopRequireDefault(_route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import {
//   fetchRoutes
// } from '../../actions/routeActions';

// Reducer Branch
var branch = 'routeTable';

var styles = {
  root: {
    flexGrow: 1
  }
};

var dataApi = [{
  id: 'a654',
  departure: 'Giap Bap',
  destination: 'Cam Pha',
  stations: 5,
  active: true
}, {
  id: 's654',
  departure: 'My Dinh',
  destination: 'Hai Phong',
  stations: 3,
  active: true
}];

var RouteTable = function (_Component) {
  _inherits(RouteTable, _Component);

  function RouteTable() {
    _classCallCheck(this, RouteTable);

    return _possibleConstructorReturn(this, (RouteTable.__proto__ || Object.getPrototypeOf(RouteTable)).apply(this, arguments));
  }

  _createClass(RouteTable, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // console.log(this.props.paging.get('total_elements'));
    }
  }, {
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
          messageNotif = _props.messageNotif;

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

var _default = (0, _styles.withStyles)(styles)(RouteTableMapped);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(branch, 'branch', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Route/RouteTable.js');

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Route/RouteTable.js');

  __REACT_HOT_LOADER__.register(dataApi, 'dataApi', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Route/RouteTable.js');

  __REACT_HOT_LOADER__.register(RouteTable, 'RouteTable', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Route/RouteTable.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Route/RouteTable.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Route/RouteTable.js');

  __REACT_HOT_LOADER__.register(RouteTableMapped, 'RouteTableMapped', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Route/RouteTable.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Route/RouteTable.js');
}();

;

/***/ }),
/* 167 */
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

var _show = __webpack_require__(/*! ../constants/show.js */ 326);

var _show2 = _interopRequireDefault(_show);

var _actionTypes = __webpack_require__(/*! ./actionTypes */ 10);

var types = _interopRequireWildcard(_actionTypes);

var _crossFetch = __webpack_require__(/*! cross-fetch */ 169);

var _crossFetch2 = _interopRequireDefault(_crossFetch);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchAction = exports.fetchAction = function fetchAction(items, branch) {
  (0, _show2.default)(branch);
  return function (dispatch) {
    (0, _crossFetch2.default)('https://passenger-transport.herokuapp.com/api/route', {
      method: 'GET'
    }).then(function (resp) {
      return resp.json();
    }).then(function (data) {
      (0, _show2.default)(data);
      dispatch({
        branch: branch,
        type: branch + '/' + types.FETCH_DATA,
        content: {}
        // paging : {
        //   total_pages: data.total_pages,
        //   total_elements: data.total_elements,
        //   last: data.last,
        //   first: data.first,
        //   number_of_elements: data.number_of_elements,
        //   size: data.size,
        //   number: data.number,
        // }
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
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(fetchAction, 'fetchAction', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/RouteActions.js');

  __REACT_HOT_LOADER__.register(addAction, 'addAction', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/RouteActions.js');

  __REACT_HOT_LOADER__.register(removeAction, 'removeAction', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/RouteActions.js');

  __REACT_HOT_LOADER__.register(updateAction, 'updateAction', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/RouteActions.js');

  __REACT_HOT_LOADER__.register(editAction, 'editAction', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/RouteActions.js');

  __REACT_HOT_LOADER__.register(saveAction, 'saveAction', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/RouteActions.js');

  __REACT_HOT_LOADER__.register(closeNotifAction, 'closeNotifAction', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/RouteActions.js');
}();

;

/***/ }),
/* 168 */,
/* 169 */
/*!******************************!*\
  !*** external "cross-fetch" ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("cross-fetch");

/***/ }),
/* 170 */
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

var _default = styles;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/PapperBlock/papperStyle-jss.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/PapperBlock/papperStyle-jss.js');
}();

;

/***/ }),
/* 171 */
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

var _reactCountup = __webpack_require__(/*! react-countup */ 172);

var _reactCountup2 = _interopRequireDefault(_reactCountup);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ 4);

var _Typography2 = _interopRequireDefault(_Typography);

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ 6);

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

var _default = (0, _styles.withStyles)(styles)(CounterWidget);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Counter/CounterWidget.js');

  __REACT_HOT_LOADER__.register(CounterWidget, 'CounterWidget', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Counter/CounterWidget.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Counter/CounterWidget.js');
}();

;

/***/ }),
/* 172 */
/*!********************************!*\
  !*** external "react-countup" ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-countup");

/***/ }),
/* 173 */
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

var _Grid = __webpack_require__(/*! @material-ui/core/Grid */ 46);

var _Grid2 = _interopRequireDefault(_Grid);

var _AccountBox = __webpack_require__(/*! @material-ui/icons/AccountBox */ 174);

var _AccountBox2 = _interopRequireDefault(_AccountBox);

var _ImportContacts = __webpack_require__(/*! @material-ui/icons/ImportContacts */ 175);

var _ImportContacts2 = _interopRequireDefault(_ImportContacts);

var _Pets = __webpack_require__(/*! @material-ui/icons/Pets */ 176);

var _Pets2 = _interopRequireDefault(_Pets);

var _Star = __webpack_require__(/*! @material-ui/icons/Star */ 47);

var _Star2 = _interopRequireDefault(_Star);

var _components = __webpack_require__(/*! ./../../components */ 8);

var _widgetJss = __webpack_require__(/*! ./widget-jss */ 48);

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
                end: 321,
                duration: 3,
                title: 'New Articles'
              },
              _react2.default.createElement(_ImportContacts2.default, { className: classes.counterIcon })
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
                end: 67,
                duration: 3,
                title: 'New Contributor'
              },
              _react2.default.createElement(_Pets2.default, { className: classes.counterIcon })
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

var _default = (0, _styles.withStyles)(_widgetJss2.default)(CounterIconWidget);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CounterIconWidget, 'CounterIconWidget', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Widget/CounterIconsWidget.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Widget/CounterIconsWidget.js');
}();

;

/***/ }),
/* 174 */
/*!************************************************!*\
  !*** external "@material-ui/icons/AccountBox" ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountBox");

/***/ }),
/* 175 */
/*!****************************************************!*\
  !*** external "@material-ui/icons/ImportContacts" ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ImportContacts");

/***/ }),
/* 176 */
/*!******************************************!*\
  !*** external "@material-ui/icons/Pets" ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Pets");

/***/ }),
/* 177 */
/*!******************************************************!*\
  !*** external "@material-ui/core/colors/deepOrange" ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/deepOrange");

/***/ }),
/* 178 */
/*!**************************************************!*\
  !*** external "@material-ui/core/colors/purple" ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/purple");

/***/ }),
/* 179 */
/*!************************************************!*\
  !*** external "@material-ui/core/colors/lime" ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/lime");

/***/ }),
/* 180 */
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

var _Grid = __webpack_require__(/*! @material-ui/core/Grid */ 46);

var _Grid2 = _interopRequireDefault(_Grid);

var _classnames = __webpack_require__(/*! classnames */ 3);

var _classnames2 = _interopRequireDefault(_classnames);

var _Chip = __webpack_require__(/*! @material-ui/core/Chip */ 50);

var _Chip2 = _interopRequireDefault(_Chip);

var _CardGiftcard = __webpack_require__(/*! @material-ui/icons/CardGiftcard */ 181);

var _CardGiftcard2 = _interopRequireDefault(_CardGiftcard);

var _FilterVintage = __webpack_require__(/*! @material-ui/icons/FilterVintage */ 182);

var _FilterVintage2 = _interopRequireDefault(_FilterVintage);

var _LocalCafe = __webpack_require__(/*! @material-ui/icons/LocalCafe */ 183);

var _LocalCafe2 = _interopRequireDefault(_LocalCafe);

var _Avatar = __webpack_require__(/*! @material-ui/core/Avatar */ 20);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Divider = __webpack_require__(/*! @material-ui/core/Divider */ 16);

var _Divider2 = _interopRequireDefault(_Divider);

var _CircularProgress = __webpack_require__(/*! @material-ui/core/CircularProgress */ 184);

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

var _Style = __webpack_require__(/*! @material-ui/icons/Style */ 185);

var _Style2 = _interopRequireDefault(_Style);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ 4);

var _Typography2 = _interopRequireDefault(_Typography);

var _themePalette = __webpack_require__(/*! ../../constants/themePalette.js */ 57);

var _themePalette2 = _interopRequireDefault(_themePalette);

var _green = __webpack_require__(/*! @material-ui/core/colors/green */ 90);

var _green2 = _interopRequireDefault(_green);

var _recharts = __webpack_require__(/*! recharts */ 186);

var _Messages = __webpack_require__(/*! ../../styles/components/Messages.scss */ 45);

var _Messages2 = _interopRequireDefault(_Messages);

var _chartData = __webpack_require__(/*! ../../constants/chartData.js */ 187);

var _Typography3 = __webpack_require__(/*! ../../styles/components/Typography.scss */ 51);

var _Typography4 = _interopRequireDefault(_Typography3);

var _widgetJss = __webpack_require__(/*! ./widget-jss */ 48);

var _widgetJss2 = _interopRequireDefault(_widgetJss);

var _PapperBlock = __webpack_require__(/*! ./../PapperBlock/PapperBlock */ 35);

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
        { whiteBg: true, noMargin: true, title: 'Top Product Sales', desc: '' },
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
                  _react2.default.createElement(_CardGiftcard2.default, null)
                ),
                _react2.default.createElement(
                  _Typography2.default,
                  { variant: 'title' },
                  '4321',
                  _react2.default.createElement(
                    _Typography2.default,
                    null,
                    'Gift Card'
                  )
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _Avatar2.default,
                  { className: (0, _classnames2.default)(classes.avatar, classes.pinkAvatar) },
                  _react2.default.createElement(_FilterVintage2.default, null)
                ),
                _react2.default.createElement(
                  _Typography2.default,
                  { variant: 'title' },
                  '9876',
                  _react2.default.createElement(
                    _Typography2.default,
                    null,
                    'Flowers'
                  )
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _Avatar2.default,
                  { className: (0, _classnames2.default)(classes.avatar, classes.purpleAvatar) },
                  _react2.default.createElement(_LocalCafe2.default, null)
                ),
                _react2.default.createElement(
                  _Typography2.default,
                  { variant: 'title' },
                  '345',
                  _react2.default.createElement(
                    _Typography2.default,
                    null,
                    'Cups'
                  )
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _Avatar2.default,
                  { className: (0, _classnames2.default)(classes.avatar, classes.orangeAvatar) },
                  _react2.default.createElement(_Style2.default, null)
                ),
                _react2.default.createElement(
                  _Typography2.default,
                  { variant: 'title' },
                  '996',
                  _react2.default.createElement(
                    _Typography2.default,
                    null,
                    'Name Cards'
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
                'Performance Listing'
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
                  'Giftcard Quality'
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
                  'Monitoring Quality'
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
                  'Project Complete'
                ),
                _react2.default.createElement(_Chip2.default, { label: 'Poor', className: (0, _classnames2.default)(classes.chip, _Messages2.default.bgWarning) }),
                _react2.default.createElement(_CircularProgress2.default, { variant: 'determinate', className: (0, _classnames2.default)(classes.progressCircle, classes.orangeProgress), size: 100, value: 28 })
              ),
              _react2.default.createElement(
                _Grid2.default,
                { className: classes.centerItem, item: true, md: 6 },
                _react2.default.createElement(
                  _Typography2.default,
                  { gutterBottom: true },
                  'Deploy Progress'
                ),
                _react2.default.createElement(_Chip2.default, { label: 'Medium', className: (0, _classnames2.default)(classes.chip, _Messages2.default.bgInfo) }),
                _react2.default.createElement(_CircularProgress2.default, { variant: 'determinate', className: (0, _classnames2.default)(classes.progressCircle, classes.blueProgress), size: 100, value: 70 })
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

var _default = (0, _styles.withStyles)(_widgetJss2.default)(AreaChartWidget);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(theme, 'theme', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Widget/AreaChartWidget.js');

  __REACT_HOT_LOADER__.register(color, 'color', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Widget/AreaChartWidget.js');

  __REACT_HOT_LOADER__.register(AreaChartWidget, 'AreaChartWidget', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Widget/AreaChartWidget.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Widget/AreaChartWidget.js');
}();

;

/***/ }),
/* 181 */
/*!**************************************************!*\
  !*** external "@material-ui/icons/CardGiftcard" ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CardGiftcard");

/***/ }),
/* 182 */
/*!***************************************************!*\
  !*** external "@material-ui/icons/FilterVintage" ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FilterVintage");

/***/ }),
/* 183 */
/*!***********************************************!*\
  !*** external "@material-ui/icons/LocalCafe" ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocalCafe");

/***/ }),
/* 184 */
/*!*****************************************************!*\
  !*** external "@material-ui/core/CircularProgress" ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),
/* 185 */
/*!*******************************************!*\
  !*** external "@material-ui/icons/Style" ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Style");

/***/ }),
/* 186 */
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ }),
/* 187 */
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
  name: 'Page A',
  uv: 4000,
  pv: 2400,
  amt: 2400
}, {
  name: 'Page B',
  uv: 3000,
  pv: 1398,
  amt: 2210
}, {
  name: 'Page C',
  uv: 2000,
  pv: 5800,
  amt: 2290
}, {
  name: 'Page D',
  uv: 2780,
  pv: 3908,
  amt: 2000
}, {
  name: 'Page E',
  uv: 1890,
  pv: 4800,
  amt: 2181
}, {
  name: 'Page F',
  uv: 2390,
  pv: 3800,
  amt: 2500
}, {
  name: 'Page G',
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
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(data1, 'data1', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/constants/chartData.js');

  __REACT_HOT_LOADER__.register(data2, 'data2', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/constants/chartData.js');

  __REACT_HOT_LOADER__.register(data3, 'data3', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/constants/chartData.js');

  __REACT_HOT_LOADER__.register(data4, 'data4', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/constants/chartData.js');

  __REACT_HOT_LOADER__.register(data5, 'data5', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/constants/chartData.js');

  __REACT_HOT_LOADER__.register(data6, 'data6', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/constants/chartData.js');

  __REACT_HOT_LOADER__.register(data7, 'data7', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/constants/chartData.js');

  __REACT_HOT_LOADER__.register(data8, 'data8', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/constants/chartData.js');

  __REACT_HOT_LOADER__.register(data9, 'data9', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/constants/chartData.js');
}();

;

/***/ }),
/* 188 */
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

var _reactSlick = __webpack_require__(/*! react-slick */ 189);

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ 4);

var _Typography2 = _interopRequireDefault(_Typography);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ 5);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _ArrowForward = __webpack_require__(/*! @material-ui/icons/ArrowForward */ 69);

var _ArrowForward2 = _interopRequireDefault(_ArrowForward);

var _ArrowBack = __webpack_require__(/*! @material-ui/icons/ArrowBack */ 93);

var _ArrowBack2 = _interopRequireDefault(_ArrowBack);

var _Icon = __webpack_require__(/*! @material-ui/core/Icon */ 64);

var _Icon2 = _interopRequireDefault(_Icon);

var _carouselData = __webpack_require__(/*! ../../constants/carouselData.js */ 190);

var _carouselData2 = _interopRequireDefault(_carouselData);

__webpack_require__(/*! ../../styles/components/vendors/slick-carousel/slick-carousel.css */ 191);

__webpack_require__(/*! ../../styles/components/vendors/slick-carousel/slick.css */ 192);

__webpack_require__(/*! ../../styles/components/vendors/slick-carousel/slick-theme.css */ 193);

var _widgetJss = __webpack_require__(/*! ./widget-jss */ 48);

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
        autoplaySpeed: 5000,
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

var _default = (0, _styles.withStyles)(_widgetJss2.default)(CarouselWidget);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SampleNextArrow, 'SampleNextArrow', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Widget/CarouselWidget.js');

  __REACT_HOT_LOADER__.register(SamplePrevArrow, 'SamplePrevArrow', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Widget/CarouselWidget.js');

  __REACT_HOT_LOADER__.register(CarouselWidget, 'CarouselWidget', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Widget/CarouselWidget.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Widget/CarouselWidget.js');
}();

;

/***/ }),
/* 189 */
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),
/* 190 */
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
  background: '#E91E63',
  title: 'Feature',
  desc: 'Vestibulum tempor, sem et molestie egestas, dui tortor laoreet tellus.',
  icon: 'flag'
}, {
  background: '#0091EA',
  title: 'Unlimited',
  desc: 'Aliquam nec ex aliquet, aliquam neque non, gravida est.',
  icon: 'all_inclusive'
}, {
  background: '#00BFA5',
  title: 'Complete',
  desc: 'Vestibulum bibendum nisi eget magna malesuada',
  icon: 'done'
}, {
  background: '#F57F17',
  title: 'Easy',
  desc: 'Vestibulum tempor, sem et molestie egestas, dui tortor laoreet tellus.',
  icon: 'extension'
}, {
  background: '#7CB342',
  title: 'Satisfy',
  desc: 'Aliquam nec ex aliquet, aliquam neque non, gravida est.',
  icon: 'mood'
}, {
  background: '#546E7A',
  title: 'Public',
  desc: 'Quisque a consequat ante, at volutpat enim. Aenean sit amet magna vel magna',
  icon: 'public'
}, {
  background: '#00ACC1',
  title: 'Awesome',
  desc: 'Vestibulum tempor, sem et molestie egestas, dui tortor laoreet tellus.',
  icon: 'thumb_up'
}, {
  background: '#C51162',
  title: 'Safeguard',
  desc: 'Quisque a consequat ante, at volutpat enim. Aenean sit amet magna vel magna',
  icon: 'lock'
}, {
  background: '#7C4DFF',
  title: 'Favorite',
  desc: ' Aenean facilisis vitae purus facilisis semper.',
  icon: 'favorite'
}];

var _default = carouselData;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(carouselData, 'carouselData', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/constants/carouselData.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/constants/carouselData.js');
}();

;

/***/ }),
/* 191 */
/*!*****************************************************************************!*\
  !*** ./src/app/styles/components/vendors/slick-carousel/slick-carousel.css ***!
  \*****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {



/***/ }),
/* 192 */
/*!********************************************************************!*\
  !*** ./src/app/styles/components/vendors/slick-carousel/slick.css ***!
  \********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {



/***/ }),
/* 193 */
/*!**************************************************************************!*\
  !*** ./src/app/styles/components/vendors/slick-carousel/slick-theme.css ***!
  \**************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {



/***/ }),
/* 194 */
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

var _GridList = __webpack_require__(/*! @material-ui/core/GridList */ 195);

var _GridList2 = _interopRequireDefault(_GridList);

var _GridListTile = __webpack_require__(/*! @material-ui/core/GridListTile */ 196);

var _GridListTile2 = _interopRequireDefault(_GridListTile);

var _GridListTileBar = __webpack_require__(/*! @material-ui/core/GridListTileBar */ 197);

var _GridListTileBar2 = _interopRequireDefault(_GridListTileBar);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ 5);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Info = __webpack_require__(/*! @material-ui/icons/Info */ 82);

var _Info2 = _interopRequireDefault(_Info);

var _imgData = __webpack_require__(/*! ../../constants/imgData.js */ 198);

var _imgData2 = _interopRequireDefault(_imgData);

var _PapperBlock = __webpack_require__(/*! ./../PapperBlock/PapperBlock */ 35);

var _PapperBlock2 = _interopRequireDefault(_PapperBlock);

var _widgetJss = __webpack_require__(/*! ./widget-jss */ 48);

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
        { noMargin: true, title: 'My Albums (4)', whiteBg: true, desc: '' },
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

var _default = (0, _styles.withStyles)(_widgetJss2.default)(AlbumWidget);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AlbumWidget, 'AlbumWidget', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Widget/AlbumWidget.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Widget/AlbumWidget.js');
}();

;

/***/ }),
/* 195 */
/*!*********************************************!*\
  !*** external "@material-ui/core/GridList" ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/GridList");

/***/ }),
/* 196 */
/*!*************************************************!*\
  !*** external "@material-ui/core/GridListTile" ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/GridListTile");

/***/ }),
/* 197 */
/*!****************************************************!*\
  !*** external "@material-ui/core/GridListTileBar" ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/GridListTileBar");

/***/ }),
/* 198 */
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

var _images = __webpack_require__(/*! ./images */ 94);

var _images2 = _interopRequireDefault(_images);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var imgData = [{
  img: _images2.default[3],
  thumb: _images2.default[3],
  title: 'Breakfast',
  author: 'jill111',
  cols: 2,
  featured: true
}, {
  img: _images2.default[5],
  thumb: _images2.default[5],
  title: 'Tasty burger',
  author: 'director90'
}, {
  img: _images2.default[33],
  thumb: _images2.default[33],
  title: 'Camera',
  author: 'Danson67'
}, {
  img: _images2.default[35],
  thumb: _images2.default[35],
  title: 'Morning',
  author: 'fancycrave1',
  featured: true
}, {
  img: _images2.default[41],
  thumb: _images2.default[41],
  title: 'Hats',
  author: 'Hans'
}, {
  img: _images2.default[43],
  thumb: _images2.default[43],
  title: 'Honey',
  author: 'fancycravel'
}, {
  img: _images2.default[7],
  thumb: _images2.default[7],
  title: 'Vegetables',
  author: 'jill111',
  cols: 2
}, {
  img: _images2.default[9],
  thumb: _images2.default[9],
  title: 'Water plant',
  author: 'BkrmadtyaKarki'
}, {
  img: _images2.default[17],
  thumb: _images2.default[17],
  title: 'Mushrooms',
  author: 'PublicDomainPictures'
}, {
  img: _images2.default[13],
  thumb: _images2.default[13],
  title: 'Olive oil',
  author: 'congerdesign'
}, {
  img: _images2.default[19],
  thumb: _images2.default[19],
  title: 'Sea star',
  cols: 2,
  author: '821292'
}, {
  img: _images2.default[47],
  thumb: _images2.default[47],
  title: 'Bike',
  author: 'danfador'
}];

var _default = imgData;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(imgData, 'imgData', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/constants/imgData.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/constants/imgData.js');
}();

;

/***/ }),
/* 199 */
/*!************************************************!*\
  !*** ./src/app/components/Tables/TreeTable.js ***!
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

var _Table = __webpack_require__(/*! @material-ui/core/Table */ 17);

var _Table2 = _interopRequireDefault(_Table);

var _TableBody = __webpack_require__(/*! @material-ui/core/TableBody */ 21);

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableCell = __webpack_require__(/*! @material-ui/core/TableCell */ 7);

var _TableCell2 = _interopRequireDefault(_TableCell);

var _TableHead = __webpack_require__(/*! @material-ui/core/TableHead */ 18);

var _TableHead2 = _interopRequireDefault(_TableHead);

var _TableRow = __webpack_require__(/*! @material-ui/core/TableRow */ 14);

var _TableRow2 = _interopRequireDefault(_TableRow);

var _KeyboardArrowRight = __webpack_require__(/*! @material-ui/icons/KeyboardArrowRight */ 200);

var _KeyboardArrowRight2 = _interopRequireDefault(_KeyboardArrowRight);

var _ExpandMore = __webpack_require__(/*! @material-ui/icons/ExpandMore */ 87);

var _ExpandMore2 = _interopRequireDefault(_ExpandMore);

var _AddCircle = __webpack_require__(/*! @material-ui/icons/AddCircle */ 201);

var _AddCircle2 = _interopRequireDefault(_AddCircle);

var _RemoveCircleOutline = __webpack_require__(/*! @material-ui/icons/RemoveCircleOutline */ 202);

var _RemoveCircleOutline2 = _interopRequireDefault(_RemoveCircleOutline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto'
    },
    table: {
      minWidth: 700
    },
    hideRow: {
      display: 'none'
    },
    anchor: {
      cursor: 'pointer'
    },
    icon: {
      top: 5,
      position: 'relative',
      left: -5
    }
  };
};

var RenderRow = function RenderRow(props) {
  var classes = props.classes,
      toggleTree = props.toggleTree,
      treeOpen = props.treeOpen,
      item = props.item,
      parent = props.parent,
      arrowMore = props.arrowMore,
      icon = props.icon,
      branch = props.branch;


  var keyID = item.id;
  var dataBody = Object.keys(item);
  var dataBodyVal = Object.values(item);

  var renderIconMore = function renderIconMore(iconName) {
    if (iconName === 'arrow') {
      return _react2.default.createElement(_ExpandMore2.default, { className: classes.icon });
    }
    return _react2.default.createElement(_RemoveCircleOutline2.default, { className: classes.icon });
  };

  var renderIconLess = function renderIconLess(iconName) {
    if (iconName === 'arrow') {
      return _react2.default.createElement(_KeyboardArrowRight2.default, { className: classes.icon });
    }
    return _react2.default.createElement(_AddCircle2.default, { className: classes.icon });
  };

  var renderCell = function renderCell(dataArray, parentCell) {
    return dataArray.map(function (itemCell, index) {
      if (index < 1) {
        if (parentCell) {
          return _react2.default.createElement(
            _TableCell2.default,
            { key: index.toString(), style: { paddingLeft: keyID.split('_').length * 20 } },
            arrowMore.indexOf(keyID) > -1 ? renderIconMore(icon) : renderIconLess(icon),
            keyID
          );
        }
        return _react2.default.createElement(
          _TableCell2.default,
          { key: index.toString(), style: { paddingLeft: keyID.split('_').length * 20 } },
          keyID
        );
      }

      if (itemCell !== 'child') {
        return _react2.default.createElement(
          _TableCell2.default,
          { padding: 'dense', key: index.toString() },
          dataBodyVal[index]
        );
      }

      return false;
    });
  };

  var row = parent ? _react2.default.createElement(
    _TableRow2.default,
    {
      key: keyID,
      className: treeOpen.indexOf(keyID) < 0 && keyID.indexOf('_') > -1 ? classes.hideRow : classes.anchor,
      onClick: function onClick() {
        return toggleTree(keyID, item.child, branch);
      }
    },
    renderCell(dataBody, true)
  ) : _react2.default.createElement(
    _TableRow2.default,
    {
      key: keyID,
      className: treeOpen.indexOf(keyID) < 0 && keyID.indexOf('_') > -1 ? classes.hideRow : ''
    },
    renderCell(dataBody, false)
  );

  return [row];
};

RenderRow.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  item: _propTypes2.default.object.isRequired,
  parent: _propTypes2.default.bool.isRequired,
  toggleTree: _propTypes2.default.func.isRequired,
  treeOpen: _propTypes2.default.object.isRequired,
  arrowMore: _propTypes2.default.object.isRequired,
  branch: _propTypes2.default.string.isRequired,
  icon: _propTypes2.default.string.isRequired
};

RenderRow = (0, _styles.withStyles)(styles)(RenderRow);

var TreeTable = function (_React$Component) {
  _inherits(TreeTable, _React$Component);

  function TreeTable() {
    _classCallCheck(this, TreeTable);

    return _possibleConstructorReturn(this, (TreeTable.__proto__ || Object.getPrototypeOf(TreeTable)).apply(this, arguments));
  }

  _createClass(TreeTable, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          dataTable = _props.dataTable,
          icon = _props.icon,
          treeOpen = _props.treeOpen,
          arrowMore = _props.arrowMore,
          toggleTree = _props.toggleTree,
          branch = _props.branch;

      var parentRow = true;
      var getData = function getData(dataArray) {
        return dataArray.map(function (item, index) {
          if (item.child) {
            return [_react2.default.createElement(RenderRow, {
              icon: icon,
              treeOpen: treeOpen,
              arrowMore: arrowMore,
              toggleTree: toggleTree,
              item: item,
              key: index.toString(),
              parent: parentRow,
              branch: branch
            }), getData(item.child)];
          }
          return _react2.default.createElement(RenderRow, {
            icon: icon,
            item: item,
            treeOpen: treeOpen,
            arrowMore: arrowMore,
            toggleTree: toggleTree,
            key: index.toString(),
            branch: branch,
            parent: false
          });
        });
      };

      var getHead = function getHead(dataArray) {
        return dataArray.map(function (item, index) {
          return _react2.default.createElement(
            _TableCell2.default,
            { padding: 'dense', key: index.toString() },
            item.label
          );
        });
      };

      return _react2.default.createElement(
        _Table2.default,
        { className: classes.table },
        _react2.default.createElement(
          _TableHead2.default,
          null,
          _react2.default.createElement(
            _TableRow2.default,
            null,
            getHead(dataTable.head)
          )
        ),
        _react2.default.createElement(
          _TableBody2.default,
          null,
          getData(dataTable.body)
        )
      );
    }
  }]);

  return TreeTable;
}(_react2.default.Component);

TreeTable.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  dataTable: _propTypes2.default.object.isRequired,
  treeOpen: _propTypes2.default.object.isRequired,
  toggleTree: _propTypes2.default.func.isRequired,
  arrowMore: _propTypes2.default.object.isRequired,
  branch: _propTypes2.default.string.isRequired,
  icon: _propTypes2.default.string.isRequired
};

var _default = (0, _styles.withStyles)(styles)(TreeTable);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Tables/TreeTable.js');

  __REACT_HOT_LOADER__.register(RenderRow, 'RenderRow', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Tables/TreeTable.js');

  __REACT_HOT_LOADER__.register(TreeTable, 'TreeTable', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Tables/TreeTable.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Tables/TreeTable.js');
}();

;

/***/ }),
/* 200 */
/*!********************************************************!*\
  !*** external "@material-ui/icons/KeyboardArrowRight" ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/KeyboardArrowRight");

/***/ }),
/* 201 */
/*!***********************************************!*\
  !*** external "@material-ui/icons/AddCircle" ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AddCircle");

/***/ }),
/* 202 */
/*!*********************************************************!*\
  !*** external "@material-ui/icons/RemoveCircleOutline" ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/RemoveCircleOutline");

/***/ }),
/* 203 */
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

var _MainTable = __webpack_require__(/*! ./tableParts/MainTable */ 204);

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

var _default = CrudTable;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CrudTable, 'CrudTable', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Tables/CrudTable.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Tables/CrudTable.js');
}();

;

/***/ }),
/* 204 */
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

var _Table = __webpack_require__(/*! @material-ui/core/Table */ 17);

var _Table2 = _interopRequireDefault(_Table);

var _TableBody = __webpack_require__(/*! @material-ui/core/TableBody */ 21);

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableCell = __webpack_require__(/*! @material-ui/core/TableCell */ 7);

var _TableCell2 = _interopRequireDefault(_TableCell);

var _TableHead = __webpack_require__(/*! @material-ui/core/TableHead */ 18);

var _TableHead2 = _interopRequireDefault(_TableHead);

var _TableRow = __webpack_require__(/*! @material-ui/core/TableRow */ 14);

var _TableRow2 = _interopRequireDefault(_TableRow);

var _Toolbar = __webpack_require__(/*! @material-ui/core/Toolbar */ 13);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ 4);

var _Typography2 = _interopRequireDefault(_Typography);

var _Tooltip = __webpack_require__(/*! @material-ui/core/Tooltip */ 27);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ 9);

var _Button2 = _interopRequireDefault(_Button);

var _classnames = __webpack_require__(/*! classnames */ 3);

var _classnames2 = _interopRequireDefault(_classnames);

var _Add = __webpack_require__(/*! @material-ui/icons/Add */ 52);

var _Add2 = _interopRequireDefault(_Add);

var _Table3 = __webpack_require__(/*! ../../../styles/components/Table.scss */ 11);

var _Table4 = _interopRequireDefault(_Table3);

var _Row = __webpack_require__(/*! ./Row */ 205);

var _Row2 = _interopRequireDefault(_Row);

var _tableStyleJss = __webpack_require__(/*! ./tableStyle-jss */ 97);

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

var _default = (0, _styles.withStyles)(_tableStyleJss2.default)(MainTable);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(MainTable, 'MainTable', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Tables/tableParts/MainTable.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Tables/tableParts/MainTable.js');
}();

;

/***/ }),
/* 205 */
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

var _TableCell = __webpack_require__(/*! @material-ui/core/TableCell */ 7);

var _TableCell2 = _interopRequireDefault(_TableCell);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ 5);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _classnames = __webpack_require__(/*! classnames */ 3);

var _classnames2 = _interopRequireDefault(_classnames);

var _Delete = __webpack_require__(/*! @material-ui/icons/Delete */ 70);

var _Delete2 = _interopRequireDefault(_Delete);

var _BorderColor = __webpack_require__(/*! @material-ui/icons/BorderColor */ 206);

var _BorderColor2 = _interopRequireDefault(_BorderColor);

var _Done = __webpack_require__(/*! @material-ui/icons/Done */ 207);

var _Done2 = _interopRequireDefault(_Done);

var _Table = __webpack_require__(/*! ../../../styles/components/Table.scss */ 11);

var _Table2 = _interopRequireDefault(_Table);

var _EditableCell = __webpack_require__(/*! ./EditableCell */ 208);

var _EditableCell2 = _interopRequireDefault(_EditableCell);

var _SelectableCell = __webpack_require__(/*! ./SelectableCell */ 210);

var _SelectableCell2 = _interopRequireDefault(_SelectableCell);

var _ToggleCell = __webpack_require__(/*! ./ToggleCell */ 212);

var _ToggleCell2 = _interopRequireDefault(_ToggleCell);

var _DatePickerCell = __webpack_require__(/*! ./DatePickerCell */ 214);

var _DatePickerCell2 = _interopRequireDefault(_DatePickerCell);

var _TimePickerCell = __webpack_require__(/*! ./TimePickerCell */ 216);

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

var _default = (0, _styles.withStyles)(styles)(Row);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Tables/tableParts/Row.js');

  __REACT_HOT_LOADER__.register(Row, 'Row', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Tables/tableParts/Row.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Tables/tableParts/Row.js');
}();

;

/***/ }),
/* 206 */
/*!*************************************************!*\
  !*** external "@material-ui/icons/BorderColor" ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/BorderColor");

/***/ }),
/* 207 */
/*!******************************************!*\
  !*** external "@material-ui/icons/Done" ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Done");

/***/ }),
/* 208 */
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

var _TableCell = __webpack_require__(/*! @material-ui/core/TableCell */ 7);

var _TableCell2 = _interopRequireDefault(_TableCell);

var _Input = __webpack_require__(/*! @material-ui/core/Input */ 95);

var _Input2 = _interopRequireDefault(_Input);

var _TextField = __webpack_require__(/*! @material-ui/core/TextField */ 209);

var _TextField2 = _interopRequireDefault(_TextField);

var _Table = __webpack_require__(/*! ../../../styles/components/Table.scss */ 11);

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

var _default = EditableCell;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(EditableCell, 'EditableCell', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Tables/tableParts/EditableCell.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Tables/tableParts/EditableCell.js');
}();

;

/***/ }),
/* 209 */
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),
/* 210 */
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

var _Select = __webpack_require__(/*! @material-ui/core/Select */ 211);

var _Select2 = _interopRequireDefault(_Select);

var _MenuItem = __webpack_require__(/*! @material-ui/core/MenuItem */ 33);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _TableCell = __webpack_require__(/*! @material-ui/core/TableCell */ 7);

var _TableCell2 = _interopRequireDefault(_TableCell);

var _Table = __webpack_require__(/*! ../../../styles/components/Table.scss */ 11);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectableCell.__proto__ || Object.getPrototypeOf(SelectableCell)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function () {
      var _this2;

      return (_this2 = _this).__handleChange__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SelectableCell, [{
    key: '__handleChange__REACT_HOT_LOADER__',
    value: function __handleChange__REACT_HOT_LOADER__() {
      return this.__handleChange__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleChange__REACT_HOT_LOADER__',
    value: function __handleChange__REACT_HOT_LOADER__(event) {
      this.props.updateRow(event, this.props.branch);
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }
  }, {
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

var _default = SelectableCell;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SelectableCell, 'SelectableCell', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Tables/tableParts/SelectableCell.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Tables/tableParts/SelectableCell.js');
}();

;

/***/ }),
/* 211 */
/*!*******************************************!*\
  !*** external "@material-ui/core/Select" ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),
/* 212 */
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

var _TableCell = __webpack_require__(/*! @material-ui/core/TableCell */ 7);

var _TableCell2 = _interopRequireDefault(_TableCell);

var _classnames = __webpack_require__(/*! classnames */ 3);

var _classnames2 = _interopRequireDefault(_classnames);

var _FormControlLabel = __webpack_require__(/*! @material-ui/core/FormControlLabel */ 36);

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _Switch = __webpack_require__(/*! @material-ui/core/Switch */ 213);

var _Switch2 = _interopRequireDefault(_Switch);

var _Table = __webpack_require__(/*! ../../../styles/components/Table.scss */ 11);

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
    }, _this.handleChange = function () {
      var _this2;

      return (_this2 = _this).__handleChange__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ToggleCell, [{
    key: '__handleChange__REACT_HOT_LOADER__',
    value: function __handleChange__REACT_HOT_LOADER__() {
      return this.__handleChange__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleChange__REACT_HOT_LOADER__',
    value: function __handleChange__REACT_HOT_LOADER__(event) {
      this.setState({ isChecked: event.target.checked });
      this.props.updateRow(event, this.props.branch);
    }
  }, {
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

var _default = ToggleCell;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ToggleCell, 'ToggleCell', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Tables/tableParts/ToggleCell.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Tables/tableParts/ToggleCell.js');
}();

;

/***/ }),
/* 213 */
/*!*******************************************!*\
  !*** external "@material-ui/core/Switch" ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Switch");

/***/ }),
/* 214 */
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

var _momentUtils = __webpack_require__(/*! material-ui-pickers/utils/moment-utils */ 71);

var _momentUtils2 = _interopRequireDefault(_momentUtils);

var _MuiPickersUtilsProvider = __webpack_require__(/*! material-ui-pickers/utils/MuiPickersUtilsProvider */ 72);

var _MuiPickersUtilsProvider2 = _interopRequireDefault(_MuiPickersUtilsProvider);

var _TableCell = __webpack_require__(/*! @material-ui/core/TableCell */ 7);

var _TableCell2 = _interopRequireDefault(_TableCell);

var _DatePicker = __webpack_require__(/*! material-ui-pickers/DatePicker */ 215);

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _Table = __webpack_require__(/*! ../../../styles/components/Table.scss */ 11);

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
    }, _this.handleDateChange = function () {
      var _this2;

      return (_this2 = _this).__handleDateChange__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DatePickerCell, [{
    key: '__handleDateChange__REACT_HOT_LOADER__',
    value: function __handleDateChange__REACT_HOT_LOADER__() {
      return this.__handleDateChange__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleDateChange__REACT_HOT_LOADER__',
    value: function __handleDateChange__REACT_HOT_LOADER__(date) {
      this.state.event.target.value = date;
      this.props.updateRow(this.state.event, this.props.branch);
    }
  }, {
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

var _default = DatePickerCell;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(DatePickerCell, 'DatePickerCell', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Tables/tableParts/DatePickerCell.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Tables/tableParts/DatePickerCell.js');
}();

;

/***/ }),
/* 215 */
/*!*************************************************!*\
  !*** external "material-ui-pickers/DatePicker" ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("material-ui-pickers/DatePicker");

/***/ }),
/* 216 */
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

var _momentUtils = __webpack_require__(/*! material-ui-pickers/utils/moment-utils */ 71);

var _momentUtils2 = _interopRequireDefault(_momentUtils);

var _MuiPickersUtilsProvider = __webpack_require__(/*! material-ui-pickers/utils/MuiPickersUtilsProvider */ 72);

var _MuiPickersUtilsProvider2 = _interopRequireDefault(_MuiPickersUtilsProvider);

var _TableCell = __webpack_require__(/*! @material-ui/core/TableCell */ 7);

var _TableCell2 = _interopRequireDefault(_TableCell);

var _materialUiPickers = __webpack_require__(/*! material-ui-pickers */ 96);

var _InputAdornment = __webpack_require__(/*! @material-ui/core/InputAdornment */ 53);

var _InputAdornment2 = _interopRequireDefault(_InputAdornment);

var _Icon = __webpack_require__(/*! @material-ui/core/Icon */ 64);

var _Icon2 = _interopRequireDefault(_Icon);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ 5);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Table = __webpack_require__(/*! ../../../styles/components/Table.scss */ 11);

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
    }, _this.handleTimeChange = function () {
      var _this2;

      return (_this2 = _this).__handleTimeChange__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TimePickerCell, [{
    key: '__handleTimeChange__REACT_HOT_LOADER__',
    value: function __handleTimeChange__REACT_HOT_LOADER__() {
      return this.__handleTimeChange__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleTimeChange__REACT_HOT_LOADER__',
    value: function __handleTimeChange__REACT_HOT_LOADER__(date) {
      this.state.event.target.value = date;
      this.props.updateRow(this.state.event, this.props.branch);
    }
  }, {
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

var _default = TimePickerCell;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TimePickerCell, 'TimePickerCell', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Tables/tableParts/TimePickerCell.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Tables/tableParts/TimePickerCell.js');
}();

;

/***/ }),
/* 217 */
/*!***********************************************!*\
  !*** ./src/app/components/Tables/AdvTable.js ***!
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

var _classnames = __webpack_require__(/*! classnames */ 3);

var _classnames2 = _interopRequireDefault(_classnames);

var _Table = __webpack_require__(/*! @material-ui/core/Table */ 17);

var _Table2 = _interopRequireDefault(_Table);

var _TableBody = __webpack_require__(/*! @material-ui/core/TableBody */ 21);

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableCell = __webpack_require__(/*! @material-ui/core/TableCell */ 7);

var _TableCell2 = _interopRequireDefault(_TableCell);

var _TableRow = __webpack_require__(/*! @material-ui/core/TableRow */ 14);

var _TableRow2 = _interopRequireDefault(_TableRow);

var _TablePagination = __webpack_require__(/*! @material-ui/core/TablePagination */ 218);

var _TablePagination2 = _interopRequireDefault(_TablePagination);

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ 6);

var _Paper2 = _interopRequireDefault(_Paper);

var _Checkbox = __webpack_require__(/*! @material-ui/core/Checkbox */ 98);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Table3 = __webpack_require__(/*! ../../styles/components/Table.scss */ 11);

var _Table4 = _interopRequireDefault(_Table3);

var _TableHeader = __webpack_require__(/*! ./tableParts/TableHeader */ 219);

var _TableHeader2 = _interopRequireDefault(_TableHeader);

var _TableToolbar = __webpack_require__(/*! ./tableParts/TableToolbar */ 221);

var _TableToolbar2 = _interopRequireDefault(_TableToolbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3
    },
    table: {
      minWidth: 1020
    },
    tableWrapper: {
      overflowX: 'auto'
    }
  };
};

var AdvTable = function (_React$Component) {
  _inherits(AdvTable, _React$Component);

  function AdvTable(props, context) {
    _classCallCheck(this, AdvTable);

    var _this = _possibleConstructorReturn(this, (AdvTable.__proto__ || Object.getPrototypeOf(AdvTable)).call(this, props, context));

    _this.handleRequestSort = function () {
      return _this.__handleRequestSort__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleSelectAllClick = function () {
      return _this.__handleSelectAllClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleClick = function () {
      return _this.__handleClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleChangePage = function () {
      return _this.__handleChangePage__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleChangeRowsPerPage = function () {
      return _this.__handleChangeRowsPerPage__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.isSelected = function () {
      return _this.__isSelected__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      order: _this.props.order,
      orderBy: _this.props.orderBy,
      selected: _this.props.selected,
      data: _this.props.data.sort(function (a, b) {
        return a.calories < b.calories ? -1 : 1;
      }),
      page: _this.props.page,
      rowsPerPage: _this.props.rowsPerPage,
      defaultPerPage: _this.props.defaultPerPage,
      filterText: _this.props.filterText
    };
    return _this;
  }

  _createClass(AdvTable, [{
    key: '__isSelected__REACT_HOT_LOADER__',
    value: function __isSelected__REACT_HOT_LOADER__() {
      return this.__isSelected__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleChangeRowsPerPage__REACT_HOT_LOADER__',
    value: function __handleChangeRowsPerPage__REACT_HOT_LOADER__() {
      return this.__handleChangeRowsPerPage__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleChangePage__REACT_HOT_LOADER__',
    value: function __handleChangePage__REACT_HOT_LOADER__() {
      return this.__handleChangePage__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleClick__REACT_HOT_LOADER__',
    value: function __handleClick__REACT_HOT_LOADER__() {
      return this.__handleClick__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleSelectAllClick__REACT_HOT_LOADER__',
    value: function __handleSelectAllClick__REACT_HOT_LOADER__() {
      return this.__handleSelectAllClick__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleRequestSort__REACT_HOT_LOADER__',
    value: function __handleRequestSort__REACT_HOT_LOADER__() {
      return this.__handleRequestSort__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleRequestSort__REACT_HOT_LOADER__',
    value: function __handleRequestSort__REACT_HOT_LOADER__(event, property) {
      var orderBy = property;
      var order = 'desc';

      if (this.state.orderBy === property && this.state.order === 'desc') {
        order = 'asc';
      }

      var data = order === 'desc' ? this.state.data.sort(function (a, b) {
        return b[orderBy] < a[orderBy] ? -1 : 1;
      }) : this.state.data.sort(function (a, b) {
        return a[orderBy] < b[orderBy] ? -1 : 1;
      });

      this.setState({ data: data, order: order, orderBy: orderBy });
    }
  }, {
    key: '__handleSelectAllClick__REACT_HOT_LOADER__',
    value: function __handleSelectAllClick__REACT_HOT_LOADER__(event, checked) {
      if (checked) {
        this.setState({ selected: this.state.data.map(function (n) {
            return n.id;
          }) });
        return;
      }
      this.setState({ selected: [] });
    }
  }, {
    key: '__handleClick__REACT_HOT_LOADER__',
    value: function __handleClick__REACT_HOT_LOADER__(event, id) {
      var selected = this.state.selected;

      var selectedIndex = selected.indexOf(id);
      var newSelected = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
      }

      this.setState({ selected: newSelected });
    }
  }, {
    key: '__handleChangePage__REACT_HOT_LOADER__',
    value: function __handleChangePage__REACT_HOT_LOADER__(event, page) {
      this.setState({ page: page });
    }
  }, {
    key: '__handleChangeRowsPerPage__REACT_HOT_LOADER__',
    value: function __handleChangeRowsPerPage__REACT_HOT_LOADER__(event) {
      this.setState({ rowsPerPage: event.target.value });
    }
  }, {
    key: '__isSelected__REACT_HOT_LOADER__',
    value: function __isSelected__REACT_HOT_LOADER__(id) {
      return this.state.selected.indexOf(id) !== -1;
    }
  }, {
    key: 'handleUserInput',
    value: function handleUserInput(value) {
      // Show all item first
      if (value !== '') {
        this.setState({ rowsPerPage: this.state.data.length });
      } else {
        this.setState({ rowsPerPage: this.state.defaultPerPage });
      }

      // Show result base on keyword
      this.setState({ filterText: value.toLowerCase() });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      var _state = this.state,
          data = _state.data,
          order = _state.order,
          orderBy = _state.orderBy,
          selected = _state.selected,
          rowsPerPage = _state.rowsPerPage,
          page = _state.page,
          filterText = _state.filterText;
      var columnData = this.props.columnData;

      var checkcell = true;
      var emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
      var renderCell = function renderCell(dataArray, keyArray) {
        return keyArray.map(function (itemCell, index) {
          return _react2.default.createElement(
            _TableCell2.default,
            { numeric: itemCell.numeric, key: index.toString() },
            dataArray[itemCell.id]
          );
        });
      };
      return _react2.default.createElement(
        _Paper2.default,
        { className: classes.root },
        _react2.default.createElement(_TableToolbar2.default, {
          numSelected: selected.length,
          filterText: filterText,
          onUserInput: function onUserInput(event) {
            return _this2.handleUserInput(event);
          }
        }),
        _react2.default.createElement(
          'div',
          { className: classes.tableWrapper },
          _react2.default.createElement(
            _Table2.default,
            { className: (0, _classnames2.default)(classes.table, _Table4.default.stripped) },
            _react2.default.createElement(_TableHeader2.default, {
              numSelected: selected.length,
              order: order,
              orderBy: orderBy,
              onSelectAllClick: this.handleSelectAllClick,
              onRequestSort: this.handleRequestSort,
              rowCount: data.length,
              columnData: columnData,
              checkcell: checkcell
            }),
            _react2.default.createElement(
              _TableBody2.default,
              null,
              data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function (n) {
                var isSelected = _this2.isSelected(n.id);
                if (n.name.toLowerCase().indexOf(filterText) === -1) {
                  return false;
                }
                return _react2.default.createElement(
                  _TableRow2.default,
                  {
                    hover: true,
                    onClick: function onClick(event) {
                      return _this2.handleClick(event, n.id);
                    },
                    role: 'checkbox',
                    'aria-checked': isSelected,
                    tabIndex: -1,
                    key: n.id,
                    selected: isSelected
                  },
                  _react2.default.createElement(
                    _TableCell2.default,
                    { padding: 'checkbox' },
                    _react2.default.createElement(_Checkbox2.default, { checked: isSelected })
                  ),
                  renderCell(n, columnData)
                );
              }),
              emptyRows > 0 && _react2.default.createElement(
                _TableRow2.default,
                { style: { height: 49 * emptyRows } },
                _react2.default.createElement(_TableCell2.default, { colSpan: 6 })
              )
            )
          )
        ),
        _react2.default.createElement(_TablePagination2.default, {
          component: 'div',
          count: data.length,
          rowsPerPage: rowsPerPage,
          page: page,
          backIconButtonProps: {
            'aria-label': 'Previous Page'
          },
          nextIconButtonProps: {
            'aria-label': 'Next Page'
          },
          onChangePage: this.handleChangePage,
          onChangeRowsPerPage: this.handleChangeRowsPerPage
        })
      );
    }
  }]);

  return AdvTable;
}(_react2.default.Component);

AdvTable.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  data: _propTypes2.default.array.isRequired,
  order: _propTypes2.default.string.isRequired,
  orderBy: _propTypes2.default.string.isRequired,
  selected: _propTypes2.default.array.isRequired,
  rowsPerPage: _propTypes2.default.number.isRequired,
  page: _propTypes2.default.number.isRequired,
  defaultPerPage: _propTypes2.default.number.isRequired,
  filterText: _propTypes2.default.string.isRequired,
  columnData: _propTypes2.default.array.isRequired
};

var _default = (0, _styles.withStyles)(styles)(AdvTable);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Tables/AdvTable.js');

  __REACT_HOT_LOADER__.register(AdvTable, 'AdvTable', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Tables/AdvTable.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Tables/AdvTable.js');
}();

;

/***/ }),
/* 218 */
/*!****************************************************!*\
  !*** external "@material-ui/core/TablePagination" ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TablePagination");

/***/ }),
/* 219 */
/*!*************************************************************!*\
  !*** ./src/app/components/Tables/tableParts/TableHeader.js ***!
  \*************************************************************/
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

var _TableCell = __webpack_require__(/*! @material-ui/core/TableCell */ 7);

var _TableCell2 = _interopRequireDefault(_TableCell);

var _TableHead = __webpack_require__(/*! @material-ui/core/TableHead */ 18);

var _TableHead2 = _interopRequireDefault(_TableHead);

var _TableRow = __webpack_require__(/*! @material-ui/core/TableRow */ 14);

var _TableRow2 = _interopRequireDefault(_TableRow);

var _TableSortLabel = __webpack_require__(/*! @material-ui/core/TableSortLabel */ 220);

var _TableSortLabel2 = _interopRequireDefault(_TableSortLabel);

var _Checkbox = __webpack_require__(/*! @material-ui/core/Checkbox */ 98);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Tooltip = __webpack_require__(/*! @material-ui/core/Tooltip */ 27);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableHeader = function (_React$Component) {
  _inherits(TableHeader, _React$Component);

  function TableHeader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TableHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TableHeader.__proto__ || Object.getPrototypeOf(TableHeader)).call.apply(_ref, [this].concat(args))), _this), _this.createSortHandler = function () {
      var _this2;

      return (_this2 = _this).__createSortHandler__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TableHeader, [{
    key: '__createSortHandler__REACT_HOT_LOADER__',
    value: function __createSortHandler__REACT_HOT_LOADER__() {
      return this.__createSortHandler__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__createSortHandler__REACT_HOT_LOADER__',
    value: function __createSortHandler__REACT_HOT_LOADER__(property) {
      var _this3 = this;

      return function (event) {
        _this3.props.onRequestSort(event, property);
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          onSelectAllClick = _props.onSelectAllClick,
          order = _props.order,
          orderBy = _props.orderBy,
          numSelected = _props.numSelected,
          rowCount = _props.rowCount,
          columnData = _props.columnData,
          checkcell = _props.checkcell;


      return _react2.default.createElement(
        _TableHead2.default,
        null,
        _react2.default.createElement(
          _TableRow2.default,
          null,
          checkcell && _react2.default.createElement(
            _TableCell2.default,
            { padding: 'checkbox', width: '80' },
            _react2.default.createElement(_Checkbox2.default, {
              indeterminate: numSelected > 0 && numSelected < rowCount,
              checked: numSelected === rowCount,
              onChange: onSelectAllClick
            })
          ),
          columnData.map(function (column) {
            return _react2.default.createElement(
              _TableCell2.default,
              {
                key: column.id,
                numeric: column.numeric,
                padding: column.disablePadding ? 'none' : 'default',
                sortDirection: orderBy === column.id ? order : false
              },
              _react2.default.createElement(
                _Tooltip2.default,
                {
                  title: 'Sort',
                  placement: column.numeric ? 'bottom-end' : 'bottom-start',
                  enterDelay: 300
                },
                _react2.default.createElement(
                  _TableSortLabel2.default,
                  {
                    active: orderBy === column.id,
                    direction: order,
                    onClick: _this4.createSortHandler(column.id)
                  },
                  column.label
                )
              )
            );
          }, this)
        )
      );
    }
  }]);

  return TableHeader;
}(_react2.default.Component);

TableHeader.propTypes = {
  numSelected: _propTypes2.default.number.isRequired,
  onRequestSort: _propTypes2.default.func.isRequired,
  onSelectAllClick: _propTypes2.default.func.isRequired,
  order: _propTypes2.default.string.isRequired,
  orderBy: _propTypes2.default.string.isRequired,
  rowCount: _propTypes2.default.number.isRequired,
  columnData: _propTypes2.default.array.isRequired,
  checkcell: _propTypes2.default.bool.isRequired
};

var _default = TableHeader;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TableHeader, 'TableHeader', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Tables/tableParts/TableHeader.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Tables/tableParts/TableHeader.js');
}();

;

/***/ }),
/* 220 */
/*!***************************************************!*\
  !*** external "@material-ui/core/TableSortLabel" ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableSortLabel");

/***/ }),
/* 221 */
/*!**************************************************************!*\
  !*** ./src/app/components/Tables/tableParts/TableToolbar.js ***!
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

var _classnames = __webpack_require__(/*! classnames */ 3);

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Toolbar = __webpack_require__(/*! @material-ui/core/Toolbar */ 13);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ 4);

var _Typography2 = _interopRequireDefault(_Typography);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ 5);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Tooltip = __webpack_require__(/*! @material-ui/core/Tooltip */ 27);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _Delete = __webpack_require__(/*! @material-ui/icons/Delete */ 70);

var _Delete2 = _interopRequireDefault(_Delete);

var _Archive = __webpack_require__(/*! @material-ui/icons/Archive */ 222);

var _Archive2 = _interopRequireDefault(_Archive);

var _Bookmark = __webpack_require__(/*! @material-ui/icons/Bookmark */ 99);

var _Bookmark2 = _interopRequireDefault(_Bookmark);

var _FilterList = __webpack_require__(/*! @material-ui/icons/FilterList */ 223);

var _FilterList2 = _interopRequireDefault(_FilterList);

var _Search = __webpack_require__(/*! @material-ui/icons/Search */ 44);

var _Search2 = _interopRequireDefault(_Search);

var _FormControl = __webpack_require__(/*! @material-ui/core/FormControl */ 73);

var _FormControl2 = _interopRequireDefault(_FormControl);

var _Input = __webpack_require__(/*! @material-ui/core/Input */ 95);

var _Input2 = _interopRequireDefault(_Input);

var _InputAdornment = __webpack_require__(/*! @material-ui/core/InputAdornment */ 53);

var _InputAdornment2 = _interopRequireDefault(_InputAdornment);

var _tableStyleJss = __webpack_require__(/*! ./tableStyle-jss */ 97);

var _tableStyleJss2 = _interopRequireDefault(_tableStyleJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableToolbar = function (_React$Component) {
  _inherits(TableToolbar, _React$Component);

  function TableToolbar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TableToolbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TableToolbar.__proto__ || Object.getPrototypeOf(TableToolbar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showSearch: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TableToolbar, [{
    key: 'toggleSearch',
    value: function toggleSearch() {
      this.setState({ showSearch: !this.state.showSearch });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      event.persist();
      this.props.onUserInput(event.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          numSelected = _props.numSelected,
          classes = _props.classes,
          filterText = _props.filterText;
      var showSearch = this.state.showSearch;


      return _react2.default.createElement(
        _Toolbar2.default,
        {
          className: (0, _classnames2.default)(classes.root, _defineProperty({}, classes.highlight, numSelected > 0))
        },
        _react2.default.createElement(
          'div',
          { className: classes.titleToolbar },
          numSelected > 0 ? _react2.default.createElement(
            _Typography2.default,
            { color: 'inherit', variant: 'subheading' },
            numSelected,
            ' selected'
          ) : _react2.default.createElement(
            _Typography2.default,
            { variant: 'title' },
            'Nutrition'
          )
        ),
        _react2.default.createElement('div', { className: classes.spacer }),
        _react2.default.createElement(
          'div',
          { className: classes.actionsToolbar },
          numSelected > 0 ? _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _Tooltip2.default,
              { title: 'Bookmark' },
              _react2.default.createElement(
                _IconButton2.default,
                { 'aria-label': 'Bookmark' },
                _react2.default.createElement(_Bookmark2.default, null)
              )
            ),
            _react2.default.createElement(
              _Tooltip2.default,
              { title: 'Archive' },
              _react2.default.createElement(
                _IconButton2.default,
                { 'aria-label': 'Archive' },
                _react2.default.createElement(_Archive2.default, null)
              )
            ),
            _react2.default.createElement(
              _Tooltip2.default,
              { title: 'Delete' },
              _react2.default.createElement(
                _IconButton2.default,
                { 'aria-label': 'Delete' },
                _react2.default.createElement(_Delete2.default, null)
              )
            )
          ) : _react2.default.createElement(
            'div',
            { className: classes.actions },
            showSearch && _react2.default.createElement(
              _FormControl2.default,
              { className: (0, _classnames2.default)(classes.textField) },
              _react2.default.createElement(_Input2.default, {
                id: 'search_filter',
                type: 'text',
                placeholder: 'Search Desert',
                value: filterText,
                onChange: function onChange(event) {
                  return _this2.handleChange(event);
                },
                endAdornment: _react2.default.createElement(
                  _InputAdornment2.default,
                  { position: 'end' },
                  _react2.default.createElement(
                    _IconButton2.default,
                    { 'aria-label': 'Search filter' },
                    _react2.default.createElement(_Search2.default, null)
                  )
                )
              })
            ),
            _react2.default.createElement(
              _Tooltip2.default,
              { title: 'Filter list' },
              _react2.default.createElement(
                _IconButton2.default,
                {
                  'aria-label': 'Filter list',
                  className: classes.filterBtn,
                  onClick: function onClick() {
                    return _this2.toggleSearch();
                  }
                },
                _react2.default.createElement(_FilterList2.default, null)
              )
            )
          )
        )
      );
    }
  }]);

  return TableToolbar;
}(_react2.default.Component);

TableToolbar.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  filterText: _propTypes2.default.string.isRequired,
  onUserInput: _propTypes2.default.func.isRequired,
  numSelected: _propTypes2.default.number.isRequired
};

var _default = (0, _styles.withStyles)(_tableStyleJss2.default)(TableToolbar);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TableToolbar, 'TableToolbar', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Tables/tableParts/TableToolbar.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Tables/tableParts/TableToolbar.js');
}();

;

/***/ }),
/* 222 */
/*!*********************************************!*\
  !*** external "@material-ui/icons/Archive" ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Archive");

/***/ }),
/* 223 */
/*!************************************************!*\
  !*** external "@material-ui/icons/FilterList" ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FilterList");

/***/ }),
/* 224 */
/*!************************************************!*\
  !*** ./src/app/components/Tables/EmptyData.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _Table = __webpack_require__(/*! ../../styles/components/Table.scss */ 11);

var _Table2 = _interopRequireDefault(_Table);

var _Apps = __webpack_require__(/*! @material-ui/icons/Apps */ 225);

var _Apps2 = _interopRequireDefault(_Apps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function EmptyData() {
  return _react2.default.createElement(
    'div',
    { className: _Table2.default.nodata },
    _react2.default.createElement(_Apps2.default, null),
    'No Data'
  );
}

var _default = EmptyData;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(EmptyData, 'EmptyData', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Tables/EmptyData.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Tables/EmptyData.js');
}();

;

/***/ }),
/* 225 */
/*!******************************************!*\
  !*** external "@material-ui/icons/Apps" ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Apps");

/***/ }),
/* 226 */
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

var _Snackbar = __webpack_require__(/*! @material-ui/core/Snackbar */ 227);

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ 5);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Close = __webpack_require__(/*! @material-ui/icons/Close */ 100);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Notification.__proto__ || Object.getPrototypeOf(Notification)).call.apply(_ref, [this].concat(args))), _this), _this.handleClose = function () {
      var _this2;

      return (_this2 = _this).__handleClose__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Notification, [{
    key: '__handleClose__REACT_HOT_LOADER__',
    value: function __handleClose__REACT_HOT_LOADER__() {
      return this.__handleClose__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleClose__REACT_HOT_LOADER__',
    value: function __handleClose__REACT_HOT_LOADER__(event, reason) {
      if (reason === 'clickaway') {
        return;
      }
      this.props.close('crudTableDemo');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

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
          return _this3.handleClose();
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
              return _this3.handleClose();
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

var _default = (0, _styles.withStyles)(styles)(Notification);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Notification/Notification.js');

  __REACT_HOT_LOADER__.register(Notification, 'Notification', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Notification/Notification.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Notification/Notification.js');
}();

;

/***/ }),
/* 227 */
/*!*********************************************!*\
  !*** external "@material-ui/core/Snackbar" ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),
/* 228 */
/*!***********************************************!*\
  !*** ./src/app/components/Forms/LoginForm.js ***!
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

var _classnames = __webpack_require__(/*! classnames */ 3);

var _classnames2 = _interopRequireDefault(_classnames);

var _immutable = __webpack_require__(/*! redux-form/immutable */ 37);

var _reduxFormMaterialUi = __webpack_require__(/*! redux-form-material-ui */ 54);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ 9);

var _Button2 = _interopRequireDefault(_Button);

var _reactRedux = __webpack_require__(/*! react-redux */ 12);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ 5);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Visibility = __webpack_require__(/*! @material-ui/icons/Visibility */ 229);

var _Visibility2 = _interopRequireDefault(_Visibility);

var _VisibilityOff = __webpack_require__(/*! @material-ui/icons/VisibilityOff */ 230);

var _VisibilityOff2 = _interopRequireDefault(_VisibilityOff);

var _InputAdornment = __webpack_require__(/*! @material-ui/core/InputAdornment */ 53);

var _InputAdornment2 = _interopRequireDefault(_InputAdornment);

var _FormControl = __webpack_require__(/*! @material-ui/core/FormControl */ 73);

var _FormControl2 = _interopRequireDefault(_FormControl);

var _FormControlLabel = __webpack_require__(/*! @material-ui/core/FormControlLabel */ 36);

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _AllInclusive = __webpack_require__(/*! @material-ui/icons/AllInclusive */ 101);

var _AllInclusive2 = _interopRequireDefault(_AllInclusive);

var _Brightness = __webpack_require__(/*! @material-ui/icons/Brightness5 */ 102);

var _Brightness2 = _interopRequireDefault(_Brightness);

var _People = __webpack_require__(/*! @material-ui/icons/People */ 103);

var _People2 = _interopRequireDefault(_People);

var _ArrowForward = __webpack_require__(/*! @material-ui/icons/ArrowForward */ 69);

var _ArrowForward2 = _interopRequireDefault(_ArrowForward);

var _userJss = __webpack_require__(/*! ./user-jss */ 104);

var _userJss2 = _interopRequireDefault(_userJss);

var _PapperBlock = __webpack_require__(/*! ./../PapperBlock/PapperBlock */ 35);

var _PapperBlock2 = _interopRequireDefault(_PapperBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// validation functions
var required = function required(value) {
  return value == null ? 'Required' : undefined;
};
var email = function email(value) {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email' : undefined;
};

var LoginForm = function (_React$Component) {
  _inherits(LoginForm, _React$Component);

  function LoginForm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LoginForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showPassword: false
    }, _this.handleClickShowPassword = function () {
      var _this2;

      return (_this2 = _this).__handleClickShowPassword__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleMouseDownPassword = function () {
      var _this3;

      return (_this3 = _this).__handleMouseDownPassword__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LoginForm, [{
    key: '__handleMouseDownPassword__REACT_HOT_LOADER__',
    value: function __handleMouseDownPassword__REACT_HOT_LOADER__() {
      return this.__handleMouseDownPassword__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleClickShowPassword__REACT_HOT_LOADER__',
    value: function __handleClickShowPassword__REACT_HOT_LOADER__() {
      return this.__handleClickShowPassword__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleClickShowPassword__REACT_HOT_LOADER__',
    value: function __handleClickShowPassword__REACT_HOT_LOADER__() {
      this.setState({ showPassword: !this.state.showPassword });
    }
  }, {
    key: '__handleMouseDownPassword__REACT_HOT_LOADER__',
    value: function __handleMouseDownPassword__REACT_HOT_LOADER__(event) {
      event.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          handleSubmit = _props.handleSubmit,
          pristine = _props.pristine,
          submitting = _props.submitting;

      return _react2.default.createElement(
        'div',
        { className: classes.formWrap },
        _react2.default.createElement(
          _PapperBlock2.default,
          { whiteBg: true, title: 'Login', desc: '' },
          _react2.default.createElement(
            'form',
            { onSubmit: handleSubmit },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                _FormControl2.default,
                { className: classes.formControl },
                _react2.default.createElement(_immutable.Field, {
                  name: 'email',
                  component: _reduxFormMaterialUi.TextField,
                  placeholder: 'Your Email',
                  label: 'Your Email',
                  required: true,
                  validate: [required, email],
                  className: classes.field
                })
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                _FormControl2.default,
                { className: classes.formControl },
                _react2.default.createElement(_immutable.Field, {
                  name: 'password',
                  component: _reduxFormMaterialUi.TextField,
                  type: this.state.showPassword ? 'text' : 'password',
                  label: 'Your Password',
                  InputProps: {
                    endAdornment: _react2.default.createElement(
                      _InputAdornment2.default,
                      { position: 'end' },
                      _react2.default.createElement(
                        _IconButton2.default,
                        {
                          'aria-label': 'Toggle password visibility',
                          onClick: this.handleClickShowPassword,
                          onMouseDown: this.handleMouseDownPassword
                        },
                        this.state.showPassword ? _react2.default.createElement(_VisibilityOff2.default, null) : _react2.default.createElement(_Visibility2.default, null)
                      )
                    )
                  },
                  required: true,
                  validate: required,
                  className: classes.field
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: classes.btnArea },
              _react2.default.createElement(_FormControlLabel2.default, { control: _react2.default.createElement(_immutable.Field, { name: 'checkbox', component: _reduxFormMaterialUi.Checkbox }), label: 'Remember' }),
              _react2.default.createElement(
                _Button2.default,
                { variant: 'raised', color: 'primary', type: 'submit' },
                'Continue',
                _react2.default.createElement(_ArrowForward2.default, { className: (0, _classnames2.default)(classes.rightIcon, classes.iconSmall), disabled: submitting || pristine })
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'div',
              { className: classes.btnArea },
              _react2.default.createElement(
                _Button2.default,
                { variant: 'raised', size: 'small', className: classes.redBtn, type: 'button' },
                _react2.default.createElement(_AllInclusive2.default, { className: (0, _classnames2.default)(classes.leftIcon, classes.iconSmall) }),
                'Socmed 1'
              ),
              _react2.default.createElement(
                _Button2.default,
                { variant: 'raised', size: 'small', className: classes.blueBtn, type: 'button' },
                _react2.default.createElement(_Brightness2.default, { className: (0, _classnames2.default)(classes.leftIcon, classes.iconSmall) }),
                'Socmed 2'
              ),
              _react2.default.createElement(
                _Button2.default,
                { variant: 'raised', size: 'small', className: classes.cyanBtn, type: 'button' },
                _react2.default.createElement(_People2.default, { className: (0, _classnames2.default)(classes.leftIcon, classes.iconSmall) }),
                'Socmed 3'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: classes.footer },
              'Cannot Login?',
              _react2.default.createElement(
                _Button2.default,
                { size: 'small', color: 'secondary', className: classes.button },
                'Forgot Password'
              ),
              '| ',
              _react2.default.createElement(
                _Button2.default,
                { size: 'small', color: 'secondary', className: classes.button },
                'Register'
              )
            )
          )
        )
      );
    }
  }]);

  return LoginForm;
}(_react2.default.Component);

LoginForm.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  handleSubmit: _propTypes2.default.func.isRequired,
  pristine: _propTypes2.default.bool.isRequired,
  submitting: _propTypes2.default.bool.isRequired
};

var LoginFormReduxed = (0, _immutable.reduxForm)({
  form: 'immutableExample',
  enableReinitialize: true
})(LoginForm);

var reducer = 'login';
var FormInit = (0, _reactRedux.connect)(function (state) {
  return {
    force: state,
    initialValues: state.getIn([reducer, 'usersLogin'])
  };
})(LoginFormReduxed);

var _default = (0, _styles.withStyles)(_userJss2.default)(FormInit);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(required, 'required', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Forms/LoginForm.js');

  __REACT_HOT_LOADER__.register(email, 'email', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Forms/LoginForm.js');

  __REACT_HOT_LOADER__.register(LoginForm, 'LoginForm', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Forms/LoginForm.js');

  __REACT_HOT_LOADER__.register(LoginFormReduxed, 'LoginFormReduxed', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Forms/LoginForm.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Forms/LoginForm.js');

  __REACT_HOT_LOADER__.register(FormInit, 'FormInit', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Forms/LoginForm.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Forms/LoginForm.js');
}();

;

/***/ }),
/* 229 */
/*!************************************************!*\
  !*** external "@material-ui/icons/Visibility" ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Visibility");

/***/ }),
/* 230 */
/*!***************************************************!*\
  !*** external "@material-ui/icons/VisibilityOff" ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VisibilityOff");

/***/ }),
/* 231 */
/*!************************************************!*\
  !*** external "@material-ui/core/colors/cyan" ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/cyan");

/***/ }),
/* 232 */
/*!**************************************************!*\
  !*** ./src/app/components/Forms/RegisterForm.js ***!
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

var _classnames = __webpack_require__(/*! classnames */ 3);

var _classnames2 = _interopRequireDefault(_classnames);

var _immutable = __webpack_require__(/*! redux-form/immutable */ 37);

var _reduxFormMaterialUi = __webpack_require__(/*! redux-form-material-ui */ 54);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ 9);

var _Button2 = _interopRequireDefault(_Button);

var _FormControl = __webpack_require__(/*! @material-ui/core/FormControl */ 73);

var _FormControl2 = _interopRequireDefault(_FormControl);

var _FormControlLabel = __webpack_require__(/*! @material-ui/core/FormControlLabel */ 36);

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _Tabs = __webpack_require__(/*! @material-ui/core/Tabs */ 233);

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Tab = __webpack_require__(/*! @material-ui/core/Tab */ 234);

var _Tab2 = _interopRequireDefault(_Tab);

var _ArrowForward = __webpack_require__(/*! @material-ui/icons/ArrowForward */ 69);

var _ArrowForward2 = _interopRequireDefault(_ArrowForward);

var _AllInclusive = __webpack_require__(/*! @material-ui/icons/AllInclusive */ 101);

var _AllInclusive2 = _interopRequireDefault(_AllInclusive);

var _Brightness = __webpack_require__(/*! @material-ui/icons/Brightness5 */ 102);

var _Brightness2 = _interopRequireDefault(_Brightness);

var _People = __webpack_require__(/*! @material-ui/icons/People */ 103);

var _People2 = _interopRequireDefault(_People);

var _userJss = __webpack_require__(/*! ./user-jss */ 104);

var _userJss2 = _interopRequireDefault(_userJss);

var _PapperBlock = __webpack_require__(/*! ./../PapperBlock/PapperBlock */ 35);

var _PapperBlock2 = _interopRequireDefault(_PapperBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// validation functions
var required = function required(value) {
  return value == null ? 'Required' : undefined;
};
var email = function email(value) {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email' : undefined;
};

var passwordsMatch = function passwordsMatch(value, allValues) {
  console.log(value, allValues.get('password'));
  if (value !== allValues.get('password')) {
    return 'Passwords dont match';
  }
  return undefined;
};

var RegisterForm = function (_React$Component) {
  _inherits(RegisterForm, _React$Component);

  function RegisterForm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RegisterForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RegisterForm.__proto__ || Object.getPrototypeOf(RegisterForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      tab: 0
    }, _this.handleClickShowPassword = function () {
      var _this2;

      return (_this2 = _this).__handleClickShowPassword__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleMouseDownPassword = function () {
      var _this3;

      return (_this3 = _this).__handleMouseDownPassword__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.handleChangeTab = function () {
      var _this4;

      return (_this4 = _this).__handleChangeTab__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RegisterForm, [{
    key: '__handleChangeTab__REACT_HOT_LOADER__',
    value: function __handleChangeTab__REACT_HOT_LOADER__() {
      return this.__handleChangeTab__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleMouseDownPassword__REACT_HOT_LOADER__',
    value: function __handleMouseDownPassword__REACT_HOT_LOADER__() {
      return this.__handleMouseDownPassword__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleClickShowPassword__REACT_HOT_LOADER__',
    value: function __handleClickShowPassword__REACT_HOT_LOADER__() {
      return this.__handleClickShowPassword__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleClickShowPassword__REACT_HOT_LOADER__',
    value: function __handleClickShowPassword__REACT_HOT_LOADER__() {
      this.setState({ showPassword: !this.state.showPassword });
    }
  }, {
    key: '__handleMouseDownPassword__REACT_HOT_LOADER__',
    value: function __handleMouseDownPassword__REACT_HOT_LOADER__(event) {
      event.preventDefault();
    }
  }, {
    key: '__handleChangeTab__REACT_HOT_LOADER__',
    value: function __handleChangeTab__REACT_HOT_LOADER__(event, value) {
      this.setState({ tab: value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          handleSubmit = _props.handleSubmit,
          pristine = _props.pristine,
          submitting = _props.submitting;
      var tab = this.state.tab;

      return _react2.default.createElement(
        'div',
        { className: classes.formWrap },
        _react2.default.createElement(
          _PapperBlock2.default,
          { whiteBg: true, title: 'Create New Account', desc: '' },
          _react2.default.createElement(
            _Tabs2.default,
            {
              value: this.state.tab,
              onChange: this.handleChangeTab,
              indicatorColor: 'primary',
              textColor: 'primary',
              centered: true,
              className: classes.tab
            },
            _react2.default.createElement(_Tab2.default, { label: 'With Email' }),
            _react2.default.createElement(_Tab2.default, { label: 'With Social Network' })
          ),
          tab === 0 && _react2.default.createElement(
            'form',
            { onSubmit: handleSubmit },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                _FormControl2.default,
                { className: classes.formControl },
                _react2.default.createElement(_immutable.Field, {
                  name: 'name',
                  component: _reduxFormMaterialUi.TextField,
                  placeholder: 'Username',
                  label: 'Username',
                  required: true,
                  className: classes.field
                })
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                _FormControl2.default,
                { className: classes.formControl },
                _react2.default.createElement(_immutable.Field, {
                  name: 'email',
                  component: _reduxFormMaterialUi.TextField,
                  placeholder: 'Your Email',
                  label: 'Your Email',
                  required: true,
                  validate: [required, email],
                  className: classes.field
                })
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                _FormControl2.default,
                { className: classes.formControl },
                _react2.default.createElement(_immutable.Field, {
                  name: 'password',
                  component: _reduxFormMaterialUi.TextField,
                  type: 'password',
                  label: 'Your Password',
                  required: true,
                  validate: [required, passwordsMatch],
                  className: classes.field
                })
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                _FormControl2.default,
                { className: classes.formControl },
                _react2.default.createElement(_immutable.Field, {
                  name: 'passwordConfirm',
                  component: _reduxFormMaterialUi.TextField,
                  type: 'password',
                  label: 'Re-type Password',
                  required: true,
                  validate: [required, passwordsMatch],
                  className: classes.field
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: (0, _classnames2.default)(classes.btnArea, classes.noMargin) },
              _react2.default.createElement(
                'div',
                { className: classes.optArea },
                _react2.default.createElement(_FormControlLabel2.default, { control: _react2.default.createElement(_immutable.Field, { name: 'checkbox', component: _reduxFormMaterialUi.Checkbox, className: classes.agree }), label: 'Agree with' }),
                _react2.default.createElement(
                  'a',
                  { href: '#', className: classes.link },
                  'Terms & Condition'
                )
              ),
              _react2.default.createElement(
                _Button2.default,
                { variant: 'raised', color: 'primary', type: 'submit' },
                'Continue',
                _react2.default.createElement(_ArrowForward2.default, { className: (0, _classnames2.default)(classes.rightIcon, classes.iconSmall), disabled: submitting || pristine })
              )
            )
          ),
          tab === 1 && _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _Button2.default,
              { fullWidth: true, variant: 'raised', size: 'large', className: (0, _classnames2.default)(classes.redBtn, classes.socMedFull), type: 'button' },
              _react2.default.createElement(_AllInclusive2.default, { className: (0, _classnames2.default)(classes.leftIcon, classes.iconSmall) }),
              'Socmed 1'
            ),
            _react2.default.createElement(
              _Button2.default,
              { fullWidth: true, variant: 'raised', size: 'large', className: (0, _classnames2.default)(classes.blueBtn, classes.socMedFull), type: 'button' },
              _react2.default.createElement(_Brightness2.default, { className: (0, _classnames2.default)(classes.leftIcon, classes.iconSmall) }),
              'Socmed 2'
            ),
            _react2.default.createElement(
              _Button2.default,
              { fullWidth: true, variant: 'raised', size: 'large', className: classes.cyanBtn, type: 'button' },
              _react2.default.createElement(_People2.default, { className: (0, _classnames2.default)(classes.leftIcon, classes.iconSmall) }),
              'Socmed 3'
            )
          )
        )
      );
    }
  }]);

  return RegisterForm;
}(_react2.default.Component);

RegisterForm.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  handleSubmit: _propTypes2.default.func.isRequired,
  pristine: _propTypes2.default.bool.isRequired,
  submitting: _propTypes2.default.bool.isRequired
};

var RegisterFormReduxed = (0, _immutable.reduxForm)({
  form: 'immutableExample',
  enableReinitialize: true
})(RegisterForm);

var _default = (0, _styles.withStyles)(_userJss2.default)(RegisterFormReduxed);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(required, 'required', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Forms/RegisterForm.js');

  __REACT_HOT_LOADER__.register(email, 'email', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Forms/RegisterForm.js');

  __REACT_HOT_LOADER__.register(passwordsMatch, 'passwordsMatch', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Forms/RegisterForm.js');

  __REACT_HOT_LOADER__.register(RegisterForm, 'RegisterForm', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Forms/RegisterForm.js');

  __REACT_HOT_LOADER__.register(RegisterFormReduxed, 'RegisterFormReduxed', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Forms/RegisterForm.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Forms/RegisterForm.js');
}();

;

/***/ }),
/* 233 */
/*!*****************************************!*\
  !*** external "@material-ui/core/Tabs" ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),
/* 234 */
/*!****************************************!*\
  !*** external "@material-ui/core/Tab" ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),
/* 235 */
/*!****************************************************!*\
  !*** ./src/app/components/Badges/LimitedBadges.js ***!
  \****************************************************/
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

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Badge = __webpack_require__(/*! @material-ui/core/Badge */ 61);

var _Badge2 = _interopRequireDefault(_Badge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LimitedBadges = function (_PureComponent) {
  _inherits(LimitedBadges, _PureComponent);

  function LimitedBadges() {
    _classCallCheck(this, LimitedBadges);

    return _possibleConstructorReturn(this, (LimitedBadges.__proto__ || Object.getPrototypeOf(LimitedBadges)).apply(this, arguments));
  }

  _createClass(LimitedBadges, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          limit = _props.limit,
          value = _props.value,
          rest = _objectWithoutProperties(_props, ['children', 'limit', 'value']);

      return _react2.default.createElement(
        _Badge2.default,
        _extends({ badgeContent: value > limit ? limit + '+' : value }, rest),
        children
      );
    }
  }]);

  return LimitedBadges;
}(_react.PureComponent);

LimitedBadges.propTypes = {
  children: _propTypes2.default.node.isRequired,
  value: _propTypes2.default.number.isRequired,
  limit: _propTypes2.default.number.isRequired
};

var _default = LimitedBadges;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LimitedBadges, 'LimitedBadges', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Badges/LimitedBadges.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Badges/LimitedBadges.js');
}();

;

/***/ }),
/* 236 */
/*!*******************************************!*\
  !*** ./src/app/components/Quote/Quote.js ***!
  \*******************************************/
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

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ 4);

var _Typography2 = _interopRequireDefault(_Typography);

var _classnames = __webpack_require__(/*! classnames */ 3);

var _classnames2 = _interopRequireDefault(_classnames);

var _blueGrey = __webpack_require__(/*! @material-ui/core/colors/blueGrey */ 105);

var _blueGrey2 = _interopRequireDefault(_blueGrey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  quoteWrap: {
    padding: '0 25',
    margin: 10,
    position: 'relative',
    '&:before': {
      color: _blueGrey2.default[100],
      fontSize: '4em',
      lineHeight: '.1em',
      marginRight: '.25em',
      verticalAlign: '-.4em'
    }
  },
  quoteLeft: {
    extend: 'quoteWrap',
    textAlign: 'left',
    borderLeft: '5px solid' + _blueGrey2.default[50],
    paddingLeft: 25,
    '&:before': {
      content: 'open-quote'
    }
  },
  quoteRight: {
    extend: 'quoteWrap',
    textAlign: 'right',
    borderRight: '5px solid' + _blueGrey2.default[50],
    paddingRight: 25,
    '&:before': {
      content: 'close-quote'
    }
  },
  quoteBody: {
    minHeight: 100,
    marginBottom: 20
  }
};

var Quote = function (_React$Component) {
  _inherits(Quote, _React$Component);

  function Quote() {
    _classCallCheck(this, Quote);

    return _possibleConstructorReturn(this, (Quote.__proto__ || Object.getPrototypeOf(Quote)).apply(this, arguments));
  }

  _createClass(Quote, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          align = _props.align,
          content = _props.content,
          footnote = _props.footnote,
          classes = _props.classes;

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(classes.quoteWrap, align === 'right' ? classes.quoteRight : classes.quoteLeft)
        },
        _react2.default.createElement(
          _Typography2.default,
          { variant: 'subheading', className: classes.quoteBody, gutterBottom: true },
          content
        ),
        _react2.default.createElement(
          _Typography2.default,
          { variant: 'caption' },
          footnote
        )
      );
    }
  }]);

  return Quote;
}(_react2.default.Component);

Quote.propTypes = {
  align: _propTypes2.default.string.isRequired,
  content: _propTypes2.default.string.isRequired,
  footnote: _propTypes2.default.string.isRequired,
  classes: _propTypes2.default.object.isRequired
};

var _default = (0, _styles.withStyles)(styles)(Quote);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Quote/Quote.js');

  __REACT_HOT_LOADER__.register(Quote, 'Quote', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Quote/Quote.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Quote/Quote.js');
}();

;

/***/ }),
/* 237 */
/*!*****************************************************!*\
  !*** ./src/app/components/CardPaper/ProfileCard.js ***!
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

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ 4);

var _Typography2 = _interopRequireDefault(_Typography);

var _Typography3 = __webpack_require__(/*! ../../styles/components/Typography.scss */ 51);

var _Typography4 = _interopRequireDefault(_Typography3);

var _Card = __webpack_require__(/*! @material-ui/core/Card */ 23);

var _Card2 = _interopRequireDefault(_Card);

var _CardMedia = __webpack_require__(/*! @material-ui/core/CardMedia */ 31);

var _CardMedia2 = _interopRequireDefault(_CardMedia);

var _CardContent = __webpack_require__(/*! @material-ui/core/CardContent */ 28);

var _CardContent2 = _interopRequireDefault(_CardContent);

var _CardActions = __webpack_require__(/*! @material-ui/core/CardActions */ 38);

var _CardActions2 = _interopRequireDefault(_CardActions);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ 9);

var _Button2 = _interopRequireDefault(_Button);

var _Avatar = __webpack_require__(/*! @material-ui/core/Avatar */ 20);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _VerifiedUser = __webpack_require__(/*! @material-ui/icons/VerifiedUser */ 238);

var _VerifiedUser2 = _interopRequireDefault(_VerifiedUser);

var _BottomNavigation = __webpack_require__(/*! @material-ui/core/BottomNavigation */ 106);

var _BottomNavigation2 = _interopRequireDefault(_BottomNavigation);

var _BottomNavigationAction = __webpack_require__(/*! @material-ui/core/BottomNavigationAction */ 107);

var _BottomNavigationAction2 = _interopRequireDefault(_BottomNavigationAction);

var _SupervisorAccount = __webpack_require__(/*! @material-ui/icons/SupervisorAccount */ 239);

var _SupervisorAccount2 = _interopRequireDefault(_SupervisorAccount);

var _Favorite = __webpack_require__(/*! @material-ui/icons/Favorite */ 74);

var _Favorite2 = _interopRequireDefault(_Favorite);

var _PhotoLibrary = __webpack_require__(/*! @material-ui/icons/PhotoLibrary */ 240);

var _PhotoLibrary2 = _interopRequireDefault(_PhotoLibrary);

var _Divider = __webpack_require__(/*! @material-ui/core/Divider */ 16);

var _Divider2 = _interopRequireDefault(_Divider);

var _cardStyleJss = __webpack_require__(/*! ./cardStyle-jss */ 29);

var _cardStyleJss2 = _interopRequireDefault(_cardStyleJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProfileCard = function (_React$Component) {
  _inherits(ProfileCard, _React$Component);

  function ProfileCard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ProfileCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProfileCard.__proto__ || Object.getPrototypeOf(ProfileCard)).call.apply(_ref, [this].concat(args))), _this), _this.state = { expanded: false }, _this.handleExpandClick = function () {
      var _this2;

      return (_this2 = _this).__handleExpandClick__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ProfileCard, [{
    key: '__handleExpandClick__REACT_HOT_LOADER__',
    value: function __handleExpandClick__REACT_HOT_LOADER__() {
      return this.__handleExpandClick__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleExpandClick__REACT_HOT_LOADER__',
    value: function __handleExpandClick__REACT_HOT_LOADER__() {
      this.setState({ expanded: !this.state.expanded });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          cover = _props.cover,
          avatar = _props.avatar,
          name = _props.name,
          title = _props.title,
          connection = _props.connection,
          isVerified = _props.isVerified,
          btnText = _props.btnText;


      return _react2.default.createElement(
        _Card2.default,
        { className: classes.cardSocmed },
        _react2.default.createElement(_CardMedia2.default, {
          className: classes.mediaProfile,
          image: cover,
          title: 'cover'
        }),
        _react2.default.createElement(
          _CardContent2.default,
          { className: classes.contentProfile },
          _react2.default.createElement(_Avatar2.default, { alt: 'avatar', src: avatar, className: classes.avatarBig }),
          _react2.default.createElement(
            _Typography2.default,
            { variant: 'title', className: classes.name, gutterBottom: true },
            name,
            isVerified && _react2.default.createElement(_VerifiedUser2.default, { className: classes.verified })
          ),
          _react2.default.createElement(
            _Typography2.default,
            { className: classes.subheading, gutterBottom: true },
            _react2.default.createElement(
              'span',
              { className: _Typography4.default.regular },
              title
            )
          ),
          _react2.default.createElement(
            _Typography2.default,
            { variant: 'caption', component: 'p' },
            connection,
            ' connection'
          ),
          _react2.default.createElement(
            _Button2.default,
            { className: classes.buttonProfile, size: 'large', variant: 'outlined', color: 'secondary' },
            btnText
          )
        ),
        _react2.default.createElement(_Divider2.default, null),
        _react2.default.createElement(
          _CardActions2.default,
          null,
          _react2.default.createElement(
            _BottomNavigation2.default,
            {
              showLabels: true,
              className: classes.bottomLink
            },
            _react2.default.createElement(_BottomNavigationAction2.default, { label: '20 Connection', icon: _react2.default.createElement(_SupervisorAccount2.default, null) }),
            _react2.default.createElement(_BottomNavigationAction2.default, { label: '10 Favorites', icon: _react2.default.createElement(_Favorite2.default, null) }),
            _react2.default.createElement(_BottomNavigationAction2.default, { label: '5 Albums', icon: _react2.default.createElement(_PhotoLibrary2.default, null) })
          )
        )
      );
    }
  }]);

  return ProfileCard;
}(_react2.default.Component);

ProfileCard.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  cover: _propTypes2.default.string.isRequired,
  avatar: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string.isRequired,
  connection: _propTypes2.default.number.isRequired,
  btnText: _propTypes2.default.string.isRequired,
  isVerified: _propTypes2.default.bool
};

ProfileCard.defaultProps = {
  isVerified: false
};

var _default = (0, _styles.withStyles)(_cardStyleJss2.default)(ProfileCard);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ProfileCard, 'ProfileCard', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/CardPaper/ProfileCard.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/CardPaper/ProfileCard.js');
}();

;

/***/ }),
/* 238 */
/*!**************************************************!*\
  !*** external "@material-ui/icons/VerifiedUser" ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VerifiedUser");

/***/ }),
/* 239 */
/*!*******************************************************!*\
  !*** external "@material-ui/icons/SupervisorAccount" ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SupervisorAccount");

/***/ }),
/* 240 */
/*!**************************************************!*\
  !*** external "@material-ui/icons/PhotoLibrary" ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PhotoLibrary");

/***/ }),
/* 241 */
/*!*****************************************************!*\
  !*** ./src/app/components/CardPaper/GeneralCard.js ***!
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

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Card = __webpack_require__(/*! @material-ui/core/Card */ 23);

var _Card2 = _interopRequireDefault(_Card);

var _CardActions = __webpack_require__(/*! @material-ui/core/CardActions */ 38);

var _CardActions2 = _interopRequireDefault(_CardActions);

var _CardContent = __webpack_require__(/*! @material-ui/core/CardContent */ 28);

var _CardContent2 = _interopRequireDefault(_CardContent);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ 5);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Favorite = __webpack_require__(/*! @material-ui/icons/Favorite */ 74);

var _Favorite2 = _interopRequireDefault(_Favorite);

var _Share = __webpack_require__(/*! @material-ui/icons/Share */ 109);

var _Share2 = _interopRequireDefault(_Share);

var _Comment = __webpack_require__(/*! @material-ui/icons/Comment */ 110);

var _Comment2 = _interopRequireDefault(_Comment);

var _cardStyleJss = __webpack_require__(/*! ./cardStyle-jss */ 29);

var _cardStyleJss2 = _interopRequireDefault(_cardStyleJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GeneralCard = function (_React$Component) {
  _inherits(GeneralCard, _React$Component);

  function GeneralCard() {
    _classCallCheck(this, GeneralCard);

    return _possibleConstructorReturn(this, (GeneralCard.__proto__ || Object.getPrototypeOf(GeneralCard)).apply(this, arguments));
  }

  _createClass(GeneralCard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          children = _props.children,
          liked = _props.liked,
          shared = _props.shared,
          commented = _props.commented;

      return _react2.default.createElement(
        _Card2.default,
        { className: classes.card },
        _react2.default.createElement(
          _CardContent2.default,
          null,
          children
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

  return GeneralCard;
}(_react2.default.Component);

GeneralCard.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.node.isRequired,
  liked: _propTypes2.default.number.isRequired,
  shared: _propTypes2.default.number.isRequired,
  commented: _propTypes2.default.number.isRequired
};

var _default = (0, _styles.withStyles)(_cardStyleJss2.default)(GeneralCard);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(GeneralCard, 'GeneralCard', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/CardPaper/GeneralCard.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/CardPaper/GeneralCard.js');
}();

;

/***/ }),
/* 242 */
/*!**************************************************!*\
  !*** ./src/app/components/CardPaper/NewsCard.js ***!
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

var _Card = __webpack_require__(/*! @material-ui/core/Card */ 23);

var _Card2 = _interopRequireDefault(_Card);

var _CardMedia = __webpack_require__(/*! @material-ui/core/CardMedia */ 31);

var _CardMedia2 = _interopRequireDefault(_CardMedia);

var _CardActions = __webpack_require__(/*! @material-ui/core/CardActions */ 38);

var _CardActions2 = _interopRequireDefault(_CardActions);

var _CardContent = __webpack_require__(/*! @material-ui/core/CardContent */ 28);

var _CardContent2 = _interopRequireDefault(_CardContent);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ 9);

var _Button2 = _interopRequireDefault(_Button);

var _cardStyleJss = __webpack_require__(/*! ./cardStyle-jss */ 29);

var _cardStyleJss2 = _interopRequireDefault(_cardStyleJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewsCard = function (_React$Component) {
  _inherits(NewsCard, _React$Component);

  function NewsCard() {
    _classCallCheck(this, NewsCard);

    return _possibleConstructorReturn(this, (NewsCard.__proto__ || Object.getPrototypeOf(NewsCard)).apply(this, arguments));
  }

  _createClass(NewsCard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          children = _props.children,
          title = _props.title,
          image = _props.image;

      return _react2.default.createElement(
        _Card2.default,
        { className: classes.cardMedia },
        _react2.default.createElement(_CardMedia2.default, {
          className: classes.media,
          image: image,
          title: title
        }),
        _react2.default.createElement(
          _CardContent2.default,
          null,
          children
        ),
        _react2.default.createElement(
          _CardActions2.default,
          null,
          _react2.default.createElement(
            _Button2.default,
            { size: 'small', color: 'primary' },
            'Share'
          ),
          _react2.default.createElement(
            _Button2.default,
            { size: 'small', color: 'primary' },
            'Learn More'
          )
        )
      );
    }
  }]);

  return NewsCard;
}(_react2.default.Component);

NewsCard.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.node.isRequired,
  title: _propTypes2.default.string.isRequired,
  image: _propTypes2.default.string.isRequired
};

var _default = (0, _styles.withStyles)(_cardStyleJss2.default)(NewsCard);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(NewsCard, 'NewsCard', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/CardPaper/NewsCard.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/CardPaper/NewsCard.js');
}();

;

/***/ }),
/* 243 */
/*!****************************************************!*\
  !*** ./src/app/components/CardPaper/PlayerCard.js ***!
  \****************************************************/
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

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ 4);

var _Typography2 = _interopRequireDefault(_Typography);

var _Card = __webpack_require__(/*! @material-ui/core/Card */ 23);

var _Card2 = _interopRequireDefault(_Card);

var _CardMedia = __webpack_require__(/*! @material-ui/core/CardMedia */ 31);

var _CardMedia2 = _interopRequireDefault(_CardMedia);

var _CardContent = __webpack_require__(/*! @material-ui/core/CardContent */ 28);

var _CardContent2 = _interopRequireDefault(_CardContent);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ 5);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _SkipPrevious = __webpack_require__(/*! @material-ui/icons/SkipPrevious */ 244);

var _SkipPrevious2 = _interopRequireDefault(_SkipPrevious);

var _PlayArrow = __webpack_require__(/*! @material-ui/icons/PlayArrow */ 111);

var _PlayArrow2 = _interopRequireDefault(_PlayArrow);

var _SkipNext = __webpack_require__(/*! @material-ui/icons/SkipNext */ 245);

var _SkipNext2 = _interopRequireDefault(_SkipNext);

var _cardStyleJss = __webpack_require__(/*! ./cardStyle-jss */ 29);

var _cardStyleJss2 = _interopRequireDefault(_cardStyleJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayerCard = function (_React$Component) {
  _inherits(PlayerCard, _React$Component);

  function PlayerCard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PlayerCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PlayerCard.__proto__ || Object.getPrototypeOf(PlayerCard)).call.apply(_ref, [this].concat(args))), _this), _this.state = { expanded: false }, _this.handleExpandClick = function () {
      var _this2;

      return (_this2 = _this).__handleExpandClick__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PlayerCard, [{
    key: '__handleExpandClick__REACT_HOT_LOADER__',
    value: function __handleExpandClick__REACT_HOT_LOADER__() {
      return this.__handleExpandClick__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleExpandClick__REACT_HOT_LOADER__',
    value: function __handleExpandClick__REACT_HOT_LOADER__() {
      this.setState({ expanded: !this.state.expanded });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          theme = _props.theme,
          title = _props.title,
          artist = _props.artist,
          cover = _props.cover;


      return _react2.default.createElement(
        _Card2.default,
        { className: classes.cardPlayer },
        _react2.default.createElement(
          'div',
          { className: classes.details },
          _react2.default.createElement(
            _CardContent2.default,
            { className: classes.content },
            _react2.default.createElement(
              _Typography2.default,
              { variant: 'headline' },
              title
            ),
            _react2.default.createElement(
              _Typography2.default,
              { variant: 'subheading', color: 'textSecondary' },
              artist
            )
          ),
          _react2.default.createElement(
            'div',
            { className: classes.controls },
            _react2.default.createElement(
              _IconButton2.default,
              { 'aria-label': 'Previous' },
              theme.direction === 'rtl' ? _react2.default.createElement(_SkipNext2.default, null) : _react2.default.createElement(_SkipPrevious2.default, null)
            ),
            _react2.default.createElement(
              _IconButton2.default,
              { 'aria-label': 'Play/pause' },
              _react2.default.createElement(_PlayArrow2.default, { className: classes.playIcon })
            ),
            _react2.default.createElement(
              _IconButton2.default,
              { 'aria-label': 'Next' },
              theme.direction === 'rtl' ? _react2.default.createElement(_SkipPrevious2.default, null) : _react2.default.createElement(_SkipNext2.default, null)
            )
          )
        ),
        _react2.default.createElement(_CardMedia2.default, {
          className: classes.cover,
          image: cover,
          title: title
        })
      );
    }
  }]);

  return PlayerCard;
}(_react2.default.Component);

PlayerCard.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  theme: _propTypes2.default.object.isRequired,
  title: _propTypes2.default.string.isRequired,
  artist: _propTypes2.default.string.isRequired,
  cover: _propTypes2.default.string.isRequired
};

var _default = (0, _styles.withStyles)(_cardStyleJss2.default, { withTheme: true })(PlayerCard);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PlayerCard, 'PlayerCard', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/CardPaper/PlayerCard.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/CardPaper/PlayerCard.js');
}();

;

/***/ }),
/* 244 */
/*!**************************************************!*\
  !*** external "@material-ui/icons/SkipPrevious" ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SkipPrevious");

/***/ }),
/* 245 */
/*!**********************************************!*\
  !*** external "@material-ui/icons/SkipNext" ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SkipNext");

/***/ }),
/* 246 */
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

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ 4);

var _Typography2 = _interopRequireDefault(_Typography);

var _Card = __webpack_require__(/*! @material-ui/core/Card */ 23);

var _Card2 = _interopRequireDefault(_Card);

var _Menu = __webpack_require__(/*! @material-ui/core/Menu */ 32);

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = __webpack_require__(/*! @material-ui/core/MenuItem */ 33);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _CardHeader = __webpack_require__(/*! @material-ui/core/CardHeader */ 112);

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardMedia = __webpack_require__(/*! @material-ui/core/CardMedia */ 31);

var _CardMedia2 = _interopRequireDefault(_CardMedia);

var _CardContent = __webpack_require__(/*! @material-ui/core/CardContent */ 28);

var _CardContent2 = _interopRequireDefault(_CardContent);

var _CardActions = __webpack_require__(/*! @material-ui/core/CardActions */ 38);

var _CardActions2 = _interopRequireDefault(_CardActions);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ 5);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Avatar = __webpack_require__(/*! @material-ui/core/Avatar */ 20);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Favorite = __webpack_require__(/*! @material-ui/icons/Favorite */ 74);

var _Favorite2 = _interopRequireDefault(_Favorite);

var _Share = __webpack_require__(/*! @material-ui/icons/Share */ 109);

var _Share2 = _interopRequireDefault(_Share);

var _Comment = __webpack_require__(/*! @material-ui/icons/Comment */ 110);

var _Comment2 = _interopRequireDefault(_Comment);

var _MoreVert = __webpack_require__(/*! @material-ui/icons/MoreVert */ 55);

var _MoreVert2 = _interopRequireDefault(_MoreVert);

var _cardStyleJss = __webpack_require__(/*! ./cardStyle-jss */ 29);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PostCard.__proto__ || Object.getPrototypeOf(PostCard)).call.apply(_ref, [this].concat(args))), _this), _this.state = { anchorElOpt: null }, _this.handleClickOpt = function () {
      var _this2;

      return (_this2 = _this).__handleClickOpt__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleCloseOpt = function () {
      var _this3;

      return (_this3 = _this).__handleCloseOpt__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PostCard, [{
    key: '__handleCloseOpt__REACT_HOT_LOADER__',
    value: function __handleCloseOpt__REACT_HOT_LOADER__() {
      return this.__handleCloseOpt__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleClickOpt__REACT_HOT_LOADER__',
    value: function __handleClickOpt__REACT_HOT_LOADER__() {
      return this.__handleClickOpt__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleClickOpt__REACT_HOT_LOADER__',
    value: function __handleClickOpt__REACT_HOT_LOADER__(event) {
      this.setState({ anchorElOpt: event.currentTarget });
    }
  }, {
    key: '__handleCloseOpt__REACT_HOT_LOADER__',
    value: function __handleCloseOpt__REACT_HOT_LOADER__() {
      this.setState({ anchorElOpt: null });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

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
              { key: option, selected: option === 'Edit Profile', onClick: _this4.handleCloseOpt },
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

var _default = (0, _styles.withStyles)(_cardStyleJss2.default)(PostCard);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(optionsOpt, 'optionsOpt', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/CardPaper/PostCard.js');

  __REACT_HOT_LOADER__.register(ITEM_HEIGHT, 'ITEM_HEIGHT', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/CardPaper/PostCard.js');

  __REACT_HOT_LOADER__.register(PostCard, 'PostCard', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/CardPaper/PostCard.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/CardPaper/PostCard.js');
}();

;

/***/ }),
/* 247 */
/*!*****************************************************!*\
  !*** ./src/app/components/CardPaper/ProductCard.js ***!
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

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ 4);

var _Typography2 = _interopRequireDefault(_Typography);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _withWidth = __webpack_require__(/*! @material-ui/core/withWidth */ 113);

var _withWidth2 = _interopRequireDefault(_withWidth);

var _classnames = __webpack_require__(/*! classnames */ 3);

var _classnames2 = _interopRequireDefault(_classnames);

var _Card = __webpack_require__(/*! @material-ui/core/Card */ 23);

var _Card2 = _interopRequireDefault(_Card);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ 5);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Tooltip = __webpack_require__(/*! @material-ui/core/Tooltip */ 27);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _CardMedia = __webpack_require__(/*! @material-ui/core/CardMedia */ 31);

var _CardMedia2 = _interopRequireDefault(_CardMedia);

var _CardActions = __webpack_require__(/*! @material-ui/core/CardActions */ 38);

var _CardActions2 = _interopRequireDefault(_CardActions);

var _CardContent = __webpack_require__(/*! @material-ui/core/CardContent */ 28);

var _CardContent2 = _interopRequireDefault(_CardContent);

var _Chip = __webpack_require__(/*! @material-ui/core/Chip */ 50);

var _Chip2 = _interopRequireDefault(_Chip);

var _AddShoppingCart = __webpack_require__(/*! @material-ui/icons/AddShoppingCart */ 248);

var _AddShoppingCart2 = _interopRequireDefault(_AddShoppingCart);

var _Star = __webpack_require__(/*! @material-ui/icons/Star */ 47);

var _Star2 = _interopRequireDefault(_Star);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ 9);

var _Button2 = _interopRequireDefault(_Button);

var _Typography3 = __webpack_require__(/*! ../../styles/components/Typography.scss */ 51);

var _Typography4 = _interopRequireDefault(_Typography3);

var _cardStyleJss = __webpack_require__(/*! ./cardStyle-jss */ 29);

var _cardStyleJss2 = _interopRequireDefault(_cardStyleJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductCard = function (_React$Component) {
  _inherits(ProductCard, _React$Component);

  function ProductCard() {
    _classCallCheck(this, ProductCard);

    return _possibleConstructorReturn(this, (ProductCard.__proto__ || Object.getPrototypeOf(ProductCard)).apply(this, arguments));
  }

  _createClass(ProductCard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          discount = _props.discount,
          soldout = _props.soldout,
          thumbnail = _props.thumbnail,
          name = _props.name,
          desc = _props.desc,
          ratting = _props.ratting,
          price = _props.price,
          prevPrice = _props.prevPrice,
          list = _props.list,
          detailOpen = _props.detailOpen,
          addToCart = _props.addToCart,
          width = _props.width;

      return _react2.default.createElement(
        _Card2.default,
        { className: (0, _classnames2.default)(classes.cardProduct, (0, _withWidth.isWidthUp)('sm', width) && list ? classes.cardList : '') },
        _react2.default.createElement(
          'div',
          { className: classes.status },
          discount !== '' && _react2.default.createElement(_Chip2.default, { label: 'Discount ' + discount, className: classes.chipDiscount }),
          soldout && _react2.default.createElement(_Chip2.default, { label: 'Sold Out', className: classes.chipSold })
        ),
        _react2.default.createElement(_CardMedia2.default, {
          className: classes.mediaProduct,
          image: thumbnail,
          title: name
        }),
        _react2.default.createElement(
          _CardContent2.default,
          { className: classes.floatingButtonWrap },
          !soldout && _react2.default.createElement(
            _Tooltip2.default,
            { title: 'Add to cart', placement: 'top' },
            _react2.default.createElement(
              _Button2.default,
              { variant: 'fab', onClick: addToCart, mini: true, color: 'secondary', 'aria-label': 'add', className: classes.buttonAdd },
              _react2.default.createElement(_AddShoppingCart2.default, null)
            )
          ),
          _react2.default.createElement(
            _Typography2.default,
            { noWrap: true, gutterBottom: true, variant: 'headline', className: classes.title, component: 'h2' },
            name
          ),
          _react2.default.createElement(
            _Typography2.default,
            { component: 'p', className: classes.desc },
            desc
          ),
          _react2.default.createElement(
            'div',
            { className: classes.ratting },
            ratting,
            ' ',
            _react2.default.createElement(_Star2.default, { className: classes.star })
          )
        ),
        _react2.default.createElement(
          _CardActions2.default,
          { className: classes.price },
          _react2.default.createElement(
            _Typography2.default,
            { variant: 'headline' },
            _react2.default.createElement(
              'span',
              null,
              '$',
              price
            )
          ),
          prevPrice > 0 && _react2.default.createElement(
            _Typography2.default,
            { variant: 'caption', component: 'h5' },
            _react2.default.createElement(
              'span',
              { className: _Typography4.default.lineThrought },
              '$',
              prevPrice
            )
          ),
          _react2.default.createElement(
            'div',
            { className: classes.rightAction },
            _react2.default.createElement(
              _Button2.default,
              { size: 'small', variant: 'outlined', color: 'secondary', onClick: detailOpen },
              'See Detail'
            ),
            !soldout && _react2.default.createElement(
              _Tooltip2.default,
              { title: 'Add to cart', placement: 'top' },
              _react2.default.createElement(
                _IconButton2.default,
                { color: 'secondary', onClick: addToCart, className: classes.buttonAddList },
                _react2.default.createElement(_AddShoppingCart2.default, null)
              )
            )
          )
        )
      );
    }
  }]);

  return ProductCard;
}(_react2.default.Component);

ProductCard.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  discount: _propTypes2.default.string,
  width: _propTypes2.default.string.isRequired,
  soldout: _propTypes2.default.bool,
  thumbnail: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  desc: _propTypes2.default.string.isRequired,
  ratting: _propTypes2.default.number.isRequired,
  price: _propTypes2.default.number.isRequired,
  prevPrice: _propTypes2.default.number,
  list: _propTypes2.default.bool,
  detailOpen: _propTypes2.default.func,
  addToCart: _propTypes2.default.func
};

ProductCard.defaultProps = {
  discount: '',
  soldout: false,
  prevPrice: 0,
  list: false,
  detailOpen: function detailOpen() {
    return false;
  },
  addToCart: function addToCart() {
    return false;
  }
};

var ProductCardResponsive = (0, _withWidth2.default)()(ProductCard);

var _default = (0, _styles.withStyles)(_cardStyleJss2.default)(ProductCardResponsive);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ProductCard, 'ProductCard', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/CardPaper/ProductCard.js');

  __REACT_HOT_LOADER__.register(ProductCardResponsive, 'ProductCardResponsive', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/CardPaper/ProductCard.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/CardPaper/ProductCard.js');
}();

;

/***/ }),
/* 248 */
/*!*****************************************************!*\
  !*** external "@material-ui/icons/AddShoppingCart" ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AddShoppingCart");

/***/ }),
/* 249 */
/*!***************************************************!*\
  !*** ./src/app/components/CardPaper/VideoCard.js ***!
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

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Card = __webpack_require__(/*! @material-ui/core/Card */ 23);

var _Card2 = _interopRequireDefault(_Card);

var _CardHeader = __webpack_require__(/*! @material-ui/core/CardHeader */ 112);

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardMedia = __webpack_require__(/*! @material-ui/core/CardMedia */ 31);

var _CardMedia2 = _interopRequireDefault(_CardMedia);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ 5);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _PlayArrow = __webpack_require__(/*! @material-ui/icons/PlayArrow */ 111);

var _PlayArrow2 = _interopRequireDefault(_PlayArrow);

var _Avatar = __webpack_require__(/*! @material-ui/core/Avatar */ 20);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _red = __webpack_require__(/*! @material-ui/core/colors/red */ 49);

var _red2 = _interopRequireDefault(_red);

var _MoreVert = __webpack_require__(/*! @material-ui/icons/MoreVert */ 55);

var _MoreVert2 = _interopRequireDefault(_MoreVert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    playIcon: {
      height: 38,
      width: 38
    },
    cardSocmed: {
      maxWidth: 400
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
      position: 'relative'
    },
    avatar: {
      backgroundColor: _red2.default[500]
    },
    playBtn: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: 64,
      height: 64,
      transform: 'translate(-50%, -50%)',
      '& svg': {
        color: theme.palette.common.white,
        fontSize: 64
      }
    }
  };
};

var VideoCard = function (_React$Component) {
  _inherits(VideoCard, _React$Component);

  function VideoCard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, VideoCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = VideoCard.__proto__ || Object.getPrototypeOf(VideoCard)).call.apply(_ref, [this].concat(args))), _this), _this.state = { expanded: false }, _this.handleExpandClick = function () {
      var _this2;

      return (_this2 = _this).__handleExpandClick__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(VideoCard, [{
    key: '__handleExpandClick__REACT_HOT_LOADER__',
    value: function __handleExpandClick__REACT_HOT_LOADER__() {
      return this.__handleExpandClick__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleExpandClick__REACT_HOT_LOADER__',
    value: function __handleExpandClick__REACT_HOT_LOADER__() {
      this.setState({ expanded: !this.state.expanded });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          title = _props.title,
          cover = _props.cover,
          date = _props.date;


      return _react2.default.createElement(
        _Card2.default,
        { className: classes.cardSocmed },
        _react2.default.createElement(
          _CardMedia2.default,
          {
            className: classes.media,
            image: cover,
            title: title
          },
          _react2.default.createElement(
            _IconButton2.default,
            { className: classes.playBtn },
            _react2.default.createElement(_PlayArrow2.default, null)
          )
        ),
        _react2.default.createElement(_CardHeader2.default, {
          avatar: _react2.default.createElement(
            _Avatar2.default,
            { 'aria-label': 'Recipe', className: classes.avatar },
            'R'
          ),
          action: _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(_MoreVert2.default, null)
          ),
          title: title,
          subheader: date
        })
      );
    }
  }]);

  return VideoCard;
}(_react2.default.Component);

VideoCard.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  title: _propTypes2.default.string.isRequired,
  cover: _propTypes2.default.string.isRequired,
  date: _propTypes2.default.string.isRequired
};

var _default = (0, _styles.withStyles)(styles)(VideoCard);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/CardPaper/VideoCard.js');

  __REACT_HOT_LOADER__.register(VideoCard, 'VideoCard', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/CardPaper/VideoCard.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/CardPaper/VideoCard.js');
}();

;

/***/ }),
/* 250 */
/*!******************************************************!*\
  !*** ./src/app/components/CardPaper/IdentityCard.js ***!
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

var _Card = __webpack_require__(/*! @material-ui/core/Card */ 23);

var _Card2 = _interopRequireDefault(_Card);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ 4);

var _Typography2 = _interopRequireDefault(_Typography);

var _CardContent = __webpack_require__(/*! @material-ui/core/CardContent */ 28);

var _CardContent2 = _interopRequireDefault(_CardContent);

var _ListItem = __webpack_require__(/*! @material-ui/core/ListItem */ 30);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemText = __webpack_require__(/*! @material-ui/core/ListItemText */ 26);

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _Avatar = __webpack_require__(/*! @material-ui/core/Avatar */ 20);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Divider = __webpack_require__(/*! @material-ui/core/Divider */ 16);

var _Divider2 = _interopRequireDefault(_Divider);

var _LocalPhone = __webpack_require__(/*! @material-ui/icons/LocalPhone */ 75);

var _LocalPhone2 = _interopRequireDefault(_LocalPhone);

var _LocationOn = __webpack_require__(/*! @material-ui/icons/LocationOn */ 76);

var _LocationOn2 = _interopRequireDefault(_LocationOn);

var _cardStyleJss = __webpack_require__(/*! ./cardStyle-jss */ 29);

var _cardStyleJss2 = _interopRequireDefault(_cardStyleJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IdentityCard = function (_React$Component) {
  _inherits(IdentityCard, _React$Component);

  function IdentityCard() {
    _classCallCheck(this, IdentityCard);

    return _possibleConstructorReturn(this, (IdentityCard.__proto__ || Object.getPrototypeOf(IdentityCard)).apply(this, arguments));
  }

  _createClass(IdentityCard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          title = _props.title,
          name = _props.name,
          avatar = _props.avatar,
          phone = _props.phone,
          address = _props.address;

      return _react2.default.createElement(
        _Card2.default,
        { className: classes.card },
        _react2.default.createElement(
          _CardContent2.default,
          null,
          _react2.default.createElement(
            _Typography2.default,
            { variant: 'subheading' },
            title
          ),
          _react2.default.createElement(_Divider2.default, { className: classes.divider }),
          _react2.default.createElement(
            _ListItem2.default,
            null,
            _react2.default.createElement(_Avatar2.default, {
              alt: name,
              src: avatar,
              className: classes.avatar
            }),
            _react2.default.createElement(_ListItemText2.default, { primary: 'Name', secondary: name })
          ),
          _react2.default.createElement(
            _ListItem2.default,
            null,
            _react2.default.createElement(
              _Avatar2.default,
              null,
              _react2.default.createElement(_LocalPhone2.default, null)
            ),
            _react2.default.createElement(_ListItemText2.default, { primary: 'Phone', secondary: phone })
          ),
          _react2.default.createElement(
            _ListItem2.default,
            null,
            _react2.default.createElement(
              _Avatar2.default,
              null,
              _react2.default.createElement(_LocationOn2.default, null)
            ),
            _react2.default.createElement(_ListItemText2.default, { primary: 'Address', secondary: address })
          )
        )
      );
    }
  }]);

  return IdentityCard;
}(_react2.default.Component);

IdentityCard.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  title: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  avatar: _propTypes2.default.string.isRequired,
  phone: _propTypes2.default.string.isRequired,
  address: _propTypes2.default.string.isRequired
};

var _default = (0, _styles.withStyles)(_cardStyleJss2.default)(IdentityCard);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(IdentityCard, 'IdentityCard', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/CardPaper/IdentityCard.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/CardPaper/IdentityCard.js');
}();

;

/***/ }),
/* 251 */
/*!****************************************************!*\
  !*** ./src/app/components/Search/SearchProduct.js ***!
  \****************************************************/
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

var _AppBar = __webpack_require__(/*! @material-ui/core/AppBar */ 60);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = __webpack_require__(/*! @material-ui/core/Toolbar */ 13);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ 5);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Badge = __webpack_require__(/*! @material-ui/core/Badge */ 61);

var _Badge2 = _interopRequireDefault(_Badge);

var _ShoppingCart = __webpack_require__(/*! @material-ui/icons/ShoppingCart */ 114);

var _ShoppingCart2 = _interopRequireDefault(_ShoppingCart);

var _Search = __webpack_require__(/*! @material-ui/icons/Search */ 44);

var _Search2 = _interopRequireDefault(_Search);

var _Cart = __webpack_require__(/*! ./../Cart/Cart */ 115);

var _Cart2 = _interopRequireDefault(_Cart);

var _searchJss = __webpack_require__(/*! ./search-jss */ 255);

var _searchJss2 = _interopRequireDefault(_searchJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchProduct = function (_React$Component) {
  _inherits(SearchProduct, _React$Component);

  function SearchProduct() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchProduct);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchProduct.__proto__ || Object.getPrototypeOf(SearchProduct)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      anchorEl: null
    }, _this.handleClick = function () {
      var _this2;

      return (_this2 = _this).__handleClick__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleClose = function () {
      var _this3;

      return (_this3 = _this).__handleClose__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SearchProduct, [{
    key: '__handleClose__REACT_HOT_LOADER__',
    value: function __handleClose__REACT_HOT_LOADER__() {
      return this.__handleClose__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleClick__REACT_HOT_LOADER__',
    value: function __handleClick__REACT_HOT_LOADER__() {
      return this.__handleClick__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleClick__REACT_HOT_LOADER__',
    value: function __handleClick__REACT_HOT_LOADER__(event) {
      this.setState({ anchorEl: event.currentTarget });
    }
  }, {
    key: '__handleClose__REACT_HOT_LOADER__',
    value: function __handleClose__REACT_HOT_LOADER__() {
      this.setState({ anchorEl: null });
    }
  }, {
    key: 'render',
    value: function render() {
      var anchorEl = this.state.anchorEl;
      var _props = this.props,
          classes = _props.classes,
          dataCart = _props.dataCart,
          removeItem = _props.removeItem,
          checkout = _props.checkout,
          totalItems = _props.totalItems,
          totalPrice = _props.totalPrice,
          search = _props.search;

      return _react2.default.createElement(
        'div',
        { className: classes.root },
        _react2.default.createElement(
          _AppBar2.default,
          { position: 'static', color: 'inherit' },
          _react2.default.createElement(
            _Toolbar2.default,
            null,
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
                _react2.default.createElement('input', { className: classes.input, placeholder: 'Search Product', onChange: function onChange(event) {
                    return search(event);
                  } })
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                _IconButton2.default,
                {
                  color: 'inherit',
                  'aria-owns': anchorEl ? 'simple-menu' : null,
                  'aria-haspopup': 'true',
                  onClick: this.handleClick
                },
                _react2.default.createElement(
                  _Badge2.default,
                  { badgeContent: totalItems, color: 'secondary' },
                  _react2.default.createElement(_ShoppingCart2.default, null)
                )
              ),
              _react2.default.createElement(_Cart2.default, {
                anchorEl: anchorEl,
                dataCart: dataCart,
                close: this.handleClose,
                removeItem: removeItem,
                checkout: checkout,
                totalPrice: totalPrice
              })
            )
          )
        )
      );
    }
  }]);

  return SearchProduct;
}(_react2.default.Component);

SearchProduct.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  dataCart: _propTypes2.default.object.isRequired,
  removeItem: _propTypes2.default.func.isRequired,
  search: _propTypes2.default.func.isRequired,
  checkout: _propTypes2.default.func.isRequired,
  totalItems: _propTypes2.default.number.isRequired,
  totalPrice: _propTypes2.default.number.isRequired
};

var _default = (0, _styles.withStyles)(_searchJss2.default)(SearchProduct);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SearchProduct, 'SearchProduct', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Search/SearchProduct.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Search/SearchProduct.js');
}();

;

/***/ }),
/* 252 */
/*!**************************************************!*\
  !*** external "@material-ui/core/ListSubheader" ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListSubheader");

/***/ }),
/* 253 */
/*!************************************************************!*\
  !*** external "@material-ui/core/ListItemSecondaryAction" ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemSecondaryAction");

/***/ }),
/* 254 */
/*!*********************************************!*\
  !*** ./src/app/components/Cart/cart-jss.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  var _cartWrap;

  return {
    totalPrice: {
      background: theme.palette.grey[200],
      textAlign: 'right',
      display: 'block'
    },
    cartWrap: (_cartWrap = {}, _defineProperty(_cartWrap, theme.breakpoints.up('sm'), {
      width: 400
    }), _defineProperty(_cartWrap, '&:focus', {
      outline: 'none'
    }), _cartWrap),
    itemText: {
      marginRight: 30,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      width: 220
    },
    cartPanel: {
      '& figure': {
        width: 120,
        height: 70,
        overflow: 'hidden',
        '& img': {
          maxWidth: '100%'
        }
      }
    },
    empty: {
      textAlign: 'center',
      padding: 20
    }
  };
};

var _default = styles;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Cart/cart-jss.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Cart/cart-jss.js');
}();

;

/***/ }),
/* 255 */
/*!*************************************************!*\
  !*** ./src/app/components/Search/search-jss.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      marginTop: 20,
      marginBottom: 40
    },
    flex: {
      flex: 1
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    },
    wrapper: {
      fontFamily: theme.typography.fontFamily,
      position: 'relative',
      marginRight: theme.spacing.unit * 2,
      marginLeft: theme.spacing.unit,
      borderRadius: 2,
      display: 'block'
    },
    search: {
      width: 'auto',
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    input: {
      font: 'inherit',
      padding: theme.spacing.unit + 'px ' + theme.spacing.unit + 'px ' + theme.spacing.unit + 'px ' + theme.spacing.unit * 4 + 'px',
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
    }
  };
};

var _default = styles;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Search/search-jss.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Search/search-jss.js');
}();

;

/***/ }),
/* 256 */
/*!**********************************************!*\
  !*** external "@material-ui/icons/CallMade" ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CallMade");

/***/ }),
/* 257 */
/*!**************************************************!*\
  !*** external "@material-ui/icons/CallReceived" ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CallReceived");

/***/ }),
/* 258 */
/*!***********************************************!*\
  !*** ./src/app/components/Panel/panel-jss.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _colorManipulator = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ 63);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var expand = {
  bottom: 'auto',
  right: 'auto',
  left: '50%',
  top: '50%',
  transform: 'translateX(-50%) translateY(-50%)'
};

var styles = function styles(theme) {
  var _floatingForm;

  return {
    formTheme: {
      background: (0, _colorManipulator.darken)(theme.palette.primary.dark, 0.2),
      boxShadow: theme.shadows[7]
    },
    hideForm: {
      display: 'none'
    },
    showForm: {
      display: 'block'
    },
    btnOpt: {},
    expandButton: _defineProperty({}, theme.breakpoints.down('sm'), {
      display: 'none'
    }),
    floatingForm: (_floatingForm = {
      position: 'fixed',
      width: 500,
      bottom: 10,
      right: 10,
      zIndex: 1300,
      borderRadius: 3,
      overflow: 'hidden'
    }, _defineProperty(_floatingForm, theme.breakpoints.down('sm'), _extends({
      width: '95% !important'
    }, expand)), _defineProperty(_floatingForm, '& header', {
      color: theme.palette.common.white,
      padding: '15px 20px',
      '& $btnOpt': {
        position: 'absolute',
        right: 0,
        top: 0,
        '& > *': {
          margin: '0 5px'
        },
        '& $expandButton': {
          transform: 'rotate(270deg)'
        },
        '& svg': {
          fill: theme.palette.common.white
        }
      }
    }), _floatingForm),
    bodyForm: {
      position: 'relative',
      background: theme.palette.common.white,
      padding: '15px 30px',
      maxHeight: 450,
      overflow: 'auto'
    },
    buttonArea: {
      background: theme.palette.grey[100],
      position: 'relative',
      bottom: 0,
      left: 0,
      width: '100%',
      textAlign: 'right',
      padding: '10px 30px',
      '& button': {
        marginRight: 5
      }
    },
    expanded: _extends({}, expand),
    formOverlay: {
      position: 'fixed',
      background: theme.palette.grey[900],
      opacity: 0.7,
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      zIndex: 1300
    },
    large: {
      width: 650
    }
  };
};

var _default = styles;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(expand, 'expand', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Panel/panel-jss.js');

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Panel/panel-jss.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Panel/panel-jss.js');
}();

;

/***/ }),
/* 259 */
/*!**************************************************!*\
  !*** ./src/app/components/Contact/AddContact.js ***!
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

var _Tooltip = __webpack_require__(/*! @material-ui/core/Tooltip */ 27);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ 9);

var _Button2 = _interopRequireDefault(_Button);

var _Add = __webpack_require__(/*! @material-ui/icons/Add */ 52);

var _Add2 = _interopRequireDefault(_Add);

var _AddContactForm = __webpack_require__(/*! ./AddContactForm */ 260);

var _AddContactForm2 = _interopRequireDefault(_AddContactForm);

var _FloatingPanel = __webpack_require__(/*! ./../Panel/FloatingPanel */ 77);

var _FloatingPanel2 = _interopRequireDefault(_FloatingPanel);

var _contactJss = __webpack_require__(/*! ./contact-jss */ 39);

var _contactJss2 = _interopRequireDefault(_contactJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddContact = function (_React$Component) {
  _inherits(AddContact, _React$Component);

  function AddContact(props) {
    _classCallCheck(this, AddContact);

    var _this = _possibleConstructorReturn(this, (AddContact.__proto__ || Object.getPrototypeOf(AddContact)).call(this, props));

    _this.sendValues = function () {
      return _this.__sendValues__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      img: '',
      files: []
    };
    _this.onDrop = _this.onDrop.bind(_this);
    return _this;
  }

  _createClass(AddContact, [{
    key: '__sendValues__REACT_HOT_LOADER__',
    value: function __sendValues__REACT_HOT_LOADER__() {
      return this.__sendValues__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: 'onDrop',
    value: function onDrop(files) {
      var oldFiles = this.state.files;
      var filesLimit = 2;
      oldFiles = oldFiles.concat(files);
      if (oldFiles.length > filesLimit) {
        console.log('Cannot upload more than ' + filesLimit + ' items.');
      } else {
        this.setState({ img: files[0].preview || '/pic' + files[0].path });
      }
    }
  }, {
    key: '__sendValues__REACT_HOT_LOADER__',
    value: function __sendValues__REACT_HOT_LOADER__(values) {
      var _this2 = this;

      setTimeout(function () {
        _this2.props.submit(values, _this2.state.img);
        _this2.setState({ img: '' });
      }, 500);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          openForm = _props.openForm,
          closeForm = _props.closeForm,
          avatarInit = _props.avatarInit,
          addContact = _props.addContact;
      var img = this.state.img;

      var branch = '';
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Tooltip2.default,
          { title: 'Add New Contact' },
          _react2.default.createElement(
            _Button2.default,
            { variant: 'fab', color: 'secondary', onClick: function onClick() {
                return addContact();
              }, className: classes.addBtn },
            _react2.default.createElement(_Add2.default, null)
          )
        ),
        _react2.default.createElement(
          _FloatingPanel2.default,
          { openForm: openForm, branch: branch, closeForm: closeForm },
          _react2.default.createElement(_AddContactForm2.default, {
            onSubmit: this.sendValues,
            onDrop: this.onDrop,
            imgAvatar: img === '' ? avatarInit : img
          })
        )
      );
    }
  }]);

  return AddContact;
}(_react2.default.Component);

AddContact.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  submit: _propTypes2.default.func.isRequired,
  addContact: _propTypes2.default.func.isRequired,
  openForm: _propTypes2.default.bool.isRequired,
  avatarInit: _propTypes2.default.string.isRequired,
  closeForm: _propTypes2.default.func.isRequired
};

var _default = (0, _styles.withStyles)(_contactJss2.default)(AddContact);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AddContact, 'AddContact', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Contact/AddContact.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Contact/AddContact.js');
}();

;

/***/ }),
/* 260 */
/*!******************************************************!*\
  !*** ./src/app/components/Contact/AddContactForm.js ***!
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

var _Button = __webpack_require__(/*! @material-ui/core/Button */ 9);

var _Button2 = _interopRequireDefault(_Button);

var _reactRedux = __webpack_require__(/*! react-redux */ 12);

var _immutable = __webpack_require__(/*! redux-form/immutable */ 37);

var _reduxFormMaterialUi = __webpack_require__(/*! redux-form-material-ui */ 54);

var _InputAdornment = __webpack_require__(/*! @material-ui/core/InputAdornment */ 53);

var _InputAdornment2 = _interopRequireDefault(_InputAdornment);

var _PermContactCalendar = __webpack_require__(/*! @material-ui/icons/PermContactCalendar */ 78);

var _PermContactCalendar2 = _interopRequireDefault(_PermContactCalendar);

var _Bookmark = __webpack_require__(/*! @material-ui/icons/Bookmark */ 99);

var _Bookmark2 = _interopRequireDefault(_Bookmark);

var _LocalPhone = __webpack_require__(/*! @material-ui/icons/LocalPhone */ 75);

var _LocalPhone2 = _interopRequireDefault(_LocalPhone);

var _Email = __webpack_require__(/*! @material-ui/icons/Email */ 116);

var _Email2 = _interopRequireDefault(_Email);

var _Smartphone = __webpack_require__(/*! @material-ui/icons/Smartphone */ 117);

var _Smartphone2 = _interopRequireDefault(_Smartphone);

var _LocationOn = __webpack_require__(/*! @material-ui/icons/LocationOn */ 76);

var _LocationOn2 = _interopRequireDefault(_LocationOn);

var _Work = __webpack_require__(/*! @material-ui/icons/Work */ 118);

var _Work2 = _interopRequireDefault(_Work);

var _Language = __webpack_require__(/*! @material-ui/icons/Language */ 119);

var _Language2 = _interopRequireDefault(_Language);

var _Form = __webpack_require__(/*! ../../styles/components/Form.scss */ 120);

var _Form2 = _interopRequireDefault(_Form);

var _contactJss = __webpack_require__(/*! ./contact-jss */ 39);

var _contactJss2 = _interopRequireDefault(_contactJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// validation functions
var required = function required(value) {
  return value == null ? 'Required' : undefined;
};
var email = function email(value) {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email' : undefined;
};

var AddContactForm = function (_React$Component) {
  _inherits(AddContactForm, _React$Component);

  function AddContactForm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AddContactForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddContactForm.__proto__ || Object.getPrototypeOf(AddContactForm)).call.apply(_ref, [this].concat(args))), _this), _this.saveRef = function () {
      var _this2;

      return (_this2 = _this).__saveRef__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AddContactForm, [{
    key: '__saveRef__REACT_HOT_LOADER__',
    value: function __saveRef__REACT_HOT_LOADER__() {
      return this.__saveRef__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__saveRef__REACT_HOT_LOADER__',
    value: function __saveRef__REACT_HOT_LOADER__(ref) {
      this.ref = ref;
      return this.ref;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          reset = _props.reset,
          pristine = _props.pristine,
          submitting = _props.submitting,
          handleSubmit = _props.handleSubmit;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          { onSubmit: handleSubmit },
          _react2.default.createElement(
            'section',
            { className: _Form2.default.bodyForm },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_immutable.Field, {
                name: 'name',
                component: _reduxFormMaterialUi.TextField,
                placeholder: 'Name',
                label: 'Name',
                validate: required,
                required: true,
                ref: this.saveRef,
                withRef: true,
                className: classes.field,
                InputProps: {
                  startAdornment: _react2.default.createElement(
                    _InputAdornment2.default,
                    { position: 'start' },
                    _react2.default.createElement(_PermContactCalendar2.default, null)
                  )
                }
              })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_immutable.Field, {
                name: 'title',
                component: _reduxFormMaterialUi.TextField,
                placeholder: 'Title',
                label: 'Title',
                className: classes.field,
                InputProps: {
                  startAdornment: _react2.default.createElement(
                    _InputAdornment2.default,
                    { position: 'start' },
                    _react2.default.createElement(_Bookmark2.default, null)
                  )
                }
              })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_immutable.Field, {
                name: 'phone',
                component: _reduxFormMaterialUi.TextField,
                placeholder: 'Phone',
                type: 'tel',
                label: 'Phone',
                className: classes.field,
                InputProps: {
                  startAdornment: _react2.default.createElement(
                    _InputAdornment2.default,
                    { position: 'start' },
                    _react2.default.createElement(_LocalPhone2.default, null)
                  )
                }
              })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_immutable.Field, {
                name: 'secondaryPhone',
                component: _reduxFormMaterialUi.TextField,
                placeholder: 'Secondary Phone',
                type: 'tel',
                label: 'Secondary Phone',
                className: classes.field,
                InputProps: {
                  startAdornment: _react2.default.createElement(
                    _InputAdornment2.default,
                    { position: 'start' },
                    _react2.default.createElement(_Smartphone2.default, null)
                  )
                }
              })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_immutable.Field, {
                name: 'personalEmail',
                component: _reduxFormMaterialUi.TextField,
                placeholder: 'Personal Email',
                type: 'email',
                validate: email,
                label: 'Personal Email',
                className: classes.field,
                InputProps: {
                  startAdornment: _react2.default.createElement(
                    _InputAdornment2.default,
                    { position: 'start' },
                    _react2.default.createElement(_Email2.default, null)
                  )
                }
              })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_immutable.Field, {
                name: 'companyEmail',
                component: _reduxFormMaterialUi.TextField,
                placeholder: 'Company Email',
                type: 'email',
                validate: email,
                label: 'Company Email',
                className: classes.field,
                InputProps: {
                  startAdornment: _react2.default.createElement(
                    _InputAdornment2.default,
                    { position: 'start' },
                    _react2.default.createElement(_Work2.default, null)
                  )
                }
              })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_immutable.Field, {
                name: 'address',
                component: _reduxFormMaterialUi.TextField,
                placeholder: 'Address',
                label: 'Address',
                className: classes.field,
                InputProps: {
                  startAdornment: _react2.default.createElement(
                    _InputAdornment2.default,
                    { position: 'start' },
                    _react2.default.createElement(_LocationOn2.default, null)
                  )
                }
              })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_immutable.Field, {
                name: 'website',
                component: _reduxFormMaterialUi.TextField,
                placeholder: 'Website',
                type: 'url',
                label: 'Website',
                className: classes.field,
                InputProps: {
                  startAdornment: _react2.default.createElement(
                    _InputAdornment2.default,
                    { position: 'start' },
                    _react2.default.createElement(_Language2.default, null)
                  )
                }
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _Form2.default.buttonArea },
            _react2.default.createElement(
              _Button2.default,
              { variant: 'raised', color: 'secondary', type: 'submit', disabled: submitting },
              'Submit'
            ),
            _react2.default.createElement(
              _Button2.default,
              {
                type: 'button',
                disabled: pristine || submitting,
                onClick: reset
              },
              'Reset'
            )
          )
        )
      );
    }
  }]);

  return AddContactForm;
}(_react2.default.Component);

AddContactForm.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  handleSubmit: _propTypes2.default.func.isRequired,
  reset: _propTypes2.default.func.isRequired,
  pristine: _propTypes2.default.bool.isRequired,
  submitting: _propTypes2.default.bool.isRequired
};

var AddContactFormRedux = (0, _immutable.reduxForm)({
  form: 'immutableAddContact',
  enableReinitialize: true
})(AddContactForm);

var AddContactInit = (0, _reactRedux.connect)(function (state) {
  return {
    initialValues: state.getIn(['contact', 'formValues'])
  };
})(AddContactFormRedux);

var _default = (0, _styles.withStyles)(_contactJss2.default)(AddContactInit);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(required, 'required', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Contact/AddContactForm.js');

  __REACT_HOT_LOADER__.register(email, 'email', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Contact/AddContactForm.js');

  __REACT_HOT_LOADER__.register(AddContactForm, 'AddContactForm', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Contact/AddContactForm.js');

  __REACT_HOT_LOADER__.register(AddContactFormRedux, 'AddContactFormRedux', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Contact/AddContactForm.js');

  __REACT_HOT_LOADER__.register(AddContactInit, 'AddContactInit', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Contact/AddContactForm.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Contact/AddContactForm.js');
}();

;

/***/ }),
/* 261 */
/*!*************************************************!*\
  !*** external "@material-ui/core/colors/amber" ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/amber");

/***/ }),
/* 262 */
/*!************************************************!*\
  !*** external "@material-ui/core/colors/teal" ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/teal");

/***/ }),
/* 263 */
/*!*************************************************!*\
  !*** external "@material-ui/core/colors/brown" ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/brown");

/***/ }),
/* 264 */
/*!***************************************************!*\
  !*** ./src/app/components/Contact/ContactList.js ***!
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

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Drawer = __webpack_require__(/*! @material-ui/core/Drawer */ 86);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _classnames = __webpack_require__(/*! classnames */ 3);

var _classnames2 = _interopRequireDefault(_classnames);

var _Divider = __webpack_require__(/*! @material-ui/core/Divider */ 16);

var _Divider2 = _interopRequireDefault(_Divider);

var _List = __webpack_require__(/*! @material-ui/core/List */ 34);

var _List2 = _interopRequireDefault(_List);

var _ListItem = __webpack_require__(/*! @material-ui/core/ListItem */ 30);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemText = __webpack_require__(/*! @material-ui/core/ListItemText */ 26);

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _Avatar = __webpack_require__(/*! @material-ui/core/Avatar */ 20);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _BottomNavigation = __webpack_require__(/*! @material-ui/core/BottomNavigation */ 106);

var _BottomNavigation2 = _interopRequireDefault(_BottomNavigation);

var _BottomNavigationAction = __webpack_require__(/*! @material-ui/core/BottomNavigationAction */ 107);

var _BottomNavigationAction2 = _interopRequireDefault(_BottomNavigationAction);

var _Search = __webpack_require__(/*! @material-ui/icons/Search */ 44);

var _Search2 = _interopRequireDefault(_Search);

var _PermContactCalendar = __webpack_require__(/*! @material-ui/icons/PermContactCalendar */ 78);

var _PermContactCalendar2 = _interopRequireDefault(_PermContactCalendar);

var _Star = __webpack_require__(/*! @material-ui/icons/Star */ 47);

var _Star2 = _interopRequireDefault(_Star);

var _contactJss = __webpack_require__(/*! ./contact-jss */ 39);

var _contactJss2 = _interopRequireDefault(_contactJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactList = function (_React$Component) {
  _inherits(ContactList, _React$Component);

  function ContactList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ContactList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ContactList.__proto__ || Object.getPrototypeOf(ContactList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      filter: 'all'
    }, _this.handleChange = function () {
      var _this2;

      return (_this2 = _this).__handleChange__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ContactList, [{
    key: '__handleChange__REACT_HOT_LOADER__',
    value: function __handleChange__REACT_HOT_LOADER__() {
      return this.__handleChange__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleChange__REACT_HOT_LOADER__',
    value: function __handleChange__REACT_HOT_LOADER__(event, value) {
      this.setState({ filter: value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          dataContact = _props.dataContact,
          itemSelected = _props.itemSelected,
          showDetail = _props.showDetail,
          search = _props.search,
          keyword = _props.keyword,
          clippedRight = _props.clippedRight;
      var filter = this.state.filter;

      var favoriteData = dataContact.filter(function (item) {
        return item.get('favorited') === true;
      });
      var getItem = function getItem(dataArray) {
        return dataArray.map(function (data, index) {
          if (data.get('name').toLowerCase().indexOf(keyword) === -1) {
            return false;
          }
          return _react2.default.createElement(
            _ListItem2.default,
            {
              button: true,
              key: data.get('id'),
              className: index === itemSelected ? classes.selected : '',
              onClick: function onClick() {
                return showDetail(data);
              }
            },
            _react2.default.createElement(_Avatar2.default, { alt: data.get('name'), src: data.get('avatar'), className: classes.avatar }),
            _react2.default.createElement(_ListItemText2.default, { primary: data.get('name'), secondary: data.get('title') })
          );
        });
      };
      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          _Drawer2.default,
          {
            variant: 'permanent',
            anchor: 'left',
            open: true,
            classes: {
              paper: classes.drawerPaper
            }
          },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              { className: (0, _classnames2.default)(classes.toolbar, clippedRight && classes.clippedRight) },
              _react2.default.createElement(
                'div',
                { className: classes.flex },
                _react2.default.createElement(
                  'div',
                  { className: classes.searchWrapper },
                  _react2.default.createElement(
                    'div',
                    { className: classes.search },
                    _react2.default.createElement(_Search2.default, null)
                  ),
                  _react2.default.createElement('input', { className: classes.input, onChange: function onChange(event) {
                      return search(event);
                    }, placeholder: 'Search Contact' })
                )
              )
            ),
            _react2.default.createElement(_Divider2.default, null),
            _react2.default.createElement(
              _List2.default,
              null,
              filter === 'all' ? getItem(dataContact) : getItem(favoriteData)
            )
          )
        ),
        _react2.default.createElement(
          _BottomNavigation2.default,
          { value: filter, onChange: this.handleChange, className: classes.bottomFilter },
          _react2.default.createElement(_BottomNavigationAction2.default, { label: 'All', value: 'all', icon: _react2.default.createElement(_PermContactCalendar2.default, null) }),
          _react2.default.createElement(_BottomNavigationAction2.default, { label: 'Favorites', value: 'favorites', icon: _react2.default.createElement(_Star2.default, null) })
        )
      );
    }
  }]);

  return ContactList;
}(_react2.default.Component);

ContactList.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  dataContact: _propTypes2.default.object.isRequired,
  keyword: _propTypes2.default.string.isRequired,
  itemSelected: _propTypes2.default.number.isRequired,
  showDetail: _propTypes2.default.func.isRequired,
  search: _propTypes2.default.func.isRequired,
  clippedRight: _propTypes2.default.bool
};

ContactList.defaultProps = {
  clippedRight: false
};

var _default = (0, _styles.withStyles)(_contactJss2.default)(ContactList);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ContactList, 'ContactList', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Contact/ContactList.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Contact/ContactList.js');
}();

;

/***/ }),
/* 265 */
/*!*****************************************************!*\
  !*** ./src/app/components/Contact/ContactHeader.js ***!
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

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _AppBar = __webpack_require__(/*! @material-ui/core/AppBar */ 60);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = __webpack_require__(/*! @material-ui/core/Toolbar */ 13);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ 4);

var _Typography2 = _interopRequireDefault(_Typography);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ 9);

var _Button2 = _interopRequireDefault(_Button);

var _ArrowBack = __webpack_require__(/*! @material-ui/icons/ArrowBack */ 93);

var _ArrowBack2 = _interopRequireDefault(_ArrowBack);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ 5);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _PermContactCalendar = __webpack_require__(/*! @material-ui/icons/PermContactCalendar */ 78);

var _PermContactCalendar2 = _interopRequireDefault(_PermContactCalendar);

var _Add = __webpack_require__(/*! @material-ui/icons/Add */ 52);

var _Add2 = _interopRequireDefault(_Add);

var _contactJss = __webpack_require__(/*! ./contact-jss */ 39);

var _contactJss2 = _interopRequireDefault(_contactJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactHeader = function (_React$Component) {
  _inherits(ContactHeader, _React$Component);

  function ContactHeader() {
    _classCallCheck(this, ContactHeader);

    return _possibleConstructorReturn(this, (ContactHeader.__proto__ || Object.getPrototypeOf(ContactHeader)).apply(this, arguments));
  }

  _createClass(ContactHeader, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          addContact = _props.addContact,
          total = _props.total,
          hideDetail = _props.hideDetail,
          showMobileDetail = _props.showMobileDetail;

      return _react2.default.createElement(
        _AppBar2.default,
        {
          position: 'absolute',
          className: classes.appBar
        },
        _react2.default.createElement(
          _Toolbar2.default,
          null,
          showMobileDetail && _react2.default.createElement(
            _IconButton2.default,
            {
              color: 'inherit',
              'aria-label': 'open drawer',
              onClick: function onClick() {
                return hideDetail();
              },
              className: classes.navIconHide
            },
            _react2.default.createElement(_ArrowBack2.default, null)
          ),
          _react2.default.createElement(
            _Typography2.default,
            { variant: 'subheading', className: classes.title, color: 'inherit', noWrap: true },
            _react2.default.createElement(_PermContactCalendar2.default, null),
            ' Contacts (',
            total,
            ')'
          ),
          _react2.default.createElement(
            _Button2.default,
            { onClick: function onClick() {
                return addContact();
              }, variant: 'outlined', color: 'inherit', className: classes.button },
            _react2.default.createElement(_Add2.default, null),
            ' Add New'
          )
        )
      );
    }
  }]);

  return ContactHeader;
}(_react2.default.Component);

ContactHeader.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  showMobileDetail: _propTypes2.default.bool.isRequired,
  addContact: _propTypes2.default.func.isRequired,
  hideDetail: _propTypes2.default.func.isRequired,
  total: _propTypes2.default.number.isRequired
};

var _default = (0, _styles.withStyles)(_contactJss2.default)(ContactHeader);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ContactHeader, 'ContactHeader', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Contact/ContactHeader.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Contact/ContactHeader.js');
}();

;

/***/ }),
/* 266 */
/*!*****************************************************!*\
  !*** ./src/app/components/Contact/ContactDetail.js ***!
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

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _classnames = __webpack_require__(/*! classnames */ 3);

var _classnames2 = _interopRequireDefault(_classnames);

var _List = __webpack_require__(/*! @material-ui/core/List */ 34);

var _List2 = _interopRequireDefault(_List);

var _ListItem = __webpack_require__(/*! @material-ui/core/ListItem */ 30);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemText = __webpack_require__(/*! @material-ui/core/ListItemText */ 26);

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _Avatar = __webpack_require__(/*! @material-ui/core/Avatar */ 20);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Menu = __webpack_require__(/*! @material-ui/core/Menu */ 32);

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = __webpack_require__(/*! @material-ui/core/MenuItem */ 33);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ 5);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ 4);

var _Typography2 = _interopRequireDefault(_Typography);

var _Edit = __webpack_require__(/*! @material-ui/icons/Edit */ 267);

var _Edit2 = _interopRequireDefault(_Edit);

var _Star = __webpack_require__(/*! @material-ui/icons/Star */ 47);

var _Star2 = _interopRequireDefault(_Star);

var _StarBorder = __webpack_require__(/*! @material-ui/icons/StarBorder */ 268);

var _StarBorder2 = _interopRequireDefault(_StarBorder);

var _MoreVert = __webpack_require__(/*! @material-ui/icons/MoreVert */ 55);

var _MoreVert2 = _interopRequireDefault(_MoreVert);

var _LocalPhone = __webpack_require__(/*! @material-ui/icons/LocalPhone */ 75);

var _LocalPhone2 = _interopRequireDefault(_LocalPhone);

var _Email = __webpack_require__(/*! @material-ui/icons/Email */ 116);

var _Email2 = _interopRequireDefault(_Email);

var _Smartphone = __webpack_require__(/*! @material-ui/icons/Smartphone */ 117);

var _Smartphone2 = _interopRequireDefault(_Smartphone);

var _LocationOn = __webpack_require__(/*! @material-ui/icons/LocationOn */ 76);

var _LocationOn2 = _interopRequireDefault(_LocationOn);

var _Work = __webpack_require__(/*! @material-ui/icons/Work */ 118);

var _Work2 = _interopRequireDefault(_Work);

var _Language = __webpack_require__(/*! @material-ui/icons/Language */ 119);

var _Language2 = _interopRequireDefault(_Language);

var _Divider = __webpack_require__(/*! @material-ui/core/Divider */ 16);

var _Divider2 = _interopRequireDefault(_Divider);

var _contactJss = __webpack_require__(/*! ./contact-jss */ 39);

var _contactJss2 = _interopRequireDefault(_contactJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var optionsOpt = ['Block Contact', 'Delete Contact', 'Option 1', 'Option 2', 'Option 3'];

var ITEM_HEIGHT = 48;

var ContactDetail = function (_React$Component) {
  _inherits(ContactDetail, _React$Component);

  function ContactDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ContactDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ContactDetail.__proto__ || Object.getPrototypeOf(ContactDetail)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      anchorElOpt: null
    }, _this.handleClickOpt = function () {
      var _this2;

      return (_this2 = _this).__handleClickOpt__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleCloseOpt = function () {
      var _this3;

      return (_this3 = _this).__handleCloseOpt__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.deleteContact = function () {
      var _this4;

      return (_this4 = _this).__deleteContact__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ContactDetail, [{
    key: '__deleteContact__REACT_HOT_LOADER__',
    value: function __deleteContact__REACT_HOT_LOADER__() {
      return this.__deleteContact__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleCloseOpt__REACT_HOT_LOADER__',
    value: function __handleCloseOpt__REACT_HOT_LOADER__() {
      return this.__handleCloseOpt__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleClickOpt__REACT_HOT_LOADER__',
    value: function __handleClickOpt__REACT_HOT_LOADER__() {
      return this.__handleClickOpt__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleClickOpt__REACT_HOT_LOADER__',
    value: function __handleClickOpt__REACT_HOT_LOADER__(event) {
      this.setState({ anchorElOpt: event.currentTarget });
    }
  }, {
    key: '__handleCloseOpt__REACT_HOT_LOADER__',
    value: function __handleCloseOpt__REACT_HOT_LOADER__() {
      this.setState({ anchorElOpt: null });
    }
  }, {
    key: '__deleteContact__REACT_HOT_LOADER__',
    value: function __deleteContact__REACT_HOT_LOADER__(item) {
      this.props.remove(item);
      this.setState({ anchorElOpt: null });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var _props = this.props,
          classes = _props.classes,
          dataContact = _props.dataContact,
          itemSelected = _props.itemSelected,
          edit = _props.edit,
          favorite = _props.favorite,
          showMobileDetail = _props.showMobileDetail;
      var anchorElOpt = this.state.anchorElOpt;

      return _react2.default.createElement(
        'main',
        { className: (0, _classnames2.default)(classes.content, showMobileDetail ? classes.detailPopup : '') },
        _react2.default.createElement(
          'section',
          { className: classes.cover },
          _react2.default.createElement(
            'div',
            { className: classes.opt },
            _react2.default.createElement(
              _IconButton2.default,
              { className: classes.favorite, 'aria-label': 'Favorite', onClick: function onClick() {
                  return favorite(dataContact.get(itemSelected));
                } },
              dataContact.getIn([itemSelected, 'favorited']) ? _react2.default.createElement(_Star2.default, null) : _react2.default.createElement(_StarBorder2.default, null)
            ),
            _react2.default.createElement(
              _IconButton2.default,
              { 'aria-label': 'Edit', onClick: function onClick() {
                  return edit(dataContact.get(itemSelected));
                } },
              _react2.default.createElement(_Edit2.default, null)
            ),
            _react2.default.createElement(
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
                if (option === 'Delete Contact') {
                  return _react2.default.createElement(
                    _MenuItem2.default,
                    { key: option, selected: option === 'Edit Profile', onClick: function onClick() {
                        return _this5.deleteContact(dataContact.get(itemSelected));
                      } },
                    option
                  );
                }
                return _react2.default.createElement(
                  _MenuItem2.default,
                  { key: option, selected: option === 'Edit Profile', onClick: _this5.handleCloseOpt },
                  option
                );
              })
            )
          ),
          _react2.default.createElement(_Avatar2.default, { alt: dataContact.getIn([itemSelected, 'name']), src: dataContact.getIn([itemSelected, 'avatar']), className: classes.avatar }),
          _react2.default.createElement(
            _Typography2.default,
            { className: classes.userName, variant: 'display1' },
            dataContact.getIn([itemSelected, 'name']),
            _react2.default.createElement(
              _Typography2.default,
              { variant: 'caption' },
              dataContact.getIn([itemSelected, 'title'])
            )
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _List2.default,
            null,
            _react2.default.createElement(
              _ListItem2.default,
              null,
              _react2.default.createElement(
                _Avatar2.default,
                { className: classes.blueIcon },
                _react2.default.createElement(_LocalPhone2.default, null)
              ),
              _react2.default.createElement(_ListItemText2.default, { primary: dataContact.getIn([itemSelected, 'phone']), secondary: 'Phone' })
            ),
            _react2.default.createElement(_Divider2.default, { inset: true }),
            _react2.default.createElement(
              _ListItem2.default,
              null,
              _react2.default.createElement(
                _Avatar2.default,
                { className: classes.amberIcon },
                _react2.default.createElement(_Smartphone2.default, null)
              ),
              _react2.default.createElement(_ListItemText2.default, { primary: dataContact.getIn([itemSelected, 'secondaryPhone']), secondary: 'Secondary Phone' })
            ),
            _react2.default.createElement(_Divider2.default, { inset: true }),
            _react2.default.createElement(
              _ListItem2.default,
              null,
              _react2.default.createElement(
                _Avatar2.default,
                { className: classes.tealIcon },
                _react2.default.createElement(_Email2.default, null)
              ),
              _react2.default.createElement(_ListItemText2.default, { primary: dataContact.getIn([itemSelected, 'personalEmail']), secondary: 'Personal Email' })
            ),
            _react2.default.createElement(_Divider2.default, { inset: true }),
            _react2.default.createElement(
              _ListItem2.default,
              null,
              _react2.default.createElement(
                _Avatar2.default,
                { className: classes.brownIcon },
                _react2.default.createElement(_Work2.default, null)
              ),
              _react2.default.createElement(_ListItemText2.default, { primary: dataContact.getIn([itemSelected, 'companyEmail']), secondary: 'Company Email' })
            ),
            _react2.default.createElement(_Divider2.default, { inset: true }),
            _react2.default.createElement(
              _ListItem2.default,
              null,
              _react2.default.createElement(
                _Avatar2.default,
                { className: classes.redIcon },
                _react2.default.createElement(_LocationOn2.default, null)
              ),
              _react2.default.createElement(_ListItemText2.default, { primary: dataContact.getIn([itemSelected, 'address']), secondary: 'Address' })
            ),
            _react2.default.createElement(_Divider2.default, { inset: true }),
            _react2.default.createElement(
              _ListItem2.default,
              null,
              _react2.default.createElement(
                _Avatar2.default,
                { className: classes.purpleIcon },
                _react2.default.createElement(_Language2.default, null)
              ),
              _react2.default.createElement(_ListItemText2.default, { primary: dataContact.getIn([itemSelected, 'website']), secondary: 'Website' })
            )
          )
        )
      );
    }
  }]);

  return ContactDetail;
}(_react2.default.Component);

ContactDetail.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  showMobileDetail: _propTypes2.default.bool.isRequired,
  dataContact: _propTypes2.default.object.isRequired,
  itemSelected: _propTypes2.default.number.isRequired,
  edit: _propTypes2.default.func.isRequired,
  remove: _propTypes2.default.func.isRequired,
  favorite: _propTypes2.default.func.isRequired
};

var _default = (0, _styles.withStyles)(_contactJss2.default)(ContactDetail);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(optionsOpt, 'optionsOpt', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Contact/ContactDetail.js');

  __REACT_HOT_LOADER__.register(ITEM_HEIGHT, 'ITEM_HEIGHT', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Contact/ContactDetail.js');

  __REACT_HOT_LOADER__.register(ContactDetail, 'ContactDetail', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Contact/ContactDetail.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Contact/ContactDetail.js');
}();

;

/***/ }),
/* 267 */
/*!******************************************!*\
  !*** external "@material-ui/icons/Edit" ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Edit");

/***/ }),
/* 268 */
/*!************************************************!*\
  !*** external "@material-ui/icons/StarBorder" ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/StarBorder");

/***/ }),
/* 269 */
/*!******************************************************!*\
  !*** ./src/app/components/Calendar/EventCalendar.js ***!
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

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ 6);

var _Paper2 = _interopRequireDefault(_Paper);

var _reactBigCalendar = __webpack_require__(/*! react-big-calendar */ 270);

var _reactBigCalendar2 = _interopRequireDefault(_reactBigCalendar);

var _moment = __webpack_require__(/*! moment */ 271);

var _moment2 = _interopRequireDefault(_moment);

var _calendarJss = __webpack_require__(/*! ./calendar-jss */ 56);

var _calendarJss2 = _interopRequireDefault(_calendarJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_reactBigCalendar2.default.setLocalizer(_reactBigCalendar2.default.momentLocalizer(_moment2.default));

function Event(event) {
  return _react2.default.createElement(
    'span',
    { className: 'eventBlock' },
    event.title
  );
}

var EventCalendar = function (_React$Component) {
  _inherits(EventCalendar, _React$Component);

  function EventCalendar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EventCalendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EventCalendar.__proto__ || Object.getPrototypeOf(EventCalendar)).call.apply(_ref, [this].concat(args))), _this), _this.eventStyleGetter = function () {
      var _this2;

      return (_this2 = _this).__eventStyleGetter__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EventCalendar, [{
    key: '__eventStyleGetter__REACT_HOT_LOADER__',
    value: function __eventStyleGetter__REACT_HOT_LOADER__() {
      return this.__eventStyleGetter__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__eventStyleGetter__REACT_HOT_LOADER__',
    value: function __eventStyleGetter__REACT_HOT_LOADER__(event) {
      var backgroundColor = '#' + event.hexColor;
      var style = {
        backgroundColor: backgroundColor
      };
      return {
        style: style
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var allViews = Object.keys(_reactBigCalendar2.default.Views).map(function (k) {
        return _reactBigCalendar2.default.Views[k];
      });
      var _props = this.props,
          classes = _props.classes,
          events = _props.events,
          handleEventClick = _props.handleEventClick;

      return _react2.default.createElement(
        _Paper2.default,
        { className: classes.root },
        _react2.default.createElement(_reactBigCalendar2.default, {
          className: classes.calendarWrap,
          selectable: true,
          events: events,
          defaultView: 'month',
          views: allViews,
          step: 60,
          showMultiDayTimes: true,
          scrollToTime: new Date(1970, 1, 1, 6),
          defaultDate: new Date(2015, 3, 12),
          onSelectEvent: function onSelectEvent(selectedEvent) {
            return handleEventClick(selectedEvent);
          },
          eventPropGetter: this.eventStyleGetter,
          onSelectSlot: function onSelectSlot(slotInfo) {
            return console.log('selected slot: \n\nstart ' + slotInfo.start.toLocaleString() + ' ' + ('\nend: ' + slotInfo.end.toLocaleString()) + ('\naction: ' + slotInfo.action));
          },
          components: {
            event: Event
          }
        })
      );
    }
  }]);

  return EventCalendar;
}(_react2.default.Component);

EventCalendar.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  events: _propTypes2.default.array.isRequired,
  handleEventClick: _propTypes2.default.func.isRequired
};

var _default = (0, _styles.withStyles)(_calendarJss2.default)(EventCalendar);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Event, 'Event', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Calendar/EventCalendar.js');

  __REACT_HOT_LOADER__.register(EventCalendar, 'EventCalendar', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Calendar/EventCalendar.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Calendar/EventCalendar.js');
}();

;

/***/ }),
/* 270 */
/*!*************************************!*\
  !*** external "react-big-calendar" ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-big-calendar");

/***/ }),
/* 271 */
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 272 */
/*!*****************************************************!*\
  !*** external "@material-ui/core/colors/lightBlue" ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/lightBlue");

/***/ }),
/* 273 */
/*!****************************************************!*\
  !*** ./src/app/components/Calendar/DetailEvent.js ***!
  \****************************************************/
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

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ 4);

var _Typography2 = _interopRequireDefault(_Typography);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ 5);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Menu = __webpack_require__(/*! @material-ui/core/Menu */ 32);

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = __webpack_require__(/*! @material-ui/core/MenuItem */ 33);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Divider = __webpack_require__(/*! @material-ui/core/Divider */ 16);

var _Divider2 = _interopRequireDefault(_Divider);

var _Popover = __webpack_require__(/*! @material-ui/core/Popover */ 274);

var _Popover2 = _interopRequireDefault(_Popover);

var _MoreVert = __webpack_require__(/*! @material-ui/icons/MoreVert */ 55);

var _MoreVert2 = _interopRequireDefault(_MoreVert);

var _Today = __webpack_require__(/*! @material-ui/icons/Today */ 275);

var _Today2 = _interopRequireDefault(_Today);

var _calendarJss = __webpack_require__(/*! ./calendar-jss */ 56);

var _calendarJss2 = _interopRequireDefault(_calendarJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ITEM_HEIGHT = 48;

var DetailEvent = function (_React$Component) {
  _inherits(DetailEvent, _React$Component);

  function DetailEvent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DetailEvent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DetailEvent.__proto__ || Object.getPrototypeOf(DetailEvent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      anchorElOpt: null
    }, _this.handleClickOpt = function () {
      var _this2;

      return (_this2 = _this).__handleClickOpt__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleCloseOpt = function () {
      var _this3;

      return (_this3 = _this).__handleCloseOpt__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.handleDeleteEvent = function () {
      var _this4;

      return (_this4 = _this).__handleDeleteEvent__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DetailEvent, [{
    key: '__handleDeleteEvent__REACT_HOT_LOADER__',
    value: function __handleDeleteEvent__REACT_HOT_LOADER__() {
      return this.__handleDeleteEvent__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleCloseOpt__REACT_HOT_LOADER__',
    value: function __handleCloseOpt__REACT_HOT_LOADER__() {
      return this.__handleCloseOpt__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleClickOpt__REACT_HOT_LOADER__',
    value: function __handleClickOpt__REACT_HOT_LOADER__() {
      return this.__handleClickOpt__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleClickOpt__REACT_HOT_LOADER__',
    value: function __handleClickOpt__REACT_HOT_LOADER__(event) {
      this.setState({ anchorElOpt: event.currentTarget });
    }
  }, {
    key: '__handleCloseOpt__REACT_HOT_LOADER__',
    value: function __handleCloseOpt__REACT_HOT_LOADER__() {
      this.setState({ anchorElOpt: null });
    }
  }, {
    key: '__handleDeleteEvent__REACT_HOT_LOADER__',
    value: function __handleDeleteEvent__REACT_HOT_LOADER__(event) {
      this.setState({ anchorElOpt: null });
      this.props.remove(event);
      this.props.close();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var getDate = function getDate(date) {
        if (date._isAMomentObject) {
          return date.format('MMMM Do YYYY');
        }
        var dd = date.getDate();
        var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var mm = monthNames[date.getMonth()]; // January is 0!
        var yyyy = date.getFullYear();

        if (dd < 10) {
          dd = '0' + dd;
        }

        var convertedDate = mm + ', ' + dd + ' ' + yyyy;

        return convertedDate;
      };

      var getTime = function getTime(time) {
        if (time._isAMomentObject) {
          return time.format('LT');
        }
        var h = time.getHours();
        var m = time.getMinutes();

        if (h < 10) {
          h = '0' + h;
        }

        if (m < 10) {
          m = '0' + m;
        }

        var convertedTime = h + ':' + m;
        return convertedTime;
      };

      var _props = this.props,
          classes = _props.classes,
          anchorEl = _props.anchorEl,
          event = _props.event,
          close = _props.close;
      var anchorElOpt = this.state.anchorElOpt;

      return _react2.default.createElement(
        _Popover2.default,
        {
          open: Boolean(anchorEl),
          anchorEl: anchorEl,
          className: classes.eventDetail,
          onClose: close,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center'
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'center'
          }
        },
        _react2.default.createElement(
          _IconButton2.default,
          {
            'aria-label': 'More',
            'aria-owns': anchorElOpt ? 'long-menu' : null,
            'aria-haspopup': 'true',
            className: classes.moreOpt,
            onClick: this.handleClickOpt
          },
          _react2.default.createElement(_MoreVert2.default, null)
        ),
        event !== null && _react2.default.createElement(
          _react.Fragment,
          null,
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
            _react2.default.createElement(
              _MenuItem2.default,
              { onClick: function onClick() {
                  return _this5.handleDeleteEvent(event);
                } },
              'Delete Event'
            )
          ),
          _react2.default.createElement(
            _Typography2.default,
            { variant: 'headline', style: { background: '#' + event.hexColor }, className: classes.eventName },
            _react2.default.createElement(_Today2.default, null),
            ' ',
            event.title
          ),
          _react2.default.createElement(
            'div',
            { className: classes.time },
            _react2.default.createElement(
              _Typography2.default,
              null,
              'Start: ',
              getDate(event.start),
              ' - ',
              getTime(event.start)
            ),
            _react2.default.createElement(_Divider2.default, { className: classes.divider }),
            _react2.default.createElement(
              _Typography2.default,
              null,
              'End: ',
              getDate(event.end),
              ' - ',
              getTime(event.end)
            )
          )
        )
      );
    }
  }]);

  return DetailEvent;
}(_react2.default.Component);

DetailEvent.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  anchorEl: _propTypes2.default.node,
  event: _propTypes2.default.object,
  close: _propTypes2.default.func.isRequired,
  remove: _propTypes2.default.func.isRequired
};

DetailEvent.defaultProps = {
  anchorEl: null,
  event: null
};

var _default = (0, _styles.withStyles)(_calendarJss2.default)(DetailEvent);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ITEM_HEIGHT, 'ITEM_HEIGHT', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Calendar/DetailEvent.js');

  __REACT_HOT_LOADER__.register(DetailEvent, 'DetailEvent', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Calendar/DetailEvent.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Calendar/DetailEvent.js');
}();

;

/***/ }),
/* 274 */
/*!********************************************!*\
  !*** external "@material-ui/core/Popover" ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popover");

/***/ }),
/* 275 */
/*!*******************************************!*\
  !*** external "@material-ui/icons/Today" ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Today");

/***/ }),
/* 276 */
/*!*************************************************!*\
  !*** ./src/app/components/Calendar/AddEvent.js ***!
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

var _Button = __webpack_require__(/*! @material-ui/core/Button */ 9);

var _Button2 = _interopRequireDefault(_Button);

var _Add = __webpack_require__(/*! @material-ui/icons/Add */ 52);

var _Add2 = _interopRequireDefault(_Add);

var _Tooltip = __webpack_require__(/*! @material-ui/core/Tooltip */ 27);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _FloatingPanel = __webpack_require__(/*! ./../Panel/FloatingPanel */ 77);

var _FloatingPanel2 = _interopRequireDefault(_FloatingPanel);

var _AddEventForm = __webpack_require__(/*! ./AddEventForm */ 121);

var _AddEventForm2 = _interopRequireDefault(_AddEventForm);

var _calendarJss = __webpack_require__(/*! ./calendar-jss.js */ 56);

var _calendarJss2 = _interopRequireDefault(_calendarJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddEvent = function (_React$Component) {
  _inherits(AddEvent, _React$Component);

  function AddEvent() {
    _classCallCheck(this, AddEvent);

    return _possibleConstructorReturn(this, (AddEvent.__proto__ || Object.getPrototypeOf(AddEvent)).apply(this, arguments));
  }

  _createClass(AddEvent, [{
    key: 'showResult',
    value: function showResult(values) {
      var _this2 = this;

      setTimeout(function () {
        _this2.props.submit(values);
      }, 500); // simulate server latency
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          classes = _props.classes,
          openForm = _props.openForm,
          _closeForm = _props.closeForm,
          addEvent = _props.addEvent;

      var branch = '';
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Tooltip2.default,
          { title: 'Add New Event' },
          _react2.default.createElement(
            _Button2.default,
            { variant: 'fab', color: 'secondary', onClick: function onClick() {
                return addEvent();
              }, className: classes.addBtn },
            _react2.default.createElement(_Add2.default, null)
          )
        ),
        _react2.default.createElement(
          _FloatingPanel2.default,
          { title: 'Add New Event', openForm: openForm, branch: branch, closeForm: function closeForm() {
              return _closeForm();
            } },
          _react2.default.createElement(_AddEventForm2.default, { onSubmit: function onSubmit(values) {
              return _this3.showResult(values);
            } })
        )
      );
    }
  }]);

  return AddEvent;
}(_react2.default.Component);

AddEvent.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  openForm: _propTypes2.default.bool.isRequired,
  addEvent: _propTypes2.default.func.isRequired,
  closeForm: _propTypes2.default.func.isRequired,
  submit: _propTypes2.default.func.isRequired
};

var _default = (0, _styles.withStyles)(_calendarJss2.default)(AddEvent);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AddEvent, 'AddEvent', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Calendar/AddEvent.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Calendar/AddEvent.js');
}();

;

/***/ }),
/* 277 */
/*!**********************************************!*\
  !*** external "@material-ui/core/FormLabel" ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormLabel");

/***/ }),
/* 278 */
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

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ 4);

var _Typography2 = _interopRequireDefault(_Typography);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ 9);

var _Button2 = _interopRequireDefault(_Button);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ 25);

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

var _default = (0, _styles.withStyles)(styles)(ErrorWrap);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Error/ErrorWrap.js');

  __REACT_HOT_LOADER__.register(ErrorWrap, 'ErrorWrap', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Error/ErrorWrap.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/components/Error/ErrorWrap.js');
}();

;

/***/ }),
/* 279 */
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

var _brand = __webpack_require__(/*! ../../constants/brand.js */ 19);

var _brand2 = _interopRequireDefault(_brand);

var _reactHelmet = __webpack_require__(/*! react-helmet */ 24);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Grid = __webpack_require__(/*! @material-ui/core/Grid */ 46);

var _Grid2 = _interopRequireDefault(_Grid);

var _Divider = __webpack_require__(/*! @material-ui/core/Divider */ 16);

var _Divider2 = _interopRequireDefault(_Divider);

var _images = __webpack_require__(/*! ../../constants/images.js */ 94);

var _images2 = _interopRequireDefault(_images);

var _avatars = __webpack_require__(/*! ../../constants/avatars.js */ 62);

var _avatars2 = _interopRequireDefault(_avatars);

var _dashboardJss = __webpack_require__(/*! ./dashboard-jss */ 280);

var _dashboardJss2 = _interopRequireDefault(_dashboardJss);

var _components = __webpack_require__(/*! ./../../components */ 8);

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
      var title = _brand2.default.name + ' - Dashboard Version 2';
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
              date: 'Sept, 25 2018',
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum.',
              image: _images2.default[16],
              avatar: _avatars2.default[6],
              name: 'John Doe'
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

var _default = (0, _styles.withStyles)(_dashboardJss2.default)(DashboardV2);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(DashboardV2, 'DashboardV2', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Dashboard/Dashboard.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Dashboard/Dashboard.js');
}();

;

/***/ }),
/* 280 */
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

var _default = styles;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Dashboard/dashboard-jss.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Dashboard/dashboard-jss.js');
}();

;

/***/ }),
/* 281 */
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

var _reactHelmet = __webpack_require__(/*! react-helmet */ 24);

var _brand = __webpack_require__(/*! ../../constants/brand.js */ 19);

var _brand2 = _interopRequireDefault(_brand);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ 6);

var _Paper2 = _interopRequireDefault(_Paper);

var _route = __webpack_require__(/*! ../../constants/route.js */ 65);

var _route2 = _interopRequireDefault(_route);

var _helmet = __webpack_require__(/*! ../../constants/helmet.js */ 282);

var _helmet2 = _interopRequireDefault(_helmet);

var _components = __webpack_require__(/*! ../../components */ 8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  root: {
    flexGrow: 1
  }
};

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

var _default = (0, _styles.withStyles)(styles)(RoutePage);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Routes/RoutePage.js');

  __REACT_HOT_LOADER__.register(RoutePage, 'RoutePage', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Routes/RoutePage.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Routes/RoutePage.js');
}();

;

/***/ }),
/* 282 */
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
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }
}();

;

/***/ }),
/* 283 */
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

var _reactHelmet = __webpack_require__(/*! react-helmet */ 24);

var _brand = __webpack_require__(/*! ../../constants/brand.js */ 19);

var _brand2 = _interopRequireDefault(_brand);

var _RadioGroup = __webpack_require__(/*! @material-ui/core/RadioGroup */ 123);

var _RadioGroup2 = _interopRequireDefault(_RadioGroup);

var _Grid = __webpack_require__(/*! @material-ui/core/Grid */ 46);

var _Grid2 = _interopRequireDefault(_Grid);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = __webpack_require__(/*! redux */ 22);

var _reactRedux = __webpack_require__(/*! react-redux */ 12);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _FormControlLabel = __webpack_require__(/*! @material-ui/core/FormControlLabel */ 36);

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _UiActions = __webpack_require__(/*! ./../../actions/UiActions */ 58);

var _components = __webpack_require__(/*! ./../../components */ 8);

var _themeStylesJss = __webpack_require__(/*! ./themeStyles-jss */ 124);

var _themeStylesJss2 = _interopRequireDefault(_themeStylesJss);

var _ThemeThumb = __webpack_require__(/*! ./ThemeThumb */ 284);

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
    }, _this.handleChange = function () {
      var _this2;

      return (_this2 = _this).__handleChange__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Themes, [{
    key: '__handleChange__REACT_HOT_LOADER__',
    value: function __handleChange__REACT_HOT_LOADER__() {
      return this.__handleChange__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleChange__REACT_HOT_LOADER__',
    value: function __handleChange__REACT_HOT_LOADER__(event) {
      this.setState({ value: event.target.value });
      this.props.changeTheme(event.target.value);
    }
  }, {
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

var _default = (0, _styles.withStyles)(_themeStylesJss2.default)(ThemesMapped);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Themes, 'Themes', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Themes/index.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Themes/index.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Themes/index.js');

  __REACT_HOT_LOADER__.register(dispatchToProps, 'dispatchToProps', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Themes/index.js');

  __REACT_HOT_LOADER__.register(ThemesMapped, 'ThemesMapped', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Themes/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Themes/index.js');
}();

;

/***/ }),
/* 284 */
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

var _Radio = __webpack_require__(/*! @material-ui/core/Radio */ 122);

var _Radio2 = _interopRequireDefault(_Radio);

var _classnames = __webpack_require__(/*! classnames */ 3);

var _classnames2 = _interopRequireDefault(_classnames);

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ 6);

var _Paper2 = _interopRequireDefault(_Paper);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(/*! react-redux */ 12);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _themePalette = __webpack_require__(/*! ../../constants/themePalette.js */ 57);

var _themePalette2 = _interopRequireDefault(_themePalette);

var _themeStylesJss = __webpack_require__(/*! ./themeStyles-jss */ 124);

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

var _default = (0, _styles.withStyles)(_themeStylesJss2.default)(ThumbsMapped);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ThemeThumb, 'ThemeThumb', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Themes/ThemeThumb.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Themes/ThemeThumb.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Themes/ThemeThumb.js');

  __REACT_HOT_LOADER__.register(ThumbsMapped, 'ThumbsMapped', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Themes/ThemeThumb.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Themes/ThemeThumb.js');
}();

;

/***/ }),
/* 285 */
/*!************************************************!*\
  !*** ./src/app/containers/Tables/CrudTable.js ***!
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

var _reactHelmet = __webpack_require__(/*! react-helmet */ 24);

var _brand = __webpack_require__(/*! ../../constants/brand.js */ 19);

var _brand2 = _interopRequireDefault(_brand);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ 6);

var _Paper2 = _interopRequireDefault(_Paper);

var _route = __webpack_require__(/*! ../../constants/route.js */ 65);

var _route2 = _interopRequireDefault(_route);

var _components = __webpack_require__(/*! ./../../components */ 8);

var _demos = __webpack_require__(/*! ./demos */ 286);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  root: {
    flexGrow: 1
  }
};

var CrudTablePage = function (_Component) {
  _inherits(CrudTablePage, _Component);

  function CrudTablePage() {
    _classCallCheck(this, CrudTablePage);

    return _possibleConstructorReturn(this, (CrudTablePage.__proto__ || Object.getPrototypeOf(CrudTablePage)).apply(this, arguments));
  }

  _createClass(CrudTablePage, [{
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
          _react2.default.createElement('meta', { name: 'description', content: description }),
          _react2.default.createElement('meta', { property: 'og:title', content: title }),
          _react2.default.createElement('meta', { property: 'og:description', content: description }),
          _react2.default.createElement('meta', { property: 'twitter:title', content: title }),
          _react2.default.createElement('meta', { property: 'twitter:description', content: description })
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
              _react2.default.createElement(_demos.CrudTableDemo, null)
            )
          )
        )
      );
    }
  }]);

  return CrudTablePage;
}(_react.Component);

CrudTablePage.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

var _default = (0, _styles.withStyles)(styles)(CrudTablePage);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/CrudTable.js');

  __REACT_HOT_LOADER__.register(CrudTablePage, 'CrudTablePage', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/CrudTable.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/CrudTable.js');
}();

;

/***/ }),
/* 286 */
/*!**************************************************!*\
  !*** ./src/app/containers/Tables/demos/index.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrackingTable = exports.EmptyTable = exports.StatusColorRow = exports.StatusLabel = exports.AdvTableDemo = exports.CrudTableDemo = exports.TreeTableDemo = exports.BorderedTable = exports.HoverTable = exports.StrippedTable = exports.SimpleTable = undefined;

var _SimpleTable2 = __webpack_require__(/*! ./SimpleTable */ 287);

var _SimpleTable3 = _interopRequireDefault(_SimpleTable2);

var _StrippedTable2 = __webpack_require__(/*! ./StrippedTable */ 288);

var _StrippedTable3 = _interopRequireDefault(_StrippedTable2);

var _HoverTable2 = __webpack_require__(/*! ./HoverTable */ 289);

var _HoverTable3 = _interopRequireDefault(_HoverTable2);

var _BorderedTable2 = __webpack_require__(/*! ./BorderedTable */ 290);

var _BorderedTable3 = _interopRequireDefault(_BorderedTable2);

var _TreeTableDemo2 = __webpack_require__(/*! ./TreeTableDemo */ 291);

var _TreeTableDemo3 = _interopRequireDefault(_TreeTableDemo2);

var _CrudTableDemo2 = __webpack_require__(/*! ./CrudTableDemo */ 294);

var _CrudTableDemo3 = _interopRequireDefault(_CrudTableDemo2);

var _AdvTableDemo2 = __webpack_require__(/*! ./AdvTableDemo */ 296);

var _AdvTableDemo3 = _interopRequireDefault(_AdvTableDemo2);

var _StatusLabel2 = __webpack_require__(/*! ./StatusLabel */ 297);

var _StatusLabel3 = _interopRequireDefault(_StatusLabel2);

var _StatusColorRow2 = __webpack_require__(/*! ./StatusColorRow */ 298);

var _StatusColorRow3 = _interopRequireDefault(_StatusColorRow2);

var _EmptyTable2 = __webpack_require__(/*! ./EmptyTable */ 299);

var _EmptyTable3 = _interopRequireDefault(_EmptyTable2);

var _TrackingTable2 = __webpack_require__(/*! ./TrackingTable */ 300);

var _TrackingTable3 = _interopRequireDefault(_TrackingTable2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.SimpleTable = _SimpleTable3.default;
exports.StrippedTable = _StrippedTable3.default;
exports.HoverTable = _HoverTable3.default;
exports.BorderedTable = _BorderedTable3.default;
exports.TreeTableDemo = _TreeTableDemo3.default;
exports.CrudTableDemo = _CrudTableDemo3.default;
exports.AdvTableDemo = _AdvTableDemo3.default;
exports.StatusLabel = _StatusLabel3.default;
exports.StatusColorRow = _StatusColorRow3.default;
exports.EmptyTable = _EmptyTable3.default;
exports.TrackingTable = _TrackingTable3.default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 287 */
/*!********************************************************!*\
  !*** ./src/app/containers/Tables/demos/SimpleTable.js ***!
  \********************************************************/
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

var _Toolbar = __webpack_require__(/*! @material-ui/core/Toolbar */ 13);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ 4);

var _Typography2 = _interopRequireDefault(_Typography);

var _Table = __webpack_require__(/*! @material-ui/core/Table */ 17);

var _Table2 = _interopRequireDefault(_Table);

var _TableBody = __webpack_require__(/*! @material-ui/core/TableBody */ 21);

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableCell = __webpack_require__(/*! @material-ui/core/TableCell */ 7);

var _TableCell2 = _interopRequireDefault(_TableCell);

var _TableHead = __webpack_require__(/*! @material-ui/core/TableHead */ 18);

var _TableHead2 = _interopRequireDefault(_TableHead);

var _TableRow = __webpack_require__(/*! @material-ui/core/TableRow */ 14);

var _TableRow2 = _interopRequireDefault(_TableRow);

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ 6);

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto'
    },
    table: {
      minWidth: 700
    }
  };
};

var id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return {
    id: id,
    name: name,
    calories: calories,
    fat: fat,
    carbs: carbs,
    protein: protein
  };
}

var data = [createData('Frozen yoghurt', 159, 6.0, 24, 4.0), createData('Ice cream sandwich', 237, 9.0, 37, 4.3), createData('Eclair', 262, 16.0, 24, 6.0), createData('Cupcake', 305, 3.7, 67, 4.3), createData('Gingerbread', 356, 16.0, 49, 3.9)];

function SimpleTable(props) {
  var classes = props.classes;

  return _react2.default.createElement(
    _Paper2.default,
    { className: classes.root },
    _react2.default.createElement(
      _Toolbar2.default,
      null,
      _react2.default.createElement(
        'div',
        { className: classes.title },
        _react2.default.createElement(
          _Typography2.default,
          { variant: 'title' },
          'Nutrition'
        )
      )
    ),
    _react2.default.createElement(
      _Table2.default,
      { className: classes.table },
      _react2.default.createElement(
        _TableHead2.default,
        null,
        _react2.default.createElement(
          _TableRow2.default,
          null,
          _react2.default.createElement(
            _TableCell2.default,
            { padding: 'dense' },
            'Dessert (100g serving)'
          ),
          _react2.default.createElement(
            _TableCell2.default,
            { numeric: true },
            'Calories'
          ),
          _react2.default.createElement(
            _TableCell2.default,
            { numeric: true },
            'Fat (g)'
          ),
          _react2.default.createElement(
            _TableCell2.default,
            { numeric: true },
            'Carbs (g)'
          ),
          _react2.default.createElement(
            _TableCell2.default,
            { numeric: true },
            'Protein (g)'
          )
        )
      ),
      _react2.default.createElement(
        _TableBody2.default,
        null,
        data.map(function (n) {
          return [_react2.default.createElement(
            _TableRow2.default,
            { key: n.id },
            _react2.default.createElement(
              _TableCell2.default,
              { padding: 'dense' },
              n.name
            ),
            _react2.default.createElement(
              _TableCell2.default,
              { numeric: true },
              n.calories
            ),
            _react2.default.createElement(
              _TableCell2.default,
              { numeric: true },
              n.fat
            ),
            _react2.default.createElement(
              _TableCell2.default,
              { numeric: true },
              n.carbs
            ),
            _react2.default.createElement(
              _TableCell2.default,
              { numeric: true },
              n.protein
            )
          )];
        })
      )
    )
  );
}

SimpleTable.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

var _default = (0, _styles.withStyles)(styles)(SimpleTable);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/SimpleTable.js');

  __REACT_HOT_LOADER__.register(id, 'id', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/SimpleTable.js');

  __REACT_HOT_LOADER__.register(createData, 'createData', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/SimpleTable.js');

  __REACT_HOT_LOADER__.register(data, 'data', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/SimpleTable.js');

  __REACT_HOT_LOADER__.register(SimpleTable, 'SimpleTable', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/SimpleTable.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/SimpleTable.js');
}();

;

/***/ }),
/* 288 */
/*!**********************************************************!*\
  !*** ./src/app/containers/Tables/demos/StrippedTable.js ***!
  \**********************************************************/
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

var _Toolbar = __webpack_require__(/*! @material-ui/core/Toolbar */ 13);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _classnames = __webpack_require__(/*! classnames */ 3);

var _classnames2 = _interopRequireDefault(_classnames);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ 4);

var _Typography2 = _interopRequireDefault(_Typography);

var _Table = __webpack_require__(/*! @material-ui/core/Table */ 17);

var _Table2 = _interopRequireDefault(_Table);

var _TableBody = __webpack_require__(/*! @material-ui/core/TableBody */ 21);

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableCell = __webpack_require__(/*! @material-ui/core/TableCell */ 7);

var _TableCell2 = _interopRequireDefault(_TableCell);

var _TableHead = __webpack_require__(/*! @material-ui/core/TableHead */ 18);

var _TableHead2 = _interopRequireDefault(_TableHead);

var _TableRow = __webpack_require__(/*! @material-ui/core/TableRow */ 14);

var _TableRow2 = _interopRequireDefault(_TableRow);

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ 6);

var _Paper2 = _interopRequireDefault(_Paper);

var _Table3 = __webpack_require__(/*! ../../../styles/components/Table.scss */ 11);

var _Table4 = _interopRequireDefault(_Table3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto'
    },
    table: {
      minWidth: 700
    }
  };
};

var id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return {
    id: id,
    name: name,
    calories: calories,
    fat: fat,
    carbs: carbs,
    protein: protein
  };
}

var data = [createData('Frozen yoghurt', 159, 6.0, 24, 4.0), createData('Ice cream sandwich', 237, 9.0, 37, 4.3), createData('Eclair', 262, 16.0, 24, 6.0), createData('Cupcake', 305, 3.7, 67, 4.3), createData('Gingerbread', 356, 16.0, 49, 3.9)];

function StrippedTable(props) {
  var classes = props.classes;


  return _react2.default.createElement(
    _Paper2.default,
    { className: classes.root },
    _react2.default.createElement(
      _Toolbar2.default,
      null,
      _react2.default.createElement(
        'div',
        { className: classes.title },
        _react2.default.createElement(
          _Typography2.default,
          { variant: 'title' },
          'Nutrition'
        )
      )
    ),
    _react2.default.createElement(
      _Table2.default,
      { className: (0, _classnames2.default)(classes.table, _Table4.default.stripped) },
      _react2.default.createElement(
        _TableHead2.default,
        null,
        _react2.default.createElement(
          _TableRow2.default,
          null,
          _react2.default.createElement(
            _TableCell2.default,
            { padding: 'dense' },
            'Dessert (100g serving)'
          ),
          _react2.default.createElement(
            _TableCell2.default,
            { numeric: true },
            'Calories'
          ),
          _react2.default.createElement(
            _TableCell2.default,
            { numeric: true },
            'Fat (g)'
          ),
          _react2.default.createElement(
            _TableCell2.default,
            { numeric: true },
            'Carbs (g)'
          ),
          _react2.default.createElement(
            _TableCell2.default,
            { numeric: true },
            'Protein (g)'
          )
        )
      ),
      _react2.default.createElement(
        _TableBody2.default,
        null,
        data.map(function (n) {
          return [_react2.default.createElement(
            _TableRow2.default,
            { key: n.id },
            _react2.default.createElement(
              _TableCell2.default,
              { padding: 'dense' },
              n.name
            ),
            _react2.default.createElement(
              _TableCell2.default,
              { numeric: true },
              n.calories
            ),
            _react2.default.createElement(
              _TableCell2.default,
              { numeric: true },
              n.fat
            ),
            _react2.default.createElement(
              _TableCell2.default,
              { numeric: true },
              n.carbs
            ),
            _react2.default.createElement(
              _TableCell2.default,
              { numeric: true },
              n.protein
            )
          )];
        })
      )
    )
  );
}

StrippedTable.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

var _default = (0, _styles.withStyles)(styles)(StrippedTable);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/StrippedTable.js');

  __REACT_HOT_LOADER__.register(id, 'id', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/StrippedTable.js');

  __REACT_HOT_LOADER__.register(createData, 'createData', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/StrippedTable.js');

  __REACT_HOT_LOADER__.register(data, 'data', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/StrippedTable.js');

  __REACT_HOT_LOADER__.register(StrippedTable, 'StrippedTable', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/StrippedTable.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/StrippedTable.js');
}();

;

/***/ }),
/* 289 */
/*!*******************************************************!*\
  !*** ./src/app/containers/Tables/demos/HoverTable.js ***!
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

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Toolbar = __webpack_require__(/*! @material-ui/core/Toolbar */ 13);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _classnames = __webpack_require__(/*! classnames */ 3);

var _classnames2 = _interopRequireDefault(_classnames);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ 4);

var _Typography2 = _interopRequireDefault(_Typography);

var _Table = __webpack_require__(/*! @material-ui/core/Table */ 17);

var _Table2 = _interopRequireDefault(_Table);

var _TableBody = __webpack_require__(/*! @material-ui/core/TableBody */ 21);

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableCell = __webpack_require__(/*! @material-ui/core/TableCell */ 7);

var _TableCell2 = _interopRequireDefault(_TableCell);

var _TableHead = __webpack_require__(/*! @material-ui/core/TableHead */ 18);

var _TableHead2 = _interopRequireDefault(_TableHead);

var _TableRow = __webpack_require__(/*! @material-ui/core/TableRow */ 14);

var _TableRow2 = _interopRequireDefault(_TableRow);

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ 6);

var _Paper2 = _interopRequireDefault(_Paper);

var _Table3 = __webpack_require__(/*! ../../../styles/components/Table.scss */ 11);

var _Table4 = _interopRequireDefault(_Table3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto'
    },
    table: {
      minWidth: 700
    }
  };
};

var id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return {
    id: id,
    name: name,
    calories: calories,
    fat: fat,
    carbs: carbs,
    protein: protein
  };
}

var data = [createData('Frozen yoghurt', 159, 6.0, 24, 4.0), createData('Ice cream sandwich', 237, 9.0, 37, 4.3), createData('Eclair', 262, 16.0, 24, 6.0), createData('Cupcake', 305, 3.7, 67, 4.3), createData('Gingerbread', 356, 16.0, 49, 3.9)];

function HoverTable(props) {
  var classes = props.classes;


  return _react2.default.createElement(
    _Paper2.default,
    { className: classes.root },
    _react2.default.createElement(
      _Toolbar2.default,
      null,
      _react2.default.createElement(
        'div',
        { className: classes.title },
        _react2.default.createElement(
          _Typography2.default,
          { variant: 'title' },
          'Nutrition'
        )
      )
    ),
    _react2.default.createElement(
      _Table2.default,
      { className: (0, _classnames2.default)(classes.table, _Table4.default.hover) },
      _react2.default.createElement(
        _TableHead2.default,
        null,
        _react2.default.createElement(
          _TableRow2.default,
          null,
          _react2.default.createElement(
            _TableCell2.default,
            { padding: 'dense' },
            'Dessert (100g serving)'
          ),
          _react2.default.createElement(
            _TableCell2.default,
            { numeric: true },
            'Calories'
          ),
          _react2.default.createElement(
            _TableCell2.default,
            { numeric: true },
            'Fat (g)'
          ),
          _react2.default.createElement(
            _TableCell2.default,
            { numeric: true },
            'Carbs (g)'
          ),
          _react2.default.createElement(
            _TableCell2.default,
            { numeric: true },
            'Protein (g)'
          )
        )
      ),
      _react2.default.createElement(
        _TableBody2.default,
        null,
        data.map(function (n) {
          return [_react2.default.createElement(
            _TableRow2.default,
            { key: n.id },
            _react2.default.createElement(
              _TableCell2.default,
              { padding: 'dense' },
              n.name
            ),
            _react2.default.createElement(
              _TableCell2.default,
              { numeric: true },
              n.calories
            ),
            _react2.default.createElement(
              _TableCell2.default,
              { numeric: true },
              n.fat
            ),
            _react2.default.createElement(
              _TableCell2.default,
              { numeric: true },
              n.carbs
            ),
            _react2.default.createElement(
              _TableCell2.default,
              { numeric: true },
              n.protein
            )
          )];
        })
      )
    )
  );
}

HoverTable.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

var _default = (0, _styles.withStyles)(styles)(HoverTable);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/HoverTable.js');

  __REACT_HOT_LOADER__.register(id, 'id', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/HoverTable.js');

  __REACT_HOT_LOADER__.register(createData, 'createData', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/HoverTable.js');

  __REACT_HOT_LOADER__.register(data, 'data', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/HoverTable.js');

  __REACT_HOT_LOADER__.register(HoverTable, 'HoverTable', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/HoverTable.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/HoverTable.js');
}();

;

/***/ }),
/* 290 */
/*!**********************************************************!*\
  !*** ./src/app/containers/Tables/demos/BorderedTable.js ***!
  \**********************************************************/
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

var _Toolbar = __webpack_require__(/*! @material-ui/core/Toolbar */ 13);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _classnames = __webpack_require__(/*! classnames */ 3);

var _classnames2 = _interopRequireDefault(_classnames);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ 4);

var _Typography2 = _interopRequireDefault(_Typography);

var _Table = __webpack_require__(/*! @material-ui/core/Table */ 17);

var _Table2 = _interopRequireDefault(_Table);

var _TableBody = __webpack_require__(/*! @material-ui/core/TableBody */ 21);

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableCell = __webpack_require__(/*! @material-ui/core/TableCell */ 7);

var _TableCell2 = _interopRequireDefault(_TableCell);

var _TableHead = __webpack_require__(/*! @material-ui/core/TableHead */ 18);

var _TableHead2 = _interopRequireDefault(_TableHead);

var _TableRow = __webpack_require__(/*! @material-ui/core/TableRow */ 14);

var _TableRow2 = _interopRequireDefault(_TableRow);

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ 6);

var _Paper2 = _interopRequireDefault(_Paper);

var _Table3 = __webpack_require__(/*! ../../../styles/components/Table.scss */ 11);

var _Table4 = _interopRequireDefault(_Table3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto'
    },
    table: {
      minWidth: 700
    }
  };
};

var id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return {
    id: id,
    name: name,
    calories: calories,
    fat: fat,
    carbs: carbs,
    protein: protein
  };
}

var data = [createData('Frozen yoghurt', 159, 6.0, 24, 4.0), createData('Ice cream sandwich', 237, 9.0, 37, 4.3), createData('Eclair', 262, 16.0, 24, 6.0), createData('Cupcake', 305, 3.7, 67, 4.3), createData('Gingerbread', 356, 16.0, 49, 3.9)];

function BorderedTable(props) {
  var classes = props.classes;


  return _react2.default.createElement(
    _Paper2.default,
    { className: classes.root },
    _react2.default.createElement(
      _Toolbar2.default,
      null,
      _react2.default.createElement(
        'div',
        { className: classes.title },
        _react2.default.createElement(
          _Typography2.default,
          { variant: 'title' },
          'Nutrition'
        )
      )
    ),
    _react2.default.createElement(
      _Table2.default,
      { className: (0, _classnames2.default)(classes.table, _Table4.default.bordered) },
      _react2.default.createElement(
        _TableHead2.default,
        null,
        _react2.default.createElement(
          _TableRow2.default,
          null,
          _react2.default.createElement(
            _TableCell2.default,
            { padding: 'dense' },
            'Dessert (100g serving)'
          ),
          _react2.default.createElement(
            _TableCell2.default,
            { numeric: true },
            'Calories'
          ),
          _react2.default.createElement(
            _TableCell2.default,
            { numeric: true },
            'Fat (g)'
          ),
          _react2.default.createElement(
            _TableCell2.default,
            { numeric: true },
            'Carbs (g)'
          ),
          _react2.default.createElement(
            _TableCell2.default,
            { numeric: true },
            'Protein (g)'
          )
        )
      ),
      _react2.default.createElement(
        _TableBody2.default,
        null,
        data.map(function (n) {
          return [_react2.default.createElement(
            _TableRow2.default,
            { key: n.id },
            _react2.default.createElement(
              _TableCell2.default,
              { padding: 'dense' },
              n.name
            ),
            _react2.default.createElement(
              _TableCell2.default,
              { numeric: true },
              n.calories
            ),
            _react2.default.createElement(
              _TableCell2.default,
              { numeric: true },
              n.fat
            ),
            _react2.default.createElement(
              _TableCell2.default,
              { numeric: true },
              n.carbs
            ),
            _react2.default.createElement(
              _TableCell2.default,
              { numeric: true },
              n.protein
            )
          )];
        })
      )
    )
  );
}

BorderedTable.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

var _default = (0, _styles.withStyles)(styles)(BorderedTable);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/BorderedTable.js');

  __REACT_HOT_LOADER__.register(id, 'id', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/BorderedTable.js');

  __REACT_HOT_LOADER__.register(createData, 'createData', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/BorderedTable.js');

  __REACT_HOT_LOADER__.register(data, 'data', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/BorderedTable.js');

  __REACT_HOT_LOADER__.register(BorderedTable, 'BorderedTable', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/BorderedTable.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/BorderedTable.js');
}();

;

/***/ }),
/* 291 */
/*!**********************************************************!*\
  !*** ./src/app/containers/Tables/demos/TreeTableDemo.js ***!
  \**********************************************************/
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

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ 6);

var _Paper2 = _interopRequireDefault(_Paper);

var _redux = __webpack_require__(/*! redux */ 22);

var _reactRedux = __webpack_require__(/*! react-redux */ 12);

var _TreeTableActions = __webpack_require__(/*! ../../../actions/TreeTableActions */ 292);

var _TreeTableActions2 = _interopRequireDefault(_TreeTableActions);

var _components = __webpack_require__(/*! ./../../../components */ 8);

var _dataTreeTable = __webpack_require__(/*! ./dataTreeTable.js */ 293);

var _dataTreeTable2 = _interopRequireDefault(_dataTreeTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto'
    }
  };
};

var branch = 'treeTableArrow';

var TreeTableDemo = function (_Component) {
  _inherits(TreeTableDemo, _Component);

  function TreeTableDemo() {
    _classCallCheck(this, TreeTableDemo);

    return _possibleConstructorReturn(this, (TreeTableDemo.__proto__ || Object.getPrototypeOf(TreeTableDemo)).apply(this, arguments));
  }

  _createClass(TreeTableDemo, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          arrowMore = _props.arrowMore,
          treeOpen = _props.treeOpen,
          classes = _props.classes,
          toggleTree = _props.toggleTree;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Paper2.default,
          { className: classes.root },
          _react2.default.createElement(_components.TreeTable, {
            treeOpen: treeOpen,
            toggleTree: toggleTree,
            arrowMore: arrowMore,
            dataTable: _dataTreeTable2.default,
            branch: branch,
            icon: 'arrow'
          })
        )
      );
    }
  }]);

  return TreeTableDemo;
}(_react.Component);

TreeTableDemo.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  treeOpen: _propTypes2.default.object.isRequired,
  arrowMore: _propTypes2.default.object.isRequired,
  toggleTree: _propTypes2.default.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    force: state, // force state from reducer
    treeOpen: state.getIn([branch, 'treeOpen']),
    arrowMore: state.getIn([branch, 'arrowMore'])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toggleTree: (0, _redux.bindActionCreators)(_TreeTableActions2.default, dispatch)
  };
};

var TreeTableDemoMapped = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TreeTableDemo);

var _default = (0, _styles.withStyles)(styles)(TreeTableDemoMapped);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/TreeTableDemo.js');

  __REACT_HOT_LOADER__.register(branch, 'branch', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/TreeTableDemo.js');

  __REACT_HOT_LOADER__.register(TreeTableDemo, 'TreeTableDemo', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/TreeTableDemo.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/TreeTableDemo.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/TreeTableDemo.js');

  __REACT_HOT_LOADER__.register(TreeTableDemoMapped, 'TreeTableDemoMapped', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/TreeTableDemo.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/TreeTableDemo.js');
}();

;

/***/ }),
/* 292 */
/*!*********************************************!*\
  !*** ./src/app/actions/TreeTableActions.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(/*! ./actionTypes */ 10);

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var openAction = function openAction(keyID, child, branch) {
  return {
    branch: branch,
    type: branch + '/' + types.TOGGLE_TREE,
    keyID: keyID,
    child: child
  };
};

var _default = openAction;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(openAction, 'openAction', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/TreeTableActions.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/TreeTableActions.js');
}();

;

/***/ }),
/* 293 */
/*!**********************************************************!*\
  !*** ./src/app/containers/Tables/demos/dataTreeTable.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  head: [{
    label: 'KeyId'
  }, {
    label: 'Dessert (100g serving)'
  }, {
    label: 'Calories'
  }, {
    label: 'Fat(g)'
  }],
  body: [{
    id: '1',
    name: 'Frozen yoghurt',
    calories: 159,
    fat: 24,
    child: [{
      id: '1_1',
      name: 'Frozen child 1',
      calories: 159,
      fat: 24
    }, {
      id: '1_2',
      name: 'Frozen child 2',
      calories: 159,
      fat: 24,
      child: [{
        id: '1_2_1',
        name: 'Frozen grand child 1',
        calories: 159,
        fat: 24
      }]
    }]
  }, {
    id: '2',
    name: 'Eclair',
    calories: 159,
    fat: 24,
    child: [{
      id: '2_1',
      name: 'Eclair Child',
      calories: 159,
      fat: 24,
      child: [{
        id: '2_1_1',
        name: 'Eclair Grand Child 1',
        calories: 159,
        fat: 24
      }, {
        id: '2_1_2',
        name: 'Eclair Grand Child 2',
        calories: 159,
        fat: 24
      }]
    }]
  }, {
    id: '3',
    name: 'Cupcake',
    calories: 159,
    fat: 24
  }, {
    id: '4',
    name: 'Ginger Bread',
    calories: 159,
    fat: 24,
    child: [{
      id: '4_1',
      name: 'Ginger Bread Child',
      calories: 159,
      fat: 24,
      child: [{
        id: '4_1_1',
        name: 'Ginger Bread Grand Child 1',
        calories: 159,
        fat: 24,
        child: [{
          id: '4_1_1_1',
          name: 'Ginger Bread Super Grand Child 1',
          calories: 159,
          fat: 24
        }, {
          id: '4_1_1_2',
          name: 'Ginger Bread Super Grand Child 2',
          calories: 159,
          fat: 24
        }]
      }, {
        id: '4_1_2',
        name: 'Ginger Bread Grand Child 2',
        calories: 159,
        fat: 24
      }, {
        id: '4_1_3',
        name: 'Ginger Bread Grand Child 3',
        calories: 159,
        fat: 24
      }]
    }]
  }]
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 294 */
/*!**********************************************************!*\
  !*** ./src/app/containers/Tables/demos/CrudTableDemo.js ***!
  \**********************************************************/
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

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ 6);

var _Paper2 = _interopRequireDefault(_Paper);

var _redux = __webpack_require__(/*! redux */ 22);

var _reactRedux = __webpack_require__(/*! react-redux */ 12);

var _CrudTbActions = __webpack_require__(/*! ../../../actions/CrudTbActions */ 295);

var _components = __webpack_require__(/*! ./../../../components */ 8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Reducer Branch
var branch = 'crudTableDemo';

var styles = {
  root: {
    flexGrow: 1
  }
};

var anchorTable = [{
  name: 'id',
  label: 'Id',
  type: 'static',
  initialValue: '',
  hidden: true
}, {
  name: 'category',
  label: 'Category',
  type: 'selection',
  initialValue: 'Electronics',
  options: ['Electronics', 'Sporting Goods', 'Apparels', 'Other'],
  width: '150',
  hidden: false
}, {
  name: 'price',
  label: 'Price',
  type: 'number',
  initialValue: 0,
  width: '100',
  hidden: false
}, {
  name: 'date',
  label: 'Date Updated',
  type: 'date',
  initialValue: new Date(),
  width: 'auto',
  hidden: false
}, {
  name: 'time',
  label: 'Time Updated',
  type: 'time',
  initialValue: new Date(),
  width: 'auto',
  hidden: false
}, {
  name: 'name',
  label: 'Name',
  type: 'text',
  initialValue: '',
  width: 'auto',
  hidden: false
}, {
  name: 'available',
  label: 'Available',
  type: 'toggle',
  initialValue: true,
  width: '100',
  hidden: false
}, {
  name: 'edited',
  label: '',
  type: 'static',
  initialValue: '',
  hidden: true
}, {
  name: 'action',
  label: 'Action',
  type: 'static',
  initialValue: '',
  hidden: false
}];
var dataApi = [{
  id: 1,
  category: 'Sporting Goods',
  price: '49.99',
  date: '4/3/2018',
  time: 'Tue Apr 03 2018 00:00:00 GMT+0700 (WIB)',
  name: 'football',
  available: true,
  edited: false
}, {
  id: 2,
  category: 'Other',
  price: '9.99',
  date: '4/2/2018',
  time: 'Tue Apr 03 2018 00:00:00 GMT+0700 (WIB)',
  name: 'baseball',
  available: true,
  edited: false
}, {
  id: 3,
  category: 'Sporting Goods',
  price: '29.99',
  date: '4/1/2018',
  time: 'Tue Apr 03 2018 00:00:00 GMT+0700 (WIB)',
  name: 'basketball',
  available: false,
  edited: false
}, {
  id: 4,
  category: 'Electronics',
  price: '99.99',
  date: '3/30/2018',
  time: 'Tue Apr 03 2018 00:00:00 GMT+0700 (WIB)',
  name: 'iPod Touch',
  available: true,
  edited: false
}, {
  id: 5,
  category: 'Electronics',
  price: '399.99',
  date: '3/29/2018',
  time: 'Tue Apr 03 2018 00:00:00 GMT+0700 (WIB)',
  name: 'iPhone 5',
  available: false,
  edited: false
}, {
  id: 6,
  category: 'Electronics',
  price: '199.99',
  date: '3/28/2018',
  time: 'Tue Apr 03 2018 00:00:00 GMT+0700 (WIB)',
  name: 'nexus 7',
  available: true,
  edited: false
}];

var CrudTableDemo = function (_Component) {
  _inherits(CrudTableDemo, _Component);

  function CrudTableDemo() {
    _classCallCheck(this, CrudTableDemo);

    return _possibleConstructorReturn(this, (CrudTableDemo.__proto__ || Object.getPrototypeOf(CrudTableDemo)).apply(this, arguments));
  }

  _createClass(CrudTableDemo, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          fetchData = _props.fetchData,
          addEmptyRow = _props.addEmptyRow,
          dataTable = _props.dataTable,
          removeRow = _props.removeRow,
          updateRow = _props.updateRow,
          editRow = _props.editRow,
          finishEditRow = _props.finishEditRow,
          closeNotif = _props.closeNotif,
          messageNotif = _props.messageNotif;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_components.Notification, { close: function close() {
            return closeNotif(branch);
          }, message: messageNotif }),
        _react2.default.createElement(
          _Paper2.default,
          { className: classes.root },
          _react2.default.createElement(_components.CrudTable, {
            dataInit: dataApi,
            anchor: anchorTable,
            title: 'Inventory',
            dataTable: dataTable,
            fetchData: fetchData,
            addEmptyRow: addEmptyRow,
            removeRow: removeRow,
            updateRow: updateRow,
            editRow: editRow,
            finishEditRow: finishEditRow,
            branch: branch
          })
        )
      );
    }
  }]);

  return CrudTableDemo;
}(_react.Component);

CrudTableDemo.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  fetchData: _propTypes2.default.func.isRequired,
  dataTable: _propTypes2.default.object.isRequired,
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
    dataTable: state.getIn([branch, 'dataTable']),
    messageNotif: state.getIn([branch, 'notifMsg'])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchData: (0, _redux.bindActionCreators)(_CrudTbActions.fetchAction, dispatch),
    addEmptyRow: (0, _redux.bindActionCreators)(_CrudTbActions.addAction, dispatch),
    removeRow: (0, _redux.bindActionCreators)(_CrudTbActions.removeAction, dispatch),
    updateRow: (0, _redux.bindActionCreators)(_CrudTbActions.updateAction, dispatch),
    editRow: (0, _redux.bindActionCreators)(_CrudTbActions.editAction, dispatch),
    finishEditRow: (0, _redux.bindActionCreators)(_CrudTbActions.saveAction, dispatch),
    closeNotif: (0, _redux.bindActionCreators)(_CrudTbActions.closeNotifAction, dispatch)
  };
};

var CrudTableMapped = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CrudTableDemo);

var _default = (0, _styles.withStyles)(styles)(CrudTableMapped);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(branch, 'branch', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/CrudTableDemo.js');

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/CrudTableDemo.js');

  __REACT_HOT_LOADER__.register(anchorTable, 'anchorTable', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/CrudTableDemo.js');

  __REACT_HOT_LOADER__.register(dataApi, 'dataApi', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/CrudTableDemo.js');

  __REACT_HOT_LOADER__.register(CrudTableDemo, 'CrudTableDemo', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/CrudTableDemo.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/CrudTableDemo.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/CrudTableDemo.js');

  __REACT_HOT_LOADER__.register(CrudTableMapped, 'CrudTableMapped', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/CrudTableDemo.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/CrudTableDemo.js');
}();

;

/***/ }),
/* 295 */
/*!******************************************!*\
  !*** ./src/app/actions/CrudTbActions.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeNotifAction = exports.saveAction = exports.editAction = exports.updateAction = exports.removeAction = exports.addAction = exports.fetchAction = undefined;

var _actionTypes = __webpack_require__(/*! ./actionTypes */ 10);

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var fetchAction = exports.fetchAction = function fetchAction(items, branch) {
  return {
    branch: branch,
    type: branch + '/' + types.FETCH_DATA,
    items: items
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
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(fetchAction, 'fetchAction', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/CrudTbActions.js');

  __REACT_HOT_LOADER__.register(addAction, 'addAction', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/CrudTbActions.js');

  __REACT_HOT_LOADER__.register(removeAction, 'removeAction', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/CrudTbActions.js');

  __REACT_HOT_LOADER__.register(updateAction, 'updateAction', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/CrudTbActions.js');

  __REACT_HOT_LOADER__.register(editAction, 'editAction', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/CrudTbActions.js');

  __REACT_HOT_LOADER__.register(saveAction, 'saveAction', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/CrudTbActions.js');

  __REACT_HOT_LOADER__.register(closeNotifAction, 'closeNotifAction', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/actions/CrudTbActions.js');
}();

;

/***/ }),
/* 296 */
/*!*********************************************************!*\
  !*** ./src/app/containers/Tables/demos/AdvTableDemo.js ***!
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

var _components = __webpack_require__(/*! ./../../../components */ 8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var counter = 0;
function createData(name, calories, fat, carbs, protein) {
  counter += 1;
  return {
    id: counter,
    name: name,
    calories: calories,
    fat: fat,
    carbs: carbs,
    protein: protein
  };
}

var AdvTableDemo = function (_React$Component) {
  _inherits(AdvTableDemo, _React$Component);

  function AdvTableDemo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AdvTableDemo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AdvTableDemo.__proto__ || Object.getPrototypeOf(AdvTableDemo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      order: 'asc',
      orderBy: 'calories',
      selected: [],
      columnData: [{
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Dessert (100g serving)'
      }, {
        id: 'calories',
        numeric: true,
        disablePadding: false,
        label: 'Calories'
      }, {
        id: 'fat',
        numeric: true,
        disablePadding: false,
        label: 'Fat (g)'
      }, {
        id: 'carbs',
        numeric: true,
        disablePadding: false,
        label: 'Carbs (g)'
      }, {
        id: 'protein',
        numeric: true,
        disablePadding: false,
        label: 'Protein (g)'
      }],
      data: [createData('Cupcake', 305, 3.7, 67, 4.3), createData('Donut', 452, 25.0, 51, 4.9), createData('Eclair', 262, 16.0, 24, 6.0), createData('Frozen yoghurt', 159, 6.0, 24, 4.0), createData('Gingerbread', 356, 16.0, 49, 3.9), createData('Honeycomb', 408, 3.2, 87, 6.5), createData('Ice cream sandwich', 237, 9.0, 37, 4.3), createData('Jelly Bean', 375, 0.0, 94, 0.0), createData('KitKat', 518, 26.0, 65, 7.0), createData('Lollipop', 392, 0.2, 98, 0.0), createData('Marshmallow', 318, 0, 81, 2.0), createData('Nougat', 360, 19.0, 9, 37.0), createData('Oreo', 437, 18.0, 63, 4.0)].sort(function (a, b) {
        return a.calories < b.calories ? -1 : 1;
      }),
      page: 0,
      rowsPerPage: 5,
      defaultPerPage: 5,
      filterText: ''
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AdvTableDemo, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          order = _state.order,
          orderBy = _state.orderBy,
          selected = _state.selected,
          data = _state.data,
          page = _state.page,
          rowsPerPage = _state.rowsPerPage,
          defaultPerPage = _state.defaultPerPage,
          filterText = _state.filterText,
          columnData = _state.columnData;


      return _react2.default.createElement(_components.AdvTable, {
        order: order,
        orderBy: orderBy,
        selected: selected,
        data: data,
        page: page,
        rowsPerPage: rowsPerPage,
        defaultPerPage: defaultPerPage,
        filterText: filterText,
        columnData: columnData
      });
    }
  }]);

  return AdvTableDemo;
}(_react2.default.Component);

var _default = AdvTableDemo;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(counter, 'counter', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/AdvTableDemo.js');

  __REACT_HOT_LOADER__.register(createData, 'createData', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/AdvTableDemo.js');

  __REACT_HOT_LOADER__.register(AdvTableDemo, 'AdvTableDemo', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/AdvTableDemo.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/AdvTableDemo.js');
}();

;

/***/ }),
/* 297 */
/*!********************************************************!*\
  !*** ./src/app/containers/Tables/demos/StatusLabel.js ***!
  \********************************************************/
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

var _Toolbar = __webpack_require__(/*! @material-ui/core/Toolbar */ 13);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _classnames = __webpack_require__(/*! classnames */ 3);

var _classnames2 = _interopRequireDefault(_classnames);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ 4);

var _Typography2 = _interopRequireDefault(_Typography);

var _Table = __webpack_require__(/*! @material-ui/core/Table */ 17);

var _Table2 = _interopRequireDefault(_Table);

var _TableBody = __webpack_require__(/*! @material-ui/core/TableBody */ 21);

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableCell = __webpack_require__(/*! @material-ui/core/TableCell */ 7);

var _TableCell2 = _interopRequireDefault(_TableCell);

var _TableHead = __webpack_require__(/*! @material-ui/core/TableHead */ 18);

var _TableHead2 = _interopRequireDefault(_TableHead);

var _TableRow = __webpack_require__(/*! @material-ui/core/TableRow */ 14);

var _TableRow2 = _interopRequireDefault(_TableRow);

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ 6);

var _Paper2 = _interopRequireDefault(_Paper);

var _Chip = __webpack_require__(/*! @material-ui/core/Chip */ 50);

var _Chip2 = _interopRequireDefault(_Chip);

var _LinearProgress = __webpack_require__(/*! @material-ui/core/LinearProgress */ 125);

var _LinearProgress2 = _interopRequireDefault(_LinearProgress);

var _Table3 = __webpack_require__(/*! ../../../styles/components/Table.scss */ 11);

var _Table4 = _interopRequireDefault(_Table3);

var _Messages = __webpack_require__(/*! ../../../styles/components/Messages.scss */ 45);

var _Messages2 = _interopRequireDefault(_Messages);

var _Progress = __webpack_require__(/*! ../../../styles/components/Progress.scss */ 126);

var _Progress2 = _interopRequireDefault(_Progress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto'
    },
    chip: {
      margin: theme.spacing.unit,
      fontWeight: 'bold',
      color: '#FFF'
    }
  };
};

var id = 0;
function createData(name, progress, status) {
  id += 1;
  return {
    id: id,
    name: name,
    progress: progress,
    status: status
  };
}

var data = [createData('Frozen yoghurt', 24, 'Error'), createData('Ice cream sandwich', 37, 'Warning'), createData('Eclair', 24, 'Info'), createData('Cupcake', 67, 'Default'), createData('Gingerbread', 89, 'Success')];

function StatusLabel(props) {
  var classes = props.classes;

  var getStatus = function getStatus(status) {
    switch (status) {
      case 'Error':
        return _Messages2.default.bgError;
      case 'Warning':
        return _Messages2.default.bgWarning;
      case 'Info':
        return _Messages2.default.bgInfo;
      case 'Success':
        return _Messages2.default.bgSuccess;
      default:
        return _Messages2.default.bgDefault;
    }
  };
  var getProgress = function getProgress(status) {
    switch (status) {
      case 'Error':
        return _Progress2.default.bgError;
      case 'Warning':
        return _Progress2.default.bgWarning;
      case 'Info':
        return _Progress2.default.bgInfo;
      case 'Success':
        return _Progress2.default.bgSuccess;
      default:
        return _Progress2.default.bgDefault;
    }
  };
  return _react2.default.createElement(
    _Paper2.default,
    { className: classes.root },
    _react2.default.createElement(
      _Toolbar2.default,
      null,
      _react2.default.createElement(
        'div',
        { className: classes.title },
        _react2.default.createElement(
          _Typography2.default,
          { variant: 'title' },
          'Nutrition'
        )
      )
    ),
    _react2.default.createElement(
      _Table2.default,
      { className: (0, _classnames2.default)(classes.table, _Table4.default.stripped) },
      _react2.default.createElement(
        _TableHead2.default,
        null,
        _react2.default.createElement(
          _TableRow2.default,
          null,
          _react2.default.createElement(
            _TableCell2.default,
            { padding: 'dense' },
            'Dessert (100g serving)'
          ),
          _react2.default.createElement(
            _TableCell2.default,
            null,
            'Progress'
          ),
          _react2.default.createElement(
            _TableCell2.default,
            null,
            'Status'
          )
        )
      ),
      _react2.default.createElement(
        _TableBody2.default,
        null,
        data.map(function (n) {
          return [_react2.default.createElement(
            _TableRow2.default,
            { key: n.id },
            _react2.default.createElement(
              _TableCell2.default,
              { padding: 'dense' },
              n.name
            ),
            _react2.default.createElement(
              _TableCell2.default,
              { numeric: true },
              _react2.default.createElement(_LinearProgress2.default, { variant: 'determinate', className: getProgress(n.status), value: n.progress })
            ),
            _react2.default.createElement(
              _TableCell2.default,
              null,
              _react2.default.createElement(_Chip2.default, { label: n.status, className: (0, _classnames2.default)(classes.chip, getStatus(n.status)) })
            )
          )];
        })
      )
    )
  );
}

StatusLabel.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

var _default = (0, _styles.withStyles)(styles)(StatusLabel);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/StatusLabel.js');

  __REACT_HOT_LOADER__.register(id, 'id', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/StatusLabel.js');

  __REACT_HOT_LOADER__.register(createData, 'createData', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/StatusLabel.js');

  __REACT_HOT_LOADER__.register(data, 'data', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/StatusLabel.js');

  __REACT_HOT_LOADER__.register(StatusLabel, 'StatusLabel', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/StatusLabel.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/StatusLabel.js');
}();

;

/***/ }),
/* 298 */
/*!***********************************************************!*\
  !*** ./src/app/containers/Tables/demos/StatusColorRow.js ***!
  \***********************************************************/
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

var _Toolbar = __webpack_require__(/*! @material-ui/core/Toolbar */ 13);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _classnames = __webpack_require__(/*! classnames */ 3);

var _classnames2 = _interopRequireDefault(_classnames);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ 4);

var _Typography2 = _interopRequireDefault(_Typography);

var _Table = __webpack_require__(/*! @material-ui/core/Table */ 17);

var _Table2 = _interopRequireDefault(_Table);

var _TableBody = __webpack_require__(/*! @material-ui/core/TableBody */ 21);

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableCell = __webpack_require__(/*! @material-ui/core/TableCell */ 7);

var _TableCell2 = _interopRequireDefault(_TableCell);

var _TableHead = __webpack_require__(/*! @material-ui/core/TableHead */ 18);

var _TableHead2 = _interopRequireDefault(_TableHead);

var _TableRow = __webpack_require__(/*! @material-ui/core/TableRow */ 14);

var _TableRow2 = _interopRequireDefault(_TableRow);

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ 6);

var _Paper2 = _interopRequireDefault(_Paper);

var _Chip = __webpack_require__(/*! @material-ui/core/Chip */ 50);

var _Chip2 = _interopRequireDefault(_Chip);

var _LinearProgress = __webpack_require__(/*! @material-ui/core/LinearProgress */ 125);

var _LinearProgress2 = _interopRequireDefault(_LinearProgress);

var _Messages = __webpack_require__(/*! ../../../styles/components/Messages.scss */ 45);

var _Messages2 = _interopRequireDefault(_Messages);

var _Progress = __webpack_require__(/*! ../../../styles/components/Progress.scss */ 126);

var _Progress2 = _interopRequireDefault(_Progress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import tableStyles from 'ba-components/Table.scss';
var styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto'
    },
    chip: {
      margin: theme.spacing.unit,
      fontWeight: 500,
      color: '#FFF'
    }
  };
};

var id = 0;
function createData(name, progress, status) {
  id += 1;
  return {
    id: id,
    name: name,
    progress: progress,
    status: status
  };
}

var data = [createData('Frozen yoghurt', 24, 'Error'), createData('Ice cream sandwich', 37, 'Warning'), createData('Eclair', 24, 'Info'), createData('Cupcake', 67, 'Default'), createData('Gingerbread', 89, 'Success')];

function StatusLabel(props) {
  var classes = props.classes;

  var getStatus = function getStatus(status) {
    switch (status) {
      case 'Error':
        return _Messages2.default.bgError;
      case 'Warning':
        return _Messages2.default.bgWarning;
      case 'Info':
        return _Messages2.default.bgInfo;
      case 'Success':
        return _Messages2.default.bgSuccess;
      default:
        return _Messages2.default.bgDefault;
    }
  };
  var getProgress = function getProgress(status) {
    switch (status) {
      case 'Error':
        return _Progress2.default.bgError;
      case 'Warning':
        return _Progress2.default.bgWarning;
      case 'Info':
        return _Progress2.default.bgInfo;
      case 'Success':
        return _Progress2.default.bgSuccess;
      default:
        return _Progress2.default.bgDefault;
    }
  };
  return _react2.default.createElement(
    _Paper2.default,
    { className: classes.root },
    _react2.default.createElement(
      _Toolbar2.default,
      null,
      _react2.default.createElement(
        'div',
        { className: classes.title },
        _react2.default.createElement(
          _Typography2.default,
          { variant: 'title' },
          'Nutrition'
        )
      )
    ),
    _react2.default.createElement(
      _Table2.default,
      { className: classes.table },
      _react2.default.createElement(
        _TableHead2.default,
        null,
        _react2.default.createElement(
          _TableRow2.default,
          null,
          _react2.default.createElement(
            _TableCell2.default,
            { padding: 'dense' },
            'Dessert (100g serving)'
          ),
          _react2.default.createElement(
            _TableCell2.default,
            null,
            'Progress'
          ),
          _react2.default.createElement(
            _TableCell2.default,
            null,
            'Status'
          )
        )
      ),
      _react2.default.createElement(
        _TableBody2.default,
        null,
        data.map(function (n) {
          return [_react2.default.createElement(
            _TableRow2.default,
            { key: n.id, className: getStatus(n.status) },
            _react2.default.createElement(
              _TableCell2.default,
              { padding: 'dense' },
              n.name
            ),
            _react2.default.createElement(
              _TableCell2.default,
              { numeric: true },
              _react2.default.createElement(_LinearProgress2.default, { variant: 'determinate', className: getProgress(n.status), value: n.progress })
            ),
            _react2.default.createElement(
              _TableCell2.default,
              null,
              _react2.default.createElement(_Chip2.default, { label: n.status, className: (0, _classnames2.default)(classes.chip, getStatus(n.status)) })
            )
          )];
        })
      )
    )
  );
}

StatusLabel.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

var _default = (0, _styles.withStyles)(styles)(StatusLabel);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/StatusColorRow.js');

  __REACT_HOT_LOADER__.register(id, 'id', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/StatusColorRow.js');

  __REACT_HOT_LOADER__.register(createData, 'createData', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/StatusColorRow.js');

  __REACT_HOT_LOADER__.register(data, 'data', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/StatusColorRow.js');

  __REACT_HOT_LOADER__.register(StatusLabel, 'StatusLabel', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/StatusColorRow.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/StatusColorRow.js');
}();

;

/***/ }),
/* 299 */
/*!*******************************************************!*\
  !*** ./src/app/containers/Tables/demos/EmptyTable.js ***!
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

var _styles = __webpack_require__(/*! @material-ui/core/styles */ 2);

var _Toolbar = __webpack_require__(/*! @material-ui/core/Toolbar */ 13);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ 4);

var _Typography2 = _interopRequireDefault(_Typography);

var _Table = __webpack_require__(/*! @material-ui/core/Table */ 17);

var _Table2 = _interopRequireDefault(_Table);

var _TableCell = __webpack_require__(/*! @material-ui/core/TableCell */ 7);

var _TableCell2 = _interopRequireDefault(_TableCell);

var _TableHead = __webpack_require__(/*! @material-ui/core/TableHead */ 18);

var _TableHead2 = _interopRequireDefault(_TableHead);

var _TableRow = __webpack_require__(/*! @material-ui/core/TableRow */ 14);

var _TableRow2 = _interopRequireDefault(_TableRow);

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ 6);

var _Paper2 = _interopRequireDefault(_Paper);

var _components = __webpack_require__(/*! ./../../../components */ 8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto'
    },
    table: {
      minWidth: 700
    }
  };
};

function EmptyTable(props) {
  var classes = props.classes;

  return _react2.default.createElement(
    _Paper2.default,
    { className: classes.root },
    _react2.default.createElement(
      _Toolbar2.default,
      null,
      _react2.default.createElement(
        'div',
        { className: classes.title },
        _react2.default.createElement(
          _Typography2.default,
          { variant: 'title' },
          'Nutrition'
        )
      )
    ),
    _react2.default.createElement(
      _Table2.default,
      { className: classes.table },
      _react2.default.createElement(
        _TableHead2.default,
        null,
        _react2.default.createElement(
          _TableRow2.default,
          null,
          _react2.default.createElement(
            _TableCell2.default,
            { padding: 'dense' },
            'Dessert (100g serving)'
          ),
          _react2.default.createElement(
            _TableCell2.default,
            { numeric: true },
            'Calories'
          ),
          _react2.default.createElement(
            _TableCell2.default,
            { numeric: true },
            'Fat (g)'
          ),
          _react2.default.createElement(
            _TableCell2.default,
            { numeric: true },
            'Carbs (g)'
          ),
          _react2.default.createElement(
            _TableCell2.default,
            { numeric: true },
            'Protein (g)'
          )
        )
      )
    ),
    _react2.default.createElement(_components.EmptyData, null)
  );
}

EmptyTable.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

var _default = (0, _styles.withStyles)(styles)(EmptyTable);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/EmptyTable.js');

  __REACT_HOT_LOADER__.register(EmptyTable, 'EmptyTable', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/EmptyTable.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/EmptyTable.js');
}();

;

/***/ }),
/* 300 */
/*!**********************************************************!*\
  !*** ./src/app/containers/Tables/demos/TrackingTable.js ***!
  \**********************************************************/
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

var _reactHelmet = __webpack_require__(/*! react-helmet */ 24);

var _brand = __webpack_require__(/*! ../../../constants/brand.js */ 19);

var _brand2 = _interopRequireDefault(_brand);

var _screenshoot = __webpack_require__(/*! ../../../constants/screenshoot.js */ 301);

var _screenshoot2 = _interopRequireDefault(_screenshoot);

var _components = __webpack_require__(/*! ./../../../components */ 8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TrackingTable = function (_React$Component) {
  _inherits(TrackingTable, _React$Component);

  function TrackingTable() {
    _classCallCheck(this, TrackingTable);

    return _possibleConstructorReturn(this, (TrackingTable.__proto__ || Object.getPrototypeOf(TrackingTable)).apply(this, arguments));
  }

  _createClass(TrackingTable, [{
    key: 'render',
    value: function render() {
      var title = _brand2.default.name + ' - Dashboard v2';
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
          _react2.default.createElement('meta', { name: 'description', content: description }),
          _react2.default.createElement('meta', { property: 'og:title', content: title }),
          _react2.default.createElement('meta', { property: 'og:description', content: description }),
          _react2.default.createElement('meta', { property: 'twitter:title', content: title }),
          _react2.default.createElement('meta', { property: 'twitter:description', content: description })
        ),
        _react2.default.createElement(_components.MarketingAds, { title: 'Tracking Table', preview: _screenshoot2.default.trackingTable, link: 'http://boss.ux-maestro.com/app/tables/basic-table' })
      );
    }
  }]);

  return TrackingTable;
}(_react2.default.Component);

var _default = TrackingTable;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TrackingTable, 'TrackingTable', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/TrackingTable.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Tables/demos/TrackingTable.js');
}();

;

/***/ }),
/* 301 */
/*!******************************************!*\
  !*** ./src/app/constants/screenshoot.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var screenshoots = {
  dashboardv2: 'https://res.cloudinary.com/ux-maestro/image/upload/v1531879965/boss-lite/dashboardv2.jpg',
  trackingTable: 'https://res.cloudinary.com/ux-maestro/image/upload/v1531879978/boss-lite/tracking_table.jpg',
  crudTable: 'https://res.cloudinary.com/ux-maestro/image/upload/v1531879960/boss-lite/crud_table.jpg',
  treetable: 'https://res.cloudinary.com/ux-maestro/image/upload/v1531879979/boss-lite/treetable.jpg',
  datatable: 'https://res.cloudinary.com/ux-maestro/image/upload/v1531879965/boss-lite/datatable.jpg',
  ratting: 'https://res.cloudinary.com/ux-maestro/image/upload/v1531879972/boss-lite/ratting.jpg',
  slider: 'https://res.cloudinary.com/ux-maestro/image/upload/v1531879976/boss-lite/slider.jpg',
  texteditor: 'https://res.cloudinary.com/ux-maestro/image/upload/v1531879984/boss-lite/texteditor.jpg',
  upload: 'https://res.cloudinary.com/ux-maestro/image/upload/v1531879992/boss-lite/upload.jpg',
  imageLightbox: 'https://res.cloudinary.com/ux-maestro/image/upload/v1531879969/boss-lite/imageLightbox.jpg',
  dividers: 'https://res.cloudinary.com/ux-maestro/image/upload/v1531879962/boss-lite/dividers.jpg',
  pagination: 'https://res.cloudinary.com/ux-maestro/image/upload/v1531879972/boss-lite/pagination.jpg',
  sliderCarousel: 'https://res.cloudinary.com/ux-maestro/image/upload/v1531879974/boss-lite/sliderCarousel.jpg',
  sliderCarousel2: 'https://res.cloudinary.com/ux-maestro/image/upload/v1531879982/boss-lite/sliderCarousel2.jpg',
  chat: 'https://res.cloudinary.com/ux-maestro/image/upload/v1531879963/boss-lite/chat.jpg',
  email: 'https://res.cloudinary.com/ux-maestro/image/upload/v1531879966/boss-lite/email.jpg',
  ecommerce: 'https://res.cloudinary.com/ux-maestro/image/upload/v1531879963/boss-lite/ecommerce.jpg',
  socmed: 'https://res.cloudinary.com/ux-maestro/image/upload/v1531879984/boss-lite/socmed.jpg',
  profile: 'https://res.cloudinary.com/ux-maestro/image/upload/v1531879972/boss-lite/profile.jpg',
  gallery: 'https://res.cloudinary.com/ux-maestro/image/upload/v1531879978/boss-lite/gallery.jpg',
  lock: 'https://res.cloudinary.com/ux-maestro/image/upload/v1531879969/boss-lite/lock.jpg',
  maintenance: 'https://res.cloudinary.com/ux-maestro/image/upload/v1531879969/boss-lite/maintenance.jpg',
  reset: 'https://res.cloudinary.com/ux-maestro/image/upload/v1531879972/boss-lite/reset.jpg',
  traffic: 'https://res.cloudinary.com/ux-maestro/image/upload/v1531879990/boss-lite/trafic.jpg',
  street: 'https://res.cloudinary.com/ux-maestro/image/upload/v1531879989/boss-lite/street.jpg'
};

var _default = screenshoots;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(screenshoots, 'screenshoots', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/constants/screenshoot.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/constants/screenshoot.js');
}();

;

/***/ }),
/* 302 */
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

var _reactHelmet = __webpack_require__(/*! react-helmet */ 24);

var _brand = __webpack_require__(/*! ../../constants/brand.js */ 19);

var _brand2 = _interopRequireDefault(_brand);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ 25);

var _components = __webpack_require__(/*! ./../../components */ 8);

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

var _default = NotFound;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(title, 'title', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/NotFound/NotFound.js');

  __REACT_HOT_LOADER__.register(description, 'description', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/NotFound/NotFound.js');

  __REACT_HOT_LOADER__.register(NotFound, 'NotFound', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/NotFound/NotFound.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/NotFound/NotFound.js');
}();

;

/***/ }),
/* 303 */
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

var _appStylesJss = __webpack_require__(/*! ./../../../components/App/appStyles-jss */ 43);

var _appStylesJss2 = _interopRequireDefault(_appStylesJss);

var _Error = __webpack_require__(/*! ./../Error */ 304);

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

var _default = (0, _styles.withStyles)(_appStylesJss2.default)(NotFoundDedicated);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(NotFoundDedicated, 'NotFoundDedicated', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Pages/Standalone/NotFoundDedicated.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Pages/Standalone/NotFoundDedicated.js');
}();

;

/***/ }),
/* 304 */
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

var _reactHelmet = __webpack_require__(/*! react-helmet */ 24);

var _brand = __webpack_require__(/*! ../../../constants/brand.js */ 19);

var _brand2 = _interopRequireDefault(_brand);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ 25);

var _components = __webpack_require__(/*! ./../../../components */ 8);

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

var _default = Error;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(title, 'title', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Pages/Error/index.js');

  __REACT_HOT_LOADER__.register(description, 'description', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Pages/Error/index.js');

  __REACT_HOT_LOADER__.register(Error, 'Error', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Pages/Error/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/Pages/Error/index.js');
}();

;

/***/ }),
/* 305 */
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

var _reactGa = __webpack_require__(/*! react-ga */ 306);

var _reactGa2 = _interopRequireDefault(_reactGa);

var _config = __webpack_require__(/*! ../config */ 40);

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
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(withTracker, 'withTracker', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/containers/withTracker.js');
}();

;

/***/ }),
/* 306 */
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),
/* 307 */
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

var _isUndefined = __webpack_require__(/*! lodash/isUndefined */ 308);

var _isUndefined2 = _interopRequireDefault(_isUndefined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env = process.env.NODE_ENV;
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

var _default = {
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
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(env, 'env', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/config/default.js');

  __REACT_HOT_LOADER__.register(ssl, 'ssl', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/config/default.js');

  __REACT_HOT_LOADER__.register(prefix, 'prefix', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/config/default.js');

  __REACT_HOT_LOADER__.register(host, 'host', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/config/default.js');

  __REACT_HOT_LOADER__.register(port, 'port', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/config/default.js');

  __REACT_HOT_LOADER__.register(apiSsl, 'apiSsl', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/config/default.js');

  __REACT_HOT_LOADER__.register(prefixHost, 'prefixHost', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/config/default.js');

  __REACT_HOT_LOADER__.register(apiPort, 'apiPort', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/config/default.js');

  __REACT_HOT_LOADER__.register(apiHost, 'apiHost', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/config/default.js');

  __REACT_HOT_LOADER__.register(ssr, 'ssr', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/config/default.js');

  __REACT_HOT_LOADER__.register(googleAnaliticsId, 'googleAnaliticsId', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/config/default.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/config/default.js');
}();

;

/***/ }),
/* 308 */
/*!*************************************!*\
  !*** external "lodash/isUndefined" ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("lodash/isUndefined");

/***/ }),
/* 309 */
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
var _default = {
  development: {
    isProd: false
  },
  production: {
    isProd: true
  }
}[process.env.NODE_ENV || 'development'];
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/config/environment.js');
}();

;

/***/ }),
/* 310 */
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

var _server = __webpack_require__(/*! react-dom/server */ 80);

var _reactHelmet = __webpack_require__(/*! react-helmet */ 24);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _config = __webpack_require__(/*! ./../../app/config */ 40);

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

var _default = Html;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Html, 'Html', '/root/Desktop/ui-itss/passenger-transport-admin/src/server/SSR/html.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/server/SSR/html.js');
}();

;

/***/ }),
/* 311 */
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

var _axios = __webpack_require__(/*! axios */ 312);

var _axios2 = _interopRequireDefault(_axios);

var _config = __webpack_require__(/*! ./../app/config */ 40);

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

var _default = ApiClient;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(methods, 'methods', '/root/Desktop/ui-itss/passenger-transport-admin/src/helpers/ApiClient.js');

  __REACT_HOT_LOADER__.register(formatUrl, 'formatUrl', '/root/Desktop/ui-itss/passenger-transport-admin/src/helpers/ApiClient.js');

  __REACT_HOT_LOADER__.register(_ApiClient, '_ApiClient', '/root/Desktop/ui-itss/passenger-transport-admin/src/helpers/ApiClient.js');

  __REACT_HOT_LOADER__.register(ApiClient, 'ApiClient', '/root/Desktop/ui-itss/passenger-transport-admin/src/helpers/ApiClient.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/root/Desktop/ui-itss/passenger-transport-admin/src/helpers/ApiClient.js');
}();

;

/***/ }),
/* 312 */
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 313 */
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

var _immutable = __webpack_require__(/*! immutable */ 15);

var _redux = __webpack_require__(/*! redux */ 22);

var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ 127);

var _reducer = __webpack_require__(/*! ./reducer */ 314);

var _reducer2 = _interopRequireDefault(_reducer);

var _clientMiddleware = __webpack_require__(/*! ./middleware/clientMiddleware */ 325);

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
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(configureStore, 'configureStore', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/store.js');
}();

;

/***/ }),
/* 314 */
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

var _immutable = __webpack_require__(/*! redux-form/immutable */ 37);

var _reduxImmutablejs = __webpack_require__(/*! redux-immutablejs */ 315);

var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ 127);

var _ui = __webpack_require__(/*! ./modules/ui */ 316);

var _ui2 = _interopRequireDefault(_ui);

var _treeTable = __webpack_require__(/*! ./modules/treeTable */ 317);

var _treeTable2 = _interopRequireDefault(_treeTable);

var _crudTable = __webpack_require__(/*! ./modules/crudTable */ 318);

var _crudTable2 = _interopRequireDefault(_crudTable);

var _initForm = __webpack_require__(/*! ./modules/initForm */ 319);

var _initForm2 = _interopRequireDefault(_initForm);

var _login = __webpack_require__(/*! ./modules/login */ 320);

var _login2 = _interopRequireDefault(_login);

var _ecommerce = __webpack_require__(/*! ./modules/ecommerce */ 321);

var _ecommerce2 = _interopRequireDefault(_ecommerce);

var _contact = __webpack_require__(/*! ./modules/contact */ 322);

var _contact2 = _interopRequireDefault(_contact);

var _calendar = __webpack_require__(/*! ./modules/calendar */ 323);

var _calendar2 = _interopRequireDefault(_calendar);

var _routeTable = __webpack_require__(/*! ./modules/routeTable */ 324);

var _routeTable2 = _interopRequireDefault(_routeTable);

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
    login: _login2.default,
    calendar: _calendar2.default,
    ecommerce: _ecommerce2.default,
    contact: _contact2.default,
    routeTable: branchReducer(_routeTable2.default, 'routeTable'),
    treeTableArrow: branchReducer(_treeTable2.default, 'treeTableArrow'),
    treeTablePM: branchReducer(_treeTable2.default, 'treeTablePM')
    // crudTableDemo: branchReducer(crudTable, 'crudTableDemo'),
  });
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(branchReducer, 'branchReducer', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/reducer.js');

  __REACT_HOT_LOADER__.register(createReducer, 'createReducer', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/reducer.js');
}();

;

/***/ }),
/* 315 */
/*!************************************!*\
  !*** external "redux-immutablejs" ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("redux-immutablejs");

/***/ }),
/* 316 */
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

var _immutable = __webpack_require__(/*! immutable */ 15);

var _menu = __webpack_require__(/*! ../../constants/menu.js */ 88);

var _menu2 = _interopRequireDefault(_menu);

var _actionTypes = __webpack_require__(/*! ../../actions/actionTypes */ 10);

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
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/modules/ui.js');

  __REACT_HOT_LOADER__.register(getMenus, 'getMenus', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/modules/ui.js');

  __REACT_HOT_LOADER__.register(setNavCollapse, 'setNavCollapse', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/modules/ui.js');

  __REACT_HOT_LOADER__.register(initialImmutableState, 'initialImmutableState', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/modules/ui.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/modules/ui.js');
}();

;

/***/ }),
/* 317 */
/*!********************************************!*\
  !*** ./src/app/redux/modules/treeTable.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _immutable = __webpack_require__(/*! immutable */ 15);

var _actionTypes = __webpack_require__(/*! ../../actions/actionTypes */ 10);

var initialState = {
  treeOpen: (0, _immutable.List)([]),
  arrowMore: (0, _immutable.List)([])
};

var initialImmutableState = (0, _immutable.fromJS)(initialState);

// Collect existing child and parent id's
function collectId(id, listedId, collapsed, arrowLess) {
  arrowLess.push(id);
  for (var i = 0; i < listedId.size; i += 1) {
    if (listedId.getIn([i]).startsWith(id + '_')) {
      collapsed.push(listedId.getIn([i]));
      arrowLess.push(listedId.getIn([i]));
    }
  }
}

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialImmutableState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var branch = action.branch;

  switch (action.type) {
    case branch + '/' + _actionTypes.TOGGLE_TREE:
      return state.withMutations(function (mutableState) {
        var listedId = state.get('treeOpen');
        var collapsed = [];
        var arrowLess = [];

        // Collect existing id
        collectId(action.keyID, listedId, collapsed, arrowLess);

        // Collapse and Expand row
        if (collapsed.length > 0) {
          // Collapse tree table
          mutableState.update('treeOpen', function (treeOpen) {
            return treeOpen.filter(function (x) {
              return collapsed.indexOf(x) < 0;
            });
          });
          mutableState.update('arrowMore', function (arrowMore) {
            return arrowMore.filter(function (x) {
              return arrowLess.indexOf(x) < 0;
            });
          });
        } else {
          // Expand tree table
          mutableState.update('arrowMore', function (arrowMore) {
            return arrowMore.push(action.keyID);
          });
          action.child.map(function (item) {
            mutableState.update('treeOpen', function (treeOpen) {
              return treeOpen.push(item.id);
            });
            return true;
          });
        }
      });
    default:
      return state;
  }
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/modules/treeTable.js');

  __REACT_HOT_LOADER__.register(initialImmutableState, 'initialImmutableState', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/modules/treeTable.js');

  __REACT_HOT_LOADER__.register(collectId, 'collectId', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/modules/treeTable.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/modules/treeTable.js');
}();

;

/***/ }),
/* 318 */
/*!********************************************!*\
  !*** ./src/app/redux/modules/crudTable.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _immutable = __webpack_require__(/*! immutable */ 15);

var _notifMessage = __webpack_require__(/*! ../../constants/notifMessage.js */ 41);

var _notifMessage2 = _interopRequireDefault(_notifMessage);

var _actionTypes = __webpack_require__(/*! ../../actions/actionTypes */ 10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var initialState = {
  dataTable: (0, _immutable.List)([{
    id: 'a654',
    departure: 'Giap Bap',
    destination: 'Cam Pha',
    stations: 5,
    active: true
  }, {
    id: 's234',
    departure: 'My Dinh',
    destination: 'Hai Phong',
    stations: 3,
    active: true
  }]),
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
        var items = (0, _immutable.fromJS)(action.items);
        mutableState.set('dataTable', items);
      });
    case branch + '/' + _actionTypes.ADD_EMPTY_ROW:
      return state.withMutations(function (mutableState) {
        var raw = state.get('dataTable').last();
        var initial = initialItem(raw, action.anchor);
        mutableState.update('dataTable', function (dataTable) {
          return dataTable.unshift(initial);
        });
      });
    case branch + '/' + _actionTypes.REMOVE_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('dataTable').indexOf(action.item);
        mutableState.update('dataTable', function (dataTable) {
          return dataTable.splice(index, 1);
        }).set('notifMsg', _notifMessage2.default.removed);
      });
    case branch + '/' + _actionTypes.UPDATE_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('dataTable').indexOf(action.item);
        var cellTarget = action.event.target.name;
        var newVal = function newVal(type) {
          if (type === 'checkbox') {
            return action.event.target.checked;
          }
          return action.event.target.value;
        };
        mutableState.update('dataTable', function (dataTable) {
          return dataTable.setIn([index, cellTarget], newVal(action.event.target.type));
        });
      });
    case branch + '/' + _actionTypes.EDIT_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('dataTable').indexOf(action.item);
        mutableState.update('dataTable', function (dataTable) {
          return dataTable.setIn([index, 'edited'], true);
        });
      });
    case branch + '/' + _actionTypes.SAVE_ROW:
      return state.withMutations(function (mutableState) {
        var index = state.get('dataTable').indexOf(action.item);
        mutableState.update('dataTable', function (dataTable) {
          return dataTable.setIn([index, 'edited'], false);
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
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/modules/crudTable.js');

  __REACT_HOT_LOADER__.register(initialItem, 'initialItem', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/modules/crudTable.js');

  __REACT_HOT_LOADER__.register(initialImmutableState, 'initialImmutableState', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/modules/crudTable.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/modules/crudTable.js');
}();

;

/***/ }),
/* 319 */
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

var _immutable = __webpack_require__(/*! immutable */ 15);

var _actionTypes = __webpack_require__(/*! ../../actions/actionTypes */ 10);

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
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/modules/initForm.js');

  __REACT_HOT_LOADER__.register(initialImmutableState, 'initialImmutableState', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/modules/initForm.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/modules/initForm.js');
}();

;

/***/ }),
/* 320 */
/*!****************************************!*\
  !*** ./src/app/redux/modules/login.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _immutable = __webpack_require__(/*! immutable */ 15);

var _actionTypes = __webpack_require__(/*! ../../actions/actionTypes */ 10);

var initialState = {
  usersLogin: (0, _immutable.Map)({
    email: 'johndoe@mail.com',
    password: '12345678',
    remember: false
  })
};
var initialImmutableState = (0, _immutable.fromJS)(initialState);
function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialImmutableState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _actionTypes.INIT:
      return state;
    default:
      return state;
  }
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/modules/login.js');

  __REACT_HOT_LOADER__.register(initialImmutableState, 'initialImmutableState', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/modules/login.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/modules/login.js');
}();

;

/***/ }),
/* 321 */
/*!********************************************!*\
  !*** ./src/app/redux/modules/ecommerce.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _immutable = __webpack_require__(/*! immutable */ 15);

var _notifMessage = __webpack_require__(/*! ../../constants/notifMessage.js */ 41);

var _notifMessage2 = _interopRequireDefault(_notifMessage);

var _actionTypes = __webpack_require__(/*! ./../../actions/actionTypes */ 10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  productList: (0, _immutable.List)([]),
  cart: (0, _immutable.List)([]),
  totalItems: 0,
  totalPrice: 0,
  productIndex: 0,
  keywordValue: '',
  notifMsg: ''
};

var itemId = [];

var initialImmutableState = (0, _immutable.fromJS)(initialState);
function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialImmutableState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _actionTypes.FETCH_PRODUCT_DATA:
      return state.withMutations(function (mutableState) {
        var items = (0, _immutable.fromJS)(action.items);
        mutableState.set('productList', items);
      });
    case _actionTypes.SEARCH_PRODUCT:
      return state.withMutations(function (mutableState) {
        action.keyword.persist();
        var keyword = action.keyword.target.value.toLowerCase();
        mutableState.set('keywordValue', keyword);
      });
    case _actionTypes.ADD_TO_CART:
      return state.withMutations(function (mutableState) {
        var item = (0, _immutable.fromJS)(action.item);
        var qty = Number(item.get('quantity'));
        var price = item.get('price');
        var index = itemId.indexOf(action.item.id);
        if (index > -1) {
          // If item already added to cart
          mutableState.update('cart', function (cart) {
            return cart.setIn([index, 'quantity'], state.getIn(['cart', index, 'quantity']) + qty);
          });
        } else {
          // item not exist in cart
          itemId.push(action.item.id);
          mutableState.update('cart', function (cart) {
            return cart.push(item);
          });
        }
        mutableState.set('totalItems', state.get('totalItems') + qty).set('totalPrice', state.get('totalPrice') + price * qty).set('notifMsg', _notifMessage2.default.addCart);
      });
    case _actionTypes.DELETE_CART_ITEM:
      return state.withMutations(function (mutableState) {
        var index = state.get('cart').indexOf(action.item);
        var qty = Number(action.item.get('quantity'));
        var price = action.item.get('price');
        itemId = itemId.filter(function (item) {
          return item !== action.item.get('id');
        });
        mutableState.update('cart', function (cart) {
          return cart.splice(index, 1);
        }).set('totalItems', state.get('totalItems') - qty).set('totalPrice', state.get('totalPrice') - price * qty).set('notifMsg', _notifMessage2.default.removed);
      });
    case _actionTypes.CHECKOUT:
      itemId = [];
      return state.withMutations(function (mutableState) {
        mutableState.set('cart', (0, _immutable.List)([])).set('totalItems', 0).set('totalPrice', 0).set('notifMsg', _notifMessage2.default.checkout);
      });
    case _actionTypes.SHOW_DETAIL_PRODUCT:
      return state.withMutations(function (mutableState) {
        var index = state.get('productList').indexOf(action.item);
        mutableState.set('productIndex', index);
      });
    case _actionTypes.CLOSE_NOTIF:
      return state.withMutations(function (mutableState) {
        mutableState.set('notifMsg', '');
      });
    default:
      return state;
  }
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/modules/ecommerce.js');

  __REACT_HOT_LOADER__.register(itemId, 'itemId', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/modules/ecommerce.js');

  __REACT_HOT_LOADER__.register(initialImmutableState, 'initialImmutableState', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/modules/ecommerce.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/modules/ecommerce.js');
}();

;

/***/ }),
/* 322 */
/*!******************************************!*\
  !*** ./src/app/redux/modules/contact.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _immutable = __webpack_require__(/*! immutable */ 15);

var _notifMessage = __webpack_require__(/*! ../../constants/notifMessage.js */ 41);

var _notifMessage2 = _interopRequireDefault(_notifMessage);

var _actionTypes = __webpack_require__(/*! ./../../actions/actionTypes */ 10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  contactList: (0, _immutable.List)([]),
  formValues: (0, _immutable.Map)(),
  selectedIndex: 0,
  selectedId: '',
  keywordValue: '',
  avatarInit: '',
  openFrm: false,
  showMobileDetail: false,
  notifMsg: ''
};
var editingIndex = 0;

var initialImmutableState = (0, _immutable.fromJS)(initialState);

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialImmutableState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _actionTypes.FETCH_CONTACT_DATA:
      return state.withMutations(function (mutableState) {
        var items = (0, _immutable.fromJS)(action.items);
        mutableState.set('contactList', items);
      });
    case _actionTypes.SEARCH_CONTACT:
      return state.withMutations(function (mutableState) {
        action.keyword.persist();
        var keyword = action.keyword.target.value.toLowerCase();
        mutableState.set('keywordValue', keyword);
      });
    case _actionTypes.ADD_CONTACT:
      return state.withMutations(function (mutableState) {
        mutableState.set('openFrm', true).set('formValues', (0, _immutable.Map)()).set('avatarInit', '');
      });
    case _actionTypes.CLOSE_CONTACT_FORM:
      return state.withMutations(function (mutableState) {
        mutableState.set('openFrm', false).set('formValues', (0, _immutable.Map)()).set('avatarInit', '').set('notifMsg', _notifMessage2.default.discard);
      });
    case _actionTypes.EDIT_CONTACT:
      return state.withMutations(function (mutableState) {
        editingIndex = state.get('contactList').indexOf(action.item);
        mutableState.set('openFrm', true).set('selectedId', action.item.get('id')).set('formValues', action.item).set('avatarInit', action.item.get('avatar'));
      });
    case _actionTypes.SUBMIT_CONTACT:
      return state.withMutations(function (mutableState) {
        var initItem = (0, _immutable.Map)(action.newData);
        if (state.get('selectedId') === action.newData.get('id')) {
          // Update data
          var avatar = action.avatar !== '' ? action.avatar : state.get('avatarInit');
          var newItem = initItem.update(function (initUpdated) {
            return initUpdated.set('avatar', avatar);
          });
          mutableState.update('contactList', function (contactList) {
            return contactList.setIn([editingIndex], newItem);
          }).set('notifMsg', _notifMessage2.default.updated);
        } else {
          // Insert data
          var _avatar = action.avatar !== '' ? action.avatar : '/images/pp_boy.svg';
          var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
          var _newItem = initItem.update('id', function () {
            var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : id;
            return val;
          }).update('avatar', function () {
            var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _avatar;
            return val;
          }).update('favorited', function () {
            var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            return val;
          });
          mutableState.update('contactList', function (contactList) {
            return contactList.unshift(_newItem);
          }).set('selectedIndex', 0).set('notifMsg', _notifMessage2.default.saved);
        }
        mutableState.set('formValues', (0, _immutable.Map)()).set('avatarInit', '').set('openFrm', false);
      });
    case _actionTypes.SHOW_DETAIL_CONTACT:
      return state.withMutations(function (mutableState) {
        var index = state.get('contactList').indexOf(action.item);
        mutableState.set('selectedIndex', index).set('showMobileDetail', true);
      });
    case _actionTypes.HIDE_DETAIL:
      return state.withMutations(function (mutableState) {
        mutableState.set('showMobileDetail', false);
      });
    case _actionTypes.DELETE_CONTACT:
      return state.withMutations(function (mutableState) {
        var index = state.get('contactList').indexOf(action.item);
        mutableState.update('contactList', function (contactList) {
          return contactList.splice(index, 1);
        }).set('notifMsg', _notifMessage2.default.removed);
      });
    case _actionTypes.TOGGLE_FAVORITE:
      return state.withMutations(function (mutableState) {
        var index = state.get('contactList').indexOf(action.item);
        mutableState.update('contactList', function (contactList) {
          return contactList.setIn([index, 'favorited'], !state.getIn(['contactList', index, 'favorited']));
        });
      });
    case _actionTypes.CLOSE_NOTIF:
      return state.withMutations(function (mutableState) {
        mutableState.set('notifMsg', '');
      });
    default:
      return state;
  }
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/modules/contact.js');

  __REACT_HOT_LOADER__.register(editingIndex, 'editingIndex', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/modules/contact.js');

  __REACT_HOT_LOADER__.register(initialImmutableState, 'initialImmutableState', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/modules/contact.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/modules/contact.js');
}();

;

/***/ }),
/* 323 */
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

var _immutable = __webpack_require__(/*! immutable */ 15);

var _notifMessage = __webpack_require__(/*! ../../constants/notifMessage.js */ 41);

var _notifMessage2 = _interopRequireDefault(_notifMessage);

var _actionTypes = __webpack_require__(/*! ./../../actions/actionTypes */ 10);

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
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/modules/calendar.js');

  __REACT_HOT_LOADER__.register(initForm, 'initForm', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/modules/calendar.js');

  __REACT_HOT_LOADER__.register(initialImmutableState, 'initialImmutableState', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/modules/calendar.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/modules/calendar.js');
}();

;

/***/ }),
/* 324 */
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

var _immutable = __webpack_require__(/*! immutable */ 15);

var _notifMessage = __webpack_require__(/*! ../../constants/notifMessage.js */ 41);

var _notifMessage2 = _interopRequireDefault(_notifMessage);

var _actionTypes = __webpack_require__(/*! ../../actions/actionTypes */ 10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var initialState = {
  content: (0, _immutable.List)([{
    id: 'a654',
    departure: 'Giap Bap',
    destination: 'Cam Pha',
    stations: 5,
    active: true
  }, {
    id: 's234',
    departure: 'My Dinh',
    destination: 'Hai Phong',
    stations: 3,
    active: true
  }]),
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
        var content = (0, _immutable.fromJS)(action.content);
        mutableState.set('content', content);
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
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/modules/routeTable.js');

  __REACT_HOT_LOADER__.register(initialItem, 'initialItem', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/modules/routeTable.js');

  __REACT_HOT_LOADER__.register(initialImmutableState, 'initialImmutableState', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/modules/routeTable.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/modules/routeTable.js');
}();

;

/***/ }),
/* 325 */
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

var _immutable = __webpack_require__(/*! immutable */ 15);

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
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(clientMiddleware, 'clientMiddleware', '/root/Desktop/ui-itss/passenger-transport-admin/src/app/redux/middleware/clientMiddleware.js');
}();

;

/***/ }),
/* 326 */
/*!***********************************!*\
  !*** ./src/app/constants/show.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var show = function show(data) {
    console.log(data);
};

module.exports = show;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(show, "show", "/root/Desktop/ui-itss/passenger-transport-admin/src/app/constants/show.js");
}();

;

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map