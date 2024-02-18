import React, { useRef, useState } from 'react'
import UserNavbar from '../../components/UserNavbar/UserNavbar';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Appointment = () => {
    const [apDate, setApDate] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitData = (e) => {
    e.preventDefault();

    const appointmentDate = {
      
    }

    console.log(appointmentDate);

    toast.success("Appointment booked successfully")
    navigate("/user/home")
  }
  const ref = useRef();
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
                  <div className="col-md-12 col-sm-12">
                    <i className="fa-solid fa-lock password__icon"></i>
                    <input
                      ref={ref}
                      className="input__password"
                      type="text"
                      placeholder="Enter Appointment date"
                      onFocus={() => (ref.current.type = "date")}
                      onBlur={() => (ref.current.type = "text")}
                      id="dob"
                      name="apDate"
                      value={apDate}
                      onChange={(e) => setApDate(e.target.value)}
                      required={true}
                      minLength={6}
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
                      Book
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

export default Appointment