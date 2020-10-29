import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import PetsForm from '../PetsForm/PetsForm';
import PetsTable from '../PetsTable/PetsTable';

class Pets extends Component {


  render() {
      
    return (
      <div>
        <PetsForm />
        <PetsTable />
      </div>
    )
  }
}
export default connect(mapStoreToProps)(Pets);