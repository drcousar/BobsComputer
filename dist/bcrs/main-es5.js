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
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--\n/*\n============================================\n; Title:  Bob's Computer\n; Author: Don Cousar\n; Date:   25 October 2019\n; Description: Bob's Computer\n;===========================================\n*/\n-->\n\n<div fxLayout=\"column\">\n    <mat-card>\n        <img src=\"../../../assets/about_img.jpg\" alt=\"About Bob's Computer Repair Service\" class=\"center\" />\n        <br /><br /><br />\n            <mat-card-title>About Us</mat-card-title> \n            <br /><br /><br />\n                <mat-card-content>\n                        <mat-card-subtitle style=\"text-align: left;\">Who is Bob? </mat-card-subtitle>\n                    <p>\n                        Bob’s Computer Repair Shop provides computer services for your business or home.  \n                        20 years ago, Bob started this company on the southwest side of Omaha, Nebraska.  \n                        Bob holds a bachelor’s degree from Bellevue University.  Bob lives with his wife and family in Omaha.  \n                    </p>\n                        <br />\n                        <mat-card-subtitle style=\"text-align: left;\">What we do at Bob's Computer Repair Service</mat-card-subtitle>\n                    <p>\n                        If you are looking for computer repair services for your desktop or laptop in the greater Omaha area, don’t look any further.  \n                        We are local, fast and fair.  Our technicians are trained to fix any computer brand.  \n                        If you have an Apple or Windows device, just bring it to the store or fill out our services form. \n                    </p>\n                        <br />\n                        <mat-card-subtitle style=\"text-align: left;\">Why Choose Bob's Computer Repair Service?</mat-card-subtitle>\n                    <p>\n                        We employ certified technicians and stand behind our work 100%.  \n                        We are members of the Chamber of Omaha and work hard to establish and maintain a great working relationship for our business with the greater Omaha business community.  \n                        Many of you already do business with us while some never heard of us.  \n                        We feel that this is a great way to introduce us to those of you who haven’t had the pleasure of doing business with us.  \n                        We offer a full range of computer services.   \n                        If you have a broken screen or a virus or even a software problem we can fix it for you.  \n                        Bob’s Computer Repair Shop parts come with a lifetime warranty on any manufacturer defect.  \n                        Our technicians are all experts and have years of prior experience in the repair industry.  \n                        Everyone you speak to in our shop is a technician that can answer your questions.  \n                        Call, Click or Come by to obtain the best computer repair services you will ever have.\n                    </p>\n                </mat-card-content>\n    </mat-card>\n</div>\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<!--\n/*\n============================================\n; Title:  Bob's Computer\n; Author: Don Cousar\n; Date:   28 October 2019\n; Description: Bob's Computer\n;===========================================\n*/\n-->\n<div fxLayout=\"column\">\n    <mat-card>\n        <mat-card-title>Add Security Question</mat-card-title>\n        <form [formGroup]=\"form\" (ngSubmit)=\"saveQuestion()\" #userForm>\n            <mat-card-content>\n                <div fxLayout=\"column\" fxLayoutGap=\"10px\">\n                    <mat-form-field>\n                        <input type=\"text\"  matInput [(ngModel)]=\"QuestionText\" value=\"{{QuestionText}}\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Question Text\" />\n                    </mat-form-field>\n            </div>\n            </mat-card-content>\n            <br />\n            <mat-card-actions>\n                <button mat-raised-button (click)=\"cancel()\" color=\"accent\">Cancel</button>\n                <button mat-raised-button color=\"primary\">Submit</button>\n            </mat-card-actions>\n        </form>\n    </mat-card>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-role/add-role.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-role/add-role.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>Add User Role</mat-card-title>\n      <mat-card-subtitle>Add a new user role below</mat-card-subtitle>\n    </mat-card-header>\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"saveRole()\" #roleForm>\n      <mat-card-content>\n\n        <mat-form-field>\n          <input type=\"text\" matInput [(ngModel)]=\"name\" value=\"{{name}}\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"user role\"/>\n        </mat-form-field>\n\n      </mat-card-content>\n\n      <mat-card-actions>\n\n        <button mat-raised-button (click)=\"cancel()\" color=\"accent\">Cancel</button>\n        <button mat-raised-button color=\"primary\">Submit</button>\n\n      </mat-card-actions>\n    </form>\n\n  </mat-card>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\">\n  <mat-card fxFlex>\n\n    <mat-card-header fxLayoutAlign=\"center\">\n      <mat-card-title style=\"text-align:center\">Contact Us</mat-card-title>\n      <mat-card-subtitle style=\"text-align:center\">Have a question? Give us a call or send us an email!</mat-card-subtitle>\n    </mat-card-header>\n\n    <mat-card-content fxLayout=\"row\">\n      <div fxFlex=\"33\">\n        <mat-icon color=\"primary\" aria-hidden=\"false\">phone</mat-icon>\n        <h3>Phone</h3>\n        <p><a href=\"tel:4011111111\">402-111-1111</a></p>\n      </div>\n\n      <div fxFlex=\"33\">\n        <mat-icon color=\"primary\" aria-hidden=\"false\">email</mat-icon>\n        <h3>Email</h3>\n        <p><a href=\"mailto:info@bobscomputer.com\">info@bobscomputer.com</a></p>\n      </div>\n\n      <div fxFlex=\"33\">\n        <mat-icon color=\"primary\" aria-hidden=\"false\">navigation</mat-icon>\n        <h3>Address</h3>\n        <p>111 Main St.\n          <br />\n          Omaha, NE 68144\n        </p>\n      </div>\n    </mat-card-content>\n  </mat-card>\n</div>\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\">\n  <mat-card fxFlex style=\"text-align: center;\">\n    <mat-card-header>\n      <mat-card-title>Forgot Password</mat-card-title>\n      <mat-card-subtitle>Your account has been verified, enter your new password below.</mat-card-subtitle>\n    </mat-card-header>\n\n    <mat-card-content>\n\n      <br />\n\n      <form [formGroup]=\"form\" (ngSubmit)=resetPassword() #resetPasswordForm>\n        <mat-form-field >\n          <input type=\"password\" matInput [formControl]=\"form.controls['password']\" placeholder=\"new password\">\n        </mat-form-field>\n        <br />\n\n        <button mat-raised-button color=\"primary\">Submit</button>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<p>home works!</p>\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\">\n  <mat-card fxFlex style=\"text-align: center;\">\n    <mat-card-header>\n      <mat-card-title>Login</mat-card-title>\n      <mat-card-subtitle>Please enter your username and password below.</mat-card-subtitle>\n    </mat-card-header>\n\n\n    <mat-card-content >\n      <small *ngIf=\"form.controls['username'].hasError('required') && form.controls['username'].touched\" class=\"form-error\">Username is required!</small>\n      <small *ngIf=\"form.controls['password'].hasError('required') && form.controls['password'].touched\" class=\"form-error\">Password is required!</small>\n      <small *ngIf=\"errorMessage\">{{errorMessage}}</small>\n\n      <br />\n\n      <form [formGroup]=\"form\" (ngSubmit)=\"login()\">\n        <mat-form-field >\n          <input type=\"text\" required matInput [formControl]=\"form.controls['username']\" placeholder=\"username\">\n          <mat-error>Username is required</mat-error>\n        </mat-form-field>\n        <br />\n        <br />\n        <mat-form-field >\n          <input type=\"password\" required matInput [formControl]=\"form.controls['password']\" placeholder=\"password\">\n          <mat-error>Password is required</mat-error>\n        </mat-form-field>\n        <mat-card-actions>\n          <div >\n            <button type=\"submit\" mat-raised-button color=\"primary\">Login</button>\n          </div>\n\n          <br />\n          <br />\n          <div >\n            <a routerLink=\"/signup\" class=\"left\">Sign Up</a>\n            <a routerLink=\"/session/forgot-password\" class=\"right\">Forgot Password?</a>\n          </div>\n\n        </mat-card-actions>\n      </form>\n\n    </mat-card-content>\n  </mat-card>\n</div>\n<!-- Alan's HTML\n<div class=\"mt-4 col-8 offset-2\">\n  <div class=\"card\">\n    <div class=\"card-header\">Login Here</div>\n    <div class=\"card-body\">\n      <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"alert alert-danger\" [hidden]=\"!error\">\n          {{ error }}\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"inputuserName3\" class=\"col-sm-2 col-form-label\">User Name</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"userName\"\n              class=\"form-control\"\n              id=\"inputuserName3\"\n              placeholder=\"userName\"\n              [(ngModel)]=\"form.userName\"\n              required\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\"\n            >Password</label\n          >\n          <div class=\"col-sm-10\">\n            <input\n              type=\"password\"\n              name=\"password\"\n              class=\"form-control\"\n              id=\"inputPassword3\"\n              placeholder=\"Password\"\n              [(ngModel)]=\"form.password\"\n              required\n            />\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <div class=\"col-sm-10 offset-2\">\n            <button\n              type=\"submit\"\n              class=\"btn btn-primary\"\n              [disabled]=\"!loginForm.valid\"\n            >\n              Sign in\n            </button>\n\n            <a routerLink=\"/session/signup\" class=\"btn btn-info float-right\">Sign Up</a>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n                <div class=\"col-sm-10 offset-2\">\n\n                  <a routerLink=\"/session/forgotPassword\" class=\"btn btn-info float-right\">Password Reset</a>\n\n\n                </div>\n              </div>\n      </form>\n    </div>\n  </div>\n</div>\n-->\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"not-found-card\">\n  <div class=\"message\">\n    <h1 class=\"not-found-message\">\n      <b>404</b>\n      <h2 style=\"text-align:center\" class=\"subtext\">\n        <b\n          >Oh No! Looks like this<br />\n          Page doesn't exist!</b\n        >\n      </h2>\n    </h1>\n\n    <div class=\"wrapper\">\n      <button\n        mat-button\n        class=\"mat-button\"\n        type=\"button\"\n        mat-raised-button\n        color=\"primary\"\n      >\n        <a routerLink=\"\">Go Back</a>\n      </button>\n    </div>\n  </div>\n</div>\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<!--\n/*\n============================================\n; Title:  Bob's Computer\n; Author: Don Cousar\n; Date:   28 October 2019\n; Description: Bob's Computer\n;===========================================\n*/\n-->\n\n<div fxLayout=\"column\">\n    <mat-card>\n        <mat-card-title>Edit Question Details</mat-card-title>\n        <form [formGroup]=\"form\" (ngSubmit)=\"saveQuestion()\" #userForm>\n            <mat-card-content>\n                <div fxLayout=\"column\" fxLayoutGap=\"10px\">\n                    <mat-form-field>\n                        <input type=\"text\"  matInput [(ngModel)]=\"QuestionText\" value=\"{{QuestionText}}\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Question Text\" />\n                    </mat-form-field>\n            </div>\n            </mat-card-content>\n            <br />\n            <mat-card-actions>\n                <button mat-raised-button (click)=\"cancel()\" color=\"accent\">Cancel</button>\n                <button mat-raised-button color=\"primary\">Submit</button>\n            </mat-card-actions>\n        </form>\n    </mat-card>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/role-delete-dialog/role-delete-dialog.component.html": 
        /*!******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/role-delete-dialog/role-delete-dialog.component.html ***!
          \******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>User Roles</h1>\n<div mat-dialog-content>\n  <h3>Are you sure you want to delete the following user role?</h3>\n  <p color=\"warn\">This action can not be undone!</p>\n  <h4>{{role}}</h4>\n</div>\n<div mat-dialog-actions>\n  <button mat-button color=\"primary\" (click)=\"onCancel()\">Cancel</button>\n  <button mat-button color=\"warn\" (click)=\"delete(roleId)\">Delete</button>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/role-details/role-details.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/role-details/role-details.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>Edit User Role</mat-card-title>\n      <mat-card-subtitle>Change the name of {{name}} user role below</mat-card-subtitle>\n    </mat-card-header>\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"updateRole()\" #roleUpdateForm>\n      <mat-card-content>\n        <mat-form-field>\n          <input type=\"text\" matInput [(ngModel)]=\"name\" [ngModelOptions]=\"{standalone: true}\" value=\"{{name}}\" placeholder=\"user role\">\n        </mat-form-field>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-raised-button (click)=\"cancel()\" color=\"accent\">Cancel</button>\n        <button mat-raised-button color=\"primary\">Submit</button>\n      </mat-card-actions>\n    </form>\n  </mat-card>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/role-management/role-management.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/role-management/role-management.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>Roles Management</mat-card-title>\n      <mat-card-subtitle>\n        <button mat-raised-button color=\"primary\" routerLink='/roles/add'>Add User Role</button>\n      </mat-card-subtitle>\n    </mat-card-header>\n\n    <mat-card-content>\n      <form #f=\"ngForm\">\n        <table mat-table [dataSource]=\"roles\" class=\"mat-elevation-z8\">\n\n          <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef>User Role</th>\n            <td mat-cell *matCellDef=\"let element\" style=\"vertical-align: middle;\">\n              {{element.name}}\n            </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"edit\">\n            <th mat-header-cell *matHeaderCellDef></th>\n            <td mat-cell *matCellDef=\"let element\" style=\"vertical-align: middle;\">\n              <a routerLink=\"/roles/edit/{{element._id}}\">\n                <mat-icon color=\"accent\">edit</mat-icon>\n              </a>\n            </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"delete\">\n              <th mat-header-cell *matHeaderCellDef></th>\n              <td mat-cell *matCellDef=\"let element\" style=\"vertical-align: middle;\">\n                <a (click)=\"delete(element._id, element.name)\">\n                  <mat-icon color=\"warn\">delete</mat-icon>\n                </a>\n              </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n        </table>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<!--\n    /*\n============================================\n; Title:  Bob's Computer\n; Author: Don Cousar\n; Date:   28 October 2019\n; Description: Bob's Computer\n;===========================================\n*/\n-->\n<h1 mat-dialog-title>Bob's Computer Repair Shop</h1>\n<div mat-dialog-content>\n    <h3>You have elected to delete the following Security Question: </h3>\n    <h4>{{myQuestion}}</h4>\n    <p>This cannot be undone!</p>\n</div>\n<div mat-dialog-actions>\n    <button mat-button [mat-dialog-close]=\"\" cdkFocusInitial color=\"warn\">Ok</button>\n</div>\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<!--\n/*\n============================================\n; Title:  Bob's Computer\n; Author: Don Cousar\n; Date:   28 October 2019\n; Description: Bob's Computer\n;===========================================\n*/\n-->\n<div fxLayout=\"column\">\n        <mat-card>\n            <mat-card-title>Security Questions</mat-card-title>\n            <mat-card-subtitle><button routerLink=\"/questions/add\">Add Question</button></mat-card-subtitle>\n            <mat-card-content>\n                    <form #f=\"ngForm\">\n                    <table mat-table [dataSource]=\"questions\" class=\"mat-elevation-z8\">\n    \n                        <!--- Note that these columns can be defined in any order.\n                                The actual rendered columns are set as a property on the row definition\" -->\n    \n                        <!-- Question Text Column -->\n                        <ng-container matColumnDef=\"questionText\">\n                            <th mat-header-cell *matHeaderCellDef> Question Text </th>\n                            <!-- Edit User Name Control-->\n                            <td mat-cell *matCellDef=\"let element\">\n                                {{element.questionText}}\n                            </td>\n                        </ng-container>\n    \n                        <!-- Edit Column -->\n                        <ng-container matColumnDef=\"edit\">\n                            <th mat-header-cell *matHeaderCellDef>  </th>\n    \n                            <td mat-cell *matCellDef=\"let element\">\n                                <button routerLink=\"/questions/edit/{{element._id}}\" >Edit</button>\n                            </td>\n                        </ng-container>\n    \n                        <!-- Delete Column -->\n                        <ng-container matColumnDef=\"delete\">\n                            <th mat-header-cell *matHeaderCellDef>  </th>\n    \n                            <td mat-cell *matCellDef=\"let element\">\n                                <button (click)=\"delete(element._id, element.questionText)\" >Delete</button>\n                            </td>\n                        </ng-container>\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                    </table>\n                </form>\n            </mat-card-content>\n        </mat-card>\n    </div>\n    \n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/server-error/server-error.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/server-error/server-error.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"server-error-card\">\n        <div class=\"message\">\n          <h1 class=\"server-error-message\">\n            <b>500</b>\n            <h2 style=\"text-align:center\" class=\"subtext\">\n              <b\n                >Oh No! Looks like something<br />\n                Went wrong!</b\n              >\n            </h2>\n          </h1>\n      \n          <div class=\"wrapper\">\n            <button\n              mat-button\n              class=\"mat-button\"\n              type=\"button\"\n              mat-raised-button\n              color=\"primary\"\n            >\n              <a routerLink=\"\">Go Back</a>\n            </button>\n          </div>\n        </div>\n      </div>\n      \n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<!--\n============================================\n; Title:  Bob's Computer Signup\n; Authors: Don Cousar / Alan Edwards\n; Date:   30 October 2019\n; Description: Bob's Computer\n; Attribution: Form Control Logic inspired by Professor Krasso @Bellevue University\n;===========================================\n-->\n<div fxLayout=\"column\">\n    <mat-card>\n        <mat-card-title>Account Registration</mat-card-title>\n        <form [formGroup]=\"form\" (ngSubmit)=\"register()\" #userForm>\n            <mat-card-content>\n                <div fxLayout=\"column\" fxLayoutGap=\"10px\">\n                    <mat-form-field>\n                        <input type=\"text\" required matInput [(ngModel)]=\"FirstName\" value=\"{{FirstName}}\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"First Name\" />\n                        <mat-error>First Name is required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input type=\"text\" required matInput [(ngModel)]=\"LastName\" value=\"{{LastName}}\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Last Name\" />\n                        <mat-error>Last Name is required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input type=\"text\" required matInput [(ngModel)]=\"Address\" value=\"{{Address}}\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Address\" />\n                        <mat-error>Address is required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input type=\"text\" required matInput [(ngModel)]=\"PhoneNumber\" value=\"{{PhoneNumber}}\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Phone Number\" />\n                        <mat-error>Phone Number is required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input type=\"text\" required matInput [(ngModel)]=\"Email\" value=\"{{Email}}\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Email\" />\n                        <mat-error>Email is required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input type=\"text\" required matInput [(ngModel)]=\"Username\" value=\"{{Username}}\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"User Name\" />\n                        <mat-error>Username is required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input type=\"text\" required type=\"password\" pattern=\"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$\" matInput [(ngModel)]=\"Password\" value=\"{{Password}}\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Create Password\" />\n                        <mat-error>Password is required and must be at least 8 characters, one Uppercase, and one Number</mat-error>\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input type=\"text\" required type=\"password\" pattern=\"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$\" matInput [(ngModel)]=\"ConfirmPassword\" value=\"{{ConfirmPassword}}\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Confirm Password\" />\n                        <mat-error>Both passwords must match</mat-error>\n                    </mat-form-field>\n                    <mat-form-field>\n                        <mat-label>Choose Security Question #1</mat-label>\n                        <select required matNativeControl [(ngModel)]=\"secQuestion1\" [ngModelOptions]=\"{standalone: true}\">\n                            <option *ngFor=\"let question of questions\" value={{question.questionText}}>\n                                {{question.questionText}}\n                            </option>\n                        </select> \n                        <mat-error>Security Question #1 is required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input type=\"text\" required matInput [(ngModel)]=\"secAnswer1\" value=\"{{secAnswer1}}\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Enter Answer to Security Question 1\" />\n                        <mat-error>Security answer #1 is required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field>\n                        <mat-label>Choose Security Question #2</mat-label>\n                        <select required matNativeControl [(ngModel)]=\"secQuestion2\" [ngModelOptions]=\"{standalone: true}\">\n                            <option *ngFor=\"let question of questions\" value={{question.questionText}}>\n                                {{question.questionText}}\n                            </option>\n                        </select> \n                        <mat-error>Security Question #2 is required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input type=\"text\" required matInput [(ngModel)]=\"secAnswer2\" value=\"{{secAnswer2}}\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Enter Answer to Security Question 2\" />\n                        <mat-error>Security answer #2 is required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field>\n                        <mat-label>Choose Security Question #3</mat-label>\n                        <select required matNativeControl [(ngModel)]=\"secQuestion3\" [ngModelOptions]=\"{standalone: true}\">\n                            <option *ngFor=\"let question of questions\" value={{question.questionText}}>\n                                {{question.questionText}}\n                            </option>\n                        </select> \n                        <mat-error>Security Question #3 is required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input type=\"text\" required matInput [(ngModel)]=\"secAnswer3\" value=\"{{secAnswer3}}\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Enter Answer to Security Question 3\" />\n                        <mat-error>Security answer #3 is required</mat-error>\n                    </mat-form-field>\n                </div>\n            </mat-card-content>\n            <br />\n            <mat-card-actions>\n                <button mat-raised-button (click)=\"cancel()\" color=\"accent\">Cancel</button>\n                <button mat-raised-button color=\"primary\">Submit</button>\n            </mat-card-actions>\n        </form>\n    </mat-card>\n</div>\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<!--\n/*\n============================================\n; Title:  Bob's Computer\n; Author: Don Cousar\n; Date:   25 October 2019\n; Description: Bob's Computer\n;===========================================\n*/\n-->\n\n<div fxLayout=\"column\">\n    <mat-card>\n        <mat-card-title>Edit User Details</mat-card-title>\n        <form [formGroup]=\"form\" (ngSubmit)=\"saveUser()\" #userForm>\n            <mat-card-content>\n                <div fxLayout=\"column\" fxLayoutGap=\"10px\">\n\n                    <mat-form-field>\n                        <input type=\"text\"  matInput [(ngModel)]=\"PhoneNumber\" value=\"{{PhoneNumber}}\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"PhoneNumber\" />\n                    </mat-form-field>\n\n                    <mat-form-field>\n                        <input type=\"text\"  matInput [(ngModel)]=\"Address\" value=\"{{Address}}\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Address\" />\n                    </mat-form-field>\n\n                    <mat-form-field>\n                        <input type=\"text\"  matInput [(ngModel)]=\"Email\" value=\"{{Email}}\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Email\" />\n                    </mat-form-field>\n            </div>\n            </mat-card-content>\n            <br />\n            <mat-card-actions>\n                <button mat-raised-button (click)=\"cancel()\" color=\"accent\">Cancel</button>\n                <button mat-raised-button color=\"primary\">Submit</button>\n            </mat-card-actions>\n        </form>\n    </mat-card>\n</div>\n\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<!--\n    /*\n============================================\n; Title:  Bob's Computer\n; Author: Don Cousar\n; Date:   23 October 2019\n; Description: Bob's Computer\n;===========================================\n*/\n-->\n<h1 mat-dialog-title>Bob's Computer Repair Shop</h1>\n<div mat-dialog-content>\n    <h3>You have elected to delete user: {{myUserName}} </h3>\n    <p>This cannot be undone!</p>\n</div>\n<div mat-dialog-actions>\n    <button mat-button [mat-dialog-close]=\"\" cdkFocusInitial color=\"warn\">Ok</button>\n</div>\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<!--\n/*\n============================================\n; Title:  Bob's Computer\n; Author: Don Cousar\n; Date:   23 October 2019\n; Description: Bob's Computer\n;===========================================\n*/\n-->\n<div fxLayout=\"column\">\n    <mat-card>\n        <mat-card-title>User Management</mat-card-title>\n        <mat-card-content>\n                <form #f=\"ngForm\">\n                <table mat-table [dataSource]=\"users\" class=\"mat-elevation-z8\">\n\n                    <!--- Note that these columns can be defined in any order.\n                            The actual rendered columns are set as a property on the row definition\" -->\n\n                    <!-- Last Name Column -->\n                    <ng-container matColumnDef=\"username\">\n                        <th mat-header-cell *matHeaderCellDef> Username </th>\n                        <!-- Edit User Name Control-->\n                        <td mat-cell *matCellDef=\"let element\">\n                            {{element.username}}\n                        </td>\n                    </ng-container>\n\n                    <!-- First Name Column -->\n                    <ng-container matColumnDef=\"firstName\">\n                        <th mat-header-cell *matHeaderCellDef> First Name </th>\n\n                        <td mat-cell *matCellDef=\"let element\">\n                            {{element.firstName}}\n                        </td>\n                    </ng-container>\n\n                    <!-- Last Name Column -->\n                    <ng-container matColumnDef=\"lastName\">\n                        <th mat-header-cell *matHeaderCellDef> Last Name </th>\n\n                        <td mat-cell *matCellDef=\"let element\">\n                            {{element.lastName}}\n                        </td>\n                    </ng-container>\n\n                    <!-- Phone Number Column -->\n                    <ng-container matColumnDef=\"phoneNumber\">\n                        <th mat-header-cell *matHeaderCellDef> Phone Number </th>\n\n                        <td mat-cell *matCellDef=\"let element\">\n                            {{element.phoneNumber}}\n                        </td>\n                    </ng-container>\n\n                    <!-- Address Column -->\n                    <ng-container matColumnDef=\"address\">\n                        <th mat-header-cell *matHeaderCellDef> Address </th>\n\n                        <td mat-cell *matCellDef=\"let element\">\n                            {{element.address}}\n                        </td>\n                    </ng-container>\n\n                    <!-- Email Column -->\n                    <ng-container matColumnDef=\"email\">\n                        <th mat-header-cell *matHeaderCellDef> Email </th>\n\n                        <td mat-cell *matCellDef=\"let element\">\n                            {{element.email}}\n                        </td>\n                    </ng-container>\n\n                    <!-- Edit Column -->\n                    <ng-container matColumnDef=\"edit\">\n                        <th mat-header-cell *matHeaderCellDef>  </th>\n\n                        <td mat-cell *matCellDef=\"let element\">\n                            <button routerLink=\"/user/edit/{{element._id}}\" > Edit </button>\n                        </td>\n                    </ng-container>\n\n                    <!-- Delete Column -->\n                    <ng-container matColumnDef=\"delete\">\n                        <th mat-header-cell *matHeaderCellDef>  </th>\n\n                        <td mat-cell *matCellDef=\"let element\">\n                            <button (click)=\"delete(element._id, element.username)\" > Delete </button>\n                        </td>\n                    </ng-container>\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n            </form>\n        </mat-card-content>\n    </mat-card>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verify-questions/verify-questions.component.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verify-questions/verify-questions.component.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\">\n  <mat-card fxFlex style=\"text-align: center;\">\n    <mat-card-header>\n      <mat-card-title>Forgot Password</mat-card-title>\n      <mat-card-subtitle>Answer your security questions below.</mat-card-subtitle>\n    </mat-card-header>\n\n    <mat-card-content>\n      <form [formGroup]=\"form\" (ngSubmit)=\"verifySecurityQuestions()\" #securityQuestionsForm >\n\n        <h3>{{question1}}</h3>\n        <mat-form-field >\n          <input type=\"text\" matInput [formControl]=\"form.controls['answerToSecurityQuestion1']\" placeholder=\"answer\" id=\"question1\">\n        </mat-form-field>\n\n        <br />\n\n        <h3>{{question2}}</h3>\n        <mat-form-field >\n          <input type=\"text\" matInput [formControl]=\"form.controls['answerToSecurityQuestion2']\" placeholder=\"answer\" id=\"question2\">\n        </mat-form-field>\n\n        <br />\n\n        <h3>{{question3}}</h3>\n        <mat-form-field >\n          <input type=\"text\" matInput [formControl]=\"form.controls['answerToSecurityQuestion3']\" placeholder=\"answer\" id=\"question3\">\n        </mat-form-field>\n\n        <br />\n\n        <button mat-raised-button color=\"primary\">Submit</button>\n\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verify-user/verify-user.component.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verify-user/verify-user.component.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\">\n  <mat-card fxFlex style=\"text-align: center;\">\n    <mat-card-header>\n      <mat-card-title>Forgot Password</mat-card-title>\n      <mat-card-subtitle>Enter your username below to start reset your password.</mat-card-subtitle>\n    </mat-card-header>\n\n    <mat-card-content>\n      <form [formGroup]=\"form\" (ngSubmit)=\"validateUsername()\" #usernameForm >\n        <mat-form-field >\n          <input type=\"text\" matInput [formControl]=\"form.controls['username']\" placeholder=\"username\">\n        </mat-form-field>\n\n        <br />\n\n        <button mat-raised-button color=\"primary\">Submit</button>\n\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<!--\n/*\n============================================\n; Title:  Bob's Computer\n; Author: Don Cousar\n; Date:   23 October 2019\n; Description: BobComputer Starter Code\n;===========================================\n*/\n-->\n<div>\n  <main>\n    <mat-toolbar class=\"menu\" role=\"header\" color=\"accent\">\n      <mat-toolbar-row>\n        <button mat-button class=\"toolbar__icon-button mat-button\">\n          <a routerLink=\"/\">\n            <img src=\"../../../assets/BobLogoWhite.png\" alt=\"Bob's Computer Repair Shop\" id=\"logo\">\n          </a>\n        </button>\n        <button mat-button class=\"mat-button\">\n          <a routerLink=\"/about\">About Us</a>\n        </button>\n        <button mat-button class=\"mat-button\">\n          <a routerLink=\"\">Service Repairs</a>\n        </button>\n        <button mat-button class=\"mat-button\">\n          <a routerLink=\"/contact\">Contact Us</a>\n        </button>\n        <button mat-button class=\"mat-button\">\n          <a routerLink=\"/user\">User Management</a>\n        </button>\n        <button mat-button class=\"mat-button\">\n          <a routerLink=\"/questions\">Security Questions Management</a>\n        </button>\n        <button mat-button class=\"mat-button\">\n          <a routerLink=\"/roles\">User Roles Management</a>\n        </button>\n\n        <div fxFlex></div>\n\n        <button mat-button class=\"mat-button\">\n          <a (click)=\"logout()\" class=\"nav-link\">Logout</a>\n        </button>\n      </mat-toolbar-row>\n    </mat-toolbar>\n  </main>\n</div>\n<router-outlet></router-outlet>\n\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<!--\n/*\n============================================\n; Title:  Bob's Computer\n; Author: Jordan Hennessy\n; Date:   28 October 2019\n; Description: BobComputer Starter Code\n;===========================================\n*/\n-->\n<div>\n  <main>\n    <mat-toolbar class=\"menu\" role=\"header\" color=\"accent\">\n      <mat-toolbar-row>\n        <button mat-button class=\"toolbar__icon-button mat-button\">\n          <a routerLink=\"/\">\n            <img src=\"../../../assets/BobLogoWhite.png\" alt=\"Bob's Computer Repair Shop\" id=\"logo\">\n          </a>\n        </button>\n        <button mat-button class=\"mat-button\">\n          <a routerLink=\"/session/about\">About Us</a>\n        </button>\n        <button mat-button class=\"mat-button\">\n          <a routerLink=\"/session/contact\">Contact Us</a>\n        </button>\n\n\n        <div fxFlex></div>\n\n        <button mat-button class=\"mat-button\">\n          <a routerLink=\"/session/login\" class=\"nav-link\">Login</a>\n        </button>\n      </mat-toolbar-row>\n    </mat-toolbar>\n  </main>\n</div>\n<router-outlet></router-outlet>\n");
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
            /* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
            /* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
            /* harmony import */ var _pages_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pages/server-error/server-error.component */ "./src/app/pages/server-error/server-error.component.ts");
            /* harmony import */ var _pages_verify_user_verify_user_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./pages/verify-user/verify-user.component */ "./src/app/pages/verify-user/verify-user.component.ts");
            /* harmony import */ var _pages_verify_questions_verify_questions_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pages/verify-questions/verify-questions.component */ "./src/app/pages/verify-questions/verify-questions.component.ts");
            /* harmony import */ var _shared_route_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./shared/route-interceptors/error.interceptor */ "./src/app/shared/route-interceptors/error.interceptor.ts");
            /* harmony import */ var _pages_role_management_role_management_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./pages/role-management/role-management.component */ "./src/app/pages/role-management/role-management.component.ts");
            /* harmony import */ var _pages_role_details_role_details_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./pages/role-details/role-details.component */ "./src/app/pages/role-details/role-details.component.ts");
            /* harmony import */ var _pages_role_delete_dialog_role_delete_dialog_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./pages/role-delete-dialog/role-delete-dialog.component */ "./src/app/pages/role-delete-dialog/role-delete-dialog.component.ts");
            /* harmony import */ var _pages_add_role_add_role_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./pages/add-role/add-role.component */ "./src/app/pages/add-role/add-role.component.ts");
            /*
            ; Title:  starter code
            ; Author: Professor Krasso
            ; Date:   21 October 2019
            ; ModifiedBy: Don Cousar and Jordan Hennessy
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
                        _pages_signup_dialog_signup_dialog_component__WEBPACK_IMPORTED_MODULE_40__["SignupDialogComponent"],
                        _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_41__["ContactComponent"],
                        _pages_about_about_component__WEBPACK_IMPORTED_MODULE_42__["AboutComponent"],
                        _pages_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_43__["ServerErrorComponent"],
                        _pages_verify_user_verify_user_component__WEBPACK_IMPORTED_MODULE_44__["VerifyUserComponent"],
                        _pages_verify_questions_verify_questions_component__WEBPACK_IMPORTED_MODULE_45__["VerifyQuestionsComponent"],
                        _pages_role_management_role_management_component__WEBPACK_IMPORTED_MODULE_47__["RoleManagementComponent"],
                        _pages_role_details_role_details_component__WEBPACK_IMPORTED_MODULE_48__["RoleDetailsComponent"],
                        _pages_role_delete_dialog_role_delete_dialog_component__WEBPACK_IMPORTED_MODULE_49__["RoleDeleteDialogComponent"],
                        _pages_add_role_add_role_component__WEBPACK_IMPORTED_MODULE_50__["AddRoleComponent"]
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
                        _shared_auth_guard__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_37__["CookieService"],
                        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HTTP_INTERCEPTORS"], useClass: _shared_route_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_46__["ErrorInterceptor"], multi: true }
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
                    entryComponents: [
                        _pages_user_management_delete_dialog_user_management_delete_dialog_component__WEBPACK_IMPORTED_MODULE_30__["UserManagementDeleteDialogComponent"],
                        _pages_security_questions_delete_dialog_security_questions_delete_dialog_component__WEBPACK_IMPORTED_MODULE_33__["SecurityQuestionsDeleteDialogComponent"],
                        _pages_signup_dialog_signup_dialog_component__WEBPACK_IMPORTED_MODULE_40__["SignupDialogComponent"],
                        _pages_role_delete_dialog_role_delete_dialog_component__WEBPACK_IMPORTED_MODULE_49__["RoleDeleteDialogComponent"]
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
            /* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
            /* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
            /* harmony import */ var _pages_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/server-error/server-error.component */ "./src/app/pages/server-error/server-error.component.ts");
            /* harmony import */ var _pages_verify_user_verify_user_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/verify-user/verify-user.component */ "./src/app/pages/verify-user/verify-user.component.ts");
            /* harmony import */ var _pages_verify_questions_verify_questions_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/verify-questions/verify-questions.component */ "./src/app/pages/verify-questions/verify-questions.component.ts");
            /* harmony import */ var _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/forgot-password/forgot-password.component */ "./src/app/pages/forgot-password/forgot-password.component.ts");
            /* harmony import */ var _pages_role_management_role_management_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/role-management/role-management.component */ "./src/app/pages/role-management/role-management.component.ts");
            /* harmony import */ var _pages_role_details_role_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/role-details/role-details.component */ "./src/app/pages/role-details/role-details.component.ts");
            /* harmony import */ var _pages_add_role_add_role_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/add-role/add-role.component */ "./src/app/pages/add-role/add-role.component.ts");
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
                        },
                        {
                            path: 'about',
                            component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"]
                        },
                        {
                            path: 'contact',
                            component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"]
                        },
                        {
                            path: 'roles',
                            component: _pages_role_management_role_management_component__WEBPACK_IMPORTED_MODULE_18__["RoleManagementComponent"],
                            canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
                        },
                        {
                            path: 'roles/edit/:id',
                            component: _pages_role_details_role_details_component__WEBPACK_IMPORTED_MODULE_19__["RoleDetailsComponent"],
                            canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
                        },
                        {
                            path: 'roles/add',
                            component: _pages_add_role_add_role_component__WEBPACK_IMPORTED_MODULE_20__["AddRoleComponent"],
                            canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
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
                        },
                        {
                            path: 'about',
                            component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"]
                        },
                        {
                            path: 'contact',
                            component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"]
                        },
                        {
                            path: '500',
                            component: _pages_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_14__["ServerErrorComponent"]
                        },
                        {
                            path: 'forgot-password',
                            component: _pages_verify_user_verify_user_component__WEBPACK_IMPORTED_MODULE_15__["VerifyUserComponent"]
                        },
                        {
                            path: 'verify-questions',
                            component: _pages_verify_questions_verify_questions_component__WEBPACK_IMPORTED_MODULE_16__["VerifyQuestionsComponent"]
                        },
                        {
                            path: 'reset-password',
                            component: _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_17__["ForgotPasswordComponent"]
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
        /***/ "./src/app/pages/about/about.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/pages/about/about.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/*\n============================================\n; Title:  Bob's Computer\n; Author: Don Cousar\n; Date:   28 October 2019\n; Description: About Us\n;===========================================\n*/\n.center {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztDQU9DO0FBQ0Q7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG47IFRpdGxlOiAgQm9iJ3MgQ29tcHV0ZXJcbjsgQXV0aG9yOiBEb24gQ291c2FyXG47IERhdGU6ICAgMjggT2N0b2JlciAyMDE5XG47IERlc2NyaXB0aW9uOiBBYm91dCBVc1xuOz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiovXG4uY2VudGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDUwJTtcbiAgfSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/about/about.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/pages/about/about.component.ts ***!
          \************************************************/
        /*! exports provided: AboutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function () { return AboutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /*
            ============================================
            ; Title:  Bob's Computer
            ; Author: Don Cousar
            ; Date:   28 October 2019
            ; Description: About Us
            ;===========================================
            */
            var AboutComponent = /** @class */ (function () {
                function AboutComponent() {
                }
                AboutComponent.prototype.ngOnInit = function () {
                };
                return AboutComponent;
            }());
            AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-about',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/pages/about/about.component.css")).default]
                })
            ], AboutComponent);
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
            /* harmony default export */ __webpack_exports__["default"] = ("/*\n============================================\n; Title:  Bob's Computer\n; Author: Don Cousar\n; Date:   28 October 2019\n; Description: Bob's Computer\n;===========================================\n*/\nmat-card-actions button {\n  width: 48%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLXF1ZXN0aW9uL2FkZC1xdWVzdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0NBT0M7QUFDRDtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1xdWVzdGlvbi9hZGQtcXVlc3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuOyBUaXRsZTogIEJvYidzIENvbXB1dGVyXG47IEF1dGhvcjogRG9uIENvdXNhclxuOyBEYXRlOiAgIDI4IE9jdG9iZXIgMjAxOVxuOyBEZXNjcmlwdGlvbjogQm9iJ3MgQ29tcHV0ZXJcbjs9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4qL1xubWF0LWNhcmQtYWN0aW9ucyBidXR0b24ge1xuICB3aWR0aDogNDglO1xufVxuIl19 */");
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
        /***/ "./src/app/pages/add-role/add-role.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/pages/add-role/add-role.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("mat-card-actions button {\n  width: 48%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLXJvbGUvYWRkLXJvbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1yb2xlL2FkZC1yb2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZC1hY3Rpb25zIGJ1dHRvbiB7XG4gIHdpZHRoOiA0OCU7XG59XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/add-role/add-role.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/pages/add-role/add-role.component.ts ***!
          \******************************************************/
        /*! exports provided: AddRoleComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRoleComponent", function () { return AddRoleComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /*
            ============================================
            ; Title:  add-role.component.ts
            ; Author: Jordan Hennessy
            ; Date:   6 November 2019
            ; Description: Bob's Computer Repair Shop
            ;===========================================
            */
            var AddRoleComponent = /** @class */ (function () {
                function AddRoleComponent(route, http, fb, router) {
                    this.route = route;
                    this.http = http;
                    this.fb = fb;
                    this.router = router;
                    this.name = '';
                }
                AddRoleComponent.prototype.saveRole = function () {
                    var _this = this;
                    this.http.post('/api/roles/add', {
                        name: this.name
                    }).subscribe(function (res) {
                        _this.router.navigate(['/roles']);
                        console.log(res);
                    });
                };
                AddRoleComponent.prototype.cancel = function () {
                    this.router.navigate(['/roles']);
                };
                AddRoleComponent.prototype.ngOnInit = function () {
                    this.form = this.fb.group({
                        name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
                    });
                };
                return AddRoleComponent;
            }());
            AddRoleComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            AddRoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-add-role',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-role.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-role/add-role.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-role.component.css */ "./src/app/pages/add-role/add-role.component.css")).default]
                })
            ], AddRoleComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/contact/contact.component.css": 
        /*!*****************************************************!*\
          !*** ./src/app/pages/contact/contact.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("h3, a, p {\n  text-align: center;\n}\n\n.mat-icon {\n  display: block;\n  margin: auto;\n  width: 62px;\n  height: 62px;\n  font-size: 62px;\n}\n\na {\n  text-transform: lowercase;\n  text-decoration: none;\n}\n\n.mat-card-header-text {\n  justify-content: center;\n\n}\n\n.mat-card-title{\n  justify-content:center;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx1QkFBdUI7O0FBRXpCOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMsIGEsIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXQtaWNvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA2MnB4O1xuICBoZWlnaHQ6IDYycHg7XG4gIGZvbnQtc2l6ZTogNjJweDtcbn1cblxuYSB7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbn1cbi5tYXQtY2FyZC10aXRsZXtcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/pages/contact/contact.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/pages/contact/contact.component.ts ***!
          \****************************************************/
        /*! exports provided: ContactComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function () { return ContactComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /*
            ============================================
            ; Title:  contact.component.ts
            ; Author: Jordan Hennessy
            ; Date:   3 November 2019
            ; Description: Bob's Computer
            ;===========================================
            */
            var ContactComponent = /** @class */ (function () {
                function ContactComponent() {
                }
                ContactComponent.prototype.ngOnInit = function () {
                };
                return ContactComponent;
            }());
            ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-contact',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/pages/contact/contact.component.css")).default]
                })
            ], ContactComponent);
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
            /* harmony default export */ __webpack_exports__["default"] = ("mat-card {\n  width: 30%;\n}\n\n\n\nmat-card-actions {\n  width: 95%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaOzs7O0FBSUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gIHdpZHRoOiAzMCU7XG59XG5cblxuXG5tYXQtY2FyZC1hY3Rpb25zIHtcbiAgd2lkdGg6IDk1JTtcbn1cbiJdfQ== */");
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
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
            /*
            ============================================
            ; Title:  forgot-password.component.ts
            ; Author: Professor Krasso
            ; Date:   3 November 2019
            ; Modified By: Jordan Hennessy
            ; Description: Bob's Computer
            ;===========================================
            */
            var ForgotPasswordComponent = /** @class */ (function () {
                function ForgotPasswordComponent(http, route, router, fb, cookieService) {
                    this.http = http;
                    this.route = route;
                    this.router = router;
                    this.fb = fb;
                    this.cookieService = cookieService;
                    this.isAuthenticated = this.route.snapshot.queryParamMap.get('isAuthenticated');
                    this.username = this.route.snapshot.queryParamMap.get('username');
                }
                ForgotPasswordComponent.prototype.ngOnInit = function () {
                    this.form = this.fb.group({
                        password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
                    });
                };
                ForgotPasswordComponent.prototype.resetPassword = function () {
                    var _this = this;
                    this.http.post('/api/users/' + this.username + '/reset-password', {
                        password: this.form.controls['password'].value
                    }).subscribe(function (res) {
                        _this.cookieService.set('isAuthenticated', 'true', 1);
                        _this.cookieService.set('username', _this.username, 1);
                        _this.router.navigate(['/']);
                    }, function (err) {
                        console.log(err);
                    });
                };
                return ForgotPasswordComponent;
            }());
            ForgotPasswordComponent.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
            ]; };
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
                    this.http.post('/api/users  ', {
                        'username': username,
                        'password': password
                    }).subscribe(function (res) {
                        if (res) {
                            _this.cookieService.set('isAuthenticated', 'true', 10);
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
            /* harmony default export */ __webpack_exports__["default"] = (".not-found-card {\n  width: 100%;\n  height: 100%;\n}\n\n.message {\n  width: 100%;\n  height: 100%;\n}\n\n.not-found-message {\n  width: 100%;\n  height: 100%;\n  color: #5dbcd2;\n  text-align: center;\n  font-size: 120px;\n}\n\n.subtext {\n  width: 100%;\n  height: 100%;\n  color: white;\n  text-align: center;\n  font-size: 40px;\n}\n\nmat-button-wrapper {\n  text-align: center;\n}\n\n.wrapper {\n  text-align: center;\n  width: 100%;\n}\n\n.button {\n  width: 100%;\n  text-align: center;\n}\n\na {\n  color: #fff;\n  text-transform: uppercase;\n  text-decoration: none;\n  text-align: center;\n}\n\nmat-button {\n  text-align: center;\n}\n\nbutton{\n    width: 30%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3QtZm91bmQtY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tZXNzYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm5vdC1mb3VuZC1tZXNzYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6ICM1ZGJjZDI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMjBweDtcbn1cblxuLnN1YnRleHQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxubWF0LWJ1dHRvbi13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLndyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5hIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxubWF0LWJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmJ1dHRvbntcbiAgICB3aWR0aDogMzAlO1xufVxuIl19 */");
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
            /* harmony default export */ __webpack_exports__["default"] = ("/*\n============================================\n; Title:  Bob's Computer\n; Author: Don Cousar\n; Date:   28 October 2019\n; Description: Bob's Computer\n;===========================================\n*/\n\nmat-card-actions button {\n  width: 48%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcXVlc3Rpb24tZGV0YWlscy9xdWVzdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Q0FPQzs7QUFFRDtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1ZXN0aW9uLWRldGFpbHMvcXVlc3Rpb24tZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG47IFRpdGxlOiAgQm9iJ3MgQ29tcHV0ZXJcbjsgQXV0aG9yOiBEb24gQ291c2FyXG47IERhdGU6ICAgMjggT2N0b2JlciAyMDE5XG47IERlc2NyaXB0aW9uOiBCb2IncyBDb21wdXRlclxuOz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiovXG5cbm1hdC1jYXJkLWFjdGlvbnMgYnV0dG9uIHtcbiAgd2lkdGg6IDQ4JTtcbn1cbiJdfQ== */");
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
        /***/ "./src/app/pages/role-delete-dialog/role-delete-dialog.component.css": 
        /*!***************************************************************************!*\
          !*** ./src/app/pages/role-delete-dialog/role-delete-dialog.component.css ***!
          \***************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JvbGUtZGVsZXRlLWRpYWxvZy9yb2xlLWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/pages/role-delete-dialog/role-delete-dialog.component.ts": 
        /*!**************************************************************************!*\
          !*** ./src/app/pages/role-delete-dialog/role-delete-dialog.component.ts ***!
          \**************************************************************************/
        /*! exports provided: RoleDeleteDialogComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleDeleteDialogComponent", function () { return RoleDeleteDialogComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /*
            ============================================
            ; Title:  role-delete-dialog.component.ts
            ; Author: Jordan Hennessy
            ; Date:   6 November 2019
            ; Description: Bob's Computer Repair Shop
            ;===========================================
            */
            var RoleDeleteDialogComponent = /** @class */ (function () {
                function RoleDeleteDialogComponent(dialogRef, data, router, http) {
                    this.dialogRef = dialogRef;
                    this.router = router;
                    this.http = http;
                    this.roleId = data._id;
                    this.role = data.name;
                }
                RoleDeleteDialogComponent.prototype.onCancel = function () {
                    this.dialogRef.close();
                };
                RoleDeleteDialogComponent.prototype.delete = function (roleId) {
                    this.http.delete('/api/roles/' + roleId).subscribe(function (res) { });
                    this.dialogRef.close();
                };
                return RoleDeleteDialogComponent;
            }());
            RoleDeleteDialogComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
            ]; };
            RoleDeleteDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-role-delete-dialog',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./role-delete-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/role-delete-dialog/role-delete-dialog.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./role-delete-dialog.component.css */ "./src/app/pages/role-delete-dialog/role-delete-dialog.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], RoleDeleteDialogComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/role-details/role-details.component.css": 
        /*!***************************************************************!*\
          !*** ./src/app/pages/role-details/role-details.component.css ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("mat-card-actions button {\n  width: 48%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcm9sZS1kZXRhaWxzL3JvbGUtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcm9sZS1kZXRhaWxzL3JvbGUtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQtYWN0aW9ucyBidXR0b24ge1xuICB3aWR0aDogNDglO1xufVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/pages/role-details/role-details.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/pages/role-details/role-details.component.ts ***!
          \**************************************************************/
        /*! exports provided: RoleDetailsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleDetailsComponent", function () { return RoleDetailsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /*
            ============================================
            ; Title:  role-details.component.ts
            ; Author: Jordan Hennessy
            ; Date:   6 November 2019
            ; Description: Bob's Computer Repair Shop
            ;===========================================
            */
            var RoleDetailsComponent = /** @class */ (function () {
                function RoleDetailsComponent(route, http, fb, router) {
                    var _this = this;
                    this.route = route;
                    this.http = http;
                    this.fb = fb;
                    this.router = router;
                    this.name = '';
                    this._id = this.route.snapshot.paramMap.get('id');
                    this.http.get('/api/roles/' + this._id).subscribe(function (res) {
                        _this.role = res;
                        _this.name = res['name'];
                    }, function (err) {
                        console.log(err);
                    });
                }
                RoleDetailsComponent.prototype.updateRole = function () {
                    var _this = this;
                    this.http.put('/api/roles/' + this._id, {
                        name: this.name
                    }).subscribe(function (res) {
                        _this.router.navigate(['/roles']);
                    });
                };
                RoleDetailsComponent.prototype.cancel = function () {
                    this.router.navigate(['/roles']);
                };
                RoleDetailsComponent.prototype.ngOnInit = function () {
                    this.form = this.fb.group({
                        name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
                    });
                };
                return RoleDetailsComponent;
            }());
            RoleDetailsComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            RoleDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-role-details',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./role-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/role-details/role-details.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./role-details.component.css */ "./src/app/pages/role-details/role-details.component.css")).default]
                })
            ], RoleDetailsComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/role-management/role-management.component.css": 
        /*!*********************************************************************!*\
          !*** ./src/app/pages/role-management/role-management.component.css ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JvbGUtbWFuYWdlbWVudC9yb2xlLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/pages/role-management/role-management.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/pages/role-management/role-management.component.ts ***!
          \********************************************************************/
        /*! exports provided: RoleManagementComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleManagementComponent", function () { return RoleManagementComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _role_delete_dialog_role_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../role-delete-dialog/role-delete-dialog.component */ "./src/app/pages/role-delete-dialog/role-delete-dialog.component.ts");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /*
            ============================================
            ; Title:  role-management.component.ts
            ; Author: Jordan Hennessy
            ; Date:   6 November 2019
            ; Description: Bob's Computer Repair Shop
            ;===========================================
            */
            var RoleManagementComponent = /** @class */ (function () {
                function RoleManagementComponent(http, dialog, router) {
                    var _this = this;
                    this.http = http;
                    this.dialog = dialog;
                    this.router = router;
                    this.displayedColumns = ['name', 'edit', 'delete'];
                    this.http.get('/api/roles').subscribe(function (res) {
                        _this.roles = res;
                        console.log(_this.roles);
                    }, function (err) {
                        console.log(err);
                    }, function () { });
                }
                RoleManagementComponent.prototype.delete = function (_id, name) {
                    var _this = this;
                    var dialogRef = this.dialog.open(_role_delete_dialog_role_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__["RoleDeleteDialogComponent"], {
                        data: {
                            _id: _id,
                            name: name
                        },
                        width: '500px'
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        _this.http.get('/api/roles').subscribe(function (res) {
                            _this.roles = res;
                            console.log(_this.roles);
                        }, function (err) {
                            console.log(err);
                        }, function () { });
                    });
                };
                RoleManagementComponent.prototype.ngOnInit = function () {
                };
                return RoleManagementComponent;
            }());
            RoleManagementComponent.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
            ]; };
            RoleManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-role-management',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./role-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/role-management/role-management.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./role-management.component.css */ "./src/app/pages/role-management/role-management.component.css")).default]
                })
            ], RoleManagementComponent);
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
            /* harmony default export */ __webpack_exports__["default"] = ("/*\n============================================\n; Title:  Bob's Computer\n; Author: Don Cousar\n; Date:   28 October 2019\n; Description: Bob's Computer\n;===========================================\n*/\np { color: red }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VjdXJpdHktcXVlc3Rpb25zLWRlbGV0ZS1kaWFsb2cvc2VjdXJpdHktcXVlc3Rpb25zLWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztDQU9DO0FBQ0QsSUFBSSxXQUFXIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VjdXJpdHktcXVlc3Rpb25zLWRlbGV0ZS1kaWFsb2cvc2VjdXJpdHktcXVlc3Rpb25zLWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuOyBUaXRsZTogIEJvYidzIENvbXB1dGVyXG47IEF1dGhvcjogRG9uIENvdXNhclxuOyBEYXRlOiAgIDI4IE9jdG9iZXIgMjAxOVxuOyBEZXNjcmlwdGlvbjogQm9iJ3MgQ29tcHV0ZXJcbjs9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4qL1xucCB7IGNvbG9yOiByZWQgfSJdfQ== */");
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
            /* harmony default export */ __webpack_exports__["default"] = ("/*\n============================================\n; Title:  Bob's Computer\n; Author: Don Cousar\n; Date:   28 October 2019\n; Description: Bob's Computer\n;===========================================\n*/\ntable {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VjdXJpdHktcXVlc3Rpb25zL3NlY3VyaXR5LXF1ZXN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0NBT0M7QUFDRDtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlY3VyaXR5LXF1ZXN0aW9ucy9zZWN1cml0eS1xdWVzdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuOyBUaXRsZTogIEJvYidzIENvbXB1dGVyXG47IEF1dGhvcjogRG9uIENvdXNhclxuOyBEYXRlOiAgIDI4IE9jdG9iZXIgMjAxOVxuOyBEZXNjcmlwdGlvbjogQm9iJ3MgQ29tcHV0ZXJcbjs9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4qL1xudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */");
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
        /***/ "./src/app/pages/server-error/server-error.component.css": 
        /*!***************************************************************!*\
          !*** ./src/app/pages/server-error/server-error.component.css ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".server-error-card {\n    width: 100%;\n    height: 100%;\n  }\n  \n  .message {\n    width: 100%;\n    height: 100%;\n  }\n  \n  .server-error-message {\n    width: 100%;\n    height: 100%;\n    color: #5dbcd2;\n    text-align: center;\n    font-size: 120px;\n  }\n  \n  .subtext {\n    width: 100%;\n    height: 100%;\n    color: white;\n    text-align: center;\n    font-size: 40px;\n  }\n  \n  mat-button-wrapper {\n    text-align: center;\n  }\n  \n  .wrapper {\n    text-align: center;\n    width: 100%;\n  }\n  \n  .button {\n    width: 100%;\n    text-align: center;\n  }\n  \n  a {\n    color: #fff;\n    text-transform: uppercase;\n    text-decoration: none;\n    text-align: center;\n  }\n  \n  mat-button {\n    text-align: center;\n    width: 100%;\n  }\n  \n  button{\n      width: 30%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VydmVyLWVycm9yL3NlcnZlci1lcnJvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztFQUNiOztFQUNBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjs7RUFDQTtJQUNFLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjs7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7O0VBRUE7TUFDSSxVQUFVO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZXJ2ZXItZXJyb3Ivc2VydmVyLWVycm9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VydmVyLWVycm9yLWNhcmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgLm1lc3NhZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgLnNlcnZlci1lcnJvci1tZXNzYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29sb3I6ICM1ZGJjZDI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTIwcHg7XG4gIH1cbiAgXG4gIC5zdWJ0ZXh0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cbiAgbWF0LWJ1dHRvbi13cmFwcGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLndyYXBwZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgYSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIG1hdC1idXR0b24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgYnV0dG9ue1xuICAgICAgd2lkdGg6IDMwJTtcbiAgfSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/server-error/server-error.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/pages/server-error/server-error.component.ts ***!
          \**************************************************************/
        /*! exports provided: ServerErrorComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function () { return ServerErrorComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /*
            ============================================
            ; Title:  Bob's Computer
            ; Author: Alan Edwards
            ; Date:   31 October 2019
            ; Description: Bob's Computer
            ;===========================================
            */
            var ServerErrorComponent = /** @class */ (function () {
                function ServerErrorComponent() {
                }
                ServerErrorComponent.prototype.ngOnInit = function () {
                };
                return ServerErrorComponent;
            }());
            ServerErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-server-error',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./server-error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/server-error/server-error.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./server-error.component.css */ "./src/app/pages/server-error/server-error.component.css")).default]
                })
            ], ServerErrorComponent);
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
            /* harmony default export */ __webpack_exports__["default"] = ("/*\n============================================\n; Title:  Bob's Computer Signup\n; Authors: Don Cousar / Alan Edwards\n; Date:   30 October 2019\n; Description: Bob's Computer\n;===========================================\n*/\nmat-card-actions button {\n    width: 48%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0NBT0M7QUFDRDtJQUNJLFVBQVU7RUFDWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuOyBUaXRsZTogIEJvYidzIENvbXB1dGVyIFNpZ251cFxuOyBBdXRob3JzOiBEb24gQ291c2FyIC8gQWxhbiBFZHdhcmRzXG47IERhdGU6ICAgMzAgT2N0b2JlciAyMDE5XG47IERlc2NyaXB0aW9uOiBCb2IncyBDb21wdXRlclxuOz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiovXG5tYXQtY2FyZC1hY3Rpb25zIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDQ4JTtcbiAgfSJdfQ== */");
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
                    //STEP 1 Validate all Fields    
                    this.validateFields();
                    //STEP 2: Build array of security questions and answers, if user answered all questions
                    if (this.secQuestion1 &&
                        this.secQuestion2 &&
                        this.secQuestion3 &&
                        this.secAnswer1 &&
                        this.secAnswer2 &&
                        this.secAnswer3) {
                        this.pushQuestionArr(this.secQuestion1, this.secAnswer1);
                        this.pushQuestionArr(this.secQuestion2, this.secAnswer2);
                        this.pushQuestionArr(this.secQuestion3, this.secAnswer3);
                    }
                    //Write array of security questions to console
                    console.log(this.securityQuestions);
                    //STEP 3: Verify user completed all required fields
                    if (this.FirstName &&
                        this.LastName &&
                        this.Address &&
                        this.PhoneNumber &&
                        this.Email &&
                        this.Username &&
                        this.Password &&
                        this.ConfirmPassword &&
                        this.secQuestion1 &&
                        this.secQuestion2 &&
                        this.secQuestion3 &&
                        this.secAnswer1 &&
                        this.secAnswer2 &&
                        this.secAnswer3) {
                        //User completed form in full so attempt registration
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
                    }
                    else {
                        this.passMessage('Error: Please fill out all required fields');
                        return;
                    }
                }; //END REGISTER FUNCTION
                /**
                 * Get question text for a particular ID
                 * @param id - ID from security questions collection
                 */
                SignupComponent.prototype.pushQuestionArr = function (id, answer) {
                    var _this = this;
                    var quest;
                    //Call Jordan's API to get question by id
                    this.http.get('/api/securityQuestions/' + id).subscribe(function (res) {
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
                SignupComponent.prototype.fnBlur = function () {
                    if (this.FirstName.length < 1) {
                        this.passMessage('broke');
                    }
                };
                SignupComponent.prototype.ngOnInit = function () {
                    this.form = this.fb.group({
                        firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                        lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                        address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                        phoneNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                        email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                        username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                        password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)])],
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
            /* harmony default export */ __webpack_exports__["default"] = ("/*\n============================================\n; Title:  Bob's Computer\n; Author: Jordan Hennessy\n; Date:   25 October 2019\n; Description: Bob's Computer\n;===========================================\n*/\n\nmat-card-actions button {\n  width: 48%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0NBT0M7O0FBRUQ7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbjsgVGl0bGU6ICBCb2IncyBDb21wdXRlclxuOyBBdXRob3I6IEpvcmRhbiBIZW5uZXNzeVxuOyBEYXRlOiAgIDI1IE9jdG9iZXIgMjAxOVxuOyBEZXNjcmlwdGlvbjogQm9iJ3MgQ29tcHV0ZXJcbjs9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4qL1xuXG5tYXQtY2FyZC1hY3Rpb25zIGJ1dHRvbiB7XG4gIHdpZHRoOiA0OCU7XG59XG4iXX0= */");
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
            /* harmony default export */ __webpack_exports__["default"] = ("/*\n============================================\n; Title:  Bob's Computer\n; Author: Don Cousar\n; Date:   23 October 2019\n; Description: Bob's Computer\n;===========================================\n*/\np { color: red }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1tYW5hZ2VtZW50LWRlbGV0ZS1kaWFsb2cvdXNlci1tYW5hZ2VtZW50LWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztDQU9DO0FBQ0QsSUFBSSxXQUFXIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlci1tYW5hZ2VtZW50LWRlbGV0ZS1kaWFsb2cvdXNlci1tYW5hZ2VtZW50LWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuOyBUaXRsZTogIEJvYidzIENvbXB1dGVyXG47IEF1dGhvcjogRG9uIENvdXNhclxuOyBEYXRlOiAgIDIzIE9jdG9iZXIgMjAxOVxuOyBEZXNjcmlwdGlvbjogQm9iJ3MgQ29tcHV0ZXJcbjs9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4qL1xucCB7IGNvbG9yOiByZWQgfSJdfQ== */");
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
            /* harmony default export */ __webpack_exports__["default"] = ("/*\n============================================\n; Title:  Bob's Computer\n; Author: Don Cousar\n; Date:   23 October 2019\n; Description: Bob's Computer\n;===========================================\n*/\ntable {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0NBT0M7QUFDRDtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuOyBUaXRsZTogIEJvYidzIENvbXB1dGVyXG47IEF1dGhvcjogRG9uIENvdXNhclxuOyBEYXRlOiAgIDIzIE9jdG9iZXIgMjAxOVxuOyBEZXNjcmlwdGlvbjogQm9iJ3MgQ29tcHV0ZXJcbjs9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4qL1xudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */");
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
        /***/ "./src/app/pages/verify-questions/verify-questions.component.css": 
        /*!***********************************************************************!*\
          !*** ./src/app/pages/verify-questions/verify-questions.component.css ***!
          \***********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("mat-card {\n  width: 30%;\n}\n\n\n\nmat-card-actions {\n  width: 95%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmVyaWZ5LXF1ZXN0aW9ucy92ZXJpZnktcXVlc3Rpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1o7Ozs7QUFJQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlcmlmeS1xdWVzdGlvbnMvdmVyaWZ5LXF1ZXN0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xuICB3aWR0aDogMzAlO1xufVxuXG5cblxubWF0LWNhcmQtYWN0aW9ucyB7XG4gIHdpZHRoOiA5NSU7XG59XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/verify-questions/verify-questions.component.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/pages/verify-questions/verify-questions.component.ts ***!
          \**********************************************************************/
        /*! exports provided: VerifyQuestionsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyQuestionsComponent", function () { return VerifyQuestionsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /*
            ============================================
            ; Title:  verify-questions.component.ts
            ; Author: Professor Krasso
            ; Date:   3 November 2019
            ; Modified By: Jordan Hennessy
            ; Description: Bob's Computer
            ;===========================================
            */
            var VerifyQuestionsComponent = /** @class */ (function () {
                function VerifyQuestionsComponent(route, router, http, fb) {
                    var _this = this;
                    this.route = route;
                    this.router = router;
                    this.http = http;
                    this.fb = fb;
                    this.username = this.route.snapshot.queryParamMap.get('username');
                    console.log(this.username);
                    this.http.get('/api/users/' + this.username + '/security-questions').subscribe(function (res) {
                        _this.selectedSecurityQuestions = res;
                        _this.question1 = _this.selectedSecurityQuestions[0].questionText;
                        _this.question2 = _this.selectedSecurityQuestions[1].questionText;
                        _this.question3 = _this.selectedSecurityQuestions[2].questionText;
                        console.log(_this.selectedSecurityQuestions);
                        console.log(_this.question3);
                    }, function (err) {
                        console.log(err);
                    });
                }
                VerifyQuestionsComponent.prototype.ngOnInit = function () {
                    this.form = this.fb.group({
                        answerToSecurityQuestion1: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                        answerToSecurityQuestion2: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                        answerToSecurityQuestion3: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                    });
                };
                VerifyQuestionsComponent.prototype.verifySecurityQuestions = function () {
                    var _this = this;
                    var answerToSecurityQuestion1 = this.form.controls['answerToSecurityQuestion1'].value;
                    var answerToSecurityQuestion2 = this.form.controls['answerToSecurityQuestion2'].value;
                    var answerToSecurityQuestion3 = this.form.controls['answerToSecurityQuestion3'].value;
                    this.http.post('/api/verify/users/' + this.username + '/security-questions', {
                        answerToSecurityQuestion1: answerToSecurityQuestion1,
                        answerToSecurityQuestion2: answerToSecurityQuestion2,
                        answerToSecurityQuestion3: answerToSecurityQuestion3
                    }).subscribe(function (res) {
                        if (res['auth']) {
                            _this.router.navigate(['/session/reset-password'], { queryParams: { isAuthenticated: 'true', username: _this.username }, skipLocationChange: true });
                        }
                        else {
                            console.log('Unable to verify security question answers');
                        }
                    });
                };
                return VerifyQuestionsComponent;
            }());
            VerifyQuestionsComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
            ]; };
            VerifyQuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-verify-questions',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./verify-questions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verify-questions/verify-questions.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./verify-questions.component.css */ "./src/app/pages/verify-questions/verify-questions.component.css")).default]
                })
            ], VerifyQuestionsComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/verify-user/verify-user.component.css": 
        /*!*************************************************************!*\
          !*** ./src/app/pages/verify-user/verify-user.component.css ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("mat-card {\n  width: 30%;\n}\n\n\n\nmat-card-actions {\n  width: 95%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmVyaWZ5LXVzZXIvdmVyaWZ5LXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWjs7OztBQUlBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdmVyaWZ5LXVzZXIvdmVyaWZ5LXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcbiAgd2lkdGg6IDMwJTtcbn1cblxuXG5cbm1hdC1jYXJkLWFjdGlvbnMge1xuICB3aWR0aDogOTUlO1xufVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/pages/verify-user/verify-user.component.ts": 
        /*!************************************************************!*\
          !*** ./src/app/pages/verify-user/verify-user.component.ts ***!
          \************************************************************/
        /*! exports provided: VerifyUserComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyUserComponent", function () { return VerifyUserComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /*
            ============================================
            ; Title:  verify-user.component.ts
            ; Author: Professor Krasso
            ; Date:   3 November 2019
            ; Modified By: Jordan Hennessy
            ; Description: Bob's Computer
            ;===========================================
            */
            var VerifyUserComponent = /** @class */ (function () {
                function VerifyUserComponent(http, fb, router) {
                    this.http = http;
                    this.fb = fb;
                    this.router = router;
                }
                VerifyUserComponent.prototype.ngOnInit = function () {
                    this.form = this.fb.group({
                        username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
                    });
                };
                VerifyUserComponent.prototype.validateUsername = function () {
                    var _this = this;
                    var username = this.form.controls['username'].value;
                    this.http.get('/api/verify/users/' + username).subscribe(function (res) {
                        if (res) {
                            _this.router.navigate(['/session/verify-questions'], { queryParams: { username: username }, skipLocationChange: true });
                        }
                    }, function (err) {
                        console.log(err);
                    });
                };
                return VerifyUserComponent;
            }());
            VerifyUserComponent.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            VerifyUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-verify-user',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./verify-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verify-user/verify-user.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./verify-user.component.css */ "./src/app/pages/verify-user/verify-user.component.css")).default]
                })
            ], VerifyUserComponent);
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
            /* harmony default export */ __webpack_exports__["default"] = ("/*\n============================================\n; Title:  Bob's Computer\n; Author: Jordan Hennessy\n; Date:   23 October 2019\n; Description: BobComputer Starter Code\n;===========================================\n*/\n\n#logo {\n  height: 50px;\n  width: auto;\n  vertical-align: middle;\n}\n\na {\n  color: #fff;\n  text-transform: uppercase;\n  text-decoration: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Jhc2UtbGF5b3V0L2Jhc2UtbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Q0FPQzs7QUFFRDtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvYmFzZS1sYXlvdXQvYmFzZS1sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuOyBUaXRsZTogIEJvYidzIENvbXB1dGVyXG47IEF1dGhvcjogSm9yZGFuIEhlbm5lc3N5XG47IERhdGU6ICAgMjMgT2N0b2JlciAyMDE5XG47IERlc2NyaXB0aW9uOiBCb2JDb21wdXRlciBTdGFydGVyIENvZGVcbjs9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4qL1xuXG4jbG9nbyB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmEge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIl19 */");
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
        /***/ "./src/app/shared/route-interceptors/error.interceptor.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/shared/route-interceptors/error.interceptor.ts ***!
          \****************************************************************/
        /*! exports provided: ErrorInterceptor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () { return ErrorInterceptor; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /*
            ============================================
            ; Title:  Bob's Computer Signup
            ; Author: Alan Edwards
            ; Date:   31 October 2019
            ; Description: Bob's Computer
            ; Attribution: inspired by Professor Krasso @Bellevue University
            ;===========================================
            */
            var ErrorInterceptor = /** @class */ (function () {
                function ErrorInterceptor(cookieService, router) {
                    this.cookieService = cookieService;
                    this.router = router;
                }
                ErrorInterceptor.prototype.intercept = function (req, next) {
                    var _this = this;
                    return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
                        if ([404].indexOf(err.status) !== -1) {
                            _this.router.navigate(['/session/404']);
                        }
                        if ([500].indexOf(err.status) !== -1) {
                            _this.router.navigate(['/session/500']);
                        }
                        //Otherwise, catch the error and throw
                        var error = err.error.message || err.statusText;
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
                    }));
                };
                return ErrorInterceptor;
            }());
            ErrorInterceptor.ctorParameters = function () { return [
                { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], ErrorInterceptor);
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
            /* harmony default export */ __webpack_exports__["default"] = ("/*\n============================================\n; Title:  Bob's Computer\n; Author: Jordan Hennessy\n; Date:   23 October 2019\n; Description: BobComputer Starter Code\n;===========================================\n*/\n\n#logo {\n  height: 50px;\n  width: auto;\n  vertical-align: middle;\n}\n\na {\n  color: #fff;\n  text-transform: uppercase;\n  text-decoration: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Nlc3Npb24tbGF5b3V0L3Nlc3Npb24tbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Q0FPQzs7QUFFRDtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc2Vzc2lvbi1sYXlvdXQvc2Vzc2lvbi1sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuOyBUaXRsZTogIEJvYidzIENvbXB1dGVyXG47IEF1dGhvcjogSm9yZGFuIEhlbm5lc3N5XG47IERhdGU6ICAgMjMgT2N0b2JlciAyMDE5XG47IERlc2NyaXB0aW9uOiBCb2JDb21wdXRlciBTdGFydGVyIENvZGVcbjs9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4qL1xuXG4jbG9nbyB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmEge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIl19 */");
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
            module.exports = __webpack_require__(/*! /Users/jordanhennessy/bu-webdev/BobsComputer/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map