"use strict";
<<<<<<< HEAD
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var footer_template_directive_1 = require("./footer-template.directive");
var DatatableFooterDirective = (function () {
    function DatatableFooterDirective() {
    }
    DatatableFooterDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: 'ngx-datatable-footer' },] },
    ];
    /** @nocollapse */
    DatatableFooterDirective.ctorParameters = function () { return []; };
    DatatableFooterDirective.propDecorators = {
        'footerHeight': [{ type: core_1.Input },],
        'totalMessage': [{ type: core_1.Input },],
        'selectedMessage': [{ type: core_1.Input },],
        'pagerLeftArrowIcon': [{ type: core_1.Input },],
        'pagerRightArrowIcon': [{ type: core_1.Input },],
        'pagerPreviousIcon': [{ type: core_1.Input },],
        'pagerNextIcon': [{ type: core_1.Input },],
        'template': [{ type: core_1.Input }, { type: core_1.ContentChild, args: [footer_template_directive_1.DataTableFooterTemplateDirective, { read: core_1.TemplateRef },] },],
    };
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
var footer_template_directive_1 = require("./footer-template.directive");
var DatatableFooterDirective = /** @class */ (function () {
    function DatatableFooterDirective() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DatatableFooterDirective.prototype, "footerHeight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DatatableFooterDirective.prototype, "totalMessage", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DatatableFooterDirective.prototype, "selectedMessage", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DatatableFooterDirective.prototype, "pagerLeftArrowIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DatatableFooterDirective.prototype, "pagerRightArrowIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DatatableFooterDirective.prototype, "pagerPreviousIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DatatableFooterDirective.prototype, "pagerNextIcon", void 0);
    __decorate([
        core_1.Input(),
        core_1.ContentChild(footer_template_directive_1.DataTableFooterTemplateDirective, { read: core_1.TemplateRef }),
        __metadata("design:type", core_1.TemplateRef)
    ], DatatableFooterDirective.prototype, "template", void 0);
    DatatableFooterDirective = __decorate([
        core_1.Directive({ selector: 'ngx-datatable-footer' })
    ], DatatableFooterDirective);
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    return DatatableFooterDirective;
}());
exports.DatatableFooterDirective = DatatableFooterDirective;
//# sourceMappingURL=footer.directive.js.map