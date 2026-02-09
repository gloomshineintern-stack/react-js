import React, { useMemo, useState } from 'react'
import UserContext from './UserContext'


function UserContextProvider({children}) {

    const [ user, setUser ] = useState(() => {
        const savedUser = localStorage.getItem("user")
        return savedUser ? JSON.parse(savedUser) : null
    });
    
    const value = useMemo(() => ({ user, setUser }), [user])
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;

