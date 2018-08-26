import React from "react";
import { connect } from "react-redux";
import * as Actions from '../../../store/actions';
import { withStyles } from '@material-ui/core';
import { bindActionCreators } from "redux";
import ViewTodo from "../organisms/ViewTodo";
import AddTodo from "../organisms/AddTodo";
import Bar from "../organisms/Bar";

const styles = {
  viewTodo:{
    margin: '10vh 0 15vh 0'
  },
  addButton:{
    backgroundColor: '#fff',
  }
}

class Root extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.actions.getTodo();
  }

  render() {
    const {classes} = this.props;
    return (
      <div>
        <Bar />
        <div className={classes.viewTodo}>
          <ViewTodo/>
        </div>
        <div className={classes.addButton}>
          <AddTodo/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

const styleRoot = withStyles(styles)(Root);
export default connect(mapStateToProps, mapDispatchToProps)(styleRoot);