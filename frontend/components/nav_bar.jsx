import React from 'react'

class NavBar extends React.Component {

    render() {
        return (
            <header>
                <div className="navbar">
                    <h1>Southwest</h1>
                    <div className="navbar-buttons">
                        <ul className="user-auth">
                            <li>Log In</li>
                            <li>Enroll</li>
                        </ul>

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