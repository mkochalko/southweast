import React from 'react'
import TripsComponent from './trips_component';

class UsersPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
                user: this.props.user,
                trips: this.props.trips
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
                            <li><span>My</span><br/>Trips</li>
                            <li tabIndex="1">Upcoming</li>
                            <li tabIndex="1">Past</li>
                            <li tabIndex="1">Watchlist</li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="user-info-tab-content">
                        {this.props.trips.length > 0 ? <TripsComponent user={this.state.user} trips={this.props.trips}/> : null }
                    </div>
                </section>
            </div>
        )
    }
}

export default UsersPage;