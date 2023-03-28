import Todo from '../../../components/Todo'
import { tasksFetchCancel, tasksFetchEdit,tasksFetchToggle,tasksFetchAdd,tasksFetchSeeAll } from '../../actions/todos';
import { nanoid } from "nanoid";
// const TodoList = ({
//     todos,
//     onTodoClick
//   }) => (
//     <ul>
//       {todos.map(todo =>
//         <Todo
//           key={todo.id}
//           {...todo}
//           onClick={() => onTodoClick(todo.id)}
//         />
//       )}
//     </ul>
//   );
  
 let addTask = ({ dispatch }) => {
    let input;
  
    return (
      <div>
        <input ref={node => {
          input = node;
        }} />
        <button onClick={() => {
          dispatch(tasksFetchAdd(`todo-${nanoid()}`,input.value));
          input.value = '';
        }}>
          Add Todo
        </button>
      </div>
    );
  };

 let deleteTasks = (id,{ dispatch }) => {
    return (
      <div>
        <button onClick={() => {
          dispatch(tasksFetchCancel(id));
        
        }}>
          Elimina Todo
        </button>
      </div>
    );
  };

 let editTask = (id,name,{ dispatch }) => {
        let input;
      
        return (
          <div>
            <input ref={node => {
              input = node;
            }} />
            <button onClick={() => {
              dispatch(tasksFetchEdit(id,name));    //STORE.DISPATCH
              input.value = '';
            }}>
              Add Todo
            </button>
          </div>
        );
      };
    

let toggleTask = (id,{ dispatch }) => {
    return (
      <div>
        <button onClick={() => {
          dispatch(tasksFetchToggle(id)); 
        }}>
          Cambia completed Todo
        </button>
      </div>
    );
  };

let seeAllTask = ({ dispatch }) => {
    return (
      <div>
        <button onClick={() => {
          dispatch(tasksFetchSeeAll());
        }}>
          Mostra Todo
        </button>
      </div>
    );
  };
 
  
  const getVisibleTodos = (
    todos,
    filter
  ) => {
    switch (filter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter(
          t => t.completed
        );
      case 'SHOW_ACTIVE':
        return todos.filter(
          t => !t.completed
        );
    }
  }

  export const funzioni={
    seeAllTask,toggleTask,editTask,deleteTasks,addTask
  };