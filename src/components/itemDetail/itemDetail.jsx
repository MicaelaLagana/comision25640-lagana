import {React} from 'react'
import { Row, Card } from 'react-bootstrap'
import ItemCount from '../itemCount/itemCount'


export default function ItemDetail(props) {
    console.log("props", props);
  return (
    <Row>
        <img src={props.image} alt=""/>
        <Card>
            <Card.Title as="h5">{props.title}</Card.Title>
            <Card.Body>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Card.Text>
                    {props.price}
                </Card.Text>
                <Row><ItemCount initial={1} stock={7}/></Row>
            </Card.Body>
        </Card>
    </Row>
  )
}