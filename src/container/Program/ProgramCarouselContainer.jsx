import { fontType } from "../../components/Text/text"
import loop from "../../assets/icons/loop.svg"
import { card } from "../../components/Card/card"
import { useNavigate } from "react-router-dom"
const ProgramCarouselContainer = ({ listProgram }) => {
    const navigate = useNavigate()
    console.log(listProgram)
    return (
        <>
            <div className="flex justify-center items-center">
                <img src={loop} className="relative left-10	" />
                <input
                    type="text"
                    className="w-full rounded-full px-16 border-none"
                    placeholder="Search" />
            </div>
            <div className="mt-10 ml-10 flex flex-wrap justify-center items-center gap-5">
                {listProgram.interns.map(item => {
                    return (
                        <div key={item.id} className=" flex-nowrap">
                            <div className={`${card["program"]} py-5 px-5`}>
                                <div className="flex items-center mb-6">
                                    <img src={item.url} alt={item.company} />
                                    <p className={`${fontType["h2"]} ml-2`}>
                                        {item.company}
                                    </p>
                                </div>
                                <p className={`${fontType["h4"]}`}>
                                    {item.title}
                                </p>
                                <p className={`${fontType["p3"]} text-neutral30 mt-1`}>
                                    {`${item.city}, ${item.region}`}
                                </p>
                                <div className="flex gap-1 mt-5">
                                    {item.education.map((tag) => {
                                        return (
                                            <p key={tag} className="bg-warning10 text-warning90 py-1 px-3 rounded-full">
                                                {tag}
                                            </p>
                                        );
                                    })}
                                </div>
                                <div onClick={() => { navigate(`${item.company}${item.title}`, { state: item }) }}
                                    className="text-center bg-primary50 text-white rounded-full py-2 mt-8 cursor-pointer hover:bg-white hover:border-primary50 border-2 hover:text-primary50">
                                    Detail
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ProgramCarouselContainer