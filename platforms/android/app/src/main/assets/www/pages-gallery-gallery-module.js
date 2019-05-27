(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gallery-gallery-module"],{

/***/ "./src/app/pages/gallery/gallery.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/gallery/gallery.module.ts ***!
  \*************************************************/
/*! exports provided: GalleryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPageModule", function() { return GalleryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gallery_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery.page */ "./src/app/pages/gallery/gallery.page.ts");







var routes = [
    {
        path: '',
        component: _gallery_page__WEBPACK_IMPORTED_MODULE_6__["GalleryPage"]
    }
];
var GalleryPageModule = /** @class */ (function () {
    function GalleryPageModule() {
    }
    GalleryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_gallery_page__WEBPACK_IMPORTED_MODULE_6__["GalleryPage"]]
        })
    ], GalleryPageModule);
    return GalleryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/gallery/gallery.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/gallery/gallery.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Photo Gallery\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ng-container *ngIf=\"photoService.photos\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"6\" *ngFor=\"let photo of photoService.photos\">\r\n        <img [src]=\"photo.data\" />\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  </ng-container>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"photoService.takePicture()\">\r\n      <ion-icon name=\"camera\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"photoService.erase()\">\r\n      <ion-icon name=\"trash\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  <img [src]=\"currentImage\" *ngIf=\"currentImage\">\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/gallery/gallery.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/gallery/gallery.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhbGxlcnkvZ2FsbGVyeS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/gallery/gallery.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/gallery/gallery.page.ts ***!
  \***********************************************/
/*! exports provided: GalleryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPage", function() { return GalleryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/photo.service */ "./src/app/services/photo.service.ts");



var GalleryPage = /** @class */ (function () {
    function GalleryPage(photoService) {
        this.photoService = photoService;
    }
    GalleryPage.prototype.ngOnInit = function () {
        this.photoService.loadSaved();
    };
    GalleryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.page.html */ "./src/app/pages/gallery/gallery.page.html"),
            styles: [__webpack_require__(/*! ./gallery.page.scss */ "./src/app/pages/gallery/gallery.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_photo_service__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]])
    ], GalleryPage);
    return GalleryPage;
}());



/***/ }),

/***/ "./src/app/services/photo.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/photo.service.ts ***!
  \*******************************************/
/*! exports provided: PhotoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return PhotoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");




var Photo = /** @class */ (function () {
    function Photo() {
    }
    return Photo;
}());
var PhotoService = /** @class */ (function () {
    function PhotoService(camera, storage) {
        this.camera = camera;
        this.storage = storage;
        this.photos = [];
    }
    PhotoService.prototype.takePicture = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // Add new photo to gallery
            _this.photos.unshift({
                data: 'data:image/jpeg;base64,' + imageData
            });
            // Save all photos for later viewing
            _this.storage.set('photos', _this.photos);
        }, function (err) {
            // Handle error
            console.log('Camera issue: ' + err);
        });
    };
    PhotoService.prototype.loadSaved = function () {
        var _this = this;
        this.storage.get('photos').then(function (photos) {
            _this.photos = photos || [];
        });
    };
    PhotoService.prototype.erase = function () {
        // Eliminem la ultima foto
        // this.storage.remove('photos');
        this.photos.pop();
    };
    PhotoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], PhotoService);
    return PhotoService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-gallery-gallery-module.js.map