import React from 'react';
import PastTripIndexItemContainer from './past_trip_index_item_container';
import UpcomingTripIndexItemContainer from './upcoming_trip_index_item_container';

class TripIndex extends React.Component {
    constructor(props) {
        super(props)


    }
    render() {
        return (
            <div className="tab-trip-index-container">
                { this.props.typeKey === 'upcoming' ? (
                    <ul className="tab-trip-index">
                        {
                            this.props.trips.map((trip) => (
                                <UpcomingTripIndexItemContainer key={trip.id} trip={trip} />
                            ))
                        }
                    </ul>
                ) : (
                    <ul className="tab-trip-index">
                        {
                            this.props.trips.map((trip) => (
                                <PastTripIndexItemContainer key={trip.id} trip={trip} />
                            ))
                        }
                    </ul>
                )
                }
                
            </div>
        )
    }
}

export default TripIndex;