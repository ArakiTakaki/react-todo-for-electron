import React from "react";
import { connect } from "react-redux";
import * as Actions from '../../../store/actions';
import { bindActionCreators } from "redux";
import TodoList from '../../components/modules/TodoListItem';

class ViewTodos extends React.Component {
  onCheckEvent(event){
    this.props.actions.changeTodoCheck(event.target.value);
  }
  onDeleteEvent(event){
    this.props.actions.deleteTodo(event.target.value);
  }
  onEvent(event){
    console.log(event.target.name);
  }

  render() {
    const { todos } = this.props.state;
    let list = [];
    console.log(todos);
    for (var i in todos) {
      list.push(
        <div key={i}>
          <p>
          </p>
        </div>
      );
    }

    console.log(this.props);
    return (
      <div>
        {list}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state: state
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(ViewTodos);