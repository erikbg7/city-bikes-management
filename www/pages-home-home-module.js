(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");







var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"center\">\r\n      Contamination\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div *ngIf=\"aqi\" class=\"smog {{aqiStatus(aqi.data.aqi).code}}\" style=\"background:url(../../../assets/imgs/clouds.png) 25% 100% repeat-x\">\r\n  </div>\r\n  <div *ngIf=\"aqi\" class=\"pollution-back {{aqiStatus(aqi.data.aqi).code}}\" style=\"\">\r\n    <ion-icon name=\"ios-nuclear-outline\" class=\"pollution-sign\"></ion-icon>\r\n    <div class=\"pollution-time\">TODAY</div>\r\n    <div class=\"pollution-value\">{{aqi.data.aqi}}</div>\r\n\r\n    <div class=\"aqi-extra\" padding style=\"left:0\">\r\n      {{aqi.data.city?aqi.data.city.name:''}}\r\n    </div>\r\n    <div class=\"aqi-extra\" padding style=\"right:0\">\r\n      {{aqi.data.dominentpol?'Pollutant '+aqi.data.dominentpol:''}}\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"aqi\" class=\"aqi-status  {{aqiStatus(aqi.data.aqi).code}}\">\r\n    <div class=\"aqi-readable\">{{aqiStatus(aqi.data.aqi).val}}</div>\r\n\r\n    <div class=\"chart-container\">\r\n      <canvas #barCanvas class=\"aqi-graph\" style=\"height:250px\">\r\n      </canvas>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scroll-content {\n  margin-top: 0 !important; }\n\n.has-refresher > .scroll-content {\n  border-top: 0; }\n\n.toolbar-title-ios {\n  color: #ffffff;\n  letter-spacing: 1px; }\n\n.footer-ios .toolbar-background-ios,\n.header-ios .toolbar-background-ios {\n  border-color: transparent;\n  background: transparent; }\n\n.pollution-sign:before {\n  font-size: 30px; }\n\n.pollution-time {\n  font-size: 15px;\n  letter-spacing: 4px;\n  font-weight: 600;\n  padding-top: 10px; }\n\n.pollution-value {\n  font-size: 120px;\n  line-height: 120px;\n  letter-spacing: 4px; }\n\n@media (max-width: 355px) {\n  .pollution-value {\n    font-size: 88px;\n    line-height: 88px;\n    letter-spacing: 4px; } }\n\n.smog {\n  background: url('clouds.png') 25% 70% repeat-x;\n  height: 50%;\n  width: 200em;\n  position: absolute;\n  z-index: 10;\n  -webkit-animation: cloudLoop 10s linear infinite; }\n\n.smog.good {\n  -webkit-animation: cloudLoop 65s linear infinite; }\n\n.smog.mod {\n  -webkit-animation: cloudLoop 60s linear infinite; }\n\n.smog.unhealthy {\n  -webkit-animation: cloudLoop 35s linear infinite; }\n\n.smog.vunhealthy {\n  -webkit-animation: cloudLoop 35s linear infinite; }\n\n.smog.hazardous {\n  -webkit-animation: cloudLoop 35s linear infinite; }\n\n@-webkit-keyframes cloudLoop {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  100% {\n    -webkit-transform: translate3d(-50%, 0, 0);\n    transform: translate3d(-50%, 0, 0); } }\n\n@keyframes cloudLoop {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  100% {\n    -webkit-transform: translate3d(-50%, 0, 0);\n    transform: translate3d(-50%, 0, 0); } }\n\n.pollution-back {\n  background: linear-gradient(270deg, #f5071a, #3e0306);\n  background-size: 400% 400%;\n  height: 50%;\n  text-align: center;\n  padding-top: 60px;\n  color: white;\n  position: relative;\n  -webkit-animation: AnimationName 6s ease infinite;\n  animation: AnimationName 6s ease infinite; }\n\n.aqi-status {\n  color: #000000;\n  height: 50%;\n  padding-top: 15px;\n  position: relative; }\n\n.aqi-extra {\n  position: absolute;\n  bottom: 0;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  max-width: 50%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  font-size: 12px;\n  font-weight: 500;\n  color: #ffffff; }\n\n.aqi-readable {\n  position: absolute;\n  text-align: center;\n  width: 100%;\n  margin-top: 110px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: 600;\n  font-size: 20px; }\n\n.aqi-graph {\n  width: 220px;\n  height: 220px; }\n\n.pollution-back.good {\n  background: #56ccf2;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(270deg, #56ccf2, #2f80ed);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  background-size: 400% 400%; }\n\n.aqi-status.good {\n  color: #56ccf2; }\n\n.pollution-back.mod {\n  background: #F2994A;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #F2C94C, #F2994A);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  background-size: 400% 400%; }\n\n.aqi-status.mod {\n  color: #F2994A; }\n\n.pollution-back.unhealthy {\n  background: #fe8c00;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #f83600, #fe8c00);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  background-size: 400% 400%; }\n\n.aqi-status.unhealthy {\n  color: #fe4e00; }\n\n.pollution-back.vunhealthy {\n  background: #b50518;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #b86c67, #b50518);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  background-size: 400% 400%; }\n\n.aqi-status.vunhealthy {\n  color: #b50518; }\n\n.pollution-back.hazardous {\n  background: #610661;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #610661, #a1a5bc);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  background-size: 400% 400%; }\n\n.aqi-status.hazardous {\n  color: #610661; }\n\n@-webkit-keyframes AnimationName {\n  0% {\n    background-position: 0 50%; }\n  50% {\n    background-position: 100% 50%; }\n  100% {\n    background-position: 0 50%; } }\n\n@keyframes AnimationName {\n  0% {\n    background-position: 0 50%; }\n  50% {\n    background-position: 100% 50%; }\n  100% {\n    background-position: 0 50%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXGVyaWtiXFxJZGVhUHJvamVjdHNcXFNlbWluYXI0LUlvbmljL3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CLEVBQUE7O0FBR3JCOztFQUVFLHlCQUF5QjtFQUN6Qix1QkFBdUIsRUFBQTs7QUFHekI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CLEVBQUEsRUFDcEI7O0FBR0g7RUFDRSw4Q0FBbUU7RUFDbkUsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdEQUFnRCxFQUFBOztBQUdsRDtFQUNFLGdEQUFnRCxFQUFBOztBQUdsRDtFQUNFLGdEQUFnRCxFQUFBOztBQUdsRDtFQUNFLGdEQUFnRCxFQUFBOztBQUdsRDtFQUNFLGdEQUFnRCxFQUFBOztBQUdsRDtFQUNFLGdEQUFnRCxFQUFBOztBQUVsRDtFQUNFO0lBQ0UsdUNBQXFDO0lBQ3JDLCtCQUE2QixFQUFBO0VBRy9CO0lBQ0UsMENBQXdDO0lBQ3hDLGtDQUFnQyxFQUFBLEVBQUE7O0FBR3BDO0VBQ0U7SUFDRSx1Q0FBcUM7SUFDckMsK0JBQTZCLEVBQUE7RUFHL0I7SUFDRSwwQ0FBd0M7SUFDeEMsa0NBQWdDLEVBQUEsRUFBQTs7QUFJcEM7RUFDRSxxREFBcUQ7RUFDckQsMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaURBQWlEO0VBRWpELHlDQUF5QyxFQUFBOztBQUczQztFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBRWhCO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHlCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxZQUFXO0VBQ1gsYUFBWSxFQUFBOztBQUVkO0VBQ0UsbUJBQW1CO0VBQ25CLDhCQUFBO0VBRUEsK0JBQUE7RUFDQSxxREFBcUQ7RUFDckQscUVBQUE7RUFDQSwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsbUJBQW1CO0VBQ25CLDhCQUFBO0VBRUEsK0JBQUE7RUFDQSx1REFBdUQ7RUFDdkQscUVBQUE7RUFDQSwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsbUJBQW1CO0VBQ25CLDhCQUFBO0VBRUEsK0JBQUE7RUFDQSx1REFBdUQ7RUFDdkQscUVBQUE7RUFDQSwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsbUJBQW1CO0VBQ25CLDhCQUFBO0VBRUEsK0JBQUE7RUFDQSx1REFBdUQ7RUFDdkQscUVBQUE7RUFDQSwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsbUJBQW1CO0VBQ25CLDhCQUFBO0VBRUEsK0JBQUE7RUFDQSx1REFBdUQ7RUFDdkQscUVBQUE7RUFDQSwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxjQUFjLEVBQUE7O0FBRWhCO0VBQ0U7SUFDRSwwQkFBMEIsRUFBQTtFQUc1QjtJQUNFLDZCQUE2QixFQUFBO0VBRy9CO0lBQ0UsMEJBQTBCLEVBQUEsRUFBQTs7QUFnQjlCO0VBQ0U7SUFDRSwwQkFBMEIsRUFBQTtFQUc1QjtJQUNFLDZCQUE2QixFQUFBO0VBRy9CO0lBQ0UsMEJBQTBCLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmhhcy1yZWZyZXNoZXIgPiAuc2Nyb2xsLWNvbnRlbnQge1xyXG4gICAgYm9yZGVyLXRvcDogMDtcclxuICB9XHJcblxyXG4gIC50b29sYmFyLXRpdGxlLWlvcyB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyLWlvcyAudG9vbGJhci1iYWNrZ3JvdW5kLWlvcyxcclxuICAuaGVhZGVyLWlvcyAudG9vbGJhci1iYWNrZ3JvdW5kLWlvcyB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAucG9sbHV0aW9uLXNpZ246YmVmb3JlIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcblxyXG4gIC5wb2xsdXRpb24tdGltZSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnBvbGx1dGlvbi12YWx1ZSB7XHJcbiAgICBmb250LXNpemU6IDEyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEyMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDM1NXB4KSB7XHJcbiAgICAucG9sbHV0aW9uLXZhbHVlIHtcclxuICAgICAgZm9udC1zaXplOiA4OHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogODhweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zbW9nIHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWdzL2Nsb3Vkcy5wbmdcIikgMjUlIDcwJSByZXBlYXQteDtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgd2lkdGg6IDIwMGVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogY2xvdWRMb29wIDEwcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG5cclxuICAuc21vZy5nb29kIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBjbG91ZExvb3AgNjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9XHJcblxyXG4gIC5zbW9nLm1vZCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogY2xvdWRMb29wIDYwcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG5cclxuICAuc21vZy51bmhlYWx0aHkge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGNsb3VkTG9vcCAzNXMgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxuXHJcbiAgLnNtb2cudnVuaGVhbHRoeSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogY2xvdWRMb29wIDM1cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG5cclxuICAuc21vZy5oYXphcmRvdXMge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGNsb3VkTG9vcCAzNXMgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgY2xvdWRMb29wIHtcclxuICAgIDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLDAsMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwwLDApO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGNsb3VkTG9vcCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwwLDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsMCwwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wb2xsdXRpb24tYmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZjUwNzFhLCAjM2UwMzA2KTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBBbmltYXRpb25OYW1lIDZzIGVhc2UgaW5maW5pdGU7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogQW5pbWF0aW9uTmFtZSA2cyBlYXNlIGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uOiBBbmltYXRpb25OYW1lIDZzIGVhc2UgaW5maW5pdGU7XHJcbiAgfVxyXG5cclxuICAuYXFpLXN0YXR1cyB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAuYXFpLWV4dHJhIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICAuYXFpLXJlYWRhYmxle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMTBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICAuYXFpLWdyYXBoe1xyXG4gICAgd2lkdGg6MjIwcHg7XHJcbiAgICBoZWlnaHQ6MjIwcHg7XHJcbiAgfVxyXG4gIC5wb2xsdXRpb24tYmFjay5nb29kIHtcclxuICAgIGJhY2tncm91bmQ6ICM1NmNjZjI7XHJcbiAgICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzU2Y2NmMiwgIzJmODBlZCk7XHJcbiAgICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzU2Y2NmMiwgIzJmODBlZCk7XHJcbiAgICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcclxuICB9XHJcblxyXG4gIC5hcWktc3RhdHVzLmdvb2Qge1xyXG4gICAgY29sb3I6ICM1NmNjZjI7XHJcbiAgfVxyXG5cclxuICAucG9sbHV0aW9uLWJhY2subW9kIHtcclxuICAgIGJhY2tncm91bmQ6ICNGMjk5NEE7XHJcbiAgICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0YyQzk0QywgI0YyOTk0QSk7XHJcbiAgICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRjJDOTRDLCAjRjI5OTRBKTtcclxuICAgIC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xyXG4gIH1cclxuXHJcbiAgLmFxaS1zdGF0dXMubW9kIHtcclxuICAgIGNvbG9yOiAjRjI5OTRBO1xyXG4gIH1cclxuXHJcbiAgLnBvbGx1dGlvbi1iYWNrLnVuaGVhbHRoeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmU4YzAwO1xyXG4gICAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmODM2MDAsICNmZThjMDApO1xyXG4gICAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y4MzYwMCwgI2ZlOGMwMCk7XHJcbiAgICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcclxuICB9XHJcblxyXG4gIC5hcWktc3RhdHVzLnVuaGVhbHRoeSB7XHJcbiAgICBjb2xvcjogI2ZlNGUwMDtcclxuICB9XHJcblxyXG4gIC5wb2xsdXRpb24tYmFjay52dW5oZWFsdGh5IHtcclxuICAgIGJhY2tncm91bmQ6ICNiNTA1MTg7XHJcbiAgICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2VmNDczYSwgI2NiMmQzZSk7XHJcbiAgICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYjg2YzY3LCAjYjUwNTE4KTtcclxuICAgIC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xyXG4gIH1cclxuXHJcbiAgLmFxaS1zdGF0dXMudnVuaGVhbHRoeSB7XHJcbiAgICBjb2xvcjogI2I1MDUxODtcclxuICB9XHJcblxyXG4gIC5wb2xsdXRpb24tYmFjay5oYXphcmRvdXMge1xyXG4gICAgYmFja2dyb3VuZDogIzYxMDY2MTtcclxuICAgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNjEwNjYxLCAjYTFhNWJjKTtcclxuICAgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM2MTA2NjEsICNhMWE1YmMpO1xyXG4gICAgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MDAlIDQwMCU7XHJcbiAgfVxyXG5cclxuICAuYXFpLXN0YXR1cy5oYXphcmRvdXMge1xyXG4gICAgY29sb3I6ICM2MTA2NjE7XHJcbiAgfVxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBBbmltYXRpb25OYW1lIHtcclxuICAgIDAlIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgNTAlIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuICBALW1vei1rZXlmcmFtZXMgQW5pbWF0aW9uTmFtZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIDUwJSB7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDUwJTtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBBbmltYXRpb25OYW1lIHtcclxuICAgIDAlIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgNTAlIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");



var HomePage = /** @class */ (function () {
    function HomePage(data) {
        this.data = data;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getAqi().subscribe(function (data) {
            _this.aqi = data;
            console.log(_this.aqi);
        });
    };
    HomePage.prototype.aqiStatus = function (val) {
        if (val <= 50) {
            return { code: 'good', val: 'Good' };
        }
        else if (val <= 100) {
            return { code: 'mod', val: 'Moderate' };
        }
        else if (val <= 200) {
            return { code: 'unhealthy', val: 'Unhealthy' };
        }
        if (val <= 300) {
            return { code: 'vunhealthy', val: 'Very Unhealthy' };
        }
        else if (val > 300) {
            return { code: 'hazardous', val: 'Hazardous' };
        }
        else {
            return { code: '', val: '' };
        }
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map