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
        this.props.createFlightSession(this.state)
        this.props.history.push("/flights_search")
    }

    onChange(form) {
        return (e) => this.setState({ [form]: e.currentTarget.value})
    }

    render() {

        return (
            <section className="flight-search-container-background">
                <div className="flight-search-container">
                    <div className="flight-search-oneway-radio">
                        <label> 
                            <input type="radio" name="roundtrip" id=""/>Roundtrip
                        </label>
                        <label> 
                            <input type="radio" name="roundtrip" id=""/>One-way
                        </label>
                    </div>
                    <form onSubmit={this.handleSubmit} className="flight-search-form-container">
                        <div className="flight-search-form">
                            <div>
                                <label>Depart
                                    <input type="text"
                                        onChange={this.onChange("o1")}
                                        value={this.state.o1}
                                    />
                                </label>
                                <label>Depart Date
                                    <input type="date" 
                                        onChange={this.onChange("dd1")}
                                        value={this.state.dd1}
                                    />
                                </label>
                                <label>Passengers
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
                                </label>
                            </div>
                            <input type="hidden" name="currency" value="USD"/>
                            <input type="hidden" name="passengers" value="1"/>
                            <div>
                                <label>Arrive
                                    <input type="text" 
                                        onChange={this.onChange("d1")}
                                        value={this.state.d1}
                                    />
                                </label>
                                <label>Return Date
                                    <input type="text" 
                                        id="datepicker" 
                                        onChange={this.onChange("returnDate")}
                                        value={this.state.returnDate}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="flight-search-submit-button">
                            <input type="submit" value="Search"/>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default BookFlight;