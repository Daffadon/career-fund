import { useLocation, Link, useNavigate } from "react-router-dom"
import { useRef, useState } from "react"
import exit from "../../assets/icons/exit.svg"
import { fontType } from "../../components/Text/text"
import cvIcon from "../../assets/icons/cvicon.svg"
import dana from "../../assets/LandingPage/Dana.svg"
import edit from "../../assets/icons/edit.svg"
import file from "../../assets/icons/file.svg"
import AddFund from "../../components/PopUp/AddFund"
const FundDetail = () => {
    const funded = useLocation().state
    const navigate = useNavigate()
    const [showAddFund, setShowAddFund] = useState(false);
    const kontrakUpload = useRef()
    const handlechange = e => {
        const file = e.target.files[0]
        // uploadcv to database
    }
    const uploadTemplateKontrakKerja = () => {
        kontrakUpload.current.click()
    }
    return (
        <div className="flex h-screen justify-center items-center">
            <div className=" w-6/12 h-max bg-white flex flex-col py-5 px-7 gap-8  rounded-3xl">
                <div className="flex justify-between">
                    <div className="flex gap-3 items-center">
                        <img src={funded.foto} className="w-3/12" />
                        <p className={`${fontType["h2"]}`}>{funded.nama}</p>
                    </div>
                    <img src={exit} className="cursor-pointer" onClick={() => {
                        navigate('/fund')
                    }} />
                </div>
                <p className={`${fontType["button"]} px-8 py-2 rounded-lg w-max bg-primary50 text-white`}
                    onClick={() => {
                        setShowAddFund(true)
                    }}
                >+ Tambah</p>
                <div className="flex gap-8">
                    <div className="w-1/4 flex flex-col gap-5">
                        <div className="flex flex-col xl:flex-row justify-between">
                            <div>
                                <p className={`${fontType["h4"]}`}>{funded.posisi}</p>
                                <p className={`${fontType["p1"]} text-neutral30`}>{funded.alamat}</p>
                            </div>
                        </div>
                        <div>
                            <p className={`${fontType["h4"]}`}>Kontrak Kerja</p>
                            <div className="flex gap-3 items-center mt-3">
                                <img src={cvIcon} />
                                <Link to="/src/assets/File/kontrak.pdf" download className={`${fontType["p1"]}`} target="_blank">
                                    Kontrak Kerja.pdf
                                </Link>
                            </div>
                        </div>
                        <p className={`${fontType["h4"]}`}>Unggah Kontrak Kerja</p>
                        <div className="h-[20vh] w-12/12 rounded-lg border-2 border-[#D1D5DC] border-dashed flex flex-col justify-center items-center">
                            <p className={`${fontType["p1"]} text-neutral50`}>Unggah disini</p>
                            <p className={`${fontType["button"]} bg-primary50 text-white mt-3 px-4 py-1 rounded-lg cursor-pointer`} onClick={
                                uploadTemplateKontrakKerja
                            }>Choose File</p>
                            <input type="file"
                                className="hidden"
                                onChange={handlechange}
                                accept="application/pdf"
                                ref={kontrakUpload} />
                        </div>
                    </div>
                    <div className="w-3/4">
                        {funded.semester.map(smt => {
                            return (
                                <>
                                    <p key={smt.key} className={`${fontType["h4"]}`}>{smt.nama}</p>
                                    <div className="flex">
                                        <div className="flex gap-3 mt-4 items-center justify-center lg:justify-start w-8/12">
                                            <img src={dana} className="rounded-full w-1/12" />
                                            <div className="flex flex-col justify-center w-3/4 md:w-1/2 gap-2">
                                                <p className={`${fontType["h4"]}`}>Biaya</p>
                                                <p className={`${fontType["p1"]}`}>RP{smt.biaya}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center gap-5">
                                            <img src={edit} className="" />
                                            <p className="bg-primary50 w-max h-max text-white px-8 py-2 rounded-xl text-center">Kirim Uang</p>
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        {smt.prequisite.map(pre => {
                                            return (
                                                <div className="flex mt-4 items-center justify-around">
                                                    <p >{pre.nama}</p>
                                                    <div className="flex gap-5">
                                                        <img src={file} alt="" />
                                                        <p>{pre.cv}</p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
                {showAddFund && <AddFund personToAdd={funded} setIsShow={setShowAddFund} />}
            </div>
        </div>
    )
}

export default FundDetail