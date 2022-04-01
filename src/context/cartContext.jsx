import { createContext, useState, useContext } from 'react';

const CartContext = createContext([])

export const useCartContext = () =>  useContext(CartContext);

export default function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([]);
    const [cartCounter, setCartCounter] = useState(0)
    const [orderID, setOrderID] = useState(0)
    const [total, setTotal] = useState(0)

    const isInCart = (id) => {
      console.log(cartList);
      return cartList.some((item) => item.id === id)
    }

    const addToCart = (item) => {
      let product = isInCart(item.id)
      console.log(product)
      if (product) {
        cartList.map((prod) => prod.id === item.id && (prod.quantity += item.quantity))
          let totalPrice = item.price * item.quantity 
          setTotal(total + totalPrice)
          setCartCounter(cartCounter + item.quantity)
      } else {
          let TotalPrice = item.price * item.quantity
          setCartCounter(cartCounter + item.quantity)
          setTotal(total + TotalPrice)
          setCartList([...cartList, item])
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

  return (
    <CartContext.Provider value={{
        cartList,
        addToCart,
        clearCart,
        removeFromCart,
        isInCart,
        setOrderID,
        cartCounter,
        total,
        orderID
    }}>
        {children}
    </CartContext.Provider>
  )
}
