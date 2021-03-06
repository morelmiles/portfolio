import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center justify-between nav__bar p-3 px-md-1  mb-3 ">
      <Link to="/" className="my-0 mr-md-auto font-weight-normal name__logo">
        L.M
      </Link>

      <nav class="mx-auto" id="navBarResponsive">
        <a
          href="./Luigi Morel CV.pdf"
          target="_blank"
          rel="noreferrer noopenner"
          download
          className="p-4  nav__link"
        >
          Resume
        </a>
      </nav>
    </div>
  )
}

export default Navbar
