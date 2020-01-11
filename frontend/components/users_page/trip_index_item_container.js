import { connect } from 'react-redux';
import TripIndexItem from './trip_index_item';


const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps)
    // console.log(state)
    return ({
    trip: state.entities.trips[ownProps.trip.id]
})}

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TripIndexItem)