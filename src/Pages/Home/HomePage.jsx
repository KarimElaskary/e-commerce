import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import NavBarLogin from "../../Components/Utiltes/NaveBarLogIn";
import CardProductsContainer from "../../Components/products/CardProductsContainer";

export const HomePage = ({}) => {
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <NavBarLogin />

      <Slider />
      <HomeCategory />
      <CardProductsContainer title="الاكثر مبيعا" btntitle="المزيد" />
      <CardProductsContainer title=" احدث الازياء" btntitle="المزيد" />
    </div>
  );
};
