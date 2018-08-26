import React from "react";
import { connect } from "react-redux";
import * as Actions from '../../../store/actions';
import { bindActionCreators } from "redux";
import Todo from "../organisms/Todo";
import ComponentSample from '../organisms/ComponentSamples';

class Root extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.actions.getTodo();
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Todo/>
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