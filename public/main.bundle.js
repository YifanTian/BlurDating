webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar> \n<router-outlet></router-outlet>\n<!-- <app-peoples></app-peoples> -->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
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
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'app';
        this.auth.handleAuthentication();
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_problems_problems_component__ = __webpack_require__("../../../../../src/app/components/problems/problems.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_peoples_peoples_component__ = __webpack_require__("../../../../../src/app/components/peoples/peoples.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_people_detail_people_detail_component__ = __webpack_require__("../../../../../src/app/components/people-detail/people-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_chat_window_chat_window_component__ = __webpack_require__("../../../../../src/app/components/chat-window/chat-window.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_chat_service__ = __webpack_require__("../../../../../src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_landing_landing_component__ = __webpack_require__("../../../../../src/app/components/landing/landing.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




 // <-- #1 import module








// import { ChatroomsService } from './services/chatrooms.service';
// routing import 

// service import 



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_problems_problems_component__["a" /* ProblemsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_peoples_peoples_component__["a" /* PeoplesComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_people_detail_people_detail_component__["a" /* PeopleDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_chat_window_chat_window_component__["a" /* ChatWindowComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_landing_landing_component__["a" /* LandingComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_12__app_routes__["a" /* routing */]
        ],
        providers: [
            {
                provide: 'data',
                useClass: __WEBPACK_IMPORTED_MODULE_11__services_data_service__["a" /* DataService */]
            },
            __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_10__services_chat_service__["a" /* ChatService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_problems_problems_component__ = __webpack_require__("../../../../../src/app/components/problems/problems.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_landing_landing_component__ = __webpack_require__("../../../../../src/app/components/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_people_detail_people_detail_component__ = __webpack_require__("../../../../../src/app/components/people-detail/people-detail.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });




var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__components_landing_landing_component__["a" /* LandingComponent */]
    },
    {
        path: 'problems',
        component: __WEBPACK_IMPORTED_MODULE_1__components_problems_problems_component__["a" /* ProblemsComponent */]
    },
    {
        path: 'peoples/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__components_people_detail_people_detail_component__["a" /* PeopleDetailComponent */]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/components/chat-window/chat-window.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#scrollArea {\n  height: 580px;\n  overflow: auto;\n}\n\n#bottom {\n  display: block;\n  margin-top: 2000px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chat-window/chat-window.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n\n  <!-- <div class=\"list-group\" *ngFor=\"let message of allmessages\">\n    {{message.user}}: {{message.info}}\n  </div> -->\n\n    <div id=\"scrollArea\" ng-controller=\"ScrollController\">\n      <!-- <a ng-click=\"gotoBottom()\">Go to bottom</a> -->\n\n      <div class=\"list-group\" *ngFor=\"let message of allmessages\">\n        <!--{{message.user}},{{message.info}}-->\n        <!-- <div id=\"bottom\"> -->\n          <div *ngIf=\" message.user ==='myself'\">\n              <!-- <div class=\"pull-right\">  -->\n                <!-- <img src=\"../../../img/Last_Round.jpg\" class=\"img-rounded\" alt=\"Cinque Terre\" width=\"30\" height=\"20\"> -->\n                <h3 class =\"text-right\">\n                  {{message.info}}\n                  <img src=\"../../../img/myself.jpg\" class=\"img-rounded\" alt=\"Cinque Terre\" width=\"35\" height=\"35\">\n                </h3>\n              <!-- </div>  -->\n          </div>\n          <div *ngIf=\" message.user !== 'myself'\">\n            <!-- <div class=\"pull-left\"> -->\n              <h3 class =\"text-left\">\n                <img src=\"../../../img/Last_Round.jpg\" class=\"img-rounded\" alt=\"Cinque Terre\" width=\"35\" height=\"25\">\n                {{message.info}}\n              </h3>\n            <!-- </div> -->\n          <!-- </div> -->\n        </div>\n      </div>\n      \n      <!-- <a id=\"bottom\"></a> You're at the bottom! -->\n    </div>\n\n  <!--<input class=\"inputMessage\" placeholder=\"Type here...\" [(ngModel)]=\"inputMessage\"/>-->\n  <form #formRef=\"ngForm\">\n      <div class=\"form-group\">\n        <input name=\"sendmessage\" id=\"sendmessage\" class=\"form-control\"\n              type=\"text\" required placeholder=\"Enter message here...\"\n              [(ngModel)]=\"inputMessage\">\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <button type=\"submit\" class=\"btn btn-primary pull-right\"\n                  (click)=\"sendMessage()\"\n          >send</button>\n        </div>\n      </div>\n  </form>\n\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/chat-window/chat-window.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_chat_service__ = __webpack_require__("../../../../../src/app/services/chat.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatWindowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ChatWindowComponent = (function () {
    function ChatWindowComponent(Chat, route, data) {
        this.Chat = Chat;
        this.route = route;
        this.data = data;
    }
    ChatWindowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.sessionId = params['id'];
            // this.initEditor();
        });
        this.allmessages = [];
        this.Chat.init(this.allmessages, this.sessionId);
    };
    ChatWindowComponent.prototype.sendMessage = function () {
        console.log("current showmessages: " + this.showmessages);
        console.log("this.inputMessage:" + this.inputMessage);
        // this.showmessages = this.showmessages + this.inputMessage;
        this.allmessages.push({ user: 'myself', info: this.inputMessage });
        this.Chat.sendMessage(this.inputMessage);
    };
    return ChatWindowComponent;
}());
ChatWindowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-chat-window',
        template: __webpack_require__("../../../../../src/app/components/chat-window/chat-window.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/chat-window/chat-window.component.css")]
    }),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Inject */])('data')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, Object])
], ChatWindowComponent);

