import { React, useState, useEffect } from "react";
import ItemList from "../../components/itemList/itemList";
import { getFetch } from "../../helpers/getFetch";
import { Spinner } from 'react-bootstrap'

export default function ItemListContainer() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFetch
        .Then((response) => {
            setItems(response)
            return response
        })
        .then((resp) => console.log(resp))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [])
    

return (
    <>
    { loading ? 
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner>
    :
        <ItemList items={items}/>
    }
    </>
  );
}
