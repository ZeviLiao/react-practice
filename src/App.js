import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'
import Counters from './componets/counters'

const a = <h1>hello</h1>

console.log('a', a)

class App extends Component {
  render() {
    return <Counters />
  }
}

export default App
