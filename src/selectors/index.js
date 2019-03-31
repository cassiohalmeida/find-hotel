import { createSelector } from "reselect";

const hotels = state => state.hotels;
const visibilityFilter = state => state.visibilityFilter;

export const priceFilter = (hotel, maxPrice) => {
  return Math.trunc(hotel.price) <= maxPrice;
};

export const ratingFilter = (hotel, rating) => {
  return Math.trunc(hotel.review_rating.rating) > rating;
};

export const distanceFilter = (hotel, distanceCenter) => {
  return hotel.distance_center == distanceCenter;
};

const filteredHotelsByMaxPrice = createSelector(
  hotels,
  visibilityFilter,
  (hotels, visibilityFilter) => {
    return hotels.filter(hotel => {
      return priceFilter(
        hotel,
        visibilityFilter.price
      );
    });
  }
);
const filteredHotelsByMinRating = createSelector(
  [filteredHotelsByMaxPrice, visibilityFilter],
  (hotels, visibilityFilter) => {
    return hotels.filter(hotel => {
      return ratingFilter(hotel, visibilityFilter.rating);
    });
  }
);
export const getFilteredHotels = createSelector(
  [filteredHotelsByMinRating, visibilityFilter],
  (hotels, visibilityFilter) => {
    return hotels.filter(hotel => {
      return distanceFilter(hotel, visibilityFilter.distanceCenter);
    });
  }
);
