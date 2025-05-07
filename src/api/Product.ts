import apiClient from "@/api/config/ApiClient";
import {ProductType} from "@/types/api/Product";
import {ApiResponseType} from "@/types";

interface Props {
    populate?: Array<"categories"|"thumbnail"|"gallery"> ;
    filters?:{
        is_popualr?: boolean;
    }
}

interface Filters {
    is_popular?: { $eq: boolean };
}

export function getAllProducts({populate,filters}:Props):Promise<ApiResponseType<ProductType>> {

    const customFilters:Filters = {};
    if (filters?.is_popualr){
        customFilters.is_popular = {$eq:filters.is_popualr};
    }

    return apiClient.get(`/products`,{
        params:{
            populate:populate?.join(','),
            filters:customFilters
        }
    });
}