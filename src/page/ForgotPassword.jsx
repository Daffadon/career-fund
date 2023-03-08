import { fontType } from "../components/Text/text";
import exit from "../assets/icons/exit.svg";
import hands from "../assets/icons/Hands Show.svg";
import { useState } from "react";

const ForgotPassword = () => {
        const [pass, setPass] = useState("");
        const [repass, setRePass] = useState("");

        const newPassChange = () => {
                // passchange
        };

        return (
                <div className="fixed left-0 right-0 bottom-0 top-0 flex items-center justify-center bg-[#C5C5C5]">
                        <div className="bg-white rounded-2xl w-4/12 py-10 flex flex-col">
                                <img
                                        src={exit}
                                        className="w-5 self-end mr-10"
                                        onClick={() => {
                                                setIsShow(false);
                                        }}
                                />
                                <div className="flex justify-center items-center flex-col gap-4 pt ">
                                        <img src={hands} className="w-8/12" />
                                        <p className={`${fontType["h1"]}`}>
                                                Ubah Kata Sandi
                                        </p>
                                        <p
                                                className={`${fontType["p1"]} text-neutral50 text-center w-7/12`}
                                        >
                                                Hampir selesai, Masukan kata
                                                sandi baru dan kamu sudah siap
                                        </p>
                                        <label
                                                htmlFor="pass"
                                                className={`${fontType["h4"]}  self-start ml-14`}
                                        >
                                                Kata Sandi Baru
                                        </label>
                                        <input
                                                className="rounded-full border-none bg-[#F9F9F9] w-9/12 "
                                                type="password"
                                                placeholder="password"
                                                name="pass"
                                                value={pass}
                                                onChange={(e) => {
                                                        setPass(e.target.value);
                                                }}
                                        />
                                        <label
                                                htmlFor="repass"
                                                className={`${fontType["h4"]}  self-start ml-14`}
                                        >
                                                Ulangi Kata Sandi
                                        </label>
                                        <input
                                                className="rounded-full border-none bg-[#F9F9F9] w-9/12 "
                                                type="password"
                                                placeholder="password"
                                                name="repass"
                                                value={repass}
                                                onChange={(e) => {
                                                        setRePass(
                                                                e.target.value
                                                        );
                                                }}
                                        />
                                        <p
                                                className={`${fontType["button"]} w-9/12 bg-primary50 text-white py-2 px-4 rounded-full text-center cursor-pointer`}
                                                onClick={newPassChange}
                                        >
                                                Kirim
                                        </p>
                                </div>
                        </div>
                </div>
        );
};

export default ForgotPassword;