var _a, _b;
//# sourceMappingURL=chat-window.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".type {\n  min-width: 65px;\n  margin-right: 10px;\n}\n\n.label.type {\n  padding-top: 0.6em;\n  color: #fbfdfa;\n  font-size: 12px;\n}\n\n.title {\n  font-size: 1.2em;\n}\n\n.type-life {\n  background-color: #42ebf4;\n}\n\n.type-media {\n  background-color: #92cf5c;\n}\n\n.type-hobbies {\n  background-color: #dd0d1e;\n}\n\n.type-work {\n  background-color: #8d16e2;\n}\n\n.type-others {\n  background-color: #0616e2;\n}\n\n\n\n\n\n\n\n\n* {\n    font-family: 'Open Sans', sans-serif;\n}\n\nh1 {\n    margin: 0;\n    padding: 0;\n}\n\nh3 {\n    margin: 0;\n    padding: 10px;\n}\n\nimg {\n    width: 100%;\n}\n\n.pin-button-group{\n    margin: 50px 0 0 0;\n    float: right\n}\n\n.pin-button {\n    width: 77px;\n}\n\n.search-input-group {\n    margin: -10px 0 0 0;\n}\n\n.search-input-group .search-addon {\n    background: none;\n    padding: 0;\n    border: 0;\n}\n\n.search-input-group .search-button {\n    border-left: 0;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n.a-card {\n    height: auto;\n    border: 1px solid rgba(0, 0, 0, .15);\n    border-radius: 3px;\n    margin: 0 10px 10px 0;\n    /*box-shadow: -2px 3px 3px #E8E8E8;*/\n}\n\n.a-card-tags {\n    padding: 0 10px 10px 10px;\n    font-size: 80%;\n    opacity: .5;\n    word-wrap: break-word;\n}\n\n.a-card-pin {\n    height: 30px;\n    width: 32px;\n    position: relative;\n    left: 85%;\n}\n\n.a-card-pin-icon {\n    opacity: .8;\n}\n\n.a-card-pin-icon:hover {\n    opacity: 1;\n}\n\n.a-card-false {\n    opacity: .4;\n}\n\n.a-card-true {\n    opacity: 1;\n}\n\n.deckgrid{\n    padding: 10px 0 10px 10px;\n}\n\n.deckgrid .column {\n    float: left;\n}\n\n.deckgrid .column-1-1 {\n    width: 100%;\n}\n\n.deckgrid .column-1-2 {\n    width: 50%;\n}\n\n.deckgrid .column-1-3 {\n    width: 33.33%;\n}\n\n.deckgrid .column-1-4 {\n     width: 25%;\n }\n\n.deckgrid[deckgrid]::before {\n    content: '4 .column.column-1-4';\n    font-size: 0;\n    visibility: hidden;\n}\n\n@media screen and (max-width: 960px) {\n    .deckgrid[deckgrid]::before {\n        content: '3 .column.column-1-3';\n    }\n}\n\n@media screen and (max-width: 720px) {\n    .deckgrid[deckgrid]::before {\n        content: '2 .column.column-1-2';\n    }\n}\n\n@media screen and (max-width: 480px) {\n    .deckgrid[deckgrid]::before {\n        content: '1 .column.column-1-1';\n    }\n    .pin-button-group{\n        float: left;\n    }\n    .search-input-group{\n        clear: left;\n    }\n}\n\n\n\n\n.category {\n  min-width: 65px;\n  margin-right: 10px;\n}\n\n.label.category {\n  padding-top: 0.6em;\n  color: #fbfdfa;\n  font-size: 12px;\n}\n\n.title {\n  font-size: 1.2em;\n}\n\n.category-housing {\n  background-color: #42ebf4;\n}\n\n.category-job {\n  background-color: #92cf5c;\n}\n\n.category-event {\n  background-color: #dd0d1e;\n}\n\n.category-forsale {\n  background-color: #8d16e2;\n}\n\n.category-lostfound {\n  background-color: #2d16e2;\n}\n\n\n\n\n\n\n\n\n\n\n/* Search */\n#search-panel {\n\twidth: 50%;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tpadding-top: 20%;\n\ttransition: all .3s ease;\n}\n\n#search-panel.clicked {\n\tpadding-top: 10%;\n}\n\n#search-panel-icons {\n\twidth: 100%;\n\ttransition: all 5s ease;\n}\n\n.search-panel-icon {\n\tdisplay: block;\n\tbackground: rgba(255,255,255,0.85);\n\twidth: 100%;\n\theight: 0;\n\tpadding-bottom: 100%;\n\tborder-radius: 5px;\n\ttransition: background .5s ease;\n}\n\n.search-panel-icon:hover {\n\tbackground: rgba(255,255,255,0.95);\n\tcursor: pointer;\n}\n\n.search-panel-icon.active {\n\tbackground: rgba(255,255,255,1);\n}\n\n.search-panel-icon>img {\n\twidth: 50%;\n\tpadding: 25%;\n}\n\n.search-panel-label {\n\tdisplay: block;\n\ttext-align: center;\n\tletter-spacing: 0.12em;\n\tfont-size: 0.85em;\n\tmargin-top: 5%;\n\tcolor: rgba(255,255,255,0.95);\n}\n\n#search-panel-options {\n\twidth: 100%;\n\tbackground: rgba(255,255,255,0.85);\n\tborder-radius: 5px;\n\tposition: relative;\n\tmargin-top: 2.5%;\n\tpadding: 5% 0;\n}\n\n.search-panel-options-enter-active, .search-panel-options-leave-active {\n\ttransition: all 0.5s ease;\n}\n\n.search-panel-options-enter, .search-panel-options-leave-to {\n\t-webkit-transform: translateY(10px);\n\t        transform: translateY(10px);\n\topacity: 0;\n}\n\n#search-panel-options>div {\n\twidth: 90%;\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n\n#search-panel-options .el-date-editor.el-input {\n\twidth: 100%;\n}\n\nlabel {\n\tfont-size: 12px;\n\tcolor: #48576a;\n\tline-height: 1.75;\n\ttext-align: left;\n\tdisplay: inline-block;\n}\n\n#search-panel-options label {\n\tmargin-left: 2px;\n}\n\n/* Results Global */\n.result-container {\n\tposition: relative;\n\twidth: 80%;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tbackground-color: rgba(236, 240, 241,0.8);\n\tborder-radius: 5px;\n\tpadding: 2.5%;\n\tmargin-top: 5%;\n}\n\n/* Card */\n.el-card img {\n\tmax-height: 200px;\n\tmin-width: 100%;\n}\n\n.el-card a {\n\ttext-decoration: none;\n\tcolor: initial;\n}\n\n.el-card a:hover {\n\tcursor: pointer;\n}\n\n.bottom {\n\tfont-size: 13px;\n\tcolor: #999;\n}\n\n.card-details {\n\tpadding: 10px 14px 14px 14px;\n}\n\n/* Housing */\n#search-panel-house {\n\ttext-align: center;\n}\n\n#search-panel-house label {\n\tmargin-left: 0;\n}\n\n#search-panel-house .el-col+.el-col+.el-col+.el-col {\n\tmargin-top: 10px;\n}\n\n#search-panel-house .el-dropdown, #search-panel-house .el-dropdown>button {\n\twidth: 100%;\n}\n\n#search-panel-house #housing-price {\n\tpadding: 0 20px !important;\n}\n\n#housing-results .el-col+.el-col+.el-col+.el-col {\n\tpadding-top: 30px;\n}\n\n/* Event */\n#search-panel-event .el-dropdown, #search-panel-event button {\n\twidth: 100%;\n}\n\n/* Listing Details */\n#listing {\n\theight: 100%;\n}\n\n.header {\n\twidth: 100%;\n\theight: 80px;\n\tbackground: linear-gradient(to right, #0064a4 0%, #3d99be 40%, #ffd200 100%);\n}\n\n#listing #logo {\n\tposition: relative;\n}\n\n#listing #login {\n\tposition: relative;\n}\n\n#listing #sellbutton {\n\tposition: relative;\n}\n\n#listing .photos {\n\theight: 350px;\n}\n\n#listing .cover-image {\n\theight: 100%;\n\twidth: 100%;\n\tbackground-size: cover;\n\tbackground-position: center center;\n}\n\n.listing-details {\n\twidth: 80%;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tmargin-top: 2.5%;\n}\n\n.listing-title {\n\tfont-size: 2.5em;\n\tfont-weight: 700;\n}\n\n.listing-description {\n\tpadding-top: 1%;\n}\n\n.container {\n\t/*position: relative;\n\twidth: 80%;\n\tmargin-left: auto;\n\tmargin-right: auto;*/\n\tbackground-color: rgba(236, 240, 241,0.8);\n\tborder-radius: 5px;\n\tpadding: 2.5%;\n\ttop: 17%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "  \n\n\n<div class=\"container\">\n  <a class=\"list-group-item\" [routerLink]=\"['/problems']\">\n\n      <div class=\"row\">\n        <h1>Welcome to Blur!</h1>\n        <img src=\"../../../img/Last_Round.jpg\" class=\"img-rounded\" alt=\"Cinque Terre\" width=\"304\" height=\"336\">\n      </div>\n\n    <!-- <img src=\"{{match.img}}\" class=\"img-responsive\" alt=\"Chania\" width=\"260\" height=\"245\"> -->\n  </a>\n  <div class=\"list-group\">\n    <a class=\"list-group-item\" *ngFor=\"let answer of answerArray\">\n    <span class=\"{{'pull-left label type type-' + answer.type.toLocaleLowerCase()}}\">\n      {{answer.type}}\n    </span>\n    <strong class=\"title\">{{answer.id}}  {{answer.name}} </strong>\n      <div class=\"pull-right\">\n        <strong class=\"title\">{{answer.choice}}</strong>\n      </div>\n\n    <form #formRef=\"ngForm\">\n      <!-- <div class=\"form-group\">\n        <label for=\"Choice\">Choice</label>\n        <select class=\"form-control\" id=\"choice\" name=\"choice\"\n                [(ngModel)]=\"answer.choice\">\n          <option *ngFor=\"let choice of choices\" [value]=\"choice\">\n            {{choice}}\n          </option>\n        </select>\n      </div>  -->\n\n      <div class=\"form-group radio\">\n        <h4>Your Choice:</h4> \n        <label class=\"center-block\"><input type=\"radio\" [(ngModel)]=\"answer.choice\" id=\"choice\" name=\"choice\" [value]=1 (click)=\"selectEntity(answer.id,1)\">Yes</label>\n        <label class=\"center-block\"><input type=\"radio\" [(ngModel)]=\"answer.choice\" id=\"choice\" name=\"choice\" [value]=2 (click)=\"selectEntity(answer.id,2)\">No</label>\n        <label class=\"center-block\"><input type=\"radio\" [(ngModel)]=\"answer.choice\" id=\"choice\" name=\"choice\" [value]=3 (click)=\"selectEntity(answer.id,3)\">Unknown</label>\n      </div>\n    </form>\n\n    </a> \n  </div>\n\n  <div>\n    <form #formRef=\"ngForm\">\n\n      <div class=\"form-group\">\n        <label for=\"peopleName\">People name</label>\n        <input name=\"peopleName\" id=\"peopleName\" class=\"form-control\"\n              type=\"text\" required placeholder=\"Enter your name\"\n              [(ngModel)]=\"newPeople.name\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"problemDesc\">People description</label>\n        <textarea name=\"problemDesc\" id=\"problemDesc\" class=\"form-control\"\n                  required placeholder=\"Enter your description\"\n                  [(ngModel)]=\"newPeople.desc\" rows=\"3\">\n        </textarea>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"difficulty\">Type</label>\n        <select class=\"form-control\" id=\"difficulty\" name=\"difficulty\"\n                [(ngModel)]=\"newPeople.desc\">\n          <option *ngFor=\"let difficulty of difficulties\" [value]=\"difficulty\">\n            {{difficulty}}\n          </option>\n        </select>\n      </div>\n      \n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <button type=\"submit\" class=\"btn btn-primary pull-right\"\n                  (click)=\"addPeople()\"\n          >Add people</button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <br/>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_answer__ = __webpack_require__("../../../../../src/app/models/answer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__ = __webpack_require__("../../../../rxjs/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DEFAULT_PEOPLE = Object.freeze({
    id: 9999,
    name: '',
    age: 18,
    img: '',
    desc: [''],
    answers: ''
});
var LandingComponent = (function () {
    function LandingComponent(data) {
        this.data = data;
        this.newPeople = Object.assign({}, DEFAULT_PEOPLE);
        this.difficulties = ['easy', 'medium', 'hard', 'super'];
        this.aArray = {};
        this.choices = [1, 2, 3];
        this.subscriptionProblem = __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__["Subscription"];
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.getProblems();
    };
    LandingComponent.prototype.initAnswers = function () {
        this.answerArray = [];
        for (var _i = 0, _a = this.problems; _i < _a.length; _i++) {
            var problem = _a[_i];
            var ans = new __WEBPACK_IMPORTED_MODULE_1__models_answer__["a" /* Answer */]();
            ans.id = problem.id;
            ans.name = problem.name;
            ans.type = problem.type;
            ans.choice = 3;
            this.answerArray.push(ans);
            // this.answerArray[problem.id] = 3;
        }
        // console.log(this.answerArray);
    };
    LandingComponent.prototype.getProblems = function () {
        var _this = this;
        // this.problems = this.data.getProblems();
        this.subscriptionProblem = this.data.getProblems()
            .subscribe(function (problems) { _this.problems = problems; _this.initAnswers(); });
    };
    LandingComponent.prototype.addPeople = function () {
        // this.data.addProblem(this.newPeople)
        // .catch(error=>console.log(error));
        // this.newPeople = Object.assign({},DEFAULT_People);
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-landing',
        template: __webpack_require__("../../../../../src/app/components/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/landing/landing.component.css")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Inject */])('data')),
    __metadata("design:paramtypes", [Object])
], LandingComponent);

