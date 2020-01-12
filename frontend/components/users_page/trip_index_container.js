import { connect } from 'react-redux';
import TripIndex from './trip_index';

const mapStateToProps = (state, ownProps) => ({
        trips: ownProps.trips
    })

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TripIndex)