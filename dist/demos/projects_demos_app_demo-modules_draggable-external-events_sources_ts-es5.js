(function () {
  "use strict";

  (self["webpackChunkangular_calendar"] = self["webpackChunkangular_calendar"] || []).push([["projects_demos_app_demo-modules_draggable-external-events_sources_ts"], {
    /***/
    62785: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
          17400),
          highlighted: __webpack_require__(
          /*! !!raw-loader!highlightjs-loader?lang=typescript!./component */
          34254)
        }
      }, {
        filename: 'template.html',
        contents: {
          raw: __webpack_require__(
          /*! !!raw-loader!./template.html */
          60409),
          highlighted: __webpack_require__(
          /*! !!raw-loader!highlightjs-loader?lang=xml!./template.html */
          40247)
        }
      }, {
        filename: 'module.ts',
        contents: {
          raw: __webpack_require__(
          /*! !!raw-loader!./module */
          81349),
          highlighted: __webpack_require__(
          /*! !!raw-loader!highlightjs-loader?lang=typescript!./module */
          80016)
        }
      }];
      /***/
    },

    /***/
    34254: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span class=\"hljs-keyword\">import</span> { Component, ChangeDetectionStrategy } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> {\n  CalendarEvent,\n  CalendarEventTimesChangedEvent,\n  CalendarView,\n} from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { Subject } from <span class=\"hljs-string\">'rxjs'</span>;\n<span class=\"hljs-keyword\">import</span> { colors } from <span class=\"hljs-string\">'../demo-utils/colors'</span>;\n\n@Component({\n  selector: <span class=\"hljs-string\">'mwl-demo-component'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class=\"hljs-string\">'template.html'</span>,\n  styles: [\n    `\n      .drag-active {\n        position: relative;\n        z-index: <span class=\"hljs-number\">1</span>;\n        pointer-events: none;\n      }\n      .drag-over {\n        background-color: #eee;\n      }\n    `,\n  ],\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoComponent {\n  CalendarView = CalendarView;\n\n  view = CalendarView.Month;\n\n  viewDate = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>();\n\n  externalEvents: CalendarEvent[] = [\n    {\n      title: <span class=\"hljs-string\">'Event 1'</span>,\n      color: colors.yellow,\n      start: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(),\n      draggable: <span class=\"hljs-literal\">true</span>,\n    },\n    {\n      title: <span class=\"hljs-string\">'Event 2'</span>,\n      color: colors.blue,\n      start: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(),\n      draggable: <span class=\"hljs-literal\">true</span>,\n    },\n  ];\n\n  events: CalendarEvent[] = [];\n\n  activeDayIsOpen = <span class=\"hljs-literal\">false</span>;\n\n  refresh = <span class=\"hljs-keyword\">new</span> Subject&lt;<span class=\"hljs-built_in\">void</span>&gt;();\n\n  eventDropped({\n    event,\n    newStart,\n    newEnd,\n    allDay,\n  }: CalendarEventTimesChangedEvent): <span class=\"hljs-built_in\">void</span> {\n    <span class=\"hljs-keyword\">const</span> externalIndex = <span class=\"hljs-keyword\">this</span>.externalEvents.indexOf(event);\n    <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">typeof</span> allDay !== <span class=\"hljs-string\">'undefined'</span>) {\n      event.allDay = allDay;\n    }\n    <span class=\"hljs-keyword\">if</span> (externalIndex &gt; -<span class=\"hljs-number\">1</span>) {\n      <span class=\"hljs-keyword\">this</span>.externalEvents.splice(externalIndex, <span class=\"hljs-number\">1</span>);\n      <span class=\"hljs-keyword\">this</span>.events.push(event);\n    }\n    event.start = newStart;\n    <span class=\"hljs-keyword\">if</span> (newEnd) {\n      event.end = newEnd;\n    }\n    <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.view === <span class=\"hljs-string\">'month'</span>) {\n      <span class=\"hljs-keyword\">this</span>.viewDate = newStart;\n      <span class=\"hljs-keyword\">this</span>.activeDayIsOpen = <span class=\"hljs-literal\">true</span>;\n    }\n    <span class=\"hljs-keyword\">this</span>.events = [...this.events];\n  }\n\n  externalDrop(event: CalendarEvent) {\n    <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.externalEvents.indexOf(event) === -<span class=\"hljs-number\">1</span>) {\n      <span class=\"hljs-keyword\">this</span>.events = <span class=\"hljs-keyword\">this</span>.events.filter((iEvent) =&gt; iEvent !== event);\n      <span class=\"hljs-keyword\">this</span>.externalEvents.push(event);\n    }\n  }\n}\n";
      /***/
    },

    /***/
    80016: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span class=\"hljs-keyword\">import</span> { NgModule } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CommonModule } from <span class=\"hljs-string\">'@angular/common'</span>;\n<span class=\"hljs-keyword\">import</span> { RouterModule } from <span class=\"hljs-string\">'@angular/router'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarModule, DateAdapter } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { DragAndDropModule } from <span class=\"hljs-string\">'angular-draggable-droppable'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoUtilsModule } from <span class=\"hljs-string\">'../demo-utils/module'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoComponent } from <span class=\"hljs-string\">'./component'</span>;\n<span class=\"hljs-keyword\">import</span> { adapterFactory } from <span class=\"hljs-string\">'angular-calendar/date-adapters/date-fns'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory,\n    }),\n    DragAndDropModule,\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class=\"hljs-string\">''</span>, component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoModule {}\n";
      /***/
    },

    /***/
    40247: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"row\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"col-md-3\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span>\n      <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card\"</span>\n      <span class=\"hljs-attribute\">mwlDroppable</span>\n      (<span class=\"hljs-attribute\">drop</span>)=<span class=\"hljs-value\">\"externalDrop($event.dropData.event)\"</span>\n      <span class=\"hljs-attribute\">dragOverClass</span>=<span class=\"hljs-value\">\"drag-over\"</span>\n    &gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card-body\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span> *<span class=\"hljs-attribute\">ngIf</span>=<span class=\"hljs-value\">\"externalEvents.length === 0\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">em</span>&gt;</span>No events added<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">em</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ul</span>&gt;</span>\n          <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>\n            *<span class=\"hljs-attribute\">ngFor</span>=<span class=\"hljs-value\">\"let event of externalEvents\"</span>\n            <span class=\"hljs-attribute\">mwlDraggable</span>\n            [<span class=\"hljs-attribute\">dropData</span>]=<span class=\"hljs-value\">\"{event: event}\"</span>\n            [<span class=\"hljs-attribute\">touchStartLongPress</span>]=<span class=\"hljs-value\">\"{ delay: 300, delta: 30 }\"</span>\n            <span class=\"hljs-attribute\">dragActiveClass</span>=<span class=\"hljs-value\">\"drag-active\"</span>\n          &gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"javascript:;\"</span> [<span class=\"hljs-attribute\">style.color</span>]=<span class=\"hljs-value\">\"event.color.primary\"</span>&gt;</span>\n              {{ event.title }}\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\n          <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ul</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"col-md-9\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-demo-utils-calendar-header</span> [(<span class=\"hljs-attribute\">view</span>)]=<span class=\"hljs-value\">\"view\"</span> [(<span class=\"hljs-attribute\">viewDate</span>)]=<span class=\"hljs-value\">\"viewDate\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-demo-utils-calendar-header</span>&gt;</span>\n\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> [<span class=\"hljs-attribute\">ngSwitch</span>]=<span class=\"hljs-value\">\"view\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-month-view</span>\n        *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"CalendarView.Month\"</span>\n        [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n        [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n        [<span class=\"hljs-attribute\">activeDayIsOpen</span>]=<span class=\"hljs-value\">\"activeDayIsOpen\"</span>\n        [<span class=\"hljs-attribute\">refresh</span>]=<span class=\"hljs-value\">\"refresh\"</span>\n        (<span class=\"hljs-attribute\">eventTimesChanged</span>)=<span class=\"hljs-value\">\"eventDropped($event)\"</span>\n      &gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-month-view</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-week-view</span>\n        *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"CalendarView.Week\"</span>\n        [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n        [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n        [<span class=\"hljs-attribute\">refresh</span>]=<span class=\"hljs-value\">\"refresh\"</span>\n        [<span class=\"hljs-attribute\">snapDraggedEvents</span>]=<span class=\"hljs-value\">\"false\"</span>\n        (<span class=\"hljs-attribute\">eventTimesChanged</span>)=<span class=\"hljs-value\">\"eventDropped($event)\"</span>\n      &gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-week-view</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-day-view</span>\n        *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"CalendarView.Day\"</span>\n        [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n        [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n        [<span class=\"hljs-attribute\">refresh</span>]=<span class=\"hljs-value\">\"refresh\"</span>\n        [<span class=\"hljs-attribute\">snapDraggedEvents</span>]=<span class=\"hljs-value\">\"false\"</span>\n        (<span class=\"hljs-attribute\">eventTimesChanged</span>)=<span class=\"hljs-value\">\"eventDropped($event)\"</span>\n      &gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-day-view</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n";
      /***/
    },

    /***/
    17400: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport {\n  CalendarEvent,\n  CalendarEventTimesChangedEvent,\n  CalendarView,\n} from 'angular-calendar';\nimport { Subject } from 'rxjs';\nimport { colors } from '../demo-utils/colors';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html',\n  styles: [\n    `\n      .drag-active {\n        position: relative;\n        z-index: 1;\n        pointer-events: none;\n      }\n      .drag-over {\n        background-color: #eee;\n      }\n    `,\n  ],\n})\nexport class DemoComponent {\n  CalendarView = CalendarView;\n\n  view = CalendarView.Month;\n\n  viewDate = new Date();\n\n  externalEvents: CalendarEvent[] = [\n    {\n      title: 'Event 1',\n      color: colors.yellow,\n      start: new Date(),\n      draggable: true,\n    },\n    {\n      title: 'Event 2',\n      color: colors.blue,\n      start: new Date(),\n      draggable: true,\n    },\n  ];\n\n  events: CalendarEvent[] = [];\n\n  activeDayIsOpen = false;\n\n  refresh = new Subject<void>();\n\n  eventDropped({\n    event,\n    newStart,\n    newEnd,\n    allDay,\n  }: CalendarEventTimesChangedEvent): void {\n    const externalIndex = this.externalEvents.indexOf(event);\n    if (typeof allDay !== 'undefined') {\n      event.allDay = allDay;\n    }\n    if (externalIndex > -1) {\n      this.externalEvents.splice(externalIndex, 1);\n      this.events.push(event);\n    }\n    event.start = newStart;\n    if (newEnd) {\n      event.end = newEnd;\n    }\n    if (this.view === 'month') {\n      this.viewDate = newStart;\n      this.activeDayIsOpen = true;\n    }\n    this.events = [...this.events];\n  }\n\n  externalDrop(event: CalendarEvent) {\n    if (this.externalEvents.indexOf(event) === -1) {\n      this.events = this.events.filter((iEvent) => iEvent !== event);\n      this.externalEvents.push(event);\n    }\n  }\n}\n";
      /***/
    },

    /***/
    81349: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule, DateAdapter } from 'angular-calendar';\nimport { DragAndDropModule } from 'angular-draggable-droppable';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\nimport { adapterFactory } from 'angular-calendar/date-adapters/date-fns';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory,\n    }),\n    DragAndDropModule,\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n})\nexport class DemoModule {}\n";
      /***/
    },

    /***/
    60409: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-md-3\">\n    <div\n      class=\"card\"\n      mwlDroppable\n      (drop)=\"externalDrop($event.dropData.event)\"\n      dragOverClass=\"drag-over\"\n    >\n      <div class=\"card-body\">\n        <p *ngIf=\"externalEvents.length === 0\"><em>No events added</em></p>\n        <ul>\n          <li\n            *ngFor=\"let event of externalEvents\"\n            mwlDraggable\n            [dropData]=\"{event: event}\"\n            [touchStartLongPress]=\"{ delay: 300, delta: 30 }\"\n            dragActiveClass=\"drag-active\"\n          >\n            <a href=\"javascript:;\" [style.color]=\"event.color.primary\">\n              {{ event.title }}\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-9\">\n    <mwl-demo-utils-calendar-header [(view)]=\"view\" [(viewDate)]=\"viewDate\">\n    </mwl-demo-utils-calendar-header>\n\n    <div [ngSwitch]=\"view\">\n      <mwl-calendar-month-view\n        *ngSwitchCase=\"CalendarView.Month\"\n        [viewDate]=\"viewDate\"\n        [events]=\"events\"\n        [activeDayIsOpen]=\"activeDayIsOpen\"\n        [refresh]=\"refresh\"\n        (eventTimesChanged)=\"eventDropped($event)\"\n      >\n      </mwl-calendar-month-view>\n      <mwl-calendar-week-view\n        *ngSwitchCase=\"CalendarView.Week\"\n        [viewDate]=\"viewDate\"\n        [events]=\"events\"\n        [refresh]=\"refresh\"\n        [snapDraggedEvents]=\"false\"\n        (eventTimesChanged)=\"eventDropped($event)\"\n      >\n      </mwl-calendar-week-view>\n      <mwl-calendar-day-view\n        *ngSwitchCase=\"CalendarView.Day\"\n        [viewDate]=\"viewDate\"\n        [events]=\"events\"\n        [refresh]=\"refresh\"\n        [snapDraggedEvents]=\"false\"\n        (eventTimesChanged)=\"eventDropped($event)\"\n      >\n      </mwl-calendar-day-view>\n    </div>\n  </div>\n</div>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=projects_demos_app_demo-modules_draggable-external-events_sources_ts-es5.js.map