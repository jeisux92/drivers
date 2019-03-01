import React, { Component } from 'react'
import Home from './Login/Home'
import Loading from './Shared/Loading'
import './App.css'
class App extends Component {
  render () {
    return (
      <div>
        <div className='App container'>
          <Home />
          <Loading />>
        </div>
      </div>
    )
  }
}

export default App
