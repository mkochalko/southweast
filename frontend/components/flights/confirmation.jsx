import React from 'react';


class Confirmation extends React.Component {
    constructor(props) {
        super(props)

        this.createTrip = this.createTrip.bind(this);
        this.configureDuration = this.configureDuration.bind(this);
        this.configureTime = this.configureTime.bind(this);
        this.configureAMPM = this.configureAMPM.bind(this);
        this.configureDate = this.configureDate.bind(this);
        this.createTripCode = this.createTripCode.bind(this);

        this.returnPrice = this.props.flights.length > 1 ? this.props.flights[1].price : 0
    }

    componentDidMount() {
        const header = document.getElementsByTagName("header")
        $(header).css("background-color", "#2f4cb2")
        const navBarText = document.getElementsByClassName("navbar")
        $(navBarText).css("color", "white")
        $(navBarText).css("background-color", "#2f4cb2")
        //NavBar Link Borders 
        const navBarLinkBorder = document.getElementById("navbar-links").getElementsByTagName("li")
        $(navBarLinkBorder).css("border-right", "2px solid white")
        //NavBar LoggedIn Greeting Border
        const navBarLoggedIn = document.getElementsByClassName("logged-in-account-link")
        $(navBarLoggedIn).css("border-right", "1px solid white")
    }

    componentWillUnmount() {
        this.props.clearTrips()
        const header = document.getElementsByTagName("header")
        $(header).css("background-color", "transparent")
        const body = document.getElementsByTagName("body");
        $(body).css("background", "transparent")
        const navBarText = document.getElementsByClassName("navbar")
        $(navBarText).css("color", "#304CB2")
        $(navBarText).css("background-color", "transparent")
        const navBarLinkBorder = document.getElementById("navbar-links").getElementsByTagName("li")
        $(navBarLinkBorder).css("border-right", "2px solid blue")
        const navBarLoggedIn = document.getElementsByClassName("logged-in-account-link")
        $(navBarLoggedIn).css("border-right", "1px solid blue")
    }

    createTripCode(id, departureDate, departureTime) {
        let rawNumbers = id.toString() + departureDate + departureTime
        let codeNumbers = rawNumbers.split(/[-.:0TXZ]/).join("")
        let alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
        let tripCode = '';
        for (let i = 0; i < codeNumbers.length - 4; i++) {
            tripCode += alpha[codeNumbers[i]]
        }
        for (let j = codeNumbers.length - 4; j < codeNumbers.length; j++) {
            let number = parseInt(codeNumbers[j])
            let modNumber = 9 - number;
            tripCode += modNumber.toString()
        }
        return tripCode
    }

    createTrip() {
        let updatedUser = Object.values(this.props.user)[0]
        updatedUser.points -= this.props.flights[0].price + this.returnPrice
        this.props.postTrip({
            userId: this.props.user.id,
            tripCode: this.createTripCode(this.props.flights[0].id, this.props.flights[0].departureDate, this.props.flights[0].departureTime),
            departureFlightId: this.props.flights[0].id,
            returnFlightId: this.props.flights.length > 1 ? this.props.flights[1].id : 'N/A'
        })
        let loading = document.getElementById("loading")
        loading.style.display = "block";
        loading.innerHTML = `<div class='confirmation-redirecting-container'><h4>We can't wait for takeoff</h4><h4>Thank you for Booking with SouthWeast!</h4><h4>Redirecting to Account Page</h4><img src=${window.waitingDots} /></div>`
        let that = this;
        // debugger;
        this.props.buyFlight(updatedUser).then(() => {

            setTimeout(() => {
                loading.style.display = 'none'
                this.props.history.push(`/users/${Object.values(that.props.user)[0].id}`)
            }, 2000);
        })
    }

    configureTime(time) {
        let departureTime = time.slice(11, 16);
        let hours = parseInt(departureTime.slice(0, 2));
        let minutes = departureTime.slice(3, 5);
        let configuredTime;
        if (hours > 12) {
            if (hours - 12 > 9) {
                configuredTime = hours - 12 + ":" + minutes
            } else {
                configuredTime = "0" + hours - 12 + ":" + minutes                
            }
        } else {
            configuredTime = departureTime
        }
        return configuredTime
    }

    configureAMPM(time) {
        let departureTime = time.slice(11, 16);
        let hours = parseInt(departureTime.slice(0, 2));
        let configuredTime;
        if (hours > 12) {
            configuredTime = " PM"
        } else {
            configuredTime = " AM"
        }
        return configuredTime
    }

    configureDuration(minutes) {
        let hours = Math.floor(minutes / 60);
        let durationMinutes;
        if (minutes % 60 < 10) {
            durationMinues = "0" + (minutes % 60);
        } else {
            durationMinutes = minutes % 60
        }
        return hours + "h " + durationMinutes + "m"
    }

