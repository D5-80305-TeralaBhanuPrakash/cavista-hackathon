import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import UserSignupScreen from "./screens/UserSignupScreen/UserSignupScreen";
import UserSigninScreen from "./screens/UserSigninScreen/UserSigninScreen";
import NotFoundScreen from "./screens/NotFoundScreen/NotFoundScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserDashboard from "./screens/UserDashboard/UserDashboard";
import Subscription from "./screens/Subscription/Subscription";
import { useSelector } from "react-redux";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import HospitalScreen from "./screens/HospitalScreen/HospitalScreen";
import HealthInfo from "./screens/HealthInfo/HealthInfo";
import Appointment from "./screens/Appointment/Appointment";
import Home from "./screens/HomePage/HomePage";

function App() {

  const data = useSelector((state) => state.userSignin);
  
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/user/signup" element={<UserSignupScreen />} />
          <Route path="/user/signin" element={<UserSigninScreen />} />
          <Route path="/user/home" element={data.isUserAuthenticated ? <UserDashboard /> : <UserSigninScreen />} />
          <Route path="/user/subscribe" element={data.isUserAuthenticated ? <Subscription /> : <UserSigninScreen />} />
          <Route path="/user/profile" element={data.isUserAuthenticated ? <ProfileScreen /> : <UserSigninScreen />} />
          <Route path="/user/healthinfo" element={data.isUserAuthenticated ? <HealthInfo /> : <UserSigninScreen />} />
          <Route path="/user/appointment" element={data.isUserAuthenticated ? <Appointment /> : <UserSigninScreen />} />
          <Route path="/hospital/home" element={<HospitalScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
        <ToastContainer theme="dark" />
      </Router>
    </>
  );
}

export default App;
