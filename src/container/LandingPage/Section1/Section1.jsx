import { fontType } from "../../../components/Text/text";
import gambar from "../../../assets/LandingPage/contentSec1landing.svg";
import { Link } from "react-scroll";

const Section1 = () => {
    return (
        <div className="flex flex-col md:flex-row h-max items-center justify-center  md:pl-10 pt-[3em] pb-[5em] md:py-0 bg-primary70">
            <div className="w-full order-2 md:order-1 md:w-6/12">
                <div className="flex flex-col justify-evenly items-center md:items-start md:w-8/12 h-full gap-10 sm:gap-3 lg:gap-8 xl:gap-12">
                    <p className={`${fontType["h3"]} text-white text-center w-10/12 xl:w-10/12 md:text-left md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mt-[2em]`}>
                        Jembatani impianmu untuk masa depan yang lebih cerah
                    </p>
                    <p className={`${fontType["p1"]} text-white text-center w-10/12 md:text-left md:text-xl md:w-full xl:w-10/12`}>
                        Kami menyediakan pinjaman bagi individu yang ingin melanjutkan studi ke perguruan tinggi dengan kerjasama yang saling menguntungkan.
                    </p>
                    <Link className={`${fontType["button"]} w-72 bg-white text-primary70 rounded-full text-center py-3 px-10 cursor-pointer`}
                        smooth spy to="serves" offset={-180}
                    >
                        Pelajari Lebih Lanjut
                    </Link>
                </div>
            </div>
            <div className="flex order-1 md:order-2 md:w-6/12 w-4/12">
                <img src={gambar} alt="" className="w-full rounded-3xl md:rounded-none " />
            </div>
        </div>
    );
};

export default Section1;
