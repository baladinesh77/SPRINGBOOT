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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const event_service_1 = require("../services/event.service");
const router_1 = require("@angular/router");
let ReactiveRegisterEventComponent = class ReactiveRegisterEventComponent {
    constructor(fb, eventSvc, router) {
        this.fb = fb;
        this.eventSvc = eventSvc;
        this.router = router;
        this.locations = [
            { name: "Hydrabad", value: "HYD" },
            { name: "Bengaluru", value: "BEN" },
            { name: "Mumbai", value: "MUM" },
            { name: "Pune", value: "PUN" },
            { name: "Chennai", value: "CHN" }
        ];
        this.timeCtrl = new forms_1.FormControl("", forms_1.Validators.required);
    }
    ngOnInit() {
        this.model = this.fb.group({
            name: ["", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern('^...+')])],
            location: ["", forms_1.Validators.required],
            price: [undefined, forms_1.Validators.required],
            date: ["", forms_1.Validators.required],
            time: this.timeCtrl
        });
    }
    register() {
        this.eventSvc.addEvent(this.model.value)
            .subscribe(result => {
            this.router.navigate([""]);
        }, err => {
            alert("Error in adding data");
        });
    }
};
ReactiveRegisterEventComponent = __decorate([
    core_1.Component({
        selector: "reactive-register",
        templateUrl: "app/views/reactive-register.html"
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, event_service_1.EventService, router_1.Router])
], ReactiveRegisterEventComponent);
exports.ReactiveRegisterEventComponent = ReactiveRegisterEventComponent;
//# sourceMappingURL=reactive-event.component.js.map