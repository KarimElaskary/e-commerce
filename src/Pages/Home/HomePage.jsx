import React from "react";
import NavBarLogin from "../../Components/Utiltes/NaveBarLogIn";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";

export const HomePage = () => {
  return (
    <div className="font">
      <NavBarLogin />
      <Slider />
      <HomeCategory />
    </div>
  );
};
