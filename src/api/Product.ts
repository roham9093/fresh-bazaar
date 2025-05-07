import apiClient from "@/api/config/ApiClient";
import {ProductType} from "@/types/api/Product";
import {ApiResponseType} from "@/types";

interface Props {
    populate?: Array<"categories"|"thumbnail"|"gallery"> ;
    filters?:{
        is_popualr?: boolean;
        is_popular_fruit?: boolean;
        is_best_seller?: boolean;
    }
}

interface Filters {
    is_popular?: { $eq: boolean };
    is_popular_fruit?: { $eq: boolean };
    is_best_seller?: { $eq: boolean };
}

export function getAllProducts({populate,filters}:Props):Promise<ApiResponseType<ProductType>> {

    const customFilters:Filters = {};
    if (filters?.is_popualr){
        customFilters.is_popular = {$eq:filters.is_popualr};
    }
    if (filters?.is_popular_fruit){
        customFilters.is_popular_fruit = {$eq:filters.is_popular_fruit};
    }
    if (filters?.is_best_seller){
        customFilters.is_best_seller = {$eq:filters.is_best_seller};
    }

    return apiClient.get(`/products`,{
        params:{
            populate:populate?.join(','),
            filters:customFilters
        }
    });
}