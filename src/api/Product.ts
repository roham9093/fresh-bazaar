import apiClient from "@/api/config/ApiClient";
import {ProductType} from "@/types/api/Product";
import {ApiResponseType} from "@/types";

interface Props {
    populate?: Array<"categories"|"thumbnail"|"gallery"> ;
    filters?:{};
    sort?:Array<string>;
    pagination?:{
        widthCount?:boolean;
        page?:number;
        pageSize?:number;
        start?:number;
        limit?:number;
    };
    topSell?:boolean;
    trending?:boolean;
}

export function getAllProducts({populate,filters={},sort=[],pagination={},topSell,trending}:Props):Promise<ApiResponseType<ProductType>> {

    return apiClient.get(`/products`,{
        params:{
            populate:populate?.join(','),
            filters:filters,
            sort:sort,
            pagination:pagination,
            topSell:topSell,
            trending:trending,
        }
    });
}