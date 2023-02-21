import React, { Component } from 'react';
import OtpInput from 'react-otp-input';

export default class Optpinput extends Component {
  state = { otp: '' };

  handleChange = (otp:any) => this.setState({ otp });

  render() {
    return (
      <OtpInput
        value={this.state.otp}
        onChange={this.handleChange}
        numInputs={6}
        separator={<span>&nbsp;&nbsp;</span>}
        className="input_class"
      />
    );
  }
}