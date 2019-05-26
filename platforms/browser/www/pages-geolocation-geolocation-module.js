(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-geolocation-geolocation-module"],{

/***/ "./src/app/pages/geolocation/geolocation.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/geolocation/geolocation.module.ts ***!
  \*********************************************************/
/*! exports provided: GeolocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationPageModule", function() { return GeolocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _geolocation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./geolocation.page */ "./src/app/pages/geolocation/geolocation.page.ts");







var routes = [
    {
        path: '',
        component: _geolocation_page__WEBPACK_IMPORTED_MODULE_6__["GeolocationPage"]
    }
];
var GeolocationPageModule = /** @class */ (function () {
    function GeolocationPageModule() {
    }
    GeolocationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_geolocation_page__WEBPACK_IMPORTED_MODULE_6__["GeolocationPage"]]
        })
    ], GeolocationPageModule);
    return GeolocationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/geolocation/geolocation.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/geolocation/geolocation.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Geolocation\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item>\r\n  <ion-label *ngIf=\"latitud\" color=\"primary\">Latitud:</ion-label>\r\n  <ion-label *ngIf=\"latitud\" color=\"primary\">{{latitud}}</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n  <ion-label *ngIf=\"longitud\"color=\"primary\">Longitud:</ion-label>\r\n  <ion-label *ngIf=\"longitud\"color=\"primary\">{{longitud}}</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n  <ion-label *ngIf=\"altitud\"color=\"primary\">Altitud:</ion-label>\r\n  <ion-label *ngIf=\"altitud\"color=\"primary\">{{altitud}}m</ion-label>\r\n  </ion-item>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/geolocation/geolocation.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/geolocation/geolocation.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dlb2xvY2F0aW9uL2dlb2xvY2F0aW9uLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/geolocation/geolocation.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/geolocation/geolocation.page.ts ***!
  \*******************************************************/
/*! exports provided: GeolocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationPage", function() { return GeolocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");



var GeolocationPage = /** @class */ (function () {
    function GeolocationPage(geolocation) {
        this.geolocation = geolocation;
    }
    GeolocationPage.prototype.ngOnInit = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.latitud = resp.coords.latitude;
            _this.longitud = resp.coords.longitude;
            _this.altitud = resp.coords.altitude;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    GeolocationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-geolocation',
            template: __webpack_require__(/*! ./geolocation.page.html */ "./src/app/pages/geolocation/geolocation.page.html"),
            styles: [__webpack_require__(/*! ./geolocation.page.scss */ "./src/app/pages/geolocation/geolocation.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]])
    ], GeolocationPage);
    return GeolocationPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-geolocation-geolocation-module.js.map