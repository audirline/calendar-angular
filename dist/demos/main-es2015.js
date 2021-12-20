(self["webpackChunkangular_calendar"] = self["webpackChunkangular_calendar"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90008:
/*!*********************************************************************!*\
  !*** ./projects/angular-calendar/src/date-adapters/date-adapter.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateAdapter": function() { return /* binding */ DateAdapter; }
/* harmony export */ });
class DateAdapter {
}


/***/ }),

/***/ 20789:
/*!***********************************************************************!*\
  !*** ./projects/angular-calendar/src/date-adapters/date-fns/index.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adapterFactory": function() { return /* binding */ adapterFactory; }
/* harmony export */ });
/* harmony import */ var calendar_utils_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! calendar-utils/date-adapters/date-fns */ 47421);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 48749);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 71387);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 12260);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 81770);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 94395);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 52259);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 86453);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 75494);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 93510);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 69695);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 75689);


function adapterFactory() {
    return Object.assign(Object.assign({}, (0,calendar_utils_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_0__.adapterFactory)()), { addWeeks: date_fns__WEBPACK_IMPORTED_MODULE_1__.default,
        addMonths: date_fns__WEBPACK_IMPORTED_MODULE_2__.default,
        subDays: date_fns__WEBPACK_IMPORTED_MODULE_3__.default,
        subWeeks: date_fns__WEBPACK_IMPORTED_MODULE_4__.default,
        subMonths: date_fns__WEBPACK_IMPORTED_MODULE_5__.default,
        getISOWeek: date_fns__WEBPACK_IMPORTED_MODULE_6__.default,
        setDate: date_fns__WEBPACK_IMPORTED_MODULE_7__.default,
        setMonth: date_fns__WEBPACK_IMPORTED_MODULE_8__.default,
        setYear: date_fns__WEBPACK_IMPORTED_MODULE_9__.default,
        getDate: date_fns__WEBPACK_IMPORTED_MODULE_10__.default,
        getYear: date_fns__WEBPACK_IMPORTED_MODULE_11__.default });
}


/***/ }),

/***/ 3746:
/*!******************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/calendar.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarA11y": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarA11y; },
/* harmony export */   "CalendarAngularDateFormatter": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarAngularDateFormatter; },
/* harmony export */   "CalendarCommonModule": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarCommonModule; },
/* harmony export */   "CalendarDateFormatter": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarDateFormatter; },
/* harmony export */   "CalendarEventTimesChangedEventType": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarEventTimesChangedEventType; },
/* harmony export */   "CalendarEventTitleFormatter": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarEventTitleFormatter; },
/* harmony export */   "CalendarMomentDateFormatter": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarMomentDateFormatter; },
/* harmony export */   "CalendarNativeDateFormatter": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarNativeDateFormatter; },
/* harmony export */   "CalendarUtils": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarUtils; },
/* harmony export */   "CalendarView": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarView; },
/* harmony export */   "DAYS_OF_WEEK": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.DAYS_OF_WEEK; },
/* harmony export */   "DateAdapter": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.DateAdapter; },
/* harmony export */   "MOMENT": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.MOMENT; },
/* harmony export */   "ɵCalendarA11yPipe": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵCalendarA11yPipe"]; },
/* harmony export */   "ɵCalendarDatePipe": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵCalendarDatePipe"]; },
/* harmony export */   "ɵCalendarEventActionsComponent": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵCalendarEventActionsComponent"]; },
/* harmony export */   "ɵCalendarEventTitleComponent": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵCalendarEventTitleComponent"]; },
/* harmony export */   "ɵCalendarEventTitlePipe": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵCalendarEventTitlePipe"]; },
/* harmony export */   "ɵCalendarNextViewDirective": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵCalendarNextViewDirective"]; },
/* harmony export */   "ɵCalendarPreviousViewDirective": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵCalendarPreviousViewDirective"]; },
/* harmony export */   "ɵCalendarTodayDirective": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵCalendarTodayDirective"]; },
/* harmony export */   "ɵCalendarTooltipDirective": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵCalendarTooltipDirective"]; },
/* harmony export */   "ɵCalendarTooltipWindowComponent": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵCalendarTooltipWindowComponent"]; },
/* harmony export */   "ɵClickDirective": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵClickDirective"]; },
/* harmony export */   "ɵKeydownEnterDirective": function() { return /* reexport safe */ _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵKeydownEnterDirective"]; },
/* harmony export */   "CalendarMonthModule": function() { return /* reexport safe */ _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_1__.CalendarMonthModule; },
/* harmony export */   "CalendarMonthViewComponent": function() { return /* reexport safe */ _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_1__.CalendarMonthViewComponent; },
/* harmony export */   "collapseAnimation": function() { return /* reexport safe */ _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_1__.collapseAnimation; },
/* harmony export */   "ɵCalendarMonthCellComponent": function() { return /* reexport safe */ _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_1__["ɵCalendarMonthCellComponent"]; },
/* harmony export */   "ɵCalendarMonthViewHeaderComponent": function() { return /* reexport safe */ _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_1__["ɵCalendarMonthViewHeaderComponent"]; },
/* harmony export */   "ɵCalendarOpenDayEventsComponent": function() { return /* reexport safe */ _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_1__["ɵCalendarOpenDayEventsComponent"]; },
/* harmony export */   "CalendarWeekModule": function() { return /* reexport safe */ _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__.CalendarWeekModule; },
/* harmony export */   "CalendarWeekViewComponent": function() { return /* reexport safe */ _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__.CalendarWeekViewComponent; },
/* harmony export */   "getWeekViewPeriod": function() { return /* reexport safe */ _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__.getWeekViewPeriod; },
/* harmony export */   "ɵCalendarWeekViewCurrentTimeMarkerComponent": function() { return /* reexport safe */ _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__["ɵCalendarWeekViewCurrentTimeMarkerComponent"]; },
/* harmony export */   "ɵCalendarWeekViewEventComponent": function() { return /* reexport safe */ _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__["ɵCalendarWeekViewEventComponent"]; },
/* harmony export */   "ɵCalendarWeekViewHeaderComponent": function() { return /* reexport safe */ _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__["ɵCalendarWeekViewHeaderComponent"]; },
/* harmony export */   "ɵCalendarWeekViewHourSegmentComponent": function() { return /* reexport safe */ _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__["ɵCalendarWeekViewHourSegmentComponent"]; },
/* harmony export */   "CalendarDayModule": function() { return /* reexport safe */ _day_calendar_day_module__WEBPACK_IMPORTED_MODULE_3__.CalendarDayModule; },
/* harmony export */   "CalendarDayViewComponent": function() { return /* reexport safe */ _day_calendar_day_module__WEBPACK_IMPORTED_MODULE_3__.CalendarDayViewComponent; },
/* harmony export */   "CalendarModule": function() { return /* binding */ CalendarModule; }
/* harmony export */ });
/* harmony import */ var _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/calendar-common.module */ 38711);
/* harmony import */ var _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/calendar-common.module */ 6693);
/* harmony import */ var _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/calendar-common.module */ 40199);
/* harmony import */ var _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/calendar-common.module */ 67400);
/* harmony import */ var _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./month/calendar-month.module */ 5465);
/* harmony import */ var _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./week/calendar-week.module */ 47175);
/* harmony import */ var _day_calendar_day_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./day/calendar-day.module */ 88533);
/* harmony import */ var _common_calendar_utils_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/calendar-utils.provider */ 27579);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);










/**
 * The main module of this library. Example usage:
 *
 * ```typescript
 * import { CalenderModule } from 'angular-calendar';
 *
 * @NgModule({
 *   imports: [
 *     CalenderModule.forRoot()
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */
class CalendarModule {
    static forRoot(dateAdapter, config = {}) {
        return {
            ngModule: CalendarModule,
            providers: [
                dateAdapter,
                config.eventTitleFormatter || _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_4__.CalendarEventTitleFormatter,
                config.dateFormatter || _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_5__.CalendarDateFormatter,
                config.utils || _common_calendar_utils_provider__WEBPACK_IMPORTED_MODULE_6__.CalendarUtils,
                config.a11y || _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_7__.CalendarA11y,
            ],
        };
    }
}
CalendarModule.ɵfac = function CalendarModule_Factory(t) { return new (t || CalendarModule)(); };
CalendarModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: CalendarModule });
CalendarModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarCommonModule,
            _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_1__.CalendarMonthModule,
            _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__.CalendarWeekModule,
            _day_calendar_day_module__WEBPACK_IMPORTED_MODULE_3__.CalendarDayModule,
        ], _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarCommonModule,
        _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_1__.CalendarMonthModule,
        _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__.CalendarWeekModule,
        _day_calendar_day_module__WEBPACK_IMPORTED_MODULE_3__.CalendarDayModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](CalendarModule, { imports: [_common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarCommonModule,
        _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_1__.CalendarMonthModule,
        _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__.CalendarWeekModule,
        _day_calendar_day_module__WEBPACK_IMPORTED_MODULE_3__.CalendarDayModule], exports: [_common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarCommonModule,
        _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_1__.CalendarMonthModule,
        _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__.CalendarWeekModule,
        _day_calendar_day_module__WEBPACK_IMPORTED_MODULE_3__.CalendarDayModule] }); })();


/***/ }),

/***/ 62479:
/*!****************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-a11y.pipe.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarA11yPipe": function() { return /* binding */ CalendarA11yPipe; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _calendar_a11y_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-a11y.provider */ 40199);




/**
 * This pipe is primarily for rendering aria labels. Example usage:
 * ```typescript
 * // where `myEvent` is a `CalendarEvent` and myLocale is a locale identifier
 * {{ { event: myEvent, locale: myLocale } | calendarA11y: 'eventDescription' }}
 * ```
 */
class CalendarA11yPipe {
    constructor(calendarA11y, locale) {
        this.calendarA11y = calendarA11y;
        this.locale = locale;
    }
    transform(a11yParams, method) {
        a11yParams.locale = a11yParams.locale || this.locale;
        if (typeof this.calendarA11y[method] === 'undefined') {
            const allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(_calendar_a11y_provider__WEBPACK_IMPORTED_MODULE_0__.CalendarA11y.prototype)).filter((iMethod) => iMethod !== 'constructor');
            throw new Error(`${method} is not a valid a11y method. Can only be one of ${allowedMethods.join(', ')}`);
        }
        return this.calendarA11y[method](a11yParams);
    }
}
CalendarA11yPipe.ɵfac = function CalendarA11yPipe_Factory(t) { return new (t || CalendarA11yPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_calendar_a11y_provider__WEBPACK_IMPORTED_MODULE_0__.CalendarA11y, 16), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.LOCALE_ID, 16)); };
CalendarA11yPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "calendarA11y", type: CalendarA11yPipe, pure: true });


/***/ }),

/***/ 40199:
/*!********************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-a11y.provider.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarA11y": function() { return /* binding */ CalendarA11y; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



/**
 * This class is responsible for adding accessibility to the calendar.
 * You may override any of its methods via angulars DI to suit your requirements.
 * For example:
 *
 * ```typescript
 * import { A11yParams, CalendarA11y } from 'angular-calendar';
 * import { formatDate, I18nPluralPipe } from '@angular/common';
 * import { Injectable } from '@angular/core';
 *
 * // adding your own a11y params
 * export interface CustomA11yParams extends A11yParams {
 *   isDrSuess?: boolean;
 * }
 *
 * @Injectable()
 * export class CustomCalendarA11y extends CalendarA11y {
 *   constructor(protected i18nPlural: I18nPluralPipe) {
 *     super(i18nPlural);
 *   }
 *
 *   // overriding a function
 *   public openDayEventsLandmark({ date, locale, isDrSuess }: CustomA11yParams): string {
 *     if (isDrSuess) {
 *       return `
 *         ${formatDate(date, 'EEEE MMMM d', locale)}
 *          Today you are you! That is truer than true! There is no one alive
 *          who is you-er than you!
 *       `;
 *     }
 *   }
 * }
 *
 * // in your component that uses the calendar
 * providers: [{
 *  provide: CalendarA11y,
 *  useClass: CustomCalendarA11y
 * }]
 * ```
 */
class CalendarA11y {
    constructor(i18nPlural) {
        this.i18nPlural = i18nPlural;
    }
    /**
     * Aria label for the badges/date of a cell
     * @example: `Saturday October 19 1 event click to expand`
     */
    monthCell({ day, locale }) {
        if (day.badgeTotal > 0) {
            return `
        ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(day.date, 'EEEE MMMM d', locale)},
        ${this.i18nPlural.transform(day.badgeTotal, {
                '=0': 'No events',
                '=1': 'One event',
                other: '# events',
            })},
         click to expand
      `;
        }
        else {
            return `${(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(day.date, 'EEEE MMMM d', locale)}`;
        }
    }
    /**
     * Aria label for the open day events start landmark
     * @example: `Saturday October 19 expanded view`
     */
    openDayEventsLandmark({ date, locale }) {
        return `
      Beginning of expanded view for ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date, 'EEEE MMMM dd', locale)}
    `;
    }
    /**
     * Aria label for alert that a day in the month view was expanded
     * @example: `Saturday October 19 expanded`
     */
    openDayEventsAlert({ date, locale }) {
        return `${(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date, 'EEEE MMMM dd', locale)} expanded`;
    }
    /**
     * Descriptive aria label for an event
     * @example: `Saturday October 19th, Scott's Pizza Party, from 11:00am to 5:00pm`
     */
    eventDescription({ event, locale }) {
        if (event.allDay === true) {
            return this.allDayEventDescription({ event, locale });
        }
        const aria = `
      ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(event.start, 'EEEE MMMM dd', locale)},
      ${event.title}, from ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(event.start, 'hh:mm a', locale)}
    `;
        if (event.end) {
            return aria + ` to ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(event.end, 'hh:mm a', locale)}`;
        }
        return aria;
    }
    /**
     * Descriptive aria label for an all day event
     * @example:
     * `Scott's Party, event spans multiple days: start time October 19 5:00pm, no stop time`
     */
    allDayEventDescription({ event, locale }) {
        const aria = `
      ${event.title}, event spans multiple days:
      start time ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(event.start, 'MMMM dd hh:mm a', locale)}
    `;
        if (event.end) {
            return (aria + `, stop time ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(event.end, 'MMMM d hh:mm a', locale)}`);
        }
        return aria + `, no stop time`;
    }
    /**
     * Aria label for the calendar event actions icons
     * @returns 'Edit' for fa-pencil icons, and 'Delete' for fa-times icons
     */
    actionButtonLabel({ action }) {
        return action.a11yLabel;
    }
    /**
     * @returns {number} Tab index to be given to month cells
     */
    monthCellTabIndex() {
        return 0;
    }
    /**
     * @returns true if the events inside the month cell should be aria-hidden
     */
    hideMonthCellEvents() {
        return true;
    }
    /**
     * @returns true if event titles should be aria-hidden (global)
     */
    hideEventTitle() {
        return true;
    }
    /**
     * @returns true if hour segments in the week view should be aria-hidden
     */
    hideWeekHourSegment() {
        return true;
    }
    /**
     * @returns true if hour segments in the day view should be aria-hidden
     */
    hideDayHourSegment() {
        return true;
    }
}
CalendarA11y.ɵfac = function CalendarA11y_Factory(t) { return new (t || CalendarA11y)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.I18nPluralPipe)); };
CalendarA11y.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CalendarA11y, factory: CalendarA11y.ɵfac });


/***/ }),

/***/ 6366:
/*!**************************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-angular-date-formatter.provider.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarAngularDateFormatter": function() { return /* binding */ CalendarAngularDateFormatter; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ 33878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../date-adapters/date-adapter */ 90008);




/**
 * This will use the angular date pipe to do all date formatting. It is the default date formatter used by the calendar.
 */
class CalendarAngularDateFormatter {
    constructor(dateAdapter) {
        this.dateAdapter = dateAdapter;
    }
    /**
     * The month view header week day labels
     */
    monthViewColumnHeader({ date, locale }) {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date, 'EEEE', locale);
    }
    /**
     * The month view cell day number
     */
    monthViewDayNumber({ date, locale }) {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date, 'd', locale);
    }
    /**
     * The month view title
     */
    monthViewTitle({ date, locale }) {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date, 'LLLL y', locale);
    }
    /**
     * The week view header week day labels
     */
    weekViewColumnHeader({ date, locale }) {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date, 'EEEE', locale);
    }
    /**
     * The week view sub header day and month labels
     */
    weekViewColumnSubHeader({ date, locale, }) {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date, 'MMM d', locale);
    }
    /**
     * The week view title
     */
    weekViewTitle({ date, locale, weekStartsOn, excludeDays, daysInWeek, }) {
        const { viewStart, viewEnd } = (0,_util__WEBPACK_IMPORTED_MODULE_1__.getWeekViewPeriod)(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek);
        const format = (dateToFormat, showYear) => (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(dateToFormat, 'MMM d' + (showYear ? ', yyyy' : ''), locale);
        return `${format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear())} - ${format(viewEnd, true)}`;
    }
    /**
     * The time formatting down the left hand side of the week view
     */
    weekViewHour({ date, locale }) {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date, 'h a', locale);
    }
    /**
     * The time formatting down the left hand side of the day view
     */
    dayViewHour({ date, locale }) {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date, 'h a', locale);
    }
    /**
     * The day view title
     */
    dayViewTitle({ date, locale }) {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date, 'EEEE, MMMM d, y', locale);
    }
}
CalendarAngularDateFormatter.ɵfac = function CalendarAngularDateFormatter_Factory(t) { return new (t || CalendarAngularDateFormatter)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_3__.DateAdapter)); };
CalendarAngularDateFormatter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CalendarAngularDateFormatter, factory: CalendarAngularDateFormatter.ɵfac });


/***/ }),

/***/ 67400:
/*!********************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-common.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarEventTitleFormatter": function() { return /* reexport safe */ _calendar_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_0__.CalendarEventTitleFormatter; },
/* harmony export */   "CalendarMomentDateFormatter": function() { return /* reexport safe */ _calendar_moment_date_formatter_provider__WEBPACK_IMPORTED_MODULE_1__.CalendarMomentDateFormatter; },
/* harmony export */   "MOMENT": function() { return /* reexport safe */ _calendar_moment_date_formatter_provider__WEBPACK_IMPORTED_MODULE_1__.MOMENT; },
/* harmony export */   "CalendarNativeDateFormatter": function() { return /* reexport safe */ _calendar_native_date_formatter_provider__WEBPACK_IMPORTED_MODULE_2__.CalendarNativeDateFormatter; },
/* harmony export */   "CalendarAngularDateFormatter": function() { return /* reexport safe */ _calendar_angular_date_formatter_provider__WEBPACK_IMPORTED_MODULE_3__.CalendarAngularDateFormatter; },
/* harmony export */   "CalendarDateFormatter": function() { return /* reexport safe */ _calendar_date_formatter_provider__WEBPACK_IMPORTED_MODULE_4__.CalendarDateFormatter; },
/* harmony export */   "CalendarUtils": function() { return /* reexport safe */ _calendar_utils_provider__WEBPACK_IMPORTED_MODULE_5__.CalendarUtils; },
/* harmony export */   "CalendarA11y": function() { return /* reexport safe */ _calendar_a11y_provider__WEBPACK_IMPORTED_MODULE_6__.CalendarA11y; },
/* harmony export */   "CalendarEventTimesChangedEventType": function() { return /* reexport safe */ _calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_7__.CalendarEventTimesChangedEventType; },
/* harmony export */   "DateAdapter": function() { return /* reexport safe */ _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_8__.DateAdapter; },
/* harmony export */   "CalendarView": function() { return /* reexport safe */ _calendar_view_enum__WEBPACK_IMPORTED_MODULE_9__.CalendarView; },
/* harmony export */   "ɵCalendarEventActionsComponent": function() { return /* reexport safe */ _calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_10__.CalendarEventActionsComponent; },
/* harmony export */   "ɵCalendarEventTitleComponent": function() { return /* reexport safe */ _calendar_event_title_component__WEBPACK_IMPORTED_MODULE_11__.CalendarEventTitleComponent; },
/* harmony export */   "ɵCalendarTooltipDirective": function() { return /* reexport safe */ _calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_12__.CalendarTooltipDirective; },
/* harmony export */   "ɵCalendarTooltipWindowComponent": function() { return /* reexport safe */ _calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_12__.CalendarTooltipWindowComponent; },
/* harmony export */   "ɵCalendarPreviousViewDirective": function() { return /* reexport safe */ _calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_13__.CalendarPreviousViewDirective; },
/* harmony export */   "ɵCalendarNextViewDirective": function() { return /* reexport safe */ _calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_14__.CalendarNextViewDirective; },
/* harmony export */   "ɵCalendarTodayDirective": function() { return /* reexport safe */ _calendar_today_directive__WEBPACK_IMPORTED_MODULE_15__.CalendarTodayDirective; },
/* harmony export */   "ɵCalendarDatePipe": function() { return /* reexport safe */ _calendar_date_pipe__WEBPACK_IMPORTED_MODULE_16__.CalendarDatePipe; },
/* harmony export */   "ɵCalendarEventTitlePipe": function() { return /* reexport safe */ _calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_17__.CalendarEventTitlePipe; },
/* harmony export */   "ɵClickDirective": function() { return /* reexport safe */ _click_directive__WEBPACK_IMPORTED_MODULE_18__.ClickDirective; },
/* harmony export */   "ɵKeydownEnterDirective": function() { return /* reexport safe */ _keydown_enter_directive__WEBPACK_IMPORTED_MODULE_19__.KeydownEnterDirective; },
/* harmony export */   "ɵCalendarA11yPipe": function() { return /* reexport safe */ _calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_20__.CalendarA11yPipe; },
/* harmony export */   "DAYS_OF_WEEK": function() { return /* reexport safe */ calendar_utils__WEBPACK_IMPORTED_MODULE_21__.DAYS_OF_WEEK; },
/* harmony export */   "CalendarCommonModule": function() { return /* binding */ CalendarCommonModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./calendar-event-actions.component */ 32136);
/* harmony import */ var _calendar_event_title_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./calendar-event-title.component */ 58974);
/* harmony import */ var _calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./calendar-tooltip.directive */ 69416);
/* harmony import */ var _calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./calendar-previous-view.directive */ 31726);
/* harmony import */ var _calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./calendar-next-view.directive */ 60897);
/* harmony import */ var _calendar_today_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./calendar-today.directive */ 22167);
/* harmony import */ var _calendar_date_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./calendar-date.pipe */ 12153);
/* harmony import */ var _calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./calendar-event-title.pipe */ 44602);
/* harmony import */ var _click_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./click.directive */ 81567);
/* harmony import */ var _keydown_enter_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./keydown-enter.directive */ 93759);
/* harmony import */ var _calendar_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-event-title-formatter.provider */ 38711);
/* harmony import */ var _calendar_date_formatter_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar-date-formatter.provider */ 6693);
/* harmony import */ var _calendar_utils_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar-utils.provider */ 27579);
/* harmony import */ var _calendar_a11y_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar-a11y.provider */ 40199);
/* harmony import */ var _calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./calendar-a11y.pipe */ 62479);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _calendar_moment_date_formatter_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar-moment-date-formatter.provider */ 19898);
/* harmony import */ var _calendar_native_date_formatter_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar-native-date-formatter.provider */ 90316);
/* harmony import */ var _calendar_angular_date_formatter_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar-angular-date-formatter.provider */ 6366);
/* harmony import */ var _calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calendar-event-times-changed-event.interface */ 91203);
/* harmony import */ var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../date-adapters/date-adapter */ 90008);
/* harmony import */ var _calendar_view_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calendar-view.enum */ 4606);
/* harmony import */ var calendar_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! calendar-utils */ 90489);





























// needed for ivy, not part of the public api












/**
 * Import this module to if you're just using a singular view and want to save on bundle size. Example usage:
 *
 * ```typescript
 * import { CalendarCommonModule, CalendarMonthModule } from 'angular-calendar';
 *
 * @NgModule({
 *   imports: [
 *     CalendarCommonModule.forRoot(),
 *     CalendarMonthModule
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */
class CalendarCommonModule {
    static forRoot(dateAdapter, config = {}) {
        return {
            ngModule: CalendarCommonModule,
            providers: [
                dateAdapter,
                config.eventTitleFormatter || _calendar_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_0__.CalendarEventTitleFormatter,
                config.dateFormatter || _calendar_date_formatter_provider__WEBPACK_IMPORTED_MODULE_4__.CalendarDateFormatter,
                config.utils || _calendar_utils_provider__WEBPACK_IMPORTED_MODULE_5__.CalendarUtils,
                config.a11y || _calendar_a11y_provider__WEBPACK_IMPORTED_MODULE_6__.CalendarA11y,
            ],
        };
    }
}
CalendarCommonModule.ɵfac = function CalendarCommonModule_Factory(t) { return new (t || CalendarCommonModule)(); };
CalendarCommonModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: CalendarCommonModule });
CalendarCommonModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.I18nPluralPipe], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](CalendarCommonModule, { declarations: [_calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_10__.CalendarEventActionsComponent,
        _calendar_event_title_component__WEBPACK_IMPORTED_MODULE_11__.CalendarEventTitleComponent,
        _calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_12__.CalendarTooltipWindowComponent,
        _calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_12__.CalendarTooltipDirective,
        _calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_13__.CalendarPreviousViewDirective,
        _calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_14__.CalendarNextViewDirective,
        _calendar_today_directive__WEBPACK_IMPORTED_MODULE_15__.CalendarTodayDirective,
        _calendar_date_pipe__WEBPACK_IMPORTED_MODULE_16__.CalendarDatePipe,
        _calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_17__.CalendarEventTitlePipe,
        _calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_20__.CalendarA11yPipe,
        _click_directive__WEBPACK_IMPORTED_MODULE_18__.ClickDirective,
        _keydown_enter_directive__WEBPACK_IMPORTED_MODULE_19__.KeydownEnterDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule], exports: [_calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_10__.CalendarEventActionsComponent,
        _calendar_event_title_component__WEBPACK_IMPORTED_MODULE_11__.CalendarEventTitleComponent,
        _calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_12__.CalendarTooltipWindowComponent,
        _calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_12__.CalendarTooltipDirective,
        _calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_13__.CalendarPreviousViewDirective,
        _calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_14__.CalendarNextViewDirective,
        _calendar_today_directive__WEBPACK_IMPORTED_MODULE_15__.CalendarTodayDirective,
        _calendar_date_pipe__WEBPACK_IMPORTED_MODULE_16__.CalendarDatePipe,
        _calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_17__.CalendarEventTitlePipe,
        _calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_20__.CalendarA11yPipe,
        _click_directive__WEBPACK_IMPORTED_MODULE_18__.ClickDirective,
        _keydown_enter_directive__WEBPACK_IMPORTED_MODULE_19__.KeydownEnterDirective] }); })();


/***/ }),

/***/ 6693:
/*!******************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-date-formatter.provider.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarDateFormatter": function() { return /* binding */ CalendarDateFormatter; }
/* harmony export */ });
/* harmony import */ var _calendar_angular_date_formatter_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-angular-date-formatter.provider */ 6366);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


/**
 * This class is responsible for all formatting of dates. There are 3 implementations available, the `CalendarAngularDateFormatter` (default) which uses the angular date pipe to format dates, the `CalendarNativeDateFormatter` which will use the <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to format dates, or there is the `CalendarMomentDateFormatter` which uses <a href="http://momentjs.com/" target="_blank">moment</a>.
 *
 * If you wish, you may override any of the defaults via angulars DI. For example:
 *
 * ```typescript
 * import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
 * import { formatDate } from '@angular/common';
 * import { Injectable } from '@angular/core';
 *
 * @Injectable()
 * class CustomDateFormatter extends CalendarDateFormatter {
 *
 *   public monthViewColumnHeader({date, locale}: DateFormatterParams): string {
 *     return formatDate(date, 'EEE', locale); // use short week days
 *   }
 *
 * }
 *
 * // in your component that uses the calendar
 * providers: [{
 *   provide: CalendarDateFormatter,
 *   useClass: CustomDateFormatter
 * }]
 * ```
 */
class CalendarDateFormatter extends _calendar_angular_date_formatter_provider__WEBPACK_IMPORTED_MODULE_0__.CalendarAngularDateFormatter {
}
CalendarDateFormatter.ɵfac = /*@__PURE__*/ function () { let ɵCalendarDateFormatter_BaseFactory; return function CalendarDateFormatter_Factory(t) { return (ɵCalendarDateFormatter_BaseFactory || (ɵCalendarDateFormatter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CalendarDateFormatter)))(t || CalendarDateFormatter); }; }();
CalendarDateFormatter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CalendarDateFormatter, factory: CalendarDateFormatter.ɵfac });


/***/ }),

/***/ 12153:
/*!****************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-date.pipe.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarDatePipe": function() { return /* binding */ CalendarDatePipe; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _calendar_date_formatter_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-date-formatter.provider */ 6693);




/**
 * This pipe is primarily for rendering the current view title. Example usage:
 * ```typescript
 * // where `viewDate` is a `Date` and view is `'month' | 'week' | 'day'`
 * {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}
 * ```
 */
class CalendarDatePipe {
    constructor(dateFormatter, locale) {
        this.dateFormatter = dateFormatter;
        this.locale = locale;
    }
    transform(date, method, locale = this.locale, weekStartsOn = 0, excludeDays = [], daysInWeek) {
        if (typeof this.dateFormatter[method] === 'undefined') {
            const allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(_calendar_date_formatter_provider__WEBPACK_IMPORTED_MODULE_0__.CalendarDateFormatter.prototype)).filter((iMethod) => iMethod !== 'constructor');
            throw new Error(`${method} is not a valid date formatter. Can only be one of ${allowedMethods.join(', ')}`);
        }
        return this.dateFormatter[method]({
            date,
            locale,
            weekStartsOn,
            excludeDays,
            daysInWeek,
        });
    }
}
CalendarDatePipe.ɵfac = function CalendarDatePipe_Factory(t) { return new (t || CalendarDatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_calendar_date_formatter_provider__WEBPACK_IMPORTED_MODULE_0__.CalendarDateFormatter, 16), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.LOCALE_ID, 16)); };
CalendarDatePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "calendarDate", type: CalendarDatePipe, pure: true });


/***/ }),

