import {combineReducers} from 'redux';
import loginReducer from './reducer-login';
import userReducer from './reducer-user';
import todoReducer from './reducer-todos';
import albumReducer from './reducer-album';

var allReducers=combineReducers({
    loginResponse:loginReducer,
    users:userReducer,
    todos:todoReducer,
    albums:albumReducer
});
export default allReducers;