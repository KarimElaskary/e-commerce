import React from "react";
import { Container } from "react-bootstrap";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import CardProductsContainer from "../../Components/products/CardProductsContainer";
import ProductDetalis from "../../Components/products/ProductDetalis";
import RateContainer from "../../Components/Rate/RateContainer";

const ProductDetalisPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        <ProductDetalis />
        <RateContainer />
        <CardProductsContainer title="منتجات قد تعجبك" />
      </Container>
    </div>
  );
};

export default ProductDetalisPage;
