import React from "react";
import { connect } from "react-redux";
import * as Actions from '../../../store/actions';
import { bindActionCreators } from "redux";

class Root extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.actions.getTodo();
    this.props.actions.addTodo("test","testDescription");
  }

  onClickHandle(event){
    console.log("test");
    console.log(event);
    this.props.actions.addTodo("test","testDescription");
  }

  render() {
    const { todos } = this.props;

    let list = [];
    let num = 0;
    for (var todo of todos) {
      num++;
      list.push(
        <div key={num}>
          <p>
            {todo.title}
          </p>
          <p>
            {todo.description}
          </p>
        </div>
      );
    }
    console.log(this.props);
    return (
      <div>
        <button
          onClick={this.onClickHandle.bind(this)}>
          なんとなく追加
        </button>
        <h1>
          test
        </h1>
        {list}
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
export default connect(mapStateToProps, mapDispatchToProps)(Root);