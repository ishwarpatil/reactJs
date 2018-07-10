import actions from "./actiontypes";

export const loginUser = (user) => {
    return (dispatch) => {
        if (user.email === 'admin@admin.com' && user.password === 'password') {
            localStorage.setItem('user', user);
            dispatch({
                type: actions.LOGIN,
                payload: user
            });
        } else {
            dispatch({
                type: actions.LOGIN_ERROR,
                payload: 'invalid username or password'
            });
        }
    }
};

export const logoutUser = () => {
    return dispatch => {
        localStorage.clear();
        dispatch({type: actions.LOGOUT});
    }
};