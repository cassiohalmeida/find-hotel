import { createSelector } from "reselect";

const hotels = state => state.hotels;
const visibilityFilter = state => state.visibilityFilter;

export const getHotelsFilteredByPrice = createSelector(
  hotels,
  visibilityFilter,
  (hotels, visibilityFilter) => {
    switch (visibilityFilter.filter) {
      case "FILTER_BY_MAX_PRICE":
        return hotels.filter(hotel => {
          return hotel.price <= visibilityFilter.price;
        });
      default:
        return hotels;
    }
  }
);

export const getHotelsFilteredByRating = createSelector(
  getHotelsFilteredByPrice,
  state => state.visibilityFilter,
  (filteredByPrice, visibilityFilter) => {
    debugger
    switch (visibilityFilter.filter) {
      case "FILTER_BY_MIN_RATING":
        return filteredByPrice.filter(hotel => {
          return hotel.review_rating.rating <= visibilityFilter.rating;
        });
      default:
        return filteredByPrice;
    }
  }
);
