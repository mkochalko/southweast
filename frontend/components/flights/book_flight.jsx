import React from 'react';
import DatePicker from 'react-datepicker';
import { format, parseISO } from 'date-fns';
// import "react-datepicker/dist/react-datepicker.css";


class BookFlight extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.trip

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.roundTrip = this.roundTrip.bind(this);
        this.oneWayTrip = this.oneWayTrip.bind(this);
    }

    handleSubmit(e) {
        let searchButton = document.getElementById("flight-search-button")
        let searchLoading = document.getElementById("flight-search-button-loading")
        searchButton.style.display = "none"
        searchLoading.style.display = 'flex'
        this.props.clearBookingErrors()
        localStorage.setItem('prevLocation', this.props.props.history.location.pathname)
        e.preventDefault();
        if (this.state.dd2.length > 0) {
            this.props.createFlightSession(this.state)
                .then(() => this.props.createReturnFlightSession(this.state))
                .then(() => this.props.updatePassengers(this.state.ta))
                .then(() => this.props.props.history.push("/flights_search"))
        } else {
            this.props.createFlightSession(this.state)
                .then(() => this.props.updatePassengers(this.state.ta))
                .then(() => this.props.props.history.push("/flights_search"))
        }
        
        // setTimeout( () => Object.keys(this.props.flightsApi).length > 0 ? this.props.history.push("/flights_search") : "", 2000 )
    }

    componentWillUnmount() {
        document.getElementById("flight-search-button").style.display = "flex";
        document.getElementById("flight-search-button-loading").style.display = "none"
        
    }

    onDateChange(form) {
        return (e) => {
            this.setState({ [form]: e}, () => console.log(this.state))
        }
    }

    onChange(form) {
        return (e) => this.setState({ [form]: e.currentTarget.value }, () => console.log(this.state))
    }

    roundTrip() {
        let returnDate = document.getElementById("return-date")
        returnDate.removeAttribute("disabled")
        returnDate.className = 'return-date-enabled'
    }

    oneWayTrip() {
        let returnDate = document.getElementById("return-date")
        returnDate.setAttribute("disabled", "true")
        returnDate.className = 'return-date-disabled'
    }

    render() {
        // console.log(this.props)
        if (this.props.errors.length > 0) {
            document.getElementById("flight-search-button").style.display = "flex";
            document.getElementById("flight-search-button-loading").style.display = "none"
        }
        return (
            <div>
                <section className="flight-search-container-background">
                    <div className="flight-search-container">
                        <form onSubmit={this.handleSubmit} className="flight-search-form-container">
                            <div className="flight-search-oneway-radio">
                                <section id="group1">
                                    <input type="radio" value="roundtrip" name="group1" onChange={this.roundTrip} checked/><span className="flight-search-radio-labels">Roundtrip</span>
                                    <input type="radio" value="roundtrip" name="group1" onChange={this.oneWayTrip}  /><span className="flight-search-radio-labels">One-way</span>
                                </section>
                                <section id="group2">
                                    {/* <input type="radio" value="pricing" name="group2" /><span className="flight-search-radio-labels">Dollars</span> */}
                                    {/* <input type="radio" value="pricing" name="group2" checked/> */}
                                    <span className="flight-search-radio-labels">Points</span>
                                </section>
                            </div>
                            <div className="flight-search-form">
                                <div className="flight-search-form-input-grouping">
                                    <div className="flight-search-form-single-input-grouping">
                                        <h4>Depart</h4>
                                        <input type="text"
                                            onChange={this.onChange("o1")}
                                            value={this.state.o1}
                                        />
                                    </div>

                                    <div className="flight-search-form-single-input-grouping datepicker">
                                        <h4>Depart Date</h4>
                                        {<DatePicker selected={this.state.dd1} onChange={this.onDateChange("dd1")}/>}
                                    </div>
                                    <div className="flight-search-form-single-input-grouping">
                                        <h4>Passengers</h4>
                                        <select onChange={this.onChange("ta")}>
                                            <option value="1">1</option> 
                                            <option value="2">2</option> 
                                            <option value="3">3</option> 
                                            <option value="4">4</option> 
                                            <option value="5">5</option> 
                                            <option value="6">6</option> 
                                            <option value="7">7</option> 
                                            <option value="8">8</option> 
                                            <option value="9">9</option>
                                        </select>
                                    </div>
                                </div>
                                <input type="hidden" name="currency" value="USD"/>
                                <input type="hidden" name="passengers" value="1"/>
                                <div className="flight-search-form-input-grouping">
                                    <div className="flight-search-form-single-input-grouping">
                                        <h4>Arrive</h4>
                                        <input type="text" 
                                            onChange={this.onChange("d1")}
                                            value={this.state.d1}
                                        />
                                    </div>
                                    <div className="flight-search-form-single-input-grouping datepicker">
                                        <h4>Return Date</h4>
                                        {<DatePicker selected={this.state.dd2} onChange={this.onDateChange("dd2")} />}
                                    </div>
                                </div>
                            </div>
                            <div className="flight-search-submit-button">
                                <div>{this.props.errors}</div>
                                <input id="flight-search-button" type="submit" value="Search"/>
                                <div id="flight-search-button-loading"><img src={window.loadingDots} alt="waiting dots"/></div>
                            </div>
                        </form>
                        <div className="flight-search-weast-message-container">
                            <div className="flight-search-weast-message-section">
                                <img src={window.compassURL}/>
                                <p>West</p>
                            </div>

                            <div className="flight-search-weast-message-section">
                                <img src={window.weastCompassURL}/>
                                <p>I thought you said Weast</p>
                            </div>

                            <div className="flight-search-message-slanted-section"></div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default BookFlight;