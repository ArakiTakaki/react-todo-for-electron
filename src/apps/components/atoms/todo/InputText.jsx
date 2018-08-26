import React from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

function InputText (props){
  const {func, value} = props;
  return(
    <TextField
      name="todo_value"
      label="TODO"
      margin="normal"
      value={value}
      onChange={func}/>
  );
}

InputText.propTypes = {
  func: PropTypes.func,
  value: PropTypes.string
}
export default InputText;