export type MessengerReducer = (state: IMessengerState, action: IMessengerAction) => IMessengerState;

export interface IAppState {
    messenger: IMessengerState;
}

export interface IMessengerStateActive {
    alert: IAlert | null;
    modal: IModal | undefined;
    toast: IToast | undefined;
}

export interface IMessengerState {
    alert: IAlert | null;
    modals: IModal[];
    toasts: IToast[];
}

export interface IMessengerAction {
    type: string;
    payload?: IAlert | IModal | IToast
}

export interface IAlert {

}

export interface IModal {

}

export interface IToast {

}
