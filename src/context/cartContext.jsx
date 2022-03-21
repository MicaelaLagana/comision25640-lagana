import { createContext, useState, useContext } from 'react';

const CartContext = createContext([])

export const useCartContext = () =>  useContext(CartContext);

export default function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item) => {
        setCartList([...cartList, item]);
    }

    const removeFromCart = (id) => {
      arrayRemove(id);
    }

    const clearCart = () => {
      setCartList([]);
    }

    const isInCart = (id) => {
      return cartList.find((item) => item.id === id)
    }

    const arrayRemove = (item) => {
      console.log("item", item);
      var index = cartList.indexOf(item)
      if (index > -1) {
        cartList.splice(index, 1);
      }
      setCartList([...cartList]);
  }


  return (
    <CartContext.Provider value={{
        cartList,
        addToCart,
        clearCart,
        removeFromCart,
        isInCart
    }}>
        {children}
    </CartContext.Provider>
  )
}
