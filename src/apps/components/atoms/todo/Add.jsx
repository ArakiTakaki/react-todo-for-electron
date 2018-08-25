import React from 'react';
import { Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import PropTypes from 'prop-types'

export default Add = (props) => {
  const { func } = props;
  return(
    <Button
      valiant="fab"
      color="primary"
      onClick={func}
      mini>
      <Add/>
    </Button>
  );
}

Add.propTypes = {
  func: PropTypes.func.isRequired
}