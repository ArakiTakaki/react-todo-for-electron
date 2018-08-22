import React from "react";
import { connect } from "react-redux";

// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators(Actions, dispatch)
// });

class Root extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const {state} = this.props
    console.log(this.props)
    return (
      <div>
        {state}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps)(Root);