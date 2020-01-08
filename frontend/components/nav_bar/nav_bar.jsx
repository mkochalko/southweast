import React from 'react'
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        const loggedInMessage = () => (
            <ul className="user-auth">
                <li>Hi, {this.props.currentUser.first_name}</li>
                <li>Points: {this.props.currentUser.points}</li>
                <li><Link to={`/users/${this.props.currentUser.id}`}>My Account</Link></li>
                <button onClick={this.props.logout}>Log Out</button>
            </ul>
        );
        const loggedOutMessage = () => (
            <ul className="user-auth">
                <li>Log In</li>
                <li><Link to="/signup">Enroll</Link></li>
            </ul>
        );
        return (
            <header>
                <div className="navbar">
                    <h1>Southwest</h1>
                    <div className="navbar-buttons">
                        {this.props.currentUser ? loggedInMessage() : loggedOutMessage()}

                        <ul className="navbar-links">
                            <li>FLIGHT</li>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.hotels.com/?intlid=HOME+%3A%3A+header_main_section">
                                HOTEL
                                </a>
                            </li>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.getaround.com/">
                                CAR
                                </a>
                            </li>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.airbnb.com/?from_belo_click">
                                VACATIONS
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default NavBar;