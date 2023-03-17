
import ads from "../../../assets/LandingPage/ads.svg"
import { fontType } from "../../../components/Text/text"
const Advertisement = () => {
    const openGmailCompose = () => {
        const to = 'careerfund@protomail.com';
        const composeUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${to}`;
        window.open(composeUrl, '_blank');
    }
    return (
        <div className="flex justify-center items-center relative mb-[5em]">
            <img src={ads} className="max-w-full h-auto" />
            <p className={`${fontType["h4"]} sm:text-3xl lg:text-3xl xl:text-4xl absolute text-white w-10/12 lg:w-6/12 xl:w-4/12 text-center top-5 md:top-10 lg:top-16 xl:top-20`}>Jangkau pelanggan potensial Anda dengan mudah dengan iklan</p>
            <p className={`${fontType["button"]} absolute bottom-2 sm:bottom-5 md:bottom-9 lg:bottom-12 xl:bottom-16 text-white bg-primary50 px-12 py-2 rounded-full cursor-pointer`} onClick={openGmailCompose}>Kontak Kami</p>
        </div>
    )
}

export default Advertisement