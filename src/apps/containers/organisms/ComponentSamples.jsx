import React from 'react';
import { Button, IconButton, Checkbox, Typography, TextField, AppBar, Toolbar } from '@material-ui/core';
import { Add, DeleteOutline } from '@material-ui/icons';

export default function () {
  return (
    <React.Fragment>

      <AppBar>
        <Toolbar>

        </Toolbar>
      </AppBar>

      <Button variant="fab" mini color="primary" >
        <Add/>
      </Button>

      <IconButton>
        <DeleteOutline />
      </IconButton>

      <Checkbox/>

      <Typography valiant="headline" noWrap>
        TestTodos
      </Typography>

      <TextField
        name="todo"
        label="TODO"
        margin="normal"/>

    </React.Fragment>
  )
}