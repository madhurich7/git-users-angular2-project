System.register(["angular2/core", "angular2/http", "./git-user.service", "rxjs/Rx", "rxjs/add/observable/forkJoin"], function (exports_1, context_1) {
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
    var core_1, http_1, git_user_service_1, Rx_1, GitUsers;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (git_user_service_1_1) {
                git_user_service_1 = git_user_service_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            GitUsers = (function () {
                function GitUsers(gitService) {
                    this.gitService = gitService;
                    this.userHere = 'octocat';
                    this.loadingUsers = true;
                }
                GitUsers.prototype.callObservable = function () {
                    var _this = this;
                    Rx_1.Observable
                        .forkJoin(this.gitService.getUsers(this.userHere), this.gitService.getFollowers(this.userHere))
                        .map(function (joined) { return new Object({
                        user: joined[0],
                        followers: joined[1]
                    }); })
                        .subscribe(function (x) {
                        _this.user = x;
                        _this.loadingUsers = false;
                        //this.followers = x.followers;
                        console.log(_this.user);
                    });
                };
                GitUsers.prototype.ngOnInit = function () {
                    var _this = this;
                    this.getUserData = function (f) {
                        _this.userHere = f.controls.enteredUser.value;
                        console.log(f.controls.enteredUser.value);
                        _this.callObservable();
                    };
                };
                GitUsers.prototype.ngOnChanges = function () {
                    console.log('on changes');
                };
                GitUsers.prototype.ngAfterContentInit = function () {
                    console.log('after content init');
                    this.callObservable();
                };
                return GitUsers;
            }());
            GitUsers = __decorate([
                core_1.Component({
                    selector: 'git-users',
                    templateUrl: 'app/git-users.component.html',
                    styles: ["\n\t\t.avatar{\n\t\t\twidth: 150px;\n\t\t\theight: 150px;\n\t\t\tborder-radius: 50%;\n\t\t}\n\t\t.followers{\n\t\t\tcolor: blue;\n\t\t}\n\t"],
                    providers: [git_user_service_1.GitService, http_1.HTTP_PROVIDERS]
                }),
                __metadata("design:paramtypes", [git_user_service_1.GitService])
            ], GitUsers);
            exports_1("GitUsers", GitUsers);
        }
    };
});
//# sourceMappingURL=git-users.component.js.map