import { Scrollbar, Mousewheel, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { card } from "../../components/Card/card";
import "swiper/css";
import "swiper/css/scrollbar";
import { fontType } from "../../components/Text/text";
import UserDetailProgram from "../../page/User/UserDetailProgram";
import { Link, Route, Router, Routes, useNavigate } from "react-router-dom";

const ProgramCarousel = ({ slide }) => {
	const navigate = useNavigate()
	return (
		<>
			<Swiper
				slidesPerView={1.5}
				spaceBetween={30}
				scrollbar={{
					hide: true,
				}}
				direction={"horizontal"}
				freeMode={true}
				mousewheel={true}
				modules={[Scrollbar, FreeMode, Mousewheel]}
				className="min-h-[35vh] h-[38vh] max-h-[40vh] w-full "
				breakpoints={{
					300: {
						slidesPerView: 1
					},
					500: {
						slidesPerView: 1.5
					},
					900: {
						slidesPerView: 2.5
					},
					780: {
						slidesPerView: 2.5
					}
				}}
			>
				{slide.map((item) => {
					return (
						< SwiperSlide key={item.name} className="bg-white max-h-[23rem] flex flex-initial rounded-xl pt-10" >
							<div className={`${card["program"]} `}>
								<div className="flex items-center mb-6">
									<img src={item.logo} alt="" />
									<p className={`${fontType["h2"]} ml-2`}>
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
											<p key={tag} className="bg-warning10 text-warning90 py-1 px-3 rounded-full">
												{tag}
											</p>
										);
									})}
								</div>
								<div onClick={() => { navigate(`${item.name}`) }}
									className="text-center bg-primary50 text-white rounded-full py-2 mt-8 cursor-pointer hover:bg-white hover:border-primary50 border-2 hover:text-primary50">
									Detail
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper >
		</>
	)
}

export default ProgramCarousel