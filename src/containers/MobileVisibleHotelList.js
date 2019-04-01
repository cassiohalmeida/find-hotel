import { connect } from "react-redux";
import HotelList from "../components/HotelList";
import { getMobileFilteredHotels } from '../selectors/index';

const mapStateToProps = state => {
  return {
    hotels: getMobileFilteredHotels(state)
  }
}
export default connect(mapStateToProps)(HotelList);
