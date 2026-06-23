"use strict";
(self["webpackChunkJanus_Maritz_CV"] = self["webpackChunkJanus_Maritz_CV"] || []).push([[933],{

/***/ 1933:
/*!**************************************************!*\
  !*** ./src/app/pages/skills/skills.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkillsComponent: () => (/* binding */ SkillsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);






function SkillsComponent_div_4_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1, " ");
  }
}
function SkillsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SkillsComponent_div_4_span_5_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const group_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](group_r2.icon + " skill-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", group_r2.category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r2.items);
  }
}
let SkillsComponent = /*#__PURE__*/(() => {
  class SkillsComponent {
    constructor(http) {
      this.http = http;
      this.skillCategories = [];
      this.loadError = false;
    }
    ngOnInit() {
      this.http.get('assets/data/skills.json').subscribe({
        next: data => this.skillCategories = data,
        error: () => this.loadError = true
      });
    }
    static {
      this.ɵfac = function SkillsComponent_Factory(t) {
        return new (t || SkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SkillsComponent,
        selectors: [["app-skills"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 5,
        vars: 2,
        consts: [[1, "skills-section"], [1, "skills-title"], [1, "skills-grid"], ["class", "skill-card", 4, "ngFor", "ngForOf"], [1, "skill-card"], [1, "skill-name"], [1, "skill-tags"], ["class", "skill-tag", 4, "ngFor", "ngForOf"], [1, "skill-tag"]],
        template: function SkillsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "h2", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Technical Skills");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SkillsComponent_div_4_Template, 6, 4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skillCategories);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClientModule],
        styles: ["section.skills-section[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  color: var(--primary-text);\n  padding: 60px 20px;\n}\nsection.skills-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  margin: 0 auto;\n  padding: 20px;\n  font-family: var(--font-main);\n  color: var(--primary-text);\n}\nsection.skills-section[_ngcontent-%COMP%]   .skills-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nsection.skills-section[_ngcontent-%COMP%]   .skill-card[_ngcontent-%COMP%] {\n  background: var(--secondary-color);\n  border-radius: 1rem;\n  padding: 1.5rem;\n  position: relative;\n  overflow: hidden;\n  border: 1px solid var(--color-parchment);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);\n  transition: 0.3s ease-in-out;\n  \n\n}\nsection.skills-section[_ngcontent-%COMP%]   .skill-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 20px rgba(52, 211, 153, 0.3);\n  border-color: var(--amp-text);\n  transform: translateY(-2px);\n}\nsection.skills-section[_ngcontent-%COMP%]   .skill-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], section.skills-section[_ngcontent-%COMP%]   .skill-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--primary-text);\n  font-weight: 600;\n}\nsection.skills-section[_ngcontent-%COMP%]   .skill-card[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n  color: var(--amp-text);\n  font-size: 1.2rem;\n  vertical-align: middle;\n  text-shadow: 0 0 5px rgba(52, 211, 153, 0.4);\n}\nsection.skills-section[_ngcontent-%COMP%]   .skill-card[_ngcontent-%COMP%]   .skill-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.8rem;\n  margin-top: 1.2rem;\n}\nsection.skills-section[_ngcontent-%COMP%]   .skill-card[_ngcontent-%COMP%]   .skill-tag[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05); \n\n  border: 1px solid var(--color-parchment);\n  padding: 0.4rem 0.8rem;\n  border-radius: 20px;\n  font-size: 0.85rem;\n  transition: all 0.2s ease-in-out;\n}\nsection.skills-section[_ngcontent-%COMP%]   .skill-card[_ngcontent-%COMP%]   .skill-tag[_ngcontent-%COMP%]:hover {\n  background: var(--amp-text);\n  color: var(--primary-color);\n  border-color: var(--amp-text);\n  box-shadow: 0 0 10px rgba(52, 211, 153, 0.6);\n}\n\n@media (max-width: 768px) {\n  .navbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .navbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-start;\n    gap: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7QUFDSjtBQUVFO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUFKO0FBR0U7RUFDRSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSx3Q0FBQTtFQUNBLDZDQUFBO0VBRUEsNEJBQUE7RUFxQkEsbUJBQUE7QUF2Qko7QUFJSTtFQUNFLDRDQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtBQUZOO0FBS0k7RUFDSSwwQkFBQTtFQUNBLGdCQUFBO0FBSFI7QUFNSTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNENBQUE7QUFKTjtBQVFJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFOTjtBQVNJO0VBQ0UscUNBQUEsRUFBQSxnQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFQTjtBQVNNO0VBQ0UsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNENBQUE7QUFQUjs7QUFhQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSx1QkFBQTtFQVZGO0VBWUU7SUFDRSxXQUFBO0lBQ0EsMkJBQUE7SUFDQSxXQUFBO0VBVko7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24uc2tpbGxzLXNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQpOyBcclxuICBwYWRkaW5nOiA2MHB4IDIwcHg7XHJcblxyXG4gIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbWFpbik7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0KTtcclxuICB9XHJcblxyXG4gIC5za2lsbHMtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XHJcbiAgICBnYXA6IDJyZW07XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnNraWxsLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1wYXJjaG1lbnQpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgXHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDUyLCAyMTEsIDE1MywwLjMpO1xyXG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWFtcC10ZXh0KTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoMywgc3BhbiB7IFxyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnNraWxsLWljb24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgY29sb3I6IHZhcigtLWFtcC10ZXh0KTtcclxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHJnYmEoNTIsIDIxMSwgMTUzLDAuNCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogTmV3IFRhZyBTdHlsZXMgKi9cclxuICAgIC5za2lsbC10YWdzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBnYXA6IDAuOHJlbTtcclxuICAgICAgbWFyZ2luLXRvcDogMS4ycmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5za2lsbC10YWcge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpOyAvKiBTdWJ0bGUgZGFyayBtb2RlIGJhY2tncm91bmQgKi9cclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItcGFyY2htZW50KTtcclxuICAgICAgcGFkZGluZzogMC40cmVtIDAuOHJlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFtcC10ZXh0KTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hbXAtdGV4dCk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSg1MiwgMjExLCAxNTMsMC42KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLm5hdmJhciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgLm5hdi1saW5rcyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGdhcDogMS41cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
        data: {
          animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
            opacity: 0
          }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('600ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
            opacity: 1
          }))])])]
        }
      });
    }
  }
  return SkillsComponent;
})();

/***/ })

}]);
//# sourceMappingURL=933.js.map