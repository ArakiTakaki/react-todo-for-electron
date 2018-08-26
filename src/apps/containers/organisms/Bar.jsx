import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../../store/actions';
import { AppBar, Toolbar } from '@material-ui/core';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.onTodoEvent = this.onTodoEvent.bind(this);
  }

  onTodoEvent(event) {
    const name = event.currentTarget.name;
    const { actions } = this.props;
  }

  render() {
    return (
      <AppBar>
        <Toolbar></Toolbar>
      </AppBar>
    )
  }

}

const mapStateToProps = state => ({
  state: state
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
