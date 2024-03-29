import { card } from "../../../components/Card/card"
import { fontType } from "../../../components/Text/text"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper";
import back from "../../../assets/icons/backslide.svg"
import next from "../../../assets/icons/nextslide.svg"
import "swiper/css";
import "swiper/css/navigation";

const Section5 = ({ data }) => {
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
            690: {
              slidesPerView: 1.5,
            },
            920: {
              slidesPerView: 2
            },
            1160: {
              slidesPerView: 2.5
            },
            1400: {
              slidesPerView: 3
            },
            1590: {
              slidesPerView: 3.5
            },
            1820: {
              slidesPerView: 4
            }
          }}
          modules={[Navigation]}
          className=" max-h-[50vh] w-full"
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide key={index} className="mt-[5em]">
                <div className={`${card["landing-page"]} sm:ml-12 md:ml-10 lg:ml-0`}>
                  <div className="flex items-center mb-6">
                    <img src={item.logo} alt="" />
                    <div className="ml-3">
                      <p className={`${fontType["h2"]}`}>
                        {item.name}
                      </p>
                      <p className={`${fontType["p1"]} text-neutral50`}>
                        {item.position}
                      </p>
                    </div>
                  </div>
                  <p className={`${fontType[" h5"]} text-neutral50 text-center mt-14`}>
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