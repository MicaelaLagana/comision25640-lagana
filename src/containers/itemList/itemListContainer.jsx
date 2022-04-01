import { React, useState, useEffect } from "react";
import ItemList from "../../components/itemList/itemList";
import { getFetch } from "../../helpers/getFetch";
import { Spinner, Row } from 'react-bootstrap'
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection, query, where, getDocsFromCache } from 'firebase/firestore'

export default function ItemListContainer() {
    const { id } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if( id ){
            const db = getFirestore() 
            const queryDbColection = collection(db, 'productos')
            const q = query( collection(db, 'productos'), where('category', '==', id) )
            getDocs(q)
            .then(resp => setItems(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
            .then(() => setLoading(false))
            .catch(err => console.log(err))
        } else {
            const db = getFirestore() 
            const queryDbColection = collection(db, 'productos')
            getDocs(queryDbColection)
            .then(resp => setItems(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
            .then(() => setLoading(false))
            .catch(err => console.log(err))
        }
    }, [id])

    console.log(items)

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
