import React, { Component } from 'react';

import UserListContainer from './user-list-container'

import CreateAccountForm from '../account/create-account-form'
import CreateAccountButton from '../account/create-account-button'

export default class UserLayout extends Component {
  constructor(props) {
        super(props)

        this.state = {
            isCreateButtonActive: false
        };
  }

  onClick = () => {
    this.setState({ isCreateButtonActive: true });
  }

  getContent() {
    if(/*this.state.isCreateButtonActive*/true) {
      return <CreateAccountForm/>;
    } else {
      return (
        <div>
          <CreateAccountButton onClick={this.onClick}/>
          <UserListContainer />
        </div>);
    }
  }

  render() {
    return (
      <div>
        // {this.getContent()}
        Hello
      </div>
    );
  }
}
