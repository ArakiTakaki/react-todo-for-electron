import React from "react";
import { connect } from "react-redux";
import * as Actions from '../../../../store/actions';
import { bindActionCreators } from "redux";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
  }
  onClickEvent(){
    this.props.actions.addTodo("testTodo");
  }
  render() {
    return (
      <button
        onClick={this.onClickEvent.bind(this)}>
        todoを追加する。
      </button>

    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);