import _ from 'lodash';

export const FORM='form';
export const CITY='city';
const initialState={
    data:[],
    allCity:[]
};

export default (state=initialState,action)=>{
    switch (action.type){
        case FORM:
            debugger;
            const {data} = state;
            data.push(action.payload);
            return { ...state,data:_.cloneDeep(data)};
        case CITY:
            const {allCity} = state;
            debugger
            return {
                ...state,
                allCity:action.payload
            };
        default:
            return state;
    }
}