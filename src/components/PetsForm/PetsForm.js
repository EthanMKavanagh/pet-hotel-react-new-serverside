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

  componentDidMount(){
    this.props.dispatch({
      type: 'FETCH_OWNERS'
    })
  }

  handleChange = (event, propertyName) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    });
  }

  checkFields = () => {
    if(this.state.owner_id === '' || this.state.name === '' 
      || this.state.color === '' || this.state.breed === ''){
      alert("Fill all fields");
    }else{
    this.submitPet();
    }
  }

  submitPet = () => {
    console.log('submitPet sending:', this.state);
    this.props.dispatch({
      type: 'ADD_PET',
      payload: this.state,
    });
  }

  render() {
    console.log('petsForm state:', this.state);//alert if no owner selected
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
        <button onClick={this.checkFields}>Submit</button>
      </div>
    )
  }
}
export default connect(mapStoreToProps)(PetsForm);