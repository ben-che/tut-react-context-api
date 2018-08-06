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

  // The methods that update state also need to be defined:
  // updateCounter will take in an action in the form of a boolean - 
  //  true will add one to the counter and false will subtract one
  updateCounter = (action) => {
    if (action === "add") {
      this.setState({
        counter: this.state.counter + 1
      })
    }
    else {
      this.setState({
        counter:this.state.counter - 1
      })
    }
  } 

  render() {
    return (
      // Provider will pass this component's state as props onto anything we wrap it around
      <CounterContext.Provider value={{ state:this.state, updateCounter: (action) => this.updateCounter(action)}}>
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
//  Originally, without the Context API, we would have to pass props through ButtonContainer so that
//  its children components will have access to it
//  However, with Context, we don't have to anymore - we can just render the components we need:
class ButtonContainer extends Component {
  render() {
    return (
      <div>
          {/* Incrementers to add/subtract from the running total - we'll pass it different actions
          so we're able to modify the state accordingly */}
          <Incrementer action={"add"} />
          <Incrementer action={"subtract"} />

          {/* Display to show the running total */}
          <Display />
      </div>
    );
  }
}

// Incrementer is lowest level component and will increment the Display component
class Incrementer extends Component {
  render() {
    return (
      <div>
        
        {/* Wrapping the Incrementer with a Consumer so that they have access to the updateCounter method */}
        <CounterContext.Consumer>
          {context => 
            <p onClick={ () => context.updateCounter(this.props.action)}>{this.props.action} one! </p>
          }
        </CounterContext.Consumer>
        
      </div>
    );
  }
}

// Display is lowest level component and will show the counter
class Display extends Component {
  render() {
    return (
      // Wrapping the component with a CounterContext.Consumer gives it access to the state in Context Wrapper,
      //  where the running total is stored
      <div>
          <CounterContext.Consumer>

            {/* We have access to the state within CounterContext - we can
              access it directly now! */}
            {context => 
              <React.Fragment>
                <p>running Total: {context.state.counter}</p>
              </React.Fragment>}

          </CounterContext.Consumer>
      </div>

    );
  }
}
export default App;
