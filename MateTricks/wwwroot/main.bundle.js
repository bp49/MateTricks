webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Member/member-card/member-card.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Member/member-card/member-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-3\" width=\"250\">\n  <img *ngIf= \"member.photoUrl != null\" class=\"card-img-top\" src=\"{{member.photoUrl}}\" height=\"140\" width=\"140\"/>\n  <img *ngIf =\"member.photoUrl ==null\" class=\"card-img-top\" src=\"../../../assets/Default.jpg\" />\n  <div class=\"card-body\">\n    <h1 class=\"card-title\"><strong>{{member.name}}</strong></h1>\n    <p class=\"card-text\">{{member.city}}, {{member.age}}</p>\n    <button class=\"button btn-primary btn-large\" routerLink=\"/members/{{member.id}}\"></button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Member/member-card/member-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MemberCardComponent = /** @class */ (function () {
    function MemberCardComponent() {
    }
    MemberCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MemberCardComponent.prototype, "member", void 0);
    MemberCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-member-card',
            template: __webpack_require__("./src/app/Member/member-card/member-card.component.html"),
            styles: [__webpack_require__("./src/app/Member/member-card/member-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MemberCardComponent);
    return MemberCardComponent;
}());



/***/ }),

/***/ "./src/app/Member/member-details/member-details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Member/member-details/member-details.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"container\">\r\n    <div class=\"row mt-4\">\r\n      <h1>{{member.name}}'s profile</h1>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"card col-s-6\">\r\n        <img *ngIf=\"member.photoUrl != null\" class=\"profile-picture\" src=\"{{member.photoUrl}}\" />\r\n        <img *ngIf=\"member.photoUrl ==null\" class=\"card-img-top\" src=\"../../../assets/Default.jpg\" />\r\n        <dl class=\"mt-4 ml-3 text-left\">\r\n          <dt>Location</dt>\r\n          <dd>{{member.city}}</dd>\r\n          <dt>Age</dt>\r\n          <dd>{{member.age}}</dd>\r\n          <dt>Last Active</dt>\r\n          <dd>{{member.lastActive | timeAgo}}</dd>\r\n          <dt>Member Since</dt>\r\n          <dd>{{member.created | date}}</dd>\r\n        </dl>\r\n      </div>\r\n      <div class=\"col-9\">\r\n        <tabset [justified]=\"true\">\r\n          <tab heading=\"About {{member.name}}\" id=\"tab1\" class=\"text-left\">\r\n            <h2><strong>Description</strong></h2>\r\n            <p>{{member.introduction}}</p>\r\n            <h3><strong>Looking For</strong></h3>\r\n            <p>{{member.lookingFor}}</p>\r\n          </tab>\r\n          <tab heading=\"Interests\" class=\"text-left\" id=\"tab2\">\r\n            <h2><strong>{{member.name}}'s Interests</strong></h2>\r\n            <p>{{member.interests}}</p>\r\n          </tab>\r\n          <tab heading=\"Photos\" class=\"text-left\" id=\"tab3\">\r\n            <div class=\"row\">\r\n              <div class=\"mt-3\" *ngFor=\"let photo of member.photos\">\r\n                <img class=\"w3-round col-auto\" src=\"{{photo.url}}\">\r\n              </div>\r\n            </div>\r\n            \r\n          </tab>\r\n            </tabset>\r\n              </div>\r\n            </div>\r\n      </div>\r\n"

/***/ }),

/***/ "./src/app/Member/member-details/member-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_user_service_service__ = __webpack_require__("./src/app/Services/user-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//  import { AuthService } from '../../Services/auth.service';
var MemberDetailsComponent = /** @class */ (function () {
    function MemberDetailsComponent(UserServiceService, ActivatedRoute, Router /*private AuthService: AuthService*/) {
        this.UserServiceService = UserServiceService;
        this.ActivatedRoute = ActivatedRoute;
        this.Router = Router; /*private AuthService: AuthService*/
        this.member = {};
        this.id = -1;
    }
    MemberDetailsComponent.prototype.ngOnInit = function () {
        this.id = this.ActivatedRoute.snapshot.params.id;
        this.getUser(this.id);
    };
    MemberDetailsComponent.prototype.getUser = function (id) {
        var _this = this;
        this.UserServiceService.GetUser(id).subscribe(function (data) { return _this.member = data; });
    };
    MemberDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-member-details',
            template: __webpack_require__("./src/app/Member/member-details/member-details.component.html"),
            styles: [__webpack_require__("./src/app/Member/member-details/member-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_user_service_service__["a" /* UserServiceService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] /*private AuthService: AuthService*/])
    ], MemberDetailsComponent);
    return MemberDetailsComponent;
}());



