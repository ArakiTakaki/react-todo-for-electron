import React from 'react';
import { IconButton } from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';
import PropTypes from 'prop-types';

function Delete (props) {
  const {func} = props;
  return(
    <IconButton
      name="todo_delete"
      variant="fab"
      color="primary"
      onClick={func}
      mini>
      <DeleteOutline />
    </IconButton>
  );
}

Delete.propTypes = {
  func: PropTypes.func
};

export default Delete;