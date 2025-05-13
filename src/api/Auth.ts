import apiClient from "@/api/config/ApiClient";
import {AuthResponseType} from "@/types/api/Auth";

interface RegisterProps{
    username: string;
    password: string;
    email: string;
}
interface LoginProps{
    identifier: string;
    password: string;
}
export function registerApiCall(data:RegisterProps):Promise<AuthResponseType> {
    return apiClient.post('/auth/local/register' , data)
}

export function loginApiCall(data:LoginProps):Promise<AuthResponseType> {
    return apiClient.post('/auth/local' , data)
}