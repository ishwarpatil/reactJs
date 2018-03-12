export const LOGIN='login';
export const LOGOUT='logout';
const initialState={
    user:localStorage.getItem('authUser') || null
};

export default (state=initialState,action)=>{
    switch (action.type){
        case LOGIN:
            debugger;
            return {...state,user:action.payload};
        case LOGOUT:
            return {...state,user:null};
        default:
            return state;
    }
}