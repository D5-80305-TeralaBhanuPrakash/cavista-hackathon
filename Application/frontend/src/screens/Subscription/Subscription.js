import React, { useEffect } from "react";
import "./Subscription.css";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import subscriptionImg from "../../images/subscriptionImg.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllHospitals } from "../../actions/userAuthAction";

const Subscription = () => {
  const navigate = useNavigate();

  const data = useSelector((state) => state.userSignin);
  let token = data.response.jwt;

  const hospitalData = useSelector((state) => state.hospitals);
  let hospitals = hospitalData.response;

  console.log(hospitals);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllHospitals(token));
  }, []);

  const subscribe = () => {
    navigate("/user/healthinfo");
  };

  return (
    <>
      <UserNavbar />

      <div class="container my-5">
        <div class="row justify-content-center mb-3">
          {hospitals &&
            hospitals.map((h) => (
              <div class="col-md-12 col-xl-10 my-3">
                <div class="card shadow border rounded-3">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                        <div class="bg-image hover-zoom ripple rounded ripple-surface">
                          <img src={subscriptionImg} class="w-100" alt="" />
                          <a href="#!">
                            <div class="hover-overlay">
                              <div
                                class="mask"
                                style={{
                                  backgroundColor: "rgba(253, 253, 253, 0.15);",
                                }}
                              ></div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="col-md-6 col-lg-6 col-xl-6">
                        <h5>{h.name}</h5>
                        <div class="mt-1 mb-0 text-muted small">
                          <span class="text-primary"> • </span>
                          <span>Free Health Checkups</span>
                          <br />
                          <span class="text-primary"> • </span>
                          <span>Health Advice</span>
                          <br />
                        </div>
                      </div>
                      <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                        <div class="d-flex flex-row align-items-center mb-1">
                          <h4 class="mb-1 me-1">Rs.{h.fees}</h4>
                          <span class="text-danger">
                            <s>Rs.{h.fees+100}</s>
                          </span>
                        </div>
                        <h6 class="text-success">Deal for day</h6>
                        <div class="d-flex flex-column mt-4">
                          <button
                            class="btn btn-primary btn-sm"
                            type="button"
                            onClick={subscribe}
                          >
                            Subscribe Here
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Subscription;
