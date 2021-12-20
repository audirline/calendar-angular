(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkangular_calendar"] = self["webpackChunkangular_calendar"] || []).push([["projects_demos_app_demo-modules_validate-drag-and-resize_module_ts"], {
    /***/
    17672: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            setDay
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _addDays_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../addDays/index.js */
      5660);
      /* harmony import */


      var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../toDate/index.js */
      62711);
      /* harmony import */


      var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_lib/toInteger/index.js */
      76371);
      /* harmony import */


      var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../_lib/requiredArgs/index.js */
      24252);
      /**
       * @name setDay
       * @category Weekday Helpers
       * @summary Set the day of the week to the given date.
       *
       * @description
       * Set the day of the week to the given date.
       *
       * ### v2.0.0 breaking changes:
       *
       * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
       *
       * @param {Date|Number} date - the date to be changed
       * @param {Number} day - the day of the week of the new date
       * @param {Object} [options] - an object with options.
       * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
       * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
       * @returns {Date} the new date with the day of the week set
       * @throws {TypeError} 2 arguments required
       * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
       *
       * @example
       * // Set week day to Sunday, with the default weekStartsOn of Sunday:
       * var result = setDay(new Date(2014, 8, 1), 0)
       * //=> Sun Aug 31 2014 00:00:00
       *
       * @example
       * // Set week day to Sunday, with a weekStartsOn of Monday:
       * var result = setDay(new Date(2014, 8, 1), 0, { weekStartsOn: 1 })
       * //=> Sun Sep 07 2014 00:00:00
       */


      function setDay(dirtyDate, dirtyDay, dirtyOptions) {
        (0, _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
        var options = dirtyOptions || {};
        var locale = options.locale;
        var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
        var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0, _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeWeekStartsOn);
        var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0, _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

        if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
          throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
        }

        var date = (0, _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
        var day = (0, _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDay);
        var currentDay = date.getDay();
        var remainder = day % 7;
        var dayIndex = (remainder + 7) % 7;
        var delta = 7 - weekStartsOn;
        var diff = day < 0 || day > 6 ? day - (currentDay + delta) % 7 : (dayIndex + delta) % 7 - (currentDay + delta) % 7;
        return (0, _addDays_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, diff);
      }
      /***/

    },

    /***/
    27887: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            subSeconds
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_lib/toInteger/index.js */
      76371);
      /* harmony import */


      var _addSeconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../addSeconds/index.js */
      86074);
      /* harmony import */


      var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../_lib/requiredArgs/index.js */
      24252);
      /**
       * @name subSeconds
       * @category Second Helpers
       * @summary Subtract the specified number of seconds from the given date.
       *
       * @description
       * Subtract the specified number of seconds from the given date.
       *
       * ### v2.0.0 breaking changes:
       *
       * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
       *
       * @param {Date|Number} date - the date to be changed
       * @param {Number} amount - the amount of seconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
       * @returns {Date} the new date with the seconds subtracted
       * @throws {TypeError} 2 arguments required
       *
       * @example
       * // Subtract 30 seconds from 10 July 2014 12:45:00:
       * const result = subSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
       * //=> Thu Jul 10 2014 12:44:30
       */


      function subSeconds(dirtyDate, dirtyAmount) {
        (0, _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
        var amount = (0, _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
        return (0, _addSeconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
      }
      /***/

    },

    /***/
    78767: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarHeaderComponent": function CalendarHeaderComponent() {
          return (
            /* binding */
            _CalendarHeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var angular_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular-calendar */
      4606);
      /* harmony import */


      var _angular_calendar_src_modules_common_calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/common/calendar-previous-view.directive */
      31726);
      /* harmony import */


      var _angular_calendar_src_modules_common_calendar_today_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/common/calendar-today.directive */
      22167);
      /* harmony import */


      var _angular_calendar_src_modules_common_calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/common/calendar-next-view.directive */
      60897);
      /* harmony import */


      var _angular_calendar_src_modules_common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/common/calendar-date.pipe */
      12153);

      var _CalendarHeaderComponent = function _CalendarHeaderComponent() {
        _classCallCheck(this, _CalendarHeaderComponent);

        this.locale = 'en';
        this.viewChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_1__.CalendarView;
      };

      _CalendarHeaderComponent.ɵfac = function CalendarHeaderComponent_Factory(t) {
        return new (t || _CalendarHeaderComponent)();
      };

      _CalendarHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CalendarHeaderComponent,
        selectors: [["mwl-demo-utils-calendar-header"]],
        inputs: {
          view: "view",
          viewDate: "viewDate",
          locale: "locale"
        },
        outputs: {
          viewChange: "viewChange",
          viewDateChange: "viewDateChange"
        },
        decls: 43,
        vars: 16,
        consts: [[1, "row", "text-center"], [1, "col-md-4"], [1, "btn-group"], ["mwlCalendarPreviousView", "", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], ["mwlCalendarToday", "", 1, "btn", "btn-outline-secondary", 3, "viewDate", "viewDateChange"], ["mwlCalendarNextView", "", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], [1, "btn", "btn-primary", 3, "click"]],
        template: function CalendarHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_7_listener($event) {
              return ctx.viewDate = $event;
            })("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_7_listener() {
              return ctx.viewDateChange.next(ctx.viewDate);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n            Previous\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_10_listener($event) {
              return ctx.viewDate = $event;
            })("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_10_listener() {
              return ctx.viewDateChange.next(ctx.viewDate);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n            Today\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_13_listener($event) {
              return ctx.viewDate = $event;
            })("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_13_listener() {
              return ctx.viewDateChange.next(ctx.viewDate);
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarHeaderComponent_Template_div_click_29_listener() {
              return ctx.viewChange.emit(ctx.CalendarView.Month);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n            Month\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarHeaderComponent_Template_div_click_32_listener() {
              return ctx.viewChange.emit(ctx.CalendarView.Week);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n            Week\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarHeaderComponent_Template_div_click_35_listener() {
              return ctx.viewChange.emit(ctx.CalendarView.Day);
            });

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
          }

          if (rf & 2) {
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
          }
        },
        directives: [_angular_calendar_src_modules_common_calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_2__.CalendarPreviousViewDirective, _angular_calendar_src_modules_common_calendar_today_directive__WEBPACK_IMPORTED_MODULE_3__.CalendarTodayDirective, _angular_calendar_src_modules_common_calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_4__.CalendarNextViewDirective],
        pipes: [_angular_calendar_src_modules_common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_5__.CalendarDatePipe],
        encapsulation: 2
      });
      /***/
    },

    /***/
    57671: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DemoUtilsModule": function DemoUtilsModule() {
          return (
            /* binding */
            _DemoUtilsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var angular_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular-calendar */
      3746);
      /* harmony import */


      var _calendar_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./calendar-header.component */
      78767);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _DemoUtilsModule = function _DemoUtilsModule() {
        _classCallCheck(this, _DemoUtilsModule);
      };

      _DemoUtilsModule.ɵfac = function DemoUtilsModule_Factory(t) {
        return new (t || _DemoUtilsModule)();
      };

      _DemoUtilsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _DemoUtilsModule
      });
      _DemoUtilsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, angular_calendar__WEBPACK_IMPORTED_MODULE_3__.CalendarModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_DemoUtilsModule, {
          declarations: [_calendar_header_component__WEBPACK_IMPORTED_MODULE_4__.CalendarHeaderComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, angular_calendar__WEBPACK_IMPORTED_MODULE_3__.CalendarModule],
          exports: [_calendar_header_component__WEBPACK_IMPORTED_MODULE_4__.CalendarHeaderComponent]
        });
      })();
      /***/

    },

    /***/
    69858: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DemoComponent": function DemoComponent() {
          return (
            /* binding */
            _DemoComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      50931);
      /* harmony import */


      var angular_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular-calendar */
      4606);
      /* harmony import */


      var _demo_utils_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../demo-utils/colors */
      55155);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! date-fns */
      12260);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! date-fns */
      66186);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! date-fns */
      5660);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! date-fns */
      24480);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! date-fns */
      17672);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! date-fns */
      27887);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! date-fns */
      77326);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _demo_utils_calendar_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../demo-utils/calendar-header.component */
      78767);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_calendar_src_modules_month_calendar_month_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/month/calendar-month-view.component */
      21426);
      /* harmony import */


      var _angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/week/calendar-week-view.component */
      1913);
      /* harmony import */


      var _angular_calendar_src_modules_day_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/day/calendar-day-view.component */
      50811);

      function DemoComponent_mwl_calendar_month_view_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-month-view", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventTimesChanged", function DemoComponent_mwl_calendar_month_view_5_Template_mwl_calendar_month_view_eventTimesChanged_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.eventTimesChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r0.viewDate)("events", ctx_r0.events)("activeDayIsOpen", true)("refresh", ctx_r0.refresh);
        }
      }

      function DemoComponent_mwl_calendar_week_view_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-week-view", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventTimesChanged", function DemoComponent_mwl_calendar_week_view_7_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.eventTimesChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r1.viewDate)("events", ctx_r1.events)("refresh", ctx_r1.refresh)("validateEventTimesChanged", ctx_r1.validateEventTimesChanged);
        }
      }

      function DemoComponent_mwl_calendar_day_view_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-day-view", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventTimesChanged", function DemoComponent_mwl_calendar_day_view_9_Template_mwl_calendar_day_view_eventTimesChanged_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.eventTimesChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r2.viewDate)("events", ctx_r2.events)("refresh", ctx_r2.refresh)("validateEventTimesChanged", ctx_r2.validateEventTimesChanged);
        }
      }

      var _DemoComponent = /*#__PURE__*/function () {
        function _DemoComponent() {
          var _this = this;

          _classCallCheck(this, _DemoComponent);

          this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_1__.CalendarView.Week;
          this.viewDate = new Date();
          this.events = [{
            start: (0, date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date()), 1),
            end: (0, date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(), 1),
            title: 'A 3 day event',
            color: _demo_utils_colors__WEBPACK_IMPORTED_MODULE_5__.colors.blue,
            allDay: true,
            resizable: {
              beforeStart: true,
              afterEnd: true
            },
            draggable: true
          }, {
            start: (0, date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(new Date(), 3)), 2),
            end: (0, date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(new Date(), 3)), 3), 1),
            title: 'An short event',
            color: _demo_utils_colors__WEBPACK_IMPORTED_MODULE_5__.colors.yellow,
            resizable: {
              beforeStart: true,
              afterEnd: true
            },
            draggable: true
          }, {
            start: (0, date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(new Date(), 3)), 5),
            end: (0, date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(new Date(), 3)), 10), 1),
            title: 'A draggable and resizable event',
            color: _demo_utils_colors__WEBPACK_IMPORTED_MODULE_5__.colors.yellow,
            resizable: {
              beforeStart: true,
              afterEnd: true
            },
            draggable: true
          }];
          this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();

          this.validateEventTimesChanged = function (_ref) {
            var event = _ref.event,
                newStart = _ref.newStart,
                newEnd = _ref.newEnd,
                allDay = _ref.allDay;
            var addCssClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (event.allDay) {
              return true;
            }

            delete event.cssClass; // don't allow dragging or resizing events to different days

            var sameDay = (0, date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(newStart, newEnd);

            if (!sameDay) {
              return false;
            } // don't allow dragging events to the same times as other events


            var overlappingEvent = _this.events.find(function (otherEvent) {
              return otherEvent !== event && !otherEvent.allDay && (otherEvent.start < newStart && newStart < otherEvent.end || otherEvent.start < newEnd && newStart < otherEvent.end);
            });

            if (overlappingEvent) {
              if (addCssClass) {
                event.cssClass = 'invalid-position';
              } else {
                return false;
              }
            }

            return true;
          };
        }

        _createClass(_DemoComponent, [{
          key: "eventTimesChanged",
          value: function eventTimesChanged(eventTimesChangedEvent) {
            delete eventTimesChangedEvent.event.cssClass;

            if (this.validateEventTimesChanged(eventTimesChangedEvent, false)) {
              var event = eventTimesChangedEvent.event,
                  newStart = eventTimesChangedEvent.newStart,
                  newEnd = eventTimesChangedEvent.newEnd;
              event.start = newStart;
              event.end = newEnd;
              this.refresh.next();
            }
          }
        }]);

        return _DemoComponent;
      }();

      _DemoComponent.ɵfac = function DemoComponent_Factory(t) {
        return new (t || _DemoComponent)();
      };

      _DemoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _DemoComponent,
        selectors: [["mwl-demo-component"]],
        decls: 12,
        vars: 6,
        consts: [[3, "view", "viewDate", "viewChange", "viewDateChange"], [3, "ngSwitch"], [3, "viewDate", "events", "activeDayIsOpen", "refresh", "eventTimesChanged", 4, "ngSwitchCase"], [3, "viewDate", "events", "refresh", "validateEventTimesChanged", "eventTimesChanged", 4, "ngSwitchCase"], [3, "viewDate", "events", "activeDayIsOpen", "refresh", "eventTimesChanged"], [3, "viewDate", "events", "refresh", "validateEventTimesChanged", "eventTimesChanged"]],
        template: function DemoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-demo-utils-calendar-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewChange", function DemoComponent_Template_mwl_demo_utils_calendar_header_viewChange_0_listener($event) {
              return ctx.view = $event;
            })("viewDateChange", function DemoComponent_Template_mwl_demo_utils_calendar_header_viewDateChange_0_listener($event) {
              return ctx.viewDate = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DemoComponent_mwl_calendar_month_view_5_Template, 2, 4, "mwl-calendar-month-view", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DemoComponent_mwl_calendar_week_view_7_Template, 2, 4, "mwl-calendar-week-view", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DemoComponent_mwl_calendar_day_view_9_Template, 2, 4, "mwl-calendar-day-view", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.view);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "week");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "day");
          }
        },
        directives: [_demo_utils_calendar_header_component__WEBPACK_IMPORTED_MODULE_11__.CalendarHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgSwitchCase, _angular_calendar_src_modules_month_calendar_month_view_component__WEBPACK_IMPORTED_MODULE_13__.CalendarMonthViewComponent, _angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_14__.CalendarWeekViewComponent, _angular_calendar_src_modules_day_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_15__.CalendarDayViewComponent],
        styles: ["\n      .invalid-position .cal-event {\n        background-color: #ad2121 !important;\n        color: #fff;\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxvQ0FBb0M7UUFDcEMsV0FBVztNQUNiIiwiZmlsZSI6ImNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgLmludmFsaWQtcG9zaXRpb24gLmNhbC1ldmVudCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhZDIxMjEgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgIl19 */"],
        encapsulation: 2,
        changeDetection: 0
      });
      /***/
    },

    /***/
    1617: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DemoModule": function DemoModule() {
          return (
            /* binding */
            _DemoModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var angular_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/calendar.module */
      3746);
      /* harmony import */


      var angular_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular-calendar */
      90008);
      /* harmony import */


      var _demo_utils_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../demo-utils/module */
      57671);
      /* harmony import */


      var _component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./component */
      69858);
      /* harmony import */


      var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular-calendar/date-adapters/date-fns */
      20789);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _DemoModule = function _DemoModule() {
        _classCallCheck(this, _DemoModule);
      };

      _DemoModule.ɵfac = function DemoModule_Factory(t) {
        return new (t || _DemoModule)();
      };

      _DemoModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _DemoModule
      });
      _DemoModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, angular_calendar__WEBPACK_IMPORTED_MODULE_2__.CalendarModule.forRoot({
          provide: angular_calendar__WEBPACK_IMPORTED_MODULE_3__.DateAdapter,
          useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_4__.adapterFactory
        }), _demo_utils_module__WEBPACK_IMPORTED_MODULE_5__.DemoUtilsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([{
          path: '',
          component: _component__WEBPACK_IMPORTED_MODULE_7__.DemoComponent
        }])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_DemoModule, {
          declarations: [_component__WEBPACK_IMPORTED_MODULE_7__.DemoComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, angular_calendar__WEBPACK_IMPORTED_MODULE_2__.CalendarModule, _demo_utils_module__WEBPACK_IMPORTED_MODULE_5__.DemoUtilsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
          exports: [_component__WEBPACK_IMPORTED_MODULE_7__.DemoComponent]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=projects_demos_app_demo-modules_validate-drag-and-resize_module_ts-es5.js.map