"use strict";
<<<<<<< HEAD
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ScrollerComponent = (function () {
    function ScrollerComponent(element, renderer) {
        this.renderer = renderer;
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
var ScrollerComponent = /** @class */ (function () {
    function ScrollerComponent(ngZone, element) {
        this.ngZone = ngZone;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
        this.scrollbarV = false;
        this.scrollbarH = false;
        this.scroll = new core_1.EventEmitter();
        this.scrollYPos = 0;
        this.scrollXPos = 0;
        this.prevScrollYPos = 0;
        this.prevScrollXPos = 0;
        this.element = element.nativeElement;
    }
    ScrollerComponent.prototype.ngOnInit = function () {
<<<<<<< HEAD
        // manual bind so we don't always listen
        if (this.scrollbarV || this.scrollbarH) {
            this.parentElement = this.element.parentElement.parentElement;
            this.onScrollListener = this.renderer.listen(this.parentElement, 'scroll', this.onScrolled.bind(this));
=======
        var _this = this;
        // manual bind so we don't always listen
        if (this.scrollbarV || this.scrollbarH) {
            this.parentElement = this.element.parentElement.parentElement;
            this.ngZone.runOutsideAngular(function () {
                _this.parentElement.addEventListener('scroll', _this.onScrolled.bind(_this));
            });
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
        }
    };
    ScrollerComponent.prototype.ngOnDestroy = function () {
        if (this.scrollbarV || this.scrollbarH) {
<<<<<<< HEAD
            this.onScrollListener();
=======
            this.parentElement.removeEventListener('scroll', this.onScrolled.bind(this));
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
        }
    };
    ScrollerComponent.prototype.setOffset = function (offsetY) {
        if (this.parentElement) {
            this.parentElement.scrollTop = offsetY;
        }
    };
    ScrollerComponent.prototype.onScrolled = function (event) {
<<<<<<< HEAD
        var dom = event.currentTarget;
        this.scrollYPos = dom.scrollTop;
        this.scrollXPos = dom.scrollLeft;
        requestAnimationFrame(this.updateOffset.bind(this));
=======
        var _this = this;
        var dom = event.currentTarget;
        requestAnimationFrame(function () {
            _this.scrollYPos = dom.scrollTop;
            _this.scrollXPos = dom.scrollLeft;
            _this.updateOffset();
        });
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    };
    ScrollerComponent.prototype.updateOffset = function () {
        var direction;
        if (this.scrollYPos < this.prevScrollYPos) {
            direction = 'down';
        }
        else if (this.scrollYPos > this.prevScrollYPos) {
            direction = 'up';
        }
        this.scroll.emit({
            direction: direction,
            scrollYPos: this.scrollYPos,
            scrollXPos: this.scrollXPos
        });
        this.prevScrollYPos = this.scrollYPos;
        this.prevScrollXPos = this.scrollXPos;
    };
<<<<<<< HEAD
    ScrollerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'datatable-scroller',
                    template: "\n    <ng-content></ng-content>\n  ",
                    host: {
                        class: 'datatable-scroll'
                    }
                },] },
    ];
    /** @nocollapse */
    ScrollerComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
    ]; };
    ScrollerComponent.propDecorators = {
        'scrollbarV': [{ type: core_1.Input },],
        'scrollbarH': [{ type: core_1.Input },],
        'scrollHeight': [{ type: core_1.HostBinding, args: ['style.height.px',] }, { type: core_1.Input },],
        'scrollWidth': [{ type: core_1.HostBinding, args: ['style.width.px',] }, { type: core_1.Input },],
        'scroll': [{ type: core_1.Output },],
    };
=======
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ScrollerComponent.prototype, "scrollbarV", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ScrollerComponent.prototype, "scrollbarH", void 0);
    __decorate([
        core_1.HostBinding('style.height.px'),
        core_1.Input(),
        __metadata("design:type", Number)
    ], ScrollerComponent.prototype, "scrollHeight", void 0);
    __decorate([
        core_1.HostBinding('style.width.px'),
        core_1.Input(),
        __metadata("design:type", Number)
    ], ScrollerComponent.prototype, "scrollWidth", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ScrollerComponent.prototype, "scroll", void 0);
    ScrollerComponent = __decorate([
        core_1.Component({
            selector: 'datatable-scroller',
            template: "\n    <ng-content></ng-content>\n  ",
            host: {
                class: 'datatable-scroll'
            },
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [core_1.NgZone, core_1.ElementRef])
    ], ScrollerComponent);
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    return ScrollerComponent;
}());
exports.ScrollerComponent = ScrollerComponent;
//# sourceMappingURL=scroller.component.js.map