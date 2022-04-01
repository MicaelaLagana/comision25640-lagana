import React, { useState } from 'react'
import { useCartContext } from '../../context/cartContext'
import Cart from '../../components/cart/cart';
import { Link } from 'react-router-dom'
import { Button, Row, Form } from 'react-bootstrap'
import { getFirestore, collection, addDoc } from 'firebase/firestore'


export default function CartContainer() {
  const { cartList, clearCart, removeFromCart, setOrderID, total, orderID } = useCartContext();
  const [finishOrder, setFinishOrder] = useState(false);
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    phone: ""
  })
  


  const createOrder = () => { 
    let counter = orderID;
    let order = {
      id: counter++,
      buyer: {},
      total: 0,
      items: []
    }

    order.buyer = { name: dataForm.name , phone: dataForm.phone, email: dataForm.email }
    order.total = total
    order.items = cartList

    console.log(order);
    const db = getFirestore()
    const queryCollection = collection(db, 'orders')
    addDoc(queryCollection, order)
    .catch(err => console.log(err))
    .finally(setOrderID(counter))

    setFinishOrder(true);
    clearCart();
  }

const handleSubmit = (e) => {
  setDataForm({
    ...dataForm,
    [e.target.name]: e.target.value,    
  })
}

  return (
    <div>
     {
      (cartList.length > 0 && (!finishOrder)) &&  
      <div>
        <Row>
          <div>
            <Cart cartList={cartList} clearCart={clearCart} remove={removeFromCart}/>
          </div>
          <div>
            <Form className='col-6 justify-content-end' 
              onSubmit={createOrder}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="name" placeholder="Nombre" value={dataForm.name} onChange={handleSubmit}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Email" value={dataForm.email} onChange={handleSubmit}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Teléfono</Form.Label>
                <Form.Control type="number" name="phone" label="Teléfono" value={dataForm.phone} onChange={handleSubmit}/>
              </Form.Group>
              <Button onClick={createOrder}>Terminar compra</Button>
            </Form>
          </div>
        </Row>
      </div>
     }

    {
      finishOrder &&  
      <div>
        <h2>Nro de orden: {orderID}</h2>
        <div>
            <Link to="/"><Button>Home</Button></Link>
        </div>
      </div>
     }

    {
      (cartList.length === 0 && !(finishOrder)) &&  
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