(function () {
  "use strict";

  (self["webpackChunkangular_calendar"] = self["webpackChunkangular_calendar"] || []).push([["projects_demos_app_demo-modules_i18n_sources_ts"], {
    /***/
    3565: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
          76547),
          highlighted: __webpack_require__(
          /*! !!raw-loader!highlightjs-loader?lang=typescript!./component */
          29086)
        }
      }, {
        filename: 'custom-date-formatter.provider.ts',
        contents: {
          raw: __webpack_require__(
          /*! !!raw-loader!./custom-date-formatter.provider */
          72351),
          highlighted: __webpack_require__(
          /*! !!raw-loader!highlightjs-loader?lang=typescript!./custom-date-formatter.provider */
          78711)
        }
      }, {
        filename: 'template.html',
        contents: {
          raw: __webpack_require__(
          /*! !!raw-loader!./template.html */
          16755),
          highlighted: __webpack_require__(
          /*! !!raw-loader!highlightjs-loader?lang=xml!./template.html */
          44341)
        }
      }, {
        filename: 'module.ts',
        contents: {
          raw: __webpack_require__(
          /*! !!raw-loader!./module */
          64544),
          highlighted: __webpack_require__(
          /*! !!raw-loader!highlightjs-loader?lang=typescript!./module */
          27497)
        }
      }];
      /***/
    },

    /***/
    29086: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span class=\"hljs-keyword\">import</span> { Component, ChangeDetectionStrategy } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> {\n  CalendarDateFormatter,\n  CalendarEvent,\n  CalendarView,\n  DAYS_OF_WEEK,\n} from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { CustomDateFormatter } from <span class=\"hljs-string\">'./custom-date-formatter.provider'</span>;\n\n@Component({\n  selector: <span class=\"hljs-string\">'mwl-demo-component'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class=\"hljs-string\">'template.html'</span>,\n  providers: [\n    {\n      provide: CalendarDateFormatter,\n      useClass: CustomDateFormatter,\n    },\n  ],\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoComponent {\n  view: CalendarView = CalendarView.Month;\n\n  viewDate = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>();\n\n  events: CalendarEvent[] = [];\n\n  locale: <span class=\"hljs-built_in\">string</span> = <span class=\"hljs-string\">'fr'</span>;\n\n  weekStartsOn: <span class=\"hljs-built_in\">number</span> = DAYS_OF_WEEK.MONDAY;\n\n  weekendDays: <span class=\"hljs-built_in\">number</span>[] = [DAYS_OF_WEEK.FRIDAY, DAYS_OF_WEEK.SATURDAY];\n\n  CalendarView = CalendarView;\n\n  setView(view: CalendarView) {\n    <span class=\"hljs-keyword\">this</span>.view = view;\n  }\n}\n";
      /***/
    },

    /***/
    78711: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span class=\"hljs-keyword\">import</span> { CalendarDateFormatter, DateFormatterParams } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { formatDate } from <span class=\"hljs-string\">'@angular/common'</span>;\n<span class=\"hljs-keyword\">import</span> { Injectable } from <span class=\"hljs-string\">'@angular/core'</span>;\n\n@Injectable()\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> CustomDateFormatter extends CalendarDateFormatter {\n  <span class=\"hljs-comment\">// you can override any of the methods defined in the parent class</span>\n\n  <span class=\"hljs-keyword\">public</span> dayViewHour({ date, locale }: DateFormatterParams): <span class=\"hljs-built_in\">string</span> {\n    <span class=\"hljs-keyword\">return</span> formatDate(date, <span class=\"hljs-string\">'HH:mm'</span>, locale);\n  }\n\n  <span class=\"hljs-keyword\">public</span> weekViewHour({ date, locale }: DateFormatterParams): <span class=\"hljs-built_in\">string</span> {\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.dayViewHour({ date, locale });\n  }\n}\n";
      /***/
    },

    /***/
    27497: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span class=\"hljs-keyword\">import</span> { registerLocaleData } from <span class=\"hljs-string\">'@angular/common'</span>;\n<span class=\"hljs-keyword\">import</span> localeFr from <span class=\"hljs-string\">'@angular/common/locales/fr'</span>;\n<span class=\"hljs-keyword\">import</span> { NgModule } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CommonModule } from <span class=\"hljs-string\">'@angular/common'</span>;\n<span class=\"hljs-keyword\">import</span> { RouterModule } from <span class=\"hljs-string\">'@angular/router'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarModule, DateAdapter } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoUtilsModule } from <span class=\"hljs-string\">'../demo-utils/module'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoComponent } from <span class=\"hljs-string\">'./component'</span>;\n<span class=\"hljs-keyword\">import</span> { adapterFactory } from <span class=\"hljs-string\">'angular-calendar/date-adapters/date-fns'</span>;\n\nregisterLocaleData(localeFr);\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory,\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class=\"hljs-string\">''</span>, component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoModule {}\n";
      /***/
    },

    /***/
    44341: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"row text-center\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"col-md-4\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn-group\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span>\n        <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-primary\"</span>\n        <span class=\"hljs-attribute\">mwlCalendarPreviousView</span>\n        [<span class=\"hljs-attribute\">view</span>]=<span class=\"hljs-value\">\"view\"</span>\n        [(<span class=\"hljs-attribute\">viewDate</span>)]=<span class=\"hljs-value\">\"viewDate\"</span>\n      &gt;</span>\n        Previous\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span>\n        <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-outline-secondary\"</span>\n        <span class=\"hljs-attribute\">mwlCalendarToday</span>\n        [(<span class=\"hljs-attribute\">viewDate</span>)]=<span class=\"hljs-value\">\"viewDate\"</span>\n      &gt;</span>\n        Today\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span>\n        <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-primary\"</span>\n        <span class=\"hljs-attribute\">mwlCalendarNextView</span>\n        [<span class=\"hljs-attribute\">view</span>]=<span class=\"hljs-value\">\"view\"</span>\n        [(<span class=\"hljs-attribute\">viewDate</span>)]=<span class=\"hljs-value\">\"viewDate\"</span>\n      &gt;</span>\n        Next\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"col-md-4\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h3</span>&gt;</span>\n      {{ viewDate | calendarDate:(view + 'ViewTitle'):locale:weekStartsOn }}\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h3</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"col-md-4\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn-group\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span>\n        <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-primary\"</span>\n        (<span class=\"hljs-attribute\">click</span>)=<span class=\"hljs-value\">\"setView(CalendarView.Month)\"</span>\n        [<span class=\"hljs-attribute\">class.active</span>]=<span class=\"hljs-value\">\"view === CalendarView.Month\"</span>\n      &gt;</span>\n        Month\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span>\n        <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-primary\"</span>\n        (<span class=\"hljs-attribute\">click</span>)=<span class=\"hljs-value\">\"setView(CalendarView.Week)\"</span>\n        [<span class=\"hljs-attribute\">class.active</span>]=<span class=\"hljs-value\">\"view === CalendarView.Week\"</span>\n      &gt;</span>\n        Week\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span>\n        <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-primary\"</span>\n        (<span class=\"hljs-attribute\">click</span>)=<span class=\"hljs-value\">\"setView(CalendarView.Day)\"</span>\n        [<span class=\"hljs-attribute\">class.active</span>]=<span class=\"hljs-value\">\"view === CalendarView.Day\"</span>\n      &gt;</span>\n        Day\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">br</span> /&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> [<span class=\"hljs-attribute\">ngSwitch</span>]=<span class=\"hljs-value\">\"view\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-month-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'month'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n    [<span class=\"hljs-attribute\">locale</span>]=<span class=\"hljs-value\">\"locale\"</span>\n    [<span class=\"hljs-attribute\">weekStartsOn</span>]=<span class=\"hljs-value\">\"weekStartsOn\"</span>\n    [<span class=\"hljs-attribute\">weekendDays</span>]=<span class=\"hljs-value\">\"weekendDays\"</span>\n  &gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-month-view</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-week-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'week'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n    [<span class=\"hljs-attribute\">locale</span>]=<span class=\"hljs-value\">\"locale\"</span>\n    [<span class=\"hljs-attribute\">weekStartsOn</span>]=<span class=\"hljs-value\">\"weekStartsOn\"</span>\n    [<span class=\"hljs-attribute\">weekendDays</span>]=<span class=\"hljs-value\">\"weekendDays\"</span>\n  &gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-week-view</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-day-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'day'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n    [<span class=\"hljs-attribute\">locale</span>]=<span class=\"hljs-value\">\"locale\"</span>\n  &gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-day-view</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n";
      /***/
    },

    /***/
    76547: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport {\n  CalendarDateFormatter,\n  CalendarEvent,\n  CalendarView,\n  DAYS_OF_WEEK,\n} from 'angular-calendar';\nimport { CustomDateFormatter } from './custom-date-formatter.provider';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html',\n  providers: [\n    {\n      provide: CalendarDateFormatter,\n      useClass: CustomDateFormatter,\n    },\n  ],\n})\nexport class DemoComponent {\n  view: CalendarView = CalendarView.Month;\n\n  viewDate = new Date();\n\n  events: CalendarEvent[] = [];\n\n  locale: string = 'fr';\n\n  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;\n\n  weekendDays: number[] = [DAYS_OF_WEEK.FRIDAY, DAYS_OF_WEEK.SATURDAY];\n\n  CalendarView = CalendarView;\n\n  setView(view: CalendarView) {\n    this.view = view;\n  }\n}\n";
      /***/
    },

    /***/
    72351: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';\nimport { formatDate } from '@angular/common';\nimport { Injectable } from '@angular/core';\n\n@Injectable()\nexport class CustomDateFormatter extends CalendarDateFormatter {\n  // you can override any of the methods defined in the parent class\n\n  public dayViewHour({ date, locale }: DateFormatterParams): string {\n    return formatDate(date, 'HH:mm', locale);\n  }\n\n  public weekViewHour({ date, locale }: DateFormatterParams): string {\n    return this.dayViewHour({ date, locale });\n  }\n}\n";
      /***/
    },

    /***/
    64544: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { registerLocaleData } from '@angular/common';\nimport localeFr from '@angular/common/locales/fr';\nimport { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule, DateAdapter } from 'angular-calendar';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\nimport { adapterFactory } from 'angular-calendar/date-adapters/date-fns';\n\nregisterLocaleData(localeFr);\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory,\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n})\nexport class DemoModule {}\n";
      /***/
    },

    /***/
    16755: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row text-center\">\n  <div class=\"col-md-4\">\n    <div class=\"btn-group\">\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarPreviousView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\"\n      >\n        Previous\n      </div>\n      <div\n        class=\"btn btn-outline-secondary\"\n        mwlCalendarToday\n        [(viewDate)]=\"viewDate\"\n      >\n        Today\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarNextView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\"\n      >\n        Next\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>\n      {{ viewDate | calendarDate:(view + 'ViewTitle'):locale:weekStartsOn }}\n    </h3>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"btn-group\">\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"setView(CalendarView.Month)\"\n        [class.active]=\"view === CalendarView.Month\"\n      >\n        Month\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"setView(CalendarView.Week)\"\n        [class.active]=\"view === CalendarView.Week\"\n      >\n        Week\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"setView(CalendarView.Day)\"\n        [class.active]=\"view === CalendarView.Day\"\n      >\n        Day\n      </div>\n    </div>\n  </div>\n</div>\n<br />\n\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [locale]=\"locale\"\n    [weekStartsOn]=\"weekStartsOn\"\n    [weekendDays]=\"weekendDays\"\n  >\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [locale]=\"locale\"\n    [weekStartsOn]=\"weekStartsOn\"\n    [weekendDays]=\"weekendDays\"\n  >\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [locale]=\"locale\"\n  >\n  </mwl-calendar-day-view>\n</div>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=projects_demos_app_demo-modules_i18n_sources_ts-es5.js.map