import {LOGIN} from '../reducers/authReducer';

export const login = (info) => {
    return (dispatch) => {
        if(info.username!=='' && info.username==='admin'){
            if(info.password!=='' && info.password==='admin'){
                localStorage.setItem('authUser', info.username);
                dispatch({
                    type: LOGIN,
                    payload: {message:'Success'}
                })
            }else {
                dispatch({
                    type: LOGIN,
                    payload: {message:'Fail'}
                })
            }
        }
        else{
            dispatch({
                type: LOGIN,
                payload: {message:'Fail'}
            })
        }
    }
};