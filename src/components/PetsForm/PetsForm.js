import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class PetsForm extends Component {

      
  state = {
    name: '',
    color: '',
    breed: ''
  }  

  handleChange = (event, propertyName) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    });
  }

  // submitPet = () => {

  // }

  render() {
    console.log('in PetsForm');
    return (
      <div>
        <input placeholder="Pet Name" onChange={(event) => this.handleChange(event, 'name')}/>
        <input placeholder="Pet Color"/>
        <input placeholder="Pet Breed"/>
        <select>
          <option>Owner</option>
          <option>Owner</option>
        </select>
        <button>Submit</button>
      </div>
    )
  }
}
export default connect(mapStoreToProps)(PetsForm);