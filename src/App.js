import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Header from "./components/Header";
import AppContainer from "./components/AppContainer";
import FiltersContainer from "./containers/FiltersContainer";
import VisibleHotelList from "./containers/VisibleHotelList";

import reducer from "./reducers/index";
const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <Header />
        <FiltersContainer />
        <VisibleHotelList />
      </AppContainer>
    </Provider>
  );
};

export default App;
