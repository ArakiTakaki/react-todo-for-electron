import React from "react";
import { connect } from "react-redux";
import * as Actions from '../../../store/actions';
import { bindActionCreators } from "redux";

class Root extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    this.props.actions.getTodo();
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>
        {this.props.name}
        </h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});
export default connect(mapStateToProps,mapDispatchToProps)(Root);