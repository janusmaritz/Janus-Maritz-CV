"use strict";
(self["webpackChunkJanus_Maritz_CV"] = self["webpackChunkJanus_Maritz_CV"] || []).push([[411],{

/***/ 5411:
/*!********************************************************!*\
  !*** ./src/app/pages/education/education.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EducationComponent: () => (/* binding */ EducationComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);






function EducationComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7)(1, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.institution);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.period);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.degree);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
  }
}
function EducationComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12)(1, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.institution);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.certificate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.obtained);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.about);
  }
}
let EducationComponent = /*#__PURE__*/(() => {
  class EducationComponent {
    constructor(http) {
      this.http = http;
      this.education = [];
      this.certificate = [];
      this.loadError = false;
    }
    ngOnInit() {
      this.http.get('assets/data/education.json').subscribe({
        next: data => this.education = data,
        error: () => this.loadError = true
      });
      this.http.get('assets/data/certificate.json').subscribe({
        next: data => this.certificate = data,
        error: () => this.loadError = true
      });
    }
    static {
      this.ɵfac = function EducationComponent_Factory(t) {
        return new (t || EducationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EducationComponent,
        selectors: [["app-education"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 9,
        vars: 2,
        consts: [[1, "education-section"], [1, "education-title"], [1, "education-list"], ["class", "education-card", 4, "ngFor", "ngForOf"], [1, "certificate-title"], [1, "certificate-list"], ["class", "certificate-card", 4, "ngFor", "ngForOf"], [1, "education-card"], [1, "institution"], [1, "period"], [1, "degree"], [1, "description"], [1, "certificate-card"], [1, "certificate"], [1, "obtained"], [1, "about"]],
        template: function EducationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "h2", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Education");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EducationComponent_div_4_Template, 9, 4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Certificates");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EducationComponent_div_8_Template, 9, 4, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.education);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.certificate);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClientModule],
        styles: [".education-section[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  color: var(--primary-text);\n  padding: 60px 20px;\n  min-height: 100vh;\n}\n.education-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  margin: 0 auto;\n  padding: 20px;\n  font-family: var(--font-main);\n  color: var(--primary-text);\n}\n.education-section[_ngcontent-%COMP%]   .education-list[_ngcontent-%COMP%], .education-section[_ngcontent-%COMP%]   .certificate-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.education-section[_ngcontent-%COMP%]   .education-card[_ngcontent-%COMP%] {\n  background-color: var(--secondary-color);\n  padding: 1.5rem;\n  border-radius: 1rem;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);\n  border: 1px solid var(--color-parchment);\n  transition: 0.3s ease-in-out;\n}\n.education-section[_ngcontent-%COMP%]   .education-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 20px rgba(52, 211, 153, 0.3);\n  border-color: var(--amp-text);\n  transform: translateY(-2px);\n}\n.education-section[_ngcontent-%COMP%]   .education-card[_ngcontent-%COMP%]   .institution[_ngcontent-%COMP%] {\n  color: var(--amp-text);\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n}\n.education-section[_ngcontent-%COMP%]   .education-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .education-section[_ngcontent-%COMP%]   .education-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--primary-text);\n}\n.education-section[_ngcontent-%COMP%]   .education-card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  color: var(--secondary-text);\n  line-height: 1.6;\n}\n.education-section[_ngcontent-%COMP%]   .certificate-card[_ngcontent-%COMP%] {\n  background-color: var(--secondary-color);\n  padding: 1.5rem;\n  border-radius: 1rem;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);\n  border: 1px solid var(--color-parchment);\n  transition: 0.3s ease-in-out;\n}\n.education-section[_ngcontent-%COMP%]   .certificate-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 20px rgba(52, 211, 153, 0.3);\n  border-color: var(--amp-text);\n  transform: translateY(-2px);\n}\n.education-section[_ngcontent-%COMP%]   .certificate-card[_ngcontent-%COMP%]   .institution[_ngcontent-%COMP%] {\n  color: var(--amp-text);\n  font-size: 1.25rem;\n  font-weight: 700;\n}\n.education-section[_ngcontent-%COMP%]   .certificate-card[_ngcontent-%COMP%]   .certificate-name[_ngcontent-%COMP%] {\n  color: var(--primary-text);\n  font-weight: 600;\n}\n.education-section[_ngcontent-%COMP%]   .certificate-card[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  color: var(--secondary-text);\n  line-height: 1.6;\n}\n\n@media (max-width: 768px) {\n  .navbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .navbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-start;\n    gap: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNDQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtBQUNKO0FBRUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQUo7QUFHRTtFQUNFLHdDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBRUEsNkNBQUE7RUFDQSx3Q0FBQTtFQUVBLDRCQUFBO0FBSEo7QUFLSTtFQUNFLDRDQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtBQUhOO0FBTUk7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUpOO0FBT0k7RUFDSSwwQkFBQTtBQUxSO0FBUUk7RUFDRSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFOTjtBQVVFO0VBQ0Usd0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFFQSw2Q0FBQTtFQUNBLHdDQUFBO0VBRUEsNEJBQUE7QUFWSjtBQVlJO0VBQ0UsNENBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0FBVk47QUFhSTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVhOO0FBY0k7RUFDSSwwQkFBQTtFQUNBLGdCQUFBO0FBWlI7QUFlSTtFQUNFLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQWJOOztBQWtCQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSx1QkFBQTtFQWZGO0VBaUJFO0lBQ0UsV0FBQTtJQUNBLDJCQUFBO0lBQ0EsV0FBQTtFQWZKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZWR1Y2F0aW9uLXNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpOyBcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0KTtcclxuICBwYWRkaW5nOiA2MHB4IDIwcHg7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcblxyXG4gIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbWFpbik7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0KTtcclxuICB9XHJcblxyXG4gIC5lZHVjYXRpb24tbGlzdCwgLmNlcnRpZmljYXRlLWxpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDJyZW07XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuICAuZWR1Y2F0aW9uLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXBhcmNobWVudCk7XHJcbiAgICBcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoNTIsIDIxMSwgMTUzLDAuMyk7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYW1wLXRleHQpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICB9XHJcblxyXG4gICAgLmluc3RpdHV0aW9uIHtcclxuICAgICAgY29sb3I6IHZhcigtLWFtcC10ZXh0KTtcclxuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGgzLCBoNCB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQpO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNlcnRpZmljYXRlLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXBhcmNobWVudCk7XHJcbiAgICBcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoNTIsIDIxMSwgMTUzLDAuMyk7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYW1wLXRleHQpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICB9XHJcblxyXG4gICAgLmluc3RpdHV0aW9uIHtcclxuICAgICAgY29sb3I6IHZhcigtLWFtcC10ZXh0KTtcclxuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2VydGlmaWNhdGUtbmFtZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dCk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuXHJcbiAgICAuYWJvdXQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dCk7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubmF2YmFyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgICAubmF2LWxpbmtzIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgZ2FwOiAxLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return EducationComponent;
})();

/***/ })

}]);
//# sourceMappingURL=411.js.map