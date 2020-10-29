import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class PetsForm extends Component {

      
  state = {
    name: '',
    color: '',
    breed: '',
    owner_id: '',
  }  

  handleChange = (event, propertyName) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    });
  }

  submitPet = () => {
    console.log('submitPet sending:', this.state);
    this.props.dispatch({
      type: 'ADD_PET',
      payload: this.state,
    });
  }

  render() {
    console.log('petsForm state:', this.state);
    return (
      <div>
        <input placeholder="Pet Name" onChange={(event) => this.handleChange(event, 'name')}/>
        <input placeholder="Pet Color" onChange={(event) => this.handleChange(event, 'color')}/>
        <input placeholder="Pet Breed" onChange={(event) => this.handleChange(event, 'breed')}/>
        <select onChange={(event) => this.handleChange(event, 'owner_id')}>
          <option value="">Choose</option>
          {this.props.store.ownersReducer.map(name => 
            <option key={name[0]} value={name[0]}>{name[1]}</option>  
          )}
        </select>
        <button onClick={this.submitPet}>Submit</button>
      </div>
    )
  }
}
export default connect(mapStoreToProps)(PetsForm);