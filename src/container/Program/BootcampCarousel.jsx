
import { Swiper, SwiperSlide } from "swiper/react";
import bootcampPic from "../../assets/Program/bootcamp.svg"

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";
const BootcampCarousel = () => {
    return (
        <div className="flex justify-center ">
            <div className="w-[82rem]">
                <Swiper
                    pagination={true}
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    loop={true}>
                    <SwiperSlide>
                        <div className="flex w-max justify-center items-center rounded-full">
                            <img src={bootcampPic} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center items-center">
                            <img src={bootcampPic} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center items-center">
                            <img src={bootcampPic} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center items-center">
                            <img src={bootcampPic} alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default BootcampCarousel