# `redux-messenger`

## Getting Started

### Install

`npm install -S redux-messenger`

### Setup

#### Add messenger reducer

To add the `redux-messenger` reducer to your project, import the reducer module and combine it with your other reducers.

```js
import { combineReducers } from 'redux'
import todos from './todos'
import counter from './counter'
import { reducer as messenger } from 'redux-messenger' // <- IMPORT REDUCER

export default combineReducers({
  todos,
  counter,
  messenger // <- ADD REDUCER
})
```

#### Add UI Components

The UI components (`AlertComponent`, `ModalComponent`, and `ToastComponent`) can be imported anywere in you application and are responsible for displaying messages to your users. Here is an example of integrating `redux-messenger` using `react-redux`.

```js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    AlertComponent,
    ModalComponent,
    ToastComponent,
    clearAlert,
    removeModal,
    removeToast,
    getMessengerState
} from 'redux-messenger';

const App = (props) => {
    const { actions, messengerState } = props;

    return (
        <div>
            <AlertComponent clearAlert={actions.clearAlert}
                            alert={messengerState.alert} />

            <ModalComponent onClose={actions.removeModal}
                            modal={messengerState.modal} />

            <ToastComponent removeToast={actions.removeToast}
                            toast={messengerState.toast} />
        </div>
    );
}

const mapStateToProps = (state) =>  {
    return {
        messengerState: getMessengerState(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            clearAlert,
            removeModal,
            removeToast
        }, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
```
