import React, { Component } from "react";
import Login from "./Login";
import "./Home.css";
import store from '../store';
import { Provider } from "react-redux";

const homeStyle = {
  backgroundImage: "../background.jpg"
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.updateStore = this.updateStore.bind(this);
    this.state = { loading: false };
  }
  holi = store.subscribe(() => {
    console.log(store.getState())
  });

  submit = values => {
    // print the form values to the console
    console.log(values)
    this.updateStore.bind()
    store.dispatch({ type: 'mostrar' });

    setTimeout(() => {
      store.dispatch({ type: 'mostrar' });
    }, 1000);
  }

  updateStore() {
    store.dispatch({ type: 'sumar' });
  }
  render() {
    return (
      <div className="row home" style={homeStyle}>
        <div className="col-md-4 mx-auto">
          <Provider store={store}>
            <Login onSubmit={this.submit} />
          </Provider>
          {this.loading}
          <button className="btn btn-danger btn-sm" onClick={this.updateStore}>Ok</button>
        </div>
      </div>)
  }
};

export default Home;
