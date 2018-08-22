import * as Actions from './actions';

const reducer = (state, action) => {
  const {payload} = action;
  switch(action.type){
    case(Actions.ADD_TODO):
      return { state, todos: [...state.todos, payload.todo] };
    case(Actions.GET_TODO):
      return state
  }
  return state
}

export default reducer;