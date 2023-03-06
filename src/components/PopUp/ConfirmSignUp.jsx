import { fontType } from "../Text/Text"
import { Modal } from "flowbite-react"
import { signUp } from "../../authentication/AuthService"
import confirmEmail from "../../assets/SignUp-Login/Hands Phone.svg"

const ConfirmSignUp = ({ isShow, user, setIsShow }) => {

    const signUpHandler = async (e) => {
        e.preventDefault();
        const response = await signUp(user)
    }
    const closeModal = ()=>{
        setIsShow(false)
    }
    return (
        <Modal
            popup={true}
            show={isShow}
            size="md"
            position="center"
            className="py-12"
            onClose={closeModal}
        >
            <Modal.Body>
                <div className="flex justify-center items-center flex-col gap-4 pt-6 pb-2">
                    <img src={confirmEmail} alt="" className="w-10/12" />
                    <p className={`${fontType["p1"]} text-neutral50 text-center`}>
                        Terima kasih telah mengonfirmasi biodata Anda! Kami sangat antusias untuk membantu mempertemukan Anda dengan peluang karir terbaik</p>
                    <button className={`${fontType["button"]} text-white text-center w-full bg-primary50 rounded-full py-2 cursor-pointer`} onClick={signUpHandler}>Simpan</button>
                    <p className={`${fontType["button"]} text-primary50 border-2 border-primary50 text-center w-full bg-white rounded-full py-2 cursor-pointer`} onClick={closeModal}>Batal</p>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ConfirmSignUp