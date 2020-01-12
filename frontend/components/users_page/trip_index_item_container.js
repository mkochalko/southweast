import { connect } from 'react-redux';
import TripIndexItem from './trip_index_item';


const mapStateToProps = (state, ownProps) => {
    return ({
    trip: state.entities.trips[ownProps.trip.id],
    departureFlight: state.entities.flights[ownProps.trip.departureFlightId],
    returnFlight: state.entities.flights[ownProps.trip.returnFlightId],
    cities: state.entities.cities
})
}


const mapDispatchToProps = dispatch => ({
    
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TripIndexItem)