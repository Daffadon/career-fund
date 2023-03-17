import { fontType } from "../../../components/Text/text"
const Section2 = ({ data }) => {
    return (
        <div className="mt-[10em] flex justify-center items-center flex-col text-center">
            <div className="w-10/12 md:w-8/12 lg:w-6/12 flex justify-center items-center mb-24">
                <p className={`${fontType["h1"]}`}>Perusahaan yang sudah bekerja sama dengan kami</p>
            </div>
            <div>
                <div className="flex flex-wrap justify-center w-full gap-3  mt-[2em]">
                    {data.slice(0, 4).map(item => {
                        return <img key={item.name} src={item.url_icon} alt="" />
                    })}
                </div>
                <div className=" flex flex-wrap justify-center w-full gap-3  mt-[2em]">
                    {data.slice(4, 8).map(item => {
                        return <img key={item.name} src={item.url_icon} alt="" />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Section2