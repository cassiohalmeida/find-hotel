import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import Header from "./components/Header";
import AppContainer from "./components/AppContainer";
import FiltersContainer from "./containers/FiltersContainer";
import FiltersMobileContainer from "./containers/FiltersMobileContainer";
import VisibleHotelList from "./containers/VisibleHotelList";
import MobileVisibleHotelList from "./containers/MobileVisibleHotelList";

import reducer from "./reducers/index";
const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <Header />
        <BrowserView>
          <FiltersContainer/>
          <VisibleHotelList />
        </BrowserView>
        <MobileView>
          <FiltersMobileContainer />
          <MobileVisibleHotelList/>
        </MobileView>
      </AppContainer>
    </Provider>
  );
};

export default App;
