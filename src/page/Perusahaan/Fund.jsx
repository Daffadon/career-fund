import LayoutCompany from "../../components/Layout/LayoutCompany"
import { listRegistrar } from "../../container/Registrar/listRegistrar"
import { fontType } from "../../components/Text/text"
import { useState } from "react"

const Fund = () => {
    const [showDetail, setShowDetail] = useState(false)
    return (
        <LayoutCompany>
            <div className="ml-10 mr-12 h-[5vh] bg-white rounded-xl flex justify-around items-center py-10">
                <p className={`${fontType["h4"]} flex-1 text-center`}>Nama Peserta</p>
                <p className={`${fontType["h4"]} flex-1 text-center`}>Posisi</p>
                <p className={`${fontType["h4"]} flex-1 text-center`}>Biaya</p>
            </div>
            {listRegistrar.map(item => {
                return (
                    <div key={item.nama} className="ml-10 mr-12 h-[5vh] bg-white rounded-xl flex justify-around items-center mt-4 py-8 relative">
                        <p className={`${fontType["h5"]} xl:flex-1 text-center`}>{item.nama}</p>
                        <p className={`${fontType["h5"]} xl:flex-1 text-center`}>{item.posisi}</p>
                        <p className={`${fontType["h5"]} hidden xl:block xl:flex-1  text-center`}>80.000.000</p>
                        <p className={`${fontType["button"]} text-center xl:absolute xl:right-7 bg-warning30 px-10 py-2 rounded-xl cursor-pointer`}
                            onClick={() => {
                                setShowDetail(true);
                            }}>Detail</p>
                        {/* {showDetail && <CompanyDetailRegistrar setShowDetail={setShowDetail} />} */}
                    </div>
                )
            })}
        </LayoutCompany>
    )
}

export default Fund