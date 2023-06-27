import { listCompany } from "../LandingPage/Section4/listCompany";
import { fontType } from "../../components/Text/text";
const AcceptedHistory = () => {
    return (
        <>
            {listCompany.map(item => {
                return (
                    <div key={item.key} className="bg-white w-10/12 lg:w-5/12 min-h-[20vh] rounded-3xl px-7 py-9 flex flex-col gap-8 shadow-[5px_5px_10px_rgba(0,0,0,0.05)]">
                        <div className="flex 1 ">
                            <img src={item.url} />
                            <p className={`${fontType["h1"]} ml-5`}>{item.name}</p>
                        </div>
                        <div className="flex flex-col xl:flex-row justify-between">
                            <div>
                                <p className={`${fontType["h4"]}`}>{item.job}</p>
                                <p className={`${fontType["p1"]} text-neutral30`}>{item.loc}</p>
                            </div>
                            <div className="flex gap-2 mt-3">
                                {item.education.map((tag) => {
                                    return (
                                        <p key={tag} className="bg-warning10 text-warning90 py-1 px-5 rounded-full  h-max">
                                            {tag}
                                        </p>
                                    );
                                })}
                            </div>
                        </div>
                        <p className={`${fontType["h4"]}`}>Deskripsi</p>
                        <p className={`${fontType["p1"]} text-neutral50 text-justify`}>{item.deskripsi}</p>
                    </div>
                )
            })}
        </>
    )
}

export default AcceptedHistory