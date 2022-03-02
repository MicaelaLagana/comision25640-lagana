import React from 'react'
import ItemProduct from '../item/item'

export default function ItemList(props) {
  return (
    <div item={props.items.map((item) => <ItemProduct key={item.id} title={item.title} price={item.price} image={item.image} description={item.description}/>)}/>
  )
}