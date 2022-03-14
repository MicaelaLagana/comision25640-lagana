import { React, useState, useEffect } from "react";
import ItemList from "../../components/itemList/itemList";
import { getFetch } from "../../helpers/getFetch";
import { Spinner, Row } from 'react-bootstrap'
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
    const { id } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if( id ){
            getFetch
            .then((response) => {
                setItems( response.filter( products => products.category === id))
                return response
            })
            .then(() => setLoading(false))
            .catch(err => console.log(err))
        } else {
            getFetch
            .then((response) => {
                setItems(response)
                return response
            })
            .then(() => setLoading(false))
            .catch(err => console.log(err))
        }
    }, [id])

return (
    <Row className="justify-content-center">
    { loading ? 
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner>
    :
        <ItemList items={items}/>
    }
    </Row>
  );
}
