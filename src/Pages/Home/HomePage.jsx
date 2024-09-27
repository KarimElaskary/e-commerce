import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";

import CardProductsContainer from "../../Components/products/CardProductsContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeatured";

export const HomePage = ({}) => {
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Slider />
      <HomeCategory />
      <CardProductsContainer title="الاكثر مبيعا" btntitle="المزيد" />
      <DiscountSection />
      <CardProductsContainer title=" احدث الازياء" btntitle="المزيد" />
      <BrandFeatured title=" اشهر المركات " btntitle="المزيد" />
    </div>
  );
};
