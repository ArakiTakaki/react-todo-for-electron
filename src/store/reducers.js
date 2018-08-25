import * as Actions from './actions';

const reducer = (state, action) => {

  const { payload } = action;

  switch (action.type) {
    case (Actions.ADD_TODO):
      if (payload.todo.content == "") { break; }
      state.now_todo_count++;
      payload.todo.key = state.now_todo_count;
      state.todos = [...state.todos, payload.todo];
      break;
    case (Actions.GET_TODO):
      break;
    case (Actions.CHANGE_TODO_CHECK):
      state.todos[payload].state = state.todos[payload].state ? false : true
      break;
    case (Actions.DELETE_TODO):
      state.todos.splice(payload,1);
      break;
  }
  return Object.assign({}, state);
}

export default reducer;