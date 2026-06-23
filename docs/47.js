"use strict";
(self["webpackChunkJanus_Maritz_CV"] = self["webpackChunkJanus_Maritz_CV"] || []).push([[47],{

/***/ 5047:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/button/button.component */ 8219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);





function HomeComponent_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const area_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](area_r1);
  }
}
let HomeComponent = /*#__PURE__*/(() => {
  class HomeComponent {
    constructor() {
      // Added areas of familiarity here for clean HTML rendering
      this.areasOfFamiliarity = ['Full-Stack Development', 'Cloud Operations', 'DevOps Integration', 'Data Handling', 'Agile Methodology', 'Support'];
    }
    downloadCV() {
      const filePath = 'assets/documents/Janus_Resume.pdf';
      const fileName = 'Janus_Resume.pdf';
      const a = document.createElement('a');
      a.href = filePath;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    static {
      this.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
        decls: 14,
        vars: 2,
        consts: [[1, "home-section"], [1, "home-card"], ["src", "assets/images/janusmaritz.jpg", "alt", "Profile photo", 1, "profile-img"], [1, "home-title"], [1, "home-subtitle"], [1, "home-content"], [1, "home-summary"], [1, "familiarity-tags"], ["class", "tag", 4, "ngFor", "ngForOf"], [1, "pressable-button", 3, "click"], [1, "tag"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Hi, I'm Janus");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Full Stack Developer \u2014 Angular & .NET");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Full-Stack Developer with a BSc in IT and a background in Software Support. Experienced in developing cloud solutions using Angular, C#, and Azure. Capable of managing DevOps workflows with YAML and Bicep, and optimizing data through SQL and Snowflake. Focused on delivering reliable software within Agile environments while leveraging a strong foundation in technical troubleshooting. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HomeComponent_span_11_Template, 2, 1, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "app-button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_app_button_click_12_listener() {
              return ctx.downloadCV();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Download CV");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeIn", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.areasOfFamiliarity);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent],
        styles: [".home-section[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  color: var(--primary-text);\n  min-height: 100vh;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.home-card[_ngcontent-%COMP%] {\n  background-color: var(--secondary-color);\n  padding: 60px 40px;\n  border-radius: 20px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);\n  text-align: center;\n  max-width: 800px; \n\n  width: 100%;\n  max-height: 90vh;\n  overflow-y: auto;\n  transition: box-shadow 0.3s ease, transform 0.3s ease;\n  border: 1px solid var(--color-parchment);\n}\n.home-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 40px rgba(52, 211, 153, 0.2);\n  border-color: var(--amp-text);\n}\n\n.profile-img[_ngcontent-%COMP%] {\n  width: 200px; \n\n  height: 200px;\n  object-fit: cover;\n  border-radius: 50%;\n  margin-bottom: 24px;\n  border: 4px solid var(--amp-text);\n  box-shadow: 0 0 20px rgba(52, 211, 153, 0.3);\n}\n\n.home-title[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 10px;\n  font-family: var(--font-main);\n  color: var(--primary-text);\n  font-weight: 700;\n}\n\n.home-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--amp-text); \n\n  margin-bottom: 20px;\n  font-family: var(--font-main);\n  font-weight: 600;\n}\n\n\n\n.home-content[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.home-summary[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  line-height: 1.6;\n  color: var(--secondary-text);\n  margin-bottom: 20px;\n  padding: 0 20px;\n}\n\n.familiarity-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 0.8rem;\n  margin-bottom: 20px;\n}\n.familiarity-tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--color-parchment);\n  padding: 0.4rem 0.8rem;\n  border-radius: 20px;\n  font-size: 0.85rem;\n  color: var(--primary-text);\n  transition: all 0.2s ease-in-out;\n}\n.familiarity-tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]:hover {\n  background: rgba(52, 211, 153, 0.1);\n  border-color: var(--amp-text);\n  color: var(--amp-text);\n  box-shadow: 0 0 10px rgba(52, 211, 153, 0.4);\n}\n\n@media (max-width: 768px) {\n  .home-card[_ngcontent-%COMP%] {\n    padding: 40px 20px;\n  }\n  .home-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .home-subtitle[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .home-summary[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n    padding: 0;\n  }\n  .profile-img[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 150px;\n  }\n  .navbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .navbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-start;\n    gap: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0NBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUEsRUFBQSw4REFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscURBQUE7RUFDQSx3Q0FBQTtBQUNGO0FBQ0U7RUFDRSw0Q0FBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBR0E7RUFDRSxZQUFBLEVBQUEsOERBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSw0Q0FBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLHNCQUFBLEVBQUEsK0NBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQSxnQ0FBQTtBQUNBO0VBQ0UsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUFGO0FBRUU7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQ0FBQTtBQUFKO0FBRUk7RUFDRSxtQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0Q0FBQTtBQUFOOztBQUtBO0VBQ0U7SUFDRSxrQkFBQTtFQUZGO0VBS0E7SUFDRSxlQUFBO0VBSEY7RUFNQTtJQUNFLGlCQUFBO0VBSkY7RUFPQTtJQUNFLGtCQUFBO0lBQ0EsVUFBQTtFQUxGO0VBUUE7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQU5GO0VBU0E7SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0VBUEY7RUFTRTtJQUNFLFdBQUE7SUFDQSwyQkFBQTtJQUNBLFdBQUE7RUFQSjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUtc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7IFxyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQpO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaG9tZS1jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gIHBhZGRpbmc6IDYwcHggNDBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC41KTsgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1heC13aWR0aDogODAwcHg7IC8qIENvbnN0cmFpbmVkIHNsaWdodGx5IHNvIHRoZSB0ZXh0IGRvZXNuJ3Qgc3RyZXRjaCB0b28gd2lkZSAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDkwdmg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1wYXJjaG1lbnQpO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYmEoNTIsIDIxMSwgMTUzLDAuMik7IFxyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hbXAtdGV4dCk7XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvZmlsZS1pbWcge1xyXG4gIHdpZHRoOiAyMDBweDsgLyogU3dpdGNoZWQgdG8gZml4ZWQgcHggZm9yIGJldHRlciBzY2FsaW5nIG9uIGxhcmdlciBzY3JlZW5zICovXHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1hbXAtdGV4dCk7IFxyXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoNTIsIDIxMSwgMTUzLDAuMyk7XHJcbn1cclxuXHJcbi5ob21lLXRpdGxlIHtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tYWluKTtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0KTsgXHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmhvbWUtc3VidGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1hbXAtdGV4dCk7IC8qIFN3aXRjaGVkIHRvIGFtcC10ZXh0IHRvIG1ha2UgeW91ciByb2xlIHBvcCAqL1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbWFpbik7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLyogTmV3IFN1bW1hcnkgYW5kIFRhZ3MgU3R5bGVzICovXHJcbi5ob21lLWNvbnRlbnQge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5ob21lLXN1bW1hcnkge1xyXG4gIGZvbnQtc2l6ZTogMS4wNXJlbTtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dCk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbn1cclxuXHJcbi5mYW1pbGlhcml0eS10YWdzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDAuOHJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAudGFnIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1wYXJjaG1lbnQpO1xyXG4gICAgcGFkZGluZzogMC40cmVtIDAuOHJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDUyLCAyMTEsIDE1MywwLjEpO1xyXG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWFtcC10ZXh0KTtcclxuICAgICAgY29sb3I6IHZhcigtLWFtcC10ZXh0KTtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSg1MiwgMjExLCAxNTMsMC40KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5ob21lLWNhcmQge1xyXG4gICAgcGFkZGluZzogNDBweCAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmhvbWUtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuICBcclxuICAuaG9tZS1zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcblxyXG4gIC5ob21lLXN1bW1hcnkge1xyXG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIC5wcm9maWxlLWltZyB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgLm5hdi1saW5rcyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGdhcDogMS41cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
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
  return HomeComponent;
})();

/***/ }),

/***/ 8219:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/button/button.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonComponent: () => (/* binding */ ButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


const _c0 = ["*"];
let ButtonComponent = /*#__PURE__*/(() => {
  class ButtonComponent {
    static {
      this.ɵfac = function ButtonComponent_Factory(t) {
        return new (t || ButtonComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ButtonComponent,
        selectors: [["app-button"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c0,
        decls: 2,
        vars: 0,
        consts: [[1, "pressable-button"]],
        template: function ButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
        styles: [".pressable-button[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  font-size: 16px;\n  font-weight: bold;\n  color: var(--primary-color);\n  background-color: var(--amp-text);\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  box-shadow: 0 5px 0 #059669;\n  transition: all 0.1s ease-in-out;\n  position: relative;\n  top: 0;\n}\n\n.pressable-button[_ngcontent-%COMP%]:active {\n  transform: translateY(5px);\n  box-shadow: none;\n}\n\n.pressable-button[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.1);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsMkJBQUE7RUFDQSxpQ0FBQTtFQUVBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFFQSwyQkFBQTtFQUVBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0FBSEY7O0FBTUE7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSx1QkFBQTtBQUhGIiwic291cmNlc0NvbnRlbnQiOlsiLnByZXNzYWJsZS1idXR0b24ge1xyXG4gIHBhZGRpbmc6IDEycHggMjRweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgXHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFtcC10ZXh0KTtcclxuICBcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBcclxuICBib3gtc2hhZG93OiAwIDVweCAwICMwNTk2Njk7IFxyXG4gIFxyXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbi5wcmVzc2FibGUtYnV0dG9uOmFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLnByZXNzYWJsZS1idXR0b246aG92ZXIge1xyXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return ButtonComponent;
})();

/***/ })

}]);
//# sourceMappingURL=47.js.map