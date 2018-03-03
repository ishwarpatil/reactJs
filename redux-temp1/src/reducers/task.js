import _ from 'lodash';

export const TASK='task';
const initialState={
    tasks:[]
};

export default (state=initialState,action)=>{
    switch (action.type){
        case TASK:
            const {tasks} = state;
            tasks.push(action.payload);
            return { ...state,tasks:_.cloneDeep(tasks)};
        default:
            return state;
    }
}