//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-background {\n  width: 100%;\n  top: 0;\n  padding-left: 0;\n  padding-right: 0;\n  background-image: url(" + __webpack_require__("../../../../../src/img/navbg.jpg") + ");\n   /* position: fixed;  */\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <nav class=\"navbar navbar-default navbar-background\">\n    <div class=\"container-fluid\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n          aria-expanded=\"false\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n        <a class=\"navbar-brand\" href=\"#\">{{ title }}</a>\n      </div>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <!-- <form class=\"navbar-form navbar-left\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n          </div>\n          <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n        </form> -->\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li *ngIf=\"!auth.isAuthenticated()\">\n            <form class=\"navbar-form\">\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"login()\">Sign in</button>\n            </form>\n          </li>\n          <li class=\"dropdown\" *ngIf=\"auth.isAuthenticated()\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              {{ profile?.name }}\n              <span class=\"caret\"></span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li><a href=\"#\">My Profile</a></li>\n              <li><a href=\"#\">My Favorites</a></li>\n              <li><a href=\"#\">My Submissions</a></li>\n              <li role=\"separator\" class=\"divider\"></li>\n              <li><a href=\"#\" (click)=\"logout()\">Log out</a></li>\n            </ul>\n          </li>\n        </ul>\n      </div>\n      <!-- /.navbar-collapse -->\n    </div>\n    <!-- /.container-fluid -->\n  </nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(auth) {
        var _this = this;
        this.auth = auth;
        this.title = 'Blur';
        this.auth.userProfile.subscribe(function (profile) { return _this.profile = profile; });
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.login = function () {
        this.auth.login();
    };
    NavbarComponent.prototype.logout = function () {
        this.auth.logout();
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/people-detail/people-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/people-detail/people-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf = \"people\">\n  <div class=\"col-xs-12 col-md-4\">\n    <h2>\n      {{people.id}}. {{people.name}}\n    </h2>\n    <p>\n      {{people.desc}}\n    </p>\n    <img src=\"{{people.img}}\" class=\"img-rounded\" alt=\"Cinque Terre\" width=\"304\" height=\"236\">\n  </div>\n\n  <div class=\"hidden-xs col-sm-12 col-md-8\">\n    <app-chat-window></app-chat-window>\n  </div>\n  \n</div>"

/***/ }),

