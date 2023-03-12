import { useState } from "react";
import { fontType } from "../../components/Text/text";
import { listProgram } from "../../container/Program/program";
import DropdownJurusan from "../../components/Dropdown/DropdownJurusan";
import { school } from "../../container/account/account";
import CheckBox from "../../components/CheckBox/CheckBox";
const DetailProgramCompany = ({ setIsAdd }) => {
    const [jurusan, setJurusan] = useState("");
    const [addPorgram, setAddProgram] = useState({
        // posisi
    })

    const addNewProgram = () => {

    }
    return (
        <form onSubmit={addNewProgram}>
            <div className="flex justify-center items-center">
                <div className="bg-white rounded-2xl w-[40rem] py-10">
                    <div className="flex justify-center flex-col gap-4 px-8 overflow-auto">
                        <label htmlFor="posisi" className={`${fontType["h4"]}`}>
                            Posisi
                        </label>
                        <input
                            className="rounded-full px-3 py-2 border-none bg-[#F9F9F9]"
                            type="text"
                            placeholder="Posisi"
                            name="posisi"
                            // value={addPorgram}
                            onChange={(e) => {
                            }}
                            required
                        />
                        <div className="flex">
                            <div className="w-6/12">
                                <p className={`${fontType["h4"]}`}>Pendidikan Terakhir</p>
                                <CheckBox item={school} />
                            </div>
                            <div className="w-6/12">
                                <p className={`${fontType["h4"]}`}>Tingkatan</p>
                                <CheckBox item={
                                    ["D3", "S1"]
                                } />
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
                            required
                        />
                        <div>
                            <p className={`${fontType["h4"]}`}>Jurusan</p>
                            <DropdownJurusan
                                options={listProgram}
                                selectedOption={"ilmu Komputer"}
                                setJurusan={setJurusan}
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