import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../provider/AuthProvider';

const PrivateRoutes = ({children}) => {

    const {user, loading}=useContext(UserContext)
    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    if (user) {
        return children
    }

    return  <Navigate to="/login"></Navigate>
};

export default PrivateRoutes;