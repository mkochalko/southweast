import React from 'react';

class SessionForm extends React.Component {

    render() {

        return (
            <div>
                <h1>Create Account</h1>
                <p>Say "YEAS", to Patrick Rewards, the best rewards program with unlimited rewards to memes, no filters, no adds, and all fun!</p>

                <main>
                    <form className="forms-container">
                        <section className="personal-info">
                            <div className="personal-info-header">
                                <h4>* Required</h4>
                                <h2>Tell us about yourself</h2>
                                <p>Please make sure to fill out all the required info</p>
                            </div>
                            <div className="personal-info-name-input">
                                <div className="first-name">
                                    <label>First Name *
                                        <input type="text"/>
                                    </label>
                                </div>

                                <div className="first-name">
                                    <label>Middle Name
                                        <input type="text"/>
                                    </label>
                                </div>

                                <div className="first-name">
                                    <label>Last Name *
                                        <input type="text"/>
                                    </label>
                                </div>
                            </div>
                            <div className="personal-info-birthdate">
                                
                            </div>
                        </section>

                        <section className="contact-info">

                        </section>

                        <section className="userAuth-info">

                        </section>
                    </form>
                </main>
            </div>
        )
    }
}

export default SessionForm;