export default (state=[],action)=>{
    switch(action.type){
        case "LOGIN":
            return action.payload;
        case "LOGOUT":
            console.log("in reducer log out");
            return action.payload;
        default:
            return state;
    }
}