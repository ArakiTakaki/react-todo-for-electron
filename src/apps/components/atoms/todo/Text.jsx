import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const Text = (props) => {
  const {state, children} = props;
  return(
    <Typography valiant="headline" noWrap={state}>
      {children}
    </Typography>

  );
}

Text.propTypes = {
  children: PropTypes.string.isRequired,
  state: PropTypes.bool.isRequired
}
export default Text;