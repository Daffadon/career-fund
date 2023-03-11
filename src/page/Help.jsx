import Layout from "../components/Layout/Layout"
import AccordionFaq from "../container/Help/AccordionFaq"
import { fontType } from "../components/Text/text"
import imghelp from "../assets/Help/bgSearch.svg"
const Help = () => {
    return (
        <Layout>
            <div className="flex flex-col justify-center items-center relative">
                <img src={imghelp} className="w-full h-auto" />
                <p className={`${fontType["h5"]} text-white ml-14 w-6/12 md:w-5/12 lg:w-6/12 sm:text-2xl md:text-3xl lg:text-5xl self-start absolute top-5 sm:top-10 lg:top-16 `}>
                    Hai, Apakah Ada yang bisa kami bantu?</p>
                <div className="flex justify-center items-center w-full absolute bottom-3 md:bottom-5 lg:bottom-10">
                    <input type="text" className="w-10/12 rounded-full px-12 py-1 sm:py-2 md:py-3 xl:py-4 2xl:py-5" placeholder="search" />
                </div>
            </div>
            <AccordionFaq />
        </Layout>
    )
}

export default Help