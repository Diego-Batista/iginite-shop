import { createContext, ReactNode, useState } from "react";

export interface IProduct {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    numberPrice: number;
    description: string;
    defaultPriceId: string;
  }
  
  interface CartContextData {
    cartItems: IProduct[];
    addToCart: (product: IProduct) => void
    checkItemAlreadyExists: (productId: string) => boolean
    removeCartItem: (productId: string) => void
  }
  
  interface CartContextProviderProps {
    children: ReactNode;
  }
  
  export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [ cartItems, setCartItems ] = useState<IProduct[]>([])

    function addToCart(product: IProduct) {
        setCartItems(state => [...state, product])
    }

    function removeCartItem(productId: string) {
      setCartItems(state => state.filter(item => item.id !== productId))
    }

    function checkItemAlreadyExists(productId: string){
        return cartItems.some(product => product.id === productId)
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, checkItemAlreadyExists, removeCartItem }}>
            {children}
        </CartContext.Provider>
    )
}