import React from 'react';
import * as Todo from '../atoms/todo';
import PropTypes from 'prop-types';

export default TodoListItem = (props) => {
  const { event } = props
  return (
    <form>
      <Todo.InputText func={event}/>
      <Todo.Add func={event}/>
    </form>
  )
}

TodoListItem.propTypes = {
  event: PropTypes.func.isRequired,
  state: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired
}
