import React from 'react'
import { Link } from 'react-router-dom';
import LoginContainer from './login_container';
import { withRouter } from 'react-router';


class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isToggled: false }

        this.handleClick = this.handleClick.bind(this);
        this.setRef = this.setRef.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClick);
    }

    setRef(node) {
        this.wrapperRef = node;
    }

    handleClick(e) {
        if (this.wrapperRef.contains(e.target)) {
            this.setState({ isToggled: true })
        } else {
            this.setState({ isToggled: false })
        }
    }

    
    render() {
        const loggedInMessage = () => (
            <ul className="user-auth-logged-in">
                <li className="logged-in-name">Hi, {this.props.currentUser.firstName}</li>
                <li className="logged-in-points">{this.props.currentUser.points} points</li>
                <li className="logged-in-account-link"><Link to={`/users/${this.props.currentUser.id}`}>My Account</Link></li>
                <button onClick={this.props.logout}>Log Out</button>
            </ul>
        );
        const loggedOutMessage = () => (
            <ul className="user-auth-logged-out">
                <li className="user-auth-login-button"ref={this.setRef}>Log In<span>{login}</span></li>
                <li><Link to="/signup">Enroll</Link></li>
                
            </ul>
            
        );
        let login = this.state.isToggled ? <LoginContainer/>  : null 
        return (
            <header>
                <div className="navbar">
                    <Link to='/'><h1>SouthWeast<img className="patrick-img" src={window.patrickStarURL} /></h1></Link>
                    <div className="navbar-buttons">

                        {
                            this.props.location.pathname === '/signup' ? <span></span> : (this.props.currentUser ? loggedInMessage() : loggedOutMessage())
                        }

                        <ul id="navbar-links" className="navbar-links">
                            <li><Link to="/book">FLIGHT</Link></li>
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

export default withRouter(NavBar);