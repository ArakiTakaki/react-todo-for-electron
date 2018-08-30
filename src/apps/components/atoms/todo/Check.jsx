import React from 'react';
import { Checkbox } from '@material-ui/core';
import PropTypes from 'prop-types';

function Check (props) {
  const { func, todoKey,state } = props;
  return(
    <Checkbox
      name="todo_check"
      value={String(todoKey)}
      variant="fab"
      color="primary"
      checked={state}
      onChange={func}/>
  );
}

Check.propTypes = {
  func: PropTypes.func
}

export default Check;