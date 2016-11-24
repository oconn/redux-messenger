import { IMessengerState, IMessengerAction, MessengerReducer } from '../';
import { append, identity, merge, tail } from 'ramda';
import * as Actions from './actions';

const initialState: IMessengerState = {
    alert: null,
    modals: [],
    toasts: []
};

const actionHandlers = {
    [Actions.SHOW_ALERT]: (state: IMessengerState, action: IMessengerAction) => {
        return merge(state, { alert: action.payload });
    },
    [Actions.REMOVE_ALERT]: (state: IMessengerState, action: IMessengerAction) => {
        return merge(state, { alert: null });
    },
    [Actions.ADD_MODAL]: (state: IMessengerState, action: IMessengerAction) => {
        console.log(append(action.payload, state.modals));
        return merge(state, { modals: append(action.payload, state.modals) });
    },
    [Actions.REMOVE_MODAL]: (state: IMessengerState, action: IMessengerAction) => {
        return merge(state, { modals: tail(state.modals) });
    },
    [Actions.CLEAR_MODALS]: (state: IMessengerState, action: IMessengerAction) => {
        return merge(state, { modals: [] });
    },
    [Actions.ADD_TOAST]: (state: IMessengerState, action: IMessengerAction) => {
        return merge(state, { toasts: append(action.payload, state.toasts) });
    },
    [Actions.REMOVE_TOAST]: (state: IMessengerState, action: IMessengerAction) => {
        return merge(state, { toasts: tail(state.toasts) });
    },
    [Actions.CLEAR_TOASTS]: (state: IMessengerState, action: IMessengerAction) => {
        return merge(state, { toasts: [] });
    }
};

export const reducer = (state: IMessengerState = initialState, action: IMessengerAction): IMessengerState => {
    const actionHandler: MessengerReducer = actionHandlers[action.type] || identity;

    return actionHandler(state, action);
};
