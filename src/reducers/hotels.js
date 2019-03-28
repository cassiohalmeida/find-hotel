import { VisibilityFilters } from '../actions'
import data from "../data";
const initialState = data;


const hotels = (state = initialState, action) => {
  switch (action.type) {
    case VisibilityFilters.FILTER_BY_PRICE:
      return state.filter(h => h.good);
    default:
      return state;
  }
};

export default hotels;