/***/ "../../../../../src/app/components/people-detail/people-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var PeopleDetailComponent = (function () {
    function PeopleDetailComponent(route, data) {
        this.route = route;
        this.data = data;
    }
    PeopleDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.data.getPeople(+params['id'])
                .then(function (people) { return _this.people = people; });
            // this.people = this.data.getPeople(+params['id']);
        });
    };
    return PeopleDetailComponent;
}());
PeopleDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-people-detail',
        template: __webpack_require__("../../../../../src/app/components/people-detail/people-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/people-detail/people-detail.component.css")]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Inject */])('data')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, Object])
], PeopleDetailComponent);

var _a;
//# sourceMappingURL=people-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/peoples/peoples.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/peoples/peoples.component.html":
/***/ (function(module, exports) {

module.exports = "\t\n<div class=\"container\">\n\t<div class=\"row clearfix\">\n\t\t<div class=\"col-md-4 column\">\n\t\t\t<h2>\n\t\t\t\tHeading\n\t\t\t</h2>\n\t\t\t<p>\n\t\t\t\tDonec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t <a class=\"btn\" href=\"#\">View details »</a>\n\t\t\t</p>\n\t\t</div>\n\t\t<div class=\"col-md-4 column\">\n\t\t\t<h2>\n\t\t\t\tHeading\n\t\t\t</h2>\n\t\t\t<p>\n\t\t\t\tDonec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t <a class=\"btn\" href=\"#\">View details »</a>\n\t\t\t</p>\n\t\t</div>\n\t\t<div class=\"col-md-4 column\">\n\t\t\t<h2>\n\t\t\t\tHeading\n\t\t\t</h2>\n\t\t\t<p>\n\t\t\t\tDonec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t <a class=\"btn\" href=\"#\">View details »</a>\n\t\t\t</p>\n\t\t</div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/peoples/peoples.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeoplesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PeoplesComponent = (function () {
    function PeoplesComponent() {
    }
    PeoplesComponent.prototype.ngOnInit = function () {
    };
    return PeoplesComponent;
}());
PeoplesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-peoples',
        template: __webpack_require__("../../../../../src/app/components/peoples/peoples.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/peoples/peoples.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PeoplesComponent);

//# sourceMappingURL=peoples.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/problems/problems.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nbody {\n    font-family: \"Lato\", sans-serif;\n    transition: background-color .5s;\n}\n\n.sidenav {\n    height: 100%;\n    width: 0;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    background-color: #111;\n    overflow-x: hidden;\n    transition: 0.5s;\n    padding-top: 60px;\n}\n\n.sidenav a {\n    padding: 8px 8px 8px 32px;\n    text-decoration: none;\n    font-size: 25px;\n    color: #818181;\n    display: block;\n    transition: 0.3s;\n}\n\n.sidenav a:hover, .offcanvas a:focus{\n    color: #f1f1f1;\n}\n\n.sidenav .closebtn {\n    position: absolute;\n    top: 0;\n    right: 25px;\n    font-size: 36px;\n    margin-left: 50px;\n}\n\n#main {\n    transition: margin-left .5s;\n    padding: 16px;\n}\n\n@media screen and (max-height: 450px) {\n  .sidenav {padding-top: 15px;}\n  .sidenav a {font-size: 18px;}\n}\n\n.vertical-menu {\n\twidth: 180px;\n\tposition: fixed;\n\theight: 80%;\n\t/* background-image: url(\"../../../img/navbg.jpg\"); */\n\t/* background-color: rgba(036, 040, 241,0.8); */\n}\n\n.vertical-menu a {\n    background-color: rgba(156, 340, 241,0.8);\n    color: black;\n    display: block;\n\tpadding: 12px;\n\t/* height: 200px; */\n    text-decoration: none;\n}\n\n.vertical-menu a:hover {\n    background-color: #ccc;\n}\n\n.vertical-menu a.active {\n    background-color: #4CAF50;\n    color: white;\n}\n\n.type {\n  min-width: 65px;\n  margin-right: 10px;\n}\n\n.label.type {\n  padding-top: 0.6em;\n  color: #fbfdfa;\n  font-size: 12px;\n}\n\n.title {\n  font-size: 1.2em;\n}\n\n.type-life {\n  background-color: #42ebf4;\n}\n\n.type-media {\n  background-color: #92cf5c;\n}\n\n.type-hobbies {\n  background-color: #dd0d1e;\n}\n\n.type-work {\n  background-color: #8d16e2;\n}\n\n.type-others {\n  background-color: #0616e2;\n}\n\n\n\n\n\n\n\n\n* {\n    font-family: 'Open Sans', sans-serif;\n}\n\nh1 {\n    margin: 0;\n    padding: 0;\n}\n\nh3 {\n    margin: 0;\n    padding: 10px;\n}\n\nimg {\n    width: 100%;\n}\n\n.pin-button-group{\n    margin: 50px 0 0 0;\n    float: right\n}\n\n.pin-button {\n    width: 77px;\n}\n\n.search-input-group {\n    margin: -10px 0 0 0;\n}\n\n.search-input-group .search-addon {\n    background: none;\n    padding: 0;\n    border: 0;\n}\n\n.search-input-group .search-button {\n    border-left: 0;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n.a-card {\n    height: auto;\n    border: 1px solid rgba(0, 0, 0, .15);\n    border-radius: 3px;\n    margin: 0 10px 10px 0;\n    /*box-shadow: -2px 3px 3px #E8E8E8;*/\n}\n\n.a-card-tags {\n    padding: 0 10px 10px 10px;\n    font-size: 80%;\n    opacity: .5;\n    word-wrap: break-word;\n}\n\n.a-card-pin {\n    height: 30px;\n    width: 32px;\n    position: relative;\n    left: 85%;\n}\n\n.a-card-pin-icon {\n    opacity: .8;\n}\n\n.a-card-pin-icon:hover {\n    opacity: 1;\n}\n\n.a-card-false {\n    opacity: .4;\n}\n\n.a-card-true {\n    opacity: 1;\n}\n\n.deckgrid{\n    padding: 10px 0 10px 10px;\n}\n\n.deckgrid .column {\n    float: left;\n}\n\n.deckgrid .column-1-1 {\n    width: 100%;\n}\n\n.deckgrid .column-1-2 {\n    width: 50%;\n}\n\n.deckgrid .column-1-3 {\n    width: 33.33%;\n}\n\n.deckgrid .column-1-4 {\n     width: 25%;\n }\n\n.deckgrid[deckgrid]::before {\n    content: '4 .column.column-1-4';\n    font-size: 0;\n    visibility: hidden;\n}\n\n@media screen and (max-width: 960px) {\n    .deckgrid[deckgrid]::before {\n        content: '3 .column.column-1-3';\n    }\n}\n\n@media screen and (max-width: 720px) {\n    .deckgrid[deckgrid]::before {\n        content: '2 .column.column-1-2';\n    }\n}\n\n@media screen and (max-width: 480px) {\n    .deckgrid[deckgrid]::before {\n        content: '1 .column.column-1-1';\n    }\n    .pin-button-group{\n        float: left;\n    }\n    .search-input-group{\n        clear: left;\n    }\n}\n\n\n\n\n.category {\n  min-width: 65px;\n  margin-right: 10px;\n}\n\n.label.category {\n  padding-top: 0.6em;\n  color: #fbfdfa;\n  font-size: 12px;\n}\n\n.title {\n  font-size: 1.2em;\n}\n\n.category-housing {\n  background-color: #42ebf4;\n}\n\n.category-job {\n  background-color: #92cf5c;\n}\n\n.category-event {\n  background-color: #dd0d1e;\n}\n\n.category-forsale {\n  background-color: #8d16e2;\n}\n\n.category-lostfound {\n  background-color: #2d16e2;\n}\n\n\n\n\n\n\n\n\n\n\n/* Search */\n#search-panel {\n\twidth: 50%;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tpadding-top: 20%;\n\ttransition: all .3s ease;\n}\n\n#search-panel.clicked {\n\tpadding-top: 10%;\n}\n\n#search-panel-icons {\n\twidth: 100%;\n\ttransition: all 5s ease;\n}\n\n.search-panel-icon {\n\tdisplay: block;\n\tbackground: rgba(255,255,255,0.85);\n\twidth: 100%;\n\theight: 0;\n\tpadding-bottom: 100%;\n\tborder-radius: 5px;\n\ttransition: background .5s ease;\n}\n\n.search-panel-icon:hover {\n\tbackground: rgba(255,255,255,0.95);\n\tcursor: pointer;\n}\n\n.search-panel-icon.active {\n\tbackground: rgba(255,255,255,1);\n}\n\n.search-panel-icon>img {\n\twidth: 50%;\n\tpadding: 25%;\n}\n\n.search-panel-label {\n\tdisplay: block;\n\ttext-align: center;\n\tletter-spacing: 0.12em;\n\tfont-size: 0.85em;\n\tmargin-top: 5%;\n\tcolor: rgba(255,255,255,0.95);\n}\n\n#search-panel-options {\n\twidth: 100%;\n\tbackground: rgba(255,255,255,0.85);\n\tborder-radius: 5px;\n\tposition: relative;\n\tmargin-top: 2.5%;\n\tpadding: 5% 0;\n}\n\n.search-panel-options-enter-active, .search-panel-options-leave-active {\n\ttransition: all 0.5s ease;\n}\n\n.search-panel-options-enter, .search-panel-options-leave-to {\n\t-webkit-transform: translateY(10px);\n\t        transform: translateY(10px);\n\topacity: 0;\n}\n\n#search-panel-options>div {\n\twidth: 90%;\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n\n#search-panel-options .el-date-editor.el-input {\n\twidth: 100%;\n}\n\nlabel {\n\tfont-size: 12px;\n\tcolor: #48576a;\n\tline-height: 1.75;\n\ttext-align: left;\n\tdisplay: inline-block;\n}\n\n#search-panel-options label {\n\tmargin-left: 2px;\n}\n\n/* Results Global */\n.result-container {\n\tposition: relative;\n\twidth: 80%;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tbackground-color: rgba(236, 240, 241,0.8);\n\tborder-radius: 5px;\n\tpadding: 2.5%;\n\tmargin-top: 5%;\n}\n\n/* Card */\n.el-card img {\n\tmax-height: 200px;\n\tmin-width: 100%;\n}\n\n.el-card a {\n\ttext-decoration: none;\n\tcolor: initial;\n}\n\n.el-card a:hover {\n\tcursor: pointer;\n}\n\n.bottom {\n\tfont-size: 13px;\n\tcolor: #999;\n}\n\n.card-details {\n\tpadding: 10px 14px 14px 14px;\n}\n\n/* Housing */\n#search-panel-house {\n\ttext-align: center;\n}\n\n#search-panel-house label {\n\tmargin-left: 0;\n}\n\n#search-panel-house .el-col+.el-col+.el-col+.el-col {\n\tmargin-top: 10px;\n}\n\n#search-panel-house .el-dropdown, #search-panel-house .el-dropdown>button {\n\twidth: 100%;\n}\n\n#search-panel-house #housing-price {\n\tpadding: 0 20px !important;\n}\n\n#housing-results .el-col+.el-col+.el-col+.el-col {\n\tpadding-top: 30px;\n}\n\n/* Event */\n#search-panel-event .el-dropdown, #search-panel-event button {\n\twidth: 100%;\n}\n\n/* Listing Details */\n#listing {\n\theight: 100%;\n}\n\n.header {\n\twidth: 100%;\n\theight: 80px;\n\tbackground: linear-gradient(to right, #0064a4 0%, #3d99be 40%, #ffd200 100%);\n}\n\n#listing #logo {\n\tposition: relative;\n}\n\n#listing #login {\n\tposition: relative;\n}\n\n#listing #sellbutton {\n\tposition: relative;\n}\n\n#listing .photos {\n\theight: 350px;\n}\n\n#listing .cover-image {\n\theight: 100%;\n\twidth: 100%;\n\tbackground-size: cover;\n\tbackground-position: center center;\n}\n\n.listing-details {\n\twidth: 80%;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tmargin-top: 2.5%;\n}\n\n.listing-title {\n\tfont-size: 2.5em;\n\tfont-weight: 700;\n}\n\n.listing-description {\n\tpadding-top: 1%;\n}\n\n.container {\n\t/*position: relative;\n\twidth: 100%;\n\tmargin-left: auto;\n\tmargin-right: auto;*/\n\tmargin-left: auto;\n\tmargin-right: auto;\n\twidth: 100%;\n\tbackground-color: rgba(236, 240, 241,0.8);\n\tborder-radius: 5px;\n\tpadding: 2.5%;\n\ttop: 17%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/problems/problems.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<!-- <div class=\"col-xs-12 col-md-2\">\n      <p>Profile</p>\n      <p>History</p>\n      <p>Setting</p>\n</div> -->\n  <!-- <div class=\"col-xs-12 col-md-12\"> -->\n\n    <!-- <div id=\"mySidenav\" class=\"sidenav\">\n      <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n      <a href=\"#\">About</a>\n      <a href=\"#\">Services</a>\n      <a href=\"#\">Clients</a>\n      <a href=\"#\">Contact</a>\n    </div> -->\n\n  <div class=\"container\">\n     <div class=\"col-xs-12 col-md-2\">\n      <!-- <p>Profile</p>\n      <p>History</p>\n      <p>Setting</p> -->\n\n          <div id=\"mySidenav\" class=\"sidenav\">\n            <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n            <a href=\"#\">About</a>\n            <a href=\"#\">Services</a>\n            <a href=\"#\">Clients</a>\n            <a href=\"#\">Contact</a>\n          </div>\n\n      <div class=\"vertical-menu\">\n        <!-- <h1>Vertical Menu</h1> -->\n        <a href=\"#\" class=\"active\">Home</a>\n        <a href=\"#\">Profile</a>\n        <!-- <a href=\"#\">History</a> -->\n        <a (click)=\"openNav()\">History</a>\n        <a (click)=\"openNav()\">Faverites</a>\n        <!-- <a href=\"#\">Faverite</a> -->\n        <a href=\"#\">Setting</a>\n        <a href=\"#\">About Us</a>\n        <!-- <a (click)=\"openNav()\">About Us</a> -->\n      </div>\n    </div> \n\n    <div class=\"col-xs-12 col-md-10\">\n      <div class=\"list-group\">\n          <a class=\"list-group-item\" *ngFor=\"let answer of answerArray\">\n          <span class=\"{{'pull-left label type type-' + answer.type.toLocaleLowerCase()}}\">\n            {{answer.type}}\n          </span>\n          <strong class=\"title\">{{answer.id}}  {{answer.name}} </strong>\n            <div class=\"pull-right\">\n              <strong class=\"title\">{{answer.choice}}</strong>\n            </div>\n\n          <form #formRef=\"ngForm\">\n            <!-- <div class=\"form-group\">\n              <label for=\"Choice\">Choice</label>\n              <select class=\"form-control\" id=\"choice\" name=\"choice\"\n                      [(ngModel)]=\"answer.choice\">\n                <option *ngFor=\"let choice of choices\" [value]=\"choice\">\n                  {{choice}}\n                </option>\n              </select>\n            </div>  -->\n\n            <div class=\"form-group radio\">\n              <h4>Your Choice:</h4> \n              <label class=\"center-block\"><input type=\"radio\" [(ngModel)]=\"answer.choice\" id=\"choice\" name=\"choice\" [value]=1 (click)=\"selectEntity(answer.id,1)\">Yes</label>\n              <label class=\"center-block\"><input type=\"radio\" [(ngModel)]=\"answer.choice\" id=\"choice\" name=\"choice\" [value]=2 (click)=\"selectEntity(answer.id,2)\">No</label>\n              <label class=\"center-block\"><input type=\"radio\" [(ngModel)]=\"answer.choice\" id=\"choice\" name=\"choice\" [value]=3 (click)=\"selectEntity(answer.id,3)\">Unknown</label>\n            </div>\n          </form>\n\n          </a> \n        </div>\n\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-md-10\"></div>\n        <div class=\"col-xs-6 col-md-2\">\n\n          <div class=\"btn-group\">\n            <button type=\"button\" class=\"btn btn-danger\">Sort By</button>\n            <button type=\"button\" class=\"btn btn-danger dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              <span class=\"caret\"></span>\n              <span class=\"sr-only\">Toggle Dropdown</span>\n            </button>\n            <ul class=\"dropdown-menu\">\n              <li><a type=\"button\" class=\"btn btn-default\" (click)=\"sortMatchesByAge(1)\" >Age Up</a></li> \n              <li><a type=\"button\" class=\"btn btn-default\" (click)=\"sortMatchesByAge(2)\" >Age Dn</a></li> \n            </ul>\n          </div>\n\n        </div>\n      </div>\n      <br/>\n\n          <div class=\"list-group\">\n          <a class=\"list-group-item\" *ngFor=\"let match of matchArray\" \n          [routerLink]=\"['/peoples', match.id]\">\n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <div class=\"thumbnail\">\n                    <img src=\"{{match.img}}\" class=\"img-responsive\" alt=\"Chania\" width=\"260\" height=\"245\">\n                    <div class=\"caption\">\n                    </div>\n                </div>\n              </div>\n\n              <div class=\"col-xs-6\">\n                  <div class=\"a-card-pin\">\n                    <div class=\"a-card-pin-icon\">\n                        <img src=\"../../../img/pushpin-64.png\" class=\"{{'a-card-' + match.fav}}\" (click)=\"pin(match)\">\n                      </div>\n                    </div> \n                  <dl>\n                    Name: <strong class=\"title\">{{match.name}}</strong>\n                  </dl>\n                  <dl>\n                    Age: <strong class=\"title\">{{match.age}}</strong>\n                  </dl>\n                  <!-- <dl>\n                    Answers: <strong class=\"title\">{{match.answers}}</strong>\n                  </dl> -->\n                  <dl>\n                    Similarity: <strong class=\"title\">{{match.weight}}</strong>\n                  </dl>\n                  <dl>\n                    Faverite: <strong class=\"title\">{{match.fav}}</strong>\n                  </dl>\n                  <dl>\n                    <a class=\"btn\" [routerLink]=\"['/peoples', match.id]\">View details »</a>\n                    <a class=\"btn\" [routerLink]=\"['/peoples', match.id]\">Chat »</a>\n                  </dl>\n                  <button type=\"button\" class=\"btn btn-danger\">Leave a Message</button>&nbsp;&nbsp;&nbsp;\n                  <button type=\"button\" class=\"btn btn-danger\">Send a gift</button>\n              </div>\n            </div>\n\n          </a>\n        </div>\n    </div>\n  </div> \n\n  <!-- </div> -->\n"

/***/ }),

