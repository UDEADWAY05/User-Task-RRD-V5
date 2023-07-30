import React from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";

const UserEdit = () => {
    const params = useParams()
    const {userId} = params
    return <>
        <h1>Edit User Page</h1>
        <ul>
            <li><Link to={"/users/" + userId}>User profile Page</Link></li>
            <li><Link to={"/users/" + (Number(userId) + 1)}>Another User</Link></li>
            <li><Link to="/users">Users List Page</Link></li>
        </ul> 
    </>;
}
 
export default UserEdit;