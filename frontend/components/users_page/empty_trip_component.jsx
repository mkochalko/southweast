import React from 'react';
import TripIndex from './trip_index';

class EmptyTripsComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            upcoming: [],
            past: [],
            watchlist: [],
            upcomingTripCount: 0,
            pastTripCount: 0,
            upcomingCarouselTabs: 0,
            pastCarouselTabs: 0
        }

    }


    separateTrips() {
        let date = new Date
        const upcoming = [];
        const past = [];
        let flightObj;
        for (let i = 0; i < this.props.trips.length; i++) {
            flightObj = this.props.trips[i].departureFlightId
            let flightDate;
            for (let i = 0; i < this.props.flights.length; i++) {
                if (this.props.flights[i].id === flightObj) {
                    flightDate = this.props.flights[i].departureDate
                }
            }
            let dateArr = date.toLocaleDateString('zh-Hans-CN').split("/")
            let dateIntString = dateArr.map((item, i) => {
                if (i === 1 && item < 10) {
                    return '0' + item
                } else {
                    return item
                }
            })
            let dateInt = parseInt(dateIntString.join(""))
            let flightDateInt = parseInt(flightDate.split("-").join(""))
            if (flightDateInt > dateInt) {
                upcoming.push(this.props.trips[i])
            } else {
                past.push(this.props.trips[i])
            }
        }
        this.setState({ upcoming: upcoming, past: past })
    }

    render() {
        return (
            <div id="tab-carousel">
                <div id="upcoming-carousel" className="tab-container">
                    <div className='tab-container-header'>
                        <h1>{this.state.upcoming.length} Upcoming Trips</h1>
                    </div>

                    <section className='tab-divider-section'>
                        <h1>
                            <input type="button" className="arrow left upcoming" id="tab-divider-section-left-button upcoming-left" onClick={this.onLeftClickUpcoming}></input>
                            <span>Page</span> <span>{this.state.upcomingTripCount + 1}</span> <span>of</span><span>{this.state.upcomingCarouselTabs.length > 2 ? Math.ceil(this.state.upcomingCarouselTabs.length / 2) : 1}</span>
                            <input type="button" className="arrow right upcoming" id="tab-divider-section-right-button upcoming-right" onClick={this.onRightClickUpcoming}></input>
                        </h1>
                    </section>

                    <div>
                        <TripIndex typeKey="upcoming" trips={this.state.upcoming} />
                    </div>
                </div>
                <div id="past-carousel" className="tab-container">
                    <div className='tab-container-header'>
                        <h1>{this.state.past.length} Past Trips</h1>
                    </div>

                    <section className='tab-divider-section'>
                        <h1>
                            <input type="button" className="arrow left past" id="tab-divider-section-left-button past-left" onClick={this.onLeftClickPast}></input>
                            <span>Page</span> {this.state.pastTripCount + 1} <span>of</span> <span>{this.state.pastCarouselTabs.length > 3 ? Math.ceil(this.state.pastCarouselTabs.length / 3) : 1}</span>
                            <input type="button" className="arrow right past" id="tab-divider-section-right-button past-right" onClick={this.onRightClickPast}></input>
                        </h1>
                    </section>

                    <div>
                        <TripIndex typeKey="past" trips={this.state.past} />
                    </div>
                </div>
                <div id="watch-list" className="tab-container">
                    <div className='tab-container-header'>
                        <h1>{this.state.watchlist.length} Watch List</h1>
                    </div>

                    <section className='tab-divider-section'>
                        <h1>
                            <input type="button" className="arrow left" id="tab-divider-section-left-button" onClick={this.onLeftClick}></input>
                            Carousel Section Placeholder
                            <input type="button" className="arrow right" id="tab-divider-section-right-button" onClick={this.onRightClick}></input>
                        </h1>
                    </section>

                    <div>
                        <TripIndex trips={this.state.watchlist} />
                    </div>
                </div>
            </div>
        )
    }
}

export default EmptyTripsComponent;