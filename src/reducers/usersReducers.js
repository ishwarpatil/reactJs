import _ from 'lodash';

export const USERS = 'USERS';

const initialState = {
    usersData: [],
};
export default (state = initialState, action) => {
    switch (action.type) {
        case USERS:
            return {...state, usersData: _.cloneDeep(action.payload)};
        default:
            return state;
    }
};