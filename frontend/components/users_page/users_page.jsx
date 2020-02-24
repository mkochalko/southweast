import React from 'react'
import TripsComponent from './trips_component';
import EmptyTripComponent from './empty_trip_component';

class UsersPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
                user: this.props.user,
                trips: this.props.trips,
                tab: 'upcoming-carousel'
            }
            
        this.handleClick = this.handleClick.bind(this);
        this.configurePhoneNumber = this.configurePhoneNumber.bind(this);
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
        this.props.requestFlights()
        this.props.requestTrips()
        //Background Image
        const body = document.getElementsByTagName("body");
        $(body).css("background", 'url("https://live.staticflickr.com/2693/4453498888_f576a9afd5_b.jpg") no-repeat')
        $(body).css("background-size", 'cover')
        //NavBar Text Color
        const navBarText = document.getElementsByClassName("navbar")
        $(navBarText).css("color", "white")
        $(navBarText).css("backgroun-color", "transparent")
        //NavBar Link Borders 
        const navBarLinkBorder = document.getElementById("navbar-links").getElementsByTagName("li")
        $(navBarLinkBorder).css("border-right", "2px solid white")
        //NavBar LoggedIn Greeting Border
        const navBarLoggedIn = document.getElementsByClassName("logged-in-account-link")
        $(navBarLoggedIn).css("border-right", "1px solid white")
    }

    componentWillUnmount() {
        this.props.clearTrips();
        this.props.clearFlights();
        const body = document.getElementsByTagName("body");
        $(body).css("background", "transparent")
        const navBarText = document.getElementsByClassName("navbar")
        $(navBarText).css("color", "#304CB2")
        const navBarLinkBorder = document.getElementById("navbar-links").getElementsByTagName("li")
        $(navBarLinkBorder).css("border-right", "2px solid blue")
        const navBarLoggedIn = document.getElementsByClassName("logged-in-account-link")
        $(navBarLoggedIn).css("border-right", "1px solid blue")
    }

    configurePhoneNumber(number) {
        let numString = number.toString();
        if (numString.length === 7) {
            return numString.slice(0, 3) + '-' + numString.slice(3)
        } else if (numString.length === 10) {
            return '(' + numString.slice(0, 3) + ')' + numString.slice(3, 6) + '-' + numString.slice(6)
        } else if (numString.length === 11) {
            return numString.slice(0,1) + ' (' + numString.slice(1, 4) + ')' + numString.slice(4, 7) + '-' + numString.slice(7)
        } else {
            return numString.slice(0, 3) + '-' + numString.slice(3)
        }
    }

    render() {
        return (
            <div className="user-info-page">   
                <div className="user-info-header">
                    <h4>My Account</h4>
                    <h2>Hi, {this.props.user.firstName}</h2>
                    <h5>Member since {this.props.user.createdAt.slice(0, 4)}</h5>
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
                        {this.props.trips.length > 0 && this.props.flights.length > 0 ? <TripsComponent tab={this.state.tab} user={this.state.user} trips={this.props.trips} flights={this.props.flights} /> : <EmptyTripComponent tab={this.state.tab} user={this.state.user} trips={this.props.trips} flights={this.props.flights} /> }
                    </div>
                </section>
                <section className="user-info-tab-section">
                    <div id="personal-tab" className="user-info-tab-headers">
                        <ul>
                            <li><span>My</span><br />Preferences<div className="tab-pointer-still"></div></li>
                            <li>Personal</li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="user-info-tab-content">
                        <div id="upcoming-trips" className="tab-container">
                            <div className='tab-container-header'>
                                <h1>Personal</h1>
                            </div>

                            <section className='tab-divider-section'>
                                <h1></h1>
                            </section>

                            <div id="upcoming-carousel">
                                <div className="tab-trip-index-container">
                                    <div className="profile-information">
                                        <h2>Profile information</h2>
                                        <div className="profile-information-name-birthdate">
                                            <div className="profile-information-sections">
                                                <h6>FULL NAME</h6>
                                                <h3>{`${this.state.user.firstName} ${this.state.user.middleName || ""} ${this.state.user.lastName}`}</h3>
                                            </div>
                                            <div className="profile-information-sections birthdate">
                                                <h6>DATE OF BIRTH</h6>
                                                <h3>{this.state.user.birthdate}</h3>
                                            </div>
                                        </div>
                                        <div className="profile-information-sections">
                                            <h6>USERNAME</h6>
                                            <h4>{this.state.user.username}</h4>
                                        </div>
                                        <div className="profile-information-sections">
                                            <h6>STREET ADDRESS</h6>
                                            <h4>{this.state.user.address}</h4>
                                            <h4>{this.state.user.city}, {this.state.user.state} {this.state.user.zipCode}</h4>
                                        </div>
                                        <div className="profile-information-contact-info">
                                            <div className="profile-information-sections">
                                                <h6>E-MAIL</h6>
                                                <h4>{this.state.user.email}</h4>
                                            </div>
                                            <div className="profile-information-sections phone">
                                                <h6>PHONE</h6>
                                                <h4>{this.configurePhoneNumber(this.state.user.phoneNumber)}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default UsersPage;