/***/ "../../../../../src/app/components/problems/problems.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_answer__ = __webpack_require__("../../../../../src/app/models/answer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_match__ = __webpack_require__("../../../../../src/app/models/match.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__ = __webpack_require__("../../../../rxjs/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ProblemsComponent = (function () {
    function ProblemsComponent(data) {
        this.data = data;
        this.aArray = {};
        this.choices = [1, 2, 3];
        this.subscriptionProblem = __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__["Subscription"];
        this.subscriptionPeople = __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__["Subscription"];
    }
    ProblemsComponent.prototype.ngOnInit = function () {
        this.getProblems();
        // this.initAnswers();
        this.getPeoples();
        // this.initMatches();
    };
    ProblemsComponent.prototype.sortMatchesByAge = function (order) {
        var dict = {};
        dict['easy'] = 1;
        dict['medium'] = 2;
        dict['hard'] = 3;
        dict['super'] = 4;
        function compare1(a, b) {
            if (a.age < b.age)
                return -1;
            if (a.age > b.age)
                return 1;
            return 0;
        }
        function compare2(a, b) {
            if (a.age > b.age)
                return -1;
            if (a.age < b.age)
                return 1;
            return 0;
        }
        order === 1 ? this.matchArray.sort(compare1) : this.matchArray.sort(compare2);
    };
    ProblemsComponent.prototype.selectEntity = function (id, choice) {
        this.aArray[id] = choice;
        for (var _i = 0, _a = this.matchArray; _i < _a.length; _i++) {
            var match = _a[_i];
            match.weight = 0;
            // console.log(match.id+" "+match.answers[id]);
        }
        for (var _b = 0, _c = this.matchArray; _b < _c.length; _b++) {
            var match = _c[_b];
            for (var question in this.aArray) {
                if (this.aArray[question] !== 3) {
                    if (question in match.answers) {
                        // console.log("find a match " + question + " " + match.id + " " + match.answers[question]);
                        match.weight += this.aArray[question] === match.answers[question] ? 1 : -1;
                    }
                }
            }
        }
        this.matchArray.sort(function (a, b) { return b.weight - a.weight; });
    };
    ProblemsComponent.prototype.initAnswers = function () {
        this.answerArray = [];
        for (var _i = 0, _a = this.problems; _i < _a.length; _i++) {
            var problem = _a[_i];
            var ans = new __WEBPACK_IMPORTED_MODULE_1__models_answer__["a" /* Answer */]();
            ans.id = problem.id;
            ans.name = problem.name;
            ans.type = problem.type;
            ans.choice = 3;
            this.answerArray.push(ans);
            // this.answerArray[problem.id] = 3;
        }
        // console.log(this.answerArray);
    };
    ProblemsComponent.prototype.initMatches = function () {
        this.matchArray = [];
        for (var _i = 0, _a = this.peoples; _i < _a.length; _i++) {
            var people = _a[_i];
            var match = new __WEBPACK_IMPORTED_MODULE_2__models_match__["a" /* Match */]();
            match.id = people.id;
            match.answers = people.answers;
            // ans.id = problem.id;
            match.name = people.name;
            match.age = people.age;
            match.img = people.img;
            match.weight = 0;
            match.fav = false;
            this.matchArray.push(match);
            // this.answerArray[problem.id] = 3;
        }
        // console.log(this.answerArray);
    };
    ProblemsComponent.prototype.pin = function (match) {
        // console.log(match.id + " pinned "+ match.fav);
        match.fav = !match.fav;
        // console.log(match.fav);
    };
    ProblemsComponent.prototype.getProblems = function () {
        var _this = this;
        // this.problems = this.data.getProblems();
        this.subscriptionProblem = this.data.getProblems()
            .subscribe(function (problems) { _this.problems = problems; _this.initAnswers(); });
    };
    // getProblems(): void {
    //   // this.problems = this.dataService.getProblems();
    //   this.subscriptionProblem = this.data.getProblems()
    //   .subscribe(problems => this.problems = problems);
    // }
    ProblemsComponent.prototype.getPeoples = function () {
        var _this = this;
        // this.peoples = this.data.getPeoples();
        this.subscriptionPeople = this.data.getPeoples()
            .subscribe(function (peoples) { _this.peoples = peoples; _this.initMatches(); });
        // console.log(this.peoples);
    };
    // getChoice(id:number,choice:number): void {
    //   let ChosenProblem = this.problems.find( (problem) => (problem.id === id) );
    //     this.answerArray[id] = choice;
    //     console.log(this.answerArray);
    // }
    ProblemsComponent.prototype.openNav = function () {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    };
    ProblemsComponent.prototype.closeNav = function () {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
    };
    return ProblemsComponent;
}());
ProblemsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-problems',
        template: __webpack_require__("../../../../../src/app/components/problems/problems.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/problems/problems.component.css")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Inject */])('data')),
    __metadata("design:paramtypes", [Object])
], ProblemsComponent);

