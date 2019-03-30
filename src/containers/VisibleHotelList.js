import { connect } from "react-redux";
import HotelList from "../components/HotelList";
import { getAllHotels } from '../selectors/index';

const mapStateToProps = state => {
  return {
    hotels: getAllHotels(state)
  }
}
export default connect(mapStateToProps)(HotelList);
