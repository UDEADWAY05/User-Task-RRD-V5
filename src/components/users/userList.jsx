import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const UsersList = () => {
    return <><h1>UsersPage</h1>
        <ul>
            <li><Link to="/users/0">User 0</Link></li>
            <li><Link to="/users/1">User 1</Link></li>
            <li><Link to="/users/2">User 2</Link></li>
            <li><Link to="/users/3">User 3</Link></li>
            <li><Link to="/users/4">User 4</Link></li>
        </ul>
    </>;
}
 
export default UsersList;