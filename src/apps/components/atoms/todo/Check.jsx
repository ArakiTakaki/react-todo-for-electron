import React from 'react';
import { IconButton } from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';
import PropTypes from 'prop-types';

export default Check = (props) => {
  const {func} = props;
  return(
    <IconButton
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
