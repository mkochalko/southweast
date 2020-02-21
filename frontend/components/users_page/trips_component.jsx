import React from 'react';
import TripIndex from './trip_index';

class TripsComponent extends React.Component {
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

        this.onLeftClickPast = this.onLeftClickPast.bind(this);
        this.onRightClickPast = this.onRightClickPast.bind(this);
        this.onLeftClickUpcoming = this.onLeftClickUpcoming.bind(this);
        this.onRightClickUpcoming = this.onRightClickUpcoming.bind(this);
        this.handleCarouselPastFlights = this.handleCarouselPastFlights.bind(this);
        this.handleCarouselUpcomingFlights = this.handleCarouselUpcomingFlights.bind(this);
        this.separateTrips = this.separateTrips.bind(this);
        this.handleTabCarousel = this.handleTabCarousel.bind(this);
    }

    componentDidMount() {
        this.separateTrips()
        this.setState({ 
            upcomingCarouselTabs: document.getElementById("upcoming-carousel").getElementsByClassName("tab-trip-li"),
            pastCarouselTabs: document.getElementById("past-carousel").getElementsByClassName("tab-trip-li")
        }, () => {
            this.handleCarouselPastFlights();
            this.handleCarouselUpcomingFlights();
        })
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

    handleCarouselPastFlights() {
        const items = this.state.pastCarouselTabs.length > 3 ? Math.ceil(this.state.pastCarouselTabs.length / 3) : 0

        let leftPointer = document.getElementsByClassName("left past");
        let rightPointer = document.getElementsByClassName("right past");
        if (this.state.pastTripCount === 0 && items === 0) {
            document.getElementById("tab-divider-section-left-button past-left").disabled = true
            document.getElementById("tab-divider-section-right-button past-right").disabled = true
            $(leftPointer).addClass("disabled")
            $(rightPointer).addClass("disabled")
        } else if (this.state.pastTripCount === 0) {
            document.getElementById("tab-divider-section-left-button past-left").disabled = true
            $(leftPointer).addClass("disabled")
            document.getElementById("tab-divider-section-right-button past-right").removeAttribute("disabled")
            $(rightPointer).removeClass("disabled")
        } else if (this.state.pastTripCount === (items - 1)) {
            document.getElementById("tab-divider-section-right-button past-right").disabled = true
            $(rightPointer).addClass("disabled")
            document.getElementById("tab-divider-section-left-button past-left").removeAttribute("disabled")
            $(leftPointer).removeClass("disabled")
        } else {
            document.getElementById("tab-divider-section-left-button past-left").removeAttribute("disabled")
            document.getElementById("tab-divider-section-right-button past-right").removeAttribute("disabled")
            $(leftPointer).removeClass("disabled")
            $(rightPointer).removeClass("disabled")
        }
    }
    handleCarouselUpcomingFlights() {
        const items = this.state.upcomingCarouselTabs.length > 2 ? Math.ceil(this.state.upcomingCarouselTabs.length / 2) : 0

        let leftPointer = document.getElementsByClassName("left upcoming");
        let rightPointer = document.getElementsByClassName("right upcoming");
        if (this.state.upcomingTripCount === 0 && items === 0) {
            document.getElementById("tab-divider-section-left-button upcoming-left").disabled = true
            document.getElementById("tab-divider-section-right-button upcoming-right").disabled = true
            $(leftPointer).addClass("disabled")
            $(rightPointer).addClass("disabled")
        } else if (this.state.upcomingTripCount === 0) {
            document.getElementById("tab-divider-section-left-button upcoming-left").disabled = true
            $(leftPointer).addClass("disabled")
            document.getElementById("tab-divider-section-right-button upcoming-right").removeAttribute("disabled")
            $(rightPointer).removeClass("disabled")
        } else if (this.state.upcomingTripCount === (items - 1)) {
            document.getElementById("tab-divider-section-right-button upcoming-right").disabled = true
            $(rightPointer).addClass("disabled")
            document.getElementById("tab-divider-section-left-button upcoming-left").removeAttribute("disabled")
            $(leftPointer).removeClass("disabled")
        } else {
            document.getElementById("tab-divider-section-left-button upcoming-left").removeAttribute("disabled")
            document.getElementById("tab-divider-section-right-button upcoming-right").removeAttribute("disabled")
            $(leftPointer).removeClass("disabled")
            $(rightPointer).removeClass("disabled")
        }
    }

    onLeftClickPast() {
        let leftPointer = document.getElementsByClassName("left past");
        $(leftPointer).addClass("disabled")
        document.getElementById("tab-divider-section-left-button past-left").disabled = true

        setTimeout(() => {
            $(leftPointer).removeClass("disabled")
            document.getElementById("tab-divider-section-left-button past-left").removeAttribute("disabled")
        }, 300)
        
        const tabUl = document.getElementsByClassName("tab-trip-index-past")
        this.setState({ pastTripCount: (this.state.pastTripCount - 1) }, () => setTimeout(() => this.handleCarouselPastFlights(), 310))
        
        $(tabUl).css('left', '+=702');
    }

    onLeftClickUpcoming() {
        let leftPointer = document.getElementsByClassName("left upcoming");
        $(leftPointer).addClass("disabled")
        document.getElementById("tab-divider-section-left-button upcoming-left").disabled = true

        setTimeout(() => {
            $(leftPointer).removeClass("disabled")
            document.getElementById("tab-divider-section-left-button upcoming-left").removeAttribute("disabled")
        }, 300)

        const tabUl = document.getElementsByClassName("tab-trip-index")
        this.setState({ upcomingTripCount: (this.state.upcomingTripCount - 1) }, () => setTimeout(() => this.handleCarouselUpcomingFlights(), 310))
        
        $(tabUl).css('left', '+=702');
    }

    onRightClickPast() {
        let rightPointer = document.getElementsByClassName("right past");
        $(rightPointer).addClass("disabled")
        document.getElementById("tab-divider-section-right-button past-right").disabled = true

        setTimeout(() => {
            $(rightPointer).removeClass("disabled")
            document.getElementById("tab-divider-section-right-button past-right").removeAttribute("disabled")
        }, 300)

        const tabUl = document.getElementsByClassName("tab-trip-index-past")
        this.setState({ pastTripCount: (this.state.pastTripCount + 1) }, () => setTimeout(() => this.handleCarouselPastFlights(), 310))
        $(tabUl).css('left', '-=702');
    }

    onRightClickUpcoming() {
        let rightPointer = document.getElementsByClassName("right upcoming");
        $(rightPointer).addClass("disabled")
        document.getElementById("tab-divider-section-right-button upcoming-right").disabled = true

        setTimeout(() => {
            $(rightPointer).removeClass("disabled")
            document.getElementById("tab-divider-section-right-button upcoming-right").removeAttribute("disabled")
        }, 300)

        const tabUl = document.getElementsByClassName("tab-trip-index")
        this.setState({ upcomingTripCount: (this.state.upcomingTripCount + 1) }, () => setTimeout(() => this.handleCarouselUpcomingFlights(), 310))

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
            let dateInt = parseInt(dateIntString.join(""))
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
                        <TripIndex typeKey="upcoming" trips={this.state.upcoming}/>
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
                        <TripIndex typeKey="past" trips={this.state.past}/>
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