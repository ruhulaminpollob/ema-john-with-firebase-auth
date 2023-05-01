import React from 'react';
import { createContext } from 'react';

export const UserContext=createContext(null)
const AuthProvider = ({children}) => {

    const user={
        displayName:'al katra',
    }
    const authInfo={
        user,
    }
    

    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;