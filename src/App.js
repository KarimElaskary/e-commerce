import { HomePage } from "./Pages/Home/HomePage";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBarLogin from "./Components/Utiltes/NaveBarLogIn";

function App() {
  return (
    <div>
      <HomePage />
      {/* <Login /> */}
    </div>
  );
}

export default App;
