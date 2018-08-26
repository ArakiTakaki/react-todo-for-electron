import React from 'react';
import { Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import PropTypes from 'prop-types';

function Check (props) {
  const {func} = props;
  return(
    <Button
      name="todo_check"
      variant="fab"
      color="primary"
      onClick={func}
      mini>
      <Add/>
    </Button>
  );
}

Check.propTypes = {
  func: PropTypes.func
}

export default Check;