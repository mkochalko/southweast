import React from 'react';
import FlightSearchIndexItem from './flights_search_index_item';

// FOR TESTING
// Object.values(this.props.flightInfo.itineraries)
// FOR PRODUCTION
// this.props.flightInfo.itineraries

class FlightsSearchIndex extends React.Component {

    constructor(props) {
        super(props)
        let price = parseInt(this.props.flightInfo[0].summary.pd.slice(1))
        this.state = {
            departureFlight: {
                departureCityId: this.props.flightInfo[0].summary.op[0].k,
                arrivalCityId: this.props.flightInfo[0].summary.dp[0].k,
                departureDate: this.props.flightInfo[0].search_params.s[0].dd,
                duration: this.props.flightInfo[0].summary.dn,
                passengers: this.props.passengerCount,
                departureTime: '',
                price: price
            },
            returnFlight: {
                departureCityId: '',
                arrivalCityId: '',
                departureDate: '',
                duration: '',
                passengers: '',
                departureTime: '',
                price: 0
            },
        }

        this.selectDeparturePrice = this.selectDeparturePrice.bind(this);
        this.updateFlightState = this.updateFlightState.bind(this);
        this.updateReturnFlightState = this.updateReturnFlightState.bind(this);
        this.createFlights = this.createFlights.bind(this);
    }

    selectDeparturePrice(e) {
        console.log(e.currentTarget)
    }

    selectReturnProce(e) {
        // console.log(e.target)
    }

    updateFlightState(e) {
        let departure = e.currentTarget.innerHTML.toString().split('<div class="flights-search-single-time-item">')
        let newDepartureTime = departure[1].slice(0, 5)
        this.setState(() => { this.state.departureFlight.departureTime = newDepartureTime }, console.log(this.state))
    }

    updateReturnFlightState(e) {
        console.log(e.currentTarget.innerHTML)
        let returnTime = e.currentTarget.innerHTML.toString().split('<div class="flights-search-single-time-item">')
        console.log(returnTime)
        let newReturnTime = returnTime[1].slice(0, 5)
        let price = this.props.flightInfo[1].summary.pd.slice(1)
        console.log(price)
        console.log(parseInt(price))
        this.setState(() => { this.state = {
            departureFlight: this.state.departureFlight,
            returnFlight: {
                departureCityId: this.props.flightInfo[1].summary.op[0].k,
                arrivalCityId: this.props.flightInfo[1].summary.dp[0].k,
                departureDate: this.props.flightInfo[1].search_params.s[0].dd,
                duration: this.props.flightInfo[1].summary.dn,
                passengers: this.props.passengerCount,
                departureTime: newReturnTime,
                price: price
            }
        } 
        }, () => console.log(this.state))
    }

    createFlights() {
        if (this.props.flightInfo.length > 1) {
            this.props.postFlight(this.state.departureFlight)
            this.props.postFlight(this.state.returnFlight)
                .then(() => this.props.history.push("/confirmation"))
        } else {
            this.props.postFlight(this.state.departureFlight)
                .then(() => this.props.history.push("/confirmation"))
        }
    }

    render() {
        console.log(this.props.flightInfo)
        return (
            <div>
                <div className="flights-search-header-container">
                    <div className="flights-search-header-info-with-prices">
                        <div className="flights-search-header-large-info">
                            <img src="https://image.flaticon.com/icons/svg/181/181545.svg" alt="airplane" />
                            <h1>Depart:</h1>
                            <div className="flight-search-header-airport-codes">
                                <h1>{this.props.flightInfo[0].summary.op[0].k}</h1>
                                <img src="https://image.flaticon.com/icons/svg/61/61212.svg" alt=""/>
                                <h1>{this.props.flightInfo[0].summary.dp[0].k}</h1>
                            </div>
                        </div>
                        <div className="flights-search-header-price-options">

                        </div>
                    </div>
                    <div className="flights-search-header-small-info">
                        <h1>{this.props.flightInfo[0].summary.op[0].t}</h1> 
                        <span>to</span>
                        <h1>{this.props.flightInfo[0].summary.dp[0].t}</h1>
                    </div>
                </div>
                <ul>
                    { this.props.flightInfo.length > 0 ? (
                        this.props.flightInfo[0].itineraries.map((flight, idx) => (
                            <li key={idx} onClick={this.updateFlightState}><FlightSearchIndexItem flight={flight} departurePrice={this.selectDeparturePrice} duration={this.props.flightInfo[0].summary.dn} price={this.props.flightInfo[0].summary.pd} /></li>
                        ))
                    ) : ""
                    }
                </ul>
                {
                    this.props.flightInfo.length > 1 ? (
                        <div>
                            <div className="flights-search-header-container">
                                <div className="flights-search-header-info-with-prices">
                                    <div className="flights-search-header-large-info">
                                        <img src="https://image.flaticon.com/icons/svg/181/181545.svg" alt="airplane" />
                                        <h1>Return:</h1>
                                        <div className="flight-search-header-airport-codes">
                                            <h1>{this.props.flightInfo[1].summary.op[0].k}</h1>
                                            <img src="https://image.flaticon.com/icons/svg/61/61212.svg" alt=""/>
                                            <h1>{this.props.flightInfo[1].summary.dp[0].k}</h1>
                                        </div>
                                    </div>
                                    <div className="flights-search-header-price-options">

                                    </div>
                                </div>
                                <div className="flights-search-header-small-info">
                                    <h1>{this.props.flightInfo[1].summary.op[0].t}</h1> 
                                    <span>to</span>
                                    <h1>{this.props.flightInfo[1].summary.dp[0].t}</h1>
                                </div>
                            </div>
                            <ul>
                                { this.props.flightInfo.length > 1 ? (
                                    this.props.flightInfo[1].itineraries.map((flight, idx) => (
                                        <li key={idx} onClick={this.updateReturnFlightState}><FlightSearchIndexItem flight={flight} duration={this.props.flightInfo[1].summary.dn} price={this.props.flightInfo[1].summary.pd} /></li>
                                    ))
                                ) : ""
                                }
                            </ul>
                        </div>
                    ) : ""
                }

                <button onClick={this.createFlights}>Continue</button>
            </div>
        )
    }
}

export default FlightsSearchIndex;