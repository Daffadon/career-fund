import sec3 from "../../../../assets/LandingPage/dummysec3.svg"
import { fontType } from "../../../../components/Text/Text"
import { layanan } from "./layanan"


const Section3 = () => {
    return (
        <div className="flex w-full h-[50vh] mt-[10em] justify-center items-center">
            <div className="w-6/12 flex justify-end">
                <img src={sec3} alt="" />
            </div>
            <div className="w-6/12 ml-[5em]">
                <div className="flex flex-col gap-4">
                    <p className={`${fontType["h1"]} mb-8 w-8/12`}>Beberapa Layanan yang kami tawarkan</p>
                    {layanan.map(item => {
                        return (
                            <div key={item.key} className="flex gap-3">
                                <img src={item.img} alt="" />
                                <div className="flex flex-col justify-center w-10/12">
                                    <p className={`${fontType["h4"]}`}>{item.title}</p>
                                    <p className={`${fontType["p1"]} text-neutral50 w-8/12`}>{item.desc}</p>
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