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
      // Provider will pass this component's state as props onto anything we wrap it around
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


          {/* Incrementers to add/subtract from the running total */}
          <Incrementer />
          <Incrementer />

          {/* Display to show the running total */}
          <Display />
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
      // Wrapping the component with a CounterContext.Consumer gives it access to the state in Context Wrapper,
      //  where the running total is stored
      <div>
          <CounterContext.Consumer>
            
            {/* We have access to the state within CounterContext - we can
              access it directly now! */}
            {context => 
              <React.Fragment>
                <p>Running Total: {context.counter}</p>
              </React.Fragment>}

          </CounterContext.Consumer>
      </div>

    );
  }
}
export default App;
