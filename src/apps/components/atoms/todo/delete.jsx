import React from 'react';
import { IconButton } from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';
import PropTypes from 'prop-types';

function Delete (props) {
  const {func, todoKey} = props;
  return(
    <IconButton
      name="todo_delete"
      value={todoKey}
      variant="fab"
      color="primary"
      onClick={func}>
      <DeleteOutline />
    </IconButton>
  );
}

Delete.propTypes = {
  func: PropTypes.func,
  name: PropTypes.number
};

export default Delete;