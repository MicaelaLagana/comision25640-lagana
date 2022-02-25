import React from 'react'
import { Button, Col } from 'react-bootstrap';


export default function ButtonCounter(props) {
  return (
    <Col>
      <Button className="m-2" onClick={props.onClick} disabled={props.isDisabled}>{props.name}</Button>
    </Col>
  )
}