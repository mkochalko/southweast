import React from 'react';
import BookFlightContainer from './flights/book_flight_container';

class Home extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <BookFlightContainer props={this.props}/>

                <div className="home-fluff">
                    <div className="home-fluff-photo-container">
                        <img src="https://img.jakpost.net/c/2019/06/09/2019_06_09_73999_1560060530._large.jpg" alt="airport" />
                        <h2>Where to next?</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;