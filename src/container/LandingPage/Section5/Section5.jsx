import { fontType } from "../../../components/Text/text"

const Section5 = () => {
    return (
        <div className="mt-[8em] min-h-[100vh] bg-slate-400 flex items-center">
            <div className="w-6/12 ml-10">
                <p className={`${fontType["h1"]} w-5/12`}>Lorem ipsum dolor sit, amet consectetur</p>
                <p className={`${fontType["p"]} w-7/12 mt-[2em]`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus nam atque provident voluptatibus quos iusto aut at distinctio itaque iure inventore voluptatum cum officia repudiandae dignissimos assumenda, qui quidem iste!</p>
            </div>
        </div>
    )
}

export default Section5