import React from 'react'

class TripIndexItem extends React.Component {

    render() {

        return(
            <li>
                {this.props.trip.tripCode}
                
            </li>
        )
    }
}

export default TripIndexItem;