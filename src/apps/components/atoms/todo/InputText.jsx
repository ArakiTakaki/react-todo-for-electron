import React from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

const InputText = (props) => {
  const {func} = props;
  return(
    <TextField
      name="todo_content"
      label="TODO"
      margin="nomal"
      onChange={func}/>
  );
}

InputText.propTypes = {
  func: PropTypes.func.isRequired
}
export default InputText;