export default (state=[],action)=>{
    switch(action.type){
        case "FETCH_ALBUMS":
            console.log('in reducer');
            return action.albums;
        default:
            return state;
    }
}