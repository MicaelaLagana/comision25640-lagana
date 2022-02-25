import React from 'react'
import { Button } from 'react-bootstrap';


export default function ButtonCounter(props) {
  return (
    <Button className="m-2" onClick={props.onClick}>{props.name}</Button>
  )
}