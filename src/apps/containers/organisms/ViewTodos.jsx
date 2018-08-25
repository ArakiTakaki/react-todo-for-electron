import React from "react";
import { connect } from "react-redux";
import * as Actions from '../../../store/actions';
import { bindActionCreators } from "redux";

class ViewTodos extends React.Component {
  constructor(props) {
    super(props);
  }

  onCheckEvent(event){
    this.props.actions.changeTodoCheck(event.target.value);
  }
  onDeleteEvent(event){
    this.props.actions.deleteTodo(event.target.value);
  }

  render() {
    const { todos } = this.props.state;
    let list = [];
    console.log(todos);
    for (var i in todos) {
      list.push(
        <div key={i}>
          <p>
            <input
              type="checkbox"
              checked={todos[i].state}
              value={i}
              onClick={this.onCheckEvent.bind(this)}/>

            {todos[i].content}

            <button
              onClick={this.onDeleteEvent.bind(this)}
              type="button"
              value={i}>
              ❌
            </button>
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