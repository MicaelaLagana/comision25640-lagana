import { React, useState } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import Holder from '../../components/assets/images/imageholder.png'

export default function ItemListContainer(props) {
    const [greeting, setGreeting] = useState("");
    const [title, setTitle] = useState("")

    function handleOnClick() {
        props.greeting ? setGreeting(props.greeting) : setGreeting("no hay saludo");
    }

    
    function handleOnClickTitle() {
        props.title ? setTitle(props.title) : setTitle("no hay titulo");
    }

return (
    <Card style={{ width: '18rem' }} className='m-5 p-2'>
    <Card.Img variant="top" src={Holder} />
    <Card.Body>
        <Card.Title onClick={() => handleOnClick()}>{title}</Card.Title>
        <Card.Text>
        Producto ejemplo que será llenado con la descripción del mismo
        </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
        <ListGroupItem>{greeting}</ListGroupItem>
    </ListGroup>
    <Card.Body>
        <Card.Link href="#" onClick={() => handleOnClick()}>greeting</Card.Link>
        <Card.Link href="#" onClick={() => handleOnClickTitle()}>title</Card.Link>
    </Card.Body>
    </Card>
  );
}
