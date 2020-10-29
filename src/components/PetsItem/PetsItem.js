import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class PetsItem extends Component {


  render() {
      
    return (
      <div>
        Pet Item
      </div>
    )
  }
}
export default connect(mapStoreToProps)(PetsItem);