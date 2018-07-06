import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import Users from './usersReducers';
import Auth from './authReducer';

export default combineReducers({Users,Auth,routerReducer});
