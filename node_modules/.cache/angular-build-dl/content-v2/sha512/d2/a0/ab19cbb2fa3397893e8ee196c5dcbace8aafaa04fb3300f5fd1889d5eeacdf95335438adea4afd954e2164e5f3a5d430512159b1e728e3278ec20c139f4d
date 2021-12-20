"use strict";
(self["webpackChunkangular_calendar"] = self["webpackChunkangular_calendar"] || []).push([["projects_demos_app_demo-modules_public-holidays_module_ts"],{

/***/ 63128:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/addYears/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addYears; }
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 76371);
/* harmony import */ var _addMonths_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMonths/index.js */ 71387);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);



/**
 * @name addYears
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the years added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * const result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */

function addYears(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyAmount);
  return (0,_addMonths_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, amount * 12);
}

/***/ }),

/***/ 57517:
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfYear/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ startOfYear; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 62711);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);


/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */

function startOfYear(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var cleanDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var date = new Date(0);
  date.setFullYear(cleanDate.getFullYear(), 0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ 90792:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/subYears/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ subYears; }
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 76371);
/* harmony import */ var _addYears_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addYears/index.js */ 63128);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);



/**
 * @name subYears
 * @category Year Helpers
 * @summary Subtract the specified number of years from the given date.
 *
 * @description
 * Subtract the specified number of years from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the years subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 5 years from 1 September 2014:
 * const result = subYears(new Date(2014, 8, 1), 5)
 * //=> Tue Sep 01 2009 00:00:00
 */

function subYears(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyAmount);
  return (0,_addYears_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, -amount);
}

/***/ }),

/***/ 17413:
/*!**********************************************************************!*\
  !*** ./projects/demos/app/demo-modules/public-holidays/component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoComponent": function() { return /* binding */ DemoComponent; }
/* harmony export */ });
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-calendar */ 4606);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 57517);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 90792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _demo_utils_calendar_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../demo-utils/calendar-header.component */ 78767);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_calendar_src_modules_month_calendar_month_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/month/calendar-month-view.component */ 21426);
/* harmony import */ var _angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/week/calendar-week-view.component */ 1913);
/* harmony import */ var _angular_calendar_src_modules_day_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/day/calendar-day-view.component */ 50811);









function DemoComponent_mwl_calendar_month_view_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-month-view", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r0.viewDate)("events", ctx_r0.events);
} }
function DemoComponent_mwl_calendar_week_view_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-week-view", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r1.viewDate)("events", ctx_r1.events);
} }
function DemoComponent_mwl_calendar_day_view_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-day-view", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r2.viewDate)("events", ctx_r2.events);
} }
// get your own key from https://holidayapi.com/
const HOLIDAY_API_KEY = '8eb2582d-3a4c-4fc5-94c8-3e21487d4e23';
// change this to your own country
const COUNTRY_CODE = 'US';
class DemoComponent {
    constructor(http, cdr) {
        this.http = http;
        this.cdr = cdr;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_1__.CalendarView.Month;
        this.viewDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_3__.default)(new Date(), 1));
        this.events = [];
    }
    ngOnInit() {
        this.fetchHolidays();
    }
    fetchHolidays() {
        this.http
            .get('https://holidayapi.com/v1/holidays', {
            params: {
                country: COUNTRY_CODE,
                year: String(new Date().getFullYear() - 1),
                key: HOLIDAY_API_KEY,
            },
        })
            .subscribe(({ holidays }) => {
            this.events = holidays.map((holiday) => {
                return {
                    start: new Date(holiday.date),
                    title: holiday.name,
                    allDay: true,
                    meta: {
                        type: 'holiday',
                        holiday,
                    },
                };
            });
            this.cdr.markForCheck();
        });
    }
}
DemoComponent.ɵfac = function DemoComponent_Factory(t) { return new (t || DemoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
DemoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DemoComponent, selectors: [["mwl-demo-component"]], decls: 12, vars: 6, consts: [[3, "view", "viewDate", "viewChange", "viewDateChange"], [3, "ngSwitch"], [3, "viewDate", "events", 4, "ngSwitchCase"], [3, "viewDate", "events"]], template: function DemoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-demo-utils-calendar-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewChange", function DemoComponent_Template_mwl_demo_utils_calendar_header_viewChange_0_listener($event) { return ctx.view = $event; })("viewDateChange", function DemoComponent_Template_mwl_demo_utils_calendar_header_viewDateChange_0_listener($event) { return ctx.viewDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DemoComponent_mwl_calendar_month_view_5_Template, 2, 2, "mwl-calendar-month-view", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DemoComponent_mwl_calendar_week_view_7_Template, 2, 2, "mwl-calendar-week-view", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DemoComponent_mwl_calendar_day_view_9_Template, 2, 2, "mwl-calendar-day-view", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "day");
    } }, directives: [_demo_utils_calendar_header_component__WEBPACK_IMPORTED_MODULE_5__.CalendarHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitchCase, _angular_calendar_src_modules_month_calendar_month_view_component__WEBPACK_IMPORTED_MODULE_7__.CalendarMonthViewComponent, _angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_8__.CalendarWeekViewComponent, _angular_calendar_src_modules_day_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_9__.CalendarDayViewComponent], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 3002:
/*!*******************************************************************!*\
  !*** ./projects/demos/app/demo-modules/public-holidays/module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoModule": function() { return /* binding */ DemoModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/calendar.module */ 3746);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-calendar */ 90008);
/* harmony import */ var _demo_utils_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../demo-utils/module */ 57671);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component */ 17413);
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ 20789);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 53882);
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
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
            _demo_utils_module__WEBPACK_IMPORTED_MODULE_6__.DemoUtilsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild([{ path: '', component: _component__WEBPACK_IMPORTED_MODULE_8__.DemoComponent }]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoModule, { declarations: [_component__WEBPACK_IMPORTED_MODULE_8__.DemoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, angular_calendar__WEBPACK_IMPORTED_MODULE_2__.CalendarModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
        _demo_utils_module__WEBPACK_IMPORTED_MODULE_6__.DemoUtilsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_component__WEBPACK_IMPORTED_MODULE_8__.DemoComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=projects_demos_app_demo-modules_public-holidays_module_ts-es2015.js.map