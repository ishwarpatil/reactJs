export default (state=[],action)=>{
    switch(action.type){
        case "FETCH_TODOS":
            console.log('in reducer');
            return action.todos;
        default:
            return state;
    }
}