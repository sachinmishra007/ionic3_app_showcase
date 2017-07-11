webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/about-me/about-me.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/about-me/about-me.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-left\">\n    <div *ngIf=\"showLoading\">\n        <md-spinner> </md-spinner>\n    </div>\n    <div *ngIf=\"!showLoading\">\n        <img (click)=\"OpenResume()\"  class=\"resume-img-link\" src=\"assets/images/resume.png\">\n        <h1 class=\"about-me-title\">\n            About Me\n        </h1>\n        <md-card>\n            <md-card-header>\n                <div class=\"avatar\" md-card-avatar [ngStyle]=\"{'background-image':'url('+ _aboutMe.imagepath +')', 'background-size':'40px 40px'}\"></div>\n                <md-card-title>{{_aboutMe?.name}}</md-card-title>\n                <md-card-subtitle><b>Stay hungry Stay Foolish</b></md-card-subtitle>\n            </md-card-header>\n            <hr/>\n            <img class=\"profile-img\" md-card-image src=\"{{_aboutMe?.imagepath}}\">\n            <hr/>\n            <md-card-content>\n                <p>\n                    {{_aboutMe?.about}}\n                </p>\n            </md-card-content>\n            <hr/>\n            <md-card-actions>\n                <md-list>\n                    <md-list-item *ngFor=\"let url of _aboutMe?.links\" (click)=\"openLink(url)\">\n                        <md-icon md-list-icon>done_all</md-icon>\n                        <h3 md-line><b>{{url.name}}</b></h3>\n                    </md-list-item>\n                </md-list>\n                <button class=\"pretty-cool\" md-raised-button md-button>Pretty Cool</button>\n            </md-card-actions>\n        </md-card>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/about-me/about-me.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dataservice_service__ = __webpack_require__("./src/services/dataservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutMeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var AboutMeComponent = (function () {
    function AboutMeComponent(dataservice, _router) {
        this.dataservice = dataservice;
        this._router = _router;
        this.showLoading = true;
        this._aboutMe = {};
        this.getAboutMeDetails();
        this._router.navigate(['/home']);
    }
    AboutMeComponent.prototype.ngOnInit = function () {
    };
    AboutMeComponent.prototype.getAboutMeDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.showLoading = true;
                this._aboutMe.links = [];
                this.dataservice
                    .getAboutMeContent()
                    .then(function (_response) {
                    _this.showLoading = false;
                    _response.subscribe(function (data) {
                        data.forEach(function (value, key) {
                            if (value.$key == "name") {
                                _this._aboutMe.name = value.$value;
                            }
                            if (value.$key == "imgPath") {
                                _this._aboutMe.imagepath = value.$value;
                            }
                            if (value.$key == "about") {
                                _this._aboutMe.about = value.$value;
                            }
                            if (value.$key == "Links") {
                                _this._aboutMe.links = value;
                            }
                        });
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    AboutMeComponent.prototype.IconName = function (_link) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, 'folder'];
            });
        });
    };
    AboutMeComponent.prototype.openLink = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                window.open(url.url, '_blank');
                return [2 /*return*/];
            });
        });
    };
    AboutMeComponent.prototype.OpenResume = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                window.open("https://goo.gl/dNr1PY", "_blank");
                return [2 /*return*/];
            });
        });
    };
    return AboutMeComponent;
}());
AboutMeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-about-me',
        template: __webpack_require__("./src/app/about-me/about-me.component.html"),
        styles: [__webpack_require__("./src/app/about-me/about-me.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dataservice_service__["a" /* FirebaseDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dataservice_service__["a" /* FirebaseDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AboutMeComponent);

var _a, _b;
//# sourceMappingURL=about-me.component.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".align-div{\r\n    padding-left:1% !important; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div>\r\n    <ul>\r\n        <li><a [routerLink]=\"['/view-detail']\">View Details</a></li>\r\n        <li><a [routerLink]=\"['/']\">Home</a></li>\r\n    </ul>\r\n</div>-->\r\n<div class=\"align-div\">\r\n    <app-about-me></app-about-me>\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__view_detail_view_detail_component__ = __webpack_require__("./src/app/view-detail/view-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("./node_modules/@angular/material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_masonry__ = __webpack_require__("./node_modules/angular2-masonry/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng_scrollreveal__ = __webpack_require__("./node_modules/ng-scrollreveal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_dataservice_service__ = __webpack_require__("./src/services/dataservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__about_me_about_me_component__ = __webpack_require__("./src/app/about-me/about-me.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_app_route__ = __webpack_require__("./src/app/app.route.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__default_page_default_page_component__ = __webpack_require__("./src/app/default-page/default-page.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var config = {
    apiKey: "AIzaSyC-RM7JpJAZUAe8_8JKLhx4qVpqk2Buv7k",
    authDomain: "project-221720687212059228.firebaseapp.com",
    databaseURL: "https://project-221720687212059228.firebaseio.com",
    projectId: "project-221720687212059228",
    storageBucket: "project-221720687212059228.appspot.com",
    messagingSenderId: "892579425951"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_6__view_detail_view_detail_component__["a" /* ViewDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_14__about_me_about_me_component__["a" /* AboutMeComponent */],
            __WEBPACK_IMPORTED_MODULE_18__default_page_default_page_component__["a" /* DefaultPageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_17__app_app_route__["a" /* APP_ROUTES */]),
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_9_angular2_masonry__["a" /* MasonryModule */],
            __WEBPACK_IMPORTED_MODULE_10_ng_scrollreveal__["a" /* NgsRevealModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
            __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__["a" /* AngularFireDatabaseModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__services_dataservice_service__["a" /* FirebaseDataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/app.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_view_detail_view_detail_component__ = __webpack_require__("./src/app/view-detail/view-detail.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTES; });


var APP_ROUTES = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__app_home_home_component__["a" /* HomeComponent */] },
    { path: 'view-detail/:appname', component: __WEBPACK_IMPORTED_MODULE_1__app_view_detail_view_detail_component__["a" /* ViewDetailComponent */] }
];
//# sourceMappingURL=app.route.js.map

