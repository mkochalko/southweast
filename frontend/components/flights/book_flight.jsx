import React from 'react';

class BookFlight extends React.Component {

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
                        <label>Depart
                            <input type="text"/>
                        </label>
                        <label>Passengers
                            <select>
                                <option value="1">1</option>
                            </select>
                        </label>
                    </div>
                    <div className="flight-search-submit-button">

                    </div>
                </form>
            </div>
        )
    }
}

export default BookFlight;