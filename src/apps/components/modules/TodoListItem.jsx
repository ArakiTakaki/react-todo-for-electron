import React from 'react';
import * as Todo from '../atoms/todo';
import PropTypes from 'prop-types';

export default TodoListItem = (props) => {
  const { content, event, state } = props
  return (
    <div>
      <Todo.Check
        func={event} />
      <Todo.Text state={state}>{content}</Todo.Text>
      <Todo.Delete
        func={event}/>
    </div>
  )
}

TodoListItem.propTypes = {
  event: PropTypes.func.isRequired,
  state: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired
}
