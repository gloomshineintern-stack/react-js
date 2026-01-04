import react, {useState, useMemo} from 'react'
import UserContext from './UserContext';

const UserContextProvider = ({children}) => {
    const[user, setUser]= useState(null);
    const value = useMemo(() => ({user, setUser}), [user]);

    return (
        <UserContext.Provider value={value}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;