import { React, useState, useEffect } from "react";
import ItemList from "../../components/itemList/itemList";
import { getFetch } from "../../helpers/getFetch";
import { Spinner } from 'react-bootstrap'

export default function ItemListContainer() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFetch
        .then((response) => {
            setItems(response)
            return response
        })
        .then(() => setLoading(false))
        .catch(err => console.log(err))
    }, [])
    
    console.log("loading? ", loading);

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
