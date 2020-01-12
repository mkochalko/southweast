import React from 'react';
import TripIndexContainer from './trip_index_container';

class TripsComponent extends React.Component {

    render() {

        return (
            <div>
                <div className="tab-container">
                    <div className='tab-container-header'>
                        <h1>Upcoming Trips</h1>
                    </div>

                    <section className='tab-divider-section'>
                        <h1>Carousel Section Placeholder</h1>
                    </section>

                    <div>
                        <TripIndexContainer trips={this.props.trips}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default TripsComponent;