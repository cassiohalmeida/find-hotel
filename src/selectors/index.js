import { createSelector } from "reselect";

const hotels = state => state.hotels;
const visibilityFilter = state => state.visibilityFilter;

export const getFilteredHotels = createSelector(
  hotels,
  visibilityFilter,
  (hotels, visibilityFilter) => {
    return hotels.filter(hotel => {
      return (
        hotel.price >= visibilityFilter.price - 100 && hotel.price <= visibilityFilter.price
      );
    });
  }
);
