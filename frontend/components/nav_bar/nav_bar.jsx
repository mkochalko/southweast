import React from 'react'
import { Link } from 'react-router-dom';
import LoginContainer from './login_container';


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
            <ul className="user-auth">
                <li>Hi, {this.props.currentUser.firstName}</li>
                <li>Points: {this.props.currentUser.points}</li>
                <li><Link to={`/users/${this.props.currentUser.id}`}>My Account</Link></li>
                <button onClick={this.props.logout}>Log Out</button>
            </ul>
        );
        const loggedOutMessage = () => (
            <ul className="user-auth">
                <li className="user-auth-login-button"ref={this.setRef}>Log In<span>{login}</span></li>
                <li><Link to="/signup">Enroll</Link></li>
                
            </ul>
            
        );
        let login = this.state.isToggled ? <LoginContainer/>  : null 
        return (
            <header>
                <div className="navbar">
                    <h1>SouthWeast<img src="http://cdn.shopify.com/s/files/1/0891/8314/products/Patrick_Star_mem_515a0f9e16255_grande.jpeg?v=1459072430" alt="southweast" height="18px" width="15px"/></h1>
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