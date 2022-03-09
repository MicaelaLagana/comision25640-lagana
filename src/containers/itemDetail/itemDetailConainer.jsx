import { React, useEffect, useState } from 'react';
import ItemDetail from '../../components/itemDetail/itemDetail';
import { getFetchItem } from '../../helpers/getFetch';
import { Spinner } from 'react-bootstrap';

export default function ItemDetailConainer() {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      getFetchItem
      .then((response) => {
        setItem(response)
        return response
    })
      .then(() => setLoading(false))
      .catch(err => console.log(err))
  }, [])
    
  console.log("ITEEEEEM", item);

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

