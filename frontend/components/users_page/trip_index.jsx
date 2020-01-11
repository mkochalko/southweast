import React from 'react';
import TripIndexItemContainer from './trip_index_item_container';

class TripIndex extends React.Component {
    constructor(props) {
        super(props)


    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.trips.map((trip) => (
                            <TripIndexItemContainer  key={trip.id} trip={trip}/>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default TripIndex;