import { IAppState, IMessengerState, IAlert, IModal, IToast, IMessengerStateActive } from '../';
import { head } from 'ramda';

export const getAlert = (state: IAppState): IAlert | null => {
    return state.messenger.alert;
};

export const getActiveModal = (state: IAppState): IModal | undefined => {
    return head(state.messenger.modals);
};

export const getActiveToast = (state: IAppState): IToast | undefined => {
    return head(state.messenger.toasts);
};

export const getMessengerState = (state: IAppState): IMessengerStateActive => {
    const { messenger: { alert, modals, toasts } } = state;

    return {
        alert,
        modal: head(modals),
        toast: head(toasts)
    };
};
