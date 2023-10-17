import React from 'react'
// import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
        {/* <img src="https://media.istockphoto.com/id/1167054318/vector/t-letter-logo-template-illustration-design-vector-eps-10.jpg?s=612x612&w=0&k=20&c=_1ipx1t5GMwIGjqruIntgvA1ZD1SwpdSlz6FyaHGC3k=" alt="img" /> */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-6d1EWP9es2dQZrA_LFrzsERHr0DzHKa0Tw&usqp=CAU" alt="logo" />
      <ul className='navitmescontainer'>
        <li>
            Home
            {/* <NavLink to="/" className='navitems'>
                Home
            </NavLink> */}
        </li>
        <li>
            About
        </li>
      </ul>
    </div>
  )
}

export default Navbar
