import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import OwnersItem from '../OwnersItem/OwnersItem';

class Owners extends Component {
  componentDidMount() {
    this.setOwners();
  }
  setOwners = () => {
    this.props.dispatch({
      type: 'FETCH_OWNERS'
    })
  }

  render() {
      
    return (
      <div>
        <h2>Add Owner</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Number of Pets</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.store.ownersReducer.map((owner, i) => 
              <OwnersItem key={i} owner={owner}/>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}
export default connect(mapStoreToProps)(Owners);
