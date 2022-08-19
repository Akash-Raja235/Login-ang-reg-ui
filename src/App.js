import './App.css';
import Login from './componets/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './componets/SignUp';
import ForgotPassword from './componets/ForgotPassword';

function App() {
  return(
   <>
    <BrowserRouter>
        <Routes>
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
      </>
  )
}

export default App;
