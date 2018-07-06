import axios from 'axios';
import {USERS} from '../reducers/usersReducers';

export const UsersData = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            dispatch({
                type: USERS,
                payload: response.data
            })
        }).catch((err) => {
            console.log(err);
        });
    }
};