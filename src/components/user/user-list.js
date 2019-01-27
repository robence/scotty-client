import React from 'react';

const UserList = props =>
    (<ul>
        {props.users.map(user => (
            <div>
                <li>{user.firstName}—{user.lastName}</li>
                <li>{user.username}—{user.email}</li>
            </div>
        ))}
    </ul>);

export default UserList;
