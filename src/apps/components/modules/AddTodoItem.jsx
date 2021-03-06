import React from 'react';
import * as Todo from '../atoms/todo';
import PropTypes from 'prop-types';
import { Grid, withStyles } from '@material-ui/core';

const styles = {
  addTodo:{
    verticalAlign: 'top',
    position:'fixed',
    bottom: 0,
    right: 0,
    paddingBottom: 20,
    background: '#fff'
  }
}
function AddTodoItem(props) {
  const { event, content, classes } = props
  return (
      <Grid
        className={classes.addTodo}
        alignItems="flex-end"
        justify="space-around"
        container>
        <Grid item xs={9}>
          <Todo.InputText func={event} value={content} />
        </Grid>
        <Grid item xs={2}>
          <Todo.Add func={event} />
        </Grid>
      </Grid>
  )
}

AddTodoItem.propTypes = {
  event: PropTypes.func,
  content: PropTypes.string
}

export default withStyles(styles)(AddTodoItem);