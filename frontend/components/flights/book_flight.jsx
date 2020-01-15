import React from 'react';

class BookFlight extends React.Component {

    calander() {
        
    }

    render() {

        return (
            <div className="flight-search-container">
                <div className="flight-search-oneway-radio">
                    <label> 
                        <input type="radio" name="roundtrip" id=""/>Roundtrip
                    </label>
                    <label> 
                        <input type="radio" name="roundtrip" id=""/>One-way
                    </label>
                </div>
                <form className="flight-search-form-container">
                    <div className="flight-search-form">
                        <div>
                            <label>Depart
                                <input type="text"/>
                            </label>
                            <label>Depart Date
                                <input type="text" id="datepicker" />
                            </label>
                            <label>Passengers
                                <select>
                                    <option value="1">1</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <label>Arrive
                                <input type="text" />
                            </label>
                            <label>Return Date
                                <input type="text" id="datepicker" />
                            </label>
                        </div>
                    </div>
                    <div className="flight-search-submit-button">
                        <input type="submit" value="Search"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default BookFlight;