import React from 'react';
import FlightSearchIndexItem from './flights_search_index_item';

class FlightsSearchIndex extends React.Component {

    render() {
        console.log(this.props.flightInfo.summary.dn)
        return (
            <div>
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