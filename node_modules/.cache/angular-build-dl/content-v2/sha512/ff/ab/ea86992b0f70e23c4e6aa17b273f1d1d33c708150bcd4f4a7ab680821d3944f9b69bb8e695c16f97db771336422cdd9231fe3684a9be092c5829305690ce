(function () {
  "use strict";

  (self["webpackChunkangular_calendar"] = self["webpackChunkangular_calendar"] || []).push([["projects_demos_app_demo-modules_disable-slide-animation_sources_ts"], {
    /***/
    42850: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
          44445),
          highlighted: __webpack_require__(
          /*! !!raw-loader!highlightjs-loader?lang=typescript!./component */
          47445)
        }
      }, {
        filename: 'template.html',
        contents: {
          raw: __webpack_require__(
          /*! !!raw-loader!./template.html */
          92046),
          highlighted: __webpack_require__(
          /*! !!raw-loader!highlightjs-loader?lang=xml!./template.html */
          32126)
        }
      }, {
        filename: 'module.ts',
        contents: {
          raw: __webpack_require__(
          /*! !!raw-loader!./module */
          93914),
          highlighted: __webpack_require__(
          /*! !!raw-loader!highlightjs-loader?lang=typescript!./module */
          4994)
        }
      }];
      /***/
    },

    /***/
    47445: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span class=\"hljs-keyword\">import</span> { Component, ChangeDetectionStrategy } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarEvent } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { isSameDay, isSameMonth } from <span class=\"hljs-string\">'date-fns'</span>;\n<span class=\"hljs-keyword\">import</span> { colors } from <span class=\"hljs-string\">'../demo-utils/colors'</span>;\n\n@Component({\n  selector: <span class=\"hljs-string\">'mwl-demo-component'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class=\"hljs-string\">'template.html'</span>,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoComponent {\n  viewDate: <span class=\"hljs-built_in\">Date</span> = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>();\n\n  events: CalendarEvent[] = [\n    {\n      start: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(),\n      title: <span class=\"hljs-string\">'An event'</span>,\n      color: colors.red,\n    },\n  ];\n\n  activeDayIsOpen: <span class=\"hljs-built_in\">boolean</span>;\n\n  dayClicked({ date, events }: { date: <span class=\"hljs-built_in\">Date</span>; events: CalendarEvent[] }): <span class=\"hljs-built_in\">void</span> {\n    <span class=\"hljs-keyword\">if</span> (isSameMonth(date, <span class=\"hljs-keyword\">this</span>.viewDate)) {\n      <span class=\"hljs-keyword\">if</span> (\n        (isSameDay(<span class=\"hljs-keyword\">this</span>.viewDate, date) &amp;&amp; <span class=\"hljs-keyword\">this</span>.activeDayIsOpen === <span class=\"hljs-literal\">true</span>) ||\n        events.length === <span class=\"hljs-number\">0</span>\n      ) {\n        <span class=\"hljs-keyword\">this</span>.activeDayIsOpen = <span class=\"hljs-literal\">false</span>;\n      } <span class=\"hljs-keyword\">else</span> {\n        <span class=\"hljs-keyword\">this</span>.activeDayIsOpen = <span class=\"hljs-literal\">true</span>;\n        <span class=\"hljs-keyword\">this</span>.viewDate = date;\n      }\n    }\n  }\n}\n";
      /***/
    },

    /***/
    4994: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span class=\"hljs-keyword\">import</span> { NgModule } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CommonModule } from <span class=\"hljs-string\">'@angular/common'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarModule, DateAdapter } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { RouterModule } from <span class=\"hljs-string\">'@angular/router'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoUtilsModule } from <span class=\"hljs-string\">'../demo-utils/module'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoComponent } from <span class=\"hljs-string\">'./component'</span>;\n<span class=\"hljs-keyword\">import</span> { adapterFactory } from <span class=\"hljs-string\">'angular-calendar/date-adapters/date-fns'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory,\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class=\"hljs-string\">''</span>, component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoModule {}\n";
      /***/
    },

    /***/
    32126: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-month-view</span>\n  [@<span class=\"hljs-attribute\">.disabled</span>]=<span class=\"hljs-value\">\"true\"</span>\n  [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n  [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n  [<span class=\"hljs-attribute\">activeDayIsOpen</span>]=<span class=\"hljs-value\">\"activeDayIsOpen\"</span>\n  (<span class=\"hljs-attribute\">dayClicked</span>)=<span class=\"hljs-value\">\"dayClicked($event.day)\"</span>\n&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-month-view</span>&gt;</span>\n";
      /***/
    },

    /***/
    44445: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { CalendarEvent } from 'angular-calendar';\nimport { isSameDay, isSameMonth } from 'date-fns';\nimport { colors } from '../demo-utils/colors';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html',\n})\nexport class DemoComponent {\n  viewDate: Date = new Date();\n\n  events: CalendarEvent[] = [\n    {\n      start: new Date(),\n      title: 'An event',\n      color: colors.red,\n    },\n  ];\n\n  activeDayIsOpen: boolean;\n\n  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {\n    if (isSameMonth(date, this.viewDate)) {\n      if (\n        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||\n        events.length === 0\n      ) {\n        this.activeDayIsOpen = false;\n      } else {\n        this.activeDayIsOpen = true;\n        this.viewDate = date;\n      }\n    }\n  }\n}\n";
      /***/
    },

    /***/
    93914: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { CalendarModule, DateAdapter } from 'angular-calendar';\nimport { RouterModule } from '@angular/router';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\nimport { adapterFactory } from 'angular-calendar/date-adapters/date-fns';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory,\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n})\nexport class DemoModule {}\n";
      /***/
    },

    /***/
    92046: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mwl-calendar-month-view\n  [@.disabled]=\"true\"\n  [viewDate]=\"viewDate\"\n  [events]=\"events\"\n  [activeDayIsOpen]=\"activeDayIsOpen\"\n  (dayClicked)=\"dayClicked($event.day)\"\n>\n</mwl-calendar-month-view>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=projects_demos_app_demo-modules_disable-slide-animation_sources_ts-es5.js.map