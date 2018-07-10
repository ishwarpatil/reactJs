import actions from './../actions/actiontypes';

const users = (state = [], action) => {
    switch (action.type) {
        case actions.GET_USER:
            return action.payload;
        default:
            return state
    }
};

export default users;