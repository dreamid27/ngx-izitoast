import { Injectable, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgxIzitoastService {
    constructor() {
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
    show(data) {
        iziToast.show(data);
        return data;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    info(data) {
        iziToast.info(data);
        return data;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    success(data) {
        iziToast.success(data);
        return data;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    warning(data) {
        iziToast.warning(data);
        return data;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    error(data) {
        iziToast.error(data);
        return data;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    question(data) {
        let /** @type {?} */ iziToastConfig = Object.assign({}, this.toastConfigQuestion, data);
        iziToast.question(iziToastConfig);
        return iziToastConfig;
    }
    /**
     * @param {?} iziToastClass
     * @return {?}
     */
    progress(iziToastClass) {
        let /** @type {?} */ toast = document.querySelector(iziToastClass);
        return {
            reset: () => {
                setTimeout(() => {
                    iziToast.progress(toast).reset();
                }, 100);
            },
            pause: () => {
                setTimeout(() => {
                    iziToast.progress(toast).pause();
                }, 100);
            },
            resume: () => {
                setTimeout(() => {
                    iziToast.progress(toast).resume();
                }, 100);
            },
            start: () => {
                setTimeout(() => {
                    iziToast.progress(toast).start();
                }, 100);
            }
        };
    }
    /**
     * @param {?} iziToastClass
     * @param {?=} options
     * @return {?}
     */
    hide(iziToastClass, options = null) {
        let /** @type {?} */ toast = document.querySelector(iziToastClass);
        iziToast.hide(toast, options);
    }
    /**
     * @return {?}
     */
    destroy() {
        iziToast.destroy();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    settings(data) {
        iziToast.settings(data);
        return data;
    }
}
NgxIzitoastService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NgxIzitoastService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgxIziToastModule {
}
NgxIziToastModule.decorators = [
    { type: NgModule, args: [{
                providers: [NgxIzitoastService]
            },] },
];
/** @nocollapse */
NgxIziToastModule.ctorParameters = () => [];

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
//# sourceMappingURL=ngx-izitoast.js.map
