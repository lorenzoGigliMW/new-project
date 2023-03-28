import {
    TASKS_FETCH_ADD, TASKS_FETCH_CANCEL, TASKS_FETCH_FULFILLED, TASKS_FETCH_REJECTED, TASKS_FETCH_EDIT, TASKS_FETCH_TOGGLED, TASKS_FETCH_SEEALL
} from '../actions/todos';
//import App from '../../../src/App'
// export const selectors = {       ///////////////////////////////////////////////
//     tasks: state => App.state.tasks,//state,
//     fetchStatus: state => state.fetchStatus
// };
// const tasks=[];
// const task=''
// const completed=false;

const initialState = {
    tasks: [],
    fetchStatus: ''
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case TASKS_FETCH_ADD:          
            return {
                ...state,
                tasks: [...tasks, action.task],
                fetchStatus: `todo add`
            };
        case TASKS_FETCH_FULFILLED:
            return {
                ...state,
                tasks: action.data,
                fetchStatus: `Results from ${(new Date()).toLocaleString()}`,

            };
        case TASKS_FETCH_REJECTED:
            return {
                ...state,
                fetchStatus: `errored: reject`
            };
        case TASKS_FETCH_CANCEL:
            return {
                ...state,
                tasks: [...tasks].filter((elem) => elem.id != action.id),
                fetchStatus: 'todo cancelled'
            };
        case TASKS_FETCH_EDIT:
            return {
                ...state,
                tasks: [  {...task, name:action.newName }].filter((elem) => elem.id === action.id),
                fetchStatus: `todo edit`
            };
        case TASKS_FETCH_TOGGLED:
            return {
                ...state,
                tasks: [...tasks,{completed:!completed}].filter((elem) => elem.id === action.id),
                fetchStatus: `todo toggled`
            };
        case TASKS_FETCH_SEEALL:
            return {
                ...state,
              tasks:[...tasks,...{completed: true}],
                fetchStatus: `todo all change completed`
                
            };
        default:
            return state;
    }
    
}