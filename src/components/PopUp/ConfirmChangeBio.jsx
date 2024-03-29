import { fontType } from "../Text/text";
import confirmEmail from "../../assets/SignUp-Login/Hands Phone.svg";
import { updateBio } from "../../api/api";
import { useNavigate } from "react-router-dom";

const ConfirmChangeBio = ({ user, setIsShow }) => {
    const navigate = useNavigate()
    const changeBio = async() => {
        try {
            await updateBio(user)
            navigate('/home')
        } catch (error) {

        }
    };
    const closeModal = () => {
        setIsShow(false);
    };
    return (
        <div className="fixed left-0 right-0 bottom-0 top-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
            <div className="bg-white rounded-2xl w-[22rem] sm:w-[26rem] py-10">
                <div className="flex justify-center items-center flex-col gap-4">
                    <img src={confirmEmail} className="w-8/12" />
                    <p className={`${fontType["h2"]} sm:text-4xl`}>Konfirmasi Biodata</p>
                    <div className={`${fontType["p1"]} text-neutral50 text-center w-8/12`}>
                        Terima kasih telah mengonfirmasi biodata Anda!
                    </div>
                    <p className={`${fontType["button"]} w-9/12 bg-primary50 text-white py-2 px-4 rounded-full text-center cursor-pointer`} onClick={changeBio}>
                        Simpan
                    </p>
                    <p className={`${fontType["button"]} w-9/12 bg-white text-primary50 border-primary50 border-2  py-2 px-4 rounded-full text-center cursor-pointer`} onClick={closeModal}>
                        Batal
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ConfirmChangeBio;
