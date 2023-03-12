import LayoutCompany from "../../components/Layout/LayoutCompany"
import { fontType } from "../../components/Text/text"
import { listCompany } from "../../container/LandingPage/Section4/listCompany"
import edit from "../../assets/icons/edit.svg"
import remove from "../../assets/icons/remove.svg"
import { useState } from "react"
import DeleteProgram from "../../components/PopUp/DeleteProgram"
import { useNavigate } from "react-router-dom"
const ProgramCompany = () => {
    const navigate = useNavigate();
    const [isRemove, setIsRemove] = useState(false)
    return (
        <LayoutCompany>
            <div className="mt-5 mx-12 flex justify-between items-center">
                <p className={`${fontType["h1"]}`}>Program</p>
                <p className={`${fontType["button"]} bg-primary50 text-white px-8 sm:px-16 py-2 rounded-full align-middle text-justify cursor-pointer`}
                    onClick={() => {
                        navigate('/detail-program-company')
                    }}>
                    <span className="text-2xl">+</span> Tambah
                </p>
            </div>
            <div className="flex flex-col mx-12 mt-5 gap-3 mb-16">
                {listCompany.map(item => {
                    return (
                        <div key={item.name} className="flex flex-col md:flex-row justify-between bg-white rounded-xl md:pl-5 py-7 gap-2">
                            <div className="w-11/12 md:w-8/12 flex flex-col ml-5">
                                <div className="flex items-center">
                                    <img src={item.logo} />
                                    <p className={`${fontType["h1"]} ml-3`}>{item.name}</p>
                                </div>
                                <p className={`${fontType["h5"]} text-neutral50 mt-4`}>Kami mencari Desainer Grafis untuk bergabung dengan tim kami yang terus berkembang. Kandidat yang ideal akan memiliki keterampilan kreatif yang kuat dan portofolio pekerjaan yang menunjukkan hasrat mereka terhadap desain dan pembuatan konten.</p>
                            </div>
                            <div className="w-full md:w-3/12 flex md:flex-col mt-5 gap-3 justify-center items-end mr-10">
                                <button className={`${fontType["button"]} bg-warning30 w-[10rem] py-3 rounded-xl flex justify-center items-center gap-5`}>
                                    <img src={edit} className="mr-3" />
                                    <p>Edit</p>
                                </button>
                                <button className={`${fontType["button"]} bg-danger30 w-[10rem] py-3 rounded-xl flex justify-center items-center gap-5`}
                                    onClick={() => {
                                        setIsRemove(true)
                                    }}>
                                    <img src={remove} />
                                    <p className="text-white">Hapus</p>
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
            {isRemove && <DeleteProgram setIsRemove={setIsRemove} />}
        </LayoutCompany>
    )
}

export default ProgramCompany