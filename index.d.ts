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
    onAccept?: () => any;
    onAcceptText?: string;
    onDecline?: () => any;
    onDeclineText?: string;
    title?: string;
    message: string;
}

export interface IModal {
    title?: string;
    onClose?: () => any;
    Component: any;
    props?: any;
}

export interface IToast {
    messege: string;
    type?: string;
}

export interface IModalComponentProps {
    modal?: IModal;
    onClose: () => any;
}

export interface IAlertComponentProps {
    alert?: IAlert;
    clearAlert: () => void;
}
