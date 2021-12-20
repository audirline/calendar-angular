(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkangular_calendar"] = self["webpackChunkangular_calendar"] || []).push([["projects_demos_app_demo-modules_extra-month-view-weeks_module_ts"], {
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
    88551: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyCalendarUtils": function MyCalendarUtils() {
          return (
            /* binding */
            _MyCalendarUtils
          );
        },

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


      var angular_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! angular-calendar */
      27579);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! date-fns */
      81770);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! date-fns */
      25970);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! date-fns */
      48749);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! date-fns */
      64005);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_calendar_src_modules_month_calendar_month_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/month/calendar-month-view.component */
      21426);

      var _MyCalendarUtils = /*#__PURE__*/function (_angular_calendar__WE) {
        _inherits(_MyCalendarUtils, _angular_calendar__WE);

        var _super = _createSuper(_MyCalendarUtils);

        function _MyCalendarUtils() {
          _classCallCheck(this, _MyCalendarUtils);

          return _super.apply(this, arguments);
        }

        _createClass(_MyCalendarUtils, [{
          key: "getMonthView",
          value: function getMonthView(args) {
            args.viewStart = (0, date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(args.viewDate), 1);
            args.viewEnd = (0, date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(args.viewDate), 1);
            return _get(_getPrototypeOf(_MyCalendarUtils.prototype), "getMonthView", this).call(this, args);
          }
        }]);

        return _MyCalendarUtils;
      }(angular_calendar__WEBPACK_IMPORTED_MODULE_0__.CalendarUtils);

      _MyCalendarUtils.ɵfac = /*@__PURE__*/function () {
        var ɵMyCalendarUtils_BaseFactory;
        return function MyCalendarUtils_Factory(t) {
          return (ɵMyCalendarUtils_BaseFactory || (ɵMyCalendarUtils_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](_MyCalendarUtils)))(t || _MyCalendarUtils);
        };
      }();

      _MyCalendarUtils.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: _MyCalendarUtils,
        factory: _MyCalendarUtils.ɵfac
      });

      var _DemoComponent = function _DemoComponent() {
        _classCallCheck(this, _DemoComponent);

        this.viewDate = new Date();
        this.events = [];
      };

      _DemoComponent.ɵfac = function DemoComponent_Factory(t) {
        return new (t || _DemoComponent)();
      };

      _DemoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _DemoComponent,
        selectors: [["mwl-demo-component"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([{
          provide: angular_calendar__WEBPACK_IMPORTED_MODULE_0__.CalendarUtils,
          useClass: _MyCalendarUtils
        }])],
        decls: 3,
        vars: 2,
        consts: [[3, "viewDate", "events"]],
        template: function DemoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mwl-calendar-month-view", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\n");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("viewDate", ctx.viewDate)("events", ctx.events);
          }
        },
        directives: [_angular_calendar_src_modules_month_calendar_month_view_component__WEBPACK_IMPORTED_MODULE_6__.CalendarMonthViewComponent],
        encapsulation: 2,
        changeDetection: 0
      });
      /***/
    },

    /***/
    83561: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
      88551);
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
//# sourceMappingURL=projects_demos_app_demo-modules_extra-month-view-weeks_module_ts-es5.js.map