//# sourceMappingURL=problems.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/answer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Answer; });
var Answer = (function () {
    function Answer() {
    }
    return Answer;
}());

//# sourceMappingURL=answer.js.map

/***/ }),

/***/ "../../../../../src/app/models/match.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Match; });
var Match = (function () {
    function Match() {
    }
    return Match;
}());

//# sourceMappingURL=match.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js__ = __webpack_require__("../../../../auth0-js/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_auth0_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
        this.userProfile = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"](undefined);
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_3_auth0_js__["WebAuth"]({
            clientID: 'rHEcj6gBxLl8556Hi34iq88xzwziQPAX',
            domain: 'jackiewang5566.auth0.com',
            responseType: 'token id_token',
            audience: 'https://jackiewang5566.auth0.com/userinfo',
            redirectUri: 'http://localhost:4200',
            scope: 'openid profile'
        });
        this.userProfile.next(JSON.parse(localStorage.getItem('profile')));
    }
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this.setSession(authResult);
                _this.getProfile();
                _this.router.navigate(['/home']);
            }
            else if (err) {
                _this.router.navigate(['/home']);
                console.log(err);
            }
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    };
    AuthService.prototype.getProfile = function () {
        var accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('Access token must exist to fetch profile');
        }
        var self = this;
        this.auth0.client.userInfo(accessToken, function (err, profile) {
            if (profile) {
                self.userProfile.next(profile);
                localStorage.setItem('profile', JSON.stringify(profile));
            }
        });
    };
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('profile');
        // Go back to the home route
        this.router.navigate(['/']);
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatService = (function () {
    function ChatService() {
        this.clientsInfo = {};
        this.clientNum = 0;
    }
    ChatService.prototype.init = function (allmessages, sessionId) {
        this.collaborationSocket = io(window.location.origin, { query: 'sessionId=' + sessionId });
        // 'change' message handler
        this.collaborationSocket.on('message', function (data) {
            console.log("message received from server:" + data);
            // allmessages.messages = allmessages.messages + data;
            allmessages.push(data);
            allmessages.forEach(function (element) {
                console.log("user: " + element.user + " info: " + element.info);
            });
            console.log("new message to show " + allmessages);
        });
    };
    ChatService.prototype.sendMessage = function (message) {
        this.collaborationSocket.emit('message', message);
    };
    return ChatService;
}());
ChatService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ChatService);