/***/ 45824:
/*!***************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-drag-helper.provider.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarDragHelper": function() { return /* binding */ CalendarDragHelper; }
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ 33878);

class CalendarDragHelper {
    constructor(dragContainerElement, draggableElement) {
        this.dragContainerElement = dragContainerElement;
        this.startPosition = draggableElement.getBoundingClientRect();
    }
    validateDrag({ x, y, snapDraggedEvents, dragAlreadyMoved, transform, }) {
        const isDraggedWithinThreshold = (0,_util__WEBPACK_IMPORTED_MODULE_0__.isWithinThreshold)({ x, y }) || dragAlreadyMoved;
        if (snapDraggedEvents) {
            const inner = Object.assign({}, this.startPosition, {
                left: this.startPosition.left + transform.x,
                right: this.startPosition.right + transform.x,
                top: this.startPosition.top + transform.y,
                bottom: this.startPosition.bottom + transform.y,
            });
            if (isDraggedWithinThreshold) {
                const outer = this.dragContainerElement.getBoundingClientRect();
                const isTopInside = outer.top < inner.top && inner.top < outer.bottom;
                const isBottomInside = outer.top < inner.bottom && inner.bottom < outer.bottom;
                return ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isInsideLeftAndRight)(outer, inner) && (isTopInside || isBottomInside));
            }
            /* istanbul ignore next */
            return false;
        }
        else {
            return isDraggedWithinThreshold;
        }
    }
}


/***/ }),

/***/ 32136:
/*!******************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-event-actions.component.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarEventActionsComponent": function() { return /* binding */ CalendarEventActionsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _click_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./click.directive */ 81567);
/* harmony import */ var _keydown_enter_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keydown-enter.directive */ 93759);
/* harmony import */ var _calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar-a11y.pipe */ 62479);





const _c0 = function (a0) { return { action: a0 }; };
function CalendarEventActionsComponent_ng_template_1_span_1_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mwlClick", function CalendarEventActionsComponent_ng_template_1_span_1_a_2_Template_a_mwlClick_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const action_r7 = restoredCtx.$implicit; const event_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).event; return action_r7.onClick({ event: event_r3, sourceEvent: $event }); })("mwlKeydownEnter", function CalendarEventActionsComponent_ng_template_1_span_1_a_2_Template_a_mwlKeydownEnter_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const action_r7 = restoredCtx.$implicit; const event_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).event; return action_r7.onClick({ event: event_r3, sourceEvent: $event }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", action_r7.cssClass)("innerHtml", action_r7.label, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, action_r7), "actionButtonLabel"));
} }
function CalendarEventActionsComponent_ng_template_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CalendarEventActionsComponent_ng_template_1_span_1_a_2_Template, 3, 8, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const event_r3 = ctx_r13.event;
    const trackByActionId_r4 = ctx_r13.trackByActionId;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", event_r3.actions)("ngForTrackBy", trackByActionId_r4);
} }
function CalendarEventActionsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarEventActionsComponent_ng_template_1_span_1_Template, 4, 2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n    ");
} if (rf & 2) {
    const event_r3 = ctx.event;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", event_r3.actions);
} }
function CalendarEventActionsComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
} }
const _c1 = function (a0, a1) { return { event: a0, trackByActionId: a1 }; };
class CalendarEventActionsComponent {
    constructor() {
        this.trackByActionId = (index, action) => action.id ? action.id : action;
    }
}
CalendarEventActionsComponent.ɵfac = function CalendarEventActionsComponent_Factory(t) { return new (t || CalendarEventActionsComponent)(); };
CalendarEventActionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarEventActionsComponent, selectors: [["mwl-calendar-event-actions"]], inputs: { event: "event", customTemplate: "customTemplate" }, decls: 6, vars: 5, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-event-actions", 4, "ngIf"], [1, "cal-event-actions"], ["class", "cal-event-action", "href", "javascript:;", "tabindex", "0", "role", "button", 3, "ngClass", "innerHtml", "mwlClick", "mwlKeydownEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["href", "javascript:;", "tabindex", "0", "role", "button", 1, "cal-event-action", 3, "ngClass", "innerHtml", "mwlClick", "mwlKeydownEnter"]], template: function CalendarEventActionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarEventActionsComponent_ng_template_1_Template, 3, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarEventActionsComponent_ng_template_4_Template, 1, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c1, ctx.event, ctx.trackByActionId));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _click_directive__WEBPACK_IMPORTED_MODULE_2__.ClickDirective, _keydown_enter_directive__WEBPACK_IMPORTED_MODULE_3__.KeydownEnterDirective], pipes: [_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_4__.CalendarA11yPipe], encapsulation: 2 });


/***/ }),

/***/ 91203:
/*!******************************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-event-times-changed-event.interface.ts ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarEventTimesChangedEventType": function() { return /* binding */ CalendarEventTimesChangedEventType; }
/* harmony export */ });
var CalendarEventTimesChangedEventType;
(function (CalendarEventTimesChangedEventType) {
    CalendarEventTimesChangedEventType["Drag"] = "drag";
    CalendarEventTimesChangedEventType["Drop"] = "drop";
    CalendarEventTimesChangedEventType["Resize"] = "resize";
})(CalendarEventTimesChangedEventType || (CalendarEventTimesChangedEventType = {}));


/***/ }),

/***/ 38711:
/*!*************************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-event-title-formatter.provider.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarEventTitleFormatter": function() { return /* binding */ CalendarEventTitleFormatter; }
/* harmony export */ });
/**
 * This class is responsible for displaying all event titles within the calendar. You may override any of its methods via angulars DI to suit your requirements. For example:
 *
 * ```typescript
 * import { Injectable } from '@angular/core';
 * import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
 *
 * @Injectable()
 * class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
 *
 *   month(event: CalendarEvent): string {
 *     return `Custom prefix: ${event.title}`;
 *   }
 *
 * }
 *
 * // in your component
 * providers: [{
 *  provide: CalendarEventTitleFormatter,
 *  useClass: CustomEventTitleFormatter
 * }]
 * ```
 */
class CalendarEventTitleFormatter {
    /**
     * The month view event title.
     */
    month(event, title) {
        return event.title;
    }
    /**
     * The month view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    monthTooltip(event, title) {
        return event.title;
    }
    /**
     * The week view event title.
     */
    week(event, title) {
        return event.title;
    }
    /**
     * The week view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    weekTooltip(event, title) {
        return event.title;
    }
    /**
     * The day view event title.
     */
    day(event, title) {
        return event.title;
    }
    /**
     * The day view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    dayTooltip(event, title) {
        return event.title;
    }
}


/***/ }),

/***/ 58974:
/*!****************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-event-title.component.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarEventTitleComponent": function() { return /* binding */ CalendarEventTitleComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar-event-title.pipe */ 44602);
/* harmony import */ var _calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar-a11y.pipe */ 62479);




const _c0 = function () { return {}; };
function CalendarEventTitleComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "calendarEventTitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    ");
} if (rf & 2) {
    const event_r3 = ctx.event;
    const view_r4 = ctx.view;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 2, event_r3.title, view_r4, event_r3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0), "hideEventTitle"));
} }
function CalendarEventTitleComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
} }
const _c1 = function (a0, a1) { return { event: a0, view: a1 }; };
class CalendarEventTitleComponent {
}
CalendarEventTitleComponent.ɵfac = function CalendarEventTitleComponent_Factory(t) { return new (t || CalendarEventTitleComponent)(); };
CalendarEventTitleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarEventTitleComponent, selectors: [["mwl-calendar-event-title"]], inputs: { event: "event", customTemplate: "customTemplate", view: "view" }, decls: 6, vars: 5, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-event-title", 3, "innerHTML"]], template: function CalendarEventTitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarEventTitleComponent_ng_template_1_Template, 6, 10, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarEventTitleComponent_ng_template_4_Template, 1, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c1, ctx.event, ctx.view));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet], pipes: [_calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_2__.CalendarEventTitlePipe, _calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_3__.CalendarA11yPipe], encapsulation: 2 });


/***/ }),

/***/ 44602:
/*!***********************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-event-title.pipe.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarEventTitlePipe": function() { return /* binding */ CalendarEventTitlePipe; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _calendar_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar-event-title-formatter.provider */ 38711);


class CalendarEventTitlePipe {
    constructor(calendarEventTitle) {
        this.calendarEventTitle = calendarEventTitle;
    }
    transform(title, titleType, event) {
        return this.calendarEventTitle[titleType](event, title);
    }
}
CalendarEventTitlePipe.ɵfac = function CalendarEventTitlePipe_Factory(t) { return new (t || CalendarEventTitlePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_calendar_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_1__.CalendarEventTitleFormatter, 16)); };
CalendarEventTitlePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "calendarEventTitle", type: CalendarEventTitlePipe, pure: true });


/***/ }),

/***/ 19898:
/*!*************************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-moment-date-formatter.provider.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MOMENT": function() { return /* binding */ MOMENT; },
/* harmony export */   "CalendarMomentDateFormatter": function() { return /* binding */ CalendarMomentDateFormatter; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ 33878);
/* harmony import */ var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../date-adapters/date-adapter */ 90008);




const MOMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('Moment');
/**
 * This will use <a href="http://momentjs.com/" target="_blank">moment</a> to do all date formatting. To use this class:
 *
 * ```typescript
 * import { CalendarDateFormatter, CalendarMomentDateFormatter, MOMENT } from 'angular-calendar';
 * import moment from 'moment';
 *
 * // in your component
 * provide: [{
 *   provide: MOMENT, useValue: moment
 * }, {
 *   provide: CalendarDateFormatter, useClass: CalendarMomentDateFormatter
 * }]
 *
 * ```
 */
class CalendarMomentDateFormatter {
    /**
     * @hidden
     */
    constructor(moment, dateAdapter) {
        this.moment = moment;
        this.dateAdapter = dateAdapter;
    }
    /**
     * The month view header week day labels
     */
    monthViewColumnHeader({ date, locale }) {
        return this.moment(date).locale(locale).format('dddd');
    }
    /**
     * The month view cell day number
     */
    monthViewDayNumber({ date, locale }) {
        return this.moment(date).locale(locale).format('D');
    }
    /**
     * The month view title
     */
    monthViewTitle({ date, locale }) {
        return this.moment(date).locale(locale).format('MMMM YYYY');
    }
    /**
     * The week view header week day labels
     */
    weekViewColumnHeader({ date, locale }) {
        return this.moment(date).locale(locale).format('dddd');
    }
    /**
     * The week view sub header day and month labels
     */
    weekViewColumnSubHeader({ date, locale, }) {
        return this.moment(date).locale(locale).format('MMM D');
    }
    /**
     * The week view title
     */
    weekViewTitle({ date, locale, weekStartsOn, excludeDays, daysInWeek, }) {
        const { viewStart, viewEnd } = (0,_util__WEBPACK_IMPORTED_MODULE_1__.getWeekViewPeriod)(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek);
        const format = (dateToFormat, showYear) => this.moment(dateToFormat)
            .locale(locale)
            .format('MMM D' + (showYear ? ', YYYY' : ''));
        return `${format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear())} - ${format(viewEnd, true)}`;
    }
    /**
     * The time formatting down the left hand side of the week view
     */
    weekViewHour({ date, locale }) {
        return this.moment(date).locale(locale).format('ha');
    }
    /**
     * The time formatting down the left hand side of the day view
     */
    dayViewHour({ date, locale }) {
        return this.moment(date).locale(locale).format('ha');
    }
    /**
     * The day view title
     */
    dayViewTitle({ date, locale }) {
        return this.moment(date).locale(locale).format('dddd, LL'); // dddd = Thursday
    } // LL = locale-dependent Month Day, Year
}
CalendarMomentDateFormatter.ɵfac = function CalendarMomentDateFormatter_Factory(t) { return new (t || CalendarMomentDateFormatter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MOMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_2__.DateAdapter)); };
CalendarMomentDateFormatter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CalendarMomentDateFormatter, factory: CalendarMomentDateFormatter.ɵfac });


/***/ }),

/***/ 90316:
/*!*************************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-native-date-formatter.provider.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarNativeDateFormatter": function() { return /* binding */ CalendarNativeDateFormatter; }
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ 33878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../date-adapters/date-adapter */ 90008);



/**
 * This will use <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to do all date formatting.
 *
 * You will need to include a <a href="https://github.com/andyearnshaw/Intl.js/">polyfill</a> for older browsers.
 */
class CalendarNativeDateFormatter {
    constructor(dateAdapter) {
        this.dateAdapter = dateAdapter;
    }
    /**
     * The month view header week day labels
     */
    monthViewColumnHeader({ date, locale }) {
        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
    }
    /**
     * The month view cell day number
     */
    monthViewDayNumber({ date, locale }) {
        return new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(date);
    }
    /**
     * The month view title
     */
    monthViewTitle({ date, locale }) {
        return new Intl.DateTimeFormat(locale, {
            year: 'numeric',
            month: 'long',
        }).format(date);
    }
    /**
     * The week view header week day labels
     */
    weekViewColumnHeader({ date, locale }) {
        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
    }
    /**
     * The week view sub header day and month labels
     */
    weekViewColumnSubHeader({ date, locale, }) {
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'short',
        }).format(date);
    }
    /**
     * The week view title
     */
    weekViewTitle({ date, locale, weekStartsOn, excludeDays, daysInWeek, }) {
        const { viewStart, viewEnd } = (0,_util__WEBPACK_IMPORTED_MODULE_0__.getWeekViewPeriod)(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek);
        const format = (dateToFormat, showYear) => new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'short',
            year: showYear ? 'numeric' : undefined,
        }).format(dateToFormat);
        return `${format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear())} - ${format(viewEnd, true)}`;
    }
    /**
     * The time formatting down the left hand side of the week view
     */
    weekViewHour({ date, locale }) {
        return new Intl.DateTimeFormat(locale, { hour: 'numeric' }).format(date);
    }
    /**
     * The time formatting down the left hand side of the day view
     */
    dayViewHour({ date, locale }) {
        return new Intl.DateTimeFormat(locale, { hour: 'numeric' }).format(date);
    }
    /**
     * The day view title
     */
    dayViewTitle({ date, locale }) {
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            weekday: 'long',
        }).format(date);
    }
}
CalendarNativeDateFormatter.ɵfac = function CalendarNativeDateFormatter_Factory(t) { return new (t || CalendarNativeDateFormatter)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_2__.DateAdapter)); };
CalendarNativeDateFormatter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CalendarNativeDateFormatter, factory: CalendarNativeDateFormatter.ɵfac });


/***/ }),

/***/ 60897:
/*!**************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-next-view.directive.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarNextViewDirective": function() { return /* binding */ CalendarNextViewDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _calendar_view_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar-view.enum */ 4606);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ 33878);
/* harmony import */ var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../date-adapters/date-adapter */ 90008);





/**
 * Change the view date to the next view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarNextView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Next
 * </button>
 * ```
 */
class CalendarNextViewDirective {
    constructor(dateAdapter) {
        this.dateAdapter = dateAdapter;
        /**
         * Days to skip when going forward by 1 day
         */
        this.excludeDays = [];
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    /**
     * @hidden
     */
    onClick() {
        const addFn = {
            day: this.dateAdapter.addDays,
            week: this.dateAdapter.addWeeks,
            month: this.dateAdapter.addMonths,
        }[this.view];
        if (this.view === _calendar_view_enum__WEBPACK_IMPORTED_MODULE_1__.CalendarView.Day) {
            this.viewDateChange.emit((0,_util__WEBPACK_IMPORTED_MODULE_2__.addDaysWithExclusions)(this.dateAdapter, this.viewDate, 1, this.excludeDays));
        }
        else if (this.view === _calendar_view_enum__WEBPACK_IMPORTED_MODULE_1__.CalendarView.Week && this.daysInWeek) {
            this.viewDateChange.emit((0,_util__WEBPACK_IMPORTED_MODULE_2__.addDaysWithExclusions)(this.dateAdapter, this.viewDate, this.daysInWeek, this.excludeDays));
        }
        else {
            this.viewDateChange.emit(addFn(this.viewDate, 1));
        }
    }
}
CalendarNextViewDirective.ɵfac = function CalendarNextViewDirective_Factory(t) { return new (t || CalendarNextViewDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_3__.DateAdapter)); };
CalendarNextViewDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CalendarNextViewDirective, selectors: [["", "mwlCalendarNextView", ""]], hostBindings: function CalendarNextViewDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarNextViewDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { view: "view", viewDate: "viewDate", excludeDays: "excludeDays", daysInWeek: "daysInWeek" }, outputs: { viewDateChange: "viewDateChange" } });


/***/ }),

/***/ 31726:
/*!******************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-previous-view.directive.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarPreviousViewDirective": function() { return /* binding */ CalendarPreviousViewDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _calendar_view_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar-view.enum */ 4606);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ 33878);
/* harmony import */ var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../date-adapters/date-adapter */ 90008);





/**
 * Change the view date to the previous view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarPreviousView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Previous
 * </button>
 * ```
 */
class CalendarPreviousViewDirective {
    constructor(dateAdapter) {
        this.dateAdapter = dateAdapter;
        /**
         * Days to skip when going back by 1 day
         */
        this.excludeDays = [];
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    /**
     * @hidden
     */
    onClick() {
        const subFn = {
            day: this.dateAdapter.subDays,
            week: this.dateAdapter.subWeeks,
            month: this.dateAdapter.subMonths,
        }[this.view];
        if (this.view === _calendar_view_enum__WEBPACK_IMPORTED_MODULE_1__.CalendarView.Day) {
            this.viewDateChange.emit((0,_util__WEBPACK_IMPORTED_MODULE_2__.addDaysWithExclusions)(this.dateAdapter, this.viewDate, -1, this.excludeDays));
        }
        else if (this.view === _calendar_view_enum__WEBPACK_IMPORTED_MODULE_1__.CalendarView.Week && this.daysInWeek) {
            this.viewDateChange.emit((0,_util__WEBPACK_IMPORTED_MODULE_2__.addDaysWithExclusions)(this.dateAdapter, this.viewDate, -this.daysInWeek, this.excludeDays));
        }
        else {
            this.viewDateChange.emit(subFn(this.viewDate, 1));
        }
    }
}
CalendarPreviousViewDirective.ɵfac = function CalendarPreviousViewDirective_Factory(t) { return new (t || CalendarPreviousViewDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_3__.DateAdapter)); };
CalendarPreviousViewDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CalendarPreviousViewDirective, selectors: [["", "mwlCalendarPreviousView", ""]], hostBindings: function CalendarPreviousViewDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarPreviousViewDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { view: "view", viewDate: "viewDate", excludeDays: "excludeDays", daysInWeek: "daysInWeek" }, outputs: { viewDateChange: "viewDateChange" } });


/***/ }),

/***/ 70923:
/*!*****************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-resize-helper.provider.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarResizeHelper": function() { return /* binding */ CalendarResizeHelper; }
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ 33878);

class CalendarResizeHelper {
    constructor(resizeContainerElement, minWidth, rtl) {
        this.resizeContainerElement = resizeContainerElement;
        this.minWidth = minWidth;
        this.rtl = rtl;
    }
    validateResize({ rectangle, edges }) {
        if (this.rtl) {
            // TODO - find a way of testing this, for some reason the tests always fail but it does actually work
            /* istanbul ignore next */
            if (typeof edges.left !== 'undefined') {
                rectangle.left -= edges.left;
                rectangle.right += edges.left;
            }
            else if (typeof edges.right !== 'undefined') {
                rectangle.left += edges.right;
                rectangle.right -= edges.right;
            }
            rectangle.width = rectangle.right - rectangle.left;
        }
        if (this.minWidth &&
            Math.ceil(rectangle.width) < Math.ceil(this.minWidth)) {
            return false;
        }
        return (0,_util__WEBPACK_IMPORTED_MODULE_0__.isInside)(this.resizeContainerElement.getBoundingClientRect(), rectangle);
    }
}


/***/ }),

/***/ 22167:
/*!**********************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-today.directive.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarTodayDirective": function() { return /* binding */ CalendarTodayDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../date-adapters/date-adapter */ 90008);



/**
 * Change the view date to the current day. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarToday
 *  [(viewDate)]="viewDate">
 *  Today
 * </button>
 * ```
 */
class CalendarTodayDirective {
    constructor(dateAdapter) {
        this.dateAdapter = dateAdapter;
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    /**
     * @hidden
     */
    onClick() {
        this.viewDateChange.emit(this.dateAdapter.startOfDay(new Date()));
    }
}
CalendarTodayDirective.ɵfac = function CalendarTodayDirective_Factory(t) { return new (t || CalendarTodayDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_1__.DateAdapter)); };
CalendarTodayDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CalendarTodayDirective, selectors: [["", "mwlCalendarToday", ""]], hostBindings: function CalendarTodayDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarTodayDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { viewDate: "viewDate" }, outputs: { viewDateChange: "viewDateChange" } });


/***/ }),

/***/ 69416:
/*!************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-tooltip.directive.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarTooltipWindowComponent": function() { return /* binding */ CalendarTooltipWindowComponent; },
/* harmony export */   "CalendarTooltipDirective": function() { return /* binding */ CalendarTooltipDirective; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var positioning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! positioning */ 74853);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 50931);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 47599);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 24390);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 44094);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);






function CalendarTooltipWindowComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n    ");
} if (rf & 2) {
    const contents_r3 = ctx.contents;
    const placement_r4 = ctx.placement;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "cal-tooltip-" + placement_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", contents_r3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function CalendarTooltipWindowComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n    ");
} }
const _c0 = function (a0, a1, a2) { return { contents: a0, placement: a1, event: a2 }; };
class CalendarTooltipWindowComponent {
}
CalendarTooltipWindowComponent.ɵfac = function CalendarTooltipWindowComponent_Factory(t) { return new (t || CalendarTooltipWindowComponent)(); };
CalendarTooltipWindowComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CalendarTooltipWindowComponent, selectors: [["mwl-calendar-tooltip-window"]], inputs: { contents: "contents", placement: "placement", event: "event", customTemplate: "customTemplate" }, decls: 6, vars: 6, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-tooltip", 3, "ngClass"], [1, "cal-tooltip-arrow"], [1, "cal-tooltip-inner", 3, "innerHtml"]], template: function CalendarTooltipWindowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CalendarTooltipWindowComponent_ng_template_1_Template, 8, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CalendarTooltipWindowComponent_ng_template_4_Template, 1, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n  ");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](2, _c0, ctx.contents, ctx.placement, ctx.event));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass], encapsulation: 2 });
class CalendarTooltipDirective {
    constructor(elementRef, injector, renderer, componentFactoryResolver, viewContainerRef, document // eslint-disable-line
    ) {
        this.elementRef = elementRef;
        this.injector = injector;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.document = document;
        this.placement = 'auto'; // eslint-disable-line  @angular-eslint/no-input-rename
        this.delay = null; // eslint-disable-line  @angular-eslint/no-input-rename
        this.cancelTooltipDelay$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.tooltipFactory = componentFactoryResolver.resolveComponentFactory(CalendarTooltipWindowComponent);
    }
    ngOnChanges(changes) {
        if (this.tooltipRef &&
            (changes.contents || changes.customTemplate || changes.event)) {
            this.tooltipRef.instance.contents = this.contents;
            this.tooltipRef.instance.customTemplate = this.customTemplate;
            this.tooltipRef.instance.event = this.event;
            this.tooltipRef.changeDetectorRef.markForCheck();
            if (!this.contents) {
                this.hide();
            }
        }
    }
    ngOnDestroy() {
        this.hide();
    }
    onMouseOver() {
        const delay$ = this.delay === null ? (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)('now') : (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.timer)(this.delay);
        delay$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.cancelTooltipDelay$)).subscribe(() => {
            this.show();
        });
    }
    onMouseOut() {
        this.hide();
    }
    show() {
        if (!this.tooltipRef && this.contents) {
            this.tooltipRef = this.viewContainerRef.createComponent(this.tooltipFactory, 0, this.injector, []);
            this.tooltipRef.instance.contents = this.contents;
            this.tooltipRef.instance.customTemplate = this.customTemplate;
            this.tooltipRef.instance.event = this.event;
            if (this.appendToBody) {
                this.document.body.appendChild(this.tooltipRef.location.nativeElement);
            }
            requestAnimationFrame(() => {
                this.positionTooltip();
            });
        }
    }
    hide() {
        if (this.tooltipRef) {
            this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.tooltipRef.hostView));
            this.tooltipRef = null;
        }
        this.cancelTooltipDelay$.next();
    }
    positionTooltip(previousPositions = []) {
        if (this.tooltipRef) {
            this.tooltipRef.changeDetectorRef.detectChanges();
            this.tooltipRef.instance.placement = (0,positioning__WEBPACK_IMPORTED_MODULE_0__.positionElements)(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement.children[0], this.placement, this.appendToBody);
            // keep re-positioning the tooltip until the arrow position doesn't make a difference
            if (previousPositions.indexOf(this.tooltipRef.instance.placement) === -1) {
                this.positionTooltip([
                    ...previousPositions,
                    this.tooltipRef.instance.placement,
                ]);
            }
        }
    }
}
CalendarTooltipDirective.ɵfac = function CalendarTooltipDirective_Factory(t) { return new (t || CalendarTooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT)); };
CalendarTooltipDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CalendarTooltipDirective, selectors: [["", "mwlCalendarTooltip", ""]], hostBindings: function CalendarTooltipDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function CalendarTooltipDirective_mouseenter_HostBindingHandler() { return ctx.onMouseOver(); })("mouseleave", function CalendarTooltipDirective_mouseleave_HostBindingHandler() { return ctx.onMouseOut(); });
    } }, inputs: { contents: ["mwlCalendarTooltip", "contents"], placement: ["tooltipPlacement", "placement"], customTemplate: ["tooltipTemplate", "customTemplate"], event: ["tooltipEvent", "event"], appendToBody: ["tooltipAppendToBody", "appendToBody"], delay: ["tooltipDelay", "delay"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ 27579:
/*!*********************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-utils.provider.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarUtils": function() { return /* binding */ CalendarUtils; }
/* harmony export */ });
/* harmony import */ var calendar_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! calendar-utils */ 90489);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../date-adapters/date-adapter */ 90008);



class CalendarUtils {
    constructor(dateAdapter) {
        this.dateAdapter = dateAdapter;
    }
    getMonthView(args) {
        return (0,calendar_utils__WEBPACK_IMPORTED_MODULE_0__.getMonthView)(this.dateAdapter, args);
    }
    getWeekViewHeader(args) {
        return (0,calendar_utils__WEBPACK_IMPORTED_MODULE_0__.getWeekViewHeader)(this.dateAdapter, args);
    }
    getWeekView(args) {
        return (0,calendar_utils__WEBPACK_IMPORTED_MODULE_0__.getWeekView)(this.dateAdapter, args);
    }
}
CalendarUtils.ɵfac = function CalendarUtils_Factory(t) { return new (t || CalendarUtils)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_2__.DateAdapter)); };
CalendarUtils.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CalendarUtils, factory: CalendarUtils.ɵfac });


/***/ }),

/***/ 4606:
/*!****************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-view.enum.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarView": function() { return /* binding */ CalendarView; }
/* harmony export */ });
var CalendarView;
(function (CalendarView) {
    CalendarView["Month"] = "month";
    CalendarView["Week"] = "week";
    CalendarView["Day"] = "day";
})(CalendarView || (CalendarView = {}));


/***/ }),

/***/ 81567:
/*!*************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/click.directive.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClickDirective": function() { return /* binding */ ClickDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 50931);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 54926);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 44094);





class ClickDirective {
    constructor(renderer, elm, document) {
        this.renderer = renderer;
        this.elm = elm;
        this.document = document;
        this.clickListenerDisabled = false;
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); // eslint-disable-line
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    ngOnInit() {
        if (!this.clickListenerDisabled) {
            this.listen()
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$))
                .subscribe((event) => {
                event.stopPropagation();
                this.click.emit(event);
            });
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
    }
    listen() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable((observer) => {
            return this.renderer.listen(this.elm.nativeElement, 'click', (event) => {
                observer.next(event);
            });
        });
    }
}
ClickDirective.ɵfac = function ClickDirective_Factory(t) { return new (t || ClickDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT)); };
ClickDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ClickDirective, selectors: [["", "mwlClick", ""]], inputs: { clickListenerDisabled: "clickListenerDisabled" }, outputs: { click: "mwlClick" } });


/***/ }),

/***/ 93759:
/*!*********************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/keydown-enter.directive.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeydownEnterDirective": function() { return /* binding */ KeydownEnterDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);


class KeydownEnterDirective {
    constructor(host, ngZone, renderer) {
        this.host = host;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.keydown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); // eslint-disable-line
        this.keydownListener = null;
    }
    ngOnInit() {
        this.ngZone.runOutsideAngular(() => {
            this.keydownListener = this.renderer.listen(this.host.nativeElement, 'keydown', (event) => {
                if (event.keyCode === 13 ||
                    event.which === 13 ||
                    event.key === 'Enter') {
                    event.preventDefault();
                    event.stopPropagation();
                    this.ngZone.run(() => {
                        this.keydown.emit(event);
                    });
                }
            });
        });
    }
    ngOnDestroy() {
        if (this.keydownListener !== null) {
            this.keydownListener();
            this.keydownListener = null;
        }
    }
}
KeydownEnterDirective.ɵfac = function KeydownEnterDirective_Factory(t) { return new (t || KeydownEnterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
KeydownEnterDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: KeydownEnterDirective, selectors: [["", "mwlKeydownEnter", ""]], outputs: { keydown: "mwlKeydownEnter" } });


/***/ }),

