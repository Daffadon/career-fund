import { Modal } from "flowbite-react"
import checkEmail from "../../assets/SignUp-Login/Hands Point.svg"
import { fontType } from "../Text/Text"

const ForgetPassword = ({ isShow }) => {
    const reload = () => {
        location.reload()
    }
    return (
        <div>
            <Modal
                popup={true}
                show={isShow}
                size="md"
                position="center"
                className="py-12"
            >
                <Modal.Body>
                    <div className="flex justify-center items-center flex-col gap-4 pt-6 pb-2">
                        <img src={checkEmail} alt="" className="w-10/12" />
                        <p className={`${fontType["h1"]}`}>Email Terkirim</p>
                        <p className={`${fontType["p1"]} text-neutral50 text-center`}>Cek kotak masuk email Anda untuk instruksi pemulihan dan dapatkan kembali akses ke akun Anda dalam hitungan menit!</p>
                        <p className={`${fontType["button"]} text-white text-center w-full bg-primary50 rounded-full py-2 cursor-pointer`} onClick={reload}>Kembali</p>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ForgetPassword