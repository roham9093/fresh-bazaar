import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay,} from "swiper/modules";
import {ProductVerticalList, SimpleProductCard} from "@/components";
import topSellingData from "@/mock/topSellingData";
import trendingProductsData from "@/mock/trendingProductsData";
import recentlyAddedData from "@/mock/recentlyAddedData";
import topRatedData from "@/mock/topRatedData";

export const GridSlider = ( ) => {
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
                <ProductVerticalList data={topSellingData} title={"Top Selling"}/>
            </SwiperSlide>

            <SwiperSlide>
                <ProductVerticalList data={trendingProductsData} title={"Trending Products"}/>
            </SwiperSlide>

            <SwiperSlide>
                <ProductVerticalList data={recentlyAddedData} title={"Recently added"}/>
            </SwiperSlide>

            <SwiperSlide>
                <ProductVerticalList data={topRatedData} title={"Top Rated"}/>
            </SwiperSlide>
        </Swiper>
    );
};