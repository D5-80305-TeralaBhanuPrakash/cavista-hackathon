import React from 'react'
import {Link} from "react-router-dom"
import "./Header.css";

const Header = (props) => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-light bg-light ${props.prop_name} shadow`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Healthcare</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            </ul>
            <ul className="navbar-nav">
              <li className="nav-item signup_btn">
                <button className="nav-link active btn" style={{backgroundColor: "rgb(68, 158, 247)",  width: "100px"}}>
                  <Link to="/user/signup" style={{textDecoration: "none", color: "black"}}>
                  Signup
                  </Link>
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link active btn" style={{backgroundColor: "rgb(68, 158, 247)", width: "100px"}}>
                  <Link to="/user/signin" style={{textDecoration: "none", color: "black"}}>
                  Login
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

Header.defaultProps = {
  prop_name: "main_nav",
}

export default Header