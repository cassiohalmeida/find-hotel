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

export const starFilter = (hotel, data) => {
  if (
    data.findIndex(x => x.checked == true) == -1 ||
    data[data.findIndex(x => x.checked == true)].value === 1
  ) {
    return true;
  }

  let result = data
    .filter(star => {
      return star.checked;
    })
    .map(star => {
      return star.value;
    });
  let max = Math.max.apply(null, result);
  let min = Math.min.apply(null, result);
  return hotel.star_rating == max || hotel.star_rating == min;
};

const filteredHotelsByMaxPrice = createSelector(
  hotels,
  visibilityFilter,
  (hotels, visibilityFilter) => {
    return hotels.filter(hotel => {
      return priceFilter(hotel, visibilityFilter.price);
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

const getHotelsFilteredOnlyByRanting = createSelector(
  hotels,
  visibilityFilter,
  (hotels, visibilityFilter) => {
    return hotels.filter(hotel => {
      return ratingFilter(hotel, visibilityFilter.rating);
    });
  }
);
export const getMobileFilteredHotels = createSelector(
  [getHotelsFilteredOnlyByRanting, visibilityFilter],
  (hotels, visibilityFilter) => {
    return hotels.filter(hotel => {
      return starFilter(hotel, visibilityFilter.stars);
    });
  }
);
