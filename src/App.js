import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'
import Hello from './componets/hello'

const a = <h1>hello</h1>

console.log('a', a)

class App extends Component {
  render() {
    return <Hello />
  }
}

export default App
