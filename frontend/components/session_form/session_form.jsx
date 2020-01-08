import React from 'react';
import { withRouter } from 'react-router'

class SessionForm extends React.Component {
    constructor(props) {
        super(props) 

        this.state = this.props.user;
        this.state.points = "100000";
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    

    handleChange(form) {
        return (e) => this.setState({ [form]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
<<<<<<< HEAD
<<<<<<< HEAD
        
        
=======
        debugger
>>>>>>> dev
=======
    
>>>>>>> dev
        this.props.action(this.state)
        this.props.history.push(`/`)
    }

    render() {
        // const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        // const day = document.getElementById("dob-day");
        // const month = document.getElementById("dob-month");
        // const year = document.getElementById("dob-year");
        // const birthdate = `${year}/${day}/${months[month] + 1 < 10 ? '0' + months[month] + 1 : months[month] + 1}`
        
        return (
            <div className='signup'>
                <h1>Create Account</h1>
                <p>Say "YEAS", to Patrick Rewards, the best rewards program with unlimited rewards to memes, no filters, no adds, and all fun!</p>

                <main>
                    <form onSubmit={this.handleSubmit} className="forms-container" >
                        <section className="personal-info">
                            <div className="personal-info-header">
                                <h4><span className="required-marker">*</span> Required</h4>
                                <h2>Tell us about yourself</h2>
                                <p>Please make sure to fill out all the required info</p>
                            </div>
                            <div className="personal-info-name-input">
                                <div className="first-name">
                                    <label><h6>First Name <span className="required-marker">*</span></h6>
                                        <input type="text"
                                            value={this.state.firstName}
                                            onChange={this.handleChange("firstName")}
                                        />
                                    </label>
                                </div>

                                <div className="first-name">
                                    <label><h6>Middle Name</h6>
                                        <input type="text"
                                            value={this.state.middleName}
                                            onChange={this.handleChange("middleName")}
                                        />
                                    </label>
                                </div>

                                <div className="first-name">
                                    <label><h6>Last Name <span className="required-marker">*</span></h6>
                                        <input type="text"
                                            value={this.state.lastNmae}
                                            onChange={this.handleChange("lastName")}
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="personal-info-birthdate">
                                <input type="date" name="" value={this.state.birthdate} onChange={this.handleChange("birthdate")}/>
                            </div>
                        </section>

                        <section>
                        </section>

                        <section className="contact-info">
                            <div className="contact-info-address">
                                <label><h6>Street Address<span className="required-marker">*</span></h6>
                                    <input type="text" 
                                        value={this.state.address}
                                        onChange={this.handleChange("address")}
                                    />
                                </label>
                            </div>
                            <div className="contact-info-city">
                                <label><h6>City/Town<span className="required-marker">*</span></h6>
                                    <input type="text"
                                        value={this.state.city}
                                            onChange={this.handleChange("city")}
                                    />
                                </label>
                            </div>
                            <div className="contact-info-state">
                                <label><h6>State<span className="required-marker">*</span></h6>
                                    <input type="text" 
                                        value={this.state.state}
                                        onChange={this.handleChange("state")}
                                    />
                                </label>
                            </div>

                            <div className="contact-info-zip-code">
                                <label><h6>Zip Code<span className="required-marker">*</span></h6>
                                    <input type="number" 
                                        value={this.state.zipCode}
                                        onChange={this.handleChange("zipCode")}
                                    />
                                </label>
                            </div>
                            <div className="contact-info-phone">
                                <label><h6>Phone Number<span className="required-marker">*</span></h6>
                                    <input type="text" 
                                        value={this.state.phoneNumber}
                                        onChange={this.handleChange("phoneNumber")}
                                    />
                                </label>
                            </div>
                            <div className="contact-info-email">
                                <label><h6>Eamil Address<span className="required-marker">*</span></h6>
                                    <input type="text" 
                                        value={this.state.email}
                                        onChange={this.handleChange("email")}
                                    />
                                </label>
                            </div>
                            
                        </section>

                        <section className="userAuth-info">
                            <div className="contact-info-username">
                                <label><h6>Username<span className="required-marker">*</span></h6>
                                    <input type="text" 
                                        value={this.state.username}
                                        onChange={this.handleChange("username")}
                                    />
                                </label>
                            </div>
                            <div className="contact-info-password">
                                <label><h6>Password<span className="required-marker">*</span></h6>
                                    <input type="password" 
                                        value={this.state.password}
                                        onChange={this.handleChange("password")}
                                    />
                                </label>
                            </div>
                        </section>
                        <input type="hidden" value="100000"/>
                        <input type="submit" value={this.props.formType}/>
                    </form>
                </main>
            </div>
        )
    }
}

export default withRouter(SessionForm);