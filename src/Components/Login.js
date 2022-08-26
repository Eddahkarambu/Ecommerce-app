import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <form>
          <div>LOGIN</div>
          <div>Enter your details here to continue</div>
          <label>
            Email Address
            <input
              name="emailAddress"
              type="text"
              //   value={this.state.emailAddress}
              //   onChange={this.handleInputChange}
            />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              //   value={this.state.password}
              //   onChange={this.handleInputChange}
            />
          </label>
          <div>Forgot password </div>
          <button>Login</button>
          <div>Dont have an account? Sign here </div>
        </form>
      </div>
    );
  }
}
export default Login;
