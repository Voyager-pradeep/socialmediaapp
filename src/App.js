import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home2 from "./pages/home/Home2";
function App() {
  // return <Profile />;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home2" element={<Home2 />} />
      </Routes>
    </div>
  );
}

export default App;
