import { cardSize } from "../../../../components/Cards/cards"
import { fontType } from "../../../../components/Text/Text"
import { listCompany } from "./listCompany"

const Section4 = () => {
    return (
        <div className="min-h-[50vh] mt-[8em]">
            <div className="flex">
                <p className={`${fontType["h1"]} ml-10 w-5/12`}>Perusahaan Paling Diminati</p>
                <div></div>
            </div>
            <div className=" pl-10 flex w-full gap-3 overflow-x-auto mt-[2em]">
                {listCompany.map(item => {
                    return (
                        <div className={`${cardSize["md"]} flex flex-col`}>
                            <img src={item.header} className="w-9/12 mt-4" alt="" />
                            <p className={`${fontType["h4"]}`}>{item.job}</p>
                            <p className="">{item.loc}</p>
                            <div>
                                {item.tag.map(item => {
                                    return <span>{item}</span>
                                })}
                            </div>
                            <div className="h-8 w-10/12 bg-white self-center rounded-full text-[#1B45AB] border-[#1B45AB] border-2 px-14 py-1">
                                Lihat Detail
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Section4