/***/ 33878:
/*!**************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/util.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateEvents": function() { return /* binding */ validateEvents; },
/* harmony export */   "isInsideLeftAndRight": function() { return /* binding */ isInsideLeftAndRight; },
/* harmony export */   "isInside": function() { return /* binding */ isInside; },
/* harmony export */   "roundToNearest": function() { return /* binding */ roundToNearest; },
/* harmony export */   "trackByEventId": function() { return /* binding */ trackByEventId; },
/* harmony export */   "trackByWeekDayHeaderDate": function() { return /* binding */ trackByWeekDayHeaderDate; },
/* harmony export */   "trackByHourSegment": function() { return /* binding */ trackByHourSegment; },
/* harmony export */   "trackByHour": function() { return /* binding */ trackByHour; },
/* harmony export */   "trackByWeekAllDayEvent": function() { return /* binding */ trackByWeekAllDayEvent; },
/* harmony export */   "trackByWeekTimeEvent": function() { return /* binding */ trackByWeekTimeEvent; },
/* harmony export */   "getMinutesMoved": function() { return /* binding */ getMinutesMoved; },
/* harmony export */   "getDefaultEventEnd": function() { return /* binding */ getDefaultEventEnd; },
/* harmony export */   "addDaysWithExclusions": function() { return /* binding */ addDaysWithExclusions; },
/* harmony export */   "isDraggedWithinPeriod": function() { return /* binding */ isDraggedWithinPeriod; },
/* harmony export */   "shouldFireDroppedEvent": function() { return /* binding */ shouldFireDroppedEvent; },
/* harmony export */   "getWeekViewPeriod": function() { return /* binding */ getWeekViewPeriod; },
/* harmony export */   "isWithinThreshold": function() { return /* binding */ isWithinThreshold; }
/* harmony export */ });
/* harmony import */ var calendar_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! calendar-utils */ 90489);

const validateEvents = (events) => {
    const warn = (...args) => console.warn('angular-calendar', ...args);
    return (0,calendar_utils__WEBPACK_IMPORTED_MODULE_0__.validateEvents)(events, warn);
};
function isInsideLeftAndRight(outer, inner) {
    return (Math.floor(outer.left) <= Math.ceil(inner.left) &&
        Math.floor(inner.left) <= Math.ceil(outer.right) &&
        Math.floor(outer.left) <= Math.ceil(inner.right) &&
        Math.floor(inner.right) <= Math.ceil(outer.right));
}
function isInsideTopAndBottom(outer, inner) {
    return (Math.floor(outer.top) <= Math.ceil(inner.top) &&
        Math.floor(inner.top) <= Math.ceil(outer.bottom) &&
        Math.floor(outer.top) <= Math.ceil(inner.bottom) &&
        Math.floor(inner.bottom) <= Math.ceil(outer.bottom));
}
function isInside(outer, inner) {
    return (isInsideLeftAndRight(outer, inner) && isInsideTopAndBottom(outer, inner));
}
function roundToNearest(amount, precision) {
    return Math.round(amount / precision) * precision;
}
const trackByEventId = (index, event) => event.id ? event.id : event;
const trackByWeekDayHeaderDate = (index, day) => day.date.toISOString();
const trackByHourSegment = (index, segment) => segment.date.toISOString();
const trackByHour = (index, hour) => hour.segments[0].date.toISOString();
const trackByWeekAllDayEvent = (index, weekEvent) => (weekEvent.event.id ? weekEvent.event.id : weekEvent.event);
const trackByWeekTimeEvent = (index, weekEvent) => (weekEvent.event.id ? weekEvent.event.id : weekEvent.event);
const MINUTES_IN_HOUR = 60;
function getPixelAmountInMinutes(hourSegments, hourSegmentHeight, hourDuration) {
    return (hourDuration || MINUTES_IN_HOUR) / (hourSegments * hourSegmentHeight);
}
function getMinutesMoved(movedY, hourSegments, hourSegmentHeight, eventSnapSize, hourDuration) {
    const draggedInPixelsSnapSize = roundToNearest(movedY, eventSnapSize || hourSegmentHeight);
    const pixelAmountInMinutes = getPixelAmountInMinutes(hourSegments, hourSegmentHeight, hourDuration);
    return draggedInPixelsSnapSize * pixelAmountInMinutes;
}
function getDefaultEventEnd(dateAdapter, event, minimumMinutes) {
    if (event.end) {
        return event.end;
    }
    else {
        return dateAdapter.addMinutes(event.start, minimumMinutes);
    }
}
function addDaysWithExclusions(dateAdapter, date, days, excluded) {
    let daysCounter = 0;
    let daysToAdd = 0;
    const changeDays = days < 0 ? dateAdapter.subDays : dateAdapter.addDays;
    let result = date;
    while (daysToAdd <= Math.abs(days)) {
        result = changeDays(date, daysCounter);
        const day = dateAdapter.getDay(result);
        if (excluded.indexOf(day) === -1) {
            daysToAdd++;
        }
        daysCounter++;
    }
    return result;
}
function isDraggedWithinPeriod(newStart, newEnd, period) {
    const end = newEnd || newStart;
    return ((period.start <= newStart && newStart <= period.end) ||
        (period.start <= end && end <= period.end));
}
function shouldFireDroppedEvent(dropEvent, date, allDay, calendarId) {
    return (dropEvent.dropData &&
        dropEvent.dropData.event &&
        (dropEvent.dropData.calendarId !== calendarId ||
            (dropEvent.dropData.event.allDay && !allDay) ||
            (!dropEvent.dropData.event.allDay && allDay)));
}
function getWeekViewPeriod(dateAdapter, viewDate, weekStartsOn, excluded = [], daysInWeek) {
    let viewStart = daysInWeek
        ? dateAdapter.startOfDay(viewDate)
        : dateAdapter.startOfWeek(viewDate, { weekStartsOn });
    const endOfWeek = dateAdapter.endOfWeek(viewDate, { weekStartsOn });
    while (excluded.indexOf(dateAdapter.getDay(viewStart)) > -1 &&
        viewStart < endOfWeek) {
        viewStart = dateAdapter.addDays(viewStart, 1);
    }
    if (daysInWeek) {
        const viewEnd = dateAdapter.endOfDay(addDaysWithExclusions(dateAdapter, viewStart, daysInWeek - 1, excluded));
        return { viewStart, viewEnd };
    }
    else {
        let viewEnd = endOfWeek;
        while (excluded.indexOf(dateAdapter.getDay(viewEnd)) > -1 &&
            viewEnd > viewStart) {
            viewEnd = dateAdapter.subDays(viewEnd, 1);
        }
        return { viewStart, viewEnd };
    }
}
function isWithinThreshold({ x, y }) {
    const DRAG_THRESHOLD = 1;
    return Math.abs(x) > DRAG_THRESHOLD || Math.abs(y) > DRAG_THRESHOLD;
}


/***/ }),

/***/ 50811:
/*!**********************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/day/calendar-day-view.component.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarDayViewComponent": function() { return /* binding */ CalendarDayViewComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../week/calendar-week-view.component */ 1913);



/**
 * Shows all events on a given day. Example usage:
 *
 * ```typescript
 * <mwl-calendar-day-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-day-view>
 * ```
 */
class CalendarDayViewComponent {
    constructor() {
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * The number of segments in an hour. Must divide equally into 60.
         */
        this.hourSegments = 2;
        /**
         * The height in pixels of each hour segment
         */
        this.hourSegmentHeight = 30;
        /**
         * The minimum height in pixels of each event
         */
        this.minimumEventHeight = 30;
        /**
         * The day start hours in 24 hour time. Must be 0-23
         */
        this.dayStartHour = 0;
        /**
         * The day start minutes. Must be 0-59
         */
        this.dayStartMinute = 0;
        /**
         * The day end hours in 24 hour time. Must be 0-23
         */
        this.dayEndHour = 23;
        /**
         * The day end minutes. Must be 0-59
         */
        this.dayEndMinute = 59;
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
         * will be displayed immediately.
         */
        this.tooltipDelay = null;
        /**
         * Whether to snap events to a grid when dragging
         */
        this.snapDraggedEvents = true;
        /**
         * Called when an event title is clicked
         */
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Called when an hour segment is clicked
         */
        this.hourSegmentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Called when an event is resized or dragged and dropped
         */
        this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * An output that will be called before the view is rendered for the current day.
         * If you add the `cssClass` property to an hour grid segment it will add that class to the hour segment in the template
         */
        this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
}
CalendarDayViewComponent.ɵfac = function CalendarDayViewComponent_Factory(t) { return new (t || CalendarDayViewComponent)(); };
CalendarDayViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarDayViewComponent, selectors: [["mwl-calendar-day-view"]], inputs: { viewDate: "viewDate", events: "events", hourSegments: "hourSegments", hourSegmentHeight: "hourSegmentHeight", hourDuration: "hourDuration", minimumEventHeight: "minimumEventHeight", dayStartHour: "dayStartHour", dayStartMinute: "dayStartMinute", dayEndHour: "dayEndHour", dayEndMinute: "dayEndMinute", refresh: "refresh", locale: "locale", eventSnapSize: "eventSnapSize", tooltipPlacement: "tooltipPlacement", tooltipTemplate: "tooltipTemplate", tooltipAppendToBody: "tooltipAppendToBody", tooltipDelay: "tooltipDelay", hourSegmentTemplate: "hourSegmentTemplate", eventTemplate: "eventTemplate", eventTitleTemplate: "eventTitleTemplate", eventActionsTemplate: "eventActionsTemplate", snapDraggedEvents: "snapDraggedEvents", allDayEventsLabelTemplate: "allDayEventsLabelTemplate", currentTimeMarkerTemplate: "currentTimeMarkerTemplate", validateEventTimesChanged: "validateEventTimesChanged" }, outputs: { eventClicked: "eventClicked", hourSegmentClicked: "hourSegmentClicked", eventTimesChanged: "eventTimesChanged", beforeViewRender: "beforeViewRender" }, decls: 3, vars: 26, consts: [[1, "cal-day-view", 3, "daysInWeek", "viewDate", "events", "hourSegments", "hourDuration", "hourSegmentHeight", "minimumEventHeight", "dayStartHour", "dayStartMinute", "dayEndHour", "dayEndMinute", "refresh", "locale", "eventSnapSize", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "hourSegmentTemplate", "eventTemplate", "eventTitleTemplate", "eventActionsTemplate", "snapDraggedEvents", "allDayEventsLabelTemplate", "currentTimeMarkerTemplate", "validateEventTimesChanged", "eventClicked", "hourSegmentClicked", "eventTimesChanged", "beforeViewRender"]], template: function CalendarDayViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mwl-calendar-week-view", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventClicked", function CalendarDayViewComponent_Template_mwl_calendar_week_view_eventClicked_1_listener($event) { return ctx.eventClicked.emit($event); })("hourSegmentClicked", function CalendarDayViewComponent_Template_mwl_calendar_week_view_hourSegmentClicked_1_listener($event) { return ctx.hourSegmentClicked.emit($event); })("eventTimesChanged", function CalendarDayViewComponent_Template_mwl_calendar_week_view_eventTimesChanged_1_listener($event) { return ctx.eventTimesChanged.emit($event); })("beforeViewRender", function CalendarDayViewComponent_Template_mwl_calendar_week_view_beforeViewRender_1_listener($event) { return ctx.beforeViewRender.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n  ");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("daysInWeek", 1)("viewDate", ctx.viewDate)("events", ctx.events)("hourSegments", ctx.hourSegments)("hourDuration", ctx.hourDuration)("hourSegmentHeight", ctx.hourSegmentHeight)("minimumEventHeight", ctx.minimumEventHeight)("dayStartHour", ctx.dayStartHour)("dayStartMinute", ctx.dayStartMinute)("dayEndHour", ctx.dayEndHour)("dayEndMinute", ctx.dayEndMinute)("refresh", ctx.refresh)("locale", ctx.locale)("eventSnapSize", ctx.eventSnapSize)("tooltipPlacement", ctx.tooltipPlacement)("tooltipTemplate", ctx.tooltipTemplate)("tooltipAppendToBody", ctx.tooltipAppendToBody)("tooltipDelay", ctx.tooltipDelay)("hourSegmentTemplate", ctx.hourSegmentTemplate)("eventTemplate", ctx.eventTemplate)("eventTitleTemplate", ctx.eventTitleTemplate)("eventActionsTemplate", ctx.eventActionsTemplate)("snapDraggedEvents", ctx.snapDraggedEvents)("allDayEventsLabelTemplate", ctx.allDayEventsLabelTemplate)("currentTimeMarkerTemplate", ctx.currentTimeMarkerTemplate)("validateEventTimesChanged", ctx.validateEventTimesChanged);
    } }, directives: [_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_1__.CalendarWeekViewComponent], encapsulation: 2 });


/***/ }),

/***/ 88533:
/*!**************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/day/calendar-day.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarDayViewComponent": function() { return /* reexport safe */ _calendar_day_view_component__WEBPACK_IMPORTED_MODULE_0__.CalendarDayViewComponent; },
/* harmony export */   "CalendarDayModule": function() { return /* binding */ CalendarDayModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _calendar_day_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-day-view.component */ 50811);
/* harmony import */ var _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/calendar-common.module */ 67400);
/* harmony import */ var _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../week/calendar-week.module */ 47175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);






class CalendarDayModule {
}
CalendarDayModule.ɵfac = function CalendarDayModule_Factory(t) { return new (t || CalendarDayModule)(); };
CalendarDayModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CalendarDayModule });
CalendarDayModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_3__.CalendarCommonModule, _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_4__.CalendarWeekModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CalendarDayModule, { declarations: [_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_0__.CalendarDayViewComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_3__.CalendarCommonModule, _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_4__.CalendarWeekModule], exports: [_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_0__.CalendarDayViewComponent] }); })();


/***/ }),

/***/ 68161:
/*!**************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/month/calendar-month-cell.component.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarMonthCellComponent": function() { return /* binding */ CalendarMonthCellComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util */ 33878);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-draggable-droppable */ 42915);
/* harmony import */ var _common_calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/calendar-tooltip.directive */ 69416);
/* harmony import */ var _common_click_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/click.directive */ 81567);
/* harmony import */ var _common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/calendar-a11y.pipe */ 62479);
/* harmony import */ var _common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/calendar-date.pipe */ 12153);
/* harmony import */ var _common_calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/calendar-event-title.pipe */ 44602);










function CalendarMonthCellComponent_ng_template_1_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().day;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](day_r3.badgeTotal);
} }
const _c0 = function (a0) { return { backgroundColor: a0 }; };
const _c1 = function (a0, a1) { return { event: a0, draggedFrom: a1 }; };
const _c2 = function (a0, a1) { return { x: a0, y: a1 }; };
const _c3 = function () { return { delay: 300, delta: 30 }; };
const _c4 = function () { return {}; };
function CalendarMonthCellComponent_ng_template_1_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function CalendarMonthCellComponent_ng_template_1_div_14_div_2_Template_div_mouseenter_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const event_r19 = restoredCtx.$implicit; const highlightDay_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).highlightDay; return highlightDay_r7.emit({ event: event_r19 }); })("mouseleave", function CalendarMonthCellComponent_ng_template_1_div_14_div_2_Template_div_mouseleave_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const event_r19 = restoredCtx.$implicit; const unhighlightDay_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).unhighlightDay; return unhighlightDay_r8.emit({ event: event_r19 }); })("mwlClick", function CalendarMonthCellComponent_ng_template_1_div_14_div_2_Template_div_mwlClick_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const event_r19 = restoredCtx.$implicit; const eventClicked_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).eventClicked; return eventClicked_r9.emit({ event: event_r19, sourceEvent: $event }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "calendarEventTitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r19 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const tooltipPlacement_r6 = ctx_r27.tooltipPlacement;
    const tooltipTemplate_r10 = ctx_r27.tooltipTemplate;
    const tooltipAppendToBody_r11 = ctx_r27.tooltipAppendToBody;
    const tooltipDelay_r12 = ctx_r27.tooltipDelay;
    const day_r3 = ctx_r27.day;
    const validateDrag_r14 = ctx_r27.validateDrag;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cal-draggable", event_r19.draggable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, event_r19.color == null ? null : event_r19.color.primary))("ngClass", event_r19 == null ? null : event_r19.cssClass)("mwlCalendarTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](1, 15, event_r19.title, "monthTooltip", event_r19))("tooltipPlacement", tooltipPlacement_r6)("tooltipEvent", event_r19)("tooltipTemplate", tooltipTemplate_r10)("tooltipAppendToBody", tooltipAppendToBody_r11)("tooltipDelay", tooltipDelay_r12)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](24, _c1, event_r19, day_r3))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](27, _c2, event_r19.draggable, event_r19.draggable))("validateDrag", validateDrag_r14)("touchStartLongPress", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c4), "hideMonthCellEvents"));
} }
function CalendarMonthCellComponent_ng_template_1_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CalendarMonthCellComponent_ng_template_1_div_14_div_2_Template, 3, 32, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const day_r3 = ctx_r28.day;
    const trackByEventId_r13 = ctx_r28.trackByEventId;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", day_r3.events)("ngForTrackBy", trackByEventId_r13);
} }
const _c5 = function (a0, a1) { return { day: a0, locale: a1 }; };
function CalendarMonthCellComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CalendarMonthCellComponent_ng_template_1_span_6_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "calendarDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CalendarMonthCellComponent_ng_template_1_div_14_Template, 4, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n    ");
} if (rf & 2) {
    const day_r3 = ctx.day;
    const locale_r5 = ctx.locale;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c5, day_r3, locale_r5), "monthCell"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", day_r3.badgeTotal > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](10, 7, day_r3.date, "monthViewDayNumber", locale_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", day_r3.events.length > 0);
} }
function CalendarMonthCellComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
} }
const _c6 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) { return { day: a0, openDay: a1, locale: a2, tooltipPlacement: a3, highlightDay: a4, unhighlightDay: a5, eventClicked: a6, tooltipTemplate: a7, tooltipAppendToBody: a8, tooltipDelay: a9, trackByEventId: a10, validateDrag: a11 }; };
class CalendarMonthCellComponent {
    constructor() {
        this.highlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.unhighlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.trackByEventId = _common_util__WEBPACK_IMPORTED_MODULE_1__.trackByEventId;
        this.validateDrag = _common_util__WEBPACK_IMPORTED_MODULE_1__.isWithinThreshold;
    }
}
CalendarMonthCellComponent.ɵfac = function CalendarMonthCellComponent_Factory(t) { return new (t || CalendarMonthCellComponent)(); };
CalendarMonthCellComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarMonthCellComponent, selectors: [["mwl-calendar-month-cell"]], hostAttrs: [1, "cal-cell", "cal-day-cell"], hostVars: 18, hostBindings: function CalendarMonthCellComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cal-past", ctx.day.isPast)("cal-today", ctx.day.isToday)("cal-future", ctx.day.isFuture)("cal-weekend", ctx.day.isWeekend)("cal-in-month", ctx.day.inMonth)("cal-out-month", !ctx.day.inMonth)("cal-has-events", ctx.day.events.length > 0)("cal-open", ctx.day === ctx.openDay)("cal-event-highlight", !!ctx.day.backgroundColor);
    } }, inputs: { day: "day", openDay: "openDay", locale: "locale", tooltipPlacement: "tooltipPlacement", tooltipAppendToBody: "tooltipAppendToBody", customTemplate: "customTemplate", tooltipTemplate: "tooltipTemplate", tooltipDelay: "tooltipDelay" }, outputs: { highlightDay: "highlightDay", unhighlightDay: "unhighlightDay", eventClicked: "eventClicked" }, decls: 6, vars: 15, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-cell-top"], ["aria-hidden", "true"], ["class", "cal-day-badge", 4, "ngIf"], [1, "cal-day-number"], ["class", "cal-events", 4, "ngIf"], [1, "cal-day-badge"], [1, "cal-events"], ["class", "cal-event", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngStyle", "ngClass", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "cal-draggable", "dropData", "dragAxis", "validateDrag", "touchStartLongPress", "mouseenter", "mouseleave", "mwlClick", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event", 3, "ngStyle", "ngClass", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "dropData", "dragAxis", "validateDrag", "touchStartLongPress", "mouseenter", "mouseleave", "mwlClick"]], template: function CalendarMonthCellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarMonthCellComponent_ng_template_1_Template, 16, 14, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarMonthCellComponent_ng_template_4_Template, 1, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunctionV"](2, _c6, [ctx.day, ctx.openDay, ctx.locale, ctx.tooltipPlacement, ctx.highlightDay, ctx.unhighlightDay, ctx.eventClicked, ctx.tooltipTemplate, ctx.tooltipAppendToBody, ctx.tooltipDelay, ctx.trackByEventId, ctx.validateDrag]));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_3__.DraggableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _common_calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__.CalendarTooltipDirective, _common_click_directive__WEBPACK_IMPORTED_MODULE_5__.ClickDirective], pipes: [_common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_6__.CalendarA11yPipe, _common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_7__.CalendarDatePipe, _common_calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_8__.CalendarEventTitlePipe], encapsulation: 2 });


/***/ }),

/***/ 38818:
/*!*********************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/month/calendar-month-view-header.component.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarMonthViewHeaderComponent": function() { return /* binding */ CalendarMonthViewHeaderComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util */ 33878);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/calendar-date.pipe */ 12153);





function CalendarMonthViewHeaderComponent_ng_template_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarMonthViewHeaderComponent_ng_template_1_div_3_Template_div_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const day_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.columnHeaderClicked.emit({ isoDayNumber: day_r7.day, sourceEvent: $event }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "calendarDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r7 = ctx.$implicit;
    const locale_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().locale;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cal-past", day_r7.isPast)("cal-today", day_r7.isToday)("cal-future", day_r7.isFuture)("cal-weekend", day_r7.isWeekend);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", day_r7.cssClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n          ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 10, day_r7.date, "monthViewColumnHeader", locale_r4), "\n        ");
} }
function CalendarMonthViewHeaderComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CalendarMonthViewHeaderComponent_ng_template_1_div_3_Template, 3, 14, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    ");
} if (rf & 2) {
    const days_r3 = ctx.days;
    const trackByWeekDayHeaderDate_r5 = ctx.trackByWeekDayHeaderDate;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", days_r3)("ngForTrackBy", trackByWeekDayHeaderDate_r5);
} }
function CalendarMonthViewHeaderComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
} }
const _c0 = function (a0, a1, a2) { return { days: a0, locale: a1, trackByWeekDayHeaderDate: a2 }; };
class CalendarMonthViewHeaderComponent {
    constructor() {
        this.columnHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.trackByWeekDayHeaderDate = _common_util__WEBPACK_IMPORTED_MODULE_1__.trackByWeekDayHeaderDate;
    }
}
CalendarMonthViewHeaderComponent.ɵfac = function CalendarMonthViewHeaderComponent_Factory(t) { return new (t || CalendarMonthViewHeaderComponent)(); };
CalendarMonthViewHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarMonthViewHeaderComponent, selectors: [["mwl-calendar-month-view-header"]], inputs: { days: "days", locale: "locale", customTemplate: "customTemplate" }, outputs: { columnHeaderClicked: "columnHeaderClicked" }, decls: 6, vars: 6, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "row", 1, "cal-cell-row", "cal-header"], ["class", "cal-cell", "tabindex", "0", "role", "columnheader", 3, "cal-past", "cal-today", "cal-future", "cal-weekend", "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "0", "role", "columnheader", 1, "cal-cell", 3, "ngClass", "click"]], template: function CalendarMonthViewHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarMonthViewHeaderComponent_ng_template_1_Template, 6, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarMonthViewHeaderComponent_ng_template_4_Template, 1, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, ctx.days, ctx.locale, ctx.trackByWeekDayHeaderDate));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass], pipes: [_common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_3__.CalendarDatePipe], encapsulation: 2 });


/***/ }),

/***/ 21426:
/*!**************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/month/calendar-month-view.component.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarMonthViewComponent": function() { return /* binding */ CalendarMonthViewComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/calendar-event-times-changed-event.interface */ 91203);
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util */ 33878);
/* harmony import */ var _common_calendar_utils_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/calendar-utils.provider */ 27579);
/* harmony import */ var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../date-adapters/date-adapter */ 90008);
/* harmony import */ var _calendar_month_view_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar-month-view-header.component */ 38818);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _calendar_open_day_events_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calendar-open-day-events.component */ 33473);
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-draggable-droppable */ 42915);
/* harmony import */ var _calendar_month_cell_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calendar-month-cell.component */ 68161);
/* harmony import */ var _common_click_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/click.directive */ 81567);
/* harmony import */ var _common_keydown_enter_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/keydown-enter.directive */ 93759);
/* harmony import */ var _common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/calendar-a11y.pipe */ 62479);














const _c0 = function (a0) { return { backgroundColor: a0 }; };
const _c1 = function () { return {}; };
function CalendarMonthViewComponent_div_8_mwl_calendar_month_cell_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-month-cell", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mwlClick", function CalendarMonthViewComponent_div_8_mwl_calendar_month_cell_4_Template_mwl_calendar_month_cell_mwlClick_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const day_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.dayClicked.emit({ day: day_r3, sourceEvent: $event }); })("mwlKeydownEnter", function CalendarMonthViewComponent_div_8_mwl_calendar_month_cell_4_Template_mwl_calendar_month_cell_mwlKeydownEnter_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const day_r3 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.dayClicked.emit({ day: day_r3, sourceEvent: $event }); })("highlightDay", function CalendarMonthViewComponent_div_8_mwl_calendar_month_cell_4_Template_mwl_calendar_month_cell_highlightDay_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.toggleDayHighlight($event.event, true); })("unhighlightDay", function CalendarMonthViewComponent_div_8_mwl_calendar_month_cell_4_Template_mwl_calendar_month_cell_unhighlightDay_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.toggleDayHighlight($event.event, false); })("drop", function CalendarMonthViewComponent_div_8_mwl_calendar_month_cell_4_Template_mwl_calendar_month_cell_drop_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const day_r3 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.eventDropped(day_r3, $event.dropData.event, $event.dropData.draggedFrom); })("eventClicked", function CalendarMonthViewComponent_div_8_mwl_calendar_month_cell_4_Template_mwl_calendar_month_cell_eventClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.eventClicked.emit({ event: $event.event, sourceEvent: $event.sourceEvent }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", day_r3 == null ? null : day_r3.cssClass)("day", day_r3)("openDay", ctx_r2.openDay)("locale", ctx_r2.locale)("tooltipPlacement", ctx_r2.tooltipPlacement)("tooltipAppendToBody", ctx_r2.tooltipAppendToBody)("tooltipTemplate", ctx_r2.tooltipTemplate)("tooltipDelay", ctx_r2.tooltipDelay)("customTemplate", ctx_r2.cellTemplate)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, day_r3.backgroundColor))("clickListenerDisabled", ctx_r2.dayClicked.observers.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1), "monthCellTabIndex"));
} }
function CalendarMonthViewComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarMonthViewComponent_div_8_mwl_calendar_month_cell_4_Template, 3, 18, "mwl-calendar-month-cell", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mwl-calendar-open-day-events", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventClicked", function CalendarMonthViewComponent_div_8_Template_mwl_calendar_open_day_events_eventClicked_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.eventClicked.emit({ event: $event.event, sourceEvent: $event.sourceEvent }); })("drop", function CalendarMonthViewComponent_div_8_Template_mwl_calendar_open_day_events_drop_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.eventDropped(ctx_r13.openDay, $event.dropData.event, $event.dropData.draggedFrom); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowIndex_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 9, ctx_r0.view.days, rowIndex_r1, rowIndex_r1 + ctx_r0.view.totalDaysVisibleInWeek))("ngForTrackBy", ctx_r0.trackByDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("locale", ctx_r0.locale)("isOpen", ctx_r0.openRowIndex === rowIndex_r1)("events", ctx_r0.openDay == null ? null : ctx_r0.openDay.events)("date", ctx_r0.openDay == null ? null : ctx_r0.openDay.date)("customTemplate", ctx_r0.openDayEventsTemplate)("eventTitleTemplate", ctx_r0.eventTitleTemplate)("eventActionsTemplate", ctx_r0.eventActionsTemplate);
} }
/**
 * Shows all events on a given month. Example usage:
 *
 * ```typescript
 * <mwl-calendar-month-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-month-view>
 * ```
 */
