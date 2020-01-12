import React from 'react';
import TripIndex from './trip_index';

class TripsComponent extends React.Component {
    constructor(props) {
        super(props) 

        this.onLeftClick = this.onLeftClick.bind(this);
        this.onRightClick = this.onRightClick.bind(this);
    }

    onLeftClick() {
        const tabUl = document.getElementsByClassName("tab-trip-index")
        $(tabUl).css('left', '-=230');
    }

    onRightClick() {
        const tabUl = document.getElementsByClassName("tab-trip-index")
        $(tabUl).css('left', '+=230');
    }

    render() {

        return (
            <div>
                <div className="tab-container">
                    <div className='tab-container-header'>
                        <h1>Upcoming Trips</h1>
                    </div>

                    <section className='tab-divider-section'>
                        <h1>
                            <button onClick={this.onLeftClick}><i className="arrow left"></i></button>
                            Carousel Section Placeholder
                            <button onClick={this.onRightClick}><i className="arrow right"></i></button>
                        </h1>
                    </section>

                    <div>
                        <TripIndex trips={this.props.trips}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default TripsComponent;