import Layout from "../../components/Layout/Layout"
import Section1 from "./Section/Section1/Section1"
import Section2 from "./Section/Section2/Section2"
import Section3 from "./Section/Section3/Section3"
import Section4 from "./Section/Section4/Section4"
import Section5 from "./Section/Section5"

const LandingPage = () => {
    return (
        <Layout>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
        </Layout>
    )
}

export default LandingPage