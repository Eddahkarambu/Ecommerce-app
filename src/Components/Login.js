import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <div>LOGIN</div>
        <div>Enter your details here to continue</div>
        <form>
          <label>
            Email Address
            <input
              name="emailAddress"
              type="text"
              value={this.state.emailAddress}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              value={this.state.emailAddress}
              onChange={this.handleInputChange}
            />
          </label>
        </form>
      </div>
    );
  }
}
export default Login;
