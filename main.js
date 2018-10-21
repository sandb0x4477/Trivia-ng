(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-container\">\n  <div class=\"uk-margin-top\">\n    <app-search-form></app-search-form>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Trivia';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_opentdb_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/opentdb.service */ "./src/app/shared/opentdb.service.ts");
/* harmony import */ var _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-form/search-form.component */ "./src/app/search-form/search-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_6__["SearchFormComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
            providers: [_shared_opentdb_service__WEBPACK_IMPORTED_MODULE_5__["OpentdbService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/search-form/search-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/search-form/search-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1mb3JtL3NlYXJjaC1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/search-form/search-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/search-form/search-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #queryForm=\"ngForm\">\n  <fieldset class=\"uk-fieldset\">\n\n    <legend class=\"uk-legend uk-text-primary uk-text-center\">Choose parameters</legend>\n\n    <div class=\"uk-margin\">\n      <label class=\"uk-form-label\" for=\"form-stacked-select\">Number of questions: {{query.numberOfQuests}}</label>\n      <input class=\"uk-range\" type=\"range\" value=\"3\" min=\"1\" max=\"20\" step=\"1\" [(ngModel)]=\"query.numberOfQuests\" name=\"numberOfQuests\"\n        #numberOfQuests=\"ngModel\">\n    </div>\n\n    <div class=\"uk-margin\">\n      <label class=\"uk-form-label\" for=\"form-stacked-select\">Choose category</label>\n      <select class=\"uk-select\" [(ngModel)]=\"query.category\" name=\"category\" #category=\"ngModel\">\n        <option value=\"any\">Any Category</option>\n        <option value=\"9\">General Knowledge</option>\n        <option value=\"10\">Entertainment: Books</option>\n        <option value=\"11\">Entertainment: Film</option>\n        <option value=\"12\">Entertainment: Music</option>\n        <option value=\"13\">Entertainment: Musicals &amp; Theatres</option>\n        <option value=\"14\">Entertainment: Television</option>\n        <option value=\"15\">Entertainment: Video Games</option>\n        <option value=\"16\">Entertainment: Board Games</option>\n        <option value=\"17\">Science &amp; Nature</option>\n        <option value=\"18\">Science: Computers</option>\n        <option value=\"19\">Science: Mathematics</option>\n        <option value=\"20\">Mythology</option>\n        <option value=\"21\">Sports</option>\n        <option value=\"22\">Geography</option>\n        <option value=\"23\">History</option>\n        <option value=\"24\">Politics</option>\n        <option value=\"25\">Art</option>\n        <option value=\"26\">Celebrities</option>\n        <option value=\"27\">Animals</option>\n        <option value=\"28\">Vehicles</option>\n        <option value=\"29\">Entertainment: Comics</option>\n        <option value=\"30\">Science: Gadgets</option>\n        <option value=\"31\">Entertainment: Japanese Anime &amp; Manga</option>\n        <option value=\"32\">Entertainment: Cartoon &amp; Animations</option>\n      </select>\n    </div>\n\n    <div class=\"uk-margin\">\n      <label class=\"uk-form-label\" for=\"form-stacked-select\">Select difficulty</label>\n      <div class=\"uk-form-controls\">\n        <select class=\"uk-select\" id=\"form-stacked-select\" [(ngModel)]=\"query.difficulty\" name=\"difficulty\" #difficulty=\"ngModel\">\n          <option value=\"any\">Any Difficulty</option>\n          <option value=\"easy\">Easy</option>\n          <option value=\"medium\">Medium</option>\n          <option value=\"hard\">Hard</option>\n        </select>\n      </div>\n    </div>\n\n    <div class=\"uk-margin\">\n      <label class=\"uk-form-label\" for=\"form-stacked-select\">Select type</label>\n      <div class=\"uk-form-controls\">\n        <select class=\"uk-select\" id=\"form-stacked-select\" [(ngModel)]=\"query.type\" name=\"type\" #type=\"ngModel\">\n          <option value=\"any\">Any Type</option>\n          <option value=\"multiple\">Multiple Choice</option>\n          <option value=\"boolean\">True / False</option>\n        </select>\n      </div>\n    </div>\n    <button class=\"uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom\" (click)=\"fetchQuestions(queryForm)\">Start!</button>\n\n  </fieldset>\n</form>\n<hr class=\"uk-divider-icon\">\n\n\n<div *ngFor=\"let question of questions; let i = index\">\n\n  <h4 class=\"uk-text-center\">\n    {{ question.question }}\n  </h4>\n\n  <div class=\"uk-child-width-1-1@s uk-child-width-1-2@m uk-grid-small\" uk-grid>\n    <div *ngFor=\"let pick of question.pick_one; let j = index\" >\n      <div>\n\n        <p>\n          <button #button class=\"uk-button uk-button-default uk-width-1-1\"\n          [attr.id]=\"setId(i, j)\"\n          value=\"{{ pick }}\"\n          name=\"{{ pick }}\"\n          (click)=\"checkAnswer($event, question.correct_answer)\">\n          {{ pick }}\n        </button>\n        </p>\n\n      </div>\n    </div>\n  </div>\n\n    <hr class=\"uk-divider-icon\">\n</div>\n"

/***/ }),

/***/ "./src/app/search-form/search-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/search-form/search-form.component.ts ***!
  \******************************************************/
/*! exports provided: SearchFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFormComponent", function() { return SearchFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_query_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/query.model */ "./src/app/shared/query.model.ts");
/* harmony import */ var _shared_opentdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/opentdb.service */ "./src/app/shared/opentdb.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchFormComponent = /** @class */ (function () {
    function SearchFormComponent(opentdbService) {
        this.opentdbService = opentdbService;
        this.query = new _shared_query_model__WEBPACK_IMPORTED_MODULE_1__["Query"]();
        this.query.numberOfQuests = '5';
        this.query.category = 'any';
        this.query.difficulty = 'any';
        this.query.type = 'any';
    }
    SearchFormComponent.prototype.ngOnInit = function () { };
    SearchFormComponent.prototype.fetchQuestions = function (f) {
        var _this = this;
        if (f.value.category === 'any') {
            f.value.category = '';
        }
        if (f.value.difficulty === 'any') {
            f.value.difficulty = '';
        }
        if (f.value.type === 'any') {
            f.value.type = '';
        }
        this.opentdbService.getQuestions(f.value).subscribe(function (q) {
            _this.questions = q['results'];
            _this.parseText(_this.questions);
            _this.joinArrays(_this.questions);
        });
    };
    SearchFormComponent.prototype.joinArrays = function (q) {
        var tempArr = JSON.parse(JSON.stringify(q));
        var joined = [];
        for (var i = 0; i < tempArr.length; i++) {
            joined[i] = tempArr[i].incorrect_answers;
            joined[i].push(tempArr[i].correct_answer);
        }
        for (var j = 0; j < joined.length; j++) {
            this.questions[j].pick_one = this.shuffle(joined[j]);
        }
    };
    SearchFormComponent.prototype.shuffle = function (arr) {
        return arr.map(function (a) { return ({ sort: Math.random(), value: a }); })
            .sort(function (a, b) { return a.sort - b.sort; })
            .map(function (a) { return a.value; });
    };
    SearchFormComponent.prototype.checkAnswer = function ($event, correctAnswer) {
        var clickedButton = document.getElementById($event.target.id);
        var clickedButtonValue = $event.target.value;
        if (clickedButtonValue === correctAnswer) {
            clickedButton.classList.remove('uk-button-default');
            clickedButton.classList.add('uk-button-primary');
        }
        else {
            clickedButton.classList.remove('uk-button-default');
            clickedButton.classList.add('uk-button-danger');
        }
    };
    SearchFormComponent.prototype.setId = function (i, j) {
        return i.toString() + '-' + j.toString();
    };
    SearchFormComponent.prototype.parseText = function (arr) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].question = this.decodeHtml(arr[i].question);
            arr[i].correct_answer = this.decodeHtml(arr[i].correct_answer);
            for (var j = 0; j < arr[i].incorrect_answers.length; j++) {
                arr[i].incorrect_answers[j] = this.decodeHtml(arr[i].incorrect_answers[j]);
            }
        }
    };
    SearchFormComponent.prototype.decodeHtml = function (html) {
        var txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    };
    SearchFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-form',
            template: __webpack_require__(/*! ./search-form.component.html */ "./src/app/search-form/search-form.component.html"),
            styles: [__webpack_require__(/*! ./search-form.component.css */ "./src/app/search-form/search-form.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_opentdb_service__WEBPACK_IMPORTED_MODULE_2__["OpentdbService"]])
    ], SearchFormComponent);
    return SearchFormComponent;
}());



