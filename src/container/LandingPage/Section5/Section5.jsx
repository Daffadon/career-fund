import { card } from "../../../components/Card/card"
import { fontType } from "../../../components/Text/text"
import { comments } from "./comment"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper";
import back from "../../../assets/icons/backslide.svg"
import next from "../../../assets/icons/nextslide.svg"
import "swiper/css";
import "swiper/css/navigation";

const Section5 = () => {
    return (
        <div className=" my-[10em] flex items-center justify-center">
            <div className="w-11/12 ml-10 bg-primary50 flex flex-col items-center justify-center rounded-[50px] py-10 overflow-hidden">
                <p className={`${fontType["h1"]} text-white text-center`}>Apa Kata Mereka Tentang Program Kami?</p>
                <Swiper
                    slidesPerView={1}
                    navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                        renderBullet: () => 'null',
                    }}
                    breakpoints={{
                        670: {
                            slidesPerView: 1.5,
                        },
                        850: {
                            slidesPerView: 2
                        },
                        1050: {
                            slidesPerView: 2.5
                        },
                        1200: {
                            slidesPerView: 3
                        },
                        1490: {
                            slidesPerView: 3.5
                        },
                        1680: {
                            slidesPerView: 4
                        }
                    }}
                    modules={[Navigation]}
                    className=" max-h-[50vh] w-full"
                >
                    {comments.map((item) => {
                        return (
                            <SwiperSlide key={item.name} className="mt-[5em]">
                                <div className={`${card["landing-page"]} ml-20 sm:ml-16 md:ml-10 lg:ml-0`}>
                                    <div className="flex items-center mb-6">
                                        <img src={item.logo} alt="" />
                                        <div className="ml-3">
                                            <p className={`${fontType["h2"]}`}>
                                                {item.name}
                                            </p>
                                            <p className={`${fontType["h4"]} text-neutral50`}>
                                                {item.job}
                                            </p>
                                        </div>
                                    </div>
                                    <p className={`${fontType["h5"]} text-neutral50 text-center`}>
                                        {item.comment}
                                    </p>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                    <div className="swiper-button-prev w-24 h-24">
                        <img src={back} alt="Prev" className="absolute rounded-full " />
                    </div>
                    <div className="swiper-button-next w-24 h-24">
                        <img src={next} alt="Next" className="absolute " />
                    </div>
                </Swiper>
            </div >
        </div >
    )
}

export default Section5