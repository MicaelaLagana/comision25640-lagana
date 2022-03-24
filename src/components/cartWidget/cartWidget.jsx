import React from "react";
import { useCartContext } from "../../context/cartContext";

const size = "30px";

export default function CartWidget() {
  const { cartCounter } = useCartContext();

return (
  <div>
    <img src="/images/carticon.png" alt="logo" width={size} height={size}/><p>{cartCounter > 0 && cartCounter}</p>
  </div>
  );
}
