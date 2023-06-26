import { fontType } from "../Text/text"
import { nav } from "./footerAssets"
import footerlogo from "../../assets/LandingPage/footerLogo.svg"
import { desc } from "./footerAssets"
const Footer = () => {
    return (
        <div id="footer" className="min-h-[60vh] bg-neutral90 flex justify-around items-center">
            <div className="w-6/12 flex flex-col justify-end items-end">
                <div className="w-10/12 md:w-6/12 lg:w-5/12">
                    <div className="flex w-full items-center justify-start gap-3">
                        <img src={footerlogo} alt="" />
                        <p className={`${fontType["h1"]} text-white`}>CareerFund</p>
                    </div>
                    <p className={`${fontType["p1"]} w-full text-white text-justify mt-7`}>{desc.desc}</p>
                </div>
            </div>
            <div className="w-6/12 flex flex-col justify-center items-center">
                <div className="w-6/12">
                    <p className={`${fontType["h3"]} text-white mb-10`}>Navigasi</p>
                    {nav.map((item, index) => {
                        return (
                            <a key={index} href={item.to}>
                                <p key={item.key} className={`${fontType["h5"]} text-white mb-1 hover:text-gray-500 duration-300`}>{item.title}</p>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Footer