webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/adds/adds.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/adds/adds.component.html":
/***/ (function(module, exports) {

module.exports = "<fieldset *ngIf = \"user.license == 'Provider'\">\n  <div style=\"width: 100%; height: 500px; overflow: scroll; \">\n      <div *ngFor = \"let img of imgs\">\n          <div *ngIf=\"img.company==user.company\">\n            <p *ngIf = \"img.type == name\">\n          {{img.company}}  <br>\n          type: {{img.type}} <br><hr>\n        <img src=\"{{img.src}}\"><button (click) = 'deleteImg(img._id)'>Delete this add.</button> \n        \n            </p>\n          </div>\n      </div>\n  </div>\n</fieldset>\n\n<fieldset *ngIf = \"user.license == 'User'\">\n    <div style=\"width: 100%; height: 100%; overflow: scroll; \">\n        <div *ngFor = \"let img of imgs\">\n          <p *ngIf = \"img.type == name\">\n          {{img.company}} <br>\n          Type: {{img.type}} <br><hr>\n        <img src=\"{{img.src}}\">\n        </p>\n        </div>\n      \n      </div>\n\n\n</fieldset>"

/***/ }),

/***/ "../../../../../src/app/adds/adds.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddsComponent = (function () {
    function AddsComponent(_us, _router, _route) {
        var _this = this;
        this._us = _us;
        this._router = _router;
        this._route = _route;
        this.user = null;
        this.imgs = [];
        this.name = '';
        this._route.paramMap.subscribe(function (params) {
            _this.name = params.get('name');
        });
    }
    AddsComponent.prototype.create = function () {
        var _this = this;
        this._us.loggedIn.subscribe(function (success) {
            console.log(success);
            if (success === false) {
                console.log("hello");
                _this.user = null;
                _this._router.navigate(['login']);
                return;
            }
            else {
                _this.user = success;
            }
        }, function (err) { console.log('err'); });
    };
    AddsComponent.prototype.logout = function () {
        this._us.clearUser();
        this.user = null;
        return this._router.navigate(['login']);
    };
    AddsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.name);
        this.create();
        this._us.allImg().subscribe(function (success) { _this.imgs = success; }, function (err) { console.log('erors'); });
    };
    AddsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-adds',
            template: __webpack_require__("../../../../../src/app/adds/adds.component.html"),
            styles: [__webpack_require__("../../../../../src/app/adds/adds.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], AddsComponent);
    return AddsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__success_success_component__ = __webpack_require__("../../../../../src/app/success/success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_add_new_add_component__ = __webpack_require__("../../../../../src/app/new-add/new-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__adds_adds_component__ = __webpack_require__("../../../../../src/app/adds/adds.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'success', component: __WEBPACK_IMPORTED_MODULE_3__success_success_component__["a" /* SuccessComponent */] },
    { path: 'newAdd', component: __WEBPACK_IMPORTED_MODULE_4__new_add_new_add_component__["a" /* NewAddComponent */] },
    { path: 'adds/:name', component: __WEBPACK_IMPORTED_MODULE_5__adds_adds_component__["a" /* AddsComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* *{\r\n    background-color: rgb(143, 53, 37);\r\n} */\r\n\r\n.loggedin{\r\n    border: 1px solid black;\r\n    display: inline-block;\r\n    position: fixed;\r\n    width: 100%;\r\n    background-color: rgb(37, 143, 72);\r\n    height: 75px;\r\n    \r\n\r\n}\r\n.login{\r\n    border: 1px solid black;\r\n    display: inline-block;\r\n    width: 100%;\r\n    position: fixed;\r\n    height: 75px;\r\n    background-color: rgb(37, 143, 72);\r\n    \r\n\r\n}\r\n#login{\r\n    float: right;\r\n    border: 1px solid black;\r\n    margin: 1px 0px 0px 20px;\r\n    display: inline-block;\r\n    padding: 10px 10px 10px 10px;\r\n    background-color: rgb(48, 201, 99);\r\n    \r\n    \r\n\r\n}\r\n.container{\r\n    padding: 100px 0 0 0 ;\r\n}\r\nspan{\r\n    color:red;\r\n}\r\n.stuff{\r\n     margin: 10px 0 0 0;\r\n}\r\n#error{\r\n\r\n    border: 1px solid black;\r\n    width: 695px;\r\n    height: auto;\r\n    margin: 10px 0px 0px 20px;\r\n    padding: 10px 10px 10px 10px;\r\n    \r\n}\r\n\r\n.text{\r\n    text-align: right;\r\n    margin: 0px 20px 10px 0;\r\n    \r\n}\r\nh1{\r\n    border-bottom: 1px solid black;\r\n}\r\n\r\n.button{\r\n    background-color: green;\r\n\r\n    color: white;\r\n    width: 100px;\r\n    height: 40px;\r\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\r\n    transition: all 0.5s;\r\n    cursor: pointer;\r\n    margin: 0px 0 0 0;\r\n\r\n}\r\n\r\n.button {\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    position: relative;\r\n    transition: 0.5s;\r\n  }\r\n  \r\n  .button:after {\r\n    content: '\\BB';\r\n    position: absolute;\r\n    opacity: 10px;\r\n    top: 0;\r\n    color: black;\r\n    right: -5px;\r\n    transition: 0.5s;\r\n  }\r\n  \r\n  .button:hover {\r\n    padding-right: 25px;\r\n  }\r\n  \r\n  .button:hover:after {\r\n    opacity: 1;\r\n    right: 0px;\r\n  }\r\n\r\n.move{\r\n    text-align: center;\r\n}\r\n.dropbtn {\r\n    background-color:  rgb(37, 143, 72);\r\n    color: white;\r\n    padding: 16px;\r\n    font-size: 16px;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n/* The container <div> - needed to position the dropdown content */\r\n.dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\n/* Dropdown Content (Hidden by Default) */\r\n.dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f9f9f9;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n}\r\n\r\n/* Links inside the dropdown */\r\n.dropdown-content a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n}\r\n\r\n/* Change color of dropdown links on hover */\r\n.dropdown-content a:hover {background-color: #f1f1f1}\r\n\r\n/* Show the dropdown menu on hover */\r\n.dropdown:hover .dropdown-content {\r\n    display: block;\r\n}\r\n\r\n/* Change the background color of the dropdown button when the dropdown content is shown */\r\n.dropdown:hover .dropbtn {\r\n    background-color: #4CAF50;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class ='login' *ngIf =\"user == null\">\r\n    <fieldset id=\"login\">\r\n      \r\n        <form #loginForm='ngForm'(submit)=\"login(logins)\">\r\n            <p class=\"text\">\r\n                <span *ngIf='loginerrs == true'class=\"text\">Wrong Login Info</span>\r\n           \r\n                    <input [disabled]=\"loginForm.invalid\" type=\"submit\" value=\"Login\" class=\"button\">\r\n                Email: <input \r\n              type=\"text\" \r\n              name=\"user.email\"\r\n              required\r\n              minlength=\"1\"\r\n              [(ngModel)]=\"logins.email\"\r\n              #emails='ngModel'\r\n              >  |  \r\n      \r\n            Password <input \r\n              type=\"password\" \r\n              name=\"user.password\"\r\n              required\r\n              minlength=\"1\"\r\n              [(ngModel)]=\"logins.password\"\r\n              #passwords='ngModel'\r\n              >\r\n              \r\n               </p>\r\n              \r\n      \r\n            \r\n        </form>\r\n            \r\n      </fieldset>\r\n      \r\n</div>\r\n\r\n<div class ='loggedin' *ngIf=\"user != null\">\r\n        <a class='dropbtn' [routerLink]=\"['/success']\">{{user.email}}</a> | \r\n        <div class=\"dropdown\">\r\n                \r\n                <button class=\"dropbtn\">Adds</button>\r\n                <div class=\"dropdown-content\">\r\n                  <a [routerLink]=\"['/adds','banner']\">Banner</a>\r\n                  <a [routerLink]=\"['/adds','table']\">Table</a>\r\n                  <a [routerLink]=\"['/adds','video']\">Video</a>\r\n                  <a [routerLink]=\"['/adds','popup']\">Popup</a>\r\n                </div>\r\n              </div> |\r\n              <span *ngIf=\"user.license == 'Provider'\"><a class='dropbtn' [routerLink]=\"['/newAdd']\">Add a add</a>| </span>\r\n              <button class='dropbtn' (click) = \"logout()\">Logout</button>\r\n\r\n    \r\n\r\n</div>\r\n\r\n<div class= 'container'>\r\n<router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    function AppComponent(_us, _router) {
        this._us = _us;
        this._router = _router;
        this.title = 'app';
        this.user = null;
        this.logins = new __WEBPACK_IMPORTED_MODULE_1__user__["b" /* User */]();
    }
    AppComponent.prototype.create = function () {
        var _this = this;
        this._us.loggedIn.subscribe(function (success) {
            console.log(success);
            if (success === false) {
                console.log("hello");
                _this.user = null;
                _this._router.navigate(['login']);
                return;
            }
            else {
                _this.user = success;
            }
        }, function (err) { console.log('err'); });
    };
    AppComponent.prototype.login = function (logins) {
        var _this = this;
        this._us.login(logins).subscribe(function (success) {
            console.log(success);
            _this._us.holdUser(success);
            _this._router.navigate(['success']);
            _this.logins = new __WEBPACK_IMPORTED_MODULE_1__user__["b" /* User */]();
        }, function (err) {
            return _this.loginerrs = true;
        });
    };
    AppComponent.prototype.logout = function () {
        this._us.clearUser();
        this.user = null;
        return this._router.navigate(['login']);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.create();
        this._us.sessionCheck(function () { });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_image_upload__ = __webpack_require__("../../../../angular2-image-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__success_success_component__ = __webpack_require__("../../../../../src/app/success/success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipe__ = __webpack_require__("../../../../../src/app/pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__new_add_new_add_component__ = __webpack_require__("../../../../../src/app/new-add/new-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__adds_adds_component__ = __webpack_require__("../../../../../src/app/adds/adds.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__success_success_component__["a" /* SuccessComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_10__pipe__["b" /* SortByPipe */], __WEBPACK_IMPORTED_MODULE_11__new_add_new_add_component__["a" /* NewAddComponent */], __WEBPACK_IMPORTED_MODULE_12__adds_adds_component__["a" /* AddsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5_angular2_image_upload__["a" /* ImageUploadModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__user_service__["a" /* UserService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\r\n\r\n}\r\n#text{\r\n    display: inline-block;  \r\n    margin: 0 0 0 400px;\r\n}\r\n\r\n#register{\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    \r\n    margin: 0 0 0 100px;\r\n}\r\n\r\n\r\n#login{\r\n    border: 1px solid black;\r\n    width: 300px;\r\n    margin: 0px 0px 0px 20px;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    padding: 10px 10px 10px 10px;\r\n    \r\n\r\n}\r\nspan{\r\n    color:red;\r\n}\r\n.stuff{\r\n     margin: 10px 0 0 0;\r\n}\r\n#error{\r\n\r\n    border: 1px solid black;\r\n    width: 695px;\r\n    height: auto;\r\n    margin: 10px 0px 0px 20px;\r\n    padding: 10px 10px 10px 10px;\r\n    \r\n}\r\n#register{\r\n    border: 1px solid black;\r\n    width: 350px;\r\n    vertical-align: top;\r\n    display: inline-block;\r\n    margin: 0px 0px 0px 20px;\r\n    padding: 10px 10px 10px 10px;\r\n    /* text-align: center; */\r\n}\r\n\r\n.text{\r\n    text-align: right;\r\n    margin: 0px 20px 10px 0;\r\n    \r\n}\r\nh1{\r\n    border-bottom: 1px solid black;\r\n}\r\n\r\n.button{\r\n    background-color: green;\r\n    text-align: center;\r\n    color: white;\r\n    width: 100px;\r\n    height: 40px;\r\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\r\n    transition: all 0.5s;\r\n    cursor: pointer;\r\n    margin: 0px 0 0 0;\r\n    float: right;\r\n}\r\n\r\n.button {\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    position: relative;\r\n    transition: 0.5s;\r\n  }\r\n  \r\n  .button:after {\r\n    content: '\\BB';\r\n    position: absolute;\r\n    opacity: 10px;\r\n    top: 0;\r\n    color: black;\r\n    right: -5px;\r\n    transition: 0.5s;\r\n  }\r\n  \r\n  .button:hover {\r\n    padding-right: 25px;\r\n  }\r\n  \r\n  .button:hover:after {\r\n    opacity: 1;\r\n    right: 0px;\r\n  }\r\n\r\n.move{\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id = 'text'>\n  <h2>Adds on Adds</h2>\n  <p>Offering the one stop shop for all your add needs,<br>\n  We here at NAME REQUIRED have one goal in mind:<br>\n  To connect adds with those who need it without any pesky <br>\n  complicated Algorithims.</p>\n  <p>Offering the only user driven add decision on the web.<br>\n  Pick your adds, don't let them pick you.</p>\n</div>\n\n\n\n\n<fieldset id= \"register\">\n  <legend>Registration</legend>\n\n  <form #regForm='ngForm'(submit)=\"create(user)\">\n    <p class=\"text\">First Name: <input \n      type=\"text\" \n      name=\"first_name\" \n      required \n      minlength=\"4\" \n      maxlength=\"24\"\n      [(ngModel)]=\"user.first_name\"\n      #first_name='ngModel'\n    /><br><span *ngIf =\"first_name.errors\">First Name is Required</span>\n  <div *ngIf='err'>\n      <span *ngIf =\"err.errors.first_name\">{{err.errors.first_name.message}}</span>\n\n  </div>\n  \n\n        <p class=\"text\">Last Name: <input \n          type=\"text\" \n          name=\"last_name\" \n          required \n          minlength=\"4\" \n          maxlength=\"24\"\n          [(ngModel)]=\"user.last_name\"\n          #last_name='ngModel'\n        /><br><span *ngIf =\"last_name.errors\">Last Name is Required</span>\n        <div *ngIf='err'>\n            <span *ngIf =\"err.errors.last_name\">{{err.errors.last_name.message}}</span>\n      \n        </div>\n      \n\n        <p class=\"text\">Email: <input \n          type=\"text\" \n          name=\"email\" \n          required \n          minlength=\"4\" \n          maxlength=\"24\"\n          [(ngModel)]=\"user.email\"\n          #email='ngModel'\n        /><br><span *ngIf =\"email.errors\">Email  is Required</span>\n        <div *ngIf='err'>\n            <span *ngIf =\"err.errors.email\">{{err.errors.email.message}}</span>\n      \n        </div>\n      \n\n        <p class=\"text\">Password: <input \n          type=\"password\" \n          name=\"password\" \n          required \n          minlength=\"8\" \n          maxlength=\"15\"\n          pattern=\"^([a-zA-Z0-9@*#]{8,15})$\"\n          [(ngModel)]=\"user.password\"\n          #password='ngModel'\n        /><br><span *ngIf =\"password.errors\">Password is Required</span>\n        <div *ngIf='err'>\n            <span *ngIf =\"err.errors.password\">{{err.errors.password.message}}</span>\n      \n        </div>\n      \n\n        <p class=\"text\">Confirm Password: <input \n          type=\"password\" \n          name=\"password_confirm\" \n          required \n          [(ngModel)]=\"user.password_confirm\"\n          #password_confirm='ngModel'\n          /><br><span *ngIf =\"user.password != user.password_confirm\">Passwords must match</span>\n          <div *ngIf='err'>\n              <span *ngIf =\"err.errors.password_confirm\">{{err.errors.password_confirm.message}}</span>\n        \n          </div>\n        \n          <p class=\"text\"> License: \n            <input type=\"radio\" \n            id=\"licensechoice1\"\n            name=\"license\"\n            value = \"User\" checked\n            [(ngModel)]=\"user.license\"\n            #license='ngModel' >\n            <label for=\"licensechoice1\">User</label>\n\n            <input type=\"radio\" \n            id=\"licensechoice2\"\n            name=\"license\"\n            value = \"Provider\"\n            [(ngModel)]=\"user.license\"\n            #license='ngModel'>\n            <label for=\"licensechoice2\">Provider</label></p>\n            <div *ngIf='err'>\n                <span *ngIf =\"err.errors.license\">{{err.errors.license.message}}</span>\n          \n            </div>\n          \n          <p class=\"text\" *ngIf=\"license.value == 'Provider'\">Company:\n              <input \n              type=\"text\" \n              name=\"company\" \n              required \n              minlength=\"3\" \n              [(ngModel)]=\"user.company\"\n              #company='ngModel'\n              ><br><span *ngIf =\"company.errors\">Company  is Required</span>\n\n          </p>\n        \n        <hr>\n\n        <input [disabled]=\"regForm.invalid\" class=\"button\" type=\"submit\" value=\"Register\">\n\n  </form>\n</fieldset>\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(_us, _router) {
        this._us = _us;
        this._router = _router;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__user__["b" /* User */]();
    }
    LoginComponent.prototype.create = function (user) {
        var _this = this;
        this._us.register(user).subscribe(function (success) { success; }, //Change to show a succues mesage
        function (err) {
            _this.err = JSON.parse(err._body);
            console.log(err);
        });
        this.user = new __WEBPACK_IMPORTED_MODULE_1__user__["b" /* User */](); //move to success
        this._router.navigate(['login']); //move to success
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/new-add/new-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-add/new-add.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Please add your add.\n</p>\n<form #ngForm = 'ngForm' (submit)=\"uploadAdd(add)\">\n<image-upload\nbuttonCaption=\"Add a Image\"\ndropBoxMessage=\"50Mb Limit\"\n[max]=\"1\"\n[maxFileSize]=\"1000000000\"\n(uploadFinished)=\"onUploadFinished($event)\"\n></image-upload>\n<select name =\"type\"\n\n[(ngModel)]=\"add.type\"\n#type='ngModel'>\n    <option value=\"banner\">banner</option>\n    <option value=\"table\">table</option>\n    <option value=\"video\">video</option>\n    <option value=\"popup\">popup</option>\n</select>\n<input type=\"submit\" value=\"Send image\">\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/new-add/new-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewAddComponent = (function () {
    function NewAddComponent(_us, _router) {
        this._us = _us;
        this._router = _router;
        this.user = null;
        this.add = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* Add */];
    }
    NewAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._us.userSub().subscribe(function (user) {
            _this.user = user;
        });
    };
    NewAddComponent.prototype.onUploadFinished = function ($event) {
        this.img = $event;
        this.img['company'] = this.user.company;
    };
    NewAddComponent.prototype.uploadAdd = function (data) {
        var company = this.user.company;
        this.img['type'] = data.type;
        console.log(this.img);
        this._us.newImg(this.img);
        this.add = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* Add */];
        this._router.navigate(['success']);
    };
    NewAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-add',
            template: __webpack_require__("../../../../../src/app/new-add/new-add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/new-add/new-add.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], NewAddComponent);
    return NewAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SortByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, term) {
        // console.log('term', term);
        return term
            ? items.filter(function (item) { return item.word.indexOf(term) !== -1; })
            : items;
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filter',
            pure: false
        })
    ], FilterPipe);
    return FilterPipe;
}());

var SortByPipe = (function () {
    function SortByPipe() {
    }
    SortByPipe.prototype.transform = function (items, sortedBy) {
        // console.log('sortedBy', sortedBy);
        return items.sort(function (a, b) { return b[sortedBy] - a[sortedBy]; });
    };
    SortByPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'sortBy'
        })
    ], SortByPipe);
    return SortByPipe;
}());



