import {combineReducers} from 'redux';
import users from './user';
import auth from './auth';

const reducer = combineReducers({users,auth});

export default reducer;