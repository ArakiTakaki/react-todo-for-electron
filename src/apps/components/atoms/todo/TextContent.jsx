import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

function TextContent (props) {
  const {state, children} = props;
  return(
    <Typography
      variant="headline"
      noWrap={state}
      style={{ lineHeight:'inherit' }}>
      {children}
    </Typography>
  );
}

TextContent.propTypes = {
  children: PropTypes.string,
  state: PropTypes.bool
}
export default TextContent;