import React from 'react'
import ItemProduct from '../item/item'
import { Container } from 'react-bootstrap'

export default function ItemList(props) {
  return (
    <Container className='row'>
      {props.items.map((item) => <ItemProduct key={item.id} id={item.id} title={item.title} price={item.price} image={item.image} description={item.description}/>)}
    </Container>
  )
}