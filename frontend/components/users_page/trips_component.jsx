import React from 'react';
import TripIndex from './trip_index';

class TripsComponent extends React.Component {

    render() {

        return (
            <div>
                <div className="tab-container">
                    <h1>Number of Upcoming Trips</h1>

                    <section>
                        <h1>Gray divider section</h1>
                    </section>

                    <div>
                        <TripIndex trips={this.props.trips}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default TripsComponent;