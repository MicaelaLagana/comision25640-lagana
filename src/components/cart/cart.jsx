import { React } from 'react'
import { Button } from 'react-bootstrap'
import { useCartContext } from '../../context/cartContext'

export default function Cart(props) {
  
    const {total} = useCartContext();
   
  return (
    <>
        <div>
            {props.cartList.map(item => <li key={item.id}><img src={item.image} alt="" height="50px" widht="50px"/> titulo: {item.title}, precio: {item.price}, descripción: {item.description}, cantidad: {item.quantity} <Button onClick={() => props.remove(item)}>Eliminar</Button> </li>)}
            <Button>Vaciar carrito</Button>
            <p>Total: {total}</p>
        </div>
    </>
  )
}
