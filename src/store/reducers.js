import * as Actions from './actions';
import * as Cookies from 'js-cookie';

const reducer = (state, action) => {

  const { payload } = action;

  switch (action.type) {

    case (Actions.ADD_TODO):
      if (state.tmp_todo === "") return state;
      state.now_todo_count++;
      state.todos.push({
        content:state.tmp_todo,
        state:false,
        key:state.now_todo_count
      });
      state.tmp_todo = "";
      break;

    case (Actions.GET_TODO):
      break;

    case (Actions.CHANGE_TODO_CHECK):
      for(let idx in state.todos){
        if (state.todos[idx].key === Number(payload)){
          state.todos[idx].state = state.todos[idx].state ? false : true
        }
      }
      break;

    case (Actions.DELETE_TODO):
      for(let idx in state.todos){
        if (state.todos[idx].key === Number(payload)) state.todos.splice(idx,1);
      }
      break;

    case (Actions.INPUT_TODO_TEXT):
      state.tmp_todo = payload;
      break;

    case (Actions.SAVE_TODO_COOKIE):
      break;

    default:
      return state;
  }
  return Object.assign({}, state);
}

export default reducer;