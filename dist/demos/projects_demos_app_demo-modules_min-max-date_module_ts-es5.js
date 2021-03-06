(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkangular_calendar"] = self["webpackChunkangular_calendar"] || []).push([["projects_demos_app_demo-modules_min-max-date_module_ts"], {
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

      _CalendarHeaderComponent.??fac = function CalendarHeaderComponent_Factory(t) {
        return new (t || _CalendarHeaderComponent)();
      };

      _CalendarHeaderComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_7_listener($event) {
              return ctx.viewDate = $event;
            })("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_7_listener() {
              return ctx.viewDateChange.next(ctx.viewDate);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\n            Previous\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_10_listener($event) {
              return ctx.viewDate = $event;
            })("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_10_listener() {
              return ctx.viewDateChange.next(ctx.viewDate);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "\n            Today\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_13_listener($event) {
              return ctx.viewDate = $event;
            })("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_13_listener() {
              return ctx.viewDateChange.next(ctx.viewDate);
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CalendarHeaderComponent_Template_div_click_29_listener() {
              return ctx.viewChange.emit(ctx.CalendarView.Month);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "\n            Month\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CalendarHeaderComponent_Template_div_click_32_listener() {
              return ctx.viewChange.emit(ctx.CalendarView.Week);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "\n            Week\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CalendarHeaderComponent_Template_div_click_35_listener() {
              return ctx.viewChange.emit(ctx.CalendarView.Day);
            });

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
          }

          if (rf & 2) {
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

      _DemoUtilsModule.??fac = function DemoUtilsModule_Factory(t) {
        return new (t || _DemoUtilsModule)();
      };

      _DemoUtilsModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: _DemoUtilsModule
      });
      _DemoUtilsModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, angular_calendar__WEBPACK_IMPORTED_MODULE_3__.CalendarModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](_DemoUtilsModule, {
          declarations: [_calendar_header_component__WEBPACK_IMPORTED_MODULE_4__.CalendarHeaderComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, angular_calendar__WEBPACK_IMPORTED_MODULE_3__.CalendarModule],
          exports: [_calendar_header_component__WEBPACK_IMPORTED_MODULE_4__.CalendarHeaderComponent]
        });
      })();
      /***/

    },

    /***/
    12322: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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


      var angular_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! angular-calendar */
      4606);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! date-fns */
      5660);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! date-fns */
      48749);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! date-fns */
      71387);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! date-fns */
      12260);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! date-fns */
      81770);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! date-fns */
      94395);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! date-fns */
      66186);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! date-fns */
      1930);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! date-fns */
      25970);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! date-fns */
      88703);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! date-fns */
      11516);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! date-fns */
      64005);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_calendar_src_modules_month_calendar_month_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/month/calendar-month-view.component */
      21426);
      /* harmony import */


      var _angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/week/calendar-week-view.component */
      1913);
      /* harmony import */


      var _angular_calendar_src_modules_day_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/day/calendar-day-view.component */
      50811);
      /* harmony import */


      var _angular_calendar_src_modules_common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/common/calendar-date.pipe */
      12153);

      function DemoComponent_mwl_calendar_month_view_44_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mwl-calendar-month-view", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("beforeViewRender", function DemoComponent_mwl_calendar_month_view_44_Template_mwl_calendar_month_view_beforeViewRender_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r3.beforeMonthViewRender($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("viewDate", ctx_r0.viewDate)("events", ctx_r0.events);
        }
      }

      function DemoComponent_mwl_calendar_week_view_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mwl-calendar-week-view", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("viewDate", ctx_r1.viewDate)("events", ctx_r1.events);
        }
      }

      function DemoComponent_mwl_calendar_day_view_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mwl-calendar-day-view", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("viewDate", ctx_r2.viewDate)("events", ctx_r2.events);
        }
      }

      function addPeriod(period, date, amount) {
        return {
          day: date_fns__WEBPACK_IMPORTED_MODULE_1__["default"],
          week: date_fns__WEBPACK_IMPORTED_MODULE_2__["default"],
          month: date_fns__WEBPACK_IMPORTED_MODULE_3__["default"]
        }[period](date, amount);
      }

      function subPeriod(period, date, amount) {
        return {
          day: date_fns__WEBPACK_IMPORTED_MODULE_4__["default"],
          week: date_fns__WEBPACK_IMPORTED_MODULE_5__["default"],
          month: date_fns__WEBPACK_IMPORTED_MODULE_6__["default"]
        }[period](date, amount);
      }

      function startOfPeriod(period, date) {
        return {
          day: date_fns__WEBPACK_IMPORTED_MODULE_7__["default"],
          week: date_fns__WEBPACK_IMPORTED_MODULE_8__["default"],
          month: date_fns__WEBPACK_IMPORTED_MODULE_9__["default"]
        }[period](date);
      }

      function endOfPeriod(period, date) {
        return {
          day: date_fns__WEBPACK_IMPORTED_MODULE_10__["default"],
          week: date_fns__WEBPACK_IMPORTED_MODULE_11__["default"],
          month: date_fns__WEBPACK_IMPORTED_MODULE_12__["default"]
        }[period](date);
      }

      var _DemoComponent = /*#__PURE__*/function () {
        function _DemoComponent() {
          _classCallCheck(this, _DemoComponent);

          this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_13__.CalendarView.Month;
          this.viewDate = new Date();
          this.events = [];
          this.minDate = (0, date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date(), 1);
          this.maxDate = (0, date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(), 1);
          this.prevBtnDisabled = false;
          this.nextBtnDisabled = false;
          this.dateOrViewChanged();
        }

        _createClass(_DemoComponent, [{
          key: "increment",
          value: function increment() {
            this.changeDate(addPeriod(this.view, this.viewDate, 1));
          }
        }, {
          key: "decrement",
          value: function decrement() {
            this.changeDate(subPeriod(this.view, this.viewDate, 1));
          }
        }, {
          key: "today",
          value: function today() {
            this.changeDate(new Date());
          }
        }, {
          key: "dateIsValid",
          value: function dateIsValid(date) {
            return date >= this.minDate && date <= this.maxDate;
          }
        }, {
          key: "changeDate",
          value: function changeDate(date) {
            this.viewDate = date;
            this.dateOrViewChanged();
          }
        }, {
          key: "changeView",
          value: function changeView(view) {
            this.view = view;
            this.dateOrViewChanged();
          }
        }, {
          key: "dateOrViewChanged",
          value: function dateOrViewChanged() {
            this.prevBtnDisabled = !this.dateIsValid(endOfPeriod(this.view, subPeriod(this.view, this.viewDate, 1)));
            this.nextBtnDisabled = !this.dateIsValid(startOfPeriod(this.view, addPeriod(this.view, this.viewDate, 1)));

            if (this.viewDate < this.minDate) {
              this.changeDate(this.minDate);
            } else if (this.viewDate > this.maxDate) {
              this.changeDate(this.maxDate);
            }
          }
        }, {
          key: "beforeMonthViewRender",
          value: function beforeMonthViewRender(_ref) {
            var _this = this;

            var body = _ref.body;
            body.forEach(function (day) {
              if (!_this.dateIsValid(day.date)) {
                day.cssClass = 'cal-disabled';
              }
            });
          }
        }]);

        return _DemoComponent;
      }();

      _DemoComponent.??fac = function DemoComponent_Factory(t) {
        return new (t || _DemoComponent)();
      };

      _DemoComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _DemoComponent,
        selectors: [["mwl-demo-component"]],
        decls: 51,
        vars: 17,
        consts: [[1, "row", "text-center"], [1, "col-md-4"], [1, "btn-group"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [3, "ngSwitch"], [3, "viewDate", "events", "beforeViewRender", 4, "ngSwitchCase"], [3, "viewDate", "events", 4, "ngSwitchCase"], [3, "viewDate", "events", "beforeViewRender"], [3, "viewDate", "events"]],
        template: function DemoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DemoComponent_Template_button_click_6_listener() {
              return ctx.decrement();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "\n        Previous\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DemoComponent_Template_button_click_9_listener() {
              return ctx.today();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DemoComponent_Template_button_click_12_listener() {
              return ctx.increment();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "\n        Next\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](21, "calendarDate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DemoComponent_Template_div_click_28_listener() {
              return ctx.changeView("month");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "\n        Month\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DemoComponent_Template_div_click_31_listener() {
              return ctx.changeView("week");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "\n        Week\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DemoComponent_Template_div_click_34_listener() {
              return ctx.changeView("day");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "\n        Day\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](44, DemoComponent_mwl_calendar_month_view_44_Template, 2, 2, "mwl-calendar-month-view", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](46, DemoComponent_mwl_calendar_week_view_46_Template, 2, 2, "mwl-calendar-week-view", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](48, DemoComponent_mwl_calendar_day_view_48_Template, 2, 2, "mwl-calendar-day-view", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "\n");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.prevBtnDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.nextBtnDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](21, 13, ctx.viewDate, ctx.view + "ViewTitle", "en"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("active", ctx.view === "month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("active", ctx.view === "week");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("active", ctx.view === "day");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitch", ctx.view);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "week");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "day");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgSwitchCase, _angular_calendar_src_modules_month_calendar_month_view_component__WEBPACK_IMPORTED_MODULE_15__.CalendarMonthViewComponent, _angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_16__.CalendarWeekViewComponent, _angular_calendar_src_modules_day_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_17__.CalendarDayViewComponent],
        pipes: [_angular_calendar_src_modules_common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_18__.CalendarDatePipe],
        styles: ["\n      .cal-disabled {\n        background-color: #eee;\n        pointer-events: none;\n      }\n\n      .cal-disabled .cal-day-number {\n        opacity: 0.1;\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxzQkFBc0I7UUFDdEIsb0JBQW9CO01BQ3RCOztNQUVBO1FBQ0UsWUFBWTtNQUNkIiwiZmlsZSI6ImNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgLmNhbC1kaXNhYmxlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgfVxuXG4gICAgICAuY2FsLWRpc2FibGVkIC5jYWwtZGF5LW51bWJlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuMTtcbiAgICAgIH1cbiAgICAiXX0= */"],
        encapsulation: 2,
        changeDetection: 0
      });
      /***/
    },

    /***/
    54962: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
      12322);
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

      _DemoModule.??fac = function DemoModule_Factory(t) {
        return new (t || _DemoModule)();
      };

      _DemoModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: _DemoModule
      });
      _DemoModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, angular_calendar__WEBPACK_IMPORTED_MODULE_2__.CalendarModule.forRoot({
          provide: angular_calendar__WEBPACK_IMPORTED_MODULE_3__.DateAdapter,
          useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_4__.adapterFactory
        }), _demo_utils_module__WEBPACK_IMPORTED_MODULE_5__.DemoUtilsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([{
          path: '',
          component: _component__WEBPACK_IMPORTED_MODULE_7__.DemoComponent
        }])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](_DemoModule, {
          declarations: [_component__WEBPACK_IMPORTED_MODULE_7__.DemoComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, angular_calendar__WEBPACK_IMPORTED_MODULE_2__.CalendarModule, _demo_utils_module__WEBPACK_IMPORTED_MODULE_5__.DemoUtilsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
          exports: [_component__WEBPACK_IMPORTED_MODULE_7__.DemoComponent]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=projects_demos_app_demo-modules_min-max-date_module_ts-es5.js.map