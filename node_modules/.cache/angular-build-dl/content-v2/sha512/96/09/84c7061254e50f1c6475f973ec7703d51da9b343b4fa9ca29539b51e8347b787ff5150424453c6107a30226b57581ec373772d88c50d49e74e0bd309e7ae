(self["webpackChunkangular_calendar"] = self["webpackChunkangular_calendar"] || []).push([["projects_demos_app_demo-modules_dayjs_module_ts"],{

/***/ 70160:
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));

/***/ }),

/***/ 73088:
/*!*****************************************!*\
  !*** ./node_modules/dayjs/locale/en.js ***!
  \*****************************************/
/***/ (function(module) {

!function(e,n){ true?module.exports=n():0}(this,(function(){"use strict";return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")}}));

/***/ }),

/***/ 29290:
/*!************************************************************!*\
  !*** ./projects/demos/app/demo-modules/dayjs/component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoComponent": function() { return /* binding */ DemoComponent; }
/* harmony export */ });
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-calendar */ 90489);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-calendar */ 4606);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 70160);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_locale_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/locale/en */ 73088);
/* harmony import */ var dayjs_locale_en__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_en__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _demo_utils_calendar_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../demo-utils/calendar-header.component */ 78767);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_calendar_src_modules_month_calendar_month_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/month/calendar-month-view.component */ 21426);
/* harmony import */ var _angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/week/calendar-week-view.component */ 1913);
/* harmony import */ var _angular_calendar_src_modules_day_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/day/calendar-day-view.component */ 50811);









function DemoComponent_mwl_calendar_month_view_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mwl-calendar-month-view", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("viewDate", ctx_r0.viewDate)("events", ctx_r0.events);
} }
function DemoComponent_mwl_calendar_week_view_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mwl-calendar-week-view", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("viewDate", ctx_r1.viewDate)("events", ctx_r1.events);
} }
function DemoComponent_mwl_calendar_day_view_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mwl-calendar-day-view", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("viewDate", ctx_r2.viewDate)("events", ctx_r2.events);
} }
dayjs__WEBPACK_IMPORTED_MODULE_0___default().locale(Object.assign(Object.assign({}, (dayjs_locale_en__WEBPACK_IMPORTED_MODULE_1___default())), { weekStart: angular_calendar__WEBPACK_IMPORTED_MODULE_3__.DAYS_OF_WEEK.MONDAY }));
class DemoComponent {
    constructor() {
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_4__.CalendarView.Month;
        this.viewDate = new Date();
        this.events = [];
    }
}
DemoComponent.ɵfac = function DemoComponent_Factory(t) { return new (t || DemoComponent)(); };
DemoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DemoComponent, selectors: [["mwl-demo-component"]], decls: 15, vars: 6, consts: [[1, "alert", "alert-info"], [3, "view", "viewDate", "viewChange", "viewDateChange"], [3, "ngSwitch"], [3, "viewDate", "events", 4, "ngSwitchCase"], [3, "viewDate", "events"]], template: function DemoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n  Use this if you're already using dayjs heavily in your app and don't want to\n  include date-fns in your bundle, or you need to be able to adjust dates to be\n  in a different timezone than the users browser via dayjs-locale\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mwl-demo-utils-calendar-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("viewChange", function DemoComponent_Template_mwl_demo_utils_calendar_header_viewChange_3_listener($event) { return ctx.view = $event; })("viewDateChange", function DemoComponent_Template_mwl_demo_utils_calendar_header_viewDateChange_3_listener($event) { return ctx.viewDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, DemoComponent_mwl_calendar_month_view_8_Template, 2, 2, "mwl-calendar-month-view", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, DemoComponent_mwl_calendar_week_view_10_Template, 2, 2, "mwl-calendar-week-view", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, DemoComponent_mwl_calendar_day_view_12_Template, 2, 2, "mwl-calendar-day-view", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "month");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "week");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "day");
    } }, directives: [_demo_utils_calendar_header_component__WEBPACK_IMPORTED_MODULE_5__.CalendarHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitchCase, _angular_calendar_src_modules_month_calendar_month_view_component__WEBPACK_IMPORTED_MODULE_7__.CalendarMonthViewComponent, _angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_8__.CalendarWeekViewComponent, _angular_calendar_src_modules_day_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_9__.CalendarDayViewComponent], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 23657:
/*!*********************************************************!*\
  !*** ./projects/demos/app/demo-modules/dayjs/module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dayjsAdapterFactory": function() { return /* binding */ dayjsAdapterFactory; },
/* harmony export */   "DemoModule": function() { return /* binding */ DemoModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-calendar */ 19898);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../angular-calendar/src/modules/calendar.module */ 3746);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-calendar */ 90008);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-calendar */ 6693);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 70160);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _demo_utils_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../demo-utils/module */ 57671);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component */ 29290);
/* harmony import */ var angular_calendar_date_adapters_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-calendar/date-adapters/moment */ 30855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);










function dayjsAdapterFactory() {
    return (0,angular_calendar_date_adapters_moment__WEBPACK_IMPORTED_MODULE_1__.adapterFactory)((dayjs__WEBPACK_IMPORTED_MODULE_0___default()));
}
class DemoModule {
}
DemoModule.ɵfac = function DemoModule_Factory(t) { return new (t || DemoModule)(); };
DemoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DemoModule });
DemoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [
        {
            provide: angular_calendar__WEBPACK_IMPORTED_MODULE_3__.MOMENT,
            useValue: (dayjs__WEBPACK_IMPORTED_MODULE_0___default()),
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            angular_calendar__WEBPACK_IMPORTED_MODULE_5__.CalendarModule.forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_6__.DateAdapter,
                useFactory: dayjsAdapterFactory,
            }, {
                dateFormatter: {
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_7__.CalendarDateFormatter,
                    useClass: angular_calendar__WEBPACK_IMPORTED_MODULE_3__.CalendarMomentDateFormatter,
                },
            }),
            _demo_utils_module__WEBPACK_IMPORTED_MODULE_8__.DemoUtilsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([{ path: '', component: _component__WEBPACK_IMPORTED_MODULE_10__.DemoComponent }]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DemoModule, { declarations: [_component__WEBPACK_IMPORTED_MODULE_10__.DemoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, angular_calendar__WEBPACK_IMPORTED_MODULE_5__.CalendarModule, _demo_utils_module__WEBPACK_IMPORTED_MODULE_8__.DemoUtilsModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule], exports: [_component__WEBPACK_IMPORTED_MODULE_10__.DemoComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=projects_demos_app_demo-modules_dayjs_module_ts-es2015.js.map