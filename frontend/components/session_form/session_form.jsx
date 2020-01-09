import React from 'react';
import { withRouter } from 'react-router'

class SessionForm extends React.Component {
    constructor(props) {
        super(props) 

        this.state = this.props.user;
        this.state.points = "100000";
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sortErrors = this.sortErrors.bind(this);
    }
    
    

    handleChange(form) {
        return (e) => this.setState({ [form]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
        // this.props.history.push(`/users/${this.state.id}`)
        // debugger
        // if (this.props.errors.length === 0 ) {
        //     this.props.history.push(`/users/${this.state.id}`)
        //     this.setState({
        //         user: {
        //             firstName: '',
        //             middleName: '',
        //             lastName: '',
        //             birthdate: '',
        //             address: '',
        //             city: '',
        //             state: '',
        //             zipCode: '',
        //             phoneNumber: '',
        //             email: '',
        //             username: '',
        //             password: '',
        //             points: ''
        //         }
        //     })
        // } else {
        //     this.props.history.push('/signup')
        // }
    }

    sortErrors(form) {
        for (let i = 0; i < this.props.errors.length; i++) {
            let error = this.props.errors[i].split(" ")[1]
            if ( error === form && error === 'too') {
                return "Enter password, must be at least 6 characters.";
            } else if (error === form ) {
                return this.props.errors[i]
            }
        }
    }

    render() {

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
                                <div className="signup-errors">
                                    {this.sortErrors("first")}
                                </div>
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
                                    <div className="signup-errors">
                                        {this.sortErrors("last")}
                                    </div>
                                </div>
                            </div>
                            <div className="birthdate-container">
                                <div className="first-name">
                                    <label><h6>Birthdate <span className="required-marker">*</span></h6>
                                        <input type="date" name="" value={this.state.birthdate} onChange={this.handleChange("birthdate")}/>
                                    </label>
                                    <div className="signup-errors">
                                        {this.sortErrors("date")}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="personal-info">
                            <div className="personal-info-header">
                                <h2>How can we contact you?</h2>
                            </div>

                            <div className="first-name">
                                <label><h6>Street Address<span className="required-marker"> *</span></h6>
                                    <input type="text" 
                                        value={this.state.address}
                                        onChange={this.handleChange("address")}
                                    />
                                </label>
                                <div className="signup-errors">
                                    {this.sortErrors("street")}
                                </div>
                            </div>
                            <div className="personal-info-name-input">
                                <div className="first-name">
                                    <label><h6>City/Town<span className="required-marker"> *</span></h6>
                                        <input type="text"
                                            value={this.state.city}
                                                onChange={this.handleChange("city")}
                                        />
                                    </label>
                                    <div className="signup-errors">
                                        {this.sortErrors("city")}
                                    </div>
                                </div>
                                <div className="first-name">
                                    <label><h6>State<span className="required-marker"> *</span></h6>
                                        <input type="text" 
                                            value={this.state.state}
                                            onChange={this.handleChange("state")}
                                        />
                                    </label>
                                    <div className="signup-errors">
                                        {this.sortErrors("state")}
                                    </div>
                                </div>

                                <div className="first-name">
                                    <label><h6>Zip Code<span className="required-marker"> *</span></h6>
                                        <input type="number" 
                                            value={this.state.zipCode}
                                            onChange={this.handleChange("zipCode")}
                                        />
                                    </label>
                                    <div className="signup-errors">
                                        {this.sortErrors("zip")}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="first-name">
                                <label><h6>Phone Number<span className="required-marker"> *</span></h6>
                                    <input type="text" 
                                        value={this.state.phoneNumber}
                                        onChange={this.handleChange("phoneNumber")}
                                    />
                                </label>
                                <div className="signup-errors">
                                    {this.sortErrors("phone")}
                                </div>
                            </div>
                            <div className="email-container">
                                <div className="first-name">
                                    <label><h6>Email Address<span className="required-marker"> *</span></h6>
                                        <input type="text" 
                                            value={this.state.email}
                                            onChange={this.handleChange("email")}
                                        />
                                    </label>
                                    <div className="signup-errors">
                                        {this.sortErrors("email")}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="personal-info">
                            <div className="personal-info-header">
                                <h2>Create your username & password</h2>
                            </div>

                            <div className="personal-info-name-input">
                                <div className="first-name">
                                    <label><h6>Username<span className="required-marker"> *</span></h6>
                                        <input type="text" 
                                            value={this.state.username}
                                            onChange={this.handleChange("username")}
                                        />
                                    </label>
                                    <div className="signup-errors">
                                        {this.sortErrors("username")}
                                    </div>
                                </div>
                                <div className="first-name">
                                    <label><h6>Password<span className="required-marker"> *</span></h6>
                                        <input type="password" 
                                            value={this.state.password}
                                            onChange={this.handleChange("password")}
                                        />
                                    </label>
                                    <div className="signup-errors">
                                        {this.sortErrors("too")}
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="create-account-disclaimer">
                            <p>
                                By clicking 'Create accout' you agree to be enrolled in Patrick Rewards and agree to be all about the memes
                            </p>
                        </div>
                        <div className="create-account-button">
                            <input type="submit" value={this.props.formType}/>
                        </div>
                    </form>
                </main>
            </div>
        )
    }
}

export default withRouter(SessionForm);