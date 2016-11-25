import { createElement as ce } from 'react';
import { IToastComponentProps } from '../';

export const ToastComponent = (props: IToastComponentProps) => {
    const { toast, removeToast } = props;

    if (!toast) { return ce('div'); }

    const { message, type, timer } = toast;

    if (!this.closeToastId) {
        this.closeToastId = window.setTimeout(() => {
            this.closeToastId = null;

            removeToast();
        }, timer || 2000);
    }

    return ce('div', { className: 'toast-container' },
              ce('p', { className: `toast-message ${type ? type : ''}` }, message));
};
