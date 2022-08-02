import React, { Component } from 'react';
import Paths from "./Components/Router";
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";


const client =new ApolloClient({
  uri:"http://localhost:4000"
});



class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <ApolloProvider client ={client}>
        <Router>
          <Paths />
        </Router>
      </ApolloProvider>
      </Provider>
    );
  }
}

export default App;
