import { connect } from "react-redux";
import HotelList from "../components/HotelList";
import { getHotelsFilteredByRating } from '../selectors/index';

const mapStateToProps = state => {
  return {
    hotels: getHotelsFilteredByRating(state)
  }
}
export default connect(mapStateToProps)(HotelList);
