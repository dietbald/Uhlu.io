import React, { Component } from "react";
import "./App.css";
import UhluList from "./UhluList";
import Layout from "./Layout";
import { Provider } from "react-redux";

import { createStore } from "redux";
import reducers from "./reducers";
const store = createStore(reducers);

class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <Layout>
          <UhluList />
        </Layout>
      </Provider>
    );
  }
}

export default App;
