import { connect } from 'react-redux';
import UpcomingTripIndexItem from './upcoming_trip_index_item';


const mapStateToProps = (state, ownProps) => {
    return ({
        trip: state.entities.trips[ownProps.trip.id],
        departureFlight: state.entities.flights[ownProps.trip.departureFlightId],
        returnFlight: state.entities.flights[ownProps.trip.returnFlightId]
    })
}


const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpcomingTripIndexItem)