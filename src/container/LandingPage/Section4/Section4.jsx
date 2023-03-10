import { fontType } from "../../../components/Text/text";
import { listCompany } from "./listCompany";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Mousewheel, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import { useNavigate } from "react-router";
import { card } from "../../../components/Card/card";

const Section4 = () => {
	const navigate = useNavigate();
	return (
		<div className="max-h-[75vh] mt-[15em] ml-10">
			<div className="flex">
				<p className={`${fontType["h1"]} w-6/12  md:w-4/12 mb-20`}>
					Perusahaan Paling Diminati
				</p>
			</div>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				scrollbar={{
					hide: true,
				}}
				direction={"horizontal"}
				freeMode={true}
				mousewheel={true}
				modules={[Scrollbar, FreeMode, Mousewheel]}
				className="h-[40vh] max-h-[45vh] w-full"
				breakpoints={{
					590: {
						slidesPerView: 1.5,
					},
					690: {
						slidesPerView: 2,
					},
					850: {
						slidesPerView: 2.5,
					},
					1000: {
						slidesPerView: 3,
					},
					1200: {
						slidesPerView: 3.5,
					},
					1350: {
						slidesPerView: 4,
					},
					1500: {
						slidesPerView: 4.5,
					},
				}}
			>
				{listCompany.map((item) => {
					return (
						<SwiperSlide key={item.name} className="bg-white rounded-xl h-max pt-10 pb-5">
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
								<p className={`${fontType["p1"]} text-neutral30 mt-1`}>
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
									onClick={() => {
										navigate("/program");
									}}
								>
									Lihat Detail
								</p>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default Section4;
