"use strict";
(self["webpackChunkangular_calendar"] = self["webpackChunkangular_calendar"] || []).push([["projects_demos_app_demo-modules_clickable-days_sources_ts"],{

/***/ 97097:
/*!*******************************************************************!*\
  !*** ./projects/demos/app/demo-modules/clickable-days/sources.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sources": function() { return /* binding */ sources; }
/* harmony export */ });
const sources = [
    {
        filename: 'component.ts',
        contents: {
            raw: __webpack_require__(/*! !!raw-loader!./component */ 13530),
            highlighted: __webpack_require__(/*! !!raw-loader!highlightjs-loader?lang=typescript!./component */ 65910),
        },
    },
    {
        filename: 'template.html',
        contents: {
            raw: __webpack_require__(/*! !!raw-loader!./template.html */ 69982),
            highlighted: __webpack_require__(/*! !!raw-loader!highlightjs-loader?lang=xml!./template.html */ 65154),
        },
    },
    {
        filename: 'module.ts',
        contents: {
            raw: __webpack_require__(/*! !!raw-loader!./module */ 90521),
            highlighted: __webpack_require__(/*! !!raw-loader!highlightjs-loader?lang=typescript!./module */ 56528),
        },
    },
];


/***/ }),

/***/ 65910:
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./projects/demos/app/demo-modules/clickable-days/component.ts ***!
  \**********************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"hljs-keyword\">import</span> { Component, ChangeDetectionStrategy } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarEvent, CalendarView } from <span class=\"hljs-string\">'angular-calendar'</span>;\n\n@Component({\n  selector: <span class=\"hljs-string\">'mwl-demo-component'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class=\"hljs-string\">'template.html'</span>,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoComponent {\n  view: CalendarView = CalendarView.Month;\n\n  viewDate: <span class=\"hljs-built_in\">Date</span> = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>();\n\n  events: CalendarEvent[] = [];\n\n  clickedDate: <span class=\"hljs-built_in\">Date</span>;\n\n  clickedColumn: <span class=\"hljs-built_in\">number</span>;\n}\n");

/***/ }),

/***/ 56528:
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./projects/demos/app/demo-modules/clickable-days/module.ts ***!
  \*******************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"hljs-keyword\">import</span> { NgModule } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CommonModule } from <span class=\"hljs-string\">'@angular/common'</span>;\n<span class=\"hljs-keyword\">import</span> { RouterModule } from <span class=\"hljs-string\">'@angular/router'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarModule, DateAdapter } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoUtilsModule } from <span class=\"hljs-string\">'../demo-utils/module'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoComponent } from <span class=\"hljs-string\">'./component'</span>;\n<span class=\"hljs-keyword\">import</span> { adapterFactory } from <span class=\"hljs-string\">'angular-calendar/date-adapters/date-fns'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory,\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class=\"hljs-string\">''</span>, component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoModule {}\n");

/***/ }),

/***/ 65154:
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./node_modules/highlightjs-loader/index.js?lang=xml!./projects/demos/app/demo-modules/clickable-days/template.html ***!
  \****************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-demo-utils-calendar-header</span> [(<span class=\"hljs-attribute\">view</span>)]=<span class=\"hljs-value\">\"view\"</span> [(<span class=\"hljs-attribute\">viewDate</span>)]=<span class=\"hljs-value\">\"viewDate\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-demo-utils-calendar-header</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"alert alert-info\"</span>&gt;</span>\n  Click on a day or time slot on the view.\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">strong</span> *<span class=\"hljs-attribute\">ngIf</span>=<span class=\"hljs-value\">\"clickedDate\"</span>\n    &gt;</span>You clicked on this time: {{ clickedDate | date:'medium' }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">strong</span>\n  &gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">strong</span> *<span class=\"hljs-attribute\">ngIf</span>=<span class=\"hljs-value\">\"clickedColumn !== undefined\"</span>\n    &gt;</span>You clicked on this column: {{ clickedColumn }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">strong</span>\n  &gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> [<span class=\"hljs-attribute\">ngSwitch</span>]=<span class=\"hljs-value\">\"view\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-month-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'month'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n    (<span class=\"hljs-attribute\">columnHeaderClicked</span>)=<span class=\"hljs-value\">\"clickedColumn = $event.isoDayNumber\"</span>\n    (<span class=\"hljs-attribute\">dayClicked</span>)=<span class=\"hljs-value\">\"clickedDate = $event.day.date\"</span>\n  &gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-month-view</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-week-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'week'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n    (<span class=\"hljs-attribute\">dayHeaderClicked</span>)=<span class=\"hljs-value\">\"clickedDate = $event.day.date\"</span>\n    (<span class=\"hljs-attribute\">hourSegmentClicked</span>)=<span class=\"hljs-value\">\"clickedDate = $event.date\"</span>\n  &gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-week-view</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-day-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'day'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n    (<span class=\"hljs-attribute\">hourSegmentClicked</span>)=<span class=\"hljs-value\">\"clickedDate = $event.date\"</span>\n  &gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-day-view</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n");

/***/ }),

/***/ 13530:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/demos/app/demo-modules/clickable-days/component.ts ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { CalendarEvent, CalendarView } from 'angular-calendar';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html',\n})\nexport class DemoComponent {\n  view: CalendarView = CalendarView.Month;\n\n  viewDate: Date = new Date();\n\n  events: CalendarEvent[] = [];\n\n  clickedDate: Date;\n\n  clickedColumn: number;\n}\n");

/***/ }),

/***/ 90521:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/demos/app/demo-modules/clickable-days/module.ts ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule, DateAdapter } from 'angular-calendar';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\nimport { adapterFactory } from 'angular-calendar/date-adapters/date-fns';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory,\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n})\nexport class DemoModule {}\n");

/***/ }),

/***/ 69982:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/demos/app/demo-modules/clickable-days/template.html ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mwl-demo-utils-calendar-header [(view)]=\"view\" [(viewDate)]=\"viewDate\">\n</mwl-demo-utils-calendar-header>\n\n<div class=\"alert alert-info\">\n  Click on a day or time slot on the view.\n  <strong *ngIf=\"clickedDate\"\n    >You clicked on this time: {{ clickedDate | date:'medium' }}</strong\n  >\n  <strong *ngIf=\"clickedColumn !== undefined\"\n    >You clicked on this column: {{ clickedColumn }}</strong\n  >\n</div>\n\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    (columnHeaderClicked)=\"clickedColumn = $event.isoDayNumber\"\n    (dayClicked)=\"clickedDate = $event.day.date\"\n  >\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    (dayHeaderClicked)=\"clickedDate = $event.day.date\"\n    (hourSegmentClicked)=\"clickedDate = $event.date\"\n  >\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    (hourSegmentClicked)=\"clickedDate = $event.date\"\n  >\n  </mwl-calendar-day-view>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=projects_demos_app_demo-modules_clickable-days_sources_ts-es2015.js.map