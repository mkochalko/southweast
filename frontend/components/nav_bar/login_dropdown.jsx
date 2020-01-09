import React from 'react';

class LoginDropDown extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.credentials

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDemo = this.handleDemo.bind(this)
    }

    componentWillUnmount() {
        this.props.clearErrors()
    }

    handleDemo() {
        this.setState({ username: '', password: ''})
        let user = ['D', 'e', 'm', 'o', ' ', 'U', 's', 'e', 'r'];
        for (let i = 0; i < user.length; i++) {
            setTimeout((y) => {
                this.setState({username: (this.state.username + user[i])})
            }, 100 * i);
        }
        let pass = ['t', 'e', 's', 't', 'i', 'n', 'g']
        setTimeout(() => {for (let i = 0; i < pass.length; i++) {
            setTimeout((y) => {
                this.setState({password: (this.state.password + pass[i])})
            }, 100 * i);}
        }, 1500)

        setTimeout(() => {
            document.getElementById("login").click()
        }, 3000)
    }

    handleChange(form) {
        return (e) => this.setState({ [form]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.login(this.state)
    }

    render() {

        return (
            <div className="dropdown-outer-border">
                <div className="dropdown">
                    <div className="pointer"></div>
                    <div className='dropdown-contents'>
                        <h1>Log in</h1>
                        <section className="form-contents">
                            <form onSubmit={this.handleSubmit}>
                                <div className="userAuth-input-fields">
                                    <label><span>Username</span>
                                        <input type="text"
                                            value={this.state.username}
                                            onChange={this.handleChange("username")}
                                        />
                                    </label>
                                </div>

                                <div className="userAuth-input-fields">
                                    <label><span>Password</span>
                                        <input type="password"
                                            value={this.state.password}
                                            onChange={this.handleChange("password")}
                                        />
                                    </label>
                                </div>
                                <div className="error-message">
                                    {this.props.errors}
                                </div>
                                <div className="login-buttons">
                                    <input onClick={this.handleDemo} type="button" value="Demo User"/>
                                    <input type="submit" id="login" value="Log In"/>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginDropDown;