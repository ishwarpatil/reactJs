import {combineReducers} from 'redux';
import auth from './auth';
import task from './task';
import city from './form';
import display from './display';

export default combineReducers({auth,task,city,display});
