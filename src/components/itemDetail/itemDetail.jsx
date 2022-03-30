import {React} from 'react'
import { Row, Card, Container } from 'react-bootstrap'
import ItemCount from '../itemCount/itemCount'


export default function ItemDetail(props) {
    const size ="400px";
  return (
    <Container className='justify-content-center col-6'>
        <div className='justify-content-center'>
            <Card className="m-5">
                <Row>
                    <img src={props.image} alt="" width={size} height={size}/>
                </Row>
                <Card.Title as="h5">{props.title}</Card.Title>
                <Card.Body>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Card.Text>
                        {props.price}
                    </Card.Text>
                    <Row><ItemCount initial={1} stock={7} item={props}/></Row>
                </Card.Body>
            </Card>
        </div>
    </Container>
  )
}