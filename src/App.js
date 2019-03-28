import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Header from "./components/Header";
import AppContainer from "./components/AppContainer";
import FiltersContainer from "./components/FiltersContainer";

import reducer from "./reducers/hotels";
const store = createStore(reducer);

console.log(store.getState());

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <Header />
        <FiltersContainer />
      </AppContainer>
    </Provider>
  );
};

export default App;
