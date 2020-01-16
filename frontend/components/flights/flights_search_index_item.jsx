import React from 'react';

class FlightSearchIndexItem extends React.Component {

    constructor(props) {
        super(props)

        this.configureTime = this.configureTime.bind(this);
        this.configureDuration = this.configureDuration.bind(this);
    }

    configureTime(time) {
        let departureTime = time.slice(11, 16);
        let hours = parseInt(departureTime.slice(0, 2));
        let minutes = departureTime.slice(3, 5);
        let configuredTime;
        if (hours > 12) {
            configuredTime = hours - 12 + ":" + minutes + " PM"
        } else {
            configuredTime = departureTime + " AM"
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

    render() {
        return(
            <li className="flights-search-item-container">
                <div className="flights-search-times-container">
                    {this.configureTime(this.props.flight.f[0].l[0].dd)}
                    <img src="https://image.flaticon.com/icons/svg/271/271226.svg" alt="arrow"/>
                    {this.configureTime(this.props.flight.f[0].l[0].ad)}
                </div>
                <div className="flight-search-times-duration">
                    <div>
                        <h6>Duration</h6>
                        <h6>{this.configureDuration(this.props.duration)}</h6>
                    </div>
                    <div className="flight-search-times-duration-shapes">
                        <span className="flight-search-times-duration-circle"></span>
                        <span className="flight-search-times-duration-line"></span>
                        <span className="flight-search-times-duration-circle"></span>
                    </div>
                </div>
                <div>
                    <h4>{this.props.price}</h4>
                </div>
            </li>
        )
    }
}

export default FlightSearchIndexItem;