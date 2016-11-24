import { createElement as ce } from 'react';
import { IAlertComponentProps } from '../';

export const AlertComponent = (props: IAlertComponentProps) => {
    const { alert, clearAlert } = props;

    if (!alert) { return ce('div'); }

    const { title, message, onAccept, onAcceptText, onDecline, onDeclineText } = alert;

    const alertTitle = title ? ce('p', { className: 'alert-title' }, title) : ce('p');
    const alertMessage = ce('p', { className: 'alert-message' }, message);

    const acceptButton = ce('button', {
        className: 'alert-button, accept',
        onClick: () => {
            clearAlert();

            if (onAccept) { onAccept(); }
        }
    }, onAcceptText || 'confirm');

    const declineButton = ce('button', {
        className: 'alert-button decline',
        onClick: () => {
            clearAlert();

            if (onDecline) { onDecline(); }
        }
    }, onDeclineText || 'cancel');

    const buttons = onDecline ? [acceptButton, declineButton] : acceptButton;

    return ce('div', { className: 'underlay' },
              ce('div', { className: 'alert-container' },
                 alertTitle,
                 alertMessage,
                 buttons));
};
