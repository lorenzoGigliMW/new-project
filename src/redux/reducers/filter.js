import { FILTER_ACTIVE, FILTER_ALL, FILTER_COMPLETED } from "../actions/filter";

const initialState = {
    filter: 'All',
    
};
 //const tasks= {store.tasks};
 // Object.assign
//  const anTasks = Object.assign({}, store.tasks)
export default function reducerFilter(state = initialState, action) {
    switch (action.type) {
        case FILTER_ALL:          
            return {
                ...state,
                filter:'All'

            };
        case FILTER_ACTIVE:
            return {
                ...state,
                filter:'Active'
               // tasks.filter((task) => !task.completed)
                
            };
        case FILTER_COMPLETED:
            return {
                ...state,
                filter:'Completed'
               // tasks.filter((task) => task.completed)
            };
       
        default:
            return state;
    }   
}