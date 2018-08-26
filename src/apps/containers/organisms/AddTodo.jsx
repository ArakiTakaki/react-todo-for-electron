import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../../store/actions';
import AddTodoItem from '../../components/modules/AddTodoItem';
import * as TodoAct from '../../components/atoms/todo';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.onTodoEvent = this.onTodoEvent.bind(this);
  }

  onTodoEvent(event) {
    const name = event.currentTarget.name;
    const {actions} = this.props;
    console.log(event.currentTarget);
    switch (name) {
      case TodoAct.ADD:
        actions.addTodo();
        break;
      case TodoAct.INPUT_TEXT:
        actions.inputTodoText(event.target.value);
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <AddTodoItem
        event={this.onTodoEvent}
        content={this.props.state.tmp_todo} />
    )
  }

}

const mapStateToProps = state => ({
  state: state
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);