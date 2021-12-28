import React from "react";

import Item from "./components/Item";

function ProductList({ productList, setSelectedProduct }) {
  const renderProductList = () => {
    return productList.map((item, index) => {
      return (
        <Item key={index} item={item} setSelectedProduct={setSelectedProduct} />
      );
    });
  };

  return (
    <>
      <h2>Danh sách sản phẩm</h2>
      <div className="list">{renderProductList()}</div>
    </>
  );
}

export default ProductList;
