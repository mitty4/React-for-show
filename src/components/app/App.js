import React from 'react';
import logo from '../../assets/images/logo.svg';
import Form from '../form/form';
import TestForm from '../testForm/testForm';
import Practice from '../testForm/practice';
import Todo from '../todo/todo';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Todo />
      <Form />
      <TestForm />
      <Practice />

    </div>
  );
}

export default App;
