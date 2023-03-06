import { cardSize } from "../components/Cards/cards"
import Layout from "../components/Layout/Layout"
import { fontType } from "../components/Text/Text"

const Program = () => {
    return (
        <Layout>
            <div className="ml-10 h-[120vh] gap-10 flex mt-10">
                <div className="w-3/12 bg-slate-400 rounded-3xl h-[95%]"></div>
                <div className="w-9/12">
                    <div className="h-[2em] w-11/12 bg-slate-300 rounded-full"></div>
                    <p className={`${fontType["h1"]}`}>Lorem Ipsum</p>
                    <div className="flex w-full gap-3 overflow-x-auto mt-[2em]">
                        <div className={`${cardSize["md"]}`}></div>
                        <div className={`${cardSize["md"]}`}></div>
                        <div className={`${cardSize["md"]}`}></div>
                        <div className={`${cardSize["md"]}`}></div>
                        <div className={`${cardSize["md"]}`}></div>
                        <div className={`${cardSize["md"]}`}></div>
                        <div className={`${cardSize["md"]}`}></div>
                    </div>
                    <div className="my-9">
                        <p className={`${fontType["h1"]}`}>Lorem Ipsum</p>
                    </div>
                    <div className="h-[12.5em] w-11/12 bg-slate-300 rounded-xl"></div>
                </div>
            </div>
        </Layout>
    )
}

export default Program