import { createContext, useContext, ReactNode, useState } from "react";
import { ShoppingCart } from "./shoppingCart";

const CartContext = createContext({});

export const useShoppingCart = () => {
  return useContext(CartContext);
};
const CartProviderProps = { children: ReactNode };

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const openCart = () => {
    return setIsOpen(true);
  };

  const closeCart = () => {
    return setIsOpen(false);
  };

  const getItemQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id) => {
    return setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (id) => {
    return setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };

  const cartQuantity = () => {
    return cartItems.reduce((quantity, item) => quantity + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartQuantity,
        openCart,
        closeCart
      }}
    >
      <ShoppingCart isOpen={isOpen} />
      {children}
    </CartContext.Provider>
  );
};
