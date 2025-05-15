import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {basketApiCall, updateBasketApiCall, UpdateBasketData, UUID2UserApiCall} from "@/api/Basket";
import {BasketItemType} from "@/types/api/Basket";
import {toast} from "react-toastify";

export function useBasket() {

    const queryClient = useQueryClient()

    const  {data : basketData} = useQuery({queryKey:['get-basket'],queryFn:basketApiCall})

    const mutate = useMutation({mutationFn:updateBasketApiCall})
    const mutateUUId = useMutation({mutationFn:UUID2UserApiCall , onSuccess:(response) => {
            window.localStorage.removeItem("uuid");
            queryClient.invalidateQueries({queryKey:['get-basket']})
        }})

    const basketItems = basketData?.data.attributes.basket_items ?? []

    
    const addItemHandler = (productId:number) => {

        const preUpdateData = basketItems.map((item) => {
            return {
                product:{
                    connect:[{id:item.product.data.id}]
                },
                quantity:item.quantity
            }
        })

        preUpdateData.push({
            product:{
                connect:[{id:productId}]
            },
            quantity:1
        })

       const updateData : UpdateBasketData = {
           basket_items:preUpdateData
       }

        mutate.mutate(updateData,{onSuccess: (response) => {
                queryClient.invalidateQueries({queryKey:['get-basket']})
            }})
    }

    const updateItemHandler = (productId:number , type: "increase"|"decrease") => {

        let preUpdateData = basketItems.map((item) => {
            return {
                product:{
                    connect:[{id:item.product.data.id}]
                },
                quantity:item.quantity
            }
        })

        preUpdateData = preUpdateData.map((item) => {
            if (item.product.connect[0].id === productId){
                if (type === "increase") {
                    item.quantity = item.quantity + 1
                }else {
                    item.quantity = item.quantity - 1
                }
            }
            return item
        })

        const updateData : UpdateBasketData = {
            basket_items:preUpdateData
        }

        mutate.mutate(updateData,{onSuccess: (response) => {
                queryClient.invalidateQueries({queryKey:['get-basket']})
            },onError: (response) => {
                toast.error(response.response.data.error.message)
            }})
    }

    const getItem = (productId:number):BasketItemType | undefined => {
        return basketItems.find(item => item.product.data.id === productId)
    }

    const uuid2UserHandler = () => {
        const token = window.localStorage.getItem("token")
        const uuid = window.localStorage.getItem("uuid")
        if (token && uuid){
            if (basketItems.length > 0) {
                mutateUUId.mutate(uuid)
            }else {
                window.localStorage.removeItem("uuid")
                queryClient.invalidateQueries({queryKey:['get-basket']})
            }
        }
    }



    return {basketItems:basketItems,addItem:addItemHandler,updateItems:updateItemHandler,getItem:getItem,uuid2user:uuid2UserHandler}
}