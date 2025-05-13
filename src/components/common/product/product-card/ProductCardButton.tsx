import {EntityType} from "@/types";
import {ProductType} from "@/types/api/Product";
import {IconBox} from "@/components";
import {BasketContext} from "@/store/BasketContext";
import {useContext} from "react";

interface Props {
    ProductData:EntityType<ProductType>
}

export const ProductCardButton = ({ProductData}: Props) => {

    const basket = useContext(BasketContext)
    const currentBasketItem = basket.getItem(ProductData.id)
    return (
        <div className="add-product">
            {
                currentBasketItem  ?
                    <div className=" w-[80px] flex justify-between input-product__container  border-[1px] rounded-[4px] border-green-300 text-green-300 h-[30px] p-[3px]">
                        <div className="flex flex-col justify-between">
                            <IconBox onClick={()=> basket.incrementItem(ProductData.id)} icon="up icon-angle-small-up" size={10}/>
                            <IconBox onClick={()=> basket.deleteItem(ProductData.id)} icon="down icon-angle-small-down" size={10}/>
                        </div>
                        {
                            currentBasketItem.quantity
                        }
                    </div>
                    :
                    <button
                        onClick={()=>basket.addItem(ProductData)}
                        className="flex items-center justify-center text-heading-sm text-green-200 border-[1px] rounded-[4px] bg-green-150 px-[10px] py-[5px]">Adds
                        +
                    </button>
            }

        </div>
    );
};