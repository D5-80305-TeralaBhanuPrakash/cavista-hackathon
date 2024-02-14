import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { signInUser } from "../services/user";

export function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSignIn = async () => {
     if (email.length === 0) {
      toast.warn("Enter email");
    } else if (password.length === 0) {
      toast.warn("Enter password");
    } 
     else {
      // Make API call
    const result = await signInUser(email, password);

    // Check if response indicates successful authentication
    if (result && result.jwt) {
      // Store JWT token in localStorage
      sessionStorage.setItem("jwtToken", "Bearer " +result.jwt);
      toast.success("Successfully logged in");
      navigate("/home");
    } else {
      // Display error message
      toast.error(result && result.msg ? result.msg : "Unknown error occurred. Please try again later.");
    }
    }
  };

  return (
    <>
      <h1 className="title">Signin</h1>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="abc@email.com"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="xxxxxxxxx"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <div>
                Don't have an account ? <Link to="/signup">Signup here</Link>
              </div>
              <button className="btn btn-primary mt-2" onClick={onSignIn}>Sign in</button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </>
  );
}

export default Signin;
