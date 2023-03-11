import { Accordion } from "flowbite-react"
import { fontType } from "../../components/Text/text"
import { faq } from "./faq"
const AccordionFaq = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-start mt-20 mb-20">
            <div className="w-full lg:w-6/12">
                <p className={`${fontType["h1"]} text-center`}>Pertanyaan Umum</p>
            </div>
            <div className="w-full md:w-10/12 lg:w-5/12 mt-10">
                <Accordion flush={true} alwaysOpen={true}>
                    {faq.map(item => {
                        return (
                            <Accordion.Panel key={item.key}>
                                <Accordion.Title>
                                    <p className={`${fontType["h3"]} text-neutral90`}>
                                        {item.question}
                                    </p>
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className={`${fontType["p1"]} text-justify`}>{item.answer}</p>
                                </Accordion.Content>
                            </Accordion.Panel>
                        )
                    })}
                </Accordion>
            </div>
        </div>
    )
}

export default AccordionFaq