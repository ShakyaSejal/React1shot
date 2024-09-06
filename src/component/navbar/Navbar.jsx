import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
<>
<nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-white text-xl font-bold">My App</div>

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/create" className="text-gray-300 hover:text-white">
            Create
          </Link>
          <Link to="/edit" className="text-gray-300 hover:text-white">
            Edit
          </Link>
          <Link to="/products" className="text-gray-300 hover:text-white">
            Product
          </Link>
        </div>
      </div>
    </nav>
</>  )
}

export default Navbar