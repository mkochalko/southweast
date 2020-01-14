import React from 'react';
import TripIndex from './trip_index';

class TripsComponent extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            upcoming: [],
            past: [],
            watchlist: [],
            count: 0,
            upcomingCarouselTabs: 0
        }

        this.onLeftClick = this.onLeftClick.bind(this);
        this.onRightClick = this.onRightClick.bind(this);
        this.handleCarousel = this.handleCarousel.bind(this);
        this.separateTrips = this.separateTrips.bind(this);
        this.handleTabCarousel = this.handleTabCarousel.bind(this);
    }

    componentDidMount() {
        this.separateTrips()
        this.handleCarousel()
        this.setState({ upcomingCarouselTabs: document.getElementById(this.props.tab).getElementsByClassName("tab-trip-li")})
    }

    handleTabCarousel() {
        const tabComponent = document.getElementById("tab-carousel")
        if (this.props.tab === 'upcoming-carousel') {
            $(tabComponent).css({ top: '0px'});
        } else if (this.props.tab === "past-carousel") {
            $(tabComponent).css({ top: '-600px' });
        } else if (this.props.tab === "watchlist-carousel") {
            $(tabComponent).css({top: '-1200px'});
        }
    }

    handleCarousel() {
        const items = this.state.upcomingCarouselTabs.length > 3 ? Math.ceil(this.state.upcomingCarouselTabs.lenght / 3) : 0
        
        let leftPointer = document.getElementsByClassName("left");
        let rightPointer = document.getElementsByClassName("right");
        if (this.state.count === items) {
            document.getElementById("tab-divider-section-left-button").disabled = true
            document.getElementById("tab-divider-section-right-button").disabled = true
            $(leftPointer).addClass("disabled")
            $(rightPointer).addClass("disabled")
        } else if (this.state.count === 0) {
            document.getElementById("tab-divider-section-left-button").disabled = true
            $(leftPointer).addClass("disabled")
        } else if (this.state.count === (items - 1)) {
            document.getElementById("tab-divider-section-right-button").disabled = true
            $(rightPointer).addClass("disabled")
        } else {
            document.getElementById("tab-divider-section-left-button").removeAttribute("disabled")
            document.getElementById("tab-divider-section-right-button").removeAttribute("disabled")
            $(leftPointer).removeClass("disabled")
            $(rightPointer).removeClass("disabled")
        }
    }

    onLeftClick() {
        const tabUl = document.getElementsByClassName("tab-trip-index")
        this.setState({ count: (this.state.count - 1) }, this.handleCarousel)
        
        $(tabUl).css('left', '+=702');
    }

    onRightClick() {
        const tabUl = document.getElementsByClassName("tab-trip-index")
        this.setState({ count: (this.state.count + 1) }, this.handleCarousel)
        $(tabUl).css('left', '-=702');
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
            let dateInt = parseInt(dateIntString)
            let flightDateInt = parseInt(flightDate.split("-").join(""))
            if (flightDateInt > dateInt) {
                upcoming.push(this.props.trips[i])
            } else {
                past.push(this.props.trips[i])
            }
        }
        this.setState({ upcoming: upcoming, past: past})
    }

    render() {
        this.handleTabCarousel();
        return (
            <div id="tab-carousel">
                <div id="upcoming-trips" className="tab-container">
                    <div className='tab-container-header'>
                        <h1>{this.state.upcoming.length} Upcoming Trips</h1>
                    </div>

                    <section className='tab-divider-section'>
                        <h1>
                            <input type="button" className="arrow left" id="tab-divider-section-left-button" onClick={this.onLeftClick}></input>
                            <span>Page</span> {this.state.count + 1} <span>of</span> {this.state.upcomingCarouselTabs.length > 3 ? Math.ceil(this.state.upcomingCarouselTabs.lenght / 3) : 1}
                            <input type="button" className="arrow right" id="tab-divider-section-right-button" onClick={this.onRightClick}></input>
                        </h1>
                    </section>

                    <div id="upcoming-carousel">
                        <TripIndex trips={this.state.upcoming}/>
                    </div>
                </div>
                <div id="past-trips" className="tab-container">
                    <div className='tab-container-header'>
                        <h1>{this.state.past.length} Past Trips</h1>
                    </div>

                    <section className='tab-divider-section'>
                        <h1>
                            <input type="button" className="arrow left" id="tab-divider-section-left-button" onClick={this.onLeftClick}></input>
                            Carousel Section Placeholder
                            <input type="button" className="arrow right" id="tab-divider-section-right-button" onClick={this.onRightClick}></input>
                        </h1>
                    </section>

                    <div>
                        <TripIndex trips={this.state.past}/>
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
                        <TripIndex trips={this.state.watchlist}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default TripsComponent;