import React, { useContext, useEffect } from 'react'
import { useCartContext } from '../../context/cartContext'
import { Button } from 'react-bootstrap';

export default function CartContainer() {
  const { cartList, clearCart, removeFromCart } = useCartContext();
  return (
    <div>
      {cartList.map(item => <li><img src={item.image} alt="" height="50px" widht="50px"/> titulo: {item.title}, precio: {item.price}. descripción: {item.description}, cantidad: {item.quantity} <Button onClick={() => removeFromCart(item)}>Eliminar</Button> </li>)}
      <Button onClick={clearCart}>Vaciar carrito</Button>
    </div>
  )
}