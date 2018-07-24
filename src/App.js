import React, { Component } from 'react';
import './App.css';

// Create the context inside App, our top level component
const CounterContext = React.createContext();

// Anything we wrap the ContextWrapper around will gain access to the state
class ContextWrapper extends Component {
  // Declaring state
  state = { 
    counter : 0
  }
  render() {
    return (
      <CounterContext.Provider value={this.state}>
        {this.props.children}
      </CounterContext.Provider>
    )
  }
}

// Top level Component
class App extends Component {
  render() {
    return (
      <div>
        <h1>Increment me!</h1>
        {/* Wrap the components we want to give state access to here: */}
        <ContextWrapper>
          {/* Render the Button Container component that contains the rest of our components */}
          <ButtonContainer />
        </ContextWrapper>
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
        <CounterContext.Consumer>
          {context => <p>{context.counter}</p>}
        </CounterContext.Consumer>
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