class CalendarMonthViewComponent {
    /**
     * @hidden
     */
    constructor(cdr, utils, locale, dateAdapter) {
        this.cdr = cdr;
        this.utils = utils;
        this.dateAdapter = dateAdapter;
        /**
         * An array of events to display on view.
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */
        this.excludeDays = [];
        /**
         * Whether the events list for the day of the `viewDate` option is visible or not
         */
        this.activeDayIsOpen = false;
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
         * will be displayed immediately.
         */
        this.tooltipDelay = null;
        /**
         * An output that will be called before the view is rendered for the current month.
         * If you add the `cssClass` property to a day in the body it will add that class to the cell element in the template
         */
        this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Called when the day cell is clicked
         */
        this.dayClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Called when the event title is clicked
         */
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Called when a header week day is clicked. Returns ISO day number.
         */
        this.columnHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Called when an event is dragged and dropped
         */
        this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * @hidden
         */
        this.trackByRowOffset = (index, offset) => this.view.days
            .slice(offset, this.view.totalDaysVisibleInWeek)
            .map((day) => day.date.toISOString())
            .join('-');
        /**
         * @hidden
         */
        this.trackByDate = (index, day) => day.date.toISOString();
        this.locale = locale;
    }
    /**
     * @hidden
     */
    ngOnInit() {
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(() => {
                this.refreshAll();
                this.cdr.markForCheck();
            });
        }
    }
    /**
     * @hidden
     */
    ngOnChanges(changes) {
        const refreshHeader = changes.viewDate || changes.excludeDays || changes.weekendDays;
        const refreshBody = changes.viewDate ||
            changes.events ||
            changes.excludeDays ||
            changes.weekendDays;
        if (refreshHeader) {
            this.refreshHeader();
        }
        if (changes.events) {
            (0,_common_util__WEBPACK_IMPORTED_MODULE_1__.validateEvents)(this.events);
        }
        if (refreshBody) {
            this.refreshBody();
        }
        if (refreshHeader || refreshBody) {
            this.emitBeforeViewRender();
        }
        if (changes.activeDayIsOpen ||
            changes.viewDate ||
            changes.events ||
            changes.excludeDays ||
            changes.activeDay) {
            this.checkActiveDayIsOpen();
        }
    }
    /**
     * @hidden
     */
    ngOnDestroy() {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    }
    /**
     * @hidden
     */
    toggleDayHighlight(event, isHighlighted) {
        this.view.days.forEach((day) => {
            if (isHighlighted && day.events.indexOf(event) > -1) {
                day.backgroundColor =
                    (event.color && event.color.secondary) || '#D1E8FF';
            }
            else {
                delete day.backgroundColor;
            }
        });
    }
    /**
     * @hidden
     */
    eventDropped(droppedOn, event, draggedFrom) {
        if (droppedOn !== draggedFrom) {
            const year = this.dateAdapter.getYear(droppedOn.date);
            const month = this.dateAdapter.getMonth(droppedOn.date);
            const date = this.dateAdapter.getDate(droppedOn.date);
            const newStart = this.dateAdapter.setDate(this.dateAdapter.setMonth(this.dateAdapter.setYear(event.start, year), month), date);
            let newEnd;
            if (event.end) {
                const secondsDiff = this.dateAdapter.differenceInSeconds(newStart, event.start);
                newEnd = this.dateAdapter.addSeconds(event.end, secondsDiff);
            }
            this.eventTimesChanged.emit({
                event,
                newStart,
                newEnd,
                day: droppedOn,
                type: _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_2__.CalendarEventTimesChangedEventType.Drop,
            });
        }
    }
    refreshHeader() {
        this.columnHeaders = this.utils.getWeekViewHeader({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays,
        });
    }
    refreshBody() {
        this.view = this.utils.getMonthView({
            events: this.events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays,
        });
    }
    checkActiveDayIsOpen() {
        if (this.activeDayIsOpen === true) {
            const activeDay = this.activeDay || this.viewDate;
            this.openDay = this.view.days.find((day) => this.dateAdapter.isSameDay(day.date, activeDay));
            const index = this.view.days.indexOf(this.openDay);
            this.openRowIndex =
                Math.floor(index / this.view.totalDaysVisibleInWeek) *
                    this.view.totalDaysVisibleInWeek;
        }
        else {
            this.openRowIndex = null;
            this.openDay = null;
        }
    }
    refreshAll() {
        this.refreshHeader();
        this.refreshBody();
        this.emitBeforeViewRender();
        this.checkActiveDayIsOpen();
    }
    emitBeforeViewRender() {
        if (this.columnHeaders && this.view) {
            this.beforeViewRender.emit({
                header: this.columnHeaders,
                body: this.view.days,
                period: this.view.period,
            });
        }
    }
}
CalendarMonthViewComponent.ɵfac = function CalendarMonthViewComponent_Factory(t) { return new (t || CalendarMonthViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_calendar_utils_provider__WEBPACK_IMPORTED_MODULE_3__.CalendarUtils), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_4__.DateAdapter)); };
CalendarMonthViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarMonthViewComponent, selectors: [["mwl-calendar-month-view"]], inputs: { viewDate: "viewDate", events: "events", excludeDays: "excludeDays", activeDayIsOpen: "activeDayIsOpen", activeDay: "activeDay", refresh: "refresh", locale: "locale", tooltipPlacement: "tooltipPlacement", tooltipTemplate: "tooltipTemplate", tooltipAppendToBody: "tooltipAppendToBody", tooltipDelay: "tooltipDelay", weekStartsOn: "weekStartsOn", headerTemplate: "headerTemplate", cellTemplate: "cellTemplate", openDayEventsTemplate: "openDayEventsTemplate", eventTitleTemplate: "eventTitleTemplate", eventActionsTemplate: "eventActionsTemplate", weekendDays: "weekendDays" }, outputs: { beforeViewRender: "beforeViewRender", dayClicked: "dayClicked", eventClicked: "eventClicked", columnHeaderClicked: "columnHeaderClicked", eventTimesChanged: "eventTimesChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 12, vars: 5, consts: [["role", "grid", 1, "cal-month-view"], [3, "days", "locale", "customTemplate", "columnHeaderClicked"], [1, "cal-days"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row", 1, "cal-cell-row"], ["role", "gridcell", "mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "ngClass", "day", "openDay", "locale", "tooltipPlacement", "tooltipAppendToBody", "tooltipTemplate", "tooltipDelay", "customTemplate", "ngStyle", "clickListenerDisabled", "mwlClick", "mwlKeydownEnter", "highlightDay", "unhighlightDay", "drop", "eventClicked", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "locale", "isOpen", "events", "date", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "eventClicked", "drop"], ["role", "gridcell", "mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "ngClass", "day", "openDay", "locale", "tooltipPlacement", "tooltipAppendToBody", "tooltipTemplate", "tooltipDelay", "customTemplate", "ngStyle", "clickListenerDisabled", "mwlClick", "mwlKeydownEnter", "highlightDay", "unhighlightDay", "drop", "eventClicked"]], template: function CalendarMonthViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mwl-calendar-month-view-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("columnHeaderClicked", function CalendarMonthViewComponent_Template_mwl_calendar_month_view_header_columnHeaderClicked_3_listener($event) { return ctx.columnHeaderClicked.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CalendarMonthViewComponent_div_8_Template, 11, 13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n  ");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("days", ctx.columnHeaders)("locale", ctx.locale)("customTemplate", ctx.headerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.view.rowOffsets)("ngForTrackBy", ctx.trackByRowOffset);
    } }, directives: [_calendar_month_view_header_component__WEBPACK_IMPORTED_MODULE_5__.CalendarMonthViewHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _calendar_open_day_events_component__WEBPACK_IMPORTED_MODULE_7__.CalendarOpenDayEventsComponent, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_8__.DroppableDirective, _calendar_month_cell_component__WEBPACK_IMPORTED_MODULE_9__.CalendarMonthCellComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, _common_click_directive__WEBPACK_IMPORTED_MODULE_10__.ClickDirective, _common_keydown_enter_directive__WEBPACK_IMPORTED_MODULE_11__.KeydownEnterDirective], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.SlicePipe, _common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_12__.CalendarA11yPipe], encapsulation: 2 });


/***/ }),

/***/ 5465:
/*!******************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/month/calendar-month.module.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarMonthViewComponent": function() { return /* reexport safe */ _calendar_month_view_component__WEBPACK_IMPORTED_MODULE_0__.CalendarMonthViewComponent; },
/* harmony export */   "collapseAnimation": function() { return /* reexport safe */ _calendar_open_day_events_component__WEBPACK_IMPORTED_MODULE_1__.collapseAnimation; },
/* harmony export */   "ɵCalendarMonthCellComponent": function() { return /* reexport safe */ _calendar_month_cell_component__WEBPACK_IMPORTED_MODULE_2__.CalendarMonthCellComponent; },
/* harmony export */   "ɵCalendarMonthViewHeaderComponent": function() { return /* reexport safe */ _calendar_month_view_header_component__WEBPACK_IMPORTED_MODULE_3__.CalendarMonthViewHeaderComponent; },
/* harmony export */   "ɵCalendarOpenDayEventsComponent": function() { return /* reexport safe */ _calendar_open_day_events_component__WEBPACK_IMPORTED_MODULE_1__.CalendarOpenDayEventsComponent; },
/* harmony export */   "CalendarMonthModule": function() { return /* binding */ CalendarMonthModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-draggable-droppable */ 42915);
/* harmony import */ var _calendar_month_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-month-view.component */ 21426);
/* harmony import */ var _calendar_month_view_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar-month-view-header.component */ 38818);
/* harmony import */ var _calendar_month_cell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar-month-cell.component */ 68161);
/* harmony import */ var _calendar_open_day_events_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar-open-day-events.component */ 33473);
/* harmony import */ var _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/calendar-common.module */ 67400);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);










// needed for ivy, not part of the public api



class CalendarMonthModule {
}
CalendarMonthModule.ɵfac = function CalendarMonthModule_Factory(t) { return new (t || CalendarMonthModule)(); };
CalendarMonthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CalendarMonthModule });
CalendarMonthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__.DragAndDropModule, _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_7__.CalendarCommonModule], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__.DragAndDropModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CalendarMonthModule, { declarations: [_calendar_month_view_component__WEBPACK_IMPORTED_MODULE_0__.CalendarMonthViewComponent,
        _calendar_month_cell_component__WEBPACK_IMPORTED_MODULE_2__.CalendarMonthCellComponent,
        _calendar_open_day_events_component__WEBPACK_IMPORTED_MODULE_1__.CalendarOpenDayEventsComponent,
        _calendar_month_view_header_component__WEBPACK_IMPORTED_MODULE_3__.CalendarMonthViewHeaderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__.DragAndDropModule, _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_7__.CalendarCommonModule], exports: [angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__.DragAndDropModule,
        _calendar_month_view_component__WEBPACK_IMPORTED_MODULE_0__.CalendarMonthViewComponent,
        _calendar_month_cell_component__WEBPACK_IMPORTED_MODULE_2__.CalendarMonthCellComponent,
        _calendar_open_day_events_component__WEBPACK_IMPORTED_MODULE_1__.CalendarOpenDayEventsComponent,
        _calendar_month_view_header_component__WEBPACK_IMPORTED_MODULE_3__.CalendarMonthViewHeaderComponent] }); })();


/***/ }),

/***/ 33473:
/*!*******************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/month/calendar-open-day-events.component.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "collapseAnimation": function() { return /* binding */ collapseAnimation; },
/* harmony export */   "CalendarOpenDayEventsComponent": function() { return /* binding */ CalendarOpenDayEventsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 97175);
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util */ 33878);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-draggable-droppable */ 42915);
/* harmony import */ var _common_calendar_event_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/calendar-event-title.component */ 58974);
/* harmony import */ var _common_click_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/click.directive */ 81567);
/* harmony import */ var _common_keydown_enter_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/keydown-enter.directive */ 93759);
/* harmony import */ var _common_calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/calendar-event-actions.component */ 32136);
/* harmony import */ var _common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/calendar-a11y.pipe */ 62479);











const _c0 = function (a0) { return { event: a0 }; };
const _c1 = function (a0, a1) { return { x: a0, y: a1 }; };
const _c2 = function () { return { delay: 300, delta: 30 }; };
const _c3 = function (a0) { return { backgroundColor: a0 }; };
const _c4 = function (a0, a1) { return { event: a0, locale: a1 }; };
function CalendarOpenDayEventsComponent_ng_template_1_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n           \n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mwl-calendar-event-title", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mwlClick", function CalendarOpenDayEventsComponent_ng_template_1_div_1_div_8_Template_mwl_calendar_event_title_mwlClick_5_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const event_r10 = restoredCtx.$implicit; const eventClicked_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).eventClicked; return eventClicked_r4.emit({ event: event_r10, sourceEvent: $event }); })("mwlKeydownEnter", function CalendarOpenDayEventsComponent_ng_template_1_div_1_div_8_Template_mwl_calendar_event_title_mwlKeydownEnter_5_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const event_r10 = restoredCtx.$implicit; const eventClicked_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).eventClicked; return eventClicked_r4.emit({ event: event_r10, sourceEvent: $event }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n           \n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mwl-calendar-event-actions", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r10 = ctx.$implicit;
    const validateDrag_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).validateDrag;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cal-draggable", event_r10.draggable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", event_r10 == null ? null : event_r10.cssClass)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, event_r10))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c1, event_r10.draggable, event_r10.draggable))("validateDrag", validateDrag_r7)("touchStartLongPress", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c3, event_r10.color == null ? null : event_r10.color.primary));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", event_r10)("customTemplate", ctx_r9.eventTitleTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](24, _c4, event_r10, ctx_r9.locale), "eventDescription"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", event_r10)("customTemplate", ctx_r9.eventActionsTemplate);
} }
const _c5 = function (a0, a1) { return { date: a0, locale: a1 }; };
function CalendarOpenDayEventsComponent_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CalendarOpenDayEventsComponent_ng_template_1_div_1_div_8_Template, 12, 27, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const events_r3 = ctx_r17.events;
    const trackByEventId_r6 = ctx_r17.trackByEventId;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@collapse", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c5, ctx_r8.date, ctx_r8.locale), "openDayEventsAlert"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c5, ctx_r8.date, ctx_r8.locale), "openDayEventsLandmark"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", events_r3)("ngForTrackBy", trackByEventId_r6);
} }
function CalendarOpenDayEventsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarOpenDayEventsComponent_ng_template_1_div_1_Template, 10, 17, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n    ");
} if (rf & 2) {
    const isOpen_r5 = ctx.isOpen;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isOpen_r5);
} }
function CalendarOpenDayEventsComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
} }
const _c6 = function (a0, a1, a2, a3, a4) { return { events: a0, eventClicked: a1, isOpen: a2, trackByEventId: a3, validateDrag: a4 }; };
const collapseAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('collapse', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
        height: 0,
        overflow: 'hidden',
        'padding-top': 0,
        'padding-bottom': 0,
    })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
        height: '*',
        overflow: 'hidden',
        'padding-top': '*',
        'padding-bottom': '*',
    })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('150ms ease-out')),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('150ms ease-in')),
]);
class CalendarOpenDayEventsComponent {
    constructor() {
        this.isOpen = false;
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.trackByEventId = _common_util__WEBPACK_IMPORTED_MODULE_2__.trackByEventId;
        this.validateDrag = _common_util__WEBPACK_IMPORTED_MODULE_2__.isWithinThreshold;
    }
}
CalendarOpenDayEventsComponent.ɵfac = function CalendarOpenDayEventsComponent_Factory(t) { return new (t || CalendarOpenDayEventsComponent)(); };
CalendarOpenDayEventsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarOpenDayEventsComponent, selectors: [["mwl-calendar-open-day-events"]], inputs: { locale: "locale", isOpen: "isOpen", events: "events", customTemplate: "customTemplate", eventTitleTemplate: "eventTitleTemplate", eventActionsTemplate: "eventActionsTemplate", date: "date" }, outputs: { eventClicked: "eventClicked" }, decls: 6, vars: 8, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-open-day-events", "role", "application", 4, "ngIf"], ["role", "application", 1, "cal-open-day-events"], ["tabindex", "-1", "role", "alert"], ["tabindex", "0", "role", "landmark"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngClass", "cal-draggable", "dropData", "dragAxis", "validateDrag", "touchStartLongPress", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngClass", "dropData", "dragAxis", "validateDrag", "touchStartLongPress"], [1, "cal-event", 3, "ngStyle"], ["view", "month", "tabindex", "0", 3, "event", "customTemplate", "mwlClick", "mwlKeydownEnter"], [3, "event", "customTemplate"]], template: function CalendarOpenDayEventsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarOpenDayEventsComponent_ng_template_1_Template, 3, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarOpenDayEventsComponent_ng_template_4_Template, 1, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](2, _c6, ctx.events, ctx.eventClicked, ctx.isOpen, ctx.trackByEventId, ctx.validateDrag));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_4__.DraggableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _common_calendar_event_title_component__WEBPACK_IMPORTED_MODULE_5__.CalendarEventTitleComponent, _common_click_directive__WEBPACK_IMPORTED_MODULE_6__.ClickDirective, _common_keydown_enter_directive__WEBPACK_IMPORTED_MODULE_7__.KeydownEnterDirective, _common_calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_8__.CalendarEventActionsComponent], pipes: [_common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_9__.CalendarA11yPipe], encapsulation: 2, data: { animation: [collapseAnimation] } });


/***/ }),

/***/ 6556:
/*!********************************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/week/calendar-week-view-current-time-marker.component.ts ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarWeekViewCurrentTimeMarkerComponent": function() { return /* binding */ CalendarWeekViewCurrentTimeMarkerComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 69606);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 48657);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 98578);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 57993);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 23669);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 49005);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../date-adapters/date-adapter */ 90008);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);





function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
} if (rf & 2) {
    const topPx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().topPx;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", topPx_r9, "px");
} }
function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_1_div_1_Template, 1, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n    ");
} if (rf & 2) {
    const isVisible_r8 = ctx.isVisible;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isVisible_r8);
} }
function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
} }
const _c0 = function (a0, a1, a2, a3, a4, a5, a6) { return { columnDate: a0, dayStartHour: a1, dayStartMinute: a2, dayEndHour: a3, dayEndMinute: a4, isVisible: a5, topPx: a6 }; };
class CalendarWeekViewCurrentTimeMarkerComponent {
    constructor(dateAdapter, zone) {
        this.dateAdapter = dateAdapter;
        this.zone = zone;
        this.columnDate$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
        this.marker$ = this.zone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.interval)(60 * 1000)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMapTo)(this.columnDate$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((columnDate) => {
            const startOfDay = this.dateAdapter.setMinutes(this.dateAdapter.setHours(columnDate, this.dayStartHour), this.dayStartMinute);
            const endOfDay = this.dateAdapter.setMinutes(this.dateAdapter.setHours(columnDate, this.dayEndHour), this.dayEndMinute);
            const hourHeightModifier = (this.hourSegments * this.hourSegmentHeight) /
                (this.hourDuration || 60);
            const now = new Date();
            return {
                isVisible: this.dateAdapter.isSameDay(columnDate, now) &&
                    now >= startOfDay &&
                    now <= endOfDay,
                top: this.dateAdapter.differenceInMinutes(now, startOfDay) *
                    hourHeightModifier,
            };
        }));
    }
    ngOnChanges(changes) {
        if (changes.columnDate) {
            this.columnDate$.next(changes.columnDate.currentValue);
        }
    }
}
CalendarWeekViewCurrentTimeMarkerComponent.ɵfac = function CalendarWeekViewCurrentTimeMarkerComponent_Factory(t) { return new (t || CalendarWeekViewCurrentTimeMarkerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_7__.DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone)); };
CalendarWeekViewCurrentTimeMarkerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarWeekViewCurrentTimeMarkerComponent, selectors: [["mwl-calendar-week-view-current-time-marker"]], inputs: { columnDate: "columnDate", dayStartHour: "dayStartHour", dayStartMinute: "dayStartMinute", dayEndHour: "dayEndHour", dayEndMinute: "dayEndMinute", hourSegments: "hourSegments", hourDuration: "hourDuration", hourSegmentHeight: "hourSegmentHeight", customTemplate: "customTemplate" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 8, vars: 14, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-current-time-marker", 3, "top", 4, "ngIf"], [1, "cal-current-time-marker"]], template: function CalendarWeekViewCurrentTimeMarkerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_1_Template, 3, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_4_Template, 1, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n  ");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction7"](6, _c0, ctx.columnDate, ctx.dayStartHour, ctx.dayStartMinute, ctx.dayEndHour, ctx.dayEndMinute, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx.marker$)) == null ? null : tmp_1_0.isVisible, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, ctx.marker$)) == null ? null : tmp_1_0.top));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe], encapsulation: 2 });


/***/ }),

/***/ 61862:
/*!******************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/week/calendar-week-view-event.component.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarWeekViewEventComponent": function() { return /* binding */ CalendarWeekViewEventComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _common_calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/calendar-tooltip.directive */ 69416);
/* harmony import */ var _common_click_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/click.directive */ 81567);
/* harmony import */ var _common_keydown_enter_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/keydown-enter.directive */ 93759);
/* harmony import */ var _common_calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/calendar-event-actions.component */ 32136);
/* harmony import */ var _common_calendar_event_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/calendar-event-title.component */ 58974);
/* harmony import */ var _common_calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/calendar-event-title.pipe */ 44602);
/* harmony import */ var _common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/calendar-a11y.pipe */ 62479);










const _c0 = function (a0, a1) { return { backgroundColor: a0, borderColor: a1 }; };
const _c1 = function (a0, a1) { return { event: a0, locale: a1 }; };
function CalendarWeekViewEventComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mwlClick", function CalendarWeekViewEventComponent_ng_template_1_Template_div_mwlClick_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const eventClicked_r5 = restoredCtx.eventClicked; return eventClicked_r5.emit({ sourceEvent: $event }); })("mwlKeydownEnter", function CalendarWeekViewEventComponent_ng_template_1_Template_div_mwlKeydownEnter_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const eventClicked_r5 = restoredCtx.eventClicked; return eventClicked_r5.emit({ sourceEvent: $event }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "calendarEventTitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mwl-calendar-event-actions", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n         \n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mwl-calendar-event-title", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n    ");
} if (rf & 2) {
    const weekEvent_r3 = ctx.weekEvent;
    const tooltipPlacement_r4 = ctx.tooltipPlacement;
    const tooltipTemplate_r6 = ctx.tooltipTemplate;
    const tooltipAppendToBody_r7 = ctx.tooltipAppendToBody;
    const tooltipDisabled_r8 = ctx.tooltipDisabled;
    const tooltipDelay_r9 = ctx.tooltipDelay;
    const daysInWeek_r11 = ctx.daysInWeek;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](20, _c0, weekEvent_r3.event.color == null ? null : weekEvent_r3.event.color.secondary, weekEvent_r3.event.color == null ? null : weekEvent_r3.event.color.primary))("mwlCalendarTooltip", !tooltipDisabled_r8 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 13, weekEvent_r3.event.title, daysInWeek_r11 === 1 ? "dayTooltip" : "weekTooltip", weekEvent_r3.tempEvent || weekEvent_r3.event) : "")("tooltipPlacement", tooltipPlacement_r4)("tooltipEvent", weekEvent_r3.tempEvent || weekEvent_r3.event)("tooltipTemplate", tooltipTemplate_r6)("tooltipAppendToBody", tooltipAppendToBody_r7)("tooltipDelay", tooltipDelay_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](23, _c1, weekEvent_r3.tempEvent || weekEvent_r3.event, ctx_r1.locale), "eventDescription"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", weekEvent_r3.tempEvent || weekEvent_r3.event)("customTemplate", ctx_r1.eventActionsTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", weekEvent_r3.tempEvent || weekEvent_r3.event)("customTemplate", ctx_r1.eventTitleTemplate)("view", daysInWeek_r11 === 1 ? "day" : "week");
} }
function CalendarWeekViewEventComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
} }
const _c2 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8) { return { weekEvent: a0, tooltipPlacement: a1, eventClicked: a2, tooltipTemplate: a3, tooltipAppendToBody: a4, tooltipDisabled: a5, tooltipDelay: a6, column: a7, daysInWeek: a8 }; };
class CalendarWeekViewEventComponent {
    constructor() {
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
}
CalendarWeekViewEventComponent.ɵfac = function CalendarWeekViewEventComponent_Factory(t) { return new (t || CalendarWeekViewEventComponent)(); };
CalendarWeekViewEventComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarWeekViewEventComponent, selectors: [["mwl-calendar-week-view-event"]], inputs: { locale: "locale", weekEvent: "weekEvent", tooltipPlacement: "tooltipPlacement", tooltipAppendToBody: "tooltipAppendToBody", tooltipDisabled: "tooltipDisabled", tooltipDelay: "tooltipDelay", customTemplate: "customTemplate", eventTitleTemplate: "eventTitleTemplate", eventActionsTemplate: "eventActionsTemplate", tooltipTemplate: "tooltipTemplate", column: "column", daysInWeek: "daysInWeek" }, outputs: { eventClicked: "eventClicked" }, decls: 6, vars: 12, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "0", "role", "application", 1, "cal-event", 3, "ngStyle", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "mwlClick", "mwlKeydownEnter"], [3, "event", "customTemplate"], [3, "event", "customTemplate", "view"]], template: function CalendarWeekViewEventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarWeekViewEventComponent_ng_template_1_Template, 12, 26, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarWeekViewEventComponent_ng_template_4_Template, 1, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunctionV"](2, _c2, [ctx.weekEvent, ctx.tooltipPlacement, ctx.eventClicked, ctx.tooltipTemplate, ctx.tooltipAppendToBody, ctx.tooltipDisabled, ctx.tooltipDelay, ctx.column, ctx.daysInWeek]));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _common_calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__.CalendarTooltipDirective, _common_click_directive__WEBPACK_IMPORTED_MODULE_3__.ClickDirective, _common_keydown_enter_directive__WEBPACK_IMPORTED_MODULE_4__.KeydownEnterDirective, _common_calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_5__.CalendarEventActionsComponent, _common_calendar_event_title_component__WEBPACK_IMPORTED_MODULE_6__.CalendarEventTitleComponent], pipes: [_common_calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_7__.CalendarEventTitlePipe, _common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_8__.CalendarA11yPipe], encapsulation: 2 });


/***/ }),

/***/ 55428:
/*!*******************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/week/calendar-week-view-header.component.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarWeekViewHeaderComponent": function() { return /* binding */ CalendarWeekViewHeaderComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util */ 33878);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-draggable-droppable */ 42915);
/* harmony import */ var _common_click_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/click.directive */ 81567);
/* harmony import */ var _common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/calendar-date.pipe */ 12153);







function CalendarWeekViewHeaderComponent_ng_template_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mwlClick", function CalendarWeekViewHeaderComponent_ng_template_1_div_3_Template_div_mwlClick_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const day_r10 = restoredCtx.$implicit; const dayHeaderClicked_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().dayHeaderClicked; return dayHeaderClicked_r5.emit({ day: day_r10, sourceEvent: $event }); })("drop", function CalendarWeekViewHeaderComponent_ng_template_1_div_3_Template_div_drop_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const day_r10 = restoredCtx.$implicit; const eventDropped_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().eventDropped; return eventDropped_r6.emit({ event: $event.dropData.event, newStart: day_r10.date }); })("dragEnter", function CalendarWeekViewHeaderComponent_ng_template_1_div_3_Template_div_dragEnter_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const day_r10 = restoredCtx.$implicit; const dragEnter_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().dragEnter; return dragEnter_r8.emit({ date: day_r10.date }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "calendarDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "calendarDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r10 = ctx.$implicit;
    const locale_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().locale;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cal-past", day_r10.isPast)("cal-today", day_r10.isToday)("cal-future", day_r10.isFuture)("cal-weekend", day_r10.isWeekend);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", day_r10.cssClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 11, day_r10.date, "weekViewColumnHeader", locale_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 15, day_r10.date, "weekViewColumnSubHeader", locale_r4));
} }
function CalendarWeekViewHeaderComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CalendarWeekViewHeaderComponent_ng_template_1_div_3_Template, 11, 19, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    ");
} if (rf & 2) {
    const days_r3 = ctx.days;
    const trackByWeekDayHeaderDate_r7 = ctx.trackByWeekDayHeaderDate;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", days_r3)("ngForTrackBy", trackByWeekDayHeaderDate_r7);
} }
function CalendarWeekViewHeaderComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
} }
const _c0 = function (a0, a1, a2, a3, a4, a5) { return { days: a0, locale: a1, dayHeaderClicked: a2, eventDropped: a3, dragEnter: a4, trackByWeekDayHeaderDate: a5 }; };
class CalendarWeekViewHeaderComponent {
    constructor() {
        this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.eventDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.dragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.trackByWeekDayHeaderDate = _common_util__WEBPACK_IMPORTED_MODULE_1__.trackByWeekDayHeaderDate;
    }
}
CalendarWeekViewHeaderComponent.ɵfac = function CalendarWeekViewHeaderComponent_Factory(t) { return new (t || CalendarWeekViewHeaderComponent)(); };
CalendarWeekViewHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarWeekViewHeaderComponent, selectors: [["mwl-calendar-week-view-header"]], inputs: { days: "days", locale: "locale", customTemplate: "customTemplate" }, outputs: { dayHeaderClicked: "dayHeaderClicked", eventDropped: "eventDropped", dragEnter: "dragEnter" }, decls: 6, vars: 9, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "row", 1, "cal-day-headers"], ["class", "cal-header", "mwlDroppable", "", "dragOverClass", "cal-drag-over", "tabindex", "0", "role", "columnheader", 3, "cal-past", "cal-today", "cal-future", "cal-weekend", "ngClass", "mwlClick", "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", "tabindex", "0", "role", "columnheader", 1, "cal-header", 3, "ngClass", "mwlClick", "drop", "dragEnter"]], template: function CalendarWeekViewHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarWeekViewHeaderComponent_ng_template_1_Template, 6, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarWeekViewHeaderComponent_ng_template_4_Template, 1, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](2, _c0, ctx.days, ctx.locale, ctx.dayHeaderClicked, ctx.eventDropped, ctx.dragEnter, ctx.trackByWeekDayHeaderDate));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_3__.DroppableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _common_click_directive__WEBPACK_IMPORTED_MODULE_4__.ClickDirective], pipes: [_common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_5__.CalendarDatePipe], encapsulation: 2 });


/***/ }),

/***/ 20923:
/*!*************************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/week/calendar-week-view-hour-segment.component.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarWeekViewHourSegmentComponent": function() { return /* binding */ CalendarWeekViewHourSegmentComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/calendar-a11y.pipe */ 62479);
/* harmony import */ var _common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/calendar-date.pipe */ 12153);




function CalendarWeekViewHourSegmentComponent_ng_template_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "calendarDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const segment_r3 = ctx_r9.segment;
    const daysInWeek_r7 = ctx_r9.daysInWeek;
    const locale_r4 = ctx_r9.locale;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n          ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, segment_r3.displayDate, daysInWeek_r7 === 1 ? "dayViewHour" : "weekViewHour", locale_r4), "\n        ");
} }
const _c0 = function () { return {}; };
function CalendarWeekViewHourSegmentComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarWeekViewHourSegmentComponent_ng_template_1_div_4_Template, 3, 5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n    ");
} if (rf & 2) {
    const segment_r3 = ctx.segment;
    const segmentHeight_r5 = ctx.segmentHeight;
    const isTimeLabel_r6 = ctx.isTimeLabel;
    const daysInWeek_r7 = ctx.daysInWeek;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", segmentHeight_r5, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cal-hour-start", segment_r3.isStart)("cal-after-hour-start", !segment_r3.isStart);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", segment_r3.cssClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0), daysInWeek_r7 === 1 ? "hideDayHourSegment" : "hideWeekHourSegment"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isTimeLabel_r6);
} }
function CalendarWeekViewHourSegmentComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
} }
const _c1 = function (a0, a1, a2, a3, a4) { return { segment: a0, locale: a1, segmentHeight: a2, isTimeLabel: a3, daysInWeek: a4 }; };
class CalendarWeekViewHourSegmentComponent {
}
CalendarWeekViewHourSegmentComponent.ɵfac = function CalendarWeekViewHourSegmentComponent_Factory(t) { return new (t || CalendarWeekViewHourSegmentComponent)(); };
CalendarWeekViewHourSegmentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarWeekViewHourSegmentComponent, selectors: [["mwl-calendar-week-view-hour-segment"]], inputs: { segment: "segment", segmentHeight: "segmentHeight", locale: "locale", isTimeLabel: "isTimeLabel", daysInWeek: "daysInWeek", customTemplate: "customTemplate" }, decls: 6, vars: 8, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-hour-segment", 3, "ngClass"], ["class", "cal-time", 4, "ngIf"], [1, "cal-time"]], template: function CalendarWeekViewHourSegmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarWeekViewHourSegmentComponent_ng_template_1_Template, 7, 13, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarWeekViewHourSegmentComponent_ng_template_4_Template, 1, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](2, _c1, ctx.segment, ctx.locale, ctx.segmentHeight, ctx.isTimeLabel, ctx.daysInWeek));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], pipes: [_common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_2__.CalendarA11yPipe, _common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_3__.CalendarDatePipe], encapsulation: 2 });


