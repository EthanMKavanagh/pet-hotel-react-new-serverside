import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class Nav extends Component {


  render() {
      
    return (
      <div>
        {/* Delete this button */}
        <button>Delete Later</button>
        <button>Pets</button>
        <button>Owners</button>
      </div>
    )
  }
}
export default connect(mapStoreToProps)(Nav);