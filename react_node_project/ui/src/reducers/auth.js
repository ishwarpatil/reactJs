import {LOGIN,LOGOUT, LOGIN_ERROR} from './../actions/actiontypes';

const initialState={
    authUser:localStorage.getItem('user'),
    error:''
};

const auth = (state=initialState,action)=>{
    switch (action.type){
        case LOGIN :
            return {
                ...state,
                authUser:action.payload};

        case LOGOUT:
            return {
                ...state,
                authUser:null};
        case LOGIN_ERROR:
            return {
                ...state,
                error:action.payload
            };
        default:
            return state;
    }
};

export default auth;