import React from 'react'

const NavBar = props => {
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <span className="badge badge-pill badge-secondary">
        {props.totalCounters}
      </span>
    </nav>
  )
}

export default NavBar
