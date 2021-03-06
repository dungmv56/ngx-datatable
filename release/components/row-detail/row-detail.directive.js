"use strict";
<<<<<<< HEAD
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var row_detail_template_directive_1 = require("./row-detail-template.directive");
var DatatableRowDetailDirective = (function () {
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
var row_detail_template_directive_1 = require("./row-detail-template.directive");
var DatatableRowDetailDirective = /** @class */ (function () {
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    function DatatableRowDetailDirective() {
        /**
         * The detail row height is required especially
         * when virtual scroll is enabled.
<<<<<<< HEAD
         *
         * @type {number|function(row?:any,index?:number): number}
         * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
         */
        this.rowHeight = 0;
        /**
         * Row detail row visbility was toggled.
<<<<<<< HEAD
         *
         * @type {EventEmitter<any>}
         * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
         */
        this.toggle = new core_1.EventEmitter();
    }
    /**
     * Toggle the expansion of the row
<<<<<<< HEAD
     *
     * @param rowIndex
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    DatatableRowDetailDirective.prototype.toggleExpandRow = function (row) {
        this.toggle.emit({
            type: 'row',
            value: row
        });
    };
    /**
     * API method to expand all the rows.
<<<<<<< HEAD
     *
     * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    DatatableRowDetailDirective.prototype.expandAllRows = function () {
        this.toggle.emit({
            type: 'all',
            value: true
        });
    };
    /**
     * API method to collapse all the rows.
<<<<<<< HEAD
     *
     * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    DatatableRowDetailDirective.prototype.collapseAllRows = function () {
        this.toggle.emit({
            type: 'all',
            value: false
        });
    };
<<<<<<< HEAD
    DatatableRowDetailDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: 'ngx-datatable-row-detail' },] },
    ];
    /** @nocollapse */
    DatatableRowDetailDirective.ctorParameters = function () { return []; };
    DatatableRowDetailDirective.propDecorators = {
        'rowHeight': [{ type: core_1.Input },],
        'template': [{ type: core_1.Input }, { type: core_1.ContentChild, args: [row_detail_template_directive_1.DatatableRowDetailTemplateDirective, { read: core_1.TemplateRef },] },],
        'toggle': [{ type: core_1.Output },],
    };
=======
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DatatableRowDetailDirective.prototype, "rowHeight", void 0);
    __decorate([
        core_1.Input(),
        core_1.ContentChild(row_detail_template_directive_1.DatatableRowDetailTemplateDirective, { read: core_1.TemplateRef }),
        __metadata("design:type", core_1.TemplateRef)
    ], DatatableRowDetailDirective.prototype, "template", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DatatableRowDetailDirective.prototype, "toggle", void 0);
    DatatableRowDetailDirective = __decorate([
        core_1.Directive({ selector: 'ngx-datatable-row-detail' })
    ], DatatableRowDetailDirective);
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    return DatatableRowDetailDirective;
}());
exports.DatatableRowDetailDirective = DatatableRowDetailDirective;
//# sourceMappingURL=row-detail.directive.js.map