/***/ }),

/***/ "../../../../../src/app/success/success.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/success/success.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<fieldset *ngIf = \"user.license == 'Provider'\">\n  <div style=\"width: 79%; height: 500px; overflow: scroll; display: inline-block; vertical-align: top;\">\n      \n    <div *ngFor = \"let img of imgs\">\n        <hr>\n          <p *ngIf=\"img.company==user.company\">\n          {{img.company}}  <br>\n          type: {{img.type}} <br>\n        <img src=\"{{img.src}}\"><button (click) = 'deleteImg(img._id)'>Delete this add.</button> \n        \n        </p>\n      </div>\n  </div>\n  <div style=\"width: 20%; height: 500px; display: inline-block; \">\n    <p>You may only view your own images.</p>\n  </div>\n</fieldset>\n\n<fieldset *ngIf = \"user.license == 'User'\">\n    <div style=\"width: 100%; height: 100%; overflow: scroll; \">\n        <hr>  \n      <p *ngFor = \"let img of imgs\">\n          \n          {{img.company}} <br>\n          Type: {{img.type}} <br>\n        <img src=\"{{img.src}}\">\n        </p>\n      \n      </div>\n\n\n</fieldset>"

/***/ }),

/***/ "../../../../../src/app/success/success.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SuccessComponent = (function () {
    function SuccessComponent(_us, _router) {
        this._us = _us;
        this._router = _router;
        this.user = null;
        this.imgs = [];
    }
    SuccessComponent.prototype.create = function () {
        var _this = this;
        this._us.loggedIn.subscribe(function (success) {
            console.log(success);
            if (success === false) {
                console.log("hello");
                _this.user = null;
                _this._router.navigate(['login']);
                return;
            }
            else {
                _this.user = success;
            }
        }, function (err) { console.log('err'); });
    };
    SuccessComponent.prototype.logout = function () {
        this._us.clearUser();
        this.user = null;
        return this._router.navigate(['login']);
    };
    SuccessComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.create();
        this._us.allImg().subscribe(function (success) { _this.imgs = success; }, function (err) { console.log('erors'); });
    };
    SuccessComponent.prototype.deleteImg = function (id) {
        var _this = this;
        this._us.deleteImg(id);
        this._us.allImg().subscribe(function (success) { _this.imgs = success; }, function (err) { console.log('erors'); });
    };
    SuccessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-success',
            template: __webpack_require__("../../../../../src/app/success/success.component.html"),
            styles: [__webpack_require__("../../../../../src/app/success/success.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], SuccessComponent);
    return SuccessComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_behaviorsubject__ = __webpack_require__("../../../../rxjs/behaviorsubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_behaviorsubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_behaviorsubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this.loggedIn = new __WEBPACK_IMPORTED_MODULE_2_rxjs_behaviorsubject__["BehaviorSubject"]({});
        this.user = new __WEBPACK_IMPORTED_MODULE_2_rxjs_behaviorsubject__["BehaviorSubject"]({});
        this.add = new __WEBPACK_IMPORTED_MODULE_2_rxjs_behaviorsubject__["BehaviorSubject"]({});
    }
    UserService.prototype.holdUser = function (user) {
        this.loggedIn.next(user);
        console.log(this.loggedIn);
    };
    UserService.prototype.sessionCheck = function (callBack) {
        var _this = this;
        this._http.get('/session').map(function (Response) { return Response.json(); }).subscribe(function (success) {
            console.log(success);
            _this.holdUser(success);
            if (typeof callBack == 'function') {
                callBack();
                console.log("heelo");
            }
        });
    };
    UserService.prototype.show = function () {
        return this._http.get('/');
    };
    UserService.prototype.register = function (user) {
        return this._http.post('/register', user);
    };
    UserService.prototype.userSub = function () {
        return this.loggedIn.asObservable();
    };
    UserService.prototype.login = function (user) {
        //this.user.next(this.loggedIn)
        console.log(user);
        return this._http.post('/login', user).map(function (Response) { return Response.json(); });
    };
    UserService.prototype.clearUser = function () {
        this.loggedIn.next({});
        return this._http.get('/logout').subscribe(function (res) { return (res.json()); }, function (err) { return console.log(err); });
    };
    UserService.prototype.allImg = function () {
        return this._http.get('imgs').map(function (Response) { return Response.json(); });
    };
    UserService.prototype.newImg = function (add) {
        return this._http.post('/upload', add).subscribe(function (res) { return (res); }, function (err) { return console.log(err); });
    };
    UserService.prototype.deleteImg = function (id) {
        return this._http.delete('/img/' + id).subscribe(function (res) { return (res); }, function (err) { return console.log(err); });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Add; });
var User = (function () {
    function User() {
    }
    return User;
}());

;
var Add = (function () {
    function Add() {
    }
    return Add;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map