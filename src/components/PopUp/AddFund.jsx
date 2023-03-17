import { useEffect, useState } from "react";
import { fontType } from "../../components/Text/text";
import { listProgram } from "../../container/Program/program";
import DropdownJurusan from "../../components/Dropdown/DropdownJurusan";
import { school } from "../../container/account/account";
import CheckBox from "../../components/CheckBox/CheckBox";
import exit from "../../assets/icons/exit.svg"
import { useLocation, useNavigate } from "react-router-dom";
import DropdownSemester from "../Dropdown/DropdownSemester";
const AddFund = ({ personToAdd, setIsShow }) => {
    const navigate = useNavigate()
    const [checkedAct, setCheckedAct] = useState("")
    const [dataToAdd, setDataToAdd] = useState({
        biaya: "",
        semester: "",
        act: {}
    })
    useEffect(() => {
        setDataToAdd(prev => ({ ...prev, act: checkedAct }))
    }, [checkedAct])

    const addData =()=>{
        //api
        setIsShow(false)
    }
    return (
        <form onSubmit={addData}>
            <div className="fixed left-0 right-0 bottom-0 top-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
                <div className="bg-white rounded-2xl w-[22rem] sm:w-[60rem] py-10 flex flex-col">
                    <img src={exit} className="w-5 self-end mr-10 cursor-pointer" onClick={() => {
                        setIsShow(false)
                    }} />
                    <div className="flex">
                        <div className="flex justify-center items-center flex-col gap-4 w-6/12">
                            <img src={personToAdd.foto} className="w-5/12" />
                            <p className={`${fontType["h3"]} sm:text-4xl mt-10`}>
                                {personToAdd.nama}
                            </p>
                            <p className={`${fontType["p1"]} text-neutral30`}>{personToAdd.alamat}</p>
                            <label htmlFor="Biaya" className={`${fontType["h4"]}  self-start ml-14`}>
                                Biaya
                            </label>
                            <input
                                className="rounded-full border-none bg-[#F9F9F9] w-9/12 "
                                type="text"
                                placeholder="Biaya"
                                name="biaya"
                                value={dataToAdd.biaya}
                                onChange={(e) => {
                                    setDataToAdd(prev => ({ ...prev, biaya: e.target.value }))
                                }}
                            />
                        </div>
                        <div className="w-6/12 self-center">
                            <p className={`${fontType["h4"]}`}>Semester</p>
                            <DropdownSemester
                                options={["1", "2", "3", "4", "5", "6", "7", "8"]}
                                selectedOption={1}
                                setDataToAdd={setDataToAdd}
                            />
                            <p className={`${fontType["h4"]} mt-8`}>Kegiatan Yang Wajib Diikuti</p>
                            <CheckBox item={["Magang", "Pelatihan", "Sertifikasi"]} checked={checkedAct} setChecked={setCheckedAct} />
                        </div>
                    </div>
                    <button type="submit" className={`${fontType["button"]} w-max self-end mr-10 bg-primary50 text-white py-3 px-24 rounded-full text-center cursor-pointer`}>
                            Simpan
                        </button>
                </div>
            </div>
        </form>

    )
}

export default AddFund