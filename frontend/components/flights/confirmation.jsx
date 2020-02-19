import React from 'react';


class Confirmation extends React.Component {
    constructor(props) {
        super(props)

        this.createTrip = this.createTrip.bind(this);
        this.configureDuration = this.configureDuration.bind(this);
        this.configureTime = this.configureTime.bind(this);
        this.configureAMPM = this.configureAMPM.bind(this);
        this.configureDate = this.configureDate.bind(this);
    }

    createTrip() {
        let updatedUser = this.props.user
        console.log(updatedUser[1].points)
        updatedUser[1].points -= this.props.flights[0].price + this.props.flights[1].price
        this.props.postTrip({
            userId: this.props.user.id,
            tripCode: 'TestBooking22',
            departureFlightId: this.props.flights[0].id,
            returnFlightId: this.props.flights.length > 1 ? this.props.flights[1].id : ''
        })
        this.props.buyFlight(updatedUser[1])
    }

    configureTime(time) {
        let departureTime = time.slice(11, 16);
        let hours = parseInt(departureTime.slice(0, 2));
        let minutes = departureTime.slice(3, 5);
        let configuredTime;
        if (hours > 12) {
            if (hours - 12 > 9) {
                configuredTime = hours - 12 + ":" + minutes
            } else {
                configuredTime = "0" + hours - 12 + ":" + minutes                
            }
        } else {
            configuredTime = departureTime
        }
        return configuredTime
    }

    configureAMPM(time) {
        let departureTime = time.slice(11, 16);
        let hours = parseInt(departureTime.slice(0, 2));
        let configuredTime;
        if (hours > 12) {
            configuredTime = " PM"
        } else {
            configuredTime = " AM"
        }
        return configuredTime
    }

    configureDuration(minutes) {
        let hours = Math.floor(minutes / 60);
        let durationMinutes;
        if (minutes % 60 < 10) {
            durationMinues = "0" + (minutes % 60);
        } else {
            durationMinutes = minutes % 60
        }
        return hours + "h " + durationMinutes + "m"
    }

    configureDate(date) {
        let tempDate = date + 'T00:00'
        let longDate = new Date(tempDate)
        let dateArray = longDate.toDateString().split(" ")
        let newDate = dateArray.slice(0, 3)
        return newDate.join(" ")
    }

    render() {
        console.log(this.props.user)
        console.log(this.props.flights)
        return (
            <div>
                <h1>Trip Price & Confirmation</h1>
                <div className="trip-confirmation-container">
                    <h3>Flight</h3>
                    <div>
                        {this.configureDate(this.props.flights[0].departureDate)}
                        {this.props.flights[0].departureCityId}
                        {this.props.flights[0].arrivalCityId}
                        {this.configureTime(this.props.flights[0].departureTime)}{this.configureAMPM(this.props.flights[0].departureTime)}
                        {this.configureDuration(this.props.flights[0].duration)}
                        <span>Nonstop</span>
                        {this.props.flights[0].passengers}
                    </div>

                    {
                        this.props.flights.length > 1 ? (
                            <div>
                                {this.configureDate(this.props.flights[1].departureDate)}
                                {this.props.flights[1].departureCityId}
                                {this.props.flights[1].arrivalCityId}
                                {this.configureTime(this.props.flights[1].departureTime)}{this.configureAMPM(this.props.flights[1].departureTime)}
                                {this.configureDuration(this.props.flights[1].duration)}
                                <span>Nonstop</span>
                                {this.props.flights[1].passengers}
                            </div>
                        ) : ""
                    }
                </div>

                
                <button onClick={this.createTrip}>Confirm Booking</button>
                
            </div>
        )
    }
}

export default Confirmation;