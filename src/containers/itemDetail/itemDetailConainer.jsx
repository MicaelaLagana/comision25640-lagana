import { React, useEffect, useState } from 'react';
import ItemDetail from '../../components/itemDetail/itemDetail';
import { getFetch } from '../../helpers/getFetch';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export default function ItemDetailConainer() {
    const { id } = useParams();
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      getFetch
      .then((response) => {
      setItem(response.find(producto => producto.id === parseInt(id)))
    })
      .then(() => setLoading(false))
      .catch(err => console.log(err))
  }, [])

  console.log(item);

  return (
    <>
        { loading ? 
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner>
        :
        <ItemDetail title={item.title} price={item.price} image={item.image} description={item.description}/>
        }
    </>
  )
}

