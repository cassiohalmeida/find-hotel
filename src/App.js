import React, { Component } from "react";
import Header from './components/Header';
import AppContainer from './components/AppContainer'
class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header />
      </AppContainer>
    );
  }
}

export default App;
