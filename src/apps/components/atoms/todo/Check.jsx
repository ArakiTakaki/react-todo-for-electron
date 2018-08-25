import React from 'react';
import { IconButton } from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';
import PropTypes from 'prop-types';

 const Check = (props) => {
  const {func} = props;
  return(
    <IconButton
      name="todo_check"
      valiant="fab"
      color="primary"
      onClick={func}
      mini>
      <DeleteOutline />
    </IconButton>
  );
}

Check.propTypes = {
  func: PropTypes.func.isRequired
};

export default Check;