/***/ }),

/***/ "./src/app/Member/member-edit/member-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Member/member-edit/member-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form UpdateForm=\"ngForm\" ngSubmit=\"updateUser()\">\r\n<div class=\"row\">\r\n  <div class=\"card col-s-6\">\r\n    <img *ngIf=\"member.photoUrl != null\" class=\"profile-picture\" src=\"{{member.photoUrl}}\" />\r\n    <img *ngIf=\"member.photoUrl ==null\" class=\"card-img-top\" src=\"../../../assets/Default.jpg\" />\r\n    <dl class=\"mt-4 ml-3 text-left\">\r\n      <dt>Location</dt>\r\n      <dd>{{member.city}}</dd>\r\n      <dt>Age</dt>\r\n      <dd>{{member.age}}</dd>\r\n      <dt>Last Active</dt>\r\n      <dd>{{member.lastActive | timeAgo}}</dd>\r\n      <dt>Member Since</dt>\r\n      <dd>{{member.created | date}}</dd>\r\n    </dl>\r\n    <button class=\"btn btn-primary\" type=\"submit\">Save Changes</button>\r\n  </div>\r\n  <div class=\"col-9\">\r\n    <tabset [justified]=\"true\">\r\n      <tab heading=\"Edit Profile\" id=\"tab1\" class=\"text-left\">\r\n        <h2><strong>Description</strong></h2>\r\n        <textarea name=\"Introduction\" [(ngModel)]=\"member.introduction\">{{member.introduction}}</textarea>\r\n        <h2><strong>Looking For</strong></h2>\r\n        <textarea name=\"Lookingfor\" [(ngModel)]=\"member.lookingfor\">{{member.lookingFor}}</textarea>\r\n        <h2><strong>Your Interests</strong></h2>\r\n        <textarea name=\"Interests\" [(ngModel)]=\"member.interests\">{{member.interests}}</textarea>\r\n        <h2><strong>City</strong></h2>\r\n        <input type=\"text\" name=\"City\" placeholder=\"{{member.city}}\" [(ngModel)]=\"member.city\">\r\n      </tab>\r\n      <tab heading=\"Edit Photos\" class=\"text-left\" id=\"tab3\">\r\n        <app-photo-editor [photos=user.photos]></app-photo-editor>\r\n        <div class=\"row\">\r\n          <div class=\"mt-3\" *ngFor=\"let photo of member.photos\">\r\n            <img class=\"w3-round col-auto\" src=\"{{photo.url}}\">\r\n            </div>\r\n          </div>\r\n      </tab>\r\n    </tabset>\r\n  </div>\r\n</div>\r\n  </form>\r\n"

/***/ }),

/***/ "./src/app/Member/member-edit/member-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_auth_service__ = __webpack_require__("./src/app/Services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_user_service_service__ = __webpack_require__("./src/app/Services/user-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MemberEditComponent = /** @class */ (function () {
    function MemberEditComponent(AuthService, UserServiceService, Router) {
        this.AuthService = AuthService;
        this.UserServiceService = UserServiceService;
        this.Router = Router;
        this.member = {};
        this.updates = {};
        this.id = JSON.parse(localStorage.getItem('User')).id;
    }
    MemberEditComponent.prototype.ngOnInit = function () {
        this.getUser(this.id);
    };
    MemberEditComponent.prototype.updateUser = function () {
        this.updates = { introduction: this.member.introduction, lookingFor: this.member.lookingFor, interests: this.member.interests, city: this.member.city };
        this.UserServiceService.UpdateUser(this.id, this.updates).subscribe();
    };
    MemberEditComponent.prototype.getUser = function (id) {
        var _this = this;
        this.UserServiceService.GetUser(id).subscribe(function (data) { return _this.member = data; });
    };
    MemberEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-member-edit',
            template: __webpack_require__("./src/app/Member/member-edit/member-edit.component.html"),
            styles: [__webpack_require__("./src/app/Member/member-edit/member-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__Services_user_service_service__["a" /* UserServiceService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], MemberEditComponent);
    return MemberEditComponent;
}());



/***/ }),

