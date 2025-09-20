import React from 'react'
import UserContext from './UserContext';

const UserContextProvider = ({children}) => {
    const [user, set5User] = React.useState(null);
    return (
        <>
        <UserContext.Provider value = {{user, set5User}}>
        {children}
        </UserContext.Provider>
        </>
    )
}