import { React, useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import ItemCount from "../../components/itemCount/itemCount";

export default function ItemProduct(props) {
    const [price, setPrice] = useState("");
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")


    function handleOnClick() {
        props.price ? setPrice(props.price) : setPrice("no hay precio");
    }

    
    function handleOnClickTitle() {
        props.title ? setTitle(props.title) : setTitle("no hay titulo");
    }

    useEffect(() => {
        setDescription(props.description);
    }, [])

    console.log(props.image)

return (
    <Card style={{ width: '18rem' }} className='m-5 p-2'>
    <Card.Img variant="top" src={props.image} />
    <Card.Body>
        <Card.Title onClick={() => handleOnClick()}>{title}</Card.Title>
        <Card.Text>
        {description}
        </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
        <ListGroupItem>{price}</ListGroupItem>
    </ListGroup>
    <Card.Body>
        <Card.Link href="#" onClick={() => handleOnClick()}>price</Card.Link>
        <Card.Link href="#" onClick={() => handleOnClickTitle()}>title</Card.Link>
        <Row><ItemCount initial={1} stock={7}/></Row>
    </Card.Body>
    </Card>
  )
}
