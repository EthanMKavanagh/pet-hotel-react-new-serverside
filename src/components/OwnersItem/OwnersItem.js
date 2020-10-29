import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class OwnersItem extends Component {

  deleteOwner = () => {
    console.log('delete button', this.props.owner[1])
    this.props.dispatch({
        type: 'DELETE_OWNER',
        payload: this.props.owner[1]
    });
}

  render() {
      
    return (
      <tr>
        <td>
          {this.props.owner[0]}
        </td>
        <td>
          {this.props.owner[2]}
        </td>
        <td>
          <button onClick={this.deleteOwner}>DELETE</button>
        </td>
      </tr>
    )
  }
}
export default connect(mapStoreToProps)(OwnersItem);