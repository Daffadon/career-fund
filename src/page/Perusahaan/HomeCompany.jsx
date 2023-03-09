import LayoutCompany from "../../components/Layout/LayoutCompany"
import { fontType } from "../../components/Text/text"
import dana from "../../assets/Program/Dana.svg"
import peserta from "../../assets/Program/peserta.svg"
import { listProgram } from "../../container/HomeCompany/listProgram"
import fotoProgram from "../../assets/Program/Facebook WC.svg"

const HomeCompany = () => {
    return (
        <LayoutCompany>
            <div className="ml-10">
                <p className={`${fontType["h1"]}`}>Dashboard</p>
                <div className="flex gap-5">
                    <div className="flex flex-col mt-10 bg-white w-3/12 rounded-[20px] shadow-[5px_5px_10px_rgba(0,0,0,0.05)] px-7 py-10">
                        <div className="flex items-center">
                            <img src={dana} />
                            <p className={`${fontType["h5"]} w-7/12 ml-5`}>Jumlah Dana yang Dikeluarkan</p>
                        </div>
                        <div className={`${fontType["h2"]} mt-4`}>
                            Rp 80.000.000
                        </div>
                    </div>
                    <div className="flex flex-col mt-10 bg-white w-3/12 rounded-[20px] shadow-[5px_5px_10px_rgba(0,0,0,0.05)] px-7 py-10">
                        <div className="flex items-center">
                            <img src={peserta} />
                            <p className={`${fontType["h5"]} w-7/12 ml-5`}>Peserta Program Yang Didanai</p>
                        </div>
                        <div className={`${fontType["h2"]} mt-4`}>
                            190 Orang
                        </div>
                    </div>
                </div>
            </div>
            <div className="ml-10 mt-10">
                <p className={`${fontType["h1"]}`}>Program</p>
                <div className="flex gap-3 flex-wrap">
                    {listProgram.map(item => {
                        return (
                            <div key={item.nama} className="flex flex-col mt-10 bg-white w-[28rem] rounded-[20px] shadow-[5px_5px_10px_rgba(0,0,0,0.05)] px-7 py-10">
                                <div className="flex items-center">
                                    <img src={fotoProgram} />
                                    <div>
                                        <p className={`${fontType["h5"]} ml-5`}>Jumlah Pendaftar</p>
                                        <p className={`${fontType["p1"]} ml-5 text-neutral50`}>{item.nama}</p>
                                    </div>
                                </div>
                                <div className={`${fontType["h2"]} mt-6`}>
                                    {`${item.jumlah} orang`}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </LayoutCompany>
    )
}

export default HomeCompany