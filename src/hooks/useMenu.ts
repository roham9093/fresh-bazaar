import {useQuery} from "@tanstack/react-query";
import {GetMenuApiCall} from "@/api/GetMenuApiCall";
import {EntityType, MenuItemType, MenuType, PopulateType} from "@/types";

interface Props {
    position: string;
}

export function useMenu({position}:Props) {
    const {data:menuData} = useQuery({queryKey:[GetMenuApiCall.name],queryFn:()=>GetMenuApiCall()})
    console.log(menuData)

    let menuItems: null|PopulateType<MenuItemType> = null;

    if (menuData) {
        const findMenu =  menuData.data.filter((item:EntityType<MenuType>)=> item.attributes.position === position);
        console.log(findMenu)
        if (findMenu) {
            menuItems = findMenu[0].attributes.menu_items;
            menuItems.data.sort((a:EntityType<MenuItemType>, b:EntityType<MenuItemType>)=>{
                if (a.attributes.rank < b.attributes.rank)
                    return -1;
                if (a.attributes.rank > b.attributes.rank)
                    return 1;
                return 0;
            })
        }

    }

    return { data: menuItems }
}