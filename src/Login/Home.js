import React, { Component } from 'react'
import Login from './Login'
import './Home.css'
import store from '../store'
import { Provider } from 'react-redux'

const homeStyle = {
  backgroundImage: '../background.jpg'
}

const span = {
  backgroundColor:'white'
}

class Home extends Component {
  constructor (props) {
    super(props)
    this.updateStore = this.updateStore.bind(this)
    this.state = {
      loading: false,
      valueF: false
    }
    store.subscribe(() => {
      this.setState({ valueF: store.getState().loading })
    })
  }

  submit = values => {
    // print the form values to the console
    console.log(values)
    this.updateStore.bind()
    store.dispatch({ type: 'mostrar' })

    setTimeout(() => {
      store.dispatch({ type: 'mostrar' })
    }, 3000)
  }

  updateStore () {
    store.dispatch({ type: 'sumar' })
  }
  render () {
    return (
      <div className='row home' style={homeStyle}>
        <div className='col-md-6 col-lg-5 mx-auto'>
          <Provider store={store}>
            <Login onSubmit={this.submit} />
          </Provider>
          <span style={span}>Value F: {this.state.valueF?"true":"false"}</span>
          <span>{this.state.loading ? 'a' : 'b'}</span>
          <button className='btn btn-danger btn-sm' onClick={this.updateStore}>
            Ok
          </button>
        </div>
      </div>
    )
  }
}

export default Home
