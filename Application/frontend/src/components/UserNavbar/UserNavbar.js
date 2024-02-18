import React, { useEffect, useRef } from "react";
import "./UserNavbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { logout } from "../../actions/userAuthAction";
import logo from "../../images/logo.png";

const UserNavbar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((state) => state.userSignin);
  let user = data.response.custDto;

  const stateRef = useRef(user);

  // useEffect(() => {

  //   setTimeout(() => {
  //     stateRef.current = user;
  //   console.log(stateRef.current?.fname);
  //   }, 2000);
  // }, [user])

  const logoutUser = () => {
    dispatch(logout(toast, navigate));
  };

  return (
    <>
      <nav class={`navbar navbar-expand-lg navbar-light bg-light shadow`}>
        <div class="container-fluid">
          <Link class="navbar-brand fw-bold" to="/user/home">
            <span className="brand_name">Healthcare</span>
            <img
              src={logo}
              alt="profile"
              style={{ width: "7%", height: "7%", marginLeft: "1%" }}
              className="brand_logo"
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <ul class="navbar-nav">
              <li class="nav-item welcome">
                {/* <h5>
                  Welcome! <span className="text-muted"> {stateRef.current?.fname + " " + stateRef.current?.lname} </span>
                </h5> */}

                <h5>
                  Welcome!{" "}
                  <span className="text-muted">
                    {" "}
                    {user?.firstName}{" "}
                  </span>
                </h5>
              </li>{" "}
              <span className="divide">|</span>
              <li class="nav-item profile">
                <button
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Subscribe Here"
                  onClick={() => navigate("/user/subscribe")}
                >
                  <i class="fa-solid fa-crown" style={{color: '#FFBA00'}}></i>
                </button>
              </li>{" "}
              <span className="divide">|</span>
              <li class="nav-item profile">
                <button data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Profile"
                  onClick={() => navigate("/user/profile")}>
                <i class="fa-solid fa-user"></i>
                </button>
              </li>{" "}
              <span className="divide">|</span>
              <li class="nav-item logout">
                <button onClick={logoutUser}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default UserNavbar;
