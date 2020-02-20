import React from 'react';

class BookFlight extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.trip

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.roundTrip = this.roundTrip.bind(this);
        this.oneWayTrip = this.oneWayTrip.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.dd2.length > 0) {
            this.props.createFlightSession(this.state)
                .then(() => this.props.createReturnFlightSession(this.state))
                .then(() => this.props.updatePassengers(this.state.ta))
                .then(() => this.props.history.push("/flights_search"))
        } else {
            this.props.createFlightSession(this.state)
                .then(() => this.props.updatePassengers(this.state.ta))
                .then(() => this.props.history.push("/flights_search"))
        }
        // setTimeout( () => Object.keys(this.props.flightsApi).length > 0 ? this.props.history.push("/flights_search") : "", 2000 )
    }

    onChange(form) {
        return (e) => this.setState({ [form]: e.currentTarget.value}, () => console.log(this.state))
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
                                        <input type="date" 
                                            className="flight-search-departure-datepicker"
                                            onChange={this.onChange("dd1")}
                                            value={this.state.dd1}
                                        />
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
                                        <input type="date"
                                            className="return-date-enabled"
                                            id="return-date"
                                            onChange={this.onChange("dd2")}
                                            value={this.state.dd2}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flight-search-submit-button">
                                <div>{this.props.errors}</div>
                                <input type="submit" value="Search"/>
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
                {/* <div className="flight-booking-fluff">
                    <div className="flight-booking-fluff-photo-container">
                        <img src="https://mk0maryharborjf5tnul.kinstacdn.com/wp-content/uploads/2019/01/airport-transfer.jpg" alt="airport"/>
                        <h2>Don't miss out on your next adventure</h2>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default BookFlight;