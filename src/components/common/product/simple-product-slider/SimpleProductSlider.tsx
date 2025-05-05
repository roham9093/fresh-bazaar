import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay , Navigation} from "swiper/modules";
import {IconBox, SimpleProductCard} from "@/components";

interface Props {
    sliderData:Array<any>;
    nextEl?:string;
    prevEl?:string;
}

export const SimpleProductSlider = ({sliderData , nextEl,prevEl}: Props) => {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={2}
            autoplay={true}
            modules={[Autoplay,Navigation]}
            navigation={{
                nextEl: nextEl,
                prevEl: prevEl,
            }}
            breakpoints= {{
                768: {
                    slidesPerView: 3,
                    spaceBetween: 18
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 22
                },
                1280: {
                    slidesPerView: 5,
                    spaceBetween: 24
                }
            }}
        >
            {
                sliderData.map((slideData,index) => (
                    <SwiperSlide key={index}>
                        <SimpleProductCard data={slideData} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};