/***/ }),

/***/ 1913:
/*!************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/week/calendar-week-view.component.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarWeekViewComponent": function() { return /* binding */ CalendarWeekViewComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var calendar_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! calendar-utils */ 90489);
/* harmony import */ var _common_calendar_drag_helper_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/calendar-drag-helper.provider */ 45824);
/* harmony import */ var _common_calendar_resize_helper_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/calendar-resize-helper.provider */ 70923);
/* harmony import */ var _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/calendar-event-times-changed-event.interface */ 91203);
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util */ 33878);
/* harmony import */ var _common_calendar_utils_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/calendar-utils.provider */ 27579);
/* harmony import */ var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../date-adapters/date-adapter */ 90008);
/* harmony import */ var _calendar_week_view_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calendar-week-view-header.component */ 55428);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-draggable-droppable */ 42915);
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-resizable-element */ 90093);
/* harmony import */ var _calendar_week_view_event_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./calendar-week-view-event.component */ 61862);
/* harmony import */ var _calendar_week_view_hour_segment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./calendar-week-view-hour-segment.component */ 20923);
/* harmony import */ var _calendar_week_view_current_time_marker_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./calendar-week-view-current-time-marker.component */ 6556);
/* harmony import */ var _common_click_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/click.directive */ 81567);


















function CalendarWeekViewComponent_div_6_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("drop", function CalendarWeekViewComponent_div_6_div_7_Template_div_drop_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const day_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.eventDropped($event, day_r7.date, true); })("dragEnter", function CalendarWeekViewComponent_div_6_div_7_Template_div_dragEnter_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const day_r7 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.dateDragEnter(day_r7.date); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { left: true }; };
function CalendarWeekViewComponent_div_6_div_10_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 22);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return { right: true }; };
function CalendarWeekViewComponent_div_6_div_10_div_3_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 23);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c1));
} }
const _c2 = function (a0, a1) { return { left: a0, right: a1 }; };
const _c3 = function (a0, a1) { return { event: a0, calendarId: a1 }; };
const _c4 = function (a0, a1) { return { x: a0, y: a1 }; };
const _c5 = function (a0) { return { x: a0 }; };
const _c6 = function () { return {}; };
const _c7 = function () { return { delay: 300, delta: 30 }; };
function CalendarWeekViewComponent_div_6_div_10_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resizeStart", function CalendarWeekViewComponent_div_6_div_10_div_3_Template_div_resizeStart_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const allDayEvent_r14 = restoredCtx.$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r18.allDayEventResizeStarted(_r12, allDayEvent_r14, $event); })("resizing", function CalendarWeekViewComponent_div_6_div_10_div_3_Template_div_resizing_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const allDayEvent_r14 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r20.allDayEventResizing(allDayEvent_r14, $event, ctx_r20.dayColumnWidth); })("resizeEnd", function CalendarWeekViewComponent_div_6_div_10_div_3_Template_div_resizeEnd_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const allDayEvent_r14 = restoredCtx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r21.allDayEventResizeEnded(allDayEvent_r14); })("dragStart", function CalendarWeekViewComponent_div_6_div_10_div_3_Template_div_dragStart_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const allDayEvent_r14 = restoredCtx.$implicit; const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r22.dragStarted(_r12, _r15, allDayEvent_r14, false); })("dragging", function CalendarWeekViewComponent_div_6_div_10_div_3_Template_div_dragging_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r23.allDayEventDragMove(); })("dragEnd", function CalendarWeekViewComponent_div_6_div_10_div_3_Template_div_dragEnd_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const allDayEvent_r14 = restoredCtx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r24.dragEnded(allDayEvent_r14, $event, ctx_r24.dayColumnWidth); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CalendarWeekViewComponent_div_6_div_10_div_3_div_3_Template, 1, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mwl-calendar-week-view-event", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("eventClicked", function CalendarWeekViewComponent_div_6_div_10_div_3_Template_mwl_calendar_week_view_event_eventClicked_5_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const allDayEvent_r14 = restoredCtx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r25.eventClicked.emit({ event: allDayEvent_r14.event, sourceEvent: $event.sourceEvent }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CalendarWeekViewComponent_div_6_div_10_div_3_div_8_Template, 1, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const allDayEvent_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", 100 / ctx_r13.days.length * allDayEvent_r14.span, "%")("margin-left", ctx_r13.rtl ? null : 100 / ctx_r13.days.length * allDayEvent_r14.offset, "%")("margin-right", ctx_r13.rtl ? 100 / ctx_r13.days.length * (ctx_r13.days.length - allDayEvent_r14.offset) * -1 : null, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-draggable", allDayEvent_r14.event.draggable && ctx_r13.allDayEventResizes.size === 0)("cal-starts-within-week", !allDayEvent_r14.startsBeforeWeek)("cal-ends-within-week", !allDayEvent_r14.endsAfterWeek);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", allDayEvent_r14.event == null ? null : allDayEvent_r14.event.cssClass)("resizeSnapGrid", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](32, _c2, ctx_r13.dayColumnWidth, ctx_r13.dayColumnWidth))("validateResize", ctx_r13.validateResize)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](35, _c3, allDayEvent_r14.event, ctx_r13.calendarId))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](38, _c4, allDayEvent_r14.event.draggable && ctx_r13.allDayEventResizes.size === 0, !ctx_r13.snapDraggedEvents && allDayEvent_r14.event.draggable && ctx_r13.allDayEventResizes.size === 0))("dragSnapGrid", ctx_r13.snapDraggedEvents ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](41, _c5, ctx_r13.dayColumnWidth) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](43, _c6))("validateDrag", ctx_r13.validateDrag)("touchStartLongPress", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](44, _c7));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (allDayEvent_r14.event == null ? null : allDayEvent_r14.event.resizable == null ? null : allDayEvent_r14.event.resizable.beforeStart) && !allDayEvent_r14.startsBeforeWeek);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("locale", ctx_r13.locale)("weekEvent", allDayEvent_r14)("tooltipPlacement", ctx_r13.tooltipPlacement)("tooltipTemplate", ctx_r13.tooltipTemplate)("tooltipAppendToBody", ctx_r13.tooltipAppendToBody)("tooltipDelay", ctx_r13.tooltipDelay)("customTemplate", ctx_r13.eventTemplate)("eventTitleTemplate", ctx_r13.eventTitleTemplate)("eventActionsTemplate", ctx_r13.eventActionsTemplate)("daysInWeek", ctx_r13.daysInWeek);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (allDayEvent_r14.event == null ? null : allDayEvent_r14.event.resizable == null ? null : allDayEvent_r14.event.resizable.afterEnd) && !allDayEvent_r14.endsAfterWeek);
} }
function CalendarWeekViewComponent_div_6_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CalendarWeekViewComponent_div_6_div_10_div_3_Template, 10, 45, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eventRow_r11 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", eventRow_r11.row)("ngForTrackBy", ctx_r6.trackByWeekAllDayEvent);
} }
function CalendarWeekViewComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dragEnter", function CalendarWeekViewComponent_div_6_Template_div_dragEnter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.dragEnter("allDay"); })("dragLeave", function CalendarWeekViewComponent_div_6_Template_div_dragLeave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.dragLeave("allDay"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CalendarWeekViewComponent_div_6_div_7_Template, 1, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CalendarWeekViewComponent_div_6_div_10_Template, 5, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.allDayEventsLabelTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.days)("ngForTrackBy", ctx_r0.trackByWeekDayHeaderDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.view.allDayEventRows)("ngForTrackBy", ctx_r0.trackById);
} }
function CalendarWeekViewComponent_div_10_div_2_mwl_calendar_week_view_hour_segment_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mwl-calendar-week-view-hour-segment", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const segment_r33 = ctx.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx_r32.hourSegmentHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("segment", segment_r33)("segmentHeight", ctx_r32.hourSegmentHeight)("locale", ctx_r32.locale)("customTemplate", ctx_r32.hourSegmentTemplate)("isTimeLabel", true)("daysInWeek", ctx_r32.daysInWeek);
} }
function CalendarWeekViewComponent_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_10_div_2_mwl_calendar_week_view_hour_segment_2_Template, 2, 8, "mwl-calendar-week-view-hour-segment", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hour_r30 = ctx.$implicit;
    const odd_r31 = ctx.odd;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-hour-odd", odd_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", hour_r30.segments)("ngForTrackBy", ctx_r29.trackByHourSegment);
} }
function CalendarWeekViewComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_10_div_2_Template, 4, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.view.hourColumns[0].hours)("ngForTrackBy", ctx_r1.trackByHour);
} }
const _c8 = function () { return { left: true, top: true }; };
function CalendarWeekViewComponent_div_15_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 22);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c8));
} }
function CalendarWeekViewComponent_div_15_div_6_ng_template_5_Template(rf, ctx) { }
function CalendarWeekViewComponent_div_15_div_6_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mwl-calendar-week-view-event", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("eventClicked", function CalendarWeekViewComponent_div_15_div_6_ng_template_7_Template_mwl_calendar_week_view_event_eventClicked_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46); const timeEvent_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r44.eventClicked.emit({ event: timeEvent_r37.event, sourceEvent: $event.sourceEvent }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n                ");
} if (rf & 2) {
    const timeEvent_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const column_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("locale", ctx_r42.locale)("weekEvent", timeEvent_r37)("tooltipPlacement", ctx_r42.tooltipPlacement)("tooltipTemplate", ctx_r42.tooltipTemplate)("tooltipAppendToBody", ctx_r42.tooltipAppendToBody)("tooltipDisabled", ctx_r42.dragActive || ctx_r42.timeEventResizes.size > 0)("tooltipDelay", ctx_r42.tooltipDelay)("customTemplate", ctx_r42.eventTemplate)("eventTitleTemplate", ctx_r42.eventTitleTemplate)("eventActionsTemplate", ctx_r42.eventActionsTemplate)("column", column_r34)("daysInWeek", ctx_r42.daysInWeek);
} }
const _c9 = function () { return { right: true, bottom: true }; };
function CalendarWeekViewComponent_div_15_div_6_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 23);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c9));
} }
const _c10 = function (a0, a1, a2, a3) { return { left: a0, right: a1, top: a2, bottom: a3 }; };
function CalendarWeekViewComponent_div_15_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resizeStart", function CalendarWeekViewComponent_div_15_div_6_Template_div_resizeStart_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50); const timeEvent_r37 = restoredCtx.$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13); return ctx_r49.timeEventResizeStarted(_r2, timeEvent_r37, $event); })("resizing", function CalendarWeekViewComponent_div_15_div_6_Template_div_resizing_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50); const timeEvent_r37 = restoredCtx.$implicit; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r51.timeEventResizing(timeEvent_r37, $event); })("resizeEnd", function CalendarWeekViewComponent_div_15_div_6_Template_div_resizeEnd_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50); const timeEvent_r37 = restoredCtx.$implicit; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r52.timeEventResizeEnded(timeEvent_r37); })("dragStart", function CalendarWeekViewComponent_div_15_div_6_Template_div_dragStart_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50); const timeEvent_r37 = restoredCtx.$implicit; const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13); return ctx_r53.dragStarted(_r2, _r38, timeEvent_r37, true); })("dragging", function CalendarWeekViewComponent_div_15_div_6_Template_div_dragging_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50); const timeEvent_r37 = restoredCtx.$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r54.dragMove(timeEvent_r37, $event); })("dragEnd", function CalendarWeekViewComponent_div_15_div_6_Template_div_dragEnd_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50); const timeEvent_r37 = restoredCtx.$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r55.dragEnded(timeEvent_r37, $event, ctx_r55.dayColumnWidth, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CalendarWeekViewComponent_div_15_div_6_div_3_Template, 1, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CalendarWeekViewComponent_div_15_div_6_ng_template_5_Template, 0, 0, "ng-template", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CalendarWeekViewComponent_div_15_div_6_ng_template_7_Template, 4, 12, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CalendarWeekViewComponent_div_15_div_6_div_10_Template, 1, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const timeEvent_r37 = ctx.$implicit;
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("top", timeEvent_r37.top, "px")("height", timeEvent_r37.height, "px")("left", timeEvent_r37.left, "%")("width", timeEvent_r37.width, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-draggable", timeEvent_r37.event.draggable && ctx_r35.timeEventResizes.size === 0)("cal-starts-within-day", !timeEvent_r37.startsBeforeDay)("cal-ends-within-day", !timeEvent_r37.endsAfterDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", timeEvent_r37.event.cssClass)("hidden", timeEvent_r37.height === 0 && timeEvent_r37.width === 0)("resizeSnapGrid", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](29, _c10, ctx_r35.dayColumnWidth, ctx_r35.dayColumnWidth, ctx_r35.eventSnapSize || ctx_r35.hourSegmentHeight, ctx_r35.eventSnapSize || ctx_r35.hourSegmentHeight))("validateResize", ctx_r35.validateResize)("allowNegativeResizes", true)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](34, _c3, timeEvent_r37.event, ctx_r35.calendarId))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](37, _c4, timeEvent_r37.event.draggable && ctx_r35.timeEventResizes.size === 0, timeEvent_r37.event.draggable && ctx_r35.timeEventResizes.size === 0))("dragSnapGrid", ctx_r35.snapDraggedEvents ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](40, _c4, ctx_r35.dayColumnWidth, ctx_r35.eventSnapSize || ctx_r35.hourSegmentHeight) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](43, _c6))("touchStartLongPress", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](44, _c7))("ghostDragEnabled", !ctx_r35.snapDraggedEvents)("ghostElementTemplate", _r41)("validateDrag", ctx_r35.validateDrag);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (timeEvent_r37.event == null ? null : timeEvent_r37.event.resizable == null ? null : timeEvent_r37.event.resizable.beforeStart) && !timeEvent_r37.startsBeforeDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (timeEvent_r37.event == null ? null : timeEvent_r37.event.resizable == null ? null : timeEvent_r37.event.resizable.afterEnd) && !timeEvent_r37.endsAfterDay);
} }
function CalendarWeekViewComponent_div_15_div_9_mwl_calendar_week_view_hour_segment_2_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mwl-calendar-week-view-hour-segment", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mwlClick", function CalendarWeekViewComponent_div_15_div_9_mwl_calendar_week_view_hour_segment_2_Template_mwl_calendar_week_view_hour_segment_mwlClick_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r61); const segment_r59 = restoredCtx.$implicit; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r60.hourSegmentClicked.emit({ date: segment_r59.date, sourceEvent: $event }); })("drop", function CalendarWeekViewComponent_div_15_div_9_mwl_calendar_week_view_hour_segment_2_Template_mwl_calendar_week_view_hour_segment_drop_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r61); const segment_r59 = restoredCtx.$implicit; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r62.eventDropped($event, segment_r59.date, false); })("dragEnter", function CalendarWeekViewComponent_div_15_div_9_mwl_calendar_week_view_hour_segment_2_Template_mwl_calendar_week_view_hour_segment_dragEnter_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r61); const segment_r59 = restoredCtx.$implicit; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r63.dateDragEnter(segment_r59.date); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const segment_r59 = ctx.$implicit;
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx_r58.hourSegmentHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("segment", segment_r59)("segmentHeight", ctx_r58.hourSegmentHeight)("locale", ctx_r58.locale)("customTemplate", ctx_r58.hourSegmentTemplate)("daysInWeek", ctx_r58.daysInWeek)("clickListenerDisabled", ctx_r58.hourSegmentClicked.observers.length === 0)("dragOverClass", !ctx_r58.dragActive || !ctx_r58.snapDraggedEvents ? "cal-drag-over" : null)("isTimeLabel", ctx_r58.daysInWeek === 1);
} }
function CalendarWeekViewComponent_div_15_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_15_div_9_mwl_calendar_week_view_hour_segment_2_Template, 2, 10, "mwl-calendar-week-view-hour-segment", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hour_r56 = ctx.$implicit;
    const odd_r57 = ctx.odd;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-hour-odd", odd_r57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", hour_r56.segments)("ngForTrackBy", ctx_r36.trackByHourSegment);
} }
function CalendarWeekViewComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mwl-calendar-week-view-current-time-marker", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CalendarWeekViewComponent_div_15_div_6_Template, 12, 45, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CalendarWeekViewComponent_div_15_div_9_Template, 4, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r34 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnDate", column_r34.date)("dayStartHour", ctx_r3.dayStartHour)("dayStartMinute", ctx_r3.dayStartMinute)("dayEndHour", ctx_r3.dayEndHour)("dayEndMinute", ctx_r3.dayEndMinute)("hourSegments", ctx_r3.hourSegments)("hourDuration", ctx_r3.hourDuration)("hourSegmentHeight", ctx_r3.hourSegmentHeight)("customTemplate", ctx_r3.currentTimeMarkerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", column_r34.events)("ngForTrackBy", ctx_r3.trackByWeekTimeEvent);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", column_r34.hours)("ngForTrackBy", ctx_r3.trackByHour);
} }
/**
 * Shows all events on a given week. Example usage:
 *
 * ```typescript
 * <mwl-calendar-week-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-week-view>
 * ```
 */
