import { createElement as ce, createFactory } from 'react';
import { IModalComponentProps } from '../';

export const ModalComponent = (props: IModalComponentProps) => {
    const { modal, onClose } = props;

    if (!modal) { return ce('div'); }

    const { title, props: modalProps, Component } = modal;

    const modalTitle = title ? ce('p', { className: 'modal-title' }, title) : ce('p');
    const CustomModal = createFactory(Component)(modalProps);

    return ce('div', { className: 'underlay' },
              ce('div', { className: 'modal-container' },
                 ce('button', { className: 'close-modal-button', onClick: onClose }),
                 modalTitle,
                 CustomModal));
};
