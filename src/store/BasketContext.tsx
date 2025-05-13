import React, {createContext, useContext, useState} from "react";
import {EntityType} from "@/types";
import {ProductType} from "@/types/api/Product";

interface Props {
    children: React.ReactNode;
}

interface ProductItem {
    productId: number;
    title: string;
    price: number;
    img?: string;
    quantity: number;
}

export const BasketContext = createContext<{
    basketItem : Array<ProductItem>;
    addItem: (product : EntityType<ProductType>) => void;
    incrementItem: (productId : number) => void;
    decrementItem: (productId : number) => void;
    deleteItem: (productId : number) => void;
    getItem:(productId:number) => undefined | ProductItem
}>({
    basketItem : [],
    addItem: (product : EntityType<ProductType>) => {},
    incrementItem: (productId : number) => {},
    decrementItem: (productId : number) => {},
    deleteItem: (productId : number) => {},
    getItem:(productId:number) => undefined
})



export function BasketContextProvider({children}:Props) {
    const [basketItem , setBasketItem] = useState<Array<ProductItem>>([])

    const addItemHandler = (product : EntityType<ProductType>) => {
        const newProduct : ProductItem = {
            productId:product.id,
            title:product.attributes.title,
            price:product.attributes.price,
            img:product.attributes.thumbnail?.data?.attributes.url,
            quantity: 1,
        }

        setBasketItem(prevState => [
            ...prevState,
            newProduct
        ])

        console.log(newProduct)
    }


    const incrementItemHandler = (productId : number) => {
            const newBasket  = basketItem.map((item=>{
                if (item.productId == productId) {
                    return {...item , quantity: item.quantity + 1}
                }else {
                    return item
                }
            }))
            setBasketItem(newBasket)
    }


    const decrementItemHandler = (productId : number) => {
        const currentProduct = basketItem.find((item)=>{
            item.productId === productId
        })
        if(currentProduct && currentProduct.quantity === 1 ) {
            deleteItemHandler(productId)
        }else{
            const newBasket  = basketItem.map((item=>{
                if (item.productId == productId) {
                    return {...item , quantity: item.quantity - 1}
                }else {
                    return item
                }
            }))
            setBasketItem(newBasket)
        }
    }


    const deleteItemHandler = (productId : number) => {
        const newBasket = basketItem.filter((item)=> item.productId !== productId )
        setBasketItem(newBasket)
    }

    const getItem = (productId : number) :ProductItem|undefined => {
        return basketItem.find((item)=>{
            item.productId === productId
        })
    }
    return(
        <BasketContext.Provider value={{basketItem:basketItem ,addItem:addItemHandler ,decrementItem:decrementItemHandler ,incrementItem:incrementItemHandler ,deleteItem:deleteItemHandler , getItem:getItem}}>
            {
                children
            }
        </BasketContext.Provider>
    )
}