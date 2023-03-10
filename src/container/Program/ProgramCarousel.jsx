import { Scrollbar, Mousewheel, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { card } from "../../components/Card/card";
import "swiper/css";
import "swiper/css/scrollbar";
import { fontType } from "../../components/Text/text";

const ProgramCarousel = ({ slide }) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      scrollbar={{
        hide: true,
      }}
      direction={"horizontal"}
      freeMode={true}
      mousewheel={true}
      modules={[Scrollbar, FreeMode, Mousewheel]}
      className="h-[40vh] max-h-[45vh] w-[90rem]"
      breakpoints={{
        780: {
          slidesPerView: 4,
        },
        1150: {
          slidesPerView: 4,
        },
      }}
    >
      {slide.map((item) => {
        return (
          <SwiperSlide key={item.name}>
            <div className={`${card["program"]} `}>
              <div className="flex items-center mb-6">
                <img src={item.logo} alt="" />
                <p className={`${fontType["h2"]}`}>
                  {item.name}
                </p>
              </div>
              <p className={`${fontType["h4"]}`}>
                {item.job}
              </p>
              <p className={`${fontType["p3"]} text-neutral30 mt-1`}>
                {item.loc}
              </p>
              <div className="flex gap-1 mt-5">
                {item.tag.map((tag) => {
                  return (
                    <p key={tag} className="bg-secondary10 text-secondary90 py-1 px-3 rounded-full">
                      {tag}
                    </p>
                  );
                })}
              </div>
              <p
                className="text-center bg-primary50 text-white rounded-full py-2 mt-8 cursor-pointer hover:bg-white hover:border-primary50 border-2 hover:text-primary50"
              >
                Lihat Detail
              </p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  )
}

export default ProgramCarousel