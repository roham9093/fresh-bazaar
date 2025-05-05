import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {ProductDealsOfTheDays} from "@/components";

interface Props {
    sliderData:Array<any>
}

export const DealsOfTheDays = ({sliderData}: Props) => {
    return (
        <Swiper
            spaceBetween={16}
            slidesPerView={1}
            autoplay={true}
            modules={[Autoplay]}
            breakpoints= {{
                768: {
                    slidesPerView: 2,
                    spaceBetween: 18
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 22
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 22
                }
            }}
        >
            {
                sliderData.map((slideData,index) => (
                    <SwiperSlide key={index}>
                        <ProductDealsOfTheDays data={slideData}/>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};