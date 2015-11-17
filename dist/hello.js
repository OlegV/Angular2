System.register(['angular2/angular2'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var angular2_1;
    var Zippy, HelloApp;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            Zippy = (function () {
                function Zippy() {
                    this.visible = true;
                    this.list = [];
                    for (var _i = 0, _a = Array(10); _i < _a.length; _i++) {
                        name = _a[_i];
                        this.list.push(faker.name.findName());
                    }
                    debugger;
                }
                Zippy.prototype.toggle = function () {
                    this.visible = !this.visible;
                };
                Zippy = __decorate([
                    angular2_1.Component({
                        selector: 'zippy',
                        templateUrl: 'zippy.html',
                        inputs: ['title']
                    }), 
                    __metadata('design:paramtypes', [])
                ], Zippy);
                return Zippy;
            })();
            HelloApp = (function () {
                function HelloApp() {
                    this.name = 'World';
                }
                HelloApp = __decorate([
                    angular2_1.Component({
                        selector: 'hello-app',
                        template: "\n        <h1>Hello, {{name}}!</h1>\n        Say hello to: <input [value]=\"name\" (input)=\"name = $event.target.value\">\n        <zippy title=\"Details test\">\n       \t\tloading zippy...\n\t\t\t<p>This is some content.</p>\n        </zippy>\n    ",
                        directives: [Zippy]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HelloApp);
                return HelloApp;
            })();
            exports_1("HelloApp", HelloApp);
            angular2_1.bootstrap(HelloApp);
        }
    }
});
