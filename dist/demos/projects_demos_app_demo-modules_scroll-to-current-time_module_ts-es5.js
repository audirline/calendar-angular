(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkangular_calendar"] = self["webpackChunkangular_calendar"] || []).push([["projects_demos_app_demo-modules_scroll-to-current-time_module_ts"], {
    /***/
    42845: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            startOfHour
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../toDate/index.js */
      62711);
      /* harmony import */


      var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../_lib/requiredArgs/index.js */
      24252);
      /**
       * @name startOfHour
       * @category Hour Helpers
       * @summary Return the start of an hour for the given date.
       *
       * @description
       * Return the start of an hour for the given date.
       * The result will be in the local timezone.
       *
       * ### v2.0.0 breaking changes:
       *
       * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
       *
       * @param {Date|Number} date - the original date
       * @returns {Date} the start of an hour
       * @throws {TypeError} 1 argument required
       *
       * @example
       * // The start of an hour for 2 September 2014 11:55:00:
       * const result = startOfHour(new Date(2014, 8, 2, 11, 55))
       * //=> Tue Sep 02 2014 11:00:00
       */


      function startOfHour(dirtyDate) {
        (0, _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
        var date = (0, _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
        date.setMinutes(0, 0, 0);
        return date;
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
    12085: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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


      var angular_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular-calendar */
      4606);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! date-fns */
      39628);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! date-fns */
      42845);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! date-fns */
      66186);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _demo_utils_calendar_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../demo-utils/calendar-header.component */
      78767);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_calendar_src_modules_month_calendar_month_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/month/calendar-month-view.component */
      21426);
      /* harmony import */


      var _angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/week/calendar-week-view.component */
      1913);
      /* harmony import */


      var _angular_calendar_src_modules_day_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/day/calendar-day-view.component */
      50811);

      var _c0 = ["scrollContainer"];

      function DemoComponent_mwl_calendar_month_view_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-month-view", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r1.viewDate)("events", ctx_r1.events);
        }
      }

      function DemoComponent_mwl_calendar_week_view_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-week-view", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r2.viewDate)("events", ctx_r2.events);
        }
      }

      function DemoComponent_mwl_calendar_day_view_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-day-view", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r3.viewDate)("events", ctx_r3.events);
        }
      }

      var _DemoComponent = /*#__PURE__*/function () {
        function _DemoComponent(cdr) {
          _classCallCheck(this, _DemoComponent);

          this.cdr = cdr;
          this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_1__.CalendarView.Week;
          this.viewDate = new Date();
          this.events = [];
        }

        _createClass(_DemoComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.scrollToCurrentView();
          }
        }, {
          key: "viewChanged",
          value: function viewChanged() {
            this.cdr.detectChanges();
            this.scrollToCurrentView();
          }
        }, {
          key: "scrollToCurrentView",
          value: function scrollToCurrentView() {
            if (this.view === angular_calendar__WEBPACK_IMPORTED_MODULE_1__.CalendarView.Week || angular_calendar__WEBPACK_IMPORTED_MODULE_1__.CalendarView.Day) {
              // each hour is 60px high, so to get the pixels to scroll it's just the amount of minutes since midnight
              var minutesSinceStartOfDay = (0, date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date()), (0, date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date()));
              var headerHeight = this.view === angular_calendar__WEBPACK_IMPORTED_MODULE_1__.CalendarView.Week ? 60 : 0;
              this.scrollContainer.nativeElement.scrollTop = minutesSinceStartOfDay + headerHeight;
            }
          }
        }]);

        return _DemoComponent;
      }();

      _DemoComponent.ɵfac = function DemoComponent_Factory(t) {
        return new (t || _DemoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
      };

      _DemoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _DemoComponent,
        selectors: [["mwl-demo-component"]],
        viewQuery: function DemoComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollContainer = _t.first);
          }
        },
        decls: 13,
        vars: 6,
        consts: [[3, "view", "viewDate", "viewChange", "viewDateChange"], [1, "scroll-container", 3, "ngSwitch"], ["scrollContainer", ""], [3, "viewDate", "events", 4, "ngSwitchCase"], [3, "viewDate", "events"]],
        template: function DemoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-demo-utils-calendar-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewChange", function DemoComponent_Template_mwl_demo_utils_calendar_header_viewChange_0_listener($event) {
              return ctx.view = $event;
            })("viewDateChange", function DemoComponent_Template_mwl_demo_utils_calendar_header_viewDateChange_0_listener($event) {
              return ctx.viewDate = $event;
            })("viewChange", function DemoComponent_Template_mwl_demo_utils_calendar_header_viewChange_0_listener() {
              return ctx.viewChanged();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DemoComponent_mwl_calendar_month_view_6_Template, 2, 2, "mwl-calendar-month-view", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DemoComponent_mwl_calendar_week_view_8_Template, 2, 2, "mwl-calendar-week-view", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DemoComponent_mwl_calendar_day_view_10_Template, 2, 2, "mwl-calendar-day-view", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.view);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "week");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "day");
          }
        },
        directives: [_demo_utils_calendar_header_component__WEBPACK_IMPORTED_MODULE_5__.CalendarHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitchCase, _angular_calendar_src_modules_month_calendar_month_view_component__WEBPACK_IMPORTED_MODULE_7__.CalendarMonthViewComponent, _angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_8__.CalendarWeekViewComponent, _angular_calendar_src_modules_day_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_9__.CalendarDayViewComponent],
        styles: [".scroll-container[_ngcontent-%COMP%] {\n        height: calc(100vh - 320px);\n        overflow-y: auto;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSwyQkFBMkI7UUFDM0IsZ0JBQWdCO01BQ2xCIiwiZmlsZSI6ImNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgLnNjcm9sbC1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzMjBweCk7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICB9XG4gICAgIl19 */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    34415: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
      12085);
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
//# sourceMappingURL=projects_demos_app_demo-modules_scroll-to-current-time_module_ts-es5.js.map