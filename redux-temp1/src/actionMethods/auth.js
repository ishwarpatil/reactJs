import {LOGIN, LOGOUT} from './../reducers/auth'
import {TASK} from './../reducers/task'
import {FORM,CITY} from './../reducers/form'
import {DISPLAY,DELETE,EDIT} from './../reducers/display'
import axios from 'axios';
export const login = (info) => {
    debugger;
    return (dispatch) => {
        debugger;
        localStorage.setItem('authUser', info);
        dispatch({
            type: LOGIN,
            payload: info
        });
    }
};
export const logout = () => {
    return (dispatch) => {
        localStorage.setItem('authUser', null);
        dispatch({
            type: LOGOUT
        });
    }
};

export const task = (info) => {
    return (dispatch) => {
        dispatch({
            type: TASK,
            payload: info
        });
    }
};

export const formData = (info) => {
    debugger;
    return (dispatch) => {
        axios.post('http://localhost:8080/insert', info).then((data) => {
            dispatch({
                type: FORM,
                payload: info
            })
        }).catch((err) => {
            console.log(err);
        });
    }
};

export const displayData = (info) => {
    debugger;
    return (dispatch) => {
        axios.get('http://localhost:8080/display').then((result) => {
            debugger;
            dispatch({
                type: DISPLAY,
                payload: result.data
            })
        }).catch((err) => {
            console.log(err);
        });
    }
};

export const allCity = (info) => {
    debugger;
    return (dispatch) => {
        axios.get('http://localhost:8080/display/city').then((result) => {
            debugger;
            dispatch({
                type:CITY,
                payload: result.data
            })
        }).catch((err) => {
            console.log(err);
        });
    }
};

export const deleteData = (info) => {
    debugger;
    return (dispatch) => {
        axios.post('http://localhost:8080/delete',{info}).then((result) => {
            dispatch({
                type: DELETE,
                payload: info
            })
        }).catch((err) => {
            console.log(err);
        });
    }
};

export const editData = (info) => {
    debugger;
    return (dispatch) => {
        axios.post('http://localhost:8080/update',info).then((result) => {
            dispatch({
                type: EDIT,
                payload: info
            })
        }).catch((err) => {
            console.log(err);
        });
    }
};