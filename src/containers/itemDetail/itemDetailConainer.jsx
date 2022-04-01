import { React, useEffect, useState } from 'react';
import ItemDetail from '../../components/itemDetail/itemDetail';
import { getFetch } from '../../helpers/getFetch';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore'

export default function ItemDetailConainer() {
    const { id } = useParams();
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore() 
    const queryDb = doc(db, 'productos', id)
    getDoc(queryDb)
    .then(resp => setItem({ id: resp.id, ...resp.data()}))
    .then(() => setLoading(false))
    .catch(err => console.log(err))
}, [])


  return (
    <>
        { loading ? 
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner>
        :
        <ItemDetail id={item.id} title={item.title} price={item.price} image={item.image} description={item.description}/>
        }
    </>
  )
}

