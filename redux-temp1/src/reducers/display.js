import _ from 'lodash';

export const DISPLAY='display';
export const DELETE='delete';
const initialState={
    allData:[],
    getId:[]
};

export default (state=initialState,action)=>{
    switch (action.type){
        case DISPLAY:
            const {allData} = state;
            debugger
            return {
                ...state,
                allData:action.payload
            };
        case DELETE:
            debugger;
            const data = state.allData;
            const index = _.findIndex(data, { '_id': action.payload});
            data.splice(index,1);
            return { ...state,allData:_.cloneDeep(data)};
        default:
            return state;
    }
}