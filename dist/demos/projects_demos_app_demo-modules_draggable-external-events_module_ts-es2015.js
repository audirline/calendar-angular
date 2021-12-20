"use strict";
(self["webpackChunkangular_calendar"] = self["webpackChunkangular_calendar"] || []).push([["projects_demos_app_demo-modules_draggable-external-events_module_ts"],{

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

/***/ 49953:
/*!********************************************************************************!*\
  !*** ./projects/demos/app/demo-modules/draggable-external-events/component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoComponent": function() { return /* binding */ DemoComponent; }
/* harmony export */ });
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-calendar */ 4606);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 50931);
/* harmony import */ var _demo_utils_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../demo-utils/colors */ 55155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-draggable-droppable */ 42915);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _demo_utils_calendar_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../demo-utils/calendar-header.component */ 78767);
/* harmony import */ var _angular_calendar_src_modules_month_calendar_month_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/month/calendar-month-view.component */ 21426);
/* harmony import */ var _angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/week/calendar-week-view.component */ 1913);
/* harmony import */ var _angular_calendar_src_modules_day_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/day/calendar-day-view.component */ 50811);










function DemoComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No events added");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { event: a0 }; };
const _c1 = function () { return { delay: 300, delta: 30 }; };
function DemoComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, event_r5))("touchStartLongPress", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", event_r5.color.primary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n              ", event_r5.title, "\n            ");
} }
function DemoComponent_mwl_calendar_month_view_25_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-month-view", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventTimesChanged", function DemoComponent_mwl_calendar_month_view_25_Template_mwl_calendar_month_view_eventTimesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.eventDropped($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r2.viewDate)("events", ctx_r2.events)("activeDayIsOpen", ctx_r2.activeDayIsOpen)("refresh", ctx_r2.refresh);
} }
function DemoComponent_mwl_calendar_week_view_27_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-week-view", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventTimesChanged", function DemoComponent_mwl_calendar_week_view_27_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.eventDropped($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r3.viewDate)("events", ctx_r3.events)("refresh", ctx_r3.refresh)("snapDraggedEvents", false);
} }
function DemoComponent_mwl_calendar_day_view_29_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-day-view", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventTimesChanged", function DemoComponent_mwl_calendar_day_view_29_Template_mwl_calendar_day_view_eventTimesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.eventDropped($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r4.viewDate)("events", ctx_r4.events)("refresh", ctx_r4.refresh)("snapDraggedEvents", false);
} }
class DemoComponent {
    constructor() {
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_1__.CalendarView;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_1__.CalendarView.Month;
        this.viewDate = new Date();
        this.externalEvents = [
            {
                title: 'Event 1',
                color: _demo_utils_colors__WEBPACK_IMPORTED_MODULE_2__.colors.yellow,
                start: new Date(),
                draggable: true,
            },
            {
                title: 'Event 2',
                color: _demo_utils_colors__WEBPACK_IMPORTED_MODULE_2__.colors.blue,
                start: new Date(),
                draggable: true,
            },
        ];
        this.events = [];
        this.activeDayIsOpen = false;
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    eventDropped({ event, newStart, newEnd, allDay, }) {
        const externalIndex = this.externalEvents.indexOf(event);
        if (typeof allDay !== 'undefined') {
            event.allDay = allDay;
        }
        if (externalIndex > -1) {
            this.externalEvents.splice(externalIndex, 1);
            this.events.push(event);
        }
        event.start = newStart;
        if (newEnd) {
            event.end = newEnd;
        }
        if (this.view === 'month') {
            this.viewDate = newStart;
            this.activeDayIsOpen = true;
        }
        this.events = [...this.events];
    }
    externalDrop(event) {
        if (this.externalEvents.indexOf(event) === -1) {
            this.events = this.events.filter((iEvent) => iEvent !== event);
            this.externalEvents.push(event);
        }
    }
}
DemoComponent.ɵfac = function DemoComponent_Factory(t) { return new (t || DemoComponent)(); };
DemoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DemoComponent, selectors: [["mwl-demo-component"]], decls: 34, vars: 8, consts: [[1, "row"], [1, "col-md-3"], ["mwlDroppable", "", "dragOverClass", "drag-over", 1, "card", 3, "drop"], [1, "card-body"], [4, "ngIf"], ["mwlDraggable", "", "dragActiveClass", "drag-active", 3, "dropData", "touchStartLongPress", 4, "ngFor", "ngForOf"], [1, "col-md-9"], [3, "view", "viewDate", "viewChange", "viewDateChange"], [3, "ngSwitch"], [3, "viewDate", "events", "activeDayIsOpen", "refresh", "eventTimesChanged", 4, "ngSwitchCase"], [3, "viewDate", "events", "refresh", "snapDraggedEvents", "eventTimesChanged", 4, "ngSwitchCase"], ["mwlDraggable", "", "dragActiveClass", "drag-active", 3, "dropData", "touchStartLongPress"], ["href", "javascript:;"], [3, "viewDate", "events", "activeDayIsOpen", "refresh", "eventTimesChanged"], [3, "viewDate", "events", "refresh", "snapDraggedEvents", "eventTimesChanged"]], template: function DemoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function DemoComponent_Template_div_drop_4_listener($event) { return ctx.externalDrop($event.dropData.event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DemoComponent_p_8_Template, 3, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DemoComponent_li_12_Template, 5, 8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mwl-demo-utils-calendar-header", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewChange", function DemoComponent_Template_mwl_demo_utils_calendar_header_viewChange_20_listener($event) { return ctx.view = $event; })("viewDateChange", function DemoComponent_Template_mwl_demo_utils_calendar_header_viewDateChange_20_listener($event) { return ctx.viewDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DemoComponent_mwl_calendar_month_view_25_Template, 2, 4, "mwl-calendar-month-view", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, DemoComponent_mwl_calendar_week_view_27_Template, 2, 4, "mwl-calendar-week-view", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, DemoComponent_mwl_calendar_day_view_29_Template, 2, 4, "mwl-calendar-day-view", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.externalEvents.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.externalEvents);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.CalendarView.Month);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.CalendarView.Week);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.CalendarView.Day);
    } }, directives: [angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_4__.DroppableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _demo_utils_calendar_header_component__WEBPACK_IMPORTED_MODULE_6__.CalendarHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitchCase, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_4__.DraggableDirective, _angular_calendar_src_modules_month_calendar_month_view_component__WEBPACK_IMPORTED_MODULE_7__.CalendarMonthViewComponent, _angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_8__.CalendarWeekViewComponent, _angular_calendar_src_modules_day_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_9__.CalendarDayViewComponent], styles: [".drag-active[_ngcontent-%COMP%] {\n        position: relative;\n        z-index: 1;\n        pointer-events: none;\n      }\n      .drag-over[_ngcontent-%COMP%] {\n        background-color: #eee;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLG9CQUFvQjtNQUN0QjtNQUNBO1FBQ0Usc0JBQXNCO01BQ3hCIiwiZmlsZSI6ImNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgLmRyYWctYWN0aXZlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5kcmFnLW92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgfVxuICAgICJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 53857:
/*!*****************************************************************************!*\
  !*** ./projects/demos/app/demo-modules/draggable-external-events/module.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoModule": function() { return /* binding */ DemoModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/calendar.module */ 3746);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-calendar */ 90008);
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-draggable-droppable */ 42915);
/* harmony import */ var _demo_utils_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../demo-utils/module */ 57671);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component */ 49953);
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ 20789);
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
            angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_5__.DragAndDropModule,
            _demo_utils_module__WEBPACK_IMPORTED_MODULE_6__.DemoUtilsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild([{ path: '', component: _component__WEBPACK_IMPORTED_MODULE_8__.DemoComponent }]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoModule, { declarations: [_component__WEBPACK_IMPORTED_MODULE_8__.DemoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, angular_calendar__WEBPACK_IMPORTED_MODULE_2__.CalendarModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_5__.DragAndDropModule,
        _demo_utils_module__WEBPACK_IMPORTED_MODULE_6__.DemoUtilsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_component__WEBPACK_IMPORTED_MODULE_8__.DemoComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=projects_demos_app_demo-modules_draggable-external-events_module_ts-es2015.js.map