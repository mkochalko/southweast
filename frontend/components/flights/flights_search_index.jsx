import React from 'react';
import FlightSearchIndexItem from './flights_search_index_item';

// FOR TESTING
// Object.values(this.props.flightInfo.itineraries)
// FOR PRODUCTION
// this.props.flightInfo.itineraries

class FlightsSearchIndex extends React.Component {

    render() {
        console.log(this.props.flightInfo.airports[1][1].c)
        return (
            <div>
                <div className="flights-search-header-container">
                    <div className="flights-search-header-into-with-prices">
                        <div className="flights-search-header-large-info">
                            <div><img src="https://image.flaticon.com/icons/svg/181/181545.svg" alt="airplane" /></div>
                            <h1>Depart:</h1>
                            <div className="flight-search-header-airport-codes">
                                <h1>{this.props.flightInfo.airports[1][1].c}</h1>
                                <img src="https://image.flaticon.com/icons/svg/61/61212.svg" alt=""/>
                                <h1>{this.props.flightInfo.airports[0][0].c}</h1>
                            </div>
                        </div>
                        <div className="flights-search-header-price-options">

                        </div>
                    </div>
                    <div className="flights-search-header-small-info">
                        <h1>{this.props.flightInfo.airports[1][1].cn} - {this.props.flightInfo.airports[1][1].c}</h1> 
                        <span>to</span>
                        <h1>{this.props.flightInfo.airports[0][0].cn} - {this.props.flightInfo.airports[0][0].c}</h1>
                    </div>
                </div>
                <ul>
                    { Object.keys(this.props.flightInfo).length > 0 ? (
                        Object.values(this.props.flightInfo.itineraries).map((flight, idx) => (
                            <FlightSearchIndexItem key={idx} flight={flight} duration={this.props.flightInfo.summary.dn} price={this.props.flightInfo.summary.pd}/>
                        ))
                    ) : ""
                    }
                </ul>
            </div>
        )
    }
}

export default FlightsSearchIndex;