import { fontType } from "../Text/text"
import fotoDummy from "../../assets/Program/dummyFotoProfile.svg"
import exit from "../../assets/icons/exit.svg"
import DropdownStatus from "../Dropdown/DropdownStatus"
import { useState } from "react"
import { liststatus } from "../../container/Registrar/listRegistrar"
const CompanyDetailRegistrar = ({ setShowDetail }) => {
    const [status, setStatus] = useState("");
    const closeModal = () => {
        setShowDetail(false)
    }
    const saveProgram = () => {

    }
    return (
        <form onSubmit={saveProgram}>
            <div className="fixed left-0 right-0 bottom-0 top-0 flex items-center justify-center bg-[rgba(0,0,0,0.1)]">
                <div className="bg-white rounded-2xl w-5/12 py-10 px-5">
                    <div className="flex justify-center gap-10">
                        <div className="w-5/12 flex flex-col justify-center items-center gap-6">
                            <img src={fotoDummy} />
                            <div>
                                <p className={`${fontType["h2"]}`}>Ahmad Bustomi</p>
                                <p className={`${fontType["p1"]} text-neutral50 text-lg text-center`}>Malang, Indonesia</p>
                            </div>
                            <p className={`${fontType["h4"]} self-start pl-4`}>CV</p>
                        </div>
                        <div className="w-7/12 flex flex-col gap-2">
                            <img src={exit} className="self-end cursor-pointer" onClick={closeModal} />
                            <div>
                                <p className={`${fontType["h4"]}`}>Status</p>
                                <DropdownStatus options={liststatus} selectedOption={status} setStatus={setStatus} />
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
                                    // value={email}
                                    // onChange={}
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
                                    // value={email}
                                    // onChange={}
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