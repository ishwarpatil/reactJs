import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/myapp';
import { createStore , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import allReducer from './reducers';
const store=createStore(allReducer,applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
