import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../../store/actions';
import AddTodoItem from '../../components/modules/AddTodoItem';
import TodoListItem from '../../components/modules/TodoListItem';
import * as TodoAct from '../../components/atoms/todo';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.onTodoEvent = this.onTodoEvent.bind(this);
  }

  onTodoEvent(event) {
    const name = event.currentTarget.name;
    let idx;
    const {actions} = this.props;
    switch (name) {
      case TodoAct.ADD:
        actions.addTodo();
        break;
      case TodoAct.CHECK:
        idx = event.currentTarget.value;
        actions.changeTodoCheck(idx);
        break;
      case TodoAct.DELETE:
        idx = event.currentTarget.value;
        actions.deleteTodo(idx);
        break;
      case TodoAct.INPUT_TEXT:
        actions.inputTodoText(event.target.value);
        break;
      default:
        break;
    }
  }

  render() {
    const { todos } = this.props.state;
    let list = [];
    for (let todo of todos) {
      list.push(
        <TodoListItem
          key={todo.key}
          todoKey={todo.key}
          state={todo.state}
          content={todo.content}
          detailState={todo.detailState}
          event={this.onTodoEvent} />
      )
    }
    return (
      <div>
        {list}
        <AddTodoItem
          event={this.onTodoEvent}
          content={this.props.state.tmp_todo} />
      </div>
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