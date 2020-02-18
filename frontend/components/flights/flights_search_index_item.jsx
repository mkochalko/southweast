import React from 'react';

class FlightSearchIndexItem extends React.Component {

    constructor(props) {
        super(props)

        this.configureTime = this.configureTime.bind(this);
        this.configureDuration = this.configureDuration.bind(this);
        this.configureAMPM = this.configureAMPM.bind(this);
    }

    configureTime(time) {
        let departureTime = time.slice(11, 16);
        let hours = parseInt(departureTime.slice(0, 2));
        let minutes = departureTime.slice(3, 5);
        let configuredTime;
        if (hours > 12) {
            configuredTime = hours - 12 + ":" + minutes
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

    

    render() {
        return(
            <div className="flights-search-item-container">
                <div className="flight-search-stops-and-flight-number">
                    <p>Nonstop</p> 
                    <span># {this.props.flight.f[0].l[0].f}</span>
                </div>
                <div className="flights-search-times-container">
                    <div className="flights-search-single-time-item">
                        {this.configureTime(this.props.flight.f[0].l[0].dd)}<span>{this.configureAMPM(this.props.flight.f[0].l[0].dd)}</span>
                    </div>
                    <img src="https://image.flaticon.com/icons/svg/271/271226.svg" alt="arrow"/>
                    <div className="flights-search-single-time-item">
                        {this.configureTime(this.props.flight.f[0].l[0].ad)}<span>{this.configureAMPM(this.props.flight.f[0].l[0].ad)}</span>
                    </div>
                </div>
                <div className="flight-search-times-duration">
                    <div>
                        <h5>Duration</h5>
                        <h6>{this.configureDuration(this.props.duration)}</h6>
                    </div>
                    <div className="flight-search-times-duration-shapes">
                        <span className="flight-search-times-duration-circle"></span>
                        <span className="flight-search-times-duration-line"></span>
                        <span className="flight-search-times-duration-circle"></span>
                    </div>
                </div>
                <div onClick={this.props.departurePrice} className="flight-search-times-price">
                    <h4><span>$</span>{this.props.price.slice(1)}</h4>
                </div>
            </div>
        )
    }
}

export default FlightSearchIndexItem;