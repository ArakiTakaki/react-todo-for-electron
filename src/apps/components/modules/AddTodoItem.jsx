import React from 'react';
import * as Todo from '../atoms/todo';
import PropTypes from 'prop-types';

function TodoListItem(props) {
  const { event, content } = props
  return (
    <form>
      <Todo.InputText func={event} value={content} />
      <Todo.Add func={event} />
    </form>
  )
}

TodoListItem.propTypes = {
  event: PropTypes.func,
  content: PropTypes.string
}

export default TodoListItem;