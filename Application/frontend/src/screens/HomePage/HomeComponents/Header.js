import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"
function Header() {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <NavLink to="loginSignup">
              <img
                src="https://cdn.apollohospitals.com/dev-apollohospitals/2023/04/ApolloProhealth.jpg"
                className="d-block"
                alt="doctor1"
                style={{ height: "550px" }}
              />
            </NavLink>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.askapollo.com/assets/giftcard/topbannern.png"
              className="d-block"
              alt="doctor2"
              style={{ height: "550px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.apollohospitals.com/dev-apollohospitals/2023/11/childrens_banner_web.jpg"
              className="d-block"
              alt="doctor3"
              style={{ height: "600px" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Header;
