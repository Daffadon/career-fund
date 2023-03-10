import { useState } from "react";
import Footer from "../../components/Footer/Footer"
import LayoutCompany from "../../components/Layout/LayoutCompany"
import foto from "../../assets/Account/bigprofile.svg";
import changePic from "../../assets/Account/changePic.svg";
import { fontType } from "../../components/Text/text";
import { countries } from "../../container/account/account";
import ConfirmChangeBio from "../../components/PopUp/ConfirmChangeBio";
import DropdownCountries from "../../components/Dropdown/DropdownCountries";

const AccountCompany = () => {
    const [country, setCountry] = useState("Indonesia");
    const [isShow, setIsShow] = useState(false);
    const [user, setUser] = useState({
        namaPerusahaan: "",
        email: "",
        telepon: "",
        kota: "Jakarta",
        pos: "",
        negara: country,
    });
    return (
        <LayoutCompany>
            <div className="flex min-h-[70vh] mt-24 mb-20">
                <div className="w-4/12  rounded-xl  gap-4 flex justify-center items-start h-11/12 ">
                    <div className="w-3/4  bg-white flex flex-col justify-start items-center gap-16 rounded-2xl py-10 ">
                        <div className="relative">
                            <img src={foto} />
                            <img src={changePic} className="absolute left-12 -bottom-4" />
                        </div>
                        <div>
                            <p className={`${fontType["h1"]} text-center`}>
                                Facebook
                            </p>
                            <p className={`${fontType["p1"]} text-center text-neutral50`}>
                                Malang, Indonesia</p>
                        </div>
                    </div>
                </div>
                <div className=" w-3/5 bg-white rounded-3xl flex justify-center h-max pt-7 pb-24 ">
                    <div className={`${fontType["h4"]}  w-1/2 flex flex-col gap-10 ml-24 mt-5`}>
                        <div>
                            <p>Nama Perusahaan</p>
                            <input
                                type="text"
                                value={user.namaPerusahaan}
                                placeholder="Nama Perusahaan"
                                className="w-10/12 rounded-full border-none bg-[#F9F9F9] px-4 py-3 mt-4"
                                onChange={(e) => {
                                    setUser({ ...user, namaPerusahaan: e.target.value })
                                }}
                            />
                        </div>
                        <div>
                            <p>No. Telepon</p>
                            <input
                                type="text"
                                placeholder="0821-xxxx-xxxx"
                                value={user.telepon}
                                className="w-10/12  rounded-full  border-none bg-[#F9F9F9] px-4 py-3 mt-4"
                                onChange={(e) => {
                                    setUser({ ...user, telepon: e.target.value })
                                }}
                            />
                        </div>
                        <div>
                            <p>Kode Pos</p>
                            <input
                                type="text"
                                value={user.pos}
                                placeholder="432412"
                                className="w-10/12 rounded-full  border-none bg-[#F9F9F9] px-4 py-3 mt-4"
                                onChange={(e) => {
                                    setUser({ ...user, pos: e.target.value })
                                }}
                            />
                        </div>
                    </div>
                    <div className={`${fontType["h4"]}  w-1/2 flex flex-col gap-10 mt-5`}>
                        <div>
                            <p>Email</p>
                            <input
                                type="text"
                                value={user.email}
                                placeholder="Email"
                                className="w-10/12 rounded-full  border-none bg-[#F9F9F9] px-4 py-3 mt-4"
                                onChange={(e) => {
                                    setUser({ ...user, email: e.target.value })
                                }}
                            />
                        </div>
                        <div>
                            <p>Kota</p>
                            <input
                                type="text"
                                value={user.kota}
                                placeholder="Jakarta"
                                className="w-10/12 rounded-full  border-none bg-[#F9F9F9] px-4 py-3 mt-4"
                                onChange={(e) => {
                                    setUser({ ...user, kota: e.target.value })
                                }}
                            />
                        </div>
                        <div>
                            <p>Negara </p>
                            <DropdownCountries options={countries} selectedOption={user.negara} setUser={setUser} user={user} />
                        </div>
                        <p className={`${fontType["button"]} bg-primary50 w-4/12 self-end mr-24 text-center text-white py-2 rounded-full cursor-pointer`}
                            onClick={() => {
                                setIsShow(true);
                            }}>
                            Simpan
                        </p>
                        {isShow && (
                            <ConfirmChangeBio user={user} setIsShow={setIsShow} />
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </LayoutCompany>
    )
}

export default AccountCompany