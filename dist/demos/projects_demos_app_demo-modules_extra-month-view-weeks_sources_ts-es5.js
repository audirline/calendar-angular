(function () {
  "use strict";

  (self["webpackChunkangular_calendar"] = self["webpackChunkangular_calendar"] || []).push([["projects_demos_app_demo-modules_extra-month-view-weeks_sources_ts"], {
    /***/
    42490: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
          27278),
          highlighted: __webpack_require__(
          /*! !!raw-loader!highlightjs-loader?lang=typescript!./component */
          61060)
        }
      }, {
        filename: 'template.html',
        contents: {
          raw: __webpack_require__(
          /*! !!raw-loader!./template.html */
          34665),
          highlighted: __webpack_require__(
          /*! !!raw-loader!highlightjs-loader?lang=xml!./template.html */
          22846)
        }
      }, {
        filename: 'module.ts',
        contents: {
          raw: __webpack_require__(
          /*! !!raw-loader!./module */
          34065),
          highlighted: __webpack_require__(
          /*! !!raw-loader!highlightjs-loader?lang=typescript!./module */
          16024)
        }
      }];
      /***/
    },

    /***/
    61060: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span class=\"hljs-keyword\">import</span> { Component, ChangeDetectionStrategy, Injectable } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarEvent, CalendarUtils } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { subWeeks, startOfMonth, endOfMonth, addWeeks } from <span class=\"hljs-string\">'date-fns'</span>;\n<span class=\"hljs-keyword\">import</span> { GetMonthViewArgs, MonthView } from <span class=\"hljs-string\">'calendar-utils'</span>;\n\n@Injectable()\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> MyCalendarUtils extends CalendarUtils {\n  getMonthView(args: GetMonthViewArgs): MonthView {\n    args.viewStart = subWeeks(startOfMonth(args.viewDate), <span class=\"hljs-number\">1</span>);\n    args.viewEnd = addWeeks(endOfMonth(args.viewDate), <span class=\"hljs-number\">1</span>);\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">super</span>.getMonthView(args);\n  }\n}\n\n@Component({\n  selector: <span class=\"hljs-string\">'mwl-demo-component'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class=\"hljs-string\">'template.html'</span>,\n  providers: [\n    {\n      provide: CalendarUtils,\n      useClass: MyCalendarUtils,\n    },\n  ],\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoComponent {\n  viewDate: <span class=\"hljs-built_in\">Date</span> = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>();\n\n  events: CalendarEvent[] = [];\n}\n";
      /***/
    },

    /***/
    16024: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span class=\"hljs-keyword\">import</span> { NgModule } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CommonModule } from <span class=\"hljs-string\">'@angular/common'</span>;\n<span class=\"hljs-keyword\">import</span> { RouterModule } from <span class=\"hljs-string\">'@angular/router'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarModule, DateAdapter } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoUtilsModule } from <span class=\"hljs-string\">'../demo-utils/module'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoComponent } from <span class=\"hljs-string\">'./component'</span>;\n<span class=\"hljs-keyword\">import</span> { adapterFactory } from <span class=\"hljs-string\">'angular-calendar/date-adapters/date-fns'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory,\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class=\"hljs-string\">''</span>, component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoModule {}\n";
      /***/
    },

    /***/
    22846: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-month-view</span> [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span> [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-month-view</span>&gt;</span>\n";
      /***/
    },

    /***/
    27278: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, ChangeDetectionStrategy, Injectable } from '@angular/core';\nimport { CalendarEvent, CalendarUtils } from 'angular-calendar';\nimport { subWeeks, startOfMonth, endOfMonth, addWeeks } from 'date-fns';\nimport { GetMonthViewArgs, MonthView } from 'calendar-utils';\n\n@Injectable()\nexport class MyCalendarUtils extends CalendarUtils {\n  getMonthView(args: GetMonthViewArgs): MonthView {\n    args.viewStart = subWeeks(startOfMonth(args.viewDate), 1);\n    args.viewEnd = addWeeks(endOfMonth(args.viewDate), 1);\n    return super.getMonthView(args);\n  }\n}\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html',\n  providers: [\n    {\n      provide: CalendarUtils,\n      useClass: MyCalendarUtils,\n    },\n  ],\n})\nexport class DemoComponent {\n  viewDate: Date = new Date();\n\n  events: CalendarEvent[] = [];\n}\n";
      /***/
    },

    /***/
    34065: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule, DateAdapter } from 'angular-calendar';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\nimport { adapterFactory } from 'angular-calendar/date-adapters/date-fns';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory,\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n})\nexport class DemoModule {}\n";
      /***/
    },

    /***/
    34665: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mwl-calendar-month-view [viewDate]=\"viewDate\" [events]=\"events\">\n</mwl-calendar-month-view>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=projects_demos_app_demo-modules_extra-month-view-weeks_sources_ts-es5.js.map