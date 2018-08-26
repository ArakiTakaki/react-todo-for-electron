import React from 'react';
import * as Todo from '../atoms/todo';
import PropTypes from 'prop-types';

function TodoListItem(props) {
  const { event, content } = props
  return (
    <div>
      <Todo.InputText func={event} value={content} />
      <Todo.Add func={event} />
    </div>
  )
}

TodoListItem.propTypes = {
  event: PropTypes.func,
  content: PropTypes.string
}

export default TodoListItem;