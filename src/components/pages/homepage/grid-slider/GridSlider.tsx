import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay,} from "swiper/modules";
import {ProductVerticalList} from "@/components";
import {useQuery} from "@tanstack/react-query";
import {ApiResponseType} from "@/types";
import {ProductType} from "@/types/api/Product";
import {getAllProducts} from "@/api/Product";

export const GridSlider = ( ) => {

    const {data : topRate} = useQuery<ApiResponseType<ProductType>>({queryKey:[getAllProducts.name,'top_rate'],queryFn:()=>getAllProducts(
            {
                populate:["thumbnail"],
                sort:["rate:desc"],
                pagination:{
                    start:0,
                    limit:3,
                    widthCount:false
                }
            }
        )})
    const {data : topSell} = useQuery<ApiResponseType<ProductType>>({queryKey:[getAllProducts.name,'tops_ell'],queryFn:()=>getAllProducts(
            {
                populate:["thumbnail"],
                sort:["is_top_selling:desc"],
                pagination:{
                    start:0,
                    limit:3,
                    widthCount:false
                }
            }
        )})
    const {data : isTrending} = useQuery<ApiResponseType<ProductType>>({queryKey:[getAllProducts.name,'is_trending'],queryFn:()=>getAllProducts(
            {
                populate:["thumbnail"],
                sort:["is_trending:desc"],
                pagination:{
                    start:0,
                    limit:3,
                    widthCount:false
                }
            }
        )})

    return (
        <Swiper
            spaceBetween={16}
            slidesPerView={1}
            autoplay={true}
            modules={[Autoplay]}
            loop={true}
            breakpoints= {{
                768: {
                    slidesPerView: 2,
                    spaceBetween: 18
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 18
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 22
                }
            }}
        >
            <SwiperSlide>
                {
                    topSell &&
                    <ProductVerticalList data={topSell.data} title={"Top Selling"}/>
                }
            </SwiperSlide>

            <SwiperSlide>
                {
                    isTrending &&
                    <ProductVerticalList data={isTrending.data} title={"Trending Products"}/>
                }
            </SwiperSlide>

            <SwiperSlide>
                {
                    topRate &&
                    <ProductVerticalList data={topRate.data} title={"Top Rated"}/>
                }
            </SwiperSlide>
        </Swiper>
    );
};