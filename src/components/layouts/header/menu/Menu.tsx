import Link from "next/link";
import {IconBox} from "@/components";
import {browsCategoryMock} from "@/mock/browsCategory";
import {mockMenu} from "@/mock/menu";
import {useQuery} from "@tanstack/react-query";
import {GetMenuApiCall} from "@/api/GetMenuApiCall";

export const Menu = () => {
    //TODO load menu data from api

    const {data:menuData} = useQuery({queryKey:[GetMenuApiCall.name],queryFn:()=>GetMenuApiCall()})
    console.log(menuData)
    return (
        <>
            <div id="all_categories" className="flex relative cursor-pointer bg-green-200 gap-2.5 text-white px-4 py-3 rounded-[5px] items-center">
                <IconBox icon={"icon-apps"} size={24} title={"Browse All Categories"} titleClassName={"text-medium"} link={"#"}/>
                <IconBox icon={"icon-angle-small-down"} size={24}/>
                <div id="all_categories_box" className="hidden absolute z-20 bg-white left-0 top-16 w-[500px] rounded-[5px] border-[1px] border-green-300 p-[30px] hover:cursor-default">
                    <div id="all_cat_inner_box" className="flex flex-wrap justify-between gap-y-[15px]">

                        {
                            browsCategoryMock.map((item , index) => (
                                <IconBox key={index} linkClassName="flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 " link={item.link} icon={item.icon} size={30} title={item.title} titleClassName="text-heading-sm text-blue-300" path={item.iconPath} />
                            ))
                        }
                        <IconBox linkClassName="cursor-pointer flex gap-4 items-center justify-center w-full mt-[17px]" link="#" icon="icon-add" size={30} title="More Categories" titleClassName="text-heading-sm text-blue-300"  />
                    </div>
                </div>
            </div>
            <nav id="main_menu">
                <ul className="flex flex-col lg:flex-row items-start lg:items-center text-heading6 lg:text-heading-sm 2xl:text-heading6 gap-[32px] mt-[32px] lg:mt-0 lg:gap-3 xl:gap-5 2xl:gap-10">

                    {
                        mockMenu.map((item, index) => (
                            <li key={index}>
                                {
                                    item.icon ?
                                        <IconBox
                                            size={24}
                                            {...item}
                                        />:
                                        <Link href={item.link} className="flex items-center gap-1">{item.title}</Link>
                                }
                            </li>
                        ))
                    }
                    {/*<li>*/}
                    {/*    <Link href="#" className="flex flex-row gap-2 items-center">*/}
                    {/*        <i className="icon-flame text-[24px]"></i>*/}
                    {/*        <div className="text-heading6 lg:text-heading-sm xl:text-heading6">Hot Deals</div>*/}
                    {/*    </Link>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <Link href="#" className="flex items-center gap-1">Home</Link>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <Link href="#" className="flex flex-row">Food</Link>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <Link href="#" className="flex flex-row">Vegetables</Link>*/}
                    {/*</li>*/}
                </ul>
            </nav>
        </>
    );
};

