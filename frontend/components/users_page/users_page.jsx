import React from 'react'
import TripContainer from './trip_container.jsx';

class UsersPage extends React.Component {

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
                        {<TripContainer user={this.props.user}/>}
                    </div>
                </section>
            </div>
        )
    }
}

export default UsersPage;