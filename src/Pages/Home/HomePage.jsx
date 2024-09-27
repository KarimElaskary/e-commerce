import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import NavBarLogin from "../../Components/Utiltes/NaveBarLogIn";
import CardProductsContainer from "../../Components/products/CardProductsContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeatured";
import Footer from "../../Components/Utiltes/Footer";

export const HomePage = ({}) => {
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <NavBarLogin />

      <Slider />
      <HomeCategory />
      <CardProductsContainer title="الاكثر مبيعا" btntitle="المزيد" />
      <DiscountSection />
      <CardProductsContainer title=" احدث الازياء" btntitle="المزيد" />
      <BrandFeatured title=" اشهر المركات " btntitle="المزيد" />
      <Footer />
    </div>
  );
};