/***/ }),

/***/ "./src/app/default-page/default-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/default-page/default-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <img src=\"assets/images/oops.png\" />\n</div>"

/***/ }),

/***/ "./src/app/default-page/default-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DefaultPageComponent = (function () {
    function DefaultPageComponent() {
    }
    DefaultPageComponent.prototype.ngOnInit = function () {
    };
    return DefaultPageComponent;
}());
DefaultPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-default-page',
        template: __webpack_require__("./src/app/default-page/default-page.component.html"),
        styles: [__webpack_require__("./src/app/default-page/default-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DefaultPageComponent);

//# sourceMappingURL=default-page.component.js.map

/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-right\">\n    <div *ngIf=\"_showLoading\">\n        <md-spinner> </md-spinner>\n    </div>\n    <div *ngIf=\"!_showLoading\">\n        <h1>Welcome to Ionic3/ Angular4 Application Showcase</h1>\n        <masonry [useImagesLoaded]=\"true\">\n            <masonry-brick *ngFor=\"let p of _applicationDetails;let i=index\" class=image-container>\n                <md-card>\n                    <md-card-header>\n                        <div class=\"avatar\" md-card-avatar [ngStyle]=\"{'background-image':'url('+ p.imgpath +')', 'background-size':'40px 40px'}\"></div>\n                        <md-card-title>{{p.title}}</md-card-title>\n                        <md-card-subtitle>{{p.subtitle}}</md-card-subtitle>\n                    </md-card-header>\n                    <hr/>\n                    <img class=\"custom-mat-card-image\" md-card-image [src]=\"p.imgpath\">\n                    <hr/>\n                    <md-card-content>\n                        <p>\n                            {{p.description|slice:0:p.char_display}}\n                        </p>\n                        <a (click)=\"ReadMore(i,p)\" class=\"read-more\">                            \n                            {{p.char_display==250 ? 'read more':'read less'}}\n                        </a>\n                    </md-card-content>\n                    <hr/>\n                    <md-card-actions>\n                        <button [routerLink]=\"['/view-detail',p.app_id]\" class=\"view-application\" md-raised-button md-button>View Application</button>\n                    </md-card-actions>\n                </md-card>\n                <br><br>\n            </masonry-brick>\n        </masonry>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dataservice_service__ = __webpack_require__("./src/services/dataservice.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var HomeComponent = (function () {
    function HomeComponent(dataservice) {
        this.dataservice = dataservice;
        this._applicationDetails = [];
        this._showLoading = true;
        this._readMore = "read more";
        this.getApplicationInformation();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.getApplicationInformation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._showLoading = true;
                this.dataservice.getApplicationMessage()
                    .then(function (_response) {
                    _response.subscribe(function (data) {
                        _this._applicationDetails = data;
                        _this._showLoading = false;
                    });
                }).catch(function (error) {
                    console.log(error);
                });
                return [2 /*return*/];
            });
        });
    };
    HomeComponent.prototype.ReadMore = function (index, _obj) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this._readMore === "read more") {
                    _obj.char_display = _obj.description.length;
                    this._readMore = "read less";
                }
                else {
                    _obj.char_display = 250;
                    this._readMore = "read more";
                }
                this._applicationDetails[index] = _obj;
                return [2 /*return*/];
            });
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("./src/app/home/home.component.html"),
        styles: [__webpack_require__("./src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dataservice_service__["a" /* FirebaseDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dataservice_service__["a" /* FirebaseDataService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "./src/app/view-detail/view-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/view-detail/view-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"_showLoading\">\n  <md-spinner> </md-spinner>\n</div>\n<div *ngIf=\"!_showLoading\">\n  <div class=\"profile-right\">\n    <h1>{{ _applicationDetails?.title}}</h1>\n    <!--<md-select  placeholder=\"Select Phone Model\" [(ngModel)]=\"phoneModel\" name=\"phone\">\n    <md-option (click)=\"PhoneModelSelected(phone)\" *ngFor=\"let phone of _phoneModel\" [value]=\"phone.name\">\n      {{phone.name}}\n    </md-option>\n  </md-select>-->\n    <div id=\"view-detail-container\">\n      <div class=\"view-detail-left\">\n        <div>\n          <h4> {{_applicationDetails?.subtitle}}</h4>\n          <hr/>\n          <img class=\"img-main-page\" [src]=\"_applicationDetails?.imgpath\" />\n          <hr/>\n          <span>\n          <img (click)=\"getURL(_applicationDetails?.googleplayurl)\" width=\" 172px;\" src='https://firebasestorage.googleapis.com/v0/b/project-221720687212059228.appspot.com/o/ionic3_angular4_applicatiokn_showcase%2Fgoogle_play.png?alt=media&token=a1103f01-05aa-4613-b65f-2a42c847114d'/>\n          <img (click)=\"getURL(_applicationDetails?.youtubeurl)\" width=\" 70px;\" src='https://firebasestorage.googleapis.com/v0/b/project-221720687212059228.appspot.com/o/ionic3_angular4_applicatiokn_showcase%2Fyou-tube.png?alt=media&token=5d4113c0-bc28-456e-a94e-10ef50b1386c'/>\n        </span>\n          <hr/>\n          <p>\n            {{_applicationDetails?.description}}\n          </p>\n        </div>\n      </div>\n      <button class=\"view-application view-detail-button\" md-raised-button md-button [routerLink]=\"['/home']\">\n          Back to Home\n        </button>\n      <div class=\"view-detail-right\">\n        <iframe [src]=\"_applicationURL\" width=\"100%\" height=\"782px\" frameborder=\"0\" scrolling=\"no\">\n        </iframe>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/view-detail/view-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dataservice_service__ = __webpack_require__("./src/services/dataservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ViewDetailComponent = (function () {
    function ViewDetailComponent(domSantizer, route, dataservice) {
        this.domSantizer = domSantizer;
        this.route = route;
        this.dataservice = dataservice;
        this._showLoading = true;
        this._applicationName = "";
        this._applicationDetails = [];
        this._phoneModel = [{
                name: 'IPhone 4s',
                code: 'iphone4s',
                height: '733px'
            }, {
                name: 'IPhone 5s',
                code: 'iphone5s',
                height: '782px'
            }, {
                name: 'IPhone 6',
                code: 'iphone6',
                height: '780px'
            }, {
                name: 'IPhone 6+',
                code: 'iphone6plus',
                height: '690px'
            }, {
                name: 'IPad Air',
                code: 'ipadair',
                height: '1287px'
            }, {
                name: 'IPhone 6s',
                code: 'iphone6s',
                height: '870px'
            }, {
                name: 'IPhone 6s Plus',
                code: 'iphone6splus',
                height: '690px'
            }, {
                name: 'IPad Air2',
                code: 'ipadair2',
                height: '1287px'
            }, {
                name: 'Nexus 5',
                code: 'nexus5',
                height: '795px'
            }, {
                name: 'Nexus 7',
                code: 'nexus7',
                height: '1268px'
            }, {
                name: 'Nexus 9',
                code: 'nexus9',
                height: '1288px'
            }];
        this._applicationName = this.route.snapshot.params['appname'];
        this.getApplicationInformation(this._applicationName);
        this.phoneModel = this._phoneModel[0];
    }
    ViewDetailComponent.prototype.ngOnInit = function () {
    };
    ViewDetailComponent.prototype.getApplicationInformation = function (_applicationName) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _application_appetize_public_key;
            return __generator(this, function (_a) {
                this._showLoading = true;
                _application_appetize_public_key = '';
                this.dataservice.getApplicationMessage()
                    .then(function (_response) {
                    _response.subscribe(function (data) {
                        _this._showLoading = false;
                        data.forEach(function (value, key) {
                            if (value.app_id.toString().toLowerCase() === _this._applicationName.toLowerCase()) {
                                _this._applicationDetails = value;
                                _application_appetize_public_key = value.appetize_public_key;
                            }
                        });
                        if (_application_appetize_public_key != "") {
                            var _applicationURL = "https://appetize.io/embed/" + _application_appetize_public_key + "?\n          device=nexus9&scale=100&autoplay=false&orientation=portrait&deviceColor=black&osVersion=7.0";
                            _this._applicationURL = _this.domSantizer.bypassSecurityTrustResourceUrl(_applicationURL);
                        }
                    });
                }).catch(function (error) {
                    console.log(error);
                });
                return [2 /*return*/];
            });
        });
    };
    ViewDetailComponent.prototype.getURL = function (_applicationURL) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                window.open(_applicationURL, "_blank");
                return [2 /*return*/];
            });
        });
    };
    ViewDetailComponent.prototype.PhoneModelSelected = function (phone) {
        return __awaiter(this, void 0, void 0, function () {
            var _applicationURL;
            return __generator(this, function (_a) {
                _applicationURL = "\"https://appetize.io/embed/81agze7jqbz1m4cbnghg4etqww?device=" + phone.code + "&scale=100&autoplay=false&orientation=portrait&deviceColor=black\"";
                this._applicationURL = this.domSantizer.bypassSecurityTrustResourceUrl(_applicationURL);
                return [2 /*return*/];
            });
        });
    };
    return ViewDetailComponent;
}());
ViewDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-view-detail',
        template: __webpack_require__("./src/app/view-detail/view-detail.component.html"),
        styles: [__webpack_require__("./src/app/view-detail/view-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["g" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["g" /* DomSanitizer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_dataservice_service__["a" /* FirebaseDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_dataservice_service__["a" /* FirebaseDataService */]) === "function" && _c || Object])
], ViewDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=view-detail.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "./src/services/dataservice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var FirebaseDataService = (function () {
    function FirebaseDataService(db) {
        this.db = db;
        this._applicationDetails = [];
        this._aboutme = db.list('/aboutme');
        this._application_showcase = db.list('/application_showcase');
    }
    FirebaseDataService.prototype.getAboutMeContent = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._aboutme];
            });
        });
    };
    FirebaseDataService.prototype.getApplicationMessage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._application_showcase];
            });
        });
    };
    return FirebaseDataService;
}());
FirebaseDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
], FirebaseDataService);

var _a;
//# sourceMappingURL=dataservice.service.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map