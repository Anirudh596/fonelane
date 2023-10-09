import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './components/context/cart.jsx'
import { ThemeProvider } from "@material-tailwind/react";
import { AuthProvider } from './components/context/AuthContext.jsx'
import { AuthContextProvider } from './components/context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </AuthContextProvider>
  </React.StrictMode>

// ...

// <AuthContextProvider>
//   <AuthProvider>
//   <BrowserRouter>
//     <ThemeProvider>
//       <App />
//     </ThemeProvider>
//   </BrowserRouter>
//   </AuthProvider>
// </AuthContextProvider>

)
