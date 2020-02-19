import React from 'react'

class UpcomingTripIndexItem extends React.Component {

    render() {
        // Departure and Arrival Time Setup
        let departureDateTime = new Date(this.props.departureFlight.departureTime)
        let arrivalDateTime = new Date(departureDateTime.getTime() + this.props.departureFlight.duration*60000)
        let depTime = departureDateTime.toLocaleTimeString("en-US");
        let slicedDepTime = depTime.replace(":00", "");
        let arrTime = arrivalDateTime.toLocaleTimeString("en-US");
        let slicedArrTime = arrTime.replace(":00", "");
        // Departure Date setup
        let departureDate = new Date(this.props.departureFlight.departureDate)
        let departureDateString = departureDate.toDateString()
        let returnDate = new Date(this.props.returnFlight.departureDate)
        let returnDateString = returnDate.toDateString()
        return (
            <li className="tab-trip-li">
                {
                    Object.keys(this.props.cities).length > 0 && this.props.departureFlight && this.props.returnFlight ? (
                        <div className="tab-trip-info-index-item-upcoming">
                            <div>
                                <div className="tab-trip-up-next">
                                    <span>UP NEXT</span>
                                </div>
                                <div className="tab-trip-info-top-line">
                                    <div className="tab-trip-index-dates">
                                        <div>{departureDateString.slice(4, 10)}</div>
                                        <div className="tab-trip-index-dates-separator">-</div>
                                        <div> {returnDateString.slice(4, 10)}</div>
                                    </div>
                                    <div className="tab-trip-index-dates-airplane">
                                        <img src="https://image.flaticon.com/icons/svg/723/723955.svg" alt="airplane" height="15" width="15" />
                                    </div>
                                </div>
                                <div className="tab-trip-info-city-name">
                                    <h1>{this.props.departureFlight.departureCityId}</h1>
                                </div>
                            </div>
                            <div className="tap-trip-info-city-container">
                                <div className="tab-trip-upcoming-info">
                                    OUTBOUND
                                    <h4>{this.props.departureFlight.departureDate.slice(5).split("-").join("/")}</h4>
                                    <h5>{departureDateString.slice(0, 3)}</h5>
                                </div>
                                <div className="tab-trip-upcoming-info">
                                    DEPARTS
                                    <h4>{this.props.departureFlight.departureCityId}</h4>
                                    <h5>{slicedDepTime}</h5>
                                </div>
                                <div className="tap-trip-info-city-airplane">
                                    <img src="https://image.flaticon.com/icons/svg/61/61212.svg" alt="airplane" />
                                </div>
                                <div className="tab-trip-upcoming-info">
                                    ARRIVES
                                    <h4>{this.props.departureFlight.arrivalCityId}</h4>
                                    <h5>{slicedArrTime}</h5>
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

export default UpcomingTripIndexItem;