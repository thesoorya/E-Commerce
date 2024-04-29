import React, { createContext } from 'react'
import allProducts from '../components/assets/all_product'

export const ShopContext = createContext(null)

const ShopContextProvider = ({ children }) => {

    const contextValue = { allProducts }

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider