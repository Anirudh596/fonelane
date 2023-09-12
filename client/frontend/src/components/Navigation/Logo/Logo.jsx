import React from 'react'

function Logo() {
  return (
  <>
  <div className="flex items-center justify-center">
      <div className="group relative">
        <img
          src="./vite.svg" // Replace with your logo image path
          alt="Fonelane"
          className="w-20 h-20 transition-transform transform group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="text-white text-lg font-semibold">Visit Fonelane</p>
        </div>
      </div>
    </div>
  </>
    
  )
}

export default Logo