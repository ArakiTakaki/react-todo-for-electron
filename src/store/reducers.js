import * as Actions from './actions';

const reducer = (state, action) => {
  const {payload} = action;
  console.log(state);
  switch (action.type){
    case (Actions.ADD_TODO):
      return {...state, todos:[...state.todos, payload]}
    defautl:
      return state
  }
}

export default reducer;