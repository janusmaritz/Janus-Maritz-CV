"use strict";
(self["webpackChunkJanus_Maritz_CV"] = self["webpackChunkJanus_Maritz_CV"] || []).push([[517],{

/***/ 3517:
/*!**********************************************************!*\
  !*** ./src/app/pages/experience/experience.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExperienceComponent: () => (/* binding */ ExperienceComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);







function ExperienceComponent_div_4_li_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const req_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", req_r1.focus, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", req_r1.detail, " ");
  }
}
function ExperienceComponent_div_4_div_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tech_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tech_r2);
  }
}
function ExperienceComponent_div_4_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExperienceComponent_div_4_div_10_span_1_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r3.technologies);
  }
}
function ExperienceComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExperienceComponent_div_4_li_9_Template, 4, 2, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExperienceComponent_div_4_div_10_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r3.responsibilities);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.technologies && item_r3.technologies.length > 0);
  }
}
let ExperienceComponent = /*#__PURE__*/(() => {
  class ExperienceComponent {
    constructor(http) {
      this.http = http;
      this.experiences = [];
      this.loadError = false;
    }
    ngOnInit() {
      this.http.get('assets/data/experience.json').subscribe({
        next: data => this.experiences = data,
        error: () => this.loadError = true
      });
    }
    static {
      this.ɵfac = function ExperienceComponent_Factory(t) {
        return new (t || ExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ExperienceComponent,
        selectors: [["app-experience"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 5,
        vars: 2,
        consts: [[1, "experience-section"], [1, "experience-title"], [1, "experience-list"], ["class", "experience-card", 4, "ngFor", "ngForOf"], [1, "experience-card"], [1, "card-header"], [1, "company"], [1, "duration"], [1, "role"], [1, "responsibilities-list"], [4, "ngFor", "ngForOf"], ["class", "tech-tags", 4, "ngIf"], [1, "tech-tags"], ["class", "tech-tag", 4, "ngFor", "ngForOf"], [1, "tech-tag"]],
        template: function ExperienceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "h2", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Experience");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExperienceComponent_div_4_Template, 11, 5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experiences);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClientModule],
        styles: [".experience-section[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  color: var(--primary-text);\n  padding: 60px 20px;\n  min-height: 100vh;\n}\n.experience-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  margin: 0 auto;\n  padding: 20px;\n  font-family: var(--font-main);\n  color: var(--primary-text);\n}\n.experience-section[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.experience-section[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%] {\n  background-color: var(--secondary-color);\n  padding: 2rem;\n  border-radius: 1rem;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);\n  border: 1px solid var(--color-parchment);\n  transition: 0.3s ease-in-out;\n  \n\n}\n.experience-section[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 20px rgba(52, 211, 153, 0.3);\n  border-color: var(--amp-text);\n  transform: translateY(-2px);\n}\n.experience-section[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-bottom: 0.25rem;\n}\n.experience-section[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%] {\n  color: var(--amp-text);\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin: 0;\n}\n.experience-section[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .duration[_ngcontent-%COMP%] {\n  color: var(--secondary-text);\n  font-size: 0.95rem;\n  font-style: italic;\n  background: rgba(255, 255, 255, 0.05);\n  padding: 0.2rem 0.6rem;\n  border-radius: 4px;\n}\n.experience-section[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  color: var(--primary-text);\n  font-weight: 600;\n  font-size: 1.1rem;\n  margin-top: 0;\n  margin-bottom: 1.5rem;\n}\n.experience-section[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]   .responsibilities-list[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem 0;\n  padding-left: 1.2rem;\n  color: var(--secondary-text);\n}\n.experience-section[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]   .responsibilities-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  margin-bottom: 0.6rem;\n}\n.experience-section[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]   .responsibilities-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--primary-text);\n}\n.experience-section[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]   .responsibilities-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::marker {\n  color: var(--amp-text);\n}\n.experience-section[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]   .tech-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.6rem;\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n.experience-section[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]   .tech-tag[_ngcontent-%COMP%] {\n  background: rgba(52, 211, 153, 0.1);\n  color: var(--amp-text);\n  border: 1px solid var(--amp-text);\n  padding: 0.3rem 0.7rem;\n  border-radius: 15px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  transition: all 0.2s ease-in-out;\n}\n.experience-section[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]   .tech-tag[_ngcontent-%COMP%]:hover {\n  background: var(--amp-text);\n  color: var(--primary-color);\n  box-shadow: 0 0 8px rgba(52, 211, 153, 0.5);\n}\n\n@media (max-width: 768px) {\n  .experience-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5rem;\n  }\n  .navbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .navbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-start;\n    gap: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0NBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0FBQ0o7QUFFRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBSjtBQUdFO0VBQ0Usd0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSw2Q0FBQTtFQUNBLHdDQUFBO0VBRUEsNEJBQUE7RUEyREEsb0JBQUE7QUE3REo7QUFJSTtFQUNFLDRDQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtBQUZOO0FBS0k7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQUhOO0FBS007RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBSFI7QUFNTTtFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUpSO0FBUUk7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUFOTjtBQVNJO0VBQ0Usb0JBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0FBUE47QUFTTTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7QUFQUjtBQVNRO0VBQ0UsMEJBQUE7QUFQVjtBQVVRO0VBQ0Usc0JBQUE7QUFSVjtBQWNJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0FBWk47QUFlSTtFQUNFLG1DQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFiTjtBQWVNO0VBQ0UsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLDJDQUFBO0FBYlI7O0FBbUJBO0VBRUk7SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsV0FBQTtFQWpCSjtFQXFCQTtJQUNFLHNCQUFBO0lBQ0EsdUJBQUE7RUFuQkY7RUFxQkU7SUFDRSxXQUFBO0lBQ0EsMkJBQUE7SUFDQSxXQUFBO0VBbkJKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhwZXJpZW5jZS1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0KTtcclxuICBwYWRkaW5nOiA2MHB4IDIwcHg7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcblxyXG4gIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbWFpbik7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0KTtcclxuICB9XHJcblxyXG4gIC5leHBlcmllbmNlLWxpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDJyZW07XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuICAuZXhwZXJpZW5jZS1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIFxyXG4gICAgYm94LXNoYWRvdzogMCA0cHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItcGFyY2htZW50KTtcclxuICAgIFxyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSg1MiwgMjExLCAxNTMsMC4zKTsgXHJcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYW1wLXRleHQpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcblxyXG4gICAgICAuY29tcGFueSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWFtcC10ZXh0KTtcclxuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmR1cmF0aW9uIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcclxuICAgICAgICBwYWRkaW5nOiAwLjJyZW0gMC42cmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5yb2xlIHtcclxuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dCk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnJlc3BvbnNpYmlsaXRpZXMtbGlzdCB7XHJcbiAgICAgIG1hcmdpbjogMCAwIDEuNXJlbSAwO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEuMnJlbTtcclxuICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0KTtcclxuXHJcbiAgICAgIGxpIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNnJlbTtcclxuICAgICAgICBcclxuICAgICAgICBzdHJvbmcge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjptYXJrZXIge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWFtcC10ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBUZWNobm9sb2d5IFRhZ3MgKi9cclxuICAgIC50ZWNoLXRhZ3Mge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGdhcDogMC42cmVtO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XHJcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLnRlY2gtdGFnIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSg1MiwgMjExLCAxNTMsMC4xKTsgXHJcbiAgICAgIGNvbG9yOiB2YXIoLS1hbXAtdGV4dCk7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFtcC10ZXh0KTtcclxuICAgICAgcGFkZGluZzogMC4zcmVtIDAuN3JlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYW1wLXRleHQpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoNTIsIDIxMSwgMTUzLDAuNSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5leHBlcmllbmNlLWNhcmQge1xyXG4gICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGdhcDogMC41cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm5hdmJhciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgLm5hdi1saW5rcyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGdhcDogMS41cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
        data: {
          animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
            opacity: 0,
            transform: 'translateY(10px)'
          }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('600ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
            opacity: 1,
            transform: 'translateY(0)'
          }))])])]
        }
      });
    }
  }
  return ExperienceComponent;
})();

/***/ })

}]);
//# sourceMappingURL=517.js.map