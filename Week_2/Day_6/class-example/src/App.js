import React, { Component } from 'react'

function App() {

  function sayHello() {
    alert("Hello");
  }

  return (
    <div>
      <h1>Hello, react</h1>
      <button onClick={sayHello}>Hello</button>
    </div>
  );
}


export default class App extends Component {
  render() {
    return (
      <div>
        Hello World
      </div>
    )
  }
}

