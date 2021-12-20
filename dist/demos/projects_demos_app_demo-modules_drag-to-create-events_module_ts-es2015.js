"use strict";
(self["webpackChunkangular_calendar"] = self["webpackChunkangular_calendar"] || []).push([["projects_demos_app_demo-modules_drag-to-create-events_module_ts"],{

/***/ 78767:
/*!*********************************************************************************!*\
  !*** ./projects/demos/app/demo-modules/demo-utils/calendar-header.component.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarHeaderComponent": function() { return /* binding */ CalendarHeaderComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-calendar */ 4606);
/* harmony import */ var _angular_calendar_src_modules_common_calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/common/calendar-previous-view.directive */ 31726);
/* harmony import */ var _angular_calendar_src_modules_common_calendar_today_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/common/calendar-today.directive */ 22167);
/* harmony import */ var _angular_calendar_src_modules_common_calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/common/calendar-next-view.directive */ 60897);
/* harmony import */ var _angular_calendar_src_modules_common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/common/calendar-date.pipe */ 12153);







class CalendarHeaderComponent {
    constructor() {
        this.locale = 'en';
        this.viewChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_1__.CalendarView;
    }
}
CalendarHeaderComponent.ɵfac = function CalendarHeaderComponent_Factory(t) { return new (t || CalendarHeaderComponent)(); };
CalendarHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarHeaderComponent, selectors: [["mwl-demo-utils-calendar-header"]], inputs: { view: "view", viewDate: "viewDate", locale: "locale" }, outputs: { viewChange: "viewChange", viewDateChange: "viewDateChange" }, decls: 43, vars: 16, consts: [[1, "row", "text-center"], [1, "col-md-4"], [1, "btn-group"], ["mwlCalendarPreviousView", "", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], ["mwlCalendarToday", "", 1, "btn", "btn-outline-secondary", 3, "viewDate", "viewDateChange"], ["mwlCalendarNextView", "", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], [1, "btn", "btn-primary", 3, "click"]], template: function CalendarHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_7_listener($event) { return ctx.viewDate = $event; })("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_7_listener() { return ctx.viewDateChange.next(ctx.viewDate); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n            Previous\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_10_listener($event) { return ctx.viewDate = $event; })("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_10_listener() { return ctx.viewDateChange.next(ctx.viewDate); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n            Today\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_13_listener($event) { return ctx.viewDate = $event; })("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_13_listener() { return ctx.viewDateChange.next(ctx.viewDate); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n            Next\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "calendarDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarHeaderComponent_Template_div_click_29_listener() { return ctx.viewChange.emit(ctx.CalendarView.Month); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n            Month\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarHeaderComponent_Template_div_click_32_listener() { return ctx.viewChange.emit(ctx.CalendarView.Week); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n            Week\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarHeaderComponent_Template_div_click_35_listener() { return ctx.viewChange.emit(ctx.CalendarView.Day); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\n            Day\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\n  ");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](22, 12, ctx.viewDate, ctx.view + "ViewTitle", ctx.locale));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.view === ctx.CalendarView.Month);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.view === ctx.CalendarView.Week);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.view === ctx.CalendarView.Day);
    } }, directives: [_angular_calendar_src_modules_common_calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_2__.CalendarPreviousViewDirective, _angular_calendar_src_modules_common_calendar_today_directive__WEBPACK_IMPORTED_MODULE_3__.CalendarTodayDirective, _angular_calendar_src_modules_common_calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_4__.CalendarNextViewDirective], pipes: [_angular_calendar_src_modules_common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_5__.CalendarDatePipe], encapsulation: 2 });


/***/ }),

/***/ 57671:
/*!**************************************************************!*\
  !*** ./projects/demos/app/demo-modules/demo-utils/module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoUtilsModule": function() { return /* binding */ DemoUtilsModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-calendar */ 3746);
/* harmony import */ var _calendar_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar-header.component */ 78767);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);





