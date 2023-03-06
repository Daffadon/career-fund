import { fontType } from "../../../components/Text/text"
import { listCompany } from "./listCompany"
import { Swiper, SwiperSlide } from "swiper/react"
import { Scrollbar, Mousewheel, FreeMode } from "swiper"
import "swiper/css"
import "swiper/css/scrollbar"


const Section4 = () => {
    return (
        <div className="max-h-[70vh] mt-[10em] ml-10">
            <div className="flex">
                <p className={`${fontType["h1"]} w-4/12 mb-20`}>Perusahaan Paling Diminati</p>
            </div>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                scrollbar={{
                    hide: true,
                }}
                direction={"horizontal"}
                freeMode={true}
                mousewheel={true}
                modules={[Scrollbar, FreeMode, Mousewheel]}
                className="max-h-[56vh] w-full"
                breakpoints={{
                    780:{
                        slidesPerView : 3
                    },
                    1150:{
                        slidesPerView : 4.5
                    }
                }}
            >
                {listCompany.map(item => {
                    return (
                        <SwiperSlide key={item.name}>
                            <div className=" min-h-[30vh] py-10 px-4 rounded-xl shadow-[5px_5px_10px_rgba(0,0,0,0.05)]">
                                <div className="flex items-center mb-6">
                                    <img src={item.logo} alt="" />
                                    <p className={`${fontType["h2"]}`}>{item.name}</p>
                                </div>
                                <p className={`${fontType["h4"]}`}>{item.job}</p>
                                <p className={`${fontType["p3"]} text-neutral30 mt-1`}>{item.loc}</p>
                                <div className="flex gap-1 mt-5">
                                    {item.tag.map(tag => {
                                        return <p key={tag} className="bg-secondary10 text-secondary90 py-1 px-3 rounded-full">{tag}</p>
                                    })}
                                </div>
                                <p className="text-center bg-primary50 text-white rounded-full py-2 mt-8 cursor-pointer hover:bg-white hover:border-primary50 border-2 hover:text-primary50">Lihat Detail</p>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Section4