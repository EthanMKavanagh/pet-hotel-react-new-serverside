import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class OwnersForm extends Component {
  state = {
    name: ''
  }

  handleChangeFor = (property, event) => {
    this.setState({
        [property]: event.target.value
    });
  }

  addOwner = (event) => {
    console.log('CLICKED');
    console.log('THIS STATE', this.state);
    event.preventDefault();
    this.props.dispatch({
      type: 'ADD_OWNER',
      payload: this.state.name
    })
    this.setState({
      name: ''
    });
  }

  render() {
      
    return (
      <div>
        <h2>
          Add Owner
        </h2>
        <form className="newOwnerForm" onSubmit={this.addOwner}>
          <input 
              value={this.state.name}
              label='Owner Name'
              placeholder='Owner Name'
              type='text'
              onChange={(event) => this.handleChangeFor('name', event)} 
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
export default connect(mapStoreToProps)(OwnersForm);