import React from "react";
import { useNavigate, generatePath } from "react-router-dom";

import { ROUTERS } from "../../../constants/routers";

function Item({ item }) {
  const navigate = useNavigate();

  generatePath(ROUTERS.PRODUCT_DETAIL, { id: item.id });
  // /product/2

  return (
    <div
      className="item-wrapper"
      onClick={() =>
        navigate(generatePath(ROUTERS.PRODUCT_DETAIL, { id: item.id }))
      }
    >
      <div
        className="item-container"
        style={{
          backgroundColor: "#b5f5ec",
        }}
      >
        {item.isNew && <div className="new">NEW</div>}
        <div>{item.name}</div>
        <div>{item.price.toLocaleString()}₫</div>
      </div>
    </div>
  );
}

export default Item;
