import * as Actions from './actions';

const reducer = (state, action) => {

  const {payload} = action;

  switch(action.type){
    case(Actions.ADD_TODO):
      state.todos = [...state.todos, payload.todo];
      return Object.assign({},state);
    case(Actions.GET_TODO):
      return state
  }
  return state
}

export default reducer;