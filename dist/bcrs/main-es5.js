(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-question/add-question.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-question/add-question.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n/*\r\n============================================\r\n; Title:  Bob's Computer\r\n; Author: Don Cousar\r\n; Date:   28 October 2019\r\n; Description: Bob's Computer\r\n;===========================================\r\n*/\r\n-->\r\n<div fxLayout=\"column\">\r\n    <mat-card>\r\n        <mat-card-title>Add Security Question</mat-card-title>\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"saveQuestion()\" #userForm>\r\n            <mat-card-content>\r\n                <div fxLayout=\"column\" fxLayoutGap=\"10px\">\r\n                    <mat-form-field>\r\n                        <input type=\"text\"  matInput [(ngModel)]=\"QuestionText\" value=\"{{QuestionText}}\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Question Text\" />\r\n                    </mat-form-field>\r\n            </div>\r\n            </mat-card-content>\r\n            <br />\r\n            <mat-card-actions>\r\n                <button mat-raised-button (click)=\"cancel()\" color=\"accent\">Cancel</button>\r\n                <button mat-raised-button color=\"primary\">Submit</button>\r\n            </mat-card-actions>\r\n        </form>\r\n    </mat-card>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot-password/forgot-password.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot-password/forgot-password.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>forgot-password works!</p>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>home works!</p>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\">\r\n  <mat-card fxFlex>\r\n    <mat-card-header>\r\n      <mat-card-title>Login</mat-card-title>\r\n      <mat-card-subtitle>Please enter your username and password below.</mat-card-subtitle>\r\n    </mat-card-header>\r\n\r\n\r\n    <mat-card-content >\r\n      <small *ngIf=\"form.controls['username'].hasError('required') && form.controls['username'].touched\" class=\"form-error\">Username is required!</small>\r\n      <small *ngIf=\"form.controls['password'].hasError('required') && form.controls['password'].touched\" class=\"form-error\">Password is required!</small>\r\n      <small *ngIf=\"errorMessage\">{{errorMessage}}</small>\r\n\r\n      <br />\r\n\r\n      <form [formGroup]=\"form\" (ngSubmit)=\"login()\">\r\n        <mat-form-field >\r\n          <input type=\"text\" matInput [formControl]=\"form.controls['username']\" placeholder=\"username\">\r\n        </mat-form-field>\r\n        <br />\r\n        <br />\r\n        <mat-form-field >\r\n          <input type=\"text\" matInput [formControl]=\"form.controls['password']\" placeholder=\"password\">\r\n        </mat-form-field>\r\n        <mat-card-actions>\r\n          <div >\r\n            <button type=\"submit\" mat-raised-button color=\"primary\">Login</button>\r\n          </div>\r\n\r\n          <br />\r\n          <br />\r\n          <div >\r\n            <a routerLink=\"/signup\" class=\"left\">Sign Up</a>\r\n            <a routerLink=\"\" class=\"right\">Forgot Password?</a>\r\n          </div>\r\n\r\n        </mat-card-actions>\r\n      </form>\r\n\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n<!-- Alan's HTML\r\n<div class=\"mt-4 col-8 offset-2\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">Login Here</div>\r\n    <div class=\"card-body\">\r\n      <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"alert alert-danger\" [hidden]=\"!error\">\r\n          {{ error }}\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"inputuserName3\" class=\"col-sm-2 col-form-label\">User Name</label>\r\n          <div class=\"col-sm-10\">\r\n            <input\r\n              type=\"text\"\r\n              name=\"userName\"\r\n              class=\"form-control\"\r\n              id=\"inputuserName3\"\r\n              placeholder=\"userName\"\r\n              [(ngModel)]=\"form.userName\"\r\n              required\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\"\r\n            >Password</label\r\n          >\r\n          <div class=\"col-sm-10\">\r\n            <input\r\n              type=\"password\"\r\n              name=\"password\"\r\n              class=\"form-control\"\r\n              id=\"inputPassword3\"\r\n              placeholder=\"Password\"\r\n              [(ngModel)]=\"form.password\"\r\n              required\r\n            />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-10 offset-2\">\r\n            <button\r\n              type=\"submit\"\r\n              class=\"btn btn-primary\"\r\n              [disabled]=\"!loginForm.valid\"\r\n            >\r\n              Sign in\r\n            </button>\r\n\r\n            <a routerLink=\"/session/signup\" class=\"btn btn-info float-right\">Sign Up</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n                <div class=\"col-sm-10 offset-2\">\r\n\r\n                  <a routerLink=\"/session/forgotPassword\" class=\"btn btn-info float-right\">Password Reset</a>\r\n\r\n\r\n                </div>\r\n              </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n-->\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/not-found/not-found.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/not-found/not-found.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>Page Not Found</p>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/question-details/question-details.component.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/question-details/question-details.component.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n/*\r\n============================================\r\n; Title:  Bob's Computer\r\n; Author: Don Cousar\r\n; Date:   28 October 2019\r\n; Description: Bob's Computer\r\n;===========================================\r\n*/\r\n-->\r\n\r\n<div fxLayout=\"column\">\r\n    <mat-card>\r\n        <mat-card-title>Edit Question Details</mat-card-title>\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"saveQuestion()\" #userForm>\r\n            <mat-card-content>\r\n                <div fxLayout=\"column\" fxLayoutGap=\"10px\">\r\n                    <mat-form-field>\r\n                        <input type=\"text\"  matInput [(ngModel)]=\"QuestionText\" value=\"{{QuestionText}}\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Question Text\" />\r\n                    </mat-form-field>\r\n            </div>\r\n            </mat-card-content>\r\n            <br />\r\n            <mat-card-actions>\r\n                <button mat-raised-button (click)=\"cancel()\" color=\"accent\">Cancel</button>\r\n                <button mat-raised-button color=\"primary\">Submit</button>\r\n            </mat-card-actions>\r\n        </form>\r\n    </mat-card>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/security-questions-delete-dialog/security-questions-delete-dialog.component.html": 
        /*!**********************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/security-questions-delete-dialog/security-questions-delete-dialog.component.html ***!
          \**********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n    /*\r\n============================================\r\n; Title:  Bob's Computer\r\n; Author: Don Cousar\r\n; Date:   28 October 2019\r\n; Description: Bob's Computer\r\n;===========================================\r\n*/\r\n-->\r\n<h1 mat-dialog-title>Bob's Computer Repair Shop</h1>\r\n<div mat-dialog-content>\r\n    <h3>You have elected to delete the following Security Question: </h3>\r\n    <h4>{{myQuestion}}</h4>\r\n    <p>This cannot be undone!</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button [mat-dialog-close]=\"\" cdkFocusInitial color=\"warn\">Ok</button>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/security-questions/security-questions.component.html": 
        /*!******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/security-questions/security-questions.component.html ***!
          \******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n/*\r\n============================================\r\n; Title:  Bob's Computer\r\n; Author: Don Cousar\r\n; Date:   28 October 2019\r\n; Description: Bob's Computer\r\n;===========================================\r\n*/\r\n-->\r\n<div fxLayout=\"column\">\r\n        <mat-card>\r\n            <mat-card-title>Security Questions</mat-card-title>\r\n            <mat-card-subtitle><button routerLink=\"/questions/add\">Add Question</button></mat-card-subtitle>\r\n            <mat-card-content>\r\n                    <form #f=\"ngForm\">\r\n                    <table mat-table [dataSource]=\"questions\" class=\"mat-elevation-z8\">\r\n    \r\n                        <!--- Note that these columns can be defined in any order.\r\n                                The actual rendered columns are set as a property on the row definition\" -->\r\n    \r\n                        <!-- Question Text Column -->\r\n                        <ng-container matColumnDef=\"questionText\">\r\n                            <th mat-header-cell *matHeaderCellDef> Question Text </th>\r\n                            <!-- Edit User Name Control-->\r\n                            <td mat-cell *matCellDef=\"let element\">\r\n                                {{element.questionText}}\r\n                            </td>\r\n                        </ng-container>\r\n    \r\n                        <!-- Edit Column -->\r\n                        <ng-container matColumnDef=\"edit\">\r\n                            <th mat-header-cell *matHeaderCellDef>  </th>\r\n    \r\n                            <td mat-cell *matCellDef=\"let element\">\r\n                                <button routerLink=\"/questions/edit/{{element._id}}\" >Edit</button>\r\n                            </td>\r\n                        </ng-container>\r\n    \r\n                        <!-- Delete Column -->\r\n                        <ng-container matColumnDef=\"delete\">\r\n                            <th mat-header-cell *matHeaderCellDef>  </th>\r\n    \r\n                            <td mat-cell *matCellDef=\"let element\">\r\n                                <button (click)=\"delete(element._id, element.questionText)\" >Delete</button>\r\n                            </td>\r\n                        </ng-container>\r\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                    </table>\r\n                </form>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    \r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup-dialog/signup-dialog.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup-dialog/signup-dialog.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--\n    /*\n============================================\n; Title:  Bob's Computer\n; Author: Don Cousar\n; Date:   30 October 2019\n; Description: Bob's Computer\n;===========================================\n*/\n-->\n<h1 mat-dialog-title>Bob's Computer Repair Shop</h1>\n<div mat-dialog-content>\n    <p>{{message}}</p>\n</div>\n<div mat-dialog-actions>\n    <button mat-button [mat-dialog-close]=\"\" cdkFocusInitial color=\"warn\">Ok</button>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--\n============================================\n; Title:  Bob's Computer Signup\n; Authors: Don Cousar / Alan Edwards\n; Date:   30 October 2019\n; Description: Bob's Computer\n; Attribution: Form Control Logic inspired by Professor Krasso @Bellevue University\n;===========================================\n-->\n<div fxLayout=\"column\">\n    <mat-card>\n        <mat-card-title>Account Registration</mat-card-title>\n        <form [formGroup]=\"form\" (ngSubmit)=\"register()\" #userForm>\n            <mat-card-content>\n                <div fxLayout=\"column\" fxLayoutGap=\"10px\">\n                    <mat-form-field>\n                        <input type=\"text\"  matInput [(ngModel)]=\"FirstName\" value=\"{{FirstName}}\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"First Name\" />\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input type=\"text\"  matInput [(ngModel)]=\"LastName\" value=\"{{LastName}}\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Last Name\" />\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input type=\"text\"  matInput [(ngModel)]=\"Address\" value=\"{{Address}}\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Address\" />\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input type=\"text\"  matInput [(ngModel)]=\"PhoneNumber\" value=\"{{PhoneNumber}}\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Phone Number\" />\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input type=\"text\"  matInput [(ngModel)]=\"Email\" value=\"{{Email}}\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Email\" />\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input type=\"text\"  matInput [(ngModel)]=\"Username\" value=\"{{Username}}\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"User Name\" />\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input type=\"text\"  type=\"password\" pattern=\"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$\" matInput [(ngModel)]=\"Password\" value=\"{{Password}}\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Create Password\" />\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input type=\"text\"  type=\"password\" pattern=\"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$\" matInput [(ngModel)]=\"ConfirmPassword\" value=\"{{ConfirmPassword}}\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Confirm Password\" />\n                    </mat-form-field>\n                    <mat-form-field>\n                        <mat-label>Choose Security Question #1</mat-label>\n                        <select matNativeControl [(ngModel)]=\"secQuestion1\" [ngModelOptions]=\"{standalone: true}\">\n                            <option *ngFor=\"let question of questions\" value={{question._id}}>\n                                {{question.questionText}}\n                            </option>\n                        </select> \n                    </mat-form-field>\n                    <mat-form-field>\n                        <input type=\"text\"  matInput [(ngModel)]=\"secAnswer1\" value=\"{{secAnswer1}}\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Enter Answer to Security Question 1\" />\n                    </mat-form-field>\n                    <mat-form-field>\n                        <mat-label>Choose Security Question #2</mat-label>\n                        <select matNativeControl [(ngModel)]=\"secQuestion2\" [ngModelOptions]=\"{standalone: true}\">\n                            <option *ngFor=\"let question of questions\" value={{question._id}}>\n                                {{question.questionText}}\n                            </option>\n                        </select> \n                    </mat-form-field>\n                    <mat-form-field>\n                        <input type=\"text\"  matInput [(ngModel)]=\"secAnswer2\" value=\"{{secAnswer2}}\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Enter Answer to Security Question 2\" />\n                    </mat-form-field>\n                    <mat-form-field>\n                        <mat-label>Choose Security Question #3</mat-label>\n                        <select matNativeControl [(ngModel)]=\"secQuestion3\" [ngModelOptions]=\"{standalone: true}\">\n                            <option *ngFor=\"let question of questions\" value={{question._id}}>\n                                {{question.questionText}}\n                            </option>\n                        </select> \n                    </mat-form-field>\n                    <mat-form-field>\n                        <input type=\"text\"  matInput [(ngModel)]=\"secAnswer3\" value=\"{{secAnswer3}}\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Enter Answer to Security Question 3\" />\n                    </mat-form-field>\n                </div>\n            </mat-card-content>\n            <br />\n            <mat-card-actions>\n                <button mat-raised-button (click)=\"cancel()\" color=\"accent\">Cancel</button>\n                <button mat-raised-button color=\"primary\">Submit</button>\n            </mat-card-actions>\n        </form>\n    </mat-card>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-details/user-details.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-details/user-details.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n/*\r\n============================================\r\n; Title:  Bob's Computer\r\n; Author: Don Cousar\r\n; Date:   25 October 2019\r\n; Description: Bob's Computer\r\n;===========================================\r\n*/\r\n-->\r\n\r\n<div fxLayout=\"column\">\r\n    <mat-card>\r\n        <mat-card-title>Edit User Details</mat-card-title>\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"saveUser()\" #userForm>\r\n            <mat-card-content>\r\n                <div fxLayout=\"column\" fxLayoutGap=\"10px\">\r\n\r\n                    <mat-form-field>\r\n                        <input type=\"text\"  matInput [(ngModel)]=\"PhoneNumber\" value=\"{{PhoneNumber}}\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"PhoneNumber\" />\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field>\r\n                        <input type=\"text\"  matInput [(ngModel)]=\"Address\" value=\"{{Address}}\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Address\" />\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field>\r\n                        <input type=\"text\"  matInput [(ngModel)]=\"Email\" value=\"{{Email}}\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Email\" />\r\n                    </mat-form-field>\r\n            </div>\r\n            </mat-card-content>\r\n            <br />\r\n            <mat-card-actions>\r\n                <button mat-raised-button (click)=\"cancel()\" color=\"accent\">Cancel</button>\r\n                <button mat-raised-button color=\"primary\">Submit</button>\r\n            </mat-card-actions>\r\n        </form>\r\n    </mat-card>\r\n</div>\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-management-delete-dialog/user-management-delete-dialog.component.html": 
        /*!****************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-management-delete-dialog/user-management-delete-dialog.component.html ***!
          \****************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n    /*\r\n============================================\r\n; Title:  Bob's Computer\r\n; Author: Don Cousar\r\n; Date:   23 October 2019\r\n; Description: Bob's Computer\r\n;===========================================\r\n*/\r\n-->\r\n<h1 mat-dialog-title>Bob's Computer Repair Shop</h1>\r\n<div mat-dialog-content>\r\n    <h3>You have elected to delete user: {{myUserName}} </h3>\r\n    <p>This cannot be undone!</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button [mat-dialog-close]=\"\" cdkFocusInitial color=\"warn\">Ok</button>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-management/user-management.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-management/user-management.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n/*\r\n============================================\r\n; Title:  Bob's Computer\r\n; Author: Don Cousar\r\n; Date:   23 October 2019\r\n; Description: Bob's Computer\r\n;===========================================\r\n*/\r\n-->\r\n<div fxLayout=\"column\">\r\n    <mat-card>\r\n        <mat-card-title>User Management</mat-card-title>\r\n        <mat-card-content>\r\n                <form #f=\"ngForm\">\r\n                <table mat-table [dataSource]=\"users\" class=\"mat-elevation-z8\">\r\n\r\n                    <!--- Note that these columns can be defined in any order.\r\n                            The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n                    <!-- Last Name Column -->\r\n                    <ng-container matColumnDef=\"username\">\r\n                        <th mat-header-cell *matHeaderCellDef> Username </th>\r\n                        <!-- Edit User Name Control-->\r\n                        <td mat-cell *matCellDef=\"let element\">\r\n                            {{element.username}}\r\n                        </td>\r\n                    </ng-container>\r\n\r\n                    <!-- First Name Column -->\r\n                    <ng-container matColumnDef=\"firstName\">\r\n                        <th mat-header-cell *matHeaderCellDef> First Name </th>\r\n\r\n                        <td mat-cell *matCellDef=\"let element\">\r\n                            {{element.firstName}}\r\n                        </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Last Name Column -->\r\n                    <ng-container matColumnDef=\"lastName\">\r\n                        <th mat-header-cell *matHeaderCellDef> Last Name </th>\r\n\r\n                        <td mat-cell *matCellDef=\"let element\">\r\n                            {{element.lastName}}\r\n                        </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Phone Number Column -->\r\n                    <ng-container matColumnDef=\"phoneNumber\">\r\n                        <th mat-header-cell *matHeaderCellDef> Phone Number </th>\r\n\r\n                        <td mat-cell *matCellDef=\"let element\">\r\n                            {{element.phoneNumber}}\r\n                        </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Address Column -->\r\n                    <ng-container matColumnDef=\"address\">\r\n                        <th mat-header-cell *matHeaderCellDef> Address </th>\r\n\r\n                        <td mat-cell *matCellDef=\"let element\">\r\n                            {{element.address}}\r\n                        </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Email Column -->\r\n                    <ng-container matColumnDef=\"email\">\r\n                        <th mat-header-cell *matHeaderCellDef> Email </th>\r\n\r\n                        <td mat-cell *matCellDef=\"let element\">\r\n                            {{element.email}}\r\n                        </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Edit Column -->\r\n                    <ng-container matColumnDef=\"edit\">\r\n                        <th mat-header-cell *matHeaderCellDef>  </th>\r\n\r\n                        <td mat-cell *matCellDef=\"let element\">\r\n                            <button routerLink=\"/user/edit/{{element._id}}\" > Edit </button>\r\n                        </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Delete Column -->\r\n                    <ng-container matColumnDef=\"delete\">\r\n                        <th mat-header-cell *matHeaderCellDef>  </th>\r\n\r\n                        <td mat-cell *matCellDef=\"let element\">\r\n                            <button (click)=\"delete(element._id, element.username)\" > Delete </button>\r\n                        </td>\r\n                    </ng-container>\r\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                </table>\r\n            </form>\r\n        </mat-card-content>\r\n    </mat-card>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/base-layout/base-layout.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/base-layout/base-layout.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n/*\r\n============================================\r\n; Title:  Bob's Computer\r\n; Author: Don Cousar\r\n; Date:   23 October 2019\r\n; Description: BobComputer Starter Code\r\n;===========================================\r\n*/\r\n-->\r\n<div>\r\n  <main>\r\n    <mat-toolbar class=\"menu\" role=\"header\" color=\"accent\">\r\n      <mat-toolbar-row>\r\n        <button mat-button class=\"toolbar__icon-button mat-button\">\r\n          <a routerLink=\"/\">\r\n            <img src=\"../../../assets/BobLogoWhite.png\" alt=\"Bob's Computer Repair Shop\" id=\"logo\">\r\n          </a>\r\n        </button>\r\n        <button mat-button class=\"mat-button\">\r\n          <a routerLink=\"\">About Us</a>\r\n        </button>\r\n        <button mat-button class=\"mat-button\">\r\n          <a routerLink=\"\">Service Repairs</a>\r\n        </button>\r\n        <button mat-button class=\"mat-button\">\r\n          <a routerLink=\"\">Contact Us</a>\r\n        </button>\r\n        <button mat-button class=\"mat-button\">\r\n          <a routerLink=\"/user\">User Management</a>\r\n        </button>\r\n        <button mat-button class=\"mat-button\">\r\n          <a routerLink=\"/questions\">Security Questions Management</a>\r\n        </button>\r\n\r\n        <div fxFlex></div>\r\n\r\n        <button mat-button class=\"mat-button\">\r\n          <a (click)=\"logout()\" class=\"nav-link\">Logout</a>\r\n        </button>\r\n      </mat-toolbar-row>\r\n    </mat-toolbar>\r\n  </main>\r\n</div>\r\n<router-outlet></router-outlet>\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/session-layout/session-layout.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/session-layout/session-layout.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
            /*
            ; Title:  app.component.ts
            ; Author: Professor Krasso
            ; Date:   29 October 2019
            ; Modified By: Jordan Hennessy
            ; Description: BobComputer Starter Code
            ;===========================================
            */
            var AppComponent = /** @class */ (function () {
                function AppComponent(cookieService, router, authGuard) {
                    this.cookieService = cookieService;
                    this.router = router;
                    this.authGuard = authGuard;
                    this.title = "Bob's Computer Repair Shop";
                    var test = this.cookieService.get("isAuthenticated");
                    console.log(test);
                    if (!test) {
                        router.navigate(['/session/login']);
                    }
                }
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _shared__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: '<router-outlet></router-outlet>'
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
            /* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
            /* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
            /* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
            /* harmony import */ var _shared_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/base-layout/base-layout.component */ "./src/app/shared/base-layout/base-layout.component.ts");
            /* harmony import */ var _pages_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/user-management/user-management.component */ "./src/app/pages/user-management/user-management.component.ts");
            /* harmony import */ var _pages_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/user-details/user-details.component */ "./src/app/pages/user-details/user-details.component.ts");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
            /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
            /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
            /* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
            /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
            /* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
            /* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
            /* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _pages_user_management_delete_dialog_user_management_delete_dialog_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/user-management-delete-dialog/user-management-delete-dialog.component */ "./src/app/pages/user-management-delete-dialog/user-management-delete-dialog.component.ts");
            /* harmony import */ var _pages_security_questions_security_questions_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/security-questions/security-questions.component */ "./src/app/pages/security-questions/security-questions.component.ts");
            /* harmony import */ var _pages_question_details_question_details_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/question-details/question-details.component */ "./src/app/pages/question-details/question-details.component.ts");
            /* harmony import */ var _pages_security_questions_delete_dialog_security_questions_delete_dialog_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/security-questions-delete-dialog/security-questions-delete-dialog.component */ "./src/app/pages/security-questions-delete-dialog/security-questions-delete-dialog.component.ts");
            /* harmony import */ var _pages_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/add-question/add-question.component */ "./src/app/pages/add-question/add-question.component.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./shared/auth.guard */ "./src/app/shared/auth.guard.ts");
            /* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
            /* harmony import */ var _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/forgot-password/forgot-password.component */ "./src/app/pages/forgot-password/forgot-password.component.ts");
            /* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
            /* harmony import */ var _pages_signup_dialog_signup_dialog_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/signup-dialog/signup-dialog.component */ "./src/app/pages/signup-dialog/signup-dialog.component.ts");
            /*
            ; Title:  starter code
            ; Author: Professor Krasso
            ; Date:   21 October 2019
            ; ModifiedBy: Don Cousar
            ; ModifiedDate: 25 October 2019
            ; Description: BobComputer Starter Code
            ;===========================================
            */
            //material
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                        _shared__WEBPACK_IMPORTED_MODULE_7__["SessionLayoutComponent"],
                        _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
                        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                        _shared_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_11__["BaseLayoutComponent"],
                        _pages_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_12__["UserManagementComponent"],
                        _pages_user_management_delete_dialog_user_management_delete_dialog_component__WEBPACK_IMPORTED_MODULE_30__["UserManagementDeleteDialogComponent"],
                        _pages_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_13__["UserDetailsComponent"],
                        _pages_security_questions_security_questions_component__WEBPACK_IMPORTED_MODULE_31__["SecurityQuestionsComponent"],
                        _pages_question_details_question_details_component__WEBPACK_IMPORTED_MODULE_32__["QuestionDetailsComponent"],
                        _pages_security_questions_delete_dialog_security_questions_delete_dialog_component__WEBPACK_IMPORTED_MODULE_33__["SecurityQuestionsDeleteDialogComponent"],
                        _pages_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_34__["AddQuestionComponent"],
                        _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_38__["ForgotPasswordComponent"],
                        _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_39__["SignupComponent"],
                        _pages_signup_dialog_signup_dialog_component__WEBPACK_IMPORTED_MODULE_40__["SignupDialogComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuModule"],
                        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
                        _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__["MatRadioModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__["FlexLayoutModule"],
                        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"],
                        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
                        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
                        _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTableModule"],
                        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
                        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_29__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_29__["ReactiveFormsModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutes"], { useHash: true, enableTracing: false })
                    ],
                    providers: [{
                            provide: _angular_common__WEBPACK_IMPORTED_MODULE_35__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_35__["HashLocationStrategy"]
                        },
                        _shared_auth_guard__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_37__["CookieService"]
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
                    entryComponents: [
                        _pages_user_management_delete_dialog_user_management_delete_dialog_component__WEBPACK_IMPORTED_MODULE_30__["UserManagementDeleteDialogComponent"],
                        _pages_security_questions_delete_dialog_security_questions_delete_dialog_component__WEBPACK_IMPORTED_MODULE_33__["SecurityQuestionsDeleteDialogComponent"],
                        _pages_signup_dialog_signup_dialog_component__WEBPACK_IMPORTED_MODULE_40__["SignupDialogComponent"]
                    ]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/app.routing.ts": 
        /*!********************************!*\
          !*** ./src/app/app.routing.ts ***!
          \********************************/
        /*! exports provided: AppRoutes */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function () { return AppRoutes; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
            /* harmony import */ var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/auth.guard */ "./src/app/shared/auth.guard.ts");
            /* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
            /* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
            /* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
            /* harmony import */ var _pages_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/user-management/user-management.component */ "./src/app/pages/user-management/user-management.component.ts");
            /* harmony import */ var _pages_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/user-details/user-details.component */ "./src/app/pages/user-details/user-details.component.ts");
            /* harmony import */ var _pages_security_questions_security_questions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/security-questions/security-questions.component */ "./src/app/pages/security-questions/security-questions.component.ts");
            /* harmony import */ var _pages_question_details_question_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/question-details/question-details.component */ "./src/app/pages/question-details/question-details.component.ts");
            /* harmony import */ var _pages_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/add-question/add-question.component */ "./src/app/pages/add-question/add-question.component.ts");
            /* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
            var AppRoutes = [
                {
                    path: '',
                    component: _shared__WEBPACK_IMPORTED_MODULE_1__["BaseLayoutComponent"],
                    children: [
                        {
                            path: '',
                            component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                            canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
                        },
                        {
                            path: 'user',
                            component: _pages_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_6__["UserManagementComponent"],
                            canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
                        },
                        {
                            path: 'user/edit/:id',
                            component: _pages_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_7__["UserDetailsComponent"],
                            canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
                        },
                        {
                            path: 'questions',
                            component: _pages_security_questions_security_questions_component__WEBPACK_IMPORTED_MODULE_8__["SecurityQuestionsComponent"],
                            canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
                        },
                        {
                            path: 'questions/edit/:id',
                            component: _pages_question_details_question_details_component__WEBPACK_IMPORTED_MODULE_9__["QuestionDetailsComponent"],
                            canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
                        },
                        {
                            path: 'questions/add',
                            component: _pages_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_10__["AddQuestionComponent"],
                            canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
                        },
                        {
                            path: 'signup',
                            component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"]
                        }
                    ]
                },
                {
                    path: 'session',
                    component: _shared__WEBPACK_IMPORTED_MODULE_1__["SessionLayoutComponent"],
                    children: [
                        {
                            path: 'login',
                            component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
                        },
                        {
                            path: '404',
                            component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"]
                        }
                    ]
                },
                {
                    path: '**',
                    redirectTo: 'session/404'
                }
            ];
            /***/ 
        }),
        /***/ "./src/app/pages/add-question/add-question.component.css": 
        /*!***************************************************************!*\
          !*** ./src/app/pages/add-question/add-question.component.css ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/*\r\n============================================\r\n; Title:  Bob's Computer\r\n; Author: Don Cousar\r\n; Date:   28 October 2019\r\n; Description: Bob's Computer\r\n;===========================================\r\n*/\r\nmat-card-actions button {\r\n  width: 48%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLXF1ZXN0aW9uL2FkZC1xdWVzdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0NBT0M7QUFDRDtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1xdWVzdGlvbi9hZGQtcXVlc3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbjsgVGl0bGU6ICBCb2IncyBDb21wdXRlclxyXG47IEF1dGhvcjogRG9uIENvdXNhclxyXG47IERhdGU6ICAgMjggT2N0b2JlciAyMDE5XHJcbjsgRGVzY3JpcHRpb246IEJvYidzIENvbXB1dGVyXHJcbjs9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiovXHJcbm1hdC1jYXJkLWFjdGlvbnMgYnV0dG9uIHtcclxuICB3aWR0aDogNDglO1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/add-question/add-question.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/pages/add-question/add-question.component.ts ***!
          \**************************************************************/
        /*! exports provided: AddQuestionComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuestionComponent", function () { return AddQuestionComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /*
            ============================================
            ; Title:  Bob's Computer
            ; Author: Don Cousar
            ; Date:   28 October 2019
            ; Description: Bob's Computer
            ;===========================================
            */
            var AddQuestionComponent = /** @class */ (function () {
                function AddQuestionComponent(route, http, fb, router) {
                    this.route = route;
                    this.http = http;
                    this.fb = fb;
                    this.router = router;
                    this.QuestionText = '';
                }
                AddQuestionComponent.prototype.saveQuestion = function () {
                    var _this = this;
                    this.http.post('/api/questions/add', {
                        questionText: this.QuestionText
                    }).subscribe(function (res) {
                        _this.router.navigate(['/questions']);
                    });
                };
                AddQuestionComponent.prototype.cancel = function () {
                    this.router.navigate(['/questions']);
                };
                AddQuestionComponent.prototype.ngOnInit = function () {
                    this.form = this.fb.group({
                        questionText: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
                    });
                };
                return AddQuestionComponent;
            }());
            AddQuestionComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            AddQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-add-question',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-question/add-question.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-question.component.css */ "./src/app/pages/add-question/add-question.component.css")).default]
                })
            ], AddQuestionComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/forgot-password/forgot-password.component.css": 
        /*!*********************************************************************!*\
          !*** ./src/app/pages/forgot-password/forgot-password.component.css ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/pages/forgot-password/forgot-password.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/pages/forgot-password/forgot-password.component.ts ***!
          \********************************************************************/
        /*! exports provided: ForgotPasswordComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () { return ForgotPasswordComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /*
            ============================================
            ; Title:  Bob's Computer
            ; Author: Don Cousar
            ; Date:   28 October 2019
            ; Description: Bob's Computer
            ;===========================================
            */
            var ForgotPasswordComponent = /** @class */ (function () {
                function ForgotPasswordComponent() {
                }
                ForgotPasswordComponent.prototype.ngOnInit = function () {
                };
                return ForgotPasswordComponent;
            }());
            ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-forgot-password',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot-password/forgot-password.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/pages/forgot-password/forgot-password.component.css")).default]
                })
            ], ForgotPasswordComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/home/home.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/pages/home/home.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/home/home.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/pages/home/home.component.ts ***!
          \**********************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /*
            ; Title:  starter code
            ; Author: Professor Krasso
            ; Date:   21 October 2019
            ; Description: BobComputer Starter Code
            ;===========================================
            */
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/login/login.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/pages/login/login.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".left {\r\n  float: left;\r\n}\r\n\r\n.right {\r\n  float: right;\r\n}\r\n\r\nmat-card {\r\n  width: 30%;\r\n}\r\n\r\nmat-card-actions {\r\n  width: 95%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFJQTtFQUNFLFVBQVU7QUFDWjs7QUFJQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG5cclxuXHJcbm1hdC1jYXJkIHtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG5cclxuXHJcbm1hdC1jYXJkLWFjdGlvbnMge1xyXG4gIHdpZHRoOiA5NSU7XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/pages/login/login.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/pages/login/login.component.ts ***!
          \************************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /*
            ; Title:  login.component.ts
            ; Author: Professor Krasso
            ; Date:   29 October 2019
            ; Modified By: Jordan Hennessy & Don CousarS
            ; Description: BobComputer Starter Code
            ;===========================================
            */
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(fb, router, cookieService, http) {
                    this.fb = fb;
                    this.router = router;
                    this.cookieService = cookieService;
                    this.http = http;
                }
                LoginComponent.prototype.ngOnInit = function () {
                    this.form = this.fb.group({
                        username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                        password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
                    });
                };
                LoginComponent.prototype.login = function () {
                    var _this = this;
                    var username = this.form.controls['username'].value;
                    var password = this.form.controls['password'].value; // Don
                    //Send POST request to authenticate - Don
                    this.http.post('/api/usersignin', {
                        'username': username,
                        'password': password
                    }).subscribe(function (res) {
                        if (res) {
                            _this.cookieService.set('isAuthenticated', 'true', 1);
                            _this.cookieService.set('username', username, 1);
                            _this.router.navigate(['/']);
                            console.log(res);
                        }
                        else {
                            _this.errorMessage = "The user credentials you entered were invalid!";
                        }
                    });
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/not-found/not-found.component.css": 
        /*!*********************************************************!*\
          !*** ./src/app/pages/not-found/not-found.component.css ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/pages/not-found/not-found.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/pages/not-found/not-found.component.ts ***!
          \********************************************************/
        /*! exports provided: NotFoundComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () { return NotFoundComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /*
            ============================================
            ; Title:  starter code
            ; Author: Professor Krasso
            ; Date:   21 October 2019
            ; Description: BobComputer Starter Code
            ;===========================================
            */
            var NotFoundComponent = /** @class */ (function () {
                function NotFoundComponent() {
                }
                NotFoundComponent.prototype.ngOnInit = function () {
                };
                return NotFoundComponent;
            }());
            NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-not-found',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/not-found/not-found.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.css */ "./src/app/pages/not-found/not-found.component.css")).default]
                })
            ], NotFoundComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/question-details/question-details.component.css": 
        /*!***********************************************************************!*\
          !*** ./src/app/pages/question-details/question-details.component.css ***!
          \***********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/*\r\n============================================\r\n; Title:  Bob's Computer\r\n; Author: Don Cousar\r\n; Date:   28 October 2019\r\n; Description: Bob's Computer\r\n;===========================================\r\n*/\r\n\r\nmat-card-actions button {\r\n  width: 48%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcXVlc3Rpb24tZGV0YWlscy9xdWVzdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Q0FPQzs7QUFFRDtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1ZXN0aW9uLWRldGFpbHMvcXVlc3Rpb24tZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuOyBUaXRsZTogIEJvYidzIENvbXB1dGVyXHJcbjsgQXV0aG9yOiBEb24gQ291c2FyXHJcbjsgRGF0ZTogICAyOCBPY3RvYmVyIDIwMTlcclxuOyBEZXNjcmlwdGlvbjogQm9iJ3MgQ29tcHV0ZXJcclxuOz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKi9cclxuXHJcbm1hdC1jYXJkLWFjdGlvbnMgYnV0dG9uIHtcclxuICB3aWR0aDogNDglO1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/question-details/question-details.component.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/pages/question-details/question-details.component.ts ***!
          \**********************************************************************/
        /*! exports provided: QuestionDetailsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionDetailsComponent", function () { return QuestionDetailsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /*
            ============================================
            ; Title:  Bob's Computer
            ; Author: Don Cousar
            ; Date:   28 October 2019
            ; Description: Bob's Computer
            ;===========================================
            */
            var QuestionDetailsComponent = /** @class */ (function () {
                function QuestionDetailsComponent(route, http, fb, router) {
                    var _this = this;
                    this.route = route;
                    this.http = http;
                    this.fb = fb;
                    this.router = router;
                    this.QuestionText = '';
                    this.questionId = this.route.snapshot.paramMap.get('id');
                    /**
                    * Call Dons's GET API to retreive current values to populate HTML
                    * Attribution: Used Jordan's User Management PUT GET as a guide
                    */
                    this.http.get('/api/questions/' + this.questionId).subscribe(function (res) {
                        _this.question = res;
                        _this.QuestionText = res['questionText'];
                        console.log('API EDIT GET USERS');
                        console.table(res);
                    }, function (err) {
                        console.log(err);
                    }, function () {
                        //Do nothing after the get
                    });
                }
                /**
               * Call Don's Update API to write new values
               * Attribution: Used Jordan's User Management PUT API as a guide
               */
                QuestionDetailsComponent.prototype.saveQuestion = function () {
                    var _this = this;
                    this.http.put('/api/questions/' + this.questionId, {
                        questionText: this.QuestionText
                    }).subscribe(function (res) {
                        _this.router.navigate(['/questions']);
                    });
                };
                QuestionDetailsComponent.prototype.cancel = function () {
                    this.router.navigate(['/questions']);
                };
                QuestionDetailsComponent.prototype.ngOnInit = function () {
                    this.form = this.fb.group({
                        questionText: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
                    });
                };
                return QuestionDetailsComponent;
            }());
            QuestionDetailsComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            QuestionDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-question-details',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./question-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/question-details/question-details.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./question-details.component.css */ "./src/app/pages/question-details/question-details.component.css")).default]
                })
            ], QuestionDetailsComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/security-questions-delete-dialog/security-questions-delete-dialog.component.css": 
        /*!*******************************************************************************************************!*\
          !*** ./src/app/pages/security-questions-delete-dialog/security-questions-delete-dialog.component.css ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/*\r\n============================================\r\n; Title:  Bob's Computer\r\n; Author: Don Cousar\r\n; Date:   28 October 2019\r\n; Description: Bob's Computer\r\n;===========================================\r\n*/\r\np { color: red }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VjdXJpdHktcXVlc3Rpb25zLWRlbGV0ZS1kaWFsb2cvc2VjdXJpdHktcXVlc3Rpb25zLWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztDQU9DO0FBQ0QsSUFBSSxXQUFXIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VjdXJpdHktcXVlc3Rpb25zLWRlbGV0ZS1kaWFsb2cvc2VjdXJpdHktcXVlc3Rpb25zLWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbjsgVGl0bGU6ICBCb2IncyBDb21wdXRlclxyXG47IEF1dGhvcjogRG9uIENvdXNhclxyXG47IERhdGU6ICAgMjggT2N0b2JlciAyMDE5XHJcbjsgRGVzY3JpcHRpb246IEJvYidzIENvbXB1dGVyXHJcbjs9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiovXHJcbnAgeyBjb2xvcjogcmVkIH0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/security-questions-delete-dialog/security-questions-delete-dialog.component.ts": 
        /*!******************************************************************************************************!*\
          !*** ./src/app/pages/security-questions-delete-dialog/security-questions-delete-dialog.component.ts ***!
          \******************************************************************************************************/
        /*! exports provided: SecurityQuestionsDeleteDialogComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityQuestionsDeleteDialogComponent", function () { return SecurityQuestionsDeleteDialogComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /*
            ============================================
            ; Title:  Bob's Computer
            ; Author: Don Cousar
            ; Date:   23 October 2019
            ; Description: Bob's Computer
            ;===========================================
            */
            var SecurityQuestionsDeleteDialogComponent = /** @class */ (function () {
                function SecurityQuestionsDeleteDialogComponent(dialogRef, data, router) {
                    this.dialogRef = dialogRef;
                    this.router = router;
                    //Define variables to call from HTML
                    this.myQuestionId = data.questionId;
                    this.myQuestion = data.question;
                    console.log('Dialog Question: ' + this.myQuestionId);
                    /**
                     * Prove that data made it over from Security Question Component
                     */
                    console.log('Delete Dialog: ');
                    console.table(data);
                }
                SecurityQuestionsDeleteDialogComponent.prototype.ngOnInit = function () {
                };
                return SecurityQuestionsDeleteDialogComponent;
            }());
            SecurityQuestionsDeleteDialogComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            SecurityQuestionsDeleteDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-security-questions-delete-dialog',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./security-questions-delete-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/security-questions-delete-dialog/security-questions-delete-dialog.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./security-questions-delete-dialog.component.css */ "./src/app/pages/security-questions-delete-dialog/security-questions-delete-dialog.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], SecurityQuestionsDeleteDialogComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/security-questions/security-questions.component.css": 
        /*!***************************************************************************!*\
          !*** ./src/app/pages/security-questions/security-questions.component.css ***!
          \***************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/*\r\n============================================\r\n; Title:  Bob's Computer\r\n; Author: Don Cousar\r\n; Date:   28 October 2019\r\n; Description: Bob's Computer\r\n;===========================================\r\n*/\r\ntable {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VjdXJpdHktcXVlc3Rpb25zL3NlY3VyaXR5LXF1ZXN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0NBT0M7QUFDRDtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlY3VyaXR5LXF1ZXN0aW9ucy9zZWN1cml0eS1xdWVzdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbjsgVGl0bGU6ICBCb2IncyBDb21wdXRlclxyXG47IEF1dGhvcjogRG9uIENvdXNhclxyXG47IERhdGU6ICAgMjggT2N0b2JlciAyMDE5XHJcbjsgRGVzY3JpcHRpb246IEJvYidzIENvbXB1dGVyXHJcbjs9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiovXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/pages/security-questions/security-questions.component.ts": 
        /*!**************************************************************************!*\
          !*** ./src/app/pages/security-questions/security-questions.component.ts ***!
          \**************************************************************************/
        /*! exports provided: SecurityQuestionsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityQuestionsComponent", function () { return SecurityQuestionsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _pages_security_questions_delete_dialog_security_questions_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/security-questions-delete-dialog/security-questions-delete-dialog.component */ "./src/app/pages/security-questions-delete-dialog/security-questions-delete-dialog.component.ts");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /*
            ============================================
            ; Title:  Bob's Computer
            ; Author: Don Cousar
            ; Date:   28 October 2019
            ; Description: Bob's Computer
            ;===========================================
            */
            var SecurityQuestionsComponent = /** @class */ (function () {
                function SecurityQuestionsComponent(http, dialog, router) {
                    var _this = this;
                    this.http = http;
                    this.dialog = dialog;
                    this.router = router;
                    this.displayedColumns = ['questionText', 'edit', 'delete'];
                    //Call Jordan's API to get all users
                    this.http.get('/api/questions').subscribe(function (res) {
                        _this.questions = res;
                        //Prove that this.users is populated
                        console.log('API GET Questions: ');
                        console.table(_this.questions);
                    }, function (err) {
                        console.log('API GET QUESTIONS ERROR: ' + err);
                    }, function () {
                        //What to do upon success
                        //nothing for now
                    });
                }
                /**
               * Delete User Function
               */
                SecurityQuestionsComponent.prototype.delete = function (questionId, question) {
                    var _this = this;
                    var dialogRef = this.dialog.open(_pages_security_questions_delete_dialog_security_questions_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__["SecurityQuestionsDeleteDialogComponent"], {
                        data: {
                            questionId: questionId,
                            question: question
                        },
                        disableClose: true,
                        width: '800px'
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        /**
                         * BEGIN Working Delete Code
                         */
                        _this.http.delete('api/questions/' + questionId).subscribe(function (res) {
                            console.log('Deleted User..Redirecting to User List');
                            _this.questions = _this.questions.filter(function (q) { return q._id !== questionId; });
                        });
                    });
                }; //close delete function
                SecurityQuestionsComponent.prototype.ngOnInit = function () {
                };
                return SecurityQuestionsComponent;
            }());
            SecurityQuestionsComponent.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
            ]; };
            SecurityQuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-security-questions',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./security-questions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/security-questions/security-questions.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./security-questions.component.css */ "./src/app/pages/security-questions/security-questions.component.css")).default]
                })
            ], SecurityQuestionsComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/signup-dialog/signup-dialog.component.css": 
        /*!*****************************************************************!*\
          !*** ./src/app/pages/signup-dialog/signup-dialog.component.css ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC1kaWFsb2cvc2lnbnVwLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/signup-dialog/signup-dialog.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/pages/signup-dialog/signup-dialog.component.ts ***!
          \****************************************************************/
        /*! exports provided: SignupDialogComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupDialogComponent", function () { return SignupDialogComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /*
            ============================================
            ; Title:  Bob's Computer
            ; Author: Don Cousar
            ; Date:   23 October 2019
            ; Description: Bob's Computer
            ;===========================================
            */
            var SignupDialogComponent = /** @class */ (function () {
                function SignupDialogComponent(dialogRef, data, router) {
                    this.dialogRef = dialogRef;
                    this.router = router;
                    this.message = data.message;
                }
                SignupDialogComponent.prototype.ngOnInit = function () {
                };
                return SignupDialogComponent;
            }());
            SignupDialogComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            SignupDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-signup-dialog',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup-dialog/signup-dialog.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup-dialog.component.css */ "./src/app/pages/signup-dialog/signup-dialog.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], SignupDialogComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/signup/signup.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/pages/signup/signup.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/*\r\n============================================\r\n; Title:  Bob's Computer Signup\r\n; Authors: Don Cousar / Alan Edwards\r\n; Date:   30 October 2019\r\n; Description: Bob's Computer\r\n;===========================================\r\n*/\r\nmat-card-actions button {\r\n    width: 48%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0NBT0M7QUFDRDtJQUNJLFVBQVU7RUFDWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbjsgVGl0bGU6ICBCb2IncyBDb21wdXRlciBTaWdudXBcclxuOyBBdXRob3JzOiBEb24gQ291c2FyIC8gQWxhbiBFZHdhcmRzXHJcbjsgRGF0ZTogICAzMCBPY3RvYmVyIDIwMTlcclxuOyBEZXNjcmlwdGlvbjogQm9iJ3MgQ29tcHV0ZXJcclxuOz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKi9cclxubWF0LWNhcmQtYWN0aW9ucyBidXR0b24ge1xyXG4gICAgd2lkdGg6IDQ4JTtcclxuICB9Il19 */");
            /***/ 
        }),
        /***/ "./src/app/pages/signup/signup.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/pages/signup/signup.component.ts ***!
          \**************************************************/
        /*! exports provided: SignupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function () { return SignupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _signup_dialog_signup_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../signup-dialog/signup-dialog.component */ "./src/app/pages/signup-dialog/signup-dialog.component.ts");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /*
            ============================================
            ; Title:  Bob's Computer Signup
            ; Authors: Don Cousar / Alan Edwards
            ; Date:   30 October 2019
            ; Description: Bob's Computer
            ; Attribution: Form Control Logic inspired by Professor Krasso @Bellevue University
            ;===========================================
            */
            var SignupComponent = /** @class */ (function () {
                function SignupComponent(route, http, fb, router, dialog) {
                    var _this = this;
                    this.route = route;
                    this.http = http;
                    this.fb = fb;
                    this.router = router;
                    this.dialog = dialog;
                    this.FirstName = '';
                    this.LastName = '';
                    this.Address = '';
                    this.PhoneNumber = '';
                    this.Email = '';
                    this.Username = '';
                    this.Password = '';
                    this.ConfirmPassword = '';
                    this.securityQuestions = new Array();
                    //Call Jordan's API to get all users
                    this.http.get('/api/questions').subscribe(function (res) {
                        _this.questions = res;
                        //Prove that this.users is populated
                        console.log('API GET Questions: ');
                        console.table(_this.questions);
                    }, function (err) {
                        console.log('API GET QUESTIONS ERROR: ' + err);
                    }, function () {
                        //What to do upon success
                        //nothing for now
                    });
                }
                /**
                 * Register user with form input
                 */
                SignupComponent.prototype.register = function () {
                    var _this = this;
                    console.log(this.FirstName);
                    console.log(this.secQuestion3);
                    //STEP 1 Validate all Fields    
                    this.validateFields();
                    //STEP 2: Build array of security questions and answers
                    this.pushQuestionArr(this.secQuestion1, this.secAnswer1);
                    this.pushQuestionArr(this.secQuestion2, this.secAnswer2);
                    this.pushQuestionArr(this.secQuestion3, this.secAnswer3);
                    //Write array of security questions to console
                    console.log(this.securityQuestions);
                    //Assemble array for security questions
                    //this.checkUser(this.Username);
                    this.http.post('/api/users/register', {
                        username: this.Username,
                        password: this.Password,
                        firstName: this.FirstName,
                        lastName: this.LastName,
                        phoneNumber: this.PhoneNumber,
                        address: this.Address,
                        email: this.Email,
                        selectedSecurityQuestions: this.securityQuestions
                    }).subscribe(function (res) {
                        _this.passMessage("User added successfully");
                        _this.router.navigate(['/']);
                    });
                }; //END REGISTER FUNCTION
                /**
                 * Get question text for a particular ID
                 * @param id - ID from security questions collection
                 */
                SignupComponent.prototype.pushQuestionArr = function (id, answer) {
                    var _this = this;
                    var quest;
                    //Call Jordan's API to get question by id
                    this.http.get('/api/questions/' + id).subscribe(function (res) {
                        quest = res['questionText'];
                        _this.securityQuestions.push({ questionId: id, questionText: quest, answerText: answer });
                        //debug verification
                        console.log('getQuestion(): API GET Question: ');
                        console.table(quest);
                    }, function (err) {
                        console.log('getQuestion(): API GET QUESTIONS ERROR: ' + err);
                    }, function () {
                        //What to do upon success
                    });
                };
                /**
                 * Send message to dialog modal and open dialog
                 * @param message Message text to send to dialog
                 */
                SignupComponent.prototype.passMessage = function (message) {
                    var dialogRef = this.dialog.open(_signup_dialog_signup_dialog_component__WEBPACK_IMPORTED_MODULE_5__["SignupDialogComponent"], {
                        data: {
                            message: message
                        },
                        disableClose: true,
                        width: '800px'
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                    });
                };
                /**
                 * Validate all Fields
                 */
                SignupComponent.prototype.validateFields = function () {
                    if (!this.FirstName) {
                        this.passMessage('Error: First Name is a required field');
                    }
                    if (!this.LastName) {
                        this.passMessage('Error: Last Name is a required field');
                    }
                    if (!this.Address) {
                        this.passMessage('Error: Address is a required field');
                    }
                    if (!this.PhoneNumber) {
                        this.passMessage('Error: Phone Number is a required field');
                    }
                    if (!this.Email) {
                        this.passMessage('Error: Email is a required field');
                    }
                    if (!this.Username) {
                        this.passMessage('Error: Username is a required field');
                    }
                    if (!this.Password) {
                        this.passMessage('Error: Password is a required field');
                    }
                    if (!this.ConfirmPassword) {
                        this.passMessage('Error: Confirm Password is a required field');
                    }
                    if (!this.secQuestion1) {
                        this.passMessage('Error: Security Question 1 is a required field');
                    }
                    if (!this.secQuestion2) {
                        this.passMessage('Error: Security Question 2 is a required field');
                    }
                    if (!this.secQuestion3) {
                        this.passMessage('Error: Security Question 3 is a required field');
                    }
                    if (!this.secAnswer1) {
                        this.passMessage('Error: Security Answer 1 is a required field');
                    }
                    if (!this.secAnswer2) {
                        this.passMessage('Error: Security Answer 2 is a required field');
                    }
                    if (!this.secAnswer3) {
                        this.passMessage('Error: Security Answer 3 is a required field');
                    }
                    if (this.Password != this.ConfirmPassword) {
                        this.passMessage('Error: Passwords Do no match');
                    }
                    return;
                };
                SignupComponent.prototype.checkUser = function (uname) {
                    var _this = this;
                    this.http.get('/api/usersignin/' + uname).subscribe(function (res) {
                        if (!res) {
                            console.log('user not found');
                        }
                        else {
                            console.log('user found');
                        }
                    }, function (err) {
                        console.log('getQuestion(): API GET QUESTIONS ERROR: ' + err);
                        _this.passMessage('Error: Username already taken');
                        return;
                    }, function () {
                        //What to do upon success
                    });
                };
                /**
                 * cancel out of signup form and go back to the home page
                 */
                SignupComponent.prototype.cancel = function () {
                    this.router.navigate(['/']);
                };
                SignupComponent.prototype.ngOnInit = function () {
                    this.form = this.fb.group({
                        firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                        lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                        address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                        phoneNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                        email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                        username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                        password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                        confirmpassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                        secAnswer1: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                        secAnswer2: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                        secAnswer3: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
                    });
                };
                return SignupComponent;
            }());
            SignupComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
            ]; };
            SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-signup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/pages/signup/signup.component.css")).default]
                })
                /*
                export interface questionArr {
                  questionId: string;
                  questionText: string;
                  answerText: string;
                }
                
                const myQuestions: questionArr[] = [
                  {questionId: "dcousar", questionText: 'Donald', answerText: 'Cousar'},
                  {questionId: "dcousar", questionText: 'Donald', answerText: 'Cousar'},
                  {questionId: "dcousar", questionText: 'Donald', answerText: 'Cousar'}
                ];
                */
            ], SignupComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/user-details/user-details.component.css": 
        /*!***************************************************************!*\
          !*** ./src/app/pages/user-details/user-details.component.css ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/*\r\n============================================\r\n; Title:  Bob's Computer\r\n; Author: Jordan Hennessy\r\n; Date:   25 October 2019\r\n; Description: Bob's Computer\r\n;===========================================\r\n*/\r\n\r\nmat-card-actions button {\r\n  width: 48%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0NBT0M7O0FBRUQ7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG47IFRpdGxlOiAgQm9iJ3MgQ29tcHV0ZXJcclxuOyBBdXRob3I6IEpvcmRhbiBIZW5uZXNzeVxyXG47IERhdGU6ICAgMjUgT2N0b2JlciAyMDE5XHJcbjsgRGVzY3JpcHRpb246IEJvYidzIENvbXB1dGVyXHJcbjs9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiovXHJcblxyXG5tYXQtY2FyZC1hY3Rpb25zIGJ1dHRvbiB7XHJcbiAgd2lkdGg6IDQ4JTtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/user-details/user-details.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/pages/user-details/user-details.component.ts ***!
          \**************************************************************/
        /*! exports provided: UserDetailsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function () { return UserDetailsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /*
            ============================================
            ; Title:  Bob's Computer
            ; Author: Don Cousar
            ; Date:   25 October 2019
            ; Description: Bob's Computer
            ; Attribution: Form Control Logic inspired by Professor Krasso @Bellevue University
            ;===========================================
            */
            var UserDetailsComponent = /** @class */ (function () {
                function UserDetailsComponent(route, http, fb, router) {
                    var _this = this;
                    this.route = route;
                    this.http = http;
                    this.fb = fb;
                    this.router = router;
                    this.PhoneNumber = '';
                    this.Address = '';
                    this.Email = '';
                    this.userId = this.route.snapshot.paramMap.get('id');
                    /**
                    * Call Jordan's GET API to retreive current values to populate HTML
                    */
                    this.http.get('/api/users/' + this.userId).subscribe(function (res) {
                        _this.user = res;
                        _this.PhoneNumber = res['phoneNumber'];
                        _this.Address = res['address'];
                        _this.Email = res['email'];
                        console.log('API EDIT GET USERS');
                        console.table(res);
                    }, function (err) {
                        console.log(err);
                    }, function () {
                        //Do nothing after the get
                    });
                }
                /**
                 * Call Jordan's Update API to write new values
                 */
                UserDetailsComponent.prototype.saveUser = function () {
                    var _this = this;
                    this.http.put('/api/users/' + this.userId, {
                        phoneNumber: this.PhoneNumber,
                        address: this.Address,
                        email: this.Email,
                    }).subscribe(function (res) {
                        _this.router.navigate(['/user']);
                    });
                };
                UserDetailsComponent.prototype.cancel = function () {
                    this.router.navigate(['/user']);
                };
                UserDetailsComponent.prototype.ngOnInit = function () {
                    this.form = this.fb.group({
                        phoneNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                        address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                        email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
                    });
                };
                return UserDetailsComponent;
            }());
            UserDetailsComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            UserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user-details',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-details/user-details.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-details.component.css */ "./src/app/pages/user-details/user-details.component.css")).default]
                })
            ], UserDetailsComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/user-management-delete-dialog/user-management-delete-dialog.component.css": 
        /*!*************************************************************************************************!*\
          !*** ./src/app/pages/user-management-delete-dialog/user-management-delete-dialog.component.css ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/*\r\n============================================\r\n; Title:  Bob's Computer\r\n; Author: Don Cousar\r\n; Date:   23 October 2019\r\n; Description: Bob's Computer\r\n;===========================================\r\n*/\r\np { color: red }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1tYW5hZ2VtZW50LWRlbGV0ZS1kaWFsb2cvdXNlci1tYW5hZ2VtZW50LWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztDQU9DO0FBQ0QsSUFBSSxXQUFXIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlci1tYW5hZ2VtZW50LWRlbGV0ZS1kaWFsb2cvdXNlci1tYW5hZ2VtZW50LWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbjsgVGl0bGU6ICBCb2IncyBDb21wdXRlclxyXG47IEF1dGhvcjogRG9uIENvdXNhclxyXG47IERhdGU6ICAgMjMgT2N0b2JlciAyMDE5XHJcbjsgRGVzY3JpcHRpb246IEJvYidzIENvbXB1dGVyXHJcbjs9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiovXHJcbnAgeyBjb2xvcjogcmVkIH0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/user-management-delete-dialog/user-management-delete-dialog.component.ts": 
        /*!************************************************************************************************!*\
          !*** ./src/app/pages/user-management-delete-dialog/user-management-delete-dialog.component.ts ***!
          \************************************************************************************************/
        /*! exports provided: UserManagementDeleteDialogComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementDeleteDialogComponent", function () { return UserManagementDeleteDialogComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /*
            ============================================
            ; Title:  Bob's Computer
            ; Author: Don Cousar
            ; Date:   23 October 2019
            ; Description: Bob's Computer
            ;===========================================
            */
            var UserManagementDeleteDialogComponent = /** @class */ (function () {
                function UserManagementDeleteDialogComponent(dialogRef, data, router) {
                    this.dialogRef = dialogRef;
                    this.router = router;
                    //Define variables to call from HTML
                    this.myUserId = data.userId;
                    this.myUserName = data.username;
                    console.log('Dialog User: ' + this.myUserId);
                    /**
                     * Prove that data made it over from User Management Component
                     */
                    console.log('Delete Dialog: ');
                    console.table(data);
                }
                UserManagementDeleteDialogComponent.prototype.ngOnInit = function () {
                };
                return UserManagementDeleteDialogComponent;
            }());
            UserManagementDeleteDialogComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            UserManagementDeleteDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user-management-delete-dialog',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-management-delete-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-management-delete-dialog/user-management-delete-dialog.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-management-delete-dialog.component.css */ "./src/app/pages/user-management-delete-dialog/user-management-delete-dialog.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], UserManagementDeleteDialogComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/user-management/user-management.component.css": 
        /*!*********************************************************************!*\
          !*** ./src/app/pages/user-management/user-management.component.css ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/*\r\n============================================\r\n; Title:  Bob's Computer\r\n; Author: Don Cousar\r\n; Date:   23 October 2019\r\n; Description: Bob's Computer\r\n;===========================================\r\n*/\r\ntable {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0NBT0M7QUFDRDtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbjsgVGl0bGU6ICBCb2IncyBDb21wdXRlclxyXG47IEF1dGhvcjogRG9uIENvdXNhclxyXG47IERhdGU6ICAgMjMgT2N0b2JlciAyMDE5XHJcbjsgRGVzY3JpcHRpb246IEJvYidzIENvbXB1dGVyXHJcbjs9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiovXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/pages/user-management/user-management.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/pages/user-management/user-management.component.ts ***!
          \********************************************************************/
        /*! exports provided: UserManagementComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function () { return UserManagementComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _pages_user_management_delete_dialog_user_management_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/user-management-delete-dialog/user-management-delete-dialog.component */ "./src/app/pages/user-management-delete-dialog/user-management-delete-dialog.component.ts");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /*
            ============================================
            ; Title:  Bob's Computer
            ; Author: Don Cousar
            ; Date:   23 October 2019
            ; Description: Bob's Computer
            ;===========================================
            */
            var USERS = [
                { userName: "dcousar", firstName: 'Donald', lastName: 'Cousar', phoneNumber: '6015551010', address: '100 Main St', email: "dcousar@yahoo.com", userId: 1 },
                { userName: "aedwards", firstName: 'Alan', lastName: 'Edwards', phoneNumber: '6015551011', address: '102 Main St', email: "aedwards@yahoo.com", userId: 2 },
                { userName: "jhennessy", firstName: 'Jordan', lastName: 'Hennessy', phoneNumber: '6015551012', address: '101 Main St', email: "jhennessy@yahoo.com", userId: 3 }
            ];
            /**
             * END STATIC TEST DATA
             */
            var UserManagementComponent = /** @class */ (function () {
                function UserManagementComponent(http, dialog, router) {
                    var _this = this;
                    // console.table(USERS);  //Displays Static array of users defined above
                    this.http = http;
                    this.dialog = dialog;
                    this.router = router;
                    this.displayedColumns = ['username', 'firstName', 'lastName', 'phoneNumber', 'address', 'email', 'edit', 'delete'];
                    //Call Jordan's API to get all users
                    this.http.get('/api/users').subscribe(function (res) {
                        _this.users = res;
                        //Prove that this.users is populated
                        console.log('API GET USERS: ');
                        console.table(_this.users);
                    }, function (err) {
                        console.log('API GET USERS ERROR: ' + err);
                    }, function () {
                        //What to do upon success
                        //nothing for now
                    });
                }
                /**
                 * Delete User Function
                 */
                UserManagementComponent.prototype.delete = function (userId, username) {
                    var _this = this;
                    var dialogRef = this.dialog.open(_pages_user_management_delete_dialog_user_management_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__["UserManagementDeleteDialogComponent"], {
                        data: {
                            userId: userId,
                            username: username
                        },
                        disableClose: true,
                        width: '800px'
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        //location.reload();
                        //this.users = this.users.filter(u => u._id !== userId);
                        /**
                         * BEGIN Working Delete Code
                         */
                        _this.http.delete('api/users/' + userId).subscribe(function (res) {
                            console.log('Deleted User..Redirecting to User List');
                            _this.users = _this.users.filter(function (u) { return u._id !== userId; });
                            //this.router.navigate(['/user']);
                        });
                        /**
                         * END Working Delete Code
                         */
                        /*
                        if (result === 'confirm') {
                          console.log('Deleting');
                          this.http.delete('api/users/ + userId').subscribe(res => {
                            console.log('Deleted User');
                            this.users = this.users.filter(u => u._id !== userId);
                          })
                        }
                        */
                    });
                }; //close delete function
                UserManagementComponent.prototype.ngOnInit = function () {
                };
                return UserManagementComponent;
            }()); //close export class
            UserManagementComponent.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
            ]; };
            UserManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user-management',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-management/user-management.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-management.component.css */ "./src/app/pages/user-management/user-management.component.css")).default]
                })
            ], UserManagementComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/auth.guard.ts": 
        /*!**************************************!*\
          !*** ./src/app/shared/auth.guard.ts ***!
          \**************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
            /*
            ============================================
            ; Title:  auth.guard.ts
            ; Author: Professor Krasso
            ; Date:   29 October 2019
            ; Modified By: Jordan Hennessy
            ; Description: Bob's Computer Repair Shop
            ;===========================================
            */
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(router, cookieService) {
                    this.router = router;
                    this.cookieService = cookieService;
                }
                AuthGuard.prototype.canActivate = function (route, state) {
                    var isAuthenticated = this.cookieService.get('isAuthenticated');
                    if (isAuthenticated) {
                        return true;
                    }
                    else {
                        this.router.navigate(['/session/login']);
                        return false;
                    }
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/shared/base-layout/base-layout.component.css": 
        /*!**************************************************************!*\
          !*** ./src/app/shared/base-layout/base-layout.component.css ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/*\r\n============================================\r\n; Title:  Bob's Computer\r\n; Author: Jordan Hennessy\r\n; Date:   23 October 2019\r\n; Description: BobComputer Starter Code\r\n;===========================================\r\n*/\r\n\r\n#logo {\r\n  height: 50px;\r\n  width: auto;\r\n  vertical-align: middle;\r\n}\r\n\r\na {\r\n  color: #fff;\r\n  text-transform: uppercase;\r\n  text-decoration: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Jhc2UtbGF5b3V0L2Jhc2UtbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Q0FPQzs7QUFFRDtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvYmFzZS1sYXlvdXQvYmFzZS1sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbjsgVGl0bGU6ICBCb2IncyBDb21wdXRlclxyXG47IEF1dGhvcjogSm9yZGFuIEhlbm5lc3N5XHJcbjsgRGF0ZTogICAyMyBPY3RvYmVyIDIwMTlcclxuOyBEZXNjcmlwdGlvbjogQm9iQ29tcHV0ZXIgU3RhcnRlciBDb2RlXHJcbjs9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiovXHJcblxyXG4jbG9nbyB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/shared/base-layout/base-layout.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/shared/base-layout/base-layout.component.ts ***!
          \*************************************************************/
        /*! exports provided: BaseLayoutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLayoutComponent", function () { return BaseLayoutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
            /*
            ============================================
            ; Title:  Bob's Computer
            ; Author: Don Cousar
            ; Date:   23 October 2019
            ; Description: BobComputer Starter Code
            ;===========================================
            */
            var BaseLayoutComponent = /** @class */ (function () {
                function BaseLayoutComponent(router, cookieService) {
                    this.router = router;
                    this.cookieService = cookieService;
                }
                BaseLayoutComponent.prototype.ngOnInit = function () {
                };
                BaseLayoutComponent.prototype.logout = function () {
                    this.cookieService.deleteAll();
                    this.router.navigate(['/session/login']);
                };
                return BaseLayoutComponent;
            }());
            BaseLayoutComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
            ]; };
            BaseLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-base-layout',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./base-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/base-layout/base-layout.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./base-layout.component.css */ "./src/app/shared/base-layout/base-layout.component.css")).default]
                })
            ], BaseLayoutComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/index.ts": 
        /*!*********************************!*\
          !*** ./src/app/shared/index.ts ***!
          \*********************************/
        /*! exports provided: BaseLayoutComponent, AuthGuard, SessionLayoutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-layout/base-layout.component */ "./src/app/shared/base-layout/base-layout.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLayoutComponent", function () { return _base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_1__["BaseLayoutComponent"]; });
            /* harmony import */ var _session_layout_session_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session-layout/session-layout.component */ "./src/app/shared/session-layout/session-layout.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionLayoutComponent", function () { return _session_layout_session_layout_component__WEBPACK_IMPORTED_MODULE_2__["SessionLayoutComponent"]; });
            /* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.guard */ "./src/app/shared/auth.guard.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return _auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]; });
            /*
            ; Title:  index.ts
            ; Author: Professor Krasso
            ; Date:   29 October 2019
            ; Modified By: Jordan Hennessy
            ; Description: BobComputer Starter Code
            ;===========================================
            */
            /***/ 
        }),
        /***/ "./src/app/shared/session-layout/session-layout.component.css": 
        /*!********************************************************************!*\
          !*** ./src/app/shared/session-layout/session-layout.component.css ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zZXNzaW9uLWxheW91dC9zZXNzaW9uLWxheW91dC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/shared/session-layout/session-layout.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/shared/session-layout/session-layout.component.ts ***!
          \*******************************************************************/
        /*! exports provided: SessionLayoutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionLayoutComponent", function () { return SessionLayoutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /*
            ============================================
            ; Title:  starter code
            ; Author: Professor Krasso
            ; Date:   21 October 2019
            ; Description: BobComputer Starter Code
            ;===========================================
            */
            var SessionLayoutComponent = /** @class */ (function () {
                function SessionLayoutComponent() {
                }
                SessionLayoutComponent.prototype.ngOnInit = function () {
                };
                return SessionLayoutComponent;
            }());
            SessionLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-session-layout',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./session-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/session-layout/session-layout.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./session-layout.component.css */ "./src/app/shared/session-layout/session-layout.component.css")).default]
                })
            ], SessionLayoutComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /*
            ; Title:  starter code
            ; Author: Professor Krasso
            ; Date:   21 October 2019
            ; Description: BobComputer Starter Code
            ;===========================================
            */
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            /*
            ============================================
            ; Title:  starter code
            ; Author: Professor Krasso
            ; Date:   21 October 2019
            ; Description: BobComputer Starter Code
            ;===========================================
            */
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\drcousar\bu-webdev\BobsComputer\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map