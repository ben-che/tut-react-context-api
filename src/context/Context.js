// Creating the context in another file - this is the state that we want to make acessible
//  to various components

import React from 'react';

// creating a state that we can later update
const state = { counter : 0}

// creating a counter context using createContext()
//  createContext can also take in a parameter as a default value
const CounterContext = React.createContext();

export default CounterContext;