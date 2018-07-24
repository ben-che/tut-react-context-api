import React, { Component } from 'react';
import './App.css';

// Create the context inside App, our top level component
const CounterContext = React.createContext();

// Top level Component
class App extends Component {
  // Add state to App - this will eventually be the context we want to pass around
  state = { 
    counter : 0
  }
  render() {
    return (
      <div>
        <h1>Increment me!</h1>
        {/* Adding a Provider wrapper gives the entire ButtonContainer tree access
          to the counter's state */}
        <CounterContext.Provider value={this.state.counter}>
          <ButtonContainer />
        </CounterContext.Provider>
      </div>
    );
  }
}

// ButtonContainer will hold 2 Incrementer components and a Display component, mid-level component
class ButtonContainer extends Component {
  render() {
      console.log(this.props)
    return (
      <div>
        
      </div>
    );
  }
}

// Incrementer is lowest level component and will increment the Display component
class Incrementer extends Component {
  render() {
      console.log(this.props)
    return (
      <div>
        
      </div>
    );
  }
}

// Display is lowest level component and will show the counter
class Display extends Component {
  render() {
      console.log(this.props)
    return (
      <div>
        
      </div>
    );
  }
}
export default App;
