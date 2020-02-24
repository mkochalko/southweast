import React from 'react';

class ExceededAPIComponent extends React.Component {
    constructor(props) {
        super(props) 

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.props.props.history.push("/demo_flights_search")
    }

    render() {
        console.log(this.props.props.props)
        return (
            <div className="exceeded-api-container">
                <p>The API limit has been reached this month, please click the 'Demo Search' button to continue the process with seeded data.</p>
                <button className="demo-search-button" onClick={this.handleSubmit}>Demo Search</button>
            </div>
        )
    }
}

export default ExceededAPIComponent;