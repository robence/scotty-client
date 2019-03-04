import React, { Component } from 'react';

import AccountService from './account-service';

const USERNAME = 'robence';

export default class CreateUser extends Component {
  state = { accountName: '' };

  handleSubmit = () => {
    const account = {
      _id: `${USERNAME}_${this.state.accountName}`,
      accountName: this.state.accountName,
      userName: USERNAME,
    };

    AccountService.createAccount(account);
  };

  onChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={() => this.handleSubmit()}>
        <label>
          Account Name:
          <input
            type="text"
            name="accountName"
            value={this.state.accountName}
            onChange={this.onChange}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
