import React from 'react';
import * as Todo from '../atoms/todo';
import PropTypes from 'prop-types';
import { Grid, withStyles } from '@material-ui/core';

const styles = {
  root: {
    alignItems: "center",
    borderTop: '1px solid #555',
    padding:'10px 0',
    '&:first-child':{
      borderTop: 'none'
    }
  }
}

function TodoListItem(props) {
  const { todoKey, content, event, state, detailState, classes } = props
  return (
      <Grid
        container
        spacing={16}
        className={classes.root}>
        <Grid item xs={2}>
          <Todo.Check
            alignItems="center"
            justify="space-between"
            todoKey={todoKey}
            func={event}
            state={state} />
        </Grid>
        <Grid item xs={7} >
          <Todo.TextContent state={detailState}>
            {content}
          </Todo.TextContent>
        </Grid>
        <Grid item xs={3}>
          <Todo.Delete
            todoKey={todoKey}
            func={event} />
        </Grid>
      </Grid>
  )
}

TodoListItem.propTypes = {
  event: PropTypes.func,
  state: PropTypes.bool,
  todoKey: PropTypes.number,
  detailState: PropTypes.bool,
  content: PropTypes.string
}

export default withStyles(styles)(TodoListItem);