//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Peoples } from '../mock-peoples';



var DataService = (function () {
    function DataService(http) {
        this.http = http;
        // problems: Problem[] = PROBLEMS;
        // peoples: People[] = PEOPLES;
        this._problemSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["BehaviorSubject"]([]);
        this._peopleSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["BehaviorSubject"]([]);
    }
    // getProblems(): Problem[] {
    //   console.log(this.problems);
    //   return this.problems;
    // }
    DataService.prototype.getProblems = function () {
        var _this = this;
        this.http.get('api/v1/problems')
            .toPromise()
            .then(function (res) {
            console.log(res);
            _this._problemSource.next(res.json());
        })
            .catch(this.handleError);
        return this._problemSource.asObservable();
    };
    DataService.prototype.getPeoples = function () {
        var _this = this;
        this.http.get('api/v1/peoples')
            .toPromise()
            .then(function (res) {
            console.log(res);
            _this._peopleSource.next(res.json());
        })
            .catch(this.handleError);
        return this._peopleSource.asObservable();
    };
    DataService.prototype.getPeople = function (id) {
        // return PROBLEMS.find((problem) => problem.id === id );
        //return this.problems.find((problem) => problem.id === id );
        return this.http.get("api/v1/peoples/" + id)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // getProblem(id: number): Problem {
    //   return this.problems.find( (problem) => (problem.id === id) );
    // }
    // getPeople(id: number): People {
    //   return this.peoples.find( (people) => (people.id === id) );
    // }
    // getPeoples(): People[] {
    //   console.log(this.peoples);
    //   return this.peoples;
    // }
    DataService.prototype.handleError = function (error) {
        console.log('An error happened', error);
        return Promise.reject(error.body || error);
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/img/navbg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "navbg.d87895dfc06baec33968.jpg";

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map