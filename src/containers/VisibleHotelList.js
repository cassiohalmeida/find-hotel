import { connect } from "react-redux";
import HotelList from "../components/HotelList";
import { getFilteredHotels } from '../selectors/index';

const mapStateToProps = state => {
  return {
    hotels: getFilteredHotels(state)
  }
}
export default connect(mapStateToProps)(HotelList);
