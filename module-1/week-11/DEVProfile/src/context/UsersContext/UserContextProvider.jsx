import { UserContext } from "./UsersContext";
import PropTypes from 'prop-types';
import { useState } from "react";
import users from '../../services/users.json'

export const UserContextProvider = ({ children }) => {

    const [profiles, setProfiles] = useState(users)
    
    const toggleFollowBtn = (id) => {
        const findProfile = profiles.map((p) => p.id === id ? {...p, seguindo: !p.seguindo} : p)

        setProfiles(findProfile);
    }

    return (
        <UserContext.Provider value={{ toggleFollowBtn, profiles }}>
            {children}
        </UserContext.Provider>
    )
}

UserContextProvider.propTypes = {
    children: PropTypes.node
}