"use strict";
<<<<<<< HEAD
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DataTableColumnHeaderDirective = (function () {
    function DataTableColumnHeaderDirective(template) {
        this.template = template;
    }
    DataTableColumnHeaderDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: '[ngx-datatable-header-template]' },] },
    ];
    /** @nocollapse */
    DataTableColumnHeaderDirective.ctorParameters = function () { return [
        { type: core_1.TemplateRef, },
    ]; };
=======
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
var core_1 = require("@angular/core");
var DataTableColumnHeaderDirective = /** @class */ (function () {
    function DataTableColumnHeaderDirective(template) {
        this.template = template;
    }
    DataTableColumnHeaderDirective = __decorate([
        core_1.Directive({ selector: '[ngx-datatable-header-template]' }),
        __metadata("design:paramtypes", [core_1.TemplateRef])
    ], DataTableColumnHeaderDirective);
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    return DataTableColumnHeaderDirective;
}());
exports.DataTableColumnHeaderDirective = DataTableColumnHeaderDirective;
//# sourceMappingURL=column-header.directive.js.map