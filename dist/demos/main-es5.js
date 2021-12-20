(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkangular_calendar"] = self["webpackChunkangular_calendar"] || []).push([["main"], {
    /***/
    98255: function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90008: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DateAdapter": function DateAdapter() {
          return (
            /* binding */
            _DateAdapter
          );
        }
        /* harmony export */

      });

      var _DateAdapter = function _DateAdapter() {
        _classCallCheck(this, _DateAdapter);
      };
      /***/

    },

    /***/
    20789: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "adapterFactory": function adapterFactory() {
          return (
            /* binding */
            _adapterFactory
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var calendar_utils_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! calendar-utils/date-adapters/date-fns */
      47421);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! date-fns */
      48749);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! date-fns */
      71387);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! date-fns */
      12260);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! date-fns */
      81770);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! date-fns */
      94395);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! date-fns */
      52259);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! date-fns */
      86453);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! date-fns */
      75494);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! date-fns */
      93510);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! date-fns */
      69695);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! date-fns */
      75689);

      function _adapterFactory() {
        return Object.assign(Object.assign({}, (0, calendar_utils_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_0__.adapterFactory)()), {
          addWeeks: date_fns__WEBPACK_IMPORTED_MODULE_1__["default"],
          addMonths: date_fns__WEBPACK_IMPORTED_MODULE_2__["default"],
          subDays: date_fns__WEBPACK_IMPORTED_MODULE_3__["default"],
          subWeeks: date_fns__WEBPACK_IMPORTED_MODULE_4__["default"],
          subMonths: date_fns__WEBPACK_IMPORTED_MODULE_5__["default"],
          getISOWeek: date_fns__WEBPACK_IMPORTED_MODULE_6__["default"],
          setDate: date_fns__WEBPACK_IMPORTED_MODULE_7__["default"],
          setMonth: date_fns__WEBPACK_IMPORTED_MODULE_8__["default"],
          setYear: date_fns__WEBPACK_IMPORTED_MODULE_9__["default"],
          getDate: date_fns__WEBPACK_IMPORTED_MODULE_10__["default"],
          getYear: date_fns__WEBPACK_IMPORTED_MODULE_11__["default"]
        });
      }
      /***/

    },

    /***/
    3746: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarA11y": function CalendarA11y() {
          return (
            /* reexport safe */
            _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarA11y
          );
        },

        /* harmony export */
        "CalendarAngularDateFormatter": function CalendarAngularDateFormatter() {
          return (
            /* reexport safe */
            _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarAngularDateFormatter
          );
        },

        /* harmony export */
        "CalendarCommonModule": function CalendarCommonModule() {
          return (
            /* reexport safe */
            _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarCommonModule
          );
        },

        /* harmony export */
        "CalendarDateFormatter": function CalendarDateFormatter() {
          return (
            /* reexport safe */
            _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarDateFormatter
          );
        },

        /* harmony export */
        "CalendarEventTimesChangedEventType": function CalendarEventTimesChangedEventType() {
          return (
            /* reexport safe */
            _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarEventTimesChangedEventType
          );
        },

        /* harmony export */
        "CalendarEventTitleFormatter": function CalendarEventTitleFormatter() {
          return (
            /* reexport safe */
            _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarEventTitleFormatter
          );
        },

        /* harmony export */
        "CalendarMomentDateFormatter": function CalendarMomentDateFormatter() {
          return (
            /* reexport safe */
            _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarMomentDateFormatter
          );
        },

        /* harmony export */
        "CalendarNativeDateFormatter": function CalendarNativeDateFormatter() {
          return (
            /* reexport safe */
            _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarNativeDateFormatter
          );
        },

        /* harmony export */
        "CalendarUtils": function CalendarUtils() {
          return (
            /* reexport safe */
            _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarUtils
          );
        },

        /* harmony export */
        "CalendarView": function CalendarView() {
          return (
            /* reexport safe */
            _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarView
          );
        },

        /* harmony export */
        "DAYS_OF_WEEK": function DAYS_OF_WEEK() {
          return (
            /* reexport safe */
            _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.DAYS_OF_WEEK
          );
        },

        /* harmony export */
        "DateAdapter": function DateAdapter() {
          return (
            /* reexport safe */
            _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.DateAdapter
          );
        },

        /* harmony export */
        "MOMENT": function MOMENT() {
          return (
            /* reexport safe */
            _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.MOMENT
          );
        },

        /* harmony export */
        "ɵCalendarA11yPipe": function ɵCalendarA11yPipe() {
          return (
            /* reexport safe */
            _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵCalendarA11yPipe"]
          );
        },

        /* harmony export */
        "ɵCalendarDatePipe": function ɵCalendarDatePipe() {
          return (
            /* reexport safe */
            _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵCalendarDatePipe"]
          );
        },

        /* harmony export */
        "ɵCalendarEventActionsComponent": function ɵCalendarEventActionsComponent() {
          return (
            /* reexport safe */
            _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵCalendarEventActionsComponent"]
          );
        },

        /* harmony export */
        "ɵCalendarEventTitleComponent": function ɵCalendarEventTitleComponent() {
          return (
            /* reexport safe */
            _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵCalendarEventTitleComponent"]
          );
        },

        /* harmony export */
        "ɵCalendarEventTitlePipe": function ɵCalendarEventTitlePipe() {
          return (
            /* reexport safe */
            _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵCalendarEventTitlePipe"]
          );
        },

        /* harmony export */
        "ɵCalendarNextViewDirective": function ɵCalendarNextViewDirective() {
          return (
            /* reexport safe */
            _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵCalendarNextViewDirective"]
          );
        },

        /* harmony export */
        "ɵCalendarPreviousViewDirective": function ɵCalendarPreviousViewDirective() {
          return (
            /* reexport safe */
            _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵCalendarPreviousViewDirective"]
          );
        },

        /* harmony export */
        "ɵCalendarTodayDirective": function ɵCalendarTodayDirective() {
          return (
            /* reexport safe */
            _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵCalendarTodayDirective"]
          );
        },

        /* harmony export */
        "ɵCalendarTooltipDirective": function ɵCalendarTooltipDirective() {
          return (
            /* reexport safe */
            _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵCalendarTooltipDirective"]
          );
        },

        /* harmony export */
        "ɵCalendarTooltipWindowComponent": function ɵCalendarTooltipWindowComponent() {
          return (
            /* reexport safe */
            _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵCalendarTooltipWindowComponent"]
          );
        },

        /* harmony export */
        "ɵClickDirective": function ɵClickDirective() {
          return (
            /* reexport safe */
            _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵClickDirective"]
          );
        },

        /* harmony export */
        "ɵKeydownEnterDirective": function ɵKeydownEnterDirective() {
          return (
            /* reexport safe */
            _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__["ɵKeydownEnterDirective"]
          );
        },

        /* harmony export */
        "CalendarMonthModule": function CalendarMonthModule() {
          return (
            /* reexport safe */
            _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_1__.CalendarMonthModule
          );
        },

        /* harmony export */
        "CalendarMonthViewComponent": function CalendarMonthViewComponent() {
          return (
            /* reexport safe */
            _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_1__.CalendarMonthViewComponent
          );
        },

        /* harmony export */
        "collapseAnimation": function collapseAnimation() {
          return (
            /* reexport safe */
            _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_1__.collapseAnimation
          );
        },

        /* harmony export */
        "ɵCalendarMonthCellComponent": function ɵCalendarMonthCellComponent() {
          return (
            /* reexport safe */
            _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_1__["ɵCalendarMonthCellComponent"]
          );
        },

        /* harmony export */
        "ɵCalendarMonthViewHeaderComponent": function ɵCalendarMonthViewHeaderComponent() {
          return (
            /* reexport safe */
            _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_1__["ɵCalendarMonthViewHeaderComponent"]
          );
        },

        /* harmony export */
        "ɵCalendarOpenDayEventsComponent": function ɵCalendarOpenDayEventsComponent() {
          return (
            /* reexport safe */
            _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_1__["ɵCalendarOpenDayEventsComponent"]
          );
        },

        /* harmony export */
        "CalendarWeekModule": function CalendarWeekModule() {
          return (
            /* reexport safe */
            _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__.CalendarWeekModule
          );
        },

        /* harmony export */
        "CalendarWeekViewComponent": function CalendarWeekViewComponent() {
          return (
            /* reexport safe */
            _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__.CalendarWeekViewComponent
          );
        },

        /* harmony export */
        "getWeekViewPeriod": function getWeekViewPeriod() {
          return (
            /* reexport safe */
            _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__.getWeekViewPeriod
          );
        },

        /* harmony export */
        "ɵCalendarWeekViewCurrentTimeMarkerComponent": function ɵCalendarWeekViewCurrentTimeMarkerComponent() {
          return (
            /* reexport safe */
            _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__["ɵCalendarWeekViewCurrentTimeMarkerComponent"]
          );
        },

        /* harmony export */
        "ɵCalendarWeekViewEventComponent": function ɵCalendarWeekViewEventComponent() {
          return (
            /* reexport safe */
            _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__["ɵCalendarWeekViewEventComponent"]
          );
        },

        /* harmony export */
        "ɵCalendarWeekViewHeaderComponent": function ɵCalendarWeekViewHeaderComponent() {
          return (
            /* reexport safe */
            _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__["ɵCalendarWeekViewHeaderComponent"]
          );
        },

        /* harmony export */
        "ɵCalendarWeekViewHourSegmentComponent": function ɵCalendarWeekViewHourSegmentComponent() {
          return (
            /* reexport safe */
            _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__["ɵCalendarWeekViewHourSegmentComponent"]
          );
        },

        /* harmony export */
        "CalendarDayModule": function CalendarDayModule() {
          return (
            /* reexport safe */
            _day_calendar_day_module__WEBPACK_IMPORTED_MODULE_3__.CalendarDayModule
          );
        },

        /* harmony export */
        "CalendarDayViewComponent": function CalendarDayViewComponent() {
          return (
            /* reexport safe */
            _day_calendar_day_module__WEBPACK_IMPORTED_MODULE_3__.CalendarDayViewComponent
          );
        },

        /* harmony export */
        "CalendarModule": function CalendarModule() {
          return (
            /* binding */
            _CalendarModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./common/calendar-common.module */
      38711);
      /* harmony import */


      var _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./common/calendar-common.module */
      6693);
      /* harmony import */


      var _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./common/calendar-common.module */
      40199);
      /* harmony import */


      var _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./common/calendar-common.module */
      67400);
      /* harmony import */


      var _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./month/calendar-month.module */
      5465);
      /* harmony import */


      var _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./week/calendar-week.module */
      47175);
      /* harmony import */


      var _day_calendar_day_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./day/calendar-day.module */
      88533);
      /* harmony import */


      var _common_calendar_utils_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./common/calendar-utils.provider */
      27579);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
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


      var _CalendarModule = /*#__PURE__*/function () {
        function _CalendarModule() {
          _classCallCheck(this, _CalendarModule);
        }

        _createClass(_CalendarModule, null, [{
          key: "forRoot",
          value: function forRoot(dateAdapter) {
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return {
              ngModule: _CalendarModule,
              providers: [dateAdapter, config.eventTitleFormatter || _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_4__.CalendarEventTitleFormatter, config.dateFormatter || _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_5__.CalendarDateFormatter, config.utils || _common_calendar_utils_provider__WEBPACK_IMPORTED_MODULE_6__.CalendarUtils, config.a11y || _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_7__.CalendarA11y]
            };
          }
        }]);

        return _CalendarModule;
      }();

      _CalendarModule.ɵfac = function CalendarModule_Factory(t) {
        return new (t || _CalendarModule)();
      };

      _CalendarModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: _CalendarModule
      });
      _CalendarModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        imports: [[_common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarCommonModule, _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_1__.CalendarMonthModule, _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__.CalendarWeekModule, _day_calendar_day_module__WEBPACK_IMPORTED_MODULE_3__.CalendarDayModule], _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarCommonModule, _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_1__.CalendarMonthModule, _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__.CalendarWeekModule, _day_calendar_day_module__WEBPACK_IMPORTED_MODULE_3__.CalendarDayModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](_CalendarModule, {
          imports: [_common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarCommonModule, _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_1__.CalendarMonthModule, _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__.CalendarWeekModule, _day_calendar_day_module__WEBPACK_IMPORTED_MODULE_3__.CalendarDayModule],
          exports: [_common_calendar_common_module__WEBPACK_IMPORTED_MODULE_0__.CalendarCommonModule, _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_1__.CalendarMonthModule, _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_2__.CalendarWeekModule, _day_calendar_day_module__WEBPACK_IMPORTED_MODULE_3__.CalendarDayModule]
        });
      })();
      /***/

    },

    /***/
    62479: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarA11yPipe": function CalendarA11yPipe() {
          return (
            /* binding */
            _CalendarA11yPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _calendar_a11y_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./calendar-a11y.provider */
      40199);
      /**
       * This pipe is primarily for rendering aria labels. Example usage:
       * ```typescript
       * // where `myEvent` is a `CalendarEvent` and myLocale is a locale identifier
       * {{ { event: myEvent, locale: myLocale } | calendarA11y: 'eventDescription' }}
       * ```
       */


      var _CalendarA11yPipe = /*#__PURE__*/function () {
        function _CalendarA11yPipe(calendarA11y, locale) {
          _classCallCheck(this, _CalendarA11yPipe);

          this.calendarA11y = calendarA11y;
          this.locale = locale;
        }

        _createClass(_CalendarA11yPipe, [{
          key: "transform",
          value: function transform(a11yParams, method) {
            a11yParams.locale = a11yParams.locale || this.locale;

            if (typeof this.calendarA11y[method] === 'undefined') {
              var allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(_calendar_a11y_provider__WEBPACK_IMPORTED_MODULE_0__.CalendarA11y.prototype)).filter(function (iMethod) {
                return iMethod !== 'constructor';
              });
              throw new Error("".concat(method, " is not a valid a11y method. Can only be one of ").concat(allowedMethods.join(', ')));
            }

            return this.calendarA11y[method](a11yParams);
          }
        }]);

        return _CalendarA11yPipe;
      }();

      _CalendarA11yPipe.ɵfac = function CalendarA11yPipe_Factory(t) {
        return new (t || _CalendarA11yPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_calendar_a11y_provider__WEBPACK_IMPORTED_MODULE_0__.CalendarA11y, 16), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.LOCALE_ID, 16));
      };

      _CalendarA11yPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
        name: "calendarA11y",
        type: _CalendarA11yPipe,
        pure: true
      });
      /***/
    },

    /***/
    40199: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarA11y": function CalendarA11y() {
          return (
            /* binding */
            _CalendarA11y
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
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


      var _CalendarA11y = /*#__PURE__*/function () {
        function _CalendarA11y(i18nPlural) {
          _classCallCheck(this, _CalendarA11y);

          this.i18nPlural = i18nPlural;
        }
        /**
         * Aria label for the badges/date of a cell
         * @example: `Saturday October 19 1 event click to expand`
         */


        _createClass(_CalendarA11y, [{
          key: "monthCell",
          value: function monthCell(_ref) {
            var day = _ref.day,
                locale = _ref.locale;

            if (day.badgeTotal > 0) {
              return "\n        ".concat((0, _angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(day.date, 'EEEE MMMM d', locale), ",\n        ").concat(this.i18nPlural.transform(day.badgeTotal, {
                '=0': 'No events',
                '=1': 'One event',
                other: '# events'
              }), ",\n         click to expand\n      ");
            } else {
              return "".concat((0, _angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(day.date, 'EEEE MMMM d', locale));
            }
          }
          /**
           * Aria label for the open day events start landmark
           * @example: `Saturday October 19 expanded view`
           */

        }, {
          key: "openDayEventsLandmark",
          value: function openDayEventsLandmark(_ref2) {
            var date = _ref2.date,
                locale = _ref2.locale;
            return "\n      Beginning of expanded view for ".concat((0, _angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date, 'EEEE MMMM dd', locale), "\n    ");
          }
          /**
           * Aria label for alert that a day in the month view was expanded
           * @example: `Saturday October 19 expanded`
           */

        }, {
          key: "openDayEventsAlert",
          value: function openDayEventsAlert(_ref3) {
            var date = _ref3.date,
                locale = _ref3.locale;
            return "".concat((0, _angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date, 'EEEE MMMM dd', locale), " expanded");
          }
          /**
           * Descriptive aria label for an event
           * @example: `Saturday October 19th, Scott's Pizza Party, from 11:00am to 5:00pm`
           */

        }, {
          key: "eventDescription",
          value: function eventDescription(_ref4) {
            var event = _ref4.event,
                locale = _ref4.locale;

            if (event.allDay === true) {
              return this.allDayEventDescription({
                event: event,
                locale: locale
              });
            }

            var aria = "\n      ".concat((0, _angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(event.start, 'EEEE MMMM dd', locale), ",\n      ").concat(event.title, ", from ").concat((0, _angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(event.start, 'hh:mm a', locale), "\n    ");

            if (event.end) {
              return aria + " to ".concat((0, _angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(event.end, 'hh:mm a', locale));
            }

            return aria;
          }
          /**
           * Descriptive aria label for an all day event
           * @example:
           * `Scott's Party, event spans multiple days: start time October 19 5:00pm, no stop time`
           */

        }, {
          key: "allDayEventDescription",
          value: function allDayEventDescription(_ref5) {
            var event = _ref5.event,
                locale = _ref5.locale;
            var aria = "\n      ".concat(event.title, ", event spans multiple days:\n      start time ").concat((0, _angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(event.start, 'MMMM dd hh:mm a', locale), "\n    ");

            if (event.end) {
              return aria + ", stop time ".concat((0, _angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(event.end, 'MMMM d hh:mm a', locale));
            }

            return aria + ", no stop time";
          }
          /**
           * Aria label for the calendar event actions icons
           * @returns 'Edit' for fa-pencil icons, and 'Delete' for fa-times icons
           */

        }, {
          key: "actionButtonLabel",
          value: function actionButtonLabel(_ref6) {
            var action = _ref6.action;
            return action.a11yLabel;
          }
          /**
           * @returns {number} Tab index to be given to month cells
           */

        }, {
          key: "monthCellTabIndex",
          value: function monthCellTabIndex() {
            return 0;
          }
          /**
           * @returns true if the events inside the month cell should be aria-hidden
           */

        }, {
          key: "hideMonthCellEvents",
          value: function hideMonthCellEvents() {
            return true;
          }
          /**
           * @returns true if event titles should be aria-hidden (global)
           */

        }, {
          key: "hideEventTitle",
          value: function hideEventTitle() {
            return true;
          }
          /**
           * @returns true if hour segments in the week view should be aria-hidden
           */

        }, {
          key: "hideWeekHourSegment",
          value: function hideWeekHourSegment() {
            return true;
          }
          /**
           * @returns true if hour segments in the day view should be aria-hidden
           */

        }, {
          key: "hideDayHourSegment",
          value: function hideDayHourSegment() {
            return true;
          }
        }]);

        return _CalendarA11y;
      }();

      _CalendarA11y.ɵfac = function CalendarA11y_Factory(t) {
        return new (t || _CalendarA11y)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.I18nPluralPipe));
      };

      _CalendarA11y.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _CalendarA11y,
        factory: _CalendarA11y.ɵfac
      });
      /***/
    },

    /***/
    6366: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarAngularDateFormatter": function CalendarAngularDateFormatter() {
          return (
            /* binding */
            _CalendarAngularDateFormatter
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./util */
      33878);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../date-adapters/date-adapter */
      90008);
      /**
       * This will use the angular date pipe to do all date formatting. It is the default date formatter used by the calendar.
       */


      var _CalendarAngularDateFormatter = /*#__PURE__*/function () {
        function _CalendarAngularDateFormatter(dateAdapter) {
          _classCallCheck(this, _CalendarAngularDateFormatter);

          this.dateAdapter = dateAdapter;
        }
        /**
         * The month view header week day labels
         */


        _createClass(_CalendarAngularDateFormatter, [{
          key: "monthViewColumnHeader",
          value: function monthViewColumnHeader(_ref7) {
            var date = _ref7.date,
                locale = _ref7.locale;
            return (0, _angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date, 'EEEE', locale);
          }
          /**
           * The month view cell day number
           */

        }, {
          key: "monthViewDayNumber",
          value: function monthViewDayNumber(_ref8) {
            var date = _ref8.date,
                locale = _ref8.locale;
            return (0, _angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date, 'd', locale);
          }
          /**
           * The month view title
           */

        }, {
          key: "monthViewTitle",
          value: function monthViewTitle(_ref9) {
            var date = _ref9.date,
                locale = _ref9.locale;
            return (0, _angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date, 'LLLL y', locale);
          }
          /**
           * The week view header week day labels
           */

        }, {
          key: "weekViewColumnHeader",
          value: function weekViewColumnHeader(_ref10) {
            var date = _ref10.date,
                locale = _ref10.locale;
            return (0, _angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date, 'EEEE', locale);
          }
          /**
           * The week view sub header day and month labels
           */

        }, {
          key: "weekViewColumnSubHeader",
          value: function weekViewColumnSubHeader(_ref11) {
            var date = _ref11.date,
                locale = _ref11.locale;
            return (0, _angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date, 'MMM d', locale);
          }
          /**
           * The week view title
           */

        }, {
          key: "weekViewTitle",
          value: function weekViewTitle(_ref12) {
            var date = _ref12.date,
                locale = _ref12.locale,
                weekStartsOn = _ref12.weekStartsOn,
                excludeDays = _ref12.excludeDays,
                daysInWeek = _ref12.daysInWeek;

            var _ref13 = (0, _util__WEBPACK_IMPORTED_MODULE_1__.getWeekViewPeriod)(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek),
                viewStart = _ref13.viewStart,
                viewEnd = _ref13.viewEnd;

            var format = function format(dateToFormat, showYear) {
              return (0, _angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(dateToFormat, 'MMM d' + (showYear ? ', yyyy' : ''), locale);
            };

            return "".concat(format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()), " - ").concat(format(viewEnd, true));
          }
          /**
           * The time formatting down the left hand side of the week view
           */

        }, {
          key: "weekViewHour",
          value: function weekViewHour(_ref14) {
            var date = _ref14.date,
                locale = _ref14.locale;
            return (0, _angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date, 'h a', locale);
          }
          /**
           * The time formatting down the left hand side of the day view
           */

        }, {
          key: "dayViewHour",
          value: function dayViewHour(_ref15) {
            var date = _ref15.date,
                locale = _ref15.locale;
            return (0, _angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date, 'h a', locale);
          }
          /**
           * The day view title
           */

        }, {
          key: "dayViewTitle",
          value: function dayViewTitle(_ref16) {
            var date = _ref16.date,
                locale = _ref16.locale;
            return (0, _angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date, 'EEEE, MMMM d, y', locale);
          }
        }]);

        return _CalendarAngularDateFormatter;
      }();

      _CalendarAngularDateFormatter.ɵfac = function CalendarAngularDateFormatter_Factory(t) {
        return new (t || _CalendarAngularDateFormatter)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_3__.DateAdapter));
      };

      _CalendarAngularDateFormatter.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _CalendarAngularDateFormatter,
        factory: _CalendarAngularDateFormatter.ɵfac
      });
      /***/
    },

    /***/
    67400: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarEventTitleFormatter": function CalendarEventTitleFormatter() {
          return (
            /* reexport safe */
            _calendar_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_0__.CalendarEventTitleFormatter
          );
        },

        /* harmony export */
        "CalendarMomentDateFormatter": function CalendarMomentDateFormatter() {
          return (
            /* reexport safe */
            _calendar_moment_date_formatter_provider__WEBPACK_IMPORTED_MODULE_1__.CalendarMomentDateFormatter
          );
        },

        /* harmony export */
        "MOMENT": function MOMENT() {
          return (
            /* reexport safe */
            _calendar_moment_date_formatter_provider__WEBPACK_IMPORTED_MODULE_1__.MOMENT
          );
        },

        /* harmony export */
        "CalendarNativeDateFormatter": function CalendarNativeDateFormatter() {
          return (
            /* reexport safe */
            _calendar_native_date_formatter_provider__WEBPACK_IMPORTED_MODULE_2__.CalendarNativeDateFormatter
          );
        },

        /* harmony export */
        "CalendarAngularDateFormatter": function CalendarAngularDateFormatter() {
          return (
            /* reexport safe */
            _calendar_angular_date_formatter_provider__WEBPACK_IMPORTED_MODULE_3__.CalendarAngularDateFormatter
          );
        },

        /* harmony export */
        "CalendarDateFormatter": function CalendarDateFormatter() {
          return (
            /* reexport safe */
            _calendar_date_formatter_provider__WEBPACK_IMPORTED_MODULE_4__.CalendarDateFormatter
          );
        },

        /* harmony export */
        "CalendarUtils": function CalendarUtils() {
          return (
            /* reexport safe */
            _calendar_utils_provider__WEBPACK_IMPORTED_MODULE_5__.CalendarUtils
          );
        },

        /* harmony export */
        "CalendarA11y": function CalendarA11y() {
          return (
            /* reexport safe */
            _calendar_a11y_provider__WEBPACK_IMPORTED_MODULE_6__.CalendarA11y
          );
        },

        /* harmony export */
        "CalendarEventTimesChangedEventType": function CalendarEventTimesChangedEventType() {
          return (
            /* reexport safe */
            _calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_7__.CalendarEventTimesChangedEventType
          );
        },

        /* harmony export */
        "DateAdapter": function DateAdapter() {
          return (
            /* reexport safe */
            _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_8__.DateAdapter
          );
        },

        /* harmony export */
        "CalendarView": function CalendarView() {
          return (
            /* reexport safe */
            _calendar_view_enum__WEBPACK_IMPORTED_MODULE_9__.CalendarView
          );
        },

        /* harmony export */
        "ɵCalendarEventActionsComponent": function ɵCalendarEventActionsComponent() {
          return (
            /* reexport safe */
            _calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_10__.CalendarEventActionsComponent
          );
        },

        /* harmony export */
        "ɵCalendarEventTitleComponent": function ɵCalendarEventTitleComponent() {
          return (
            /* reexport safe */
            _calendar_event_title_component__WEBPACK_IMPORTED_MODULE_11__.CalendarEventTitleComponent
          );
        },

        /* harmony export */
        "ɵCalendarTooltipDirective": function ɵCalendarTooltipDirective() {
          return (
            /* reexport safe */
            _calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_12__.CalendarTooltipDirective
          );
        },

        /* harmony export */
        "ɵCalendarTooltipWindowComponent": function ɵCalendarTooltipWindowComponent() {
          return (
            /* reexport safe */
            _calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_12__.CalendarTooltipWindowComponent
          );
        },

        /* harmony export */
        "ɵCalendarPreviousViewDirective": function ɵCalendarPreviousViewDirective() {
          return (
            /* reexport safe */
            _calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_13__.CalendarPreviousViewDirective
          );
        },

        /* harmony export */
        "ɵCalendarNextViewDirective": function ɵCalendarNextViewDirective() {
          return (
            /* reexport safe */
            _calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_14__.CalendarNextViewDirective
          );
        },

        /* harmony export */
        "ɵCalendarTodayDirective": function ɵCalendarTodayDirective() {
          return (
            /* reexport safe */
            _calendar_today_directive__WEBPACK_IMPORTED_MODULE_15__.CalendarTodayDirective
          );
        },

        /* harmony export */
        "ɵCalendarDatePipe": function ɵCalendarDatePipe() {
          return (
            /* reexport safe */
            _calendar_date_pipe__WEBPACK_IMPORTED_MODULE_16__.CalendarDatePipe
          );
        },

        /* harmony export */
        "ɵCalendarEventTitlePipe": function ɵCalendarEventTitlePipe() {
          return (
            /* reexport safe */
            _calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_17__.CalendarEventTitlePipe
          );
        },

        /* harmony export */
        "ɵClickDirective": function ɵClickDirective() {
          return (
            /* reexport safe */
            _click_directive__WEBPACK_IMPORTED_MODULE_18__.ClickDirective
          );
        },

        /* harmony export */
        "ɵKeydownEnterDirective": function ɵKeydownEnterDirective() {
          return (
            /* reexport safe */
            _keydown_enter_directive__WEBPACK_IMPORTED_MODULE_19__.KeydownEnterDirective
          );
        },

        /* harmony export */
        "ɵCalendarA11yPipe": function ɵCalendarA11yPipe() {
          return (
            /* reexport safe */
            _calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_20__.CalendarA11yPipe
          );
        },

        /* harmony export */
        "DAYS_OF_WEEK": function DAYS_OF_WEEK() {
          return (
            /* reexport safe */
            calendar_utils__WEBPACK_IMPORTED_MODULE_21__.DAYS_OF_WEEK
          );
        },

        /* harmony export */
        "CalendarCommonModule": function CalendarCommonModule() {
          return (
            /* binding */
            _CalendarCommonModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./calendar-event-actions.component */
      32136);
      /* harmony import */


      var _calendar_event_title_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./calendar-event-title.component */
      58974);
      /* harmony import */


      var _calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./calendar-tooltip.directive */
      69416);
      /* harmony import */


      var _calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./calendar-previous-view.directive */
      31726);
      /* harmony import */


      var _calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./calendar-next-view.directive */
      60897);
      /* harmony import */


      var _calendar_today_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./calendar-today.directive */
      22167);
      /* harmony import */


      var _calendar_date_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./calendar-date.pipe */
      12153);
      /* harmony import */


      var _calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./calendar-event-title.pipe */
      44602);
      /* harmony import */


      var _click_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./click.directive */
      81567);
      /* harmony import */


      var _keydown_enter_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./keydown-enter.directive */
      93759);
      /* harmony import */


      var _calendar_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./calendar-event-title-formatter.provider */
      38711);
      /* harmony import */


      var _calendar_date_formatter_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./calendar-date-formatter.provider */
      6693);
      /* harmony import */


      var _calendar_utils_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./calendar-utils.provider */
      27579);
      /* harmony import */


      var _calendar_a11y_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./calendar-a11y.provider */
      40199);
      /* harmony import */


      var _calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./calendar-a11y.pipe */
      62479);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _calendar_moment_date_formatter_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./calendar-moment-date-formatter.provider */
      19898);
      /* harmony import */


      var _calendar_native_date_formatter_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./calendar-native-date-formatter.provider */
      90316);
      /* harmony import */


      var _calendar_angular_date_formatter_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./calendar-angular-date-formatter.provider */
      6366);
      /* harmony import */


      var _calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./calendar-event-times-changed-event.interface */
      91203);
      /* harmony import */


      var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../date-adapters/date-adapter */
      90008);
      /* harmony import */


      var _calendar_view_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./calendar-view.enum */
      4606);
      /* harmony import */


      var calendar_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! calendar-utils */
      90489); // needed for ivy, not part of the public api

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


      var _CalendarCommonModule = /*#__PURE__*/function () {
        function _CalendarCommonModule() {
          _classCallCheck(this, _CalendarCommonModule);
        }

        _createClass(_CalendarCommonModule, null, [{
          key: "forRoot",
          value: function forRoot(dateAdapter) {
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return {
              ngModule: _CalendarCommonModule,
              providers: [dateAdapter, config.eventTitleFormatter || _calendar_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_0__.CalendarEventTitleFormatter, config.dateFormatter || _calendar_date_formatter_provider__WEBPACK_IMPORTED_MODULE_4__.CalendarDateFormatter, config.utils || _calendar_utils_provider__WEBPACK_IMPORTED_MODULE_5__.CalendarUtils, config.a11y || _calendar_a11y_provider__WEBPACK_IMPORTED_MODULE_6__.CalendarA11y]
            };
          }
        }]);

        return _CalendarCommonModule;
      }();

      _CalendarCommonModule.ɵfac = function CalendarCommonModule_Factory(t) {
        return new (t || _CalendarCommonModule)();
      };

      _CalendarCommonModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({
        type: _CalendarCommonModule
      });
      _CalendarCommonModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.I18nPluralPipe],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](_CalendarCommonModule, {
          declarations: [_calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_10__.CalendarEventActionsComponent, _calendar_event_title_component__WEBPACK_IMPORTED_MODULE_11__.CalendarEventTitleComponent, _calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_12__.CalendarTooltipWindowComponent, _calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_12__.CalendarTooltipDirective, _calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_13__.CalendarPreviousViewDirective, _calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_14__.CalendarNextViewDirective, _calendar_today_directive__WEBPACK_IMPORTED_MODULE_15__.CalendarTodayDirective, _calendar_date_pipe__WEBPACK_IMPORTED_MODULE_16__.CalendarDatePipe, _calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_17__.CalendarEventTitlePipe, _calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_20__.CalendarA11yPipe, _click_directive__WEBPACK_IMPORTED_MODULE_18__.ClickDirective, _keydown_enter_directive__WEBPACK_IMPORTED_MODULE_19__.KeydownEnterDirective],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule],
          exports: [_calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_10__.CalendarEventActionsComponent, _calendar_event_title_component__WEBPACK_IMPORTED_MODULE_11__.CalendarEventTitleComponent, _calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_12__.CalendarTooltipWindowComponent, _calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_12__.CalendarTooltipDirective, _calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_13__.CalendarPreviousViewDirective, _calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_14__.CalendarNextViewDirective, _calendar_today_directive__WEBPACK_IMPORTED_MODULE_15__.CalendarTodayDirective, _calendar_date_pipe__WEBPACK_IMPORTED_MODULE_16__.CalendarDatePipe, _calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_17__.CalendarEventTitlePipe, _calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_20__.CalendarA11yPipe, _click_directive__WEBPACK_IMPORTED_MODULE_18__.ClickDirective, _keydown_enter_directive__WEBPACK_IMPORTED_MODULE_19__.KeydownEnterDirective]
        });
      })();
      /***/

    },

    /***/
    6693: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarDateFormatter": function CalendarDateFormatter() {
          return (
            /* binding */
            _CalendarDateFormatter
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _calendar_angular_date_formatter_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./calendar-angular-date-formatter.provider */
      6366);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
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


      var _CalendarDateFormatter = /*#__PURE__*/function (_calendar_angular_dat) {
        _inherits(_CalendarDateFormatter, _calendar_angular_dat);

        var _super = _createSuper(_CalendarDateFormatter);

        function _CalendarDateFormatter() {
          _classCallCheck(this, _CalendarDateFormatter);

          return _super.apply(this, arguments);
        }

        return _CalendarDateFormatter;
      }(_calendar_angular_date_formatter_provider__WEBPACK_IMPORTED_MODULE_0__.CalendarAngularDateFormatter);

      _CalendarDateFormatter.ɵfac = /*@__PURE__*/function () {
        var ɵCalendarDateFormatter_BaseFactory;
        return function CalendarDateFormatter_Factory(t) {
          return (ɵCalendarDateFormatter_BaseFactory || (ɵCalendarDateFormatter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](_CalendarDateFormatter)))(t || _CalendarDateFormatter);
        };
      }();

      _CalendarDateFormatter.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _CalendarDateFormatter,
        factory: _CalendarDateFormatter.ɵfac
      });
      /***/
    },

    /***/
    12153: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarDatePipe": function CalendarDatePipe() {
          return (
            /* binding */
            _CalendarDatePipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _calendar_date_formatter_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./calendar-date-formatter.provider */
      6693);
      /**
       * This pipe is primarily for rendering the current view title. Example usage:
       * ```typescript
       * // where `viewDate` is a `Date` and view is `'month' | 'week' | 'day'`
       * {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}
       * ```
       */


      var _CalendarDatePipe = /*#__PURE__*/function () {
        function _CalendarDatePipe(dateFormatter, locale) {
          _classCallCheck(this, _CalendarDatePipe);

          this.dateFormatter = dateFormatter;
          this.locale = locale;
        }

        _createClass(_CalendarDatePipe, [{
          key: "transform",
          value: function transform(date, method) {
            var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.locale;
            var weekStartsOn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            var excludeDays = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
            var daysInWeek = arguments.length > 5 ? arguments[5] : undefined;

            if (typeof this.dateFormatter[method] === 'undefined') {
              var allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(_calendar_date_formatter_provider__WEBPACK_IMPORTED_MODULE_0__.CalendarDateFormatter.prototype)).filter(function (iMethod) {
                return iMethod !== 'constructor';
              });
              throw new Error("".concat(method, " is not a valid date formatter. Can only be one of ").concat(allowedMethods.join(', ')));
            }

            return this.dateFormatter[method]({
              date: date,
              locale: locale,
              weekStartsOn: weekStartsOn,
              excludeDays: excludeDays,
              daysInWeek: daysInWeek
            });
          }
        }]);

        return _CalendarDatePipe;
      }();

      _CalendarDatePipe.ɵfac = function CalendarDatePipe_Factory(t) {
        return new (t || _CalendarDatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_calendar_date_formatter_provider__WEBPACK_IMPORTED_MODULE_0__.CalendarDateFormatter, 16), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.LOCALE_ID, 16));
      };

      _CalendarDatePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
        name: "calendarDate",
        type: _CalendarDatePipe,
        pure: true
      });
      /***/
    },

    /***/
    45824: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarDragHelper": function CalendarDragHelper() {
          return (
            /* binding */
            _CalendarDragHelper
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./util */
      33878);

      var _CalendarDragHelper = /*#__PURE__*/function () {
        function _CalendarDragHelper(dragContainerElement, draggableElement) {
          _classCallCheck(this, _CalendarDragHelper);

          this.dragContainerElement = dragContainerElement;
          this.startPosition = draggableElement.getBoundingClientRect();
        }

        _createClass(_CalendarDragHelper, [{
          key: "validateDrag",
          value: function validateDrag(_ref17) {
            var x = _ref17.x,
                y = _ref17.y,
                snapDraggedEvents = _ref17.snapDraggedEvents,
                dragAlreadyMoved = _ref17.dragAlreadyMoved,
                transform = _ref17.transform;
            var isDraggedWithinThreshold = (0, _util__WEBPACK_IMPORTED_MODULE_0__.isWithinThreshold)({
              x: x,
              y: y
            }) || dragAlreadyMoved;

            if (snapDraggedEvents) {
              var inner = Object.assign({}, this.startPosition, {
                left: this.startPosition.left + transform.x,
                right: this.startPosition.right + transform.x,
                top: this.startPosition.top + transform.y,
                bottom: this.startPosition.bottom + transform.y
              });

              if (isDraggedWithinThreshold) {
                var outer = this.dragContainerElement.getBoundingClientRect();
                var isTopInside = outer.top < inner.top && inner.top < outer.bottom;
                var isBottomInside = outer.top < inner.bottom && inner.bottom < outer.bottom;
                return (0, _util__WEBPACK_IMPORTED_MODULE_0__.isInsideLeftAndRight)(outer, inner) && (isTopInside || isBottomInside);
              }
              /* istanbul ignore next */


              return false;
            } else {
              return isDraggedWithinThreshold;
            }
          }
        }]);

        return _CalendarDragHelper;
      }();
      /***/

    },

    /***/
    32136: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarEventActionsComponent": function CalendarEventActionsComponent() {
          return (
            /* binding */
            _CalendarEventActionsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _click_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./click.directive */
      81567);
      /* harmony import */


      var _keydown_enter_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./keydown-enter.directive */
      93759);
      /* harmony import */


      var _calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./calendar-a11y.pipe */
      62479);

      var _c0 = function _c0(a0) {
        return {
          action: a0
        };
      };

      function CalendarEventActionsComponent_ng_template_1_span_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mwlClick", function CalendarEventActionsComponent_ng_template_1_span_1_a_2_Template_a_mwlClick_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var action_r7 = restoredCtx.$implicit;

            var event_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).event;

            return action_r7.onClick({
              event: event_r3,
              sourceEvent: $event
            });
          })("mwlKeydownEnter", function CalendarEventActionsComponent_ng_template_1_span_1_a_2_Template_a_mwlKeydownEnter_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var action_r7 = restoredCtx.$implicit;

            var event_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).event;

            return action_r7.onClick({
              event: event_r3,
              sourceEvent: $event
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "calendarA11y");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var action_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", action_r7.cssClass)("innerHtml", action_r7.label, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, action_r7), "actionButtonLabel"));
        }
      }

      function CalendarEventActionsComponent_ng_template_1_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CalendarEventActionsComponent_ng_template_1_span_1_a_2_Template, 3, 8, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var event_r3 = ctx_r13.event;
          var trackByActionId_r4 = ctx_r13.trackByActionId;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", event_r3.actions)("ngForTrackBy", trackByActionId_r4);
        }
      }

      function CalendarEventActionsComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarEventActionsComponent_ng_template_1_span_1_Template, 4, 2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n    ");
        }

        if (rf & 2) {
          var event_r3 = ctx.event;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", event_r3.actions);
        }
      }

      function CalendarEventActionsComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
        }
      }

      var _c1 = function _c1(a0, a1) {
        return {
          event: a0,
          trackByActionId: a1
        };
      };

      var _CalendarEventActionsComponent = function _CalendarEventActionsComponent() {
        _classCallCheck(this, _CalendarEventActionsComponent);

        this.trackByActionId = function (index, action) {
          return action.id ? action.id : action;
        };
      };

      _CalendarEventActionsComponent.ɵfac = function CalendarEventActionsComponent_Factory(t) {
        return new (t || _CalendarEventActionsComponent)();
      };

      _CalendarEventActionsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CalendarEventActionsComponent,
        selectors: [["mwl-calendar-event-actions"]],
        inputs: {
          event: "event",
          customTemplate: "customTemplate"
        },
        decls: 6,
        vars: 5,
        consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-event-actions", 4, "ngIf"], [1, "cal-event-actions"], ["class", "cal-event-action", "href", "javascript:;", "tabindex", "0", "role", "button", 3, "ngClass", "innerHtml", "mwlClick", "mwlKeydownEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["href", "javascript:;", "tabindex", "0", "role", "button", 1, "cal-event-action", 3, "ngClass", "innerHtml", "mwlClick", "mwlKeydownEnter"]],
        template: function CalendarEventActionsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarEventActionsComponent_ng_template_1_Template, 3, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarEventActionsComponent_ng_template_4_Template, 1, 0, "ng-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c1, ctx.event, ctx.trackByActionId));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _click_directive__WEBPACK_IMPORTED_MODULE_2__.ClickDirective, _keydown_enter_directive__WEBPACK_IMPORTED_MODULE_3__.KeydownEnterDirective],
        pipes: [_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_4__.CalendarA11yPipe],
        encapsulation: 2
      });
      /***/
    },

    /***/
    91203: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarEventTimesChangedEventType": function CalendarEventTimesChangedEventType() {
          return (
            /* binding */
            _CalendarEventTimesChangedEventType
          );
        }
        /* harmony export */

      });

      var _CalendarEventTimesChangedEventType;

      (function (CalendarEventTimesChangedEventType) {
        CalendarEventTimesChangedEventType["Drag"] = "drag";
        CalendarEventTimesChangedEventType["Drop"] = "drop";
        CalendarEventTimesChangedEventType["Resize"] = "resize";
      })(_CalendarEventTimesChangedEventType || (_CalendarEventTimesChangedEventType = {}));
      /***/

    },

    /***/
    38711: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarEventTitleFormatter": function CalendarEventTitleFormatter() {
          return (
            /* binding */
            _CalendarEventTitleFormatter
          );
        }
        /* harmony export */

      });
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


      var _CalendarEventTitleFormatter = /*#__PURE__*/function () {
        function _CalendarEventTitleFormatter() {
          _classCallCheck(this, _CalendarEventTitleFormatter);
        }

        _createClass(_CalendarEventTitleFormatter, [{
          key: "month",
          value:
          /**
           * The month view event title.
           */
          function month(event, title) {
            return event.title;
          }
          /**
           * The month view event tooltip. Return a falsey value from this to disable the tooltip.
           */

        }, {
          key: "monthTooltip",
          value: function monthTooltip(event, title) {
            return event.title;
          }
          /**
           * The week view event title.
           */

        }, {
          key: "week",
          value: function week(event, title) {
            return event.title;
          }
          /**
           * The week view event tooltip. Return a falsey value from this to disable the tooltip.
           */

        }, {
          key: "weekTooltip",
          value: function weekTooltip(event, title) {
            return event.title;
          }
          /**
           * The day view event title.
           */

        }, {
          key: "day",
          value: function day(event, title) {
            return event.title;
          }
          /**
           * The day view event tooltip. Return a falsey value from this to disable the tooltip.
           */

        }, {
          key: "dayTooltip",
          value: function dayTooltip(event, title) {
            return event.title;
          }
        }]);

        return _CalendarEventTitleFormatter;
      }();
      /***/

    },

    /***/
    58974: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarEventTitleComponent": function CalendarEventTitleComponent() {
          return (
            /* binding */
            _CalendarEventTitleComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./calendar-event-title.pipe */
      44602);
      /* harmony import */


      var _calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./calendar-a11y.pipe */
      62479);

      var _c0 = function _c0() {
        return {};
      };

      function CalendarEventTitleComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "calendarEventTitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "calendarA11y");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    ");
        }

        if (rf & 2) {
          var event_r3 = ctx.event;
          var view_r4 = ctx.view;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 2, event_r3.title, view_r4, event_r3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0), "hideEventTitle"));
        }
      }

      function CalendarEventTitleComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
        }
      }

      var _c1 = function _c1(a0, a1) {
        return {
          event: a0,
          view: a1
        };
      };

      var _CalendarEventTitleComponent = function _CalendarEventTitleComponent() {
        _classCallCheck(this, _CalendarEventTitleComponent);
      };

      _CalendarEventTitleComponent.ɵfac = function CalendarEventTitleComponent_Factory(t) {
        return new (t || _CalendarEventTitleComponent)();
      };

      _CalendarEventTitleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CalendarEventTitleComponent,
        selectors: [["mwl-calendar-event-title"]],
        inputs: {
          event: "event",
          customTemplate: "customTemplate",
          view: "view"
        },
        decls: 6,
        vars: 5,
        consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-event-title", 3, "innerHTML"]],
        template: function CalendarEventTitleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarEventTitleComponent_ng_template_1_Template, 6, 10, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarEventTitleComponent_ng_template_4_Template, 1, 0, "ng-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c1, ctx.event, ctx.view));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet],
        pipes: [_calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_2__.CalendarEventTitlePipe, _calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_3__.CalendarA11yPipe],
        encapsulation: 2
      });
      /***/
    },

    /***/
    44602: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarEventTitlePipe": function CalendarEventTitlePipe() {
          return (
            /* binding */
            _CalendarEventTitlePipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _calendar_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./calendar-event-title-formatter.provider */
      38711);

      var _CalendarEventTitlePipe = /*#__PURE__*/function () {
        function _CalendarEventTitlePipe(calendarEventTitle) {
          _classCallCheck(this, _CalendarEventTitlePipe);

          this.calendarEventTitle = calendarEventTitle;
        }

        _createClass(_CalendarEventTitlePipe, [{
          key: "transform",
          value: function transform(title, titleType, event) {
            return this.calendarEventTitle[titleType](event, title);
          }
        }]);

        return _CalendarEventTitlePipe;
      }();

      _CalendarEventTitlePipe.ɵfac = function CalendarEventTitlePipe_Factory(t) {
        return new (t || _CalendarEventTitlePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_calendar_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_1__.CalendarEventTitleFormatter, 16));
      };

      _CalendarEventTitlePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "calendarEventTitle",
        type: _CalendarEventTitlePipe,
        pure: true
      });
      /***/
    },

    /***/
    19898: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MOMENT": function MOMENT() {
          return (
            /* binding */
            _MOMENT
          );
        },

        /* harmony export */
        "CalendarMomentDateFormatter": function CalendarMomentDateFormatter() {
          return (
            /* binding */
            _CalendarMomentDateFormatter
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./util */
      33878);
      /* harmony import */


      var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../date-adapters/date-adapter */
      90008);

      var _MOMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('Moment');
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


      var _CalendarMomentDateFormatter = /*#__PURE__*/function () {
        /**
         * @hidden
         */
        function _CalendarMomentDateFormatter(moment, dateAdapter) {
          _classCallCheck(this, _CalendarMomentDateFormatter);

          this.moment = moment;
          this.dateAdapter = dateAdapter;
        }
        /**
         * The month view header week day labels
         */


        _createClass(_CalendarMomentDateFormatter, [{
          key: "monthViewColumnHeader",
          value: function monthViewColumnHeader(_ref18) {
            var date = _ref18.date,
                locale = _ref18.locale;
            return this.moment(date).locale(locale).format('dddd');
          }
          /**
           * The month view cell day number
           */

        }, {
          key: "monthViewDayNumber",
          value: function monthViewDayNumber(_ref19) {
            var date = _ref19.date,
                locale = _ref19.locale;
            return this.moment(date).locale(locale).format('D');
          }
          /**
           * The month view title
           */

        }, {
          key: "monthViewTitle",
          value: function monthViewTitle(_ref20) {
            var date = _ref20.date,
                locale = _ref20.locale;
            return this.moment(date).locale(locale).format('MMMM YYYY');
          }
          /**
           * The week view header week day labels
           */

        }, {
          key: "weekViewColumnHeader",
          value: function weekViewColumnHeader(_ref21) {
            var date = _ref21.date,
                locale = _ref21.locale;
            return this.moment(date).locale(locale).format('dddd');
          }
          /**
           * The week view sub header day and month labels
           */

        }, {
          key: "weekViewColumnSubHeader",
          value: function weekViewColumnSubHeader(_ref22) {
            var date = _ref22.date,
                locale = _ref22.locale;
            return this.moment(date).locale(locale).format('MMM D');
          }
          /**
           * The week view title
           */

        }, {
          key: "weekViewTitle",
          value: function weekViewTitle(_ref23) {
            var _this = this;

            var date = _ref23.date,
                locale = _ref23.locale,
                weekStartsOn = _ref23.weekStartsOn,
                excludeDays = _ref23.excludeDays,
                daysInWeek = _ref23.daysInWeek;

            var _ref24 = (0, _util__WEBPACK_IMPORTED_MODULE_1__.getWeekViewPeriod)(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek),
                viewStart = _ref24.viewStart,
                viewEnd = _ref24.viewEnd;

            var format = function format(dateToFormat, showYear) {
              return _this.moment(dateToFormat).locale(locale).format('MMM D' + (showYear ? ', YYYY' : ''));
            };

            return "".concat(format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()), " - ").concat(format(viewEnd, true));
          }
          /**
           * The time formatting down the left hand side of the week view
           */

        }, {
          key: "weekViewHour",
          value: function weekViewHour(_ref25) {
            var date = _ref25.date,
                locale = _ref25.locale;
            return this.moment(date).locale(locale).format('ha');
          }
          /**
           * The time formatting down the left hand side of the day view
           */

        }, {
          key: "dayViewHour",
          value: function dayViewHour(_ref26) {
            var date = _ref26.date,
                locale = _ref26.locale;
            return this.moment(date).locale(locale).format('ha');
          }
          /**
           * The day view title
           */

        }, {
          key: "dayViewTitle",
          value: function dayViewTitle(_ref27) {
            var date = _ref27.date,
                locale = _ref27.locale;
            return this.moment(date).locale(locale).format('dddd, LL'); // dddd = Thursday
          } // LL = locale-dependent Month Day, Year

        }]);

        return _CalendarMomentDateFormatter;
      }();

      _CalendarMomentDateFormatter.ɵfac = function CalendarMomentDateFormatter_Factory(t) {
        return new (t || _CalendarMomentDateFormatter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_MOMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_2__.DateAdapter));
      };

      _CalendarMomentDateFormatter.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _CalendarMomentDateFormatter,
        factory: _CalendarMomentDateFormatter.ɵfac
      });
      /***/
    },

    /***/
    90316: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarNativeDateFormatter": function CalendarNativeDateFormatter() {
          return (
            /* binding */
            _CalendarNativeDateFormatter
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./util */
      33878);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../date-adapters/date-adapter */
      90008);
      /**
       * This will use <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to do all date formatting.
       *
       * You will need to include a <a href="https://github.com/andyearnshaw/Intl.js/">polyfill</a> for older browsers.
       */


      var _CalendarNativeDateFormatter = /*#__PURE__*/function () {
        function _CalendarNativeDateFormatter(dateAdapter) {
          _classCallCheck(this, _CalendarNativeDateFormatter);

          this.dateAdapter = dateAdapter;
        }
        /**
         * The month view header week day labels
         */


        _createClass(_CalendarNativeDateFormatter, [{
          key: "monthViewColumnHeader",
          value: function monthViewColumnHeader(_ref28) {
            var date = _ref28.date,
                locale = _ref28.locale;
            return new Intl.DateTimeFormat(locale, {
              weekday: 'long'
            }).format(date);
          }
          /**
           * The month view cell day number
           */

        }, {
          key: "monthViewDayNumber",
          value: function monthViewDayNumber(_ref29) {
            var date = _ref29.date,
                locale = _ref29.locale;
            return new Intl.DateTimeFormat(locale, {
              day: 'numeric'
            }).format(date);
          }
          /**
           * The month view title
           */

        }, {
          key: "monthViewTitle",
          value: function monthViewTitle(_ref30) {
            var date = _ref30.date,
                locale = _ref30.locale;
            return new Intl.DateTimeFormat(locale, {
              year: 'numeric',
              month: 'long'
            }).format(date);
          }
          /**
           * The week view header week day labels
           */

        }, {
          key: "weekViewColumnHeader",
          value: function weekViewColumnHeader(_ref31) {
            var date = _ref31.date,
                locale = _ref31.locale;
            return new Intl.DateTimeFormat(locale, {
              weekday: 'long'
            }).format(date);
          }
          /**
           * The week view sub header day and month labels
           */

        }, {
          key: "weekViewColumnSubHeader",
          value: function weekViewColumnSubHeader(_ref32) {
            var date = _ref32.date,
                locale = _ref32.locale;
            return new Intl.DateTimeFormat(locale, {
              day: 'numeric',
              month: 'short'
            }).format(date);
          }
          /**
           * The week view title
           */

        }, {
          key: "weekViewTitle",
          value: function weekViewTitle(_ref33) {
            var date = _ref33.date,
                locale = _ref33.locale,
                weekStartsOn = _ref33.weekStartsOn,
                excludeDays = _ref33.excludeDays,
                daysInWeek = _ref33.daysInWeek;

            var _ref34 = (0, _util__WEBPACK_IMPORTED_MODULE_0__.getWeekViewPeriod)(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek),
                viewStart = _ref34.viewStart,
                viewEnd = _ref34.viewEnd;

            var format = function format(dateToFormat, showYear) {
              return new Intl.DateTimeFormat(locale, {
                day: 'numeric',
                month: 'short',
                year: showYear ? 'numeric' : undefined
              }).format(dateToFormat);
            };

            return "".concat(format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()), " - ").concat(format(viewEnd, true));
          }
          /**
           * The time formatting down the left hand side of the week view
           */

        }, {
          key: "weekViewHour",
          value: function weekViewHour(_ref35) {
            var date = _ref35.date,
                locale = _ref35.locale;
            return new Intl.DateTimeFormat(locale, {
              hour: 'numeric'
            }).format(date);
          }
          /**
           * The time formatting down the left hand side of the day view
           */

        }, {
          key: "dayViewHour",
          value: function dayViewHour(_ref36) {
            var date = _ref36.date,
                locale = _ref36.locale;
            return new Intl.DateTimeFormat(locale, {
              hour: 'numeric'
            }).format(date);
          }
          /**
           * The day view title
           */

        }, {
          key: "dayViewTitle",
          value: function dayViewTitle(_ref37) {
            var date = _ref37.date,
                locale = _ref37.locale;
            return new Intl.DateTimeFormat(locale, {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
              weekday: 'long'
            }).format(date);
          }
        }]);

        return _CalendarNativeDateFormatter;
      }();

      _CalendarNativeDateFormatter.ɵfac = function CalendarNativeDateFormatter_Factory(t) {
        return new (t || _CalendarNativeDateFormatter)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_2__.DateAdapter));
      };

      _CalendarNativeDateFormatter.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _CalendarNativeDateFormatter,
        factory: _CalendarNativeDateFormatter.ɵfac
      });
      /***/
    },

    /***/
    60897: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarNextViewDirective": function CalendarNextViewDirective() {
          return (
            /* binding */
            _CalendarNextViewDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _calendar_view_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./calendar-view.enum */
      4606);
      /* harmony import */


      var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./util */
      33878);
      /* harmony import */


      var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../date-adapters/date-adapter */
      90008);
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


      var _CalendarNextViewDirective = /*#__PURE__*/function () {
        function _CalendarNextViewDirective(dateAdapter) {
          _classCallCheck(this, _CalendarNextViewDirective);

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


        _createClass(_CalendarNextViewDirective, [{
          key: "onClick",
          value: function onClick() {
            var addFn = {
              day: this.dateAdapter.addDays,
              week: this.dateAdapter.addWeeks,
              month: this.dateAdapter.addMonths
            }[this.view];

            if (this.view === _calendar_view_enum__WEBPACK_IMPORTED_MODULE_1__.CalendarView.Day) {
              this.viewDateChange.emit((0, _util__WEBPACK_IMPORTED_MODULE_2__.addDaysWithExclusions)(this.dateAdapter, this.viewDate, 1, this.excludeDays));
            } else if (this.view === _calendar_view_enum__WEBPACK_IMPORTED_MODULE_1__.CalendarView.Week && this.daysInWeek) {
              this.viewDateChange.emit((0, _util__WEBPACK_IMPORTED_MODULE_2__.addDaysWithExclusions)(this.dateAdapter, this.viewDate, this.daysInWeek, this.excludeDays));
            } else {
              this.viewDateChange.emit(addFn(this.viewDate, 1));
            }
          }
        }]);

        return _CalendarNextViewDirective;
      }();

      _CalendarNextViewDirective.ɵfac = function CalendarNextViewDirective_Factory(t) {
        return new (t || _CalendarNextViewDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_3__.DateAdapter));
      };

      _CalendarNextViewDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CalendarNextViewDirective,
        selectors: [["", "mwlCalendarNextView", ""]],
        hostBindings: function CalendarNextViewDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarNextViewDirective_click_HostBindingHandler() {
              return ctx.onClick();
            });
          }
        },
        inputs: {
          view: "view",
          viewDate: "viewDate",
          excludeDays: "excludeDays",
          daysInWeek: "daysInWeek"
        },
        outputs: {
          viewDateChange: "viewDateChange"
        }
      });
      /***/
    },

    /***/
    31726: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarPreviousViewDirective": function CalendarPreviousViewDirective() {
          return (
            /* binding */
            _CalendarPreviousViewDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _calendar_view_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./calendar-view.enum */
      4606);
      /* harmony import */


      var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./util */
      33878);
      /* harmony import */


      var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../date-adapters/date-adapter */
      90008);
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


      var _CalendarPreviousViewDirective = /*#__PURE__*/function () {
        function _CalendarPreviousViewDirective(dateAdapter) {
          _classCallCheck(this, _CalendarPreviousViewDirective);

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


        _createClass(_CalendarPreviousViewDirective, [{
          key: "onClick",
          value: function onClick() {
            var subFn = {
              day: this.dateAdapter.subDays,
              week: this.dateAdapter.subWeeks,
              month: this.dateAdapter.subMonths
            }[this.view];

            if (this.view === _calendar_view_enum__WEBPACK_IMPORTED_MODULE_1__.CalendarView.Day) {
              this.viewDateChange.emit((0, _util__WEBPACK_IMPORTED_MODULE_2__.addDaysWithExclusions)(this.dateAdapter, this.viewDate, -1, this.excludeDays));
            } else if (this.view === _calendar_view_enum__WEBPACK_IMPORTED_MODULE_1__.CalendarView.Week && this.daysInWeek) {
              this.viewDateChange.emit((0, _util__WEBPACK_IMPORTED_MODULE_2__.addDaysWithExclusions)(this.dateAdapter, this.viewDate, -this.daysInWeek, this.excludeDays));
            } else {
              this.viewDateChange.emit(subFn(this.viewDate, 1));
            }
          }
        }]);

        return _CalendarPreviousViewDirective;
      }();

      _CalendarPreviousViewDirective.ɵfac = function CalendarPreviousViewDirective_Factory(t) {
        return new (t || _CalendarPreviousViewDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_3__.DateAdapter));
      };

      _CalendarPreviousViewDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CalendarPreviousViewDirective,
        selectors: [["", "mwlCalendarPreviousView", ""]],
        hostBindings: function CalendarPreviousViewDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarPreviousViewDirective_click_HostBindingHandler() {
              return ctx.onClick();
            });
          }
        },
        inputs: {
          view: "view",
          viewDate: "viewDate",
          excludeDays: "excludeDays",
          daysInWeek: "daysInWeek"
        },
        outputs: {
          viewDateChange: "viewDateChange"
        }
      });
      /***/
    },

    /***/
    70923: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarResizeHelper": function CalendarResizeHelper() {
          return (
            /* binding */
            _CalendarResizeHelper
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./util */
      33878);

      var _CalendarResizeHelper = /*#__PURE__*/function () {
        function _CalendarResizeHelper(resizeContainerElement, minWidth, rtl) {
          _classCallCheck(this, _CalendarResizeHelper);

          this.resizeContainerElement = resizeContainerElement;
          this.minWidth = minWidth;
          this.rtl = rtl;
        }

        _createClass(_CalendarResizeHelper, [{
          key: "validateResize",
          value: function validateResize(_ref38) {
            var rectangle = _ref38.rectangle,
                edges = _ref38.edges;

            if (this.rtl) {
              // TODO - find a way of testing this, for some reason the tests always fail but it does actually work

              /* istanbul ignore next */
              if (typeof edges.left !== 'undefined') {
                rectangle.left -= edges.left;
                rectangle.right += edges.left;
              } else if (typeof edges.right !== 'undefined') {
                rectangle.left += edges.right;
                rectangle.right -= edges.right;
              }

              rectangle.width = rectangle.right - rectangle.left;
            }

            if (this.minWidth && Math.ceil(rectangle.width) < Math.ceil(this.minWidth)) {
              return false;
            }

            return (0, _util__WEBPACK_IMPORTED_MODULE_0__.isInside)(this.resizeContainerElement.getBoundingClientRect(), rectangle);
          }
        }]);

        return _CalendarResizeHelper;
      }();
      /***/

    },

    /***/
    22167: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarTodayDirective": function CalendarTodayDirective() {
          return (
            /* binding */
            _CalendarTodayDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../date-adapters/date-adapter */
      90008);
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


      var _CalendarTodayDirective = /*#__PURE__*/function () {
        function _CalendarTodayDirective(dateAdapter) {
          _classCallCheck(this, _CalendarTodayDirective);

          this.dateAdapter = dateAdapter;
          /**
           * Called when the view date is changed
           */

          this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }
        /**
         * @hidden
         */


        _createClass(_CalendarTodayDirective, [{
          key: "onClick",
          value: function onClick() {
            this.viewDateChange.emit(this.dateAdapter.startOfDay(new Date()));
          }
        }]);

        return _CalendarTodayDirective;
      }();

      _CalendarTodayDirective.ɵfac = function CalendarTodayDirective_Factory(t) {
        return new (t || _CalendarTodayDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_1__.DateAdapter));
      };

      _CalendarTodayDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CalendarTodayDirective,
        selectors: [["", "mwlCalendarToday", ""]],
        hostBindings: function CalendarTodayDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarTodayDirective_click_HostBindingHandler() {
              return ctx.onClick();
            });
          }
        },
        inputs: {
          viewDate: "viewDate"
        },
        outputs: {
          viewDateChange: "viewDateChange"
        }
      });
      /***/
    },

    /***/
    69416: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarTooltipWindowComponent": function CalendarTooltipWindowComponent() {
          return (
            /* binding */
            _CalendarTooltipWindowComponent
          );
        },

        /* harmony export */
        "CalendarTooltipDirective": function CalendarTooltipDirective() {
          return (
            /* binding */
            _CalendarTooltipDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var positioning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! positioning */
      74853);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      50931);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      47599);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      24390);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      44094);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      function CalendarTooltipWindowComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n    ");
        }

        if (rf & 2) {
          var contents_r3 = ctx.contents;
          var placement_r4 = ctx.placement;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "cal-tooltip-" + placement_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", contents_r3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        }
      }

      function CalendarTooltipWindowComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n    ");
        }
      }

      var _c0 = function _c0(a0, a1, a2) {
        return {
          contents: a0,
          placement: a1,
          event: a2
        };
      };

      var _CalendarTooltipWindowComponent = function _CalendarTooltipWindowComponent() {
        _classCallCheck(this, _CalendarTooltipWindowComponent);
      };

      _CalendarTooltipWindowComponent.ɵfac = function CalendarTooltipWindowComponent_Factory(t) {
        return new (t || _CalendarTooltipWindowComponent)();
      };

      _CalendarTooltipWindowComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _CalendarTooltipWindowComponent,
        selectors: [["mwl-calendar-tooltip-window"]],
        inputs: {
          contents: "contents",
          placement: "placement",
          event: "event",
          customTemplate: "customTemplate"
        },
        decls: 6,
        vars: 6,
        consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-tooltip", 3, "ngClass"], [1, "cal-tooltip-arrow"], [1, "cal-tooltip-inner", 3, "innerHtml"]],
        template: function CalendarTooltipWindowComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CalendarTooltipWindowComponent_ng_template_1_Template, 8, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CalendarTooltipWindowComponent_ng_template_4_Template, 1, 0, "ng-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n  ");
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](2, _c0, ctx.contents, ctx.placement, ctx.event));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass],
        encapsulation: 2
      });

      var _CalendarTooltipDirective = /*#__PURE__*/function () {
        function _CalendarTooltipDirective(elementRef, injector, renderer, componentFactoryResolver, viewContainerRef, document // eslint-disable-line
        ) {
          _classCallCheck(this, _CalendarTooltipDirective);

          this.elementRef = elementRef;
          this.injector = injector;
          this.renderer = renderer;
          this.viewContainerRef = viewContainerRef;
          this.document = document;
          this.placement = 'auto'; // eslint-disable-line  @angular-eslint/no-input-rename

          this.delay = null; // eslint-disable-line  @angular-eslint/no-input-rename

          this.cancelTooltipDelay$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
          this.tooltipFactory = componentFactoryResolver.resolveComponentFactory(_CalendarTooltipWindowComponent);
        }

        _createClass(_CalendarTooltipDirective, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (this.tooltipRef && (changes.contents || changes.customTemplate || changes.event)) {
              this.tooltipRef.instance.contents = this.contents;
              this.tooltipRef.instance.customTemplate = this.customTemplate;
              this.tooltipRef.instance.event = this.event;
              this.tooltipRef.changeDetectorRef.markForCheck();

              if (!this.contents) {
                this.hide();
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.hide();
          }
        }, {
          key: "onMouseOver",
          value: function onMouseOver() {
            var _this2 = this;

            var delay$ = this.delay === null ? (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.of)('now') : (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.timer)(this.delay);
            delay$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.cancelTooltipDelay$)).subscribe(function () {
              _this2.show();
            });
          }
        }, {
          key: "onMouseOut",
          value: function onMouseOut() {
            this.hide();
          }
        }, {
          key: "show",
          value: function show() {
            var _this3 = this;

            if (!this.tooltipRef && this.contents) {
              this.tooltipRef = this.viewContainerRef.createComponent(this.tooltipFactory, 0, this.injector, []);
              this.tooltipRef.instance.contents = this.contents;
              this.tooltipRef.instance.customTemplate = this.customTemplate;
              this.tooltipRef.instance.event = this.event;

              if (this.appendToBody) {
                this.document.body.appendChild(this.tooltipRef.location.nativeElement);
              }

              requestAnimationFrame(function () {
                _this3.positionTooltip();
              });
            }
          }
        }, {
          key: "hide",
          value: function hide() {
            if (this.tooltipRef) {
              this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.tooltipRef.hostView));
              this.tooltipRef = null;
            }

            this.cancelTooltipDelay$.next();
          }
        }, {
          key: "positionTooltip",
          value: function positionTooltip() {
            var previousPositions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            if (this.tooltipRef) {
              this.tooltipRef.changeDetectorRef.detectChanges();
              this.tooltipRef.instance.placement = (0, positioning__WEBPACK_IMPORTED_MODULE_0__.positionElements)(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement.children[0], this.placement, this.appendToBody); // keep re-positioning the tooltip until the arrow position doesn't make a difference

              if (previousPositions.indexOf(this.tooltipRef.instance.placement) === -1) {
                this.positionTooltip([].concat(_toConsumableArray(previousPositions), [this.tooltipRef.instance.placement]));
              }
            }
          }
        }]);

        return _CalendarTooltipDirective;
      }();

      _CalendarTooltipDirective.ɵfac = function CalendarTooltipDirective_Factory(t) {
        return new (t || _CalendarTooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT));
      };

      _CalendarTooltipDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _CalendarTooltipDirective,
        selectors: [["", "mwlCalendarTooltip", ""]],
        hostBindings: function CalendarTooltipDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function CalendarTooltipDirective_mouseenter_HostBindingHandler() {
              return ctx.onMouseOver();
            })("mouseleave", function CalendarTooltipDirective_mouseleave_HostBindingHandler() {
              return ctx.onMouseOut();
            });
          }
        },
        inputs: {
          contents: ["mwlCalendarTooltip", "contents"],
          placement: ["tooltipPlacement", "placement"],
          customTemplate: ["tooltipTemplate", "customTemplate"],
          event: ["tooltipEvent", "event"],
          appendToBody: ["tooltipAppendToBody", "appendToBody"],
          delay: ["tooltipDelay", "delay"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      /***/
    },

    /***/
    27579: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarUtils": function CalendarUtils() {
          return (
            /* binding */
            _CalendarUtils
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var calendar_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! calendar-utils */
      90489);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../date-adapters/date-adapter */
      90008);

      var _CalendarUtils = /*#__PURE__*/function () {
        function _CalendarUtils(dateAdapter) {
          _classCallCheck(this, _CalendarUtils);

          this.dateAdapter = dateAdapter;
        }

        _createClass(_CalendarUtils, [{
          key: "getMonthView",
          value: function getMonthView(args) {
            return (0, calendar_utils__WEBPACK_IMPORTED_MODULE_0__.getMonthView)(this.dateAdapter, args);
          }
        }, {
          key: "getWeekViewHeader",
          value: function getWeekViewHeader(args) {
            return (0, calendar_utils__WEBPACK_IMPORTED_MODULE_0__.getWeekViewHeader)(this.dateAdapter, args);
          }
        }, {
          key: "getWeekView",
          value: function getWeekView(args) {
            return (0, calendar_utils__WEBPACK_IMPORTED_MODULE_0__.getWeekView)(this.dateAdapter, args);
          }
        }]);

        return _CalendarUtils;
      }();

      _CalendarUtils.ɵfac = function CalendarUtils_Factory(t) {
        return new (t || _CalendarUtils)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_2__.DateAdapter));
      };

      _CalendarUtils.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _CalendarUtils,
        factory: _CalendarUtils.ɵfac
      });
      /***/
    },

    /***/
    4606: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarView": function CalendarView() {
          return (
            /* binding */
            _CalendarView
          );
        }
        /* harmony export */

      });

      var _CalendarView;

      (function (CalendarView) {
        CalendarView["Month"] = "month";
        CalendarView["Week"] = "week";
        CalendarView["Day"] = "day";
      })(_CalendarView || (_CalendarView = {}));
      /***/

    },

    /***/
    81567: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClickDirective": function ClickDirective() {
          return (
            /* binding */
            _ClickDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      50931);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      54926);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      44094);

      var _ClickDirective = /*#__PURE__*/function () {
        function _ClickDirective(renderer, elm, document) {
          _classCallCheck(this, _ClickDirective);

          this.renderer = renderer;
          this.elm = elm;
          this.document = document;
          this.clickListenerDisabled = false;
          this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); // eslint-disable-line

          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        }

        _createClass(_ClickDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            if (!this.clickListenerDisabled) {
              this.listen().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(function (event) {
                event.stopPropagation();

                _this4.click.emit(event);
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
          }
        }, {
          key: "listen",
          value: function listen() {
            var _this5 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable(function (observer) {
              return _this5.renderer.listen(_this5.elm.nativeElement, 'click', function (event) {
                observer.next(event);
              });
            });
          }
        }]);

        return _ClickDirective;
      }();

      _ClickDirective.ɵfac = function ClickDirective_Factory(t) {
        return new (t || _ClickDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT));
      };

      _ClickDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _ClickDirective,
        selectors: [["", "mwlClick", ""]],
        inputs: {
          clickListenerDisabled: "clickListenerDisabled"
        },
        outputs: {
          click: "mwlClick"
        }
      });
      /***/
    },

    /***/
    93759: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KeydownEnterDirective": function KeydownEnterDirective() {
          return (
            /* binding */
            _KeydownEnterDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _KeydownEnterDirective = /*#__PURE__*/function () {
        function _KeydownEnterDirective(host, ngZone, renderer) {
          _classCallCheck(this, _KeydownEnterDirective);

          this.host = host;
          this.ngZone = ngZone;
          this.renderer = renderer;
          this.keydown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); // eslint-disable-line

          this.keydownListener = null;
        }

        _createClass(_KeydownEnterDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.ngZone.runOutsideAngular(function () {
              _this6.keydownListener = _this6.renderer.listen(_this6.host.nativeElement, 'keydown', function (event) {
                if (event.keyCode === 13 || event.which === 13 || event.key === 'Enter') {
                  event.preventDefault();
                  event.stopPropagation();

                  _this6.ngZone.run(function () {
                    _this6.keydown.emit(event);
                  });
                }
              });
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.keydownListener !== null) {
              this.keydownListener();
              this.keydownListener = null;
            }
          }
        }]);

        return _KeydownEnterDirective;
      }();

      _KeydownEnterDirective.ɵfac = function KeydownEnterDirective_Factory(t) {
        return new (t || _KeydownEnterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
      };

      _KeydownEnterDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _KeydownEnterDirective,
        selectors: [["", "mwlKeydownEnter", ""]],
        outputs: {
          keydown: "mwlKeydownEnter"
        }
      });
      /***/
    },

    /***/
    33878: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "validateEvents": function validateEvents() {
          return (
            /* binding */
            _validateEvents
          );
        },

        /* harmony export */
        "isInsideLeftAndRight": function isInsideLeftAndRight() {
          return (
            /* binding */
            _isInsideLeftAndRight
          );
        },

        /* harmony export */
        "isInside": function isInside() {
          return (
            /* binding */
            _isInside
          );
        },

        /* harmony export */
        "roundToNearest": function roundToNearest() {
          return (
            /* binding */
            _roundToNearest
          );
        },

        /* harmony export */
        "trackByEventId": function trackByEventId() {
          return (
            /* binding */
            _trackByEventId
          );
        },

        /* harmony export */
        "trackByWeekDayHeaderDate": function trackByWeekDayHeaderDate() {
          return (
            /* binding */
            _trackByWeekDayHeaderDate
          );
        },

        /* harmony export */
        "trackByHourSegment": function trackByHourSegment() {
          return (
            /* binding */
            _trackByHourSegment
          );
        },

        /* harmony export */
        "trackByHour": function trackByHour() {
          return (
            /* binding */
            _trackByHour
          );
        },

        /* harmony export */
        "trackByWeekAllDayEvent": function trackByWeekAllDayEvent() {
          return (
            /* binding */
            _trackByWeekAllDayEvent
          );
        },

        /* harmony export */
        "trackByWeekTimeEvent": function trackByWeekTimeEvent() {
          return (
            /* binding */
            _trackByWeekTimeEvent
          );
        },

        /* harmony export */
        "getMinutesMoved": function getMinutesMoved() {
          return (
            /* binding */
            _getMinutesMoved
          );
        },

        /* harmony export */
        "getDefaultEventEnd": function getDefaultEventEnd() {
          return (
            /* binding */
            _getDefaultEventEnd
          );
        },

        /* harmony export */
        "addDaysWithExclusions": function addDaysWithExclusions() {
          return (
            /* binding */
            _addDaysWithExclusions
          );
        },

        /* harmony export */
        "isDraggedWithinPeriod": function isDraggedWithinPeriod() {
          return (
            /* binding */
            _isDraggedWithinPeriod
          );
        },

        /* harmony export */
        "shouldFireDroppedEvent": function shouldFireDroppedEvent() {
          return (
            /* binding */
            _shouldFireDroppedEvent
          );
        },

        /* harmony export */
        "getWeekViewPeriod": function getWeekViewPeriod() {
          return (
            /* binding */
            _getWeekViewPeriod
          );
        },

        /* harmony export */
        "isWithinThreshold": function isWithinThreshold() {
          return (
            /* binding */
            _isWithinThreshold
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var calendar_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! calendar-utils */
      90489);

      var _validateEvents = function _validateEvents(events) {
        var warn = function warn() {
          var _console;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return (_console = console).warn.apply(_console, ['angular-calendar'].concat(args));
        };

        return (0, calendar_utils__WEBPACK_IMPORTED_MODULE_0__.validateEvents)(events, warn);
      };

      function _isInsideLeftAndRight(outer, inner) {
        return Math.floor(outer.left) <= Math.ceil(inner.left) && Math.floor(inner.left) <= Math.ceil(outer.right) && Math.floor(outer.left) <= Math.ceil(inner.right) && Math.floor(inner.right) <= Math.ceil(outer.right);
      }

      function isInsideTopAndBottom(outer, inner) {
        return Math.floor(outer.top) <= Math.ceil(inner.top) && Math.floor(inner.top) <= Math.ceil(outer.bottom) && Math.floor(outer.top) <= Math.ceil(inner.bottom) && Math.floor(inner.bottom) <= Math.ceil(outer.bottom);
      }

      function _isInside(outer, inner) {
        return _isInsideLeftAndRight(outer, inner) && isInsideTopAndBottom(outer, inner);
      }

      function _roundToNearest(amount, precision) {
        return Math.round(amount / precision) * precision;
      }

      var _trackByEventId = function _trackByEventId(index, event) {
        return event.id ? event.id : event;
      };

      var _trackByWeekDayHeaderDate = function _trackByWeekDayHeaderDate(index, day) {
        return day.date.toISOString();
      };

      var _trackByHourSegment = function _trackByHourSegment(index, segment) {
        return segment.date.toISOString();
      };

      var _trackByHour = function _trackByHour(index, hour) {
        return hour.segments[0].date.toISOString();
      };

      var _trackByWeekAllDayEvent = function _trackByWeekAllDayEvent(index, weekEvent) {
        return weekEvent.event.id ? weekEvent.event.id : weekEvent.event;
      };

      var _trackByWeekTimeEvent = function _trackByWeekTimeEvent(index, weekEvent) {
        return weekEvent.event.id ? weekEvent.event.id : weekEvent.event;
      };

      var MINUTES_IN_HOUR = 60;

      function getPixelAmountInMinutes(hourSegments, hourSegmentHeight, hourDuration) {
        return (hourDuration || MINUTES_IN_HOUR) / (hourSegments * hourSegmentHeight);
      }

      function _getMinutesMoved(movedY, hourSegments, hourSegmentHeight, eventSnapSize, hourDuration) {
        var draggedInPixelsSnapSize = _roundToNearest(movedY, eventSnapSize || hourSegmentHeight);

        var pixelAmountInMinutes = getPixelAmountInMinutes(hourSegments, hourSegmentHeight, hourDuration);
        return draggedInPixelsSnapSize * pixelAmountInMinutes;
      }

      function _getDefaultEventEnd(dateAdapter, event, minimumMinutes) {
        if (event.end) {
          return event.end;
        } else {
          return dateAdapter.addMinutes(event.start, minimumMinutes);
        }
      }

      function _addDaysWithExclusions(dateAdapter, date, days, excluded) {
        var daysCounter = 0;
        var daysToAdd = 0;
        var changeDays = days < 0 ? dateAdapter.subDays : dateAdapter.addDays;
        var result = date;

        while (daysToAdd <= Math.abs(days)) {
          result = changeDays(date, daysCounter);
          var day = dateAdapter.getDay(result);

          if (excluded.indexOf(day) === -1) {
            daysToAdd++;
          }

          daysCounter++;
        }

        return result;
      }

      function _isDraggedWithinPeriod(newStart, newEnd, period) {
        var end = newEnd || newStart;
        return period.start <= newStart && newStart <= period.end || period.start <= end && end <= period.end;
      }

      function _shouldFireDroppedEvent(dropEvent, date, allDay, calendarId) {
        return dropEvent.dropData && dropEvent.dropData.event && (dropEvent.dropData.calendarId !== calendarId || dropEvent.dropData.event.allDay && !allDay || !dropEvent.dropData.event.allDay && allDay);
      }

      function _getWeekViewPeriod(dateAdapter, viewDate, weekStartsOn) {
        var excluded = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
        var daysInWeek = arguments.length > 4 ? arguments[4] : undefined;
        var viewStart = daysInWeek ? dateAdapter.startOfDay(viewDate) : dateAdapter.startOfWeek(viewDate, {
          weekStartsOn: weekStartsOn
        });
        var endOfWeek = dateAdapter.endOfWeek(viewDate, {
          weekStartsOn: weekStartsOn
        });

        while (excluded.indexOf(dateAdapter.getDay(viewStart)) > -1 && viewStart < endOfWeek) {
          viewStart = dateAdapter.addDays(viewStart, 1);
        }

        if (daysInWeek) {
          var viewEnd = dateAdapter.endOfDay(_addDaysWithExclusions(dateAdapter, viewStart, daysInWeek - 1, excluded));
          return {
            viewStart: viewStart,
            viewEnd: viewEnd
          };
        } else {
          var _viewEnd = endOfWeek;

          while (excluded.indexOf(dateAdapter.getDay(_viewEnd)) > -1 && _viewEnd > viewStart) {
            _viewEnd = dateAdapter.subDays(_viewEnd, 1);
          }

          return {
            viewStart: viewStart,
            viewEnd: _viewEnd
          };
        }
      }

      function _isWithinThreshold(_ref39) {
        var x = _ref39.x,
            y = _ref39.y;
        var DRAG_THRESHOLD = 1;
        return Math.abs(x) > DRAG_THRESHOLD || Math.abs(y) > DRAG_THRESHOLD;
      }
      /***/

    },

    /***/
    50811: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarDayViewComponent": function CalendarDayViewComponent() {
          return (
            /* binding */
            _CalendarDayViewComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../week/calendar-week-view.component */
      1913);
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


      var _CalendarDayViewComponent = function _CalendarDayViewComponent() {
        _classCallCheck(this, _CalendarDayViewComponent);

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
      };

      _CalendarDayViewComponent.ɵfac = function CalendarDayViewComponent_Factory(t) {
        return new (t || _CalendarDayViewComponent)();
      };

      _CalendarDayViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CalendarDayViewComponent,
        selectors: [["mwl-calendar-day-view"]],
        inputs: {
          viewDate: "viewDate",
          events: "events",
          hourSegments: "hourSegments",
          hourSegmentHeight: "hourSegmentHeight",
          hourDuration: "hourDuration",
          minimumEventHeight: "minimumEventHeight",
          dayStartHour: "dayStartHour",
          dayStartMinute: "dayStartMinute",
          dayEndHour: "dayEndHour",
          dayEndMinute: "dayEndMinute",
          refresh: "refresh",
          locale: "locale",
          eventSnapSize: "eventSnapSize",
          tooltipPlacement: "tooltipPlacement",
          tooltipTemplate: "tooltipTemplate",
          tooltipAppendToBody: "tooltipAppendToBody",
          tooltipDelay: "tooltipDelay",
          hourSegmentTemplate: "hourSegmentTemplate",
          eventTemplate: "eventTemplate",
          eventTitleTemplate: "eventTitleTemplate",
          eventActionsTemplate: "eventActionsTemplate",
          snapDraggedEvents: "snapDraggedEvents",
          allDayEventsLabelTemplate: "allDayEventsLabelTemplate",
          currentTimeMarkerTemplate: "currentTimeMarkerTemplate",
          validateEventTimesChanged: "validateEventTimesChanged"
        },
        outputs: {
          eventClicked: "eventClicked",
          hourSegmentClicked: "hourSegmentClicked",
          eventTimesChanged: "eventTimesChanged",
          beforeViewRender: "beforeViewRender"
        },
        decls: 3,
        vars: 26,
        consts: [[1, "cal-day-view", 3, "daysInWeek", "viewDate", "events", "hourSegments", "hourDuration", "hourSegmentHeight", "minimumEventHeight", "dayStartHour", "dayStartMinute", "dayEndHour", "dayEndMinute", "refresh", "locale", "eventSnapSize", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "hourSegmentTemplate", "eventTemplate", "eventTitleTemplate", "eventActionsTemplate", "snapDraggedEvents", "allDayEventsLabelTemplate", "currentTimeMarkerTemplate", "validateEventTimesChanged", "eventClicked", "hourSegmentClicked", "eventTimesChanged", "beforeViewRender"]],
        template: function CalendarDayViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mwl-calendar-week-view", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventClicked", function CalendarDayViewComponent_Template_mwl_calendar_week_view_eventClicked_1_listener($event) {
              return ctx.eventClicked.emit($event);
            })("hourSegmentClicked", function CalendarDayViewComponent_Template_mwl_calendar_week_view_hourSegmentClicked_1_listener($event) {
              return ctx.hourSegmentClicked.emit($event);
            })("eventTimesChanged", function CalendarDayViewComponent_Template_mwl_calendar_week_view_eventTimesChanged_1_listener($event) {
              return ctx.eventTimesChanged.emit($event);
            })("beforeViewRender", function CalendarDayViewComponent_Template_mwl_calendar_week_view_beforeViewRender_1_listener($event) {
              return ctx.beforeViewRender.emit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n  ");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("daysInWeek", 1)("viewDate", ctx.viewDate)("events", ctx.events)("hourSegments", ctx.hourSegments)("hourDuration", ctx.hourDuration)("hourSegmentHeight", ctx.hourSegmentHeight)("minimumEventHeight", ctx.minimumEventHeight)("dayStartHour", ctx.dayStartHour)("dayStartMinute", ctx.dayStartMinute)("dayEndHour", ctx.dayEndHour)("dayEndMinute", ctx.dayEndMinute)("refresh", ctx.refresh)("locale", ctx.locale)("eventSnapSize", ctx.eventSnapSize)("tooltipPlacement", ctx.tooltipPlacement)("tooltipTemplate", ctx.tooltipTemplate)("tooltipAppendToBody", ctx.tooltipAppendToBody)("tooltipDelay", ctx.tooltipDelay)("hourSegmentTemplate", ctx.hourSegmentTemplate)("eventTemplate", ctx.eventTemplate)("eventTitleTemplate", ctx.eventTitleTemplate)("eventActionsTemplate", ctx.eventActionsTemplate)("snapDraggedEvents", ctx.snapDraggedEvents)("allDayEventsLabelTemplate", ctx.allDayEventsLabelTemplate)("currentTimeMarkerTemplate", ctx.currentTimeMarkerTemplate)("validateEventTimesChanged", ctx.validateEventTimesChanged);
          }
        },
        directives: [_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_1__.CalendarWeekViewComponent],
        encapsulation: 2
      });
      /***/
    },

    /***/
    88533: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarDayViewComponent": function CalendarDayViewComponent() {
          return (
            /* reexport safe */
            _calendar_day_view_component__WEBPACK_IMPORTED_MODULE_0__.CalendarDayViewComponent
          );
        },

        /* harmony export */
        "CalendarDayModule": function CalendarDayModule() {
          return (
            /* binding */
            _CalendarDayModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _calendar_day_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./calendar-day-view.component */
      50811);
      /* harmony import */


      var _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/calendar-common.module */
      67400);
      /* harmony import */


      var _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../week/calendar-week.module */
      47175);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _CalendarDayModule = function _CalendarDayModule() {
        _classCallCheck(this, _CalendarDayModule);
      };

      _CalendarDayModule.ɵfac = function CalendarDayModule_Factory(t) {
        return new (t || _CalendarDayModule)();
      };

      _CalendarDayModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _CalendarDayModule
      });
      _CalendarDayModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_3__.CalendarCommonModule, _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_4__.CalendarWeekModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_CalendarDayModule, {
          declarations: [_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_0__.CalendarDayViewComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_3__.CalendarCommonModule, _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_4__.CalendarWeekModule],
          exports: [_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_0__.CalendarDayViewComponent]
        });
      })();
      /***/

    },

    /***/
    68161: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarMonthCellComponent": function CalendarMonthCellComponent() {
          return (
            /* binding */
            _CalendarMonthCellComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../common/util */
      33878);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular-draggable-droppable */
      42915);
      /* harmony import */


      var _common_calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/calendar-tooltip.directive */
      69416);
      /* harmony import */


      var _common_click_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/click.directive */
      81567);
      /* harmony import */


      var _common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common/calendar-a11y.pipe */
      62479);
      /* harmony import */


      var _common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/calendar-date.pipe */
      12153);
      /* harmony import */


      var _common_calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common/calendar-event-title.pipe */
      44602);

      function CalendarMonthCellComponent_ng_template_1_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().day;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](day_r3.badgeTotal);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          backgroundColor: a0
        };
      };

      var _c1 = function _c1(a0, a1) {
        return {
          event: a0,
          draggedFrom: a1
        };
      };

      var _c2 = function _c2(a0, a1) {
        return {
          x: a0,
          y: a1
        };
      };

      var _c3 = function _c3() {
        return {
          delay: 300,
          delta: 30
        };
      };

      var _c4 = function _c4() {
        return {};
      };

      function CalendarMonthCellComponent_ng_template_1_div_14_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function CalendarMonthCellComponent_ng_template_1_div_14_div_2_Template_div_mouseenter_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var event_r19 = restoredCtx.$implicit;

            var highlightDay_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).highlightDay;

            return highlightDay_r7.emit({
              event: event_r19
            });
          })("mouseleave", function CalendarMonthCellComponent_ng_template_1_div_14_div_2_Template_div_mouseleave_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var event_r19 = restoredCtx.$implicit;

            var unhighlightDay_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).unhighlightDay;

            return unhighlightDay_r8.emit({
              event: event_r19
            });
          })("mwlClick", function CalendarMonthCellComponent_ng_template_1_div_14_div_2_Template_div_mwlClick_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var event_r19 = restoredCtx.$implicit;

            var eventClicked_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).eventClicked;

            return eventClicked_r9.emit({
              event: event_r19,
              sourceEvent: $event
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "calendarEventTitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "calendarA11y");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var event_r19 = ctx.$implicit;

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var tooltipPlacement_r6 = ctx_r27.tooltipPlacement;
          var tooltipTemplate_r10 = ctx_r27.tooltipTemplate;
          var tooltipAppendToBody_r11 = ctx_r27.tooltipAppendToBody;
          var tooltipDelay_r12 = ctx_r27.tooltipDelay;
          var day_r3 = ctx_r27.day;
          var validateDrag_r14 = ctx_r27.validateDrag;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cal-draggable", event_r19.draggable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, event_r19.color == null ? null : event_r19.color.primary))("ngClass", event_r19 == null ? null : event_r19.cssClass)("mwlCalendarTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](1, 15, event_r19.title, "monthTooltip", event_r19))("tooltipPlacement", tooltipPlacement_r6)("tooltipEvent", event_r19)("tooltipTemplate", tooltipTemplate_r10)("tooltipAppendToBody", tooltipAppendToBody_r11)("tooltipDelay", tooltipDelay_r12)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](24, _c1, event_r19, day_r3))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](27, _c2, event_r19.draggable, event_r19.draggable))("validateDrag", validateDrag_r14)("touchStartLongPress", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c4), "hideMonthCellEvents"));
        }
      }

      function CalendarMonthCellComponent_ng_template_1_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CalendarMonthCellComponent_ng_template_1_div_14_div_2_Template, 3, 32, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var day_r3 = ctx_r28.day;
          var trackByEventId_r13 = ctx_r28.trackByEventId;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", day_r3.events)("ngForTrackBy", trackByEventId_r13);
        }
      }

      var _c5 = function _c5(a0, a1) {
        return {
          day: a0,
          locale: a1
        };
      };

      function CalendarMonthCellComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var day_r3 = ctx.day;
          var locale_r5 = ctx.locale;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c5, day_r3, locale_r5), "monthCell"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", day_r3.badgeTotal > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](10, 7, day_r3.date, "monthViewDayNumber", locale_r5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", day_r3.events.length > 0);
        }
      }

      function CalendarMonthCellComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
        }
      }

      var _c6 = function _c6(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
        return {
          day: a0,
          openDay: a1,
          locale: a2,
          tooltipPlacement: a3,
          highlightDay: a4,
          unhighlightDay: a5,
          eventClicked: a6,
          tooltipTemplate: a7,
          tooltipAppendToBody: a8,
          tooltipDelay: a9,
          trackByEventId: a10,
          validateDrag: a11
        };
      };

      var _CalendarMonthCellComponent = function _CalendarMonthCellComponent() {
        _classCallCheck(this, _CalendarMonthCellComponent);

        this.highlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.unhighlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.trackByEventId = _common_util__WEBPACK_IMPORTED_MODULE_1__.trackByEventId;
        this.validateDrag = _common_util__WEBPACK_IMPORTED_MODULE_1__.isWithinThreshold;
      };

      _CalendarMonthCellComponent.ɵfac = function CalendarMonthCellComponent_Factory(t) {
        return new (t || _CalendarMonthCellComponent)();
      };

      _CalendarMonthCellComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CalendarMonthCellComponent,
        selectors: [["mwl-calendar-month-cell"]],
        hostAttrs: [1, "cal-cell", "cal-day-cell"],
        hostVars: 18,
        hostBindings: function CalendarMonthCellComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cal-past", ctx.day.isPast)("cal-today", ctx.day.isToday)("cal-future", ctx.day.isFuture)("cal-weekend", ctx.day.isWeekend)("cal-in-month", ctx.day.inMonth)("cal-out-month", !ctx.day.inMonth)("cal-has-events", ctx.day.events.length > 0)("cal-open", ctx.day === ctx.openDay)("cal-event-highlight", !!ctx.day.backgroundColor);
          }
        },
        inputs: {
          day: "day",
          openDay: "openDay",
          locale: "locale",
          tooltipPlacement: "tooltipPlacement",
          tooltipAppendToBody: "tooltipAppendToBody",
          customTemplate: "customTemplate",
          tooltipTemplate: "tooltipTemplate",
          tooltipDelay: "tooltipDelay"
        },
        outputs: {
          highlightDay: "highlightDay",
          unhighlightDay: "unhighlightDay",
          eventClicked: "eventClicked"
        },
        decls: 6,
        vars: 15,
        consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-cell-top"], ["aria-hidden", "true"], ["class", "cal-day-badge", 4, "ngIf"], [1, "cal-day-number"], ["class", "cal-events", 4, "ngIf"], [1, "cal-day-badge"], [1, "cal-events"], ["class", "cal-event", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngStyle", "ngClass", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "cal-draggable", "dropData", "dragAxis", "validateDrag", "touchStartLongPress", "mouseenter", "mouseleave", "mwlClick", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event", 3, "ngStyle", "ngClass", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "dropData", "dragAxis", "validateDrag", "touchStartLongPress", "mouseenter", "mouseleave", "mwlClick"]],
        template: function CalendarMonthCellComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarMonthCellComponent_ng_template_1_Template, 16, 14, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarMonthCellComponent_ng_template_4_Template, 1, 0, "ng-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunctionV"](2, _c6, [ctx.day, ctx.openDay, ctx.locale, ctx.tooltipPlacement, ctx.highlightDay, ctx.unhighlightDay, ctx.eventClicked, ctx.tooltipTemplate, ctx.tooltipAppendToBody, ctx.tooltipDelay, ctx.trackByEventId, ctx.validateDrag]));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_3__.DraggableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _common_calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__.CalendarTooltipDirective, _common_click_directive__WEBPACK_IMPORTED_MODULE_5__.ClickDirective],
        pipes: [_common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_6__.CalendarA11yPipe, _common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_7__.CalendarDatePipe, _common_calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_8__.CalendarEventTitlePipe],
        encapsulation: 2
      });
      /***/
    },

    /***/
    38818: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarMonthViewHeaderComponent": function CalendarMonthViewHeaderComponent() {
          return (
            /* binding */
            _CalendarMonthViewHeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../common/util */
      33878);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/calendar-date.pipe */
      12153);

      function CalendarMonthViewHeaderComponent_ng_template_1_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarMonthViewHeaderComponent_ng_template_1_div_3_Template_div_click_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var day_r7 = restoredCtx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r8.columnHeaderClicked.emit({
              isoDayNumber: day_r7.day,
              sourceEvent: $event
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "calendarDate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r7 = ctx.$implicit;

          var locale_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().locale;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cal-past", day_r7.isPast)("cal-today", day_r7.isToday)("cal-future", day_r7.isFuture)("cal-weekend", day_r7.isWeekend);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", day_r7.cssClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n          ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 10, day_r7.date, "monthViewColumnHeader", locale_r4), "\n        ");
        }
      }

      function CalendarMonthViewHeaderComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CalendarMonthViewHeaderComponent_ng_template_1_div_3_Template, 3, 14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    ");
        }

        if (rf & 2) {
          var days_r3 = ctx.days;
          var trackByWeekDayHeaderDate_r5 = ctx.trackByWeekDayHeaderDate;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", days_r3)("ngForTrackBy", trackByWeekDayHeaderDate_r5);
        }
      }

      function CalendarMonthViewHeaderComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
        }
      }

      var _c0 = function _c0(a0, a1, a2) {
        return {
          days: a0,
          locale: a1,
          trackByWeekDayHeaderDate: a2
        };
      };

      var _CalendarMonthViewHeaderComponent = function _CalendarMonthViewHeaderComponent() {
        _classCallCheck(this, _CalendarMonthViewHeaderComponent);

        this.columnHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.trackByWeekDayHeaderDate = _common_util__WEBPACK_IMPORTED_MODULE_1__.trackByWeekDayHeaderDate;
      };

      _CalendarMonthViewHeaderComponent.ɵfac = function CalendarMonthViewHeaderComponent_Factory(t) {
        return new (t || _CalendarMonthViewHeaderComponent)();
      };

      _CalendarMonthViewHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CalendarMonthViewHeaderComponent,
        selectors: [["mwl-calendar-month-view-header"]],
        inputs: {
          days: "days",
          locale: "locale",
          customTemplate: "customTemplate"
        },
        outputs: {
          columnHeaderClicked: "columnHeaderClicked"
        },
        decls: 6,
        vars: 6,
        consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "row", 1, "cal-cell-row", "cal-header"], ["class", "cal-cell", "tabindex", "0", "role", "columnheader", 3, "cal-past", "cal-today", "cal-future", "cal-weekend", "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "0", "role", "columnheader", 1, "cal-cell", 3, "ngClass", "click"]],
        template: function CalendarMonthViewHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarMonthViewHeaderComponent_ng_template_1_Template, 6, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarMonthViewHeaderComponent_ng_template_4_Template, 1, 0, "ng-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, ctx.days, ctx.locale, ctx.trackByWeekDayHeaderDate));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass],
        pipes: [_common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_3__.CalendarDatePipe],
        encapsulation: 2
      });
      /***/
    },

    /***/
    21426: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarMonthViewComponent": function CalendarMonthViewComponent() {
          return (
            /* binding */
            _CalendarMonthViewComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../common/calendar-event-times-changed-event.interface */
      91203);
      /* harmony import */


      var _common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../common/util */
      33878);
      /* harmony import */


      var _common_calendar_utils_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/calendar-utils.provider */
      27579);
      /* harmony import */


      var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../date-adapters/date-adapter */
      90008);
      /* harmony import */


      var _calendar_month_view_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./calendar-month-view-header.component */
      38818);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _calendar_open_day_events_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./calendar-open-day-events.component */
      33473);
      /* harmony import */


      var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! angular-draggable-droppable */
      42915);
      /* harmony import */


      var _calendar_month_cell_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./calendar-month-cell.component */
      68161);
      /* harmony import */


      var _common_click_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../common/click.directive */
      81567);
      /* harmony import */


      var _common_keydown_enter_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../common/keydown-enter.directive */
      93759);
      /* harmony import */


      var _common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../common/calendar-a11y.pipe */
      62479);

      var _c0 = function _c0(a0) {
        return {
          backgroundColor: a0
        };
      };

      var _c1 = function _c1() {
        return {};
      };

      function CalendarMonthViewComponent_div_8_mwl_calendar_month_cell_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-month-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mwlClick", function CalendarMonthViewComponent_div_8_mwl_calendar_month_cell_4_Template_mwl_calendar_month_cell_mwlClick_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var day_r3 = restoredCtx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r4.dayClicked.emit({
              day: day_r3,
              sourceEvent: $event
            });
          })("mwlKeydownEnter", function CalendarMonthViewComponent_div_8_mwl_calendar_month_cell_4_Template_mwl_calendar_month_cell_mwlKeydownEnter_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var day_r3 = restoredCtx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r6.dayClicked.emit({
              day: day_r3,
              sourceEvent: $event
            });
          })("highlightDay", function CalendarMonthViewComponent_div_8_mwl_calendar_month_cell_4_Template_mwl_calendar_month_cell_highlightDay_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r7.toggleDayHighlight($event.event, true);
          })("unhighlightDay", function CalendarMonthViewComponent_div_8_mwl_calendar_month_cell_4_Template_mwl_calendar_month_cell_unhighlightDay_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r8.toggleDayHighlight($event.event, false);
          })("drop", function CalendarMonthViewComponent_div_8_mwl_calendar_month_cell_4_Template_mwl_calendar_month_cell_drop_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var day_r3 = restoredCtx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r9.eventDropped(day_r3, $event.dropData.event, $event.dropData.draggedFrom);
          })("eventClicked", function CalendarMonthViewComponent_div_8_mwl_calendar_month_cell_4_Template_mwl_calendar_month_cell_eventClicked_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r10.eventClicked.emit({
              event: $event.event,
              sourceEvent: $event.sourceEvent
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "calendarA11y");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r3 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", day_r3 == null ? null : day_r3.cssClass)("day", day_r3)("openDay", ctx_r2.openDay)("locale", ctx_r2.locale)("tooltipPlacement", ctx_r2.tooltipPlacement)("tooltipAppendToBody", ctx_r2.tooltipAppendToBody)("tooltipTemplate", ctx_r2.tooltipTemplate)("tooltipDelay", ctx_r2.tooltipDelay)("customTemplate", ctx_r2.cellTemplate)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, day_r3.backgroundColor))("clickListenerDisabled", ctx_r2.dayClicked.observers.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1), "monthCellTabIndex"));
        }
      }

      function CalendarMonthViewComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventClicked", function CalendarMonthViewComponent_div_8_Template_mwl_calendar_open_day_events_eventClicked_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.eventClicked.emit({
              event: $event.event,
              sourceEvent: $event.sourceEvent
            });
          })("drop", function CalendarMonthViewComponent_div_8_Template_mwl_calendar_open_day_events_drop_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.eventDropped(ctx_r13.openDay, $event.dropData.event, $event.dropData.draggedFrom);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var rowIndex_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 9, ctx_r0.view.days, rowIndex_r1, rowIndex_r1 + ctx_r0.view.totalDaysVisibleInWeek))("ngForTrackBy", ctx_r0.trackByDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("locale", ctx_r0.locale)("isOpen", ctx_r0.openRowIndex === rowIndex_r1)("events", ctx_r0.openDay == null ? null : ctx_r0.openDay.events)("date", ctx_r0.openDay == null ? null : ctx_r0.openDay.date)("customTemplate", ctx_r0.openDayEventsTemplate)("eventTitleTemplate", ctx_r0.eventTitleTemplate)("eventActionsTemplate", ctx_r0.eventActionsTemplate);
        }
      }
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


      var _CalendarMonthViewComponent = /*#__PURE__*/function () {
        /**
         * @hidden
         */
        function _CalendarMonthViewComponent(cdr, utils, locale, dateAdapter) {
          var _this7 = this;

          _classCallCheck(this, _CalendarMonthViewComponent);

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

          this.trackByRowOffset = function (index, offset) {
            return _this7.view.days.slice(offset, _this7.view.totalDaysVisibleInWeek).map(function (day) {
              return day.date.toISOString();
            }).join('-');
          };
          /**
           * @hidden
           */


          this.trackByDate = function (index, day) {
            return day.date.toISOString();
          };

          this.locale = locale;
        }
        /**
         * @hidden
         */


        _createClass(_CalendarMonthViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            if (this.refresh) {
              this.refreshSubscription = this.refresh.subscribe(function () {
                _this8.refreshAll();

                _this8.cdr.markForCheck();
              });
            }
          }
          /**
           * @hidden
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var refreshHeader = changes.viewDate || changes.excludeDays || changes.weekendDays;
            var refreshBody = changes.viewDate || changes.events || changes.excludeDays || changes.weekendDays;

            if (refreshHeader) {
              this.refreshHeader();
            }

            if (changes.events) {
              (0, _common_util__WEBPACK_IMPORTED_MODULE_1__.validateEvents)(this.events);
            }

            if (refreshBody) {
              this.refreshBody();
            }

            if (refreshHeader || refreshBody) {
              this.emitBeforeViewRender();
            }

            if (changes.activeDayIsOpen || changes.viewDate || changes.events || changes.excludeDays || changes.activeDay) {
              this.checkActiveDayIsOpen();
            }
          }
          /**
           * @hidden
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.refreshSubscription) {
              this.refreshSubscription.unsubscribe();
            }
          }
          /**
           * @hidden
           */

        }, {
          key: "toggleDayHighlight",
          value: function toggleDayHighlight(event, isHighlighted) {
            this.view.days.forEach(function (day) {
              if (isHighlighted && day.events.indexOf(event) > -1) {
                day.backgroundColor = event.color && event.color.secondary || '#D1E8FF';
              } else {
                delete day.backgroundColor;
              }
            });
          }
          /**
           * @hidden
           */

        }, {
          key: "eventDropped",
          value: function eventDropped(droppedOn, event, draggedFrom) {
            if (droppedOn !== draggedFrom) {
              var year = this.dateAdapter.getYear(droppedOn.date);
              var month = this.dateAdapter.getMonth(droppedOn.date);
              var date = this.dateAdapter.getDate(droppedOn.date);
              var newStart = this.dateAdapter.setDate(this.dateAdapter.setMonth(this.dateAdapter.setYear(event.start, year), month), date);
              var newEnd;

              if (event.end) {
                var secondsDiff = this.dateAdapter.differenceInSeconds(newStart, event.start);
                newEnd = this.dateAdapter.addSeconds(event.end, secondsDiff);
              }

              this.eventTimesChanged.emit({
                event: event,
                newStart: newStart,
                newEnd: newEnd,
                day: droppedOn,
                type: _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_2__.CalendarEventTimesChangedEventType.Drop
              });
            }
          }
        }, {
          key: "refreshHeader",
          value: function refreshHeader() {
            this.columnHeaders = this.utils.getWeekViewHeader({
              viewDate: this.viewDate,
              weekStartsOn: this.weekStartsOn,
              excluded: this.excludeDays,
              weekendDays: this.weekendDays
            });
          }
        }, {
          key: "refreshBody",
          value: function refreshBody() {
            this.view = this.utils.getMonthView({
              events: this.events,
              viewDate: this.viewDate,
              weekStartsOn: this.weekStartsOn,
              excluded: this.excludeDays,
              weekendDays: this.weekendDays
            });
          }
        }, {
          key: "checkActiveDayIsOpen",
          value: function checkActiveDayIsOpen() {
            var _this9 = this;

            if (this.activeDayIsOpen === true) {
              var activeDay = this.activeDay || this.viewDate;
              this.openDay = this.view.days.find(function (day) {
                return _this9.dateAdapter.isSameDay(day.date, activeDay);
              });
              var index = this.view.days.indexOf(this.openDay);
              this.openRowIndex = Math.floor(index / this.view.totalDaysVisibleInWeek) * this.view.totalDaysVisibleInWeek;
            } else {
              this.openRowIndex = null;
              this.openDay = null;
            }
          }
        }, {
          key: "refreshAll",
          value: function refreshAll() {
            this.refreshHeader();
            this.refreshBody();
            this.emitBeforeViewRender();
            this.checkActiveDayIsOpen();
          }
        }, {
          key: "emitBeforeViewRender",
          value: function emitBeforeViewRender() {
            if (this.columnHeaders && this.view) {
              this.beforeViewRender.emit({
                header: this.columnHeaders,
                body: this.view.days,
                period: this.view.period
              });
            }
          }
        }]);

        return _CalendarMonthViewComponent;
      }();

      _CalendarMonthViewComponent.ɵfac = function CalendarMonthViewComponent_Factory(t) {
        return new (t || _CalendarMonthViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_calendar_utils_provider__WEBPACK_IMPORTED_MODULE_3__.CalendarUtils), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_4__.DateAdapter));
      };

      _CalendarMonthViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CalendarMonthViewComponent,
        selectors: [["mwl-calendar-month-view"]],
        inputs: {
          viewDate: "viewDate",
          events: "events",
          excludeDays: "excludeDays",
          activeDayIsOpen: "activeDayIsOpen",
          activeDay: "activeDay",
          refresh: "refresh",
          locale: "locale",
          tooltipPlacement: "tooltipPlacement",
          tooltipTemplate: "tooltipTemplate",
          tooltipAppendToBody: "tooltipAppendToBody",
          tooltipDelay: "tooltipDelay",
          weekStartsOn: "weekStartsOn",
          headerTemplate: "headerTemplate",
          cellTemplate: "cellTemplate",
          openDayEventsTemplate: "openDayEventsTemplate",
          eventTitleTemplate: "eventTitleTemplate",
          eventActionsTemplate: "eventActionsTemplate",
          weekendDays: "weekendDays"
        },
        outputs: {
          beforeViewRender: "beforeViewRender",
          dayClicked: "dayClicked",
          eventClicked: "eventClicked",
          columnHeaderClicked: "columnHeaderClicked",
          eventTimesChanged: "eventTimesChanged"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 12,
        vars: 5,
        consts: [["role", "grid", 1, "cal-month-view"], [3, "days", "locale", "customTemplate", "columnHeaderClicked"], [1, "cal-days"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row", 1, "cal-cell-row"], ["role", "gridcell", "mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "ngClass", "day", "openDay", "locale", "tooltipPlacement", "tooltipAppendToBody", "tooltipTemplate", "tooltipDelay", "customTemplate", "ngStyle", "clickListenerDisabled", "mwlClick", "mwlKeydownEnter", "highlightDay", "unhighlightDay", "drop", "eventClicked", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "locale", "isOpen", "events", "date", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "eventClicked", "drop"], ["role", "gridcell", "mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "ngClass", "day", "openDay", "locale", "tooltipPlacement", "tooltipAppendToBody", "tooltipTemplate", "tooltipDelay", "customTemplate", "ngStyle", "clickListenerDisabled", "mwlClick", "mwlKeydownEnter", "highlightDay", "unhighlightDay", "drop", "eventClicked"]],
        template: function CalendarMonthViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mwl-calendar-month-view-header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("columnHeaderClicked", function CalendarMonthViewComponent_Template_mwl_calendar_month_view_header_columnHeaderClicked_3_listener($event) {
              return ctx.columnHeaderClicked.emit($event);
            });

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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("days", ctx.columnHeaders)("locale", ctx.locale)("customTemplate", ctx.headerTemplate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.view.rowOffsets)("ngForTrackBy", ctx.trackByRowOffset);
          }
        },
        directives: [_calendar_month_view_header_component__WEBPACK_IMPORTED_MODULE_5__.CalendarMonthViewHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _calendar_open_day_events_component__WEBPACK_IMPORTED_MODULE_7__.CalendarOpenDayEventsComponent, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_8__.DroppableDirective, _calendar_month_cell_component__WEBPACK_IMPORTED_MODULE_9__.CalendarMonthCellComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, _common_click_directive__WEBPACK_IMPORTED_MODULE_10__.ClickDirective, _common_keydown_enter_directive__WEBPACK_IMPORTED_MODULE_11__.KeydownEnterDirective],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.SlicePipe, _common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_12__.CalendarA11yPipe],
        encapsulation: 2
      });
      /***/
    },

    /***/
    5465: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarMonthViewComponent": function CalendarMonthViewComponent() {
          return (
            /* reexport safe */
            _calendar_month_view_component__WEBPACK_IMPORTED_MODULE_0__.CalendarMonthViewComponent
          );
        },

        /* harmony export */
        "collapseAnimation": function collapseAnimation() {
          return (
            /* reexport safe */
            _calendar_open_day_events_component__WEBPACK_IMPORTED_MODULE_1__.collapseAnimation
          );
        },

        /* harmony export */
        "ɵCalendarMonthCellComponent": function ɵCalendarMonthCellComponent() {
          return (
            /* reexport safe */
            _calendar_month_cell_component__WEBPACK_IMPORTED_MODULE_2__.CalendarMonthCellComponent
          );
        },

        /* harmony export */
        "ɵCalendarMonthViewHeaderComponent": function ɵCalendarMonthViewHeaderComponent() {
          return (
            /* reexport safe */
            _calendar_month_view_header_component__WEBPACK_IMPORTED_MODULE_3__.CalendarMonthViewHeaderComponent
          );
        },

        /* harmony export */
        "ɵCalendarOpenDayEventsComponent": function ɵCalendarOpenDayEventsComponent() {
          return (
            /* reexport safe */
            _calendar_open_day_events_component__WEBPACK_IMPORTED_MODULE_1__.CalendarOpenDayEventsComponent
          );
        },

        /* harmony export */
        "CalendarMonthModule": function CalendarMonthModule() {
          return (
            /* binding */
            _CalendarMonthModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular-draggable-droppable */
      42915);
      /* harmony import */


      var _calendar_month_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./calendar-month-view.component */
      21426);
      /* harmony import */


      var _calendar_month_view_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./calendar-month-view-header.component */
      38818);
      /* harmony import */


      var _calendar_month_cell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./calendar-month-cell.component */
      68161);
      /* harmony import */


      var _calendar_open_day_events_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./calendar-open-day-events.component */
      33473);
      /* harmony import */


      var _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/calendar-common.module */
      67400);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316); // needed for ivy, not part of the public api


      var _CalendarMonthModule = function _CalendarMonthModule() {
        _classCallCheck(this, _CalendarMonthModule);
      };

      _CalendarMonthModule.ɵfac = function CalendarMonthModule_Factory(t) {
        return new (t || _CalendarMonthModule)();
      };

      _CalendarMonthModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _CalendarMonthModule
      });
      _CalendarMonthModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__.DragAndDropModule, _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_7__.CalendarCommonModule], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__.DragAndDropModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_CalendarMonthModule, {
          declarations: [_calendar_month_view_component__WEBPACK_IMPORTED_MODULE_0__.CalendarMonthViewComponent, _calendar_month_cell_component__WEBPACK_IMPORTED_MODULE_2__.CalendarMonthCellComponent, _calendar_open_day_events_component__WEBPACK_IMPORTED_MODULE_1__.CalendarOpenDayEventsComponent, _calendar_month_view_header_component__WEBPACK_IMPORTED_MODULE_3__.CalendarMonthViewHeaderComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__.DragAndDropModule, _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_7__.CalendarCommonModule],
          exports: [angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__.DragAndDropModule, _calendar_month_view_component__WEBPACK_IMPORTED_MODULE_0__.CalendarMonthViewComponent, _calendar_month_cell_component__WEBPACK_IMPORTED_MODULE_2__.CalendarMonthCellComponent, _calendar_open_day_events_component__WEBPACK_IMPORTED_MODULE_1__.CalendarOpenDayEventsComponent, _calendar_month_view_header_component__WEBPACK_IMPORTED_MODULE_3__.CalendarMonthViewHeaderComponent]
        });
      })();
      /***/

    },

    /***/
    33473: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "collapseAnimation": function collapseAnimation() {
          return (
            /* binding */
            _collapseAnimation
          );
        },

        /* harmony export */
        "CalendarOpenDayEventsComponent": function CalendarOpenDayEventsComponent() {
          return (
            /* binding */
            _CalendarOpenDayEventsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/animations */
      97175);
      /* harmony import */


      var _common_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../common/util */
      33878);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular-draggable-droppable */
      42915);
      /* harmony import */


      var _common_calendar_event_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/calendar-event-title.component */
      58974);
      /* harmony import */


      var _common_click_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common/click.directive */
      81567);
      /* harmony import */


      var _common_keydown_enter_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/keydown-enter.directive */
      93759);
      /* harmony import */


      var _common_calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common/calendar-event-actions.component */
      32136);
      /* harmony import */


      var _common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../common/calendar-a11y.pipe */
      62479);

      var _c0 = function _c0(a0) {
        return {
          event: a0
        };
      };

      var _c1 = function _c1(a0, a1) {
        return {
          x: a0,
          y: a1
        };
      };

      var _c2 = function _c2() {
        return {
          delay: 300,
          delta: 30
        };
      };

      var _c3 = function _c3(a0) {
        return {
          backgroundColor: a0
        };
      };

      var _c4 = function _c4(a0, a1) {
        return {
          event: a0,
          locale: a1
        };
      };

      function CalendarOpenDayEventsComponent_ng_template_1_div_1_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n           \n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mwl-calendar-event-title", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mwlClick", function CalendarOpenDayEventsComponent_ng_template_1_div_1_div_8_Template_mwl_calendar_event_title_mwlClick_5_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var event_r10 = restoredCtx.$implicit;

            var eventClicked_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).eventClicked;

            return eventClicked_r4.emit({
              event: event_r10,
              sourceEvent: $event
            });
          })("mwlKeydownEnter", function CalendarOpenDayEventsComponent_ng_template_1_div_1_div_8_Template_mwl_calendar_event_title_mwlKeydownEnter_5_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var event_r10 = restoredCtx.$implicit;

            var eventClicked_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).eventClicked;

            return eventClicked_r4.emit({
              event: event_r10,
              sourceEvent: $event
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "calendarA11y");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n           \n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mwl-calendar-event-actions", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var event_r10 = ctx.$implicit;

          var validateDrag_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).validateDrag;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cal-draggable", event_r10.draggable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", event_r10 == null ? null : event_r10.cssClass)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, event_r10))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c1, event_r10.draggable, event_r10.draggable))("validateDrag", validateDrag_r7)("touchStartLongPress", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c3, event_r10.color == null ? null : event_r10.color.primary));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", event_r10)("customTemplate", ctx_r9.eventTitleTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](24, _c4, event_r10, ctx_r9.locale), "eventDescription"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", event_r10)("customTemplate", ctx_r9.eventActionsTemplate);
        }
      }

      var _c5 = function _c5(a0, a1) {
        return {
          date: a0,
          locale: a1
        };
      };

      function CalendarOpenDayEventsComponent_ng_template_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var events_r3 = ctx_r17.events;
          var trackByEventId_r6 = ctx_r17.trackByEventId;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@collapse", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c5, ctx_r8.date, ctx_r8.locale), "openDayEventsAlert"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c5, ctx_r8.date, ctx_r8.locale), "openDayEventsLandmark"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", events_r3)("ngForTrackBy", trackByEventId_r6);
        }
      }

      function CalendarOpenDayEventsComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarOpenDayEventsComponent_ng_template_1_div_1_Template, 10, 17, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n    ");
        }

        if (rf & 2) {
          var isOpen_r5 = ctx.isOpen;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isOpen_r5);
        }
      }

      function CalendarOpenDayEventsComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
        }
      }

      var _c6 = function _c6(a0, a1, a2, a3, a4) {
        return {
          events: a0,
          eventClicked: a1,
          isOpen: a2,
          trackByEventId: a3,
          validateDrag: a4
        };
      };

      var _collapseAnimation = (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('collapse', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('void', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
        height: 0,
        overflow: 'hidden',
        'padding-top': 0,
        'padding-bottom': 0
      })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('*', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
        height: '*',
        overflow: 'hidden',
        'padding-top': '*',
        'padding-bottom': '*'
      })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => void', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('150ms ease-out')), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => *', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('150ms ease-in'))]);

      var _CalendarOpenDayEventsComponent = function _CalendarOpenDayEventsComponent() {
        _classCallCheck(this, _CalendarOpenDayEventsComponent);

        this.isOpen = false;
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.trackByEventId = _common_util__WEBPACK_IMPORTED_MODULE_2__.trackByEventId;
        this.validateDrag = _common_util__WEBPACK_IMPORTED_MODULE_2__.isWithinThreshold;
      };

      _CalendarOpenDayEventsComponent.ɵfac = function CalendarOpenDayEventsComponent_Factory(t) {
        return new (t || _CalendarOpenDayEventsComponent)();
      };

      _CalendarOpenDayEventsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CalendarOpenDayEventsComponent,
        selectors: [["mwl-calendar-open-day-events"]],
        inputs: {
          locale: "locale",
          isOpen: "isOpen",
          events: "events",
          customTemplate: "customTemplate",
          eventTitleTemplate: "eventTitleTemplate",
          eventActionsTemplate: "eventActionsTemplate",
          date: "date"
        },
        outputs: {
          eventClicked: "eventClicked"
        },
        decls: 6,
        vars: 8,
        consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-open-day-events", "role", "application", 4, "ngIf"], ["role", "application", 1, "cal-open-day-events"], ["tabindex", "-1", "role", "alert"], ["tabindex", "0", "role", "landmark"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngClass", "cal-draggable", "dropData", "dragAxis", "validateDrag", "touchStartLongPress", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngClass", "dropData", "dragAxis", "validateDrag", "touchStartLongPress"], [1, "cal-event", 3, "ngStyle"], ["view", "month", "tabindex", "0", 3, "event", "customTemplate", "mwlClick", "mwlKeydownEnter"], [3, "event", "customTemplate"]],
        template: function CalendarOpenDayEventsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarOpenDayEventsComponent_ng_template_1_Template, 3, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarOpenDayEventsComponent_ng_template_4_Template, 1, 0, "ng-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](2, _c6, ctx.events, ctx.eventClicked, ctx.isOpen, ctx.trackByEventId, ctx.validateDrag));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_4__.DraggableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _common_calendar_event_title_component__WEBPACK_IMPORTED_MODULE_5__.CalendarEventTitleComponent, _common_click_directive__WEBPACK_IMPORTED_MODULE_6__.ClickDirective, _common_keydown_enter_directive__WEBPACK_IMPORTED_MODULE_7__.KeydownEnterDirective, _common_calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_8__.CalendarEventActionsComponent],
        pipes: [_common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_9__.CalendarA11yPipe],
        encapsulation: 2,
        data: {
          animation: [_collapseAnimation]
        }
      });
      /***/
    },

    /***/
    6556: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarWeekViewCurrentTimeMarkerComponent": function CalendarWeekViewCurrentTimeMarkerComponent() {
          return (
            /* binding */
            _CalendarWeekViewCurrentTimeMarkerComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      69606);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      48657);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      98578);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      57993);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      23669);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      49005);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../date-adapters/date-adapter */
      90008);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
        }

        if (rf & 2) {
          var topPx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().topPx;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", topPx_r9, "px");
        }
      }

      function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_1_div_1_Template, 1, 2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n    ");
        }

        if (rf & 2) {
          var isVisible_r8 = ctx.isVisible;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isVisible_r8);
        }
      }

      function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
        }
      }

      var _c0 = function _c0(a0, a1, a2, a3, a4, a5, a6) {
        return {
          columnDate: a0,
          dayStartHour: a1,
          dayStartMinute: a2,
          dayEndHour: a3,
          dayEndMinute: a4,
          isVisible: a5,
          topPx: a6
        };
      };

      var _CalendarWeekViewCurrentTimeMarkerComponent = /*#__PURE__*/function () {
        function _CalendarWeekViewCurrentTimeMarkerComponent(dateAdapter, zone) {
          var _this10 = this;

          _classCallCheck(this, _CalendarWeekViewCurrentTimeMarkerComponent);

          this.dateAdapter = dateAdapter;
          this.zone = zone;
          this.columnDate$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
          this.marker$ = this.zone.onStable.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(function () {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.interval)(60 * 1000);
          }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(0), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMapTo)(this.columnDate$), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(function (columnDate) {
            var startOfDay = _this10.dateAdapter.setMinutes(_this10.dateAdapter.setHours(columnDate, _this10.dayStartHour), _this10.dayStartMinute);

            var endOfDay = _this10.dateAdapter.setMinutes(_this10.dateAdapter.setHours(columnDate, _this10.dayEndHour), _this10.dayEndMinute);

            var hourHeightModifier = _this10.hourSegments * _this10.hourSegmentHeight / (_this10.hourDuration || 60);
            var now = new Date();
            return {
              isVisible: _this10.dateAdapter.isSameDay(columnDate, now) && now >= startOfDay && now <= endOfDay,
              top: _this10.dateAdapter.differenceInMinutes(now, startOfDay) * hourHeightModifier
            };
          }));
        }

        _createClass(_CalendarWeekViewCurrentTimeMarkerComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.columnDate) {
              this.columnDate$.next(changes.columnDate.currentValue);
            }
          }
        }]);

        return _CalendarWeekViewCurrentTimeMarkerComponent;
      }();

      _CalendarWeekViewCurrentTimeMarkerComponent.ɵfac = function CalendarWeekViewCurrentTimeMarkerComponent_Factory(t) {
        return new (t || _CalendarWeekViewCurrentTimeMarkerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_7__.DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
      };

      _CalendarWeekViewCurrentTimeMarkerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CalendarWeekViewCurrentTimeMarkerComponent,
        selectors: [["mwl-calendar-week-view-current-time-marker"]],
        inputs: {
          columnDate: "columnDate",
          dayStartHour: "dayStartHour",
          dayStartMinute: "dayStartMinute",
          dayEndHour: "dayEndHour",
          dayEndMinute: "dayEndMinute",
          hourSegments: "hourSegments",
          hourDuration: "hourDuration",
          hourSegmentHeight: "hourSegmentHeight",
          customTemplate: "customTemplate"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 8,
        vars: 14,
        consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-current-time-marker", 3, "top", 4, "ngIf"], [1, "cal-current-time-marker"]],
        template: function CalendarWeekViewCurrentTimeMarkerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_1_Template, 3, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_4_Template, 1, 0, "ng-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n  ");
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            var tmp_1_0;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction7"](6, _c0, ctx.columnDate, ctx.dayStartHour, ctx.dayStartMinute, ctx.dayEndHour, ctx.dayEndMinute, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx.marker$)) == null ? null : tmp_1_0.isVisible, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, ctx.marker$)) == null ? null : tmp_1_0.top));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
        encapsulation: 2
      });
      /***/
    },

    /***/
    61862: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarWeekViewEventComponent": function CalendarWeekViewEventComponent() {
          return (
            /* binding */
            _CalendarWeekViewEventComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _common_calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../common/calendar-tooltip.directive */
      69416);
      /* harmony import */


      var _common_click_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/click.directive */
      81567);
      /* harmony import */


      var _common_keydown_enter_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/keydown-enter.directive */
      93759);
      /* harmony import */


      var _common_calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/calendar-event-actions.component */
      32136);
      /* harmony import */


      var _common_calendar_event_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common/calendar-event-title.component */
      58974);
      /* harmony import */


      var _common_calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/calendar-event-title.pipe */
      44602);
      /* harmony import */


      var _common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common/calendar-a11y.pipe */
      62479);

      var _c0 = function _c0(a0, a1) {
        return {
          backgroundColor: a0,
          borderColor: a1
        };
      };

      var _c1 = function _c1(a0, a1) {
        return {
          event: a0,
          locale: a1
        };
      };

      function CalendarWeekViewEventComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mwlClick", function CalendarWeekViewEventComponent_ng_template_1_Template_div_mwlClick_1_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var eventClicked_r5 = restoredCtx.eventClicked;
            return eventClicked_r5.emit({
              sourceEvent: $event
            });
          })("mwlKeydownEnter", function CalendarWeekViewEventComponent_ng_template_1_Template_div_mwlKeydownEnter_1_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var eventClicked_r5 = restoredCtx.eventClicked;
            return eventClicked_r5.emit({
              sourceEvent: $event
            });
          });

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
        }

        if (rf & 2) {
          var weekEvent_r3 = ctx.weekEvent;
          var tooltipPlacement_r4 = ctx.tooltipPlacement;
          var tooltipTemplate_r6 = ctx.tooltipTemplate;
          var tooltipAppendToBody_r7 = ctx.tooltipAppendToBody;
          var tooltipDisabled_r8 = ctx.tooltipDisabled;
          var tooltipDelay_r9 = ctx.tooltipDelay;
          var daysInWeek_r11 = ctx.daysInWeek;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](20, _c0, weekEvent_r3.event.color == null ? null : weekEvent_r3.event.color.secondary, weekEvent_r3.event.color == null ? null : weekEvent_r3.event.color.primary))("mwlCalendarTooltip", !tooltipDisabled_r8 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 13, weekEvent_r3.event.title, daysInWeek_r11 === 1 ? "dayTooltip" : "weekTooltip", weekEvent_r3.tempEvent || weekEvent_r3.event) : "")("tooltipPlacement", tooltipPlacement_r4)("tooltipEvent", weekEvent_r3.tempEvent || weekEvent_r3.event)("tooltipTemplate", tooltipTemplate_r6)("tooltipAppendToBody", tooltipAppendToBody_r7)("tooltipDelay", tooltipDelay_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](23, _c1, weekEvent_r3.tempEvent || weekEvent_r3.event, ctx_r1.locale), "eventDescription"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", weekEvent_r3.tempEvent || weekEvent_r3.event)("customTemplate", ctx_r1.eventActionsTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", weekEvent_r3.tempEvent || weekEvent_r3.event)("customTemplate", ctx_r1.eventTitleTemplate)("view", daysInWeek_r11 === 1 ? "day" : "week");
        }
      }

      function CalendarWeekViewEventComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
        }
      }

      var _c2 = function _c2(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return {
          weekEvent: a0,
          tooltipPlacement: a1,
          eventClicked: a2,
          tooltipTemplate: a3,
          tooltipAppendToBody: a4,
          tooltipDisabled: a5,
          tooltipDelay: a6,
          column: a7,
          daysInWeek: a8
        };
      };

      var _CalendarWeekViewEventComponent = function _CalendarWeekViewEventComponent() {
        _classCallCheck(this, _CalendarWeekViewEventComponent);

        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      };

      _CalendarWeekViewEventComponent.ɵfac = function CalendarWeekViewEventComponent_Factory(t) {
        return new (t || _CalendarWeekViewEventComponent)();
      };

      _CalendarWeekViewEventComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CalendarWeekViewEventComponent,
        selectors: [["mwl-calendar-week-view-event"]],
        inputs: {
          locale: "locale",
          weekEvent: "weekEvent",
          tooltipPlacement: "tooltipPlacement",
          tooltipAppendToBody: "tooltipAppendToBody",
          tooltipDisabled: "tooltipDisabled",
          tooltipDelay: "tooltipDelay",
          customTemplate: "customTemplate",
          eventTitleTemplate: "eventTitleTemplate",
          eventActionsTemplate: "eventActionsTemplate",
          tooltipTemplate: "tooltipTemplate",
          column: "column",
          daysInWeek: "daysInWeek"
        },
        outputs: {
          eventClicked: "eventClicked"
        },
        decls: 6,
        vars: 12,
        consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "0", "role", "application", 1, "cal-event", 3, "ngStyle", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "mwlClick", "mwlKeydownEnter"], [3, "event", "customTemplate"], [3, "event", "customTemplate", "view"]],
        template: function CalendarWeekViewEventComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarWeekViewEventComponent_ng_template_1_Template, 12, 26, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarWeekViewEventComponent_ng_template_4_Template, 1, 0, "ng-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunctionV"](2, _c2, [ctx.weekEvent, ctx.tooltipPlacement, ctx.eventClicked, ctx.tooltipTemplate, ctx.tooltipAppendToBody, ctx.tooltipDisabled, ctx.tooltipDelay, ctx.column, ctx.daysInWeek]));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _common_calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__.CalendarTooltipDirective, _common_click_directive__WEBPACK_IMPORTED_MODULE_3__.ClickDirective, _common_keydown_enter_directive__WEBPACK_IMPORTED_MODULE_4__.KeydownEnterDirective, _common_calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_5__.CalendarEventActionsComponent, _common_calendar_event_title_component__WEBPACK_IMPORTED_MODULE_6__.CalendarEventTitleComponent],
        pipes: [_common_calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_7__.CalendarEventTitlePipe, _common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_8__.CalendarA11yPipe],
        encapsulation: 2
      });
      /***/
    },

    /***/
    55428: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarWeekViewHeaderComponent": function CalendarWeekViewHeaderComponent() {
          return (
            /* binding */
            _CalendarWeekViewHeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../common/util */
      33878);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular-draggable-droppable */
      42915);
      /* harmony import */


      var _common_click_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/click.directive */
      81567);
      /* harmony import */


      var _common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/calendar-date.pipe */
      12153);

      function CalendarWeekViewHeaderComponent_ng_template_1_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mwlClick", function CalendarWeekViewHeaderComponent_ng_template_1_div_3_Template_div_mwlClick_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var day_r10 = restoredCtx.$implicit;

            var dayHeaderClicked_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().dayHeaderClicked;

            return dayHeaderClicked_r5.emit({
              day: day_r10,
              sourceEvent: $event
            });
          })("drop", function CalendarWeekViewHeaderComponent_ng_template_1_div_3_Template_div_drop_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var day_r10 = restoredCtx.$implicit;

            var eventDropped_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().eventDropped;

            return eventDropped_r6.emit({
              event: $event.dropData.event,
              newStart: day_r10.date
            });
          })("dragEnter", function CalendarWeekViewHeaderComponent_ng_template_1_div_3_Template_div_dragEnter_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var day_r10 = restoredCtx.$implicit;

            var dragEnter_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().dragEnter;

            return dragEnter_r8.emit({
              date: day_r10.date
            });
          });

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
        }

        if (rf & 2) {
          var day_r10 = ctx.$implicit;

          var locale_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().locale;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cal-past", day_r10.isPast)("cal-today", day_r10.isToday)("cal-future", day_r10.isFuture)("cal-weekend", day_r10.isWeekend);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", day_r10.cssClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 11, day_r10.date, "weekViewColumnHeader", locale_r4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 15, day_r10.date, "weekViewColumnSubHeader", locale_r4));
        }
      }

      function CalendarWeekViewHeaderComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CalendarWeekViewHeaderComponent_ng_template_1_div_3_Template, 11, 19, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    ");
        }

        if (rf & 2) {
          var days_r3 = ctx.days;
          var trackByWeekDayHeaderDate_r7 = ctx.trackByWeekDayHeaderDate;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", days_r3)("ngForTrackBy", trackByWeekDayHeaderDate_r7);
        }
      }

      function CalendarWeekViewHeaderComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
        }
      }

      var _c0 = function _c0(a0, a1, a2, a3, a4, a5) {
        return {
          days: a0,
          locale: a1,
          dayHeaderClicked: a2,
          eventDropped: a3,
          dragEnter: a4,
          trackByWeekDayHeaderDate: a5
        };
      };

      var _CalendarWeekViewHeaderComponent = function _CalendarWeekViewHeaderComponent() {
        _classCallCheck(this, _CalendarWeekViewHeaderComponent);

        this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.eventDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.dragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.trackByWeekDayHeaderDate = _common_util__WEBPACK_IMPORTED_MODULE_1__.trackByWeekDayHeaderDate;
      };

      _CalendarWeekViewHeaderComponent.ɵfac = function CalendarWeekViewHeaderComponent_Factory(t) {
        return new (t || _CalendarWeekViewHeaderComponent)();
      };

      _CalendarWeekViewHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CalendarWeekViewHeaderComponent,
        selectors: [["mwl-calendar-week-view-header"]],
        inputs: {
          days: "days",
          locale: "locale",
          customTemplate: "customTemplate"
        },
        outputs: {
          dayHeaderClicked: "dayHeaderClicked",
          eventDropped: "eventDropped",
          dragEnter: "dragEnter"
        },
        decls: 6,
        vars: 9,
        consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "row", 1, "cal-day-headers"], ["class", "cal-header", "mwlDroppable", "", "dragOverClass", "cal-drag-over", "tabindex", "0", "role", "columnheader", 3, "cal-past", "cal-today", "cal-future", "cal-weekend", "ngClass", "mwlClick", "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", "tabindex", "0", "role", "columnheader", 1, "cal-header", 3, "ngClass", "mwlClick", "drop", "dragEnter"]],
        template: function CalendarWeekViewHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarWeekViewHeaderComponent_ng_template_1_Template, 6, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarWeekViewHeaderComponent_ng_template_4_Template, 1, 0, "ng-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](2, _c0, ctx.days, ctx.locale, ctx.dayHeaderClicked, ctx.eventDropped, ctx.dragEnter, ctx.trackByWeekDayHeaderDate));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_3__.DroppableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _common_click_directive__WEBPACK_IMPORTED_MODULE_4__.ClickDirective],
        pipes: [_common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_5__.CalendarDatePipe],
        encapsulation: 2
      });
      /***/
    },

    /***/
    20923: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarWeekViewHourSegmentComponent": function CalendarWeekViewHourSegmentComponent() {
          return (
            /* binding */
            _CalendarWeekViewHourSegmentComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../common/calendar-a11y.pipe */
      62479);
      /* harmony import */


      var _common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/calendar-date.pipe */
      12153);

      function CalendarWeekViewHourSegmentComponent_ng_template_1_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "calendarDate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var segment_r3 = ctx_r9.segment;
          var daysInWeek_r7 = ctx_r9.daysInWeek;
          var locale_r4 = ctx_r9.locale;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n          ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, segment_r3.displayDate, daysInWeek_r7 === 1 ? "dayViewHour" : "weekViewHour", locale_r4), "\n        ");
        }
      }

      var _c0 = function _c0() {
        return {};
      };

      function CalendarWeekViewHourSegmentComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "calendarA11y");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarWeekViewHourSegmentComponent_ng_template_1_div_4_Template, 3, 5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n    ");
        }

        if (rf & 2) {
          var segment_r3 = ctx.segment;
          var segmentHeight_r5 = ctx.segmentHeight;
          var isTimeLabel_r6 = ctx.isTimeLabel;
          var daysInWeek_r7 = ctx.daysInWeek;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", segmentHeight_r5, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cal-hour-start", segment_r3.isStart)("cal-after-hour-start", !segment_r3.isStart);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", segment_r3.cssClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0), daysInWeek_r7 === 1 ? "hideDayHourSegment" : "hideWeekHourSegment"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isTimeLabel_r6);
        }
      }

      function CalendarWeekViewHourSegmentComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");
        }
      }

      var _c1 = function _c1(a0, a1, a2, a3, a4) {
        return {
          segment: a0,
          locale: a1,
          segmentHeight: a2,
          isTimeLabel: a3,
          daysInWeek: a4
        };
      };

      var _CalendarWeekViewHourSegmentComponent = function _CalendarWeekViewHourSegmentComponent() {
        _classCallCheck(this, _CalendarWeekViewHourSegmentComponent);
      };

      _CalendarWeekViewHourSegmentComponent.ɵfac = function CalendarWeekViewHourSegmentComponent_Factory(t) {
        return new (t || _CalendarWeekViewHourSegmentComponent)();
      };

      _CalendarWeekViewHourSegmentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CalendarWeekViewHourSegmentComponent,
        selectors: [["mwl-calendar-week-view-hour-segment"]],
        inputs: {
          segment: "segment",
          segmentHeight: "segmentHeight",
          locale: "locale",
          isTimeLabel: "isTimeLabel",
          daysInWeek: "daysInWeek",
          customTemplate: "customTemplate"
        },
        decls: 6,
        vars: 8,
        consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-hour-segment", 3, "ngClass"], ["class", "cal-time", 4, "ngIf"], [1, "cal-time"]],
        template: function CalendarWeekViewHourSegmentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarWeekViewHourSegmentComponent_ng_template_1_Template, 7, 13, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarWeekViewHourSegmentComponent_ng_template_4_Template, 1, 0, "ng-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](2, _c1, ctx.segment, ctx.locale, ctx.segmentHeight, ctx.isTimeLabel, ctx.daysInWeek));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
        pipes: [_common_calendar_a11y_pipe__WEBPACK_IMPORTED_MODULE_2__.CalendarA11yPipe, _common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_3__.CalendarDatePipe],
        encapsulation: 2
      });
      /***/
    },

    /***/
    1913: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarWeekViewComponent": function CalendarWeekViewComponent() {
          return (
            /* binding */
            _CalendarWeekViewComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var calendar_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! calendar-utils */
      90489);
      /* harmony import */


      var _common_calendar_drag_helper_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/calendar-drag-helper.provider */
      45824);
      /* harmony import */


      var _common_calendar_resize_helper_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common/calendar-resize-helper.provider */
      70923);
      /* harmony import */


      var _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/calendar-event-times-changed-event.interface */
      91203);
      /* harmony import */


      var _common_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../common/util */
      33878);
      /* harmony import */


      var _common_calendar_utils_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/calendar-utils.provider */
      27579);
      /* harmony import */


      var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../date-adapters/date-adapter */
      90008);
      /* harmony import */


      var _calendar_week_view_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./calendar-week-view-header.component */
      55428);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! angular-draggable-droppable */
      42915);
      /* harmony import */


      var angular_resizable_element__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! angular-resizable-element */
      90093);
      /* harmony import */


      var _calendar_week_view_event_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./calendar-week-view-event.component */
      61862);
      /* harmony import */


      var _calendar_week_view_hour_segment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./calendar-week-view-hour-segment.component */
      20923);
      /* harmony import */


      var _calendar_week_view_current_time_marker_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./calendar-week-view-current-time-marker.component */
      6556);
      /* harmony import */


      var _common_click_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../common/click.directive */
      81567);

      function CalendarWeekViewComponent_div_6_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("drop", function CalendarWeekViewComponent_div_6_div_7_Template_div_drop_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var day_r7 = restoredCtx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r8.eventDropped($event, day_r7.date, true);
          })("dragEnter", function CalendarWeekViewComponent_div_6_div_7_Template_div_dragEnter_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var day_r7 = restoredCtx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r10.dateDragEnter(day_r7.date);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return {
          left: true
        };
      };

      function CalendarWeekViewComponent_div_6_div_10_div_3_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 22);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
        }
      }

      var _c1 = function _c1() {
        return {
          right: true
        };
      };

      function CalendarWeekViewComponent_div_6_div_10_div_3_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 23);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c1));
        }
      }

      var _c2 = function _c2(a0, a1) {
        return {
          left: a0,
          right: a1
        };
      };

      var _c3 = function _c3(a0, a1) {
        return {
          event: a0,
          calendarId: a1
        };
      };

      var _c4 = function _c4(a0, a1) {
        return {
          x: a0,
          y: a1
        };
      };

      var _c5 = function _c5(a0) {
        return {
          x: a0
        };
      };

      var _c6 = function _c6() {
        return {};
      };

      var _c7 = function _c7() {
        return {
          delay: 300,
          delta: 30
        };
      };

      function CalendarWeekViewComponent_div_6_div_10_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resizeStart", function CalendarWeekViewComponent_div_6_div_10_div_3_Template_div_resizeStart_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var allDayEvent_r14 = restoredCtx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r18.allDayEventResizeStarted(_r12, allDayEvent_r14, $event);
          })("resizing", function CalendarWeekViewComponent_div_6_div_10_div_3_Template_div_resizing_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var allDayEvent_r14 = restoredCtx.$implicit;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r20.allDayEventResizing(allDayEvent_r14, $event, ctx_r20.dayColumnWidth);
          })("resizeEnd", function CalendarWeekViewComponent_div_6_div_10_div_3_Template_div_resizeEnd_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var allDayEvent_r14 = restoredCtx.$implicit;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r21.allDayEventResizeEnded(allDayEvent_r14);
          })("dragStart", function CalendarWeekViewComponent_div_6_div_10_div_3_Template_div_dragStart_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var allDayEvent_r14 = restoredCtx.$implicit;

            var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r22.dragStarted(_r12, _r15, allDayEvent_r14, false);
          })("dragging", function CalendarWeekViewComponent_div_6_div_10_div_3_Template_div_dragging_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r23.allDayEventDragMove();
          })("dragEnd", function CalendarWeekViewComponent_div_6_div_10_div_3_Template_div_dragEnd_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var allDayEvent_r14 = restoredCtx.$implicit;

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r24.dragEnded(allDayEvent_r14, $event, ctx_r24.dayColumnWidth);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CalendarWeekViewComponent_div_6_div_10_div_3_div_3_Template, 1, 2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mwl-calendar-week-view-event", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("eventClicked", function CalendarWeekViewComponent_div_6_div_10_div_3_Template_mwl_calendar_week_view_event_eventClicked_5_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var allDayEvent_r14 = restoredCtx.$implicit;

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r25.eventClicked.emit({
              event: allDayEvent_r14.event,
              sourceEvent: $event.sourceEvent
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CalendarWeekViewComponent_div_6_div_10_div_3_div_8_Template, 1, 2, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var allDayEvent_r14 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", 100 / ctx_r13.days.length * allDayEvent_r14.span, "%")("margin-left", ctx_r13.rtl ? null : 100 / ctx_r13.days.length * allDayEvent_r14.offset, "%")("margin-right", ctx_r13.rtl ? 100 / ctx_r13.days.length * (ctx_r13.days.length - allDayEvent_r14.offset) * -1 : null, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-draggable", allDayEvent_r14.event.draggable && ctx_r13.allDayEventResizes.size === 0)("cal-starts-within-week", !allDayEvent_r14.startsBeforeWeek)("cal-ends-within-week", !allDayEvent_r14.endsAfterWeek);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", allDayEvent_r14.event == null ? null : allDayEvent_r14.event.cssClass)("resizeSnapGrid", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](32, _c2, ctx_r13.dayColumnWidth, ctx_r13.dayColumnWidth))("validateResize", ctx_r13.validateResize)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](35, _c3, allDayEvent_r14.event, ctx_r13.calendarId))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](38, _c4, allDayEvent_r14.event.draggable && ctx_r13.allDayEventResizes.size === 0, !ctx_r13.snapDraggedEvents && allDayEvent_r14.event.draggable && ctx_r13.allDayEventResizes.size === 0))("dragSnapGrid", ctx_r13.snapDraggedEvents ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](41, _c5, ctx_r13.dayColumnWidth) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](43, _c6))("validateDrag", ctx_r13.validateDrag)("touchStartLongPress", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](44, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (allDayEvent_r14.event == null ? null : allDayEvent_r14.event.resizable == null ? null : allDayEvent_r14.event.resizable.beforeStart) && !allDayEvent_r14.startsBeforeWeek);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("locale", ctx_r13.locale)("weekEvent", allDayEvent_r14)("tooltipPlacement", ctx_r13.tooltipPlacement)("tooltipTemplate", ctx_r13.tooltipTemplate)("tooltipAppendToBody", ctx_r13.tooltipAppendToBody)("tooltipDelay", ctx_r13.tooltipDelay)("customTemplate", ctx_r13.eventTemplate)("eventTitleTemplate", ctx_r13.eventTitleTemplate)("eventActionsTemplate", ctx_r13.eventActionsTemplate)("daysInWeek", ctx_r13.daysInWeek);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (allDayEvent_r14.event == null ? null : allDayEvent_r14.event.resizable == null ? null : allDayEvent_r14.event.resizable.afterEnd) && !allDayEvent_r14.endsAfterWeek);
        }
      }

      function CalendarWeekViewComponent_div_6_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CalendarWeekViewComponent_div_6_div_10_div_3_Template, 10, 45, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var eventRow_r11 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", eventRow_r11.row)("ngForTrackBy", ctx_r6.trackByWeekAllDayEvent);
        }
      }

      function CalendarWeekViewComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dragEnter", function CalendarWeekViewComponent_div_6_Template_div_dragEnter_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r26.dragEnter("allDay");
          })("dragLeave", function CalendarWeekViewComponent_div_6_Template_div_dragLeave_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r28.dragLeave("allDay");
          });

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
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.allDayEventsLabelTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.days)("ngForTrackBy", ctx_r0.trackByWeekDayHeaderDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.view.allDayEventRows)("ngForTrackBy", ctx_r0.trackById);
        }
      }

      function CalendarWeekViewComponent_div_10_div_2_mwl_calendar_week_view_hour_segment_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mwl-calendar-week-view-hour-segment", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var segment_r33 = ctx.$implicit;

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx_r32.hourSegmentHeight, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("segment", segment_r33)("segmentHeight", ctx_r32.hourSegmentHeight)("locale", ctx_r32.locale)("customTemplate", ctx_r32.hourSegmentTemplate)("isTimeLabel", true)("daysInWeek", ctx_r32.daysInWeek);
        }
      }

      function CalendarWeekViewComponent_div_10_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_10_div_2_mwl_calendar_week_view_hour_segment_2_Template, 2, 8, "mwl-calendar-week-view-hour-segment", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var hour_r30 = ctx.$implicit;
          var odd_r31 = ctx.odd;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-hour-odd", odd_r31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", hour_r30.segments)("ngForTrackBy", ctx_r29.trackByHourSegment);
        }
      }

      function CalendarWeekViewComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_10_div_2_Template, 4, 4, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.view.hourColumns[0].hours)("ngForTrackBy", ctx_r1.trackByHour);
        }
      }

      var _c8 = function _c8() {
        return {
          left: true,
          top: true
        };
      };

      function CalendarWeekViewComponent_div_15_div_6_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 22);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c8));
        }
      }

      function CalendarWeekViewComponent_div_15_div_6_ng_template_5_Template(rf, ctx) {}

      function CalendarWeekViewComponent_div_15_div_6_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n                  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mwl-calendar-week-view-event", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("eventClicked", function CalendarWeekViewComponent_div_15_div_6_ng_template_7_Template_mwl_calendar_week_view_event_eventClicked_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46);

            var timeEvent_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r44.eventClicked.emit({
              event: timeEvent_r37.event,
              sourceEvent: $event.sourceEvent
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n                  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n                ");
        }

        if (rf & 2) {
          var timeEvent_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var column_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("locale", ctx_r42.locale)("weekEvent", timeEvent_r37)("tooltipPlacement", ctx_r42.tooltipPlacement)("tooltipTemplate", ctx_r42.tooltipTemplate)("tooltipAppendToBody", ctx_r42.tooltipAppendToBody)("tooltipDisabled", ctx_r42.dragActive || ctx_r42.timeEventResizes.size > 0)("tooltipDelay", ctx_r42.tooltipDelay)("customTemplate", ctx_r42.eventTemplate)("eventTitleTemplate", ctx_r42.eventTitleTemplate)("eventActionsTemplate", ctx_r42.eventActionsTemplate)("column", column_r34)("daysInWeek", ctx_r42.daysInWeek);
        }
      }

      var _c9 = function _c9() {
        return {
          right: true,
          bottom: true
        };
      };

      function CalendarWeekViewComponent_div_15_div_6_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 23);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c9));
        }
      }

      var _c10 = function _c10(a0, a1, a2, a3) {
        return {
          left: a0,
          right: a1,
          top: a2,
          bottom: a3
        };
      };

      function CalendarWeekViewComponent_div_15_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resizeStart", function CalendarWeekViewComponent_div_15_div_6_Template_div_resizeStart_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50);

            var timeEvent_r37 = restoredCtx.$implicit;

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);

            return ctx_r49.timeEventResizeStarted(_r2, timeEvent_r37, $event);
          })("resizing", function CalendarWeekViewComponent_div_15_div_6_Template_div_resizing_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50);

            var timeEvent_r37 = restoredCtx.$implicit;

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r51.timeEventResizing(timeEvent_r37, $event);
          })("resizeEnd", function CalendarWeekViewComponent_div_15_div_6_Template_div_resizeEnd_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50);

            var timeEvent_r37 = restoredCtx.$implicit;

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r52.timeEventResizeEnded(timeEvent_r37);
          })("dragStart", function CalendarWeekViewComponent_div_15_div_6_Template_div_dragStart_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50);

            var timeEvent_r37 = restoredCtx.$implicit;

            var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);

            return ctx_r53.dragStarted(_r2, _r38, timeEvent_r37, true);
          })("dragging", function CalendarWeekViewComponent_div_15_div_6_Template_div_dragging_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50);

            var timeEvent_r37 = restoredCtx.$implicit;

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r54.dragMove(timeEvent_r37, $event);
          })("dragEnd", function CalendarWeekViewComponent_div_15_div_6_Template_div_dragEnd_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50);

            var timeEvent_r37 = restoredCtx.$implicit;

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r55.dragEnded(timeEvent_r37, $event, ctx_r55.dayColumnWidth, true);
          });

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
        }

        if (rf & 2) {
          var timeEvent_r37 = ctx.$implicit;

          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("top", timeEvent_r37.top, "px")("height", timeEvent_r37.height, "px")("left", timeEvent_r37.left, "%")("width", timeEvent_r37.width, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-draggable", timeEvent_r37.event.draggable && ctx_r35.timeEventResizes.size === 0)("cal-starts-within-day", !timeEvent_r37.startsBeforeDay)("cal-ends-within-day", !timeEvent_r37.endsAfterDay);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", timeEvent_r37.event.cssClass)("hidden", timeEvent_r37.height === 0 && timeEvent_r37.width === 0)("resizeSnapGrid", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](29, _c10, ctx_r35.dayColumnWidth, ctx_r35.dayColumnWidth, ctx_r35.eventSnapSize || ctx_r35.hourSegmentHeight, ctx_r35.eventSnapSize || ctx_r35.hourSegmentHeight))("validateResize", ctx_r35.validateResize)("allowNegativeResizes", true)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](34, _c3, timeEvent_r37.event, ctx_r35.calendarId))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](37, _c4, timeEvent_r37.event.draggable && ctx_r35.timeEventResizes.size === 0, timeEvent_r37.event.draggable && ctx_r35.timeEventResizes.size === 0))("dragSnapGrid", ctx_r35.snapDraggedEvents ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](40, _c4, ctx_r35.dayColumnWidth, ctx_r35.eventSnapSize || ctx_r35.hourSegmentHeight) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](43, _c6))("touchStartLongPress", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](44, _c7))("ghostDragEnabled", !ctx_r35.snapDraggedEvents)("ghostElementTemplate", _r41)("validateDrag", ctx_r35.validateDrag);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (timeEvent_r37.event == null ? null : timeEvent_r37.event.resizable == null ? null : timeEvent_r37.event.resizable.beforeStart) && !timeEvent_r37.startsBeforeDay);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (timeEvent_r37.event == null ? null : timeEvent_r37.event.resizable == null ? null : timeEvent_r37.event.resizable.afterEnd) && !timeEvent_r37.endsAfterDay);
        }
      }

      function CalendarWeekViewComponent_div_15_div_9_mwl_calendar_week_view_hour_segment_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mwl-calendar-week-view-hour-segment", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mwlClick", function CalendarWeekViewComponent_div_15_div_9_mwl_calendar_week_view_hour_segment_2_Template_mwl_calendar_week_view_hour_segment_mwlClick_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r61);

            var segment_r59 = restoredCtx.$implicit;

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r60.hourSegmentClicked.emit({
              date: segment_r59.date,
              sourceEvent: $event
            });
          })("drop", function CalendarWeekViewComponent_div_15_div_9_mwl_calendar_week_view_hour_segment_2_Template_mwl_calendar_week_view_hour_segment_drop_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r61);

            var segment_r59 = restoredCtx.$implicit;

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r62.eventDropped($event, segment_r59.date, false);
          })("dragEnter", function CalendarWeekViewComponent_div_15_div_9_mwl_calendar_week_view_hour_segment_2_Template_mwl_calendar_week_view_hour_segment_dragEnter_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r61);

            var segment_r59 = restoredCtx.$implicit;

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r63.dateDragEnter(segment_r59.date);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var segment_r59 = ctx.$implicit;

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx_r58.hourSegmentHeight, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("segment", segment_r59)("segmentHeight", ctx_r58.hourSegmentHeight)("locale", ctx_r58.locale)("customTemplate", ctx_r58.hourSegmentTemplate)("daysInWeek", ctx_r58.daysInWeek)("clickListenerDisabled", ctx_r58.hourSegmentClicked.observers.length === 0)("dragOverClass", !ctx_r58.dragActive || !ctx_r58.snapDraggedEvents ? "cal-drag-over" : null)("isTimeLabel", ctx_r58.daysInWeek === 1);
        }
      }

      function CalendarWeekViewComponent_div_15_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_15_div_9_mwl_calendar_week_view_hour_segment_2_Template, 2, 10, "mwl-calendar-week-view-hour-segment", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var hour_r56 = ctx.$implicit;
          var odd_r57 = ctx.odd;

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-hour-odd", odd_r57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", hour_r56.segments)("ngForTrackBy", ctx_r36.trackByHourSegment);
        }
      }

      function CalendarWeekViewComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var column_r34 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnDate", column_r34.date)("dayStartHour", ctx_r3.dayStartHour)("dayStartMinute", ctx_r3.dayStartMinute)("dayEndHour", ctx_r3.dayEndHour)("dayEndMinute", ctx_r3.dayEndMinute)("hourSegments", ctx_r3.hourSegments)("hourDuration", ctx_r3.hourDuration)("hourSegmentHeight", ctx_r3.hourSegmentHeight)("customTemplate", ctx_r3.currentTimeMarkerTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", column_r34.events)("ngForTrackBy", ctx_r3.trackByWeekTimeEvent);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", column_r34.hours)("ngForTrackBy", ctx_r3.trackByHour);
        }
      }
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


      var _CalendarWeekViewComponent = /*#__PURE__*/function () {
        /**
         * @hidden
         */
        function _CalendarWeekViewComponent(cdr, utils, locale, dateAdapter, element) {
          _classCallCheck(this, _CalendarWeekViewComponent);

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
            time: 0
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

          this.trackByHourColumn = function (index, column) {
            return column.hours[0] ? column.hours[0].segments[0].date.toISOString() : column;
          };
          /**
           * @hidden
           */


          this.trackById = function (index, row) {
            return row.id;
          };

          this.locale = locale;
        }
        /**
         * @hidden
         */


        _createClass(_CalendarWeekViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            if (this.refresh) {
              this.refreshSubscription = this.refresh.subscribe(function () {
                _this11.refreshAll();

                _this11.cdr.markForCheck();
              });
            }
          }
          /**
           * @hidden
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var refreshHeader = changes.viewDate || changes.excludeDays || changes.weekendDays || changes.daysInWeek || changes.weekStartsOn;
            var refreshBody = changes.viewDate || changes.dayStartHour || changes.dayStartMinute || changes.dayEndHour || changes.dayEndMinute || changes.hourSegments || changes.hourDuration || changes.weekStartsOn || changes.weekendDays || changes.excludeDays || changes.hourSegmentHeight || changes.events || changes.daysInWeek || changes.minimumEventHeight;

            if (refreshHeader) {
              this.refreshHeader();
            }

            if (changes.events) {
              (0, _common_util__WEBPACK_IMPORTED_MODULE_2__.validateEvents)(this.events);
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

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.refreshSubscription) {
              this.refreshSubscription.unsubscribe();
            }
          }
          /**
           * @hidden
           */

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.rtl = typeof window !== 'undefined' && getComputedStyle(this.element.nativeElement).direction === 'rtl';
            this.cdr.detectChanges();
          }
          /**
           * @hidden
           */

        }, {
          key: "timeEventResizeStarted",
          value: function timeEventResizeStarted(eventsContainer, timeEvent, resizeEvent) {
            this.timeEventResizes.set(timeEvent.event, resizeEvent);
            this.resizeStarted(eventsContainer, timeEvent);
          }
          /**
           * @hidden
           */

        }, {
          key: "timeEventResizing",
          value: function timeEventResizing(timeEvent, resizeEvent) {
            var _this12 = this;

            this.timeEventResizes.set(timeEvent.event, resizeEvent);
            var adjustedEvents = new Map();

            var tempEvents = _toConsumableArray(this.events);

            this.timeEventResizes.forEach(function (lastResizeEvent, event) {
              var newEventDates = _this12.getTimeEventResizedDates(event, lastResizeEvent);

              var adjustedEvent = Object.assign(Object.assign({}, event), newEventDates);
              adjustedEvents.set(adjustedEvent, event);
              var eventIndex = tempEvents.indexOf(event);
              tempEvents[eventIndex] = adjustedEvent;
            });
            this.restoreOriginalEvents(tempEvents, adjustedEvents, true);
          }
          /**
           * @hidden
           */

        }, {
          key: "timeEventResizeEnded",
          value: function timeEventResizeEnded(timeEvent) {
            this.view = this.getWeekView(this.events);
            var lastResizeEvent = this.timeEventResizes.get(timeEvent.event);

            if (lastResizeEvent) {
              this.timeEventResizes["delete"](timeEvent.event);
              var newEventDates = this.getTimeEventResizedDates(timeEvent.event, lastResizeEvent);
              this.eventTimesChanged.emit({
                newStart: newEventDates.start,
                newEnd: newEventDates.end,
                event: timeEvent.event,
                type: _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_3__.CalendarEventTimesChangedEventType.Resize
              });
            }
          }
          /**
           * @hidden
           */

        }, {
          key: "allDayEventResizeStarted",
          value: function allDayEventResizeStarted(allDayEventsContainer, allDayEvent, resizeEvent) {
            this.allDayEventResizes.set(allDayEvent, {
              originalOffset: allDayEvent.offset,
              originalSpan: allDayEvent.span,
              edge: typeof resizeEvent.edges.left !== 'undefined' ? 'left' : 'right'
            });
            this.resizeStarted(allDayEventsContainer, allDayEvent, this.getDayColumnWidth(allDayEventsContainer));
          }
          /**
           * @hidden
           */

        }, {
          key: "allDayEventResizing",
          value: function allDayEventResizing(allDayEvent, resizeEvent, dayWidth) {
            var currentResize = this.allDayEventResizes.get(allDayEvent);
            var modifier = this.rtl ? -1 : 1;

            if (typeof resizeEvent.edges.left !== 'undefined') {
              var diff = Math.round(+resizeEvent.edges.left / dayWidth) * modifier;
              allDayEvent.offset = currentResize.originalOffset + diff;
              allDayEvent.span = currentResize.originalSpan - diff;
            } else if (typeof resizeEvent.edges.right !== 'undefined') {
              var _diff = Math.round(+resizeEvent.edges.right / dayWidth) * modifier;

              allDayEvent.span = currentResize.originalSpan + _diff;
            }
          }
          /**
           * @hidden
           */

        }, {
          key: "allDayEventResizeEnded",
          value: function allDayEventResizeEnded(allDayEvent) {
            var currentResize = this.allDayEventResizes.get(allDayEvent);

            if (currentResize) {
              var allDayEventResizingBeforeStart = currentResize.edge === 'left';
              var daysDiff;

              if (allDayEventResizingBeforeStart) {
                daysDiff = allDayEvent.offset - currentResize.originalOffset;
              } else {
                daysDiff = allDayEvent.span - currentResize.originalSpan;
              }

              allDayEvent.offset = currentResize.originalOffset;
              allDayEvent.span = currentResize.originalSpan;
              var newDates = this.getAllDayEventResizedDates(allDayEvent.event, daysDiff, allDayEventResizingBeforeStart);
              this.eventTimesChanged.emit({
                newStart: newDates.start,
                newEnd: newDates.end,
                event: allDayEvent.event,
                type: _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_3__.CalendarEventTimesChangedEventType.Resize
              });
              this.allDayEventResizes["delete"](allDayEvent);
            }
          }
          /**
           * @hidden
           */

        }, {
          key: "getDayColumnWidth",
          value: function getDayColumnWidth(eventRowContainer) {
            return Math.floor(eventRowContainer.offsetWidth / this.days.length);
          }
          /**
           * @hidden
           */

        }, {
          key: "dateDragEnter",
          value: function dateDragEnter(date) {
            this.lastDragEnterDate = date;
          }
          /**
           * @hidden
           */

        }, {
          key: "eventDropped",
          value: function eventDropped(dropEvent, date, allDay) {
            if ((0, _common_util__WEBPACK_IMPORTED_MODULE_2__.shouldFireDroppedEvent)(dropEvent, date, allDay, this.calendarId) && this.lastDragEnterDate.getTime() === date.getTime() && (!this.snapDraggedEvents || dropEvent.dropData.event !== this.lastDraggedEvent)) {
              this.eventTimesChanged.emit({
                type: _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_3__.CalendarEventTimesChangedEventType.Drop,
                event: dropEvent.dropData.event,
                newStart: date,
                allDay: allDay
              });
            }

            this.lastDraggedEvent = null;
          }
          /**
           * @hidden
           */

        }, {
          key: "dragEnter",
          value: function dragEnter(type) {
            this.eventDragEnterByType[type]++;
          }
          /**
           * @hidden
           */

        }, {
          key: "dragLeave",
          value: function dragLeave(type) {
            this.eventDragEnterByType[type]--;
          }
          /**
           * @hidden
           */

        }, {
          key: "dragStarted",
          value: function dragStarted(eventsContainerElement, eventElement, event, useY) {
            var _this13 = this;

            this.dayColumnWidth = this.getDayColumnWidth(eventsContainerElement);
            var dragHelper = new _common_calendar_drag_helper_provider__WEBPACK_IMPORTED_MODULE_4__.CalendarDragHelper(eventsContainerElement, eventElement);

            this.validateDrag = function (_ref40) {
              var x = _ref40.x,
                  y = _ref40.y,
                  transform = _ref40.transform;
              var isAllowed = _this13.allDayEventResizes.size === 0 && _this13.timeEventResizes.size === 0 && dragHelper.validateDrag({
                x: x,
                y: y,
                snapDraggedEvents: _this13.snapDraggedEvents,
                dragAlreadyMoved: _this13.dragAlreadyMoved,
                transform: transform
              });

              if (isAllowed && _this13.validateEventTimesChanged) {
                var newEventTimes = _this13.getDragMovedEventTimes(event, {
                  x: x,
                  y: y
                }, _this13.dayColumnWidth, useY);

                return _this13.validateEventTimesChanged({
                  type: _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_3__.CalendarEventTimesChangedEventType.Drag,
                  event: event.event,
                  newStart: newEventTimes.start,
                  newEnd: newEventTimes.end
                });
              }

              return isAllowed;
            };

            this.dragActive = true;
            this.dragAlreadyMoved = false;
            this.lastDraggedEvent = null;
            this.eventDragEnterByType = {
              allDay: 0,
              time: 0
            };

            if (!this.snapDraggedEvents && useY) {
              this.view.hourColumns.forEach(function (column) {
                var linkedEvent = column.events.find(function (columnEvent) {
                  return columnEvent.event === event.event && columnEvent !== event;
                }); // hide any linked events while dragging

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

        }, {
          key: "dragMove",
          value: function dragMove(dayEvent, dragEvent) {
            var newEventTimes = this.getDragMovedEventTimes(dayEvent, dragEvent, this.dayColumnWidth, true);
            var originalEvent = dayEvent.event;
            var adjustedEvent = Object.assign(Object.assign({}, originalEvent), newEventTimes);
            var tempEvents = this.events.map(function (event) {
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

        }, {
          key: "allDayEventDragMove",
          value: function allDayEventDragMove() {
            this.dragAlreadyMoved = true;
          }
          /**
           * @hidden
           */

        }, {
          key: "dragEnded",
          value: function dragEnded(weekEvent, dragEndEvent, dayWidth) {
            var useY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            this.view = this.getWeekView(this.events);
            this.dragActive = false;
            this.validateDrag = null;

            var _this$getDragMovedEve = this.getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY),
                start = _this$getDragMovedEve.start,
                end = _this$getDragMovedEve.end;

            if ((this.snapDraggedEvents || this.eventDragEnterByType[useY ? 'time' : 'allDay'] > 0) && (0, _common_util__WEBPACK_IMPORTED_MODULE_2__.isDraggedWithinPeriod)(start, end, this.view.period)) {
              this.lastDraggedEvent = weekEvent.event;
              this.eventTimesChanged.emit({
                newStart: start,
                newEnd: end,
                event: weekEvent.event,
                type: _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_3__.CalendarEventTimesChangedEventType.Drag,
                allDay: !useY
              });
            }
          }
        }, {
          key: "refreshHeader",
          value: function refreshHeader() {
            this.days = this.utils.getWeekViewHeader(Object.assign({
              viewDate: this.viewDate,
              weekStartsOn: this.weekStartsOn,
              excluded: this.excludeDays,
              weekendDays: this.weekendDays
            }, (0, _common_util__WEBPACK_IMPORTED_MODULE_2__.getWeekViewPeriod)(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
          }
        }, {
          key: "refreshBody",
          value: function refreshBody() {
            this.view = this.getWeekView(this.events);
          }
        }, {
          key: "refreshAll",
          value: function refreshAll() {
            this.refreshHeader();
            this.refreshBody();
            this.emitBeforeViewRender();
          }
        }, {
          key: "emitBeforeViewRender",
          value: function emitBeforeViewRender() {
            if (this.days && this.view) {
              this.beforeViewRender.emit(Object.assign({
                header: this.days
              }, this.view));
            }
          }
        }, {
          key: "getWeekView",
          value: function getWeekView(events) {
            return this.utils.getWeekView(Object.assign({
              events: events,
              viewDate: this.viewDate,
              weekStartsOn: this.weekStartsOn,
              excluded: this.excludeDays,
              precision: this.precision,
              absolutePositionedEvents: true,
              hourSegments: this.hourSegments,
              hourDuration: this.hourDuration,
              dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
              },
              dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
              },
              segmentHeight: this.hourSegmentHeight,
              weekendDays: this.weekendDays,
              minimumEventHeight: this.minimumEventHeight
            }, (0, _common_util__WEBPACK_IMPORTED_MODULE_2__.getWeekViewPeriod)(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
          }
        }, {
          key: "getDragMovedEventTimes",
          value: function getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY) {
            var daysDragged = (0, _common_util__WEBPACK_IMPORTED_MODULE_2__.roundToNearest)(dragEndEvent.x, dayWidth) / dayWidth * (this.rtl ? -1 : 1);
            var minutesMoved = useY ? (0, _common_util__WEBPACK_IMPORTED_MODULE_2__.getMinutesMoved)(dragEndEvent.y, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize, this.hourDuration) : 0;
            var start = this.dateAdapter.addMinutes((0, _common_util__WEBPACK_IMPORTED_MODULE_2__.addDaysWithExclusions)(this.dateAdapter, weekEvent.event.start, daysDragged, this.excludeDays), minutesMoved);
            var end;

            if (weekEvent.event.end) {
              end = this.dateAdapter.addMinutes((0, _common_util__WEBPACK_IMPORTED_MODULE_2__.addDaysWithExclusions)(this.dateAdapter, weekEvent.event.end, daysDragged, this.excludeDays), minutesMoved);
            }

            return {
              start: start,
              end: end
            };
          }
        }, {
          key: "restoreOriginalEvents",
          value: function restoreOriginalEvents(tempEvents, adjustedEvents) {
            var snapDraggedEvents = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            var previousView = this.view;

            if (snapDraggedEvents) {
              this.view = this.getWeekView(tempEvents);
            }

            var adjustedEventsArray = tempEvents.filter(function (event) {
              return adjustedEvents.has(event);
            });
            this.view.hourColumns.forEach(function (column, columnIndex) {
              previousView.hourColumns[columnIndex].hours.forEach(function (hour, hourIndex) {
                hour.segments.forEach(function (segment, segmentIndex) {
                  column.hours[hourIndex].segments[segmentIndex].cssClass = segment.cssClass;
                });
              });
              adjustedEventsArray.forEach(function (adjustedEvent) {
                var originalEvent = adjustedEvents.get(adjustedEvent);
                var existingColumnEvent = column.events.find(function (columnEvent) {
                  return columnEvent.event === (snapDraggedEvents ? adjustedEvent : originalEvent);
                });

                if (existingColumnEvent) {
                  // restore the original event so trackBy kicks in and the dom isn't changed
                  existingColumnEvent.event = originalEvent;
                  existingColumnEvent['tempEvent'] = adjustedEvent;

                  if (!snapDraggedEvents) {
                    existingColumnEvent.height = 0;
                    existingColumnEvent.width = 0;
                  }
                } else {
                  // add a dummy event to the drop so if the event was removed from the original column the drag doesn't end early
                  var event = {
                    event: originalEvent,
                    left: 0,
                    top: 0,
                    height: 0,
                    width: 0,
                    startsBeforeDay: false,
                    endsAfterDay: false,
                    tempEvent: adjustedEvent
                  };
                  column.events.push(event);
                }
              });
            });
            adjustedEvents.clear();
          }
        }, {
          key: "getTimeEventResizedDates",
          value: function getTimeEventResizedDates(calendarEvent, resizeEvent) {
            var newEventDates = {
              start: calendarEvent.start,
              end: (0, _common_util__WEBPACK_IMPORTED_MODULE_2__.getDefaultEventEnd)(this.dateAdapter, calendarEvent, this.minimumEventHeight)
            };
            var end = calendarEvent.end,
                eventWithoutEnd = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__rest)(calendarEvent, ["end"]);
            var smallestResizes = {
              start: this.dateAdapter.addMinutes(newEventDates.end, this.minimumEventHeight * -1),
              end: (0, _common_util__WEBPACK_IMPORTED_MODULE_2__.getDefaultEventEnd)(this.dateAdapter, eventWithoutEnd, this.minimumEventHeight)
            };
            var modifier = this.rtl ? -1 : 1;

            if (typeof resizeEvent.edges.left !== 'undefined') {
              var daysDiff = Math.round(+resizeEvent.edges.left / this.dayColumnWidth) * modifier;
              var newStart = (0, _common_util__WEBPACK_IMPORTED_MODULE_2__.addDaysWithExclusions)(this.dateAdapter, newEventDates.start, daysDiff, this.excludeDays);

              if (newStart < smallestResizes.start) {
                newEventDates.start = newStart;
              } else {
                newEventDates.start = smallestResizes.start;
              }
            } else if (typeof resizeEvent.edges.right !== 'undefined') {
              var _daysDiff = Math.round(+resizeEvent.edges.right / this.dayColumnWidth) * modifier;

              var newEnd = (0, _common_util__WEBPACK_IMPORTED_MODULE_2__.addDaysWithExclusions)(this.dateAdapter, newEventDates.end, _daysDiff, this.excludeDays);

              if (newEnd > smallestResizes.end) {
                newEventDates.end = newEnd;
              } else {
                newEventDates.end = smallestResizes.end;
              }
            }

            if (typeof resizeEvent.edges.top !== 'undefined') {
              var minutesMoved = (0, _common_util__WEBPACK_IMPORTED_MODULE_2__.getMinutesMoved)(resizeEvent.edges.top, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize, this.hourDuration);

              var _newStart = this.dateAdapter.addMinutes(newEventDates.start, minutesMoved);

              if (_newStart < smallestResizes.start) {
                newEventDates.start = _newStart;
              } else {
                newEventDates.start = smallestResizes.start;
              }
            } else if (typeof resizeEvent.edges.bottom !== 'undefined') {
              var _minutesMoved = (0, _common_util__WEBPACK_IMPORTED_MODULE_2__.getMinutesMoved)(resizeEvent.edges.bottom, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize, this.hourDuration);

              var _newEnd = this.dateAdapter.addMinutes(newEventDates.end, _minutesMoved);

              if (_newEnd > smallestResizes.end) {
                newEventDates.end = _newEnd;
              } else {
                newEventDates.end = smallestResizes.end;
              }
            }

            return newEventDates;
          }
        }, {
          key: "resizeStarted",
          value: function resizeStarted(eventsContainer, event, dayWidth) {
            var _this14 = this;

            this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
            var resizeHelper = new _common_calendar_resize_helper_provider__WEBPACK_IMPORTED_MODULE_6__.CalendarResizeHelper(eventsContainer, dayWidth, this.rtl);

            this.validateResize = function (_ref41) {
              var rectangle = _ref41.rectangle,
                  edges = _ref41.edges;
              var isWithinBoundary = resizeHelper.validateResize({
                rectangle: Object.assign({}, rectangle),
                edges: edges
              });

              if (isWithinBoundary && _this14.validateEventTimesChanged) {
                var newEventDates;

                if (!dayWidth) {
                  newEventDates = _this14.getTimeEventResizedDates(event.event, {
                    rectangle: rectangle,
                    edges: edges
                  });
                } else {
                  var modifier = _this14.rtl ? -1 : 1;

                  if (typeof edges.left !== 'undefined') {
                    var diff = Math.round(+edges.left / dayWidth) * modifier;
                    newEventDates = _this14.getAllDayEventResizedDates(event.event, diff, !_this14.rtl);
                  } else {
                    var _diff2 = Math.round(+edges.right / dayWidth) * modifier;

                    newEventDates = _this14.getAllDayEventResizedDates(event.event, _diff2, _this14.rtl);
                  }
                }

                return _this14.validateEventTimesChanged({
                  type: _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_3__.CalendarEventTimesChangedEventType.Resize,
                  event: event.event,
                  newStart: newEventDates.start,
                  newEnd: newEventDates.end
                });
              }

              return isWithinBoundary;
            };

            this.cdr.markForCheck();
          }
          /**
           * @hidden
           */

        }, {
          key: "getAllDayEventResizedDates",
          value: function getAllDayEventResizedDates(event, daysDiff, beforeStart) {
            var start = event.start;
            var end = event.end || event.start;

            if (beforeStart) {
              start = (0, _common_util__WEBPACK_IMPORTED_MODULE_2__.addDaysWithExclusions)(this.dateAdapter, start, daysDiff, this.excludeDays);
            } else {
              end = (0, _common_util__WEBPACK_IMPORTED_MODULE_2__.addDaysWithExclusions)(this.dateAdapter, end, daysDiff, this.excludeDays);
            }

            return {
              start: start,
              end: end
            };
          }
        }]);

        return _CalendarWeekViewComponent;
      }();

      _CalendarWeekViewComponent.ɵfac = function CalendarWeekViewComponent_Factory(t) {
        return new (t || _CalendarWeekViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_common_calendar_utils_provider__WEBPACK_IMPORTED_MODULE_7__.CalendarUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_8__.DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
      };

      _CalendarWeekViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _CalendarWeekViewComponent,
        selectors: [["mwl-calendar-week-view"]],
        inputs: {
          viewDate: "viewDate",
          events: "events",
          excludeDays: "excludeDays",
          refresh: "refresh",
          locale: "locale",
          tooltipPlacement: "tooltipPlacement",
          tooltipTemplate: "tooltipTemplate",
          tooltipAppendToBody: "tooltipAppendToBody",
          tooltipDelay: "tooltipDelay",
          weekStartsOn: "weekStartsOn",
          headerTemplate: "headerTemplate",
          eventTemplate: "eventTemplate",
          eventTitleTemplate: "eventTitleTemplate",
          eventActionsTemplate: "eventActionsTemplate",
          precision: "precision",
          weekendDays: "weekendDays",
          snapDraggedEvents: "snapDraggedEvents",
          hourSegments: "hourSegments",
          hourDuration: "hourDuration",
          hourSegmentHeight: "hourSegmentHeight",
          minimumEventHeight: "minimumEventHeight",
          dayStartHour: "dayStartHour",
          dayStartMinute: "dayStartMinute",
          dayEndHour: "dayEndHour",
          dayEndMinute: "dayEndMinute",
          hourSegmentTemplate: "hourSegmentTemplate",
          eventSnapSize: "eventSnapSize",
          allDayEventsLabelTemplate: "allDayEventsLabelTemplate",
          daysInWeek: "daysInWeek",
          currentTimeMarkerTemplate: "currentTimeMarkerTemplate",
          validateEventTimesChanged: "validateEventTimesChanged"
        },
        outputs: {
          dayHeaderClicked: "dayHeaderClicked",
          eventClicked: "eventClicked",
          eventTimesChanged: "eventTimesChanged",
          beforeViewRender: "beforeViewRender",
          hourSegmentClicked: "hourSegmentClicked"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        decls: 20,
        vars: 9,
        consts: [["role", "grid", 1, "cal-week-view"], [3, "days", "locale", "customTemplate", "dayHeaderClicked", "eventDropped", "dragEnter"], ["class", "cal-all-day-events", "mwlDroppable", "", 3, "dragEnter", "dragLeave", 4, "ngIf"], ["mwlDroppable", "", 1, "cal-time-events", 3, "dragEnter", "dragLeave"], ["class", "cal-time-label-column", 4, "ngIf"], [1, "cal-day-columns"], ["dayColumns", ""], ["class", "cal-day-column", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", 1, "cal-all-day-events", 3, "dragEnter", "dragLeave"], ["allDayEventsContainer", ""], [1, "cal-time-label-column", 3, "ngTemplateOutlet"], ["class", "cal-day-column", "mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "cal-events-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 1, "cal-day-column", 3, "drop", "dragEnter"], [1, "cal-events-row"], ["eventRowContainer", ""], ["class", "cal-event-container", "mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "cal-draggable", "cal-starts-within-week", "cal-ends-within-week", "ngClass", "width", "marginLeft", "marginRight", "resizeSnapGrid", "validateResize", "dropData", "dragAxis", "dragSnapGrid", "validateDrag", "touchStartLongPress", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event-container", 3, "ngClass", "resizeSnapGrid", "validateResize", "dropData", "dragAxis", "dragSnapGrid", "validateDrag", "touchStartLongPress", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd"], ["event", ""], ["class", "cal-resize-handle cal-resize-handle-before-start", "mwlResizeHandle", "", 3, "resizeEdges", 4, "ngIf"], [3, "locale", "weekEvent", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "daysInWeek", "eventClicked"], ["class", "cal-resize-handle cal-resize-handle-after-end", "mwlResizeHandle", "", 3, "resizeEdges", 4, "ngIf"], ["mwlResizeHandle", "", 1, "cal-resize-handle", "cal-resize-handle-before-start", 3, "resizeEdges"], ["mwlResizeHandle", "", 1, "cal-resize-handle", "cal-resize-handle-after-end", 3, "resizeEdges"], [1, "cal-time-label-column"], ["class", "cal-hour", 3, "cal-hour-odd", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cal-hour"], [3, "height", "segment", "segmentHeight", "locale", "customTemplate", "isTimeLabel", "daysInWeek", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "segment", "segmentHeight", "locale", "customTemplate", "isTimeLabel", "daysInWeek"], [1, "cal-day-column"], [3, "columnDate", "dayStartHour", "dayStartMinute", "dayEndHour", "dayEndMinute", "hourSegments", "hourDuration", "hourSegmentHeight", "customTemplate"], [1, "cal-events-container"], ["class", "cal-event-container", "mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "cal-draggable", "cal-starts-within-day", "cal-ends-within-day", "ngClass", "hidden", "top", "height", "left", "width", "resizeSnapGrid", "validateResize", "allowNegativeResizes", "dropData", "dragAxis", "dragSnapGrid", "touchStartLongPress", "ghostDragEnabled", "ghostElementTemplate", "validateDrag", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event-container", 3, "ngClass", "hidden", "resizeSnapGrid", "validateResize", "allowNegativeResizes", "dropData", "dragAxis", "dragSnapGrid", "touchStartLongPress", "ghostDragEnabled", "ghostElementTemplate", "validateDrag", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd"], [3, "ngTemplateOutlet"], ["weekEventTemplate", ""], [3, "locale", "weekEvent", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDisabled", "tooltipDelay", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "column", "daysInWeek", "eventClicked"], ["mwlDroppable", "", "dragActiveClass", "cal-drag-active", 3, "height", "segment", "segmentHeight", "locale", "customTemplate", "daysInWeek", "clickListenerDisabled", "dragOverClass", "isTimeLabel", "mwlClick", "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragActiveClass", "cal-drag-active", 3, "segment", "segmentHeight", "locale", "customTemplate", "daysInWeek", "clickListenerDisabled", "dragOverClass", "isTimeLabel", "mwlClick", "drop", "dragEnter"]],
        template: function CalendarWeekViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mwl-calendar-week-view-header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dayHeaderClicked", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_dayHeaderClicked_3_listener($event) {
              return ctx.dayHeaderClicked.emit($event);
            })("eventDropped", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_eventDropped_3_listener($event) {
              return ctx.eventDropped({
                dropData: $event
              }, $event.newStart, true);
            })("dragEnter", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_dragEnter_3_listener($event) {
              return ctx.dateDragEnter($event.date);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CalendarWeekViewComponent_div_6_Template, 12, 5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dragEnter", function CalendarWeekViewComponent_Template_div_dragEnter_8_listener() {
              return ctx.dragEnter("time");
            })("dragLeave", function CalendarWeekViewComponent_Template_div_dragLeave_8_listener() {
              return ctx.dragLeave("time");
            });

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
          }

          if (rf & 2) {
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
          }
        },
        directives: [_calendar_week_view_header_component__WEBPACK_IMPORTED_MODULE_9__.CalendarWeekViewHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_11__.DroppableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgTemplateOutlet, angular_resizable_element__WEBPACK_IMPORTED_MODULE_12__.ResizableDirective, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_11__.DraggableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _calendar_week_view_event_component__WEBPACK_IMPORTED_MODULE_13__.CalendarWeekViewEventComponent, angular_resizable_element__WEBPACK_IMPORTED_MODULE_12__.ResizeHandleDirective, _calendar_week_view_hour_segment_component__WEBPACK_IMPORTED_MODULE_14__.CalendarWeekViewHourSegmentComponent, _calendar_week_view_current_time_marker_component__WEBPACK_IMPORTED_MODULE_15__.CalendarWeekViewCurrentTimeMarkerComponent, _common_click_directive__WEBPACK_IMPORTED_MODULE_16__.ClickDirective],
        encapsulation: 2
      });
      /***/
    },

    /***/
    47175: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarWeekViewComponent": function CalendarWeekViewComponent() {
          return (
            /* reexport safe */
            _calendar_week_view_component__WEBPACK_IMPORTED_MODULE_0__.CalendarWeekViewComponent
          );
        },

        /* harmony export */
        "getWeekViewPeriod": function getWeekViewPeriod() {
          return (
            /* reexport safe */
            _common_util__WEBPACK_IMPORTED_MODULE_1__.getWeekViewPeriod
          );
        },

        /* harmony export */
        "ɵCalendarWeekViewHeaderComponent": function ɵCalendarWeekViewHeaderComponent() {
          return (
            /* reexport safe */
            _calendar_week_view_header_component__WEBPACK_IMPORTED_MODULE_2__.CalendarWeekViewHeaderComponent
          );
        },

        /* harmony export */
        "ɵCalendarWeekViewEventComponent": function ɵCalendarWeekViewEventComponent() {
          return (
            /* reexport safe */
            _calendar_week_view_event_component__WEBPACK_IMPORTED_MODULE_3__.CalendarWeekViewEventComponent
          );
        },

        /* harmony export */
        "ɵCalendarWeekViewHourSegmentComponent": function ɵCalendarWeekViewHourSegmentComponent() {
          return (
            /* reexport safe */
            _calendar_week_view_hour_segment_component__WEBPACK_IMPORTED_MODULE_4__.CalendarWeekViewHourSegmentComponent
          );
        },

        /* harmony export */
        "ɵCalendarWeekViewCurrentTimeMarkerComponent": function ɵCalendarWeekViewCurrentTimeMarkerComponent() {
          return (
            /* reexport safe */
            _calendar_week_view_current_time_marker_component__WEBPACK_IMPORTED_MODULE_5__.CalendarWeekViewCurrentTimeMarkerComponent
          );
        },

        /* harmony export */
        "CalendarWeekModule": function CalendarWeekModule() {
          return (
            /* binding */
            _CalendarWeekModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! angular-resizable-element */
      90093);
      /* harmony import */


      var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angular-draggable-droppable */
      42915);
      /* harmony import */


      var _calendar_week_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./calendar-week-view.component */
      1913);
      /* harmony import */


      var _calendar_week_view_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./calendar-week-view-header.component */
      55428);
      /* harmony import */


      var _calendar_week_view_event_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./calendar-week-view-event.component */
      61862);
      /* harmony import */


      var _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../common/calendar-common.module */
      67400);
      /* harmony import */


      var _calendar_week_view_hour_segment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./calendar-week-view-hour-segment.component */
      20923);
      /* harmony import */


      var _calendar_week_view_current_time_marker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./calendar-week-view-current-time-marker.component */
      6556);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../common/util */
      33878); // needed for ivy, not part of the public api


      var _CalendarWeekModule = function _CalendarWeekModule() {
        _classCallCheck(this, _CalendarWeekModule);
      };

      _CalendarWeekModule.ɵfac = function CalendarWeekModule_Factory(t) {
        return new (t || _CalendarWeekModule)();
      };

      _CalendarWeekModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: _CalendarWeekModule
      });
      _CalendarWeekModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__.ResizableModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__.DragAndDropModule, _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_10__.CalendarCommonModule], angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__.ResizableModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__.DragAndDropModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](_CalendarWeekModule, {
          declarations: [_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_0__.CalendarWeekViewComponent, _calendar_week_view_header_component__WEBPACK_IMPORTED_MODULE_2__.CalendarWeekViewHeaderComponent, _calendar_week_view_event_component__WEBPACK_IMPORTED_MODULE_3__.CalendarWeekViewEventComponent, _calendar_week_view_hour_segment_component__WEBPACK_IMPORTED_MODULE_4__.CalendarWeekViewHourSegmentComponent, _calendar_week_view_current_time_marker_component__WEBPACK_IMPORTED_MODULE_5__.CalendarWeekViewCurrentTimeMarkerComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__.ResizableModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__.DragAndDropModule, _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_10__.CalendarCommonModule],
          exports: [angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__.ResizableModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__.DragAndDropModule, _calendar_week_view_component__WEBPACK_IMPORTED_MODULE_0__.CalendarWeekViewComponent, _calendar_week_view_header_component__WEBPACK_IMPORTED_MODULE_2__.CalendarWeekViewHeaderComponent, _calendar_week_view_event_component__WEBPACK_IMPORTED_MODULE_3__.CalendarWeekViewEventComponent, _calendar_week_view_hour_segment_component__WEBPACK_IMPORTED_MODULE_4__.CalendarWeekViewHourSegmentComponent, _calendar_week_view_current_time_marker_component__WEBPACK_IMPORTED_MODULE_5__.CalendarWeekViewCurrentTimeMarkerComponent]
        });
      })();
      /***/

    },

    /***/
    35292: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CarbonAdComponent": function CarbonAdComponent() {
          return (
            /* binding */
            _CarbonAdComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _CarbonAdComponent = /*#__PURE__*/function () {
        function _CarbonAdComponent(elementRef) {
          _classCallCheck(this, _CarbonAdComponent);

          this.elementRef = elementRef;
        }

        _createClass(_CarbonAdComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var script = document.createElement('script');
            script.src = '//cdn.carbonads.com/carbon.js?serve=CESIVK3U&placement=mattlewis92githubio';
            script.id = '_carbonads_js';
            this.elementRef.nativeElement.append(script);
          }
        }]);

        return _CarbonAdComponent;
      }();

      _CarbonAdComponent.ɵfac = function CarbonAdComponent_Factory(t) {
        return new (t || _CarbonAdComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };

      _CarbonAdComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CarbonAdComponent,
        selectors: [["mwl-carbon-ad"]],
        decls: 0,
        vars: 0,
        template: function CarbonAdComponent_Template(rf, ctx) {},
        styles: ["#carbonads * {\n  margin: 0;\n  margin: initial;\n  padding: 0;\n  padding: initial;\n}\n\n#carbonads {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  display: flex;\n  max-width: 330px;\n  background-color: #fafafa;\n  box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.1);\n  z-index: 100;\n  margin-bottom: 20px;\n}\n\n#carbonads a {\n  color: inherit;\n  text-decoration: none;\n}\n\n#carbonads a:hover {\n  color: inherit;\n}\n\n#carbonads span {\n  position: relative;\n  display: block;\n  overflow: hidden;\n}\n\n#carbonads .carbon-wrap {\n  display: flex;\n}\n\n#carbonads .carbon-img {\n  display: block;\n  margin: 0;\n  line-height: 1;\n}\n\n#carbonads .carbon-img img {\n  display: block;\n}\n\n#carbonads .carbon-text {\n  font-size: 13px;\n  padding: 10px;\n  margin-bottom: 16px;\n  line-height: 1.5;\n  text-align: left;\n}\n\n#carbonads .carbon-poweredby {\n  display: block;\n  padding: 6px 8px;\n  background: #f1f1f2;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-weight: 600;\n  font-size: 8px;\n  line-height: 1;\n  border-top-left-radius: 3px;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmJvbi1hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFBQSxlQUFBO0VBQ0EsVUFBQTtFQUFBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrSkFBQTtFQUdBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNENBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFEQTtFQUNFLGFBQUE7QUFJRjs7QUFGQTtFQUNFLGNBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQUtGOztBQUhBO0VBQ0UsY0FBQTtBQU1GOztBQUpBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFPRjs7QUFMQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQVFGIiwiZmlsZSI6ImNhcmJvbi1hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjYXJib25hZHMgKiB7XG4gIG1hcmdpbjogaW5pdGlhbDtcbiAgcGFkZGluZzogaW5pdGlhbDtcbn1cbiNjYXJib25hZHMge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sXG4gIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCxcbiAgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiAzMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5OCUpO1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggMXB4IGhzbGEoMCwgMCUsIDAlLCAwLjEpO1xuICB6LWluZGV4OiAxMDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4jY2FyYm9uYWRzIGEge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuI2NhcmJvbmFkcyBhOmhvdmVyIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4jY2FyYm9uYWRzIHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI2NhcmJvbmFkcyAuY2FyYm9uLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuI2NhcmJvbmFkcyAuY2FyYm9uLWltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuI2NhcmJvbmFkcyAuY2FyYm9uLWltZyBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiNjYXJib25hZHMgLmNhcmJvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuI2NhcmJvbmFkcyAuY2FyYm9uLXBvd2VyZWRieSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA2cHggOHB4O1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiA4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cbiJdfQ== */"],
        encapsulation: 2
      });
      /***/
    },

    /***/
    2965: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DemoAppComponent": function DemoAppComponent() {
          return (
            /* binding */
            _DemoAppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      76477);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      35116);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      49005);
      /* harmony import */


      var _stackblitz_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @stackblitz/sdk */
      37576);
      /* harmony import */


      var _demo_modules_demo_utils_sources__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./demo-modules/demo-utils/sources */
      15721);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      50931);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var angulartics2_ga__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angulartics2/ga */
      94821);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! angular-draggable-droppable */
      42915);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _carbon_ad_carbon_ad_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./carbon-ad/carbon-ad.component */
      35292);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var ngx_clipboard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-clipboard */
      49565);

      var _c0 = ["nav"];

      function DemoAppComponent_ng_template_93_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      }

      function DemoAppComponent_div_102_ng_template_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n              ");
        }
      }

      function DemoAppComponent_div_102_li_34_i_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 59);
        }
      }

      function DemoAppComponent_div_102_li_34_i_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 60);
        }
      }

      function DemoAppComponent_div_102_li_34_i_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 61);
        }
      }

      var _c1 = function _c1(a0, a1) {
        return {
          "fa-copy": a0,
          "fa-check": a1
        };
      };

      function DemoAppComponent_div_102_li_34_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n                  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DemoAppComponent_div_102_li_34_ng_template_14_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r13.copied();
          });

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
        }

        if (rf & 2) {
          var source_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cbContent", source_r8.contents.raw)("ngbTooltip", "Copy source")("placement", "top-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](9, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 5, ctx_r12.copied$) !== true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 7, ctx_r12.copied$)));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", source_r8.contents.highlighted, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        }
      }

      function DemoAppComponent_div_102_li_34_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var source_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", source_r8.language);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "css");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n                ", source_r8.filename, "\n              ");
        }
      }

      function DemoAppComponent_div_102_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DemoAppComponent_div_102_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r16.editInStackblitz(ctx_r16.activeDemo);
          });

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
        }

        if (rf & 2) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](23);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.activeDemo.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.activeDemo == null ? null : ctx_r2.activeDemo.sources);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavOutlet", _r5);
        }
      }

      var _c2 = function _c2(a0) {
        return [a0];
      };

      function DemoAppComponent_li_113_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DemoAppComponent_li_113_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r19.nav.select("demo");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var demo_r18 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", (ctx_r3.activeDemo == null ? null : ctx_r3.activeDemo.path) === demo_r18.path);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c2, demo_r18.path));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n            ", demo_r18.label, "\n          ");
        }
      }

      function DemoAppComponent_em_116_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No matching demos found");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function getSources(folder) {
        return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _yield$__webpack_requ, sources;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return __webpack_require__(64251)("./" + folder + "/sources.ts");

                case 2:
                  _yield$__webpack_requ = _context.sent;
                  sources = _yield$__webpack_requ.sources;
                  return _context.abrupt("return", sources.map(function (_ref42) {
                    var filename = _ref42.filename,
                        contents = _ref42.contents;

                    var _filename$match = filename.match(/^.+\.(.+)$/),
                        _filename$match2 = _slicedToArray(_filename$match, 2),
                        extension = _filename$match2[1];

                    var languages = {
                      ts: 'typescript',
                      html: 'html',
                      css: 'css'
                    };
                    return {
                      filename: filename,
                      contents: {
                        raw: contents.raw["default"].replace(",\n    RouterModule.forChild([{ path: '', component: DemoComponent }])", '').replace("\nimport { RouterModule } from '@angular/router';", ''),
                        highlighted: contents.highlighted["default"] // TODO - move this into a regexp replace for both
                        .replace(',\n    RouterModule.forChild([{ path: <span class="hljs-string">\'\'</span>, component: DemoComponent }])', '').replace('\n<span class="hljs-keyword">import</span> { RouterModule } from <span class="hljs-string">\'@angular/router\'</span>;', '')
                      },
                      language: languages[extension]
                    };
                  }));

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
      }

      var dependencyVersions = {
        angular: __webpack_require__(
        /*! @angular/core/package.json */
        91487).version,
        angularRouter: __webpack_require__(
        /*! @angular/router/package.json */
        56546).version,
        angularCalendar: __webpack_require__(
        /*! ../../../package.json */
        4147).version,
        calendarUtils: __webpack_require__(
        /*! calendar-utils/package.json */
        99041).version,
        angularResizableElement: __webpack_require__(
        /*! angular-resizable-element/package.json */
        81574).version,
        angularDraggableDroppable: __webpack_require__(
        /*! angular-draggable-droppable/package.json */
        30621).version,
        dateFns: __webpack_require__(
        /*! date-fns/package.json */
        71903).version,
        rxjs: __webpack_require__(
        /*! rxjs/package.json */
        63685).version,
        bootstrap: __webpack_require__(
        /*! bootstrap-css-only/package.json */
        2312).version,
        zoneJs: __webpack_require__(
        /*! zone.js/package.json */
        40165).version,
        ngBootstrap: __webpack_require__(
        /*! @ng-bootstrap/ng-bootstrap/package.json */
        99855).version,
        rrule: __webpack_require__(
        /*! rrule/package.json */
        82488).version,
        fontAwesome: __webpack_require__(
        /*! @fortawesome/fontawesome-free/package.json */
        57938).version,
        positioning: __webpack_require__(
        /*! positioning/package.json */
        35427).version,
        flatpickr: __webpack_require__(
        /*! flatpickr/package.json */
        89390).version,
        angularxFlatpickr: __webpack_require__(
        /*! angularx-flatpickr/package.json */
        9209).version
      };

      var _DemoAppComponent = /*#__PURE__*/function () {
        function _DemoAppComponent(router, analytics) {
          _classCallCheck(this, _DemoAppComponent);

          this.router = router;
          this.demos = [];
          this.filteredDemos = [];
          this.isMenuVisible = false;
          this.firstDemoLoaded = false;
          this.searchText = '';
          this.copied$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
          analytics.startTracking();
        }

        _createClass(_DemoAppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            var defaultRoute = this.router.config.find(function (route) {
              return route.path === '**';
            });
            this.demos = this.router.config.filter(function (route) {
              return route.path !== '**';
            }).map(function (route) {
              return {
                path: route.path,
                label: route.data.label,
                darkTheme: route.data.darkTheme,
                tags: route.data.tags || []
              };
            });
            this.updateFilteredDemos();
            this.router.events.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd;
            })).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(function () {
              _this15.firstDemoLoaded = true;
            });
            this.router.events.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationStart;
            })).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(function (event) {
              if (event.url === '/') {
                return {
                  url: "/".concat(defaultRoute.redirectTo)
                };
              }

              return event;
            })).subscribe(function (event) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        this.activeDemo = this.demos.find(function (demo) {
                          return "/".concat(demo.path) === event.url;
                        });
                        _context2.next = 3;
                        return getSources(this.activeDemo.path);

                      case 3:
                        this.activeDemo.sources = _context2.sent;

                      case 4:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            });
            var script = document.createElement('script');
            script.async = true;
            script.setAttribute('data-uid', '7c1627e655');
            script.src = 'https://angular-calendar.ck.page/7c1627e655/index.js';
            document.getElementsByTagName('head')[0].appendChild(script);
          }
        }, {
          key: "updateFilteredDemos",
          value: function updateFilteredDemos() {
            var _this16 = this;

            this.filteredDemos = this.demos.filter(function (demo) {
              return !_this16.searchText || [demo.label.toLowerCase()].concat(_toConsumableArray(demo.tags)).some(function (tag) {
                return tag.includes(_this16.searchText.toLowerCase());
              });
            });
          }
        }, {
          key: "editInStackblitz",
          value: function editInStackblitz(demo) {
            var files = {
              'index.html': "\n<link href=\"https://unpkg.com/bootstrap-css-only@".concat(dependencyVersions.bootstrap, "/css/bootstrap.min.css\" rel=\"stylesheet\">\n<link href=\"https://unpkg.com/@fortawesome/fontawesome-free@").concat(dependencyVersions.fontAwesome, "/css/all.css\" rel=\"stylesheet\">\n<link href=\"https://unpkg.com/angular-calendar@").concat(dependencyVersions.angularCalendar, "/css/angular-calendar.css\" rel=\"stylesheet\">\n<link href=\"https://unpkg.com/flatpickr@").concat(dependencyVersions.flatpickr, "/dist/flatpickr.css\" rel=\"stylesheet\">\n<mwl-demo-component>Loading...</mwl-demo-component>\n").trim(),
              'main.ts': "\nimport 'zone.js';\nimport { platformBrowserDynamic } from '@angular/platform-browser-dynamic';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { BrowserAnimationsModule } from '@angular/platform-browser/animations';\nimport { NgModule } from '@angular/core';\nimport { DemoModule } from './demo/module';\nimport { DemoComponent } from './demo/component';\n\n@NgModule({\n  imports: [\n    BrowserModule,\n    BrowserAnimationsModule,\n    DemoModule\n  ],\n  bootstrap: [DemoComponent]\n})\nexport class BootstrapModule {}\n\nplatformBrowserDynamic().bootstrapModule(BootstrapModule).then(ref => {\n  // Ensure Angular destroys itself on hot reloads.\n  if (window['ngRef']) {\n    window['ngRef'].destroy();\n  }\n  window['ngRef'] = ref;\n\n  // Otherwise, log the boot error\n}).catch(err => console.error(err));\n".trim()
            };

            _demo_modules_demo_utils_sources__WEBPACK_IMPORTED_MODULE_8__.sources.forEach(function (source) {
              files["demo-utils/".concat(source.filename)] = source.contents.raw["default"];
            });

            demo.sources.forEach(function (source) {
              files["demo/".concat(source.filename)] = source.contents.raw;
            });

            _stackblitz_sdk__WEBPACK_IMPORTED_MODULE_0__["default"].openProject({
              title: 'Angular Calendar Demo',
              description: demo.label,
              template: 'angular-cli',
              tags: ['angular-calendar'],
              files: files,
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
                'angular-draggable-droppable': "^".concat(dependencyVersions.angularDraggableDroppable),
                'angular-resizable-element': "^".concat(dependencyVersions.angularResizableElement),
                'date-fns': dependencyVersions.dateFns,
                'angular-calendar': dependencyVersions.angularCalendar,
                '@ng-bootstrap/ng-bootstrap': '5.0.0',
                rrule: dependencyVersions.rrule,
                'calendar-utils': dependencyVersions.calendarUtils,
                flatpickr: dependencyVersions.flatpickr,
                'angularx-flatpickr': dependencyVersions.angularxFlatpickr
              }
            }, {
              openFile: 'demo/component.ts'
            });
          }
        }, {
          key: "copied",
          value: function copied() {
            var _this17 = this;

            this.copied$.next(true);
            setTimeout(function () {
              _this17.copied$.next(false);
            }, 1000);
          }
        }]);

        return _DemoAppComponent;
      }();

      _DemoAppComponent.ɵfac = function DemoAppComponent_Factory(t) {
        return new (t || _DemoAppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angulartics2_ga__WEBPACK_IMPORTED_MODULE_9__.Angulartics2GoogleAnalytics));
      };

      _DemoAppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _DemoAppComponent,
        selectors: [["mwl-demo-app"]],
        viewQuery: function DemoAppComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.nav = _t.first);
          }
        },
        decls: 121,
        vars: 13,
        consts: [["role", "navigation", 1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "fixed-top"], ["href", "#", 1, "navbar-brand"], ["type", "button", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], [1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "nav", "navbar-nav"], [1, "nav-item", "active"], ["href", "javascript:;", 1, "nav-link"], [1, "fas", "fa-laptop"], [1, "nav-item"], ["href", "https://github.com/mattlewis92/angular-calendar#getting-started", 1, "nav-link"], [1, "fas", "fa-map-pin"], ["href", "https://mattlewis92.github.io/angular-calendar/docs/", 1, "nav-link"], [1, "fas", "fa-book"], ["data-formkit-toggle", "7c1627e655", "href", "javascript:;", 1, "nav-link", 3, "click"], [1, "fas", "fa-fw", "fa-envelope"], ["href", "https://github.com/users/mattlewis92/sponsorship", "target", "_blank", 1, "nav-link", "text-danger"], [1, "fas", "fa-dollar-sign"], [1, "nav", "navbar-nav", "ml-md-auto"], ["href", "https://www.npmjs.com/package/angular-calendar", "target", "_blank", 1, "nav-link", 3, "ngbTooltip"], [1, "fab", "fa-lg", "fa-npm"], [1, "d-lg-none"], ["href", "https://github.com/mattlewis92/angular-calendar", "target", "_blank", 1, "nav-link", 3, "ngbTooltip"], [1, "fab", "fa-lg", "fa-github"], ["href", "https://twitter.com/mattlewis92_", "target", "_blank", 1, "nav-link", "text-primary", 3, "ngbTooltip"], [1, "fab", "fa-lg", "fa-twitter"], ["loading", ""], [1, "container-fluid"], [1, "row", "fill-height"], ["mwlDraggableScrollContainer", "", 1, "col", "fill-height", "scroll-y", "demo-container"], ["class", "card", 4, "ngIf", "ngIfElse"], [1, "fill-height", "sidebar-nav", "scroll-y"], ["type", "search", "placeholder", "Search demos...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "list-unstyled", "spacer-top"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "card"], [1, "card-body", "text-center"], [1, "fas", "fa-spin", "fa-spinner", "fa-5x"], [1, "card-header"], [1, "row"], [1, "col-md-6"], [1, "btn", "btn-info", "float-right", 3, "click"], [1, "fas", "fa-edit"], [1, "card-body"], ["ngbNav", "", 1, "justify-content-start", "nav-tabs"], ["nav", "ngbNav"], ["ngbNavItem", "", "domId", "demo"], ["ngbNavLink", ""], [1, "fas", "fa-fw", "fa-laptop"], ["ngbNavContent", ""], ["ngbNavItem", "", 4, "ngFor", "ngForOf"], [3, "ngbNavOutlet"], [1, "spacer-top"], ["ngbNavItem", ""], [3, "ngSwitch"], ["class", "fab fa-fw fa-html5", 4, "ngSwitchCase"], ["class", "fab fa-fw fa-css3", 4, "ngSwitchCase"], ["class", "fas fa-fw fa-code", 4, "ngSwitchDefault"], [1, "fab", "fa-fw", "fa-html5"], [1, "fab", "fa-fw", "fa-css3"], [1, "fas", "fa-fw", "fa-code"], [1, "code-container"], ["ngxClipboard", "", 1, "btn", "btn-outline-primary", "copy-code", 3, "cbContent", "ngbTooltip", "placement", "click"], [1, "fa", 3, "ngClass"], [3, "innerHTML"], [3, "routerLink", "click"]],
        template: function DemoAppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Angular 12.0+ calendar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DemoAppComponent_Template_button_click_5_listener() {
              return ctx.isMenuVisible = !ctx.isMenuVisible;
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DemoAppComponent_Template_a_click_40_listener() {
              return ctx.isMenuVisible = false;
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DemoAppComponent_Template_input_ngModelChange_109_listener($event) {
              return ctx.searchText = $event;
            })("ngModelChange", function DemoAppComponent_Template_input_ngModelChange_109_listener() {
              return ctx.updateFilteredDemos();
            });

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
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](94);

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
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbCollapse, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbTooltip, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_11__.DraggableScrollContainerDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _carbon_ad_carbon_ad_component__WEBPACK_IMPORTED_MODULE_13__.CarbonAdComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgSwitchDefault, ngx_clipboard__WEBPACK_IMPORTED_MODULE_15__.ClipboardDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe],
        styles: ["h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  padding-top: 70px;\n}\n\n.demo-container[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n}\n\n@media (min-width: 768px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    height: 100vh;\n  }\n}\n\n@media (max-width: 768px) {\n  .demo-container[_ngcontent-%COMP%] {\n    flex-basis: initial;\n  }\n\n  .sidebar-nav[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 10px;\n  }\n}\n\n.spacer-top[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.sidebar-nav[_ngcontent-%COMP%] {\n  padding-left: 5px;\n  padding-right: 20px;\n}\n\n.sidebar-nav[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.sidebar-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 90%;\n}\n\n.sidebar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.active) {\n  color: #777;\n}\n\n.sidebar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0275d8;\n  text-decoration: none;\n}\n\n.sidebar-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #373a3c;\n  font-weight: 700;\n}\n\npre[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  padding: 15px;\n}\n\n.fill-height[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.scroll-y[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n\n.code-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.copy-code[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8tYXBwLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztBQUNiIiwiZmlsZSI6ImRlbW8tYXBwLmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgcGFkZGluZy10b3A6IDcwcHg7XG59XG5cbi5kZW1vLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmRlbW8tY29udGFpbmVyIHtcbiAgICBmbGV4LWJhc2lzOiBpbml0aWFsO1xuICB9XG5cbiAgLnNpZGViYXItbmF2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxufVxuXG4uc3BhY2VyLXRvcCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5zaWRlYmFyLW5hdiB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4uc2lkZWJhci1uYXYgaDQge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uc2lkZWJhci1uYXYgdWwge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uc2lkZWJhci1uYXYgbGkge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDkwJTtcbn1cblxuLnNpZGViYXItbmF2IGE6bm90KC5hY3RpdmUpIHtcbiAgY29sb3I6ICM3Nzc7XG59XG5cbi5zaWRlYmFyLW5hdiBhOmhvdmVyIHtcbiAgY29sb3I6ICMwMjc1ZDg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnNpZGViYXItbmF2IGEuYWN0aXZlIHtcbiAgY29sb3I6ICMzNzNhM2M7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbnByZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5maWxsLWhlaWdodCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNjcm9sbC15IHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmNvZGUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY29weS1jb2RlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1cHg7XG4gIHJpZ2h0OiAxNXB4O1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    80495: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DemoAppModule": function DemoAppModule() {
          return (
            /* binding */
            _DemoAppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      20718);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var angulartics2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angulartics2 */
      47078);
      /* harmony import */


      var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular-draggable-droppable */
      42915);
      /* harmony import */


      var _demo_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./demo-app.component */
      2965);
      /* harmony import */


      var _demo_modules_kitchen_sink_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./demo-modules/kitchen-sink/component */
      79362);
      /* harmony import */


      var _demo_modules_kitchen_sink_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./demo-modules/kitchen-sink/module */
      18582);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../environments/environment */
      56321);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var ngx_clipboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-clipboard */
      49565);
      /* harmony import */


      var _carbon_ad_carbon_ad_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./carbon-ad/carbon-ad.component */
      35292);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _DemoAppModule = function _DemoAppModule() {
        _classCallCheck(this, _DemoAppModule);
      };

      _DemoAppModule.ɵfac = function DemoAppModule_Factory(t) {
        return new (t || _DemoAppModule)();
      };

      _DemoAppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _DemoAppModule,
        bootstrap: [_demo_app_component__WEBPACK_IMPORTED_MODULE_1__.DemoAppComponent]
      });
      _DemoAppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbCollapseModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbTooltipModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__.DragAndDropModule, angulartics2__WEBPACK_IMPORTED_MODULE_7__.Angulartics2Module.forRoot({
          developerMode: !_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.production
        }), ngx_clipboard__WEBPACK_IMPORTED_MODULE_9__.ClipboardModule, _demo_modules_kitchen_sink_module__WEBPACK_IMPORTED_MODULE_10__.DemoModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot([{
          path: 'kitchen-sink',
          component: _demo_modules_kitchen_sink_component__WEBPACK_IMPORTED_MODULE_12__.DemoComponent,
          data: {
            label: 'Kitchen sink'
          }
        }, {
          path: 'async-events',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_common___ivy_ngcc___fesm2015_http_js-projects_demos_app_demo-mod-c4efce"), __webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_async-events_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/async-events/module */
            27055)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Async events'
          }
        }, {
          path: 'optional-event-end-dates',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_optional-event-end-dates_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/optional-event-end-dates/module */
            91641)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Optional event end dates'
          }
        }, {
          path: 'editable-deletable-events',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_editable-deletable-events_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/editable-deletable-events/module */
            37314)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Editable / deletable events'
          }
        }, {
          path: 'draggable-events',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_draggable-events_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/draggable-events/module */
            73539)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Draggable events'
          }
        }, {
          path: 'resizable-events',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_resizable-events_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/resizable-events/module */
            25030)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Resizable events'
          }
        }, {
          path: 'month-view-badge-total',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_month-view-badge-total_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/month-view-badge-total/module */
            64899)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Month view badge total'
          }
        }, {
          path: 'recurring-events',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-projects_angular-calendar_src_date-adapters_moment_index_ts-projects_demos_app_demo-m-ece9c3"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_recurring-events_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/recurring-events/module */
            9808)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Recurring events'
          }
        }, {
          path: 'custom-event-class',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_custom-event-class_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/custom-event-class/module */
            58162)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Custom event class'
          }
        }, {
          path: 'clickable-events',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_clickable-events_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/clickable-events/module */
            90972)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Clickable events'
          }
        }, {
          path: 'clickable-days',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "projects_demos_app_demo-modules_clickable-days_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/clickable-days/module */
            37271)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Clickable times'
          }
        }, {
          path: 'custom-hour-duration',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "projects_demos_app_demo-modules_custom-hour-duration_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/custom-hour-duration/module */
            75097)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Custom hour duration'
          }
        }, {
          path: 'day-view-start-end',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "projects_demos_app_demo-modules_day-view-start-end_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/day-view-start-end/module */
            81599)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Day view start / end time'
          }
        }, {
          path: 'day-view-hour-split',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "projects_demos_app_demo-modules_day-view-hour-split_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/day-view-hour-split/module */
            70578)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Day view hour split'
          }
        }, {
          path: 'navigating-between-views',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "projects_demos_app_demo-modules_navigating-between-views_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/navigating-between-views/module */
            97613)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Navigating between views'
          }
        }, {
          path: 'before-view-render',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "projects_demos_app_demo-modules_before-view-render_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/before-view-render/module */
            46170)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Before view render',
            tags: ['disable']
          }
        }, {
          path: 'exclude-days',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_exclude-days_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/exclude-days/module */
            71471)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Exclude Weekends'
          }
        }, {
          path: 'i18n',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "projects_demos_app_demo-modules_i18n_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/i18n/module */
            56087)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Internationalisation',
            tags: ['translation', 'i18n', 'translate', 'locale']
          }
        }, {
          path: 'draggable-external-events',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_draggable-external-events_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/draggable-external-events/module */
            53857)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Draggable external events'
          }
        }, {
          path: 'all-day-events',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_all-day-events_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/all-day-events/module */
            58628)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'All day events'
          }
        }, {
          path: 'customise-date-formats',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "projects_demos_app_demo-modules_customise-date-formats_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/customise-date-formats/module */
            600)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Customise date formats'
          }
        }, {
          path: 'show-dates-on-titles',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_show-dates-on-titles_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/show-dates-on-titles/module */
            15188)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Show dates on title'
          }
        }, {
          path: 'disable-tooltips',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_disable-tooltips_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/disable-tooltips/module */
            71645)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Disable tooltips'
          }
        }, {
          path: 'additional-event-properties',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_additional-event-properties_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/additional-event-properties/module */
            40850)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Additional event properties'
          }
        }, {
          path: 'selectable-period',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "projects_demos_app_demo-modules_selectable-period_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/selectable-period/module */
            31478)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Selectable period'
          }
        }, {
          path: 'min-max-date',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "projects_demos_app_demo-modules_min-max-date_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/min-max-date/module */
            54962)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Min max date'
          }
        }, {
          path: 'refreshing-the-view',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "projects_demos_app_demo-modules_refreshing-the-view_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/refreshing-the-view/module */
            96251)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Refreshing the view'
          }
        }, {
          path: 'custom-templates',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "projects_demos_app_demo-modules_custom-templates_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/custom-templates/module */
            18243)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Custom templates'
          }
        }, {
          path: 'group-similar-events',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_group-similar-events_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/group-similar-events/module */
            80510)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Group similar events'
          }
        }, {
          path: 'context-menu',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_cdk___ivy_ngcc___fesm2015_platform_js-node_modules_angular_cdk_f-54439e"), __webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_context-menu_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/context-menu/module */
            56910)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Context menu',
            tags: ['right click']
          }
        }, {
          path: 'week-view-minute-precision',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_week-view-minute-precision_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/week-view-minute-precision/module */
            22687)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Week view minute precision'
          }
        }, {
          path: 'extra-month-view-weeks',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "projects_demos_app_demo-modules_extra-month-view-weeks_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/extra-month-view-weeks/module */
            83561)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Extra month view weeks'
          }
        }, {
          path: 'disable-slide-animation',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_disable-slide-animation_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/disable-slide-animation/module */
            30710)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Disable slide animation'
          }
        }, {
          path: 'no-events-label',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_no-events-label_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/no-events-label/module */
            73265)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'No events label'
          }
        }, {
          path: 'moment',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-projects_angular-calendar_src_date-adapters_moment_index_ts-projects_demos_app_demo-m-ece9c3"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("projects_demos_app_demo-modules_moment_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/moment/module */
            81900)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Use moment'
          }
        }, {
          path: 'dayjs',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-projects_angular-calendar_src_date-adapters_moment_index_ts-projects_demos_app_demo-m-ece9c3"), __webpack_require__.e("projects_demos_app_demo-modules_dayjs_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/dayjs/module */
            23657)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Use dayjs'
          }
        }, {
          path: 'day-view-scheduler',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_day-view-scheduler_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/day-view-scheduler/module */
            63270)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Day view scheduler'
          }
        }, {
          path: 'drag-to-create-events',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "projects_demos_app_demo-modules_drag-to-create-events_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/drag-to-create-events/module */
            56304)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Drag to create events'
          }
        }, {
          path: 'responsive-week-view',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_cdk___ivy_ngcc___fesm2015_platform_js-node_modules_angular_cdk_f-54439e"), __webpack_require__.e("projects_demos_app_demo-modules_responsive-week-view_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/responsive-week-view/module */
            74947)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Responsive week view'
          }
        }, {
          path: 'dark-theme',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_dark-theme_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/dark-theme/module */
            26754)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Dark theme',
            darkTheme: true
          }
        }, {
          path: 'week-view-event-margin',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_week-view-event-margin_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/week-view-event-margin/module */
            26388)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Week view event margin'
          }
        }, {
          path: 'customise-current-time-marker',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "projects_demos_app_demo-modules_customise-current-time-marker_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/customise-current-time-marker/module */
            50641)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Customise current time marker'
          }
        }, {
          path: 'public-holidays',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_common___ivy_ngcc___fesm2015_http_js-projects_demos_app_demo-mod-c4efce"), __webpack_require__.e("projects_demos_app_demo-modules_public-holidays_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/public-holidays/module */
            3002)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Public holidays'
          }
        }, {
          path: 'scroll-to-current-time',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "projects_demos_app_demo-modules_scroll-to-current-time_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/scroll-to-current-time/module */
            34415)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Scroll to current time'
          }
        }, {
          path: 'rtl',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_rtl_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/rtl/module */
            47342)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'RTL'
          }
        }, {
          path: 'validate-drag-and-resize',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("projects_demos_app_demo-modules_validate-drag-and-resize_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./demo-modules/validate-drag-and-resize/module */
            1617)).then(function (m) {
              return m.DemoModule;
            });
          },
          data: {
            label: 'Validate dragging and resizing'
          }
        }, {
          path: '**',
          redirectTo: 'kitchen-sink'
        }], {
          useHash: true,
          relativeLinkResolution: 'legacy'
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_DemoAppModule, {
          declarations: [_demo_app_component__WEBPACK_IMPORTED_MODULE_1__.DemoAppComponent, _carbon_ad_carbon_ad_component__WEBPACK_IMPORTED_MODULE_13__.CarbonAdComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbCollapseModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbTooltipModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__.DragAndDropModule, angulartics2__WEBPACK_IMPORTED_MODULE_7__.Angulartics2Module, ngx_clipboard__WEBPACK_IMPORTED_MODULE_9__.ClipboardModule, _demo_modules_kitchen_sink_module__WEBPACK_IMPORTED_MODULE_10__.DemoModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    15721: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "sources": function sources() {
          return (
            /* binding */
            _sources
          );
        }
        /* harmony export */

      });

      var _sources = [{
        filename: 'calendar-header.component.ts',
        contents: {
          raw: __webpack_require__(
          /*! !!raw-loader!./calendar-header.component */
          74034),
          highlighted: __webpack_require__(
          /*! !!raw-loader!highlightjs-loader?lang=typescript!./calendar-header.component */
          63980)
        }
      }, {
        filename: 'colors.ts',
        contents: {
          raw: __webpack_require__(
          /*! !!raw-loader!./colors */
          43099),
          highlighted: __webpack_require__(
          /*! !!raw-loader!highlightjs-loader?lang=typescript!./colors */
          64096)
        }
      }, {
        filename: 'module.ts',
        contents: {
          raw: __webpack_require__(
          /*! !!raw-loader!./module */
          92328),
          highlighted: __webpack_require__(
          /*! !!raw-loader!highlightjs-loader?lang=typescript!./module */
          71320)
        }
      }];
      /***/
    },

    /***/
    79362: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

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


      var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! date-fns */
      12260);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! date-fns */
      66186);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! date-fns */
      5660);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! date-fns */
      64005);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! date-fns */
      24480);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! date-fns */
      28269);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! date-fns */
      77326);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! date-fns */
      88703);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      50931);
      /* harmony import */


      var angular_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular-calendar */
      4606);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var _angular_calendar_src_modules_common_calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/common/calendar-previous-view.directive */
      31726);
      /* harmony import */


      var _angular_calendar_src_modules_common_calendar_today_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/common/calendar-today.directive */
      22167);
      /* harmony import */


      var _angular_calendar_src_modules_common_calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/common/calendar-next-view.directive */
      60897);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_calendar_src_modules_month_calendar_month_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/month/calendar-month-view.component */
      21426);
      /* harmony import */


      var _angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/week/calendar-week-view.component */
      1913);
      /* harmony import */


      var _angular_calendar_src_modules_day_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/day/calendar-day-view.component */
      50811);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! angularx-flatpickr */
      76537);
      /* harmony import */


      var _angular_calendar_src_modules_common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/common/calendar-date.pipe */
      12153);

      var _c0 = ["modalContent"];

      function DemoComponent_mwl_calendar_month_view_44_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-month-view", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dayClicked", function DemoComponent_mwl_calendar_month_view_44_Template_mwl_calendar_month_view_dayClicked_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.dayClicked($event.day);
          })("eventClicked", function DemoComponent_mwl_calendar_month_view_44_Template_mwl_calendar_month_view_eventClicked_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.handleEvent("Clicked", $event.event);
          })("eventTimesChanged", function DemoComponent_mwl_calendar_month_view_44_Template_mwl_calendar_month_view_eventTimesChanged_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.eventTimesChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r0.viewDate)("events", ctx_r0.events)("refresh", ctx_r0.refresh)("activeDayIsOpen", ctx_r0.activeDayIsOpen);
        }
      }

      function DemoComponent_mwl_calendar_week_view_46_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-week-view", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventClicked", function DemoComponent_mwl_calendar_week_view_46_Template_mwl_calendar_week_view_eventClicked_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.handleEvent("Clicked", $event.event);
          })("eventTimesChanged", function DemoComponent_mwl_calendar_week_view_46_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.eventTimesChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r1.viewDate)("events", ctx_r1.events)("refresh", ctx_r1.refresh);
        }
      }

      function DemoComponent_mwl_calendar_day_view_48_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-day-view", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventClicked", function DemoComponent_mwl_calendar_day_view_48_Template_mwl_calendar_day_view_eventClicked_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.handleEvent("Clicked", $event.event);
          })("eventTimesChanged", function DemoComponent_mwl_calendar_day_view_48_Template_mwl_calendar_day_view_eventTimesChanged_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.eventTimesChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r2.viewDate)("events", ctx_r2.events)("refresh", ctx_r2.refresh);
        }
      }

      function DemoComponent_tr_94_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DemoComponent_tr_94_Template_input_ngModelChange_4_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var event_r16 = restoredCtx.$implicit;
            return event_r16.title = $event;
          })("keyup", function DemoComponent_tr_94_Template_input_keyup_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.refresh.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DemoComponent_tr_94_Template_input_ngModelChange_9_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var event_r16 = restoredCtx.$implicit;
            return event_r16.color.primary = $event;
          })("change", function DemoComponent_tr_94_Template_input_change_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.refresh.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DemoComponent_tr_94_Template_input_ngModelChange_14_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var event_r16 = restoredCtx.$implicit;
            return event_r16.color.secondary = $event;
          })("change", function DemoComponent_tr_94_Template_input_change_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.refresh.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DemoComponent_tr_94_Template_input_ngModelChange_19_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var event_r16 = restoredCtx.$implicit;
            return event_r16.start = $event;
          })("ngModelChange", function DemoComponent_tr_94_Template_input_ngModelChange_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r25.refresh.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DemoComponent_tr_94_Template_input_ngModelChange_24_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var event_r16 = restoredCtx.$implicit;
            return event_r16.end = $event;
          })("ngModelChange", function DemoComponent_tr_94_Template_input_ngModelChange_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.refresh.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoComponent_tr_94_Template_button_click_29_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var event_r16 = restoredCtx.$implicit;

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r28.deleteEvent(event_r16);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n            Delete\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var event_r16 = ctx.$implicit;

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
        }
      }

      function DemoComponent_ng_template_99_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Event action occurred");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoComponent_ng_template_99_Template_button_click_6_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var close_r29 = restoredCtx.close;
            return close_r29();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\xD7");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoComponent_ng_template_99_Template_button_click_31_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var close_r29 = restoredCtx.close;
            return close_r29();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n      OK\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n");
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.modalData == null ? null : ctx_r5.modalData.action);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 2, ctx_r5.modalData == null ? null : ctx_r5.modalData.event));
        }
      }

      var colors = {
        red: {
          primary: '#ad2121',
          secondary: '#FAE3E3'
        },
        blue: {
          primary: '#1e90ff',
          secondary: '#D1E8FF'
        },
        yellow: {
          primary: '#e3bc08',
          secondary: '#FDF1BA'
        }
      };

      var _DemoComponent = /*#__PURE__*/function () {
        function _DemoComponent(modal) {
          var _this18 = this;

          _classCallCheck(this, _DemoComponent);

          this.modal = modal;
          this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_1__.CalendarView.Month;
          this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_1__.CalendarView;
          this.viewDate = new Date();
          this.actions = [{
            label: '<i class="fas fa-fw fa-pencil-alt"></i>',
            a11yLabel: 'Edit',
            onClick: function onClick(_ref43) {
              var event = _ref43.event;

              _this18.handleEvent('Edited', event);
            }
          }, {
            label: '<i class="fas fa-fw fa-trash-alt"></i>',
            a11yLabel: 'Delete',
            onClick: function onClick(_ref44) {
              var event = _ref44.event;
              _this18.events = _this18.events.filter(function (iEvent) {
                return iEvent !== event;
              });

              _this18.handleEvent('Deleted', event);
            }
          }];
          this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
          this.events = [{
            start: (0, date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date()), 1),
            end: (0, date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(), 1),
            title: 'A 3 day event',
            color: colors.red,
            actions: this.actions,
            allDay: true,
            resizable: {
              beforeStart: true,
              afterEnd: true
            },
            draggable: true
          }, {
            start: (0, date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date()),
            title: 'An event with no end date',
            color: colors.yellow,
            actions: this.actions
          }, {
            start: (0, date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date()), 3),
            end: (0, date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date()), 3),
            title: 'A long event that spans 2 months',
            color: colors.blue,
            allDay: true
          }, {
            start: (0, date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date()), 2),
            end: (0, date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(new Date(), 2),
            title: 'A draggable and resizable event',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
              beforeStart: true,
              afterEnd: true
            },
            draggable: true
          }];
          this.activeDayIsOpen = true;
        }

        _createClass(_DemoComponent, [{
          key: "dayClicked",
          value: function dayClicked(_ref45) {
            var date = _ref45.date,
                events = _ref45.events;

            if ((0, date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(date, this.viewDate)) {
              if ((0, date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(this.viewDate, date) && this.activeDayIsOpen === true || events.length === 0) {
                this.activeDayIsOpen = false;
              } else {
                this.activeDayIsOpen = true;
              }

              this.viewDate = date;
            }
          }
        }, {
          key: "eventTimesChanged",
          value: function eventTimesChanged(_ref46) {
            var event = _ref46.event,
                newStart = _ref46.newStart,
                newEnd = _ref46.newEnd;
            this.events = this.events.map(function (iEvent) {
              if (iEvent === event) {
                return Object.assign(Object.assign({}, event), {
                  start: newStart,
                  end: newEnd
                });
              }

              return iEvent;
            });
            this.handleEvent('Dropped or resized', event);
          }
        }, {
          key: "handleEvent",
          value: function handleEvent(action, event) {
            this.modalData = {
              event: event,
              action: action
            };
            this.modal.open(this.modalContent, {
              size: 'lg'
            });
          }
        }, {
          key: "addEvent",
          value: function addEvent() {
            this.events = [].concat(_toConsumableArray(this.events), [{
              title: 'New event',
              start: (0, date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date()),
              end: (0, date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(new Date()),
              color: colors.red,
              draggable: true,
              resizable: {
                beforeStart: true,
                afterEnd: true
              }
            }]);
          }
        }, {
          key: "deleteEvent",
          value: function deleteEvent(eventToDelete) {
            this.events = this.events.filter(function (event) {
              return event !== eventToDelete;
            });
          }
        }, {
          key: "setView",
          value: function setView(view) {
            this.view = view;
          }
        }, {
          key: "closeOpenMonthViewDay",
          value: function closeOpenMonthViewDay() {
            this.activeDayIsOpen = false;
          }
        }]);

        return _DemoComponent;
      }();

      _DemoComponent.ɵfac = function DemoComponent_Factory(t) {
        return new (t || _DemoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModal));
      };

      _DemoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _DemoComponent,
        selectors: [["mwl-demo-component"]],
        viewQuery: function DemoComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modalContent = _t.first);
          }
        },
        decls: 102,
        vars: 21,
        consts: [[1, "row", "text-center"], [1, "col-md-4"], [1, "btn-group"], ["mwlCalendarPreviousView", "", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], ["mwlCalendarToday", "", 1, "btn", "btn-outline-secondary", 3, "viewDate", "viewDateChange"], ["mwlCalendarNextView", "", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], [1, "btn", "btn-primary", 3, "click"], [3, "ngSwitch"], [3, "viewDate", "events", "refresh", "activeDayIsOpen", "dayClicked", "eventClicked", "eventTimesChanged", 4, "ngSwitchCase"], [3, "viewDate", "events", "refresh", "eventClicked", "eventTimesChanged", 4, "ngSwitchCase"], [1, "btn", "btn-primary", "float-right", 3, "click"], [1, "clearfix"], [1, "table-responsive"], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], ["modalContent", ""], [3, "viewDate", "events", "refresh", "activeDayIsOpen", "dayClicked", "eventClicked", "eventTimesChanged"], [3, "viewDate", "events", "refresh", "eventClicked", "eventTimesChanged"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["type", "color", 3, "ngModel", "ngModelChange", "change"], ["type", "text", "mwlFlatpickr", "", "dateFormat", "Y-m-dTH:i", "altFormat", "F j, Y H:i", "placeholder", "Not set", 1, "form-control", 3, "ngModel", "altInput", "convertModelValue", "enableTime", "ngModelChange"], [1, "btn", "btn-danger", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"]],
        template: function DemoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function DemoComponent_Template_div_viewDateChange_6_listener($event) {
              return ctx.viewDate = $event;
            })("viewDateChange", function DemoComponent_Template_div_viewDateChange_6_listener() {
              return ctx.closeOpenMonthViewDay();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n        Previous\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function DemoComponent_Template_div_viewDateChange_9_listener($event) {
              return ctx.viewDate = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n        Today\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function DemoComponent_Template_div_viewDateChange_12_listener($event) {
              return ctx.viewDate = $event;
            })("viewDateChange", function DemoComponent_Template_div_viewDateChange_12_listener() {
              return ctx.closeOpenMonthViewDay();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoComponent_Template_div_click_28_listener() {
              return ctx.setView(ctx.CalendarView.Month);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n        Month\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoComponent_Template_div_click_31_listener() {
              return ctx.setView(ctx.CalendarView.Week);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n        Week\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoComponent_Template_div_click_34_listener() {
              return ctx.setView(ctx.CalendarView.Day);
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoComponent_Template_button_click_58_listener() {
              return ctx.addEvent();
            });

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
          }

          if (rf & 2) {
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
          }
        },
        directives: [_angular_calendar_src_modules_common_calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_12__.CalendarPreviousViewDirective, _angular_calendar_src_modules_common_calendar_today_directive__WEBPACK_IMPORTED_MODULE_13__.CalendarTodayDirective, _angular_calendar_src_modules_common_calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_14__.CalendarNextViewDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_calendar_src_modules_month_calendar_month_view_component__WEBPACK_IMPORTED_MODULE_16__.CalendarMonthViewComponent, _angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_17__.CalendarWeekViewComponent, _angular_calendar_src_modules_day_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_18__.CalendarDayViewComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgModel, angularx_flatpickr__WEBPACK_IMPORTED_MODULE_20__.FlatpickrDirective],
        pipes: [_angular_calendar_src_modules_common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_21__.CalendarDatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.JsonPipe],
        styles: ["h3[_ngcontent-%COMP%] {\n        margin: 0 0 10px;\n      }\n\n      pre[_ngcontent-%COMP%] {\n        background-color: #f5f5f5;\n        padding: 15px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxnQkFBZ0I7TUFDbEI7O01BRUE7UUFDRSx5QkFBeUI7UUFDekIsYUFBYTtNQUNmIiwiZmlsZSI6ImNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgaDMge1xuICAgICAgICBtYXJnaW46IDAgMCAxMHB4O1xuICAgICAgfVxuXG4gICAgICBwcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgfVxuICAgICJdfQ== */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    18582: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angularx-flatpickr */
      76537);
      /* harmony import */


      var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/calendar.module */
      3746);
      /* harmony import */


      var angular_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular-calendar */
      90008);
      /* harmony import */


      var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angular-calendar/date-adapters/date-fns */
      20789);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var _component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./component */
      79362);
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
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModalModule, angularx_flatpickr__WEBPACK_IMPORTED_MODULE_4__.FlatpickrModule.forRoot(), angular_calendar__WEBPACK_IMPORTED_MODULE_5__.CalendarModule.forRoot({
          provide: angular_calendar__WEBPACK_IMPORTED_MODULE_6__.DateAdapter,
          useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_7__.adapterFactory
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_DemoModule, {
          declarations: [_component__WEBPACK_IMPORTED_MODULE_8__.DemoComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModalModule, angularx_flatpickr__WEBPACK_IMPORTED_MODULE_4__.FlatpickrModule, angular_calendar__WEBPACK_IMPORTED_MODULE_5__.CalendarModule],
          exports: [_component__WEBPACK_IMPORTED_MODULE_8__.DemoComponent]
        });
      })();
      /***/

    },

    /***/
    56321: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * In development mode, for easier debugging, you can ignore zone related error
       * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
       * below file. Don't forget to comment it out in production mode
       * because it will have a performance impact when errors are thrown
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    73747: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _app_demo_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app/demo-app.module */
      80495);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./environments/environment */
      56321);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.platformBrowser().bootstrapModule(_app_demo_app_module__WEBPACK_IMPORTED_MODULE_3__.DemoAppModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/

    },

    /***/
    63980: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Input, Output, EventEmitter } from '@angular/core';\nimport { CalendarView } from 'angular-calendar';\n\n@Component({\n  selector: 'mwl-demo-utils-calendar-header',\n  template: `\n    &lt;div class=\"row text-center\"&gt;\n      &lt;div class=\"col-md-4\"&gt;\n        &lt;div class=\"btn-group\"&gt;\n          &lt;div\n            class=\"btn btn-primary\"\n            mwlCalendarPreviousView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\"\n          &gt;\n            Previous\n          &lt;/div&gt;\n          &lt;div\n            class=\"btn btn-outline-secondary\"\n            mwlCalendarToday\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\"\n          &gt;\n            Today\n          &lt;/div&gt;\n          &lt;div\n            class=\"btn btn-primary\"\n            mwlCalendarNextView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\"\n          &gt;\n            Next\n          &lt;/div&gt;\n        &lt;/div&gt;\n      &lt;/div&gt;\n      &lt;div class=\"col-md-4\"&gt;\n        &lt;h3&gt;{{ viewDate | calendarDate: view + 'ViewTitle':locale }}&lt;/h3&gt;\n      &lt;/div&gt;\n      &lt;div class=\"col-md-4\"&gt;\n        &lt;div class=\"btn-group\"&gt;\n          &lt;div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit(CalendarView.Month)\"\n            [class.active]=\"view === CalendarView.Month\"\n          &gt;\n            Month\n          &lt;/div&gt;\n          &lt;div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit(CalendarView.Week)\"\n            [class.active]=\"view === CalendarView.Week\"\n          &gt;\n            Week\n          &lt;/div&gt;\n          &lt;div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit(CalendarView.Day)\"\n            [class.active]=\"view === CalendarView.Day\"\n          &gt;\n            Day\n          &lt;/div&gt;\n        &lt;/div&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;br /&gt;\n  `,\n})\nexport class CalendarHeaderComponent {\n  @Input() view: CalendarView;\n\n  @Input() viewDate: Date;\n\n  @Input() locale: string = 'en';\n\n  @Output() viewChange = new EventEmitter&lt;CalendarView&gt;();\n\n  @Output() viewDateChange = new EventEmitter&lt;Date&gt;();\n\n  CalendarView = CalendarView;\n}\n";
      /***/
    },

    /***/
    64096: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">const</span> colors: <span class=\"hljs-built_in\">any</span> = {\n  red: {\n    primary: <span class=\"hljs-string\">'#ad2121'</span>,\n    secondary: <span class=\"hljs-string\">'#FAE3E3'</span>,\n  },\n  blue: {\n    primary: <span class=\"hljs-string\">'#1e90ff'</span>,\n    secondary: <span class=\"hljs-string\">'#D1E8FF'</span>,\n  },\n  yellow: {\n    primary: <span class=\"hljs-string\">'#e3bc08'</span>,\n    secondary: <span class=\"hljs-string\">'#FDF1BA'</span>,\n  },\n};\n";
      /***/
    },

    /***/
    71320: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span class=\"hljs-keyword\">import</span> { NgModule } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CommonModule } from <span class=\"hljs-string\">'@angular/common'</span>;\n<span class=\"hljs-keyword\">import</span> { FormsModule } from <span class=\"hljs-string\">'@angular/forms'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarModule } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarHeaderComponent } from <span class=\"hljs-string\">'./calendar-header.component'</span>;\n\n@NgModule({\n  imports: [CommonModule, FormsModule, CalendarModule],\n  declarations: [CalendarHeaderComponent],\n  exports: [CalendarHeaderComponent],\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoUtilsModule {}\n";
      /***/
    },

    /***/
    74034: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Input, Output, EventEmitter } from '@angular/core';\nimport { CalendarView } from 'angular-calendar';\n\n@Component({\n  selector: 'mwl-demo-utils-calendar-header',\n  template: `\n    <div class=\"row text-center\">\n      <div class=\"col-md-4\">\n        <div class=\"btn-group\">\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarPreviousView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\"\n          >\n            Previous\n          </div>\n          <div\n            class=\"btn btn-outline-secondary\"\n            mwlCalendarToday\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\"\n          >\n            Today\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarNextView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\"\n          >\n            Next\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <h3>{{ viewDate | calendarDate: view + 'ViewTitle':locale }}</h3>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"btn-group\">\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit(CalendarView.Month)\"\n            [class.active]=\"view === CalendarView.Month\"\n          >\n            Month\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit(CalendarView.Week)\"\n            [class.active]=\"view === CalendarView.Week\"\n          >\n            Week\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit(CalendarView.Day)\"\n            [class.active]=\"view === CalendarView.Day\"\n          >\n            Day\n          </div>\n        </div>\n      </div>\n    </div>\n    <br />\n  `,\n})\nexport class CalendarHeaderComponent {\n  @Input() view: CalendarView;\n\n  @Input() viewDate: Date;\n\n  @Input() locale: string = 'en';\n\n  @Output() viewChange = new EventEmitter<CalendarView>();\n\n  @Output() viewDateChange = new EventEmitter<Date>();\n\n  CalendarView = CalendarView;\n}\n";
      /***/
    },

    /***/
    43099: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "export const colors: any = {\n  red: {\n    primary: '#ad2121',\n    secondary: '#FAE3E3',\n  },\n  blue: {\n    primary: '#1e90ff',\n    secondary: '#D1E8FF',\n  },\n  yellow: {\n    primary: '#e3bc08',\n    secondary: '#FDF1BA',\n  },\n};\n";
      /***/
    },

    /***/
    92328: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { FormsModule } from '@angular/forms';\nimport { CalendarModule } from 'angular-calendar';\nimport { CalendarHeaderComponent } from './calendar-header.component';\n\n@NgModule({\n  imports: [CommonModule, FormsModule, CalendarModule],\n  declarations: [CalendarHeaderComponent],\n  exports: [CalendarHeaderComponent],\n})\nexport class DemoUtilsModule {}\n";
      /***/
    },

    /***/
    64251: function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./additional-event-properties/sources.ts": [84848, "projects_demos_app_demo-modules_additional-event-properties_sources_ts"],
        "./all-day-events/sources.ts": [19231, "projects_demos_app_demo-modules_all-day-events_sources_ts"],
        "./async-events/sources.ts": [29776, "projects_demos_app_demo-modules_async-events_sources_ts"],
        "./before-view-render/sources.ts": [64184, "projects_demos_app_demo-modules_before-view-render_sources_ts"],
        "./clickable-days/sources.ts": [97097, "projects_demos_app_demo-modules_clickable-days_sources_ts"],
        "./clickable-events/sources.ts": [57296, "projects_demos_app_demo-modules_clickable-events_sources_ts"],
        "./context-menu/sources.ts": [68822, "projects_demos_app_demo-modules_context-menu_sources_ts"],
        "./custom-event-class/sources.ts": [36385, "projects_demos_app_demo-modules_custom-event-class_sources_ts"],
        "./custom-hour-duration/sources.ts": [21525, "projects_demos_app_demo-modules_custom-hour-duration_sources_ts"],
        "./custom-templates/sources.ts": [4425, "projects_demos_app_demo-modules_custom-templates_sources_ts"],
        "./customise-current-time-marker/sources.ts": [40636, "projects_demos_app_demo-modules_customise-current-time-marker_sources_ts"],
        "./customise-date-formats/sources.ts": [19158, "projects_demos_app_demo-modules_customise-date-formats_sources_ts"],
        "./dark-theme/sources.ts": [57263, "projects_demos_app_demo-modules_dark-theme_sources_ts"],
        "./day-view-hour-split/sources.ts": [29097, "projects_demos_app_demo-modules_day-view-hour-split_sources_ts"],
        "./day-view-scheduler/sources.ts": [80912, "projects_demos_app_demo-modules_day-view-scheduler_sources_ts"],
        "./day-view-start-end/sources.ts": [90400, "projects_demos_app_demo-modules_day-view-start-end_sources_ts"],
        "./dayjs/sources.ts": [86552, "projects_demos_app_demo-modules_dayjs_sources_ts"],
        "./demo-utils/sources.ts": [15721],
        "./disable-slide-animation/sources.ts": [42850, "projects_demos_app_demo-modules_disable-slide-animation_sources_ts"],
        "./disable-tooltips/sources.ts": [92340, "projects_demos_app_demo-modules_disable-tooltips_sources_ts"],
        "./drag-to-create-events/sources.ts": [21753, "projects_demos_app_demo-modules_drag-to-create-events_sources_ts"],
        "./draggable-events/sources.ts": [26601, "projects_demos_app_demo-modules_draggable-events_sources_ts"],
        "./draggable-external-events/sources.ts": [62785, "projects_demos_app_demo-modules_draggable-external-events_sources_ts"],
        "./editable-deletable-events/sources.ts": [42118, "projects_demos_app_demo-modules_editable-deletable-events_sources_ts"],
        "./exclude-days/sources.ts": [14751, "projects_demos_app_demo-modules_exclude-days_sources_ts"],
        "./extra-month-view-weeks/sources.ts": [42490, "projects_demos_app_demo-modules_extra-month-view-weeks_sources_ts"],
        "./group-similar-events/sources.ts": [14657, "projects_demos_app_demo-modules_group-similar-events_sources_ts"],
        "./i18n/sources.ts": [3565, "projects_demos_app_demo-modules_i18n_sources_ts"],
        "./kitchen-sink/sources.ts": [20283, "projects_demos_app_demo-modules_kitchen-sink_sources_ts"],
        "./min-max-date/sources.ts": [73345, "projects_demos_app_demo-modules_min-max-date_sources_ts"],
        "./moment/sources.ts": [72646, "projects_demos_app_demo-modules_moment_sources_ts"],
        "./month-view-badge-total/sources.ts": [57408, "projects_demos_app_demo-modules_month-view-badge-total_sources_ts"],
        "./navigating-between-views/sources.ts": [60281, "projects_demos_app_demo-modules_navigating-between-views_sources_ts"],
        "./no-events-label/sources.ts": [99099, "projects_demos_app_demo-modules_no-events-label_sources_ts"],
        "./optional-event-end-dates/sources.ts": [76718, "projects_demos_app_demo-modules_optional-event-end-dates_sources_ts"],
        "./public-holidays/sources.ts": [29114, "projects_demos_app_demo-modules_public-holidays_sources_ts"],
        "./recurring-events/sources.ts": [76806, "projects_demos_app_demo-modules_recurring-events_sources_ts"],
        "./refreshing-the-view/sources.ts": [96812, "projects_demos_app_demo-modules_refreshing-the-view_sources_ts"],
        "./resizable-events/sources.ts": [65147, "projects_demos_app_demo-modules_resizable-events_sources_ts"],
        "./responsive-week-view/sources.ts": [5300, "projects_demos_app_demo-modules_responsive-week-view_sources_ts"],
        "./rtl/sources.ts": [63245, "projects_demos_app_demo-modules_rtl_sources_ts"],
        "./scroll-to-current-time/sources.ts": [53259, "projects_demos_app_demo-modules_scroll-to-current-time_sources_ts"],
        "./selectable-period/sources.ts": [76157, "projects_demos_app_demo-modules_selectable-period_sources_ts"],
        "./show-dates-on-titles/sources.ts": [57443, "projects_demos_app_demo-modules_show-dates-on-titles_sources_ts"],
        "./validate-drag-and-resize/sources.ts": [46456, "projects_demos_app_demo-modules_validate-drag-and-resize_sources_ts"],
        "./week-view-event-margin/sources.ts": [70538, "projects_demos_app_demo-modules_week-view-event-margin_sources_ts"],
        "./week-view-minute-precision/sources.ts": [64185, "projects_demos_app_demo-modules_week-view-minute-precision_sources_ts"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function () {
        return Object.keys(map);
      };

      webpackAsyncContext.id = 64251;
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    4147: function _(module) {
      "use strict";

      module.exports = JSON.parse('{"name":"angular-calendar","version":"0.29.0","description":"A calendar component for angular 12.0+ that can display events on a month, week or day view","funding":{"url":"https://github.com/sponsors/mattlewis92"},"scripts":{"node:memory":"cross-env NODE_OPTIONS=--max_old_space_size=8192","start":"npm run node:memory -- ng serve --open","build:copy-package-json":"copyfiles package.json projects/angular-calendar & copyfiles package.json projects/angular-calendar/schematics/ng-add","build:lib":"ng build angular-calendar --configuration production","build:date-adapters":"tsc -p tsconfig-date-adapters.json && tsc -p tsconfig-date-adapters.json --module es2015 --outDir ./dist/angular-calendar/date-adapters/esm","build:styles":"sass projects/angular-calendar/src/angular-calendar.scss | postcss --output dist/angular-calendar/css/angular-calendar.css","build:clean":"del-cli dist","build:schematics":"tsc projects/angular-calendar/schematics/ng-add/index.ts","build:copyfiles":"copyfiles CHANGELOG.md README.md LICENSE dist/angular-calendar & cp-cli projects/angular-calendar/util/date-adapter-package-date-fns.json dist/angular-calendar/date-adapters/date-fns/package.json & cp-cli projects/angular-calendar/util/date-adapter-package-moment.json dist/angular-calendar/date-adapters/moment/package.json & copyfiles -u 3 projects/angular-calendar/src/**/*.scss dist/angular-calendar/scss & npx copyfiles -u 2 \\"projects/angular-calendar/schematics/**/*.{json,js}\\" dist/angular-calendar","build":"run-s build:copy-package-json build:lib build:date-adapters build:styles build:schematics build:copyfiles","test:single":"cross-env TZ=UTC ng test angular-calendar --watch=false --code-coverage","test:watch":"cross-env TZ=UTC ng test angular-calendar","test:schematics":"cross-env TS_NODE_COMPILER_OPTIONS={\\\\\\"module\\\\\\":\\\\\\"commonjs\\\\\\"} TS_NODE_PREFER_TS_EXTS=true mocha --require ts-node/register projects/angular-calendar/schematics/**/*.spec.ts","test":"run-s lint test:single test:schematics build build:clean","lint:styles":"stylelint \\"{projects,src}/**/*.scss\\" --fix","lint:ts":"ng lint","lint":"run-s lint:ts lint:styles","commit":"git-cz","codecov":"codecov","prerelease":"npm test","pretest:schematics":"npm run build:copy-package-json","release:git-add":"git add package.json package-lock.json","release:git-commit":"git commit -m \'chore: bump version number\'","release:git-changelog":"standard-version --first-release","release:git-push":"git push --follow-tags origin master","release:git":"run-s release:git-add release:git-commit release:git-changelog release:git-push","release:npm-publish":"npm publish dist/angular-calendar","release:npm":"run-s build release:npm-publish","release":"run-s release:git release:npm","postrelease":"npm run gh-pages","gh-pages:demos":"ng build --configuration production","gh-pages:compodoc":"compodoc -p tsconfig-compodoc.json -d dist/demos/docs --disableGraph --disableCoverage --disablePrivate --disableInternal --disableLifeCycleHooks --disableProtected --gaID UA-63367573-2","gh-pages:deploy":"ng deploy","gh-pages":"run-s build:clean gh-pages:demos gh-pages:compodoc gh-pages:deploy build:clean","prepare":"husky install"},"schematics":"./schematics/collection.json","config":{"commitizen":{"path":"@commitlint/prompt"}},"commitlint":{"extends":["@commitlint/config-conventional"]},"repository":{"type":"git","url":"git+https://github.com/mattlewis92/angular-calendar.git"},"keywords":["angular","angular2","calendar","schematics"],"author":"Matt Lewis","license":"MIT","bugs":{"url":"https://github.com/mattlewis92/angular-calendar/issues"},"homepage":"https://github.com/mattlewis92/angular-calendar#readme","devDependencies":{"@angular-devkit/build-angular":"^12.2.3","@angular-eslint/builder":"12.3.1","@angular-eslint/eslint-plugin":"12.3.1","@angular-eslint/eslint-plugin-template":"12.3.1","@angular-eslint/schematics":"12.3.1","@angular-eslint/template-parser":"12.3.1","@angular/animations":"^12.2.3","@angular/cdk":"^12.2.3","@angular/cli":"^12.2.3","@angular/common":"^12.2.3","@angular/compiler":"^12.2.3","@angular/compiler-cli":"^12.2.3","@angular/core":"^12.2.3","@angular/forms":"^12.2.3","@angular/language-service":"^12.2.3","@angular/localize":"^12.2.3","@angular/platform-browser":"^12.2.3","@angular/platform-browser-dynamic":"^12.2.3","@angular/router":"^12.2.3","@commitlint/cli":"^13.1.0","@commitlint/config-conventional":"^13.1.0","@commitlint/prompt":"^13.1.0","@compodoc/compodoc":"^1.1.14","@fortawesome/fontawesome-free":"^5.15.4","@ng-bootstrap/ng-bootstrap":"^10.0.0","@schematics/angular":"^12.2.3","@sinonjs/fake-timers":"^7.1.2","@stackblitz/sdk":"^1.5.2","@types/chai":"^4.2.21","@types/mocha":"^7.0.2","@types/node":"^16.7.9","@types/sinon":"^10.0.2","@types/sinon-chai":"^3.2.5","@typescript-eslint/eslint-plugin":"^4.30.0","@typescript-eslint/parser":"^4.30.0","angular-cli-ghpages":"^1.0.0-rc.2","angulartics2":"^10.0.0","angularx-flatpickr":"^6.6.0","autoprefixer":"^10.3.3","bootstrap-css-only":"^4.4.1","chai":"^4.3.4","codecov":"^3.8.3","commitizen":"^4.2.4","copyfiles":"^2.4.1","core-js":"^3.16.4","cp-cli":"^2.0.0","cross-env":"^7.0.3","date-fns":"^2.23.0","dayjs":"^1.10.6","del-cli":"^4.0.1","eslint":"^7.26.0","flatpickr":"^4.6.9","highlightjs-loader":"^0.2.3","husky":"^7.0.0","karma":"~6.3.4","karma-chrome-launcher":"~3.1.0","karma-coverage":"^2.0.3","karma-mocha":"^2.0.1","karma-mocha-reporter":"^2.2.5","mocha":"^7.2.0","moment":"^2.29.1","moment-timezone":"^0.5.33","ng-packagr":"^12.2.1","ngx-clipboard":"^14.0.1","ngx-contextmenu":"^6.0.0","npm-run-all":"^4.1.5","postcss":"^8.3.6","postcss-cli":"^8.3.1","postcss-flexibility":"^3.0.0","prettier":"^2.3.2","pretty-quick":"^3.1.1","process":"^0.11.10","raw-loader":"^4.0.2","rrule":"^2.6.8","rxjs":"^7.3.0","sass":"^1.38.2","sinon":"^11.1.2","sinon-chai":"^3.7.0","standard-version":"^9.3.1","stylelint":"^13.13.1","stylelint-config-prettier":"^8.0.2","stylelint-config-standard":"^22.0.0","ts-node":"^10.2.1","typescript":"~4.3.5","util":"^0.12.4","zone.js":"~0.11.4"},"peerDependencies":{"@angular/core":">=10.0.0"},"dependencies":{"@scarf/scarf":"^1.1.1","angular-draggable-droppable":"^6.0.0","angular-resizable-element":"^5.0.0","calendar-utils":"^0.9.0","positioning":"^2.0.1","tslib":"^2.0.0"},"sideEffects":["*.css","*.scss"]}');
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(73747);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map