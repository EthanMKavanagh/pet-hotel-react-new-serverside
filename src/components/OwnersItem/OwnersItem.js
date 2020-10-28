import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class OwnersItem extends Component {


  render() {
      
    return (
      <tr>
        <td>
          {this.props.owner[1]}
        </td>
        <td>
          2
        </td>
        <td>
          <button>DELETE</button>
        </td>
      </tr>
    )
  }
}
export default connect(mapStoreToProps)(OwnersItem);