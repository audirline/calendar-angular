(function () {
  "use strict";

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkangular_calendar"] = self["webpackChunkangular_calendar"] || []).push([["projects_demos_app_demo-modules_group-similar-events_module_ts"], {
    /***/
    45219: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            isSameMinute
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _startOfMinute_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../startOfMinute/index.js */
      66737);
      /* harmony import */


      var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../_lib/requiredArgs/index.js */
      24252);
      /**
       * @name isSameMinute
       * @category Minute Helpers
       * @summary Are the given dates in the same minute?
       *
       * @description
       * Are the given dates in the same minute?
       *
       * ### v2.0.0 breaking changes:
       *
       * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
       *
       * @param {Date|Number} dateLeft - the first date to check
       * @param {Date|Number} dateRight - the second date to check
       * @returns {Boolean} the dates are in the same minute
       * @throws {TypeError} 2 arguments required
       *
       * @example
       * // Are 4 September 2014 06:30:00 and 4 September 2014 06:30:15
       * // in the same minute?
       * var result = isSameMinute(
       *   new Date(2014, 8, 4, 6, 30),
       *   new Date(2014, 8, 4, 6, 30, 15)
       * )
       * //=> true
       */


      function isSameMinute(dirtyDateLeft, dirtyDateRight) {
        (0, _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
        var dateLeftStartOfMinute = (0, _startOfMinute_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
        var dateRightStartOfMinute = (0, _startOfMinute_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
        return dateLeftStartOfMinute.getTime() === dateRightStartOfMinute.getTime();
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
    99637: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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


      var _demo_utils_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../demo-utils/colors */
      55155);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! date-fns */
      66186);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! date-fns */
      45219);
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var _angular_calendar_src_modules_common_calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/common/calendar-tooltip.directive */
      69416);
      /* harmony import */


      var _angular_calendar_src_modules_common_click_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/common/click.directive */
      81567);
      /* harmony import */


      var _angular_calendar_src_modules_common_calendar_event_title_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/common/calendar-event-title.component */
      58974);
      /* harmony import */


      var _angular_calendar_src_modules_common_calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/common/calendar-event-actions.component */
      32136);
      /* harmony import */


      var _angular_calendar_src_modules_month_calendar_month_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/month/calendar-month-view.component */
      21426);
      /* harmony import */


      var _angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/week/calendar-week-view.component */
      1913);
      /* harmony import */


      var _angular_calendar_src_modules_day_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/day/calendar-day-view.component */
      50811);
      /* harmony import */


      var _angular_calendar_src_modules_common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/common/calendar-date.pipe */
      12153);
      /* harmony import */


      var _angular_calendar_src_modules_common_calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/common/calendar-event-title.pipe */
      44602);

      function DemoComponent_ng_template_3_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().day;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](day_r7.badgeTotal);
        }
      }

      function DemoComponent_ng_template_3_span_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var group_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge badge-", group_r12[0], "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n      ", group_r12[1].length, "\n    ");
        }
      }

      function DemoComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DemoComponent_ng_template_3_span_3_Template, 2, 1, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "calendarDate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DemoComponent_ng_template_3_span_12_Template, 2, 4, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n");
        }

        if (rf & 2) {
          var day_r7 = ctx.day;
          var locale_r8 = ctx.locale;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", day_r7.badgeTotal > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](7, 3, day_r7.date, "monthViewDayNumber", locale_r8));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", day_r7.eventGroups);
        }
      }

      function DemoComponent_ng_template_6_ng_template_1_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mwl-calendar-event-actions", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n         \n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mwl-calendar-event-title", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var event_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", event_r25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", event_r25);
        }
      }

      function DemoComponent_ng_template_6_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DemoComponent_ng_template_6_ng_template_1_div_3_Template, 8, 2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
        }

        if (rf & 2) {
          var weekEvent_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().weekEvent;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", weekEvent_r13.event.meta.groupedEvents);
        }
      }

      function DemoComponent_ng_template_6_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mwl-calendar-event-actions", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n       \n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var weekEvent_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().weekEvent;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", weekEvent_r13.event);
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          backgroundColor: a0,
          borderColor: a1
        };
      };

      function DemoComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DemoComponent_ng_template_6_ng_template_1_Template, 6, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mwlClick", function DemoComponent_ng_template_6_Template_div_mwlClick_4_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var eventClicked_r15 = restoredCtx.eventClicked;
            return eventClicked_r15.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "calendarEventTitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DemoComponent_ng_template_6_ng_container_7_Template, 5, 1, "ng-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mwl-calendar-event-title", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n");
        }

        if (rf & 2) {
          var weekEvent_r13 = ctx.weekEvent;
          var tooltipPlacement_r14 = ctx.tooltipPlacement;
          var tooltipTemplate_r16 = ctx.tooltipTemplate;
          var tooltipAppendToBody_r17 = ctx.tooltipAppendToBody;
          var tooltipDisabled_r18 = ctx.tooltipDisabled;
          var tooltipDelay_r19 = ctx.tooltipDelay;

          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbPopover", _r21)("disablePopover", !weekEvent_r13.event.meta.groupedEvents)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](15, _c0, weekEvent_r13.event.color == null ? null : weekEvent_r13.event.color.secondary, weekEvent_r13.event.color == null ? null : weekEvent_r13.event.color.primary))("mwlCalendarTooltip", !tooltipDisabled_r18 && !weekEvent_r13.event.meta.groupedEvents ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 11, weekEvent_r13.event.title, "weekTooltip", weekEvent_r13.event) : "")("tooltipPlacement", tooltipPlacement_r14)("tooltipEvent", weekEvent_r13.event)("tooltipTemplate", tooltipTemplate_r16)("tooltipAppendToBody", tooltipAppendToBody_r17)("tooltipDelay", tooltipDelay_r19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !weekEvent_r13.event.meta.groupedEvents);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", weekEvent_r13.event);
        }
      }

      function DemoComponent_mwl_calendar_month_view_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-month-view", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeViewRender", function DemoComponent_mwl_calendar_month_view_11_Template_mwl_calendar_month_view_beforeViewRender_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r30.beforeMonthViewRender($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r4.viewDate)("events", ctx_r4.events)("cellTemplate", _r0)("activeDayIsOpen", true);
        }
      }

      function DemoComponent_mwl_calendar_week_view_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-week-view", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r5.viewDate)("events", ctx_r5.groupedSimilarEvents)("eventTemplate", _r2);
        }
      }

      function DemoComponent_mwl_calendar_day_view_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-day-view", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r6.viewDate)("events", ctx_r6.groupedSimilarEvents)("eventTemplate", _r2);
        }
      }

      var _DemoComponent = /*#__PURE__*/function () {
        function _DemoComponent() {
          _classCallCheck(this, _DemoComponent);

          this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_1__.CalendarView.Month;
          this.viewDate = new Date();
          this.events = [{
            title: 'Event 1',
            color: _demo_utils_colors__WEBPACK_IMPORTED_MODULE_2__.colors.yellow,
            start: (0, date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date()),
            meta: {
              type: 'warning'
            }
          }, {
            title: 'Event 2',
            color: _demo_utils_colors__WEBPACK_IMPORTED_MODULE_2__.colors.yellow,
            start: (0, date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date()),
            meta: {
              type: 'warning'
            }
          }, {
            title: 'Event 3',
            color: _demo_utils_colors__WEBPACK_IMPORTED_MODULE_2__.colors.blue,
            start: (0, date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date()),
            meta: {
              type: 'info'
            }
          }, {
            title: 'Event 4',
            color: _demo_utils_colors__WEBPACK_IMPORTED_MODULE_2__.colors.red,
            start: (0, date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date()),
            meta: {
              type: 'danger'
            }
          }, {
            title: 'Event 5',
            color: _demo_utils_colors__WEBPACK_IMPORTED_MODULE_2__.colors.red,
            start: (0, date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date()),
            meta: {
              type: 'danger'
            }
          }];
          this.groupedSimilarEvents = [];
        }

        _createClass(_DemoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // group any events together that have the same type and dates
            // use for when you have a lot of events on the week or day view at the same time
            this.groupedSimilarEvents = [];
            var processedEvents = new Set();
            this.events.forEach(function (event) {
              if (processedEvents.has(event)) {
                return;
              }

              var similarEvents = _this.events.filter(function (otherEvent) {
                return otherEvent !== event && !processedEvents.has(otherEvent) && (0, date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(otherEvent.start, event.start) && ((0, date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(otherEvent.end, event.end) || !otherEvent.end && !event.end) && otherEvent.color.primary === event.color.primary && otherEvent.color.secondary === event.color.secondary;
              });

              processedEvents.add(event);
              similarEvents.forEach(function (otherEvent) {
                processedEvents.add(otherEvent);
              });

              if (similarEvents.length > 0) {
                _this.groupedSimilarEvents.push({
                  title: "".concat(similarEvents.length + 1, " events"),
                  color: event.color,
                  start: event.start,
                  end: event.end,
                  meta: {
                    groupedEvents: [event].concat(_toConsumableArray(similarEvents))
                  }
                });
              } else {
                _this.groupedSimilarEvents.push(event);
              }
            });
          }
        }, {
          key: "beforeMonthViewRender",
          value: function beforeMonthViewRender(_ref) {
            var body = _ref.body;
            // month view has a different UX from the week and day view so we only really need to group by the type
            body.forEach(function (cell) {
              var groups = {};
              cell.events.forEach(function (event) {
                groups[event.meta.type] = groups[event.meta.type] || [];
                groups[event.meta.type].push(event);
              });
              cell['eventGroups'] = Object.entries(groups);
            });
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
        decls: 18,
        vars: 6,
        consts: [[3, "view", "viewDate", "viewChange", "viewDateChange"], ["customCellTemplate", ""], ["customEventTemplate", ""], [3, "ngSwitch"], [3, "viewDate", "events", "cellTemplate", "activeDayIsOpen", "beforeViewRender", 4, "ngSwitchCase"], [3, "viewDate", "events", "eventTemplate", 4, "ngSwitchCase"], [1, "cal-cell-top"], ["class", "cal-day-badge", 4, "ngIf"], [1, "cal-day-number"], [1, "cell-totals"], [3, "class", 4, "ngFor", "ngForOf"], [1, "cal-day-badge"], ["groupedEventsTemplate", ""], [1, "cal-event", 3, "ngbPopover", "disablePopover", "ngStyle", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "mwlClick"], [4, "ngIf"], ["view", "week", 3, "event"], [2, "min-width", "150px"], [4, "ngFor", "ngForOf"], [3, "event"], [3, "viewDate", "events", "cellTemplate", "activeDayIsOpen", "beforeViewRender"], [3, "viewDate", "events", "eventTemplate"]],
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DemoComponent_ng_template_3_Template, 15, 7, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DemoComponent_ng_template_6_Template, 13, 18, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DemoComponent_mwl_calendar_month_view_11_Template, 2, 4, "mwl-calendar-month-view", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DemoComponent_mwl_calendar_week_view_13_Template, 2, 3, "mwl-calendar-week-view", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DemoComponent_mwl_calendar_day_view_15_Template, 2, 3, "mwl-calendar-day-view", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.view);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "week");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "day");
          }
        },
        directives: [_demo_utils_calendar_header_component__WEBPACK_IMPORTED_MODULE_5__.CalendarHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbPopover, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, _angular_calendar_src_modules_common_calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__.CalendarTooltipDirective, _angular_calendar_src_modules_common_click_directive__WEBPACK_IMPORTED_MODULE_9__.ClickDirective, _angular_calendar_src_modules_common_calendar_event_title_component__WEBPACK_IMPORTED_MODULE_10__.CalendarEventTitleComponent, _angular_calendar_src_modules_common_calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_11__.CalendarEventActionsComponent, _angular_calendar_src_modules_month_calendar_month_view_component__WEBPACK_IMPORTED_MODULE_12__.CalendarMonthViewComponent, _angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_13__.CalendarWeekViewComponent, _angular_calendar_src_modules_day_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_14__.CalendarDayViewComponent],
        pipes: [_angular_calendar_src_modules_common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_15__.CalendarDatePipe, _angular_calendar_src_modules_common_calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_16__.CalendarEventTitlePipe],
        styles: [".cell-totals[_ngcontent-%COMP%] {\n        margin: 5px;\n        text-align: center;\n      }\n      .badge[_ngcontent-%COMP%] {\n        margin-right: 5px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxXQUFXO1FBQ1gsa0JBQWtCO01BQ3BCO01BQ0E7UUFDRSxpQkFBaUI7TUFDbkIiLCJmaWxlIjoiY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAuY2VsbC10b3RhbHMge1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgLmJhZGdlIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICB9XG4gICAgIl19 */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    80510: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
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


      var _demo_utils_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../demo-utils/module */
      57671);
      /* harmony import */


      var _component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./component */
      99637);
      /* harmony import */


      var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular-calendar/date-adapters/date-fns */
      20789);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
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
        }), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbPopoverModule, _demo_utils_module__WEBPACK_IMPORTED_MODULE_6__.DemoUtilsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild([{
          path: '',
          component: _component__WEBPACK_IMPORTED_MODULE_8__.DemoComponent
        }])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_DemoModule, {
          declarations: [_component__WEBPACK_IMPORTED_MODULE_8__.DemoComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, angular_calendar__WEBPACK_IMPORTED_MODULE_2__.CalendarModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbPopoverModule, _demo_utils_module__WEBPACK_IMPORTED_MODULE_6__.DemoUtilsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
          exports: [_component__WEBPACK_IMPORTED_MODULE_8__.DemoComponent]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=projects_demos_app_demo-modules_group-similar-events_module_ts-es5.js.map