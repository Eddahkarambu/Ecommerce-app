import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <form>
          <div>Signup</div>
          <div>Enter your details here to continue</div>
          <label>
            Firstname
            <input name="Firstname" type="text" />
          </label>
          <label>
            Lastnamme
            <input name="lastname" type="text" />
          </label>
          <label>
            Email Address
            <input name="emailAddress" type="text" />
          </label>
          <label>
            Password
            <input name="password" type="password" />
          </label>
          <div>Already a member?Login</div>
          <button>Signup</button>
        </form>
      </div>
    );
  }
}
export default Login;
