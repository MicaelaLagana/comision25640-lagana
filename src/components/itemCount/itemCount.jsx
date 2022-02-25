import { React, useState } from 'react'
import { Row } from 'react-bootstrap';
import ButtonCounter from '../buttonCounter/buttonCounter';
import ButtonCart from '../buttonCart/buttonCart';
import { Alert } from 'react-bootstrap';

export default function ItemCount(props) {
    let count = props.initial ? props.initial : 1;
    const [counter, setCounter] = useState(count);
    const [available, setAvailable] = useState(true); //Esto no va a grisar el producto, va a grisar el botón de + o -
    const [showAlert, setShowAlert] = useState(false);
    let stock = props.stock ? props.stock : 1;

    
    const handleOnClickAdd = () => {
      console.log("a");
        count !== stock ?  setCounter(count++) : setAvailable(false);
    }
     
    function handleOnClickSubs() {
      console.log("b");
      count !== props.initial ? setCounter(count--) : setAvailable(false)  ;
    }
    console.log("count", count)
    console.log("counter", counter)

    function onAdd() {
      console.log("aleeert");
      setShowAlert(true);
    }


  return (
    <Row>
        <Row>
          <ButtonCounter onClick={() => handleOnClickAdd()} name={"+"} isAvaiable ={available}/> 
          <h2>{counter}</h2>
          <ButtonCounter onClick={() => handleOnClickSubs()} name={"-"} isAvaiable ={available}/> 
        </Row>
        <Row><ButtonCart name={"Agregar al carrito"} onAdd={onAdd} /></Row>
        { showAlert ? //Esto tengo que pasarlo a la pantalla principal 
        <Alert variant={'success'}>
        ¡Se han agregado {count} productos al carrito!
        </Alert>
        :
          ""
        }
      </Row>
  )
}