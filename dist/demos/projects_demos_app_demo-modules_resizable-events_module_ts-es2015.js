"use strict";
(self["webpackChunkangular_calendar"] = self["webpackChunkangular_calendar"] || []).push([["projects_demos_app_demo-modules_resizable-events_module_ts"],{

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
CalendarHeaderComponent.??fac = function CalendarHeaderComponent_Factory(t) { return new (t || CalendarHeaderComponent)(); };
CalendarHeaderComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CalendarHeaderComponent, selectors: [["mwl-demo-utils-calendar-header"]], inputs: { view: "view", viewDate: "viewDate", locale: "locale" }, outputs: { viewChange: "viewChange", viewDateChange: "viewDateChange" }, decls: 43, vars: 16, consts: [[1, "row", "text-center"], [1, "col-md-4"], [1, "btn-group"], ["mwlCalendarPreviousView", "", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], ["mwlCalendarToday", "", 1, "btn", "btn-outline-secondary", 3, "viewDate", "viewDateChange"], ["mwlCalendarNextView", "", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], [1, "btn", "btn-primary", 3, "click"]], template: function CalendarHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_7_listener($event) { return ctx.viewDate = $event; })("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_7_listener() { return ctx.viewDateChange.next(ctx.viewDate); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\n            Previous\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_10_listener($event) { return ctx.viewDate = $event; })("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_10_listener() { return ctx.viewDateChange.next(ctx.viewDate); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "\n            Today\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_13_listener($event) { return ctx.viewDate = $event; })("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_13_listener() { return ctx.viewDateChange.next(ctx.viewDate); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "\n            Next\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](22, "calendarDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CalendarHeaderComponent_Template_div_click_29_listener() { return ctx.viewChange.emit(ctx.CalendarView.Month); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "\n            Month\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CalendarHeaderComponent_Template_div_click_32_listener() { return ctx.viewChange.emit(ctx.CalendarView.Week); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "\n            Week\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CalendarHeaderComponent_Template_div_click_35_listener() { return ctx.viewChange.emit(ctx.CalendarView.Day); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "\n            Day\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "\n  ");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("view", ctx.view)("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("view", ctx.view)("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](22, 12, ctx.viewDate, ctx.view + "ViewTitle", ctx.locale));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("active", ctx.view === ctx.CalendarView.Month);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("active", ctx.view === ctx.CalendarView.Week);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("active", ctx.view === ctx.CalendarView.Day);
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
DemoUtilsModule.??fac = function DemoUtilsModule_Factory(t) { return new (t || DemoUtilsModule)(); };
DemoUtilsModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: DemoUtilsModule });
DemoUtilsModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, angular_calendar__WEBPACK_IMPORTED_MODULE_3__.CalendarModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](DemoUtilsModule, { declarations: [_calendar_header_component__WEBPACK_IMPORTED_MODULE_4__.CalendarHeaderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, angular_calendar__WEBPACK_IMPORTED_MODULE_3__.CalendarModule], exports: [_calendar_header_component__WEBPACK_IMPORTED_MODULE_4__.CalendarHeaderComponent] }); })();


/***/ }),

/***/ 91993:
/*!***********************************************************************!*\
  !*** ./projects/demos/app/demo-modules/resizable-events/component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoComponent": function() { return /* binding */ DemoComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 50931);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 5660);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-calendar */ 4606);
/* harmony import */ var _demo_utils_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../demo-utils/colors */ 55155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _demo_utils_calendar_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../demo-utils/calendar-header.component */ 78767);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_calendar_src_modules_month_calendar_month_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/month/calendar-month-view.component */ 21426);
/* harmony import */ var _angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/week/calendar-week-view.component */ 1913);
/* harmony import */ var _angular_calendar_src_modules_day_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/day/calendar-day-view.component */ 50811);










