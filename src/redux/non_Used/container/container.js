import { tasksFetchEdit, tasksFetchSeeAll, tasksFetchToggle ,tasksFetchAdd} from "../../actions/todos";
import todos from "../logic/todos";


const mapStateToProps = (
    state
  ) => {
    return {
      todos: getVisibleTodos(
        state.todos,
        
      )
    };
  };
  
  const mapDispatchToProps = (
    dispatch
  ) => {
    return {
      onTodoClick: (id,name) => {
        dispatch(tasksFetchCancel(id));
        dispatch(tasksFetchToggle(id));
        dispatch(tasksFetchAdd(name));
        dispatch(tasksFetchEdit(id,name));
        dispatch(tasksFetchSeeAll());
      }
    };
  };
  export default connect(mapStateToProps,mapDispatchToProps)(todos);