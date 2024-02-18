import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../../components/Header/Header";
import Content from "./HomeComponents/Content";

function HomePage() {
  return (
    <>
    
      <Header />
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
      <Content />
      <div style={{margin:"100px", width:'800px', height:'400px'}}>
        <div
          id="my-map-canvas"
          style={{ height: "100%", width: "100%", maxWidth: "100%" }}
        >
          <iframe
            style={{ height: "100%", width: "100%", border: 0 }}
            src="https://www.google.com/maps/embed/v1/place?q=Apollo+hospital,+Pune,+Sasoon+Road,+Sangamvadi,+Pune,+Maharashtra,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default HomePage;
