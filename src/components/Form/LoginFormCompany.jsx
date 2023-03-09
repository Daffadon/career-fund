import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../authentication/AuthService";
import { fontType } from "../Text/text";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../constants/regex";
import openEye from "../../assets/icons/openeye.svg";
import closeEye from "../../assets/SignUp-Login/closeEye.svg";
import ForgetPassword from "../PopUp/ForgetPassword";
import EmailSent from "../PopUp/EmailSent";
import AlertCustom from "../Alerts/AlertCustom";

const LoginFormCompany = () => {
      const [email, setEmail] = useState("");
      const [passwd, setPasswd] = useState("");
      const [loading, setLoading] = useState(false);
      const [error,setError] = useState(false)
      const [isOpen, setIsOpen] = useState(false);
      const [isShow, setIsShow] = useState(false);
      const [isSentRec, setIsSentRec] = useState(false);

      const loginHandler = async (e) => {
            e.preventDefault();
            if (!passwd.match(PASSWORD_REGEX) || !email.match(EMAIL_REGEX)) {
                  return setError(true)
            }
            setLoading(true);
            const response = await login(email, passwd);
            setLoading(false);
            setMessage(response.massage);
      };
      const showModalHandler = useCallback(
            (value) => {
                  setIsShow(value);
            },
            [setIsShow]
      );

      return (
            <form onSubmit={loginHandler} className="flex flex-col w-5/12">
                  <div>
                        <p className={`${fontType["h1"]} mb-7`}>Masuk</p>
                  </div>
                  <div className="flex flex-col mb-4">
                        <label
                              htmlFor="email"
                              className={`${fontType["h4"]} mb-5`}
                        >
                              Email
                        </label>
                        <input
                              className="rounded-full px-3 py-2 border-none bg-[#F9F9F9]"
                              type="email"
                              placeholder="Email"
                              name="email"
                              value={email}
                              onChange={(e) => {
                                    setEmail(e.target.value);
                              }}
                              required
                        />
                  </div>
                  <div className="flex flex-col mb-4">
                        <label
                              htmlFor="passwd"
                              className={`${fontType["h4"]} mb-5`}
                        >
                              Password
                        </label>
                        <div className="relative">
                              <input
                                    className="rounded-full px-3 py-2 w-11/12 border-none bg-[#F9F9F9]"
                                    placeholder="Password"
                                    type={isOpen ? "text" : "password"}
                                    name="passwd"
                                    value={passwd}
                                    onChange={(e) => {
                                          setPasswd(e.target.value);
                                    }}
                                    required
                              />
                              {isOpen ? (
                                    <img
                                          src={openEye}
                                          className="absolute -right-1 top-3 cursor-pointer "
                                          onClick={() => setIsOpen(false)}
                                    />
                              ) : (
                                    <img
                                          src={closeEye}
                                          className="absolute -right-1 top-3 cursor-pointer"
                                          onClick={() => setIsOpen(true)}
                                    />
                              )}
                        </div>
                        <div className="self-end">
                              <p
                                    className={`${fontType["p2"]} text-primary50 cursor-pointer mt-3`}
                                    onClick={showModalHandler}
                              >
                                    Lupa Kata Sandi?
                              </p>
                        </div>
                  </div>
                  <div className="flex flex-col items-center">
                        <button
                              type="submit"
                              className={`${fontType["button"]} w-10/12 bg-primary50 text-white py-2 px-4 rounded-full`}
                        >
                              Masuk
                        </button>
                        <p className={`${fontType["p3"]} mt-2 text-primary50`}>
                              Tidak Punya Akun?
                              <Link to="/companysignup" className="font-bold">
                                    {" "}
                                    Daftar
                              </Link>
                        </p>

                        <Link className={`${fontType["h5"]} text-primary50 mt-2`} to="/login">Masuk Untuk User</Link>
                  </div>
                  {isShow && ( <ForgetPassword setIsShow={setIsShow} setIsSentRec={setIsSentRec} />)}
                  {isSentRec && <EmailSent />}
			{error && <AlertCustom setError={setError} errorMessage= {"Password atau Email Anda Salah! Pastikan Password dan Email benar"}/> }
            </form>
      );
};

export default LoginFormCompany;
