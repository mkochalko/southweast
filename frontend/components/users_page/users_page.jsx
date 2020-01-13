import React from 'react'
import TripsComponent from './trips_component';

class UsersPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
                user: this.props.user,
                trips: this.props.trips,
                tab: 'upcoming'
            }
            
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.setState({ tab: e.currentTarget.className})
        const currentTab = document.getElementsByClassName("tab-pointer")
        if (e.currentTarget.className === 'upcoming-carousel') {
            $(currentTab).css({ top: '80px' });
        } else if (e.currentTarget.className === "past-carousel") {
            $(currentTab).css({ top: '200px' });
        } else if (e.currentTarget.className === "watchlist-carousel") {
            $(currentTab).css({ top: '320px' });
        }
    }

    componentDidMount() {
        this.props.requestTrips()
        this.props.requestFlights()
        this.props.requestCities()
        const body = document.getElementsByTagName("body");
        
        $(body).css("background", 'url("https://live.staticflickr.com/2693/4453498888_f576a9afd5_b.jpg") no-repeat')
        $(body).css("background-size", 'cover')
    }

    componentWillUnmount() {
        const body = document.getElementsByTagName("body");
        $(body).css("background", "transparent")
    }

    render() {
        return (
            <div className="user-info-page">   
                <div className="user-info-header">
                    <h4>My Account</h4>
                    <h2>Hi, {this.props.user.firstName}</h2>
                </div>

                <section className="user-info-tab-section">
                    <div className="user-info-tab-headers">
                        <ul>
                            <li><span>My</span><br />Trips<div className="tab-pointer"></div></li>
                            <li onClick={this.handleClick} id="test" tabIndex="1" className="upcoming-carousel">Upcoming</li>
                            <li onClick={this.handleClick} tabIndex="1" className="past-carousel">Past</li>
                            <li onClick={this.handleClick} tabIndex="1" className="watchlist-carousel">Watchlist</li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="user-info-tab-content">
                        {this.props.trips.length > 0 && this.props.flights.length > 0 ? <TripsComponent tab={this.state.tab} user={this.state.user} trips={this.props.trips} flights={this.props.flights}/> : null }
                    </div>
                </section>
            </div>
        )
    }
}

export default UsersPage;