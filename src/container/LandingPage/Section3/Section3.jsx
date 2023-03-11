import sec3 from "../../../assets/LandingPage/dummysec3.svg"
import { fontType } from "../../../components/Text/text"
import { layanan } from "./layanan"


const Section3 = () => {
    return (
        <div className="flex flex-col lg:flex-row w-full justify-center items-center mt-[8rem] lg:gap-16"  id="serves">
            <div className="w-6/12 flex justify-center lg:justify-end">
                <img src={sec3} alt="" />
            </div>
            <div className="w-full lg:w-6/12">
                <div className="flex flex-col gap-4 mt-[3em] lg:mt-0 items-center justify-center lg:items-start">
                    <p className={`${fontType["h1"]} mb-8 text-center w-10/12 lg:w-8/12 lg:text-left`}>Beberapa Layanan yang kami tawarkan</p>
                    {layanan.map(item => {
                        return (
                            <div key={item.key} className="flex gap-3 items-center justify-center lg:justify-start w-full">
                                <img src={item.img}/>
                                <div className="flex flex-col justify-center w-3/4 md:w-1/2">
                                    <p className={`${fontType["h4"]}`}>{item.title}</p>
                                    <p className={`${fontType["p1"]} text-neutral50 `}>{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Section3