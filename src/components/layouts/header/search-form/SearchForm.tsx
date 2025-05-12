import {IconBox} from "@/components";
import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {getAllProducts} from "@/api/Product";

import {useEffect, useState} from "react";
import {EntityType} from "@/types";
import {ProductType} from "@/types/api/Product";

interface Props {
    inputClassName?: string;
}
interface FormData {
    search_text:string;
}
interface FilterData {
    title:{
        $containsi:string
    }
}

export const SearchForm = ({inputClassName=''}:Props) => {

    const [results, setResults] = useState<Array<EntityType<ProductType>>>([]);

    const {register,handleSubmit,watch} = useForm<FormData>()
    const mutation = useMutation({mutationFn:(data:FilterData)=>getAllProducts({
            filters: data
        })})

    const search_text = watch("search_text")

    useEffect(() => {
        if (search_text && search_text.length > 1){
            handleSubmit(onSubmit)();
        }else {
            setResults([])
        }
    }, [search_text]);

    const onSubmit = (data:FormData) => {
        mutation.mutate({
            title:{
                '$containsi' : data.search_text
            }
        },{
            onSuccess:(response)=>{
                console.log(response)
                setResults(response.data)
            }
        })
    }

    return (
        <div className={"relative"}>
            <form onSubmit={handleSubmit(onSubmit)} name="search-form" action="#" method="post" className="flex items-center">
                <input  autoCapitalize={"off"} type="text" {...register("search_text")}  placeholder="Search for items"
                       className={`text-xsmall text-gray-400 border-gray-300 w-full focus:outline-none ${inputClassName}`}/>
                <button type="submit">
                    <IconBox icon={"icon-search"} />
                </button>
            </form>
            {
                results &&
                <div className={"absolute bg-white w-full left-0 right-0 top-14"}>
                    <ul>
                        {
                            results.map((item:EntityType<ProductType>,index) => {
                                return <li key={index} className={"p-4 hover:bg-green-200 hover:text-white cursor-pointer"}>{item.attributes.title}</li>
                            })
                        }
                    </ul>
                </div>
            }
        </div>
    );
};