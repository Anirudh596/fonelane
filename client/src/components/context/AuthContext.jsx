
import React, { createContext, useContext, useState, useReducer } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isLoggedIn: false,
  });

  console.log('AuthContext state:', state);

  const login = (user) => {
    dispatch({ type: 'LOGIN', payload: user });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}


// AuthContext.js
// ... (previous code)

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
      user: null,
      isLoggedIn: false,
    });
  
    console.log('AuthContext state:', state);
  
    const login = (user) => {
      dispatch({ type: 'LOGIN', payload: user });
    };
  
    const logout = () => {
      dispatch({ type: 'LOGOUT' });
    };
  
    return (
      <AuthContext.Provider value={{ ...state, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
