import React from 'react';
import { withRouter, History } from 'react-router';
import BookFlightContainer from './book_flight_container';

class BookingComponent extends React.Component {

    render() {
        // console.log(this.props.history)
        // this.props.history.push('/')
        // console.log(localStorage)
        return (
            <div>
                <BookFlightContainer props={this.props} />

                <div className="flight-booking-fluff">
                    <div className="flight-booking-fluff-photo-container">
                        <img src="https://mk0maryharborjf5tnul.kinstacdn.com/wp-content/uploads/2019/01/airport-transfer.jpg" alt="airport"/>
                        <h2>Don't miss out on your next adventure</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(BookingComponent);