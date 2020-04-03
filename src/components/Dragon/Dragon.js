import React, { Component } from 'react';

class Dragon extends Component {
  //This creates state for each dragon that is created independent
  //of the other Dragon components
  state = {
    showSecret: false,
  }

  //Remember to use arrow funcitons to bind this to the class
  showOrHideSecret = () => {
    //needs to return JSX
    if(this.state.showSecret) {
      return //<p>{this.props.dragon.secret}</p>;
    } else {
      return //<button onClick={this.toggleSecret}>Show my Secret!</button>;
    }
  }

  //Remember to use arrow funcitons to bind this to the class
  toggleSecret = (event) => {
    // switch state to true on showSecret 
    //Make it toggle
    this.setState({showSecret: !this.state.showSecret});
  }

  render() {
    return (
      // Conditional Rendering
      <>
        <div>
            <h2>{this.props.dragon.name}</h2>
            <h2>secret</h2>
            {/* 1. if else logic to show the sercret or not */}
            {this.showOrHideSecret()}

            {/* 2. if true, show the secret */}
            {/*this.state.showSecret && <p>{this.props.dragon.secret}</p>*/}

            {/* 3. using a ternary operator if/else shorthand */}
            {this.state.showSecret ? 
            <p>{this.props.dragon.secret}</p> : 
            <button onClick={this.toggleSecret}>Show my Secret!</button>}
        </div>      
      </>
    );
  }
}

export default Dragon;