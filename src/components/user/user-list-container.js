import React, {Component} from 'react';

import UserService from './user-service';
import UserList from './user-list';

class UserListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { users: [] };
    }

    componentDidMount() {
        UserService.getAllUsers()
            .then(users => this.setState({ users: users }));
    }

    render() {
        return <UserList users={this.state.users} />;
    }
}

export default UserListContainer;
