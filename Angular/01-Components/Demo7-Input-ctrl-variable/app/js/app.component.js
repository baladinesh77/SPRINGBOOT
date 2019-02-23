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
var AppComponent = (function () {
    function AppComponent() {
        this.clientName = 'type here';
        this.name = "Sonu Sathyadas";
        this.clients = ['Cognizant', 'Wipro', 'Godrej', 'CapGemini'];
    }
    //if passing $event as the argument of onClick() from view
    /*onClick(e){
        this.favorite=e.target.innerText;
    }*/
    AppComponent.prototype.onClick = function (client) {
        this.clientName = client;
        //alert("You selected "  + client);
    };
    AppComponent.prototype.addClient = function () {
        if (this.clientName.trim() != "") {
            this.clients.push(this.clientName);
            this.clientName = '';
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            /*template:`
            <div class="myContent">
            <h1>{{name}}</h1>
            <p>Some description</p>
            </div>`*/
            templateUrl: 'app/partials/app.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map