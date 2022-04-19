import { React, useState, useEffect } from "react";
import ItemList from "../../components/itemList/itemList";
import { Spinner, Row } from 'react-bootstrap'
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore'
import './itemListContainer.css';

export default function ItemListContainer() {
    const { id } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if( id ){
            const db = getFirestore() 
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


return (
    <Row className="justify-content-center">
    { loading ? 
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner>
    :
        <div className="cards-container">
            <div>
                <ItemList items={items}/>
            </div>
        </div>  
    }
    </Row>
    );
}
