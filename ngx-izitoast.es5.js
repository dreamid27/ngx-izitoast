import { Injectable, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxIzitoastService = (function () {
    function NgxIzitoastService() {
        this.toastConfigQuestion = {
            timeout: 20000,
            close: false,
            overlay: true,
            toastOnce: true,
            id: 'question',
            zindex: 999,
            title: 'Hey',
            message: 'Are you sure about that?',
            position: 'center',
            buttons: [
                ['<button><b>YES</b></button>', function (instance, toast) {
                        instance.hide(toast, { transitionOut: 'fadeOut' }, 'button');
                    }, true],
                ['<button>NO</button>', function (instance, toast) {
                        instance.hide(toast, { transitionOut: 'fadeOut' }, 'button');
                    }]
            ],
            onClosing: function (instance, toast, closedBy) {
                console.info('Closing | closedBy: ' + closedBy);
            },
            onClosed: function (instance, toast, closedBy) {
                console.info('Closed | closedBy: ' + closedBy);
            }
        };
    }
    /**
     * @param {?} data
     * @return {?}
     */
    NgxIzitoastService.prototype.show = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        iziToast.show(data);
        return data;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    NgxIzitoastService.prototype.info = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        iziToast.info(data);
        return data;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    NgxIzitoastService.prototype.success = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        iziToast.success(data);
        return data;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    NgxIzitoastService.prototype.warning = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        iziToast.warning(data);
        return data;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    NgxIzitoastService.prototype.error = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        iziToast.error(data);
        return data;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    NgxIzitoastService.prototype.question = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var /** @type {?} */ iziToastConfig = Object.assign({}, this.toastConfigQuestion, data);
        iziToast.question(iziToastConfig);
        return iziToastConfig;
    };
    /**
     * @param {?} iziToastClass
     * @return {?}
     */
    NgxIzitoastService.prototype.progress = /**
     * @param {?} iziToastClass
     * @return {?}
     */
    function (iziToastClass) {
        var /** @type {?} */ toast = document.querySelector(iziToastClass);
        return {
            reset: function () {
                setTimeout(function () {
                    iziToast.progress(toast).reset();
                }, 100);
            },
            pause: function () {
                setTimeout(function () {
                    iziToast.progress(toast).pause();
                }, 100);
            },
            resume: function () {
                setTimeout(function () {
                    iziToast.progress(toast).resume();
                }, 100);
            },
            start: function () {
                setTimeout(function () {
                    iziToast.progress(toast).start();
                }, 100);
            }
        };
    };
    /**
     * @param {?} iziToastClass
     * @param {?=} options
     * @return {?}
     */
    NgxIzitoastService.prototype.hide = /**
     * @param {?} iziToastClass
     * @param {?=} options
     * @return {?}
     */
    function (iziToastClass, options) {
        if (options === void 0) { options = null; }
        var /** @type {?} */ toast = document.querySelector(iziToastClass);
        iziToast.hide(toast, options);
    };
    /**
     * @return {?}
     */
    NgxIzitoastService.prototype.destroy = /**
     * @return {?}
     */
    function () {
        iziToast.destroy();
    };
    /**
     * @param {?} data
     * @return {?}
     */
    NgxIzitoastService.prototype.settings = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        iziToast.settings(data);
        return data;
    };
    NgxIzitoastService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NgxIzitoastService.ctorParameters = function () { return []; };
    return NgxIzitoastService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxIziToastModule = (function () {
    function NgxIziToastModule() {
    }
    NgxIziToastModule.decorators = [
        { type: NgModule, args: [{
                    providers: [NgxIzitoastService]
                },] },
    ];
    /** @nocollapse */
    NgxIziToastModule.ctorParameters = function () { return []; };
    return NgxIziToastModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { NgxIzitoastService, NgxIziToastModule };
//# sourceMappingURL=ngx-izitoast.es5.js.map
