import React from 'react';
import { Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import PropTypes from 'prop-types';

const Delete = (props) => {
  const {func} = props;
  return(
    <Button
      name="todo_delete"
      valiant="fab"
      color="primary"
      onClick={func}
      mini>
      <Add/>
    </Button>
  );
}

Delete.propTypes = {
  func: PropTypes.func.isRequired
}

export default Delete;