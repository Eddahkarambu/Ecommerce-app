import React, { Component } from 'react';
import Paths from "./Components/Router";
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import { BrowserRouter as Router } from "react-router-dom";


const client =new ApolloClient({
  uri:"http://localhost:4000"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client ={client}>
      <Router>
      <Paths />
    </Router>
    </ApolloProvider>
    );
  }
}

export default App;