/***/ }),

/***/ "./src/app/shared/opentdb.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/opentdb.service.ts ***!
  \*******************************************/
/*! exports provided: OpentdbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpentdbService", function() { return OpentdbService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _query_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./query.model */ "./src/app/shared/query.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
var OpentdbService = /** @class */ (function () {
    // private params = `${this.query.numberOfQuests}&category=
    // ${this.query.category}&difficulty=${this.query.difficulty}&type=${
    //   this.query.type
    // }`;
    // URL to web api https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple
    function OpentdbService(http) {
        this.http = http;
        this.query = new _query_model__WEBPACK_IMPORTED_MODULE_2__["Query"]();
        this.opentdbUrl = 'https://opentdb.com/api.php?amount=';
    }
    OpentdbService.prototype.getQuestions = function (q) {
        var url = "" + this.opentdbUrl + q.numberOfQuests + "&category=" + q.category + "&difficulty=" + q.difficulty + "&type=" + q.type;
        // console.log(url);
        return this.http.get(url);
    };
    OpentdbService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OpentdbService);
    return OpentdbService;
}());



/***/ }),

/***/ "./src/app/shared/query.model.ts":
/*!***************************************!*\
  !*** ./src/app/shared/query.model.ts ***!
  \***************************************/
/*! exports provided: Query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return Query; });
var Query = /** @class */ (function () {
    function Query() {
    }
    return Query;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular_projects\Trivia\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map