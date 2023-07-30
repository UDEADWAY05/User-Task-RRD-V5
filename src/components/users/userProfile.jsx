import React from "react";
import { useParams, Link } from "react-router-dom/cjs/react-router-dom.min";

const UserProfile = () => {
    const params = useParams()
    const {userId} = params
    return <>
        <h1>UserPage</h1>
        <ul>
            <li><Link to="/users">Users List Page</Link></li>
            <li><Link to={"/users/" + userId + "/edit"}>Edit this user</Link></li>
        </ul> 
        <p>userId: {userId}</p>
    </>;
}
 
export default UserProfile;