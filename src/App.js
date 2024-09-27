import { HomePage } from "./Pages/Home/HomePage";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBarLogin from "./Components/Utiltes/NaveBarLogIn";
import Footer from "./Components/Utiltes/Footer";

function App() {
  return (
    <div>
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
