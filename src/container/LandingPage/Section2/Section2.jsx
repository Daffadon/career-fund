import { fontType } from "../../../components/Text/Text"
import { row1,row2 } from "./image"
const Section2 = () => {
    return (
        <div className="mt-[10em] flex justify-center items-center flex-col text-center">
            <div className="w-6/12 flex justify-center items-center mb-24">
                <p className={`${fontType["h1"]}`}>Perusahaan yang sudah bekerja sama dengan kami</p>
            </div>
            <div>
                <div className="scrolledItem flex w-full gap-3 overflow-x-auto mt-[1em]">
                    {row1.map(item=>{
                        return <img key={item.key} src={item.img} alt="" />
                    })}
                </div>
            </div>
            <div>
                <div className="scrolledItem flex w-full gap-3 overflow-x-auto mt-[1em]">
                {row2.map(item=>{
                        return <img key={item.key} src={item.img} alt="" />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Section2