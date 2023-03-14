import { fontType } from "../Text/text"
import exit from "../../assets/icons/exit.svg"
import cvIcon from "../../assets/icons/cvicon.svg"
import deletecv from "../../assets/icons/deletecv.svg"
import { useRef } from "react"
const UploadCV = ({setShowCvForm}) => {
    const cvUpload = useRef()
    const registrarUploadCv = () => {
        cvUpload.current.click()
    }
    const handlechange = e => {
        const file = e.target.files[0]
        // uploadcv to database
    }

    return (
        <div className="fixed left-0 right-0 bottom-0 top-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
            <div className="bg-white rounded-2xl w-[22rem] sm:w-[26rem] py-10 flex flex-col">
                <div className="flex flex-col items-center justify-between px-8 gap-7">
                    <div className="w-full flex justify-between">
                        <p className={`${fontType["h2"]}`}>Unggah CV</p>
                        <img src={exit} className="w-1/12 cursor-pointer" onClick={()=>{
                            setShowCvForm(false)
                        }} />
                    </div>
                    <div className="w-full flex justify-between">
                        <div className="flex justify-center items-center">
                            <img src={cvIcon}  />
                            <p className={`${fontType["p1"]} ml-3`}>CV.pdf</p>
                        </div>
                        <img src={deletecv} className="w-1/12 cursor-pointer" />
                    </div>
                    <div className="h-[20vh] w-full rounded-lg border-2 border-[#D1D5DC] border-dashed flex flex-col justify-center items-center">
                        <p className={`${fontType["p1"]}`}>Unggah disini</p>
                        <p className={`${fontType["button"]} bg-primary50 text-white mt-3 px-4 py-1 rounded-lg cursor-pointer`} onClick={
                            registrarUploadCv
                        }>Choose File</p>
                        <input type="file"
                            className="hidden"
                            onChange={handlechange}
                            accept="application/pdf"
                            ref={cvUpload} />
                    </div>
                    <p className=" w-full bg-primary50 text-white text-center py-2 rounded-full cursor-pointer">Simpan</p>
                </div>
            </div>
        </div>
    )
}

export default UploadCV