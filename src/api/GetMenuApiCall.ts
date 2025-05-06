import apiClient from "@/api/config/ApiClient";



export async function GetMenuApiCall() {
    return  await apiClient.get('/menus',{
        params:{
            populate: "*",
        }
    })
}