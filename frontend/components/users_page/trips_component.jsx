import React from 'react';
import TripIndex from './trip_index';

class TripsComponent extends React.Component {
    constructor(props) {
        super(props) 

        this.onLeftClick = this.onLeftClick.bind(this);
        this.onRightClick = this.onRightClick.bind(this);
        this.handleCarousel = this.handleCarousel.bind(this);
    }

    componentDidMount() {
        const position = document.getElementsByClassName("tab-trip-index")
        
        this.handleCarousel()
        // if ($(position).css("left") === '0px') {
        //     document.getElementById("tab-divider-section-left-button").disabled = true
        // }
    }

    handleCarousel() {
        const position = document.getElementsByClassName("tab-trip-index")
        const endPosition = `${position.length * -234}px`
        if ($(position).css("left") === '0px') {
            document.getElementById("tab-divider-section-left-button").disabled = true
        } else if ($(position).css("left") === endPosition) {
            document.getElementById("tab-divider-section-right-button").disabled = true
        } else {
            debugger
            document.getElementById("tab-divider-section-left-button").removeAttribute("disabled")
            document.getElementById("tab-divider-section-right-button").removeAttribute("disabled")

        }
    }

    onLeftClick() {
        const tabUl = document.getElementsByClassName("tab-trip-index")
        this.handleCarousel()
        $(tabUl).css('left', '+=234');
    }

    onRightClick() {
        const tabUl = document.getElementsByClassName("tab-trip-index")
        this.handleCarousel()
        $(tabUl).css('left', '-=234');
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
                            <input type="button" className="arrow left" id="tab-divider-section-left-button" onClick={this.onLeftClick}></input>
                            Carousel Section Placeholder
                            <input type="button" className="arrow right" id="tab-divider-section-right-button" onClick={this.onRightClick}></input>
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