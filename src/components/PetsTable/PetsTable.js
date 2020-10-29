import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import PetsItem from '../PetsItem/PetsItem';

class PetsTable extends Component {


   render() {
      return (
         <div>
            <PetsItem />
         </div>
      )
   }
}
export default connect(mapStoreToProps)(PetsTable);