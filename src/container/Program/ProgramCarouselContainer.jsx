import { fontType } from "../../components/Text/text"
import loop from "../../assets/icons/loop.svg"
import ProgramCarousel from "./ProgramCarousel"
const ProgramCarouselContainer = ({ listProgram }) => {
    return (
        <>
            <div className="flex justify-center items-center">
                <img src={loop} className="relative left-10	" />
                <input
                    type="text"
                    className="w-full rounded-full px-16 border-none"
                    placeholder="Search" />
            </div>
            <div className="mt-10 ml-10">
                <div className="overflow-x-hidden">
                    <div className="mb-5">
                        <p className={`${fontType["h1"]} mb-5`}>Teknologi</p>
                        <ProgramCarousel slide={listProgram} />
                    </div>
                    <div className="mb-5">
                        <p className={`${fontType["h1"]} mb-5`}>Kesehatan</p>
                        <ProgramCarousel slide={listProgram} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProgramCarouselContainer