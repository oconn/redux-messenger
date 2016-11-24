import { createElement as ce } from 'react';
import { IToastComponentProps } from '../';

export const ToastComponent = (props: IToastComponentProps) => {
    const { toast, removeToast } = props;

    if (!toast) { return ce('div'); }

    const { message, type, timer } = toast;

    window.setTimeout(() => {
        removeToast();
    }, timer || 2000);

    return ce('div', { className: 'toast-container' },
              ce('p', { className: `toast-message ${type ? type : ''}` }, message));
};
