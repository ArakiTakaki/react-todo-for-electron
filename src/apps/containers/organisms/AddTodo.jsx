import React from 'react';
import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../../../store/actions';

class AddTodo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      content: ""
    }
  }

  onChange(event){
    this.setState({
      content: event.target.value
    });
  }
  onSubmit(){
    this.props.actions.addTodo(this.state.content);
    this.setState({content:""});
  }

  render() {
    return(
      <div>
        <input
          type="text"
          placeholder="TODOを入力してください。"
          value={this.state.content}
          onChange={this.onChange.bind(this)}/>
        <input
          type="submit"
          value="ADD"
          onClick={this.onSubmit.bind(this)}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions,dispatch)
})

export default connect(null,mapDispatchToProps)(AddTodo);