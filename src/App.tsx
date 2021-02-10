import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from "@zenstack/react-zen-store";
import { counterStateStore } from "./state";
import eventBus from "./event-bus";
import {createCounterDecrementedEvent, createCounterIncrementedEvent} from "./events";

function App() {
  const state = useState(counterStateStore);

  const emitIncrementEvent = () => {
    eventBus.emit(createCounterIncrementedEvent());
  }

  const emitDecrementEvent = () => {
    eventBus.emit(createCounterDecrementedEvent());
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={emitIncrementEvent}>Increment</button>
        <p>
          Counter: {state}
        </p>
        <button onClick={emitDecrementEvent}>Decrement</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
