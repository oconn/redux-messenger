import { IAlert, IModal, IToast, IMessengerAction } from '../';

// Action Types
export const SHOW_ALERT   = 'MESSENGER_SHOW_ALERT';
export const REMOVE_ALERT = 'MESSENGER_REMOVE_ALERT';
export const ADD_MODAL    = 'MESSENGER_ADD_MODAL';
export const REMOVE_MODAL = 'MESSENGER_REMOVE_MODAL';
export const CLEAR_MODALS = 'MESSENGER_CLEAR_MODALS';
export const ADD_TOAST    = 'MESSENGER_ADD_TOAST';
export const REMOVE_TOAST = 'MESSENGER_REMOVE_TOAST';
export const CLEAR_TOASTS = 'MESSENGER_CLEAR_TOASTS';

// Actions
export const showAlert = (alert: IAlert): IMessengerAction => ({
    type: SHOW_ALERT,
    payload: alert
});

export const clearAlert = (): IMessengerAction => ({ type: REMOVE_ALERT });

export const addModal = (modal: IModal): IMessengerAction => ({
    type: ADD_MODAL,
    payload: modal
});

export const removeModal = (): IMessengerAction => ({ type: REMOVE_MODAL });

export const clearModals = (): IMessengerAction => ({ type: CLEAR_MODALS });

export const addToast = (toast: IToast): IMessengerAction => ({
    type: ADD_TOAST,
    payload: toast
});

export const removeToast = (): IMessengerAction => ({ type: REMOVE_TOAST });

export const clearToasts = (): IMessengerAction => ({ type: CLEAR_TOASTS });
