import { createContext, useState, useContext } from 'react';

const CartContext = createContext([])

export const useCartContext = () =>  useContext(CartContext);

export default function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([]);
    const [cartCounter, setCartCounter] = useState(0)
    const [total, setTotal] = useState(0)

    const addToCart = (item) => {
      let product = isInCart(item.id)
      if (!product) {
        let TotalPrice = item.price * item.quantity
        setCartCounter(cartCounter + item.quantity)
        setTotal(total + TotalPrice)
        setCartList([...cartList, item]);
      }
    }

    const removeFromCart = (id) => {
      var index = cartList.indexOf(id)
      if (index > -1) {
        let TotalPrice = cartList[index].price * cartList[index].quantity
        setCartCounter(cartCounter - cartList[index].quantity);
        setTotal(total - TotalPrice);
        cartList.splice(index, 1);
      }
      setCartList([...cartList]);
    }

    const clearCart = () => {
      setCartCounter(0);
      setCartList([]);
      setTotal(0);
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
        isInCart,
        cartCounter,
        total
    }}>
        {children}
    </CartContext.Provider>
  )
}
