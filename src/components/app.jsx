import React, { Component } from 'react';
require('dotenv').config()

import flats from '../../data/flats';
import FlatList from './flat_list';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedFlat: flats[0],
      flats
    }
  }

  selectFlat(index) {
    this.setstate({ selectFlat: flats[index] });
  }

  render() {
    return (
      <div>
        <FlatList
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.selectFlat}
        />
      </div>
    );
  }
}

export default App;