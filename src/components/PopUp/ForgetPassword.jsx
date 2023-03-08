import { useState } from "react";
import { sendEmailPasswordRecovery } from "../../api/api";
import checkEmail from "../../assets/SignUp-Login/Hands Point.svg";
import { fontType } from "../Text/text";
import { EMAIL_REGEX } from "../../constants/regex";
import exit from "../../assets/icons/exit.svg";
const ForgetPassword = ({ setIsShow, setIsSentRec }) => {
      const [email, setEmail] = useState("");

      const sendEmail = () => {
            if (email.match(EMAIL_REGEX)) {
                  // sendEmailPasswordRecovery(email);
                  setIsShow(false);
                  setIsSentRec(true);
            } else {
                  // console.log("err")
            }
      };

      return (
            <div className="fixed left-0 right-0 bottom-0 top-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
                  <div className="bg-white rounded-2xl w-4/12 py-10 flex flex-col">
                        <img src={exit} className="w-5 self-end mr-10 cursor-pointer" onClick={()=>{
                              setIsShow(false)
                        }} />
                        <div className="flex justify-center items-center flex-col gap-4 pt ">
                              <img src={checkEmail} className="w-8/12" />
                              <p className={`${fontType["h1"]}`}>
                                    Lupa Kata Sandi
                              </p>
                              <p
                                    className={`${fontType["p1"]} text-neutral50 text-center w-7/12`}
                              >
                                    Masukkan email Anda dan jangan lewatkan
                                    kesempatan untuk mendapatkan update terbaru
                                    dari kami
                              </p>
                              <label
                                    htmlFor="email"
                                    className={`${fontType["h4"]}  self-start ml-14`}
                              >
                                    Email
                              </label>
                              <input
                                    className="rounded-full border-none bg-[#F9F9F9] w-9/12 "
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => {
                                          setEmail(e.target.value);
                                    }}
                              />
                              <p
                                    className={`${fontType["button"]} w-9/12 bg-primary50 text-white py-2 px-4 rounded-full text-center cursor-pointer`}
                                    onClick={sendEmail}
                              >
                                    Kirim
                              </p>
                        </div>
                  </div>
            </div>
      );
};

export default ForgetPassword;
