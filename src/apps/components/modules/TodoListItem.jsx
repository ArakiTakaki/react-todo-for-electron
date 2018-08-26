import React from 'react';
import * as Todo from '../atoms/todo';
import PropTypes from 'prop-types';

function TodoListItem(props) {
  const { todoKey, content, event, state } = props
  return (
    <div name={todoKey}>
      <Todo.Check
        func={event} />
      <Todo.TextContent state={state}>{content}</Todo.TextContent>
      <Todo.Delete
        func={event} />
    </div>
  )
}

TodoListItem.propTypes = {
  event: PropTypes.func,
  state: PropTypes.bool,
  todoKey: PropTypes.number,
  content: PropTypes.string
}

export default TodoListItem;