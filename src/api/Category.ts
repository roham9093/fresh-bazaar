import ApiClient from "@/api/config/ApiClient";
import {ApiResponseType} from "@/types";
import {CategoryType} from "@/types/api/Category";

export function getFeaturedCategory():Promise<ApiResponseType<CategoryType>> {
    return ApiClient.get('/categories',{
        params:{
            populate:'thumbnail',
            filters:{
                is_featured:{
                    $eq:true,
                },
            },
        }
    });
}