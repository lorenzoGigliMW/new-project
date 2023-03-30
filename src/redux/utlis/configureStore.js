import { configureStore } from '@reduxjs/toolkit'
import { combineReducers} from 'redux';
import todos from '../reducers/todos';
  const rootReducer = combineReducers({todos/*, filter: reducerFilter*/})


                                         //MIDDELWARE
const logger = store => (next) => {
    if (!console.group) {
      return next;
    }
    return (action) => {
      console.group(action.type);
      console.log('%c prev state', 'color: gray', store.getState());
      console.log('%c action', 'color: blue', action);
      const returnValue = next(action);
      console.log('%c next state', 'color: green', store.getState());
      console.groupEnd(action.type);
      return returnValue;
    };
  };
export default () => configureStore({
    reducer: rootReducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
      