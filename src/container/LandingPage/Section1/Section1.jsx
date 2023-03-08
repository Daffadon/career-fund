import { fontType } from "../../../components/Text/text";
import gambar from "../../../assets/LandingPage/contentSec1landing.svg";
import { Link } from "react-scroll";

const Section1 = () => {
    return (
        <div className="flex h-max justify-center pl-10 bg-primary70">
            <div className="w-6/12 ">
                <div className=" flex flex-col justify-center w-8/12 h-full gap-6">
                    <p className={`${fontType["h1"]} text-white w-10/12`}>
                        Jembatani impianmu untuk masa depan yang lebih cerah
                    </p>
                    <p className={`${fontType["p1"]} text-white w-10/12`}>
                        Kami menyediakan pinjaman bagi individu yang ingin
                        melanjutkan studi ke perguruan tinggi dengan kerjasama
                        yang saling menguntungkan.
                    </p>
                    <Link
                        className={`${fontType["button"]} w-72 bg-white text-primary70 rounded-full text-center py-3 px-10 cursor-pointer`}
                        smooth spy to="serves" offset={-280}
                    >
                        Pelajari Lebih Lanjut
                    </Link>
                </div>
            </div>
            <div className="flex w-6/12 self-end">
                <img src={gambar} alt="" className="w-full" />
            </div>
        </div>
    );
};

export default Section1;
