import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import PetsItem from '../PetsItem/PetsItem';

class PetsTable extends Component {
   
   componentDidMount = () => {
      this.props.dispatch({
        type: 'FETCH_PETS'
      });
    }

   render() {
      return (
         <div>
            <table>
               <thead>
                  <tr>
                     <th>Owner</th>
                     <th>Pet</th>
                     <th>Breed</th>
                     <th>Color</th>
                     <th>Checked In</th>
                     <th>Actions</th>
                  </tr>
               </thead>
               <tbody>
                  {this.props.store.petsReducer.map((pet, i) =>
                     <PetsItem
                        key={i}
                        pet={pet}
                     />
                  )}
               </tbody>
            </table>
         </div>
      )
   }
}
export default connect(mapStoreToProps)(PetsTable);