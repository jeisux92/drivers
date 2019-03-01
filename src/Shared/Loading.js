import React, { Component } from 'react'
import store from '../store'

class Loading extends Component {
  constructor (props) {
    super(props)
    this.state = { loading: false }
    store.subscribe(() => {
      this.setState({
        loading: store.getState().loading
      })
    })
  }
  render () {
      console.log("i in");
    let windowSpinner = this.state.loading ? (
      <div className='lds-circle'>
        <div />
      </div>
    ) : null

    return <div>{windowSpinner}</div>
  }
}

export default Loading