    configureDate(date) {
        let tempDate = date + 'T00:00'
        let longDate = new Date(tempDate)
        let dateArray = longDate.toDateString().split(" ")
        let newDate = dateArray.slice(0, 3)
        return newDate.join(" ")
    }

    render() {
        return (
            <div>
                <div className="trip-confirmation-header">
                    <h1>Trip Price & Confirmation</h1>
                </div>
        
                <div className="trip-confirmation-container">
                    <div className="trip-confirmation-container-header-section">
                        <img className="trip-confirmation-airplane-icon" src={window.confirmationIcon} alt="airplane" />
                        <h3>Flight</h3>
                    </div>
                    <div className="trip-confirmation-overview-container">
                        <section className="trip-confirmation-info-container">
                            <div className="trip-confirmation-flight-info">
                                <div className="trip-confirmation-icon-date">
                                    <img className="trip-confirmation-departure-flight-airplane-icon" src="https://image.flaticon.com/icons/svg/181/181545.svg" alt="airplane" />
                                    {this.configureDate(this.props.flights[0].departureDate)}
                                </div>
                                <div className="trip-confirmation-city-info">
                                    {this.props.flights[0].departureCityId}
                                    <img className="trip-confirmation-right-arrow" src={window.rightArrow} />
                                    {this.props.flights[0].arrivalCityId}
                                </div>
                                <div className="trip-confirmation-time-duration">
                                    <span>{this.configureTime(this.props.flights[0].departureTime)}{this.configureAMPM(this.props.flights[0].departureTime)}</span>
                                    {this.configureDuration(this.props.flights[0].duration)}
                                    <span>Nonstop</span>
                                </div>
                            </div>

                            {
                                this.props.flights.length > 1 ? (
                                    <div className="trip-confirmation-flight-info">
                                        <div className="trip-confirmation-icon-date">
                                            <img className="return-flight-icon" src={window.returnFlightIcon} />
                                            {this.configureDate(this.props.flights[1].departureDate)}
                                        </div>
                                        <div className="trip-confirmation-city-info">
                                            {this.props.flights[1].departureCityId}
                                            <img className="trip-confirmation-right-arrow" src={window.rightArrow} />
                                            {this.props.flights[1].arrivalCityId}
                                        </div>
                                        <div className="trip-confirmation-time-duration">
                                            <span>{this.configureTime(this.props.flights[1].departureTime)}{this.configureAMPM(this.props.flights[1].departureTime)}</span>
                                            {this.configureDuration(this.props.flights[1].duration)}
                                            <span>Nonstop</span>
                                        </div>
                                    </div>
                                ) : ""
                            }
                        </section>
                        <section className="trip-price-container">
                            <div className="trip-price-line">
                                <h6>Departure Price Per Ticket</h6>
                                <h5>${this.props.flights[0].price}</h5>
                            </div>
                            <div className="trip-price-line">
                                <h6>Return Price Per Ticket</h6>
                                <h5>${this.returnPrice}</h5>
                            </div>
                            <div className="trip-price-line">
                                <h6>Passenger(s)</h6>
                                <h5>x {this.props.flights[0].passengers}</h5>
                            </div>
                            <div className="trip-price-line">
                                <h6>Flight Total</h6>
                                <h5>${(this.props.flights[0].price + this.returnPrice) * this.props.flights[0].passengers}</h5>
                            </div>
                        </section>
                    </div>
                </div>

                <div className="trip-confirmation-submit-button">
                    <button onClick={this.createTrip}>Confirm Booking</button>
                </div>
                
                <section className="trip-confirmation-filler-container">
                    <div className="trip-confirmation-filler-header">
                        <h4>Why Fly SouthWeast?</h4>
                    </div>
                    <ul className="trip-confirmation-filler-list">
                        <li><img className="trip-confirmation-filler-checkmark" src={window.checkmark}/>It's Fun</li>
                        <li><img className="trip-confirmation-filler-checkmark" src={window.checkmark} />No Emotional Baggage Fee</li>
                        <li><img className="trip-confirmation-filler-checkmark" src={window.checkmark} />Animals are Welcome</li>
                        <li><img className="trip-confirmation-filler-checkmark" src={window.checkmark} />Won't Spend a Dime</li>
                    </ul>
                </section>
                <section className="trip-confirmation-filler-photo">
                    <img src="https://media.foxbusiness.com/BrightCove/854081161001/201910/3182/854081161001_6098433809001_6098440147001-vs.jpg" alt="Doc with Chairs"/>
                </section>
            </div>
        )
    }
}

export default Confirmation;