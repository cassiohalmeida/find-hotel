import { createSelector } from "reselect";

const hotels = state => state.hotels;
const visibilityFilter = state => state.visibilityFilter;

export const priceBetweenFilter = (hotel, minPrice, maxPrice) => {
  return (
    Math.trunc(hotel.price) >= minPrice &&
    Math.trunc(hotel.price) <= maxPrice
  );
};

export const ratingFilter = (hotel, rating) => {
  return Math.trunc(hotel.review_rating.rating) == rating;
};

export const distanceFilter = (hotel, distanceCenter) => {
  return hotel.distance_center == distanceCenter;
};

export const getFilteredHotels = createSelector(
  hotels,
  visibilityFilter,
  (hotels, visibilityFilter) => {
    return hotels.filter(hotel => {
      return (
        priceBetweenFilter(hotel, visibilityFilter.price - visibilityFilter.priceStep, visibilityFilter.price) ||
        ratingFilter(hotel, visibilityFilter.rating) &&
        distanceFilter(hotel, visibilityFilter.distanceCenter)
      );
    });
  }
);
