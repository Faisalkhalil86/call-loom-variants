import React from 'react'

const Navbar = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold'>Call Loom</h1>
      <ul className='flex space-x-4'>
        <li><a href='#' className='text-blue-500'>Home</a></li>
        <li><a href='#' className='text-blue-500'>About</a></li>
        <li><a href='#' className='text-blue-500'>Contact</a></li>
      </ul>
    </div>
  )
}

export default Navbar
