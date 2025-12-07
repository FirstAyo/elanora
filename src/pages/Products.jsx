import React from "react";
import productsData from "../data/allproducts.json";
import ProductsPage from "../components/sections-cards/ProductsPage";

function Products() {
  return (
    <div>
      {/* <h1>Products Page</h1> */}
      <ProductsPage products={productsData} />
    </div>
  );
}

export default Products;
