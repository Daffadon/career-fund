import { useEffect, useState } from "react";
import { fontType } from "../../components/Text/text";
import { listProgram } from "../../container/Program/program";
import DropdownJurusan from "../../components/Dropdown/DropdownJurusan";
import { school } from "../../container/account/account";
import CheckBox from "../../components/CheckBox/CheckBox";
import exit from "../../assets/icons/exit.svg"
import { useLocation, useNavigate } from "react-router-dom";
const DetailProgramCompany = () => {
    const navigate = useNavigate()
    const itemToUpdate = useLocation().state
    const [checkedPendidikan, setCheckedPendidikan] = useState(itemToUpdate !== null ? itemToUpdate.pendidikan : {});
    const [checkedTingkatan, setCheckedTingkatan] = useState(itemToUpdate !== null ? itemToUpdate.tingkatan : {});
    const [programToAdd, setProgramToAdd] = useState({
        posisi: itemToUpdate !== null ? itemToUpdate.posisi : "",
        pendidikan: {},
        skill: itemToUpdate !== null ? itemToUpdate.skill : [],
        deskripsi: itemToUpdate !== null ? itemToUpdate.deskripsi : "",
        jurusan: "FILKOM",
        activity: itemToUpdate !== null ? itemToUpdate.activity : "",
        tingkatan: {}
    })
    useEffect(() => {
        setProgramToAdd(prev => ({ ...prev, pendidikan: checkedPendidikan }))
    }, [checkedPendidikan])

    useEffect(() => {
        setProgramToAdd(prev => ({ ...prev, tingkatan: checkedTingkatan }))
    }, [checkedTingkatan])

    const addNewProgram = e => {
        e.preventDefault()
        console.log(programToAdd)
        if (itemToUpdate !== null) {
            // put with id
            return
        }
        // add newProgram
    }
    return (
        <form onSubmit={addNewProgram}>
            <div className="flex justify-center items-center">
                <div className="bg-white rounded-2xl w-[40rem] py-10">
                    <div className="flex justify-center flex-col gap-4 px-8 overflow-auto">
                        <div className="flex justify-between items-center" onClick={() => {
                            navigate("/program-company")
                        }} >
                            <label htmlFor="posisi" className={`${fontType["h4"]}`}>
                                Posisi
                            </label>
                            <img src={exit} className="cursor-pointer" />
                        </div>
                        <input
                            className="rounded-full px-3 py-2 border-none bg-[#F9F9F9]"
                            type="text"
                            placeholder="Posisi"
                            name="posisi"
                            value={programToAdd.posisi}
                            onChange={e => {
                                setProgramToAdd({ ...programToAdd, posisi: e.target.value })
                            }}
                            required
                        />
                        <div className="flex">
                            <div className="w-6/12">
                                <p className={`${fontType["h4"]}`}>Pendidikan Terakhir</p>
                                <CheckBox item={school} checked={checkedPendidikan} setChecked={setCheckedPendidikan} />
                            </div>
                            <div className="w-6/12">
                                <p className={`${fontType["h4"]}`}>Tingkatan</p>
                                <CheckBox item={["D3", "S1"]} checked={checkedTingkatan} setChecked={setCheckedTingkatan} />
                            </div>
                        </div>
                        <label htmlFor="deskripsi" className={`${fontType["h4"]}`}>
                            Deskripsi
                        </label>
                        <textarea
                            placeholder="Deskripsi"
                            name="deskripsi"
                            rows={3}
                            className="resize-none border-none bg-[#F9F9F9] rounded-xl"
                            value={programToAdd.deskripsi}
                            onChange={e => {
                                setProgramToAdd({ ...programToAdd, deskripsi: e.target.value })
                            }}
                            required
                        />
                        <label htmlFor="skill" className={`${fontType["h4"]}`} >
                            Skill
                        </label>
                        <textarea
                            placeholder="Skill"
                            name="skill"
                            rows={3}
                            className="resize-none border-none bg-[#F9F9F9] rounded-xl"
                            value={programToAdd.skill}
                            onChange={e => {
                                setProgramToAdd({ ...programToAdd, skill: e.target.value })
                            }}
                            required
                        />
                        <div>
                            <p className={`${fontType["h4"]}`}>Jurusan</p>
                            <DropdownJurusan
                                options={listProgram}
                                selectedOption={"FILKOM"}
                                setProgramToAdd={setProgramToAdd}
                            />
                        </div>
                        <label htmlFor="kegiatan" className={`${fontType["h4"]}`} >
                            Kegiatan Wajib Diikuti
                        </label>
                        <textarea
                            placeholder="Kegiatan"
                            name="kegiatan"
                            rows={3}
                            className="resize-none border-none bg-[#F9F9F9] rounded-xl"
                            value={programToAdd.activity}
                            onChange={e => {
                                setProgramToAdd({ ...programToAdd, activity: e.target.value })
                            }}
                            required
                        />
                        <div className="flex justify-center items-center gap-5">
                            <div className="w-5/12 flex justify-center flex-1">
                                <p className={`${fontType["button"]} bg-success50 text-white text-center px-10 py-4 rounded-full flex-1`}>Mulai Program</p>
                            </div>
                            <div className="w-5/12 flex justify-center flex-1">
                                <p className={`${fontType["button"]} bg-white text-success50 border-2 border-success50 text-center px-10 py-4 rounded-full flex-1`}>Hentikan Program</p>
                            </div>
                        </div>
                        <div className="flex justify-center mt-8">
                            <button type="submit" className={`${fontType["button"]} bg-primary50 text-white py-4 px-32 rounded-full text-center mr-7`}>
                                Simpan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default DetailProgramCompany