/***/ "./src/app/Member/member/member-list/member-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Member/member/member-list/member-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1 class=\"text.left\"><strong>Members!</strong></h1>\r\n  <div *ngIf=\"users\"class=\"row md-3\">\r\n    <div *ngFor=\"let user of users\"class=\"col-auto\">\r\n      <app-member-card [member]=\"user\"></app-member-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Member/member/member-list/member-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_user_service_service__ = __webpack_require__("./src/app/Services/user-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MemberListComponent = /** @class */ (function () {
    function MemberListComponent(UserServiceService) {
        this.UserServiceService = UserServiceService;
        this.users = [];
    }
    MemberListComponent.prototype.ngOnInit = function () {
        this.GetUsers();
    };
    MemberListComponent.prototype.GetUsers = function () {
        var _this = this;
        this.UserServiceService.RetrieveUsers().subscribe(function (p) { return _this.users = p; }, function (err) { return console.log(err); }, function () { return console.log(_this.users); });
        console.log(this.users);
    };
    MemberListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-member-list',
            template: __webpack_require__("./src/app/Member/member/member-list/member-list.component.html"),
            styles: [__webpack_require__("./src/app/Member/member/member-list/member-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_user_service_service__["a" /* UserServiceService */]])
    ], MemberListComponent);
    return MemberListComponent;
}());



/***/ }),

