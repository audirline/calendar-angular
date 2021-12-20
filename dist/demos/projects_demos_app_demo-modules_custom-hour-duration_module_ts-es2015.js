"use strict";
(self["webpackChunkangular_calendar"] = self["webpackChunkangular_calendar"] || []).push([["projects_demos_app_demo-modules_custom-hour-duration_module_ts"],{

/***/ 4911:
/*!***************************************************************************!*\
  !*** ./projects/demos/app/demo-modules/custom-hour-duration/component.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoComponent": function() { return /* binding */ DemoComponent; }
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 21112);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 65939);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 50931);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-calendar */ 4606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/week/calendar-week-view.component */ 1913);





class DemoComponent {
    constructor() {
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_0__.CalendarView.Week;
        this.viewDate = new Date();
        this.events = [
            {
                start: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.default)(new Date(), 20), 15),
                end: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.default)(new Date(), 40), 17),
                title: 'An event',
                resizable: {
                    afterEnd: true,
                },
                draggable: true,
            },
        ];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    eventTimesChanged({ event, newStart, newEnd, }) {
        event.start = newStart;
        event.end = newEnd;
        this.refresh.next();
    }
}
DemoComponent.ɵfac = function DemoComponent_Factory(t) { return new (t || DemoComponent)(); };
DemoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DemoComponent, selectors: [["mwl-demo-component"]], decls: 3, vars: 5, consts: [[3, "viewDate", "events", "hourDuration", "hourSegments", "refresh", "eventTimesChanged"]], template: function DemoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mwl-calendar-week-view", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("eventTimesChanged", function DemoComponent_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) { return ctx.eventTimesChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("viewDate", ctx.viewDate)("events", ctx.events)("hourDuration", 40)("hourSegments", 2)("refresh", ctx.refresh);
    } }, directives: [_angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_5__.CalendarWeekViewComponent], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 75097:
/*!************************************************************************!*\
  !*** ./projects/demos/app/demo-modules/custom-hour-duration/module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoModule": function() { return /* binding */ DemoModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-calendar */ 90316);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/calendar.module */ 3746);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-calendar */ 90008);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-calendar */ 6693);
/* harmony import */ var _demo_utils_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../demo-utils/module */ 57671);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component */ 4911);
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ 20789);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);









class DemoModule extends angular_calendar__WEBPACK_IMPORTED_MODULE_0__.CalendarNativeDateFormatter {
    weekViewHour({ date, locale }) {
        return new Intl.DateTimeFormat('pt-BR', {
            hour: 'numeric',
            minute: 'numeric',
        }).format(date);
    }
}
DemoModule.ɵfac = /*@__PURE__*/ function () { let ɵDemoModule_BaseFactory; return function DemoModule_Factory(t) { return (ɵDemoModule_BaseFactory || (ɵDemoModule_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DemoModule)))(t || DemoModule); }; }();
DemoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DemoModule });
DemoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            angular_calendar__WEBPACK_IMPORTED_MODULE_3__.CalendarModule.forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_4__.DateAdapter,
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5__.adapterFactory,
            }, {
                dateFormatter: {
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_6__.CalendarDateFormatter,
                    useClass: DemoModule,
                },
            }),
            _demo_utils_module__WEBPACK_IMPORTED_MODULE_7__.DemoUtilsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _component__WEBPACK_IMPORTED_MODULE_9__.DemoComponent }]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DemoModule, { declarations: [_component__WEBPACK_IMPORTED_MODULE_9__.DemoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, angular_calendar__WEBPACK_IMPORTED_MODULE_3__.CalendarModule, _demo_utils_module__WEBPACK_IMPORTED_MODULE_7__.DemoUtilsModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_component__WEBPACK_IMPORTED_MODULE_9__.DemoComponent] }); })();


/***/ }),

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


/***/ })

}]);
//# sourceMappingURL=projects_demos_app_demo-modules_custom-hour-duration_module_ts-es2015.js.map