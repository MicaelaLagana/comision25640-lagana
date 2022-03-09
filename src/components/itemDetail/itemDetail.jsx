import {React, useEffect, useState} from 'react'
import { Row, Card } from 'react-bootstrap'
import ItemCount from '../itemCount/itemCount'


export default function ItemDetail(props) {
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");

    useEffect(() => {
        console.log(props);
        setDescription(props.description);
        setTitle(props.title);
        setImage(props.image);
        setPrice(props.price);
    }, [])

  return (
    <Row>
        <img src={image} alt=""/>
        <Card>
            <Card.Title as="h5">{title}</Card.Title>
            <Card.Body>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text>
                    {price}
                </Card.Text>
                <Row><ItemCount initial={1} stock={7}/></Row>
            </Card.Body>
        </Card>
    </Row>
  )
}