"use strict";
(self["webpackChunkangular_calendar"] = self["webpackChunkangular_calendar"] || []).push([["projects_demos_app_demo-modules_disable-tooltips_sources_ts"],{

/***/ 92340:
/*!*********************************************************************!*\
  !*** ./projects/demos/app/demo-modules/disable-tooltips/sources.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sources": function() { return /* binding */ sources; }
/* harmony export */ });
const sources = [
    {
        filename: 'component.ts',
        contents: {
            raw: __webpack_require__(/*! !!raw-loader!./component */ 29193),
            highlighted: __webpack_require__(/*! !!raw-loader!highlightjs-loader?lang=typescript!./component */ 62876),
        },
    },
    {
        filename: 'custom-event-title-formatter.provider.ts',
        contents: {
            raw: __webpack_require__(/*! !!raw-loader!./custom-event-title-formatter.provider */ 43602),
            highlighted: __webpack_require__(/*! !!raw-loader!highlightjs-loader?lang=typescript!./custom-event-title-formatter.provider */ 31430),
        },
    },
    {
        filename: 'template.html',
        contents: {
            raw: __webpack_require__(/*! !!raw-loader!./template.html */ 12814),
            highlighted: __webpack_require__(/*! !!raw-loader!highlightjs-loader?lang=xml!./template.html */ 10770),
        },
    },
    {
        filename: 'module.ts',
        contents: {
            raw: __webpack_require__(/*! !!raw-loader!./module */ 91862),
            highlighted: __webpack_require__(/*! !!raw-loader!highlightjs-loader?lang=typescript!./module */ 43140),
        },
    },
];


/***/ }),

/***/ 62876:
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./projects/demos/app/demo-modules/disable-tooltips/component.ts ***!
  \************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"hljs-keyword\">import</span> { Component, ChangeDetectionStrategy } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> {\n  CalendarEvent,\n  CalendarEventTitleFormatter,\n  CalendarView,\n} from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { CustomEventTitleFormatter } from <span class=\"hljs-string\">'./custom-event-title-formatter.provider'</span>;\n<span class=\"hljs-keyword\">import</span> { colors } from <span class=\"hljs-string\">'../demo-utils/colors'</span>;\n\n@Component({\n  selector: <span class=\"hljs-string\">'mwl-demo-component'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class=\"hljs-string\">'template.html'</span>,\n  providers: [\n    {\n      provide: CalendarEventTitleFormatter,\n      useClass: CustomEventTitleFormatter,\n    },\n  ],\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoComponent {\n  view: CalendarView = CalendarView.Month;\n\n  viewDate: <span class=\"hljs-built_in\">Date</span> = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>();\n\n  events: CalendarEvent[] = [\n    {\n      title: <span class=\"hljs-string\">'An event'</span>,\n      start: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(),\n      color: colors.red,\n    },\n  ];\n}\n");

/***/ }),

/***/ 31430:
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./projects/demos/app/demo-modules/disable-tooltips/custom-event-title-formatter.provider.ts ***!
  \****************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"hljs-keyword\">import</span> { CalendarEventTitleFormatter, CalendarEvent } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { Injectable } from <span class=\"hljs-string\">'@angular/core'</span>;\n\n@Injectable()\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> CustomEventTitleFormatter extends CalendarEventTitleFormatter {\n  <span class=\"hljs-comment\">// you can override any of the methods defined in the parent class</span>\n\n  monthTooltip(event: CalendarEvent): <span class=\"hljs-built_in\">string</span> {\n    <span class=\"hljs-keyword\">return</span>;\n  }\n\n  weekTooltip(event: CalendarEvent): <span class=\"hljs-built_in\">string</span> {\n    <span class=\"hljs-keyword\">return</span>;\n  }\n\n  dayTooltip(event: CalendarEvent): <span class=\"hljs-built_in\">string</span> {\n    <span class=\"hljs-keyword\">return</span>;\n  }\n}\n");

/***/ }),

