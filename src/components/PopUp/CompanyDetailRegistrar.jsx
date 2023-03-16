import { fontType } from "../Text/text"
import exit from "../../assets/icons/exit.svg"
import DropdownStatus from "../Dropdown/DropdownStatus"
import { useState } from "react"
import { liststatus } from "../../container/Registrar/listRegistrar"
import cvicon from "../../assets/icons/cvicon.svg"
const CompanyDetailRegistrar = ({ showDetail, setShowDetail, userDetail, index }) => {
    const [registrar, setRegistrar] = useState({
        status: userDetail.status,
        scheduleTest: userDetail.scheduleTest,
        placeTest: userDetail.placeTest
    })
    const closeModal = () => {
        const newShowDetail = [...showDetail]
        newShowDetail[index] = false
        setShowDetail(newShowDetail)
    }
    const saveProgram = () => {

    }
    return (
        <form onSubmit={saveProgram}>
            <div className="fixed left-0 right-0 bottom-0 top-0 flex items-center justify-center bg-[rgba(0,0,0,0.1)] z-50">
                <div className="bg-white rounded-2xl w-11/12 sm:w-10/12 md:w-9/12 lg:w-5/12 py-10 px-5">
                    <div className="flex justify-center gap-10">
                        <div className="w-5/12 flex flex-col justify-center items-center gap-6">
                            <img src={userDetail.foto} />
                            <div>
                                <p className={`${fontType["h2"]} text-center`}>{userDetail.nama}</p>
                                <p className={`${fontType["p1"]} text-neutral50 text-lg text-center`}>{userDetail.alamat}</p>
                            </div>
                            <p className={`${fontType["h4"]} self-start pl-3.5`}>CV</p>
                            <div className="self-start pl-3.5 flex items-center">
                                <img src={cvicon} />
                                <p className={`${fontType["p1"]} pl-3`}>{`${userDetail.cv}`}</p>
                            </div>
                        </div>
                        <div className="w-7/12 flex flex-col gap-2">
                            <img src={exit} className="self-end cursor-pointer" onClick={closeModal} />
                            <div>
                                <p className={`${fontType["h4"]}`}>Status</p>
                                <DropdownStatus options={liststatus} selectedOption={registrar.status} setRegistrar={setRegistrar} />
                            </div>
                            <div className="mt-4 flex flex-col">
                                <label
                                    htmlFor="jadwal"
                                    className={`${fontType["h4"]} mb-5`}
                                >
                                    Jadwal Tes & Wawancara
                                </label>
                                <input
                                    className="w-full rounded-full px-4 py-3 border-none bg-[#F5F5F5]"
                                    type="text"
                                    placeholder="Jadwal"
                                    name="jadwal"
                                    value={registrar.scheduleTest}
                                    onChange={e => {
                                        setRegistrar({ ...registrar, scheduleTest: e.target.value })
                                    }}
                                    required
                                />
                            </div>
                            <div className="mt-4 flex flex-col">
                                <label
                                    htmlFor="jadwal"
                                    className={`${fontType["h4"]} mb-5`}
                                >
                                    Tempat Tes & Wawancara
                                </label>
                                <input
                                    className="w-full rounded-full px-4 py-3 border-none bg-[#F5F5F5]"
                                    type="text"
                                    placeholder="Jadwal"
                                    name="jadwal"
                                    value={registrar.placeTest}
                                    onChange={e => {
                                        setRegistrar({ ...registrar, placeTest: e.target.value })
                                    }}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-10">
                        <button type="submit" className={`${fontType["button"]} bg-primary50 text-white py-4 px-24 rounded-full text-center mr-7`}>
                            Simpan
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default CompanyDetailRegistrar