class CalendarWeekViewComponent {
    /**
     * @hidden
     */
    constructor(cdr, utils, locale, dateAdapter, element) {
        this.cdr = cdr;
        this.utils = utils;
        this.dateAdapter = dateAdapter;
        this.element = element;
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */
        this.excludeDays = [];
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
         * will be displayed immediately.
         */
        this.tooltipDelay = null;
        /**
         * The precision to display events.
         * `days` will round event start and end dates to the nearest day and `minutes` will not do this rounding
         */
        this.precision = 'days';
        /**
         * Whether to snap events to a grid when dragging
         */
        this.snapDraggedEvents = true;
        /**
         * The number of segments in an hour. Must divide equally into 60.
         */
        this.hourSegments = 2;
        /**
         * The height in pixels of each hour segment
         */
        this.hourSegmentHeight = 30;
        /**
         * The minimum height in pixels of each event
         */
        this.minimumEventHeight = 30;
        /**
         * The day start hours in 24 hour time. Must be 0-23
         */
        this.dayStartHour = 0;
        /**
         * The day start minutes. Must be 0-59
         */
        this.dayStartMinute = 0;
        /**
         * The day end hours in 24 hour time. Must be 0-23
         */
        this.dayEndHour = 23;
        /**
         * The day end minutes. Must be 0-59
         */
        this.dayEndMinute = 59;
        /**
         * Called when a header week day is clicked. Adding a `cssClass` property on `$event.day` will add that class to the header element
         */
        this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        /**
         * Called when an event title is clicked
         */
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        /**
         * Called when an event is resized or dragged and dropped
         */
        this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        /**
         * An output that will be called before the view is rendered for the current week.
         * If you add the `cssClass` property to a day in the header it will add that class to the cell element in the template
         */
        this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        /**
         * Called when an hour segment is clicked
         */
        this.hourSegmentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        /**
         * @hidden
         */
        this.allDayEventResizes = new Map();
        /**
         * @hidden
         */
        this.timeEventResizes = new Map();
        /**
         * @hidden
         */
        this.eventDragEnterByType = {
            allDay: 0,
            time: 0,
        };
        /**
         * @hidden
         */
        this.dragActive = false;
        /**
         * @hidden
         */
        this.dragAlreadyMoved = false;
        /**
         * @hidden
         */
        this.calendarId = Symbol('angular calendar week view id');
        /**
         * @hidden
         */
        this.rtl = false;
        /**
         * @hidden
         */
        this.trackByWeekDayHeaderDate = _common_util__WEBPACK_IMPORTED_MODULE_2__.trackByWeekDayHeaderDate;
        /**
         * @hidden
         */
        this.trackByHourSegment = _common_util__WEBPACK_IMPORTED_MODULE_2__.trackByHourSegment;
        /**
         * @hidden
         */
        this.trackByHour = _common_util__WEBPACK_IMPORTED_MODULE_2__.trackByHour;
        /**
         * @hidden
         */
        this.trackByWeekAllDayEvent = _common_util__WEBPACK_IMPORTED_MODULE_2__.trackByWeekAllDayEvent;
        /**
         * @hidden
         */
        this.trackByWeekTimeEvent = _common_util__WEBPACK_IMPORTED_MODULE_2__.trackByWeekTimeEvent;
        /**
         * @hidden
         */
        this.trackByHourColumn = (index, column) => column.hours[0] ? column.hours[0].segments[0].date.toISOString() : column;
        /**
         * @hidden
         */
        this.trackById = (index, row) => row.id;
        this.locale = locale;
    }
    /**
     * @hidden
     */
    ngOnInit() {
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(() => {
                this.refreshAll();
                this.cdr.markForCheck();
            });
        }
    }
    /**
     * @hidden
     */
    ngOnChanges(changes) {
        const refreshHeader = changes.viewDate ||
            changes.excludeDays ||
            changes.weekendDays ||
            changes.daysInWeek ||
            changes.weekStartsOn;
        const refreshBody = changes.viewDate ||
            changes.dayStartHour ||
            changes.dayStartMinute ||
            changes.dayEndHour ||
            changes.dayEndMinute ||
            changes.hourSegments ||
            changes.hourDuration ||
            changes.weekStartsOn ||
            changes.weekendDays ||
            changes.excludeDays ||
            changes.hourSegmentHeight ||
            changes.events ||
            changes.daysInWeek ||
            changes.minimumEventHeight;
        if (refreshHeader) {
            this.refreshHeader();
        }
        if (changes.events) {
            (0,_common_util__WEBPACK_IMPORTED_MODULE_2__.validateEvents)(this.events);
        }
        if (refreshBody) {
            this.refreshBody();
        }
        if (refreshHeader || refreshBody) {
            this.emitBeforeViewRender();
        }
    }
    /**
     * @hidden
     */
    ngOnDestroy() {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    }
    /**
     * @hidden
     */
    ngAfterViewInit() {
        this.rtl =
            typeof window !== 'undefined' &&
                getComputedStyle(this.element.nativeElement).direction === 'rtl';
        this.cdr.detectChanges();
    }
    /**
     * @hidden
     */
    timeEventResizeStarted(eventsContainer, timeEvent, resizeEvent) {
        this.timeEventResizes.set(timeEvent.event, resizeEvent);
        this.resizeStarted(eventsContainer, timeEvent);
    }
    /**
     * @hidden
     */
    timeEventResizing(timeEvent, resizeEvent) {
        this.timeEventResizes.set(timeEvent.event, resizeEvent);
        const adjustedEvents = new Map();
        const tempEvents = [...this.events];
        this.timeEventResizes.forEach((lastResizeEvent, event) => {
            const newEventDates = this.getTimeEventResizedDates(event, lastResizeEvent);
            const adjustedEvent = Object.assign(Object.assign({}, event), newEventDates);
            adjustedEvents.set(adjustedEvent, event);
            const eventIndex = tempEvents.indexOf(event);
            tempEvents[eventIndex] = adjustedEvent;
        });
        this.restoreOriginalEvents(tempEvents, adjustedEvents, true);
    }
    /**
     * @hidden
     */
    timeEventResizeEnded(timeEvent) {
        this.view = this.getWeekView(this.events);
        const lastResizeEvent = this.timeEventResizes.get(timeEvent.event);
        if (lastResizeEvent) {
            this.timeEventResizes.delete(timeEvent.event);
            const newEventDates = this.getTimeEventResizedDates(timeEvent.event, lastResizeEvent);
            this.eventTimesChanged.emit({
                newStart: newEventDates.start,
                newEnd: newEventDates.end,
                event: timeEvent.event,
                type: _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_3__.CalendarEventTimesChangedEventType.Resize,
            });
        }
    }
    /**
     * @hidden
     */
    allDayEventResizeStarted(allDayEventsContainer, allDayEvent, resizeEvent) {
        this.allDayEventResizes.set(allDayEvent, {
            originalOffset: allDayEvent.offset,
            originalSpan: allDayEvent.span,
            edge: typeof resizeEvent.edges.left !== 'undefined' ? 'left' : 'right',
        });
        this.resizeStarted(allDayEventsContainer, allDayEvent, this.getDayColumnWidth(allDayEventsContainer));
    }
    /**
     * @hidden
     */
    allDayEventResizing(allDayEvent, resizeEvent, dayWidth) {
        const currentResize = this.allDayEventResizes.get(allDayEvent);
        const modifier = this.rtl ? -1 : 1;
        if (typeof resizeEvent.edges.left !== 'undefined') {
            const diff = Math.round(+resizeEvent.edges.left / dayWidth) * modifier;
            allDayEvent.offset = currentResize.originalOffset + diff;
            allDayEvent.span = currentResize.originalSpan - diff;
        }
        else if (typeof resizeEvent.edges.right !== 'undefined') {
            const diff = Math.round(+resizeEvent.edges.right / dayWidth) * modifier;
            allDayEvent.span = currentResize.originalSpan + diff;
        }
    }
    /**
     * @hidden
     */
    allDayEventResizeEnded(allDayEvent) {
        const currentResize = this.allDayEventResizes.get(allDayEvent);
        if (currentResize) {
            const allDayEventResizingBeforeStart = currentResize.edge === 'left';
            let daysDiff;
            if (allDayEventResizingBeforeStart) {
                daysDiff = allDayEvent.offset - currentResize.originalOffset;
            }
            else {
                daysDiff = allDayEvent.span - currentResize.originalSpan;
            }
            allDayEvent.offset = currentResize.originalOffset;
            allDayEvent.span = currentResize.originalSpan;
            const newDates = this.getAllDayEventResizedDates(allDayEvent.event, daysDiff, allDayEventResizingBeforeStart);
            this.eventTimesChanged.emit({
                newStart: newDates.start,
                newEnd: newDates.end,
                event: allDayEvent.event,
                type: _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_3__.CalendarEventTimesChangedEventType.Resize,
            });
            this.allDayEventResizes.delete(allDayEvent);
        }
    }
    /**
     * @hidden
     */
    getDayColumnWidth(eventRowContainer) {
        return Math.floor(eventRowContainer.offsetWidth / this.days.length);
    }
    /**
     * @hidden
     */
    dateDragEnter(date) {
        this.lastDragEnterDate = date;
    }
    /**
     * @hidden
     */
    eventDropped(dropEvent, date, allDay) {
        if ((0,_common_util__WEBPACK_IMPORTED_MODULE_2__.shouldFireDroppedEvent)(dropEvent, date, allDay, this.calendarId) &&
            this.lastDragEnterDate.getTime() === date.getTime() &&
            (!this.snapDraggedEvents ||
                dropEvent.dropData.event !== this.lastDraggedEvent)) {
            this.eventTimesChanged.emit({
                type: _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_3__.CalendarEventTimesChangedEventType.Drop,
                event: dropEvent.dropData.event,
                newStart: date,
                allDay,
            });
        }
        this.lastDraggedEvent = null;
    }
    /**
     * @hidden
     */
    dragEnter(type) {
        this.eventDragEnterByType[type]++;
    }
    /**
     * @hidden
     */
    dragLeave(type) {
        this.eventDragEnterByType[type]--;
    }
    /**
     * @hidden
     */
    dragStarted(eventsContainerElement, eventElement, event, useY) {
        this.dayColumnWidth = this.getDayColumnWidth(eventsContainerElement);
        const dragHelper = new _common_calendar_drag_helper_provider__WEBPACK_IMPORTED_MODULE_4__.CalendarDragHelper(eventsContainerElement, eventElement);
        this.validateDrag = ({ x, y, transform }) => {
            const isAllowed = this.allDayEventResizes.size === 0 &&
                this.timeEventResizes.size === 0 &&
                dragHelper.validateDrag({
                    x,
                    y,
                    snapDraggedEvents: this.snapDraggedEvents,
                    dragAlreadyMoved: this.dragAlreadyMoved,
                    transform,
                });
            if (isAllowed && this.validateEventTimesChanged) {
                const newEventTimes = this.getDragMovedEventTimes(event, { x, y }, this.dayColumnWidth, useY);
                return this.validateEventTimesChanged({
                    type: _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_3__.CalendarEventTimesChangedEventType.Drag,
                    event: event.event,
                    newStart: newEventTimes.start,
                    newEnd: newEventTimes.end,
                });
            }
            return isAllowed;
        };
        this.dragActive = true;
        this.dragAlreadyMoved = false;
        this.lastDraggedEvent = null;
        this.eventDragEnterByType = {
            allDay: 0,
            time: 0,
        };
        if (!this.snapDraggedEvents && useY) {
            this.view.hourColumns.forEach((column) => {
                const linkedEvent = column.events.find((columnEvent) => columnEvent.event === event.event && columnEvent !== event);
                // hide any linked events while dragging
                if (linkedEvent) {
                    linkedEvent.width = 0;
                    linkedEvent.height = 0;
                }
            });
        }
        this.cdr.markForCheck();
    }
    /**
     * @hidden
     */
    dragMove(dayEvent, dragEvent) {
        const newEventTimes = this.getDragMovedEventTimes(dayEvent, dragEvent, this.dayColumnWidth, true);
        const originalEvent = dayEvent.event;
        const adjustedEvent = Object.assign(Object.assign({}, originalEvent), newEventTimes);
        const tempEvents = this.events.map((event) => {
            if (event === originalEvent) {
                return adjustedEvent;
            }
            return event;
        });
        this.restoreOriginalEvents(tempEvents, new Map([[adjustedEvent, originalEvent]]), this.snapDraggedEvents);
        this.dragAlreadyMoved = true;
    }
    /**
     * @hidden
     */
    allDayEventDragMove() {
        this.dragAlreadyMoved = true;
    }
    /**
     * @hidden
     */
    dragEnded(weekEvent, dragEndEvent, dayWidth, useY = false) {
        this.view = this.getWeekView(this.events);
        this.dragActive = false;
        this.validateDrag = null;
        const { start, end } = this.getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY);
        if ((this.snapDraggedEvents ||
            this.eventDragEnterByType[useY ? 'time' : 'allDay'] > 0) &&
            (0,_common_util__WEBPACK_IMPORTED_MODULE_2__.isDraggedWithinPeriod)(start, end, this.view.period)) {
            this.lastDraggedEvent = weekEvent.event;
            this.eventTimesChanged.emit({
                newStart: start,
                newEnd: end,
                event: weekEvent.event,
                type: _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_3__.CalendarEventTimesChangedEventType.Drag,
                allDay: !useY,
            });
        }
    }
    refreshHeader() {
        this.days = this.utils.getWeekViewHeader(Object.assign({ viewDate: this.viewDate, weekStartsOn: this.weekStartsOn, excluded: this.excludeDays, weekendDays: this.weekendDays }, (0,_common_util__WEBPACK_IMPORTED_MODULE_2__.getWeekViewPeriod)(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
    }
    refreshBody() {
        this.view = this.getWeekView(this.events);
    }
    refreshAll() {
        this.refreshHeader();
        this.refreshBody();
        this.emitBeforeViewRender();
    }
    emitBeforeViewRender() {
        if (this.days && this.view) {
            this.beforeViewRender.emit(Object.assign({ header: this.days }, this.view));
        }
    }
    getWeekView(events) {
        return this.utils.getWeekView(Object.assign({ events, viewDate: this.viewDate, weekStartsOn: this.weekStartsOn, excluded: this.excludeDays, precision: this.precision, absolutePositionedEvents: true, hourSegments: this.hourSegments, hourDuration: this.hourDuration, dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute,
            }, dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute,
            }, segmentHeight: this.hourSegmentHeight, weekendDays: this.weekendDays, minimumEventHeight: this.minimumEventHeight }, (0,_common_util__WEBPACK_IMPORTED_MODULE_2__.getWeekViewPeriod)(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
    }
    getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY) {
        const daysDragged = ((0,_common_util__WEBPACK_IMPORTED_MODULE_2__.roundToNearest)(dragEndEvent.x, dayWidth) / dayWidth) *
            (this.rtl ? -1 : 1);
        const minutesMoved = useY
            ? (0,_common_util__WEBPACK_IMPORTED_MODULE_2__.getMinutesMoved)(dragEndEvent.y, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize, this.hourDuration)
            : 0;
        const start = this.dateAdapter.addMinutes((0,_common_util__WEBPACK_IMPORTED_MODULE_2__.addDaysWithExclusions)(this.dateAdapter, weekEvent.event.start, daysDragged, this.excludeDays), minutesMoved);
        let end;
        if (weekEvent.event.end) {
            end = this.dateAdapter.addMinutes((0,_common_util__WEBPACK_IMPORTED_MODULE_2__.addDaysWithExclusions)(this.dateAdapter, weekEvent.event.end, daysDragged, this.excludeDays), minutesMoved);
        }
        return { start, end };
    }
    restoreOriginalEvents(tempEvents, adjustedEvents, snapDraggedEvents = true) {
        const previousView = this.view;
        if (snapDraggedEvents) {
            this.view = this.getWeekView(tempEvents);
        }
        const adjustedEventsArray = tempEvents.filter((event) => adjustedEvents.has(event));
        this.view.hourColumns.forEach((column, columnIndex) => {
            previousView.hourColumns[columnIndex].hours.forEach((hour, hourIndex) => {
                hour.segments.forEach((segment, segmentIndex) => {
                    column.hours[hourIndex].segments[segmentIndex].cssClass =
                        segment.cssClass;
                });
            });
            adjustedEventsArray.forEach((adjustedEvent) => {
                const originalEvent = adjustedEvents.get(adjustedEvent);
                const existingColumnEvent = column.events.find((columnEvent) => columnEvent.event ===
                    (snapDraggedEvents ? adjustedEvent : originalEvent));
                if (existingColumnEvent) {
                    // restore the original event so trackBy kicks in and the dom isn't changed
                    existingColumnEvent.event = originalEvent;
                    existingColumnEvent['tempEvent'] = adjustedEvent;
                    if (!snapDraggedEvents) {
                        existingColumnEvent.height = 0;
                        existingColumnEvent.width = 0;
                    }
                }
                else {
                    // add a dummy event to the drop so if the event was removed from the original column the drag doesn't end early
                    const event = {
                        event: originalEvent,
                        left: 0,
                        top: 0,
                        height: 0,
                        width: 0,
                        startsBeforeDay: false,
                        endsAfterDay: false,
                        tempEvent: adjustedEvent,
                    };
                    column.events.push(event);
                }
            });
        });
        adjustedEvents.clear();
    }
    getTimeEventResizedDates(calendarEvent, resizeEvent) {
        const newEventDates = {
            start: calendarEvent.start,
            end: (0,_common_util__WEBPACK_IMPORTED_MODULE_2__.getDefaultEventEnd)(this.dateAdapter, calendarEvent, this.minimumEventHeight),
        };
        const { end } = calendarEvent, eventWithoutEnd = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__rest)(calendarEvent, ["end"]);
        const smallestResizes = {
            start: this.dateAdapter.addMinutes(newEventDates.end, this.minimumEventHeight * -1),
            end: (0,_common_util__WEBPACK_IMPORTED_MODULE_2__.getDefaultEventEnd)(this.dateAdapter, eventWithoutEnd, this.minimumEventHeight),
        };
        const modifier = this.rtl ? -1 : 1;
        if (typeof resizeEvent.edges.left !== 'undefined') {
            const daysDiff = Math.round(+resizeEvent.edges.left / this.dayColumnWidth) * modifier;
            const newStart = (0,_common_util__WEBPACK_IMPORTED_MODULE_2__.addDaysWithExclusions)(this.dateAdapter, newEventDates.start, daysDiff, this.excludeDays);
            if (newStart < smallestResizes.start) {
                newEventDates.start = newStart;
            }
            else {
                newEventDates.start = smallestResizes.start;
            }
        }
        else if (typeof resizeEvent.edges.right !== 'undefined') {
            const daysDiff = Math.round(+resizeEvent.edges.right / this.dayColumnWidth) * modifier;
            const newEnd = (0,_common_util__WEBPACK_IMPORTED_MODULE_2__.addDaysWithExclusions)(this.dateAdapter, newEventDates.end, daysDiff, this.excludeDays);
            if (newEnd > smallestResizes.end) {
                newEventDates.end = newEnd;
            }
            else {
                newEventDates.end = smallestResizes.end;
            }
        }
        if (typeof resizeEvent.edges.top !== 'undefined') {
            const minutesMoved = (0,_common_util__WEBPACK_IMPORTED_MODULE_2__.getMinutesMoved)(resizeEvent.edges.top, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize, this.hourDuration);
            const newStart = this.dateAdapter.addMinutes(newEventDates.start, minutesMoved);
            if (newStart < smallestResizes.start) {
                newEventDates.start = newStart;
            }
            else {
                newEventDates.start = smallestResizes.start;
            }
        }
        else if (typeof resizeEvent.edges.bottom !== 'undefined') {
            const minutesMoved = (0,_common_util__WEBPACK_IMPORTED_MODULE_2__.getMinutesMoved)(resizeEvent.edges.bottom, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize, this.hourDuration);
            const newEnd = this.dateAdapter.addMinutes(newEventDates.end, minutesMoved);
            if (newEnd > smallestResizes.end) {
                newEventDates.end = newEnd;
            }
            else {
                newEventDates.end = smallestResizes.end;
            }
        }
        return newEventDates;
    }
    resizeStarted(eventsContainer, event, dayWidth) {
        this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
        const resizeHelper = new _common_calendar_resize_helper_provider__WEBPACK_IMPORTED_MODULE_6__.CalendarResizeHelper(eventsContainer, dayWidth, this.rtl);
        this.validateResize = ({ rectangle, edges }) => {
            const isWithinBoundary = resizeHelper.validateResize({
                rectangle: Object.assign({}, rectangle),
                edges,
            });
            if (isWithinBoundary && this.validateEventTimesChanged) {
                let newEventDates;
                if (!dayWidth) {
                    newEventDates = this.getTimeEventResizedDates(event.event, {
                        rectangle,
                        edges,
                    });
                }
                else {
                    const modifier = this.rtl ? -1 : 1;
                    if (typeof edges.left !== 'undefined') {
                        const diff = Math.round(+edges.left / dayWidth) * modifier;
                        newEventDates = this.getAllDayEventResizedDates(event.event, diff, !this.rtl);
                    }
                    else {
                        const diff = Math.round(+edges.right / dayWidth) * modifier;
                        newEventDates = this.getAllDayEventResizedDates(event.event, diff, this.rtl);
                    }
                }
                return this.validateEventTimesChanged({
                    type: _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_3__.CalendarEventTimesChangedEventType.Resize,
                    event: event.event,
                    newStart: newEventDates.start,
                    newEnd: newEventDates.end,
                });
            }
            return isWithinBoundary;
        };
        this.cdr.markForCheck();
    }
    /**
     * @hidden
     */
    getAllDayEventResizedDates(event, daysDiff, beforeStart) {
        let start = event.start;
        let end = event.end || event.start;
        if (beforeStart) {
            start = (0,_common_util__WEBPACK_IMPORTED_MODULE_2__.addDaysWithExclusions)(this.dateAdapter, start, daysDiff, this.excludeDays);
        }
        else {
            end = (0,_common_util__WEBPACK_IMPORTED_MODULE_2__.addDaysWithExclusions)(this.dateAdapter, end, daysDiff, this.excludeDays);
        }
        return { start, end };
    }
}
CalendarWeekViewComponent.ɵfac = function CalendarWeekViewComponent_Factory(t) { return new (t || CalendarWeekViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_common_calendar_utils_provider__WEBPACK_IMPORTED_MODULE_7__.CalendarUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_8__.DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
CalendarWeekViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CalendarWeekViewComponent, selectors: [["mwl-calendar-week-view"]], inputs: { viewDate: "viewDate", events: "events", excludeDays: "excludeDays", refresh: "refresh", locale: "locale", tooltipPlacement: "tooltipPlacement", tooltipTemplate: "tooltipTemplate", tooltipAppendToBody: "tooltipAppendToBody", tooltipDelay: "tooltipDelay", weekStartsOn: "weekStartsOn", headerTemplate: "headerTemplate", eventTemplate: "eventTemplate", eventTitleTemplate: "eventTitleTemplate", eventActionsTemplate: "eventActionsTemplate", precision: "precision", weekendDays: "weekendDays", snapDraggedEvents: "snapDraggedEvents", hourSegments: "hourSegments", hourDuration: "hourDuration", hourSegmentHeight: "hourSegmentHeight", minimumEventHeight: "minimumEventHeight", dayStartHour: "dayStartHour", dayStartMinute: "dayStartMinute", dayEndHour: "dayEndHour", dayEndMinute: "dayEndMinute", hourSegmentTemplate: "hourSegmentTemplate", eventSnapSize: "eventSnapSize", allDayEventsLabelTemplate: "allDayEventsLabelTemplate", daysInWeek: "daysInWeek", currentTimeMarkerTemplate: "currentTimeMarkerTemplate", validateEventTimesChanged: "validateEventTimesChanged" }, outputs: { dayHeaderClicked: "dayHeaderClicked", eventClicked: "eventClicked", eventTimesChanged: "eventTimesChanged", beforeViewRender: "beforeViewRender", hourSegmentClicked: "hourSegmentClicked" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 20, vars: 9, consts: [["role", "grid", 1, "cal-week-view"], [3, "days", "locale", "customTemplate", "dayHeaderClicked", "eventDropped", "dragEnter"], ["class", "cal-all-day-events", "mwlDroppable", "", 3, "dragEnter", "dragLeave", 4, "ngIf"], ["mwlDroppable", "", 1, "cal-time-events", 3, "dragEnter", "dragLeave"], ["class", "cal-time-label-column", 4, "ngIf"], [1, "cal-day-columns"], ["dayColumns", ""], ["class", "cal-day-column", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", 1, "cal-all-day-events", 3, "dragEnter", "dragLeave"], ["allDayEventsContainer", ""], [1, "cal-time-label-column", 3, "ngTemplateOutlet"], ["class", "cal-day-column", "mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "cal-events-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 1, "cal-day-column", 3, "drop", "dragEnter"], [1, "cal-events-row"], ["eventRowContainer", ""], ["class", "cal-event-container", "mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "cal-draggable", "cal-starts-within-week", "cal-ends-within-week", "ngClass", "width", "marginLeft", "marginRight", "resizeSnapGrid", "validateResize", "dropData", "dragAxis", "dragSnapGrid", "validateDrag", "touchStartLongPress", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event-container", 3, "ngClass", "resizeSnapGrid", "validateResize", "dropData", "dragAxis", "dragSnapGrid", "validateDrag", "touchStartLongPress", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd"], ["event", ""], ["class", "cal-resize-handle cal-resize-handle-before-start", "mwlResizeHandle", "", 3, "resizeEdges", 4, "ngIf"], [3, "locale", "weekEvent", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "daysInWeek", "eventClicked"], ["class", "cal-resize-handle cal-resize-handle-after-end", "mwlResizeHandle", "", 3, "resizeEdges", 4, "ngIf"], ["mwlResizeHandle", "", 1, "cal-resize-handle", "cal-resize-handle-before-start", 3, "resizeEdges"], ["mwlResizeHandle", "", 1, "cal-resize-handle", "cal-resize-handle-after-end", 3, "resizeEdges"], [1, "cal-time-label-column"], ["class", "cal-hour", 3, "cal-hour-odd", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cal-hour"], [3, "height", "segment", "segmentHeight", "locale", "customTemplate", "isTimeLabel", "daysInWeek", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "segment", "segmentHeight", "locale", "customTemplate", "isTimeLabel", "daysInWeek"], [1, "cal-day-column"], [3, "columnDate", "dayStartHour", "dayStartMinute", "dayEndHour", "dayEndMinute", "hourSegments", "hourDuration", "hourSegmentHeight", "customTemplate"], [1, "cal-events-container"], ["class", "cal-event-container", "mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "cal-draggable", "cal-starts-within-day", "cal-ends-within-day", "ngClass", "hidden", "top", "height", "left", "width", "resizeSnapGrid", "validateResize", "allowNegativeResizes", "dropData", "dragAxis", "dragSnapGrid", "touchStartLongPress", "ghostDragEnabled", "ghostElementTemplate", "validateDrag", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event-container", 3, "ngClass", "hidden", "resizeSnapGrid", "validateResize", "allowNegativeResizes", "dropData", "dragAxis", "dragSnapGrid", "touchStartLongPress", "ghostDragEnabled", "ghostElementTemplate", "validateDrag", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd"], [3, "ngTemplateOutlet"], ["weekEventTemplate", ""], [3, "locale", "weekEvent", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDisabled", "tooltipDelay", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "column", "daysInWeek", "eventClicked"], ["mwlDroppable", "", "dragActiveClass", "cal-drag-active", 3, "height", "segment", "segmentHeight", "locale", "customTemplate", "daysInWeek", "clickListenerDisabled", "dragOverClass", "isTimeLabel", "mwlClick", "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragActiveClass", "cal-drag-active", 3, "segment", "segmentHeight", "locale", "customTemplate", "daysInWeek", "clickListenerDisabled", "dragOverClass", "isTimeLabel", "mwlClick", "drop", "dragEnter"]], template: function CalendarWeekViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mwl-calendar-week-view-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dayHeaderClicked", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_dayHeaderClicked_3_listener($event) { return ctx.dayHeaderClicked.emit($event); })("eventDropped", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_eventDropped_3_listener($event) { return ctx.eventDropped({ dropData: $event }, $event.newStart, true); })("dragEnter", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_dragEnter_3_listener($event) { return ctx.dateDragEnter($event.date); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CalendarWeekViewComponent_div_6_Template, 12, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dragEnter", function CalendarWeekViewComponent_Template_div_dragEnter_8_listener() { return ctx.dragEnter("time"); })("dragLeave", function CalendarWeekViewComponent_Template_div_dragLeave_8_listener() { return ctx.dragLeave("time"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CalendarWeekViewComponent_div_10_Template, 4, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CalendarWeekViewComponent_div_15_Template, 11, 13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\n  ");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("days", ctx.days)("locale", ctx.locale)("customTemplate", ctx.headerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.view.allDayEventRows.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.view.hourColumns.length > 0 && ctx.daysInWeek !== 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-resize-active", ctx.timeEventResizes.size > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.view.hourColumns)("ngForTrackBy", ctx.trackByHourColumn);
    } }, directives: [_calendar_week_view_header_component__WEBPACK_IMPORTED_MODULE_9__.CalendarWeekViewHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_11__.DroppableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgTemplateOutlet, angular_resizable_element__WEBPACK_IMPORTED_MODULE_12__.ResizableDirective, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_11__.DraggableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _calendar_week_view_event_component__WEBPACK_IMPORTED_MODULE_13__.CalendarWeekViewEventComponent, angular_resizable_element__WEBPACK_IMPORTED_MODULE_12__.ResizeHandleDirective, _calendar_week_view_hour_segment_component__WEBPACK_IMPORTED_MODULE_14__.CalendarWeekViewHourSegmentComponent, _calendar_week_view_current_time_marker_component__WEBPACK_IMPORTED_MODULE_15__.CalendarWeekViewCurrentTimeMarkerComponent, _common_click_directive__WEBPACK_IMPORTED_MODULE_16__.ClickDirective], encapsulation: 2 });


/***/ }),

/***/ 47175:
/*!****************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/week/calendar-week.module.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarWeekViewComponent": function() { return /* reexport safe */ _calendar_week_view_component__WEBPACK_IMPORTED_MODULE_0__.CalendarWeekViewComponent; },
/* harmony export */   "getWeekViewPeriod": function() { return /* reexport safe */ _common_util__WEBPACK_IMPORTED_MODULE_1__.getWeekViewPeriod; },
/* harmony export */   "ɵCalendarWeekViewHeaderComponent": function() { return /* reexport safe */ _calendar_week_view_header_component__WEBPACK_IMPORTED_MODULE_2__.CalendarWeekViewHeaderComponent; },
/* harmony export */   "ɵCalendarWeekViewEventComponent": function() { return /* reexport safe */ _calendar_week_view_event_component__WEBPACK_IMPORTED_MODULE_3__.CalendarWeekViewEventComponent; },
/* harmony export */   "ɵCalendarWeekViewHourSegmentComponent": function() { return /* reexport safe */ _calendar_week_view_hour_segment_component__WEBPACK_IMPORTED_MODULE_4__.CalendarWeekViewHourSegmentComponent; },
/* harmony export */   "ɵCalendarWeekViewCurrentTimeMarkerComponent": function() { return /* reexport safe */ _calendar_week_view_current_time_marker_component__WEBPACK_IMPORTED_MODULE_5__.CalendarWeekViewCurrentTimeMarkerComponent; },
/* harmony export */   "CalendarWeekModule": function() { return /* binding */ CalendarWeekModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-resizable-element */ 90093);
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-draggable-droppable */ 42915);
/* harmony import */ var _calendar_week_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-week-view.component */ 1913);
/* harmony import */ var _calendar_week_view_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar-week-view-header.component */ 55428);
/* harmony import */ var _calendar_week_view_event_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar-week-view-event.component */ 61862);
/* harmony import */ var _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/calendar-common.module */ 67400);
/* harmony import */ var _calendar_week_view_hour_segment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar-week-view-hour-segment.component */ 20923);
/* harmony import */ var _calendar_week_view_current_time_marker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar-week-view-current-time-marker.component */ 6556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util */ 33878);












// needed for ivy, not part of the public api




class CalendarWeekModule {
}
CalendarWeekModule.ɵfac = function CalendarWeekModule_Factory(t) { return new (t || CalendarWeekModule)(); };
CalendarWeekModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: CalendarWeekModule });
CalendarWeekModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__.ResizableModule,
            angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__.DragAndDropModule,
            _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_10__.CalendarCommonModule,
        ], angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__.ResizableModule,
        angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__.DragAndDropModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CalendarWeekModule, { declarations: [_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_0__.CalendarWeekViewComponent,
        _calendar_week_view_header_component__WEBPACK_IMPORTED_MODULE_2__.CalendarWeekViewHeaderComponent,
        _calendar_week_view_event_component__WEBPACK_IMPORTED_MODULE_3__.CalendarWeekViewEventComponent,
        _calendar_week_view_hour_segment_component__WEBPACK_IMPORTED_MODULE_4__.CalendarWeekViewHourSegmentComponent,
        _calendar_week_view_current_time_marker_component__WEBPACK_IMPORTED_MODULE_5__.CalendarWeekViewCurrentTimeMarkerComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__.ResizableModule,
        angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__.DragAndDropModule,
        _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_10__.CalendarCommonModule], exports: [angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__.ResizableModule,
        angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__.DragAndDropModule,
        _calendar_week_view_component__WEBPACK_IMPORTED_MODULE_0__.CalendarWeekViewComponent,
        _calendar_week_view_header_component__WEBPACK_IMPORTED_MODULE_2__.CalendarWeekViewHeaderComponent,
        _calendar_week_view_event_component__WEBPACK_IMPORTED_MODULE_3__.CalendarWeekViewEventComponent,
        _calendar_week_view_hour_segment_component__WEBPACK_IMPORTED_MODULE_4__.CalendarWeekViewHourSegmentComponent,
        _calendar_week_view_current_time_marker_component__WEBPACK_IMPORTED_MODULE_5__.CalendarWeekViewCurrentTimeMarkerComponent] }); })();


/***/ }),

/***/ 35292:
/*!*************************************************************!*\
  !*** ./projects/demos/app/carbon-ad/carbon-ad.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarbonAdComponent": function() { return /* binding */ CarbonAdComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class CarbonAdComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngAfterViewInit() {
        const script = document.createElement('script');
        script.src =
            '//cdn.carbonads.com/carbon.js?serve=CESIVK3U&placement=mattlewis92githubio';
        script.id = '_carbonads_js';
        this.elementRef.nativeElement.append(script);
    }
}
CarbonAdComponent.ɵfac = function CarbonAdComponent_Factory(t) { return new (t || CarbonAdComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
CarbonAdComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarbonAdComponent, selectors: [["mwl-carbon-ad"]], decls: 0, vars: 0, template: function CarbonAdComponent_Template(rf, ctx) { }, styles: ["#carbonads * {\n  margin: 0;\n  margin: initial;\n  padding: 0;\n  padding: initial;\n}\n\n#carbonads {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  display: flex;\n  max-width: 330px;\n  background-color: #fafafa;\n  box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.1);\n  z-index: 100;\n  margin-bottom: 20px;\n}\n\n#carbonads a {\n  color: inherit;\n  text-decoration: none;\n}\n\n#carbonads a:hover {\n  color: inherit;\n}\n\n#carbonads span {\n  position: relative;\n  display: block;\n  overflow: hidden;\n}\n\n#carbonads .carbon-wrap {\n  display: flex;\n}\n\n#carbonads .carbon-img {\n  display: block;\n  margin: 0;\n  line-height: 1;\n}\n\n#carbonads .carbon-img img {\n  display: block;\n}\n\n#carbonads .carbon-text {\n  font-size: 13px;\n  padding: 10px;\n  margin-bottom: 16px;\n  line-height: 1.5;\n  text-align: left;\n}\n\n#carbonads .carbon-poweredby {\n  display: block;\n  padding: 6px 8px;\n  background: #f1f1f2;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-weight: 600;\n  font-size: 8px;\n  line-height: 1;\n  border-top-left-radius: 3px;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmJvbi1hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFBQSxlQUFBO0VBQ0EsVUFBQTtFQUFBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrSkFBQTtFQUdBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNENBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFEQTtFQUNFLGFBQUE7QUFJRjs7QUFGQTtFQUNFLGNBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQUtGOztBQUhBO0VBQ0UsY0FBQTtBQU1GOztBQUpBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFPRjs7QUFMQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQVFGIiwiZmlsZSI6ImNhcmJvbi1hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjYXJib25hZHMgKiB7XG4gIG1hcmdpbjogaW5pdGlhbDtcbiAgcGFkZGluZzogaW5pdGlhbDtcbn1cbiNjYXJib25hZHMge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sXG4gIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCxcbiAgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiAzMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5OCUpO1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggMXB4IGhzbGEoMCwgMCUsIDAlLCAwLjEpO1xuICB6LWluZGV4OiAxMDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4jY2FyYm9uYWRzIGEge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuI2NhcmJvbmFkcyBhOmhvdmVyIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4jY2FyYm9uYWRzIHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI2NhcmJvbmFkcyAuY2FyYm9uLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuI2NhcmJvbmFkcyAuY2FyYm9uLWltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuI2NhcmJvbmFkcyAuY2FyYm9uLWltZyBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiNjYXJib25hZHMgLmNhcmJvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuI2NhcmJvbmFkcyAuY2FyYm9uLXBvd2VyZWRieSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA2cHggOHB4O1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiA4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cbiJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ 2965:
/*!**************************************************!*\
  !*** ./projects/demos/app/demo-app.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoAppComponent": function() { return /* binding */ DemoAppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 76477);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 35116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 49005);
/* harmony import */ var _stackblitz_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stackblitz/sdk */ 37576);
/* harmony import */ var _demo_modules_demo_utils_sources__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./demo-modules/demo-utils/sources */ 15721);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 50931);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var angulartics2_ga__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angulartics2/ga */ 94821);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-draggable-droppable */ 42915);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _carbon_ad_carbon_ad_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./carbon-ad/carbon-ad.component */ 35292);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-clipboard */ 49565);















