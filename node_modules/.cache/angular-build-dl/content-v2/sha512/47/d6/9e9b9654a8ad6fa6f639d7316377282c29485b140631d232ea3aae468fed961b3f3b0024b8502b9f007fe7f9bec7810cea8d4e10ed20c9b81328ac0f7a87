(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkangular_calendar"] = self["webpackChunkangular_calendar"] || []).push([["projects_demos_app_demo-modules_responsive-week-view_module_ts"], {
    /***/
    66883: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BreakpointObserver": function BreakpointObserver() {
          return (
            /* binding */
            _BreakpointObserver
          );
        },

        /* harmony export */
        "Breakpoints": function Breakpoints() {
          return (
            /* binding */
            _Breakpoints
          );
        },

        /* harmony export */
        "LayoutModule": function LayoutModule() {
          return (
            /* binding */
            _LayoutModule
          );
        },

        /* harmony export */
        "MediaMatcher": function MediaMatcher() {
          return (
            /* binding */
            _MediaMatcher
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      20657);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      50931);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      57850);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      41315);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs */
      54926);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      35116);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      99454);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      71775);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      49005);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      57993);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs/operators */
      44094);
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/platform */
      36145);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _LayoutModule = function _LayoutModule() {
        _classCallCheck(this, _LayoutModule);
      };

      _LayoutModule.ɵfac = function LayoutModule_Factory(t) {
        return new (t || _LayoutModule)();
      };

      _LayoutModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _LayoutModule
      });
      _LayoutModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_LayoutModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{}]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Global registry for all dynamically-created, injected media queries. */


      var mediaQueriesForWebkitCompatibility = new Set();
      /** Style tag that holds all of the dynamically-created media queries. */

      var mediaQueryStyleNode;
      /** A utility for calling matchMedia queries. */

      var _MediaMatcher = /*#__PURE__*/function () {
        function _MediaMatcher(_platform) {
          _classCallCheck(this, _MediaMatcher);

          this._platform = _platform;
          this._matchMedia = this._platform.isBrowser && window.matchMedia ? // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
          // call it from a different scope.
          window.matchMedia.bind(window) : noopMatchMedia;
        }
        /**
         * Evaluates the given media query and returns the native MediaQueryList from which results
         * can be retrieved.
         * Confirms the layout engine will trigger for the selector query provided and returns the
         * MediaQueryList for the query provided.
         */


        _createClass(_MediaMatcher, [{
          key: "matchMedia",
          value: function matchMedia(query) {
            if (this._platform.WEBKIT) {
              createEmptyStyleRule(query);
            }

            return this._matchMedia(query);
          }
        }]);

        return _MediaMatcher;
      }();

      _MediaMatcher.ɵfac = function MediaMatcher_Factory(t) {
        return new (t || _MediaMatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform));
      };

      _MediaMatcher.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function MediaMatcher_Factory() {
          return new _MediaMatcher(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform));
        },
        token: _MediaMatcher,
        providedIn: "root"
      });

      _MediaMatcher.ctorParameters = function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MediaMatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform
          }];
        }, null);
      })();
      /**
       * For Webkit engines that only trigger the MediaQueryListListener when
       * there is at least one CSS selector for the respective media query.
       */


      function createEmptyStyleRule(query) {
        if (mediaQueriesForWebkitCompatibility.has(query)) {
          return;
        }

        try {
          if (!mediaQueryStyleNode) {
            mediaQueryStyleNode = document.createElement('style');
            mediaQueryStyleNode.setAttribute('type', 'text/css');
            document.head.appendChild(mediaQueryStyleNode);
          }

          if (mediaQueryStyleNode.sheet) {
            mediaQueryStyleNode.sheet.insertRule("@media ".concat(query, " {.fx-query-test{ }}"), 0);
            mediaQueriesForWebkitCompatibility.add(query);
          }
        } catch (e) {
          console.error(e);
        }
      }
      /** No-op matchMedia replacement for non-browser platforms. */


      function noopMatchMedia(query) {
        // Use `as any` here to avoid adding additional necessary properties for
        // the noop matcher.
        return {
          matches: query === 'all' || query === '',
          media: query,
          addListener: function addListener() {},
          removeListener: function removeListener() {}
        };
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Utility for checking the matching state of @media queries. */


      var _BreakpointObserver = /*#__PURE__*/function () {
        function _BreakpointObserver(_mediaMatcher, _zone) {
          _classCallCheck(this, _BreakpointObserver);

          this._mediaMatcher = _mediaMatcher;
          this._zone = _zone;
          /**  A map of all media queries currently being listened for. */

          this._queries = new Map();
          /** A subject for all other observables to takeUntil based on. */

          this._destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        }
        /** Completes the active subject, signalling to all other observables to complete. */


        _createClass(_BreakpointObserver, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroySubject.next();

            this._destroySubject.complete();
          }
          /**
           * Whether one or more media queries match the current viewport size.
           * @param value One or more media queries to check.
           * @returns Whether any of the media queries match.
           */

        }, {
          key: "isMatched",
          value: function isMatched(value) {
            var _this = this;

            var queries = splitQueries((0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceArray)(value));
            return queries.some(function (mediaQuery) {
              return _this._registerQuery(mediaQuery).mql.matches;
            });
          }
          /**
           * Gets an observable of results for the given queries that will emit new results for any changes
           * in matching of the given queries.
           * @param value One or more media queries to check.
           * @returns A stream of matches for the given queries.
           */

        }, {
          key: "observe",
          value: function observe(value) {
            var _this2 = this;

            var queries = splitQueries((0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceArray)(value));
            var observables = queries.map(function (query) {
              return _this2._registerQuery(query).observable;
            });
            var stateObservable = (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)(observables); // Emit the first state immediately, and then debounce the subsequent emissions.

            stateObservable = (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.concat)(stateObservable.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)), stateObservable.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.skip)(1), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(0)));
            return stateObservable.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(function (breakpointStates) {
              var response = {
                matches: false,
                breakpoints: {}
              };
              breakpointStates.forEach(function (_ref) {
                var matches = _ref.matches,
                    query = _ref.query;
                response.matches = response.matches || matches;
                response.breakpoints[query] = matches;
              });
              return response;
            }));
          }
          /** Registers a specific query to be listened for. */

        }, {
          key: "_registerQuery",
          value: function _registerQuery(query) {
            var _this3 = this;

            // Only set up a new MediaQueryList if it is not already being listened for.
            if (this._queries.has(query)) {
              return this._queries.get(query);
            }

            var mql = this._mediaMatcher.matchMedia(query); // Create callback for match changes and add it is as a listener.


            var queryObservable = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Observable(function (observer) {
              // Listener callback methods are wrapped to be placed back in ngZone. Callbacks must be placed
              // back into the zone because matchMedia is only included in Zone.js by loading the
              // webapis-media-query.js file alongside the zone.js file.  Additionally, some browsers do not
              // have MediaQueryList inherit from EventTarget, which causes inconsistencies in how Zone.js
              // patches it.
              var handler = function handler(e) {
                return _this3._zone.run(function () {
                  return observer.next(e);
                });
              };

              mql.addListener(handler);
              return function () {
                mql.removeListener(handler);
              };
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.startWith)(mql), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(function (_ref2) {
              var matches = _ref2.matches;
              return {
                query: query,
                matches: matches
              };
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this._destroySubject)); // Add the MediaQueryList to the set of queries.

            var output = {
              observable: queryObservable,
              mql: mql
            };

            this._queries.set(query, output);

            return output;
          }
        }]);

        return _BreakpointObserver;
      }();

      _BreakpointObserver.ɵfac = function BreakpointObserver_Factory(t) {
        return new (t || _BreakpointObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
      };

      _BreakpointObserver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function BreakpointObserver_Factory() {
          return new _BreakpointObserver(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
        },
        token: _BreakpointObserver,
        providedIn: "root"
      });

      _BreakpointObserver.ctorParameters = function () {
        return [{
          type: _MediaMatcher
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_BreakpointObserver, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _MediaMatcher
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }];
        }, null);
      })();
      /**
       * Split each query string into separate query strings if two queries are provided as comma
       * separated.
       */


      function splitQueries(queries) {
        return queries.map(function (query) {
          return query.split(',');
        }).reduce(function (a1, a2) {
          return a1.concat(a2);
        }).map(function (query) {
          return query.trim();
        });
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // PascalCase is being used as Breakpoints is used like an enum.
      // tslint:disable-next-line:variable-name


      var _Breakpoints = {
        XSmall: '(max-width: 599.98px)',
        Small: '(min-width: 600px) and (max-width: 959.98px)',
        Medium: '(min-width: 960px) and (max-width: 1279.98px)',
        Large: '(min-width: 1280px) and (max-width: 1919.98px)',
        XLarge: '(min-width: 1920px)',
        Handset: '(max-width: 599.98px) and (orientation: portrait), ' + '(max-width: 959.98px) and (orientation: landscape)',
        Tablet: '(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), ' + '(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)',
        Web: '(min-width: 840px) and (orientation: portrait), ' + '(min-width: 1280px) and (orientation: landscape)',
        HandsetPortrait: '(max-width: 599.98px) and (orientation: portrait)',
        TabletPortrait: '(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)',
        WebPortrait: '(min-width: 840px) and (orientation: portrait)',
        HandsetLandscape: '(max-width: 959.98px) and (orientation: landscape)',
        TabletLandscape: '(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)',
        WebLandscape: '(min-width: 1280px) and (orientation: landscape)'
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/
    },

    /***/
    22700: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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


      var angular_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! angular-calendar */
      4606);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      50931);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      44094);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/layout */
      66883);
      /* harmony import */


      var _angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/week/calendar-week-view.component */
      1913);

      var _DemoComponent = /*#__PURE__*/function () {
        function _DemoComponent(breakpointObserver, cd) {
          _classCallCheck(this, _DemoComponent);

          this.breakpointObserver = breakpointObserver;
          this.cd = cd;
          this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_0__.CalendarView.Week;
          this.viewDate = new Date();
          this.daysInWeek = 7;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        }

        _createClass(_DemoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            var CALENDAR_RESPONSIVE = {
              small: {
                breakpoint: '(max-width: 576px)',
                daysInWeek: 2
              },
              medium: {
                breakpoint: '(max-width: 768px)',
                daysInWeek: 3
              },
              large: {
                breakpoint: '(max-width: 960px)',
                daysInWeek: 5
              }
            };
            this.breakpointObserver.observe(Object.values(CALENDAR_RESPONSIVE).map(function (_ref3) {
              var breakpoint = _ref3.breakpoint;
              return breakpoint;
            })).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(function (state) {
              var foundBreakpoint = Object.values(CALENDAR_RESPONSIVE).find(function (_ref4) {
                var breakpoint = _ref4.breakpoint;
                return !!state.breakpoints[breakpoint];
              });

              if (foundBreakpoint) {
                _this4.daysInWeek = foundBreakpoint.daysInWeek;
              } else {
                _this4.daysInWeek = 7;
              }

              _this4.cd.markForCheck();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
          }
        }]);

        return _DemoComponent;
      }();

      _DemoComponent.ɵfac = function DemoComponent_Factory(t) {
        return new (t || _DemoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
      };

      _DemoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _DemoComponent,
        selectors: [["mwl-demo-component"]],
        decls: 6,
        vars: 2,
        consts: [[1, "alert", "alert-info"], [3, "viewDate", "daysInWeek"]],
        template: function DemoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n  Shrink the browser window size to reduce the number of days in the week.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mwl-calendar-week-view", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\n");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("viewDate", ctx.viewDate)("daysInWeek", ctx.daysInWeek);
          }
        },
        directives: [_angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_5__.CalendarWeekViewComponent],
        encapsulation: 2,
        changeDetection: 0
      });
      /***/
    },

    /***/
    74947: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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


      var _component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./component */
      22700);
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
        }), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([{
          path: '',
          component: _component__WEBPACK_IMPORTED_MODULE_6__.DemoComponent
        }])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_DemoModule, {
          declarations: [_component__WEBPACK_IMPORTED_MODULE_6__.DemoComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, angular_calendar__WEBPACK_IMPORTED_MODULE_2__.CalendarModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
          exports: [_component__WEBPACK_IMPORTED_MODULE_6__.DemoComponent]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=projects_demos_app_demo-modules_responsive-week-view_module_ts-es5.js.map