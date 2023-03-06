import { fontType } from "../Text/Text"
import { nav } from "./footerAssets"
import footerlogo from "../../assets/LandingPage/footerLogo.svg"
import { desc } from "./footerAssets"
const Footer = () => {
    return (
        <div id="footer" className="min-h-[60vh] bg-neutral90 flex justify-around items-center">
            <div className="w-6/12 flex flex-col justify-end items-end">
                <div className="w-6/12">
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
                    {nav.map(item => {
                        return <p key={item.key} className={`${fontType["h5"]} text-white mb-1`}>{item.title}</p>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Footer