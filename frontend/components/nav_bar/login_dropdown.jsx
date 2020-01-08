import React from 'react';

class LoginDropDown extends React.Component {

    render() {

        return (

            <div>
                <h1>Log in</h1>
                <form >
                    <label>Username
                        <input type="text"
                            value={this.state.username}
                            onChange={this.handleChange("username")}
                        />
                    </label>
                    <label>Password
                        <input type="password"
                            value={this.state.password}
                            onChange={this.handleChange("password")}
                        />
                    </label>
                </form>
            </div>
        )
    }
}

export default LoginDropDown;