import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DashboardScreen from "./screens/DashboardScreen/DashboardScreen";
import UserSignupScreen from "./screens/UserSignupScreen/UserSignupScreen";
import UserSigninScreen from "./screens/UserSigninScreen/UserSigninScreen";
import NotFoundScreen from "./screens/NotFoundScreen/NotFoundScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardScreen />} />
          <Route path="/user/signup" element={<UserSignupScreen />} />
          <Route path="/user/signin" element={<UserSigninScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
        <ToastContainer theme="dark" />
      </Router>
    </>
  );
}

export default App;
