import React from 'react'
import { Button } from 'react-bootstrap';


export default function ButtonCart(props) {
  return (
    <Button onClick={props?.onAdd} className="m-2">{props.name}</Button>
  )
}