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
                {listCompany.map(item=>{
                    return(
                        <div className={`${cardSize["md"]}`}></div>
                    ) 

                })}
            </div>
        </div>
    )
}

export default Section4