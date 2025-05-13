import React, {createContext, useContext, useReducer, useState} from "react";
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

type Action = {type:"ADD_ITEM", product:EntityType<ProductType>} | {type:"INCREMENT_ITEM", productId:number}
    | {type:"DECREMENT_ITEM", productId:number} | {type:"DELETE_ITEM", productId:number}

const basketReducer = (currentStat:ProductItem[] , action:Action)=>{
    switch (action.type) {
        case "ADD_ITEM":
            return [
                ...currentStat,
                {
                    productId: action.product.id,
                    title: action.product.attributes.title,
                    price: action.product.attributes.price,
                    img: action.product.attributes.thumbnail?.data?.attributes.url,
                    quantity: 1,
                }
            ]
        case "INCREMENT_ITEM":
            return currentStat.map((item=>{
                return item.productId == action.productId ? {...item , quantity: item.quantity + 1} : item
            }))
        case "DECREMENT_ITEM":
            const currentProduct = currentStat.find((item)=>{
            item.productId === action.productId
                })
            if(currentProduct && currentProduct.quantity === 1 ) {
                return currentStat.filter((item)=> item.productId !== action.productId )
            }
            return  currentStat.map((item=>{
                    if (item.productId == action.productId) {
                        return {...item , quantity: item.quantity - 1}
                    }else {
                        return item
                    }
            }))
        case "DELETE_ITEM":
            return currentStat.filter((item)=> item.productId !== action.productId )
        default:
            return currentStat

    }
}

export function BasketContextProvider({children}:Props) {
    /*const [basketItem , setBasketItem] = useState<Array<ProductItem>>([])*/
    const [ basketItem , dispatch ] = useReducer(basketReducer,[])

    const addItemHandler = (product : EntityType<ProductType>) => {
        dispatch({type:"ADD_ITEM", product:product})

        /*const newProduct : ProductItem = {
            productId:product.id,
            title:product.attributes.title,
            price:product.attributes.price,
            img:product.attributes.thumbnail?.data?.attributes.url,
            quantity: 1,
        }

        setBasketItem(prevState => [
            ...prevState,
            newProduct
        ])*/

    }


    const incrementItemHandler = (productId : number) => {
        dispatch({type:"INCREMENT_ITEM", productId:productId})

        /*const newBasket  = basketItem.map((item=>{
                if (item.productId == productId) {
                    return {...item , quantity: item.quantity + 1}
                }else {
                    return item
                }
            }))*/
            /*setBasketItem(newBasket)*/
    }


    const decrementItemHandler = (productId : number) => {
        dispatch({type:"DECREMENT_ITEM", productId:productId})
/*        const currentProduct = basketItem.find((item)=>{
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
        }*/
    }


    const deleteItemHandler = (productId : number) => {
        dispatch({type:"DELETE_ITEM", productId:productId})
/*        const newBasket = basketItem.filter((item)=> item.productId !== productId )
        setBasketItem(newBasket)*/
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