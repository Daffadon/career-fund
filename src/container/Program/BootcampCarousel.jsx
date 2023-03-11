
import { Swiper, SwiperSlide } from "swiper/react";
import bootcampPic from "../../assets/Program/bootcamp.svg"

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";
const BootcampCarousel = () => {
    return (
        <div className="flex justify-center">
            <div className="w-11/12 max-w-[82rem]">
                <Swiper
                    pagination={true}
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    loop={true}
                    className="w-full">
                    <SwiperSlide>
                        <div className="flex justify-center items-center">
                            <img src={bootcampPic} alt="" className="max-w-full h-auto" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center items-center">
                            <img src={bootcampPic} alt="" className="max-w-full h-auto" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center items-center">
                            <img src={bootcampPic} alt="" className="max-w-full h-auto" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center items-center">
                            <img src={bootcampPic} alt="" className="max-w-full h-auto" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default BootcampCarousel