import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: "",
      password: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    this.setState({
      [target.name]: target.value,
    });
  }

  //   handleSubmit(event) {
  //     event.preventDefault();
  //     Userfront.login({
  //       method: "password",
  //       emailAddress: this.state.emailAddress,
  //       password: this.state.password,
  //     });
  //   }
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
              value={this.state.emailAddress}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
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
