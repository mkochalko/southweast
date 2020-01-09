import React from 'react'

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
                            <li>My Trips</li>
                            <li>Upcoming</li>
                            <li>Past</li>
                            <li>Watchlist</li>
                        </ul>
                    </div>
                    <div className="user-info-tab-content">
                        
                    </div>
                </section>
            </div>
        )
    }
}

export default UsersPage;