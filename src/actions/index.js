export const VisibilityFilters = {
  FILTER_BY_PRICE: "FILTER_BY_PRICE",
  FILTER_BY_RATING: "FILTER_BY_RATING",
  FILTER_BY_DISTANCE: "FILTER_BY_DISTANCE",
  FILTER_BY_STARS: "FILTER_BY_STARS"
};

export const filterByPrice = price => ({
  type: VisibilityFilters.FILTER_BY_PRICE,
  payload: {
    price
  }
});
