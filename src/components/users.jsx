import React from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import UserEdit from "./users/userEdit";
import UserProfile from "./users/userProfile";
import UsersList from "./users/userList";

const Users = () => {
    const params = useParams()
    const {userId, edit} = params
    return (<>
        <h1>Users Layout</h1>
        <Link to="/">MainPage</Link>
        {userId ? (edit ? <UserEdit /> : <UserProfile />) : <UsersList/> }

    </>);
}
 
export default Users;