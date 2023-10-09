// // AuthContext.js
// import React, { createContext, useContext, useState, useReducer } from "react";

// export const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const login = () => {
//     setIsLoggedIn(true);
//   };

//   const logout = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export const authReducer = (state, action) => {
//     switch(action.type){
//         case 'LOGIN':
//             return {user: action.payload}
//         case 'LOGOUT':
//             return {user: null}
//         default:
//             return state
//     }
// }

// export const AuthContextProvider = ({children}) => {
//     const [state, dispatch] = useReducer(authReducer, {
//         user:null
//     })

//     console.log('AuthContext state:', state);

//     return (
//         <AuthContext.Provider value={{...state, dispatch}}>
//             { children }
//         </AuthContext.Provider>
//     )
// }


// AuthContext.js
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
  
