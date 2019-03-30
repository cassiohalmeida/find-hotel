import { createSelector } from "reselect";

export const getAllHotels = createSelector(
  state => state.hotels,
  state => state.visibilityFilter,
  (hotels, visibilityFilter) => {
    switch (visibilityFilter.filter) {
      case "FILTER_BY_MAX_PRICE":
        console.log(visibilityFilter.price);
        return hotels.filter(hotel => {
          return hotel.price <= visibilityFilter.price;
        });
      default:
        return hotels;
    }
  }
);
