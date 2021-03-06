(function () {
  "use strict";

  (self["webpackChunkangular_calendar"] = self["webpackChunkangular_calendar"] || []).push([["projects_demos_app_demo-modules_scroll-to-current-time_sources_ts"], {
    /***/
    53259: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
          56239),
          highlighted: __webpack_require__(
          /*! !!raw-loader!highlightjs-loader?lang=typescript!./component */
          47935)
        }
      }, {
        filename: 'template.html',
        contents: {
          raw: __webpack_require__(
          /*! !!raw-loader!./template.html */
          47731),
          highlighted: __webpack_require__(
          /*! !!raw-loader!highlightjs-loader?lang=xml!./template.html */
          79444)
        }
      }, {
        filename: 'module.ts',
        contents: {
          raw: __webpack_require__(
          /*! !!raw-loader!./module */
          98695),
          highlighted: __webpack_require__(
          /*! !!raw-loader!highlightjs-loader?lang=typescript!./module */
          37369)
        }
      }];
      /***/
    },

    /***/
    47935: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span class=\"hljs-keyword\">import</span> {\n  AfterViewInit,\n  ChangeDetectionStrategy,\n  ChangeDetectorRef,\n  Component,\n  ElementRef,\n  ViewChild,\n} from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarEvent, CalendarView } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { differenceInMinutes, startOfDay, startOfHour } from <span class=\"hljs-string\">'date-fns'</span>;\n\n@Component({\n  selector: <span class=\"hljs-string\">'mwl-demo-component'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class=\"hljs-string\">'./template.html'</span>,\n  styles: [\n    `\n      .scroll-container {\n        height: calc(<span class=\"hljs-number\">100</span>vh - <span class=\"hljs-number\">320</span>px);\n        overflow-y: auto;\n      }\n    `,\n  ],\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoComponent <span class=\"hljs-keyword\">implements</span> AfterViewInit {\n  @ViewChild(<span class=\"hljs-string\">'scrollContainer'</span>) scrollContainer: ElementRef&lt;HTMLElement&gt;;\n\n  view: CalendarView = CalendarView.Week;\n\n  viewDate = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>();\n\n  events: CalendarEvent[] = [];\n\n  <span class=\"hljs-constructor\"><span class=\"hljs-keyword\">constructor</span>(private cdr: ChangeDetectorRef) </span>{}\n\n  ngAfterViewInit() {\n    <span class=\"hljs-keyword\">this</span>.scrollToCurrentView();\n  }\n\n  viewChanged() {\n    <span class=\"hljs-keyword\">this</span>.cdr.detectChanges();\n    <span class=\"hljs-keyword\">this</span>.scrollToCurrentView();\n  }\n\n  <span class=\"hljs-keyword\">private</span> scrollToCurrentView() {\n    <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.view === CalendarView.Week || CalendarView.Day) {\n      <span class=\"hljs-comment\">// each hour is 60px high, so to get the pixels to scroll it's just the amount of minutes since midnight</span>\n      <span class=\"hljs-keyword\">const</span> minutesSinceStartOfDay = differenceInMinutes(\n        startOfHour(<span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>()),\n        startOfDay(<span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>())\n      );\n      <span class=\"hljs-keyword\">const</span> headerHeight = <span class=\"hljs-keyword\">this</span>.view === CalendarView.Week ? <span class=\"hljs-number\">60</span> : <span class=\"hljs-number\">0</span>;\n      <span class=\"hljs-keyword\">this</span>.scrollContainer.nativeElement.scrollTop =\n        minutesSinceStartOfDay + headerHeight;\n    }\n  }\n}\n";
      /***/
    },

    /***/
    37369: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span class=\"hljs-keyword\">import</span> { NgModule } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CommonModule } from <span class=\"hljs-string\">'@angular/common'</span>;\n<span class=\"hljs-keyword\">import</span> { RouterModule } from <span class=\"hljs-string\">'@angular/router'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarModule, DateAdapter } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoUtilsModule } from <span class=\"hljs-string\">'../demo-utils/module'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoComponent } from <span class=\"hljs-string\">'./component'</span>;\n<span class=\"hljs-keyword\">import</span> { adapterFactory } from <span class=\"hljs-string\">'angular-calendar/date-adapters/date-fns'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory,\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class=\"hljs-string\">''</span>, component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoModule {}\n";
      /***/
    },

    /***/
    79444: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-demo-utils-calendar-header</span>\n  [(<span class=\"hljs-attribute\">view</span>)]=<span class=\"hljs-value\">\"view\"</span>\n  [(<span class=\"hljs-attribute\">viewDate</span>)]=<span class=\"hljs-value\">\"viewDate\"</span>\n  (<span class=\"hljs-attribute\">viewChange</span>)=<span class=\"hljs-value\">\"viewChanged()\"</span>\n&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-demo-utils-calendar-header</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> [<span class=\"hljs-attribute\">ngSwitch</span>]=<span class=\"hljs-value\">\"view\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"scroll-container\"</span> #<span class=\"hljs-attribute\">scrollContainer</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-month-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'month'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n  &gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-month-view</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-week-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'week'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n  &gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-week-view</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-day-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'day'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n  &gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-day-view</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n";
      /***/
    },

    /***/
    56239: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import {\n  AfterViewInit,\n  ChangeDetectionStrategy,\n  ChangeDetectorRef,\n  Component,\n  ElementRef,\n  ViewChild,\n} from '@angular/core';\nimport { CalendarEvent, CalendarView } from 'angular-calendar';\nimport { differenceInMinutes, startOfDay, startOfHour } from 'date-fns';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: './template.html',\n  styles: [\n    `\n      .scroll-container {\n        height: calc(100vh - 320px);\n        overflow-y: auto;\n      }\n    `,\n  ],\n})\nexport class DemoComponent implements AfterViewInit {\n  @ViewChild('scrollContainer') scrollContainer: ElementRef<HTMLElement>;\n\n  view: CalendarView = CalendarView.Week;\n\n  viewDate = new Date();\n\n  events: CalendarEvent[] = [];\n\n  constructor(private cdr: ChangeDetectorRef) {}\n\n  ngAfterViewInit() {\n    this.scrollToCurrentView();\n  }\n\n  viewChanged() {\n    this.cdr.detectChanges();\n    this.scrollToCurrentView();\n  }\n\n  private scrollToCurrentView() {\n    if (this.view === CalendarView.Week || CalendarView.Day) {\n      // each hour is 60px high, so to get the pixels to scroll it's just the amount of minutes since midnight\n      const minutesSinceStartOfDay = differenceInMinutes(\n        startOfHour(new Date()),\n        startOfDay(new Date())\n      );\n      const headerHeight = this.view === CalendarView.Week ? 60 : 0;\n      this.scrollContainer.nativeElement.scrollTop =\n        minutesSinceStartOfDay + headerHeight;\n    }\n  }\n}\n";
      /***/
    },

    /***/
    98695: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule, DateAdapter } from 'angular-calendar';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\nimport { adapterFactory } from 'angular-calendar/date-adapters/date-fns';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory,\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n})\nexport class DemoModule {}\n";
      /***/
    },

    /***/
    47731: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mwl-demo-utils-calendar-header\n  [(view)]=\"view\"\n  [(viewDate)]=\"viewDate\"\n  (viewChange)=\"viewChanged()\"\n>\n</mwl-demo-utils-calendar-header>\n\n<div [ngSwitch]=\"view\" class=\"scroll-container\" #scrollContainer>\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n  >\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n  >\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n  >\n  </mwl-calendar-day-view>\n</div>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=projects_demos_app_demo-modules_scroll-to-current-time_sources_ts-es5.js.map