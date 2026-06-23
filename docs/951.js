"use strict";
(self["webpackChunkJanus_Maritz_CV"] = self["webpackChunkJanus_Maritz_CV"] || []).push([[951],{

/***/ 2951:
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);




function ContactComponent_section_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r1.iconClass + " icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("target", item_r1.label === "LinkedIn" ? "_blank" : null)("rel", item_r1.label === "LinkedIn" ? "noopener noreferrer" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.value);
  }
}
function ContactComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContactComponent_section_0_div_3_Template, 4, 6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.contactItems);
  }
}
let ContactComponent = /*#__PURE__*/(() => {
  class ContactComponent {
    constructor(http) {
      this.http = http;
      this.contactItems = [];
      this.loadError = false;
    }
    ngOnInit() {
      this.http.get('assets/data/contact.json').subscribe({
        next: data => this.contactItems = data,
        error: () => this.loadError = true
      });
    }
    static {
      this.ɵfac = function ContactComponent_Factory(t) {
        return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContactComponent,
        selectors: [["app-contact"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 1,
        vars: 1,
        consts: [["class", "contact-section", 4, "ngIf"], [1, "contact-section"], ["class", "contact-item", 4, "ngFor", "ngForOf"], [1, "contact-item"], [3, "href"]],
        template: function ContactComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContactComponent_section_0_Template, 4, 1, "section", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactItems.length);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
        styles: ["section.contact-section[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  color: var(--primary-text);\n  padding: 2rem;\n}\nsection.contact-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  margin: 0 auto;\n  padding: 20px;\n  font-family: var(--font-main);\n  color: var(--primary-text);\n}\nsection.contact-section[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%] {\n  background: var(--secondary-color);\n  border-radius: 1rem;\n  padding: 1rem 1.5rem;\n  margin-bottom: 1.5rem;\n  display: flex;\n  align-items: center;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);\n  border: 1px solid var(--color-parchment);\n  transition: 0.3s ease-in-out;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\nsection.contact-section[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 20px rgba(52, 211, 153, 0.3);\n  border-color: var(--amp-text);\n  transform: translateY(-2px);\n}\nsection.contact-section[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin-right: 1rem;\n  width: 24px;\n  text-align: center;\n  color: var(--amp-text);\n}\nsection.contact-section[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary-text);\n  text-decoration: none;\n  font-size: 1rem;\n  transition: color 0.2s ease;\n}\nsection.contact-section[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--amp-text);\n  text-shadow: 0 0 8px rgba(52, 211, 153, 0.4);\n}\n\n@media (max-width: 768px) {\n  .navbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .navbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-start;\n    gap: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0FBQ0o7QUFFRTtFQUNFLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBRUEsNkNBQUE7RUFDQSx3Q0FBQTtFQUVBLDRCQUFBO0VBRUEsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSEo7QUFLSTtFQUNFLDRDQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtBQUhOO0FBTUk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBRUEsc0JBQUE7QUFMTjtBQVFJO0VBQ0UsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQU5OO0FBUU07RUFDRSxzQkFBQTtFQUNBLDRDQUFBO0FBTlI7O0FBWUE7RUFDRTtJQUNFLHNCQUFBO0lBQ0EsdUJBQUE7RUFURjtFQVdFO0lBQ0UsV0FBQTtJQUNBLDJCQUFBO0lBQ0EsV0FBQTtFQVRKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uLmNvbnRhY3Qtc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dCk7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuXHJcbiAgaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tYWluKTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQpO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3QtaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXBhcmNobWVudCk7XHJcbiAgICBcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBcclxuICAgIG1heC13aWR0aDogNjAwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoNTIsIDIxMSwgMTUzLDAuMyk7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYW1wLXRleHQpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICB9XHJcblxyXG4gICAgLmljb24ge1xyXG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgXHJcbiAgICAgIGNvbG9yOiB2YXIoLS1hbXAtdGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQpO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWFtcC10ZXh0KTtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDhweCByZ2JhKDUyLCAyMTEsIDE1MywwLjQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubmF2YmFyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgICAubmF2LWxpbmtzIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgZ2FwOiAxLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return ContactComponent;
})();

/***/ })

}]);
//# sourceMappingURL=951.js.map