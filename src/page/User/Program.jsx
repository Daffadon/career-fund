// import { cardSize } from "../components/Cards/cards";
import Layout from "../../components/Layout/Layout";
import { fontType } from "../../components/Text/text";
import BootcampCarousel from "../../container/Program/BootcampCarousel";
import filter from "../../assets/icons/filter.svg"
import CheckBox from "../../components/CheckBox/CheckBox";
import { listposisi } from "../../container/Program/program";
import { listProgram } from "../../container/Program/program";
import { listCompany } from "../../container/LandingPage/Section4/listCompany";
import { school } from "../../container/account/account";
import loop from "../../assets/icons/loop.svg"
import ProgramCarousel from "../../container/Program/ProgramCarousel";
const Program = () => {
	return (
		<Layout>
			<BootcampCarousel />
			<div className="relative mt-16 flex px-10 h-max mb-20">
				<div className="w-1/4 ">
					<div className="flex flex-col justify-between w-11/12 bg-white rounded-2xl px-4 py-6">
						<div className="flex justify-between">
							<p className={`${fontType["h3"]}`}>Filter</p>
							<img src={filter} className="w-6" />
						</div>
						<p className={`${fontType["h3"]} mt-5`}>Posisi</p>
						<CheckBox item={listposisi} />
						<p className={`${fontType["h3"]} mt-5`}>Jurusan</p>
						<CheckBox item={listProgram} />
						<p className={`${fontType["h3"]} mt-5`}>Tingkat</p>
						<CheckBox item={["D3", "S1"]} />
						<p className={`${fontType["h3"]} mt-5`}>Pendidikan Terakhir</p>
						<CheckBox item={school} />
					</div>
				</div>
				<div className="w-3/4 rounded-2xl ">
					<div className="flex justify-center items-center">
						<img src={loop} className="relative left-10	" />
						<input
							type="text"
							className="w-full rounded-full px-16 border-none"
							placeholder="Search" />
					</div>
					<div className="mt-10 ml-10">
						<div className="overflow-x-hidden">
							<p className={`${fontType["h1"]} mb-5`}>Teknologi</p>
							<ProgramCarousel slide={listCompany} />
							<p className={`${fontType["h1"]} mb-5`}>Kesehatan</p>
							<ProgramCarousel slide={listCompany} />
						</div>
					</div>
				</div>
			</div>
		</Layout >
	);
};

export default Program;
