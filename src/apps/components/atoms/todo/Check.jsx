import React from 'react';
import { Checkbox } from '@material-ui/core';
import PropTypes from 'prop-types';

function Check (props) {
  const { func, todoKey,state } = props;
  return(
    <Checkbox
      name="todo_check"
      value={todoKey}
      variant="fab"
      color="primary"
      checked={state}
      onChange={func}/>
  );
}

Check.propTypes = {
  todoKey: PropTypes.number,
  func: PropTypes.func
}

export default Check;