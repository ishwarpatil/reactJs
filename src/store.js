import {applyMiddleware, createStore, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import browserHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';

import indexReducer from './reducers/indexReducer';

export const history = browserHistory();
const enhancers = [];

const middleware = [
    thunk,
    routerMiddleware(history),
];
if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}
const composeEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);
export default createStore(indexReducer, composeEnhancers);