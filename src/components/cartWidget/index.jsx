import React from "react";
import Cart from '../assets/images/carticon.png';

const size = "30px";

export default function cartWidget() {
return (
    <img src={Cart} alt="logo" width={size} height={size}/>
  );
}
