import React, { Component } from 'react';
import Paths from "./Components/Router";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <Paths />
    </Router>
    );
  }
}

export default App;
