import AccordionFaq from "./AccordionFaq"
import { fontType } from "../../components/Text/text"
import imghelp from "../../assets/Help/bgSearch.svg"
const HelpCore = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center relative">
                <img src={imghelp} className="w-10/12 h-auto" />
                <p className={`${fontType["p1"]} text-white ml-24 md:ml-32 lg:ml-40 xl:ml-64 w-6/12 md:w-5/12 lg:w-6/12 xl:w-3/12 sm:text-2xl md:text-3xl lg:text-5xl self-start absolute top-4 sm:top-7 lg:top-10 xl:top-12 `}>
                    Hai, Apakah Ada yang bisa kami bantu?</p>
                <div className="flex justify-center items-center w-full absolute bottom-1 sm:bottom-2 md:bottom-5 lg:bottom-10">
                    <input type="text" className="w-8/12 rounded-full px-12 py-1 sm:py-2 md:py-3 xl:py-4 2xl:py-5" placeholder="search" />
                </div>
            </div>
            <AccordionFaq />
        </>
    )
}

export default HelpCore