class DemoUtilsModule {
}
DemoUtilsModule.ɵfac = function DemoUtilsModule_Factory(t) { return new (t || DemoUtilsModule)(); };
DemoUtilsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DemoUtilsModule });
DemoUtilsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, angular_calendar__WEBPACK_IMPORTED_MODULE_3__.CalendarModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoUtilsModule, { declarations: [_calendar_header_component__WEBPACK_IMPORTED_MODULE_4__.CalendarHeaderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, angular_calendar__WEBPACK_IMPORTED_MODULE_3__.CalendarModule], exports: [_calendar_header_component__WEBPACK_IMPORTED_MODULE_4__.CalendarHeaderComponent] }); })();


/***/ }),

/***/ 310:
/*!****************************************************************************!*\
  !*** ./projects/demos/app/demo-modules/drag-to-create-events/component.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomEventTitleFormatter": function() { return /* binding */ CustomEventTitleFormatter; },
/* harmony export */   "DemoComponent": function() { return /* binding */ DemoComponent; }
/* harmony export */ });
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-calendar */ 38711);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 12027);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 67465);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 44094);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 11516);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 5660);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 59756);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_calendar_src_modules_common_calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/common/calendar-previous-view.directive */ 31726);
/* harmony import */ var _angular_calendar_src_modules_common_calendar_today_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/common/calendar-today.directive */ 22167);
/* harmony import */ var _angular_calendar_src_modules_common_calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/common/calendar-next-view.directive */ 60897);
/* harmony import */ var _angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/week/calendar-week-view.component */ 1913);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_calendar_src_modules_common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/common/calendar-date.pipe */ 12153);











