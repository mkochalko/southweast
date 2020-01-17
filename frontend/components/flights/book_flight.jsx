import React from 'react';

class BookFlight extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.trip

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // console.log(this.props.flightsApi)
        this.props.createFlightSession(this.state).then()
        setTimeout( () => Object.keys(this.props.flightsApi).length > 0 ? this.props.history.push("/flights_search") : "", 2000 )
    }

    onChange(form) {
        return (e) => this.setState({ [form]: e.currentTarget.value})
    }

    render() {
        return (
            <section className="flight-search-container-background">
                <div className="flight-search-container">
                    <form onSubmit={this.handleSubmit} className="flight-search-form-container">
                        <div className="flight-search-oneway-radio">
                            <section id="group1">
                                <input type="radio" value="roundtrip" name="group1" /><span className="flight-search-radio-labels">Roundtrip</span>
                                <input type="radio" value="roundtrip" name="group1" /><span className="flight-search-radio-labels">One-way</span>
                            </section>
                            <section id="group2">
                                <input type="radio" value="pricing" name="group2" /><span className="flight-search-radio-labels">Dollars</span>
                                <input type="radio" value="pricing" name="group2" /><span className="flight-search-radio-labels">Points</span>
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
                                        onChange={this.onChange("returnDate")}
                                        value={this.state.returnDate}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flight-search-submit-button">
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
        )
    }
}

export default BookFlight;