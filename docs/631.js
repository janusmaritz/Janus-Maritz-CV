"use strict";
(self["webpackChunkJanus_Maritz_CV"] = self["webpackChunkJanus_Maritz_CV"] || []).push([[631],{

/***/ 6631:
/*!************************************************************!*\
  !*** ./src/app/pages/soft-skills/soft-skills.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SoftSkillsComponent: () => (/* binding */ SoftSkillsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);






function SoftSkillsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](skill_r1.icon + " skill-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", skill_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r1.description);
  }
}
let SoftSkillsComponent = /*#__PURE__*/(() => {
  class SoftSkillsComponent {
    constructor(http) {
      this.http = http;
      this.skills = [];
      this.loadError = false;
    }
    ngOnInit() {
      this.http.get('assets/data/softskills.json').subscribe({
        next: data => this.skills = data,
        error: () => this.loadError = true
      });
    }
    static {
      this.ɵfac = function SoftSkillsComponent_Factory(t) {
        return new (t || SoftSkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SoftSkillsComponent,
        selectors: [["app-soft-skills"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 5,
        vars: 2,
        consts: [[1, "soft-skills-section"], [1, "skills-title"], [1, "skills-grid"], ["class", "skill-card", 4, "ngFor", "ngForOf"], [1, "skill-card"], [1, "skill-name"], [1, "skill-description"]],
        template: function SoftSkillsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "h2", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Soft Skills");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SoftSkillsComponent_div_4_Template, 6, 4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClientModule],
        styles: ["section.soft-skills-section[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  color: var(--primary-text);\n  padding: 60px 20px;\n}\nsection.soft-skills-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  margin: 0 auto;\n  padding: 20px;\n  font-family: var(--font-main);\n  color: var(--primary-text);\n}\nsection.soft-skills-section[_ngcontent-%COMP%]   .skills-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nsection.soft-skills-section[_ngcontent-%COMP%]   .skill-card[_ngcontent-%COMP%] {\n  background: var(--secondary-color);\n  border-radius: 1rem;\n  padding: 1.5rem;\n  position: relative;\n  overflow: hidden;\n  border: 1px solid var(--color-parchment);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);\n  transition: 0.3s ease-in-out;\n}\nsection.soft-skills-section[_ngcontent-%COMP%]   .skill-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 20px rgba(52, 211, 153, 0.3);\n  border-color: var(--amp-text);\n  transform: translateY(-2px);\n}\nsection.soft-skills-section[_ngcontent-%COMP%]   .skill-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--primary-text);\n  font-weight: 600;\n  margin-bottom: 0.8rem;\n}\nsection.soft-skills-section[_ngcontent-%COMP%]   .skill-card[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n  color: var(--amp-text);\n  font-size: 1.2rem;\n  vertical-align: middle;\n  text-shadow: 0 0 5px rgba(52, 211, 153, 0.4);\n}\nsection.soft-skills-section[_ngcontent-%COMP%]   .skill-card[_ngcontent-%COMP%]   .skill-description[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  line-height: 1.5;\n  color: rgba(255, 255, 255, 0.8); \n\n  margin: 0;\n}\n\n@media (max-width: 768px) {\n  .navbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .navbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-start;\n    gap: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc29mdC1za2lsbHMvc29mdC1za2lsbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0FBQ0o7QUFFRTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFBSjtBQUdFO0VBQ0Usa0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsd0NBQUE7RUFDQSw2Q0FBQTtFQUVBLDRCQUFBO0FBSEo7QUFLSTtFQUNFLDRDQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtBQUhOO0FBTUk7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFKTjtBQU9JO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0Q0FBQTtBQUxOO0FBUUk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUEsRUFBQSx3Q0FBQTtFQUNBLFNBQUE7QUFOTjs7QUFXQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSx1QkFBQTtFQVJGO0VBVUU7SUFDRSxXQUFBO0lBQ0EsMkJBQUE7SUFDQSxXQUFBO0VBUko7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24uc29mdC1za2lsbHMtc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dCk7XHJcbiAgcGFkZGluZzogNjBweCAyMHB4O1xyXG5cclxuICBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1haW4pO1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dCk7XHJcbiAgfVxyXG5cclxuICAuc2tpbGxzLWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjgwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiAycmVtO1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIC5za2lsbC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItcGFyY2htZW50KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIFxyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSg1MiwgMjExLCAxNTMsMC4zKTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hbXAtdGV4dCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaDMge1xyXG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0KTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5za2lsbC1pY29uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1hbXAtdGV4dCk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCByZ2JhKDUyLCAyMTEsIDE1MywwLjQpO1xyXG4gICAgfVxyXG5cclxuICAgIC5za2lsbC1kZXNjcmlwdGlvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTsgLyogU2xpZ2h0bHkgbXV0ZWQgZm9yIGJldHRlciBoaWVyYXJjaHkgKi9cclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLm5hdmJhciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgLm5hdi1saW5rcyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGdhcDogMS41cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
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
  return SoftSkillsComponent;
})();

/***/ })

}]);
//# sourceMappingURL=631.js.map