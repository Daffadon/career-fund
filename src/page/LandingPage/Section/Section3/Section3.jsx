import sec3 from "../../../../assets/LandingPage/dummysec3.svg"
import { fontType } from "../../../../components/Text/Text"
import { layanan } from "./layanan"


const Section3 = () => {
    return (
        <div className="flex w-full h-[50vh] mt-[12em] justify-center items-center">
            <div className="w-6/12 flex justify-center">
                <img src={sec3} alt="" />
            </div>
            <div className="w-6/12">
                <div className="flex flex-col gap-4">
                    <p className={`${fontType["h1"]} mb-8 w-8/12`}>Beberapa Layanan yang kami tawarkan</p>
                    {layanan.map(item => {
                        return (
                            <div key={item.key} className="flex gap-3">
                                <img src={item.img} alt="" />
                                <div className="flex flex-col justify-center w-8/12">
                                    <p className="font-bold text-xl">{item.title}</p>
                                    <p className="text-[#808080] text-lg">{item.desc}</p>
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