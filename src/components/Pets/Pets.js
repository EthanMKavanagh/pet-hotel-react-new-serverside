import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import PetsForm from '../PetsForm/PetsForm';

class Pets extends Component {


  render() {
      
    return (
      <div>
        <PetsForm />
      </div>
    )
  }
}
export default connect(mapStoreToProps)(Pets);