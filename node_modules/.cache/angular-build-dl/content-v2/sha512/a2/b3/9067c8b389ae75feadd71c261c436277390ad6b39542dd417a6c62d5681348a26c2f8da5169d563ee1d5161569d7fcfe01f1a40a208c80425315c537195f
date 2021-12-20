(function () {
  "use strict";

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkangular_calendar"] = self["webpackChunkangular_calendar"] || []).push([["projects_demos_app_demo-modules_day-view-scheduler_module_ts"], {
    /***/
    72872: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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


      var _demo_utils_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../demo-utils/colors */
      55155);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! date-fns */
      24480);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! date-fns */
      66186);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_calendar_src_modules_common_calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/common/calendar-previous-view.directive */
      31726);
      /* harmony import */


      var _angular_calendar_src_modules_common_calendar_today_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/common/calendar-today.directive */
      22167);
      /* harmony import */


      var _angular_calendar_src_modules_common_calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/common/calendar-next-view.directive */
      60897);
      /* harmony import */


      var _day_view_scheduler_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./day-view-scheduler.component */
      32270);
      /* harmony import */


      var _angular_calendar_src_modules_common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/common/calendar-date.pipe */
      12153);

      var users = [{
        id: 0,
        name: 'John smith',
        color: _demo_utils_colors__WEBPACK_IMPORTED_MODULE_0__.colors.yellow
      }, {
        id: 1,
        name: 'Jane Doe',
        color: _demo_utils_colors__WEBPACK_IMPORTED_MODULE_0__.colors.blue
      }];

      var _DemoComponent = /*#__PURE__*/function () {
        function _DemoComponent() {
          _classCallCheck(this, _DemoComponent);

          this.viewDate = new Date();
          this.users = users;
          this.events = [{
            title: 'An event',
            color: users[0].color,
            start: (0, date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date()), 5),
            meta: {
              user: users[0]
            },
            resizable: {
              beforeStart: true,
              afterEnd: true
            },
            draggable: true
          }, {
            title: 'Another event',
            color: users[1].color,
            start: (0, date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date()), 2),
            meta: {
              user: users[1]
            },
            resizable: {
              beforeStart: true,
              afterEnd: true
            },
            draggable: true
          }, {
            title: 'A 3rd event',
            color: users[0].color,
            start: (0, date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date()), 7),
            meta: {
              user: users[0]
            },
            resizable: {
              beforeStart: true,
              afterEnd: true
            },
            draggable: true
          }, {
            title: 'An all day event',
            color: users[0].color,
            start: new Date(),
            meta: {
              user: users[0]
            },
            draggable: true,
            allDay: true
          }, {
            title: 'Another all day event',
            color: users[1].color,
            start: new Date(),
            meta: {
              user: users[1]
            },
            draggable: true,
            allDay: true
          }, {
            title: 'A 3rd all day event',
            color: users[0].color,
            start: new Date(),
            meta: {
              user: users[0]
            },
            draggable: true,
            allDay: true
          }];
        }

        _createClass(_DemoComponent, [{
          key: "eventTimesChanged",
          value: function eventTimesChanged(_ref) {
            var event = _ref.event,
                newStart = _ref.newStart,
                newEnd = _ref.newEnd;
            event.start = newStart;
            event.end = newEnd;
            this.events = _toConsumableArray(this.events);
          }
        }, {
          key: "userChanged",
          value: function userChanged(_ref2) {
            var event = _ref2.event,
                newUser = _ref2.newUser;
            event.color = newUser.color;
            event.meta.user = newUser;
            this.events = _toConsumableArray(this.events);
          }
        }]);

        return _DemoComponent;
      }();

      _DemoComponent.ɵfac = function DemoComponent_Factory(t) {
        return new (t || _DemoComponent)();
      };

      _DemoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _DemoComponent,
        selectors: [["mwl-demo-component"]],
        decls: 30,
        vars: 12,
        consts: [[1, "row"], [1, "col-md-6"], [1, "btn-group"], ["mwlCalendarPreviousView", "", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], ["mwlCalendarToday", "", 1, "btn", "btn-outline-secondary", 3, "viewDate", "viewDateChange"], ["mwlCalendarNextView", "", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], [1, "col-md-6", "text-right"], [3, "viewDate", "events", "users", "eventTimesChanged", "userChanged"]],
        template: function DemoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("viewDateChange", function DemoComponent_Template_div_viewDateChange_6_listener($event) {
              return ctx.viewDate = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\n        Previous\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("viewDateChange", function DemoComponent_Template_div_viewDateChange_9_listener($event) {
              return ctx.viewDate = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\n        Today\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("viewDateChange", function DemoComponent_Template_div_viewDateChange_12_listener($event) {
              return ctx.viewDate = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "\n        Next\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "calendarDate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mwl-day-view-scheduler", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("eventTimesChanged", function DemoComponent_Template_mwl_day_view_scheduler_eventTimesChanged_27_listener($event) {
              return ctx.eventTimesChanged($event);
            })("userChanged", function DemoComponent_Template_mwl_day_view_scheduler_userChanged_27_listener($event) {
              return ctx.userChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "\n");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("view", "day")("viewDate", ctx.viewDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("viewDate", ctx.viewDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("view", "day")("viewDate", ctx.viewDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](21, 9, ctx.viewDate, "dayViewTitle"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("viewDate", ctx.viewDate)("events", ctx.events)("users", ctx.users);
          }
        },
        directives: [_angular_calendar_src_modules_common_calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_4__.CalendarPreviousViewDirective, _angular_calendar_src_modules_common_calendar_today_directive__WEBPACK_IMPORTED_MODULE_5__.CalendarTodayDirective, _angular_calendar_src_modules_common_calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_6__.CalendarNextViewDirective, _day_view_scheduler_component__WEBPACK_IMPORTED_MODULE_7__.DayViewSchedulerComponent],
        pipes: [_angular_calendar_src_modules_common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_8__.CalendarDatePipe],
        encapsulation: 2,
        changeDetection: 0
      });
      /***/
    },

    /***/
    32270: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DayViewSchedulerCalendarUtils": function DayViewSchedulerCalendarUtils() {
          return (
            /* binding */
            _DayViewSchedulerCalendarUtils
          );
        },

        /* harmony export */
        "DayViewSchedulerComponent": function DayViewSchedulerComponent() {
          return (
            /* binding */
            _DayViewSchedulerComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var angular_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-calendar */
      27579);
      /* harmony import */


      var angular_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular-calendar */
      1913);
      /* harmony import */


      var angular_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular-calendar */
      33878);
      /* harmony import */


      var calendar_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! calendar-utils */
      90489);
      /* harmony import */


      var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angular-calendar */
      90008);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angular-draggable-droppable */
      42915);
      /* harmony import */


      var _angular_calendar_src_modules_week_calendar_week_view_event_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/week/calendar-week-view-event.component */
      61862);
      /* harmony import */


      var _angular_calendar_src_modules_week_calendar_week_view_hour_segment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/week/calendar-week-view-hour-segment.component */
      20923);
      /* harmony import */


      var _angular_calendar_src_modules_week_calendar_week_view_current_time_marker_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/week/calendar-week-view-current-time-marker.component */
      6556);
      /* harmony import */


      var angular_resizable_element__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! angular-resizable-element */
      90093);
      /* harmony import */


      var _angular_calendar_src_modules_common_click_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/common/click.directive */
      81567);

      function DayViewSchedulerComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r5.name);
        }
      }

      function DayViewSchedulerComponent_div_7_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("drop", function DayViewSchedulerComponent_div_7_div_7_Template_div_drop_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

            var day_r9 = restoredCtx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r10.eventDropped($event, day_r9.date, true);
          })("dragEnter", function DayViewSchedulerComponent_div_7_div_7_Template_div_dragEnter_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

            var day_r9 = restoredCtx.$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r12.dateDragEnter(day_r9.date);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          event: a0,
          calendarId: a1
        };
      };

      var _c1 = function _c1(a0, a1) {
        return {
          x: a0,
          y: a1
        };
      };

      var _c2 = function _c2(a0) {
        return {
          x: a0
        };
      };

      var _c3 = function _c3() {
        return {};
      };

      function DayViewSchedulerComponent_div_7_div_10_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dragStart", function DayViewSchedulerComponent_div_7_div_10_div_3_Template_div_dragStart_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var allDayEvent_r16 = restoredCtx.$implicit;

            var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r18.dragStarted(_r14, _r17, allDayEvent_r16, false);
          })("dragging", function DayViewSchedulerComponent_div_7_div_10_div_3_Template_div_dragging_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r20.allDayEventDragMove();
          })("dragEnd", function DayViewSchedulerComponent_div_7_div_10_div_3_Template_div_dragEnd_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var allDayEvent_r16 = restoredCtx.$implicit;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r21.dragEnded(allDayEvent_r16, $event, ctx_r21.dayColumnWidth);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mwl-calendar-week-view-event", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("eventClicked", function DayViewSchedulerComponent_div_7_div_10_div_3_Template_mwl_calendar_week_view_event_eventClicked_3_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var allDayEvent_r16 = restoredCtx.$implicit;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r22.eventClicked.emit({
              event: allDayEvent_r16.event,
              sourceEvent: $event.sourceEvent
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var allDayEvent_r16 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", 100 / ctx_r15.users.length * allDayEvent_r16.span, "%")("margin-left", 100 / ctx_r15.users.length * allDayEvent_r16.offset, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-draggable", allDayEvent_r16.event.draggable && ctx_r15.allDayEventResizes.size === 0)("cal-starts-within-week", !allDayEvent_r16.startsBeforeWeek)("cal-ends-within-week", !allDayEvent_r16.endsAfterWeek);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", allDayEvent_r16.event == null ? null : allDayEvent_r16.event.cssClass)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](25, _c0, allDayEvent_r16.event, ctx_r15.calendarId))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](28, _c1, allDayEvent_r16.event.draggable && ctx_r15.allDayEventResizes.size === 0, !ctx_r15.snapDraggedEvents && allDayEvent_r16.event.draggable && ctx_r15.allDayEventResizes.size === 0))("dragSnapGrid", ctx_r15.snapDraggedEvents ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](31, _c2, ctx_r15.dayColumnWidth) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](33, _c3))("validateDrag", ctx_r15.validateDrag);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("locale", ctx_r15.locale)("weekEvent", allDayEvent_r16)("tooltipPlacement", ctx_r15.tooltipPlacement)("tooltipTemplate", ctx_r15.tooltipTemplate)("tooltipAppendToBody", ctx_r15.tooltipAppendToBody)("tooltipDelay", ctx_r15.tooltipDelay)("customTemplate", ctx_r15.eventTemplate)("eventTitleTemplate", ctx_r15.eventTitleTemplate)("eventActionsTemplate", ctx_r15.eventActionsTemplate)("daysInWeek", ctx_r15.daysInWeek);
        }
      }

      function DayViewSchedulerComponent_div_7_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DayViewSchedulerComponent_div_7_div_10_div_3_Template, 6, 34, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var eventRow_r13 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", eventRow_r13.row)("ngForTrackBy", ctx_r8.trackByWeekAllDayEvent);
        }
      }

      function DayViewSchedulerComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dragEnter", function DayViewSchedulerComponent_div_7_Template_div_dragEnter_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r23.dragEnter("allDay");
          })("dragLeave", function DayViewSchedulerComponent_div_7_Template_div_dragLeave_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r25.dragLeave("allDay");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DayViewSchedulerComponent_div_7_div_7_Template, 1, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DayViewSchedulerComponent_div_7_div_10_Template, 5, 2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.allDayEventsLabelTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.days)("ngForTrackBy", ctx_r1.trackByWeekDayHeaderDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.view.allDayEventRows)("ngForTrackBy", ctx_r1.trackById);
        }
      }

      function DayViewSchedulerComponent_div_11_div_2_mwl_calendar_week_view_hour_segment_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mwl-calendar-week-view-hour-segment", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var segment_r30 = ctx.$implicit;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx_r29.hourSegmentHeight, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("segment", segment_r30)("segmentHeight", ctx_r29.hourSegmentHeight)("locale", ctx_r29.locale)("customTemplate", ctx_r29.hourSegmentTemplate)("isTimeLabel", true);
        }
      }

      function DayViewSchedulerComponent_div_11_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DayViewSchedulerComponent_div_11_div_2_mwl_calendar_week_view_hour_segment_2_Template, 2, 7, "mwl-calendar-week-view-hour-segment", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var hour_r27 = ctx.$implicit;
          var odd_r28 = ctx.odd;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-hour-odd", odd_r28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", hour_r27.segments)("ngForTrackBy", ctx_r26.trackByHourSegment);
        }
      }

      function DayViewSchedulerComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DayViewSchedulerComponent_div_11_div_2_Template, 4, 4, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.view.hourColumns[0].hours)("ngForTrackBy", ctx_r2.trackByHour);
        }
      }

      var _c4 = function _c4() {
        return {
          left: true,
          top: true
        };
      };

      function DayViewSchedulerComponent_div_16_div_4_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 34);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c4));
        }
      }

      var _c5 = function _c5() {
        return {
          right: true,
          bottom: true
        };
      };

      function DayViewSchedulerComponent_div_16_div_4_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 35);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c5));
        }
      }

      var _c6 = function _c6(a0, a1, a2, a3) {
        return {
          left: a0,
          right: a1,
          top: a2,
          bottom: a3
        };
      };

      function DayViewSchedulerComponent_div_16_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resizeStart", function DayViewSchedulerComponent_div_16_div_4_Template_div_resizeStart_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39);

            var timeEvent_r34 = restoredCtx.$implicit;

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14);

            return ctx_r38.timeEventResizeStarted(_r3, timeEvent_r34, $event);
          })("resizing", function DayViewSchedulerComponent_div_16_div_4_Template_div_resizing_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39);

            var timeEvent_r34 = restoredCtx.$implicit;

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r40.timeEventResizing(timeEvent_r34, $event);
          })("resizeEnd", function DayViewSchedulerComponent_div_16_div_4_Template_div_resizeEnd_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39);

            var timeEvent_r34 = restoredCtx.$implicit;

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r41.timeEventResizeEnded(timeEvent_r34);
          })("dragStart", function DayViewSchedulerComponent_div_16_div_4_Template_div_dragStart_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39);

            var timeEvent_r34 = restoredCtx.$implicit;

            var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14);

            return ctx_r42.dragStarted(_r3, _r35, timeEvent_r34, true);
          })("dragging", function DayViewSchedulerComponent_div_16_div_4_Template_div_dragging_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39);

            var timeEvent_r34 = restoredCtx.$implicit;

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r43.dragMove(timeEvent_r34, $event);
          })("dragEnd", function DayViewSchedulerComponent_div_16_div_4_Template_div_dragEnd_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39);

            var timeEvent_r34 = restoredCtx.$implicit;

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r44.dragEnded(timeEvent_r34, $event, ctx_r44.dayColumnWidth, true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DayViewSchedulerComponent_div_16_div_4_div_3_Template, 1, 2, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mwl-calendar-week-view-event", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("eventClicked", function DayViewSchedulerComponent_div_16_div_4_Template_mwl_calendar_week_view_event_eventClicked_5_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39);

            var timeEvent_r34 = restoredCtx.$implicit;

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r45.eventClicked.emit({
              event: timeEvent_r34.event,
              sourceEvent: $event.sourceEvent
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DayViewSchedulerComponent_div_16_div_4_div_8_Template, 1, 2, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var timeEvent_r34 = ctx.$implicit;

          var column_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("top", timeEvent_r34.top, "px")("height", timeEvent_r34.height, "px")("left", timeEvent_r34.left, "%")("width", timeEvent_r34.width, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-draggable", timeEvent_r34.event.draggable && ctx_r32.timeEventResizes.size === 0)("cal-starts-within-day", !timeEvent_r34.startsBeforeDay)("cal-ends-within-day", !timeEvent_r34.endsAfterDay);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", timeEvent_r34.event.cssClass)("hidden", timeEvent_r34.height === 0 && timeEvent_r34.width === 0)("resizeSnapGrid", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](37, _c6, ctx_r32.dayColumnWidth, ctx_r32.dayColumnWidth, ctx_r32.eventSnapSize || ctx_r32.hourSegmentHeight, ctx_r32.eventSnapSize || ctx_r32.hourSegmentHeight))("validateResize", ctx_r32.validateResize)("allowNegativeResizes", true)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](42, _c0, timeEvent_r34.event, ctx_r32.calendarId))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](45, _c1, timeEvent_r34.event.draggable && ctx_r32.timeEventResizes.size === 0, timeEvent_r34.event.draggable && ctx_r32.timeEventResizes.size === 0))("dragSnapGrid", ctx_r32.snapDraggedEvents ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](48, _c1, ctx_r32.dayColumnWidth, ctx_r32.eventSnapSize || ctx_r32.hourSegmentHeight) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](51, _c3))("ghostDragEnabled", !ctx_r32.snapDraggedEvents)("validateDrag", ctx_r32.validateDrag);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (timeEvent_r34.event == null ? null : timeEvent_r34.event.resizable == null ? null : timeEvent_r34.event.resizable.beforeStart) && !timeEvent_r34.startsBeforeDay);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("locale", ctx_r32.locale)("weekEvent", timeEvent_r34)("tooltipPlacement", ctx_r32.tooltipPlacement)("tooltipTemplate", ctx_r32.tooltipTemplate)("tooltipAppendToBody", ctx_r32.tooltipAppendToBody)("tooltipDisabled", ctx_r32.dragActive || ctx_r32.timeEventResizes.size > 0)("tooltipDelay", ctx_r32.tooltipDelay)("customTemplate", ctx_r32.eventTemplate)("eventTitleTemplate", ctx_r32.eventTitleTemplate)("eventActionsTemplate", ctx_r32.eventActionsTemplate)("column", column_r31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (timeEvent_r34.event == null ? null : timeEvent_r34.event.resizable == null ? null : timeEvent_r34.event.resizable.afterEnd) && !timeEvent_r34.endsAfterDay);
        }
      }

      function DayViewSchedulerComponent_div_16_div_6_mwl_calendar_week_view_hour_segment_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mwl-calendar-week-view-hour-segment", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mwlClick", function DayViewSchedulerComponent_div_16_div_6_mwl_calendar_week_view_hour_segment_2_Template_mwl_calendar_week_view_hour_segment_mwlClick_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52);

            var segment_r50 = restoredCtx.$implicit;

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r51.hourSegmentClicked.emit({
              date: segment_r50.date,
              sourceEvent: $event
            });
          })("drop", function DayViewSchedulerComponent_div_16_div_6_mwl_calendar_week_view_hour_segment_2_Template_mwl_calendar_week_view_hour_segment_drop_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52);

            var segment_r50 = restoredCtx.$implicit;

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r53.eventDropped($event, segment_r50.date, false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var segment_r50 = ctx.$implicit;

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx_r49.hourSegmentHeight, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("segment", segment_r50)("segmentHeight", ctx_r49.hourSegmentHeight)("locale", ctx_r49.locale)("customTemplate", ctx_r49.hourSegmentTemplate)("clickListenerDisabled", ctx_r49.hourSegmentClicked.observers.length === 0)("dragOverClass", !ctx_r49.dragActive || !ctx_r49.snapDraggedEvents ? "cal-drag-over" : null);
        }
      }

      function DayViewSchedulerComponent_div_16_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DayViewSchedulerComponent_div_16_div_6_mwl_calendar_week_view_hour_segment_2_Template, 2, 8, "mwl-calendar-week-view-hour-segment", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var hour_r47 = ctx.$implicit;
          var odd_r48 = ctx.odd;

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-hour-odd", odd_r48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", hour_r47.segments)("ngForTrackBy", ctx_r33.trackByHourSegment);
        }
      }

      function DayViewSchedulerComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mwl-calendar-week-view-current-time-marker", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DayViewSchedulerComponent_div_16_div_4_Template, 10, 52, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DayViewSchedulerComponent_div_16_div_6_Template, 4, 4, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r31 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnDate", column_r31.date)("dayStartHour", ctx_r4.dayStartHour)("dayStartMinute", ctx_r4.dayStartMinute)("dayEndHour", ctx_r4.dayEndHour)("dayEndMinute", ctx_r4.dayEndMinute)("hourSegments", ctx_r4.hourSegments)("hourSegmentHeight", ctx_r4.hourSegmentHeight)("customTemplate", ctx_r4.currentTimeMarkerTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", column_r31.events)("ngForTrackBy", ctx_r4.trackByWeekTimeEvent);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", column_r31.hours)("ngForTrackBy", ctx_r4.trackByHour);
        }
      }

      var _DayViewSchedulerCalendarUtils = /*#__PURE__*/function (_angular_calendar__WE) {
        _inherits(_DayViewSchedulerCalendarUtils, _angular_calendar__WE);

        var _super = _createSuper(_DayViewSchedulerCalendarUtils);

        function _DayViewSchedulerCalendarUtils() {
          _classCallCheck(this, _DayViewSchedulerCalendarUtils);

          return _super.apply(this, arguments);
        }

        _createClass(_DayViewSchedulerCalendarUtils, [{
          key: "getWeekView",
          value: function getWeekView(args) {
            var _this = this;

            var _get$call = _get(_getPrototypeOf(_DayViewSchedulerCalendarUtils.prototype), "getWeekView", this).call(this, args),
                period = _get$call.period;

            var view = {
              period: period,
              allDayEventRows: [],
              hourColumns: [],
              users: _toConsumableArray(args.users)
            };
            view.users.forEach(function (user, columnIndex) {
              var events = args.events.filter(function (event) {
                return event.meta.user.id === user.id;
              });

              var columnView = _get(_getPrototypeOf(_DayViewSchedulerCalendarUtils.prototype), "getWeekView", _this).call(_this, Object.assign(Object.assign({}, args), {
                events: events
              }));

              view.hourColumns.push(columnView.hourColumns[0]);
              columnView.allDayEventRows.forEach(function (_ref3, rowIndex) {
                var row = _ref3.row;
                view.allDayEventRows[rowIndex] = view.allDayEventRows[rowIndex] || {
                  row: []
                };
                view.allDayEventRows[rowIndex].row.push(Object.assign(Object.assign({}, row[0]), {
                  offset: columnIndex,
                  span: 1
                }));
              });
            });
            return view;
          }
        }]);

        return _DayViewSchedulerCalendarUtils;
      }(angular_calendar__WEBPACK_IMPORTED_MODULE_2__.CalendarUtils);

      _DayViewSchedulerCalendarUtils.ɵfac = /*@__PURE__*/function () {
        var ɵDayViewSchedulerCalendarUtils_BaseFactory;
        return function DayViewSchedulerCalendarUtils_Factory(t) {
          return (ɵDayViewSchedulerCalendarUtils_BaseFactory || (ɵDayViewSchedulerCalendarUtils_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](_DayViewSchedulerCalendarUtils)))(t || _DayViewSchedulerCalendarUtils);
        };
      }();

      _DayViewSchedulerCalendarUtils.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _DayViewSchedulerCalendarUtils,
        factory: _DayViewSchedulerCalendarUtils.ɵfac
      });

      var _DayViewSchedulerComponent = /*#__PURE__*/function (_angular_calendar__WE2) {
        _inherits(_DayViewSchedulerComponent, _angular_calendar__WE2);

        var _super2 = _createSuper(_DayViewSchedulerComponent);

        function _DayViewSchedulerComponent(cdr, utils, locale, dateAdapter, element) {
          var _this2;

          _classCallCheck(this, _DayViewSchedulerComponent);

          _this2 = _super2.call(this, cdr, utils, locale, dateAdapter, element);
          _this2.cdr = cdr;
          _this2.utils = utils;
          _this2.dateAdapter = dateAdapter;
          _this2.element = element;
          _this2.users = [];
          _this2.userChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          _this2.daysInWeek = 1;

          _this2.trackByUserId = function (index, row) {
            return row.id;
          };

          return _this2;
        }

        _createClass(_DayViewSchedulerComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            _get(_getPrototypeOf(_DayViewSchedulerComponent.prototype), "ngOnChanges", this).call(this, changes);

            if (changes.users) {
              this.refreshBody();
              this.emitBeforeViewRender();
            }
          }
        }, {
          key: "getDayColumnWidth",
          value: function getDayColumnWidth(eventRowContainer) {
            return Math.floor(eventRowContainer.offsetWidth / this.users.length);
          }
        }, {
          key: "dragMove",
          value: function dragMove(dayEvent, dragEvent) {
            if (this.snapDraggedEvents) {
              var newUser = this.getDraggedUserColumn(dayEvent, dragEvent.x);
              var newEventTimes = this.getDragMovedEventTimes(dayEvent, Object.assign(Object.assign({}, dragEvent), {
                x: 0
              }), this.dayColumnWidth, true);
              var originalEvent = dayEvent.event;
              var adjustedEvent = Object.assign(Object.assign(Object.assign({}, originalEvent), newEventTimes), {
                meta: Object.assign(Object.assign({}, originalEvent.meta), {
                  user: newUser
                })
              });
              var tempEvents = this.events.map(function (event) {
                if (event === originalEvent) {
                  return adjustedEvent;
                }

                return event;
              });
              this.restoreOriginalEvents(tempEvents, new Map([[adjustedEvent, originalEvent]]));
            }

            this.dragAlreadyMoved = true;
          }
        }, {
          key: "dragEnded",
          value: function dragEnded(weekEvent, dragEndEvent, dayWidth) {
            var useY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

            _get(_getPrototypeOf(_DayViewSchedulerComponent.prototype), "dragEnded", this).call(this, weekEvent, Object.assign(Object.assign({}, dragEndEvent), {
              x: 0
            }), dayWidth, useY);

            var newUser = this.getDraggedUserColumn(weekEvent, dragEndEvent.x);

            if (newUser && newUser !== weekEvent.event.meta.user) {
              this.userChanged.emit({
                event: weekEvent.event,
                newUser: newUser
              });
            }
          }
        }, {
          key: "getWeekView",
          value: function getWeekView(events) {
            return this.utils.getWeekView(Object.assign({
              events: events,
              users: this.users,
              viewDate: this.viewDate,
              weekStartsOn: this.weekStartsOn,
              excluded: this.excludeDays,
              precision: this.precision,
              absolutePositionedEvents: true,
              hourSegments: this.hourSegments,
              dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
              },
              dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
              },
              segmentHeight: this.hourSegmentHeight,
              weekendDays: this.weekendDays
            }, (0, angular_calendar__WEBPACK_IMPORTED_MODULE_4__.getWeekViewPeriod)(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
          }
        }, {
          key: "getDraggedUserColumn",
          value: function getDraggedUserColumn(dayEvent, xPixels) {
            var columnsMoved = Math.round(xPixels / this.dayColumnWidth);
            var currentColumnIndex = this.view.users.findIndex(function (user) {
              return user === dayEvent.event.meta.user;
            });
            var newIndex = currentColumnIndex + columnsMoved;
            return this.view.users[newIndex];
          }
        }]);

        return _DayViewSchedulerComponent;
      }(angular_calendar__WEBPACK_IMPORTED_MODULE_3__.CalendarWeekViewComponent);

      _DayViewSchedulerComponent.ɵfac = function DayViewSchedulerComponent_Factory(t) {
        return new (t || _DayViewSchedulerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_DayViewSchedulerCalendarUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angular_calendar__WEBPACK_IMPORTED_MODULE_5__.DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
      };

      _DayViewSchedulerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _DayViewSchedulerComponent,
        selectors: [["mwl-day-view-scheduler"]],
        inputs: {
          users: "users"
        },
        outputs: {
          userChanged: "userChanged"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_DayViewSchedulerCalendarUtils]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        decls: 21,
        vars: 8,
        consts: [["role", "grid", 1, "cal-week-view"], ["role", "row", 1, "cal-day-headers"], ["class", "cal-header", "tabindex", "0", "role", "columnheader", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "cal-all-day-events", "mwlDroppable", "", 3, "dragEnter", "dragLeave", 4, "ngIf"], ["mwlDroppable", "", 1, "cal-time-events", 3, "dragEnter", "dragLeave"], ["class", "cal-time-label-column", 4, "ngIf"], [1, "cal-day-columns"], ["dayColumns", ""], ["class", "cal-day-column", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "0", "role", "columnheader", 1, "cal-header"], ["mwlDroppable", "", 1, "cal-all-day-events", 3, "dragEnter", "dragLeave"], ["allDayEventsContainer", ""], [1, "cal-time-label-column", 3, "ngTemplateOutlet"], ["class", "cal-day-column", "mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "cal-events-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 1, "cal-day-column", 3, "drop", "dragEnter"], [1, "cal-events-row"], ["eventRowContainer", ""], ["class", "cal-event-container", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "cal-draggable", "cal-starts-within-week", "cal-ends-within-week", "ngClass", "width", "marginLeft", "dropData", "dragAxis", "dragSnapGrid", "validateDrag", "dragStart", "dragging", "dragEnd", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event-container", 3, "ngClass", "dropData", "dragAxis", "dragSnapGrid", "validateDrag", "dragStart", "dragging", "dragEnd"], ["event", ""], [3, "locale", "weekEvent", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "daysInWeek", "eventClicked"], [1, "cal-time-label-column"], ["class", "cal-hour", 3, "cal-hour-odd", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cal-hour"], [3, "height", "segment", "segmentHeight", "locale", "customTemplate", "isTimeLabel", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "segment", "segmentHeight", "locale", "customTemplate", "isTimeLabel"], [1, "cal-day-column"], [3, "columnDate", "dayStartHour", "dayStartMinute", "dayEndHour", "dayEndMinute", "hourSegments", "hourSegmentHeight", "customTemplate"], ["class", "cal-event-container", "mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "cal-draggable", "cal-starts-within-day", "cal-ends-within-day", "ngClass", "hidden", "top", "height", "left", "width", "resizeSnapGrid", "validateResize", "allowNegativeResizes", "dropData", "dragAxis", "dragSnapGrid", "ghostDragEnabled", "validateDrag", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event-container", 3, "ngClass", "hidden", "resizeSnapGrid", "validateResize", "allowNegativeResizes", "dropData", "dragAxis", "dragSnapGrid", "ghostDragEnabled", "validateDrag", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd"], ["class", "cal-resize-handle cal-resize-handle-before-start", "mwlResizeHandle", "", 3, "resizeEdges", 4, "ngIf"], [3, "locale", "weekEvent", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDisabled", "tooltipDelay", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "column", "eventClicked"], ["class", "cal-resize-handle cal-resize-handle-after-end", "mwlResizeHandle", "", 3, "resizeEdges", 4, "ngIf"], ["mwlResizeHandle", "", 1, "cal-resize-handle", "cal-resize-handle-before-start", 3, "resizeEdges"], ["mwlResizeHandle", "", 1, "cal-resize-handle", "cal-resize-handle-after-end", 3, "resizeEdges"], ["mwlDroppable", "", "dragActiveClass", "cal-drag-active", 3, "height", "segment", "segmentHeight", "locale", "customTemplate", "clickListenerDisabled", "dragOverClass", "mwlClick", "drop", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragActiveClass", "cal-drag-active", 3, "segment", "segmentHeight", "locale", "customTemplate", "clickListenerDisabled", "dragOverClass", "mwlClick", "drop"]],
        template: function DayViewSchedulerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DayViewSchedulerComponent_div_4_Template, 5, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DayViewSchedulerComponent_div_7_Template, 12, 5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dragEnter", function DayViewSchedulerComponent_Template_div_dragEnter_9_listener() {
              return ctx.dragEnter("time");
            })("dragLeave", function DayViewSchedulerComponent_Template_div_dragLeave_9_listener() {
              return ctx.dragLeave("time");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DayViewSchedulerComponent_div_11_Template, 4, 2, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, DayViewSchedulerComponent_div_16_Template, 8, 12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\n");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.users)("ngForTrackBy", ctx.trackByUserId);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.view.allDayEventRows.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.view.hourColumns.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cal-resize-active", ctx.timeEventResizes.size > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.view.hourColumns)("ngForTrackBy", ctx.trackByHourColumn);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__.DroppableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__.DraggableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_calendar_src_modules_week_calendar_week_view_event_component__WEBPACK_IMPORTED_MODULE_8__.CalendarWeekViewEventComponent, _angular_calendar_src_modules_week_calendar_week_view_hour_segment_component__WEBPACK_IMPORTED_MODULE_9__.CalendarWeekViewHourSegmentComponent, _angular_calendar_src_modules_week_calendar_week_view_current_time_marker_component__WEBPACK_IMPORTED_MODULE_10__.CalendarWeekViewCurrentTimeMarkerComponent, angular_resizable_element__WEBPACK_IMPORTED_MODULE_11__.ResizableDirective, angular_resizable_element__WEBPACK_IMPORTED_MODULE_11__.ResizeHandleDirective, _angular_calendar_src_modules_common_click_directive__WEBPACK_IMPORTED_MODULE_12__.ClickDirective],
        encapsulation: 2
      });
      /***/
    },

    /***/
    63270: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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


      var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular-calendar/date-adapters/date-fns */
      20789);
      /* harmony import */


      var _demo_utils_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../demo-utils/module */
      57671);
      /* harmony import */


      var _component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./component */
      72872);
      /* harmony import */


      var _day_view_scheduler_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./day-view-scheduler.component */
      32270);
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
          declarations: [_component__WEBPACK_IMPORTED_MODULE_7__.DemoComponent, _day_view_scheduler_component__WEBPACK_IMPORTED_MODULE_8__.DayViewSchedulerComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, angular_calendar__WEBPACK_IMPORTED_MODULE_2__.CalendarModule, _demo_utils_module__WEBPACK_IMPORTED_MODULE_5__.DemoUtilsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
          exports: [_component__WEBPACK_IMPORTED_MODULE_7__.DemoComponent]
        });
      })();
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

    }
  }]);
})();
//# sourceMappingURL=projects_demos_app_demo-modules_day-view-scheduler_module_ts-es5.js.map