function DemoComponent_ng_template_27_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "calendarDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const segment_r2 = ctx_r8.segment;
    const locale_r3 = ctx_r8.locale;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n      ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, segment_r2.date, "weekViewHour", locale_r3), "\n    ");
} }
function DemoComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function DemoComponent_ng_template_27_Template_div_mousedown_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const segment_r2 = restoredCtx.segment; const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.startDragToCreate(segment_r2, $event, _r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DemoComponent_ng_template_27_div_4_Template, 3, 5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n");
} if (rf & 2) {
    const segment_r2 = ctx.segment;
    const segmentHeight_r4 = ctx.segmentHeight;
    const isTimeLabel_r5 = ctx.isTimeLabel;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", segmentHeight_r4, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cal-hour-start", segment_r2.isStart)("cal-after-hour-start", !segment_r2.isStart);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", segment_r2.cssClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isTimeLabel_r5);
} }
function floorToNearest(amount, precision) {
    return Math.floor(amount / precision) * precision;
}
function ceilToNearest(amount, precision) {
    return Math.ceil(amount / precision) * precision;
}
class CustomEventTitleFormatter extends angular_calendar__WEBPACK_IMPORTED_MODULE_1__.CalendarEventTitleFormatter {
    weekTooltip(event, title) {
        if (!event.meta.tmpEvent) {
            return super.weekTooltip(event, title);
        }
    }
    dayTooltip(event, title) {
        if (!event.meta.tmpEvent) {
            return super.dayTooltip(event, title);
        }
    }
}
CustomEventTitleFormatter.ɵfac = /*@__PURE__*/ function () { let ɵCustomEventTitleFormatter_BaseFactory; return function CustomEventTitleFormatter_Factory(t) { return (ɵCustomEventTitleFormatter_BaseFactory || (ɵCustomEventTitleFormatter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CustomEventTitleFormatter)))(t || CustomEventTitleFormatter); }; }();
CustomEventTitleFormatter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomEventTitleFormatter, factory: CustomEventTitleFormatter.ɵfac });
class DemoComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.viewDate = new Date();
        this.events = [];
        this.dragToCreateActive = false;
        this.weekStartsOn = 0;
    }
    startDragToCreate(segment, mouseDownEvent, segmentElement) {
        const dragToSelectEvent = {
            id: this.events.length,
            title: 'New event',
            start: segment.date,
            meta: {
                tmpEvent: true,
            },
        };
        this.events = [...this.events, dragToSelectEvent];
        const segmentPosition = segmentElement.getBoundingClientRect();
        this.dragToCreateActive = true;
        const endOfView = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.default)(this.viewDate, {
            weekStartsOn: this.weekStartsOn,
        });
        (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'mousemove')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => {
            delete dragToSelectEvent.meta.tmpEvent;
            this.dragToCreateActive = false;
            this.refresh();
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'mouseup')))
            .subscribe((mouseMoveEvent) => {
            const minutesDiff = ceilToNearest(mouseMoveEvent.clientY - segmentPosition.top, 30);
            const daysDiff = floorToNearest(mouseMoveEvent.clientX - segmentPosition.left, segmentPosition.width) / segmentPosition.width;
            const newEnd = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_7__.default)(segment.date, minutesDiff), daysDiff);
            if (newEnd > segment.date && newEnd < endOfView) {
                dragToSelectEvent.end = newEnd;
            }
            this.refresh();
        });
    }
    refresh() {
        this.events = [...this.events];
        this.cdr.detectChanges();
    }
}
DemoComponent.ɵfac = function DemoComponent_Factory(t) { return new (t || DemoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
DemoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DemoComponent, selectors: [["mwl-demo-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_1__.CalendarEventTitleFormatter,
                useClass: CustomEventTitleFormatter,
            },
        ])], decls: 33, vars: 13, consts: [[1, "row"], [1, "col-md-6"], [1, "btn-group"], ["mwlCalendarPreviousView", "", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], ["mwlCalendarToday", "", 1, "btn", "btn-outline-secondary", 3, "viewDate", "viewDateChange"], ["mwlCalendarNextView", "", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], [1, "col-md-6", "text-right"], ["weekViewHourSegmentTemplate", ""], [3, "viewDate", "events", "hourSegmentTemplate", "weekStartsOn"], [1, "cal-hour-segment", 3, "ngClass", "mousedown"], ["segmentElement", ""], ["class", "cal-time", 4, "ngIf"], [1, "cal-time"]], template: function DemoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function DemoComponent_Template_div_viewDateChange_6_listener($event) { return ctx.viewDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n        Previous\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function DemoComponent_Template_div_viewDateChange_9_listener($event) { return ctx.viewDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n        Today\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function DemoComponent_Template_div_viewDateChange_12_listener($event) { return ctx.viewDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n        Next\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "calendarDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, DemoComponent_ng_template_27_Template, 7, 8, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mwl-calendar-week-view", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", "week")("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", "week")("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 10, ctx.viewDate, "weekViewTitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx.viewDate)("events", ctx.events)("hourSegmentTemplate", _r0)("weekStartsOn", ctx.weekStartsOn);
    } }, directives: [_angular_calendar_src_modules_common_calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_8__.CalendarPreviousViewDirective, _angular_calendar_src_modules_common_calendar_today_directive__WEBPACK_IMPORTED_MODULE_9__.CalendarTodayDirective, _angular_calendar_src_modules_common_calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_10__.CalendarNextViewDirective, _angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_11__.CalendarWeekViewComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf], pipes: [_angular_calendar_src_modules_common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_13__.CalendarDatePipe], styles: ["\n      .disable-hover {\n        pointer-events: none;\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxvQkFBb0I7TUFDdEIiLCJmaWxlIjoiY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAuZGlzYWJsZS1ob3ZlciB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgfVxuICAgICJdfQ== */"], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 56304:
/*!*************************************************************************!*\
  !*** ./projects/demos/app/demo-modules/drag-to-create-events/module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoModule": function() { return /* binding */ DemoModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/calendar.module */ 3746);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-calendar */ 90008);
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ 20789);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component */ 310);
/* harmony import */ var _demo_utils_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../demo-utils/module */ 57671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);









class DemoModule {
}
DemoModule.ɵfac = function DemoModule_Factory(t) { return new (t || DemoModule)(); };
DemoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DemoModule });
DemoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
            angular_calendar__WEBPACK_IMPORTED_MODULE_2__.CalendarModule.forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_3__.DateAdapter,
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_4__.adapterFactory,
            }),
            _demo_utils_module__WEBPACK_IMPORTED_MODULE_5__.DemoUtilsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([{ path: '', component: _component__WEBPACK_IMPORTED_MODULE_7__.DemoComponent }]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoModule, { declarations: [_component__WEBPACK_IMPORTED_MODULE_7__.DemoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, angular_calendar__WEBPACK_IMPORTED_MODULE_2__.CalendarModule, _demo_utils_module__WEBPACK_IMPORTED_MODULE_5__.DemoUtilsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_component__WEBPACK_IMPORTED_MODULE_7__.DemoComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=projects_demos_app_demo-modules_drag-to-create-events_module_ts-es2015.js.map