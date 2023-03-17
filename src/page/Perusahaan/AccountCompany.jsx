import { useState, useRef, useContext, useEffect } from "react";
import { userContext } from "../../context/AuthContext";
import Footer from "../../components/Footer/Footer"
import LayoutCompany from "../../components/Layout/LayoutCompany"
import changePic from "../../assets/Account/changePic.svg";
import { fontType } from "../../components/Text/text";
import { countries } from "../../container/account/account";
import ConfirmChangeBio from "../../components/PopUp/ConfirmChangeBio";
import DropdownCountries from "../../components/Dropdown/DropdownCountries";
import { getCompany } from "../../api/api";
const AccountCompany = () => {
    const [isShow, setIsShow] = useState(false);
    const fotoUploading = useRef()
    const { user, setUser } = useContext(userContext);
    const [userAccount, SetUserAccount] = useState({
        id: user.data.user.company_id !== null ? user.data.user.company_id : "",
        foto: user.data.user.url_icon !== null ? user.data.user.url_icon : "",
        name: user.data.user.name !== null ? user.data.user.name : "",
        email: user.data.user.email !== null ? user.data.user.email : "",
        telepon: user.data.user.telephone !== null ? user.data.user.telephone : "",
        kota: user.data.user.city !== null ? user.data.user.city : "",
        pos: user.data.user.postal !== null ? user.data.user.postal : "",
        negara: user.data.user.region !== null ? user.data.user.region : "USA",
    });

    useEffect(() => {
        const getProfileContent = async () => {
            try {
                const response = await getCompany()
                setUser(response)
            } catch (error) { }
        }
        getProfileContent()
    }, [])

    const uploadFoto = () => {
        fotoUploading.current.click()
    }
    const handleChange = e => {
        const fotoToUpload = e.target.files[0];
        uploadFotoToDatabase(fotoToUpload)
    }
    return (
        <LayoutCompany>
            <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-evenly gap-5 xl-gap-0 mt-20 mb-20">
                <div className="w-9/12 sm:w-8/12 lg:w-8/12 xl:w-3/12 rounded-xl flex justify-center items-start h-11/12 ">
                    <div className="w-3/4 md:w-1/2 xl:w-11/12 bg-white flex flex-col justify-start items-center gap-12 rounded-2xl py-10 ">
                        <div className="relative">
                            <img src={userAccount.foto} className="w-full" />
                            <img src={changePic} className="absolute cursor-pointer" onClick={uploadFoto} />
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleChange}
                                ref={fotoUploading} />
                        </div>
                        <div>
                            <p className={`${fontType["h1"]} text-center`}>
                                {userAccount.namaPerusahaan}
                            </p>
                            <p className={`${fontType["p1"]} text-center text-neutral50`}>
                                {userAccount.lokasi}</p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-10/12 xl:w-3/5 bg-white rounded-3xl flex justify-center h-max pt-7 pb-24 ">
                    <div className={`${fontType["h4"]}  w-1/2 flex flex-col gap-10 ml-24 mt-5`}>
                        <div>
                            <p>Nama Perusahaan</p>
                            <input
                                type="text"
                                value={userAccount.namaPerusahaan}
                                placeholder="Nama Perusahaan"
                                className="w-10/12 rounded-full border-none bg-[#F9F9F9] px-4 py-3 mt-4"
                                onChange={(e) => {
                                    setUserAccount({ ...userAccount, namaPerusahaan: e.target.value })
                                }}
                            />
                        </div>
                        <div>
                            <p>No. Telepon</p>
                            <input
                                type="text"
                                placeholder="0821-xxxx-xxxx"
                                value={userAccount.telepon}
                                className="w-10/12  rounded-full  border-none bg-[#F9F9F9] px-4 py-3 mt-4"
                                onChange={(e) => {
                                    SetUserAccount({ ...userAccount, telepon: e.target.value })
                                }}
                            />
                        </div>
                        <div>
                            <p>Kode Pos</p>
                            <input
                                type="text"
                                value={userAccount.pos}
                                placeholder="432412"
                                className="w-10/12 rounded-full  border-none bg-[#F9F9F9] px-4 py-3 mt-4"
                                onChange={(e) => {
                                    SetUserAccount({ ...userAccount, pos: e.target.value })
                                }}
                            />
                        </div>
                    </div>
                    <div className={`${fontType["h4"]}  w-1/2 flex flex-col gap-10 mt-5`}>
                        <div>
                            <p>Email</p>
                            <input
                                type="text"
                                value={userAccount.email}
                                placeholder="Email"
                                className="w-10/12 rounded-full  border-none bg-[#F9F9F9] px-4 py-3 mt-4"
                                onChange={(e) => {
                                    SetUserAccount({ ...userAccount, email: e.target.value })
                                }}
                            />
                        </div>
                        <div>
                            <p>Kota</p>
                            <input
                                type="text"
                                value={userAccount.kota}
                                placeholder="Jakarta"
                                className="w-10/12 rounded-full  border-none bg-[#F9F9F9] px-4 py-3 mt-4"
                                onChange={(e) => {
                                    SetUserAccount({ ...userAccount, kota: e.target.value })
                                }}
                            />
                        </div>
                        <div>
                            <p>Negara </p>
                            <DropdownCountries options={countries} selectedOption={userAccount.negara} SetUserAccount={SetUserAccount} />
                        </div>
                        <p className={`${fontType["button"]} bg-primary50 w-4/12 self-end mr-24 text-center text-white py-2 rounded-full cursor-pointer`}
                            onClick={() => {
                                setIsShow(true);
                            }}>
                            Simpan
                        </p>
                        {isShow && (
                            <ConfirmChangeBio user={userAccount} setIsShow={setIsShow} />
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </LayoutCompany>
    )
}

export default AccountCompany