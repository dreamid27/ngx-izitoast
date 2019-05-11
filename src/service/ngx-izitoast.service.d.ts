import { NgxIzitoastModel } from "../model/ngx-izitoast.model";
export declare class NgxIzitoastService {
    private toastConfigQuestion;
    constructor();
    show(data: NgxIzitoastModel): NgxIzitoastModel;
    info(data: NgxIzitoastModel): NgxIzitoastModel;
    success(data: NgxIzitoastModel): NgxIzitoastModel;
    warning(data: NgxIzitoastModel): NgxIzitoastModel;
    error(data: NgxIzitoastModel): NgxIzitoastModel;
    question(data: NgxIzitoastModel): Object & NgxIzitoastModel;
    progress(iziToastClass: string): {
        reset: () => void;
        pause: () => void;
        resume: () => void;
        start: () => void;
    };
    hide(iziToastClass: string, options?: NgxIzitoastModel): void;
    destroy(): void;
    settings(data: NgxIzitoastModel): NgxIzitoastModel;
}
