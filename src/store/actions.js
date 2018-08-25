
export const ADD_TODO = Symbol('actions');
export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    todo: {
      content: content,
      state: false
    }
  }
});

export const CHANGE_TODO_CHECK = Symbol('actions');
export const changeTodoCheck = (idx) => ({ type: CHANGE_TODO_CHECK, payload: idx });

export const GET_TODO = Symbol('actions');
export const getTodo = () => ({ type: GET_TODO });

export const DELETE_TODO = Symbol('actions');
export const deleteTodo = (idx) => ({ type: DELETE_TODO, payload: idx });