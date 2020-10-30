import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class PetsItem extends Component {

  onDelete = (id) => {
    this.props.dispatch({
      type: 'DELETE_PET',
      payload: id
    });
  }

  onEdit = (pet) => {
    this.props.dispatch({
      type: 'EDIT_PET',
      payload: pet
    });
  }

  render() {
    return (
      <tr>
        <td>{this.props.pet[1]}</td>
        <td>{this.props.pet[2]}</td>
        <td>{this.props.pet[3]}</td>
        <td>{this.props.pet[4]}</td>
        {this.props.pet[5] ?
          <td>Yes</td>:
          <td>No</td>
        }
        <td>
          <button onClick={this.onDelete(this.props.pet[0])}>Delete</button>
          {this.props.pet[5] ?
            <button onClick={this.onEdit(this.props.pet[0])}>Check Out</button>:
            <button onClick={this.onEdit(this.props.pet)}>Check In</button>
          }
        </td>
      </tr>
    )
  }
}
export default connect(mapStoreToProps)(PetsItem);