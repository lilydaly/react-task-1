import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './tasks/tasks/question2'
import MyComponent from './tasks/tasks/question4'
import Hello from './tasks/tasks/question5'
import Kitty from './tasks/tasks/question6'
import HelloKitty from './tasks/tasks/question7'
import Person from './tasks/tasks/question8'
import PersonWithProps from './tasks/tasks/question9'
import Adder from './tasks/tasks/question10'

function App() {
  return (
    <div className="App">
      <Test />
      <MyComponent />
      <Hello />
      <Kitty />
      <HelloKitty />
      <Person />
      <PersonWithProps name={'John'} age={20} />
      <PersonWithProps name={'Richard'} age={27} />
      <Adder number1={1} number2={2} />
      <Adder number1={7} number2={3} />
    </div>
  );
}

export default App;
