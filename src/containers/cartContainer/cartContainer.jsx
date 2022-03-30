import React from 'react'
import { useCartContext } from '../../context/cartContext'
import Cart from '../../components/cart/cart';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'


export default function CartContainer() {
  const { cartList, clearCart, removeFromCart } = useCartContext();
  return (
    <div>
     {
      cartList.length > 0 &&  
      <div>
        <Cart cartList={cartList} clearCart={clearCart} remove={removeFromCart}/>
        <Button>Terminar compra</Button>
      </div>
     }

    {
      cartList.length === 0 &&  
      <div>
        <h1>Carrito vacío</h1>
        <div>
            <Link to="/"><Button>Home</Button></Link>
        </div>
      </div>
     }
    </div>
  )
}