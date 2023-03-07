import { fontType } from "../Text/text";
import { signUp } from "../../authentication/AuthService";
import confirmEmail from "../../assets/SignUp-Login/Hands Phone.svg";

const ConfirmSignUp = ({ user, setIsShow }) => {
      const signUpHandler = async (e) => {
            const response = await signUp(user);
      };
      const closeModal = () => {
            setIsShow(false);
      };
      return (
            <div className="fixed left-0 right-0 bottom-0 top-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
                  <div className="bg-white rounded-2xl w-4/12 py-10">
                        <div className="flex justify-center items-center flex-col gap-4 pt ">
                              <img src={confirmEmail} className="w-8/12" />
                              <p className={`${fontType["h1"]}`}>
                                    Konfirmasi Biodata
                              </p>
                              <p
                                    className={`${fontType["p1"]} text-neutral50 text-center w-8/12`}
                              >
                                    Terima kasih telah mengonfirmasi biodata
                                    Anda! Kami sangat antusias untuk membantu
                                    Anda dengan peluang karir terbaik
                              </p>
                              <p
                                    className={`${fontType["button"]} w-9/12 bg-primary50 text-white py-2 px-4 rounded-full text-center cursor-pointer`}
                                    onClick={signUpHandler}
                              >
                                    Simpan
                              </p>
                              <p
                                    className={`${fontType["button"]} w-9/12 bg-white text-primary50 border-primary50 border-2  py-2 px-4 rounded-full text-center cursor-pointer`}
                                    onClick={closeModal}
                              >
                                    Batal
                              </p>
                        </div>
                  </div>
            </div>
      );
};

export default ConfirmSignUp;
