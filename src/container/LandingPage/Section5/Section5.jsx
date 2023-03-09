import { card } from "../../../components/Card/card"
import { fontType } from "../../../components/Text/text"
import { comments } from "./comment"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Section5 = () => {
    return (
        <div className=" min-h-[100vh] flex items-center justify-center">
            <div className="w-11/12  ml-10 bg-primary50 flex flex-col items-center justify-center rounded-[50px] py-10">
                <p className={`${fontType["h1"]} text-white`}>Apa Kata Mereka Tentang Program Kami?</p>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    initialSlide={1}
                    navigation={true}
                    modules={[Navigation]}
                    className=" h-[50vh] max-h-[50vh] w-full px-5"
                >
                    {comments.map((item) => {
                        return (
                            <SwiperSlide key={item.name}>
                                <div className={`${card["landing-page"]} mt-16`}>
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
                                    <p className={`${fontType["h5"]} text-neutral50 text-justify`}>
                                        {item.comment}
                                    </p>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div >
        </div >
    )
}

export default Section5