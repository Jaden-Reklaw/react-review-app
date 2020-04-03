import React, { Component } from 'react';
import Dragon from '../Dragon/Dragon';

class DragonList extends Component {
  render() {
    return (
      <>
        {/* render dragons to the DOM using .map() */}
        {this.props.list.map((dragon, i) => <Dragon dragon={dragon} key={i}/>)}
      </>
    );
  }
}

export default DragonList;