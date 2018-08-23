
export const ADD_TODO = "ADD_TODO";
export const addTodo = (title, description) => ({
  type: ADD_TODO,
  payload: {
    todo: {
      title: title,
      description: description,
      state: false
    }
  }
});

export const GET_TODO = "GET_TODO";
export const getTodo = () => ({ type: GET_TODO });