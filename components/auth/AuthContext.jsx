// AuthContext.js
import React, { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext({});

const initialState = {
    user: null,
};

const authReducer = (state, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            console.log(action.payload);
            return { user: action.payload };
        case 'SIGN_OUT':
            return { user: null };
        default:
            return state;
    }
};

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const signIn = (user) => dispatch({ type: 'SIGN_IN', payload: user });
    const signOut = () => dispatch({ type: 'SIGN_OUT' });

    return (
        <AuthContext.Provider value={{ user: state.user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export { AuthProvider, useAuth };
