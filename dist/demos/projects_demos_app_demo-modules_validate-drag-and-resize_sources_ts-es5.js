(function () {
  "use strict";

  (self["webpackChunkangular_calendar"] = self["webpackChunkangular_calendar"] || []).push([["projects_demos_app_demo-modules_validate-drag-and-resize_sources_ts"], {
    /***/
    46456: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
          32917),
          highlighted: __webpack_require__(
          /*! !!raw-loader!highlightjs-loader?lang=typescript!./component */
          39439)
        }
      }, {
        filename: 'template.html',
        contents: {
          raw: __webpack_require__(
          /*! !!raw-loader!./template.html */
          72853),
          highlighted: __webpack_require__(
          /*! !!raw-loader!highlightjs-loader?lang=xml!./template.html */
          7539)
        }
      }, {
        filename: 'module.ts',
        contents: {
          raw: __webpack_require__(
          /*! !!raw-loader!./module */
          40160),
          highlighted: __webpack_require__(
          /*! !!raw-loader!highlightjs-loader?lang=typescript!./module */
          52983)
        }
      }];
      /***/
    },

    /***/
    39439: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span class=\"hljs-keyword\">import</span> {\n  ChangeDetectionStrategy,\n  Component,\n  ViewEncapsulation,\n} from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { Subject } from <span class=\"hljs-string\">'rxjs'</span>;\n<span class=\"hljs-keyword\">import</span> {\n  CalendarEvent,\n  CalendarEventTimesChangedEvent,\n  CalendarView,\n} from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { colors } from <span class=\"hljs-string\">'../demo-utils/colors'</span>;\n<span class=\"hljs-keyword\">import</span> {\n  addDays,\n  addHours,\n  isSameDay,\n  setDay,\n  startOfDay,\n  subDays,\n  subSeconds,\n} from <span class=\"hljs-string\">'date-fns'</span>;\n\n@Component({\n  selector: <span class=\"hljs-string\">'mwl-demo-component'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class=\"hljs-string\">'template.html'</span>,\n  styles: [\n    `\n      .invalid-position .cal-event {\n        background-color: #ad2121 !important;\n        color: #fff;\n      }\n    `,\n  ],\n  encapsulation: ViewEncapsulation.None,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoComponent {\n  view: CalendarView = CalendarView.Week;\n\n  viewDate: <span class=\"hljs-built_in\">Date</span> = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>();\n\n  events: CalendarEvent[] = [\n    {\n      start: subDays(startOfDay(<span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>()), <span class=\"hljs-number\">1</span>),\n      end: addDays(<span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(), <span class=\"hljs-number\">1</span>),\n      title: <span class=\"hljs-string\">'A 3 day event'</span>,\n      color: colors.blue,\n      allDay: <span class=\"hljs-literal\">true</span>,\n      resizable: {\n        beforeStart: <span class=\"hljs-literal\">true</span>,\n        afterEnd: <span class=\"hljs-literal\">true</span>,\n      },\n      draggable: <span class=\"hljs-literal\">true</span>,\n    },\n    {\n      start: addHours(startOfDay(setDay(<span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(), <span class=\"hljs-number\">3</span>)), <span class=\"hljs-number\">2</span>),\n      end: subSeconds(addHours(startOfDay(setDay(<span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(), <span class=\"hljs-number\">3</span>)), <span class=\"hljs-number\">3</span>), <span class=\"hljs-number\">1</span>),\n      title: <span class=\"hljs-string\">'An short event'</span>,\n      color: colors.yellow,\n      resizable: {\n        beforeStart: <span class=\"hljs-literal\">true</span>,\n        afterEnd: <span class=\"hljs-literal\">true</span>,\n      },\n      draggable: <span class=\"hljs-literal\">true</span>,\n    },\n    {\n      start: addHours(startOfDay(setDay(<span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(), <span class=\"hljs-number\">3</span>)), <span class=\"hljs-number\">5</span>),\n      end: subSeconds(addHours(startOfDay(setDay(<span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(), <span class=\"hljs-number\">3</span>)), <span class=\"hljs-number\">10</span>), <span class=\"hljs-number\">1</span>),\n      title: <span class=\"hljs-string\">'A draggable and resizable event'</span>,\n      color: colors.yellow,\n      resizable: {\n        beforeStart: <span class=\"hljs-literal\">true</span>,\n        afterEnd: <span class=\"hljs-literal\">true</span>,\n      },\n      draggable: <span class=\"hljs-literal\">true</span>,\n    },\n  ];\n\n  refresh = <span class=\"hljs-keyword\">new</span> Subject&lt;<span class=\"hljs-built_in\">void</span>&gt;();\n\n  validateEventTimesChanged = (\n    { event, newStart, newEnd, allDay }: CalendarEventTimesChangedEvent,\n    addCssClass = <span class=\"hljs-literal\">true</span>\n  ) =&gt; {\n    <span class=\"hljs-keyword\">if</span> (event.allDay) {\n      <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">true</span>;\n    }\n\n    <span class=\"hljs-keyword\">delete</span> event.cssClass;\n    <span class=\"hljs-comment\">// don't allow dragging or resizing events to different days</span>\n    <span class=\"hljs-keyword\">const</span> sameDay = isSameDay(newStart, newEnd);\n\n    <span class=\"hljs-keyword\">if</span> (!sameDay) {\n      <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">false</span>;\n    }\n\n    <span class=\"hljs-comment\">// don't allow dragging events to the same times as other events</span>\n    <span class=\"hljs-keyword\">const</span> overlappingEvent = <span class=\"hljs-keyword\">this</span>.events.find((otherEvent) =&gt; {\n      <span class=\"hljs-keyword\">return</span> (\n        otherEvent !== event &amp;&amp;\n        !otherEvent.allDay &amp;&amp;\n        ((otherEvent.start &lt; newStart &amp;&amp; newStart &lt; otherEvent.end) ||\n          (otherEvent.start &lt; newEnd &amp;&amp; newStart &lt; otherEvent.end))\n      );\n    });\n\n    <span class=\"hljs-keyword\">if</span> (overlappingEvent) {\n      <span class=\"hljs-keyword\">if</span> (addCssClass) {\n        event.cssClass = <span class=\"hljs-string\">'invalid-position'</span>;\n      } <span class=\"hljs-keyword\">else</span> {\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">false</span>;\n      }\n    }\n\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">true</span>;\n  };\n\n  eventTimesChanged(\n    eventTimesChangedEvent: CalendarEventTimesChangedEvent\n  ): <span class=\"hljs-built_in\">void</span> {\n    <span class=\"hljs-keyword\">delete</span> eventTimesChangedEvent.event.cssClass;\n    <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.validateEventTimesChanged(eventTimesChangedEvent, <span class=\"hljs-literal\">false</span>)) {\n      <span class=\"hljs-keyword\">const</span> { event, newStart, newEnd } = eventTimesChangedEvent;\n      event.start = newStart;\n      event.end = newEnd;\n      <span class=\"hljs-keyword\">this</span>.refresh.next();\n    }\n  }\n}\n";
      /***/
    },

    /***/
    52983: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span class=\"hljs-keyword\">import</span> { NgModule } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CommonModule } from <span class=\"hljs-string\">'@angular/common'</span>;\n<span class=\"hljs-keyword\">import</span> { RouterModule } from <span class=\"hljs-string\">'@angular/router'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarModule, DateAdapter } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoUtilsModule } from <span class=\"hljs-string\">'../demo-utils/module'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoComponent } from <span class=\"hljs-string\">'./component'</span>;\n<span class=\"hljs-keyword\">import</span> { adapterFactory } from <span class=\"hljs-string\">'angular-calendar/date-adapters/date-fns'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory,\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class=\"hljs-string\">''</span>, component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoModule {}\n";
      /***/
    },

    /***/
    7539: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-demo-utils-calendar-header</span> [(<span class=\"hljs-attribute\">view</span>)]=<span class=\"hljs-value\">\"view\"</span> [(<span class=\"hljs-attribute\">viewDate</span>)]=<span class=\"hljs-value\">\"viewDate\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-demo-utils-calendar-header</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> [<span class=\"hljs-attribute\">ngSwitch</span>]=<span class=\"hljs-value\">\"view\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-month-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'month'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n    [<span class=\"hljs-attribute\">activeDayIsOpen</span>]=<span class=\"hljs-value\">\"true\"</span>\n    [<span class=\"hljs-attribute\">refresh</span>]=<span class=\"hljs-value\">\"refresh\"</span>\n    (<span class=\"hljs-attribute\">eventTimesChanged</span>)=<span class=\"hljs-value\">\"eventTimesChanged($event)\"</span>\n  &gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-month-view</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-week-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'week'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n    [<span class=\"hljs-attribute\">refresh</span>]=<span class=\"hljs-value\">\"refresh\"</span>\n    [<span class=\"hljs-attribute\">validateEventTimesChanged</span>]=<span class=\"hljs-value\">\"validateEventTimesChanged\"</span>\n    (<span class=\"hljs-attribute\">eventTimesChanged</span>)=<span class=\"hljs-value\">\"eventTimesChanged($event)\"</span>\n  &gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-week-view</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-day-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'day'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n    [<span class=\"hljs-attribute\">refresh</span>]=<span class=\"hljs-value\">\"refresh\"</span>\n    [<span class=\"hljs-attribute\">validateEventTimesChanged</span>]=<span class=\"hljs-value\">\"validateEventTimesChanged\"</span>\n    (<span class=\"hljs-attribute\">eventTimesChanged</span>)=<span class=\"hljs-value\">\"eventTimesChanged($event)\"</span>\n  &gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-day-view</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n";
      /***/
    },

    /***/
    32917: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import {\n  ChangeDetectionStrategy,\n  Component,\n  ViewEncapsulation,\n} from '@angular/core';\nimport { Subject } from 'rxjs';\nimport {\n  CalendarEvent,\n  CalendarEventTimesChangedEvent,\n  CalendarView,\n} from 'angular-calendar';\nimport { colors } from '../demo-utils/colors';\nimport {\n  addDays,\n  addHours,\n  isSameDay,\n  setDay,\n  startOfDay,\n  subDays,\n  subSeconds,\n} from 'date-fns';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html',\n  styles: [\n    `\n      .invalid-position .cal-event {\n        background-color: #ad2121 !important;\n        color: #fff;\n      }\n    `,\n  ],\n  encapsulation: ViewEncapsulation.None,\n})\nexport class DemoComponent {\n  view: CalendarView = CalendarView.Week;\n\n  viewDate: Date = new Date();\n\n  events: CalendarEvent[] = [\n    {\n      start: subDays(startOfDay(new Date()), 1),\n      end: addDays(new Date(), 1),\n      title: 'A 3 day event',\n      color: colors.blue,\n      allDay: true,\n      resizable: {\n        beforeStart: true,\n        afterEnd: true,\n      },\n      draggable: true,\n    },\n    {\n      start: addHours(startOfDay(setDay(new Date(), 3)), 2),\n      end: subSeconds(addHours(startOfDay(setDay(new Date(), 3)), 3), 1),\n      title: 'An short event',\n      color: colors.yellow,\n      resizable: {\n        beforeStart: true,\n        afterEnd: true,\n      },\n      draggable: true,\n    },\n    {\n      start: addHours(startOfDay(setDay(new Date(), 3)), 5),\n      end: subSeconds(addHours(startOfDay(setDay(new Date(), 3)), 10), 1),\n      title: 'A draggable and resizable event',\n      color: colors.yellow,\n      resizable: {\n        beforeStart: true,\n        afterEnd: true,\n      },\n      draggable: true,\n    },\n  ];\n\n  refresh = new Subject<void>();\n\n  validateEventTimesChanged = (\n    { event, newStart, newEnd, allDay }: CalendarEventTimesChangedEvent,\n    addCssClass = true\n  ) => {\n    if (event.allDay) {\n      return true;\n    }\n\n    delete event.cssClass;\n    // don't allow dragging or resizing events to different days\n    const sameDay = isSameDay(newStart, newEnd);\n\n    if (!sameDay) {\n      return false;\n    }\n\n    // don't allow dragging events to the same times as other events\n    const overlappingEvent = this.events.find((otherEvent) => {\n      return (\n        otherEvent !== event &&\n        !otherEvent.allDay &&\n        ((otherEvent.start < newStart && newStart < otherEvent.end) ||\n          (otherEvent.start < newEnd && newStart < otherEvent.end))\n      );\n    });\n\n    if (overlappingEvent) {\n      if (addCssClass) {\n        event.cssClass = 'invalid-position';\n      } else {\n        return false;\n      }\n    }\n\n    return true;\n  };\n\n  eventTimesChanged(\n    eventTimesChangedEvent: CalendarEventTimesChangedEvent\n  ): void {\n    delete eventTimesChangedEvent.event.cssClass;\n    if (this.validateEventTimesChanged(eventTimesChangedEvent, false)) {\n      const { event, newStart, newEnd } = eventTimesChangedEvent;\n      event.start = newStart;\n      event.end = newEnd;\n      this.refresh.next();\n    }\n  }\n}\n";
      /***/
    },

    /***/
    40160: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule, DateAdapter } from 'angular-calendar';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\nimport { adapterFactory } from 'angular-calendar/date-adapters/date-fns';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory,\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n})\nexport class DemoModule {}\n";
      /***/
    },

    /***/
    72853: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mwl-demo-utils-calendar-header [(view)]=\"view\" [(viewDate)]=\"viewDate\">\n</mwl-demo-utils-calendar-header>\n\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [activeDayIsOpen]=\"true\"\n    [refresh]=\"refresh\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\n  >\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    [validateEventTimesChanged]=\"validateEventTimesChanged\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\n  >\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    [validateEventTimesChanged]=\"validateEventTimesChanged\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\n  >\n  </mwl-calendar-day-view>\n</div>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=projects_demos_app_demo-modules_validate-drag-and-resize_sources_ts-es5.js.map