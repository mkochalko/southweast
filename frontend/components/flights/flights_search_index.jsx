import React from 'react';
import FlightSearchIndexItem from './flights_search_index_item';

// FOR TESTING
// Object.values(this.props.flightInfo.itineraries)
// FOR PRODUCTION
// this.props.flightInfo.itineraries

class FlightsSearchIndex extends React.Component {

    constructor(props) {
        super(props)

        // if (localStorage.prevLocation !== "/book" || localStorage.prevLocation !== "/") {
        //     this.props.history.push('/book')
        // }
        this.departurePriceArray = []
        this.returnPriceArray = []
        this.state = {
            departureFlight: {
                departureCityId: this.props.flightInfo[0].summary.op[0].k,
                arrivalCityId: this.props.flightInfo[0].summary.dp[0].k,
                departureDate: this.props.flightInfo[0].search_params.s[0].dd,
                duration: this.props.flightInfo[0].summary.dn,
                passengers: this.props.passengerCount,
                departureTime: '',
                price: 0
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

        this.updateFlightState = this.updateFlightState.bind(this);
        this.updateReturnFlightState = this.updateReturnFlightState.bind(this);
        this.createFlights = this.createFlights.bind(this);
        this.generatePrice = this.generatePrice.bind(this);
    }

    componentDidMount() {
        const header = document.getElementsByTagName("header")
        $(header).css("background-color", "#2f4cb2")
        const navBarText = document.getElementsByClassName("navbar")
        $(navBarText).css("color", "white")
        $(navBarText).css("background-color", "#2f4cb2")
        //NavBar Link Borders 
        const navBarLinkBorder = document.getElementById("navbar-links").getElementsByTagName("li")
        $(navBarLinkBorder).css("border-right", "2px solid white")
        //NavBar LoggedIn Greeting Border
        const navBarLoggedIn = document.getElementsByClassName("logged-in-account-link")
        $(navBarLoggedIn).css("border-right", "1px solid white")
    }

    componentWillUnmount() {
        const header = document.getElementsByTagName("header")
        $(header).css("background-color", "transparent")
        const body = document.getElementsByTagName("body");
        $(body).css("background", "transparent")
        const navBarText = document.getElementsByClassName("navbar")
        $(navBarText).css("color", "#304CB2")
        $(navBarText).css("background-color", "transparent")
        const navBarLinkBorder = document.getElementById("navbar-links").getElementsByTagName("li")
        $(navBarLinkBorder).css("border-right", "2px solid blue")
        const navBarLoggedIn = document.getElementsByClassName("logged-in-account-link")
        $(navBarLoggedIn).css("border-right", "1px solid blue")
    }

    updateFlightState(e) {
        let departure = e.currentTarget.innerHTML.toString().split('<div class="flights-search-single-time-item">')
        let newDepartureTime = departure[1].slice(0, 5)
        let price = parseInt(e.currentTarget.getAttribute('price'))

        this.setState((prevState) => ({ ...prevState,
            departureFlight: {
                departureCityId: this.props.flightInfo[0].summary.op[0].k,
                arrivalCityId: this.props.flightInfo[0].summary.dp[0].k,
                departureDate: this.props.flightInfo[0].search_params.s[0].dd,
                duration: this.props.flightInfo[0].summary.dn,
                passengers: this.props.passengerCount,
                departureTime: newDepartureTime,
                price: price
            }
        }), () => console.log(this.state))
    }

    updateReturnFlightState(e) {
        let returnTime = e.currentTarget.innerHTML.toString().split('<div class="flights-search-single-time-item">')
        let newReturnTime = returnTime[1].slice(0, 5)
        let price = parseInt(e.currentTarget.getAttribute('price'))

        this.setState((prevState) => ({ ...prevState, 
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
        }), () => console.log(this.state))
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

    generatePrice(duration) {

        let randomFactor = Math.random()
        let randomSignNumber = Math.round(Math.random())
        let randomSign = 1;
        if (randomSignNumber === 0) {
            randomSign = -1;
        } else {
            randomSign = 1;
        }
        let price = Math.floor(duration * (2 + (randomFactor * randomSign)))
        return price
    }

    render() {
        // console.log(localStorage)
        // if (this.props.flightInfo.length === 0) {
        //     this.props.history.push('/book')
        // }
        if (this.props.flightInfo.length > 0) {
            Object.values(this.props.flightInfo[0].itineraries).map(flight => {
                this.departurePriceArray.push(this.generatePrice(this.props.flightInfo[0].summary.dn))
            })
        } else if (this.props.flightInfo.length > 1) {
            Object.values(this.props.flightInfo[1].itineraries).map(flight => {
                this.returnPriceArray.push(this.generatePrice(this.props.flightInfo[1].summary.dn))
            })
        }
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
                <div className="flights-search-break-info">
                    <div className="flights-search-break-header">
                        <h3>Deparing Flights</h3>
                    </div>
                    <div className="flight-search-break-banner">
                        <h3>First Class Select</h3>
                        <div className="flight-search-break-banner-trangle"></div>
                    </div>
                </div>
                <ul>
                    { this.props.flightInfo.length > 0 ? (
                        // this.props.flightInfo[0].itineraries.map((flight, idx) => (
                        Object.values(this.props.flightInfo[0].itineraries).map((flight, idx) => {
                            return <li key={idx} price={this.departurePriceArray[idx]} onClick={this.updateFlightState}><FlightSearchIndexItem label="departure" flight={flight} departurePrice={this.selectDeparturePrice} duration={this.props.flightInfo[0].summary.dn} price={this.departurePriceArray[idx]} /></li>
                        })
                    ) : ""
                    }
                </ul>
                {
                    this.props.flightInfo.length > 1 ? (
                        <div>
                            <div className="flights-search-header-container">
                                <div className="flights-search-header-info-with-prices">
                                    <div className="flights-search-header-large-info">
                                        <img className="return-flight-icon" src={window.returnFlightIcon} />
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
                            <div className="flights-search-break-info">
                                <div className="flights-search-break-header">
                                    <h3>Return Flights</h3>
                                </div>
                                <div className="flight-search-break-banner">
                                    <h3>First Class Select</h3>
                                    <div className="flight-search-break-banner-trangle"></div>
                                </div>
                            </div>
                            <ul>
                                { this.props.flightInfo.length > 1 ? (
                                    this.props.flightInfo[1].itineraries.map((flight, idx) => (
                                        <li key={idx} price={this.returnPriceArray[idx]} onClick={this.updateReturnFlightState}><FlightSearchIndexItem label="return" flight={flight} duration={this.props.flightInfo[1].summary.dn} price={this.returnPriceArray[idx]} /></li>
                                    ))
                                ) : ""
                                }
                            </ul>
                        </div>
                    ) : ""
                }
                <div className="flight-select-container">
                    <button className="flight-select-button" onClick={this.createFlights}>Continue</button>
                </div>
            </div>
        )
    }
}

export default FlightsSearchIndex;