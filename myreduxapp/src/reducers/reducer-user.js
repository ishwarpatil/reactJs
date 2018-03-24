export default (state=[],action)=>{
    switch(action.type){
        case "FETCH_USER":
            console.log('in reducer');
            return action.user;
        default:
            return state;
    }
}