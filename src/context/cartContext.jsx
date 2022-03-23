import { createContext, useState, useContext } from 'react';

const CartContext = createContext([])

export const useCartContext = () =>  useContext(CartContext);

export default function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item) => {
      if (!isInCart(item.id)) {
        setCartList([...cartList, item]);
      }
    }

    const removeFromCart = (id) => {
      var index = cartList.indexOf(id)
      if (index > -1) {
        cartList.splice(index, 1);
      }
      setCartList([...cartList]);
    }

    const clearCart = () => {
      setCartList([]);
    }

    const isInCart = (id) => {
      return cartList.find((item) => item.id === id)
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
