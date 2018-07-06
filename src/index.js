import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';
import store, {history} from './store';
import {ThroughProvider} from 'react-through';

ReactDOM.render(
    <Provider store={store}>
        <ThroughProvider>
            <ConnectedRouter history={history}>
                <App/>
            </ConnectedRouter>
        </ThroughProvider>
    </Provider>
    , document.getElementById('root'));