/***/ "./src/app/Services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth0_angular_jwt__ = __webpack_require__("./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http, JwtHelperService) {
        this.http = http;
        this.JwtHelperService = JwtHelperService;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl;
    }
    AuthService.prototype.login = function (user) {
        return this.http.post(this.baseUrl + '/auth/login', user)
            .map(function (result) {
            if (result) {
                localStorage.setItem('token', result.tokenString);
                localStorage.setItem('user', JSON.stringify(result.user));
                console.log('token');
            }
            return result;
        });
    };
    AuthService.prototype.Register = function (model) {
        return this.http.post(this.baseUrl + '/auth/register', model);
    };
    AuthService.prototype.IsExpired = function () {
        return this.JwtHelperService.isTokenExpired();
    };
    AuthService.prototype.LogOut = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('User');
        console.log("Logout Successful");
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__auth0_angular_jwt__["a" /* JwtHelperService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/Services/user-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserServiceService = /** @class */ (function () {
    function UserServiceService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrl;
    }
    UserServiceService.prototype.RetrieveUsers = function () {
        return this.http.get(this.baseUrl + '/users/users');
    };
    UserServiceService.prototype.GetUser = function (id) {
        return this.http.get(this.baseUrl + '/users/' + id);
    };
    UserServiceService.prototype.UpdateUser = function (id, UpdatedUser) {
        return this.http.put(this.baseUrl + '/users/UpdateUser' + id, UpdatedUser);
    };
    UserServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], UserServiceService);
    return UserServiceService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Member_member_member_list_member_list_component__ = __webpack_require__("./src/app/Member/member/member-list/member-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__friends_list_friends_list_component__ = __webpack_require__("./src/app/friends-list/friends-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__messages_messages_component__ = __webpack_require__("./src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Member_member_details_member_details_component__ = __webpack_require__("./src/app/Member/member-details/member-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Member_member_edit_member_edit_component__ = __webpack_require__("./src/app/Member/member-edit/member-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: 'Register', component: __WEBPACK_IMPORTED_MODULE_2__register_register_component__["a" /* RegisterComponent */] },
    { path: 'Home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'Members', component: __WEBPACK_IMPORTED_MODULE_4__Member_member_member_list_member_list_component__["a" /* MemberListComponent */] },
    { path: 'Friends', component: __WEBPACK_IMPORTED_MODULE_5__friends_list_friends_list_component__["a" /* FriendsListComponent */] },
    { path: 'Messages', component: __WEBPACK_IMPORTED_MODULE_6__messages_messages_component__["a" /* MessagesComponent */] },
    { path: 'members/:id', component: __WEBPACK_IMPORTED_MODULE_7__Member_member_details_member_details_component__["a" /* MemberDetailsComponent */] },
    { path: 'member/edit', component: __WEBPACK_IMPORTED_MODULE_8__Member_member_edit_member_edit_component__["a" /* MemberEditComponent */] },
    { path: '**', redirectTo: 'Home' }
];
var AppRoutingModule = /** @class */ (function () {
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

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-nav></app-nav>\r\n<body class=\"text-center\">\r\n  <router-outlet></router-outlet>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export tokenGetter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth0_angular_jwt__ = __webpack_require__("./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_dropdown__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_collapse__ = __webpack_require__("./node_modules/ngx-bootstrap/collapse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_alert__ = __webpack_require__("./node_modules/ngx-bootstrap/alert/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nav_nav_component__ = __webpack_require__("./src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Services_auth_service__ = __webpack_require__("./src/app/Services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Member_member_member_list_member_list_component__ = __webpack_require__("./src/app/Member/member/member-list/member-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Member_member_card_member_card_component__ = __webpack_require__("./src/app/Member/member-card/member-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__friends_list_friends_list_component__ = __webpack_require__("./src/app/friends-list/friends-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__messages_messages_component__ = __webpack_require__("./src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Services_user_service_service__ = __webpack_require__("./src/app/Services/user-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Member_member_details_member_details_component__ = __webpack_require__("./src/app/Member/member-details/member-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_time_ago_pipe__ = __webpack_require__("./node_modules/time-ago-pipe/esm5/time-ago-pipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_bootstrap_tabs__ = __webpack_require__("./node_modules/ngx-bootstrap/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap_datepicker__ = __webpack_require__("./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__Member_member_edit_member_edit_component__ = __webpack_require__("./src/app/Member/member-edit/member-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__photo_editor_photo_editor_component__ = __webpack_require__("./src/app/photo-editor/photo-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_ng2_file_upload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























function tokenGetter() {
    return localStorage.getItem('token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__Member_member_member_list_member_list_component__["a" /* MemberListComponent */],
                __WEBPACK_IMPORTED_MODULE_15__Member_member_card_member_card_component__["a" /* MemberCardComponent */],
                __WEBPACK_IMPORTED_MODULE_16__friends_list_friends_list_component__["a" /* FriendsListComponent */],
                __WEBPACK_IMPORTED_MODULE_17__messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_19__Member_member_details_member_details_component__["a" /* MemberDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_20_time_ago_pipe__["a" /* TimeAgoPipe */],
                __WEBPACK_IMPORTED_MODULE_23__Member_member_edit_member_edit_component__["a" /* MemberEditComponent */],
                __WEBPACK_IMPORTED_MODULE_24__photo_editor_photo_editor_component__["a" /* PhotoEditorComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_collapse__["a" /* CollapseModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_alert__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap_datepicker__["a" /* BsDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_21_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_25_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_4__auth0_angular_jwt__["b" /* JwtModule */].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost:50770']
                    }
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__Services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_18__Services_user_service_service__["a" /* UserServiceService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/friends-list/friends-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/friends-list/friends-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  friends-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/friends-list/friends-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FriendsListComponent = /** @class */ (function () {
    function FriendsListComponent() {
    }
    FriendsListComponent.prototype.ngOnInit = function () {
    };
    FriendsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-friends-list',
            template: __webpack_require__("./src/app/friends-list/friends-list.component.html"),
            styles: [__webpack_require__("./src/app/friends-list/friends-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FriendsListComponent);
    return FriendsListComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<h1 class=\"text-center\">\r\n  Welcome to the Matrix!\r\n</h1>\r\n<button routerLink=\"/Register\" class=\"btn btn-lg btn-center btn-success m-3\">Sign Up!</button>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  messages works!\n</p>\n"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessagesComponent = /** @class */ (function () {
    function MessagesComponent() {
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__("./src/app/messages/messages.component.html"),
            styles: [__webpack_require__("./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n    <a class=\"navbar-brand\" href=\"#\">The Matrix</a>\r\n    <button (click)=\"isCollapsed = !isCollapsed\" class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\" [collapse]=\"isCollapsed\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/Home\">Home <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/Members\">Members</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/Friends\">Friends List</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/Messages\">Messages</a>\r\n        </li>\r\n      </ul>\r\n      <form *ngIf=\"VerifyLogin()\" #LoginForm=\"ngForm\" class=\"form-inline my-2 my-lg-0\" (ngSubmit)=\"login()\">\r\n        <input name=\"userName\" class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"UserName\" [(ngModel)]=\"model.userName\" required/>\r\n        <input name=\"password\" class=\"form-control mr-sm-2\" type=\"password\" placeholder=\"Password\" [(ngModel)]=\"model.password\" required/>\r\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\" [disabled]=\"!LoginForm.valid\">Sign in</button>\r\n      </form>\r\n      <div *ngIf=\"!VerifyLogin()\" class=\"btn-group\" dropdown>\r\n        <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">\r\n         Welcome User! <span class=\"caret\"></span>\r\n        </button>\r\n        <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n          <li role=\"menuitem\"><a class=\"dropdown-item\" routerLink=\"/member/edit\">Edit profile</a></li>\r\n          <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\" (click)=\"logout()\">Logout</a></li>\r\n          <li class=\"divider dropdown-divider\"></li>\r\n          <li role=\"menuitem\">\r\n            <a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_auth_service__ = __webpack_require__("./src/app/Services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = /** @class */ (function () {
    //User = " ";
    function NavComponent(AuthService) {
        this.AuthService = AuthService;
        this.model = {};
        this.isCollapsed = false;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.login = function () {
        console.log(this.model);
        this.AuthService.login(this.model).subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        //this.User = JSON.parse(localStorage.getItem('user')).userName;
        //console.log(localStorage.getItem('user'));
        //console.log(localStorage.getitem('token'));
        return this.VerifyLogin();
    };
    NavComponent.prototype.logout = function () {
        this.AuthService.LogOut();
    };
    NavComponent.prototype.VerifyLogin = function () {
        return this.AuthService.IsExpired();
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/nav/nav.component.html"),
            styles: [__webpack_require__("./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_auth_service__["a" /* AuthService */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/photo-editor/photo-editor.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/photo-editor/photo-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-3\">\r\n    <h3>Add Photos</h3>\r\n    Multiple\r\n    <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple />\r\n    <br /> Single\r\n    <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\r\n  </div>\r\n  <div class=\"col-9\" style=\"margin-bottom: 40px\" *ngIf=\"uploader?.queue?.length\">\r\n    <h3>Upload queue</h3>\r\n    <p>Queue length: {{ uploader?.queue?.length }}</p>\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th width=\"50%\">Name</th>\r\n\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of uploader.queue\">\r\n          <td>\r\n            <strong>{{ item?.file?.name }}</strong>\r\n          </td>\r\n\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <div>\r\n      <div>\r\n        Queue progress:\r\n        <div class=\"progress\" style=\"\">\r\n          <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\r\n        </div>\r\n      </div>\r\n      <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\r\n        <span class=\"fa fa-upload\"></span> Upload\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-warning btn-s\" (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\r\n        <span class=\"fa fa-ban\"></span> Cancel\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-danger btn-s\" (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\r\n        <span class=\"fa fa-trash\"></span> Remove\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\n"

/***/ }),

/***/ "./src/app/photo-editor/photo-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_user_service_service__ = __webpack_require__("./src/app/Services/user-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_auth_service__ = __webpack_require__("./src/app/Services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PhotoEditorComponent = /** @class */ (function () {
    function PhotoEditorComponent(AuthService, UserServiceService) {
        this.AuthService = AuthService;
        this.UserServiceService = UserServiceService;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl;
    }
    PhotoEditorComponent.prototype.initializeUploader = function () {
        this.uploader = new __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__["FileUploader"]({
            url: this.baseUrl +
                '/users/' +
                JSON.parse(localStorage.getItem('user')).id +
                '/photos',
            authToken: 'Bearer ' + localStorage.getItem('token'),
            isHTML5: true,
            allowedFileType: ['image'],
            removeAfterUpload: true,
            autoUpload: false,
            maxFileSize: 10 * 1024 * 1024
        });
    };
    PhotoEditorComponent.prototype.ngOnInit = function () {
        this.initializeUploader();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], PhotoEditorComponent.prototype, "photos", void 0);
    PhotoEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-photo-editor',
            template: __webpack_require__("./src/app/photo-editor/photo-editor.component.html"),
            styles: [__webpack_require__("./src/app/photo-editor/photo-editor.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__Services_user_service_service__["a" /* UserServiceService */]])
    ], PhotoEditorComponent);
    return PhotoEditorComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<body class=\"text-center\">\r\n\r\n  <form #RegisterForm=\"ngForm\" class=\"form-control\" (ngSubmit)=\"register()\">\r\n    <h2 class=\"h3 mb-3 font-weight-normal\">Sign Up</h2>\r\n        <input name =\"userName\"class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"UserName\" [(ngModel)]=\"model.userName\" required/>\r\n        <input name=\"password\" class=\"form-control mr-sm-2\" type=\"password\" placeholder=\"Password\" [(ngModel)]=\"model.password\" required/>\r\n        <input name=\"passwordConfirm\" class=\"form-control mr-sm-2\" type=\"password\" placeholder=\"Confirm Password\" [(ngModel)]=\"PasswordConfirmation.passwordConfirm\" required/>\r\n    <alert *ngIf=\"!PassVerify()\" class=\"alert alert-danger\">Passwords Do not Match!</alert>\r\n    <p class=\"mb-3 d-inline\">Select Gender:\r\n      <input type=\"radio\" name=\"gender\" value=\"Male\" [(ngModel)]=\"model.Gender\" />Male\r\n      <input type=\"radio\" name=\"gender\" value=\"Female\" [(ngModel)]=\"model.Gender\" />female\r\n    </p>\r\n    <input type=\"text\"class=\"form-control mr-sm-2\" name=\"Name\" [(ngModel)]=\"model.name\" required/>\r\n    <input type=\"text\" class=\"form-control mr-sm-2\" name=\"birthDate\" placeholder=\"Birthdate\" [(ngModel)]=\"model.Birthdate\" bsDatepicker/>\r\n    <input type=\"text\" class=\"form-control mr-sm-2\" name=\"city\" placeholder=\"city\" [(ngModel)]=\"model.city\" required />\r\n    <button class=\"btn btn-primary btn-block\" type=\"submit\" [disabled]=\"!RegisterForm.valid\">Register</button>\r\n    <button class=\"btn btn-danger btn-block\" routerLink=\"/Home\">Cancel</button>\r\n    <alert *ngIf=\"AccountCreation()\"class=\"alert alert-success\" [dismissOnTimeout]=\"5000\">You Have successfully registered with the Matrix!</alert>\r\n    <p class=\"mt-5 mb-3 text-muted\">&copy; 2017-2018</p>\r\n  </form>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_auth_service__ = __webpack_require__("./src/app/Services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(AuthService) {
        this.AuthService = AuthService;
        //model = {}; Model for submission
        this.model = { userName: '', password: '', Gender: 'Male', Name: '', Birthdate: '', city: '' };
        //Declare the password confirmation model
        this.PasswordConfirmation = { passwordConfirm: '' };
        this.AcctSuccess = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    //Method used to verify the password
    RegisterComponent.prototype.PassVerify = function () {
        return this.model.password == this.PasswordConfirmation.passwordConfirm;
    };
    //Method used to check if an account was created
    RegisterComponent.prototype.AccountCreation = function () {
        return this.AcctSuccess;
    };
    RegisterComponent.prototype.register = function () {
        console.log(this.model);
        if (this.PassVerify()) {
            this.AcctSuccess = true;
            if (this.AccountCreation()) {
                this.AuthService.Register(this.model).subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
            }
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_auth_service__["a" /* AuthService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: '/api'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map