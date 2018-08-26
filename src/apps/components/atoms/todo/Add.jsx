import React from 'react';
import { Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import PropTypes from 'prop-types'

function AddItem(props) {
  const { func } = props;
  return (
    <Button
      mini
      name="todo_add"
      variant="fab"
      color="primary"
      onClick={func}>
      <Add />
    </Button>
  );
}

Add.propTypes = {
  func: PropTypes.func
}

export default AddItem;