import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'
import Counters from './componets/counters'
import NavBar from './componets/navbar'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters />
        </main>
      </React.Fragment>
    )
  }
}

export default App
