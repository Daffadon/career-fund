import LayoutUser from "../../components/Layout/LayoutUser"
import Section1 from "../../container/LandingPage/Section1/Section1"
import Section2 from "../../container/LandingPage/Section2/Section2"
import Section3 from "../../container/LandingPage/Section3/Section3"
import Section4 from "../../container/LandingPage/Section4/Section4"
import Section5 from "../../container/LandingPage/Section5/Section5"
import Advertisement from "../../container/LandingPage/Section6/Advertisement"

const Home = () => {
    return (
        <LayoutUser>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
        </LayoutUser>
    )
}

export default Home