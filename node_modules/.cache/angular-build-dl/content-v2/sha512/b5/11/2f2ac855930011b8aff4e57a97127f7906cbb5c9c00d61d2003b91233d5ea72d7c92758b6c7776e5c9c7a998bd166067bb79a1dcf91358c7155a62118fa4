"use strict";
(self["webpackChunkangular_calendar"] = self["webpackChunkangular_calendar"] || []).push([["projects_demos_app_demo-modules_moment_sources_ts"],{

/***/ 72646:
/*!***********************************************************!*\
  !*** ./projects/demos/app/demo-modules/moment/sources.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sources": function() { return /* binding */ sources; }
/* harmony export */ });
const sources = [
    {
        filename: 'component.ts',
        contents: {
            raw: __webpack_require__(/*! !!raw-loader!./component */ 27192),
            highlighted: __webpack_require__(/*! !!raw-loader!highlightjs-loader?lang=typescript!./component */ 48907),
        },
    },
    {
        filename: 'template.html',
        contents: {
            raw: __webpack_require__(/*! !!raw-loader!./template.html */ 98220),
            highlighted: __webpack_require__(/*! !!raw-loader!highlightjs-loader?lang=xml!./template.html */ 17332),
        },
    },
    {
        filename: 'module.ts',
        contents: {
            raw: __webpack_require__(/*! !!raw-loader!./module */ 64039),
            highlighted: __webpack_require__(/*! !!raw-loader!highlightjs-loader?lang=typescript!./module */ 82009),
        },
    },
];


/***/ }),

/***/ 48907:
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./projects/demos/app/demo-modules/moment/component.ts ***!
  \**************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"hljs-keyword\">import</span> { Component, ChangeDetectionStrategy } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarEvent, CalendarView, DAYS_OF_WEEK } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> moment from <span class=\"hljs-string\">'moment'</span>;\n\n<span class=\"hljs-comment\">// weekStartsOn option is ignored when using moment, as it needs to be configured globally for the moment locale</span>\nmoment.updateLocale(<span class=\"hljs-string\">'en'</span>, {\n  week: {\n    dow: DAYS_OF_WEEK.MONDAY,\n    doy: <span class=\"hljs-number\">0</span>,\n  },\n});\n\n@Component({\n  selector: <span class=\"hljs-string\">'mwl-demo-component'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class=\"hljs-string\">'template.html'</span>,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoComponent {\n  view: CalendarView = CalendarView.Month;\n\n  viewDate: <span class=\"hljs-built_in\">Date</span> = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>();\n\n  events: CalendarEvent[] = [];\n}\n");

/***/ }),

/***/ 82009:
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./projects/demos/app/demo-modules/moment/module.ts ***!
  \***********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"hljs-keyword\">import</span> { NgModule } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CommonModule } from <span class=\"hljs-string\">'@angular/common'</span>;\n<span class=\"hljs-keyword\">import</span> { RouterModule } from <span class=\"hljs-string\">'@angular/router'</span>;\n<span class=\"hljs-keyword\">import</span> {\n  CalendarDateFormatter,\n  CalendarModule,\n  CalendarMomentDateFormatter,\n  DateAdapter,\n  MOMENT,\n} from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> moment from <span class=\"hljs-string\">'moment'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoUtilsModule } from <span class=\"hljs-string\">'../demo-utils/module'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoComponent } from <span class=\"hljs-string\">'./component'</span>;\n<span class=\"hljs-keyword\">import</span> { adapterFactory } from <span class=\"hljs-string\">'angular-calendar/date-adapters/moment'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">momentAdapterFactory</span>(<span class=\"hljs-params\"></span>) </span>{\n  <span class=\"hljs-keyword\">return</span> adapterFactory(moment);\n}\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot(\n      {\n        provide: DateAdapter,\n        useFactory: momentAdapterFactory,\n      },\n      {\n        dateFormatter: {\n          provide: CalendarDateFormatter,\n          useClass: CalendarMomentDateFormatter,\n        },\n      }\n    ),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class=\"hljs-string\">''</span>, component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n  providers: [\n    {\n      provide: MOMENT,\n      useValue: moment,\n    },\n  ],\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoModule {}\n");

/***/ }),

/***/ 17332:
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./node_modules/highlightjs-loader/index.js?lang=xml!./projects/demos/app/demo-modules/moment/template.html ***!
  \********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"alert alert-info\"</span>&gt;</span>\n  Use this if you're already using moment heavily in your app and don't want to\n  include date-fns in your bundle, or you need to be able to adjust dates to be\n  in a different timezone than the users browser via moment-locale\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-demo-utils-calendar-header</span> [(<span class=\"hljs-attribute\">view</span>)]=<span class=\"hljs-value\">\"view\"</span> [(<span class=\"hljs-attribute\">viewDate</span>)]=<span class=\"hljs-value\">\"viewDate\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-demo-utils-calendar-header</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> [<span class=\"hljs-attribute\">ngSwitch</span>]=<span class=\"hljs-value\">\"view\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-month-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'month'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n  &gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-month-view</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-week-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'week'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n  &gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-week-view</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-day-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'day'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n  &gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-day-view</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n");

/***/ }),

/***/ 27192:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/demos/app/demo-modules/moment/component.ts ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { CalendarEvent, CalendarView, DAYS_OF_WEEK } from 'angular-calendar';\nimport moment from 'moment';\n\n// weekStartsOn option is ignored when using moment, as it needs to be configured globally for the moment locale\nmoment.updateLocale('en', {\n  week: {\n    dow: DAYS_OF_WEEK.MONDAY,\n    doy: 0,\n  },\n});\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html',\n})\nexport class DemoComponent {\n  view: CalendarView = CalendarView.Month;\n\n  viewDate: Date = new Date();\n\n  events: CalendarEvent[] = [];\n}\n");

/***/ }),

/***/ 64039:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/demos/app/demo-modules/moment/module.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport {\n  CalendarDateFormatter,\n  CalendarModule,\n  CalendarMomentDateFormatter,\n  DateAdapter,\n  MOMENT,\n} from 'angular-calendar';\nimport moment from 'moment';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\nimport { adapterFactory } from 'angular-calendar/date-adapters/moment';\n\nexport function momentAdapterFactory() {\n  return adapterFactory(moment);\n}\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot(\n      {\n        provide: DateAdapter,\n        useFactory: momentAdapterFactory,\n      },\n      {\n        dateFormatter: {\n          provide: CalendarDateFormatter,\n          useClass: CalendarMomentDateFormatter,\n        },\n      }\n    ),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n  providers: [\n    {\n      provide: MOMENT,\n      useValue: moment,\n    },\n  ],\n})\nexport class DemoModule {}\n");

/***/ }),

/***/ 98220:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/demos/app/demo-modules/moment/template.html ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alert alert-info\">\n  Use this if you're already using moment heavily in your app and don't want to\n  include date-fns in your bundle, or you need to be able to adjust dates to be\n  in a different timezone than the users browser via moment-locale\n</div>\n\n<mwl-demo-utils-calendar-header [(view)]=\"view\" [(viewDate)]=\"viewDate\">\n</mwl-demo-utils-calendar-header>\n\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n  >\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n  >\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n  >\n  </mwl-calendar-day-view>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=projects_demos_app_demo-modules_moment_sources_ts-es2015.js.map