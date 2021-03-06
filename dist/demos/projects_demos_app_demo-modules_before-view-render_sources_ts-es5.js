(function () {
  "use strict";

  (self["webpackChunkangular_calendar"] = self["webpackChunkangular_calendar"] || []).push([["projects_demos_app_demo-modules_before-view-render_sources_ts"], {
    /***/
    64184: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
          37508),
          highlighted: __webpack_require__(
          /*! !!raw-loader!highlightjs-loader?lang=typescript!./component */
          86372)
        }
      }, {
        filename: 'template.html',
        contents: {
          raw: __webpack_require__(
          /*! !!raw-loader!./template.html */
          25359),
          highlighted: __webpack_require__(
          /*! !!raw-loader!highlightjs-loader?lang=xml!./template.html */
          39176)
        }
      }, {
        filename: 'module.ts',
        contents: {
          raw: __webpack_require__(
          /*! !!raw-loader!./module */
          73355),
          highlighted: __webpack_require__(
          /*! !!raw-loader!highlightjs-loader?lang=typescript!./module */
          17046)
        }
      }];
      /***/
    },

    /***/
    86372: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span class=\"hljs-keyword\">import</span> {\n  Component,\n  ChangeDetectionStrategy,\n  ViewEncapsulation,\n} from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> {\n  CalendarEvent,\n  CalendarMonthViewBeforeRenderEvent,\n  CalendarWeekViewBeforeRenderEvent,\n  CalendarDayViewBeforeRenderEvent,\n  CalendarView,\n} from <span class=\"hljs-string\">'angular-calendar'</span>;\n\n@Component({\n  selector: <span class=\"hljs-string\">'mwl-demo-component'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  encapsulation: ViewEncapsulation.None,\n  templateUrl: <span class=\"hljs-string\">'template.html'</span>,\n  styles: [\n    `\n      .cal-month-view .bg-pink,\n      .cal-week-view .cal-day-columns .bg-pink,\n      .cal-day-view .bg-pink {\n        background-color: hotpink !important;\n      }\n    `,\n  ],\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoComponent {\n  view: CalendarView = CalendarView.Month;\n\n  viewDate: <span class=\"hljs-built_in\">Date</span> = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>();\n\n  events: CalendarEvent[] = [];\n\n  beforeMonthViewRender(renderEvent: CalendarMonthViewBeforeRenderEvent): <span class=\"hljs-built_in\">void</span> {\n    renderEvent.body.forEach((day) =&gt; {\n      <span class=\"hljs-keyword\">const</span> dayOfMonth = day.date.getDate();\n      <span class=\"hljs-keyword\">if</span> (dayOfMonth &gt; <span class=\"hljs-number\">5</span> &amp;&amp; dayOfMonth &lt; <span class=\"hljs-number\">10</span> &amp;&amp; day.inMonth) {\n        day.cssClass = <span class=\"hljs-string\">'bg-pink'</span>;\n      }\n    });\n  }\n\n  beforeWeekViewRender(renderEvent: CalendarWeekViewBeforeRenderEvent) {\n    renderEvent.hourColumns.forEach((hourColumn) =&gt; {\n      hourColumn.hours.forEach((hour) =&gt; {\n        hour.segments.forEach((segment) =&gt; {\n          <span class=\"hljs-keyword\">if</span> (\n            segment.date.getHours() &gt;= <span class=\"hljs-number\">2</span> &amp;&amp;\n            segment.date.getHours() &lt;= <span class=\"hljs-number\">5</span> &amp;&amp;\n            segment.date.getDay() === <span class=\"hljs-number\">2</span>\n          ) {\n            segment.cssClass = <span class=\"hljs-string\">'bg-pink'</span>;\n          }\n        });\n      });\n    });\n  }\n\n  beforeDayViewRender(renderEvent: CalendarDayViewBeforeRenderEvent) {\n    renderEvent.hourColumns.forEach((hourColumn) =&gt; {\n      hourColumn.hours.forEach((hour) =&gt; {\n        hour.segments.forEach((segment) =&gt; {\n          <span class=\"hljs-keyword\">if</span> (segment.date.getHours() &gt;= <span class=\"hljs-number\">2</span> &amp;&amp; segment.date.getHours() &lt;= <span class=\"hljs-number\">5</span>) {\n            segment.cssClass = <span class=\"hljs-string\">'bg-pink'</span>;\n          }\n        });\n      });\n    });\n  }\n}\n";
      /***/
    },

    /***/
    17046: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span class=\"hljs-keyword\">import</span> { NgModule } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CommonModule } from <span class=\"hljs-string\">'@angular/common'</span>;\n<span class=\"hljs-keyword\">import</span> { RouterModule } from <span class=\"hljs-string\">'@angular/router'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarModule, DateAdapter } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoUtilsModule } from <span class=\"hljs-string\">'../demo-utils/module'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoComponent } from <span class=\"hljs-string\">'./component'</span>;\n<span class=\"hljs-keyword\">import</span> { adapterFactory } from <span class=\"hljs-string\">'angular-calendar/date-adapters/date-fns'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory,\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class=\"hljs-string\">''</span>, component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoModule {}\n";
      /***/
    },

    /***/
    39176: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-demo-utils-calendar-header</span> [(<span class=\"hljs-attribute\">view</span>)]=<span class=\"hljs-value\">\"view\"</span> [(<span class=\"hljs-attribute\">viewDate</span>)]=<span class=\"hljs-value\">\"viewDate\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-demo-utils-calendar-header</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"alert alert-info\"</span>&gt;</span>\n  You can use each views beforeViewRender output to add a custom cssClass to\n  different cells to add styling for disabled time slots\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> [<span class=\"hljs-attribute\">ngSwitch</span>]=<span class=\"hljs-value\">\"view\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-month-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'month'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n    (<span class=\"hljs-attribute\">beforeViewRender</span>)=<span class=\"hljs-value\">\"beforeMonthViewRender($event)\"</span>\n  &gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-month-view</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-week-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'week'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n    (<span class=\"hljs-attribute\">beforeViewRender</span>)=<span class=\"hljs-value\">\"beforeWeekViewRender($event)\"</span>\n  &gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-week-view</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-day-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'day'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n    (<span class=\"hljs-attribute\">beforeViewRender</span>)=<span class=\"hljs-value\">\"beforeDayViewRender($event)\"</span>\n  &gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-day-view</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n";
      /***/
    },

    /***/
    37508: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import {\n  Component,\n  ChangeDetectionStrategy,\n  ViewEncapsulation,\n} from '@angular/core';\nimport {\n  CalendarEvent,\n  CalendarMonthViewBeforeRenderEvent,\n  CalendarWeekViewBeforeRenderEvent,\n  CalendarDayViewBeforeRenderEvent,\n  CalendarView,\n} from 'angular-calendar';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  encapsulation: ViewEncapsulation.None,\n  templateUrl: 'template.html',\n  styles: [\n    `\n      .cal-month-view .bg-pink,\n      .cal-week-view .cal-day-columns .bg-pink,\n      .cal-day-view .bg-pink {\n        background-color: hotpink !important;\n      }\n    `,\n  ],\n})\nexport class DemoComponent {\n  view: CalendarView = CalendarView.Month;\n\n  viewDate: Date = new Date();\n\n  events: CalendarEvent[] = [];\n\n  beforeMonthViewRender(renderEvent: CalendarMonthViewBeforeRenderEvent): void {\n    renderEvent.body.forEach((day) => {\n      const dayOfMonth = day.date.getDate();\n      if (dayOfMonth > 5 && dayOfMonth < 10 && day.inMonth) {\n        day.cssClass = 'bg-pink';\n      }\n    });\n  }\n\n  beforeWeekViewRender(renderEvent: CalendarWeekViewBeforeRenderEvent) {\n    renderEvent.hourColumns.forEach((hourColumn) => {\n      hourColumn.hours.forEach((hour) => {\n        hour.segments.forEach((segment) => {\n          if (\n            segment.date.getHours() >= 2 &&\n            segment.date.getHours() <= 5 &&\n            segment.date.getDay() === 2\n          ) {\n            segment.cssClass = 'bg-pink';\n          }\n        });\n      });\n    });\n  }\n\n  beforeDayViewRender(renderEvent: CalendarDayViewBeforeRenderEvent) {\n    renderEvent.hourColumns.forEach((hourColumn) => {\n      hourColumn.hours.forEach((hour) => {\n        hour.segments.forEach((segment) => {\n          if (segment.date.getHours() >= 2 && segment.date.getHours() <= 5) {\n            segment.cssClass = 'bg-pink';\n          }\n        });\n      });\n    });\n  }\n}\n";
      /***/
    },

    /***/
    73355: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule, DateAdapter } from 'angular-calendar';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\nimport { adapterFactory } from 'angular-calendar/date-adapters/date-fns';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory,\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n})\nexport class DemoModule {}\n";
      /***/
    },

    /***/
    25359: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mwl-demo-utils-calendar-header [(view)]=\"view\" [(viewDate)]=\"viewDate\">\n</mwl-demo-utils-calendar-header>\n\n<div class=\"alert alert-info\">\n  You can use each views beforeViewRender output to add a custom cssClass to\n  different cells to add styling for disabled time slots\n</div>\n\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    (beforeViewRender)=\"beforeMonthViewRender($event)\"\n  >\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    (beforeViewRender)=\"beforeWeekViewRender($event)\"\n  >\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    (beforeViewRender)=\"beforeDayViewRender($event)\"\n  >\n  </mwl-calendar-day-view>\n</div>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=projects_demos_app_demo-modules_before-view-render_sources_ts-es5.js.map