/***/ 43140:
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./projects/demos/app/demo-modules/disable-tooltips/module.ts ***!
  \*********************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"hljs-keyword\">import</span> { NgModule } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CommonModule } from <span class=\"hljs-string\">'@angular/common'</span>;\n<span class=\"hljs-keyword\">import</span> { RouterModule } from <span class=\"hljs-string\">'@angular/router'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarModule, DateAdapter } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoUtilsModule } from <span class=\"hljs-string\">'../demo-utils/module'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoComponent } from <span class=\"hljs-string\">'./component'</span>;\n<span class=\"hljs-keyword\">import</span> { adapterFactory } from <span class=\"hljs-string\">'angular-calendar/date-adapters/date-fns'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory,\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class=\"hljs-string\">''</span>, component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoModule {}\n");

/***/ }),

/***/ 10770:
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./node_modules/highlightjs-loader/index.js?lang=xml!./projects/demos/app/demo-modules/disable-tooltips/template.html ***!
  \******************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-demo-utils-calendar-header</span> [(<span class=\"hljs-attribute\">view</span>)]=<span class=\"hljs-value\">\"view\"</span> [(<span class=\"hljs-attribute\">viewDate</span>)]=<span class=\"hljs-value\">\"viewDate\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-demo-utils-calendar-header</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> [<span class=\"hljs-attribute\">ngSwitch</span>]=<span class=\"hljs-value\">\"view\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-month-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'month'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n    [<span class=\"hljs-attribute\">activeDayIsOpen</span>]=<span class=\"hljs-value\">\"true\"</span>\n  &gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-month-view</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-week-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'week'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n  &gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-week-view</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-day-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'day'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n  &gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-day-view</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n");

/***/ }),

/***/ 29193:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/demos/app/demo-modules/disable-tooltips/component.ts ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport {\n  CalendarEvent,\n  CalendarEventTitleFormatter,\n  CalendarView,\n} from 'angular-calendar';\nimport { CustomEventTitleFormatter } from './custom-event-title-formatter.provider';\nimport { colors } from '../demo-utils/colors';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html',\n  providers: [\n    {\n      provide: CalendarEventTitleFormatter,\n      useClass: CustomEventTitleFormatter,\n    },\n  ],\n})\nexport class DemoComponent {\n  view: CalendarView = CalendarView.Month;\n\n  viewDate: Date = new Date();\n\n  events: CalendarEvent[] = [\n    {\n      title: 'An event',\n      start: new Date(),\n      color: colors.red,\n    },\n  ];\n}\n");

/***/ }),

/***/ 43602:
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/demos/app/demo-modules/disable-tooltips/custom-event-title-formatter.provider.ts ***!
  \*****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';\nimport { Injectable } from '@angular/core';\n\n@Injectable()\nexport class CustomEventTitleFormatter extends CalendarEventTitleFormatter {\n  // you can override any of the methods defined in the parent class\n\n  monthTooltip(event: CalendarEvent): string {\n    return;\n  }\n\n  weekTooltip(event: CalendarEvent): string {\n    return;\n  }\n\n  dayTooltip(event: CalendarEvent): string {\n    return;\n  }\n}\n");

/***/ }),

/***/ 91862:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/demos/app/demo-modules/disable-tooltips/module.ts ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule, DateAdapter } from 'angular-calendar';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\nimport { adapterFactory } from 'angular-calendar/date-adapters/date-fns';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory,\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n})\nexport class DemoModule {}\n");

/***/ }),

/***/ 12814:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/demos/app/demo-modules/disable-tooltips/template.html ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mwl-demo-utils-calendar-header [(view)]=\"view\" [(viewDate)]=\"viewDate\">\n</mwl-demo-utils-calendar-header>\n\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [activeDayIsOpen]=\"true\"\n  >\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n  >\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n  >\n  </mwl-calendar-day-view>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=projects_demos_app_demo-modules_disable-tooltips_sources_ts-es2015.js.map