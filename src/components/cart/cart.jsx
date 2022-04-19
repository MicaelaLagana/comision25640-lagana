import { React } from 'react'
import { Button } from 'react-bootstrap'
import { useCartContext } from '../../context/cartContext'
import './cart.css'

export default function Cart() {
  
    const {cartList, total, clearCart, removeFromCart} = useCartContext();
   
  return (
        <div>
          <div className="cartBox">
            {cartList.map(item => <li key={item.id}><img src={item.image} alt="" height="50px" widht="50px"/> titulo: {item.title}, precio: {item.price}, descripción: {item.description}, cantidad: {item.quantity} <Button onClick={() => removeFromCart(item)}>Eliminar</Button> </li>)}
          </div>
          <div className='="cartRow'>
              <p>Total: {total}</p>
              <Button onClick={clearCart}>Vaciar carrito</Button>
            </div>
        </div>
  )
}