const _c0 = ["nav"];
function DemoAppComponent_ng_template_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n      Loading demo...\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n");
} }
function DemoAppComponent_div_102_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n              ");
} }
function DemoAppComponent_div_102_li_34_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 59);
} }
function DemoAppComponent_div_102_li_34_i_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 60);
} }
function DemoAppComponent_div_102_li_34_i_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 61);
} }
const _c1 = function (a0, a1) { return { "fa-copy": a0, "fa-check": a1 }; };
function DemoAppComponent_div_102_li_34_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DemoAppComponent_div_102_li_34_ng_template_14_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r13.copied(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "code", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n              ");
} if (rf & 2) {
    const source_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cbContent", source_r8.contents.raw)("ngbTooltip", "Copy source")("placement", "top-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](9, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 5, ctx_r12.copied$) !== true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 7, ctx_r12.copied$)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", source_r8.contents.highlighted, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function DemoAppComponent_div_102_li_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DemoAppComponent_div_102_li_34_i_6_Template, 1, 0, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DemoAppComponent_div_102_li_34_i_8_Template, 1, 0, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DemoAppComponent_div_102_li_34_i_10_Template, 1, 0, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, DemoAppComponent_div_102_li_34_ng_template_14_Template, 14, 12, "ng-template", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const source_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", source_r8.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "html");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "css");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n                ", source_r8.filename, "\n              ");
} }
function DemoAppComponent_div_102_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DemoAppComponent_div_102_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.editInStackblitz(ctx_r16.activeDemo); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Edit in Stackblitz\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ul", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Live demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, DemoAppComponent_div_102_ng_template_31_Template, 4, 0, "ng-template", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, DemoAppComponent_div_102_li_34_Template, 16, 4, "li", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](23);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.activeDemo.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.activeDemo == null ? null : ctx_r2.activeDemo.sources);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavOutlet", _r5);
} }
const _c2 = function (a0) { return [a0]; };
function DemoAppComponent_li_113_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DemoAppComponent_li_113_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.nav.select("demo"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const demo_r18 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", (ctx_r3.activeDemo == null ? null : ctx_r3.activeDemo.path) === demo_r18.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c2, demo_r18.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n            ", demo_r18.label, "\n          ");
} }
function DemoAppComponent_em_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No matching demos found");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function getSources(folder) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
        const { sources } = yield __webpack_require__(64251)("./" + folder + "/sources.ts");
        return sources.map(({ filename, contents }) => {
            const [, extension] = filename.match(/^.+\.(.+)$/);
            const languages = {
                ts: 'typescript',
                html: 'html',
                css: 'css',
            };
            return {
                filename,
                contents: {
                    raw: contents.raw.default
                        .replace(",\n    RouterModule.forChild([{ path: '', component: DemoComponent }])", '')
                        .replace("\nimport { RouterModule } from '@angular/router';", ''),
                    highlighted: contents.highlighted.default // TODO - move this into a regexp replace for both
                        .replace(',\n    RouterModule.forChild([{ path: <span class="hljs-string">\'\'</span>, component: DemoComponent }])', '')
                        .replace('\n<span class="hljs-keyword">import</span> { RouterModule } from <span class="hljs-string">\'@angular/router\'</span>;', ''),
                },
                language: languages[extension],
            };
        });
    });
}
const dependencyVersions = {
    angular: __webpack_require__(/*! @angular/core/package.json */ 91487).version,
    angularRouter: __webpack_require__(/*! @angular/router/package.json */ 56546).version,
    angularCalendar: __webpack_require__(/*! ../../../package.json */ 4147).version,
    calendarUtils: __webpack_require__(/*! calendar-utils/package.json */ 99041).version,
    angularResizableElement: __webpack_require__(/*! angular-resizable-element/package.json */ 81574).version,
    angularDraggableDroppable: __webpack_require__(/*! angular-draggable-droppable/package.json */ 30621).version,
    dateFns: __webpack_require__(/*! date-fns/package.json */ 71903).version,
    rxjs: __webpack_require__(/*! rxjs/package.json */ 63685).version,
    bootstrap: __webpack_require__(/*! bootstrap-css-only/package.json */ 2312).version,
    zoneJs: __webpack_require__(/*! zone.js/package.json */ 40165).version,
    ngBootstrap: __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/package.json */ 99855).version,
    rrule: __webpack_require__(/*! rrule/package.json */ 82488).version,
    fontAwesome: __webpack_require__(/*! @fortawesome/fontawesome-free/package.json */ 57938).version,
    positioning: __webpack_require__(/*! positioning/package.json */ 35427).version,
    flatpickr: __webpack_require__(/*! flatpickr/package.json */ 89390).version,
    angularxFlatpickr: __webpack_require__(/*! angularx-flatpickr/package.json */ 9209).version,
};
class DemoAppComponent {
    constructor(router, analytics) {
        this.router = router;
        this.demos = [];
        this.filteredDemos = [];
        this.isMenuVisible = false;
        this.firstDemoLoaded = false;
        this.searchText = '';
        this.copied$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        analytics.startTracking();
    }
    ngOnInit() {
        const defaultRoute = this.router.config.find((route) => route.path === '**');
        this.demos = this.router.config
            .filter((route) => route.path !== '**')
            .map((route) => ({
            path: route.path,
            label: route.data.label,
            darkTheme: route.data.darkTheme,
            tags: route.data.tags || [],
        }));
        this.updateFilteredDemos();
        this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1))
            .subscribe(() => {
            this.firstDemoLoaded = true;
        });
        this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationStart))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((event) => {
            if (event.url === '/') {
                return { url: `/${defaultRoute.redirectTo}` };
            }
            return event;
        }))
            .subscribe((event) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.activeDemo = this.demos.find((demo) => `/${demo.path}` === event.url);
            this.activeDemo.sources = yield getSources(this.activeDemo.path);
        }));
        const script = document.createElement('script');
        script.async = true;
        script.setAttribute('data-uid', '7c1627e655');
        script.src = 'https://angular-calendar.ck.page/7c1627e655/index.js';
        document.getElementsByTagName('head')[0].appendChild(script);
    }
    updateFilteredDemos() {
        this.filteredDemos = this.demos.filter((demo) => !this.searchText ||
            [demo.label.toLowerCase(), ...demo.tags].some((tag) => tag.includes(this.searchText.toLowerCase())));
    }
    editInStackblitz(demo) {
        const files = {
            'index.html': `
<link href="https://unpkg.com/bootstrap-css-only@${dependencyVersions.bootstrap}/css/bootstrap.min.css" rel="stylesheet">
<link href="https://unpkg.com/@fortawesome/fontawesome-free@${dependencyVersions.fontAwesome}/css/all.css" rel="stylesheet">
<link href="https://unpkg.com/angular-calendar@${dependencyVersions.angularCalendar}/css/angular-calendar.css" rel="stylesheet">
<link href="https://unpkg.com/flatpickr@${dependencyVersions.flatpickr}/dist/flatpickr.css" rel="stylesheet">
<mwl-demo-component>Loading...</mwl-demo-component>
`.trim(),
            'main.ts': `
import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { DemoModule } from './demo/module';
import { DemoComponent } from './demo/component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoModule
  ],
  bootstrap: [DemoComponent]
})
export class BootstrapModule {}

platformBrowserDynamic().bootstrapModule(BootstrapModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherwise, log the boot error
}).catch(err => console.error(err));
`.trim(),
        };
        _demo_modules_demo_utils_sources__WEBPACK_IMPORTED_MODULE_8__.sources.forEach((source) => {
            files[`demo-utils/${source.filename}`] = source.contents.raw.default;
        });
        demo.sources.forEach((source) => {
            files[`demo/${source.filename}`] = source.contents.raw;
        });
        _stackblitz_sdk__WEBPACK_IMPORTED_MODULE_0__.default.openProject({
            title: 'Angular Calendar Demo',
            description: demo.label,
            template: 'angular-cli',
            tags: ['angular-calendar'],
            files,
            dependencies: {
                '@angular/core': dependencyVersions.angular,
                '@angular/common': dependencyVersions.angular,
                '@angular/compiler': dependencyVersions.angular,
                '@angular/platform-browser': dependencyVersions.angular,
                '@angular/platform-browser-dynamic': dependencyVersions.angular,
                '@angular/router': dependencyVersions.angular,
                '@angular/forms': dependencyVersions.angular,
                '@angular/animations': dependencyVersions.angular,
                rxjs: dependencyVersions.rxjs,
                'zone.js': dependencyVersions.zoneJs,
                'angular-draggable-droppable': `^${dependencyVersions.angularDraggableDroppable}`,
                'angular-resizable-element': `^${dependencyVersions.angularResizableElement}`,
                'date-fns': dependencyVersions.dateFns,
                'angular-calendar': dependencyVersions.angularCalendar,
                '@ng-bootstrap/ng-bootstrap': '5.0.0',
                rrule: dependencyVersions.rrule,
                'calendar-utils': dependencyVersions.calendarUtils,
                flatpickr: dependencyVersions.flatpickr,
                'angularx-flatpickr': dependencyVersions.angularxFlatpickr,
            },
        }, {
            openFile: 'demo/component.ts',
        });
    }
    copied() {
        this.copied$.next(true);
        setTimeout(() => {
            this.copied$.next(false);
        }, 1000);
    }
}
DemoAppComponent.ɵfac = function DemoAppComponent_Factory(t) { return new (t || DemoAppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angulartics2_ga__WEBPACK_IMPORTED_MODULE_9__.Angulartics2GoogleAnalytics)); };
DemoAppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DemoAppComponent, selectors: [["mwl-demo-app"]], viewQuery: function DemoAppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.nav = _t.first);
    } }, decls: 121, vars: 13, consts: [["role", "navigation", 1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "fixed-top"], ["href", "#", 1, "navbar-brand"], ["type", "button", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], [1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "nav", "navbar-nav"], [1, "nav-item", "active"], ["href", "javascript:;", 1, "nav-link"], [1, "fas", "fa-laptop"], [1, "nav-item"], ["href", "https://github.com/mattlewis92/angular-calendar#getting-started", 1, "nav-link"], [1, "fas", "fa-map-pin"], ["href", "https://mattlewis92.github.io/angular-calendar/docs/", 1, "nav-link"], [1, "fas", "fa-book"], ["data-formkit-toggle", "7c1627e655", "href", "javascript:;", 1, "nav-link", 3, "click"], [1, "fas", "fa-fw", "fa-envelope"], ["href", "https://github.com/users/mattlewis92/sponsorship", "target", "_blank", 1, "nav-link", "text-danger"], [1, "fas", "fa-dollar-sign"], [1, "nav", "navbar-nav", "ml-md-auto"], ["href", "https://www.npmjs.com/package/angular-calendar", "target", "_blank", 1, "nav-link", 3, "ngbTooltip"], [1, "fab", "fa-lg", "fa-npm"], [1, "d-lg-none"], ["href", "https://github.com/mattlewis92/angular-calendar", "target", "_blank", 1, "nav-link", 3, "ngbTooltip"], [1, "fab", "fa-lg", "fa-github"], ["href", "https://twitter.com/mattlewis92_", "target", "_blank", 1, "nav-link", "text-primary", 3, "ngbTooltip"], [1, "fab", "fa-lg", "fa-twitter"], ["loading", ""], [1, "container-fluid"], [1, "row", "fill-height"], ["mwlDraggableScrollContainer", "", 1, "col", "fill-height", "scroll-y", "demo-container"], ["class", "card", 4, "ngIf", "ngIfElse"], [1, "fill-height", "sidebar-nav", "scroll-y"], ["type", "search", "placeholder", "Search demos...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "list-unstyled", "spacer-top"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "card"], [1, "card-body", "text-center"], [1, "fas", "fa-spin", "fa-spinner", "fa-5x"], [1, "card-header"], [1, "row"], [1, "col-md-6"], [1, "btn", "btn-info", "float-right", 3, "click"], [1, "fas", "fa-edit"], [1, "card-body"], ["ngbNav", "", 1, "justify-content-start", "nav-tabs"], ["nav", "ngbNav"], ["ngbNavItem", "", "domId", "demo"], ["ngbNavLink", ""], [1, "fas", "fa-fw", "fa-laptop"], ["ngbNavContent", ""], ["ngbNavItem", "", 4, "ngFor", "ngForOf"], [3, "ngbNavOutlet"], [1, "spacer-top"], ["ngbNavItem", ""], [3, "ngSwitch"], ["class", "fab fa-fw fa-html5", 4, "ngSwitchCase"], ["class", "fab fa-fw fa-css3", 4, "ngSwitchCase"], ["class", "fas fa-fw fa-code", 4, "ngSwitchDefault"], [1, "fab", "fa-fw", "fa-html5"], [1, "fab", "fa-fw", "fa-css3"], [1, "fas", "fa-fw", "fa-code"], [1, "code-container"], ["ngxClipboard", "", 1, "btn", "btn-outline-primary", "copy-code", 3, "cbContent", "ngbTooltip", "placement", "click"], [1, "fa", 3, "ngClass"], [3, "innerHTML"], [3, "routerLink", "click"]], template: function DemoAppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Angular 12.0+ calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DemoAppComponent_Template_button_click_5_listener() { return ctx.isMenuVisible = !ctx.isMenuVisible; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Demos\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Getting started\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " API docs\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DemoAppComponent_Template_a_click_40_listener() { return ctx.isMenuVisible = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Subscribe\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " Donate\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "View on npm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "View on GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Follow me on Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](93, DemoAppComponent_ng_template_93_Template, 11, 0, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](102, DemoAppComponent_div_102_Template, 40, 3, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "mwl-carbon-ad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DemoAppComponent_Template_input_ngModelChange_109_listener($event) { return ctx.searchText = $event; })("ngModelChange", function DemoAppComponent_Template_input_ngModelChange_109_listener() { return ctx.updateFilteredDemos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "ul", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](113, DemoAppComponent_li_113_Template, 5, 6, "li", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](116, DemoAppComponent_em_116_Template, 2, 0, "em", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "\n");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("navbar-dark", ctx.activeDemo == null ? null : ctx.activeDemo.darkTheme)("bg-dark", ctx.activeDemo == null ? null : ctx.activeDemo.darkTheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbCollapse", !ctx.isMenuVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbTooltip", "View on npm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbTooltip", "View on GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbTooltip", "Follow me on Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.firstDemoLoaded)("ngIfElse", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filteredDemos);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filteredDemos.length === 0);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbCollapse, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbTooltip, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_11__.DraggableScrollContainerDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _carbon_ad_carbon_ad_component__WEBPACK_IMPORTED_MODULE_13__.CarbonAdComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgSwitchDefault, ngx_clipboard__WEBPACK_IMPORTED_MODULE_15__.ClipboardDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe], styles: ["h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  padding-top: 70px;\n}\n\n.demo-container[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n}\n\n@media (min-width: 768px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    height: 100vh;\n  }\n}\n\n@media (max-width: 768px) {\n  .demo-container[_ngcontent-%COMP%] {\n    flex-basis: initial;\n  }\n\n  .sidebar-nav[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 10px;\n  }\n}\n\n.spacer-top[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.sidebar-nav[_ngcontent-%COMP%] {\n  padding-left: 5px;\n  padding-right: 20px;\n}\n\n.sidebar-nav[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.sidebar-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 90%;\n}\n\n.sidebar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.active) {\n  color: #777;\n}\n\n.sidebar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0275d8;\n  text-decoration: none;\n}\n\n.sidebar-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #373a3c;\n  font-weight: 700;\n}\n\npre[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  padding: 15px;\n}\n\n.fill-height[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.scroll-y[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n\n.code-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.copy-code[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8tYXBwLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztBQUNiIiwiZmlsZSI6ImRlbW8tYXBwLmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgcGFkZGluZy10b3A6IDcwcHg7XG59XG5cbi5kZW1vLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmRlbW8tY29udGFpbmVyIHtcbiAgICBmbGV4LWJhc2lzOiBpbml0aWFsO1xuICB9XG5cbiAgLnNpZGViYXItbmF2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxufVxuXG4uc3BhY2VyLXRvcCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5zaWRlYmFyLW5hdiB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4uc2lkZWJhci1uYXYgaDQge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uc2lkZWJhci1uYXYgdWwge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uc2lkZWJhci1uYXYgbGkge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDkwJTtcbn1cblxuLnNpZGViYXItbmF2IGE6bm90KC5hY3RpdmUpIHtcbiAgY29sb3I6ICM3Nzc7XG59XG5cbi5zaWRlYmFyLW5hdiBhOmhvdmVyIHtcbiAgY29sb3I6ICMwMjc1ZDg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnNpZGViYXItbmF2IGEuYWN0aXZlIHtcbiAgY29sb3I6ICMzNzNhM2M7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbnByZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5maWxsLWhlaWdodCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNjcm9sbC15IHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmNvZGUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY29weS1jb2RlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1cHg7XG4gIHJpZ2h0OiAxNXB4O1xufVxuIl19 */"] });


/***/ }),

/***/ 80495:
/*!***********************************************!*\
  !*** ./projects/demos/app/demo-app.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoAppModule": function() { return /* binding */ DemoAppModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ 20718);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var angulartics2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angulartics2 */ 47078);
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-draggable-droppable */ 42915);
/* harmony import */ var _demo_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo-app.component */ 2965);
/* harmony import */ var _demo_modules_kitchen_sink_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./demo-modules/kitchen-sink/component */ 79362);
/* harmony import */ var _demo_modules_kitchen_sink_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./demo-modules/kitchen-sink/module */ 18582);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ 56321);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-clipboard */ 49565);
/* harmony import */ var _carbon_ad_carbon_ad_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./carbon-ad/carbon-ad.component */ 35292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
















class DemoAppModule {
}
DemoAppModule.ɵfac = function DemoAppModule_Factory(t) { return new (t || DemoAppModule)(); };
DemoAppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DemoAppModule, bootstrap: [_demo_app_component__WEBPACK_IMPORTED_MODULE_1__.DemoAppComponent] });
DemoAppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbCollapseModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbTooltipModule,
            angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__.DragAndDropModule,
            angulartics2__WEBPACK_IMPORTED_MODULE_7__.Angulartics2Module.forRoot({
                developerMode: !_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.production,
            }),
            ngx_clipboard__WEBPACK_IMPORTED_MODULE_9__.ClipboardModule,
            _demo_modules_kitchen_sink_module__WEBPACK_IMPORTED_MODULE_10__.DemoModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot([
                {
                    path: 'kitchen-sink',
                    component: _demo_modules_kitchen_sink_component__WEBPACK_IMPORTED_MODULE_12__.DemoComponent,
                    data: {
                        label: 'Kitchen sink',
                    },
                },
                {
                    path: 'async-events',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_common___ivy_ngcc___fesm2015_http_js-projects_demos_app_demo-mod-c4efce"), __webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_async-events_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/async-events/module */ 27055)).then((m) => m.DemoModule),
                    data: {
                        label: 'Async events',
                    },
                },
                {
                    path: 'optional-event-end-dates',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_optional-event-end-dates_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/optional-event-end-dates/module */ 91641)).then((m) => m.DemoModule),
                    data: {
                        label: 'Optional event end dates',
                    },
                },
                {
                    path: 'editable-deletable-events',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_editable-deletable-events_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/editable-deletable-events/module */ 37314)).then((m) => m.DemoModule),
                    data: {
                        label: 'Editable / deletable events',
                    },
                },
                {
                    path: 'draggable-events',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_draggable-events_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/draggable-events/module */ 73539)).then((m) => m.DemoModule),
                    data: {
                        label: 'Draggable events',
                    },
                },
                {
                    path: 'resizable-events',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_resizable-events_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/resizable-events/module */ 25030)).then((m) => m.DemoModule),
                    data: {
                        label: 'Resizable events',
                    },
                },
                {
                    path: 'month-view-badge-total',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_month-view-badge-total_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/month-view-badge-total/module */ 64899)).then((m) => m.DemoModule),
                    data: {
                        label: 'Month view badge total',
                    },
                },
                {
                    path: 'recurring-events',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_angular-calendar_src_date-adapters_moment_index_ts-projects_demos_app_demo-m-ece9c3"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_recurring-events_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/recurring-events/module */ 9808)).then((m) => m.DemoModule),
                    data: {
                        label: 'Recurring events',
                    },
                },
                {
                    path: 'custom-event-class',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_custom-event-class_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/custom-event-class/module */ 58162)).then((m) => m.DemoModule),
                    data: {
                        label: 'Custom event class',
                    },
                },
                {
                    path: 'clickable-events',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_clickable-events_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/clickable-events/module */ 90972)).then((m) => m.DemoModule),
                    data: {
                        label: 'Clickable events',
                    },
                },
                {
                    path: 'clickable-days',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "projects_demos_app_demo-modules_clickable-days_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/clickable-days/module */ 37271)).then((m) => m.DemoModule),
                    data: {
                        label: 'Clickable times',
                    },
                },
                {
                    path: 'custom-hour-duration',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "projects_demos_app_demo-modules_custom-hour-duration_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/custom-hour-duration/module */ 75097)).then((m) => m.DemoModule),
                    data: {
                        label: 'Custom hour duration',
                    },
                },
                {
                    path: 'day-view-start-end',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "projects_demos_app_demo-modules_day-view-start-end_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/day-view-start-end/module */ 81599)).then((m) => m.DemoModule),
                    data: {
                        label: 'Day view start / end time',
                    },
                },
                {
                    path: 'day-view-hour-split',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "projects_demos_app_demo-modules_day-view-hour-split_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/day-view-hour-split/module */ 70578)).then((m) => m.DemoModule),
                    data: {
                        label: 'Day view hour split',
                    },
                },
                {
                    path: 'navigating-between-views',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "projects_demos_app_demo-modules_navigating-between-views_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/navigating-between-views/module */ 97613)).then((m) => m.DemoModule),
                    data: {
                        label: 'Navigating between views',
                    },
                },
                {
                    path: 'before-view-render',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "projects_demos_app_demo-modules_before-view-render_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/before-view-render/module */ 46170)).then((m) => m.DemoModule),
                    data: {
                        label: 'Before view render',
                        tags: ['disable'],
                    },
                },
                {
                    path: 'exclude-days',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_exclude-days_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/exclude-days/module */ 71471)).then((m) => m.DemoModule),
                    data: {
                        label: 'Exclude Weekends',
                    },
                },
                {
                    path: 'i18n',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "projects_demos_app_demo-modules_i18n_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/i18n/module */ 56087)).then((m) => m.DemoModule),
                    data: {
                        label: 'Internationalisation',
                        tags: ['translation', 'i18n', 'translate', 'locale'],
                    },
                },
                {
                    path: 'draggable-external-events',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_draggable-external-events_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/draggable-external-events/module */ 53857)).then((m) => m.DemoModule),
                    data: {
                        label: 'Draggable external events',
                    },
                },
                {
                    path: 'all-day-events',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_all-day-events_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/all-day-events/module */ 58628)).then((m) => m.DemoModule),
                    data: {
                        label: 'All day events',
                    },
                },
                {
                    path: 'customise-date-formats',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "projects_demos_app_demo-modules_customise-date-formats_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/customise-date-formats/module */ 600)).then((m) => m.DemoModule),
                    data: {
                        label: 'Customise date formats',
                    },
                },
                {
                    path: 'show-dates-on-titles',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_show-dates-on-titles_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/show-dates-on-titles/module */ 15188)).then((m) => m.DemoModule),
                    data: {
                        label: 'Show dates on title',
                    },
                },
                {
                    path: 'disable-tooltips',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_disable-tooltips_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/disable-tooltips/module */ 71645)).then((m) => m.DemoModule),
                    data: {
                        label: 'Disable tooltips',
                    },
                },
                {
                    path: 'additional-event-properties',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_additional-event-properties_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/additional-event-properties/module */ 40850)).then((m) => m.DemoModule),
                    data: {
                        label: 'Additional event properties',
                    },
                },
                {
                    path: 'selectable-period',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "projects_demos_app_demo-modules_selectable-period_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/selectable-period/module */ 31478)).then((m) => m.DemoModule),
                    data: {
                        label: 'Selectable period',
                    },
                },
                {
                    path: 'min-max-date',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "projects_demos_app_demo-modules_min-max-date_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/min-max-date/module */ 54962)).then((m) => m.DemoModule),
                    data: {
                        label: 'Min max date',
                    },
                },
                {
                    path: 'refreshing-the-view',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "projects_demos_app_demo-modules_refreshing-the-view_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/refreshing-the-view/module */ 96251)).then((m) => m.DemoModule),
                    data: {
                        label: 'Refreshing the view',
                    },
                },
                {
                    path: 'custom-templates',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "projects_demos_app_demo-modules_custom-templates_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/custom-templates/module */ 18243)).then((m) => m.DemoModule),
                    data: {
                        label: 'Custom templates',
                    },
                },
                {
                    path: 'group-similar-events',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_group-similar-events_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/group-similar-events/module */ 80510)).then((m) => m.DemoModule),
                    data: {
                        label: 'Group similar events',
                    },
                },
                {
                    path: 'context-menu',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk___ivy_ngcc___fesm2015_platform_js-node_modules_angular_cdk_f-54439e"), __webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_context-menu_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/context-menu/module */ 56910)).then((m) => m.DemoModule),
                    data: {
                        label: 'Context menu',
                        tags: ['right click'],
                    },
                },
                {
                    path: 'week-view-minute-precision',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_week-view-minute-precision_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/week-view-minute-precision/module */ 22687)).then((m) => m.DemoModule),
                    data: {
                        label: 'Week view minute precision',
                    },
                },
                {
                    path: 'extra-month-view-weeks',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "projects_demos_app_demo-modules_extra-month-view-weeks_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/extra-month-view-weeks/module */ 83561)).then((m) => m.DemoModule),
                    data: {
                        label: 'Extra month view weeks',
                    },
                },
                {
                    path: 'disable-slide-animation',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_disable-slide-animation_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/disable-slide-animation/module */ 30710)).then((m) => m.DemoModule),
                    data: {
                        label: 'Disable slide animation',
                    },
                },
                {
                    path: 'no-events-label',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_no-events-label_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/no-events-label/module */ 73265)).then((m) => m.DemoModule),
                    data: {
                        label: 'No events label',
                    },
                },
                {
                    path: 'moment',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_angular-calendar_src_date-adapters_moment_index_ts-projects_demos_app_demo-m-ece9c3"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("projects_demos_app_demo-modules_moment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/moment/module */ 81900)).then((m) => m.DemoModule),
                    data: {
                        label: 'Use moment',
                    },
                },
                {
                    path: 'dayjs',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_angular-calendar_src_date-adapters_moment_index_ts-projects_demos_app_demo-m-ece9c3"), __webpack_require__.e("projects_demos_app_demo-modules_dayjs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/dayjs/module */ 23657)).then((m) => m.DemoModule),
                    data: {
                        label: 'Use dayjs',
                    },
                },
                {
                    path: 'day-view-scheduler',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_day-view-scheduler_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/day-view-scheduler/module */ 63270)).then((m) => m.DemoModule),
                    data: {
                        label: 'Day view scheduler',
                    },
                },
                {
                    path: 'drag-to-create-events',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "projects_demos_app_demo-modules_drag-to-create-events_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/drag-to-create-events/module */ 56304)).then((m) => m.DemoModule),
                    data: {
                        label: 'Drag to create events',
                    },
                },
                {
                    path: 'responsive-week-view',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk___ivy_ngcc___fesm2015_platform_js-node_modules_angular_cdk_f-54439e"), __webpack_require__.e("projects_demos_app_demo-modules_responsive-week-view_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/responsive-week-view/module */ 74947)).then((m) => m.DemoModule),
                    data: {
                        label: 'Responsive week view',
                    },
                },
                {
                    path: 'dark-theme',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_dark-theme_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/dark-theme/module */ 26754)).then((m) => m.DemoModule),
                    data: {
                        label: 'Dark theme',
                        darkTheme: true,
                    },
                },
                {
                    path: 'week-view-event-margin',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_week-view-event-margin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/week-view-event-margin/module */ 26388)).then((m) => m.DemoModule),
                    data: {
                        label: 'Week view event margin',
                    },
                },
                {
                    path: 'customise-current-time-marker',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "projects_demos_app_demo-modules_customise-current-time-marker_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/customise-current-time-marker/module */ 50641)).then((m) => m.DemoModule),
                    data: {
                        label: 'Customise current time marker',
                    },
                },
                {
                    path: 'public-holidays',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_common___ivy_ngcc___fesm2015_http_js-projects_demos_app_demo-mod-c4efce"), __webpack_require__.e("projects_demos_app_demo-modules_public-holidays_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/public-holidays/module */ 3002)).then((m) => m.DemoModule),
                    data: {
                        label: 'Public holidays',
                    },
                },
                {
                    path: 'scroll-to-current-time',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "projects_demos_app_demo-modules_scroll-to-current-time_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/scroll-to-current-time/module */ 34415)).then((m) => m.DemoModule),
                    data: {
                        label: 'Scroll to current time',
                    },
                },
                {
                    path: 'rtl',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_rtl_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/rtl/module */ 47342)).then((m) => m.DemoModule),
                    data: {
                        label: 'RTL',
                    },
                },
                {
                    path: 'validate-drag-and-resize',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_validate-drag-and-resize_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo-modules/validate-drag-and-resize/module */ 1617)).then((m) => m.DemoModule),
                    data: {
                        label: 'Validate dragging and resizing',
                    },
                },
                {
                    path: '**',
                    redirectTo: 'kitchen-sink',
                },
            ], {
                useHash: true,
                relativeLinkResolution: 'legacy',
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoAppModule, { declarations: [_demo_app_component__WEBPACK_IMPORTED_MODULE_1__.DemoAppComponent, _carbon_ad_carbon_ad_component__WEBPACK_IMPORTED_MODULE_13__.CarbonAdComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbCollapseModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbTooltipModule,
        angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__.DragAndDropModule, angulartics2__WEBPACK_IMPORTED_MODULE_7__.Angulartics2Module, ngx_clipboard__WEBPACK_IMPORTED_MODULE_9__.ClipboardModule,
        _demo_modules_kitchen_sink_module__WEBPACK_IMPORTED_MODULE_10__.DemoModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] }); })();


/***/ }),

/***/ 15721:
/*!***************************************************************!*\
  !*** ./projects/demos/app/demo-modules/demo-utils/sources.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sources": function() { return /* binding */ sources; }
/* harmony export */ });
const sources = [
    {
        filename: 'calendar-header.component.ts',
        contents: {
            raw: __webpack_require__(/*! !!raw-loader!./calendar-header.component */ 74034),
            highlighted: __webpack_require__(/*! !!raw-loader!highlightjs-loader?lang=typescript!./calendar-header.component */ 63980),
        },
    },
    {
        filename: 'colors.ts',
        contents: {
            raw: __webpack_require__(/*! !!raw-loader!./colors */ 43099),
            highlighted: __webpack_require__(/*! !!raw-loader!highlightjs-loader?lang=typescript!./colors */ 64096),
        },
    },
    {
        filename: 'module.ts',
        contents: {
            raw: __webpack_require__(/*! !!raw-loader!./module */ 92328),
            highlighted: __webpack_require__(/*! !!raw-loader!highlightjs-loader?lang=typescript!./module */ 71320),
        },
    },
];


/***/ }),

/***/ 79362:
/*!*******************************************************************!*\
  !*** ./projects/demos/app/demo-modules/kitchen-sink/component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoComponent": function() { return /* binding */ DemoComponent; }
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 12260);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 66186);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 5660);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 64005);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 24480);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 28269);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 77326);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 88703);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 50931);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-calendar */ 4606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_calendar_src_modules_common_calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/common/calendar-previous-view.directive */ 31726);
/* harmony import */ var _angular_calendar_src_modules_common_calendar_today_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/common/calendar-today.directive */ 22167);
/* harmony import */ var _angular_calendar_src_modules_common_calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/common/calendar-next-view.directive */ 60897);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_calendar_src_modules_month_calendar_month_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/month/calendar-month-view.component */ 21426);
/* harmony import */ var _angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/week/calendar-week-view.component */ 1913);
/* harmony import */ var _angular_calendar_src_modules_day_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/day/calendar-day-view.component */ 50811);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angularx-flatpickr */ 76537);
/* harmony import */ var _angular_calendar_src_modules_common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/common/calendar-date.pipe */ 12153);















