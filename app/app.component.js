/// <reference path="../typings/tsd.d.ts" />
System.register(["angular2/core", "./post.service", "angular2/http", "./git-users.component"], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    var core_1, post_service_1, http_1, git_users_component_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (git_users_component_1_1) {
                git_users_component_1 = git_users_component_1_1;
            }
        ],
        execute: function () {/// <reference path="../typings/tsd.d.ts" />
            AppComponent = (function () {
                function AppComponent(_dataService) {
                    this._dataService = _dataService;
                    this.isLoading = true;
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._dataService.getData()
                        .then(function (res) {
                        _this.isLoading = false;
                        console.log(res);
                    });
                };
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    template: "    \n        <div *ngIf=\"isLoading\"><i class=\"fa fa-spinner fa-3x\"></i></div>\n        <git-users></git-users>\n    ",
                    providers: [post_service_1.DataService, http_1.HTTP_PROVIDERS],
                    directives: [git_users_component_1.GitUsers]
                }),
                __metadata("design:paramtypes", [post_service_1.DataService])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map