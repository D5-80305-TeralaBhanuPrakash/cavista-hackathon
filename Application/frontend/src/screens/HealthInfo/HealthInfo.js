import React, { useRef, useState } from 'react'
import "./HealthInfo.css";
import UserNavbar from '../../components/UserNavbar/UserNavbar';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HealthInfo = () => {
    const [bg, setBg] = useState("");
  const [bp, setBp] = useState("");
  const [diseases, setDiseases] = useState("");
  const [hb, setHb] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitData = (e) => {
    e.preventDefault();

    const healthinfo = {
      
    }

    console.log(healthinfo);

    setBp(p => "");
    setBg("");
    setDiseases("");
    setHb("");
    setHeight("");
    setWeight("");

    navigate("/user/appointment");

  }
  return (
    <>
        <UserNavbar />

        <div className="card mt-3 mx-auto register_card w-50">
        <form onSubmit={submitData}>
          <div className="row g-0">
            
            <div className="col-lg-12 col-sm-12">
              <div className="card-body">
                <div className="register__head text-center">Health Info Details!</div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <i className="fa-solid fa-user email__icon"></i>
                    <input
                      type="text"
                      className="input__email"
                      placeholder="Enter Blood Group"
                      id="fname"
                      name="fname"
                      value={bg}
                      onChange={(e) => setBg(e.target.value)}
                      required={true}
                    />
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <i className="fa-solid fa-user email__icon"></i>
                    <input
                      type="text"
                      className="input__email"
                      placeholder="Enter Blood Pressure"
                      id="lname"
                      name="lname"
                      value={bp}
                      onChange={(e) => setBp(e.target.value)}
                      required={true}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <i className="fa-solid fa-user email__icon"></i>
                    <input
                      type="text"
                      className="input__email"
                      placeholder="Inherited Disease"
                      id="email"
                      name="email"
                      value={diseases}
                      onChange={(e) => setDiseases(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <i className="fa-solid fa-lock password__icon"></i>
                    <input
                      type="text"
                      className="input__password"
                      placeholder="Enter Haemoglobin"
                      id="password"
                      name="password"
                      value={hb}
                      onChange={(e) => setHb(e.target.value)}
                      required={true}
                    />
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <i className="fa-solid fa-lock password__icon"></i>
                    <input
                      type="text"
                      className="input__password"
                      placeholder="Enter Height"
                      id="cpassword"
                      name="cpassword"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      required={true}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <i className="fa-solid fa-user email__icon"></i>
                    <input
                      type="text"
                      className="input__email"
                      placeholder="Enter Weight"
                      id="contact"
                      name="contact"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      required={true}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-sm-12 register_btn">
                    <button
                      type="submit"
                      className="register_button w-100"
                      value="Submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default HealthInfo