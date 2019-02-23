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
var movies_list_component_1 = require('./movies-list.component');
var album_list_component_1 = require('./album-list.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>Shopping application</h1><hr/>\n\t\t\t<h3>Welcome to my application</h3>\n\t\t\t<myMovies></myMovies>\n\t\t\t<myAlbums></myAlbums>",
            directives: [movies_list_component_1.MoviesListComponent, album_list_component_1.AlbumsListComponent],
            styles: ["\n\t\th3{\n\t\t\tcolor:blue;\n\t\t\tbackground-color:palegreen;\n\t\t}\n\t\th4{\n\t\t\tcolor:red;\n\t\t}\n\t\tli{\n\t\t\tcolor:orange;\n\t\t}\n\t"],
            encapsulation: core_1.ViewEncapsulation.Native
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map