function DemoComponent_mwl_calendar_month_view_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mwl-calendar-month-view", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("eventTimesChanged", function DemoComponent_mwl_calendar_month_view_5_Template_mwl_calendar_month_view_eventTimesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r3.eventTimesChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("viewDate", ctx_r0.viewDate)("events", ctx_r0.events)("activeDayIsOpen", true)("refresh", ctx_r0.refresh);
} }
function DemoComponent_mwl_calendar_week_view_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mwl-calendar-week-view", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("eventTimesChanged", function DemoComponent_mwl_calendar_week_view_7_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r5.eventTimesChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("viewDate", ctx_r1.viewDate)("events", ctx_r1.events)("refresh", ctx_r1.refresh);
} }
function DemoComponent_mwl_calendar_day_view_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mwl-calendar-day-view", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("eventTimesChanged", function DemoComponent_mwl_calendar_day_view_9_Template_mwl_calendar_day_view_eventTimesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r7.eventTimesChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("viewDate", ctx_r2.viewDate)("events", ctx_r2.events)("refresh", ctx_r2.refresh);
} }
class DemoComponent {
    constructor() {
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_1__.CalendarView.Week;
        this.viewDate = new Date();
        this.events = [
            {
                title: 'Resizable event',
                color: _demo_utils_colors__WEBPACK_IMPORTED_MODULE_2__.colors.yellow,
                start: new Date(),
                end: (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.default)(new Date(), 1),
                resizable: {
                    beforeStart: true,
                    afterEnd: true,
                },
            },
            {
                title: 'A non resizable event',
                color: _demo_utils_colors__WEBPACK_IMPORTED_MODULE_2__.colors.blue,
                start: new Date(),
                end: (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.default)(new Date(), 1),
            },
        ];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    eventTimesChanged({ event, newStart, newEnd, }) {
        event.start = newStart;
        event.end = newEnd;
        this.refresh.next();
    }
}
DemoComponent.??fac = function DemoComponent_Factory(t) { return new (t || DemoComponent)(); };
DemoComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DemoComponent, selectors: [["mwl-demo-component"]], decls: 12, vars: 6, consts: [[3, "view", "viewDate", "viewChange", "viewDateChange"], [3, "ngSwitch"], [3, "viewDate", "events", "activeDayIsOpen", "refresh", "eventTimesChanged", 4, "ngSwitchCase"], [3, "viewDate", "events", "refresh", "eventTimesChanged", 4, "ngSwitchCase"], [3, "viewDate", "events", "activeDayIsOpen", "refresh", "eventTimesChanged"], [3, "viewDate", "events", "refresh", "eventTimesChanged"]], template: function DemoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mwl-demo-utils-calendar-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("viewChange", function DemoComponent_Template_mwl_demo_utils_calendar_header_viewChange_0_listener($event) { return ctx.view = $event; })("viewDateChange", function DemoComponent_Template_mwl_demo_utils_calendar_header_viewDateChange_0_listener($event) { return ctx.viewDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DemoComponent_mwl_calendar_month_view_5_Template, 2, 4, "mwl-calendar-month-view", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, DemoComponent_mwl_calendar_week_view_7_Template, 2, 3, "mwl-calendar-week-view", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, DemoComponent_mwl_calendar_day_view_9_Template, 2, 3, "mwl-calendar-day-view", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("view", ctx.view)("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitch", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "day");
    } }, directives: [_demo_utils_calendar_header_component__WEBPACK_IMPORTED_MODULE_5__.CalendarHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitchCase, _angular_calendar_src_modules_month_calendar_month_view_component__WEBPACK_IMPORTED_MODULE_7__.CalendarMonthViewComponent, _angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_8__.CalendarWeekViewComponent, _angular_calendar_src_modules_day_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_9__.CalendarDayViewComponent], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 25030:
/*!********************************************************************!*\
  !*** ./projects/demos/app/demo-modules/resizable-events/module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoModule": function() { return /* binding */ DemoModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/calendar.module */ 3746);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-calendar */ 90008);
/* harmony import */ var _demo_utils_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../demo-utils/module */ 57671);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component */ 91993);
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ 20789);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);









class DemoModule {
}
DemoModule.??fac = function DemoModule_Factory(t) { return new (t || DemoModule)(); };
DemoModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: DemoModule });
DemoModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
            angular_calendar__WEBPACK_IMPORTED_MODULE_2__.CalendarModule.forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_3__.DateAdapter,
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_4__.adapterFactory,
            }),
            _demo_utils_module__WEBPACK_IMPORTED_MODULE_5__.DemoUtilsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([{ path: '', component: _component__WEBPACK_IMPORTED_MODULE_7__.DemoComponent }]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](DemoModule, { declarations: [_component__WEBPACK_IMPORTED_MODULE_7__.DemoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, angular_calendar__WEBPACK_IMPORTED_MODULE_2__.CalendarModule, _demo_utils_module__WEBPACK_IMPORTED_MODULE_5__.DemoUtilsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_component__WEBPACK_IMPORTED_MODULE_7__.DemoComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=projects_demos_app_demo-modules_resizable-events_module_ts-es2015.js.map