const _c0 = ["modalContent"];
function DemoComponent_mwl_calendar_month_view_44_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-month-view", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dayClicked", function DemoComponent_mwl_calendar_month_view_44_Template_mwl_calendar_month_view_dayClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.dayClicked($event.day); })("eventClicked", function DemoComponent_mwl_calendar_month_view_44_Template_mwl_calendar_month_view_eventClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.handleEvent("Clicked", $event.event); })("eventTimesChanged", function DemoComponent_mwl_calendar_month_view_44_Template_mwl_calendar_month_view_eventTimesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.eventTimesChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r0.viewDate)("events", ctx_r0.events)("refresh", ctx_r0.refresh)("activeDayIsOpen", ctx_r0.activeDayIsOpen);
} }
function DemoComponent_mwl_calendar_week_view_46_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-week-view", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventClicked", function DemoComponent_mwl_calendar_week_view_46_Template_mwl_calendar_week_view_eventClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.handleEvent("Clicked", $event.event); })("eventTimesChanged", function DemoComponent_mwl_calendar_week_view_46_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.eventTimesChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r1.viewDate)("events", ctx_r1.events)("refresh", ctx_r1.refresh);
} }
function DemoComponent_mwl_calendar_day_view_48_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-day-view", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventClicked", function DemoComponent_mwl_calendar_day_view_48_Template_mwl_calendar_day_view_eventClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.handleEvent("Clicked", $event.event); })("eventTimesChanged", function DemoComponent_mwl_calendar_day_view_48_Template_mwl_calendar_day_view_eventTimesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.eventTimesChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r2.viewDate)("events", ctx_r2.events)("refresh", ctx_r2.refresh);
} }
function DemoComponent_tr_94_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DemoComponent_tr_94_Template_input_ngModelChange_4_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const event_r16 = restoredCtx.$implicit; return event_r16.title = $event; })("keyup", function DemoComponent_tr_94_Template_input_keyup_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.refresh.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DemoComponent_tr_94_Template_input_ngModelChange_9_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const event_r16 = restoredCtx.$implicit; return event_r16.color.primary = $event; })("change", function DemoComponent_tr_94_Template_input_change_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.refresh.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DemoComponent_tr_94_Template_input_ngModelChange_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const event_r16 = restoredCtx.$implicit; return event_r16.color.secondary = $event; })("change", function DemoComponent_tr_94_Template_input_change_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.refresh.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DemoComponent_tr_94_Template_input_ngModelChange_19_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const event_r16 = restoredCtx.$implicit; return event_r16.start = $event; })("ngModelChange", function DemoComponent_tr_94_Template_input_ngModelChange_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.refresh.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DemoComponent_tr_94_Template_input_ngModelChange_24_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const event_r16 = restoredCtx.$implicit; return event_r16.end = $event; })("ngModelChange", function DemoComponent_tr_94_Template_input_ngModelChange_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.refresh.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoComponent_tr_94_Template_button_click_29_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const event_r16 = restoredCtx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.deleteEvent(event_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n            Delete\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", event_r16.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", event_r16.color.primary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", event_r16.color.secondary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", event_r16.start)("altInput", true)("convertModelValue", true)("enableTime", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", event_r16.end)("altInput", true)("convertModelValue", true)("enableTime", true);
} }
function DemoComponent_ng_template_99_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Event action occurred");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoComponent_ng_template_99_Template_button_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const close_r29 = restoredCtx.close; return close_r29(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n      Action:\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n      Event:\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoComponent_ng_template_99_Template_button_click_31_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const close_r29 = restoredCtx.close; return close_r29(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n      OK\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n");
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.modalData == null ? null : ctx_r5.modalData.action);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 2, ctx_r5.modalData == null ? null : ctx_r5.modalData.event));
} }
const colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3',
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF',
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA',
    },
};
class DemoComponent {
    constructor(modal) {
        this.modal = modal;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_1__.CalendarView.Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_1__.CalendarView;
        this.viewDate = new Date();
        this.actions = [
            {
                label: '<i class="fas fa-fw fa-pencil-alt"></i>',
                a11yLabel: 'Edit',
                onClick: ({ event }) => {
                    this.handleEvent('Edited', event);
                },
            },
            {
                label: '<i class="fas fa-fw fa-trash-alt"></i>',
                a11yLabel: 'Delete',
                onClick: ({ event }) => {
                    this.events = this.events.filter((iEvent) => iEvent !== event);
                    this.handleEvent('Deleted', event);
                },
            },
        ];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.events = [
            {
                start: (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.default)(new Date()), 1),
                end: (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.default)(new Date(), 1),
                title: 'A 3 day event',
                color: colors.red,
                actions: this.actions,
                allDay: true,
                resizable: {
                    beforeStart: true,
                    afterEnd: true,
                },
                draggable: true,
            },
            {
                start: (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.default)(new Date()),
                title: 'An event with no end date',
                color: colors.yellow,
                actions: this.actions,
            },
            {
                start: (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_6__.default)(new Date()), 3),
                end: (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_6__.default)(new Date()), 3),
                title: 'A long event that spans 2 months',
                color: colors.blue,
                allDay: true,
            },
            {
                start: (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.default)(new Date()), 2),
                end: (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.default)(new Date(), 2),
                title: 'A draggable and resizable event',
                color: colors.yellow,
                actions: this.actions,
                resizable: {
                    beforeStart: true,
                    afterEnd: true,
                },
                draggable: true,
            },
        ];
        this.activeDayIsOpen = true;
    }
    dayClicked({ date, events }) {
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_8__.default)(date, this.viewDate)) {
            if (((0,date_fns__WEBPACK_IMPORTED_MODULE_9__.default)(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
        }
    }
    eventTimesChanged({ event, newStart, newEnd, }) {
        this.events = this.events.map((iEvent) => {
            if (iEvent === event) {
                return Object.assign(Object.assign({}, event), { start: newStart, end: newEnd });
            }
            return iEvent;
        });
        this.handleEvent('Dropped or resized', event);
    }
    handleEvent(action, event) {
        this.modalData = { event, action };
        this.modal.open(this.modalContent, { size: 'lg' });
    }
    addEvent() {
        this.events = [
            ...this.events,
            {
                title: 'New event',
                start: (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.default)(new Date()),
                end: (0,date_fns__WEBPACK_IMPORTED_MODULE_10__.default)(new Date()),
                color: colors.red,
                draggable: true,
                resizable: {
                    beforeStart: true,
                    afterEnd: true,
                },
            },
        ];
    }
    deleteEvent(eventToDelete) {
        this.events = this.events.filter((event) => event !== eventToDelete);
    }
    setView(view) {
        this.view = view;
    }
    closeOpenMonthViewDay() {
        this.activeDayIsOpen = false;
    }
}
DemoComponent.ɵfac = function DemoComponent_Factory(t) { return new (t || DemoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModal)); };
DemoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DemoComponent, selectors: [["mwl-demo-component"]], viewQuery: function DemoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modalContent = _t.first);
    } }, decls: 102, vars: 21, consts: [[1, "row", "text-center"], [1, "col-md-4"], [1, "btn-group"], ["mwlCalendarPreviousView", "", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], ["mwlCalendarToday", "", 1, "btn", "btn-outline-secondary", 3, "viewDate", "viewDateChange"], ["mwlCalendarNextView", "", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], [1, "btn", "btn-primary", 3, "click"], [3, "ngSwitch"], [3, "viewDate", "events", "refresh", "activeDayIsOpen", "dayClicked", "eventClicked", "eventTimesChanged", 4, "ngSwitchCase"], [3, "viewDate", "events", "refresh", "eventClicked", "eventTimesChanged", 4, "ngSwitchCase"], [1, "btn", "btn-primary", "float-right", 3, "click"], [1, "clearfix"], [1, "table-responsive"], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], ["modalContent", ""], [3, "viewDate", "events", "refresh", "activeDayIsOpen", "dayClicked", "eventClicked", "eventTimesChanged"], [3, "viewDate", "events", "refresh", "eventClicked", "eventTimesChanged"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["type", "color", 3, "ngModel", "ngModelChange", "change"], ["type", "text", "mwlFlatpickr", "", "dateFormat", "Y-m-dTH:i", "altFormat", "F j, Y H:i", "placeholder", "Not set", 1, "form-control", 3, "ngModel", "altInput", "convertModelValue", "enableTime", "ngModelChange"], [1, "btn", "btn-danger", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"]], template: function DemoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function DemoComponent_Template_div_viewDateChange_6_listener($event) { return ctx.viewDate = $event; })("viewDateChange", function DemoComponent_Template_div_viewDateChange_6_listener() { return ctx.closeOpenMonthViewDay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n        Previous\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function DemoComponent_Template_div_viewDateChange_9_listener($event) { return ctx.viewDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n        Today\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function DemoComponent_Template_div_viewDateChange_12_listener($event) { return ctx.viewDate = $event; })("viewDateChange", function DemoComponent_Template_div_viewDateChange_12_listener() { return ctx.closeOpenMonthViewDay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n        Next\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "calendarDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoComponent_Template_div_click_28_listener() { return ctx.setView(ctx.CalendarView.Month); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n        Month\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoComponent_Template_div_click_31_listener() { return ctx.setView(ctx.CalendarView.Week); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n        Week\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoComponent_Template_div_click_34_listener() { return ctx.setView(ctx.CalendarView.Day); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n        Day\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, DemoComponent_mwl_calendar_month_view_44_Template, 2, 4, "mwl-calendar-month-view", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, DemoComponent_mwl_calendar_week_view_46_Template, 2, 3, "mwl-calendar-week-view", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, DemoComponent_mwl_calendar_day_view_48_Template, 2, 3, "mwl-calendar-day-view", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\n  Edit events\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoComponent_Template_button_click_58_listener() { return ctx.addEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\n    Add new\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Primary color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Secondary color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Starts at");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Ends at");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, DemoComponent_tr_94_Template, 33, 11, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, DemoComponent_ng_template_99_Template, 35, 4, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](21, 17, ctx.viewDate, ctx.view + "ViewTitle", "en"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.view === ctx.CalendarView.Month);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.view === ctx.CalendarView.Week);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.view === ctx.CalendarView.Day);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.CalendarView.Month);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.CalendarView.Week);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.CalendarView.Day);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.events);
    } }, directives: [_angular_calendar_src_modules_common_calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_12__.CalendarPreviousViewDirective, _angular_calendar_src_modules_common_calendar_today_directive__WEBPACK_IMPORTED_MODULE_13__.CalendarTodayDirective, _angular_calendar_src_modules_common_calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_14__.CalendarNextViewDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_calendar_src_modules_month_calendar_month_view_component__WEBPACK_IMPORTED_MODULE_16__.CalendarMonthViewComponent, _angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_17__.CalendarWeekViewComponent, _angular_calendar_src_modules_day_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_18__.CalendarDayViewComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgModel, angularx_flatpickr__WEBPACK_IMPORTED_MODULE_20__.FlatpickrDirective], pipes: [_angular_calendar_src_modules_common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_21__.CalendarDatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.JsonPipe], styles: ["h3[_ngcontent-%COMP%] {\n        margin: 0 0 10px;\n      }\n\n      pre[_ngcontent-%COMP%] {\n        background-color: #f5f5f5;\n        padding: 15px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxnQkFBZ0I7TUFDbEI7O01BRUE7UUFDRSx5QkFBeUI7UUFDekIsYUFBYTtNQUNmIiwiZmlsZSI6ImNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgaDMge1xuICAgICAgICBtYXJnaW46IDAgMCAxMHB4O1xuICAgICAgfVxuXG4gICAgICBwcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgfVxuICAgICJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 18582:
/*!****************************************************************!*\
  !*** ./projects/demos/app/demo-modules/kitchen-sink/module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoModule": function() { return /* binding */ DemoModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularx-flatpickr */ 76537);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/calendar.module */ 3746);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-calendar */ 90008);
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ 20789);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component */ 79362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);










class DemoModule {
}
DemoModule.ɵfac = function DemoModule_Factory(t) { return new (t || DemoModule)(); };
DemoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DemoModule });
DemoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModalModule,
            angularx_flatpickr__WEBPACK_IMPORTED_MODULE_4__.FlatpickrModule.forRoot(),
            angular_calendar__WEBPACK_IMPORTED_MODULE_5__.CalendarModule.forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_6__.DateAdapter,
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_7__.adapterFactory,
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoModule, { declarations: [_component__WEBPACK_IMPORTED_MODULE_8__.DemoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModalModule, angularx_flatpickr__WEBPACK_IMPORTED_MODULE_4__.FlatpickrModule, angular_calendar__WEBPACK_IMPORTED_MODULE_5__.CalendarModule], exports: [_component__WEBPACK_IMPORTED_MODULE_8__.DemoComponent] }); })();


/***/ }),

/***/ 56321:
/*!****************************************************!*\
  !*** ./projects/demos/environments/environment.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 73747:
/*!********************************!*\
  !*** ./projects/demos/main.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_demo_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/demo-app.module */ 80495);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environments/environment */ 56321);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.platformBrowser()
    .bootstrapModule(_app_demo_app_module__WEBPACK_IMPORTED_MODULE_3__.DemoAppModule)
    .catch((err) => console.log(err));


/***/ }),

/***/ 63980:
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./projects/demos/app/demo-modules/demo-utils/calendar-header.component.ts ***!
  \**********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, Input, Output, EventEmitter } from '@angular/core';\nimport { CalendarView } from 'angular-calendar';\n\n@Component({\n  selector: 'mwl-demo-utils-calendar-header',\n  template: `\n    &lt;div class=\"row text-center\"&gt;\n      &lt;div class=\"col-md-4\"&gt;\n        &lt;div class=\"btn-group\"&gt;\n          &lt;div\n            class=\"btn btn-primary\"\n            mwlCalendarPreviousView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\"\n          &gt;\n            Previous\n          &lt;/div&gt;\n          &lt;div\n            class=\"btn btn-outline-secondary\"\n            mwlCalendarToday\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\"\n          &gt;\n            Today\n          &lt;/div&gt;\n          &lt;div\n            class=\"btn btn-primary\"\n            mwlCalendarNextView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\"\n          &gt;\n            Next\n          &lt;/div&gt;\n        &lt;/div&gt;\n      &lt;/div&gt;\n      &lt;div class=\"col-md-4\"&gt;\n        &lt;h3&gt;{{ viewDate | calendarDate: view + 'ViewTitle':locale }}&lt;/h3&gt;\n      &lt;/div&gt;\n      &lt;div class=\"col-md-4\"&gt;\n        &lt;div class=\"btn-group\"&gt;\n          &lt;div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit(CalendarView.Month)\"\n            [class.active]=\"view === CalendarView.Month\"\n          &gt;\n            Month\n          &lt;/div&gt;\n          &lt;div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit(CalendarView.Week)\"\n            [class.active]=\"view === CalendarView.Week\"\n          &gt;\n            Week\n          &lt;/div&gt;\n          &lt;div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit(CalendarView.Day)\"\n            [class.active]=\"view === CalendarView.Day\"\n          &gt;\n            Day\n          &lt;/div&gt;\n        &lt;/div&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;br /&gt;\n  `,\n})\nexport class CalendarHeaderComponent {\n  @Input() view: CalendarView;\n\n  @Input() viewDate: Date;\n\n  @Input() locale: string = 'en';\n\n  @Output() viewChange = new EventEmitter&lt;CalendarView&gt;();\n\n  @Output() viewDateChange = new EventEmitter&lt;Date&gt;();\n\n  CalendarView = CalendarView;\n}\n");

/***/ }),

/***/ 64096:
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./projects/demos/app/demo-modules/demo-utils/colors.ts ***!
  \***************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">const</span> colors: <span class=\"hljs-built_in\">any</span> = {\n  red: {\n    primary: <span class=\"hljs-string\">'#ad2121'</span>,\n    secondary: <span class=\"hljs-string\">'#FAE3E3'</span>,\n  },\n  blue: {\n    primary: <span class=\"hljs-string\">'#1e90ff'</span>,\n    secondary: <span class=\"hljs-string\">'#D1E8FF'</span>,\n  },\n  yellow: {\n    primary: <span class=\"hljs-string\">'#e3bc08'</span>,\n    secondary: <span class=\"hljs-string\">'#FDF1BA'</span>,\n  },\n};\n");

/***/ }),

/***/ 71320:
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./projects/demos/app/demo-modules/demo-utils/module.ts ***!
  \***************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"hljs-keyword\">import</span> { NgModule } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CommonModule } from <span class=\"hljs-string\">'@angular/common'</span>;\n<span class=\"hljs-keyword\">import</span> { FormsModule } from <span class=\"hljs-string\">'@angular/forms'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarModule } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarHeaderComponent } from <span class=\"hljs-string\">'./calendar-header.component'</span>;\n\n@NgModule({\n  imports: [CommonModule, FormsModule, CalendarModule],\n  declarations: [CalendarHeaderComponent],\n  exports: [CalendarHeaderComponent],\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoUtilsModule {}\n");

/***/ }),

/***/ 74034:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/demos/app/demo-modules/demo-utils/calendar-header.component.ts ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, Input, Output, EventEmitter } from '@angular/core';\nimport { CalendarView } from 'angular-calendar';\n\n@Component({\n  selector: 'mwl-demo-utils-calendar-header',\n  template: `\n    <div class=\"row text-center\">\n      <div class=\"col-md-4\">\n        <div class=\"btn-group\">\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarPreviousView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\"\n          >\n            Previous\n          </div>\n          <div\n            class=\"btn btn-outline-secondary\"\n            mwlCalendarToday\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\"\n          >\n            Today\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarNextView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\"\n          >\n            Next\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <h3>{{ viewDate | calendarDate: view + 'ViewTitle':locale }}</h3>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"btn-group\">\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit(CalendarView.Month)\"\n            [class.active]=\"view === CalendarView.Month\"\n          >\n            Month\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit(CalendarView.Week)\"\n            [class.active]=\"view === CalendarView.Week\"\n          >\n            Week\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit(CalendarView.Day)\"\n            [class.active]=\"view === CalendarView.Day\"\n          >\n            Day\n          </div>\n        </div>\n      </div>\n    </div>\n    <br />\n  `,\n})\nexport class CalendarHeaderComponent {\n  @Input() view: CalendarView;\n\n  @Input() viewDate: Date;\n\n  @Input() locale: string = 'en';\n\n  @Output() viewChange = new EventEmitter<CalendarView>();\n\n  @Output() viewDateChange = new EventEmitter<Date>();\n\n  CalendarView = CalendarView;\n}\n");

/***/ }),

/***/ 43099:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/demos/app/demo-modules/demo-utils/colors.ts ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("export const colors: any = {\n  red: {\n    primary: '#ad2121',\n    secondary: '#FAE3E3',\n  },\n  blue: {\n    primary: '#1e90ff',\n    secondary: '#D1E8FF',\n  },\n  yellow: {\n    primary: '#e3bc08',\n    secondary: '#FDF1BA',\n  },\n};\n");

/***/ }),

/***/ 92328:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/demos/app/demo-modules/demo-utils/module.ts ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { FormsModule } from '@angular/forms';\nimport { CalendarModule } from 'angular-calendar';\nimport { CalendarHeaderComponent } from './calendar-header.component';\n\n@NgModule({\n  imports: [CommonModule, FormsModule, CalendarModule],\n  declarations: [CalendarHeaderComponent],\n  exports: [CalendarHeaderComponent],\n})\nexport class DemoUtilsModule {}\n");

/***/ }),

/***/ 64251:
/*!**************************************************************************************!*\
  !*** ./projects/demos/app/demo-modules/ lazy ^\.\/.*\/sources\.ts$ namespace object ***!
  \**************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./additional-event-properties/sources.ts": [
		84848,
		"projects_demos_app_demo-modules_additional-event-properties_sources_ts"
	],
	"./all-day-events/sources.ts": [
		19231,
		"projects_demos_app_demo-modules_all-day-events_sources_ts"
	],
	"./async-events/sources.ts": [
		29776,
		"projects_demos_app_demo-modules_async-events_sources_ts"
	],
	"./before-view-render/sources.ts": [
		64184,
		"projects_demos_app_demo-modules_before-view-render_sources_ts"
	],
	"./clickable-days/sources.ts": [
		97097,
		"projects_demos_app_demo-modules_clickable-days_sources_ts"
	],
	"./clickable-events/sources.ts": [
		57296,
		"projects_demos_app_demo-modules_clickable-events_sources_ts"
	],
	"./context-menu/sources.ts": [
		68822,
		"projects_demos_app_demo-modules_context-menu_sources_ts"
	],
	"./custom-event-class/sources.ts": [
		36385,
		"projects_demos_app_demo-modules_custom-event-class_sources_ts"
	],
	"./custom-hour-duration/sources.ts": [
		21525,
		"projects_demos_app_demo-modules_custom-hour-duration_sources_ts"
	],
	"./custom-templates/sources.ts": [
		4425,
		"projects_demos_app_demo-modules_custom-templates_sources_ts"
	],
	"./customise-current-time-marker/sources.ts": [
		40636,
		"projects_demos_app_demo-modules_customise-current-time-marker_sources_ts"
	],
	"./customise-date-formats/sources.ts": [
		19158,
		"projects_demos_app_demo-modules_customise-date-formats_sources_ts"
	],
	"./dark-theme/sources.ts": [
		57263,
		"projects_demos_app_demo-modules_dark-theme_sources_ts"
	],
	"./day-view-hour-split/sources.ts": [
		29097,
		"projects_demos_app_demo-modules_day-view-hour-split_sources_ts"
	],
	"./day-view-scheduler/sources.ts": [
		80912,
		"projects_demos_app_demo-modules_day-view-scheduler_sources_ts"
	],
	"./day-view-start-end/sources.ts": [
		90400,
		"projects_demos_app_demo-modules_day-view-start-end_sources_ts"
	],
	"./dayjs/sources.ts": [
		86552,
		"projects_demos_app_demo-modules_dayjs_sources_ts"
	],
	"./demo-utils/sources.ts": [
		15721
	],
	"./disable-slide-animation/sources.ts": [
		42850,
		"projects_demos_app_demo-modules_disable-slide-animation_sources_ts"
	],
	"./disable-tooltips/sources.ts": [
		92340,
		"projects_demos_app_demo-modules_disable-tooltips_sources_ts"
	],
	"./drag-to-create-events/sources.ts": [
		21753,
		"projects_demos_app_demo-modules_drag-to-create-events_sources_ts"
	],
	"./draggable-events/sources.ts": [
		26601,
		"projects_demos_app_demo-modules_draggable-events_sources_ts"
	],
	"./draggable-external-events/sources.ts": [
		62785,
		"projects_demos_app_demo-modules_draggable-external-events_sources_ts"
	],
	"./editable-deletable-events/sources.ts": [
		42118,
		"projects_demos_app_demo-modules_editable-deletable-events_sources_ts"
	],
	"./exclude-days/sources.ts": [
		14751,
		"projects_demos_app_demo-modules_exclude-days_sources_ts"
	],
	"./extra-month-view-weeks/sources.ts": [
		42490,
		"projects_demos_app_demo-modules_extra-month-view-weeks_sources_ts"
	],
	"./group-similar-events/sources.ts": [
		14657,
		"projects_demos_app_demo-modules_group-similar-events_sources_ts"
	],
	"./i18n/sources.ts": [
		3565,
		"projects_demos_app_demo-modules_i18n_sources_ts"
	],
	"./kitchen-sink/sources.ts": [
		20283,
		"projects_demos_app_demo-modules_kitchen-sink_sources_ts"
	],
	"./min-max-date/sources.ts": [
		73345,
		"projects_demos_app_demo-modules_min-max-date_sources_ts"
	],
	"./moment/sources.ts": [
		72646,
		"projects_demos_app_demo-modules_moment_sources_ts"
	],
	"./month-view-badge-total/sources.ts": [
		57408,
		"projects_demos_app_demo-modules_month-view-badge-total_sources_ts"
	],
	"./navigating-between-views/sources.ts": [
		60281,
		"projects_demos_app_demo-modules_navigating-between-views_sources_ts"
	],
	"./no-events-label/sources.ts": [
		99099,
		"projects_demos_app_demo-modules_no-events-label_sources_ts"
	],
	"./optional-event-end-dates/sources.ts": [
		76718,
		"projects_demos_app_demo-modules_optional-event-end-dates_sources_ts"
	],
	"./public-holidays/sources.ts": [
		29114,
		"projects_demos_app_demo-modules_public-holidays_sources_ts"
	],
	"./recurring-events/sources.ts": [
		76806,
		"projects_demos_app_demo-modules_recurring-events_sources_ts"
	],
	"./refreshing-the-view/sources.ts": [
		96812,
		"projects_demos_app_demo-modules_refreshing-the-view_sources_ts"
	],
	"./resizable-events/sources.ts": [
		65147,
		"projects_demos_app_demo-modules_resizable-events_sources_ts"
	],
	"./responsive-week-view/sources.ts": [
		5300,
		"projects_demos_app_demo-modules_responsive-week-view_sources_ts"
	],
	"./rtl/sources.ts": [
		63245,
		"projects_demos_app_demo-modules_rtl_sources_ts"
	],
	"./scroll-to-current-time/sources.ts": [
		53259,
		"projects_demos_app_demo-modules_scroll-to-current-time_sources_ts"
	],
	"./selectable-period/sources.ts": [
		76157,
		"projects_demos_app_demo-modules_selectable-period_sources_ts"
	],
	"./show-dates-on-titles/sources.ts": [
		57443,
		"projects_demos_app_demo-modules_show-dates-on-titles_sources_ts"
	],
	"./validate-drag-and-resize/sources.ts": [
		46456,
		"projects_demos_app_demo-modules_validate-drag-and-resize_sources_ts"
	],
	"./week-view-event-margin/sources.ts": [
		70538,
		"projects_demos_app_demo-modules_week-view-event-margin_sources_ts"
	],
	"./week-view-minute-precision/sources.ts": [
		64185,
		"projects_demos_app_demo-modules_week-view-minute-precision_sources_ts"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 64251;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 4147:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"angular-calendar","version":"0.29.0","description":"A calendar component for angular 12.0+ that can display events on a month, week or day view","funding":{"url":"https://github.com/sponsors/mattlewis92"},"scripts":{"node:memory":"cross-env NODE_OPTIONS=--max_old_space_size=8192","start":"npm run node:memory -- ng serve --open","build:copy-package-json":"copyfiles package.json projects/angular-calendar & copyfiles package.json projects/angular-calendar/schematics/ng-add","build:lib":"ng build angular-calendar --configuration production","build:date-adapters":"tsc -p tsconfig-date-adapters.json && tsc -p tsconfig-date-adapters.json --module es2015 --outDir ./dist/angular-calendar/date-adapters/esm","build:styles":"sass projects/angular-calendar/src/angular-calendar.scss | postcss --output dist/angular-calendar/css/angular-calendar.css","build:clean":"del-cli dist","build:schematics":"tsc projects/angular-calendar/schematics/ng-add/index.ts","build:copyfiles":"copyfiles CHANGELOG.md README.md LICENSE dist/angular-calendar & cp-cli projects/angular-calendar/util/date-adapter-package-date-fns.json dist/angular-calendar/date-adapters/date-fns/package.json & cp-cli projects/angular-calendar/util/date-adapter-package-moment.json dist/angular-calendar/date-adapters/moment/package.json & copyfiles -u 3 projects/angular-calendar/src/**/*.scss dist/angular-calendar/scss & npx copyfiles -u 2 \\"projects/angular-calendar/schematics/**/*.{json,js}\\" dist/angular-calendar","build":"run-s build:copy-package-json build:lib build:date-adapters build:styles build:schematics build:copyfiles","test:single":"cross-env TZ=UTC ng test angular-calendar --watch=false --code-coverage","test:watch":"cross-env TZ=UTC ng test angular-calendar","test:schematics":"cross-env TS_NODE_COMPILER_OPTIONS={\\\\\\"module\\\\\\":\\\\\\"commonjs\\\\\\"} TS_NODE_PREFER_TS_EXTS=true mocha --require ts-node/register projects/angular-calendar/schematics/**/*.spec.ts","test":"run-s lint test:single test:schematics build build:clean","lint:styles":"stylelint \\"{projects,src}/**/*.scss\\" --fix","lint:ts":"ng lint","lint":"run-s lint:ts lint:styles","commit":"git-cz","codecov":"codecov","prerelease":"npm test","pretest:schematics":"npm run build:copy-package-json","release:git-add":"git add package.json package-lock.json","release:git-commit":"git commit -m \'chore: bump version number\'","release:git-changelog":"standard-version --first-release","release:git-push":"git push --follow-tags origin master","release:git":"run-s release:git-add release:git-commit release:git-changelog release:git-push","release:npm-publish":"npm publish dist/angular-calendar","release:npm":"run-s build release:npm-publish","release":"run-s release:git release:npm","postrelease":"npm run gh-pages","gh-pages:demos":"ng build --configuration production","gh-pages:compodoc":"compodoc -p tsconfig-compodoc.json -d dist/demos/docs --disableGraph --disableCoverage --disablePrivate --disableInternal --disableLifeCycleHooks --disableProtected --gaID UA-63367573-2","gh-pages:deploy":"ng deploy","gh-pages":"run-s build:clean gh-pages:demos gh-pages:compodoc gh-pages:deploy build:clean","prepare":"husky install"},"schematics":"./schematics/collection.json","config":{"commitizen":{"path":"@commitlint/prompt"}},"commitlint":{"extends":["@commitlint/config-conventional"]},"repository":{"type":"git","url":"git+https://github.com/mattlewis92/angular-calendar.git"},"keywords":["angular","angular2","calendar","schematics"],"author":"Matt Lewis","license":"MIT","bugs":{"url":"https://github.com/mattlewis92/angular-calendar/issues"},"homepage":"https://github.com/mattlewis92/angular-calendar#readme","devDependencies":{"@angular-devkit/build-angular":"^12.2.3","@angular-eslint/builder":"12.3.1","@angular-eslint/eslint-plugin":"12.3.1","@angular-eslint/eslint-plugin-template":"12.3.1","@angular-eslint/schematics":"12.3.1","@angular-eslint/template-parser":"12.3.1","@angular/animations":"^12.2.3","@angular/cdk":"^12.2.3","@angular/cli":"^12.2.3","@angular/common":"^12.2.3","@angular/compiler":"^12.2.3","@angular/compiler-cli":"^12.2.3","@angular/core":"^12.2.3","@angular/forms":"^12.2.3","@angular/language-service":"^12.2.3","@angular/localize":"^12.2.3","@angular/platform-browser":"^12.2.3","@angular/platform-browser-dynamic":"^12.2.3","@angular/router":"^12.2.3","@commitlint/cli":"^13.1.0","@commitlint/config-conventional":"^13.1.0","@commitlint/prompt":"^13.1.0","@compodoc/compodoc":"^1.1.14","@fortawesome/fontawesome-free":"^5.15.4","@ng-bootstrap/ng-bootstrap":"^10.0.0","@schematics/angular":"^12.2.3","@sinonjs/fake-timers":"^7.1.2","@stackblitz/sdk":"^1.5.2","@types/chai":"^4.2.21","@types/mocha":"^7.0.2","@types/node":"^16.7.9","@types/sinon":"^10.0.2","@types/sinon-chai":"^3.2.5","@typescript-eslint/eslint-plugin":"^4.30.0","@typescript-eslint/parser":"^4.30.0","angular-cli-ghpages":"^1.0.0-rc.2","angulartics2":"^10.0.0","angularx-flatpickr":"^6.6.0","autoprefixer":"^10.3.3","bootstrap-css-only":"^4.4.1","chai":"^4.3.4","codecov":"^3.8.3","commitizen":"^4.2.4","copyfiles":"^2.4.1","core-js":"^3.16.4","cp-cli":"^2.0.0","cross-env":"^7.0.3","date-fns":"^2.23.0","dayjs":"^1.10.6","del-cli":"^4.0.1","eslint":"^7.26.0","flatpickr":"^4.6.9","highlightjs-loader":"^0.2.3","husky":"^7.0.0","karma":"~6.3.4","karma-chrome-launcher":"~3.1.0","karma-coverage":"^2.0.3","karma-mocha":"^2.0.1","karma-mocha-reporter":"^2.2.5","mocha":"^7.2.0","moment":"^2.29.1","moment-timezone":"^0.5.33","ng-packagr":"^12.2.1","ngx-clipboard":"^14.0.1","ngx-contextmenu":"^6.0.0","npm-run-all":"^4.1.5","postcss":"^8.3.6","postcss-cli":"^8.3.1","postcss-flexibility":"^3.0.0","prettier":"^2.3.2","pretty-quick":"^3.1.1","process":"^0.11.10","raw-loader":"^4.0.2","rrule":"^2.6.8","rxjs":"^7.3.0","sass":"^1.38.2","sinon":"^11.1.2","sinon-chai":"^3.7.0","standard-version":"^9.3.1","stylelint":"^13.13.1","stylelint-config-prettier":"^8.0.2","stylelint-config-standard":"^22.0.0","ts-node":"^10.2.1","typescript":"~4.3.5","util":"^0.12.4","zone.js":"~0.11.4"},"peerDependencies":{"@angular/core":">=10.0.0"},"dependencies":{"@scarf/scarf":"^1.1.1","angular-draggable-droppable":"^6.0.0","angular-resizable-element":"^5.0.0","calendar-utils":"^0.9.0","positioning":"^2.0.1","tslib":"^2.0.0"},"sideEffects":["*.css","*.scss"]}');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(73747); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map