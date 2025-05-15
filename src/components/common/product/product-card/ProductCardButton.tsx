import {EntityType} from "@/types";
import {ProductType} from "@/types/api/Product";
import {IconBox} from "@/components";
import {BasketContext} from "@/store/BasketContext";
import {useContext} from "react";
import {useBasket} from "@/hooks/useBasket";

interface Props {
    ProductData:EntityType<ProductType>
}

export const ProductCardButton = ({ProductData}: Props) => {

/*    const basket = useContext(BasketContext)
    const currentBasketItem = basket.getItem(ProductData.id)*/
    const {addItem,updateItems , getItem} = useBasket()
    const basketItems = getItem(ProductData.id)
    return (
        <div className="add-product">
            {
                basketItems  ?
                    <div className=" w-[80px] flex justify-between input-product__container  border-[1px] rounded-[4px] border-green-300 text-green-300 h-[30px] ">
                        <div className="flex flex-col justify-between">
                            <IconBox onClick={()=>updateItems(ProductData.id , 'increase')} icon="up icon-angle-small-up cursor-pointer" size={10}/>
                            <IconBox onClick={()=>updateItems(ProductData.id , 'decrease' )} icon="down icon-angle-small-down cursor-pointer" size={10}/>
                        </div>
                        {
                            basketItems.quantity
                        }
                    </div>
                    :
                    <button
                        onClick={()=>addItem(ProductData.id)}
                        className="flex items-center justify-center text-heading-sm text-green-200 border-[1px] rounded-[4px] bg-green-150 px-[10px] py-[5px]">Adds
                        +
                    </button>
            }

        </div>
    );
};