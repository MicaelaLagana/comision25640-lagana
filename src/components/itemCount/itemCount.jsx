import { React, useState } from 'react'
import { Row } from 'react-bootstrap';
import ButtonCounter from '../buttonCounter/buttonCounter';
import ButtonCart from '../buttonCart/buttonCart';
import { Alert, Col } from 'react-bootstrap';

export default function ItemCount(props) {
    const [counter, setCounter] = useState(props.initial);
    const [disabledAdd, setDisabledAdd] = useState(false);
    const [disabledSubs, setDisabledSubs] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    
    const handleOnClickAdd = () => {

        if (counter === props.stock) {
          setDisabledAdd(true);
          setDisabledSubs(false);
        } else {
          setCounter(counter + 1);
        }

        if (counter > 1) {
          setDisabledSubs(false);
        }
        setShowAlert(false);
    }
     
    function handleOnClickSubs() {
      if (counter === props.initial) {
        setDisabledSubs(true);
      } else {
        setCounter(counter - 1);
      } 
      if (counter < props.stock) {
        setDisabledAdd(false);
      }
      setShowAlert(false);
    }
    console.log("counter", counter)

    function onAdd() {
      console.log("aleeert");
      setShowAlert(true);
    }


  return (
    <Row>
        <Row>
          <ButtonCounter onClick={handleOnClickAdd} name={"+"} isDisabled ={disabledAdd}/> 
          <Col><h2>{counter}</h2></Col>
          <ButtonCounter onClick={handleOnClickSubs} name={"-"} isDisabled ={disabledSubs}/> 
        </Row>
        <Row><ButtonCart name={"Agregar al carrito"} onAdd={onAdd} /></Row>
        { showAlert ? 
        <Alert variant={'success'}>
        ¡Se han agregado {counter} productos al carrito!
        </Alert>
        :
          ""
        }
      </Row>
  )
}