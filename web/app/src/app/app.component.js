"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var api_service_1 = require('./api.service');
var AppComponent = (function () {
    function AppComponent(api) {
        this.api = api;
        this.model = 1;
        this.name = 'Angular-Bootstrap';
        this.json = JSON;
    }
    AppComponent.prototype.ngOnInit = function () { this.callApi(); };
    AppComponent.prototype.callApi = function () {
        var _this = this;
        this.api.callApi().subscribe(function (thirdButtonText) { return _this.thirdButtonText = thirdButtonText; }, function (error) { return _this.errorMessage = error; });
    };
    Object.defineProperty(AppComponent.prototype, "thirdButtonText", {
        get: function () {
            return this._thirdButtonText;
        },
        set: function (bt) {
            this._thirdButtonText = bt;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            moduleId: module.id,
            templateUrl: 'app.component.html',
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map