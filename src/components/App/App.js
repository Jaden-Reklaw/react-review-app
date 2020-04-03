import React, { Component } from 'react';
import './App.css';

//Import Components
import Header from '../Header/Header';
import DragonList from '../DragonList/DragronList'

class App extends Component {
  //Setup up state to the app component to pass to the children
  state = {
    dragonList: [
      {
        name:'Smaug',
        secret: 'Missing scale on chest'
      },
      {
        name:'Haku',
        secret: 'Is actually the Kohaku River'
      },
      {
        name:'Gilfrax',
        secret: 'Runs a bed and breakfast'
      },
    ],
  }

  // componentDidMount() {
  //   // make our GET request to get Dragon data from teh server
  //   axios.get('/dragons').then((response) => {
  //     //Update state with the response
  //     this.setState({
  //       dragonList: response.data,
  //     })
  //   }).catch((error) => console.log(error));
  // }

  render() {
    return (
      <div className="App">
        <Header />

        <DragonList list={this.state.dragonList}/>

      </div>
    );
  }
}

export default App;
