(function () {
  "use strict";

  (self["webpackChunkangular_calendar"] = self["webpackChunkangular_calendar"] || []).push([["projects_demos_app_demo-modules_responsive-week-view_sources_ts"], {
    /***/
    5300: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
        filename: 'component.ts',
        contents: {
          raw: __webpack_require__(
          /*! !!raw-loader!./component */
          48022),
          highlighted: __webpack_require__(
          /*! !!raw-loader!highlightjs-loader?lang=typescript!./component */
          16590)
        }
      }, {
        filename: 'template.html',
        contents: {
          raw: __webpack_require__(
          /*! !!raw-loader!./template.html */
          42171),
          highlighted: __webpack_require__(
          /*! !!raw-loader!highlightjs-loader?lang=xml!./template.html */
          86110)
        }
      }, {
        filename: 'module.ts',
        contents: {
          raw: __webpack_require__(
          /*! !!raw-loader!./module */
          23069),
          highlighted: __webpack_require__(
          /*! !!raw-loader!highlightjs-loader?lang=typescript!./module */
          63806)
        }
      }];
      /***/
    },

    /***/
    16590: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span class=\"hljs-keyword\">import</span> {\n  Component,\n  OnInit,\n  ChangeDetectionStrategy,\n  OnDestroy,\n  ChangeDetectorRef,\n} from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { BreakpointObserver, BreakpointState } from <span class=\"hljs-string\">'@angular/cdk/layout'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarView } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { Subject } from <span class=\"hljs-string\">'rxjs'</span>;\n<span class=\"hljs-keyword\">import</span> { takeUntil } from <span class=\"hljs-string\">'rxjs/operators'</span>;\n\n@Component({\n  selector: <span class=\"hljs-string\">'mwl-demo-component'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class=\"hljs-string\">'./template.html'</span>,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoComponent <span class=\"hljs-keyword\">implements</span> OnInit, OnDestroy {\n  view: CalendarView = CalendarView.Week;\n\n  viewDate = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>();\n\n  daysInWeek = <span class=\"hljs-number\">7</span>;\n\n  <span class=\"hljs-keyword\">private</span> destroy$ = <span class=\"hljs-keyword\">new</span> Subject&lt;<span class=\"hljs-built_in\">void</span>&gt;();\n\n  <span class=\"hljs-constructor\"><span class=\"hljs-keyword\">constructor</span>(\n    private breakpointObserver: BreakpointObserver,\n    private cd: ChangeDetectorRef\n  ) </span>{}\n\n  ngOnInit() {\n    <span class=\"hljs-keyword\">const</span> CALENDAR_RESPONSIVE = {\n      small: {\n        breakpoint: <span class=\"hljs-string\">'(max-width: 576px)'</span>,\n        daysInWeek: <span class=\"hljs-number\">2</span>,\n      },\n      medium: {\n        breakpoint: <span class=\"hljs-string\">'(max-width: 768px)'</span>,\n        daysInWeek: <span class=\"hljs-number\">3</span>,\n      },\n      large: {\n        breakpoint: <span class=\"hljs-string\">'(max-width: 960px)'</span>,\n        daysInWeek: <span class=\"hljs-number\">5</span>,\n      },\n    };\n\n    <span class=\"hljs-keyword\">this</span>.breakpointObserver\n      .observe(\n        <span class=\"hljs-built_in\">Object</span>.values(CALENDAR_RESPONSIVE).map(({ breakpoint }) =&gt; breakpoint)\n      )\n      .pipe(takeUntil(<span class=\"hljs-keyword\">this</span>.destroy$))\n      .subscribe((state: BreakpointState) =&gt; {\n        <span class=\"hljs-keyword\">const</span> foundBreakpoint = <span class=\"hljs-built_in\">Object</span>.values(CALENDAR_RESPONSIVE).find(\n          ({ breakpoint }) =&gt; !!state.breakpoints[breakpoint]\n        );\n        <span class=\"hljs-keyword\">if</span> (foundBreakpoint) {\n          <span class=\"hljs-keyword\">this</span>.daysInWeek = foundBreakpoint.daysInWeek;\n        } <span class=\"hljs-keyword\">else</span> {\n          <span class=\"hljs-keyword\">this</span>.daysInWeek = <span class=\"hljs-number\">7</span>;\n        }\n        <span class=\"hljs-keyword\">this</span>.cd.markForCheck();\n      });\n  }\n\n  ngOnDestroy() {\n    <span class=\"hljs-keyword\">this</span>.destroy$.next();\n  }\n}\n";
      /***/
    },

    /***/
    63806: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span class=\"hljs-keyword\">import</span> { NgModule } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CommonModule } from <span class=\"hljs-string\">'@angular/common'</span>;\n<span class=\"hljs-keyword\">import</span> { RouterModule } from <span class=\"hljs-string\">'@angular/router'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarModule, DateAdapter } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoComponent } from <span class=\"hljs-string\">'./component'</span>;\n<span class=\"hljs-keyword\">import</span> { adapterFactory } from <span class=\"hljs-string\">'angular-calendar/date-adapters/date-fns'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory,\n    }),\n    RouterModule.forChild([{ path: <span class=\"hljs-string\">''</span>, component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoModule {}\n";
      /***/
    },

    /***/
    86110: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"alert alert-info\"</span>&gt;</span>\n  Shrink the browser window size to reduce the number of days in the week.\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-week-view</span> [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span> [<span class=\"hljs-attribute\">daysInWeek</span>]=<span class=\"hljs-value\">\"daysInWeek\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-week-view</span>&gt;</span>\n";
      /***/
    },

    /***/
    48022: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import {\n  Component,\n  OnInit,\n  ChangeDetectionStrategy,\n  OnDestroy,\n  ChangeDetectorRef,\n} from '@angular/core';\nimport { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';\nimport { CalendarView } from 'angular-calendar';\nimport { Subject } from 'rxjs';\nimport { takeUntil } from 'rxjs/operators';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: './template.html',\n})\nexport class DemoComponent implements OnInit, OnDestroy {\n  view: CalendarView = CalendarView.Week;\n\n  viewDate = new Date();\n\n  daysInWeek = 7;\n\n  private destroy$ = new Subject<void>();\n\n  constructor(\n    private breakpointObserver: BreakpointObserver,\n    private cd: ChangeDetectorRef\n  ) {}\n\n  ngOnInit() {\n    const CALENDAR_RESPONSIVE = {\n      small: {\n        breakpoint: '(max-width: 576px)',\n        daysInWeek: 2,\n      },\n      medium: {\n        breakpoint: '(max-width: 768px)',\n        daysInWeek: 3,\n      },\n      large: {\n        breakpoint: '(max-width: 960px)',\n        daysInWeek: 5,\n      },\n    };\n\n    this.breakpointObserver\n      .observe(\n        Object.values(CALENDAR_RESPONSIVE).map(({ breakpoint }) => breakpoint)\n      )\n      .pipe(takeUntil(this.destroy$))\n      .subscribe((state: BreakpointState) => {\n        const foundBreakpoint = Object.values(CALENDAR_RESPONSIVE).find(\n          ({ breakpoint }) => !!state.breakpoints[breakpoint]\n        );\n        if (foundBreakpoint) {\n          this.daysInWeek = foundBreakpoint.daysInWeek;\n        } else {\n          this.daysInWeek = 7;\n        }\n        this.cd.markForCheck();\n      });\n  }\n\n  ngOnDestroy() {\n    this.destroy$.next();\n  }\n}\n";
      /***/
    },

    /***/
    23069: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule, DateAdapter } from 'angular-calendar';\nimport { DemoComponent } from './component';\nimport { adapterFactory } from 'angular-calendar/date-adapters/date-fns';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory,\n    }),\n    RouterModule.forChild([{ path: '', component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n})\nexport class DemoModule {}\n";
      /***/
    },

    /***/
    42171: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"alert alert-info\">\n  Shrink the browser window size to reduce the number of days in the week.\n</div>\n\n<mwl-calendar-week-view [viewDate]=\"viewDate\" [daysInWeek]=\"daysInWeek\">\n</mwl-calendar-week-view>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=projects_demos_app_demo-modules_responsive-week-view_sources_ts-es5.js.map