import { React, useEffect, useState } from "react";
import { Card, Button, Row } from "react-bootstrap";
import ItemCount from "../../components/itemCount/itemCount";
import { Link } from "react-router-dom";

export default function ItemProduct(props) {
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("")


    function handleOnClick() {
        props.price ? setPrice(props.price) : setPrice("no hay precio");
    }

    useEffect(() => {
        setDescription(props.description);
    }, [])

return (
    <Card style={{ width: '18rem' }} className='m-5 p-2 justify-content-center'>
    <Card.Img variant="top" src={props.image} />
    <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
            {description}
        </Card.Text>
    </Card.Body>
    <Card.Body>
        <Card.Text>{price}</Card.Text>
        <Link to={`/item/${props.id}`}>
            <Card.Link>Ver más</Card.Link>
        </Link>
        <Button className="m-2" onClick={handleOnClick}>Show Price</Button>
        <Row><ItemCount initial={1} stock={7}/></Row>
    </Card.Body>
    </Card>
  )
}
