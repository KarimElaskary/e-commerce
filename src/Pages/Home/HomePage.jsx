import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";

import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeatured";
import CardProductsContainer from "../../Components/products/CardProductsContainer";

export const HomePage = ({}) => {
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Slider />
      <HomeCategory />
      <CardProductsContainer
        title="الاكثر مبيعا"
        btntitle="المزيد"
        pathText="/product"
      />
      <DiscountSection />
      <CardProductsContainer
        title=" احدث الازياء"
        btntitle="المزيد"
        pathText="/product"
      />
      <BrandFeatured title=" اشهر المركات " btntitle="المزيد" />
    </div>
  );
};
