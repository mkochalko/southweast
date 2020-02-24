import React from 'react'

class PastTripIndexItem extends React.Component {
    constructor(props) {
        super(props)

        this.configureDate = this.configureDate.bind(this);
    }

    configureDate(date) {
        let tempDate = date + 'T00:00'
        let longDate = new Date(tempDate)
        let dateArray = longDate.toDateString().split(" ")
        let newDate = dateArray.slice(0, 3)
        return newDate.join(" ").slice(4, 10)
    }

    render() {
        let departureDate = new Date(this.props.departureFlight.departureDate)
        let departureDateString = departureDate.toDateString()
        let returnDate = new Date(this.props.returnFlight.departureDate)
        let returnDateString = returnDate.toDateString()
        return(
            <li className="tab-trip-li">
                {
                    this.props.departureFlight && this.props.returnFlight ? (
                        <div className="tab-trip-info-index-item">
                            <div className="tab-trip-info-top-line-past">
                                <div className="tab-trip-index-dates">
                                    <div>{this.configureDate(this.props.departureFlight.departureDate)}</div>
                                    <div className="tab-trip-index-dates-separator">-</div>
                                    <div> {this.props.returnFlight ? this.configureDate(this.props.returnFlight.departureDate) : "TBD"}</div>
                                </div>
                                <div className="tab-trip-index-dates-airplane">
                                    <img src="https://image.flaticon.com/icons/svg/723/723955.svg" alt="airplane" height="15" width="15"/>
                                </div>
                            </div>
                            <div className="tap-trip-info-city-container">
                                <div>
                                    DEPARTS
                                    <h4>{this.props.departureFlight.departureCityId}</h4>
                                </div>
                                <div className="tap-trip-info-city-airplane">
                                    <img src="https://image.flaticon.com/icons/svg/61/61212.svg" alt="airplane"/>
                                </div>
                                <div>
                                    ARRIVES
                                    <h4>{this.props.departureFlight.arrivalCityId}</h4>
                                </div>
                            </div>
                            <div className="tap-trip-info-confirmation">
                                Confirmation # <span>{this.props.trip.tripCode}</span>
                            </div>
                        </div>
                     ) : ""
                }
            </li>
        )
    }
}

export default PastTripIndexItem;