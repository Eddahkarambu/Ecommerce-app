import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <form>
          <label>
            Email Address
            <input
              name="Email Address"
              type="text"
              //   value={this.state.emailOrUsername}
              //   onChange={this.handleInputChange}
            />
          </label>
        </form>
      </div>
    );
  }
}
export default Login;
