import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { fontType } from "../Text/text";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../constants/regex";
import openEye from "../../assets/icons/openeye.svg";
import ConfirmSignUp from "../PopUp/ConfirmSignUp";
import closeEye from "../../assets/SignUp-Login/closeEye.svg";

const SignUpFormCompany = () => {
      const [user, setUser] = useState({
            name: "",
            email: "",
            phone: "",
            password: "",
      });
      const [repasswd, setRePasswd] = useState("");
      const [emailErr, setEmailErr] = useState(false);
      const [passwdErr, setPasswdErr] = useState(false);
      const [isPasswdOpen, setIsPasswdOpen] = useState(false);
      const [isRePasswdOpen, setIsRePasswdOpen] = useState(false);
      const [isShow, setIsShow] = useState(false);

      useEffect(() => {
            if (!user.email.match(EMAIL_REGEX)) {
                  setEmailErr(true);
            } else {
                  setEmailErr(false);
            }
      }, [user.email]);

      useEffect(() => {
            if (!user.password.match(PASSWORD_REGEX)) {
                  setPasswdErr(true);
            } else {
                  setPasswdErr(false);
            }
      }, [user.password]);

      useEffect(() => {
            if (user.password === repasswd) {
                  ("password match");
            } else {
                  ("not match");
            }
      }, [repasswd]);

      const showModalHandler = useCallback(
            (value) => {
                  setIsShow(value);
            },
            [setIsShow]
      );
      return (
            <form
                  className="flex flex-col w-5/12"
                  onSubmit={(e) => {
                        e.preventDefault();
                  }}
            >
                  <div>
                        <p className={`${fontType["h1"]} mb-7`}>Daftar</p>
                  </div>
                  <div className="flex flex-col mb-3">
                        <label
                              htmlFor="name"
                              className={`${fontType["h4"]} mb-5`}
                        >
                              Nama Perusahaan
                        </label>
                        <input
                              className=" rounded-full px-3 py-2 border-none bg-[#F9F9F9]"
                              type="text"
                              name="name"
                              placeholder="Nama"
                              value={user.name}
                              onChange={(e) => {
                                    setUser({ ...user, name: e.target.value });
                              }}
                        />
                  </div>
                  <div className="flex flex-col mb-3">
                        <label
                              htmlFor="phone"
                              className={`${fontType["h4"]} mb-5`}
                        >
                              No. Telepon
                        </label>
                        <input
                              className=" rounded-full px-3 py-2 border-none bg-[#F9F9F9]"
                              type="text"
                              name="phone"
                              placeholder="No. Telepon"
                              value={user.phone}
                              onChange={(e) => {
                                    setUser({ ...user, phone: e.target.value });
                              }}
                        />
                  </div>
                  <div className="flex flex-col mb-3">
                        <label
                              htmlFor="email"
                              className={`${fontType["h4"]} mb-5`}
                        >
                              Email
                        </label>
                        <input
                              className=" rounded-full px-3 py-2 border-none bg-[#F9F9F9]"
                              type="email"
                              name="email"
                              placeholder="Email"
                              value={user.email}
                              onChange={(e) => {
                                    setUser({ ...user, email: e.target.value });
                              }}
                        />
                  </div>
                  <div className="flex flex-col mb-3">
                        <label
                              htmlFor="password"
                              className={`${fontType["h4"]} mb-5`}
                        >
                              Password
                        </label>
                        <div className="relative">
                              <input
                                    className=" rounded-full px-3 py-2 w-11/12 border-none bg-[#F9F9F9]"
                                    type={isPasswdOpen ? "text" : "password"}
                                    placeholder="Password"
                                    name="password"
                                    value={user.password}
                                    onChange={(e) => {
                                          setUser({
                                                ...user,
                                                password: e.target.value,
                                          });
                                    }}
                              />
                              {isPasswdOpen ? (
                                    <img
                                          src={openEye}
                                          className="absolute -right-1 top-3 cursor-pointer "
                                          onClick={() => setIsPasswdOpen(false)}
                                    />
                              ) : (
                                    <img
                                          src={closeEye}
                                          className="absolute -right-1 top-3 cursor-pointer"
                                          onClick={() => setIsPasswdOpen(true)}
                                    />
                              )}
                        </div>
                  </div>
                  <div className="flex flex-col mb-3">
                        <label
                              htmlFor="repasswd"
                              className={`${fontType["h4"]} mb-5`}
                        >
                              Ulangi Password
                        </label>
                        <div className="relative">
                              <input
                                    className=" rounded-full px-3 py-2 w-11/12 border-none bg-[#F9F9F9]"
                                    type={isRePasswdOpen ? "text" : "password"}
                                    placeholder="Ulangi Password"
                                    name="repasswd"
                                    value={repasswd}
                                    onChange={(e) => {
                                          setRePasswd(e.target.value);
                                    }}
                              />
                              {isRePasswdOpen ? (
                                    <img
                                          src={openEye}
                                          className="absolute -right-1 top-3 cursor-pointer "
                                          onClick={() =>
                                                setIsRePasswdOpen(false)
                                          }
                                    />
                              ) : (
                                    <img
                                          src={closeEye}
                                          className="absolute -right-1 top-3 cursor-pointer"
                                          onClick={() =>
                                                setIsRePasswdOpen(true)
                                          }
                                    />
                              )}
                        </div>
                  </div>
                  <div className="flex flex-col items-center">
                        <button
                              className={`${fontType["button"]} w-10/12 bg-primary50 text-white py-2 px-4 rounded-full`}
                              onClick={showModalHandler}
                        >
                              Daftar
                        </button>
                        <p className={`${fontType["p2"]} mt-2 text-primary50`}>
                              Sudah Punya Akun?
                              <Link to="/login" className="font-bold">
                                    {" "}
                                    Masuk
                              </Link>
                        </p>
                  </div>
                  {isShow && (
                        <ConfirmSignUp user={user} setIsShow={setIsShow} />
                  )}
            </form>
      );
};

export default SignUpFormCompany;
