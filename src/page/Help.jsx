import Layout from "../components/Layout/Layout"
import AccordionFaq from "../container/Help/AccordionFaq"
import { fontType } from "../components/Text/text"

const Help = () => {
    return (
        <Layout>
            <div className="flex justify-center items-center">
                <div className={`bg-[url("src/assets/Help/bgSearch.svg")]   bg-contain  h-[35vh] bg-no-repeat flex flex-col items-center justify-end`}>
                    <p className={`${fontType["h1"]} text-white ml-14 mb-10 w-4/12 self-start`}>Hai, Apakah Ada yang bisa kami bantu?</p>
                    <div className="flex justify-center w-full">
                        <input type="text" className="w-full relative  rounded-full mb-20 px-16" placeholder="search" name="" id="" />
                    </div>
                </div>
            </div>
            <AccordionFaq />
        </Layout>
    )
}

export default Help