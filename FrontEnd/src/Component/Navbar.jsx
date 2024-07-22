import React from 'react'

const Navbar = () => {
  const navItem=(
    <>
    <li><a>Home</a></li>
      <li><a>Course</a></li>
      <li><a>Contact</a></li>
      <li><a>About</a></li>
    </>
  )
  return (
    <>
    <div className='max-w-screen-2xl container max-auto md:px-20 px-4'>
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navItem}
       
      </ul>
    </div>
    <a className="text-2xl font-bold cursor-pointer">bookStore</a>
  </div>
  <div className='navbar-end space-x-3'>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">{navItem}</ul>
  </div>
  
  <div className='hidden md:block'>
  <label className="px-3 py-1.5 border rounded-md flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
  </div>


  <div className="">
    <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer">LOGIN</a>
  </div>
</div>
</div>
    </div>
    </>
  )
}

export default Navbar